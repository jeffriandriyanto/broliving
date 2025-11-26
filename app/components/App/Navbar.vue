<template>
  <header
    class="w-full fixed top-0 z-50 bg-gradient-to-b from-black via-black/60 to-transparent"
  >
    <nav class="container mx-auto flex items-center justify-between py-4">
      <div
        class="flex flex-col leading-tight cursor-pointer"
        @click="scrollTo('home')"
      >
        <nuxt-img src="/logo/logo-white.png" width="150" />
      </div>

      <div class="flex space-x-4 md:space-x-10 items-center">
        <ul
          class="hidden md:flex text-white space-x-10 text-[15px] font-medium"
        >
          <li>
            <button class="nav-link" @click="scrollTo('home')">Home</button>
          </li>
          <!-- <li>
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
        </li> -->
          <li>
            <button class="nav-link" @click="scrollTo('about')">
              About Us
            </button>
          </li>
          <li>
            <button class="nav-link" @click="scrollTo('contact')">
              Contact
            </button>
          </li>
        </ul>

        <!-- CTA Desktop (Vuetify) -->
        <v-btn
          id="cta_header_whatsapp"
          href="https://wa.me/628xxxxxx"
          target="_blank"
          icon="mdi-whatsapp"
          color="green"
          variant="flat"
        />

        <!-- Hamburger -->
        <button class="md:hidden" @click="drawer = !drawer">
          <v-icon size="32" color="white">mdi-menu</v-icon>
        </button>
      </div>
    </nav>

    <!-- Mobile Drawer -->
    <transition name="slide-fade">
      <div
        v-if="drawer"
        class="md:hidden bg-black/10 text-white border-b border-gray-200 shadow-lg"
      >
        <ul class="flex flex-col py-4 space-y-4 px-6 text-base font-medium">
          <li><button @click="navMobile('home')">Home</button></li>
          <!-- <li><button @click="navMobile('products')">Products</button></li>
          <li>
            <button @click="navMobile('custom')">Custom Furniture</button>
          </li>
          <li>
            <button @click="navMobile('projects')">Project Gallery</button>
          </li> -->
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
  @apply hover:text-white/60 transition-colors;
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
