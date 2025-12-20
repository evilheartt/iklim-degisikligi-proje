document.addEventListener("DOMContentLoaded", () => {

  // 👤 KULLANICI ADI
  let kullanici = localStorage.getItem("kullanici");
  if (!kullanici) {
    kullanici = prompt("🌱 İsmini gir:");
    localStorage.setItem("kullanici", kullanici);
  }

  const hosgeldin = document.querySelector("header p");
  if (hosgeldin) {
    hosgeldin.textContent =
      `Hoş geldin ${kullanici}! Dünyamız için harekete geçme zamanı 🌍`;
  }

  // 🌙 KARANLIK MOD (KALICI)
  if (localStorage.getItem("tema") === "dark") {
    document.body.classList.add("dark");
  }

  window.karanlikMod = function () {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "tema",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  };

  // 🔢 ZİYARETÇİ SAYAÇ
  let sayi = Number(localStorage.getItem("sayac")) || 0;
  sayi++;
  localStorage.setItem("sayac", sayi);

  const sayacEl = document.getElementById("sayac");
  if (sayacEl) sayacEl.textContent = sayi;

  // ✅ MESAJ
  window.mesajGoster = function () {
    const mesaj = document.getElementById("mesaj");
    mesaj.textContent = "🌍 Tebrikler! Küçük adımlar büyük değişimler yaratır.";
    mesaj.classList.remove("hidden");
  };

  // 💡 GÜNLÜK İPUCU
  const ipuclari = [
    "Kısa mesafelerde yürü 🚶‍♂️",
    "Işıkları kapat 💡",
    "Bez çanta kullan 🛍️",
    "Suyu boşa harcama 🚰",
    "Fişleri çek 🔌"
  ];

  const ipucu = document.getElementById("ipucu");
  if (ipucu) {
    ipucu.textContent =
      ipuclari[Math.floor(Math.random() * ipuclari.length)];
  }

  // ⏳ GERİ SAYIM
  let sure = 60;
  const sayim = document.getElementById("sayim");

  setInterval(() => {
    if (!sayim) return;

    if (sure > 0) {
      sure--;
      sayim.textContent = sure;
    } else {
      sayim.textContent = `⏱️ Kalan süre: ${sure} sn`;

    }
  }, 1000);

  // 🤔 SEÇİM
  window.cevapVer = function (secim) {
    const cevap = document.getElementById("cevap");
    if (!cevap) return;

    if (secim === "enerji") cevap.textContent = "⚡ Enerji tasarrufu çok önemli!";
    if (secim === "ulasim") cevap.textContent = "🚍 Ulaşım karbonu etkiler.";
    if (secim === "sanayi") cevap.textContent = "🏭 Sanayi emisyonları yüksektir.";

    cevap.classList.remove("hidden");
  };

  // 🌍 KARBON AYAK İZİ
  window.karbonHesapla = function () {
    const araba = Number(document.getElementById("araba").value) || 0;
    const elektrik = Number(document.getElementById("elektrik").value) || 0;
    const ucak = Number(document.getElementById("ucak").value) || 0;

    const arabaCO2 = araba * 0.21 * 52;
    const elektrikCO2 = elektrik * 0.42 * 12;
    const ucakCO2 = ucak * 250;

    const toplam = arabaCO2 + elektrikCO2 + ucakCO2;

    const sonuc = document.getElementById("sonuc");
    sonuc.textContent = `🌱 Yıllık karbon ayak izin: ${Math.round(toplam)} kg CO₂`;
    sonuc.classList.remove("hidden");

    const agac = document.getElementById("agac");
    const agacSayisi = Math.ceil(toplam / 21);
    agac.textContent = `🌳 Dengelemek için ${agacSayisi} ağaç gerekir.`;
    agac.classList.remove("hidden");

    const rozet = document.getElementById("rozet");
    rozet.className = "rozet";

    if (toplam < 2000) {
      rozet.textContent = "🏆 ÇEVRE DOSTU 🌱";
      rozet.classList.add("yesil");
    } else if (toplam < 5000) {
      rozet.textContent = "⚠️ GELİŞTİRİLEBİLİR";
      rozet.classList.add("sari");
    } else {
      rozet.textContent = "❌ YÜKSEK KARBON AYAK İZİ";
      rozet.classList.add("kirmizi");
    }

    rozet.classList.remove("hidden");
    grafikCiz(arabaCO2, elektrikCO2, ucakCO2);
  };

  // 📊 GRAFİK
  function grafikCiz(a, e, u) {
    const canvas = document.getElementById("grafik");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const v = [a, e, u];
    const t = ["Araba", "Elektrik", "Uçak"];
    const max = Math.max(...v);

    v.forEach((d, i) => {
      const h = (d / max) * 150;
      const x = 40 + i * 90;
      const y = 180 - h;

      ctx.fillStyle = "#4CAF50";
      ctx.fillRect(x, y, 40, h);

      ctx.fillStyle = "white";
      ctx.fillText(Math.round(d), x + 5, y - 5);
      ctx.fillText(t[i], x, 195);
    });
  }

  // 📍 SCROLL İLERLEME
  window.addEventListener("scroll", () => {
    const toplam =
      document.documentElement.scrollHeight - window.innerHeight;
    const oran = Math.round((window.scrollY / toplam) * 100);
    const ilerleme = document.getElementById("ilerleme");
    if (ilerleme) {
      ilerleme.textContent = `📍 İlerleme: %${oran}`;
    }
  });

});
