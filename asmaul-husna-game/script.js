// DEBUG: Verify script load
console.log("Script starting...");

const asmaulHusnaData = [
    { number: 1, arabic: "الرَّحْمَنُ", latin: "Ar Rahman", meaning: "Yang Maha Pengasih", description: "Allah memberikan rahmat kepada seluruh makhluk tanpa pilih kasih, baik yang beriman maupun yang tidak." },
    { number: 2, arabic: "الرَّحِيمُ", latin: "Ar Rahim", meaning: "Yang Maha Penyayang", description: "Allah memberikan kasih sayang khusus yang abadi kepada hamba-Nya yang beriman di akhirat kelak." },
    { number: 3, arabic: "الْمَلِكُ", latin: "Al Malik", meaning: "Yang Maha Merajai", description: "Allah adalah Raja dari segala raja yang menguasai dan mengatur seluruh alam semesta." },
    { number: 4, arabic: "الْقُدُّوسُ", latin: "Al Quddus", meaning: "Yang Maha Suci", description: "Allah Maha Suci dari segala kekurangan, cacat, dan kesalahan yang ada pada makhluk." },
    { number: 5, arabic: "السَّلاَمُ", latin: "As Salam", meaning: "Yang Maha Memberi Kesejahteraan", description: "Allah adalah sumber kedamaian dan keselamatan bagi seluruh makhluk-Nya." },
    { number: 6, arabic: "الْمُؤْمِنُ", latin: "Al Mu'min", meaning: "Yang Maha Memberi Keamanan", description: "Allah memberikan rasa aman dan ketenangan hati kepada hamba-hamba-Nya yang beriman." },
    { number: 7, arabic: "الْمُهَيْمِنُ", latin: "Al Muhaimin", meaning: "Yang Maha Pemelihara", description: "Allah mengawasi, memelihara, dan menjaga seluruh makhluk dengan sempurna." },
    { number: 8, arabic: "الْعَزِيزُ", latin: "Al Aziz", meaning: "Yang Maha Perkasa", description: "Allah memiliki kekuatan mutlak yang tidak dapat dikalahkan oleh siapapun." },
    { number: 9, arabic: "الْجَبَّارُ", latin: "Al Jabbar", meaning: "Yang Memiliki Mutlak Kegagahan", description: "Allah berkehendak memaksakan segala perintah-Nya dan memperbaiki keadaan hamba-Nya." },
    { number: 10, arabic: "الْمُتَكَبِّرُ", latin: "Al Mutakabbir", meaning: "Yang Maha Megah", description: "Allah satu-satunya yang berhak atas kebesaran dan keagungan, makhluk tidak pantas sombong." },
    { number: 11, arabic: "الْخَالِقُ", latin: "Al Khaliq", meaning: "Yang Maha Pencipta", description: "Allah menciptakan segala sesuatu dari tiada menjadi ada sesuai kehendak-Nya." },
    { number: 12, arabic: "الْبَارِئُ", latin: "Al Baari'", meaning: "Yang Maha Melepaskan", description: "Allah mengadakan sesuatu dan menyempurnakan bentuk fisiknya." },
    { number: 13, arabic: "الْمُصَوِّرُ", latin: "Al Musawwir", meaning: "Yang Maha Membentuk Rupa", description: "Allah memberi rupa dan karakter yang unik kepada setiap makhluk ciptaan-Nya." },
    { number: 14, arabic: "الْغَفَّارُ", latin: "Al Ghaffar", meaning: "Yang Maha Pengampun", description: "Allah menutupi dosa-dosa hamba-Nya dan memberi ampunan berulang kali." },
    { number: 15, arabic: "الْقَهَّارُ", latin: "Al Qahhar", meaning: "Yang Maha Menaklukan", description: "Allah menundukkan segala sesuatu di bawah kekuasaan-Nya yang mutlak." },
    { number: 16, arabic: "الْوَهَّابُ", latin: "Al Wahhab", meaning: "Yang Maha Pemberi Karunia", description: "Allah memberi karunia tanpa henti dan tanpa mengharap balasan." },
    { number: 17, arabic: "الرَّزَّاقُ", latin: "Ar Razzaq", meaning: "Yang Maha Pemberi Rezeki", description: "Allah menjamin dan membagikan rezeki kepada seluruh makhluk hidup." },
    { number: 18, arabic: "الْفَتَّاحُ", latin: "Al Fattah", meaning: "Yang Maha Pembuka Rahmat", description: "Allah membuka pintu rahmat, rezeki, dan jalan keluar bagi hamba-Nya." },
    { number: 19, arabic: "الْعَلِيمُ", latin: "Al 'Alim", meaning: "Yang Maha Mengetahui", description: "Allah mengetahui segala sesuatu, baik yang tampak maupun yang tersembunyi." },
    { number: 20, arabic: "الْقَابِضُ", latin: "Al Qabidh", meaning: "Yang Maha Menyempitkan", description: "Allah berkuasa menahan atau menyempitkan rezeki bagi siapa yang Dia kehendaki." },
    { number: 21, arabic: "الْبَاسِطُ", latin: "Al Basit", meaning: "Yang Maha Melapangkan", description: "Allah meluaskan rezeki dan nikmat kepada hamba-hamba-Nya." },
    { number: 22, arabic: "الْخَافِضُ", latin: "Al Khafid", meaning: "Yang Maha Merendahkan", description: "Allah merendahkan derajat orang-orang yang sombong dan durhaka." },
    { number: 23, arabic: "الرَّافِعُ", latin: "Ar Rafi'", meaning: "Yang Maha Meninggikan", description: "Allah meninggikan derajat orang-orang yang beriman dan berilmu." },
    { number: 24, arabic: "الْمُعِزُّ", latin: "Al Mu'izz", meaning: "Yang Maha Memuliakan", description: "Allah memberikan kemuliaan kepada siapa saja yang Dia kehendaki." },
    { number: 25, arabic: "الْمُذِلُّ", latin: "Al Mudzil", meaning: "Yang Maha Menghinakan", description: "Allah menghinakan musuh-musuh-Nya dan orang yang mendurhakai-Nya." },
    { number: 26, arabic: "السَّمِيعُ", latin: "As Sami'", meaning: "Yang Maha Mendengar", description: "Allah mendengar segala ucapan dan doa, bahkan bisikan hati sekalipun." },
    { number: 27, arabic: "الْبَصِيرُ", latin: "Al Bashir", meaning: "Yang Maha Melihat", description: "Allah melihat segala perbuatan makhluk, tidak ada yang luput dari pandangan-Nya." },
    { number: 28, arabic: "الْحَكَمُ", latin: "Al Hakam", meaning: "Yang Maha Menetapkan", description: "Allah adalah hakim yang paling adil dalam menetapkan hukum dan keputusan." },
    { number: 29, arabic: "الْعَدْلُ", latin: "Al 'Adl", meaning: "Yang Maha Adil", description: "Allah Maha Adil, menempatkan segala sesuatu pada tempatnya tanpa kedzaliman." },
    { number: 30, arabic: "ال areاللَّطِيفُ", latin: "Al Latif", meaning: "Yang Maha Lembut", description: "Allah Maha Halus dalam perbuatan-Nya dan mengetahui hal-hal yang tersembunyi." },
    { number: 31, arabic: "الْخَبِيرُ", latin: "Al Khabir", meaning: "Yang Maha Mengenal", description: "Allah mengetahui hakikat segala sesuatu secara mendalam dan rinci." },
    { number: 32, arabic: "الْحَلِيمُ", latin: "Al Halim", meaning: "Yang Maha Penyantun", description: "Allah tidak cepat-cepat menyiksa hamba-Nya yang berbuat dosa, memberi kesempatan tobat." },
    { number: 33, arabic: "الْعَظِيمُ", latin: "Al 'Azhim", meaning: "Yang Maha Agung", description: "Allah memiliki keagungan yang tidak terjangkau oleh akal manusia." },
    { number: 34, arabic: "الْغَفُورُ", latin: "Al Ghafur", meaning: "Yang Maha Memberi Pengampunan", description: "Allah memberikan ampunan yang luas kepada hamba yang memohon ampun." },
    { number: 35, arabic: "الشَّكُورُ", latin: "As Syakur", meaning: "Yang Maha Pembalas Budi", description: "Allah menghargai amal sedikit dan membalasnya dengan pahala yang berlipat ganda." },
    { number: 36, arabic: "الْعَلِيُّ", latin: "Al 'Ali", meaning: "Yang Maha Tinggi", description: "Allah Maha Tinggi kedudukan dan kekuasaan-Nya di atas segala makhluk." },
    { number: 37, arabic: "الْكَبِيرُ", latin: "Al Kabir", meaning: "Yang Maha Besar", description: "Allah Maha Besar, segala sesuatu kecil di hadapan-Nya." },
    { number: 38, arabic: "الْحَفِيظُ", latin: "Al Hafizh", meaning: "Yang Maha Memelihara", description: "Allah menjaga alam semesta dan amal perbuatan hamba-Nya agar tidak hilang." },
    { number: 39, arabic: "الْمُقِيتُ", latin: "Al Muqit", meaning: "Yang Maha Pemberi Kecukupan", description: "Allah menjamin kebutuhan pokok dan memberi kekuatan bagi setiap makhluk." },
    { number: 40, arabic: "الْحَسِيبُ", latin: "Al Hasib", meaning: "Yang Maha Membuat Perhitungan", description: "Allah menghitung segala amal perbuatan manusia dengan teliti." },
    { number: 41, arabic: "الْجَلِيلُ", latin: "Al Jalil", meaning: "Yang Maha Luhur", description: "Allah memiliki sifat-sifat keluhuran dan kesempurnaan yang mutlak." },
    { number: 42, arabic: "الْكَرِيمُ", latin: "Al Karim", meaning: "Yang Maha Pemurah", description: "Allah memberi nikmat tanpa diminta dan memaafkan kesalahan hamba-Nya." },
    { number: 43, arabic: "الرَّقِيبُ", latin: "Ar Raqib", meaning: "Yang Maha Mengawasi", description: "Allah senantiasa mengawasi setiap gerak-gerik dan niat hamba-Nya." },
    { number: 44, arabic: "الْمُجِيبُ", latin: "Al Mujib", meaning: "Yang Maha Mengabulkan", description: "Allah mengabulkan doa hamba-hamba-Nya yang berdoa dengan sungguh-sungguh." },
    { number: 45, arabic: "الْوَاسِعُ", latin: "Al Wasi'", meaning: "Yang Maha Luas", description: "Allah memiliki karunia dan ilmu yang sangat luas tak terbatas." },
    { number: 46, arabic: "الْحَكِيمُ", latin: "Al Hakim", meaning: "Yang Maha Bijaksana", description: "Allah memiliki hikmah sempurna dalam setiap syariat dan taqdir-Nya." },
    { number: 47, arabic: "الْوَدُودُ", latin: "Al Wadud", meaning: "Yang Maha Mengasihi", description: "Allah mencintai hamba-hamba-Nya yang taat dan dicintai oleh mereka." },
    { number: 48, arabic: "الْمَجِيدُ", latin: "Al Majid", meaning: "Yang Maha Mulia", description: "Allah memiliki kemuliaan, kehormatan, dan kekuasaan yang sempurna." },
    { number: 49, arabic: "الْبَاعِثُ", latin: "Al Ba'its", meaning: "Yang Maha Membangkitkan", description: "Allah akan membangkitkan manusia dari kubur pada hari kiamat." },
    { number: 50, arabic: "الشَّهِيدُ", latin: "As Syahid", meaning: "Yang Maha Menyaksikan", description: "Allah menyaksikan segala peristiwa dan tidak ada yang luput dari-Nya." },
    { number: 51, arabic: "الْحَقُّ", latin: "Al Haqq", meaning: "Yang Maha Benar", description: "Allah adalah Kebenaran mutlak, dan janji-Nya pasti benar." },
    { number: 52, arabic: "الْوَكِيلُ", latin: "Al Wakil", meaning: "Yang Maha Memelihara", description: "Allah adalah tempat bersandar segala urusan hamba-Nya." },
    { number: 53, arabic: "الْقَوِيُّ", latin: "Al Qawiyy", meaning: "Yang Maha Kuat", description: "Allah memiliki kekuatan sempurna yang tidak pernah melemah." },
    { number: 54, arabic: "الْمَتِينُ", latin: "Al Matin", meaning: "Yang Maha Kokoh", description: "Allah memiliki kekukuhan yang tidak tergoyahkan oleh apapun." },
    { number: 55, arabic: "الْوَلِيُّ", latin: "Al Waliyy", meaning: "Yang Maha Melindungi", description: "Allah adalah pelindung dan penolong bagi orang-orang yang beriman." },
    { number: 56, arabic: "الْحَمِيدُ", latin: "Al Hamid", meaning: "Yang Maha Terpuji", description: "Allah berhak atas segala pujian karena kesempurnaan sifat-Nya." },
    { number: 57, arabic: "الْمُحْصِي", latin: "Al Muhshi", meaning: "Yang Maha Menghitung", description: "Allah mengetahui jumlah segala sesuatu satu per satu." },
    { number: 58, arabic: "الْمُبْدِئُ", latin: "Al Mubdi'", meaning: "Yang Maha Memulai", description: "Allah yang memulai penciptaan makhluk dari ketiadaan." },
    { number: 59, arabic: "الْمُعِيدُ", latin: "Al Mu'id", meaning: "Yang Maha Mengembalikan Kehidupan", description: "Allah yang akan mengembalikan makhluk setelah kematian mereka." },
    { number: 60, arabic: "الْمُحْيِي", latin: "Al Muhyi", meaning: "Yang Maha Menghidupkan", description: "Allah yang memberi kehidupan kepada makhluk yang mati." },
    { number: 61, arabic: "الْمُمِيتُ", latin: "Al Mumit", meaning: "Yang Maha Mematikan", description: "Allah yang mencabut nyawa setiap makhluk yang bernyawa." },
    { number: 62, arabic: "الْحَيُّ", latin: "Al Hayyu", meaning: "Yang Maha Hidup", description: "Allah Maha Hidup Kekal, tidak pernah mati atau mengantuk." },
    { number: 63, arabic: "الْقَيُّومُ", latin: "Al Qayyum", meaning: "Yang Maha Mandiri", description: "Allah berdiri sendiri dan terus menerus mengurus makhluk-Nya." },
    { number: 64, arabic: "الْوَاجِدُ", latin: "Al Wajid", meaning: "Yang Maha Penemu", description: "Allah mendapatkan apa saja yang Dia kehendaki, tidak ada yang hilang." },
    { number: 65, arabic: "الْمَاجِدُ", latin: "Al Majid", meaning: "Yang Maha Mulia", description: "Allah memiliki kemuliaan yang melimpah dan luas." },
    { number: 66, arabic: "الْوَاحِدُ", latin: "Al Wahid", meaning: "Yang Maha Tunggal", description: "Allah Maha Esa dalam Dzat-Nya, tidak ada sekutu bagi-Nya." },
    { number: 67, arabic: "الْأَحَدُ", latin: "Al Ahad", meaning: "Yang Maha Esa", description: "Allah Maha Esa, satu-satunya tempat bergantung." },
    { number: 68, arabic: "الصَّمَدُ", latin: "As Shamad", meaning: "Yang Maha Dibutuhkan", description: "Allah adalah tujuan segala hajat dan kebutuhan makhluk." },
    { number: 69, arabic: "الْقَادِرُ", latin: "Al Qadir", meaning: "Yang Maha Menentukan", description: "Allah berkuasa melakukan apa saja sesuai kehendak-Nya." },
    { number: 70, arabic: "الْمُقْتَدِرُ", latin: "Al Muqtadir", meaning: "Yang Maha Berkuasa", description: "Allah memiliki kekuasaan penuh untuk menentukan segalanya." },
    { number: 71, arabic: "الْمُقَدِّمُ", latin: "Al Muqaddim", meaning: "Yang Maha Mendahulukan", description: "Allah mendahulukan siapa yang Dia kehendaki untuk diangkat derajatnya." },
    { number: 72, arabic: "الْمُؤَخِّرُ", latin: "Al Mu'akkhir", meaning: "Yang Maha Mengakhirkan", description: "Allah mengakhirkan atau menunda sesuatu sesuai hikmah-Nya." },
    { number: 73, arabic: "الْأَوَّلُ", latin: "Al Awwal", meaning: "Yang Maha Awal", description: "Allah Maha Awal tanpa permulaan." },
    { number: 74, arabic: "الْآخِرُ", latin: "Al Akhir", meaning: "Yang Maha Akhir", description: "Allah Maha Akhir tanpa ujung atau kesudahan." },
    { number: 75, arabic: "الظَّاهِرُ", latin: "Az Zhahir", meaning: "Yang Maha Nyata", description: "Keberadaan Allah nyata melalui tanda-tanda kekuasaan-Nya." },
    { number: 76, arabic: "الْبَاطِنُ", latin: "Al Bathin", meaning: "Yang Maha Ghaib", description: "Allah tidak dapat dilihat oleh mata di dunia ini." },
    { number: 77, arabic: "الْوَالِي", latin: "Al Wali", meaning: "Yang Maha Memerintah", description: "Allah menguasai dan mengatur segala urusan alam semesta." },
    { number: 78, arabic: "الْمُتَعَالِي", latin: "Al Muta'ali", meaning: "Yang Maha Tinggi", description: "Allah Maha Tinggi di atas segala sifat makhluk-Nya." },
    { number: 79, arabic: "الْبَرُّ", latin: "Al Barr", meaning: "Yang Maha Penderma", description: "Allah melimpahkan kebaikan dan kebajikan kepada hamba-Nya." },
    { number: 80, arabic: "التَّوَّابُ", latin: "At Tawwab", meaning: "Yang Maha Penerima Taubat", description: "Allah menerima taubat hamba yang kembali kepada-Nya dengan tulus." },
    { number: 81, arabic: "الْمُنْتَقِمُ", latin: "Al Muntaqim", meaning: "Yang Maha Pemberi Balasan", description: "Allah menghukum orang-orang yang bersalah secara adil." },
    { number: 82, arabic: "الْعَفُوُّ", latin: "Al Afuww", meaning: "Yang Maha Pemaaf", description: "Allah menghapuskan dosa dan memaafkan kesalahan hamba-Nya." },
    { number: 83, arabic: "الرَّؤُوفُ", latin: "Ar Ra'uf", meaning: "Yang Maha Pengasuh", description: "Allah sangat belas kasih dan santun kepada hamba-hamba-Nya." },
    { number: 84, arabic: "مَالِكُ الْمُلْكِ", latin: "Malikul Mulk", meaning: "Yang Maha Penguasa Kerajaan", description: "Allah pemilik mutlak segala kerajaan di dunia dan akhirat." },
    { number: 85, arabic: "ذُو الْجَلَالِ وَالْإِكْرَامِ", latin: "Dzul Jalali Wal Ikram", meaning: "Yang Maha Pemilik Kebesaran dan Kemuliaan", description: "Allah pemilik keagungan dan kemuliaan yang sempurna." },
    { number: 86, arabic: "الْمُقْسِطُ", latin: "Al Muqsit", meaning: "Yang Maha Pemberi Keadilan", description: "Allah bertindak adil dalam hukum dan keputusan-Nya." },
    { number: 87, arabic: "الْجَامِعُ", latin: "Al Jami'", meaning: "Yang Maha Mengumpulkan", description: "Allah mengumpulkan manusia pada hari kiamat untuk dihisab." },
    { number: 88, arabic: "الْغَنِيُّ", latin: "Al Ghaniyy", meaning: "Yang Maha Kaya", description: "Allah Maha Kaya, tidak membutuhkan apapun dari makhluk-Nya." },
    { number: 89, arabic: "الْمُغْنِي", latin: "Al Mughni", meaning: "Yang Maha Pemberi Kekayaan", description: "Allah memberikan kekayaan dan kecukupan kepada siapa yang Dia kehendaki." },
    { number: 90, arabic: "الْمَانِعُ", latin: "Al Mani'", meaning: "Yang Maha Mencegah", description: "Allah mencegah hal-hal buruk atau bencana menimpa hamba-Nya." },
    { number: 91, arabic: "الضَّارُّ", latin: "Ad Dhavr", meaning: "Yang Maha Penimpa Kemudharatan", description: "Allah berkuasa menimpakan bahaya kepada siapa saja yang Dia kehendaki." },
    { number: 92, arabic: "النَّافِعُ", latin: "An Nafi'", meaning: "Yang Maha Memberi Manfaat", description: "Allah satu-satunya sumber manfaat dan kebaikan." },
    { number: 93, arabic: "النُّورُ", latin: "An Nur", meaning: "Yang Maha Bercahaya", description: "Allah adalah cahaya langit dan bumi, pemberi petunjuk." },
    { number: 94, arabic: "الْهَادِي", latin: "Al Hadi", meaning: "Yang Maha Pemberi Petunjuk", description: "Allah memberi hidayah ke jalan yang lurus." },
    { number: 95, arabic: "الْبَدِيعُ", latin: "Al Badi'", meaning: "Yang Maha Pencipta Tiada Bandingannya", description: "Allah menciptakan alam semesta dengan indah tanpa contoh sebelumnya." },
    { number: 96, arabic: "الْبَاقِي", latin: "Al Baqi", meaning: "Yang Maha Kekal", description: "Allah kekal abadi selamanya, tidak akan pernah binasa." },
    { number: 97, arabic: "الْوَارِثُ", latin: "Al Warits", meaning: "Yang Maha Pewaris", description: "Allah yang mewarisi alam semesta setelah semua makhluk binasa." },
    { number: 98, arabic: "الرَّشِيدُ", latin: "Ar Rasyid", meaning: "Yang Maha Pandai", description: "Allah Maha Cerdas dalam mengatur segala urusan makhluk-Nya." },
    { number: 99, arabic: "الصَّبُورُ", latin: "As Shabur", meaning: "Yang Maha Sabar", description: "Allah Maha Sabar, tidak tergesa-gesa menghukum orang yang berdosa." }
];

