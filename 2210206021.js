
    // Giriş animasyonu
    document.addEventListener("DOMContentLoaded", () => {
      document.body.style.transition = "opacity 1s ease-in";
      document.body.style.opacity = 1;
    });

    // Tema butonu
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      body.classList.add(savedTheme);
      themeToggle.textContent = savedTheme === "dark-theme" ? "☀️" : "🌙";
    } else {
      body.classList.add("light-theme");
    }

    themeToggle.onclick = () => {
      body.classList.toggle("dark-theme");
      body.classList.toggle("light-theme");
      const isDark = body.classList.contains("dark-theme");
      themeToggle.textContent = isDark ? "☀️" : "🌙";
      localStorage.setItem("theme", isDark ? "dark-theme" : "light-theme");
    };

    // Yukarı çık
    const scrollBtn = document.getElementById("scrollTopBtn");
    window.onscroll = () => {
      scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
    };
    scrollBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Dil Değiştirici
    const langBtn = document.getElementById("language-toggle");
    let isTR = true;
    const translations = {
      en: {
        experience: "Experience",
        education: "Education",
        certificates: "Seminars & Certificates",
        contact: "Contact Us",
        send: "Send",
        name: "Name",
        email: "Email",
        message: "Message",
      },
      tr: {
        experience: "Deneyim",
        education: "Eğitim",
        certificates: "Sertifikalar & Seminerler",
        contact: "Bize Ulaşın",
        send: "Gönder",
        name: "İsim",
        email: "E-posta",
        message: "Mesaj",
      }
    };

    langBtn.addEventListener("click", () => {
      isTR = !isTR;
      const lang = isTR ? "tr" : "en";
      langBtn.textContent = isTR ? "🇹🇷" : "🇬🇧";

      document.querySelector(".experience h2").textContent = translations[lang].experience;
      document.querySelector(".education h2").textContent = translations[lang].education;
      document.querySelector(".certificates h2").textContent = translations[lang].certificates;
      document.querySelector(".contact-section h2").textContent = translations[lang].contact;
      document.querySelector("button[type='submit']").textContent = translations[lang].send;
      document.querySelector("label[for='name']").textContent = translations[lang].name + ":";
      document.querySelector("label[for='email']").textContent = translations[lang].email + ":";
      document.querySelector("label[for='message']").textContent = translations[lang].message + ":";
    });
 