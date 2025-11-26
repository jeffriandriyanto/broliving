<template>
  <footer class="bg-gray-50 text-gray-800 pt-10 pb-6 border-t border-gray-200">
    <div
      class="container mx-auto px-6 flex flex-col md:flex-row md:justify-between md:items-start gap-8"
    >
      <!-- Logo & Brand Info -->
      <div class="flex flex-col items-start">
        <NuxtImg
          src="/logo/logo-black.png"
          alt="BROLIVING Logo"
          width="160"
          height="auto"
          class="mb-4"
        />
        <p class="text-sm font-semibold">
          BROLIVING — Hospitality Furniture for Residential, Hotel, Resto, Cafe
          & Resort
        </p>
      </div>

      <!-- Quick Links (matching navbar style) -->
      <div>
        <h3 class="text-md font-semibold mb-3">Quick Links</h3>
        <ul class="space-y-2">
          <li><button class="nav-link" @click="$scrollTo('#products')">Products</button></li>
          <li><button class="nav-link" @click="$scrollTo('#custom')">Custom Furniture</button></li>
          <li><button class="nav-link" @click="$scrollTo('#projects')">Project Gallery</button></li>
          <li><button class="nav-link" @click="$scrollTo('#about')">About Us</button></li>
          <li><button class="nav-link" @click="$scrollTo('#contact')">Contact</button></li>
        </ul>
      </div>

      <!-- Contact & Address -->
      <div>
        <h3 class="text-md font-semibold mb-3">Contact</h3>

        <!-- Address -->
        <div class="flex items-start gap-2 text-sm">
          <v-icon size="18" class="pt-[2px]">mdi-map-marker</v-icon>
          <p>
            Jl. Raya Juwana – Pati, Area Sawah, Mintomulyo, Kec. Pati,
            Kabupaten Pati, Jawa Tengah 59185
          </p>
        </div>

        <!-- WhatsApp -->
        <div class="flex items-center gap-2 mt-2 text-sm">
          <v-icon size="18">mdi-whatsapp</v-icon>
          <a
            href="https://wa.me/62812xxxxxxx"
            target="_blank"
            class="font-medium hover:text-gray-600"
          >
            0812-xxxx-xxxx
          </a>
        </div>

        <!-- Email -->
        <div class="flex items-center gap-2 mt-2 text-sm">
          <v-icon size="18">mdi-email</v-icon>
          <a
            href="mailto:brolivingindonesia@gmail.com"
            class="hover:text-gray-600"
          >
            brolivingindonesia@gmail.com
          </a>
        </div>

        <h3 class="text-md font-semibold mt-4">Social</h3>

        <!-- Instagram -->
        <div class="flex items-center gap-2 mt-2 text-sm">
          <v-icon size="18">mdi-instagram</v-icon>
          <a
            href="https://www.instagram.com/broliving.id/"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-gray-600"
          >
            @broliving.id
          </a>
        </div>
      </div>
    </div>

    <!-- SEO Footer Copy / Company Description -->
    <div class="container mx-auto px-6 mt-8 border-t border-gray-200 pt-6">
      <p class="max-w-6xl mx-auto text-sm text-center text-gray-600">
        BROLIVING adalah produsen furnitur premium untuk kebutuhan rumah dan
        bisnis anda. Kami melayani pemesanan furnitur untuk Residential, Hotel,
        Resto, Cafe, dan Resort dengan pilihan katalog dan custom. Pengiriman ke
        seluruh Indonesia.
      </p>
    </div>

    

    <!-- Copyright -->
    <div class="container mx-auto px-6 mt-6 text-center">
      <p class="text-xs text-gray-500">
        © 2025 BROLIVING — All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.nav-link {
  @apply hover:text-gray-600 transition-colors cursor-pointer;
}
</style>