// End of data

// DOM Elements
const startScreen = document.getElementById('start-screen');
const menuScreen = document.getElementById('menu-screen');
const knowledgeScreen = document.getElementById('knowledge-screen');
const pronunciationScreen = document.getElementById('pronunciation-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

// Navigation Buttons
const startBtn = document.getElementById('start-btn');
const backToStartBtn = document.getElementById('back-to-start');
const backFromKnowledgeBtn = document.getElementById('back-from-knowledge');
const backFromPronunciationBtn = document.getElementById('back-from-pronunciation');

// Menu Buttons
const menuKnowledgeBtn = document.getElementById('menu-knowledge');
const menuPronunciationBtn = document.getElementById('menu-pronunciation');
const menuQuizBtn = document.getElementById('menu-quiz');

// Quiz Elements
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn'); // Add this line
const arabicText = document.getElementById('arabic-text');
const latinText = document.getElementById('latin-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionNumEl = document.getElementById('current-question-num');
const totalQuestionNumEl = document.getElementById('total-question-num');
const scoreDisplay = document.getElementById('score-display');
const timerDisplay = document.getElementById('timer-display');
const timerBadge = document.getElementById('timer-badge');
const progressBar = document.getElementById('progress-bar');
const finalScoreEl = document.getElementById('final-score');
const feedbackTextEl = document.getElementById('feedback-text');

// List Containers
const knowledgeList = document.getElementById('knowledge-list');
const pronunciationList = document.getElementById('pronunciation-list');

// Game State
const TOTAL_QUESTIONS = 10;
const QUESTION_TIMER = 10;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer = QUESTION_TIMER;
let timerInterval;

// --- Game State Management ---
let activeGameMode = null; // 'quiz' or 'balloon'
const MAX_BALLOON_QUESTIONS = 10;
let balloonQuestionCount = 0;


// --- Navigation ---

function navigateTo(fromScreen, toScreen) {
    fromScreen.classList.remove('active');
    setTimeout(() => {
        fromScreen.classList.add('hidden');
        toScreen.classList.remove('hidden');
        setTimeout(() => {
            toScreen.classList.add('active');
        }, 50);
    }, 400); // Wait for transition
}

startBtn.addEventListener('click', () => navigateTo(startScreen, menuScreen));
backToStartBtn.addEventListener('click', () => navigateTo(menuScreen, startScreen));

menuKnowledgeBtn.addEventListener('click', () => {
    renderKnowledgeList();
    navigateTo(menuScreen, knowledgeScreen);
});

menuPronunciationBtn.addEventListener('click', () => {
    renderPronunciationList();
    navigateTo(menuScreen, pronunciationScreen);
});

menuQuizBtn.addEventListener('click', () => {
    startQuiz();
});

backFromKnowledgeBtn.addEventListener('click', () => navigateTo(knowledgeScreen, menuScreen));
backFromPronunciationBtn.addEventListener('click', () => navigateTo(pronunciationScreen, menuScreen));

restartBtn.addEventListener('click', () => {
    resultScreen.classList.remove('active');
    setTimeout(() => {
        resultScreen.classList.add('hidden');

        // Smart Restart based on active mode
        if (activeGameMode === 'balloon') {
            startBalloonGame();
        } else {
            // Default to Quiz if undefined or 'quiz'
            startQuiz();
        }
    }, 400);
});

homeBtn.addEventListener('click', () => {
    resultScreen.classList.remove('active');
    setTimeout(() => {
        resultScreen.classList.add('hidden');
        navigateTo(resultScreen, menuScreen);
    }, 400);
});

// ===== DUMMY FUNCTIONS (AGAR MENU TIDAK ERROR) =====
function renderKnowledgeList() {
    if (!knowledgeList) return;
    knowledgeList.innerHTML = "";

    asmaulHusnaData.forEach(item => {
        const card = document.createElement("div");
        card.className = "list-item-card";
        card.innerHTML = `
            <div class="list-number">${item.number}</div>
            <div class="list-arabic">${item.arabic}</div>
            <div class="list-latin">${item.latin}</div>
            <div class="list-meaning">${item.meaning}</div>
            <div class="list-description">${item.description}</div>
        `;
        knowledgeList.appendChild(card);
    });
}

function renderPronunciationList() {
    if (!pronunciationList) return;
    pronunciationList.innerHTML = "";

    asmaulHusnaData.forEach(item => {
        const card = document.createElement("div");
        card.className = "list-item-card";

        // Construct HTML content (without the button first)
        const contentDiv = document.createElement("div");
        contentDiv.innerHTML = `
            <div class="list-number">${item.number}</div>
            <div class="list-arabic">${item.arabic}</div>
            <div class="list-latin">${item.latin}</div>
        `;

        // Create button element
        const btn = document.createElement("button");
        btn.className = "audio-btn";
        btn.innerHTML = "🔊";
        btn.onclick = () => playPronunciation(item.arabic, item.latin);

        card.appendChild(contentDiv);
        card.appendChild(btn);
        pronunciationList.appendChild(card);
    });
}

// Helper: TTS Logic with Fallback
function playPronunciation(arabicText, latinText) {
    if (!window.speechSynthesis) {
        alert("Maaf, browser ini tidak mendukung fitur suara.");
        return;
    }

    // Cancel current speech
    window.speechSynthesis.cancel();

    // Check for Arabic voice
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find(v => v.lang.includes('ar'));

    if (arabicVoice) {
        // Speak Arabic if voice exists
        const utterance = new SpeechSynthesisUtterance(arabicText);
        utterance.voice = arabicVoice;
        utterance.lang = 'ar-SA';
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    } else {
        // Fallback: Speak Latin text with Indonesian/Default voice
        // This ensures the user hears SOMETHING instead of silence
        const utterance = new SpeechSynthesisUtterance(latinText);
        utterance.lang = 'id-ID';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);

        console.warn("Arabic voice not found, using fallback.");
    }
}

// ===== QUIZ SUPPORT FUNCTIONS =====
function getRandomQuestions(total) {
    return [...asmaulHusnaData].sort(() => 0.5 - Math.random()).slice(0, total);
}

function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }

    const q = currentQuestions[currentQuestionIndex];

    // Update UI
    arabicText.innerText = q.arabic;
    latinText.innerText = q.latin;
    currentQuestionNumEl.innerText = currentQuestionIndex + 1;

    // Reset timer
    timer = QUESTION_TIMER;
    timerDisplay.innerText = timer;
    startTimer();

    // Progress bar
    const progressPercent = ((currentQuestionIndex) / TOTAL_QUESTIONS) * 100;
    progressBar.style.width = progressPercent + "%";

    // Options
    optionsContainer.innerHTML = "";

    let options = [...asmaulHusnaData]
        .filter(item => item.meaning !== q.meaning)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    options.push(q);
    options.sort(() => 0.5 - Math.random());

    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt.meaning;

        btn.addEventListener("click", () => {
            handleAnswer(opt.meaning === q.meaning, btn);
        });

        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(isCorrect, btnElement) {
    clearInterval(timerInterval);

    // Disable all buttons immediately
    const allButtons = document.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);

    const question = currentQuestions[currentQuestionIndex];
    const explanationOverlay = document.getElementById('explanation-overlay');
    const expIcon = document.getElementById('explanation-icon');
    const expTitle = document.getElementById('explanation-title');
    const expArabic = document.getElementById('exp-arabic');
    const expLatin = document.getElementById('exp-latin');
    const expMeaning = document.getElementById('exp-meaning');
    const expDesc = document.getElementById('exp-desc');
    const nextBtn = document.getElementById('next-question-btn');

    // Visual Feedback
    if (isCorrect) {
        btnElement.classList.add('correct');
        score += 10;
        expIcon.innerText = "✅";
        expTitle.innerText = "Jawaban Benar!";
        expTitle.style.color = "var(--grass-green)";
    } else {
        btnElement.classList.add('wrong');

        // Find and highlight the correct button
        allButtons.forEach(btn => {
            if (btn.innerText === question.meaning) {
                btn.classList.add('correct');
            }
        });

        expIcon.innerText = "❌";
        expTitle.innerText = "Jawaban Salah";
        expTitle.style.color = "var(--candy-red)";
    }
    scoreDisplay.innerText = score;

    // Populate Modal
    expArabic.innerText = question.arabic;
    expLatin.innerText = question.latin;
    expMeaning.innerText = question.meaning;
    expDesc.innerText = question.description;

    // Show Modal with slight delay
    setTimeout(() => {
        explanationOverlay.classList.remove('hidden');
    }, 800);

    // Handle Next Button
    nextBtn.onclick = () => {
        explanationOverlay.classList.add('hidden');
        proceedToNextQuestion();
    };
}

function proceedToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < TOTAL_QUESTIONS) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Removed old showQuizFeedback to avoid conflict or keep empty if referenced elsewhere
function showQuizFeedback(text) {
    // Deprecated in favor of modal
}

function updateTimer() {
    timer--;
    timerDisplay.innerText = timer;

    if (timer <= 0) {
        clearInterval(timerInterval);
        checkAnswer("", currentQuestions[currentQuestionIndex].meaning);
    }
}

function endQuiz() {
    quizScreen.classList.remove("active");
    setTimeout(() => {
        quizScreen.classList.add("hidden");
        resultScreen.classList.remove("hidden");
        resultScreen.classList.add("active");
    }, 400);

    finalScoreEl.innerText = score;
}


function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timer--;
        timerDisplay.innerText = timer;

        if (timer <= 0) {
            clearInterval(timerInterval);
            currentQuestionIndex++;
            loadQuestion();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);

    quizScreen.classList.remove('active');
    setTimeout(() => {
        quizScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        setTimeout(() => resultScreen.classList.add('active'), 50);
    }, 400);

    finalScoreEl.innerText = score;

    if (score >= 80) {
        feedbackTextEl.innerText = "MasyaAllah! Pemahamanmu Sangat Baik 🌟";
    } else if (score >= 50) {
        feedbackTextEl.innerText = "Bagus! Terus Tingkatkan Ya 😊";
    } else {
        feedbackTextEl.innerText = "Ayo Coba Lagi, Pasti Bisa 💪";
    }
}



