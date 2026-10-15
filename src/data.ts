// POC: static content. Swap CSS gradients for real images in /public later.
export const wallpapers = [
  { code: '08080', title: 'Cœurs fluo', tag: 'Love', bg: 'radial-gradient(circle at 30% 30%, #ff2e93 0 20%, transparent 21%), radial-gradient(circle at 70% 60%, #ffe600 0 15%, transparent 16%), linear-gradient(135deg, #8b3dff, #ff2e93)' },
  { code: '09767', title: 'Galaxie Y2K', tag: 'Espace', bg: 'radial-gradient(circle at 50% 40%, #fff 0 2%, transparent 3%), radial-gradient(circle at 20% 80%, #00d9ff 0 10%, transparent 30%), linear-gradient(180deg, #0b0033, #8b3dff)' },
  { code: '09681', title: 'Rock attitude', tag: 'Rock', bg: 'repeating-linear-gradient(45deg, #111 0 20px, #ff2e93 20px 40px)' },
  { code: '09739', title: 'Summer vibes', tag: 'Été', bg: 'radial-gradient(circle at 50% 30%, #ffe600 0 18%, transparent 19%), linear-gradient(180deg, #ff9a3d, #ff2e93 60%, #00d9ff 61%)' },
  { code: '08155', title: 'Damier skate', tag: 'Skate', bg: 'repeating-conic-gradient(#111 0 25%, #c6ff00 0 50%) 0 0 / 40px 40px' },
  { code: '09354', title: 'Bulles pop', tag: 'Girly', bg: 'radial-gradient(circle at 20% 20%, #fff8 0 8%, transparent 9%), radial-gradient(circle at 70% 40%, #fff8 0 12%, transparent 13%), radial-gradient(circle at 40% 75%, #fff8 0 10%, transparent 11%), linear-gradient(160deg, #00d9ff, #8b3dff)' },
]

// Melodies: "NOTE[:length]" in eighth notes, "-" = rest. Public-domain tunes only.
export const ringtoneCategories = [
  {
    title: 'Top hits',
    items: [
      { code: '33001', title: 'Gran Vals (la sonnerie culte)', tempo: 0.13, notes: 'E5 D5 F#4:2 G#4:2 C#5 B4 D4:2 E4:2 B4 A4 C#4:2 E4:2 A4:4' },
      { code: '33002', title: 'Korobeiniki (Tetris)', tempo: 0.14, notes: 'E5:2 B4 C5 D5:2 C5 B4 A4:2 A4 C5 E5:2 D5 C5 B4:3 C5 D5:2 E5:2 C5:2 A4:2 A4:4' },
      { code: '33003', title: 'Lettre à Élise', tempo: 0.16, notes: 'E5 D#5 E5 D#5 E5 B4 D5 C5 A4:2 - C4 E4 A4 B4:2 - E4 G#4 B4 C5:2' },
      { code: '33004', title: 'Ode à la joie', tempo: 0.14, notes: 'E4:2 E4:2 F4:2 G4:2 G4:2 F4:2 E4:2 D4:2 C4:2 C4:2 D4:2 E4:2 E4:3 D4 D4:4' },
    ],
  },
  {
    title: 'Classique',
    items: [
      { code: '33005', title: 'Le roi de la montagne', tempo: 0.12, notes: 'A4 B4 C5 D5 E5 C5 E5:2 D#5 B4 D#5:2 D5 A#4 D5:2 A4 B4 C5 D5 E5 C5 E5 A5 G5 E5 C5 E5 G5:4' },
      { code: '33006', title: 'Marche turque', tempo: 0.11, notes: 'B4 A4 G#4 A4 C5:2 - D5 C5 B4 C5 E5:2 - F5 E5 D#5 E5 B5 A5 G#5 A5 B5 A5 G#5 A5 C6:4' },
      { code: '33007', title: 'Habanera (Carmen)', tempo: 0.16, notes: 'D5:3 C#5 C5:2 C5 B4 A#4:2 A4 A4 G#4 G4 F4 G4 A4:2' },
      { code: '33008', title: 'Guillaume Tell', tempo: 0.1, notes: 'G4 G4 G4 - G4 G4 G4 - G4 G4 C5:2 D5:2 E5:2 G4 G4 G4 - G4 G4 C5 - E5 E5 D5:2 B4:2 G4:2' },
    ],
  },
  {
    title: 'Comptines',
    items: [
      { code: '33009', title: 'Frère Jacques', tempo: 0.18, notes: 'C5 D5 E5 C5 C5 D5 E5 C5 E5 F5 G5:2 E5 F5 G5:2' },
      { code: '33010', title: 'Au clair de la lune', tempo: 0.2, notes: 'C5 C5 C5 D5 E5:2 D5:2 C5 E5 D5 D5 C5:4' },
      { code: '33011', title: 'Joyeux anniversaire', tempo: 0.15, notes: 'G4 G4 A4:2 G4:2 C5:2 B4:4 G4 G4 A4:2 G4:2 D5:2 C5:4' },
      { code: '33012', title: 'Vive le vent', tempo: 0.15, notes: 'E5 E5 E5:2 E5 E5 E5:2 E5 G5 C5 D5 E5:4' },
    ],
  },
  {
    title: 'Fiesta',
    items: [
      { code: '33013', title: 'La Cucaracha', tempo: 0.12, notes: 'C5 C5 C5 F5:3 A5:2 C5 C5 C5 F5:3 A5:4 F5 F5 E5 E5 D5 D5 C5:4' },
      { code: '33014', title: 'Le beau Danube bleu', tempo: 0.15, notes: 'D4 D4 F#4 A4:2 A4 - A5 A5 - F#5 F#5 - D4 D4 F#4 A4:2 A4 - A5 A5 - G5 G5' },
      { code: '33015', title: 'Marche nuptiale', tempo: 0.2, notes: 'G4 C5:3 C5 C5:4 G4 D5:3 B4 C5:4' },
      { code: '33016', title: 'French Cancan', tempo: 0.1, notes: 'D5:2 - D5 E5 G5 F#5 E5 A5 - A5 - A5 B5 F#5 G5 E5 - E5 - E5 G5 F#5 E5 D5 D6 C#6 B5 A5 G5 F#5 E5 D5:2' },
    ],
  },
]

