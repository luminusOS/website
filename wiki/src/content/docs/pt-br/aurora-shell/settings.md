---
title: Configurações
description: Todas as configurações do Aurora Shell, agrupadas por módulo, e como alterá-las com gsettings.
sidebar:
  order: 2
---

Todas as configurações do Aurora Shell ficam em um único schema do
GSettings. Esta página mostra como ler e alterar essas chaves pela linha de
comando e depois lista cada opção, agrupada por módulo. Para a lista de
módulos e a janela de preferências, veja [O que é o Aurora
Shell](../overview/).

## Configurações via gsettings

O id do schema é:

```text
org.gnome.shell.extensions.aurora-shell
```

O schema compilado não é instalado em `/usr/share/glib-2.0/schemas`, então a
ferramenta `gsettings` precisa do parâmetro `--schemadir` apontando para o
diretório de schemas da extensão. Onde fica esse diretório depende de como a
extensão foi instalada:

- LuminusOS Workstation (instalação no sistema):
  `/usr/share/gnome-shell/extensions/aurora-shell@luminusos.github.io/schemas`
- Instalação do usuário (extensions.gnome.org ou `gnome-extensions install`):
  `~/.local/share/gnome-shell/extensions/aurora-shell@luminusos.github.io/schemas`
- Checkout de desenvolvimento: `dist/schemas` depois de `just build`

Os exemplos abaixo usam o caminho do LuminusOS. Defina uma vez por sessão do
terminal:

```bash
SCHEMADIR=/usr/share/gnome-shell/extensions/aurora-shell@luminusos.github.io/schemas
SCHEMA=org.gnome.shell.extensions.aurora-shell
```

Listar todas as chaves com os valores atuais:

```bash
gsettings --schemadir "$SCHEMADIR" list-recursively "$SCHEMA"
```

Ler, alterar e resetar uma chave:

```bash
gsettings --schemadir "$SCHEMADIR" get "$SCHEMA" dock-show-trash
gsettings --schemadir "$SCHEMADIR" set "$SCHEMA" dock-show-trash false
gsettings --schemadir "$SCHEMADIR" reset "$SCHEMA" dock-show-trash
```

Resetar o schema inteiro para os padrões de fábrica:

```bash
gsettings --schemadir "$SCHEMADIR" reset-recursively "$SCHEMA"
```

:::tip
Exporte `GSETTINGS_SCHEMA_DIR="$SCHEMADIR"` uma vez e você pode tirar o
`--schemadir` de todos os comandos.
:::

As mudanças valem na hora: o Aurora Shell observa as próprias configurações
e reage ao vivo, sem logout nem reinício do Shell. Ao alternar uma chave
`module-*`, o módulo correspondente inicia ou para na hora.

## Dock

Por padrão, a dock se esconde automaticamente e reaparece quando o ponteiro
encosta na borda inferior da tela. `dock-always-show` e `dock-intellihide`
mudam esse comportamento; se as duas estiverem desligadas, vale o auto-hide
padrão. Se as duas estiverem ligadas, `dock-always-show` vence.

| Chave | Tipo | Padrão | Efeito |
| --- | --- | --- | --- |
| `dock-always-show` | booleano | `false` | Mantém a dock sempre visível e reserva espaço na tela para que janelas nunca a cubram |
| `dock-intellihide` | booleano | `false` | Mantém a dock visível até uma janela sobrepor o espaço dela |
| `dock-show-on-all-monitors` | booleano | `false` | Mostra a dock em todos os monitores elegíveis, não só no principal |
| `dock-show-trash` | booleano | `true` | Mostra o ícone da lixeira; clique abre, botão direito esvazia |
| `dock-show-external-storage` | booleano | `true` | Mostra drives removíveis na dock enquanto conectados |

## Aurora Menu

