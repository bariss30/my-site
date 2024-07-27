document.addEventListener('DOMContentLoaded', (event) => {
    const text = "Merhaba, dünya!";
    const typingEffectElement = document.getElementById('typingEffect');
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEffectElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Her bir karakteri 100ms arayla ekrana yazdır
        }
    }

    type();
});