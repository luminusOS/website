export type Localized = { en: string; 'pt-br': string };

export interface Screenshot {
  file: string;
  caption: Localized;
}

export interface Release {
  version: string;
  date: string;
  notes: string;
}

export interface AppEntry {
  id: string;
  name: string;
  summary: Localized;
  category: Localized;
  description: { en: string[]; 'pt-br': string[] };
  highlights: { en: string[]; 'pt-br': string[] };
  notice?: Localized;
  license: string;
  developer: string;
  homepage: string;
  issues: string;
  source: string;
  productPage: string;
  /** False until the app is published in the Luminus Flatpak repository. */
  inFlatpakRepo?: boolean;
  icon: string;
  accent: string;
  screenshots: Screenshot[];
  releases: Release[];
  requirements: { en: string; 'pt-br': string };
  rating: { en: string; 'pt-br': string };
  keywords: string[];
}

// Mirrors flatpak-repo/catalog.json and each application's AppStream metainfo.
// Update it when an application is added to the catalog or ships a release.
export const apps: AppEntry[] = [
  {
    id: 'dev.luminusos.ZapTide',
    name: 'ZapTide',
    summary: {
      en: 'A native WhatsApp client',
      'pt-br': 'Um cliente nativo do WhatsApp',
    },
    category: { en: 'Communication', 'pt-br': 'Comunicação' },
    description: {
      en: [
        'A native WhatsApp companion for Linux, written in Rust without a browser engine. Link your phone to read and send messages.',
        'Browse chats, search your local archive, send attachments and voice messages, and use emoji, GIFs and stickers. Closing the window can keep the connection running in the system tray.',
      ],
      'pt-br': [
        'Um app complementar do WhatsApp para Linux, escrito em Rust sem motor de navegador. Vincule seu celular para ler e enviar mensagens.',
        'Navegue pelas conversas, pesquise seu histórico local, envie anexos e mensagens de voz e use emojis, GIFs e figurinhas. Fechar a janela pode manter a conexão ativa na bandeja do sistema.',
      ],
    },
    highlights: {
      en: [
        'Several WhatsApp accounts at once',
        'Voice and video calls, polls, reactions and stickers',
        'Message archive encrypted with your OS keyring',
        'Light, dark and custom themes',
      ],
      'pt-br': [
        'Várias contas do WhatsApp ao mesmo tempo',
        'Chamadas de voz e vídeo, enquetes, reações e figurinhas',
        'Histórico criptografado com o chaveiro do sistema',
        'Temas claro, escuro e personalizado',
      ],
    },
    notice: {
      en: 'ZapTide is an independent project and is not affiliated with WhatsApp or Meta. Using an unofficial client may violate WhatsApp’s terms and put your account at risk.',
      'pt-br':
        'O ZapTide é um projeto independente e não é afiliado ao WhatsApp ou à Meta. Usar um cliente não oficial pode violar os termos do WhatsApp e colocar sua conta em risco.',
    },
    license: 'GPL-3.0-or-later',
    developer: 'LuminusOS',
    homepage: 'https://github.com/luminusOS/zaptide',
    issues: 'https://github.com/luminusOS/zaptide/issues',
    source: 'https://github.com/luminusOS/zaptide',
    productPage: '/zaptide',
    icon: '/icons/dev.luminusos.ZapTide.svg',
    accent: '#33d17a',
    screenshots: [
      {
        file: '/img/zaptide/screenshot.webp',
        caption: {
          en: 'Chats and a sample conversation',
          'pt-br': 'Conversas e uma conversa de exemplo',
        },
      },
    ],
    releases: [
      {
        version: '0.8.0',
        date: '2026-11-04',
        notes:
          'One-to-one voice and video calls, with a Calls tab, redesigned call screens and answer and decline buttons on incoming call notifications. Hovering a message shows quick reactions, and starred messages show a star. The photo and video viewer has a new design and zooms freely with Ctrl and the mouse wheel. An opt-in setting deletes old downloaded media.',
      },
      {
        version: '0.7.4',
        date: '2026-10-29',
        notes:
          'GIFs release playback resources when hidden, and native video playback avoids the GTK backend’s descriptor leak and early-close failure. Release builds verify Flatpak bundles and retain a provenance manifest.',
      },
      {
        version: '0.7.3',
        date: '2026-10-23',
        notes:
          'Escape closes the open chat and returns to the home screen. Messages can be starred, and each chat lists its starred messages in Contact Info or Group Info. The tray icon follows the desktop’s light or dark preference.',
      },
      {
        version: '0.7.2',
        date: '2026-10-16',
        notes:
          'Links you send now carry a preview with the page title, description and image, loaded in the composer before you send. Each account can turn link previews off, synced with its phone.',
      },
    ],
    requirements: {
      en: 'Internet access. A display at least 760 px wide.',
      'pt-br': 'Acesso à internet. Tela com pelo menos 760 px de largura.',
    },
    rating: {
      en: 'Intense social chat (OARS)',
      'pt-br': 'Bate-papo social intenso (OARS)',
    },
    keywords: ['whatsapp', 'chat', 'messaging', 'mensagens', 'rust', 'gtk4'],
  },
  {
    id: 'org.luminusos.Aetheris',
    name: 'Aetheris',
    summary: {
      en: 'Native Kubernetes client for GNOME',
      'pt-br': 'Cliente Kubernetes nativo para GNOME',
    },
    category: { en: 'Developer Tools', 'pt-br': 'Ferramentas de desenvolvimento' },
    description: {
      en: [
        'Aetheris connects to Kubernetes and OpenShift clusters through kubeconfig and provides a native GTK interface for browsing and operating cluster resources.',
        'Browse resources with live watch updates, inspect YAML, conditions, events, related pods, logs and metrics, apply changes after reviewing a diff, and open interactive pod terminals.',
      ],
      'pt-br': [
        'O Aetheris conecta a clusters Kubernetes e OpenShift por meio do kubeconfig e oferece uma interface GTK nativa para navegar e operar recursos do cluster.',
        'Navegue por recursos com atualizações ao vivo, inspecione YAML, condições, eventos, Pods relacionados, logs e métricas, aplique alterações depois de revisar o diff e abra terminais interativos em Pods.',
      ],
    },
    highlights: {
      en: [
        'Organize clusters by project',
        'Live resource tables, even with 10k pods',
        'Review YAML changes before applying them',
        'Logs, port forwarding and pod terminals',
      ],
      'pt-br': [
        'Organize clusters por projeto',
        'Tabelas de recursos ao vivo, mesmo com 10 mil Pods',
        'Revise as alterações de YAML antes de aplicar',
        'Logs, encaminhamento de portas e terminais em Pods',
      ],
    },
    license: 'GPL-3.0-or-later',
    developer: 'LuminusOS',
    homepage: 'https://github.com/luminusOS/aetheris',
    issues: 'https://github.com/luminusOS/aetheris/issues',
    source: 'https://github.com/luminusOS/aetheris',
    productPage: '/aetheris',
    icon: '/icons/org.luminusos.Aetheris.svg',
    accent: '#3584e4',
    screenshots: [
      {
        file: '/img/aetheris/overview.png',
        caption: { en: 'Project and cluster overview', 'pt-br': 'Visão geral de projetos e clusters' },
      },
      {
        file: '/img/aetheris/resources.png',
        caption: { en: 'Resource browser', 'pt-br': 'Navegador de recursos' },
      },
      {
        file: '/img/aetheris/yaml.png',
        caption: { en: 'YAML editor', 'pt-br': 'Editor de YAML' },
      },
      {
        file: '/img/aetheris/terminal.png',
        caption: { en: 'A shell inside the container', 'pt-br': 'Um shell dentro do contêiner' },
      },
    ],
    releases: [
      {
        version: '1.5.1',
        date: '2026-10-28',
        notes: 'Builds the Flatpak for x86_64 and aarch64 and publishes checksums with each release.',
      },
      {
        version: '1.5.0',
        date: '2026-08-23',
        notes: 'Adds a diff confirmation step before applying edited YAML and semantic highlighting for common structured log formats.',
      },
      {
        version: '1.4.0',
        date: '2026-07-10',
        notes:
          'Object caching, favorite objects, better status filters and clearer container resource metrics. Version 1.4.1 adds Deployment pod states and Service and Ingress detail.',
      },
      {
        version: '1.3.0',
        date: '2026-07-06',
        notes: 'A reworked sidebar, a clearer first-run flow, better namespace management and the first Brazilian Portuguese translation.',
      },
    ],
    requirements: {
      en: 'Internet access to reach your clusters. Keyboard, mouse or touch.',
      'pt-br': 'Acesso à internet para alcançar seus clusters. Teclado, mouse ou toque.',
    },
    rating: { en: 'Suitable for all ages (OARS)', 'pt-br': 'Adequado para todas as idades (OARS)' },
    keywords: ['kubernetes', 'k8s', 'openshift', 'devops', 'cluster', 'kubeconfig', 'yaml'],
  },
  {
    id: 'io.github.luminusos.DeskUnion',
    name: 'DeskUnion',
    summary: {
      en: 'Mouse and keyboard sharing via LAN',
      'pt-br': 'Compartilhe mouse e teclado pela rede local',
    },
    category: { en: 'Utility', 'pt-br': 'Utilitário' },
    description: {
      en: [
        'Share one mouse and keyboard between computers on the same network. Move the pointer past a screen edge to control the neighbouring computer.',
        'Traffic is encrypted with DTLS and devices are paired by certificate fingerprint. Optionally stream a client’s audio to the server and share plain-text clipboard contents between computers.',
      ],
      'pt-br': [
        'Compartilhe um mouse e teclado entre computadores da mesma rede. Mova o ponteiro além da borda da tela para controlar o computador vizinho.',
        'O tráfego é criptografado com DTLS e os dispositivos são pareados pela impressão digital do certificado. Opcionalmente, transmita o áudio de um cliente para o servidor e compartilhe texto simples da área de transferência entre os computadores.',
      ],
    },
    highlights: {
      en: [
        'Cross a screen edge to control another computer',
        'DTLS-encrypted traffic with certificate fingerprint pairing',
        'Plain-text clipboard sharing and client audio streaming',
        'Tray icon, CLI and daemon mode',
      ],
      'pt-br': [
        'Atravesse a borda da tela para controlar outro computador',
        'Tráfego criptografado com DTLS e pareamento por impressão digital do certificado',
        'Compartilhamento de texto da área de transferência e transmissão de áudio do cliente',
        'Ícone na bandeja, CLI e modo daemon',
      ],
    },
    notice: {
      en: 'DeskUnion is not in the Luminus Flatpak repository yet. Download it from the GitHub releases page. macOS, Windows and Android builds are there too.',
      'pt-br':
        'O DeskUnion ainda não está no repositório Flatpak do Luminus. Baixe-o na página de versões do GitHub, onde também há builds para macOS, Windows e Android.',
    },
    license: 'GPL-3.0-or-later',
    developer: 'LuminusOS',
    homepage: 'https://github.com/luminusOS/deskunion',
    issues: 'https://github.com/luminusOS/deskunion/issues',
    source: 'https://github.com/luminusOS/deskunion',
    productPage: '/deskunion',
    inFlatpakRepo: false,
    icon: '/icons/io.github.luminusos.DeskUnion.svg',
    accent: '#1a5fb4',
    screenshots: [
      {
        file: '/img/deskunion/deskunion-light.webp',
        caption: { en: 'Connections page in light mode', 'pt-br': 'Página de conexões no modo claro' },
      },
      {
        file: '/img/deskunion/deskunion-dark.webp',
        caption: { en: 'Connections page in dark mode', 'pt-br': 'Página de conexões no modo escuro' },
      },
    ],
    releases: [
      {
        version: '0.3.0',
        date: '2026-11-17',
        notes:
          'Rebuilds the window on libadwaita navigation and pages: the sidebar collapses on narrow screens, each view has one suggested action, and the role is chosen on a first-run page and in Settings. A client pins the server certificate the first time it connects and refuses a different one until you trust it. Recovers capture and emulation sessions that the desktop ended, stops wlroots from dropping emulated input, ignores outputs that were removed, and fixes the tray fallback icon on Linux. Android APKs are now named like the other release assets.',
      },
      {
        version: '0.2.11',
        date: '2026-11-04',
        notes: 'Adds Android APK packaging through GTK Android Builder (Pixiewood) and Meson, runs the background service in-process on Android, and adds the Android APK build to CI and release workflows.',
      },
      {
        version: '0.2.10',
        date: '2026-11-03',
        notes:
          'Fixes robotized Microsoft Teams call audio in Windows loopback capture. Aligns the GTK interface with the Adwaita Design Kit, adding in-app banners for capture warnings, reconnecting state and active audio streaming, and a keyboard shortcuts dialog.',
      },
      {
        version: '0.2.9',
        date: '2026-10-23',
        notes: 'Captures the voices of Microsoft Teams calls on Windows by capturing the output Teams plays on while it is playing. Also updates the Windows audio library, which fixes the lookup of an output chosen in the Audio page.',
      },
    ],
    requirements: {
      en: 'Computers on the same local network. Linux: GNOME 45 or later, KDE Plasma 6.1 or later, or a wlroots compositor. A display at least 360 px wide.',
      'pt-br': 'Computadores na mesma rede local. Linux: GNOME 45 ou superior, KDE Plasma 6.1 ou superior ou um compositor wlroots. Tela com pelo menos 360 px de largura.',
    },
    rating: { en: 'Suitable for all ages (OARS)', 'pt-br': 'Adequado para todas as idades (OARS)' },
    keywords: ['kvm', 'mouse', 'keyboard', 'teclado', 'share', 'lan', 'clipboard', 'gtk4'],
  },
];

export const featuredId = 'org.luminusos.Aetheris';
