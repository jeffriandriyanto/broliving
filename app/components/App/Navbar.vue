<template>
  <header
    class="w-screen sticky top-0 z-50 bg-white md:bg-gradient-to-b from-white via-white/60 to-transparent"
  >
    <nav class="container mx-auto flex items-center justify-between py-4">
      <div
        class="flex flex-col leading-tight cursor-pointer"
        @click="scrollTo('home')"
      >
        <NuxtImg
          alt="logo-broliving-black"
          src="/logo/logo-black.png"
          src-lazy="/logo/logo-black.png"
          width="150"
          preload
          loading="eager"
          quality="70"
          format="webp"
        />
      </div>

      <div class="flex space-x-4 md:space-x-10 items-center">
        <ul class="hidden md:flex space-x-10 text-[15px] font-medium">
          <li>
            <button
              class="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 transition-all duration-200"
              @click="scrollTo('home')"
            >
              Home
            </button>
          </li>
          <li>
            <button
              class="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 transition-all duration-200"
              @click="scrollTo('about')"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              class="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 transition-all duration-200"
              @click="scrollTo('contact')"
            >
              Contact
            </button>
          </li>
        </ul>

        <!-- CTA Desktop (Vuetify) -->
        <v-btn
          id="cta_header_whatsapp"
          alt="btn_header_whatsapp"
          href="https://wa.me/6281337286371"
          target="_blank"
          icon="mdi-whatsapp"
          color="green"
          variant="flat"
        />

        <!-- Hamburger -->
        <button alt="btn-hamburger" class="md:hidden" @click="drawer = !drawer">
          <v-icon size="32">mdi-menu</v-icon>
        </button>
      </div>
    </nav>

    <!-- Mobile Drawer -->
    <transition name="slide-fade">
      <div
        v-if="drawer"
        class="md:hidden bg-white w-full border-b border-gray-200 shadow-lg"
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
          <li><button @click="navMobile('about')">Why Us</button></li>
          <li><button @click="navMobile('contact')">Contact</button></li>
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
