const initialData = [
    {
        title: "разоблачение на пельмени",
        desc: "first video on youpipe lol.<br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "13.03.2025",
        author: "hexi",
        filename: "0.mp4",
        views: 0,
        likes: 0,
        dislikes: 0,
    }, {
        title: "【東方】Bad Apple!! ＰＶ【影絵】",
        desc: 'this text is <a style="color: "red">red</a>',
        date: "14.03.2025",
        author: "hexi",
        filename: "1.mp4",
        views: 0,
        likes: 0,
        dislikes: 0,
    }, {
        title: "ЭТИ СТАТИСТЫ ПРОСТО МАЛЫШИ 🤯 НОВЫЙ ТАНК GPT-o4 ПРОСТО ИМБА 😱",
        desc: 'хотите прикол? тут в описании можно картинки вставлять<br><img src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg" width="300">',
        date: "14.03.2025",
        author: "hexi",
        filename: "2.mp4",
        views: 0,
        likes: 0,
        dislikes: 0,
    }, {
        title: "april fools",
        desc: 'best parnk for april fools',
        date: "14.03.2025",
        author: "hexi",
        filename: "3.mp4",
        views: 0,
        likes: 0,
        dislikes: 0,
    }, {
        title: "шрек",
        desc: 'шрек',
        date: "14.03.2025",
        author: "шрек",
        filename: "4.mp4",
        views: 0,
        likes: 0,
        dislikes: 0,
    },
];

// Загрузка данных из localStorage или инициализация
videos = JSON.parse(localStorage.getItem('videos')) || initialData;
window.videos = JSON.parse(localStorage.getItem('videos')) || initialData;

function saveVideos() {
    localStorage.setItem('videos', JSON.stringify(videos));
    console.log(`Total used: ${totalSize / 1024 / 1024} MB`);
}

