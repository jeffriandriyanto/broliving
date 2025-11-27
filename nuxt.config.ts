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
    "@nuxtjs/seo",
    "@nuxtjs/tailwindcss",
    "nuxt-aos",
    // "dayjs-nuxt",
    "vuetify-nuxt-module",
    // "@nuxtjs/leaflet",
    "nuxt-swiper",
  ],
  css: ["@/styles/main.css"],

  // ================================
  // 🔥 SEO & STRUCTURED DATA
  // ================================
  app: {
    head: {
      title:
        "BROLIVING | Premium Hospitality Furniture for Hotels, Restaurants, Cafés & Resorts",
      meta: [
        {
          name: "description",
          content:
            "BROLIVING delivers premium furniture for homes, hotels, restaurants, cafés and resorts. Combining modern design, comfort, and high-quality craftsmanship for the best hospitality experience.",
        },
        {
          name: "og:title",
          content:
            "BROLIVING | Premium Hospitality Furniture for Hotels, Restaurants, Cafés & Resorts",
        },
        {
          name: "og:description",
          content:
            "Premium furniture for residential and commercial spaces — hotels, restaurants, cafés, and resorts. Modern design & precise craftsmanship for optimal hospitality experience.",
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
            name: "BROLIVING",
            url: "https://broliving.id",
            logo: "https://broliving.id/logo/logo-black.png",
            slogan: "Crafted for Comfort. Designed for Life.",
            description:
              "BROLIVING provides premium furniture for homes, hotels, restaurants, cafés, and resorts. Blending modern design, precise craftsmanship, and long-lasting comfort for the best hospitality experience.",
            sameAs: [
              "https://www.instagram.com/broliving.id",
              "https://wa.me/6285XXXXXXXX",
            ],
            brandValues: [
              "Premium Materials",
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