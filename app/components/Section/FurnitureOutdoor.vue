<template>
  <section class="py-16 bg-gray-50">
    <div
      class="container mx-auto px-6 flex flex-col md:flex-row-reverse md:items-center md:gap-12"
    >
      <!-- Gambar -->
      <div class="w-full md:w-1/2 mb-8 md:mb-0" data-aos="fade-left">
        <NuxtImg
          src="/pages/outdoor.jpg"
          alt="Outdoor furniture sample — table and chairs on terrace"
          class="w-auto md:h-[600px] rounded-lg shadow-lg object-cover"
          preload
          loading="eager"
          quality="70"
          format="webp"
        />
      </div>

      <!-- Teks -->
      <div class="w-full md:w-1/2 text-right" data-aos="fade-right">
        <h2 class="text-2xl md:text-3xl font-semibold mb-4">
          Outdoor & Café Furniture
        </h2>
        <p class="text-gray-700 mb-4">
          Weather-resistant chairs and tables crafted from treated wood,
          aluminium, or synthetic rattan — perfect for patios, terraces, cafés,
          restaurants, and resort outdoor spaces.
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-600">
          <li>Durable & weather-resistant materials</li>
          <li>Finishing optimized for outdoor use</li>
          <li>Custom design available to suit your layout</li>
        </ul>
      </div>
    </div>
  </section>
</template>
