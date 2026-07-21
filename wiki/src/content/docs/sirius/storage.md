---
title: Storage
description: How Sirius partitions disks, with automatic whole-disk setup and optional encryption, or manual partition-by-partition editing.
sidebar:
  order: 3
---

The storage page is one screen, designed to fit without scrolling. At the
top, the **Destination disk** group lists every disk Sirius found as a
selectable row (model, device path, size, and partition-table type) with a
radio button on each. Disks currently in use (like the live boot media) are
filtered out, so you won't accidentally point the installer at the USB drive
you're booted from.

Once a disk is selected, the **Partitioning** group appears below it with two
radio options, *Automatic partitioning* and *Manual partitioning*, each with
a one-line description of what it does.

Nothing described below writes anything to disk until you confirm the install
and reach the progress page. Everything on this screen, automatic or manual,
is staged first.

## Automatic partitioning

This is the default. With *Automatic partitioning* selected, Sirius erases
the selected disk and partitions it for you, following the layout defined by
the distro's `repart.d` config (see
[Adapting Sirius](../adapting/) if you're setting that up). An inline
warning under the options reminds you that all data on the disk will be
erased.

An **Encryption** group offers two switches on top of that:

- **Full-disk encryption (LUKS)**: the whole partitioned layout is
  encrypted.
- **TPM binding**: binds the encryption key to the machine's TPM, so a
  trusted boot chain unlocks the disk automatically. No passphrase prompt on
  every boot. Only available when LUKS encryption is on.

## Manual partitioning

Select *Manual partitioning* and the page offers a **Volumes and partitions**
row that opens the partition editor, a dedicated dialog with two views of
the selected disk:

- **Disk-usage map**: a colored bar showing the disk's layout, each segment
  sized proportionally and colored by filesystem (EFI, ext4, btrfs, XFS,
  swap, NTFS, and unallocated space all get distinct colors), so neighboring
  partitions stay visually separate. Segments queued for deletion are dimmed.
- **Volumes and partitions list**: every partition on the disk with its
  device, filesystem, mount point, and size, with round edit and delete
  buttons next to each one. Free space shows up as its own row, with a button
  to create a new partition inside it. Partitions you've staged show up
  highlighted.

Plan validation errors (for example, a missing root partition) appear right
above the list, so you can't miss them. The same validation also gates
the installer's Next button on the main page once you close the editor.

A **Discard changes** button appears in the editor's header area whenever you
have staged edits, resetting the plan back to the disk's actual current
layout in case you want to start over before confirming.

:::note[Current limitation]
Manual mode supports creating, formatting, and deleting partitions, but not
resizing or moving existing ones. If you need to shrink an existing partition
to make room, do that with another tool first (for example from a separate
live session) before running Sirius. This is a known gap, tracked in the
Sirius repository's `docs/GAPS.md`.
:::
