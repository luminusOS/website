---
title: 'ZapTide 0.8.0: view media without leaving the main window'
description: ZapTide 0.8.0 brings an integrated media viewer, quick reactions and WhatsApp text formatting to the native Linux client. Voice and video calls remain experimental.
date: 2026-11-10
tag: ZapTide
image: /img/zaptide/zaptide-v0.8.0-penpot-media-viewer.png
---

[ZapTide 0.8.0](https://github.com/luminusOS/zaptide/releases/tag/v0.8.0)
is available for Linux. Photos and videos now open in the main window, with the
chat sidebar still in reach. You can move through an album, zoom into a photo
and return to the conversation with Escape.

ZapTide is an unofficial WhatsApp client built with Rust, GTK4 and libadwaita.
This release also adds quick reactions, WhatsApp text formatting and controls
for notification sounds and cached downloads. Voice and video calls are
experimental. Large, densely formatted messages still have performance problems.

The images below are Penpot mockups with sample content.

## Keep your chats beside your photos

The media viewer shares the main window with your conversations. Zoom with
Ctrl and the mouse wheel, pan across a photo, or move between images in an album.
The zoom control shows the current percentage. Back and Escape take you to the
chat.

Right-click a downloaded photo to copy it. Long captions have a separate
View Caption action, so reading them does not shrink the picture. Video playback
also stays in the main window.

<figure>
  <img src="../../img/zaptide/zaptide-v0.8.0-penpot-media-viewer.png" alt="Penpot mockup of ZapTide's image viewer, with album navigation, zoom controls and the chat sidebar visible." width="960" height="640" loading="lazy" style="height: auto" />
  <figcaption>The integrated media viewer, illustrated in Penpot.</figcaption>
</figure>

## React from the conversation

Hover over a message to choose a quick reaction. Messages and the composer now
support WhatsApp formatting, including bold, italic, strikethrough, code, lists
and quotes. Mentions show names in bold with the accent colour. Saved contact
names take priority over phone numbers in messages, previews and notifications.

Short message bubbles no longer collapse into narrow columns or wrap their last
word unnecessarily. Reaction controls stay clear of sender names and the message
menu.

<figure>
  <img src="../../img/zaptide/zaptide-v0.8.0-penpot-quick-reactions.png" alt="Penpot mockup showing a quick-reaction picker above a message in a sample conversation." width="960" height="640" loading="lazy" style="height: auto" />
  <figcaption>Quick reactions appear above the message under the pointer.</figcaption>
</figure>

## Try the experimental call screens

Direct chats have voice and video call buttons, and the Calls tab keeps call
history. Incoming calls have Answer and Decline controls. You can browse chats
while a call is active and use Return to call to get back to its controls.

<figure>
  <img src="../../img/zaptide/zaptide-v0.8.0-penpot-incoming-call.png" alt="Penpot mockup of an incoming voice call, with Answer and Decline buttons." width="960" height="640" loading="lazy" style="height: auto" />
  <figcaption>The incoming-call screen.</figcaption>
</figure>

<figure>
  <img src="../../img/zaptide/zaptide-v0.8.0-penpot-voice-call.png" alt="Penpot mockup of a voice call, with microphone, camera and End call controls." width="960" height="640" loading="lazy" style="height: auto" />
  <figcaption>Voice-call controls in the main window.</figcaption>
</figure>

<figure>
  <img src="../../img/zaptide/zaptide-v0.8.0-penpot-video-call.png" alt="Penpot mockup of a video call, with a local preview marked You and call controls at the bottom." width="960" height="640" loading="lazy" style="height: auto" />
  <figcaption>The video-call layout with a local preview. This is a mockup, not a verified phone call.</figcaption>
</figure>

No voice or video call against a phone has been verified. Audio quality, video
interoperability, ringing and notification-button interaction remain unverified.
Flatpak camera access and AppImage video plugins also need testing in their
packaged environments. Group calls are unsupported. Do not rely on this release
for calls; the [release notes](https://github.com/luminusOS/zaptide/releases/tag/v0.8.0)
describe the remaining limitations.

## Choose notification sounds and download retention

Preferences lets you enable a notification sound and choose the pause between
sounds. Sound support depends on the desktop portal: GNOME systems reporting
notification portal version 1 cannot play the supplied sound. The desktop still
controls playback and Do Not Disturb.

ZapTide also goes offline when you leave the app or stop using it, so WhatsApp
can notify your phone. The delay and inactivity timeout are configurable.

Under Storage, optional cleanup removes cached attachments after a period from
30 days to one year. It keeps messages and saved stickers. A removed attachment
can only download again while WhatsApp still has it.

## Get ZapTide 0.8.0

[Download the release](https://github.com/luminusOS/zaptide/releases/tag/v0.8.0)
as a Flatpak, AppImage or Linux archive for x86_64 and aarch64. Checksums are
provided alongside the packages.

Very large, densely formatted messages can still be slow and use excessive
memory. Lottie sticker support covers only some animations, and accessibility
remains incomplete. Read the
[user guide](https://github.com/luminusOS/zaptide/blob/v0.8.0/docs/user-guide.md)
for setup, data and backup guidance before using the app.

ZapTide is now distributed under GPL-3.0-or-later. The inherited MIT notice and
credits are preserved; earlier MIT releases and third-party licences are unchanged.

Thanks to @madmoh for automatic presence, @venomega for proposing notification
sounds and their pause, @hyprlab for requesting Copy Image, and @shlok2721-web
for reporting missing stickers. Thanks also to everyone who tested the release
candidates and reported problems.