// --- Features Logic ---
// ... (omitting unchanged Knowledge/Pronunciation functions) ...

// --- Quiz Logic ---

function startQuiz() {
    activeGameMode = 'quiz'; // Set Mode
    score = 0;
    currentQuestionIndex = 0;
    scoreDisplay.innerText = '0';

    currentQuestions = getRandomQuestions(TOTAL_QUESTIONS);
    totalQuestionNumEl.innerText = currentQuestions.length;

    navigateTo(menuScreen, quizScreen);

    // Ensure timer is reset properly
    clearInterval(timerInterval);
    loadQuestion();
}

// ... (omitting functions logic until balloon game) ...

// --- Balloon Game Logic ---
const balloonScreen = document.getElementById('balloon-screen');
const menuBalloonBtn = document.getElementById('menu-balloon');
const backFromBalloonBtn = document.getElementById('back-from-balloon');
const balloonContainer = document.getElementById('balloon-container');
const balloonScoreEl = document.getElementById('balloon-score');
const balloonTargetDisplay = document.getElementById('balloon-target-display');
const balloonFeedbackOverlay = document.getElementById('balloon-feedback-overlay');
const balloonFeedbackIcon = document.getElementById('balloon-feedback-icon');
const balloonFeedbackText = document.getElementById('balloon-feedback-text');

