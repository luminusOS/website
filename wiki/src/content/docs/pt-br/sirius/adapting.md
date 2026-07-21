---
title: Adaptando o Sirius para outra distro
description: Como apontar o Sirius para outra imagem bootc, layout de partições e identidade visual com distro.toml.
sidebar:
  order: 4
---

O Sirius não tem o LuminusOS fixado em nenhum lugar do código. Qual imagem é
instalada, como o disco é particionado e como o instalador é personalizado,
tudo isso vem de um único arquivo de configuração: `/etc/sirius/distro.toml`.
Uma distro que empacota o Sirius fornece sua própria cópia desse arquivo.

## Referência

```toml
[bootc]
image = "ghcr.io/example/os:latest"
# Controles opcionais de instalação do bootc:
# target_imgref = "ghcr.io/example/os:latest"
# enforce_sigpolicy = false
# kargs = ["rhgb", "quiet"]
# args = ["--skip-fetch-check"]

[disk]
repart_dir = "/usr/share/sirius/repart.d"

# Opcional: até três cartões de link mostrados na tela de progresso da instalação
# [[bento]]
# title = "Welcome to Example OS"
# desc = "Learn more about the project"
# link = "https://example.com"
# icon = "explore-symbolic"

# Opcional: identidade visual da tela de boas-vindas. `logo` (caminho de imagem) tem prioridade sobre `icon` (nome de ícone do tema).
# [branding]
# logo = "/usr/share/sirius/logo.png"
# icon = "starred-symbolic"
```

- **`[bootc] image`**: a imagem de contêiner que o `bootc install` instala.
  Obrigatório.
- **`target_imgref`**, **`enforce_sigpolicy`**, **`kargs`**, **`args`**:
  repassados para o `bootc install`, para os casos em que a referência de
  imagem instalada é diferente da imagem de origem, a política de assinatura
  precisa ser relaxada, ou você precisa de argumentos extras de kernel/instalação.
- **`[disk] repart_dir`**: onde o Sirius procura o layout de partições, veja
  abaixo.
- **`[[bento]]`**: até três cartões de link opcionais mostrados na tela de
  progresso da instalação (título, descrição, link, ícone).
- **`[branding]`**: logo ou ícone da tela de boas-vindas. `logo` (um caminho
  de imagem) tem prioridade sobre `icon` (um nome de ícone do tema) se os
  dois estiverem definidos.

## Layout de partições: repart.d

`repart_dir` aponta para um diretório de arquivos `.conf` de definição de
partição do `systemd-repart`. Eles definem o layout que o modo automático de
particionamento do Sirius cria (veja [Armazenamento](../storage/)).
O LuminusOS fornece dois, como exemplo para você partir: `10-esp.conf` (a
partição EFI) e `20-root.conf` (a partição raiz).

:::caution[As opções de MountPoint são opções de montagem cruas do kernel]
Tudo que vem depois do `:` na linha `MountPoint=` de uma configuração do
repart é passado **cru** para a chamada de sistema `mount(2)` pela biblioteca
por trás disso. Só opções reais de montagem do kernel funcionam ali:
palavras-chave de espaço de usuário como `defaults`, `auto` ou `nofail` (do
tipo que você colocaria no `/etc/fstab`) **não** são entendidas pelo
`mount(2)` e vão fazer a montagem falhar com `EINVAL`. Use só opções de nível
de kernel de verdade.
:::

## Requisitos de runtime

O Sirius espera que estas ferramentas estejam presentes no sistema
live/de destino:

- `systemd-repart`
- `bootc`
- `cryptsetup` (para instalações criptografadas)
- `pkexec` / polkit
- `mount`
- `lsblk`
- `udisks2`
- `NetworkManager`

Um agente de autenticação polkit precisa estar rodando na sessão (ou uma
regra polkit que conceda a ação `io.sirius.Installer.run-playbook`
diretamente), senão o `pkexec` falha. Veja
[Solução de problemas](../troubleshooting/).
