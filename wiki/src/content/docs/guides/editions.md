---
title: Editions
description: The LuminusOS editions, available today and planned.
sidebar:
  order: 6
---

LuminusOS is one core system adapted to many screens. Editions share the same
immutable base image and differ in the shell and hardware enablement on top.

## Available today

### Workstation

The flagship edition for PCs and notebooks. GNOME desktop refined with Aurora
Shell, delivered as ISO (for installs) and qcow2 (for VMs).
[Download the latest release](https://github.com/luminusOS/images/releases/latest).

### Core

The minimal base image everything else builds on. Useful as a bootc base for
derived systems: `ghcr.io/luminusos/luminusos:44`.

## On the roadmap

These editions are reserved in the build system and waiting for their turn
(and for contributors):

| Edition | Target |
| --- | --- |
| **Play** | Gaming handhelds like the Steam Deck, controller-first |
| **Mobile** | Phones, touch-first shell |
| **Tablet** | Tablets and 2-in-1s, powered by the Mobile stack |
| **Cast** | TVs and living-room displays |
| **Education** | Classrooms, labs and student devices |

## Versioning

Images are versioned as `<fedora>.<date>`, for example `44.20260610` is the
build from June 10, 2026 on Fedora 44. CI builds run on `f44`/`f45`/`f46`
branches and publish to [GHCR](https://github.com/orgs/luminusOS/packages).
