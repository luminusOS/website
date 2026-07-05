---
title: Atualizações e rollback
description: Como funcionam as atualizações atômicas no LuminusOS e como voltar atrás.
sidebar:
  order: 2
---

O LuminusOS se atualiza sozinho. As imagens baixam em segundo plano e aplicam
no próximo reboot, de forma atômica: a atualização aplica por completo ou não
aplica.

## Atualizações do dia a dia

Você não precisa fazer nada. O sistema consulta o registro periodicamente,
prepara a imagem nova e troca para ela na próxima vez que você reiniciar.

Quer atualizar agora?

```sh
sudo bootc upgrade
```

Depois reinicie quando for conveniente.

## Verificando o estado do sistema

```sh
bootc status
```

Mostra a imagem em uso, a atualização preparada (se houver) e a imagem de
rollback guardada no disco:

```
● booted:   ghcr.io/luminusos/luminusos-workstation:44
  rollback: 44.20260528
```

## Voltando atrás

A versão anterior do sistema fica no disco como uma entrada inicializável. Se
uma atualização aprontar:

1. Reinicie.
2. No menu de boot, escolha a entrada anterior.
3. Você voltou exatamente para onde estava. Seus arquivos e apps Flatpak
   ficam intactos, eles vivem fora da imagem do sistema.

Também dá para voltar com o sistema rodando:

```sh
sudo bootc rollback
```

## Por que não quebra pela metade

O núcleo do SO é somente leitura e versionado como uma imagem de contêiner.
Não existe mutação pacote por pacote de um sistema em uso, então uma queda de
energia ou um download ruim nunca deixam a máquina meio atualizada.
