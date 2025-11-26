export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
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
  ],
  css: ["@/styles/main.css"],

  // ================================
  // 🔥 SEO & STRUCTURED DATA
  // ================================
  app: {
    head: {
      title:
        "Broliving | Furnitur Premium Nyaman & Tahan Lama untuk Rumah Modern",
      meta: [
        {
          name: "description",
          content:
            "Temukan furnitur premium yang nyaman, fungsional, dan tahan lama. Broliving menggabungkan desain modern & craftsmanship presisi untuk pengalaman hidup di rumah yang lebih baik.",
        },
        {
          name: "og:title",
          content:
            "Broliving | Furnitur Premium Nyaman & Tahan Lama untuk Rumah Modern",
        },
        {
          name: "og:description",
          content:
            "Furnitur premium dengan desain modern, craftsmanship presisi, dan kenyamanan jangka panjang untuk pengalaman hidup di rumah yang lebih baik.",
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
            logo: "https://broliving.id/logo.png",
            slogan: "Crafted for Comfort. Designed for Life.",
            description:
              "Broliving menghadirkan furnitur premium dengan desain modern, craftsmanship presisi, dan kenyamanan jangka panjang untuk pengalaman hidup di rumah yang lebih baik.",
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
