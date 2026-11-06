---
title: TPM and Secure Boot
description: Optional boot security, virtual machines and the limits of EAC Linux v2 readiness.
sidebar:
  order: 2
---

## Optional, independent features

**Neither TPM 2.0 nor Secure Boot is mandatory to install or use LuminusOS.**
The policy is to keep them independently optional; actual functionality
depends on firmware, implementation and validation. A particular game may
require both; that does not make them requirements for the operating system.

On physical machines, these features are normally enabled in UEFI firmware.
TPM may be called Intel PTT or AMD fTPM. Sirius cannot enable a firmware
feature just by offering an installer checkbox. The current LuminusOS
configuration treats Secure Boot as an installer warning, not a requirement.
TPM availability also does not automatically enable disk encryption or TPM-bound unlocking.

:::caution[Before changing firmware]
Back up your data and any disk-encryption recovery keys. Changing Secure Boot
keys, clearing a TPM or changing firmware settings can affect other operating
systems and encrypted disks. Do not clear the TPM or reset enrolled keys just
to install LuminusOS.
:::

## Check the running system

When available, `mokutil --sb-state` reports Secure Boot state. Kernel logs
can corroborate Secure Boot and lockdown. A lockdown message alone is not
proof that Secure Boot is enabled.

For TPM 2.0, check the kernel-reported TPM version and use a capability query
such as `tpm2_getcap properties-fixed` if `tpm2-tools` is installed. The mere
presence of `/dev/tpm0` is not proof of TPM 2.0 or of attestation accepted by a game.
Do not install tools or modify the image solely to follow a command without
checking the supported package workflow first.

## Virtual machines: development options

QEMU can emulate TPM 2.0 through `swtpm`; OVMF can provide Secure Boot with
enrolled trust keys. Independent opt-in controls are implemented in the
**development branch `feat/optional-boot-security`**; this does not mean
they are present in a published release or the default branch.

From a checkout containing that implementation:

```bash
QEMU_TPM=1 just qemu iso
QEMU_SECURE_BOOT=1 just qemu iso
QEMU_TPM=1 QEMU_SECURE_BOOT=1 just qemu iso
QEMU_TPM=1 QEMU_SECURE_BOOT=1 just qemu run
```

Both options default to `0`. TPM requires `swtpm`; Secure Boot requires an
enrolled raw q35 UEFI firmware pair described by QEMU, with SMM support.
Missing requested prerequisites stop that launch rather than silently
disabling the feature. Keep the same install-disk path to retain private TPM
and firmware state. Do not combine these options with an NVRAM reset.
Persistent firmware variables can change: verify Secure Boot inside the guest
rather than inferring its state from the option.

The planned tests cover all four combinations, ISO boot, Sirius installation,
installed-system boot, and persistence of each VM's TPM and firmware state.
Secure Boot and EFI lockdown were observed in an earlier test VM, but this
does not establish support on every machine or for every release.

## EAC Linux v2: readiness is not certification

The [Epic announcement](https://onlineservices.epicgames.com/news/introducing-easy-anti-cheat-linux-v2)
describes additional requirements. The following is a tracking summary, not
an official compliance statement. Status reflects evidence reviewed on **6 November 2026**.
The full article was not accessible to automated retrieval; detailed key and
attestation policies still need confirmation with Epic.

| Area | LuminusOS evidence and remaining work |
| --- | --- |
| Signed kernel and modules | Fedora kernel and trust certificates observed; module-signature enforcement and acceptance of signers by Epic remain unverified. |
| TPM 2.0 | Optional launcher controls implemented in development; guest TPM 2.0 validation pending. |
| Secure Boot | Enabled state and EFI lockdown observed in one installed VM; repeat per candidate and test rejection of untrusted boot code. |
| Measured boot / attestation | Not validated. A TPM device and Secure Boot do not establish measurements or remote trust. |
| IOMMU | Firmware/kernel enforcement and disabled passthrough not validated against Epic's device-specific rules. |
| Kernel lockdown | EFI-triggered lockdown observed; explicit boot-time integrity configuration required by the announcement not yet demonstrated. |
| kexec disabled | No explicit boot-time disablement demonstrated. Rejecting unsigned kernels is not equivalent to disabling kexec. |
| BPF LSM | Kernel configuration and active LSM list not inspected in the candidate. Generic eBPF support or SELinux alone does not prove BPF LSM is active. |

The distribution signing-key allowlist, official EAC service and game-developer
opt-in are separate dependencies. Emulated TPM tests do not prove physical
hardware identity or acceptance by Epic. LuminusOS does not currently claim
EAC Linux v2 compliance or guaranteed support for protected games.

For BPF LSM background, see the [Linux kernel documentation](https://docs.kernel.org/bpf/prog_lsm.html).
