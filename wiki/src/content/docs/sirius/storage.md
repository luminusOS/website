---
title: Storage
description: How Sirius partitions disks — automatic whole-disk setup with optional encryption, or manual partition-by-partition editing.
sidebar:
  order: 3
---

The storage page is one screen. At the top, a dropdown lists the disks Sirius
found on the machine — disks currently in use (like the live boot media) are
filtered out, so you won't accidentally point the installer at the USB drive
you're booted from. Under the picker, a colored bar shows that disk's current
partition layout, sized proportionally.

Nothing described below writes anything to disk until you confirm the install
and reach the progress page. Everything on this screen, automatic or manual,
is staged first.

## Automatic partitioning

This is the default. With the "Automatic partitioning" toggle on, Sirius
erases the selected disk and partitions it for you, following the layout
defined by the distro's `repart.d` config (see
[Adapting Sirius](/sirius/adapting/) if you're setting that up). Two options
layer on top:

- **Full-disk encryption (LUKS)** — the whole partitioned layout is
  encrypted.
- **TPM binding** — binds the encryption key to the machine's TPM, so a
  trusted boot chain unlocks the disk automatically. No passphrase prompt on
  every boot.

## Manual partitioning

Turn "Automatic partitioning" off and the screen switches to a manual editor:
an inline list of volumes and partitions shows each partition on the disk —
device, filesystem, mount point, size — with edit and delete buttons next to
each one. Free space shows up as its own row, with a button to create a new
partition inside it.

A "discard changes" option resets any staged edits back to the disk's actual
current layout, in case you want to start over before confirming.

:::note[Current limitation]
Manual mode supports creating, formatting, and deleting partitions, but not
resizing or moving existing ones. If you need to shrink an existing partition
to make room, do that with another tool first (for example from a separate
live session) before running Sirius. This is a known gap, tracked in the
Sirius repository's `docs/GAPS.md`.
:::
