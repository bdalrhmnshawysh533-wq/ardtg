// تكثيف القلوب والورود في الخلفية
const heartsContainer = document.getElementById('hearts-container');
for (let i = 0; i < 35; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = i % 2 === 0 ? '❤️' : '🌹';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.animationDelay = (Math.random() * 4) + 's';
    heartsContainer.appendChild(heart);
}

// 35 عبارة حب وحنان مختلفة لكل صورة
const lovePhrases = [
    "يا أجمل إنسانة دخلت حياتي، وجودك جنة ❤️",
    "ضحكتك بتنور دنيتي وتنسيني كل تعب 🌹",
    "معاكِ حسيت بطعم الحياة وحنان الدنيا كله ✨",
    "لو ألف الدنيا كلها مش هلاقي زيك يا روح قلبي 💖",
    "انتي حياتي وروحي الي مقدش اعيش من غرها  🥰",
    "بحبك بكل تفاصيلك وبحب رحتك بحب عيونك 🌸",
    "أنتِ النعمة اللي احمد ربنا يدمها  عليا للأبد 🙏",
    "حضنك هو المكان الوحيد اللي بحس فيه بالامان 💫",
    "يا أجمل وردة نورت  حياتي وأيامي 🌹",
    "كل ثانية معاكِ بتسوى الدنيا وما فيها يا روحي ❤️",
    "قلبي بينبض باسمك في كل دقيقة وكل ثانية 💞",
    " هفضل سندك ومأمنك دايماً ومهما حصل يا فرحة عمري ✨",
    "ضحكتك وعيونك  اكتر حاجه سحرتني ولا شفيفك بقا هموت وبوس 🎶",
    "بحب  كل تفصيله فيكي  💖",
    "أنتِ مش بس حبيبتي، أنتِ بنتي وصحبتي وكل أهلي 🥰",
    "يا أجمل حقيقة عاشها قلبي بعد أماني طويلة 🌹",
    "وجودك جنبي بيخليني أتمنى الوقت يوقف ومينتهيش ⏳",
    "حنانك وطيبة قلبك هما سر تعلقي الجنوني بيكِ 💕",
    "كل يوم بيعدي وأنا معاكِ بحب أكتر وأكتر يا عمري ✨",
    "مهما طال بيا العمر هفضل واخد عهدي أحميكي بعيوني 🛡️",
    "عيونك السما اللي بتوه فيها وألاقي راحتي 🌌",
    "أنتِ الضحكة اللي بتزين وشي مهما الدنيا قسيت ❤️",
    "يا أجمل قدر جابك ليا ونساني كل تعب السنين 🌺",
    "بحبك قد النجوم اللي مالية السما دي كلها وسما أكتر ⭐",
    "دفي كلامك وحنانك بينسيني برد الشتاء وهموم الدنيا حولينا ☕",
    "أنتِ الملكة اللي متفرعة على عرش قلبي لوحدك 👑",
    "صوتك الحنين كفيل يعدل مزاجي ويهدي روحي التعبانة 🎵",
    "بحلم دايماً بكرة اللي يجمعنا في بيت واحد يلمنا سوا 🏡",
    "أنتِ أطهر وأجمل هدية ربنا رزقني بيها في عمري كله 🎁",
    "عشقي ليكِ ملهوش آخر ولا بيعرف يقل أبداً يا فـروحة 💞",
    "كل حتة في قلبي بتنادي باسمك وبتعشقك بجنون 🌹",
    "يا أجمل أماني العمر اللي تحققت وبقت قدام عيني ✨",
    "بحب تفاصيلك الصغيرة قبل الكبيرة يا توأم روحي 💖",
    "طول ما أنتِ معايا أنا أقوى إنسان في الدنيا دي كلها 💪",
    "بحبك يا أمل عمري وكل حكاياتي الحلوة مع فـروحة ❤️"
];

// توليد الـ 35 صفحة ديناميكياً
const book = document.getElementById('book');
const totalPhotos = 35;

for (let i = 1; i <= totalPhotos; i++) {
    const page = document.createElement('div');
    page.className = 'page image-page';
    page.style.zIndex = totalPhotos - i;

    // اختيار العبارة الخاصة بالصورة (لو خلصت بنكررها بلطف)
    const phrase = lovePhrases[(i - 1) % lovePhrases.length];

    page.innerHTML = `
        <div class="image-wrapper">
            <img src="photo${i}.jpg" alt="صورة ${i}" onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'">
        </div>
        <div class="page-caption">${phrase}</div>
        <div class="page-footer">
            <span>فـروحـة ❤️</span>
            <span>صفحة ${i} من ${totalPhotos}</span>
        </div>
    `;
    book.appendChild(page);
}

const pages = document.querySelectorAll('.page');
let currentPage = 0;
const flipSound = document.getElementById('flip-sound');

function playFlipSound() {
    flipSound.currentTime = 0;
    flipSound.play().catch(e => {});
}

function nextPage() {
    if (currentPage < pages.length) {
        playFlipSound();
        pages[currentPage].classList.add('flipped');
        currentPage++;
    } else {
        resetBook();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        playFlipSound();
        pages[currentPage].classList.remove('flipped');
    }
}

function resetBook() {
    playFlipSound();
    pages.forEach(page => page.classList.remove('flipped'));
    currentPage = 0;
}

// خاصية العرض التلقائي (تفتح وتقلب لوحدها أول ما تبدأ!)
let autoPlayInterval = setInterval(autoTurnPage, 4000);
let isAutoPlaying = true;

function autoTurnPage() {
    if (currentPage < pages.length) {
        playFlipSound();
        pages[currentPage].classList.add('flipped');
        currentPage++;
    } else {
        resetBook();
    }
}

function toggleAutoPlay() {
    const btn = document.getElementById('autoplay-btn');
    if (isAutoPlaying) {
        clearInterval(autoPlayInterval);
        btn.innerHTML = '<i class="fa-solid fa-play"></i> تشغيل التلقائي';
        isAutoPlaying = false;
    } else {
        autoPlayInterval = setInterval(autoTurnPage, 4000);
        btn.innerHTML = '<i class="fa-solid fa-pause"></i> إيقاف التلقائي';
        isAutoPlaying = true;
    }
}

// دعم السحب باليد (Swipe) على الهواتف
let touchStartX = 0;
let touchEndX = 0;
const bookContainer = document.getElementById('book-container');

bookContainer.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

bookContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 40) {
        nextPage();
    }
    if (touchEndX > touchStartX + 40) {
        prevPage();
    }
}

// تشغيل وإيقاف الموسيقى
const music = document.getElementById('bg-music');
const audioTrigger = document.getElementById('audio-icon');
const audioStatus = document.getElementById('audio-status');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        audioTrigger.classList.replace('fa-pause', 'fa-play');
        audioStatus.textContent = "متوقف";
    } else {
        music.play().catch(e => alert("تأكد أن ملف song.mp3 موجود داخل فولدر 'فروحه'!"));
        audioTrigger.classList.replace('fa-play', 'fa-pause');
        audioStatus.textContent = "يعمل 🎶";
    }
    isPlaying = !isPlaying;
}