| Chave | Tipo | Padrão | Efeito |
| --- | --- | --- | --- |
| `aurora-menu-icon` | texto | `'aurora'` | Ícone do painel: `aurora`, `gnome` ou `luminus` (qualquer outro valor volta para `aurora`) |
| `aurora-menu-hide-activities` | booleano | `false` | Esconde o botão Atividades enquanto o Aurora Menu está ativo |
| `aurora-menu-show-about` | booleano | `true` | Mostra o item Sobre este PC |
| `aurora-menu-show-home` | booleano | `true` | Mostra o item Pasta Pessoal |
| `aurora-menu-show-downloads` | booleano | `true` | Mostra o item Downloads |
| `aurora-menu-show-recent-items` | booleano | `true` | Mostra o submenu Itens Recentes |
| `aurora-menu-show-settings` | booleano | `true` | Mostra o item Configurações do Sistema |
| `aurora-menu-show-software` | booleano | `true` | Mostra o item Software |
| `aurora-menu-show-extensions` | booleano | `true` | Mostra o item Extensões |
| `aurora-menu-app-store-command` | texto | `'gnome-software'` | Comando executado pelo item Software |
| `aurora-menu-custom-items` | lista de textos | `[]` | Comandos extras no menu, um por entrada, no formato `Rótulo \| Comando` |
| `aurora-menu-custom-item-enabled` | booleano | `false` | Mostra um comando personalizado adicional |
| `aurora-menu-custom-item-label` | texto | `''` | Rótulo do item personalizado único |
| `aurora-menu-custom-item-command` | texto | `''` | Comando do item personalizado único |

Os itens personalizados usam o formato `Rótulo | Comando`, um por entrada da
lista. Quando `aurora-menu-custom-items` tem entradas, ela tem prioridade
sobre o trio `custom-item-*`, que existe para configurações simples.

```bash
gsettings --schemadir "$SCHEMADIR" set "$SCHEMA" aurora-menu-custom-items \
  "['Terminal | ptyxis', 'Arquivos | nautilus']"
```

## Meeting Clock

Mostra os próximos eventos da agenda ao lado do relógio do painel e pode te
avisar antes de uma reunião começar.

| Chave | Tipo | Padrão | Efeito |
| --- | --- | --- | --- |
| `meeting-clock-alerts-enabled` | booleano | `true` | Avisa quando uma reunião está prestes a começar |
| `meeting-clock-alert-minutes-before` | int (0-60) | `1` | Quantos minutos antes do início o alerta aparece |
| `meeting-clock-snooze-minutes` | int (1-60) | `5` | Minutos até um alerta adiado aparecer de novo |
| `meeting-clock-alert-events-without-link` | booleano | `false` | Alerta também eventos sem link de chamada |
| `meeting-clock-panel-reveal-interval-minutes` | int (1-60) | `5` | Intervalo, em minutos, entre as revelações automáticas no painel |
| `meeting-clock-panel-lookahead-minutes` | int (0-1440) | `60` | Antecedência máxima (minutos) para um evento aparecer ao lado do relógio |
| `meeting-clock-exclude-all-day-events` | booleano | `true` | Ignora eventos de dia inteiro no relógio e nos alertas |

## Weather Clock

| Chave | Tipo | Padrão | Efeito |
| --- | --- | --- | --- |
| `weather-clock-after-clock` | booleano | `false` | Coloca o indicador de clima depois do relógio, em vez de antes |

## Tray Icons

| Chave | Tipo | Padrão | Efeito |
| --- | --- | --- | --- |
| `tray-icons-limit` | int (1-20) | `4` | Quantidade de ícones visíveis antes de aparecer a seta de expandir |
| `tray-icons-icon-size` | int (14-24) | `18` | Tamanho dos ícones da bandeja, em pixels |
| `tray-icons-attention-timeout` | int (1-30) | `5` | Segundos até a bandeja recolher sozinha depois de um evento NeedsAttention |
| `tray-icons-dedup-bg-apps` | booleano | `true` | Esconde o app em segundo plano quando o mesmo app já tem ícone SNI |
| `tray-icons-hide-bg-quick-settings` | booleano | `true` | Esconde a seção Apps em Segundo Plano do painel de Configurações Rápidas |
| `tray-icons-recolor-symbolic-pixmaps` | booleano | `true` | Recolore pixmaps SNI monocromáticos para combinar com o tema do painel |

