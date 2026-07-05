---
title: Instalando o LuminusOS
description: Baixe a ISO, grave um pendrive e instale o LuminusOS com o Sirius.
sidebar:
  order: 1
---

O LuminusOS instala como qualquer Linux moderno: baixe uma ISO, grave em um
pendrive, inicie por ele e siga o instalador. Tudo leva uns 15 minutos.

## 1. Baixe a ISO

Pegue a ISO mais recente da **Workstation** no
[GitHub Releases](https://github.com/luminusOS/images/releases/latest). O
botão de download em [luminusos.org](https://luminusos.org/pt-br/) sempre
aponta para a versão mais nova.

## 2. Grave um pendrive

Use qualquer uma destas ferramentas. O pendrive precisa de pelo menos 8 GB e
**será apagado**.

- [Fedora Media Writer](https://flathub.org/apps/org.fedoraproject.MediaWriter) (recomendado)
- GNOME Discos ("Restaurar imagem de disco…")
- [balenaEtcher](https://etcher.balena.io/)

## 3. Inicie pelo pendrive

Reinicie com o pendrive conectado e escolha ele no menu de boot do firmware
(geralmente <kbd>F12</kbd>, <kbd>F10</kbd> ou <kbd>Esc</kbd> logo ao ligar).
Desative o Secure Boot se o firmware recusar o boot.

## 4. Siga o Sirius

O Sirius é o instalador do LuminusOS. Antes de mexer em qualquer coisa ele
roda uma verificação de compatibilidade de hardware, e depois te guia por:

1. Rede, layout de teclado e fuso horário
2. Disco de destino (o disco **será apagado**, e o Sirius pede confirmação
   antes de qualquer coisa acontecer)
3. Criptografia de disco opcional (LUKS), com vínculo a TPM opcional

Quando a barra de progresso terminar, reinicie e remova o pendrive.

## 5. Primeiro boot

O GNOME Initial Setup te recebe para criar sua conta de usuário. Depois disso
você cai numa área de trabalho pronta para usar, com o Aurora Shell ativado.
Pronto.

:::note[Algo deu errado?]
Se a instalação falhar, o Sirius mostra o log completo na própria tela de
falha. Copie e [abra uma issue](https://github.com/luminusOS/images/issues),
isso ajuda muito.
:::
