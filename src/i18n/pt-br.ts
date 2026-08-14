import type { en } from './en';

export const ptBr: typeof en = {
  meta: {
    title: 'LuminusOS: um Linux que simplesmente funciona, em qualquer tela',
    description:
      'LuminusOS é uma distribuição Linux imutável baseada no Fedora bootc, com atualizações atômicas, rollback, GNOME e Aurora Shell. A edição Workstation está disponível para PCs, com outras edições planejadas.',
  },
  nav: {
    overview: 'Visão geral',
    how: 'Como funciona',
    editions: 'Edições',
    aurora: 'Aurora Shell',
    auroraShort: 'Aurora',
    aetheris: 'Aetheris',
    products: 'Produtos',
    resources: 'Recursos',
    language: 'Idioma',
    menu: 'Menu',
    wiki: 'Wiki',
    blog: 'Blog',
    download: 'Baixar',
    donate: 'Doar',
    themeToggle: 'Alternar tema claro/escuro',
  },
  hero: {
    eyebrow: 'Imutável · Atômico · Fedora bootc',
    title: 'Um sistema.',
    titleAccent: 'Todas as telas.',
    subtitle:
      'O LuminusOS baixa atualizações do sistema em segundo plano e mantém a implantação anterior disponível para rollback. A Workstation atende PCs hoje, com edições para outros dispositivos no roadmap.',
    cta: 'Baixar',
    ctaCommunity: 'Entrar na comunidade',
    deviceNote: 'A edição Workstation já está disponível. Os outros aparelhos mostram para onde estamos indo.',
    soon: 'Em breve',
    available: 'Disponível agora',
    facts: [
      { label: 'Base', value: 'Fedora 44 · bootc' },
      { label: 'Desktop', value: 'GNOME 50 · Aurora Shell' },
      { label: 'Licença', value: 'MIT · LGPL' },
    ],
  },
  pillars: {
    title: 'Por que LuminusOS?',
    subtitle: 'Atualizações atômicas, rollback e padrões sensatos reduzem a manutenção rotineira do sistema.',
    items: [
      {
        title: 'Sistema baseado em imagens',
        body: 'O núcleo do sistema é somente leitura e cada atualização chega como uma imagem completa. A nova implantação é preparada separadamente do sistema em uso.',
      },
      {
        title: 'Rollback inicializável',
        body: 'A implantação anterior continua disponível no menu de boot, permitindo voltar a ela sem reinstalar o sistema.',
      },
      {
        title: 'Pronto para usar',
        body: 'A edição Workstation combina GNOME, Aurora Shell e configuração automática com padrões voltados ao uso diário.',
      },
      {
        title: 'Aberto e feito em comunidade',
        body: 'O desenvolvimento acontece publicamente no GitHub. Issues, discussões e pull requests são abertos à comunidade.',
      },
    ],
  },
  story: {
    eyebrow: 'Nossa história',
    since: 'Desde',
    title: 'Feito para acolher quem está chegando ao Linux.',
    body: 'O LuminusOS nasceu de uma ideia na faculdade, em meados de 2020: dar um primeiro passo seguro a quem nunca havia usado Linux. O projeto reúne um sistema operacional bonito, nativo e guiado pela filosofia KISS com softwares facilitadores que reduzem o atrito da instalação ao uso diário, sem esconder o que torna o Linux poderoso.',
  },
  how: {
    title: 'Como funciona',
    subtitle:
      'O sistema base é distribuído como uma imagem versionada, em vez de ser atualizado pacote por pacote.',
    steps: [
      {
        num: '01',
        title: 'O SO é uma imagem de contêiner',
        body: 'O sistema é construído e distribuído como uma imagem OCI usando Fedora bootc. Cada versão é testada como uma imagem completa.',
      },
      {
        num: '02',
        title: 'Atualizações são atômicas',
        body: 'A próxima imagem é baixada e preparada separadamente, depois selecionada no reboot, sem modificar o sistema em uso pacote por pacote.',
      },
      {
        num: '03',
        title: 'Rollback já vem de fábrica',
        body: 'A imagem anterior continua no disco. Se uma atualização não te agradar, o menu de boot te leva direto de volta. Seus arquivos e aplicativos ficam intactos de qualquer jeito.',
      },
      {
        num: '04',
        title: 'Aplicativos vivem em Flatpak',
        body: 'Os aplicativos vêm do Flathub e ficam separados do sistema base, então atualizações de apps não modificam a imagem do sistema operacional.',
      },
    ],
    terminalTitle: 'por baixo do capô',
  },
  editions: {
    title: 'Baixe o LuminusOS',
    subtitle:
      'Baixe a edição Workstation para PCs. As edições para outros dispositivos estão listadas no roadmap.',
    roadmapTitle: 'No roadmap',
    viewAll: 'Todas as versões no SourceForge',
    items: {
      workstation: {
        name: 'Workstation',
        device: 'PCs e notebooks',
        body: 'A edição para PCs combina GNOME com Aurora Shell em notebooks e computadores desktop.',
      },
      education: {
        name: 'Education',
        device: 'Salas de aula e laboratórios',
        body: 'Uma edição derivada da Workstation para escolas e dispositivos de estudantes, com apps educacionais selecionados e gestão fácil de frota.',
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
    button: 'Baixar',
    format: 'Escolher formato',
    notes: 'Notas da versão',
    note: 'Os downloads vêm de mirrors do SourceForge no mundo todo. O botão sempre aponta para a versão mais recente.',
  },
  support: {
    title: 'Curtiu o que estamos construindo?',
    subtitle:
      'O LuminusOS é mantido por voluntários. Doações pelo Open Collective ajudam a cobrir os custos do projeto e o desenvolvimento futuro.',
    button: 'Apoiar o projeto',
  },
  community: {
    title: 'Encontre seu espaço na comunidade',
    subtitle:
      'Acompanhe o projeto, tire dúvidas, compartilhe o que você está construindo ou ajude o LuminusOS a seguir em frente.',
    items: {
      discord: { label: 'Discord' },
      reddit: { label: 'Reddit' },
      mastodon: { label: 'Mastodon' },
      x: { label: 'X' },
      openCollective: { label: 'Open Collective' },
    },
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
    title: 'GNOME, estendido.',
    subtitle:
      'O Aurora Shell adiciona módulos opcionais ao GNOME Shell, incluindo dock, ícones de bandeja, histórico da área de transferência e controles de volume por aplicativo.',
    install: 'Instalar pelo GNOME Extensions',
    source: 'Código no GitHub',
    version: 'Versão mais recente',
    philosophyTitle: 'Projetado para upstream',
    philosophy:
      'Os módulos do Aurora são desenvolvidos de forma independente enquanto amadurecem. Recursos compatíveis com o GNOME Shell podem ser propostos ao upstream.',
    spotlightTitle: 'Em destaque',
    spotlightSubtitle: 'Uma seleção dos módulos incluídos no Aurora Shell.',
    spotlights: [
      {
        tag: 'Dock',
        title: 'Dock adaptativo',
        body: 'Um dock em cada monitor que pode se ocultar perto de janelas, aparecer pela borda da tela ou permanecer fixo. Também inclui Lixeira e unidades removíveis.',
        file: 'dock.png',
      },
      {
        tag: 'Clipboard History',
        title: 'Histórico pesquisável da área de transferência',
        body: 'Pesquise itens copiados, fixe entradas e navegue pelo teclado. O histórico permanece na máquina local.',
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
        title: 'Clima e reuniões no painel',
        body: 'Mostra o clima atual e os próximos eventos da agenda ao lado do relógio, com alertas de reunião e controles de soneca.',
        file: 'clock.png',
      },
      {
        tag: 'Tray Icons',
        title: 'Ícones de bandeja e apps em segundo plano',
        body: 'Exibe ícones SNI e apps em segundo plano do GNOME no painel, removendo entradas duplicadas.',
        file: 'tray-icons.png',
      },
    ],
    modulesTitle: 'Os módulos',
    modulesSubtitle: 'Vinte e dois módulos independentes, em quatro grupos. Ative cada um nas preferências.',
    moduleGroups: [
      {
        name: 'Dock e Painel',
        modules: [
          { name: 'Dock', body: 'Substitui o dash padrão por um dock por monitor: intellihide, revelação na borda, modo sempre visível, Lixeira e atalhos de unidades removíveis.' },
          { name: 'Aurora Menu', body: 'Um menu no painel com itens recentes, atalhos úteis, ícone configurável e um espaço para comando personalizado.' },
          { name: 'Avatar no Menu de Energia', body: 'Mostra o avatar e o nome do usuário atual no menu de energia.' },
          { name: 'Volume Mixer', body: 'Controle de volume por aplicativo direto nas Configurações Rápidas, com atalho para as Configurações de Som.' },
          { name: 'Low Battery Percentage', body: 'Mostra a porcentagem nativa da bateria automaticamente quando ela descarrega abaixo de 20%.' },
          { name: 'Lock Key Indicators', body: 'Indicadores de Caps Lock e Num Lock no painel superior.' },
          { name: 'Bluetooth Menu', body: 'Nível de bateria e ícones animados no painel Bluetooth das Configurações Rápidas.' },
          { name: 'Weather Clock', body: 'As condições do GNOME Clima ao lado do relógio do painel, antes ou depois dele.' },
          { name: 'Meeting Clock', body: 'Próximos eventos da agenda ao lado do relógio, com alertas de reunião, soneca e controle de antecedência.' },
          { name: 'Tray Icons', body: 'Exibe ícones SNI e apps em segundo plano do GNOME, removendo entradas duplicadas.' },
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
          { name: 'Ferramentas de Captura', body: 'Adiciona ferramentas de anotação e OCR local opcional à interface de captura de tela do GNOME.' },
          { name: 'XWayland Indicator', body: 'Adiciona um selo X11 aos apps XWayland no alternador Alt+Tab.' },
          { name: 'Configurações Rápidas da VPN Vela', body: 'Direciona a ativação de VPN nas Configurações Rápidas pelo Vela, com alternativa opcional do GNOME Shell.' },
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
    designTitle: 'Implementação',
    design: [
      {
        title: 'Módulos independentes',
        body: 'Cada recurso tem seu próprio ciclo de ativação e desativação e pode ser desligado de forma independente.',
      },
      {
        title: 'TypeScript, com testes',
        body: 'Escrito em TypeScript, com testes unitários para a lógica e testes de integração contra um GNOME Shell real em modo headless.',
      },
      {
        title: 'Privacidade em primeiro lugar',
        body: 'Os dados dos módulos ficam na máquina local e não são enviados a terceiros.',
      },
    ],
    backHome: 'Sobre o LuminusOS',
  },
  aetherisPage: {
    meta: {
      title: 'Aetheris: um cliente desktop nativo para Kubernetes',
      description:
        'Aetheris é um cliente desktop para Kubernetes feito com Rust, GTK4 e Libadwaita. Navegue por recursos, edite YAML, acompanhe logs e abra terminais em pods.',
    },
    eyebrow: 'Um projeto LuminusOS · Kubernetes · Desktop',
    title: 'Kubernetes no desktop.',
    subtitle:
      'Conecte pelo kubeconfig, organize clusters por projeto, inspecione recursos, edite YAML e trabalhe com listas grandes em um aplicativo desktop nativo.',
    downloadGeneric: 'Baixar Aetheris',
    downloadLinux: 'Baixar para Linux',
    downloadMac: 'Baixar para macOS',
    downloadWindows: 'Baixar para Windows',
    allDownloads: 'Todas as releases',
    status: 'Última release',
    meaningTitle: 'Por que “Aetheris”?',
    meaning:
      'Vem de Éter, a camada mais alta e brilhante do céu na mitologia clássica. Essa é a ideia por trás do Aetheris: um lugar claro e silencioso acima do ruído, onde seus clusters continuam legíveis e sob controle.',
    featuresTitle: 'Ferramentas desktop para Kubernetes',
    featuresSubtitle: 'Ferramentas para navegar, inspecionar e operar clusters em um único aplicativo.',
    features: [
      { name: 'Projetos e clusters', body: 'Organize quantos clusters quiser em projetos e alterne entre eles na hora.' },
      { name: 'Navegador de recursos', body: 'Navegue por workloads, rede, armazenamento e configuração em todos os namespaces, com status ao vivo.' },
      { name: 'Listas grandes de recursos', body: 'Carrega listas com até 10k pods sem bloquear a interface.' },
      { name: 'Editor YAML', body: 'Inspecione e edite qualquer objeto como YAML com destaque de sintaxe, e aplique de volta no cluster.' },
      { name: 'Logs ao vivo', body: 'Acompanhe logs de pods em tempo real, com modo follow e suporte completo a cores ANSI.' },
      { name: 'Terminal no pod', body: 'Abra um terminal interativo dentro de um contêiner pelo aplicativo.' },
      { name: 'Operações', body: 'Escale, exclua e execute cordon, drain e port-forward pela interface.' },
      { name: 'Kubeconfig em primeiro lugar', body: 'Lê o seu ~/.kube/config existente, e importa e cria entradas sem mexer no seu fluxo de trabalho.' },
      { name: 'Eventos e métricas', body: 'Eventos do cluster e métricas de recursos ao lado dos objetos a que pertencem.' },
    ],
    screenshotsTitle: 'Fluxos de trabalho com clusters',
    screenshotsSubtitle: 'Navegue, inspecione, edite e opere recursos do cluster na mesma interface.',
    screenshots: [
      {
        tag: 'Visão geral',
        title: 'Visão geral de projetos e clusters',
        body: 'Organize clusters em projetos e consulte workloads, nós e saúde sem instalar um dashboard separado.',
        file: 'overview.png',
      },
      {
        tag: 'Recursos',
        title: 'Navegador de recursos',
        body: 'Navegue por workloads, rede, armazenamento e configuração em todos os namespaces. A tabela continua responsiva com listas enormes, incluindo 10k pods, enquanto detalhes, eventos e métricas ficam a um clique.',
        file: 'resources.png',
      },
      {
        tag: 'YAML',
        title: 'Editor YAML',
        body: 'Abra objetos como YAML com destaque de sintaxe, edite e aplique o resultado no cluster.',
        file: 'yaml.png',
      },
      {
        tag: 'Terminal',
        title: 'Um shell dentro do contêiner',
        body: 'Abra um terminal interativo baseado em VTE no pod selecionado e trabalhe dentro do contêiner.',
        file: 'terminal.png',
      },
    ],
    designTitle: 'Arquitetura nativa',
    design: [
      {
        title: 'Toolkit desktop',
        body: 'Construído com Rust, GTK4, Libadwaita e Relm4 para Linux, Windows e macOS.',
      },
      {
        title: 'Rust e kube-rs',
        body: 'Usa kube-rs para acesso à API do Kubernetes e operações com recursos.',
      },
      {
        title: 'Acesso direto ao cluster',
        body: 'O Aetheris usa seu kubeconfig para conectar diretamente aos clusters, sem contas ou telemetria.',
      },
    ],
    backHome: 'Sobre o LuminusOS',
  },
};
