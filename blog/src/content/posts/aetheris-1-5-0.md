---
title: 'Aetheris 1.5.0: review YAML changes before applying and read logs faster'
description: Aetheris 1.5.0 adds a diff confirmation step before applying edited YAML and semantic highlighting for common structured log formats.
date: 2026-08-23
tag: Aetheris
image: /img/aetheris/aetheris-1-5-0-yaml-diff.png
---

[Aetheris 1.5.0](https://github.com/luminusOS/aetheris/releases/tag/v1.5.0)
is out with safer YAML edits and logs that are much easier to scan. Before a
change reaches the cluster, you see the exact diff. In the log viewer, colors
separate errors, warnings and structured data from the rest of the message.

## Review YAML changes before applying them

Before applying edited YAML, Aetheris opens a confirmation dialog with a
unified diff.

Added and removed lines use distinct colors, changed sections keep nearby
context, and the dialog names the resource being updated. Apply the change or
return to the editor. If the YAML has not changed, Aetheris says so and skips
the dialog.

<figure>
  <img src="../../img/aetheris/aetheris-1-5-0-yaml-diff.png" alt="Aetheris 1.5.0 confirmation dialog showing added and removed YAML lines before applying changes to a Deployment." loading="lazy" />
  <figcaption>The new confirmation dialog shows the exact YAML diff before anything is applied.</figcaption>
</figure>

## Semantic highlighting for logs

Kubernetes logs pack timestamps, severity levels, component names, identifiers,
numbers, URLs and key-value data onto the same line. Now, Aetheris recognizes
those roles and styles them separately. Errors and warnings stand out, while
timestamps, line numbers and metadata remain easy to find.

The highlighter understands JSON, logfmt, Spring, Python, Rust and Rails. It
strips terminal control sequences, preserves Unicode and follows the current
light or dark appearance. Unusually long lines fall back to sanitized plain
text rather than slowing down the stream.

<figure>
  <img src="../../img/aetheris/aetheris-1-5-0-log-highlighting.png" alt="Aetheris 1.5.0 log viewer highlighting timestamps, Java classes, methods, line numbers and error messages." loading="lazy" />
  <figcaption>Semantic highlighting separates structure and severity in a Java application log.</figcaption>
</figure>

[Get the release on GitHub](https://github.com/luminusOS/aetheris/releases/tag/v1.5.0).
