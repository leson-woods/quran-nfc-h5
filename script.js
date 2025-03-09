// 章节数据
const chapters = [
    { id: 1, name: "الفاتحة (Al-Fatiha)", audio: "audio/1.mp3", text: "text/1.txt" },
    { id: 2, name: "البقرة (Al-Baqara)", audio: "audio/2.mp3", text: "text/2.txt" }
];

// 在 index.html 生成章节列表
if (document.getElementById('chapter-list')) {
    const list = document.getElementById('chapter-list');
    chapters.forEach(chapter => {
        let listItem = document.createElement("li");
        listItem.textContent = chapter.name;
        listItem.onclick = () => {
            window.location.href = `player.html?chapter=${chapter.id}`;
        };
        list.appendChild(listItem);
    });
}

// 在 player.html 解析章节并加载音频和文本
if (document.getElementById("audio-player")) {
    const params = new URLSearchParams(window.location.search);
    const chapterId = params.get("chapter");
    const chapter = chapters.find(chap => chap.id == chapterId);

    if (chapter) {
        document.getElementById("chapter-title").textContent = chapter.name;
        document.getElementById("audio-player").src = chapter.audio;

        // 加载文本
        fetch(chapter.text)
            .then(response => response.text())
            .then(text => {
                document.getElementById("text-content").innerText = text;
            })
            .catch(error => {
                document.getElementById("text-content").innerText = "无法加载文本";
            });
    }
}
