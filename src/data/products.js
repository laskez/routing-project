// Импортируем твои фото
import notebookImg from '../img/notebook.png';
import cameraImg from '../img/Camera.png';
import headphonesImg from '../img/headphones.png';
import mouseImg from '../img/pc-mouse.png';
import pcImg from '../img/PC.png';
import keyboardImg from '../img/keyboard.png';

const products = [
  {
    id: 1,
    title: "Ноутбук игровой MSI Cyborg 15 AI FHD, 144Hz",
    price: 149999,
    description: "Intel Core 7 240H, 16 GB RAM, 512 GB SSD, RTX 5060, Wind 11",
    image: notebookImg,
    rating: { rate: 4.9 }
  },
  {
    id: 2,
    title: "Фотоаппарат Canon EOS 600D",
    price: 44716,
    description: "Canon EOS 600D Kit EF-S 18-135mm f/3.5-5.6 IS, черный",
    image: cameraImg,
    rating: { rate: 4.2 }
  },
  {
    id: 3,
    title: "Игровые наушники беспроводные Logitech G PRO X 2 LIGHTSPEED",
    price: 24999,
    description: "Игровые наушники беспроводные Logitech G PRO X 2 LIGHTSPEED, Bluetooth, черный",
    image: headphonesImg,
    rating: { rate: 4.7 }
  },
  {
    id: 4,
    title: "Киберспортивная мышь Razer Viper V2 Pro",
    price: 8799,
    description: "Киберспортивная мышь Razer Viper V2 Pro,  USB Type A, радиоканал",
    image: mouseImg,
    rating: { rate: 3.4 }
  },
  {
    id: 5,
    title: "Игровой компьютер Ryzen",
    price: 190120,
    description: "Игровой компьютер Ryzen 7 7800X3D RTX5060 Ti 32GB 1TB",
    image: pcImg,
    rating: { rate: 5 }
  },
  {
    id: 6,
    title: "Игровая клавиатура Wooting 80HE Black ANSI",
    price: 26510,
    description: "Игровая клавиатура Wooting 80HE Black ANSI раскладка черная RGB магнитная",
    image: keyboardImg,
    rating: { rate: 4.5 }
  }
];

export default products;