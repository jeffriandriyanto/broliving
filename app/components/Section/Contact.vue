<template>
  <section id="contact" class="py-20">
    <div class="container mx-auto px-6 flex flex-col md:flex-row gap-10">
      <!-- Info & CTA WhatsApp -->
      <div class="md:w-1/2 flex flex-col justify-center space-y-6">
        <h2 class="text-3xl font-semibold">Siap Order atau Konsultasi?</h2>
        <p class="text-gray-700">
          Tim kami akan membalas cepat dan membantu memilih furnitur terbaik
          sesuai kebutuhan Anda.
        </p>
        <button
          id="cta_contact_whatsapp"
          class="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium w-fit flex items-center gap-2"
          @click="goWhatsApp"
        >
          <v-icon size="20">mdi-whatsapp</v-icon>
          Tanyakan via WhatsApp
        </button>
      </div>

      <!-- Map -->
      <div class="md:w-1/2">
        <div class="w-full h-72 md:h-96 rounded-lg overflow-hidden shadow">
          <client-only>
            <LMap
              :zoom="zoom"
              :center="coordinates"
              :use-global-leaflet="false"
              style="
                height: 100%;
                width: 100%;
                border-radius: 12px;
                overflow: hidden;
              "
            >
              <LTileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
              />
              <LMarker :lat-lng="coordinates" @click="openGoogleMaps" />
            </LMap>
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
// Jika kamu memakai @nuxtjs/leaflet dengan auto-import, kamu tidak perlu import manual
// Jika tidak auto-import, kamu bisa import manual dari vue-leaflet:
// import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'

const zoom = ref(14);
const coordinates = ref([-6.74817, 111.037487]); // sesuaikan koordinat alamat kamu

function openGoogleMaps() {
  window.open(
    "https://www.google.com/maps/dir//PT+Rajawali+Perkasa+Furniture+Jl.+Raya+Juwana+-+Pati+Area+Sawah,+Mintomulyo+Kec.+Pati,+Kabupaten+Pati,+Jawa+Tengah+59185",
    "_blank"
  );
}

function goWhatsApp() {
  window.open("https://wa.me/62812xxxxxxx", "_blank");
}
</script>

<style scoped>
/* kalau perlu styling tambahan — misalnya untuk .leaflet-container */
.leaflet-container {
  background: #fff !important;
}
</style>
