---
title: Instalando apps
description: Instalando e gerenciando aplicativos Flatpak no LuminusOS.
sidebar:
  order: 3
---

Os aplicativos no LuminusOS vêm do [Flathub](https://flathub.org) e do
[repositório Luminus](#repositório-luminus) como Flatpaks: em sandbox, independentes do sistema base e sempre atualizados.

## Pelo GNOME Software

Abra o **Software**, pesquise, clique em instalar. Esse é o guia inteiro.

## Pelo terminal

```sh
flatpak search obsidian
flatpak install flathub md.obsidian.Obsidian
flatpak update
```

## Repositório Luminus

Os apps do LuminusOS, como ZapTide, Aetheris e DeskUnion, são publicados no
repositório Flatpak do Luminus. Ele tem builds para x86_64 e aarch64 e reúne
apenas apps do projeto LuminusOS, construídos a partir de código público. O
repositório é assinado, e o Flatpak confere a assinatura de cada atualização.

### Adicionar o remote

```sh
flatpak remote-add --user --if-not-exists luminus https://flatpak.luminusos.org/stable/luminus-stable.flatpakrepo
```

Remova `--user` para adicionar o remote para todos os usuários. Você também pode
baixar o arquivo
[luminus-stable.flatpakrepo](https://flatpak.luminusos.org/stable/luminus-stable.flatpakrepo)
e abri-lo no GNOME Software. O arquivo traz a chave pública do repositório.

Em outras distribuições, configure o Flatpak primeiro seguindo o
[guia de configuração do Flatpak](https://flatpak.org/setup/).

### Instalar e executar um app

```sh
flatpak install --user luminus org.luminusos.DeskUnion
flatpak run org.luminusos.DeskUnion
```

Os runtimes vêm do Flathub. O app também aparece na grade de aplicativos e no
GNOME Software. O site de apps lista cada app com seu ID:
[apps.luminusos.org](https://apps.luminusos.org/pt-br).

### Atualizações

As atualizações funcionam como em qualquer remote Flatpak. Execute
`flatpak update` ou deixe o GNOME Software instalá-las em segundo plano.

### Canal de testes

Quem contribui pode usar um remote de testes separado, chamado
`luminus-testing`. Ele tem a própria chave de assinatura, e o Flatpak recusa um
remote que use a chave errada. Cada canal é uma branch própria, então `stable` e
`testing` podem ficar instaladas lado a lado.

```sh
flatpak remote-add --user luminus-testing https://raw.githubusercontent.com/luminusOS/flatpak-repo/main/descriptors/testing/luminus-testing.flatpakrepo
flatpak install --user luminus-testing org.luminusos.DeskUnion//testing
```

As duas branches usam os mesmos dados em `~/.var/app/<id>`. Uma build de testes
mais nova pode gravar dados que uma build estável mais antiga não lê, e nada
faz o downgrade de um app por você, então copie esse diretório antes de voltar
para a estável.

Para sair do canal de testes, instale primeiro a branch estável, para que o app
continue disponível, e depois desinstale a de testes:

```sh
flatpak install --user luminus org.luminusos.DeskUnion//stable
flatpak uninstall --user org.luminusos.DeskUnion//testing
```

### Mover um app instalado de um pacote de release

Um app instalado a partir de um pacote de release do GitHub mantém a origem de
onde veio, então uma instalação comum pelo remote é recusada com "already
installed from remote". Reinstale-o:

```sh
flatpak install --user --reinstall luminus org.luminusos.DeskUnion//stable
```

O app é removido e instalado de novo a partir do remote. Seus dados em
`~/.var/app/<id>` são mantidos. A branch do pacote precisa existir no remote
para o qual você está movendo.

### Remover o repositório

Desinstale os apps que você instalou por ele e depois remova o remote:

```sh
flatpak remote-delete luminus
```

Para os detalhes dos canais e dos descritores, veja a
[documentação do repositório](https://github.com/luminusOS/flatpak-repo/blob/main/docs/CLIENTS.md).

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
