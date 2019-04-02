// This is just some sample data!
import bodo1 from './css/images/bodo1.jpg';
import bodo2 from './css/images/bodo2.jpg';
import hero1 from './css/images/hero1.jpg';
import hero2 from './css/images/hero2.jpg';
import product1 from './css/images/product1.jpg';
import product2 from './css/images/product2.jpg';
import product3 from './css/images/product3.jpg';
import product4 from './css/images/product4.jpg';
import product5 from './css/images/product5.jpg';
import product6 from './css/images/product6.jpg';

export const navObj = {
    navItem1: {
        name:'Каталог впечатлений',
        subItems:{
        },
    },
    navItem2: {
        name:'О нас',
        subItems:{
            subItem1:'Команда',
            subItem2:'Люди',
            subItem3:'Идея',
        },
        image:bodo1,
    },
    navItem3: {
        name:'Контакты',
        subItems:{
            },
    },
    navItem4: {
        name:'Как это работает',
        subItems:{
            subItem1:'Что входит в подарок?',
            subItem2:'Реклама',
            subItem3:'Media',
            subItem4:'Покупка подарка',
            subItem5:'Стратегия',
        },
        image:bodo2,
    },
    navItem5: {
        name:'Использовать сертификат',
        subItems:{},
    },
};

export const sliderItems = [hero1,hero2];

export const  products = {
    product1: {
        title: 'Прогулка на лошадях для двоих',
        text: "Любители конного спорта отправятся на прогулку вместе с инструктором. " +
        "Он будет следить, чтобы лошадь шла шагом в нужную сторону. Кататься предстоит на свежем воздухе.",
        image: product1,
        price: 400,
        categories: [],
        participants: 2,
        quantity: "60 минут",
    },
    product2: {
        title: '«Подпольный Stand Up» для двоих',
        text: "Вечер с острыми шутками для пары друзей. Гости смогут насладиться выступлениями популярных комиков." +
        " В программе мероприятия — шутки и курьезы без цензуры.",
        image: product2,
        price: 500,
        categories: [],
        participants: 2,
        quantity: "90 минут",
    },
    product3: {
        title: 'Парк развлечений Galaxy для двоих',
        text: "Целый день в большом комплексе с аттракционами для друзей. Вместо входных билетов им предоставят карту." +
        " Гости смогут сами выбрать, какие развлечения посетить.",
        image: product3,
        price: 1000,
        categories: [],
        participants: 2,
        quantity: "Не ограничено",
    },
    product4: {
        title: 'Мастер-класс скалолазания для двоих',
        text: "Освоив азы скалолазания, ученики преодолеют трассы с разными уровнями сложности.",
        image: product4,
        price: 600,
        categories: [],
        participants: 2,
        quantity: "60 минут",
    },
    product5: {
        title: 'Полет на Zip-line для двоих',
        text: "Экстремальный спуск по стальному канату — друзья по очереди пролетят над озером и лесом." +
        " Инструктор выдаст каждому шлем и специальную страховочную систему.",
        image: product5,
        price: 400,
        categories: [],
        participants: 2,
        quantity: "60 минут",
    },
    product6: {
        title: 'Экскурсия в Дом Хаски для двоих',
        text: "Друзья посетят экоферму, где обитают породистые собаки. Они погуляют по территории, посетят пет-терапию," +
        " покатаются на собачьих упряжках или устроят дог-скутеринг.",
        image: product6,
        price: 1600,
        categories: [],
        participants: 2,
        quantity: "5 часов",
    },
};
