---
title: Solução de problemas
description: Problemas comuns na instalação com o Sirius, de autenticação polkit a discos que não aparecem e requisitos de RAM.
sidebar:
  order: 5
---

## O pkexec falha / a instalação não começa

O trabalho real de disco e bootc do Sirius acontece num processo separado e
privilegiado, disparado com `pkexec` (veja
[Visão geral → modelo de privilégios](../overview/#modelo-de-privilégios)).
O `pkexec` precisa de um agente de autenticação polkit rodando na sua sessão,
ou de uma regra polkit que conceda a ação `io.sirius.Installer.run-playbook`
diretamente. Se nenhum dos dois estiver presente, o `pkexec` sai com o código
de status **127** e a instalação não consegue seguir.

Na ISO live do LuminusOS isso já vem configurado. Se você bater nesse
problema ao adaptar o Sirius para outro ambiente, garanta que um agente
polkit esteja rodando antes do Sirius disparar a etapa privilegiada.

## Um disco que eu esperava ver não aparece no seletor

A lista de discos da tela de armazenamento filtra discos que estão
em uso no momento: o mais comum é o próprio pendrive ou a ISO de onde você
deu boot. Isso é proposital: evita que você particione sem querer a mídia de
onde o instalador está rodando. Se um disco que você esperava não aparece,
confira se ele não está montado ou em uso pela sessão live de alguma outra
forma.

## Por que a instalação precisa de tanta RAM?

A ISO live do LuminusOS roda inteira na RAM. O sistema de arquivos raiz é
um tmpfs. Durante a instalação, o `bootc install to-filesystem` copia a
imagem de contêiner comprimida (o próprio sistema operacional, vários
gigabytes) para um diretório temporário (`image_copy_tmp_dir`, atualmente
`/var/tmp`). Na ISO live, `/var/tmp` *também* é um tmpfs sustentado por RAM,
dimensionado para 75% da RAM total especificamente para sobrar espaço para
essa cópia.

Então o pico de memória durante a instalação é, mais ou menos: o overhead da
própria sessão live, mais a cópia inteira reservada da imagem sendo
instalada. É por isso que a configuração da Workstation do LuminusOS eleva o
`min_ram_gib` para `5` (veja
[Diagnóstico → require vs. warn](../diagnostics/#require-vs-warn)),
bem acima do padrão `2` do próprio Sirius. Testes no mundo real mostraram que
um notebook anunciado com "6 GB" de RAM costuma reportar algo mais perto de
5,7 GiB *utilizáveis* pelo sistema, depois de descontar reservas de firmware
e hardware, então o limite precisa de uma margem para valer o que promete.

:::note[Melhoria planejada]
Isso ainda não está implementado, mas o projeto LuminusOS está acompanhando
como trabalho futuro: redirecionar esse diretório temporário de cópia para o
disco de destino (depois de particionado e montado) em vez da RAM. Isso
permitiria instalações com bem menos memória física, já que a cópia da
imagem deixaria de competir por RAM com a sessão live. Isso exige mudanças em
como o diretório temporário de cópia de imagem do bootc é configurado durante
o boot live, e isso ainda não foi feito.
:::
