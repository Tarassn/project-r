// This is just some sample data!
import bodo1 from './css/images/bodo1.jpg';
import bodo2 from './css/images/bodo2.jpg';
import slider1 from './css/images/slider1.jpg';
import slider2 from './css/images/slider2.jpg';
import slider3 from './css/images/slider3.jpg';
import product1 from './css/images/product1.jpg';
import product2 from './css/images/product2.jpg';
import product3 from './css/images/product3.jpg';
import product4 from './css/images/product4.jpg';
import product5 from './css/images/product5.jpg';
import product6 from './css/images/product6.jpg';
import product7 from './css/images/product7.jpg';
import product8 from './css/images/product8.jpg';
import product9 from './css/images/product9.jpg';
import product10 from './css/images/product10.jpg';
import product11 from './css/images/product11.jpg';
import product12 from './css/images/product12.jpg';

export const navObj = {
    navItem1: {
        name:'Каталог впечатлений',
        subItems:{
        },
        link:"/",
    },
    navItem2: {
        name:'О нас',
        subItems:{
            subItem1:'Команда',
            subItem2:'Люди',
            subItem3:'Идея',
        },
        image:bodo1,
        link:"#",
    },
    navItem3: {
        name:'Контакты',
        subItems:{
            },
        link:"/Contacts",
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
        link:"#",
    },
    navItem5: {
        name:'Использовать сертификат',
        subItems:{},
        link:"/UseCertificate",
    },
};

export const sliderItems = {
    "0":{
        image:slider1,
        text:"bla",
        link:"",
    },
    "1":{
        image:slider2,
        text:"bla",
        link:"",
    },
    "2":{
        image:slider3,
        text:"bla",
        link:"",
    },
};
let categories = ['active','water', 'sport','excursion']


export const  products = {
    "1": {
        title: 'Прогулка на лошадях для двоих',
        text: "Любители конного спорта отправятся на прогулку вместе с инструктором. " +
        "Он будет следить, чтобы лошадь шла шагом в нужную сторону. Кататься предстоит на свежем воздухе.",
        image: product1,
        price: 400,
        categories: ['active'],
        participants: 2,
        quantity: "60 минут",
    },
    "2": {
        title: '«Подпольный Stand Up» для двоих',
        text: "Вечер с острыми шутками для пары друзей. Гости смогут насладиться выступлениями популярных комиков." +
        " В программе мероприятия — шутки и курьезы без цензуры.",
        image: product2,
        price: 500,
        categories: ['excursion'],
        participants: 2,
        quantity: "90 минут",
    },
    "3": {
        title: 'Парк развлечений Galaxy для двоих',
        text: "Целый день в большом комплексе с аттракционами для друзей. Вместо входных билетов им предоставят карту." +
        " Гости смогут сами выбрать, какие развлечения посетить.",
        image: product3,
        price: 1000,
        categories: ['active', 'excursion'],
        participants: 2,
        quantity: "Не ограничено",
    },
    "4": {
        title: 'Мастер-класс скалолазания для двоих',
        text: "Освоив азы скалолазания, ученики преодолеют трассы с разными уровнями сложности.",
        image: product4,
        price: 600,
        categories: ['active', 'sport'],
        participants: 2,
        quantity: "60 минут",
    },
    "5": {
        title: 'Полет на Zip-line для двоих',
        text: "Экстремальный спуск по стальному канату — друзья по очереди пролетят над озером и лесом." +
        " Инструктор выдаст каждому шлем и специальную страховочную систему.",
        image: product5,
        price: 400,
        categories: ['active'],
        participants: 2,
        quantity: "60 минут",
    },
    "6": {
        title: 'Экскурсия в Дом Хаски для двоих',
        text: "Друзья посетят экоферму, где обитают породистые собаки. Они погуляют по территории, посетят пет-терапию," +
        " покатаются на собачьих упряжках или устроят дог-скутеринг.",
        image: product6,
        price: 1600,
        categories: ['excursion'],
        participants: 2,
        quantity: "5 часов",
    },

    "7": {
        title: 'Мастер-класс управления яхтой',
        text: "Урок парусного спорта на 7-метровой крейсерско-гоночной яхте." +
        " Мастер проведет инструктаж по технике безопасности и расскажет теорию управления спортивным судном.",
        image: product7,
        price: 2000,
        categories: ['water','sport'],
        participants: 4,
        quantity: "3 часа",
    },
    "8": {
        title: 'Полет на флайборде',
        text: "30-минутный полет на летающей доске, которая способна поднять человека на высоту до 5 метров. " +
        "Инструктор выдаст необходимое снаряжение и будет следить за процессом.",
        image: product8,
        price: 2000,
        categories: ['active'],
        participants: 1,
        quantity: "30 минут",
    },
    "9": {
        title: 'Романтическая прогулка на яхте',
        text: "Речной круиз в акватории Днепра для влюбленных. Судно будет передвигаться со скоростью 20 км/ч." +
        " Командир предложит маршрут прогулки, а пассажиры смогут внести в него свои коррективы.",
        image: product9,
        price: 2500,
        categories: ['water'],
        participants: 2,
        quantity: "3 часа",
    },
    "10": {
        title: 'Абонемент в бассейн',
        text: "5 посещений современного просторного бассейна, где можно поплавать в спокойной обстановке. " +
        "Температура воды — +27 градусов. Есть 3 дорожки длиной в 20 метров.",
        image: product10,
        price: 1500,
        categories: ['water','sport'],
        participants: 1,
        quantity: "5 сеансов",
    },
    "11": {
        title: 'Виндсерфинг',
        text: "Катание на доске с парусом. Опытный инструктор расскажет азы теории," +
        " после чего новичок потренируется держать равновесие, наклонять доску с борта на борт, держать курс.",
        image: product11,
        price: 800,
        categories: ['active','sport'],
        participants: 1,
        quantity: "60 минут",
    },
    "12": {
        title: 'Мастер-класс дайвинга для двоих',
        text: "Занятие по погружению под воду с аквалангом. Друзья узнают, как использовать язык жестов и действовать" +
        " в непредвиденных ситуациях. Во время практики дайверы будут отрабатывать технику плавания на глубине.",
        image: product12,
        price: 2000,
        categories: ['active','water','sport'],
        participants: 2,
        quantity: "3 часа",
    },
};
