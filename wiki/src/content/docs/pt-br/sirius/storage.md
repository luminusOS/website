---
title: Armazenamento
description: Como o Sirius particiona discos, com configuração automática do disco inteiro e criptografia opcional, ou edição manual partição por partição.
sidebar:
  order: 3
---

A tela de armazenamento é uma tela só, feita para caber sem rolagem. No topo,
o grupo **Disco de destino** lista cada disco que o Sirius encontrou como uma
linha selecionável (modelo, caminho do dispositivo, tamanho e tipo da tabela
de partições), com um botão de seleção (radio) em cada uma. Discos em uso no
momento (como a mídia de boot live) ficam de fora, então você não corre o
risco de apontar o instalador sem querer para o próprio pendrive de onde você
deu boot.

Com um disco selecionado, o grupo **Particionamento** aparece logo abaixo com
duas opções, *Particionamento automático* e *Particionamento manual*, cada
uma com uma descrição curta do que faz.

Nada do que está descrito abaixo é escrito no disco até você confirmar a
instalação e chegar na tela de progresso. Tudo nessa tela, automático ou
manual, fica só reservado antes disso.

## Particionamento automático

É o padrão. Com o *Particionamento automático* selecionado, o Sirius apaga o
disco escolhido e particiona ele pra você, seguindo o layout definido pela
configuração `repart.d` da distro (veja [Adaptando o Sirius](../adapting/)
se você estiver configurando isso). Um aviso abaixo das opções lembra que
todos os dados do disco serão apagados.

Um grupo **Criptografia** oferece duas chaves além disso:

- **Criptografia de disco inteiro (LUKS)**: todo o layout particionado fica
  criptografado.
- **Vínculo a TPM**: vincula a chave de criptografia ao TPM da máquina, para
  que uma cadeia de boot confiável desbloqueie o disco automaticamente. Sem
  pedir senha toda vez que você liga o computador. Só fica disponível quando
  a criptografia LUKS está ligada.

## Particionamento manual

Selecione *Particionamento manual* e a página passa a mostrar uma linha
**Volumes e partições** que abre o editor de partições, um diálogo dedicado
com duas visões do disco selecionado:

- **Mapa do disco**: uma barra colorida mostrando o layout do disco, com
  cada segmento proporcional ao tamanho e colorido por sistema de arquivos
  (EFI, ext4, btrfs, XFS, swap, NTFS e espaço não alocado têm cores
  distintas), para que partições vizinhas fiquem visualmente separadas.
  Segmentos marcados para exclusão aparecem esmaecidos.
- **Lista de volumes e partições**: cada partição do disco com dispositivo,
  sistema de arquivos, ponto de montagem e tamanho, com botões redondos de
  editar e excluir ao lado de cada uma. O espaço livre aparece como uma linha
  própria, com um botão para criar uma partição nova ali. Partições que você
  agendou aparecem destacadas.

Erros de validação do plano (por exemplo, a falta de uma partição raiz)
aparecem logo acima da lista, impossíveis de passar despercebidos. A mesma
validação também controla o botão Avançar do instalador na página principal
quando você fecha o editor.

Um botão **Descartar alterações** aparece no cabeçalho do editor sempre que
você tem edições agendadas, resetando o plano de volta ao layout real atual
do disco, caso você queira recomeçar antes de confirmar.

:::note[Limitação atual]
O modo manual permite criar, formatar e excluir partições, mas não
redimensionar ou mover as que já existem. Se você precisa encolher uma
partição existente para abrir espaço, faça isso com outra ferramenta antes
(por exemplo, a partir de outra sessão live) e só depois rode o Sirius. É uma
limitação conhecida, registrada no `docs/GAPS.md` do repositório do Sirius.
:::
