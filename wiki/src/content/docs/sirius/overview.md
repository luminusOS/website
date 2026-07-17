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
specifically — what OS gets installed, what the disk layout looks like, and how
the installer is branded all come from a small config file (`distro.toml`) any
bootc-based distro can ship. See [Adapting Sirius to another distro](/sirius/adapting/)
if that's what brought you here.

For the LuminusOS install flow end-to-end (downloading the ISO, flashing a USB
drive, first boot), see the [installation guide](/guides/installation/). This
section is a deeper look at how Sirius itself works.

## The wizard

Sirius walks you through a fixed set of pages, in an order controlled by
`/etc/sirius/sirius.toml`. The default order is:

1. **Welcome**
2. **Diagnostics** — hardware checks, see [Diagnostics](/sirius/diagnostics/)
3. **Network** (auto-hidden if NetworkManager reports no Wi-Fi device)
4. **Keyboard**
5. **Timezone**
6. **Storage** — disk and partitioning, see [Storage](/sirius/storage/)
7. **User**
8. **Summary**
9. **Progress**
10. **Finished**

Any page in that list can be turned off entirely with a `disabled = [...]` entry
in the same config file — a distro that, say, always uses DHCP and doesn't need
a network page can just disable it.

## Privilege model

Sirius's UI runs as an ordinary, unprivileged process. It never touches disks,
partitions, or the bootc image directly. When you confirm the install on the
summary page, the UI launches a separate, privileged process — `sirius
run-playbook` — via `pkexec`, authorized by the polkit action
`io.sirius.Installer.run-playbook`. That privileged process is the only part of
Sirius that actually writes to disk.

This split means the GTK4/libadwaita interface you interact with the whole time
never runs as root. Only the narrow, scriptable playbook step does, and only
after you've confirmed you want the install to happen.

## Diagnostic-first, not diagnostic-only

Most installers let you configure everything and only discover a blocking
problem (not enough RAM, no EFI firmware, whatever) when the install itself
fails partway through. Sirius runs its hardware checks as literally the first
wizard page, before network, storage, or anything else — so a machine that
can't take the install tells you that immediately, instead of after you've
spent ten minutes picking disk layouts.

## Command line

Outside the wizard, Sirius also has CLI entry points useful for scripting and
testing:

- `sirius diag` — runs the diagnostics checks standalone and prints the
  results, without launching the GUI.
- `sirius --dry-run` — walks through the install flow without writing anything
  to disk, useful for validating a `distro.toml`/`repart.d` configuration.
