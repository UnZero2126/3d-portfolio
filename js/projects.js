/* YOUR PROJECT LIST — duplicate an entire { ... }, block to add artwork.
   Keep every id unique, using lowercase words and hyphens.
   Paths start at the website root: assets/images/characters/your-file.webp (NO leading slash).
   Optional arrays can be [] and optional strings can be ''. They will be hidden.
   All supplied artwork is ORIGINAL PLACEHOLDER content, not work by the artist.
   Set placeholder: false after replacing ALL sample content in that project.
   Categories are automatic; use consistent spelling to avoid duplicate filters.
*/
window.PROJECTS = [
  { // COMPLETE EXAMPLE: still images + MP4 + interactive GLB.
    id: 'orbit',
    title: 'Orbit / 01',
    category: 'Other Projects',
    description: 'A study of balance, repetition, and the space between forms. A softly twisted metallic ring surrounds a quiet central sphere. This original procedural sample demonstrates a complete project presentation; replace it with your own work.',
    thumbnail: 'assets/images/other-projects/orbit.webp',
    images: [
      { src: 'assets/images/other-projects/orbit.webp', alt: 'Orbit sculpture, three-quarter view' },
      { src: 'assets/images/other-projects/orbit-detail.webp', alt: 'Orbit sculpture, alternate angle' }
    ],
    videos: [{ src: 'assets/videos/orbit-turntable.mp4', poster: 'assets/images/other-projects/orbit.webp', caption: 'Original sample · 360° turntable', captions: '' }],
    // Optional embed: use a YouTube /embed/ URL or player.vimeo.com/video/ URL.
    embeds: [],
    model: 'assets/models/other-projects/orbit.glb',
    modelPoster: 'assets/images/other-projects/orbit.webp',
    software: ['Procedural mesh', 'Custom renderer'],
    type: 'Personal study · sample',
    credits: 'Original procedural placeholder created for this website; not artist work.',
    year: '2026',
    featured: true,
    placeholder: true
  },
  {
    id: 'sentinel', title: 'Sentinel', category: 'Character Art',
    description: 'A friendly mechanical observer built from simple forms. This sample demonstrates how to present a character bust, silhouette exploration, and surface treatment.',
    thumbnail: 'assets/images/characters/sentinel.webp',
    images: [{ src: 'assets/images/characters/sentinel.webp', alt: 'Stylized robot bust with a luminous green visor' }],
    software: ['Procedural mesh'], type: 'Character study · sample', placeholder: true
  },
  {
    id: 'relay', title: 'Field relay', category: 'Hard Surface',
    description: 'An imagined field instrument with a protective housing and a circular optical sensor. Replace this sample with your hard-surface model and wireframe breakdown.',
    thumbnail: 'assets/images/hardsurfacemodel/relay.webp', images: [{ src: 'assets/images/hardsurfacemodel/relay.webp', alt: 'Box-shaped field instrument with optical sensor' }],
    software: ['Procedural mesh'], type: 'Object study · sample', placeholder: true
  },
  {
    id: 'vessel', title: 'Earthen', category: 'Props',
    description: 'An exploration of warm ceramic tones and sculptural contours. Use this sample slot for a realistic object, product render, or game-ready prop.',
    thumbnail: 'assets/images/props/vessel.webp', images: [{ src: 'assets/images/props/vessel.webp', alt: 'Warm terracotta sculptural vessel' }],
    software: ['Procedural mesh'], type: 'Material study · sample', placeholder: true
  },
  {
    id: 'passage', title: 'Quiet passage', category: 'Environments',
    description: 'Repetition, shadow, and a single point of light. An architectural blockout that demonstrates an environment project presentation.',
    thumbnail: 'assets/images/environment/passage.webp', images: [{ src: 'assets/images/environment/passage.webp', alt: 'Colonnade with repeated columns and a central orb' }],
    software: ['Procedural mesh'], type: 'Environment study · sample', placeholder: true
  },
  {
    id: 'motion', title: 'Cycles', category: 'Other Projects',
    description: 'A short looping turntable that reveals a sculptural form from every angle. Replace this MP4 with your own animation or showreel.',
    thumbnail: 'assets/images/other-projects/motion.webp', images: [],
    videos: [{ src: 'assets/videos/orbit-turntable.mp4', poster: 'assets/images/other-projects/motion.webp', caption: 'Cycles · silent turntable sample' }],
    software: ['Procedural mesh'], type: 'Motion study · sample', placeholder: true
  }
];
