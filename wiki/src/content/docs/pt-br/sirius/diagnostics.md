---
title: Diagnóstico
description: O que o Sirius verifica antes de deixar você instalar, e como configurar verificações obrigatórias vs. de aviso.
sidebar:
  order: 2
---

Antes de deixar você mexer em rede, armazenamento ou qualquer outra coisa, o
Sirius roda uma verificação de diagnóstico na máquina. É a primeira tela do
assistente, e não dá pra pular: se uma verificação marcada como obrigatória
falhar, a instalação não segue em frente.

## As verificações

| Verificação | O que ela olha |
| --- | --- |
| `uefi` | Se existe firmware EFI |
| `ram` | RAM utilizável comparada a um mínimo configurado |
| `disk_space` | Espaço livre suficiente para instalar |
| `secure_boot` | Se o Secure Boot está ativado |
| `network` | Se existe uma conexão de rede disponível |
| `virt` | Se a máquina está rodando dentro de uma VM |

## require vs. warn

Cada verificação é obrigatória ou só um aviso, configurado em
`/etc/sirius/sirius.toml`:

```toml
[diagnostics]
require = ["uefi", "ram", "disk_space"]
warn = ["secure_boot", "network", "virt"]
min_ram_gib = 2
```

- **`require`** — se qualquer uma dessas falhar, o Sirius bloqueia a
  instalação. No LuminusOS são firmware UEFI, RAM suficiente e espaço em
  disco suficiente.
- **`warn`** — aparece na tela de diagnóstico mas não bloqueia nada. Secure
  Boot ativado, sem conexão de rede, ou rodar dentro de uma VM valem um
  aviso, mas não valem parar o assistente.
- **`min_ram_gib`** — o limite de RAM que a verificação `ram` usa, em GiB. O
  padrão no próprio Sirius é `2`, mas a imagem Workstation do LuminusOS eleva
  isso para `5`. Veja
  [Solução de problemas → por que a instalação precisa de tanta RAM](/pt-br/sirius/troubleshooting/#por-que-a-instalação-precisa-de-tanta-ram)
  para entender o motivo.

## Ordem das telas e telas desativadas

O mesmo arquivo de configuração também controla quais telas do assistente
aparecem e em que ordem:

```toml
[pages]
order = ["welcome", "diagnostics", "network", "keyboard", "timezone", "storage", "user", "summary", "progress", "finished"]
disabled = []
```

`order` define a sequência; qualquer coisa listada em `disabled` é pulada
por completo. A tela `network` também some sozinha se o NetworkManager
reportar que não há dispositivo Wi-Fi na máquina, independente do que estiver
em `disabled`.
