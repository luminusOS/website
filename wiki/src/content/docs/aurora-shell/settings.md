---
title: Settings
description: Every Aurora Shell setting, grouped by module, and how to change it with gsettings.
sidebar:
  order: 2
---

All Aurora Shell settings live in one GSettings schema. This page covers how
to read and change them from the command line, then lists every option key
grouped by module. For the module list and the preferences window, see
[What is Aurora Shell](../overview/).

## Settings via gsettings

The schema id is:

```text
org.gnome.shell.extensions.aurora-shell
```

The compiled schema is not installed into `/usr/share/glib-2.0/schemas`, so
the `gsettings` tool needs `--schemadir` pointing at the extension's schema
directory. Where that directory is depends on how the extension was
installed:

- LuminusOS Workstation (system-wide install):
  `/usr/share/gnome-shell/extensions/aurora-shell@luminusos.github.io/schemas`
- User install (extensions.gnome.org or `gnome-extensions install`):
  `~/.local/share/gnome-shell/extensions/aurora-shell@luminusos.github.io/schemas`
- Development checkout: `dist/schemas` after `just build`

The examples below use the LuminusOS path. Set it once per shell session:

```bash
SCHEMADIR=/usr/share/gnome-shell/extensions/aurora-shell@luminusos.github.io/schemas
SCHEMA=org.gnome.shell.extensions.aurora-shell
```

List every key with its current value:

```bash
gsettings --schemadir "$SCHEMADIR" list-recursively "$SCHEMA"
```

Read, change, and reset a single key:

```bash
gsettings --schemadir "$SCHEMADIR" get "$SCHEMA" dock-show-trash
gsettings --schemadir "$SCHEMADIR" set "$SCHEMA" dock-show-trash false
gsettings --schemadir "$SCHEMADIR" reset "$SCHEMA" dock-show-trash
```

Reset the whole schema back to factory defaults:

```bash
gsettings --schemadir "$SCHEMADIR" reset-recursively "$SCHEMA"
```

:::tip
Export `GSETTINGS_SCHEMA_DIR="$SCHEMADIR"` once and you can drop the
`--schemadir` flag from every command.
:::

Changes apply immediately; Aurora Shell watches its settings and reacts
live, no logout or Shell restart needed. Toggling a `module-*` key starts or
stops that module on the spot.

## Dock

The dock auto-hides by default and reappears when the pointer hits the
bottom screen edge. `dock-always-show` and `dock-intellihide` switch it to
other modes; if both are off, the default auto-hide applies. If both are on,
`dock-always-show` wins.

| Key | Type | Default | Effect |
| --- | --- | --- | --- |
| `dock-always-show` | boolean | `false` | Keep the dock permanently visible and reserve screen space so windows never overlap it |
| `dock-intellihide` | boolean | `false` | Keep the dock visible until a window overlaps its space |
| `dock-show-on-all-monitors` | boolean | `false` | Show the dock on every eligible monitor, not just the primary one |
| `dock-show-trash` | boolean | `true` | Show a trash icon; click opens the trash, right-click empties it |
| `dock-show-external-storage` | boolean | `true` | Show removable drives in the dock while connected |

## Aurora Menu

| Key | Type | Default | Effect |
| --- | --- | --- | --- |
| `aurora-menu-icon` | string | `'aurora'` | Panel icon: `aurora`, `gnome`, or `luminus` (anything else falls back to `aurora`) |
| `aurora-menu-hide-activities` | boolean | `false` | Hide the Activities button while Aurora Menu is enabled |
| `aurora-menu-show-about` | boolean | `true` | Show the About This PC item |
| `aurora-menu-show-home` | boolean | `true` | Show the Home Folder item |
| `aurora-menu-show-downloads` | boolean | `true` | Show the Downloads item |
| `aurora-menu-show-recent-items` | boolean | `true` | Show the Recent Items submenu |
| `aurora-menu-show-settings` | boolean | `true` | Show the System Settings item |
| `aurora-menu-show-software` | boolean | `true` | Show the Software item |
| `aurora-menu-show-extensions` | boolean | `true` | Show the Extensions item |
| `aurora-menu-app-store-command` | string | `'gnome-software'` | Command launched by the Software item |
| `aurora-menu-custom-items` | string list | `[]` | Extra menu commands, one per entry, in `Label \| Command` format |
| `aurora-menu-custom-item-enabled` | boolean | `false` | Show one additional custom command |
| `aurora-menu-custom-item-label` | string | `''` | Label of the single custom item |
| `aurora-menu-custom-item-command` | string | `''` | Command of the single custom item |

Custom items use a `Label | Command` format, one per list entry. When
`aurora-menu-custom-items` has entries, it takes precedence over the single
`custom-item-*` triple, which is kept for simple setups.

```bash
gsettings --schemadir "$SCHEMADIR" set "$SCHEMA" aurora-menu-custom-items \
  "['Terminal | ptyxis', 'Files | nautilus']"
```

## Meeting Clock

Shows upcoming calendar events next to the panel clock and can alert you
before a meeting starts.

