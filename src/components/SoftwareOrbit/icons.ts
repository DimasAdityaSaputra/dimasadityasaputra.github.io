export interface SoftwareIcon {
  name: string;
  icon: string;
  initial: { x: number; y: number; rotate: number };
}

export const softwareIcons: SoftwareIcon[] = [
  { name: 'Fusion 360', icon: '/icons/fusion360.svg', initial: { x: -520, y: -180, rotate: -18 } },
  { name: 'After Effects', icon: '/icons/aftereffects.svg', initial: { x: 430, y: -240, rotate: 16 } },
  { name: 'CapCut', icon: '/icons/capcut.svg', initial: { x: -460, y: -40, rotate: 10 } },
  { name: 'Unreal Engine', icon: '/icons/unrealengine.svg', initial: { x: 520, y: -80, rotate: -14 } },
  { name: 'Microsoft Office', icon: '/icons/msoffice.svg', initial: { x: -360, y: -300, rotate: 20 } },
  { name: 'DaVinci Resolve', icon: '/icons/davinciresolve.svg', initial: { x: 360, y: -320, rotate: -20 } },
  { name: 'VS Code', icon: '/icons/vscode.svg', initial: { x: -620, y: -120, rotate: -8 } },
  { name: 'Linux', icon: '/icons/linux.svg', initial: { x: 610, y: -170, rotate: 8 } },
  { name: 'Virtual Machine', icon: '/icons/virtualmachine.svg', initial: { x: -300, y: -420, rotate: -24 } },
  { name: 'Arduino IDE', icon: '/icons/arduinoide.svg', initial: { x: 300, y: -430, rotate: 24 } },
];
