export type Lang = 'en' | 'pt-br';

export const languages: { code: Lang; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'pt-br', name: 'Português (BR)', flag: '🇧🇷' },
];

export const langPrefix = (lang: Lang) => (lang === 'en' ? '' : '/pt-br');

const en = {
  htmlLang: 'en',
  home: {
    meta: {
      title: 'LuminusOS Apps: Flatpak apps from the LuminusOS repository',
      description:
        'Native apps built by the LuminusOS project, distributed as signed Flatpaks from the Luminus repository. Add it once and install with GNOME Software or the terminal.',
    },
    eyebrow: 'Flatpak · Signed · x86_64 and aarch64',
    title: 'Apps made for the desktop you already use.',
    subtitle:
      'Native GTK apps from the LuminusOS project, published as signed Flatpaks in the Luminus repository. Add the repository once and keep every app up to date.',
    searchLabel: 'Search apps',
    searchPlaceholder: 'Search by name, category or keyword',
    setup: 'Add the repository',
    browse: 'Browse apps',
    featured: 'Featured',
    allApps: 'All apps',
    allAppsSubtitle: 'Every app published in the Luminus repository.',
    count: (n: number) => (n === 1 ? '1 app' : `${n} apps`),
    noResults: 'No apps match your search.',
    viewApp: 'View app',
    repoTitle: 'One repository, every Luminus app',
    repoBody:
      'Flatpak keeps each app sandboxed and updates it independently of the system. Runtimes come from Flathub, so you only download what the app does not already share.',
    repoSteps: [
      { title: 'Add the Luminus remote', body: 'Run this once. It trusts the repository’s signing key and nothing else.' },
      { title: 'Install an app', body: 'Open the app page, or install by name from the terminal.' },
      { title: 'Updates arrive with the rest', body: 'GNOME Software and flatpak update pick up new releases automatically.' },
    ],
    repoCta: 'Read the full setup guide',
  },
  app: {
    back: 'All apps',
    by: 'by',
    install: 'Install',
    installHint: 'Opens GNOME Software or your app store. Requires Flatpak.',
    copy: 'Copy',
    copied: 'Copied',
    terminal: 'Install from the terminal',
    terminalHint: 'If the Luminus remote is not set up yet, run the first command.',
    screenshots: 'Screenshots',
    about: 'About this app',
    releases: 'What’s new',
    details: 'Details',
    version: 'Version',
    released: 'Released',
    license: 'License',
    developer: 'Developer',
    category: 'Category',
    appId: 'App ID',
    architectures: 'Architectures',
    channel: 'Channel',
    channelValue: 'Stable',
    requirements: 'Requirements',
    rating: 'Content rating',
    links: 'Links',
    homepage: 'Homepage',
    issues: 'Report an issue',
    source: 'Source code',
    productPage: 'Read more on luminusos.org',
    sandboxed: 'Sandboxed Flatpak',
    signed: 'Signed repository',
  },
  setup: {
    meta: {
      title: 'Add the Luminus Flatpak repository | LuminusOS Apps',
      description:
        'Add the Luminus Flatpak remote to install and update ZapTide, Aetheris and future LuminusOS apps from GNOME Software or the terminal.',
    },
    eyebrow: 'Setup guide',
    title: 'Add the Luminus repository',
    subtitle:
      'Flatpak is already installed on LuminusOS. On other distributions, follow the Flatpak setup guide for your system first, then come back here.',
    flatpakGuide: 'Flatpak setup guide',
    flatpakGuideLink: 'Read the setup guide →',
    stepsTitle: 'Three commands',
    steps: [
      {
        title: 'Add the remote',
        body: 'The .flatpakrepo file carries the repository’s public key, so Flatpak verifies the signed summary and every commit. Drop --user to install for all users.',
        label: 'Add remote',
      },
      {
        title: 'Install an app',
        body: 'Use the name of any app listed on this site. Runtimes are resolved from Flathub.',
        label: 'Install',
      },
      {
        title: 'Run it',
        body: 'The app also appears in your app grid and in GNOME Software.',
        label: 'Run',
      },
    ],
    oneClick: 'Prefer a click?',
    oneClickBody: 'Download the repository file and open it with GNOME Software or your Flatpak-aware app store.',
    oneClickCta: 'Download luminus.flatpakrepo',
    fullGuide: 'Read the full guide in the Wiki',
    allApps: 'Browse the apps',
  },
  footer: {
    rights: 'LuminusOS Community',
    source: 'Source',
    repo: 'Flatpak repository',
  },
};

