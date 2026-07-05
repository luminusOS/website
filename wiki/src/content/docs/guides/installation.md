---
title: Installing LuminusOS
description: Download the ISO, flash a USB drive and install LuminusOS with Sirius.
sidebar:
  order: 1
---

LuminusOS installs like any modern Linux: download an ISO, flash it to a USB
drive, boot and follow the installer. The whole thing takes about 15 minutes.

## 1. Download the ISO

Grab the latest **Workstation** ISO from
[GitHub Releases](https://github.com/luminusOS/images/releases/latest). The
download button on [luminusos.org](https://luminusos.org) always points to the
newest version.

## 2. Flash a USB drive

Use any of these tools. The drive needs at least 8 GB and **will be erased**.

- [Fedora Media Writer](https://flathub.org/apps/org.fedoraproject.MediaWriter) (recommended)
- GNOME Disks ("Restore Disk Image…")
- [balenaEtcher](https://etcher.balena.io/)

## 3. Boot from the USB drive

Reboot with the drive plugged in and pick it in your firmware's boot menu
(usually <kbd>F12</kbd>, <kbd>F10</kbd> or <kbd>Esc</kbd> right after power
on). Disable Secure Boot if your firmware refuses to boot the drive.

## 4. Follow Sirius

Sirius is the LuminusOS installer. Before touching anything it runs a
hardware compatibility check, then walks you through:

1. Network, keyboard layout and time zone
2. Destination disk (the disk **will be erased**, and Sirius asks you to
   confirm before anything happens)
3. Optional full-disk encryption (LUKS), with optional TPM binding

When the progress bar finishes, reboot and remove the USB drive.

## 5. First boot

GNOME Initial Setup greets you to create your user account. After that you
land on a ready-to-use desktop with Aurora Shell enabled. Done.

:::note[Something went wrong?]
If the install fails, Sirius shows the full install log right on the failure
screen. Copy it and [open an issue](https://github.com/luminusOS/images/issues),
it helps us a lot.
:::
