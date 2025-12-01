<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-6 md:flex md:items-center md:gap-12">
      <!-- Gambar -->
      <div class="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
        <NuxtImg
          src="/pages/indoor.jpg"
          alt="Indoor furniture sample — sofa & coffee table"
          class="w-auto md:h-[600px] rounded-lg object-contain ml-auto"
          preload
          loading="eager"
          quality="70"
          format="webp"
        />
      </div>

      <!-- Teks -->
      <div class="md:w-1/2" data-aos="fade-left">
        <h2 class="text-2xl md:text-3xl font-semibold mb-4">
          Living & Bedroom Furniture
        </h2>
        <p class="text-gray-700 mb-4">
          Premium sofas, coffee tables, elegant bedframes, nightstands, and
          wardrobes — crafted for comfort and timeless style. Each piece
          designed for cozy homes and refined interiors.
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-600">
          <li>High-quality solid wood & materials</li>
          <li>Premium finishing suitable for indoor living</li>
          <li>Customizable sizes & colors to match your design</li>
        </ul>
      </div>
    </div>
  </section>
</template>
