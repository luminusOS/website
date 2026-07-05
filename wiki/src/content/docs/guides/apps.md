---
title: Installing apps
description: Installing and managing Flatpak applications on LuminusOS.
sidebar:
  order: 3
---

Applications on LuminusOS come from [Flathub](https://flathub.org) as
Flatpaks: sandboxed, independent from the base system, and always current.

## With GNOME Software

Open **Software**, search, click install. That is the whole guide.

## From the terminal

```sh
flatpak search obsidian
flatpak install flathub md.obsidian.Obsidian
flatpak update
```

## Why Flatpak?

- **The OS stays clean.** Apps never modify the base system, so updates and
  rollbacks of the OS never touch your apps, and vice versa.
- **Sandboxing.** Apps run with limited permissions you can inspect and
  adjust in Settings → Apps.
- **Always current.** App updates come straight from Flathub, independent of
  OS releases.

## What about CLI tools and development?

For development environments, use
[Toolbox](https://containertoolbx.org/) containers, included out of the box:

```sh
toolbox create
toolbox enter
sudo dnf install gcc make   # inside the toolbox, mutable as usual
```

Your home directory is shared with the toolbox, the host system stays
immutable.
