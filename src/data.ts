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

// Placeholder editorial content: everything below is made up.
export const interviews = [
  {
    slug: 'lola-star',
    name: 'Lola Star',
    job: 'Chanteuse pop',
    emoji: '🎤',
    bg: 'linear-gradient(135deg, #ff4fb8, #8b3dff)',
    quote: 'Sur scène, je porte toujours mes chaussettes porte-bonheur !',
    intro: 'Son tube « Bisous SMS » cartonne dans toutes les cours de récré. Lola Star nous a reçus dans sa loge, entre deux séances de dédicaces et un smoothie à la fraise.',
    id: { Âge: '17 ans', Signe: 'Balance ♎', 'Couleur préférée': 'Rose fluo', 'Plat préféré': 'Crêpes au Nutella', 'Son portable': 'Un clapet rose à strass' },
    qa: [
      ['Comment as-tu commencé la chanson ?', 'Dans ma salle de bains, avec une brosse à cheveux comme micro ! Ma mère tapait à la porte, moi je me croyais au Zénith.'],
      ['Ton pire souvenir de concert ?', 'J’ai glissé sur une paillette géante pendant le refrain. Le public a cru que c’était une choré, alors je l’ai refaite à chaque concert depuis.'],
      ['Tu as un amoureux ?', 'Hihi, joker ! Disons que mon cœur est… en mode vibreur.'],
      ['Ta sonnerie de portable ?', 'Le code 33001, évidemment. Je suis une fille de goût.'],
      ['Un message pour tes fans ?', 'Restez vous-mêmes, mettez des paillettes partout et n’oubliez jamais de recharger votre portable !'],
    ],
  },
  {
    slug: 'kev-board',
    name: 'Kev’Board',
    job: 'Skateur pro',
    emoji: '🛹',
    bg: 'repeating-conic-gradient(#111 0 25%, #c6ff00 0 50%) 0 0 / 40px 40px',
    quote: 'Je me suis cassé le poignet trois fois, mais jamais le moral !',
    intro: 'À 16 ans, il plaque des figures que personne n’ose même nommer. On a suivi Kev’Board au skatepark, casquette à l’envers et genouillères flashy.',
    id: { Âge: '16 ans', Signe: 'Bélier ♈', 'Figure préférée': 'Le kickflip arc-en-ciel', 'Groupe préféré': 'Les Kids du Hall', 'Son portable': 'Un modèle incassable (enfin, presque)' },
    qa: [
      ['C’est quoi ton secret ?', 'Tomber. Beaucoup. Et se relever en faisant genre que c’était prévu.'],
      ['Ta figure la plus dingue ?', 'Le « double pibble flip ». Je l’ai inventé un mardi, je ne l’ai jamais réussi depuis.'],
      ['Tes parents en pensent quoi ?', 'Ma mère a acheté une boîte de pansements format familial. Elle me soutient à sa manière.'],
      ['Un conseil pour débuter ?', 'Un casque, des genouillères, et une bonne playlist. Dans cet ordre.'],
    ],
  },
  {
    slug: 'handheld-pibble',
    name: 'Un Handheld Pibble',
    job: 'Mascotte officielle de Pibbleland',
    emoji: '🐶',
    bg: 'radial-gradient(circle at 50% 40%, #fff 0 25%, #ffc4dd 26%)',
    quote: 'Wash my belly. C’est tout ce que j’ai à dire.',
    intro: 'Exclu mondiale : pour la première fois, un Handheld Pibble accepte de répondre à nos questions. Enfin… « accepte » est un grand mot.',
    id: { Âge: 'Bébé (pour toujours)', Signe: 'Câlin ♥', 'Activité préférée': 'Être porté', 'Plat préféré': 'Les Pibble Treats', 'Son portable': 'Il n’a pas de mains libres' },
    qa: [
      ['Bonjour ! Comment ça va ?', 'I’m pibble.'],
      ['Que fais-tu de tes journées ?', '*se fait porter*'],
      ['Tu as un message pour nos lecteurs ?', 'Wash my belly.'],
      ['Merci pour cette interview !', '*s’endort dans nos bras*'],
    ],
  },
]

