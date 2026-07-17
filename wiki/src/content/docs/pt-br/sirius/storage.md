---
title: Armazenamento
description: Como o Sirius particiona discos — configuração automática do disco inteiro com criptografia opcional, ou edição manual partição por partição.
sidebar:
  order: 3
---

A tela de armazenamento é uma tela só. No topo, um menu suspenso lista os
discos que o Sirius encontrou na máquina — discos em uso no momento (como a
mídia de boot live) ficam de fora, então você não corre o risco de apontar o
instalador sem querer para o próprio pendrive de onde você deu boot. Abaixo
do seletor, uma barra colorida mostra o layout atual de partições daquele
disco, proporcional ao tamanho de cada uma.

Nada do que está descrito abaixo é escrito no disco até você confirmar a
instalação e chegar na tela de progresso. Tudo nessa tela, automático ou
manual, fica só reservado antes disso.

## Particionamento automático

É o padrão. Com o botão "Particionamento automático" ligado, o Sirius apaga o
disco selecionado e particiona ele pra você, seguindo o layout definido pela
configuração `repart.d` da distro (veja [Adaptando o Sirius](/pt-br/sirius/adapting/)
se você estiver configurando isso). Duas opções se somam a isso:

- **Criptografia de disco inteiro (LUKS)** — todo o layout particionado fica
  criptografado.
- **Vínculo a TPM** — vincula a chave de criptografia ao TPM da máquina, para
  que uma cadeia de boot confiável desbloqueie o disco automaticamente. Sem
  pedir senha toda vez que você liga o computador.

## Particionamento manual

Desligue o "Particionamento automático" e a tela vira um editor manual: uma
lista inline de "Volumes e partições" mostra cada partição do disco —
dispositivo, sistema de arquivos, ponto de montagem, tamanho — com botões de
editar e excluir do lado de cada uma. O espaço livre aparece como uma linha
própria, com um botão para criar uma partição nova ali.

Uma opção de "descartar alterações" reseta qualquer edição reservada de
volta ao layout real atual do disco, caso você queira recomeçar antes de
confirmar.

:::note[Limitação atual]
O modo manual permite criar, formatar e excluir partições, mas não
redimensionar ou mover as que já existem. Se você precisa encolher uma
partição existente para abrir espaço, faça isso com outra ferramenta antes
(por exemplo, a partir de outra sessão live) e só depois rode o Sirius. É uma
limitação conhecida, registrada no `docs/GAPS.md` do repositório do Sirius.
:::
