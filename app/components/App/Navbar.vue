<template>
  <header
    class="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200"
  >
    <nav
      class="max-w-[1440px] mx-auto px-6 flex items-center justify-between h-20"
    >
      <!-- Logo + Tagline -->
      <div
        class="flex flex-col leading-tight cursor-pointer"
        @click="scrollTo('home')"
      >
        <nuxt-img src="/logo/logo-black.png" width="150" />
      </div>

      <!-- Desktop Nav -->
      <ul
        class="hidden md:flex items-center space-x-10 text-[15px] font-medium"
      >
        <li>
          <button class="nav-link" @click="scrollTo('home')">Home</button>
        </li>
        <li>
          <button class="nav-link" @click="scrollTo('products')">
            Products
          </button>
        </li>
        <li>
          <button class="nav-link" @click="scrollTo('custom')">
            Custom Furniture
          </button>
        </li>
        <li>
          <button class="nav-link" @click="scrollTo('projects')">
            Project Gallery
          </button>
        </li>
        <li>
          <button class="nav-link" @click="scrollTo('about')">About Us</button>
        </li>
        <li>
          <button class="nav-link" @click="scrollTo('contact')">Contact</button>
        </li>
      </ul>

      <!-- CTA Desktop (Vuetify) -->
      <v-btn
        id="cta_header_whatsapp"
        color="green"
        class="hidden md:inline-flex px-6 py-2 text-white font-semibold tracking-wide"
        href="https://wa.me/628xxxxxx"
        circle
        target="_blank"
      >
        <v-icon icon="mdi-whatsapp" />
      </v-btn>

      <!-- Hamburger -->
      <button class="md:hidden" @click="drawer = !drawer">
        <v-icon size="32">mdi-menu</v-icon>
      </button>
    </nav>

    <!-- Mobile Drawer -->
    <transition name="slide-fade">
      <div
        v-if="drawer"
        class="md:hidden bg-white border-b border-gray-200 shadow-lg"
      >
        <ul class="flex flex-col py-4 space-y-4 px-6 text-base font-medium">
          <li><button @click="navMobile('home')">Home</button></li>
          <li><button @click="navMobile('products')">Products</button></li>
          <li>
            <button @click="navMobile('custom')">Custom Furniture</button>
          </li>
          <li>
            <button @click="navMobile('projects')">Project Gallery</button>
          </li>
          <li><button @click="navMobile('about')">About Us</button></li>
          <li><button @click="navMobile('contact')">Contact</button></li>
          <v-btn
            id="cta_header_whatsapp"
            color="green"
            class="w-full py-2 text-white font-semibold tracking-wide"
            href="https://wa.me/628xxxxxx"
            target="_blank"
          >
            Tanyakan Ketersediaan via WhatsApp
          </v-btn>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
const drawer = ref(false);

const scrollTo = (section) => {
  const el = document.getElementById(section);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const navMobile = (section) => {
  drawer.value = false;
  scrollTo(section);
};
</script>

<style>
.nav-link {
  @apply hover:text-black/80 transition-colors;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: 0.25s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
