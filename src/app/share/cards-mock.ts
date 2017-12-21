import { Card } from './cards';

export const CARDS: Card[] = [
  { id: 1,
      imgSrc: '../../../assets/images/strongchild.png',
      imgAlt: 'Mentaltraining...?',
      title: 'Mentaltraining?',
      content: 'Mentaltraining unterstützt festgefahrene Denk-, Verhaltens- und Emotionsmuster positiv zu verändern.',
      buttonLink: '/mentaltraining',
      buttonText: 'Weiter...'
  },
  { id: 2,
    imgSrc: '../../../assets/images/myoffers.png',
    imgAlt: 'Meine Angebote',
    title: 'Ich biete...',
    // tslint:disable-next-line:max-line-length
    content: 'Einzeltraining, Workshops, Seminare, Lehrgänge für Einsteiger und Fortgeschrittene - das optimale Angebot zugeschnitten für jedes Level.',
    buttonLink: '/offers',
    buttonText: 'Weiter...'
  },
  { id: 3,
    imgSrc: '../../../assets/images/aboutme.png',
    imgAlt: 'Über mich',
    title: 'Der Trainer',
    content: 'Weshalb ich mit Begeisterung Menschen mental begleite.',
    buttonLink: '/aboutme',
    buttonText: 'Weiter...'
  },
];
