---
title: 'Aetheris 1.3.0: a clearer workspace, better namespaces and Brazilian Portuguese'
description: Aetheris 1.3.0 improves the cluster workspace with a reworked sidebar, a clearer first-run flow, better namespace management and the first Brazilian Portuguese translation.
date: 2026-07-06
tag: Aetheris
---

[Aetheris 1.3.0](https://github.com/luminusOS/aetheris/releases/tag/v1.3.0)
is out with a release focused on the shape of the day-to-day workspace. This
version reworks the sidebar, makes the first run less ambiguous, improves how
namespaces are discovered and managed, and adds the first Brazilian Portuguese
translation.

Aetheris already had the core pieces for working with Kubernetes from a native
GNOME app: project-based clusters, live resources, YAML editing, logs, metrics,
interactive terminals and common operations. The 1.3.0 release is about making
those pieces easier to reach and easier to adapt to different workflows.

<figure class="workspace-image-pair">
  <img src="../../img/aetheris/aetheris-1-3-0-workspace1.png" alt="Aetheris 1.3.0 showing the redesigned workspace and sidebar." loading="lazy" />
  <img src="../../img/aetheris/aetheris-1-3-0-workspace2.png" alt="Aetheris 1.3.0 showing the redesigned workspace and sidebar." loading="lazy" />
  <figcaption>The reworked Aetheris workspace in version 1.3.0.</figcaption>
</figure>

## A sidebar built around the workspace

The sidebar has been reworked so the app feels more like a persistent
workspace and less like a sequence of disconnected views. Projects, clusters
and resource navigation now have a clearer structure, which matters when you
move between multiple kubeconfig contexts during the same session.

This also fixes a Windows-specific layout issue in the old sidebar. On some
Windows builds, the app behaved as if it was always in its narrow mobile-style
layout, even when the window was fully expanded. With the new sidebar structure,
the desktop layout is available correctly again.

The first-run experience has also been cleaned up. When Aetheris starts without
an existing project setup, the app now does a better job of guiding the user
toward a useful state instead of leaving the empty workspace to explain itself.
That makes the first launch closer to the normal daily flow: choose the clusters
that belong in a project, open the workspace, and start browsing resources.


<figure>
  <img src="../../img/aetheris/aetheris-1-3-0-first-run.png" alt="Aetheris 1.3.0 first-run setup flow." loading="lazy" />
  <figcaption>The clearer first-run flow helps new workspaces get started faster.</figcaption>
</figure>


## Better namespace handling

Namespaces are central to how Kubernetes work is organized, and 1.3.0 puts more
attention there. Aetheris now has improved namespace discovery and management,
so namespace lists can follow what the connected cluster actually exposes while
still fitting the project's saved configuration.

This is especially useful for clusters where teams work across a known set of
namespaces but still need the app to reflect cluster changes. The goal is to
keep namespace selection close to the resource browser, without making the user
manually rebuild the same list every time the cluster changes.

## Brazilian Portuguese translation

This release introduces the app's gettext-based internationalization path and
ships the first Brazilian Portuguese translation. The UI can now start moving
beyond English while keeping translations in a standard format that is easier
to update over time.

For Brazilian users, this is the first Aetheris release that can feel closer to
the language used in the rest of the desktop. For contributors, it also creates
the base for future translation work in other languages.

## Smaller internal cleanup

Alongside the visible changes, 1.3.0 includes internal cleanup around the app
state, detail panes, project storage, UI synchronization and styling. The CSS
that used to live in Rust code has been moved into a dedicated stylesheet, which
makes the visual layer easier to maintain without changing the app's behavior.

If you use Aetheris across multiple clusters or namespaces, 1.3.0 should feel
more organized from the moment the app opens. And if you use your GNOME desktop
in Brazilian Portuguese, this is the release that starts bringing Aetheris with
you.