export const tutorials = [
  {
    slug: 'portable-strass',
    title: 'Customise ton portable avec des strass',
    emoji: '💎',
    bg: 'linear-gradient(135deg, #00d9ff, #ff4fb8)',
    level: 1,
    duration: '30 min',
    intro: 'Ton portable est trop banal ? En 30 minutes, transforme-le en accessoire de star qui brille de mille feux.',
    materials: ['Des strass autocollants (beaucoup !)', 'Une pince à épiler', 'Un coton-tige', 'Un peu de patience'],
    steps: [
      'Nettoie bien la coque avec un coton-tige pour que les strass collent.',
      'Dessine ton motif au crayon : cœur, étoile ou tes initiales.',
      'Attrape les strass un par un avec la pince à épiler.',
      'Commence par le contour, puis remplis l’intérieur.',
      'Laisse sécher une nuit sans toucher. Oui, même pas pour envoyer un SMS.',
    ],
    tip: 'Mélange deux couleurs de strass pour un effet dégradé trop stylé !',
  },
  {
    slug: 'bracelet-bresilien',
    title: 'Le bracelet brésilien chevron',
    emoji: '🧶',
    bg: 'repeating-linear-gradient(45deg, #ff2e93 0 12px, #ffe100 12px 24px, #00d9ff 24px 36px)',
    level: 2,
    duration: '1 h',
    intro: 'Le bracelet de l’amitié par excellence. Fais-en un pour ta meilleure copine (et un pour toi, évidemment).',
    materials: ['4 fils de couleurs différentes (x2)', 'Du scotch', 'Une paire de ciseaux', 'Ta meilleure copine pour tenir le bout'],
    steps: [
      'Coupe 8 fils de 80 cm et fais un nœud en haut.',
      'Scotche le nœud sur une table et sépare les fils en miroir.',
      'Fais deux nœuds avec le fil de gauche vers le centre.',
      'Fais la même chose avec le fil de droite.',
      'Noue les deux fils du centre ensemble. Recommence !',
      'Quand c’est assez long, fais un nœud et offre-le.',
    ],
    tip: 'Tant que le bracelet ne se casse pas tout seul, l’amitié est éternelle. C’est scientifique.',
  },
  {
    slug: 'blog-de-star',
    title: 'Crée ton blog de star',
    emoji: '💻',
    bg: 'linear-gradient(180deg, #111, #8b3dff)',
    level: 3,
    duration: '2 h',
    intro: 'Tout le monde a un blog, mais le tien sera le plus pailleté du web. Suis le guide !',
    materials: ['Un ordinateur (celui du salon, quand personne ne l’utilise)', 'Plein de photos de toi et tes potes', 'Une playlist de folie', 'Un pseudo trop stylé'],
    steps: [
      'Trouve ton pseudo : mélange ton prénom, une étoile et un chiffre. Ex. : xX-Lola-Star-91-Xx.',
      'Choisis un fond pailleté. Plus ça brille, mieux c’est.',
      'Ajoute une playlist qui démarre toute seule (tes visiteurs vont adorer).',
      'Poste ton premier article : « Bienvenue sur mon blog !!! Lâchez vos coms ».',
      'Ajoute un compteur de visiteurs et vérifie-le toutes les 5 minutes.',
    ],
    tip: 'Réponds à tous les coms pour avoir encore plus de visites. Kiss !',
  },
]

export const lyrics = [
  {
    slug: 'bisous-sms',
    title: 'Bisous SMS',
    artist: 'Lola Star',
    year: 2003,
    emoji: '💌',
    bg: 'linear-gradient(135deg, #ff4fb8, #ffe100)',
    note: 'Le tube de la rentrée ! On l’a écouté 47 fois à la rédac pour recopier les paroles.',
    parts: [
      { label: 'Couplet 1', lines: ['Mon portable vibre au fond de mon sac', 'C’est toi qui m’écris, mon cœur fait tic-tac', 'Trois petits points, j’attends ta réponse', 'Mon forfait s’envole, mais moi je fonce'] },
      { label: 'Refrain', lines: ['Bisous SMS, bisous bisous', 'Tape mon numéro, je suis fou de vous', 'Bisous SMS, envoie-moi un cœur', 'Même sans réseau, t’es mon âme sœur'] },
      { label: 'Couplet 2', lines: ['Ma batterie faiblit mais pas mes sentiments', 'Je recharge mon cœur toutes les dix minutes', 'Ta sonnerie résonne comme une chanson', 'Code 33001, c’est notre son'] },
      { label: 'Refrain', lines: ['Bisous SMS, bisous bisous', 'Tape mon numéro, je suis fou de vous', 'Bisous SMS, envoie-moi un cœur', 'Même sans réseau, t’es mon âme sœur'] },
    ],
  },
  {
    slug: 'le-hall-cest-notre-scene',
    title: 'Le hall c’est notre scène',
    artist: 'Les Kids du Hall',
    year: 2004,
    emoji: '🎧',
    bg: 'linear-gradient(180deg, #1d5fc4, #111)',
    note: 'Le premier single du groupe le plus chaud du moment. Attention, ça rime fort.',
    parts: [
      { label: 'Intro', lines: ['Yo yo yo, Kids du Hall dans la place', 'Montez le son, on laisse une trace'] },
      { label: 'Couplet 1', lines: ['On répète au pied de l’ascenseur', 'Le gardien dit stop, nous on vise le bonheur', 'Une beatbox, deux micros, trois potes', 'On écrit nos rimes au dos de nos notes'] },
      { label: 'Refrain', lines: ['Le hall c’est notre scène, oh oh', 'Les voisins c’est notre public, oh oh', 'On n’a pas de studio mais on a la passion', 'Le hall c’est notre scène, c’est notre maison'] },
    ],
  },
  {
    slug: 'reine-du-dancefloor',
    title: 'Reine du dancefloor',
    artist: 'DJ Paillette',
    year: 2002,
    emoji: '🪩',
    bg: 'radial-gradient(circle at 50% 50%, #fff 0 8%, #c9a2ff 9% 30%, #8b3dff 31%)',
    note: 'LE tube des boums. Interdiction de rester assis·e.',
    parts: [
      { label: 'Couplet', lines: ['Les lumières tournent, la boule à facettes', 'Je mets mes baskets et mes lunettes', 'Le DJ m’appelle, je monte sur la piste', 'Ce soir c’est moi la star, la seule sur la liste'] },
      { label: 'Refrain', lines: ['Reine, reine, reine du dancefloor', 'Paillettes sur les joues et des étoiles en or', 'Reine, reine, danse jusqu’au matin', 'Lève les bras au ciel et tape dans tes mains'] },
      { label: 'Pont', lines: ['À gauche, à droite, on tourne sur soi', 'Un, deux, trois, tout le monde avec moi !'] },
    ],
  },
]
