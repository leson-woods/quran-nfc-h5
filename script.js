// 章节数据
const chapters = [
    { id: 1, name: "الفاتحة (Al-Fatiha)", audio: "audio/1.mp3", text: "text/1.txt" },
    { id: 2, name: "البقرة (Al-Baqara)", audio: "audio/2.mp3", text: "text/2.txt" }
];

// 处理章节列表页面
if (document.getElementById("chapter-list")) {
    document.addEventListener("DOMContentLoaded", function() {
        const list = document.getElementById("chapter-list");
        chapters.forEach(chapter => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="player.html?chapter=${chapter.id}" class="chapter-link">${chapter.name}</a>`;
            list.appendChild(listItem);
        });
    });
}

// 处理播放页面
if (document.getElementById("audio-player")) {
    document.addEventListener("DOMContentLoaded", function() {
        const params = new URLSearchParams(window.location.search);
        const chapterId = params.get("chapter");
        const chapter = chapters.find(chap => chap.id == chapterId);

        if (chapter) {
            document.getElementById("chapter-title").textContent = chapter.name;
            document.getElementById("audio-player").src = chapter.audio;
            document.getElementById("audio-player").load();
            document.getElementById("audio-player").play(); // 尝试自动播放

            fetch(chapter.text)
                .then(response => response.text())
                .then(text => {
                    document.getElementById("text-content").innerText = text;
                })
                .catch(() => {
                    document.getElementById("text-content").innerText = "无法加载文本";
                });
        } else {
            document.getElementById("chapter-title").textContent = "章节未找到";
            document.getElementById("text-content").innerText = "无法加载内容";
        }
    });
}

// 返回按钮
function goBack() {
    window.history.back();
}