let isBalloonGameActive = false;
let balloonInterval;
let balloonScore = 0;
let targetAsmaulHusna = null;
let activeBalloons = [];

// Make the target display clickable to repeat sound
balloonTargetDisplay.style.cursor = "pointer";
balloonTargetDisplay.title = "Klik untuk dengarkan lagi";
balloonTargetDisplay.addEventListener('click', () => {
    playBalloonTargetSound();
    // Visual feedback
    balloonTargetDisplay.style.transform = "scale(0.95)";
    setTimeout(() => balloonTargetDisplay.style.transform = "scale(1)", 100);
});

menuBalloonBtn.addEventListener('click', () => {
    navigateTo(menuScreen, balloonScreen);
    // Delay start slightly to ensure container is visible/layout computed
    setTimeout(() => {
        startBalloonGame();
    }, 450);
});

backFromBalloonBtn.addEventListener('click', () => {
    stopBalloonGame();
    navigateTo(balloonScreen, menuScreen);
});

function startBalloonGame() {
    isBalloonGameActive = true;
    activeGameMode = 'balloon'; // Set Mode
    balloonScore = 0;
    balloonQuestionCount = 0; // Reset count

    balloonScoreEl.innerText = balloonScore;
    balloonContainer.innerHTML = '';
    activeBalloons = [];

    // Pick first target immediately
    setNextBalloonTarget();

    // Start Spawning - slightly faster for more fun
    balloonInterval = setInterval(spawnBalloon, 1500);
}

