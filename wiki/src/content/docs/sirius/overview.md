---
title: What is Sirius
description: Sirius is LuminusOS's diagnostic-first, distro-agnostic installer. How its wizard and privilege model work.
sidebar:
  order: 1
---

Sirius is the installer LuminusOS ships on its live ISO. Unlike a typical distro
installer that assumes your hardware will cooperate and only complains when
something breaks, Sirius checks first: before it lets you configure anything, it
runs a hardware diagnostics pass and tells you up front whether the machine you're
on can actually take an install.

It's also distro-agnostic. Sirius itself doesn't know anything about LuminusOS
specifically. What OS gets installed, what the disk layout looks like, and how
the installer is branded all come from a small config file (`distro.toml`) any
bootc-based distro can ship. See [Adapting Sirius to another distro](../adapting/)
if that's what brought you here.

For the LuminusOS install flow end-to-end (downloading the ISO, flashing a USB
drive, first boot), see the [installation guide](../../guides/installation/). This
section is a deeper look at how Sirius itself works.

## The wizard

Sirius walks you through a fixed set of pages, in an order controlled by
`/etc/sirius/sirius.toml`. The default order is:

1. **Welcome**
2. **Language**: every displayable locale on the system, with the common ones
   pinned up front and the rest following in the same scrollable list;
   switching languages re-translates the installer live (English and
   Brazilian Portuguese catalogs ship today)
3. **Diagnostics**: hardware checks, see [Diagnostics](../diagnostics/)
4. **Network** (auto-hidden if NetworkManager reports no Wi-Fi device)
5. **Keyboard**: layouts matching your language pinned up front, followed by
   every other layout in the same scrollable list, with a type-to-test field
6. **Timezone**: search for a city or click the world map; auto-detected from
   the running system and shown with a pin on the map
7. **Storage**: disk and partitioning, see [Storage](../storage/)
8. **User**
9. **Summary**
10. **Progress**
11. **Finished**

Any page in that list can be turned off entirely with a `disabled = [...]` entry
in the same config file. A distro that, say, always uses DHCP and doesn't need
a network page can just disable it.

## Privilege model

Sirius's UI runs as an ordinary, unprivileged process. It never touches disks,
partitions, or the bootc image directly. When you confirm the install on the
summary page, the UI launches a separate, privileged process (`sirius
run-playbook`) via `pkexec`, authorized by the polkit action
`io.sirius.Installer.run-playbook`. That privileged process is the only part of
Sirius that actually writes to disk.

This split means the GTK4/libadwaita interface you interact with the whole time
never runs as root. Only the narrow, scriptable playbook step does, and only
after you've confirmed you want the install to happen.

## Diagnostic-first, not diagnostic-only

Most installers let you configure everything and only discover a blocking
problem (not enough RAM, no EFI firmware, whatever) when the install itself
fails partway through. Sirius runs its hardware checks as literally the first
wizard page, before network, storage, or anything else, so a machine that
can't take the install tells you that immediately, instead of after you've
spent ten minutes picking disk layouts.

## Command line

Outside the wizard, Sirius also has CLI entry points useful for scripting and
testing:

- `sirius diag`: runs the diagnostics checks standalone and prints the
  results, without launching the GUI.
- `sirius --dry-run`: walks through the install flow without writing anything
  to disk, useful for validating a `distro.toml`/`repart.d` configuration.