| Key | Type | Default | Effect |
| --- | --- | --- | --- |
| `meeting-clock-alerts-enabled` | boolean | `true` | Notify when a meeting is about to start |
| `meeting-clock-alert-minutes-before` | int (0-60) | `1` | Minutes before start to show the alert |
| `meeting-clock-snooze-minutes` | int (1-60) | `5` | Minutes before a snoozed alert appears again |
| `meeting-clock-alert-events-without-link` | boolean | `false` | Also alert for events without a join link |
| `meeting-clock-panel-reveal-interval-minutes` | int (1-60) | `5` | Minutes between automatic slide-in reveals in the panel |
| `meeting-clock-panel-lookahead-minutes` | int (0-1440) | `60` | How far ahead (minutes) an event may start and still appear next to the clock |
| `meeting-clock-exclude-all-day-events` | boolean | `true` | Ignore all-day events in the clock and alerts |

## Weather Clock

| Key | Type | Default | Effect |
| --- | --- | --- | --- |
| `weather-clock-after-clock` | boolean | `false` | Place the weather indicator after the clock instead of before it |

## Tray Icons

| Key | Type | Default | Effect |
| --- | --- | --- | --- |
| `tray-icons-limit` | int (1-20) | `4` | Icons shown before the expand chevron appears |
| `tray-icons-icon-size` | int (14-24) | `18` | Tray icon size in pixels |
| `tray-icons-attention-timeout` | int (1-30) | `5` | Seconds before the tray auto-collapses after a NeedsAttention event |
| `tray-icons-dedup-bg-apps` | boolean | `true` | Hide the background app entry when the same app already has an SNI icon |
| `tray-icons-hide-bg-quick-settings` | boolean | `true` | Hide the Background Apps section from the Quick Settings dropdown |
| `tray-icons-recolor-symbolic-pixmaps` | boolean | `true` | Recolor monochrome SNI pixmaps to match the panel theme |

## Clipboard History

| Key | Type | Default | Effect |
| --- | --- | --- | --- |
| `clipboard-history-shortcut` | string list | `[]` | Keyboard shortcut to open the panel, in GNOME accelerator format |
| `clipboard-history-auto-paste` | boolean | `true` | Type the selected entry into the previously focused input; needs a Wayland field with text-input-v3 support |
| `clipboard-history-poll-interval` | int (250-5000) | `1000` | How often the clipboard is checked for new content, in milliseconds |

Assign a shortcut with the standard accelerator syntax:

```bash
gsettings --schemadir "$SCHEMADIR" set "$SCHEMA" clipboard-history-shortcut "['<Super>v']"
```

## Capture Tools

Adds a floating annotation toolbar to GNOME's screenshot interface, with
optional local OCR via Tesseract.

| Key | Type | Default | Effect |
| --- | --- | --- | --- |
| `capture-tools-ocr-enabled` | boolean | `true` | Show the OCR action next to the pointer control in the screenshot UI |
| `capture-tools-ocr-languages` | string | `''` | Tesseract language codes joined by `+`; empty uses the session language plus English |
| `capture-tools-web-search-engine` | string | `'duckduckgo'` | Engine for searching recognized text: `google`, `duckduckgo`, or `bing` |
| `capture-tools-color` | string | `'#e01b24'` | Last color picked in the annotation toolbar |
| `capture-tools-stroke-width` | int (1-16) | `4` | Last stroke width picked in the annotation toolbar |

Example for Portuguese plus English OCR:

```bash
gsettings --schemadir "$SCHEMADIR" set "$SCHEMA" capture-tools-ocr-languages 'por+eng'
```

:::note
OCR runs fully on your machine through Tesseract. Install the Tesseract
language data for the codes you list here.
:::

## Privacy

| Key | Type | Default | Effect |
| --- | --- | --- | --- |
| `privacy-dnd-on-share` | boolean | `true` | Enable Do Not Disturb automatically while screen sharing |
| `privacy-panel` | boolean | `true` | Hide panel content during screen sharing; hover to reveal it |

## Vela VPN Quick Settings

Routes VPN toggles in Quick Settings through Vela instead of GNOME Shell's
built-in handling.

| Key | Type | Default | Effect |
| --- | --- | --- | --- |
| `vela-vpn-quick-settings-shell-fallback` | boolean | `false` | Fall back to GNOME Shell's VPN handling when the Vela D-Bus service or control API is unavailable |

## Auto Theme Switcher

Switches between light and dark theme at fixed times of day. The module is
off by default; enable `module-auto-theme-switcher` to use these.

| Key | Type | Default | Effect |
| --- | --- | --- | --- |
| `auto-theme-switcher-light-hours` | int (0-23) | `6` | Hour to switch to the light theme |
| `auto-theme-switcher-light-minutes` | int (0-59) | `0` | Minute to switch to the light theme |
| `auto-theme-switcher-dark-hours` | int (0-23) | `20` | Hour to switch to the dark theme |
| `auto-theme-switcher-dark-minutes` | int (0-59) | `0` | Minute to switch to the dark theme |

Example: light theme at 7:30.

```bash
gsettings --schemadir "$SCHEMADIR" set "$SCHEMA" auto-theme-switcher-light-hours 7
gsettings --schemadir "$SCHEMADIR" set "$SCHEMA" auto-theme-switcher-light-minutes 30
```
