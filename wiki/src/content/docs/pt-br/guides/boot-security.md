---
title: TPM e Secure Boot
description: Segurança de boot opcional, máquinas virtuais e limites da preparação para EAC Linux v2.
sidebar:
  order: 2
---

## Recursos opcionais e independentes

**Nem TPM 2.0 nem Secure Boot são obrigatórios para instalar ou usar o LuminusOS.**
A política é mantê-los opcionais e independentes; o funcionamento depende
do firmware, da implementação e da validação. Um jogo específico pode exigir
os dois; isso não os transforma em requisitos do sistema operacional.

Em máquinas físicas, esses recursos normalmente são habilitados no firmware UEFI.
O TPM pode aparecer como Intel PTT ou AMD fTPM. O Sirius não consegue habilitar
um recurso do firmware apenas oferecendo uma caixa de seleção no instalador.
A configuração atual do LuminusOS trata Secure Boot como aviso, não exigência.
Ter TPM também não habilita automaticamente criptografia de disco ou desbloqueio vinculado a ele.

:::caution[Antes de alterar o firmware]
Faça backup dos dados e das chaves de recuperação de discos criptografados.
Alterar chaves de Secure Boot, limpar o TPM ou mudar o firmware pode afetar
outros sistemas e discos criptografados. Não limpe o TPM nem restaure chaves
inscritas apenas para instalar o LuminusOS.
:::

## Consultar o sistema em execução

Quando disponível, `mokutil --sb-state` informa o estado de Secure Boot.
Os logs do kernel podem corroborar Secure Boot e lockdown. Uma mensagem de
lockdown sozinha não prova que Secure Boot está ativo.

Para TPM 2.0, consulte a versão informada pelo kernel e execute uma consulta
de capacidades, como `tpm2_getcap properties-fixed`, se `tpm2-tools` estiver
instalado. A presença de `/dev/tpm0` não comprova TPM 2.0 nem attestation aceita
por um jogo. Antes de instalar ferramentas ou modificar a imagem para seguir
um comando, confira o fluxo de pacotes suportado.

## Máquinas virtuais: opções em desenvolvimento

O QEMU pode emular TPM 2.0 com `swtpm`; o OVMF pode fornecer Secure Boot com
chaves de confiança inscritas. Os controles independentes e opt-in estão
implementados na **branch de desenvolvimento `feat/optional-boot-security`**;
isso não significa que já estejam em uma versão publicada ou na branch principal.

Em um checkout que contenha essa implementação:

```bash
QEMU_TPM=1 just qemu iso
QEMU_SECURE_BOOT=1 just qemu iso
QEMU_TPM=1 QEMU_SECURE_BOOT=1 just qemu iso
QEMU_TPM=1 QEMU_SECURE_BOOT=1 just qemu run
```

Ambas as opções têm padrão `0`. TPM exige `swtpm`; Secure Boot exige um par
de firmware UEFI q35 raw com chaves inscritas, descrito pelo QEMU, com suporte
a SMM. A falta de um pré-requisito solicitado interrompe aquela execução,
em vez de desabilitar o recurso silenciosamente. Mantenha o mesmo caminho
do disco de instalação para preservar o estado privado de TPM e firmware.
Não combine essas opções com reset de NVRAM. Variáveis persistentes do
firmware podem mudar: confirme Secure Boot no guest, não apenas pela opção.

Os testes planejados cobrem as quatro combinações, boot da ISO, instalação
pelo Sirius, boot do sistema instalado e persistência do estado TPM/firmware
de cada VM. Secure Boot e lockdown EFI foram observados em uma VM anterior;
isso não comprova suporte em toda máquina ou em toda versão publicada.

## EAC Linux v2: preparação não é certificação

O [anúncio da Epic](https://onlineservices.epicgames.com/news/introducing-easy-anti-cheat-linux-v2)
descreve requisitos adicionais. A tabela acompanha pendências, não declara
conformidade oficial. O estado reflete evidências revisadas em **6 de novembro de 2026**.
O artigo integral não ficou acessível à consulta automatizada; detalhes sobre
chaves e attestation ainda precisam de confirmação com a Epic.

| Área | Evidência do LuminusOS e trabalho restante |
| --- | --- |
| Kernel e módulos assinados | Kernel Fedora e certificados de confiança observados; enforcement de assinatura de módulos e aceitação dos assinantes pela Epic ainda não verificados. |
| TPM 2.0 | Controles opcionais implementados em desenvolvimento; validação de TPM 2.0 no guest pendente. |
| Secure Boot | Estado ativo e lockdown EFI observados em uma VM instalada; repetir por candidata e testar rejeição de código de boot não confiável. |
| Measured boot / attestation | Não validados. TPM presente e Secure Boot não comprovam medições nem confiança remota. |
| IOMMU | Enforcement no firmware/kernel e passthrough desativado não validados contra as regras da Epic por tipo de dispositivo. |
| Lockdown do kernel | Lockdown acionado por EFI observado; configuração explícita de integrity no boot exigida no anúncio ainda não demonstrada. |
| kexec desabilitado | Sem prova de desativação explícita no boot. Rejeitar kernels não assinados não equivale a desabilitar kexec. |
| BPF LSM | Configuração do kernel e lista de LSMs ativos não inspecionadas na candidata. eBPF genérico ou SELinux sozinho não comprova BPF LSM ativo. |

A lista de chaves de distribuições reconhecidas, o serviço oficial do EAC e
a adesão do desenvolvedor de cada jogo são dependências separadas. Testes com
TPM emulado não comprovam identidade de hardware físico nem aceitação pela
Epic. O LuminusOS não declara conformidade EAC Linux v2 nem suporte garantido
a jogos protegidos.

Sobre BPF LSM, consulte a [documentação do kernel Linux](https://docs.kernel.org/bpf/prog_lsm.html).