function stopBalloonGame() {
    isBalloonGameActive = false;
    clearInterval(balloonInterval);
    balloonContainer.innerHTML = '';
    window.speechSynthesis.cancel();
}

// --- Balloon Game Core Functions ---
function setNextBalloonTarget() {
    // Pick random target
    const randomIndex = Math.floor(Math.random() * asmaulHusnaData.length);
    targetAsmaulHusna = asmaulHusnaData[randomIndex];

    // Update display
    // Update display with icon
    balloonTargetDisplay.innerHTML = `🔊 Cari: <span style="color:var(--ocean-blue)">${targetAsmaulHusna.latin}</span>`;

    // Play sound hint
    playBalloonTargetSound();
}

function playBalloonTargetSound() {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance("Cari " + targetAsmaulHusna.latin);
        utterance.lang = 'id-ID';
        window.speechSynthesis.speak(utterance);
    }
}

function spawnBalloon() {
    if (!isBalloonGameActive) return;

    const balloon = document.createElement("div");
    balloon.className = "balloon";

    // Random Content
    let data;
    // 40% chance to be the target
    if (Math.random() < 0.4 && targetAsmaulHusna) {
        data = targetAsmaulHusna;
    } else {
        data = asmaulHusnaData[Math.floor(Math.random() * asmaulHusnaData.length)];
    }

    // Check if duplicate in active (optional optimization)

    balloon.dataset.number = data.number;
    balloon.innerHTML = `
        <div class="balloon-text">${data.arabic}</div>
        <div class="balloon-latin">${data.latin}</div>
    `;

    // Random Position
    const randomLeft = Math.floor(Math.random() * (balloonContainer.offsetWidth - 100));
    balloon.style.left = randomLeft + "px";

    // Random Color
    const colors = ['#FF6B6B', '#4D96FF', '#6BCB77', '#FFD166', '#9D53C3', '#FF9F43'];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];


    // Random Speed (4s to 7s)
    const randomDuration = 4 + Math.random() * 3;
    balloon.style.animationDuration = randomDuration + "s";

    // Click Event
    balloon.addEventListener('mousedown', () => checkBalloonAnswer(balloon, data));
    balloon.addEventListener('touchstart', (e) => {
        e.preventDefault(); // prevent mouse emulation
        checkBalloonAnswer(balloon, data);
    });

    // Remove when animation ends
    balloon.addEventListener('animationend', () => {
        balloon.remove();
    });

    balloonContainer.appendChild(balloon);
    activeBalloons.push(balloon);
}

