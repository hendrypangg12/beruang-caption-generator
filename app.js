const topicSelect = document.getElementById("topic");
const noteInput = document.getElementById("note");
const generateBtn = document.getElementById("generateBtn");
const results = document.getElementById("results");
const captionsEl = document.getElementById("captions");
const hashtagsEl = document.getElementById("hashtags");
const copyHashtagsBtn = document.getElementById("copyHashtagsBtn");
const toast = document.getElementById("toast");

const TOPIC_META = {
  "tips-hemat": {
    label: "Tips hemat",
    hooks: [
      "Uang kecil yang dikelola rutin bisa jadi kebiasaan besar.",
      "Hemat bukan pelit — hemat itu cerdas.",
      "Satu keputusan kecil hari ini bisa bikin rekening lebih tenang."
    ],
    bodies: [
      "Mulai dari catat pengeluaran harian. Kalau tahu ke mana uang pergi, lebih mudah atur prioritas.",
      "Coba aturan 24 jam sebelum belanja impulsif. Banyak yang ternyata nggak butuh.",
      "Pisahkan kebutuhan dan keinginan. Dompet lebih lega, kepala juga lebih tenang."
    ],
    ctas: [
      "Simpan post ini biar ingat lagi nanti 💰",
      "Share ke temen yang lagi belajar atur uang ✨",
      "Follow Beruang Catat Keuangan buat tips atur uang yang praktis tiap hari."
    ]
  },
  "investasi-pemula": {
    label: "Investasi pemula",
    hooks: [
      "Investasi nggak harus nunggu kaya dulu.",
      "Pemula juga bisa mulai — yang penting langkah pertamanya.",
      "Bunga waktu lebih berharga daripada menunggu sempurna."
    ],
    bodies: [
      "Pahami dulu tujuanmu: jangka pendek atau panjang? Baru pilih instrumen yang cocok.",
      "Mulai dari jumlah kecil yang konsisten. Konsistensi mengalahkan timing sempurna.",
      "Belajar risiko dulu sebelum mengejar return. Modal yang aman = tidur lebih nyenyak."
    ],
    ctas: [
      "Save dulu, pelajari pelan-pelan 📈",
      "Komentar: kamu mau mulai investasi dari mana?",
      "Ikuti Beruang Catat Keuangan biar belajar atur uang tanpa ribet."
    ]
  },
  "mindset-uang": {
    label: "Mindset uang",
    hooks: [
      "Uang mengikuti kebiasaan, bukan hanya niat.",
      "Financial freedom dimulai dari cara kita berpikir soal uang.",
      "Bukan soal berapa yang masuk — soal seberapa bijak yang keluar."
    ],
    bodies: [
      "Ganti rasa takut soal uang dengan rasa ingin tahu. Belajar = kendali.",
      "Rayakan progress kecil: nabung rutin, bayar utang, atau tolak FOMO belanja.",
      "Uang adalah alat. Kamu yang pegang kendali, bukan sebaliknya."
    ],
    ctas: [
      "Mana mindset yang paling resonan buatmu? Tulis di komentar 💬",
      "Simpan & baca ulang saat lagi goyah 💪",
      "Follow Beruang Catat Keuangan untuk reminder mindset yang sehat tiap minggu."
    ]
  },
  "promo-produk": {
    label: "Promo produk",
    hooks: [
      "Saatnya atur uang lebih rapi bareng Beruang Catat Keuangan.",
      "Ada kabar baik buat dompetmu hari ini ✨",
      "Promo terbatas — buat kamu yang siap naik level keuangan."
    ],
    bodies: [
      "Cek detail di highlight / link bio. Jangan sampai kelewatan kesempatan yang pas buatmu.",
      "Aplikasi catat keuangan yang praktis, jelas, dan friendly buat pemula.",
      "Gabung sekarang dan rasakan bedanya mengelola uang dengan lebih terarah."
    ],
    ctas: [
      "Swipe up / cek link bio sekarang 🔥",
      "DM \"INFO\" buat detail lebih lanjut.",
      "Tag temen yang perlu dengar ini!"
    ]
  },
  "edukasi-finansial": {
    label: "Edukasi finansial",
    hooks: [
      "Literasi keuangan = investasi jangka panjang untuk dirimu.",
      "Satu konsep hari ini, kebiasaan lebih baik besok.",
      "Finansial nggak harus ribet — kita bahas pelan-pelan."
    ],
    bodies: [
      "Pahami dulu arus kas: berapa masuk, berapa keluar, berapa yang bisa disisihkan.",
      "Dana darurat, utang produktif, dan tujuan jangka panjang — urutkan prioritasnya.",
      "Semakin jelas fondasinya, semakin tenang keputusan keuangannya."
    ],
    ctas: [
      "Save post edukasi ini buat dibaca lagi 📚",
      "Mau topik apa selanjutnya? Kasih saran di komentar.",
      "Follow Beruang Catat Keuangan biar terus dapat insight praktis."
    ]
  },
  "motivation-money": {
    label: "Motivasi financial freedom",
    hooks: [
      "Financial freedom bukan mimpi — itu proses yang bisa dilatih.",
      "Hari ini kamu tanam, nanti kamu tuai.",
      "Versi masa depanmu sedang menunggu keputusanmu sekarang."
    ],
    bodies: [
      "Ambil satu langkah kecil: budget minggu ini, atau transfer otomatis ke tabungan.",
      "Fokus ke sistem, bukan mood. Mood berubah — sistem tetap jalan.",
      "Setiap rupiah yang kamu arahkan dengan sadar adalah langkah menuju kebebasan."
    ],
    ctas: [
      "Kamu lagi di tahap mana? Cerita di komentar 🌱",
      "Double tap kalau lagi butuh semangat hari ini!",
      "Ikuti perjalanan keuangan bareng Beruang Catat Keuangan."
    ]
  }
};

