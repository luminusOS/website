---
title: O que é o Sirius
description: O Sirius é o instalador do LuminusOS, focado em diagnóstico e agnóstico de distro. Como funcionam o assistente e o modelo de privilégios.
sidebar:
  order: 1
---

O Sirius é o instalador que o LuminusOS traz na ISO live. Diferente de um
instalador de distro típico, que assume que seu hardware vai cooperar e só
reclama quando algo quebra, o Sirius verifica primeiro: antes de deixar você
configurar qualquer coisa, ele roda uma verificação de compatibilidade de
hardware e te avisa logo de cara se a máquina que você está usando consegue
mesmo receber a instalação.

Ele também é agnóstico de distro. O Sirius em si não sabe nada sobre o
LuminusOS especificamente. Qual SO é instalado, como é o layout de disco e
como o instalador é personalizado vêm todos de um arquivo de configuração
pequeno (`distro.toml`) que qualquer distro baseada em bootc pode fornecer.
Veja [Adaptando o Sirius para outra distro](../adapting/) se foi
isso que te trouxe aqui.

Para o fluxo completo de instalação do LuminusOS (baixar a ISO, gravar um
pendrive, primeiro boot), veja o [guia de instalação](../../guides/installation/).
Esta seção é um mergulho mais fundo em como o Sirius funciona por dentro.

## O assistente

O Sirius te guia por um conjunto fixo de telas, numa ordem controlada por
`/etc/sirius/sirius.toml`. A ordem padrão é:

1. **Boas-vindas**
2. **Diagnóstico**: verificações de hardware, veja [Diagnóstico](../diagnostics/)
3. **Rede** (some automaticamente se o NetworkManager não reportar um dispositivo Wi-Fi)
4. **Teclado**
5. **Fuso horário**
6. **Armazenamento**: disco e particionamento, veja [Armazenamento](../storage/)
7. **Usuário**
8. **Resumo**
9. **Progresso**
10. **Concluído**

Qualquer tela dessa lista pode ser desligada por completo com uma entrada
`disabled = [...]` no mesmo arquivo de configuração. Uma distro que, por
exemplo, sempre usa DHCP e não precisa da tela de rede pode simplesmente
desativá-la.

## Modelo de privilégios

A interface do Sirius roda como um processo comum, sem privilégios. Ela nunca
mexe em discos, partições ou na imagem bootc diretamente. Quando você
confirma a instalação na tela de resumo, a interface dispara um processo
separado e privilegiado (`sirius run-playbook`) via `pkexec`, autorizado
pela ação polkit `io.sirius.Installer.run-playbook`. Esse processo
privilegiado é a única parte do Sirius que de fato escreve no disco.

Essa separação significa que a interface GTK4/libadwaita com a qual você
interage o tempo todo nunca roda como root. Só a etapa estreita e
"scriptável" do playbook roda, e só depois que você confirmou que quer que a
instalação aconteça.

## Diagnóstico primeiro, não diagnóstico só

A maioria dos instaladores deixa você configurar tudo e só descobre um
problema bloqueante (RAM insuficiente, sem firmware EFI, o que for) quando a
própria instalação falha no meio do caminho. O Sirius roda suas verificações
de hardware literalmente como a primeira tela do assistente, antes de rede,
armazenamento ou qualquer outra coisa, então uma máquina que não consegue
receber a instalação te avisa isso imediatamente, em vez de depois de você
gastar dez minutos escolhendo layout de disco.

## Linha de comando

Fora do assistente, o Sirius também tem pontos de entrada via CLI úteis para
scripts e testes:

- `sirius diag`: roda as verificações de diagnóstico sozinhas e imprime o
  resultado, sem abrir a interface gráfica.
- `sirius --dry-run`: percorre o fluxo de instalação sem escrever nada no
  disco, útil para validar uma configuração de `distro.toml`/`repart.d`.