## Clipboard History

| Chave | Tipo | Padrão | Efeito |
| --- | --- | --- | --- |
| `clipboard-history-shortcut` | lista de textos | `[]` | Atalho de teclado para abrir o painel, no formato de acelerador do GNOME |
| `clipboard-history-auto-paste` | booleano | `true` | Digita o item escolhido no campo que estava em foco; precisa de um campo Wayland com suporte a text-input-v3 |
| `clipboard-history-poll-interval` | int (250-5000) | `1000` | Intervalo de verificação da área de transferência, em milissegundos |

Defina um atalho com a sintaxe padrão de acelerador:

```bash
gsettings --schemadir "$SCHEMADIR" set "$SCHEMA" clipboard-history-shortcut "['<Super>v']"
```

## Capture Tools

Adiciona uma barra flutuante de anotação à tela de captura do GNOME, com OCR
local opcional via Tesseract.

| Chave | Tipo | Padrão | Efeito |
| --- | --- | --- | --- |
| `capture-tools-ocr-enabled` | booleano | `true` | Mostra a ação de OCR ao lado do controle de ponteiro na tela de captura |
| `capture-tools-ocr-languages` | texto | `''` | Códigos de idioma do Tesseract separados por `+`; vazio usa o idioma da sessão mais inglês |
| `capture-tools-web-search-engine` | texto | `'duckduckgo'` | Buscador usado para pesquisar o texto reconhecido: `google`, `duckduckgo` ou `bing` |
| `capture-tools-color` | texto | `'#e01b24'` | Última cor escolhida na barra de anotação |
| `capture-tools-stroke-width` | int (1-16) | `4` | Última espessura de traço escolhida na barra de anotação |

Exemplo para OCR em português e inglês:

```bash
gsettings --schemadir "$SCHEMADIR" set "$SCHEMA" capture-tools-ocr-languages 'por+eng'
```

:::note
O OCR roda totalmente na sua máquina, via Tesseract. Instale os dados de
idioma do Tesseract correspondentes aos códigos que você listar aqui.
:::

## Privacy

| Chave | Tipo | Padrão | Efeito |
| --- | --- | --- | --- |
| `privacy-dnd-on-share` | booleano | `true` | Ativa o Não Perturbe automaticamente durante o compartilhamento de tela |
| `privacy-panel` | booleano | `true` | Esconde o conteúdo do painel durante o compartilhamento; passe o mouse para revelar |

## Vela VPN Quick Settings

Encaminha os controles de VPN das Configurações Rápidas pelo Vela, em vez do
tratamento padrão do GNOME Shell.

| Chave | Tipo | Padrão | Efeito |
| --- | --- | --- | --- |
| `vela-vpn-quick-settings-shell-fallback` | booleano | `false` | Volta ao tratamento de VPN do GNOME Shell quando o serviço D-Bus ou a API de controle do Vela está indisponível |

## Auto Theme Switcher

Alterna entre tema claro e escuro em horários fixos do dia. O módulo vem
desligado por padrão; ative `module-auto-theme-switcher` para usar estas
opções.

| Chave | Tipo | Padrão | Efeito |
| --- | --- | --- | --- |
| `auto-theme-switcher-light-hours` | int (0-23) | `6` | Hora de trocar para o tema claro |
| `auto-theme-switcher-light-minutes` | int (0-59) | `0` | Minuto de trocar para o tema claro |
| `auto-theme-switcher-dark-hours` | int (0-23) | `20` | Hora de trocar para o tema escuro |
| `auto-theme-switcher-dark-minutes` | int (0-59) | `0` | Minuto de trocar para o tema escuro |

Exemplo: tema claro às 7h30.

```bash
gsettings --schemadir "$SCHEMADIR" set "$SCHEMA" auto-theme-switcher-light-hours 7
gsettings --schemadir "$SCHEMADIR" set "$SCHEMA" auto-theme-switcher-light-minutes 30
```