// --- Effects ---
function speakPraise(isCorrect) {
    if (!window.speechSynthesis) return;
    const correctPraises = ["Hebat!", "Pintar!", "MasyaAllah!", "Bagus!", "Keren!"];
    const wrongFeedbacks = ["Ups!", "Coba lagi", "Salah", "Hampir", "Ayo fokus"];

    const text = isCorrect
        ? correctPraises[Math.floor(Math.random() * correctPraises.length)]
        : wrongFeedbacks[Math.floor(Math.random() * wrongFeedbacks.length)];

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID';
    utterance.rate = 1.2;
    window.speechSynthesis.speak(utterance);
}

function shakeScreenEffect(element) {
    element.classList.add('shake-effect');
    setTimeout(() => {
        element.classList.remove('shake-effect');
    }, 500);
}

function spawnConfetti(x, y, amount = 20) {
    for (let i = 0; i < amount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        // Random color
        const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Initial pos
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';

        // Random velocity
        const vx = (Math.random() - 0.5) * 10;
        const vy = (Math.random() - 0.5) * 10;

        balloonContainer.appendChild(confetti);

        // Animate
        let posX = x;
        let posY = y;
        let opacity = 1;

        const animate = () => {
            posX += vx;
            posY += vy;
            opacity -= 0.02;

            confetti.style.left = posX + 'px';
            confetti.style.top = posY + 'px';
            confetti.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };
        requestAnimationFrame(animate);
    }
}


