---
title: What is Aurora Shell
description: The modular GNOME Shell extension that ships with LuminusOS Workstation.
sidebar:
  order: 1
---

[Aurora Shell](https://aurora.luminusos.org) is a modular GNOME Shell
extension made by the LuminusOS project. It adds the quality-of-life features
missing in vanilla GNOME and ships preinstalled on Workstation. Every feature
is an independent module you can toggle on its own, and everything is stored
in GSettings, so you can configure it from the preferences window or from the
command line.

The extension exposes 69 settings keys: 21 module switches plus 48 per-module
options. The full reference lives in [Settings](../settings/).

## Preferences window

Every setting is exposed in the extension preferences: Extensions app →
Aurora Shell → Settings. The window and `gsettings` write to the same
schema, so you can mix both freely.

## The modules

Each module has a `module-*` boolean key. All modules default to `true`
except Auto Theme Switcher.

| Key | Default | Module |
| --- | --- | --- |
| `module-dock` | `true` | Per-monitor dock with auto-hide, intellihide, and edge reveal |
| `module-aurora-menu` | `true` | Aurora panel menu with recent items and shortcuts |
| `module-volume-mixer` | `true` | Per-app volume sliders in Quick Settings |
| `module-tray-icons` | `true` | System tray with SNI icons and background apps |
| `module-weather-clock` | `true` | GNOME Weather next to the panel clock |
| `module-meeting-clock` | `true` | Next calendar event beside the clock, with reminders |
| `module-clipboard-history` | `true` | Searchable clipboard history with pinning |
| `module-capture-tools` | `true` | Annotation toolbar and local OCR in the screenshot UI |
| `module-privacy` | `true` | Screen sharing privacy features |
| `module-bluetooth-menu` | `true` | Battery levels and animated icons in Bluetooth Quick Settings |
| `module-lock-key-indicators` | `true` | Caps Lock and Num Lock indicators in the panel |
| `module-low-battery-percentage` | `true` | Battery percentage in the panel while below 20% |
| `module-no-overview` | `true` | Skip the overview and boot straight to the desktop |
| `module-pip-on-top` | `true` | Keep Picture-in-Picture windows always on top |
| `module-focus-launched-windows` | `true` | Focus new windows instead of window-ready notifications |
| `module-theme-changer` | `true` | Consistent light/dark color-scheme behavior |
| `module-auto-theme-switcher` | `false` | Scheduled light/dark theme switching |
| `module-xwayland-indicator` | `true` | X11 badge on XWayland apps in the Alt+Tab switcher |
| `module-icon-weave` | `true` | Fix missing app icons automatically, in memory only |
| `module-app-search-tooltip` | `true` | App name tooltips in overview search results |
| `module-vela-vpn-quick-settings` | `true` | Route VPN Quick Settings through Vela |

### Modules without extra settings

These modules only have their `module-*` switch:

- **No Overview** (`module-no-overview`): skips the overview at startup.
- **Pip On Top** (`module-pip-on-top`): keeps Picture-in-Picture windows above everything.
- **Focus Launched Windows** (`module-focus-launched-windows`): focuses newly launched windows instead of showing window-ready notifications.
- **Theme Changer** (`module-theme-changer`): keeps GNOME's color scheme in sync.
- **Volume Mixer** (`module-volume-mixer`): per-app volume in Quick Settings.
- **Bluetooth Menu** (`module-bluetooth-menu`): battery levels and animated icons in Bluetooth Quick Settings.
- **Low Battery Percentage** (`module-low-battery-percentage`): battery percentage in the panel while discharging below 20%, without overriding users who already enabled GNOME's own setting.
- **Lock Key Indicators** (`module-lock-key-indicators`): Caps Lock and Num Lock indicators in the panel.
- **XWayland Indicator** (`module-xwayland-indicator`): X11 badge on XWayland apps in Alt+Tab.
- **Icon Weave** (`module-icon-weave`): matches untracked windows to their apps in memory; writes no files.
- **App Search Tooltip** (`module-app-search-tooltip`): app name tooltips in overview search results.

The other ten modules have their own options, documented in
[Settings](../settings/).

## Beyond the preferences window

- **Developer tool.** Setting the `AURORA_DEVTOOLS=1` environment variable
  for the Shell session enables an in-Shell developer tool for inspecting
  modules. It is meant for Aurora Shell development, not day-to-day
  configuration.
- **Live session defaults.** On the LuminusOS live and installer session,
  the image ships a dconf profile
  (`/etc/dconf/db/local.d/00-iso-live-mode`) that turns most modules off to
  keep the installer minimal. Installed systems use the schema defaults
  documented here.

## On other distros

Aurora Shell works on any distro with GNOME 50 or newer. Install it from
[extensions.gnome.org](https://extensions.gnome.org/extension/9389/aurora-shell/).

## Privacy

Everything stays on your machine. No module ever sends data to third
parties. Screenshot OCR runs locally through Tesseract; the only network
call is the optional web search you trigger yourself from OCR results.

## Source

Aurora Shell is LGPL-3.0 and developed at
[github.com/luminusOS/aurora-shell](https://github.com/luminusOS/aurora-shell).
