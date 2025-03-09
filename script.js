// 章节数据
const chapters = [
    { id: 1, name: "الفاتحة (Al-Fatiha)", audio: "audio/1.mp3", text: "text/1.txt" },
    { id: 2, name: "البقرة (Al-Baqara)", audio: "audio/2.mp3", text: "text/2.txt" }
];

// 处理章节列表页面
// 处理播放页面
if (document.getElementById("audio-player")) {
    document.addEventListener("DOMContentLoaded", () => {
        const params = new URLSearchParams(window.location.search);
        const chapterId = params.get("chapter");
        const chapter = chapters.find(chap => chap.id == chapterId);

        if (chapter) {
            document.getElementById("chapter-title").textContent = chapter.name;
            document.getElementById("audio-player").src = chapter.audio;

            // 确保音频自动加载
            const audioPlayer = document.getElementById("audio-player");
            audioPlayer.load();

            fetch(chapter.text)
                .then(response => response.text())
                .then(text => {
                    document.getElementById("text-content").innerText = text;
                })
                .catch(() => {
                    document.getElementById("text-content").innerText = "无法加载文本";
                });
        } else {
            console.error("未找到对应章节");
        }
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
