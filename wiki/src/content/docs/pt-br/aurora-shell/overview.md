---
title: O que é o Aurora Shell
description: A extensão modular do GNOME Shell que vem com o LuminusOS Workstation.
sidebar:
  order: 1
---

O [Aurora Shell](https://aurora.luminusos.org) é uma extensão modular do
GNOME Shell feita pelo projeto LuminusOS. Ela adiciona os recursos de
qualidade de vida que faltam no GNOME puro e vem pré-instalada na
Workstation. Cada recurso é um módulo independente que você liga e desliga
separadamente, e tudo fica salvo no GSettings, então dá para configurar
tanto pela janela de preferências quanto pela linha de comando.

A extensão expõe 69 chaves de configuração: 21 interruptores de módulo mais
48 opções por módulo. A referência completa está em
[Configurações](../settings/).

## Janela de preferências

Todas as configurações aparecem nas preferências da extensão: app
Extensões → Aurora Shell → Configurações. A janela e o `gsettings` escrevem
no mesmo schema, então você pode misturar os dois sem problema.

## Os módulos

Cada módulo tem uma chave booleana `module-*`. Todos os módulos vêm ligados
por padrão, exceto o Auto Theme Switcher.

| Chave | Padrão | Módulo |
| --- | --- | --- |
| `module-dock` | `true` | Dock por monitor com auto-hide, intellihide e revelação na borda |
| `module-aurora-menu` | `true` | Menu Aurora no painel, com itens recentes e atalhos |
| `module-volume-mixer` | `true` | Volume por aplicativo nas Configurações Rápidas |
| `module-tray-icons` | `true` | Bandeja de sistema com ícones SNI e apps em segundo plano |
| `module-weather-clock` | `true` | GNOME Clima ao lado do relógio do painel |
| `module-meeting-clock` | `true` | Próximo evento da agenda ao lado do relógio, com lembretes |
| `module-clipboard-history` | `true` | Histórico de área de transferência pesquisável, com fixação |
| `module-capture-tools` | `true` | Barra de anotação e OCR local na tela de captura |
| `module-privacy` | `true` | Recursos de privacidade no compartilhamento de tela |
| `module-bluetooth-menu` | `true` | Nível de bateria e ícones animados no painel Bluetooth |
| `module-lock-key-indicators` | `true` | Indicadores de Caps Lock e Num Lock no painel |
| `module-low-battery-percentage` | `true` | Porcentagem de bateria no painel quando abaixo de 20% |
| `module-no-overview` | `true` | Pula a visão geral e inicia direto na área de trabalho |
| `module-pip-on-top` | `true` | Mantém janelas Picture-in-Picture sempre no topo |
| `module-focus-launched-windows` | `true` | Foca janelas novas em vez de mostrar notificação de "janela pronta" |
| `module-theme-changer` | `true` | Comportamento consistente de tema claro/escuro |
| `module-auto-theme-switcher` | `false` | Troca de tema claro/escuro por horário |
| `module-xwayland-indicator` | `true` | Selo X11 em apps XWayland no alternador Alt+Tab |
| `module-icon-weave` | `true` | Conserta ícones de apps ausentes automaticamente, só em memória |
| `module-app-search-tooltip` | `true` | Tooltip com o nome do app nos resultados de busca |
| `module-vela-vpn-quick-settings` | `true` | Encaminha a VPN das Configurações Rápidas pelo Vela |

### Módulos sem opções extras

Estes módulos têm apenas o interruptor `module-*`:

- **No Overview** (`module-no-overview`): pula a visão geral na inicialização.
- **Pip On Top** (`module-pip-on-top`): mantém janelas Picture-in-Picture acima de tudo.
- **Focus Launched Windows** (`module-focus-launched-windows`): foca janelas recém-abertas em vez de mostrar notificações de "janela pronta".
- **Theme Changer** (`module-theme-changer`): mantém o esquema de cores do GNOME sincronizado.
- **Volume Mixer** (`module-volume-mixer`): volume por aplicativo nas Configurações Rápidas.
- **Bluetooth Menu** (`module-bluetooth-menu`): nível de bateria e ícones animados no painel Bluetooth.
- **Low Battery Percentage** (`module-low-battery-percentage`): porcentagem de bateria no painel enquanto descarrega abaixo de 20%, sem sobrescrever quem já ativou a opção nativa do GNOME.
- **Lock Key Indicators** (`module-lock-key-indicators`): indicadores de Caps Lock e Num Lock no painel.
- **XWayland Indicator** (`module-xwayland-indicator`): selo X11 em apps XWayland no Alt+Tab.
- **Icon Weave** (`module-icon-weave`): associa janelas sem rastreio aos respectivos apps em memória; não grava nenhum arquivo.
- **App Search Tooltip** (`module-app-search-tooltip`): tooltips com o nome do app nos resultados de busca da visão geral.

Os outros dez módulos têm opções próprias, documentadas em
[Configurações](../settings/).

## Além da janela de preferências

- **Ferramenta de desenvolvedor.** Definir a variável de ambiente
  `AURORA_DEVTOOLS=1` na sessão do Shell ativa uma ferramenta interna de
  inspeção de módulos. Ela existe para o desenvolvimento do Aurora Shell,
  não para configuração do dia a dia.
- **Padrões da sessão live.** Na sessão live e de instalação do LuminusOS,
  a imagem traz um perfil dconf
  (`/etc/dconf/db/local.d/00-iso-live-mode`) que desliga a maioria dos
  módulos para manter o instalador enxuto. Sistemas instalados usam os
  padrões do schema documentados aqui.

## Em outras distros

O Aurora Shell funciona em qualquer distro com GNOME 50 ou mais novo.
Instale pelo
[extensions.gnome.org](https://extensions.gnome.org/extension/9389/aurora-shell/).

## Privacidade

Tudo fica na sua máquina. Nenhum módulo envia dados para terceiros. O OCR de
capturas roda localmente via Tesseract; a única chamada de rede é a pesquisa
na web que você mesmo dispara a partir dos resultados do OCR.

## Código-fonte

O Aurora Shell é LGPL-3.0 e desenvolvido em
[github.com/luminusOS/aurora-shell](https://github.com/luminusOS/aurora-shell).
