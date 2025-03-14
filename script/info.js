/* const data = [
    {
        title: "тест видео",
        desc: "первое видео на youpipe. рандом запись из моей папки с видео, датируемая 07.02.2025. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "13.03.2025",
        author: "hexi",
        views: 0,
        likes: 0,
        dislikes: 0,
    },
    {
        title: "разоблачение на пельмени",
        desc: "source: https://youtu.be/vCpXcDJmEX8",
        date: "13.03.2025",
        author: "hexi",
        views: 0,
        likes: 0,
        dislikes: 0,
    },
    {
        title: "Лучший гамбит в шахматах работает даже против гроссмейстеров",
        desc: "а",
        date: "13.03.2025",
        author: "hexi",
        views: 0,
        likes: 0,
        dislikes: 0,
    },
    {
        title: "Factorio trailer 2020",
        desc: "рандом видео из моих загрузок (качество 4k)",
        date: "13.03.2025",
        author: "hexi",
        views: 0,
        likes: 0,
        dislikes: 0,
    },
    {
        title: "шрек",
        desc: "шрек",
        date: "13.03.2025",
        author: "hexi",
        views: 0,
        likes: 0,
        dislikes: 0,
    },
    {
        title: "vsauce",
        desc: "this text is <b>bold.</b>",
        date: "13.03.2025",
        author: "hexi",
        views: 1,
        likes: 0,
        dislikes: 0,
    },
];
*/

const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id'));

let videos = JSON.parse(localStorage.getItem('videos')) || [];
const video = document.createElement("video");

const title = document.createElement("h3");
const author = document.createElement("p");
const desc = document.createElement("p");

const like = document.createElement("button");
const dislike = document.createElement("button");

console.log("videos:", window.videos);
if (window.videos && window.videos.length > 0) {
    const randomId = Math.floor(Math.random() * window.videos.length);
    document.getElementById("random").href = `info.html?id=${randomId}`;
} else {
    console.error("videos is undefined");
}

if(videos.length == 0){
    videos = initialData;
}

try {
    console.log(videos);
    const videoData = videos[id];

    videoData.views++;
    localStorage.setItem('videos', JSON.stringify(videos));

    title.innerHTML = `<h3 style="color: white;">${videoData.title}</h3>`;
    desc.innerHTML = `<p style="color: #b3b3b3;">Description:<br><a>${videoData.desc}</a></p>`;
    author.innerHTML = `<p>Author: <a>${videoData.author}</a><br>Views: <a>${videoData.views}</a><br>Date: <a>${videoData.date}</a></p>`;

    like.textContent = `${videoData.likes} 👍`;
    like.id = `like-btn`;

    dislike.textContent = `${videoData.dislikes} 👎`;
    dislike.id = `dislike-btn`;

    console.log(id);
    if(id < 5){
        video.innerHTML = `<source src="vid/${videoData.filename}" type="video/mp4">`;
    }
    else{
        video.innerHTML = `<source src="${videoData.fileData}" type="video/mp4">`;
    }
    video.height = "400";
    video.controls = true;

    like.addEventListener("click", () => {
        videoData.likes++;
        localStorage.setItem('videos', JSON.stringify(videos));
        like.textContent = `${videoData.likes} 👍`;
    });

    dislike.addEventListener("click", () => {
        videoData.dislikes++;
        localStorage.setItem('videos', JSON.stringify(videos));
        dislike.textContent = `${videoData.dislikes} 👎`; 
    });
    document.body.append(video);

    document.body.append(document.createElement("br"));
    document.body.append(like);
    document.body.append(dislike);


    document.body.append(title);

    document.body.append(author);

    document.body.append(desc);
} 
catch (errorText){
    const centered = document.createElement("div");
    const error = document.createElement("h3");
    const errorDesc = document.createElement("p");

    error.textContent = "This video isn't available";
    error.style.color = "white";
    errorDesc.textContent = errorText;

    centered.style.textAlign = "center";

    document.body.append(centered);
    centered.append(error);
    centered.append(errorDesc);

    console.error(errorText);
}
let totalSize = 0;
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    totalSize += key.length + value.length;
}
console.log(`Total used ${totalSize / 1024 / 1024} MB`);

/* <h3><a href="https://hexique.github.io/unix2time/">Unix 2 time</a> [10.02.2025]</h3>
<p>Converter from unix</p> */