const BASE_HASHTAGS = [
  "#BeruangCatatKeuangan",
  "#Beruang",
  "#KeuanganPribadi",
  "#LiterasiKeuangan",
  "#AturUang",
  "#FinancialFreedom",
  "#TipsKeuangan",
  "#CuanCerdas",
  "#DompetSehat",
  "#MoneyMindset",
  "#InvestasiPemula",
  "#NabungYuk",
  "#Edukeuangan",
  "#InstagramMarketing",
  "#KontenKeuangan"
];

const TOPIC_HASHTAGS = {
  "tips-hemat": ["#TipsHemat", "#HematCerdas", "#Budgeting"],
  "investasi-pemula": ["#Investasi", "#MulaiInvestasi", "#SahamPemula"],
  "mindset-uang": ["#MindsetUang", "#PolaPikirKaya", "#DisiplinKeuangan"],
  "promo-produk": ["#PromoBeruang", "#PenawaranTerbatas", "#CekBio"],
  "edukasi-finansial": ["#EdukasiFinansial", "#BelajarKeuangan", "#MelekFinansial"],
  "motivation-money": ["#MotivasiKeuangan", "#HidupCerdas", "#TujuanFinansial"]
};

function pick(arr, used = new Set()) {
  const available = arr.filter((_, i) => !used.has(i));
  const pool = available.length ? available : arr;
  const item = pool[Math.floor(Math.random() * pool.length)];
  const idx = arr.indexOf(item);
  used.add(idx);
  return item;
}

function buildCaption(topicKey, note, variantIndex) {
  const meta = TOPIC_META[topicKey];
  const usedH = new Set();
  const usedB = new Set();
  const usedC = new Set();

  for (let i = 0; i < variantIndex; i++) {
    pick(meta.hooks, usedH);
    pick(meta.bodies, usedB);
    pick(meta.ctas, usedC);
  }

  const hook = pick(meta.hooks, usedH);
  const body = pick(meta.bodies, usedB);
  const cta = pick(meta.ctas, usedC);
  const tones = ["Hangat", "Marketing", "Storytelling"];
  const noteLine = note
    ? `\n\n📌 ${note.trim()}`
    : "";

  const text =
    `${hook}\n\n` +
    `${body}${noteLine}\n\n` +
    `${cta}\n\n` +
    `— Beruang Catat Keuangan · catat & kelola uang lebih tenang 💚`;

  return { label: `Varian ${variantIndex + 1} · ${tones[variantIndex]}`, text };
}

function buildHashtags(topicKey) {
  const topicTags = TOPIC_HASHTAGS[topicKey] || [];
  const mixed = [...topicTags, ...BASE_HASHTAGS];
  const unique = [...new Set(mixed)];
  return unique.slice(0, 15).join(" ");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.add("hidden"), 1800);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Disalin ke clipboard ✓");
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast("Disalin ke clipboard ✓");
  }
}

function render() {
  const topic = topicSelect.value;
  const note = noteInput.value;
  const captions = [0, 1, 2].map((i) => buildCaption(topic, note, i));
  const hashtags = buildHashtags(topic);

  captionsEl.innerHTML = captions
    .map(
      (c, i) => `
      <article class="caption-card">
        <div class="caption-head">
          <span class="caption-label">${c.label}</span>
          <button type="button" class="btn-ghost copy-caption" data-index="${i}">Salin caption</button>
        </div>
        <p class="caption-text">${escapeHtml(c.text)}</p>
      </article>`
    )
    .join("");

  hashtagsEl.textContent = hashtags;
  results.classList.remove("hidden");

  captionsEl.querySelectorAll(".copy-caption").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.index);
      copyText(captions[idx].text);
    });
  });

  copyHashtagsBtn.onclick = () => copyText(hashtags);
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

generateBtn.addEventListener("click", render);
