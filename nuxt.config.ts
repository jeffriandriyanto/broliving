export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/hints",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxtjs/seo",
    "@nuxtjs/tailwindcss",
    "nuxt-aos",
    "dayjs-nuxt",
    "vuetify-nuxt-module",
    "@nuxtjs/leaflet",
  ],
  css: ["@/styles/main.css", "leaflet/dist/leaflet.css"],

  // ================================
  // 🔥 SEO & STRUCTURED DATA
  // ================================
  app: {
    head: {
      title:
        "Broliving | Hospitality Furniture Premium untuk Hotel, Resto, Cafe & Resort",
      meta: [
        {
          name: "description",
          content:
            "Broliving menghadirkan furniture premium untuk Residential, Hotel, Resto, Cafe, dan Resort. Kombinasi desain modern, kenyamanan, dan kualitas tinggi untuk pengalaman hospitality terbaik.",
        },
        {
          name: "og:title",
          content:
            "Broliving | Hospitality Furniture Premium untuk Hotel, Resto, Cafe & Resort",
        },
        {
          name: "og:description",
          content:
            "Furniture premium untuk Residential, Hotel, Resto, Cafe, dan Resort. Desain modern & craftsmanship presisi untuk pengalaman hospitality yang optimal.",
        },
        {
          name: "og:url",
          content: "https://broliving.id",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Brand",
            name: "Broliving",
            url: "https://broliving.id",
            logo: "https://broliving.id/logo/logo-black.png",
            slogan: "Crafted for Comfort. Designed for Life.",
            description:
              "Broliving menyediakan furniture premium untuk Residential, Hotel, Resto, Cafe, dan Resort. Menggabungkan desain modern, craftsmanship presisi, dan kenyamanan jangka panjang untuk pengalaman hospitality terbaik.",
            sameAs: [
              "https://www.instagram.com/broliving.id",
              "https://wa.me/6285XXXXXXXX",
            ],
            brandValues: [
              "Material Premium",
              "Quality Craftsmanship",
              "Purposeful Design",
            ],
            potentialAction: {
              "@type": "Action",
              name: "Order via WhatsApp",
              target: "https://wa.me/6285XXXXXXXX",
            },
          }),
          tagPosition: "bodyClose",
        },
      ],
    },
  },
});