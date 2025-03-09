// 章节数据
const chapters = [
    { id: 1, name: "الفاتحة (Al-Fatiha)", audio: "audio/1.mp3", text: "text/1.txt" },
    { id: 2, name: "البقرة (Al-Baqara)", audio: "audio/2.mp3", text: "text/2.txt" }
];

// 处理章节列表页面
if (document.getElementById("chapter-list")) {
    const list = document.getElementById("chapter-list");
    chapters.forEach(chapter => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="player.html?chapter=${chapter.id}">${chapter.name}</a>`;
        list.appendChild(listItem);
    });
}

// 处理播放页面
if (document.getElementById("audio-player")) {
    document.addEventListener("DOMContentLoaded", () => {
        const params = new URLSearchParams(window.location.search);
        const chapterId = params.get("chapter");
        const chapter = chapters.find(chap => chap.id == chapterId);

        if (chapter) {
            document.getElementById("chapter-title").textContent = chapter.name;
            document.getElementById("audio-player").src = chapter.audio;

            fetch(chapter.text)
                .then(response => response.text())
                .then(text => {
                    document.getElementById("text-content").innerText = text;
                })
                .catch(() => {
                    document.getElementById("text-content").innerText = "Unable to load text.";
                });
        }
    });
}

// 返回按钮
function goBack() {
    window.history.back();
}