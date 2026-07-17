---
title: Adapting Sirius to another distro
description: How to point Sirius at a different bootc image, partition layout and branding with distro.toml.
sidebar:
  order: 4
---

Sirius doesn't hardcode LuminusOS anywhere. What image gets installed, how the
disk gets partitioned, and how the installer is branded are all controlled by
one config file: `/etc/sirius/distro.toml`. A distro packaging Sirius ships
its own copy of this file.

## Reference

```toml
[bootc]
image = "ghcr.io/example/os:latest"
# Optional bootc install controls:
# target_imgref = "ghcr.io/example/os:latest"
# enforce_sigpolicy = false
# kargs = ["rhgb", "quiet"]
# args = ["--skip-fetch-check"]

[disk]
repart_dir = "/usr/share/sirius/repart.d"

# Optional: up to three link cards shown on the install progress page
# [[bento]]
# title = "Welcome to Example OS"
# desc = "Learn more about the project"
# link = "https://example.com"
# icon = "explore-symbolic"

# Optional: welcome-page branding. `logo` (image path) wins over `icon` (themed icon name).
# [branding]
# logo = "/usr/share/sirius/logo.png"
# icon = "starred-symbolic"
```

- **`[bootc] image`** — the container image `bootc install` deploys.
  Required.
- **`target_imgref`**, **`enforce_sigpolicy`**, **`kargs`**, **`args`** —
  passed through to `bootc install` for cases where the deployed image
  reference differs from the source image, signature policy needs relaxing,
  or you need extra kernel/install arguments.
- **`[disk] repart_dir`** — where Sirius looks for the partition layout, see
  below.
- **`[[bento]]`** — up to three optional link cards shown on the install
  progress page (title, description, link, icon).
- **`[branding]`** — the welcome page's logo or icon. `logo` (an image path)
  takes priority over `icon` (a themed icon name) if both are set.

## Partition layout: repart.d

`repart_dir` points at a directory of `systemd-repart` partition-definition
`.conf` files. These define the layout Sirius's automatic partitioning mode
creates (see [Storage](/sirius/storage/)). LuminusOS ships two, as an example
to build from: `10-esp.conf` (the EFI system partition) and `20-root.conf`
(the root partition).

:::caution[MountPoint options are raw kernel mount options]
Anything after the `:` in a repart config's `MountPoint=` line is passed
**raw** to the `mount(2)` syscall by the underlying library. Only real kernel
mount options work there — userspace keywords like `defaults`, `auto`, or
`nofail` (the kind you'd put in `/etc/fstab`) are **not** understood by
`mount(2)` and will make the mount fail with `EINVAL`. Stick to actual
kernel-level options.
:::

## Runtime requirements

Sirius expects these tools to be present on the live/target system:

- `systemd-repart`
- `bootc`
- `cryptsetup` (for encrypted installs)
- `pkexec` / polkit
- `mount`
- `lsblk`
- `udisks2`
- `NetworkManager`

A polkit authentication agent needs to be running in the session (or a polkit
rule granting the `io.sirius.Installer.run-playbook` action outright) —
otherwise `pkexec` fails. See [Troubleshooting](/sirius/troubleshooting/).
