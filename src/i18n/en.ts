export const en = {
  meta: {
    title: 'LuminusOS: a Linux that just works, everywhere',
    description:
      'LuminusOS is an immutable Linux distribution based on Fedora bootc, with atomic updates, rollback, GNOME and Aurora Shell. Workstation is available for PCs, with other device editions planned.',
  },
  nav: {
    overview: 'Overview',
    how: 'How it works',
    editions: 'Editions',
    aurora: 'Aurora Shell',
    auroraShort: 'Aurora',
    aetheris: 'Aetheris',
    products: 'Products',
    resources: 'Resources',
    language: 'Language',
    menu: 'Menu',
    wiki: 'Wiki',
    blog: 'Blog',
    download: 'Download',
    donate: 'Donate',
    themeToggle: 'Toggle light/dark theme',
  },
  hero: {
    eyebrow: 'Immutable · Atomic · Fedora bootc',
    title: 'One system.',
    titleAccent: 'Every screen.',
    subtitle:
      'LuminusOS downloads system updates in the background and keeps the previous deployment available for rollback. Workstation supports PCs today, with editions for other devices on the roadmap.',
    cta: 'Download',
    ctaCommunity: 'Join the community',
    deviceNote: 'Workstation is available today. The other devices show where we are going.',
    soon: 'Soon',
    available: 'Available now',
    facts: [
      { label: 'Base', value: 'Fedora 44 · bootc' },
      { label: 'Desktop', value: 'GNOME 50 · Aurora Shell' },
      { label: 'License', value: 'MIT · LGPL' },
    ],
  },
  pillars: {
    title: 'Why LuminusOS?',
    subtitle: 'Atomic updates, rollback and sensible defaults reduce routine system maintenance.',
    items: [
      {
        title: 'Image-based system',
        body: 'The core system is read-only and each update is delivered as a complete image. The new deployment is staged separately from the system currently in use.',
      },
      {
        title: 'Bootable rollback',
        body: 'The previous deployment remains available from the boot menu, so you can return to it without reinstalling the system.',
      },
      {
        title: 'Ready out of the box',
        body: 'The Workstation edition combines GNOME, Aurora Shell and automatic configuration with defaults intended for daily use.',
      },
      {
        title: 'Open and community-driven',
        body: 'Development happens publicly on GitHub. Issues, discussions and pull requests are open to the community.',
      },
    ],
  },
  story: {
    eyebrow: 'Our story',
    since: 'Since',
    title: 'Made to welcome people into Linux.',
    body: 'LuminusOS began as a college idea in mid-2020: give people with no previous Linux experience a confident first step. The project brings together a beautiful, native, KISS-focused operating system and helpful software that reduces friction from installation to everyday use, without hiding what makes Linux powerful.',
  },
  how: {
    title: 'How it works',
    subtitle:
      'The base system is delivered as a versioned image instead of being updated package by package.',
    steps: [
      {
        num: '01',
        title: 'The OS is a container image',
        body: 'The system is built and distributed as an OCI image using Fedora bootc. Each release is tested as a complete image.',
      },
      {
        num: '02',
        title: 'Updates are atomic',
        body: 'The next image is downloaded and staged separately, then selected on reboot instead of modifying the running system package by package.',
      },
      {
        num: '03',
        title: 'Rollback is built in',
        body: 'The previous image stays on disk. If an update does not suit you, the boot menu takes you straight back. Your files and apps stay untouched either way.',
      },
      {
        num: '04',
        title: 'Apps live in Flatpak',
        body: 'Applications come from Flathub and remain separate from the base system, so app updates do not modify the operating-system image.',
      },
    ],
    terminalTitle: 'under the hood',
  },
  editions: {
    title: 'Get LuminusOS',
    subtitle:
      'Download the Workstation edition for PCs. Other device editions are listed on the roadmap.',
    roadmapTitle: 'On the roadmap',
    viewAll: 'All releases on SourceForge',
    items: {
      workstation: {
        name: 'Workstation',
        device: 'PCs & notebooks',
        body: 'The PC edition combines GNOME with Aurora Shell for notebooks and desktop computers.',
      },
      education: {
        name: 'Education',
        device: 'Classrooms & labs',
        body: 'A Workstation-derived edition for schools and student devices, with curated educational apps and easy fleet management.',
      },
      play: {
        name: 'Play',
        device: 'Gaming handhelds',
        body: 'A controller-first experience for handhelds like the Steam Deck. Pick up and play.',
      },
      mobile: {
        name: 'Mobile',
        device: 'Phones',
        body: 'The same trustworthy core in your pocket, with a touch-first shell.',
      },
      tablet: {
        name: 'Tablet',
        device: 'Tablets & 2-in-1s',
        body: 'Touch-friendly GNOME for tablets and convertibles, powered by the Mobile stack.',
      },
      cast: {
        name: 'Cast',
        device: 'TVs & living room',
        body: 'A big-screen experience for media and casting on your TV.',
      },
    },
  },
  aurora: {
    eyebrow: 'Made by LuminusOS',
    title: 'Aurora Shell',
    subtitle:
      'A modular GNOME Shell extension that adds the quality-of-life features missing in vanilla GNOME. It ships with LuminusOS Workstation and works on any GNOME distro.',
    cta: 'Explore Aurora Shell',
  },
  download: {
    button: 'Download',
    format: 'Choose format',
    notes: 'Release notes',
    note: 'Downloads are served from SourceForge mirrors worldwide. The button always points to the most recent version.',
  },
  support: {
    title: 'Like what we are building?',
    subtitle:
      'LuminusOS is maintained by volunteers. Donations through Open Collective help cover project costs and future development.',
    button: 'Support the project',
  },
  community: {
    title: 'Find your place in the community',
    subtitle:
      'Follow the project, ask questions, share what you are building, or help us keep LuminusOS moving forward.',
    items: {
      discord: { label: 'Discord' },
      reddit: { label: 'Reddit' },
      mastodon: { label: 'Mastodon' },
      x: { label: 'X' },
      openCollective: { label: 'Open Collective' },
    },
  },
  footer: {
    tagline: 'A Linux that just works, everywhere.',
    project: 'Project',
    community: 'Community',
    legal: 'LuminusOS is built on Fedora bootc. Fedora is a trademark of Red Hat, Inc. Steam Deck is a trademark of Valve Corporation.',
    rights: 'LuminusOS Community. Code under MIT / LGPL licenses on GitHub.',
  },
  auroraPage: {
    meta: {
      title: 'Aurora Shell: quality-of-life modules for GNOME',
      description:
        'Aurora Shell is a modular GNOME Shell extension: dock, per-app volume mixer, tray icons, clipboard history, weather and meeting clocks and more. Each module is independent, so you enable only what you want.',
    },
    eyebrow: 'A LuminusOS project · GNOME 50',
    title: 'GNOME, extended.',
    subtitle:
      'Aurora Shell adds optional modules to GNOME Shell, including a dock, tray icons, clipboard history and per-application volume controls.',
    install: 'Install from GNOME Extensions',
    source: 'Source on GitHub',
    version: 'Latest version',
    philosophyTitle: 'Designed for upstream',
    philosophy:
      'Aurora modules are developed independently while they mature. Features that fit GNOME Shell may later be proposed upstream.',
    spotlightTitle: 'In the spotlight',
    spotlightSubtitle: 'A selection of modules included with Aurora Shell.',
    spotlights: [
      {
        tag: 'Dock',
        title: 'Adaptive dock',
        body: 'A dock on every monitor that can hide around windows, reveal from the screen edge or remain fixed. It also supports Trash and removable drives.',
        file: 'dock.png',
      },
      {
        tag: 'Clipboard History',
        title: 'Searchable clipboard history',
        body: 'Search copied items, pin entries and navigate from the keyboard. Clipboard history remains on the local machine.',
        file: 'clipboard.png',
      },
      {
        tag: 'Volume Mixer',
        title: 'Every app at its own volume',
        body: 'Per-application sliders right inside Quick Settings. Turn the game down without touching the music, and jump to Sound Settings when you need more.',
        file: 'mixer.png',
      },
      {
        tag: 'Weather & Meeting Clock',
        title: 'Weather and meetings in the panel',
        body: 'Show current weather and upcoming calendar events beside the clock, with meeting alerts and snooze controls.',
        file: 'clock.png',
      },
      {
        tag: 'Tray Icons',
        title: 'Tray and background app icons',
        body: 'Display SNI tray icons and GNOME background apps in the panel while deduplicating repeated entries.',
        file: 'tray-icons.png',
      },
    ],
    modulesTitle: 'The modules',
    modulesSubtitle: 'Twenty-two independent modules, in four groups. Toggle each one in preferences.',
    moduleGroups: [
      {
        name: 'Dock & Panel',
        modules: [
          { name: 'Dock', body: 'Replaces the stock dash with a per-monitor dock: intellihide, edge reveal, always-visible mode, Trash and drive shortcuts.' },
          { name: 'Aurora Menu', body: 'A panel menu with recent items, useful shortcuts, a configurable icon and a custom command slot.' },
          { name: 'Power Menu Avatar', body: "Shows the current user's avatar and name in the power menu." },
          { name: 'Volume Mixer', body: 'Per-application volume sliders right in Quick Settings, with fast access to Sound Settings.' },
          { name: 'Low Battery Percentage', body: 'Shows the native battery percentage automatically while discharging below 20%.' },
          { name: 'Lock Key Indicators', body: 'Caps Lock and Num Lock indicators in the top panel.' },
          { name: 'Bluetooth Menu', body: 'Battery levels and animated icons in the Bluetooth Quick Settings panel.' },
          { name: 'Weather Clock', body: 'GNOME Weather conditions next to the panel clock, placed before or after it.' },
          { name: 'Meeting Clock', body: 'Upcoming calendar events beside the clock, with meeting alerts, snooze and lookahead controls.' },
          { name: 'Tray Icons', body: 'Shows SNI icons and GNOME background apps while removing duplicate entries.' },
        ],
      },
      {
        name: 'Appearance',
        modules: [
          { name: 'Theme Changer', body: 'Keeps GNOME light/dark color-scheme behavior consistent across the system.' },
          { name: 'Icon Weave', body: 'Fixes missing app icons by matching untracked windows to their apps, in memory.' },
          { name: 'App Search Tooltip', body: 'Shows app names on hover in the overview search results.' },
          { name: 'Auto Theme Switcher', body: 'Switches between light and dark theme automatically at the times you set.' },
        ],
      },
      {
        name: 'Behavior',
        modules: [
          { name: 'Skip Overview on Login', body: 'Boot straight to your desktop. Skips the overview on startup.' },
          { name: 'PiP On Top', body: 'Keeps Picture-in-Picture windows above everything else, automatically.' },
          { name: 'Focus Launched Windows', body: 'Focuses newly launched windows instead of “is ready” notifications.' },
          { name: 'Capture Tools', body: "Adds annotation tools and optional local OCR to GNOME's screenshot interface." },
          { name: 'XWayland Indicator', body: 'Adds an X11 badge to XWayland apps in the Alt+Tab switcher.' },
          { name: 'Vela VPN Quick Settings', body: 'Routes VPN activation in Quick Settings through Vela, with an optional GNOME Shell fallback.' },
        ],
      },
      {
        name: 'Privacy & Clipboard',
        modules: [
          { name: 'Privacy', body: 'Screen-sharing privacy: automatic Do Not Disturb and panel content hiding.' },
          { name: 'Clipboard History', body: 'Searchable clipboard history with pinning, keyboard navigation and a shortcut you assign. Everything stays local.' },
        ],
      },
    ],
    designTitle: 'Implementation',
    design: [
      {
        title: 'Independent modules',
        body: 'Each feature has its own enable and disable lifecycle and can be turned off independently.',
      },
      {
        title: 'TypeScript, tested',
        body: 'Written in TypeScript with unit tests for the logic and integration tests against a real headless GNOME Shell.',
      },
      {
        title: 'Privacy-first',
        body: 'Module data stays on the local machine and is not sent to third parties.',
      },
    ],
    backHome: 'About LuminusOS',
  },
  aetherisPage: {
    meta: {
      title: 'Aetheris: a native Kubernetes desktop client',
      description:
        'Aetheris is a Kubernetes desktop client built with Rust, GTK4 and Libadwaita. Browse resources, edit YAML, stream logs and open pod terminals.',
    },
    eyebrow: 'A LuminusOS project · Kubernetes · Desktop',
    title: 'Kubernetes on the desktop.',
    subtitle:
      'Connect with your kubeconfig, organize clusters by project, inspect resources, edit YAML and work with large resource lists from a native desktop application.',
    downloadGeneric: 'Download Aetheris',
    downloadLinux: 'Download for Linux',
    downloadMac: 'Download for macOS',
    downloadWindows: 'Download for Windows',
    allDownloads: 'All releases',
    status: 'Latest release',
    meaningTitle: 'Why “Aetheris”?',
    meaning:
      'From Aether, the highest and brightest layer of the sky in classical mythology. That is the idea behind Aetheris: a clear, quiet place above the noise where your clusters stay readable and under control.',
    featuresTitle: 'Kubernetes desktop tools',
    featuresSubtitle: 'Tools for browsing, inspecting and operating clusters from one application.',
    features: [
      { name: 'Projects and clusters', body: 'Organize any number of clusters into projects and switch between them instantly.' },
      { name: 'Resource browser', body: 'Navigate workloads, networking, storage and config across all namespaces with live status.' },
      { name: 'Large resource lists', body: 'Loads resource lists with up to 10k pods without blocking the interface.' },
      { name: 'YAML editor', body: 'Inspect and edit any object as YAML with syntax highlighting, then apply it back to the cluster.' },
      { name: 'Live logs', body: 'Stream pod logs in real time, with follow mode and full ANSI color support.' },
      { name: 'Pod terminals', body: 'Open an interactive terminal inside a container from the application.' },
      { name: 'Operations', body: 'Scale, delete, cordon, drain and port-forward resources from the interface.' },
      { name: 'Kubeconfig first', body: 'Reads your existing ~/.kube/config, and can import and create entries without touching your workflow.' },
      { name: 'Events and metrics', body: 'Cluster events and resource metrics beside the objects they belong to.' },
    ],
    screenshotsTitle: 'Cluster workflows',
    screenshotsSubtitle: 'Browse, inspect, edit and operate cluster resources from the same interface.',
    screenshots: [
      {
        tag: 'Overview',
        title: 'Project and cluster overview',
        body: 'Organize clusters into projects and view workloads, nodes and health without deploying a separate dashboard.',
        file: 'overview.png',
      },
      {
        tag: 'Resources',
        title: 'Resource browser',
        body: 'Browse workloads, networking, storage and config across all namespaces. The resource table stays responsive with huge lists, including 10k pods, while details, events and metrics stay one click away.',
        file: 'resources.png',
      },
      {
        tag: 'YAML',
        title: 'YAML editor',
        body: 'Open objects as YAML with syntax highlighting, edit them and apply the result to the cluster.',
        file: 'yaml.png',
      },
      {
        tag: 'Terminal',
        title: 'A shell inside the container',
        body: 'Open a VTE-based interactive terminal in the selected pod and work inside its container.',
        file: 'terminal.png',
      },
    ],
    designTitle: 'Native architecture',
    design: [
      {
        title: 'Desktop toolkit',
        body: 'Built with Rust, GTK4, Libadwaita and Relm4 for Linux, Windows and macOS.',
      },
      {
        title: 'Rust and kube-rs',
        body: 'Uses kube-rs for Kubernetes API access and resource operations.',
      },
      {
        title: 'Direct cluster access',
        body: 'Aetheris uses your kubeconfig to connect directly to clusters, without accounts or telemetry.',
      },
    ],
    backHome: 'About LuminusOS',
  },
};