export type Ringtone = (typeof ringtoneCategories)[number]['items'][number]

export type Star = 'popstar' | 'rockeuse' | 'rappeur' | 'boysband'

export const quiz = {
  title: 'Quelle star des années 2000 es-tu ?',
  questions: [
    { q: 'Ton look du samedi ?', a: [['Paillettes partout', 'popstar'], ['Slim noir + clous', 'rockeuse'], ['Baggy XXL', 'rappeur'], ['Tout en blanc, assorti', 'boysband']] },
    { q: 'Ta sonnerie ?', a: [['Un tube qui passe à la radio', 'popstar'], ['Un riff de guitare', 'rockeuse'], ['Une instru qui cogne', 'rappeur'], ['Une ballade guimauve', 'boysband']] },
    { q: 'Ton fond d’écran ?', a: [['Cœurs fluo', 'popstar'], ['Damier skate', 'rockeuse'], ['Galaxie Y2K', 'rappeur'], ['Bulles pop', 'boysband']] },
    { q: 'Le week-end tu…', a: [['Fais du karaoké', 'popstar'], ['Vas à un concert', 'rockeuse'], ['Écris des textes', 'rappeur'], ['Répètes une choré', 'boysband']] },
  ] as { q: string; a: [string, Star][] }[],
  results: {
    popstar: { title: 'Pop princess ✨', text: 'Tu brilles, tu chantes sous la douche et tout le monde connaît tes refrains par cœur.' },
    rockeuse: { title: 'Rock rebelle 🎸', text: 'Eyeliner, guitare et attitude : tu fais ta loi et tu montes le son.' },
    rappeur: { title: 'Roi du flow 🎤', text: 'Les mots, c’est ton truc. Ton style est unique et ta casquette toujours de travers.' },
    boysband: { title: 'Star de boys band 💖', text: 'Choré synchro et sourire ravageur : ton fan-club est déjà complet.' },
  } satisfies Record<Star, { title: string; text: string }>,
}
