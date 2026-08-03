// Generate Gallery 1 - 25 dengan Gaya Scrapbook Polaroid
const galleryGrid = document.querySelector('.gallery-grid');
if (galleryGrid) {
    for (let i = 1; i <= 25; i++) {
        const card = document.createElement('div');
        card.classList.add('gallery-card');
        
        // Kemiringan acak agar tampak natural seperti lembar scrapbook
        const randomAngle = (Math.random() * 6) - 3; 
        card.style.setProperty('--i', randomAngle);
        
        card.innerHTML = `
            <img src="foto${i}.jpg" alt="Foto ${i}" loading="lazy">
            <div class="polaroid-caption"> #${i < 10 ? '0' + i : i} 🤎</div>
        `;
        
        card.addEventListener('click', () => openLightbox(`foto${i}.jpg`));
        galleryGrid.appendChild(card);
    }
}

// Clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        clockElement.innerHTML = `🕒 ${now.toLocaleDateString('id-ID', options)}`;
    }
}
setInterval(updateClock, 1000);
updateClock();

// Quotes bergaya jurnal
const quotes = [
    "\"Setiap foto menyimpan cerita dan kenangan berharga. 🤎\"",
    "\"Catatan kecil dari lembaran memori pilihan. ✨\"",
    "\"Mengabadikan detik demi detik menjadi sebuah cerita. 📖\"",
    "\"Ruang virtual tempat merangkum setiap momen indah. ☕\""
];
let quoteElement = document.getElementById('quote');
function changeQuote() {
    if (quoteElement) {
        quoteElement.style.opacity = 0;
        setTimeout(() => {
            let currentQuoteIndex = (quotes.indexOf(quoteElement.textContent) + 1) % quotes.length;
            quoteElement.textContent = quotes[currentQuoteIndex];
            quoteElement.style.opacity = 1;
        }, 300);
    }
}
setInterval(changeQuote, 5000);

// Floating Elements
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '🍂';
    heart.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 12 + 10;
    heart.style.fontSize = size + 'px';
    const duration = Math.random() * 5 + 4;
    heart.style.animationDuration = duration + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
}
setInterval(createHeart, 600);

// Lightbox
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = document.querySelector('#closeLightbox');

function openLightbox(imgSrc) {
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
}
function closeLightbox() {
    lightbox.classList.remove('active');
}
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Navigation
const openAlbumBtn = document.getElementById('openAlbum');
const backHomeBtn = document.getElementById('backHome');
const homeSection = document.querySelector('.home');
const gallerySection = document.querySelector('.gallery');

if (openAlbumBtn && backHomeBtn && homeSection && gallerySection) {
    openAlbumBtn.addEventListener('click', () => {
        homeSection.classList.add('hidden');
        gallerySection.classList.remove('hidden');
        window.scrollTo(0, 0);
    });
    backHomeBtn.addEventListener('click', () => {
        gallerySection.classList.add('hidden');
        homeSection.classList.remove('hidden');
        window.scrollTo(0, 0);
    });
}