const ptBr: typeof en = {
  htmlLang: 'pt-BR',
  home: {
    meta: {
      title: 'LuminusOS Apps: apps Flatpak do repositório do LuminusOS',
      description:
        'Apps nativos criados pelo projeto LuminusOS, distribuídos como Flatpaks assinados no repositório Luminus. Adicione uma vez e instale pelo GNOME Software ou pelo terminal.',
    },
    eyebrow: 'Flatpak · Assinado · x86_64 e aarch64',
    title: 'Apps feitos para o desktop que você já usa.',
    subtitle:
      'Apps GTK nativos do projeto LuminusOS, publicados como Flatpaks assinados no repositório Luminus. Adicione o repositório uma vez e mantenha todos os apps atualizados.',
    searchLabel: 'Buscar apps',
    searchPlaceholder: 'Busque por nome, categoria ou palavra-chave',
    setup: 'Adicionar o repositório',
    browse: 'Ver os apps',
    featured: 'Destaque',
    allApps: 'Todos os apps',
    allAppsSubtitle: 'Todos os apps publicados no repositório Luminus.',
    count: (n: number) => (n === 1 ? '1 app' : `${n} apps`),
    noResults: 'Nenhum app corresponde à busca.',
    viewApp: 'Ver app',
    repoTitle: 'Um repositório, todos os apps do Luminus',
    repoBody:
      'O Flatpak mantém cada app isolado e o atualiza separadamente do sistema. Os runtimes vêm do Flathub, então você baixa só o que o app ainda não compartilha.',
    repoSteps: [
      { title: 'Adicione o remoto do Luminus', body: 'Execute uma vez. Ele confia na chave de assinatura do repositório e em mais nada.' },
      { title: 'Instale um app', body: 'Abra a página do app ou instale pelo nome no terminal.' },
      { title: 'As atualizações chegam junto', body: 'O GNOME Software e o flatpak update pegam novas versões automaticamente.' },
    ],
    repoCta: 'Ler o guia completo',
  },
  app: {
    back: 'Todos os apps',
    by: 'por',
    install: 'Instalar',
    installHint: 'Abre o GNOME Software ou sua loja de apps. Requer Flatpak.',
    copy: 'Copiar',
    copied: 'Copiado',
    terminal: 'Instalar pelo terminal',
    terminalHint: 'Se o remoto do Luminus ainda não estiver configurado, execute o primeiro comando.',
    screenshots: 'Capturas de tela',
    about: 'Sobre este app',
    releases: 'Novidades',
    details: 'Detalhes',
    version: 'Versão',
    released: 'Lançamento',
    license: 'Licença',
    developer: 'Desenvolvedor',
    category: 'Categoria',
    appId: 'ID do app',
    architectures: 'Arquiteturas',
    channel: 'Canal',
    channelValue: 'Estável',
    requirements: 'Requisitos',
    rating: 'Classificação',
    links: 'Links',
    homepage: 'Site',
    issues: 'Relatar um problema',
    source: 'Código-fonte',
    productPage: 'Saiba mais em luminusos.org',
    sandboxed: 'Flatpak isolado',
    signed: 'Repositório assinado',
  },
  setup: {
    meta: {
      title: 'Adicione o repositório Flatpak do Luminus | LuminusOS Apps',
      description:
        'Adicione o remoto Flatpak do Luminus para instalar e atualizar ZapTide, Aetheris e os próximos apps do LuminusOS pelo GNOME Software ou pelo terminal.',
    },
    eyebrow: 'Guia de configuração',
    title: 'Adicione o repositório Luminus',
    subtitle:
      'O Flatpak já vem instalado no LuminusOS. Em outras distribuições, siga primeiro o guia de configuração do Flatpak para o seu sistema e depois volte aqui.',
    flatpakGuide: 'Guia de configuração do Flatpak',
    flatpakGuideLink: 'Leia o guia de configuração →',
    stepsTitle: 'Três comandos',
    steps: [
      {
        title: 'Adicione o remoto',
        body: 'O arquivo .flatpakrepo traz a chave pública do repositório, então o Flatpak verifica o resumo assinado e cada commit. Remova --user para instalar para todos os usuários.',
        label: 'Adicionar remoto',
      },
      {
        title: 'Instale um app',
        body: 'Use o nome de qualquer app listado neste site. Os runtimes são resolvidos pelo Flathub.',
        label: 'Instalar',
      },
      {
        title: 'Execute',
        body: 'O app também aparece na grade de aplicativos e no GNOME Software.',
        label: 'Executar',
      },
    ],
    oneClick: 'Prefere um clique?',
    oneClickBody: 'Baixe o arquivo do repositório e abra com o GNOME Software ou com sua loja de apps compatível com Flatpak.',
    oneClickCta: 'Baixar luminus.flatpakrepo',
    fullGuide: 'Leia o guia completo na Wiki',
    allApps: 'Ver os apps',
  },
  footer: {
    rights: 'Comunidade LuminusOS',
    source: 'Código-fonte',
    repo: 'Repositório Flatpak',
  },
};

export const translations: Record<Lang, typeof en> = { en, 'pt-br': ptBr };
