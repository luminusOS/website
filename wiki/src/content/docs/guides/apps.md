---
title: Installing apps
description: Installing and managing Flatpak applications on LuminusOS.
sidebar:
  order: 3
---

Applications on LuminusOS come from [Flathub](https://flathub.org) and the
[Luminus repository](#luminus-repository) as Flatpaks: sandboxed, independent from the base system, and always current.

## With GNOME Software

Open **Software**, search, click install. That is the whole guide.

## From the terminal

```sh
flatpak search obsidian
flatpak install flathub md.obsidian.Obsidian
flatpak update
```

## Luminus repository

LuminusOS apps such as ZapTide, Aetheris and DeskUnion are published in the
Luminus Flatpak repository. It has builds for x86_64 and aarch64 and only holds
apps from the LuminusOS project, built from public source. The repository is
signed, and Flatpak checks the signature of every update.

### Add the remote

```sh
flatpak remote-add --user --if-not-exists luminus https://flatpak.luminusos.org/stable/luminus-stable.flatpakrepo
```

Drop `--user` to add the remote for all users. You can also download
[luminus-stable.flatpakrepo](https://flatpak.luminusos.org/stable/luminus-stable.flatpakrepo)
and open it with GNOME Software. The file carries the public key of the
repository.

On other distributions, set up Flatpak first by following the
[Flatpak setup guide](https://flatpak.org/setup/).

### Install and run an app

```sh
flatpak install --user luminus org.luminusos.DeskUnion
flatpak run org.luminusos.DeskUnion
```

Runtimes come from Flathub. The app also appears in your app grid and in GNOME
Software. The apps site lists every app with its ID:
[apps.luminusos.org](https://apps.luminusos.org).

### Updates

Updates work like any other Flatpak remote. Run `flatpak update`, or let GNOME
Software install them in the background.

### Testing channel

Contributors can use a separate testing remote named `luminus-testing`. It has
its own signing key, and Flatpak refuses a remote that uses the wrong key. Each
channel is its own branch, so `stable` and `testing` can be installed side by
side.

```sh
flatpak remote-add --user luminus-testing https://raw.githubusercontent.com/luminusOS/flatpak-repo/main/descriptors/testing/luminus-testing.flatpakrepo
flatpak install --user luminus-testing org.luminusos.DeskUnion//testing
```

Both branches use the same data in `~/.var/app/<id>`. A newer testing build can
write data that an older stable build cannot read, and nothing downgrades an app
for you, so copy that directory before going back to stable.

To leave testing, install the stable branch first so the app stays available,
then uninstall the testing one:

```sh
flatpak install --user luminus org.luminusos.DeskUnion//stable
flatpak uninstall --user org.luminusos.DeskUnion//testing
```

### Move an app installed from a release bundle

An app installed from a GitHub release bundle keeps the origin it came with, so
a plain install from the remote refuses with "already installed from remote".
Reinstall it instead:

```sh
flatpak install --user --reinstall luminus org.luminusos.DeskUnion//stable
```

The app is removed and installed again from the remote. Your data in
`~/.var/app/<id>` is kept. The branch of the bundle must exist on the remote you
move to.

### Remove the repository

Uninstall the apps you installed from it, then remove the remote:

```sh
flatpak remote-delete luminus
```

For the details of the channels and descriptors, see the
[repository documentation](https://github.com/luminusOS/flatpak-repo/blob/main/docs/CLIENTS.md).

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
