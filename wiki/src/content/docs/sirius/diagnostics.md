---
title: Diagnostics
description: What Sirius checks before letting you install, and how to configure required vs. warning-level checks.
sidebar:
  order: 2
---

Before Sirius lets you touch network, storage, or anything else, it runs a
diagnostics pass over the machine. This is the first wizard page, and it isn't
skippable: if a check listed as required fails, the install can't proceed.

## The checks

| Check | What it looks at |
| --- | --- |
| `uefi` | Whether EFI firmware is present |
| `ram` | Usable RAM against a configured minimum |
| `disk_space` | Enough free space to install |
| `secure_boot` | Whether Secure Boot is enabled |
| `network` | Whether a network connection is available |
| `virt` | Whether the machine is running inside a VM |

## require vs. warn

Each check is either a hard blocker or just a heads-up, configured in
`/etc/sirius/sirius.toml`:

```toml
[diagnostics]
require = ["uefi", "ram", "disk_space"]
warn = ["secure_boot", "network", "virt"]
min_ram_gib = 2
```

- **`require`**: if any of these fail, Sirius blocks the install. On
  LuminusOS that's UEFI firmware, enough RAM, and enough disk space.
- **`warn`**: shown on the diagnostics page but doesn't block anything.
  Secure Boot being on, no network connection, or running inside a VM are all
  worth flagging but not worth stopping the wizard over.
- **`min_ram_gib`**: the RAM threshold the `ram` check uses, in GiB. The
  default in Sirius itself is `2`, but LuminusOS's shipped Workstation image
  config raises it to `5`. See
  [Troubleshooting → why does install need so much RAM](../troubleshooting/#why-does-install-need-so-much-ram)
  for why.

## Page order and disabling pages

The same config file also controls which wizard pages appear and in what
order:

```toml
[pages]
order = ["welcome", "diagnostics", "network", "keyboard", "timezone", "storage", "user", "summary", "progress", "finished"]
disabled = []
```

`order` sets the sequence; anything listed in `disabled` is skipped entirely.
The `network` page additionally auto-hides on its own if NetworkManager
reports no Wi-Fi device on the machine, regardless of what's in `disabled`.