// 2. Balloon Logic Integration
function checkBalloonAnswer(balloonEl, balloonData) {
    if (balloonEl.classList.contains('exploded')) return;

    // Get click coordinates for particles
    const rect = balloonEl.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    if (balloonData.number === targetAsmaulHusna.number) {
        // Correct!
        balloonScore += 10;
        balloonQuestionCount++; // Increment progress

        balloonScoreEl.innerText = balloonScore;

        // Feedback
        speakPraise(true);
        spawnConfetti(centerX, centerY, 30); // Burst at balloon location

        balloonTargetDisplay.innerHTML = `✅ Benar! <span style="font-size:0.8rem">(${targetAsmaulHusna.latin})</span>`;
        balloonTargetDisplay.style.color = "green";

        // Pop effect
        balloonEl.style.backgroundColor = 'transparent';
        balloonEl.classList.add('exploded');

        // Check Limit
        if (balloonQuestionCount >= MAX_BALLOON_QUESTIONS) {
            setTimeout(endBalloonGame, 1000);
        } else {
            // Next target
            setTimeout(setNextBalloonTarget, 1500);
        }

    } else {
        // Wrong!
        speakPraise(false);
        shakeScreenEffect(document.body);

        balloonEl.classList.add('exploded');
        balloonEl.innerHTML = '<span style="font-size: 3rem">💥</span>'; // Larger explosion
        showFeedback("Salah!", "💥");

        // Penalty
        if (balloonScore > 0) balloonScore -= 5;
        balloonScoreEl.innerText = balloonScore;
    }
}

function endBalloonGame() {
    stopBalloonGame();

    // Reuse Result Screen
    balloonScreen.classList.remove('active');
    setTimeout(() => {
        balloonScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        setTimeout(() => resultScreen.classList.add('active'), 50);
    }, 500);

    finalScoreEl.innerText = balloonScore;

    // Dynamic Feedback for Balloon Game
    if (balloonScore === 100) {
        feedbackTextEl.innerText = "Luar Biasa! Kamu Penakluk Balon Sejati! 🎈👑";
    } else if (balloonScore >= 80) {
        feedbackTextEl.innerText = "Hebat! Kecepatanmu Menakjubkan! 🚀";
    } else if (balloonScore >= 50) {
        feedbackTextEl.innerText = "Bagus! Latih Terus Fokusmu! 💪";
    } else {
        feedbackTextEl.innerText = "Jangan Menyerah! Coba Lagi Ya! 😊";
    }
}

function showFeedback(text, icon) {
    balloonFeedbackText.innerText = text;
    balloonFeedbackIcon.innerText = icon;
    balloonFeedbackOverlay.classList.remove('hidden');

    // Hide overlay faster
    setTimeout(() => {
        balloonFeedbackOverlay.classList.add('hidden');
    }, 600);
}

// --- Background Music Logic ---
const bgMusic = document.getElementById('bg-music');
const musicToggleBtn = document.getElementById('music-toggle');
let isMusicPlaying = false;

// Attempt to autoplay on first interaction (browser policy)
function tryPlayMusic() {
    if (!isMusicPlaying && bgMusic) {
        bgMusic.volume = 0.3; // Low volume for background
        bgMusic.play().then(() => {
            isMusicPlaying = true;
            musicToggleBtn.innerHTML = '🎵';
        }).catch(err => {
            console.log("Autoplay prevented:", err);
            isMusicPlaying = false;
            musicToggleBtn.innerHTML = '🔇';
        });
    }
}

// Attach start triggers
document.body.addEventListener('click', tryPlayMusic, { once: true });
startBtn.addEventListener('click', tryPlayMusic);

// Toggle Button Logic
musicToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent body click trigger
    if (isMusicPlaying) {
        bgMusic.pause();
        isMusicPlaying = false;
        musicToggleBtn.innerHTML = '🔇';
    } else {
        bgMusic.volume = 0.3;
        bgMusic.play();
        isMusicPlaying = true;
        musicToggleBtn.innerHTML = '🎵';
    }
});

