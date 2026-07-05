export type Lang = 'en' | 'pt-br';

export type SiteVariant = '' | 'aurora';
export const siteVariant = (process.env.SITE_VARIANT ?? '') as SiteVariant;

export const mainSite = siteVariant ? 'https://luminusos.org' : '';

export const languages: { code: Lang; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt-br', name: 'Português (BR)', flag: '🇧🇷' },
];

export function langPrefix(lang: Lang): string {
  return lang === 'en' ? '' : '/pt-br';
}

// In dev the blog/wiki/aurora sites are reachable as local paths, but each
// production site lives on its own subdomain, so built pages must link to
// the absolute URL.
const useLocalPaths = import.meta.env.DEV;

export function subHref(p: string, variant: SiteVariant, localPath: string, absolute: string): string {
  if (siteVariant === variant) return p || '/';
  if (siteVariant === '' && useLocalPaths) return `${p}${localPath}`;
  return `${absolute}${p}`;
}

export function siteHref(localPath: string, absolute: string): string {
  if (siteVariant === '' && useLocalPaths) return localPath;
  return absolute;
}

const en = {
  meta: {
    title: 'LuminusOS: a Linux that just works, everywhere',
    description:
      'LuminusOS is an immutable Linux built on Fedora bootc. Updates install themselves, rollback is one reboot away, and the GNOME desktop is polished out of the box. Made for your laptop today, and for your phone, tablet, handheld and TV tomorrow.',
  },
  nav: {
    overview: 'Overview',
    how: 'How it works',
    editions: 'Editions',
    aurora: 'Aurora Shell',
    auroraShort: 'Aurora',
    aetheris: 'Aetheris',
    products: 'Products',
    wiki: 'Wiki',
    blog: 'Blog',
    download: 'Download',
    donate: 'Donate',
    github: 'GitHub',
    themeToggle: 'Toggle light/dark theme',
  },
  hero: {
    eyebrow: 'Immutable · Atomic · Fedora bootc',
    title: 'One system.',
    titleAccent: 'Every screen.',
    subtitle:
      'LuminusOS is the operating system you install and forget. Updates land quietly in the background, and if one ever misbehaves, you just reboot into the previous version. No drama, no terminal rescue missions. Built for your PC today, dreaming of every other screen in your life.',
    cta: 'Download for PC',
    ctaSecondary: 'Meet Aurora Shell',
    deviceNote: 'Workstation is available today. The other devices show where we are going.',
    soon: 'Soon',
    available: 'Available now',
  },
  pillars: {
    title: 'Why LuminusOS?',
    subtitle: 'We sweat the boring parts of an OS so you never have to think about them.',
    items: [
      {
        title: 'It never breaks',
        body: 'The core system is read-only and every update is a complete, tested image. A bad update simply cannot leave your machine half-working. It either applies fully or not at all. Your computer keeps being a computer.',
      },
      {
        title: 'Updates with an undo button',
        body: 'Every version of the system stays on disk as a bootable snapshot. New update acting weird? Pick the previous one at boot and you are back exactly where you were. No reinstall, no panic.',
      },
      {
        title: 'Ready out of the box',
        body: 'Sane defaults, automatic configuration, and a GNOME desktop lovingly polished with Aurora Shell. You spend your time using the computer, not setting it up.',
      },
      {
        title: 'Open and community-driven',
        body: 'Everything happens in the open on GitHub, on top of Fedora. Suggestions, criticism and pull requests are not just welcome, they literally shape the project.',
      },
    ],
  },
  how: {
    title: 'How it works',
    subtitle:
      'LuminusOS treats your operating system the way the cloud treats servers: as an image, not a pile of files.',
    steps: [
      {
        num: '01',
        title: 'The OS is a container image',
        body: 'The whole system is built and shipped as an OCI image using Fedora bootc, the same technology behind Docker and Podman containers. Every build is reproducible and tested before it reaches you.',
      },
      {
        num: '02',
        title: 'Updates are atomic',
        body: 'Updating means downloading the next image and switching to it on reboot. Nothing mutates a live system package by package, which means a half-applied update is impossible. Not rare. Impossible.',
      },
      {
        num: '03',
        title: 'Rollback is built in',
        body: 'The previous image stays on disk. If an update does not suit you, the boot menu takes you straight back. Your files and apps stay untouched either way.',
      },
      {
        num: '04',
        title: 'Apps live in Flatpak',
        body: 'Applications come from Flathub, sandboxed and independent from the base system. The OS stays clean, apps stay current, and neither one can break the other.',
      },
    ],
    terminalTitle: 'under the hood',
  },
  editions: {
    title: 'One OS, many devices',
    subtitle:
      'The same trustworthy core, adapted to each screen. Workstation ships today. The rest is the roadmap, already reserved in our build system and waiting for its turn.',
    downloadLatest: 'Download',
    comingSoon: 'Coming soon',
    viewAll: 'All releases on GitHub',
    items: {
      workstation: {
        name: 'Workstation',
        device: 'PCs & notebooks',
        body: 'The flagship. A GNOME desktop refined with Aurora Shell, ready for work, study and everything in between.',
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
    title: 'Get LuminusOS',
    subtitle:
      'Grab the latest Workstation ISO, flash it to a USB drive and install. That is the last update you will ever do by hand.',
    button: 'Download latest ISO',
    note: 'Downloads are served from GitHub Releases. The button always points to the most recent version.',
    checking: 'checking latest version…',
    latest: 'Latest release',
  },
  support: {
    title: 'Like what we are building?',
    subtitle:
      'LuminusOS is made by volunteers, for everyone. If it makes your life easier, consider fueling the project. Every bit helps us ship the next edition sooner.',
    button: 'Support the project',
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
    title: 'GNOME, finished.',
    subtitle:
      'Aurora Shell is a modular GNOME Shell extension that adds the quality-of-life features missing from vanilla GNOME. Every module is independent: enable exactly what you want, nothing more.',
    install: 'Install from GNOME Extensions',
    source: 'Source on GitHub',
    version: 'Latest version',
    philosophyTitle: 'A proving ground for GNOME',
    philosophy:
      'Aurora Shell is a proving ground. Over time, the aim is for some of its features to mature and make their way upstream into GNOME Shell itself. Modules here are meant to be useful on their own today, and good candidates for upstream tomorrow.',
    spotlightTitle: 'In the spotlight',
    spotlightSubtitle: 'The modules you will feel first, the moment Aurora is enabled.',
    screenshotSoon: 'Screenshot coming soon',
    spotlights: [
      {
        tag: 'Dock',
        title: 'A dock that knows when to move',
        body: 'A smart dock on every monitor: it hides when a window needs the space, peeks back from the edge, and can stay pinned if that is your thing. Trash and removable drives included.',
        file: 'dock.png',
      },
      {
        tag: 'Clipboard History',
        title: 'Your clipboard finally remembers',
        body: 'Everything you copy, searchable and one shortcut away. Pin what matters, navigate with the keyboard, and rest easy — history never leaves your machine.',
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
        title: 'Your day, right next to the clock',
        body: 'Current weather on one side, your next meeting on the other. Alerts before calls start, snooze when you need five more minutes — all in the panel you already look at.',
        file: 'clock.png',
      },
    ],
    modulesTitle: 'The modules',
    modulesSubtitle: 'Nineteen independent modules, in four groups. Toggle each one in preferences.',
    moduleGroups: [
      {
        name: 'Dock & Panel',
        modules: [
          { name: 'Dock', body: 'Replaces the stock dash with a smart per-monitor dock: intellihide, edge reveal, always-visible mode, Trash and drive shortcuts.' },
          { name: 'Aurora Menu', body: 'A panel menu with recent items, useful shortcuts, a configurable icon and a custom command slot.' },
          { name: 'Volume Mixer', body: 'Per-application volume sliders right in Quick Settings, with fast access to Sound Settings.' },
          { name: 'Low Battery Percentage', body: 'Shows the native battery percentage automatically while discharging below 20%.' },
          { name: 'Lock Key Indicators', body: 'Caps Lock and Num Lock indicators in the top panel.' },
          { name: 'Bluetooth Menu', body: 'Battery levels and animated icons in the Bluetooth Quick Settings panel.' },
          { name: 'Weather Clock', body: 'GNOME Weather conditions next to the panel clock, placed before or after it.' },
          { name: 'Meeting Clock', body: 'Upcoming calendar events beside the clock, with meeting alerts, snooze and lookahead controls.' },
          { name: 'Tray Icons', body: 'A real system tray: SNI app icons and GNOME background apps with smart deduplication.' },
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
          { name: 'XWayland Indicator', body: 'Adds an X11 badge to XWayland apps in the Alt+Tab switcher.' },
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
    designTitle: 'Built like an OS component, not a hack',
    design: [
      {
        title: 'Modular by design',
        body: 'Each feature is an isolated module with a clean enable/disable lifecycle. Disabling a module removes it completely, no leftovers.',
      },
      {
        title: 'TypeScript, tested',
        body: 'Written in TypeScript with unit tests for the logic and integration tests against a real headless GNOME Shell.',
      },
      {
        title: 'Privacy-first',
        body: 'Everything stays on your machine. Nothing is ever sent to third parties.',
      },
    ],
    backHome: 'About LuminusOS',
  },
  aetherisPage: {
    meta: {
      title: 'Aetheris: a native Kubernetes desktop client',
      description:
        'Aetheris is a native Kubernetes desktop client built in Rust with GTK4 and Libadwaita. Browse resources, edit YAML, open pod terminals and run day-to-day operations from a clean desktop app, not a browser tab.',
    },
    eyebrow: 'A LuminusOS project · Kubernetes · Desktop',
    title: 'Kubernetes, made native.',
    subtitle:
      'Aetheris brings Kubernetes into a fast native desktop app. Connect with your kubeconfig, organize clusters by project, inspect resources, edit YAML and handle large workloads without leaving your workflow.',
    source: 'Source on GitHub',
    flathub: 'Coming to Flathub',
    downloadGeneric: 'Download Aetheris',
    downloadLinux: 'Download for Linux',
    downloadMac: 'Download for macOS',
    downloadWindows: 'Download for Windows',
    allDownloads: 'All releases',
    status: 'Latest release',
    statusValue: 'v1.2.0',
    meaningTitle: 'Why “Aetheris”?',
    meaning:
      'From Aether, the highest and brightest layer of the sky in classical mythology. That is the idea behind Aetheris: a clear, quiet place above the noise where your clusters stay readable and under control.',
    featuresTitle: 'A calmer way to run Kubernetes',
    featuresSubtitle: 'Native tools for the work you repeat every day, without opening another browser dashboard.',
    features: [
      { name: 'Projects and clusters', body: 'Organize any number of clusters into projects and switch between them instantly.' },
      { name: 'Resource browser', body: 'Navigate workloads, networking, storage and config across all namespaces with live status.' },
      { name: 'Built for scale', body: 'Loads huge resource lists, including 10k pods, without freezing the interface.' },
      { name: 'YAML editor', body: 'Inspect and edit any object as YAML with syntax highlighting, then apply it back to the cluster.' },
      { name: 'Live logs', body: 'Stream pod logs in real time, with follow mode and full ANSI color support.' },
      { name: 'Pod terminals', body: 'Open a real interactive terminal inside any container, right in the app.' },
      { name: 'Operations', body: 'Scale, delete, cordon, drain and port-forward with a couple of clicks. No kubectl incantations.' },
      { name: 'Kubeconfig first', body: 'Reads your existing ~/.kube/config, and can import and create entries without touching your workflow.' },
      { name: 'Events and metrics', body: 'Cluster events and resource metrics beside the objects they belong to.' },
    ],
    screenshotsTitle: 'Built for real cluster work',
    screenshotsSubtitle: 'Aetheris keeps the daily Kubernetes loop close at hand: browse, inspect, edit and operate from one native interface, even when the cluster gets large.',
    screenshotSoon: 'Screenshot coming soon',
    screenshots: [
      {
        tag: 'Overview',
        title: 'The whole cluster, at a glance',
        body: 'Every cluster you care about, organized into projects. Pick one and see its workloads, nodes and health the moment it loads. No dashboard to deploy, no port-forward to remember.',
        file: 'overview.png',
      },
      {
        tag: 'Resources',
        title: 'Drill into anything',
        body: 'Browse workloads, networking, storage and config across all namespaces. The resource table stays responsive with huge lists, including 10k pods, while details, events and metrics stay one click away.',
        file: 'resources.png',
      },
      {
        tag: 'YAML',
        title: 'Edit YAML like a native',
        body: 'Open any object as YAML with full syntax highlighting, change what you need and apply it back to the cluster. A real editor, not a text box in a web page.',
        file: 'yaml.png',
      },
      {
        tag: 'Terminal',
        title: 'A shell inside the container',
        body: 'Open an interactive terminal in the selected pod and work directly where the process runs. It is powered by VTE for a real terminal experience inside the app.',
        file: 'terminal.png',
      },
    ],
    designTitle: 'Native, not wrapped',
    design: [
      {
        title: 'A real desktop app',
        body: 'Rust, GTK4, Libadwaita and Relm4. Not Electron, not a web view. Built as a focused app for Linux, Windows and macOS.',
      },
      {
        title: 'Rust all the way down',
        body: 'Built on kube-rs, the same client machinery that powers Rust operators in production. Fast, safe and light on memory.',
      },
      {
        title: 'Your credentials stay yours',
        body: 'Aetheris talks only to your clusters, using your kubeconfig. No accounts, no telemetry, no middleman.',
      },
    ],
    backHome: 'About LuminusOS',
  },
};

const ptBr: typeof en = {
  meta: {
    title: 'LuminusOS: um Linux que simplesmente funciona, em qualquer tela',
    description:
      'LuminusOS é um Linux imutável construído sobre Fedora bootc. As atualizações se instalam sozinhas, o rollback está a um reboot de distância e o desktop GNOME já vem caprichado. Feito para o seu notebook hoje, e para o seu celular, tablet, portátil e TV amanhã.',
  },
  nav: {
    overview: 'Visão geral',
    how: 'Como funciona',
    editions: 'Edições',
    aurora: 'Aurora Shell',
    auroraShort: 'Aurora',
    aetheris: 'Aetheris',
    products: 'Produtos',
    wiki: 'Wiki',
    blog: 'Blog',
    download: 'Baixar',
    donate: 'Doar',
    github: 'GitHub',
    themeToggle: 'Alternar tema claro/escuro',
  },
  hero: {
    eyebrow: 'Imutável · Atômico · Fedora bootc',
    title: 'Um sistema.',
    titleAccent: 'Todas as telas.',
    subtitle:
      'LuminusOS é aquele sistema que você instala e esquece. As atualizações chegam quietinhas em segundo plano, e se alguma aprontar, é só reiniciar e voltar para a versão anterior. Sem drama, sem missão de resgate no terminal. Feito para o seu PC hoje, sonhando com todas as outras telas da sua vida.',
    cta: 'Baixar para PC',
    ctaSecondary: 'Conheça o Aurora Shell',
    deviceNote: 'A edição Workstation já está disponível. Os outros aparelhos mostram para onde estamos indo.',
    soon: 'Em breve',
    available: 'Disponível agora',
  },
  pillars: {
    title: 'Por que LuminusOS?',
    subtitle: 'A gente cuida das partes chatas do sistema para você nunca precisar pensar nelas.',
    items: [
      {
        title: 'Ele nunca quebra',
        body: 'O núcleo do sistema é somente leitura e cada atualização é uma imagem completa e testada. Uma atualização ruim simplesmente não consegue deixar sua máquina pela metade. Ou aplica inteira, ou não aplica. Seu computador continua sendo um computador.',
      },
      {
        title: 'Atualização com botão de desfazer',
        body: 'Cada versão do sistema fica guardada no disco como um snapshot inicializável. A atualização nova começou a fazer graça? Escolha a anterior no boot e pronto, você voltou. Sem reinstalar, sem pânico.',
      },
      {
        title: 'Pronto para usar',
        body: 'Padrões sensatos, configuração automática e um desktop GNOME caprichado com o Aurora Shell. Você gasta seu tempo usando o computador, não configurando.',
      },
      {
        title: 'Aberto e feito em comunidade',
        body: 'Tudo acontece abertamente no GitHub, em cima do Fedora. Sugestões, críticas e pull requests não são só bem-vindos, eles literalmente moldam o projeto.',
      },
    ],
  },
  how: {
    title: 'Como funciona',
    subtitle:
      'O LuminusOS trata o seu sistema operacional como a nuvem trata servidores: como uma imagem, não uma pilha de arquivos.',
    steps: [
      {
        num: '01',
        title: 'O SO é uma imagem de contêiner',
        body: 'O sistema inteiro é construído e distribuído como uma imagem OCI usando Fedora bootc, a mesma tecnologia por trás dos contêineres Docker e Podman. Cada build é reproduzível e testada antes de chegar até você.',
      },
      {
        num: '02',
        title: 'Atualizações são atômicas',
        body: 'Atualizar significa baixar a próxima imagem e trocar para ela no reboot. Nada mexe no sistema em uso pacote por pacote, então atualização aplicada pela metade é impossível. Não é rara. É impossível.',
      },
      {
        num: '03',
        title: 'Rollback já vem de fábrica',
        body: 'A imagem anterior continua no disco. Se uma atualização não te agradar, o menu de boot te leva direto de volta. Seus arquivos e aplicativos ficam intactos de qualquer jeito.',
      },
      {
        num: '04',
        title: 'Aplicativos vivem em Flatpak',
        body: 'Os aplicativos vêm do Flathub, em sandbox e independentes do sistema base. O SO fica limpo, os apps ficam atualizados, e um não quebra o outro.',
      },
    ],
    terminalTitle: 'por baixo do capô',
  },
  editions: {
    title: 'Um SO, vários aparelhos',
    subtitle:
      'O mesmo núcleo confiável, adaptado para cada tela. A Workstation já existe hoje. O resto é o roadmap, já reservado no nosso sistema de build esperando a vez.',
    downloadLatest: 'Baixar',
    comingSoon: 'Em breve',
    viewAll: 'Todas as versões no GitHub',
    items: {
      workstation: {
        name: 'Workstation',
        device: 'PCs e notebooks',
        body: 'A edição principal. Um desktop GNOME refinado com o Aurora Shell, pronto para trabalho, estudo e tudo no meio do caminho.',
      },
      play: {
        name: 'Play',
        device: 'Portáteis de jogos',
        body: 'Uma experiência feita para controle, em portáteis como o Steam Deck. Pegue e jogue.',
      },
      mobile: {
        name: 'Mobile',
        device: 'Celulares',
        body: 'O mesmo núcleo confiável no seu bolso, com uma interface pensada para toque.',
      },
      tablet: {
        name: 'Tablet',
        device: 'Tablets e 2-em-1',
        body: 'GNOME amigável ao toque para tablets e conversíveis, com a base do Mobile.',
      },
      cast: {
        name: 'Cast',
        device: 'TVs e sala de estar',
        body: 'Uma experiência de tela grande para mídia e casting na sua TV.',
      },
    },
  },
  aurora: {
    eyebrow: 'Feito pelo LuminusOS',
    title: 'Aurora Shell',
    subtitle:
      'Uma extensão modular do GNOME Shell que adiciona os recursos de qualidade de vida que faltam no GNOME puro. Vem junto com o LuminusOS Workstation e funciona em qualquer distro com GNOME.',
    cta: 'Explorar o Aurora Shell',
  },
  download: {
    title: 'Baixe o LuminusOS',
    subtitle:
      'Baixe a ISO mais recente da Workstation, grave em um pendrive e instale. Essa é a última atualização que você vai fazer na mão.',
    button: 'Baixar ISO mais recente',
    note: 'Os downloads vêm do GitHub Releases. O botão sempre aponta para a versão mais recente.',
    checking: 'verificando última versão…',
    latest: 'Última versão',
  },
  support: {
    title: 'Curtiu o que estamos construindo?',
    subtitle:
      'O LuminusOS é feito por voluntários, para todo mundo. Se ele facilita a sua vida, considere dar um combustível para o projeto. Cada ajuda nos aproxima da próxima edição.',
    button: 'Apoiar o projeto',
  },
  footer: {
    tagline: 'Um Linux que simplesmente funciona, em qualquer tela.',
    project: 'Projeto',
    community: 'Comunidade',
    legal: 'O LuminusOS é construído sobre Fedora bootc. Fedora é uma marca registrada da Red Hat, Inc. Steam Deck é uma marca registrada da Valve Corporation.',
    rights: 'Comunidade LuminusOS. Código sob licenças MIT / LGPL no GitHub.',
  },
  auroraPage: {
    meta: {
      title: 'Aurora Shell: módulos de qualidade de vida para o GNOME',
      description:
        'Aurora Shell é uma extensão modular do GNOME Shell: dock, mixer de volume por aplicativo, ícones de bandeja, histórico da área de transferência, clima e agenda no relógio e mais. Cada módulo é independente, então você ativa só o que quiser.',
    },
    eyebrow: 'Um projeto LuminusOS · GNOME 50',
    title: 'O GNOME, completo.',
    subtitle:
      'Aurora Shell é uma extensão modular do GNOME Shell que adiciona os recursos de qualidade de vida que faltam no GNOME puro. Cada módulo é independente: ative exatamente o que você quer, e nada mais.',
    install: 'Instalar pelo GNOME Extensions',
    source: 'Código no GitHub',
    version: 'Versão mais recente',
    philosophyTitle: 'Um laboratório para o GNOME',
    philosophy:
      'O Aurora Shell é um campo de provas. Com o tempo, a ideia é que alguns dos seus recursos amadureçam e subam para o próprio GNOME Shell. Os módulos daqui são úteis por conta própria hoje, e bons candidatos a upstream amanhã.',
    spotlightTitle: 'Em destaque',
    spotlightSubtitle: 'Os módulos que você sente primeiro, assim que o Aurora é ativado.',
    screenshotSoon: 'Captura de tela em breve',
    spotlights: [
      {
        tag: 'Dock',
        title: 'Um dock que sabe a hora de sair',
        body: 'Um dock inteligente em cada monitor: some quando uma janela precisa do espaço, espia de volta pela borda e pode ficar fixo se você preferir. Com Lixeira e unidades removíveis inclusas.',
        file: 'dock.png',
      },
      {
        tag: 'Clipboard History',
        title: 'Sua área de transferência finalmente lembra',
        body: 'Tudo que você copia, pesquisável e a um atalho de distância. Fixe o que importa, navegue pelo teclado e fique tranquilo — o histórico nunca sai da sua máquina.',
        file: 'clipboard.png',
      },
      {
        tag: 'Volume Mixer',
        title: 'Cada app no seu próprio volume',
        body: 'Controles por aplicativo direto nas Configurações Rápidas. Abaixe o jogo sem mexer na música, e pule para as Configurações de Som quando precisar de mais.',
        file: 'mixer.png',
      },
      {
        tag: 'Weather & Meeting Clock',
        title: 'O seu dia, ao lado do relógio',
        body: 'O clima de um lado, a próxima reunião do outro. Alertas antes das chamadas começarem, soneca quando você precisa de mais cinco minutos — tudo no painel que você já olha.',
        file: 'clock.png',
      },
    ],
    modulesTitle: 'Os módulos',
    modulesSubtitle: 'Dezenove módulos independentes, em quatro grupos. Ative cada um nas preferências.',
    moduleGroups: [
      {
        name: 'Dock e Painel',
        modules: [
          { name: 'Dock', body: 'Substitui o dash padrão por um dock inteligente por monitor: intellihide, revelação na borda, modo sempre visível, Lixeira e atalhos de unidades removíveis.' },
          { name: 'Aurora Menu', body: 'Um menu no painel com itens recentes, atalhos úteis, ícone configurável e um espaço para comando personalizado.' },
          { name: 'Volume Mixer', body: 'Controle de volume por aplicativo direto nas Configurações Rápidas, com atalho para as Configurações de Som.' },
          { name: 'Low Battery Percentage', body: 'Mostra a porcentagem nativa da bateria automaticamente quando ela descarrega abaixo de 20%.' },
          { name: 'Lock Key Indicators', body: 'Indicadores de Caps Lock e Num Lock no painel superior.' },
          { name: 'Bluetooth Menu', body: 'Nível de bateria e ícones animados no painel Bluetooth das Configurações Rápidas.' },
          { name: 'Weather Clock', body: 'As condições do GNOME Clima ao lado do relógio do painel, antes ou depois dele.' },
          { name: 'Meeting Clock', body: 'Próximos eventos da agenda ao lado do relógio, com alertas de reunião, soneca e controle de antecedência.' },
          { name: 'Tray Icons', body: 'Uma bandeja de sistema de verdade: ícones SNI e apps em segundo plano do GNOME, com deduplicação inteligente.' },
        ],
      },
      {
        name: 'Aparência',
        modules: [
          { name: 'Theme Changer', body: 'Mantém o comportamento de tema claro/escuro do GNOME consistente em todo o sistema.' },
          { name: 'Icon Weave', body: 'Conserta ícones de aplicativos ausentes associando janelas não rastreadas aos seus apps, em memória.' },
          { name: 'App Search Tooltip', body: 'Mostra o nome dos apps ao passar o mouse nos resultados de busca da visão geral.' },
          { name: 'Auto Theme Switcher', body: 'Alterna entre tema claro e escuro automaticamente nos horários que você definir.' },
        ],
      },
      {
        name: 'Comportamento',
        modules: [
          { name: 'Skip Overview on Login', body: 'Inicie direto na área de trabalho. Pula a visão geral no boot.' },
          { name: 'PiP On Top', body: 'Mantém janelas Picture-in-Picture acima de tudo, automaticamente.' },
          { name: 'Focus Launched Windows', body: 'Foca janelas recém-abertas em vez de mostrar notificações de “está pronto”.' },
          { name: 'XWayland Indicator', body: 'Adiciona um selo X11 aos apps XWayland no alternador Alt+Tab.' },
        ],
      },
      {
        name: 'Privacidade e Área de Transferência',
        modules: [
          { name: 'Privacy', body: 'Privacidade ao compartilhar a tela: Não Perturbe automático e ocultação de conteúdo do painel.' },
          { name: 'Clipboard History', body: 'Histórico pesquisável da área de transferência com fixação, navegação por teclado e atalho definido por você. Tudo fica local.' },
        ],
      },
    ],
    designTitle: 'Construído como parte do sistema, não como gambiarra',
    design: [
      {
        title: 'Modular de verdade',
        body: 'Cada recurso é um módulo isolado com ciclo de vida limpo de ativar/desativar. Desativar um módulo remove ele por completo, sem sobras.',
      },
      {
        title: 'TypeScript, com testes',
        body: 'Escrito em TypeScript, com testes unitários para a lógica e testes de integração contra um GNOME Shell real em modo headless.',
      },
      {
        title: 'Privacidade em primeiro lugar',
        body: 'Tudo fica na sua máquina. Nada é enviado para terceiros, nunca.',
      },
    ],
    backHome: 'Sobre o LuminusOS',
  },
  aetherisPage: {
    meta: {
      title: 'Aetheris: um cliente desktop nativo para Kubernetes',
      description:
        'Aetheris é um cliente desktop nativo para Kubernetes, feito em Rust com GTK4 e Libadwaita. Navegue por recursos, edite YAML, abra terminais em pods e faça as operações do dia a dia em um app de verdade, não numa aba do navegador.',
    },
    eyebrow: 'Um projeto LuminusOS · Kubernetes · Desktop',
    title: 'Kubernetes, do jeito nativo.',
    subtitle:
      'Aetheris traz Kubernetes para um app desktop rápido e nativo. Conecte pelo kubeconfig, organize clusters por projeto, inspecione recursos, edite YAML e lide com workloads grandes sem sair do fluxo.',
    source: 'Código no GitHub',
    flathub: 'Em breve no Flathub',
    downloadGeneric: 'Baixar Aetheris',
    downloadLinux: 'Baixar para Linux',
    downloadMac: 'Baixar para macOS',
    downloadWindows: 'Baixar para Windows',
    allDownloads: 'Todas as releases',
    status: 'Última release',
    statusValue: 'v1.2.0',
    meaningTitle: 'Por que “Aetheris”?',
    meaning:
      'Vem de Éter, a camada mais alta e brilhante do céu na mitologia clássica. Essa é a ideia por trás do Aetheris: um lugar claro e silencioso acima do ruído, onde seus clusters continuam legíveis e sob controle.',
    featuresTitle: 'Uma forma mais calma de operar Kubernetes',
    featuresSubtitle: 'Ferramentas nativas para o trabalho que você repete todo dia, sem abrir outro dashboard no navegador.',
    features: [
      { name: 'Projetos e clusters', body: 'Organize quantos clusters quiser em projetos e alterne entre eles na hora.' },
      { name: 'Navegador de recursos', body: 'Navegue por workloads, rede, armazenamento e configuração em todos os namespaces, com status ao vivo.' },
      { name: 'Feito para escala', body: 'Carrega listas enormes de recursos, incluindo 10k pods, sem travar a interface.' },
      { name: 'Editor YAML', body: 'Inspecione e edite qualquer objeto como YAML com destaque de sintaxe, e aplique de volta no cluster.' },
      { name: 'Logs ao vivo', body: 'Acompanhe logs de pods em tempo real, com modo follow e suporte completo a cores ANSI.' },
      { name: 'Terminal no pod', body: 'Abra um terminal interativo de verdade dentro de qualquer contêiner, direto no app.' },
      { name: 'Operações', body: 'Escale, delete, faça cordon, drain e port-forward com poucos cliques. Sem decorar kubectl.' },
      { name: 'Kubeconfig em primeiro lugar', body: 'Lê o seu ~/.kube/config existente, e importa e cria entradas sem mexer no seu fluxo de trabalho.' },
      { name: 'Eventos e métricas', body: 'Eventos do cluster e métricas de recursos ao lado dos objetos a que pertencem.' },
    ],
    screenshotsTitle: 'Feito para o trabalho real com clusters',
    screenshotsSubtitle: 'O Aetheris mantém o ciclo diário de Kubernetes por perto: navegue, inspecione, edite e opere em uma interface nativa, mesmo quando o cluster cresce.',
    screenshotSoon: 'Captura de tela em breve',
    screenshots: [
      {
        tag: 'Visão geral',
        title: 'O cluster inteiro, de relance',
        body: 'Todos os clusters que importam, organizados em projetos. Escolha um e veja workloads, nós e saúde assim que carregar. Sem dashboard para instalar, sem port-forward para decorar.',
        file: 'overview.png',
      },
      {
        tag: 'Recursos',
        title: 'Mergulhe em qualquer coisa',
        body: 'Navegue por workloads, rede, armazenamento e configuração em todos os namespaces. A tabela continua responsiva com listas enormes, incluindo 10k pods, enquanto detalhes, eventos e métricas ficam a um clique.',
        file: 'resources.png',
      },
      {
        tag: 'YAML',
        title: 'Edite YAML como nativo',
        body: 'Abra qualquer objeto como YAML com destaque de sintaxe completo, mude o que precisar e aplique de volta no cluster. Um editor de verdade, não uma caixa de texto numa página web.',
        file: 'yaml.png',
      },
      {
        tag: 'Terminal',
        title: 'Um shell dentro do contêiner',
        body: 'Abra um terminal interativo no pod selecionado e trabalhe direto onde o processo roda. Ele usa VTE para entregar uma experiência real de terminal dentro do app.',
        file: 'terminal.png',
      },
    ],
    designTitle: 'Nativo, não empacotado',
    design: [
      {
        title: 'Um app desktop de verdade',
        body: 'Rust, GTK4, Libadwaita e Relm4. Nada de Electron, nada de web view. Feito como um app focado para Linux, Windows e macOS.',
      },
      {
        title: 'Rust de ponta a ponta',
        body: 'Construído sobre o kube-rs, a mesma base de cliente que move operadores Rust em produção. Rápido, seguro e leve na memória.',
      },
      {
        title: 'Suas credenciais continuam suas',
        body: 'O Aetheris fala apenas com os seus clusters, usando o seu kubeconfig. Sem contas, sem telemetria, sem intermediário.',
      },
    ],
    backHome: 'Sobre o LuminusOS',
  },
};

export const translations: Record<Lang, typeof en> = {
  en,
  'pt-br': ptBr,
};

export const links = {
  releasesLatest: 'https://github.com/luminusOS/images/releases/latest',
  releasesAll: 'https://github.com/luminusOS/images/releases',
  releasesApi: 'https://api.github.com/repos/luminusOS/images/releases/latest',
  org: 'https://github.com/luminusOS',
  imagesRepo: 'https://github.com/luminusOS/images',
  auroraRepo: 'https://github.com/luminusOS/aurora-shell',
  aetherisRepo: 'https://github.com/luminusOS/aetheris',
  aetherisReleases: 'https://github.com/luminusOS/aetheris/releases',
  aetherisReleasesApi: 'https://api.github.com/repos/luminusOS/aetheris/releases/latest',
  auroraEgo: 'https://extensions.gnome.org/extension/9389/aurora-shell/',
  auroraSite: 'https://aurora.luminusos.org',
  wikiSite: 'https://wiki.luminusos.org',
  blogSite: 'https://blog.luminusos.org',
  websiteRepo: 'https://github.com/luminusOS/website',
  donate: 'https://github.com/sponsors/luminusOS',
};
