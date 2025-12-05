import logo1 from '../assets/logo-uni-1.png';
import logo2 from '../assets/logo-uni-2.png';
import logo3 from '../assets/logo-uni-3.png';
import logo4 from '../assets/logo-uni-4.png';

// Университет 1
import slide1 from '../assets/slides/uni1/1.jpg';
import slide2 from '../assets/slides/uni1/2.jpg';
import slide3 from '../assets/slides/uni1/3.jpg';

// Университет 2
import slide4 from '../assets/slides/uni2/1.jpg';
import slide5 from '../assets/slides/uni2/2.jpg';
import slide6 from '../assets/slides/uni2/3.jpg';

// Университет 3
import slide7 from '../assets/slides/uni3/1.jpg';
import slide8 from '../assets/slides/uni3/2.jpg';
import slide9 from '../assets/slides/uni3/3.jpg';

// Университет 4
import slide10 from '../assets/slides/uni4/1.jpg';
import slide11 from '../assets/slides/uni4/2.jpg';
import slide12 from '../assets/slides/uni4/3.jpg';

export type University = {
  id: string;
  logo: string;
  title: string;
  subtitle?: string;
  description?: string;
  items?: string[];
  slides?: string[]; // массив фоток кампуса
};

export const universities: University[] = [
  {
    id: 'uni-1',
    logo: logo1,
    title: 'Первый университет',
    subtitle: 'Факультет международных программ',
    description:
      'Краткое описание университета, его миссия и ключевые факты. (Пара строк, как в макете).',
    items: ['Программа A', 'Программа B', 'Программа C', 'Программа D'],
    slides: [slide1, slide2, slide3],
  },
  {
    id: 'uni-2',
    logo: logo2,
    title: 'KBТU',
    subtitle: 'Faculty of Engineering',
    description: 'Ещё одно краткое описание. Контактная информация и ссылка.',
    items: ['Программа 1', 'Программа 2', 'Программа 3', 'Программа 4'],
    slides: [slide4, slide5, slide6],
  },
  {
    id: 'uni-3',
    logo: logo3,
    title: 'Third Institute',
    subtitle: 'Applied Sciences',
    description: 'Короткое описание третьего института.',
    items: ['Направление A', 'Направление B', 'Направление C'],
    slides: [slide7, slide8, slide9],
  },
  {
    id: 'uni-4',
    logo: logo4,
    title: 'ITL University',
    subtitle: 'Design & Tech',
    description: 'Описание и краткие ссылки.',
    items: ['Курс 1', 'Курс 2', 'Курс 3', 'Курс 4', 'Курс 5'],
    slides: [slide10, slide11, slide12],
  },
];
