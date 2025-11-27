<template>
  <section id="home" class="relative w-full max-h-screen bg-gray-50">
    <div
      class="container mx-auto px-6 flex flex-col justify-center items-start h-full py-8 md:py-12 z-10"
    >
      <h1
        class="text-3xl md:text-5xl mt-10 md:mt-20 font-bold mb-6 leading-tight max-w-3xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Creating high-quality products with limitless possibilities
      </h1>
    </div>

    <client-only>
      <swiper-container
        :loop="true"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        class="md:h-[60vh]"
      >
        <swiper-slide v-for="(img, idx) in 4" :key="idx">
          <NuxtImg
            :src="`/pages/Slide_${idx + 1}.jpg`"
            :alt="`Slide image ${idx + 1}`"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </swiper-slide>
      </swiper-container>
    </client-only>
  </section>
</template>
