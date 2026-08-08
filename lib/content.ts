import type { Content, Locale } from "./types";

/**
 * Single source of truth for all site copy, EN & ID in parallel.
 * Placeholders in [brackets] must be replaced with authentic data before launch.
 */
export const content: Record<Locale, Content> = {
  en: {
    locale: "en",
    nav: {
      links: [
        { label: "What is Melukat", href: "#what-is-melukat" },
        { label: "Rituals", href: "#rituals" },
        { label: "Guide", href: "#guide" },
        { label: "FAQ", href: "#faq" },
      ],
      waButton: "WhatsApp",
    },
    hero: {
      eyebrow: "Sacred Balinese Purification Ritual",
      headline: "Wash Away the Weight You've Been Carrying",
      subheadline:
        "Experience Melukat — an ancient Balinese-Hindu water purification ritual, guided by a traditional priest at a sacred spring. Cleanse your body, mind, and spirit. Leave lighter than you came.",
      primaryCta: "Request Your Ceremony",
      secondaryCta: "What is Melukat?",
      microTrust: [
        "Guided by a traditional Balinese priest",
        "Held at sacred temple springs",
      ],
    },
    trustBar: [
      "Led by a traditional Balinese priest",
      "Held at sacred temple springs near Ubud",
      "Open to all faiths",
      "[500+] ceremonies guided",
    ],
    whatIs: {
      heading: "What Is Melukat?",
      paragraphs: [
        "Melukat comes from the Balinese word lukat — “to purify.” It is a sacred Hindu-Balinese ritual to cleanse the body, mind, and soul of negative energy, performed for centuries before important moments in life — or simply to feel renewed.",
        "Holy spring water flows over you as the priest guides you through prayer, offerings, and intention. It is not a bath. It is a release. You do not need to be Hindu to feel it — only open.",
      ],
    },
    experience: {
      heading: "The Experience",
      intro:
        "A ceremony unfolds gently, in four movements — from arrival to the final blessing.",
      steps: [
        {
          title: "Welcome & Intention",
          description:
            "The priest greets you, explains the meaning, and helps you set your intention.",
        },
        {
          title: "Offerings & Prayer",
          description:
            "Guided by the priest, you prepare traditional offerings (canang) and open the ceremony.",
        },
        {
          title: "The Water Purification",
          description:
            "Move through the sacred spouts as holy water cleanses each layer of tension and negativity.",
        },
        {
          title: "Blessing & Closing",
          description:
            "Receive the priest's final blessing. Sit. Breathe. Feel the shift.",
        },
      ],
      duration: "Duration: ~60–90 minutes",
    },
    rituals: {
      heading: "The Rituals We Hold",
      intro:
        "Not tour packages — sacred ceremonies, each held in the Balinese-Hindu tradition.",
      cardCta: "Request this ritual",
      items: [
        {
          slug: "melukat",
          waLabel: "Melukat",
          name: "Melukat",
          tagline: "Water Purification",
          description:
            "The sacred cleansing ritual. Holy spring water to purify body, mind, and spirit — for release, clarity, and new beginnings.",
          duration: "~60–90 min",
        },
        {
          slug: "cleansing",
          waLabel: "Spiritual Cleansing",
          name: "Pembersihan Energi",
          tagline: "Spiritual Cleansing",
          description:
            "A deeper energetic cleansing guided by the priest, to clear heavy energy, restlessness, or what you cannot name.",
          duration: "~60–90 min",
        },
        {
          slug: "blessing",
          waLabel: "Blessing",
          name: "Pemberkatan",
          tagline: "Blessing Ceremony",
          description:
            "A sacred blessing for a new chapter — a marriage, a home, a venture, a milestone — carried out in the Balinese-Hindu tradition.",
          duration: "By arrangement",
        },
      ],
    },
    why: {
      heading: "Why Taksu Healing",
      intro:
        "In Bali, taksu is the spiritual energy that gives life its power. Everything we do helps you reconnect with it.",
      points: [
        {
          title: "Guided by a traditional priest",
          description:
            "A real Balinese-Hindu ceremony led by someone who lives this tradition, not a staged experience.",
        },
        {
          title: "At sacred springs",
          description:
            "Held at genuine temple water sources, where the ritual holds its true power.",
        },
        {
          title: "Held with reverence",
          description:
            "Unhurried and sincere. The ceremony moves at the pace the moment asks for.",
        },
        {
          title: "The meaning of “Taksu”",
          description:
            "In Bali, taksu is the spiritual energy that gives life its power. That is what we help you reconnect with.",
        },
      ],
    },
    testimonials: {
      heading: "In Their Words",
      intro: "Guests who came heavy and left lighter.",
      items: [
        {
          quote:
            "I came to Bali carrying so much. I left that spring feeling like myself again. The priest made it feel truly sacred.",
          name: "Sarah",
          origin: "Australia",
        },
        {
          quote:
            "The most grounding hour I spent in Bali. Every step was explained with such patience and warmth.",
          name: "Marco",
          origin: "Italy",
        },
        {
          quote:
            "I didn't expect to cry. Something I'd been holding for years finally let go under that water.",
          name: "Priya",
          origin: "Singapore",
        },
      ],
    },
    guide: {
      heading: "Meet the Priest Who Guides You",
      badge: "Guided by a Pemangku",
      paragraphs: [
        "Your ceremony is led by [Name], a [pemangku] from [village], who has guided purification rituals for over [X] years.",
        "[One or two sentences of personal story — why he walks this path, what the ritual means to him.]",
        "You are in caring, experienced hands.",
      ],
    },
    practical: {
      heading: "Good to Know",
      intro: "A few simple things so you can arrive at ease.",
      items: [
        {
          label: "What to wear",
          description:
            "A sarong is provided. Bring a change of clothes and a towel.",
        },
        {
          label: "Open to all",
          description:
            "No particular religion required. First-timers are welcome.",
        },
        {
          label: "Please note",
          description:
            "Following Balinese custom, women who are menstruating may not enter the temple grounds. Let us know and we will help reschedule — no charge.",
        },
        {
          label: "Getting there",
          description:
            "Transport from your accommodation can be arranged (Ubud area).",
        },
        {
          label: "Best time",
          description: "Morning ceremonies are the calmest.",
        },
      ],
    },
    gallery: {
      heading: "Moments",
      intro: "Glimpses of the water, the offerings, and the ceremony.",
      items: [
        {
          alt: "Holy spring water flowing from a temple spout during a melukat purification ritual near Ubud, Bali",
        },
        {
          alt: "Balinese priest guiding a melukat water purification ceremony at a sacred spring",
        },
        {
          alt: "Traditional canang sari offerings prepared for a Balinese-Hindu blessing ceremony",
        },
        {
          alt: "A guest immersed beneath the sacred spouts during a Balinese water cleansing ritual",
        },
        {
          alt: "Incense and offerings at a temple water source near Ubud, Bali",
        },
        {
          alt: "Quiet temple courtyard where the melukat purification ceremony is held",
        },
      ],
    },
    faq: {
      heading: "Questions, Answered",
      intro: "Everything you might wonder before you request a ceremony.",
      items: [
        {
          question: "Do I need to be Hindu or religious?",
          answer:
            "No. Melukat is open to everyone; many guests are not religious at all.",
        },
        {
          question: "How long does it take?",
          answer: "Around 60–90 minutes, plus travel time.",
        },
        {
          question: "Where is it held?",
          answer:
            "At a sacred spring/temple near Ubud. We share the exact location after your request is confirmed.",
        },
        {
          question: "Is it safe? Is the water clean?",
          answer:
            "Yes — natural spring water. The priest guides you through every step.",
        },
        {
          question: "What should I bring?",
          answer: "A change of clothes and a towel; the sarong is provided.",
        },
        {
          question: "Can I take photos?",
          answer:
            "Yes, respectfully. We can also take photos for you at key moments.",
        },
        {
          question: "How many people can join a ceremony?",
          answer:
            "You choose the number of participants when you send your request — the ceremony is prepared accordingly.",
        },
        {
          question: "How do I request a ceremony?",
          answer:
            "Send us your details on WhatsApp — we confirm your time within the day.",
        },
      ],
    },
    bookingCta: {
      heading: "Ready to Feel Lighter?",
      body: "Choose your ritual and the number of participants — we'll prepare your ceremony and confirm on WhatsApp.",
      button: "Request Your Ceremony",
    },
    footer: {
      greeting: "Om Swastiastu 🙏",
      tagline:
        "Authentic Balinese-Hindu purification, cleansing, and blessing ceremonies near Ubud.",
      contactHeading: "Contact",
      followHeading: "Follow",
      locationHeading: "Where to find us",
      location: "Ubud, Bali, Indonesia",
      mapsLabel: "Open in Google Maps",
      rights: "All rights reserved.",
    },
    dialog: {
      title: "Request Your Ceremony",
      description:
        "Tell us a little and we'll confirm availability on WhatsApp.",
      ritualLabel: "Ritual",
      participantsLabel: "Number of participants",
      dateLabel: "Preferred date",
      dateHint: "Optional",
      nameLabel: "Your name",
      namePlaceholder: "Optional",
      submit: "Send on WhatsApp",
      footnote:
        "No payment now. This opens WhatsApp with your details filled in.",
    },
    langToggle: {
      label: "Language",
      en: "EN",
      id: "ID",
    },
  },

  id: {
    locale: "id",
    nav: {
      links: [
        { label: "Apa itu Melukat", href: "#what-is-melukat" },
        { label: "Ritual", href: "#rituals" },
        { label: "Pemangku", href: "#guide" },
        { label: "FAQ", href: "#faq" },
      ],
      waButton: "WhatsApp",
    },
    hero: {
      eyebrow: "Ritual Penyucian Diri Sakral Khas Bali",
      headline: "Lepaskan Beban yang Selama Ini Kamu Bawa",
      subheadline:
        "Rasakan Melukat — ritual penyucian air Hindu-Bali kuno, dipandu langsung oleh pemangku di mata air suci. Sucikan tubuh, pikiran, dan jiwamu. Pulang dengan hati yang lebih ringan.",
      primaryCta: "Mohon Jadwal Ritual",
      secondaryCta: "Apa itu Melukat?",
      microTrust: [
        "Dipandu pemangku tradisional Bali",
        "Di mata air pura suci",
      ],
    },
    trustBar: [
      "Dipimpin pemangku tradisional Bali",
      "Di mata air pura suci dekat Ubud",
      "Terbuka untuk semua keyakinan",
      "[500+] upacara telah dipandu",
    ],
    whatIs: {
      heading: "Apa Itu Melukat?",
      paragraphs: [
        "Melukat berasal dari kata Bali lukat — “menyucikan.” Ini ritual suci Hindu-Bali untuk membersihkan tubuh, pikiran, dan jiwa dari energi negatif, yang dilakukan turun-temurun sebelum momen penting hidup — atau sekadar untuk merasa “baru” kembali.",
        "Air suci membasuhmu saat pemangku memandu doa, sesajen, dan niat. Ini bukan mandi biasa. Ini pelepasan. Kamu tak harus beragama Hindu untuk merasakannya — cukup terbuka hati.",
      ],
    },
    experience: {
      heading: "Jalannya Upacara",
      intro:
        "Upacara berjalan perlahan dalam empat tahap — dari sambutan hingga berkah penutup.",
      steps: [
        {
          title: "Sambutan & Niat",
          description:
            "Pemangku menyambut, menjelaskan maknanya, dan membantu kamu menetapkan niat.",
        },
        {
          title: "Sesajen & Doa",
          description:
            "Dipandu pemangku, kamu menyiapkan canang dan membuka upacara.",
        },
        {
          title: "Penyucian Air",
          description:
            "Basuh diri di pancuran suci saat air membersihkan tiap lapis ketegangan dan energi negatif.",
        },
        {
          title: "Pemberkatan & Penutup",
          description:
            "Terima berkah penutup dari pemangku. Duduk. Bernapas. Rasakan perubahannya.",
        },
      ],
      duration: "Durasi: ~60–90 menit",
    },
    rituals: {
      heading: "Ritual yang Kami Layani",
      intro:
        "Bukan paket wisata — upacara sakral, masing-masing dilakukan sesuai tradisi Hindu-Bali.",
      cardCta: "Mohon ritual ini",
      items: [
        {
          slug: "melukat",
          waLabel: "Melukat",
          name: "Melukat",
          tagline: "Penyucian Air",
          description:
            "Ritual penyucian sakral. Air suci mata air untuk menyucikan tubuh, pikiran, dan jiwa — untuk pelepasan, kejernihan, dan awal baru.",
          duration: "~60–90 mnt",
        },
        {
          slug: "cleansing",
          waLabel: "Pembersihan Energi",
          name: "Pembersihan Energi",
          tagline: "Spiritual Cleansing",
          description:
            "Pembersihan energi yang lebih dalam, dipandu pemangku, untuk melepaskan energi berat, kegelisahan, atau beban yang sulit dijelaskan.",
          duration: "~60–90 mnt",
        },
        {
          slug: "blessing",
          waLabel: "Pemberkatan",
          name: "Pemberkatan",
          tagline: "Blessing Ceremony",
          description:
            "Pemberkatan sakral untuk babak baru — pernikahan, rumah, usaha, momen penting — dilakukan sesuai tradisi Hindu-Bali.",
          duration: "Sesuai kesepakatan",
        },
      ],
    },
    why: {
      heading: "Mengapa Taksu Healing",
      intro:
        "Di Bali, taksu adalah energi spiritual yang memberi daya pada hidup. Semua yang kami lakukan membantumu menyambungnya kembali.",
      points: [
        {
          title: "Dipandu pemangku tradisional",
          description:
            "Upacara Hindu-Bali sungguhan yang dipimpin orang yang benar-benar menjalani tradisi ini, bukan pertunjukan.",
        },
        {
          title: "Di mata air suci",
          description:
            "Dilakukan di sumber air pura yang sesungguhnya, tempat ritual memiliki daya sejatinya.",
        },
        {
          title: "Dijalani dengan khidmat",
          description:
            "Tanpa terburu-buru dan tulus. Upacara mengikuti ritme yang diminta oleh momennya.",
        },
        {
          title: "Makna “Taksu”",
          description:
            "Di Bali, taksu adalah energi spiritual yang memberi daya pada hidup. Itu yang kami bantu kamu sambungkan kembali.",
        },
      ],
    },
    testimonials: {
      heading: "Kata Mereka",
      intro: "Tamu yang datang dengan beban dan pulang lebih ringan.",
      items: [
        {
          quote:
            "Ritualnya khidmat banget. Pemangkunya sabar menjelaskan tiap tahap. Pulang berasa plong.",
          name: "Dinda",
          origin: "Jakarta",
        },
        {
          quote:
            "Satu jam paling menenangkan selama di Bali. Setiap langkah dijelaskan dengan sabar dan hangat.",
          name: "Rangga",
          origin: "Bandung",
        },
        {
          quote:
            "Tak menyangka akan menangis. Sesuatu yang lama kupendam akhirnya lepas di bawah air itu.",
          name: "Maya",
          origin: "Surabaya",
        },
      ],
    },
    guide: {
      heading: "Kenali Pemangku yang Memandu Kamu",
      badge: "Dipandu Pemangku",
      paragraphs: [
        "Upacaramu dipimpin oleh [Nama], [pemangku] dari [desa], yang telah memandu ritual penyucian lebih dari [X] tahun.",
        "[Satu atau dua kalimat cerita personal — kenapa beliau menjalani ini, apa maknanya bagi beliau.]",
        "Kamu ada di tangan yang berpengalaman dan penuh perhatian.",
      ],
    },
    practical: {
      heading: "Perlu Kamu Tahu",
      intro: "Beberapa hal sederhana supaya kamu datang dengan tenang.",
      items: [
        {
          label: "Pakaian",
          description:
            "Kami sediakan kamen/sarung. Bawa baju ganti & handuk.",
        },
        {
          label: "Terbuka untuk semua",
          description:
            "Tidak harus beragama tertentu. Pemula sangat welcome.",
        },
        {
          label: "Catatan",
          description:
            "Sesuai adat Bali, perempuan yang sedang haid tidak diperkenankan masuk area pura. Kabari kami, kami bantu jadwal ulang tanpa biaya.",
        },
        {
          label: "Transport",
          description:
            "Antar-jemput dari penginapan bisa diatur (area Ubud).",
        },
        {
          label: "Waktu terbaik",
          description: "Upacara pagi paling tenang.",
        },
      ],
    },
    gallery: {
      heading: "Momen",
      intro: "Sekelumit air, sesajen, dan jalannya upacara.",
      items: [
        {
          alt: "Air suci mengalir dari pancuran pura saat ritual penyucian melukat dekat Ubud, Bali",
        },
        {
          alt: "Pemangku memandu upacara penyucian air melukat di mata air suci",
        },
        {
          alt: "Sesajen canang sari yang disiapkan untuk upacara pemberkatan Hindu-Bali",
        },
        {
          alt: "Tamu berdiri di bawah pancuran suci saat ritual pembersihan air khas Bali",
        },
        {
          alt: "Dupa dan sesajen di sumber air pura dekat Ubud, Bali",
        },
        {
          alt: "Halaman pura yang tenang tempat upacara penyucian melukat berlangsung",
        },
      ],
    },
    faq: {
      heading: "Pertanyaan yang Sering Muncul",
      intro: "Semua yang mungkin kamu tanyakan sebelum memohon jadwal ritual.",
      items: [
        {
          question: "Harus beragama Hindu?",
          answer:
            "Tidak. Melukat terbuka untuk semua; banyak tamu tidak beragama tertentu.",
        },
        {
          question: "Berapa lama?",
          answer: "Sekitar 60–90 menit, di luar waktu perjalanan.",
        },
        {
          question: "Di mana lokasinya?",
          answer:
            "Mata air/pura suci dekat Ubud. Lokasi persis dikirim setelah permohonan dikonfirmasi.",
        },
        {
          question: "Aman? Airnya bersih?",
          answer:
            "Ya — air mata air alami. Pemangku mendampingi setiap langkah.",
        },
        {
          question: "Bawa apa?",
          answer: "Baju ganti & handuk; sarung kami sediakan.",
        },
        {
          question: "Boleh foto?",
          answer:
            "Boleh, dengan sopan. Kami juga bisa bantu fotoin momen penting.",
        },
        {
          question: "Berapa orang bisa ikut satu upacara?",
          answer:
            "Kamu memilih jumlah peserta saat mengirim permohonan — upacara disiapkan sesuai jumlahnya.",
        },
        {
          question: "Cara memohon ritual?",
          answer:
            "Kirim detailmu via WhatsApp — kami konfirmasi jadwal di hari yang sama.",
        },
      ],
    },
    bookingCta: {
      heading: "Siap Merasa Lebih Ringan?",
      body: "Pilih ritual dan jumlah peserta — kami siapkan upacaramu dan konfirmasi via WhatsApp.",
      button: "Mohon Jadwal Ritual",
    },
    footer: {
      greeting: "Om Swastiastu 🙏",
      tagline:
        "Upacara penyucian, pembersihan, dan pemberkatan Hindu-Bali yang autentik, dekat Ubud.",
      contactHeading: "Kontak",
      followHeading: "Ikuti",
      locationHeading: "Temukan kami",
      location: "Ubud, Bali, Indonesia",
      mapsLabel: "Buka di Google Maps",
      rights: "Hak cipta dilindungi.",
    },
    dialog: {
      title: "Mohon Jadwal Ritual",
      description:
        "Isi sedikit detail dan kami konfirmasi ketersediaan via WhatsApp.",
      ritualLabel: "Ritual",
      participantsLabel: "Jumlah peserta",
      dateLabel: "Tanggal yang diinginkan",
      dateHint: "Opsional",
      nameLabel: "Nama kamu",
      namePlaceholder: "Opsional",
      submit: "Kirim ke WhatsApp",
      footnote:
        "Tanpa pembayaran sekarang. Ini membuka WhatsApp dengan detailmu terisi otomatis.",
    },
    langToggle: {
      label: "Bahasa",
      en: "EN",
      id: "ID",
    },
  },
};
