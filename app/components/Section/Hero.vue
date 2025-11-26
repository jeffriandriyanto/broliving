<template>
  <section id="home" class="relative w-screen max-h-screen">
    <!-- Background image -->
    <NuxtImg
      alt="banner-hero"
      src="/pages/hero.jpg"
      class="w-screen h-screen object-cover"
    />

    <div class="absolute inset-0 bg-black/55" />

    <div
      class="absolute inset-0 flex flex-col justify-center items-start container text-white"
    >
      <h1
        class="text-3xl md:text-5xl max-w-3xl font-bold mb-4 leading-tight"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        Furniture Premium untuk Bisnis Hospitality
      </h1>

      <!-- Subheadline -->
      <p
        class="text-lg md:text-xl mb-6 max-w-3xl"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
      >
        BROLIVING menghadirkan furnitur berkualitas untuk Residential, Hotel,
        Resto, Cafe, dan Resort. Desain elegan, material tahan lama, dan
        pengerjaan rapi oleh tim berpengalaman.
      </p>

      <!-- Bullet points -->
      <ul class="list-disc list-inside space-y-1 mb-6 text-base md:text-lg">
        <li data-aos="fade-right" data-aos-delay="500" data-aos-duration="800">
          Material solid & tahan lama
        </li>
        <li data-aos="fade-right" data-aos-delay="600" data-aos-duration="800">
          Finishing premium untuk indoor & outdoor
        </li>
        <li data-aos="fade-right" data-aos-delay="700" data-aos-duration="800">
          Bisa custom sesuai kebutuhan konsep interior
        </li>
        <li data-aos="fade-right" data-aos-delay="800" data-aos-duration="800">
          Pengiriman ke seluruh Indonesia
        </li>
      </ul>

      <!-- CTA Button -->
      <a
        id="cta_hero_whatsapp"
        href="https://wa.me/628xxxxxxx"
        target="_blank"
        class="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-xl w-fit flex items-center transition gap-2"
      >
        Tanyakan via WhatsApp
      </a>
    </div>
  </section>
</template>
