---
title: Instalando apps
description: Instalando e gerenciando aplicativos Flatpak no LuminusOS.
sidebar:
  order: 3
---

Os aplicativos no LuminusOS vêm do [Flathub](https://flathub.org) como
Flatpaks: em sandbox, independentes do sistema base e sempre atualizados.

## Pelo GNOME Software

Abra o **Software**, pesquise, clique em instalar. Esse é o guia inteiro.

## Pelo terminal

```sh
flatpak search obsidian
flatpak install flathub md.obsidian.Obsidian
flatpak update
```

## Por que Flatpak?

- **O SO fica limpo.** Os apps nunca modificam o sistema base, então
  atualizações e rollbacks do SO nunca tocam nos seus apps, e vice-versa.
- **Sandbox.** Os apps rodam com permissões limitadas que você pode inspecionar
  e ajustar em Configurações → Aplicativos.
- **Sempre atualizados.** As atualizações de apps vêm direto do Flathub,
  independentes das versões do SO.

## E ferramentas de linha de comando e desenvolvimento?

Para ambientes de desenvolvimento, use contêineres
[Toolbox](https://containertoolbx.org/), inclusos de fábrica:

```sh
toolbox create
toolbox enter
sudo dnf install gcc make   # dentro do toolbox, mutável como sempre
```

Seu diretório home é compartilhado com o toolbox, o sistema hospedeiro
continua imutável.
