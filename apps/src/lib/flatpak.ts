// Install commands and descriptor URLs for the Luminus Flatpak repository.
// Only the stable channel is exposed: the testing remote's descriptors are
// not served from flatpak.luminusos.org, so the UI cannot link to them.
const channelUrl = 'https://flatpak.luminusos.org/stable/';
const remoteName = 'luminus';

export const flatpak = {
  repoFile: `${channelUrl}luminus-stable.flatpakrepo`,
  refFile: (appId: string) => `${channelUrl}${appId}.flatpakref`,
  /** The add-remote, install and run commands, in the order the guides present them. */
  steps: (appId: string) => [
    `flatpak remote-add --user --if-not-exists ${remoteName} ${channelUrl}luminus-stable.flatpakrepo`,
    `flatpak install --user ${remoteName} ${appId}`,
    `flatpak run ${appId}`,
  ],
  docs: 'https://github.com/luminusOS/flatpak-repo/blob/main/docs/CLIENTS.md',
};
