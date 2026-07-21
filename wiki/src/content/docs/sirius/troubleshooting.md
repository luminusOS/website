---
title: Troubleshooting
description: Common Sirius install problems, from polkit authentication to disks that don't show up and RAM requirements.
sidebar:
  order: 5
---

## pkexec fails / install won't start

Sirius's actual disk and bootc work happens in a separate, privileged process
launched with `pkexec` (see
[Overview → privilege model](../overview/#privilege-model)). `pkexec`
needs a polkit authentication agent running in your session, or a polkit rule
that grants the `io.sirius.Installer.run-playbook` action outright. If
neither is present, `pkexec` exits with status **127** and the install can't
proceed.

On the LuminusOS live ISO this is already set up for you. If you hit this
while adapting Sirius for another environment, make sure a polkit agent is
running before Sirius launches the privileged step.

## A disk I expect to see isn't in the picker

The storage page's disk list filters out disks that are currently in
use, most commonly the USB drive or ISO you're booted from. That's
intentional: it stops you from accidentally partitioning the media you're
running the installer off of. If a disk you expect is missing, check that
it isn't mounted or otherwise in use by the live session.

## Why does install need so much RAM?

LuminusOS's live ISO runs entirely from RAM; the root filesystem is a
tmpfs. During install, `bootc install to-filesystem` stages a copy of the
compressed container image (the OS itself, several gigabytes) into a
temporary directory (`image_copy_tmp_dir`, currently `/var/tmp`). On the live
ISO, `/var/tmp` is *also* RAM-backed tmpfs, sized to 75% of total RAM
specifically to leave room for this staging step.

So peak memory during install is roughly: the live session's own overhead,
plus the full staged copy of the image being installed. That's why
LuminusOS's shipped Workstation installer config raises `min_ram_gib` to `5`
(see [Diagnostics → require vs. warn](../diagnostics/#require-vs-warn)),
well above Sirius's own default of `2`. Real-world testing showed that a
laptop advertised as having "6 GB" of RAM often reports closer to 5.7 GiB
*usable* to the OS once firmware and hardware reservations are subtracted,
so the threshold needs headroom to actually mean what it says.

:::note[Planned improvement]
This isn't implemented yet, but the LuminusOS project is tracking it as
future work: redirecting that staging temp directory to the target disk
(once it's partitioned and mounted) instead of RAM. That would let installs
work with much less physical memory, since the image copy would no longer
compete with the live session for RAM. It requires changes to how bootc's
image-copy tmpdir is configured during the live boot, which isn't done yet.
:::
