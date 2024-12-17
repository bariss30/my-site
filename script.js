const text = "Hi 👋, I'm Barış Savak";
let index = 0;
const typingText = document.getElementById("typing-text");

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 75); // 75 ms bekle
    } else {
        setTimeout(resetText, 1000); // Yazı bittiğinde 1 saniye bekle ve sıfırla
    }
}

function resetText() {
    typingText.textContent = ""; // Yazıyı temizle
    index = 0; // Indexi sıfırla
    type(); // Yazıyı tekrar başlat
}

window.onload = type;

// "Çalışma Konularım" alanına tıklama işlemi
document.querySelector("#calismalar").addEventListener("click", () => {
    const items = document.querySelectorAll(".topic-item");
    const isHidden = Array.from(items).every(item => !item.classList.contains("show"));
    
    items.forEach(item => {
        if (isHidden) {
            item.classList.add("show"); // Hepsini göster
        } else {
            item.classList.remove("show"); // Hepsini gizle
        }
    });
});
