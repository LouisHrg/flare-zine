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

// Characters from the Pibble Verse Wiki: https://pibble-verse.fandom.com/
export type Pibble = 'handheld' | 'fire' | 'noctibble' | 'geeble' | 'hampib' | 'beeble'

const img = (path: string) => `https://static.wikia.nocookie.net/pibble-verse/images/${path}/revision/latest/scale-to-width-down/400`

export const quiz = {
  title: 'Quel Pibble es-tu ?',
  source: 'https://pibble-verse.fandom.com/',
  questions: [
    {
      q: 'Ton moment préféré de la journée ?',
      a: [
        ['Dans les bras de quelqu’un, évidemment', 'handheld'],
        ['Quand ça chauffe en cuisine… littéralement', 'fire'],
        ['La nuit, quand tout le monde dort', 'noctibble'],
        ['Quand je survole la ville', 'geeble'],
        ['L’heure du repas (toutes les heures)', 'hampib'],
        ['Le matin, dans un champ de fleurs', 'beeble'],
      ],
    },
    {
      q: 'Ta bouffe préférée ?',
      a: [
        ['Des Pibble Treats, servies direct dans ma bouche', 'handheld'],
        ['Un Pibcake… bien cramé', 'fire'],
        ['Des pibberies grignotées en douce', 'noctibble'],
        ['Les friandises que je quémande aux fenêtres', 'geeble'],
        ['Un Piblurger. Rien d’autre. Jamais.', 'hampib'],
        ['Du miel fait maison', 'beeble'],
      ],
    },
    {
      q: 'Ton accessoire indispensable ?',
      a: [
        ['Une éponge pour qu’on me lave le ventre', 'handheld'],
        ['Un extincteur (pour les autres)', 'fire'],
        ['Mon chapeau grenouille', 'noctibble'],
        ['Mes antennes', 'geeble'],
        ['Une pancarte « VENEZ, PIBLURGERS MIAM »', 'hampib'],
        ['Un dard réutilisable', 'beeble'],
      ],
    },
    {
      q: 'Ton pire cauchemar ?',
      a: [
        ['Devoir marcher tout seul', 'handheld'],
        ['Tomber nez à nez avec un Chis', 'fire'],
        ['Prendre la pluie', 'noctibble'],
        ['Qu’on me refuse une friandise', 'geeble'],
        ['Qu’on me dérange en plein service', 'hampib'],
        ['Un monde sans fleurs', 'beeble'],
      ],
    },
    {
      q: 'Ta phrase culte ?',
      a: [
        ['« Wash my belly ! »', 'handheld'],
        ['« Ça va chauffer ! »', 'fire'],
        ['« Psst… c’est pas moi, c’est un Geeble. »', 'noctibble'],
        ['« Bip bip ! Une friandise ? »', 'geeble'],
        ['« Table pour combien ? »', 'hampib'],
        ['« Bzzz, pas touche à ma ruche ! »', 'beeble'],
      ],
    },
  ] as { q: string; a: [string, Pibble][] }[],
  results: {
    handheld: { img: img('e/ee/Handheldpibble.png'), title: 'Handheld Pibble 🤲', text: 'Aussi appelé OG Pibble. Tu adores qu’on te porte, tu détestes être sale et tu réclames qu’on te lave le ventre. Les humains te protègent comme un trésor… mais pense à marcher un peu !' },
    fire: { img: img('9/9e/Ignore_watermark_pibble.png'), title: 'Fire Pibble 🔥', text: 'Un Gmail coincé dans le four avec un Pibcake : voilà tes origines. Résistant au feu, tu es l’atout n°1 de l’armée de Pibbleland et l’ennemi juré des Chis.' },
    noctibble: { img: img('2/2a/Black%21.jpg'), title: 'Noctibble 🌙', text: 'Tu dors le jour et tu vis la nuit. Toujours coiffé de ton chapeau grenouille, tu te fais passer pour un Geeble… et tu te figes dès qu’on te mouille.' },
    geeble: { img: img('8/85/Geeblenew.png'), title: 'Geeble 👽', text: 'Petit alien vert venu de Geeblorg, tu voles de fenêtre en fenêtre pour réclamer des Pibble Treats avec ta voix toute aiguë. Refusé ? Pas grave, tu repars en volant.' },
    hampib: { img: img('3/3b/Hamburger.jpg'), title: 'Hampib 🍔', text: 'Ton corps est un burger (non comestible). Tu ne manges que des Piblurgers, tu cuisines comme un chef et tu bosses 10 h par jour. Gare à qui t’interrompt en plein service !' },
    beeble: { img: img('7/71/Beeble.webp'), title: 'Beeble 🐝', text: 'Tu butines, tu fais du miel et tu pollinises 30 % des fleurs. Espèce protégée par la loi… et ton dard ne casse jamais. Pas touche à ta ruche !' },
  } satisfies Record<Pibble, { img: string; title: string; text: string }>,
}
