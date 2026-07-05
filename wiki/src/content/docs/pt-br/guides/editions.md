---
title: Edições
description: As edições do LuminusOS, disponíveis hoje e planejadas.
sidebar:
  order: 6
---

O LuminusOS é um núcleo único adaptado para várias telas. As edições
compartilham a mesma imagem base imutável e diferem na interface e no suporte
de hardware por cima.

## Disponíveis hoje

### Workstation

A edição principal para PCs e notebooks. Desktop GNOME refinado com o Aurora
Shell, distribuída como ISO (para instalar) e qcow2 (para VMs).
[Baixe a versão mais recente](https://github.com/luminusOS/images/releases/latest).

### Core

A imagem base mínima sobre a qual tudo é construído. Útil como base bootc
para sistemas derivados: `ghcr.io/luminusos/luminusos:44`.

## No roadmap

Estas edições estão reservadas no sistema de build esperando a vez (e
contribuidores):

| Edição | Alvo |
| --- | --- |
| **Play** | Portáteis de jogos como o Steam Deck, focada em controle |
| **Mobile** | Celulares, interface para toque |
| **Tablet** | Tablets e 2-em-1, com a base do Mobile |
| **Cast** | TVs e telas de sala de estar |
| **Education** | Salas de aula, laboratórios e dispositivos de estudantes |

## Versionamento

As imagens são versionadas como `<fedora>.<data>`, por exemplo `44.20260610`
é a build de 10 de junho de 2026 sobre o Fedora 44. A CI roda nos branches
`f44`/`f45`/`f46` e publica no
[GHCR](https://github.com/orgs/luminusOS/packages).
