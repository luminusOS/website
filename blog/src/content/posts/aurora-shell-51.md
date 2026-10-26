---
title: 'Aurora Shell 51: calendar reminders, faster history and less repeated work'
description: Aurora Shell 51 adds richer calendar reminders, event-driven clipboard monitoring, faster history replay and cached app matching on GNOME 51.
date: 2026-09-17
tag: Aurora Shell
image: /img/aurora-shell/aurora-shell-51-icon-weave.png
---

[Aurora Shell 51](https://github.com/luminusOS/aurora-shell/releases/tag/v51)
is out for GNOME 51. Calendar Reminders replaces Meeting Clock and works with
the reminders already set in your calendar. Clipboard History now follows
clipboard changes directly. Dock intellihide and Icon Weave also do less
repeated work during a session.

## Your next event, right beside the clock

Meeting Clock showed upcoming meetings and their conference links. Calendar
Reminders expands that job to events and reminders from the calendars connected
to your desktop.

Upcoming events appear next to the clock when they enter a configurable time
window. Notifications can follow the alarms configured by your calendar, and
you can snooze a reminder when you need a few more minutes. An optional setting
also sends a notification when a timed event begins, even if it has no alarm or
an earlier reminder has already appeared.

You can hide all-day events from the panel and choose how far ahead the module
looks. Another setting controls how often the event pill opens. Event data comes
from GNOME's calendar service, while Evolution Data Server supplies the
reminders.

<figure>
  <img src="../../img/aurora-shell/aurora-shell-51-calendar-reminders.png" alt="Aurora Shell 51 showing an upcoming calendar event beside the clock and its reminder notification." loading="lazy" />
  <figcaption>Calendar Reminders shows upcoming events and their alerts in the panel.</figcaption>
</figure>

## Clipboard History reacts instead of polling

Clipboard History now listens for clipboard owner changes. It groups changes
that arrive together into one read and ignores content that Aurora itself puts
on the clipboard. The old polling interval is gone from preferences.

Image transfers run asynchronously, can be cancelled and have a 32 MiB limit.
Aurora validates each image before adding it to the history and generates a
640-pixel thumbnail on a worker thread. Disabling the module cancels pending
work. Version checks also stop an old file load or image write from restoring
entries after the history has been cleared.

Large history logs also take less time to rebuild. Version 51 uses linked
entries while it replays the log, then creates the pinned and history lists once
at the end. This removes repeated array searches and moves from the replay loop.

<figure>
  <img src="../../img/aurora-shell/aurora-shell-51-clipboard-history.png" alt="Clipboard History in Aurora Shell 51 displaying copied text and image entries." loading="lazy" style="max-width: 384px" />
  <figcaption>Clipboard History follows clipboard changes directly and processes images asynchronously.</figcaption>
</figure>

## One intellihide check per frame

Dragging or resizing a window can emit many position, size and allocation
signals before GNOME Shell draws its next frame. Intellihide used to respond to
each signal with another pass over the windows and another overlap calculation.

Aurora Shell 51 schedules one overlap check before redraw. Changes such as
minimizing a window or moving it to another workspace still trigger an immediate
check. Destroying the dock cancels any geometry check waiting for the next
frame.

<figure>
  <img src="../../img/aurora-shell/aurora-shell-51-dock-intellihide.gif" alt="A window being dragged toward the Aurora dock while intellihide updates its visibility." loading="lazy" />
  <figcaption>Intellihide groups geometry updates into one overlap check per frame.</figcaption>
</figure>

## Icon Weave reuses matching work

Icon Weave repairs windows that GNOME cannot associate with an installed
application. In version 51, it derives normalized desktop IDs, application
names, abbreviations and Steam game IDs once per application, then reuses them
for later matches.

It also caches resolved window identities and failed matches, up to 256 entries.
When installed applications change, Aurora clears both caches and matches the
open windows again.

<figure>
  <img src="../../img/aurora-shell/aurora-shell-51-icon-weave.png" alt="A window with its matching application icon restored by Icon Weave in the GNOME overview." loading="lazy" />
  <figcaption>Icon Weave reuses application metadata when matching windows to launchers.</figcaption>
</figure>

## Built for GNOME 51

Platform integrations now use GNOME 51's Shell and Mutter APIs for input
devices, monitor topology and compositor work. The port also includes cleanup
across Tray Icons, Capture Tools, privacy features and panel modules.

Tests now cover dock intellihide scheduling, Clipboard History replay and Icon
Weave metadata reuse. Calendar Reminders and Clipboard History gained more Shell
tests as well.

## Performance, measured

The new Node benchmark compares version 51 with synthetic baselines that repeat
the old array and metadata work on the same generated input. It measures the
JavaScript paths only; Gio lookups and the rest of the Shell interaction sit
outside the test. These results came from 25 alternating samples on a
12th-generation Intel Core i5-12500H running Node.js 22.23.1:

| Workload | Operations | Baseline median | Version 51 median | Reduction |
| --- | ---: | ---: | ---: | ---: |
| Clipboard History, compacted log | 10,000 | 17.57 ms | 7.86 ms | 55.3% |
| Clipboard History, fragmented log | 20,000 | 86.63 ms | 15.65 ms | 81.9% |
| Icon Weave, warm-cache scoring | 100,000 | 180.84 ms | 27.10 ms | 85.0% |

The Clipboard History result comes from removing repeated array work during log
replay. The Icon Weave result measures the reuse of candidate metadata while
windows are inspected.

A separate GNOME Shell scenario sends 1,000 geometry invalidations to dock
intellihide before the next frame. Intellihide runs one overlap check, avoiding
999 potential checks in that burst. This scenario measures the scheduler's
coalescing behavior, not the performance of the desktop as a whole.

Results will vary by hardware. The benchmark is in the source tree and runs with
`npm run benchmark:runtime`.

Install Aurora Shell 51 from
[Extensions of GNOME (EGO)](https://extensions.gnome.org/extension/9389/aurora-shell/),
the recommended option for GNOME 51. The production archive is also available
from the [Aurora Shell 51 release on GitHub](https://github.com/luminusOS/aurora-shell/releases/tag/v51).
