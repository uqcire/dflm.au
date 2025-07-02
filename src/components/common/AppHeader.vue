<template>
  <header class="fixed top-0 left-0 right-0 z-[9999] w-full overflow-x-hidden">
    <div class="max-w-[2000px] mx-auto px-8 pt-8">
      <div class="flex items-center justify-between">
        <div class="flex gap-6 items-center transition-all duration-300"
          :class="{ 'opacity-100 translate-y-0': !isScrolled, 'opacity-0 -translate-y-10': isScrolled }">
          <router-link to="/">
            <img :src="Logo" alt="Logo" class="w-20 h-20" />
          </router-link>
          <span class="text-6xl font-black font-pilar text-[#7F0506]">
            <router-link to="/">
              OneSpoon
            </router-link>
          </span>
        </div>
        <div class="flex items-center">
          <button class="btn btn-xl bg-[#7F0506] text-[#FDF9E6] border-0 relative z-[9999]">
            <span class="font-basic font-black text-2xl">Menu</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from '@/assets/logo.png';
import { onMounted, onUnmounted, ref } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
