// GNOME ships one major release per Fedora release: Fedora 44 has GNOME 50,
// Fedora 45 has GNOME 51. The images repository does not pin GNOME itself.
const GNOME_OFFSET = 6;

// Injected by astro.config.mjs from the images repository's versions.env.
const fedora = Number(import.meta.env.FEDORA_VERSION);

export const platform = { fedora, gnome: fedora + GNOME_OFFSET };
