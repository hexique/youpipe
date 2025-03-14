console.log("videos:", window.videos);
if (window.videos && window.videos.length > 0) {
    const randomId = Math.floor(Math.random() * window.videos.length);
    document.getElementById("random").href = `info.html?id=${randomId}`;
} else {
    console.error("videos is not defined");
}

document.querySelector('button').addEventListener('click', async () => {
const fileInput = document.querySelector('input[type="file"]');
const title = document.querySelector('input[placeholder="Title"]').value;
const author = document.querySelector('input[placeholder="Your username"]').value;
const desc = document.querySelector('textarea').value;

const file = fileInput.files[0];
const reader = new FileReader();

reader.onload = function() {
    const newId = window.videos.length;
    const newVideo = {
        title,
        author,
        desc,
        date: new Date().toLocaleDateString('ru-RU'),
        views: 0,
        likes: 0,
        dislikes: 0,
        filename: `user_${newId}.mp4`,
        fileData: this.result
    };

    window.videos.push(newVideo);
    try{
        localStorage.setItem('videos', JSON.stringify(window.videos))
    } catch(e) {
        let totalSize = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            totalSize += key.length + value.length;
        }
        alert(`Your video is too large. This file weighs more than ${Math.floor(500 - (totalSize / 1024 / 1024) * 100) / 100}MB`, e);
    }

    let totalSize = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        totalSize += key.length + value.length;
    }
    console.log(`Total used ${totalSize / 1024 / 1024} MB`);
    window.location.href = `info.html?id=${newId}`;
};

reader.readAsDataURL(file);
});

let totalSize = 0;
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    totalSize += key.length + value.length;
}
console.log(`Total used ${totalSize / 1024 / 1024} MB`);