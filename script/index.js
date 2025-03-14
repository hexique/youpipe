let videos = JSON.parse(localStorage.getItem('videos')) || [];
const videoContainer = document.getElementById("video-container");

if (videos.length === 0) {
    videos = initialData;
}

videos = videos.map((video, index) => ({ ...video, originalId: index }));

videos.sort((a, b) => {
    const diffA = a.likes - a.dislikes;
    const diffB = b.likes - b.dislikes;
    return diffB - diffA;
});

if (window.videos && window.videos.length > 0) {
    const randomId = Math.floor(Math.random() * window.videos.length);
    document.getElementById("random").href = `info.html?id=${randomId}`;
} else {
    console.error("videos is undefined");
}

videos.forEach((videoData, i) => {
    const videoBlock = document.createElement("div");
    const title = document.createElement("h3");
    const video = document.createElement("video");
    const author = document.createElement("p");

    const originalId = videoData.originalId;
    title.innerHTML = `[${videoData.date}] <a href="info.html?id=${originalId}">${videoData.title}</a>`;
    author.innerHTML = `Author: <a>${videoData.author}</a>`;

    if (videoData.fileData) {
        video.innerHTML = `<source src="${videoData.fileData}" type="video/mp4">`;
    } else if (videoData.filename) {
        video.innerHTML = `<source src="vid/${videoData.filename}" type="video/mp4">`;
    } else {
        console.error("У видео нет ни filename, ни fileData:", videoData);
    }

    video.controls = true;
    video.height = "250";

    videoBlock.appendChild(title);
    videoBlock.appendChild(author);
    videoBlock.appendChild(video);

    videoContainer.appendChild(videoBlock);
});

let totalSize = 0;
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    totalSize += key.length + value.length;
}
console.log(`Total used ${totalSize / 1024 / 1024} MB`);