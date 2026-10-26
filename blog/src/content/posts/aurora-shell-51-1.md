---
title: 'Aurora Shell 51.1: a steadier dock, matching theme switches and a new logo'
description: Aurora Shell 51.1 keeps the dock hidden after lock, resume and monitor changes, animates light and dark switches the same way in both directions, stops flattening grayscale tray icons and introduces a new logo.
date: 2026-10-26
tag: Aurora Shell
image: /img/aurora-shell/aurora-shell-51-1-logo.png
---

[Aurora Shell 51.1](https://github.com/luminusOS/aurora-shell/releases/tag/v51.1)
is out for GNOME 51. It fixes three things. The dock hides when it should after
a lock, resume or monitor change. Switching between light and dark style animates
the same way in both directions. Grayscale tray icons keep their detail. The
project also has a new logo.

## The dock stays hidden after a monitor change

After you locked the screen, resumed from suspend or plugged in a monitor, the
dock could stay visible over maximized and fullscreen windows until you opened
the overview.

Every monitor change destroyed and recreated the dock's bindings, and GNOME
Shell announces a hot-corner change right before a monitor change, so the
rebuild ran twice. The new dock was created visible. When intellihide's first
answer was that a window was in the way, nothing hid the dock and its hover area
was never armed again.

Intellihide docks now start hidden and hide explicitly when the first answer is
that a window overlaps them. To make that possible, the dock publishes its
target box from the computed placement instead of reading it from the painted
actor, because Clutter does not allocate hidden actors and a hidden dock used
to report no geometry at all.

On a monitor change, Aurora Shell now keeps the docks whose monitor is still
selected and repositions them, so a visible dock no longer blinks. A full
rebuild only happens when you change the dock configuration. The dock also
stopped listening for hot-corner changes, because hot corners only add
top-corner barriers and ripples, and the dock uses neither.

## Light and dark switches animate the same way

Switching to dark style was one change. Switching back was two. Turning Dark
Style off from Quick Settings wrote GNOME's legacy `default` value, which keeps
the Shell stylesheet dark, and the theme changer then rewrote it to
`prefer-light`. Part of the Shell theme therefore changed after the screen
transition had already started fading.

The Quick Settings toggle now writes `prefer-light` directly, after it runs the
screen transition. Both directions apply in a single change under one snapshot.

Auto Theme Switcher uses the same screen transition when it changes the scheme
on its schedule. The first application when the module is enabled stays
instant.

## Tray icons keep their detail

Tray Icons recolors symbolic icons so they match the panel. Its check for a
symbolic icon only asked whether the pixels were neutral gray, so any grayscale
artwork passed. Icons such as the OpenChamber cube, or the Epic Games shield
with dark lettering, were painted in a single panel color and turned into flat
white silhouettes.

The check now also requires the solid pixels to share a single luminance band.
Aurora finds the band with a 256-bin histogram in one pass, so a few stray
pixels no longer break the detection, and it ignores translucent edge pixels
because their alpha carries the shape.

The pixel work moved into pure helpers shared by the pixmap route and the
theme-path PNG route. Layout conversion no longer allocates per pixel, and
colorful PNGs are returned without copying their rows.

## A new logo and a README to match

The old logo was a night-sky disc with four thin overlapping ribbons that blurred
into stripes at 32 pixels. The new one shows a desktop under an aurora: GNOME
Shell's top bar with its clock, an aurora sky as the wallpaper and a dock with
three application tiles. It keeps its shape at small sizes, and it appears in
the README, in the preferences window and on extensions.gnome.org.

<figure>
  <img src="../../img/aurora-shell/aurora-shell-51-1-logo.png" alt="The new Aurora Shell logo: a desktop screen with GNOME Shell's top bar, an aurora sky and a dock with three application tiles." loading="lazy" style="max-width: 20rem" />
  <figcaption>The new Aurora Shell logo, drawn on the 128-pixel GNOME app icon canvas.</figcaption>
</figure>

The README now opens with the logo and a Get it on GNOME Extensions badge,
followed by badges for CI, the latest release, the supported Shell version and
the license. Modules are grouped in a table, optional dependencies have their
own table and there is a new Configure section.

## Tests

New tests cover the dock's monitor changes, the theme changer and the tray icon
state.

A separate fix stabilizes the dock Shell test. Enabling always-show rebuilds the
dock, and the test checked the strut right after the Shell went idle, before the
new container had its first allocation. On a slow CI runner it saw a 0x0 strut
and failed intermittently. The test now waits for the strut to match the
container and the monitor. The dock code did not change.

## Get Aurora Shell 51.1

Aurora Shell is distributed through
[Extensions of GNOME (EGO)](https://extensions.gnome.org/extension/9389/aurora-shell/),
the recommended place to install it on GNOME 51. The production archive is also
available from the
[Aurora Shell 51.1 release on GitHub](https://github.com/luminusOS/aurora-shell/releases/tag/v51.1),
next to a development archive with the in-Shell DevTool for contributors and
testing.
