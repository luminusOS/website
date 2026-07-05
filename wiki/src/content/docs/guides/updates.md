---
title: Updates & rollback
description: How atomic updates work on LuminusOS and how to roll back when needed.
sidebar:
  order: 2
---

LuminusOS updates itself. Images download in the background and apply on the
next reboot, atomically: the update either applies completely or not at all.

## Everyday updates

You do not have to do anything. The system periodically checks the registry,
stages the new image, and switches to it next time you reboot.

Want to update right now?

```sh
sudo bootc upgrade
```

Then reboot when convenient.

## Checking the system state

```sh
bootc status
```

This shows the image you are booted into, the staged update (if any) and the
rollback image kept on disk:

```
● booted:   ghcr.io/luminusos/luminusos-workstation:44
  rollback: 44.20260528
```

## Rolling back

The previous version of the system stays on disk as a bootable entry. If an
update misbehaves:

1. Reboot.
2. In the boot menu, pick the previous entry.
3. You are back exactly where you were. Your files and Flatpak apps are
   untouched, they live outside the system image.

You can also roll back from a running system:

```sh
sudo bootc rollback
```

## Why it cannot half-break

The core OS is read-only and versioned like a container image. There is no
package-by-package mutation of a live system, so a power cut or a bad
download can never leave you with a partially updated machine.
