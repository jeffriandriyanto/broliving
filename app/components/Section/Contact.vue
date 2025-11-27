<template>
  <section id="contact" class="relative w-full bg-fixed bg-center bg-cover h-fit" style="background-image: url('/pages/footerbanner.jpg')">
    <div class="absolute inset-0 bg-black/50"></div>

    <div class="relative container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row gap-10 text-white">
      <div class="md:w-1/2 flex flex-col justify-center space-y-6" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-semibold">Ready to Order or Consult?</h2>
        <p class="text-base md:text-lg">
          Our team will respond promptly and help you choose the best furniture according to your needs.
        </p>
        <button
          id="cta_contact_whatsapp"
          class="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium w-fit flex items-center gap-2"
          @click="goWhatsApp"
        >
          <v-icon size="20">mdi-whatsapp</v-icon>
          Contact us on WhatsApp
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
function goWhatsApp() {
  window.open("https://wa.me/62812xxxxxxx", "_blank")
}
</script>

<style scoped>
/* Parallax effect via CSS background-attachment */
#contact {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/* Responsive fallback, karena background-attachment: fixed kadang bermasalah di mobile */
@media (max-width: 768px) {
  #contact {
    background-attachment: scroll;
  }
}
</style>
