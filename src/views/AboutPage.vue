<script setup>
import Garlic1 from '@/assets/about-page__garlic-1.png';
import Garlic2 from '@/assets/about-page__garlic-2.png';
import Garlic3 from '@/assets/about-page__garlic-clove-1.png';
import Garlic4 from '@/assets/about-page__garlic-clove-2.png';
import Pickles from '@/assets/about__garlic--pickle.png';
import Umami from '@/assets/about__garlic-sauce--umami.png';
import Sauces from '@/assets/garlic-sauce__combined.png';
</script>

<template>
  <!-- Section 1: About Us -->
  <section class="relative h-screen w-full overflow-x-hidden bg-[#FFD400]">
    <!-- 黄色有机形状背景 -->
    <div class="absolute inset-0 overflow-hidden">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rotate-210 w-[150%] h-[150%]">
        <path fill="#7F0506"
          d="M39.1,-32.7C55.1,-23.1,75.5,-11.6,78.3,2.8C81.1,17.1,66.2,34.3,50.3,46.3C34.3,58.3,17.1,65.3,-1.3,66.6C-19.8,67.9,-39.6,63.6,-43.9,51.6C-48.2,39.6,-37,19.8,-33.6,3.3C-30.3,-13.1,-34.8,-26.2,-30.5,-35.8C-26.2,-45.4,-13.1,-51.5,-0.8,-50.8C11.6,-50,23.1,-42.3,39.1,-32.7Z"
          transform="translate(100 100)" />
      </svg>
    </div>

    <!-- 大标题 -->
    <div class="max-w-screen mx-auto relative h-full">
      <h1
        class="absolute left-1/2 top-1/3 z-20 -translate-x-1/2 text-9xl font-black font-basic text-[#FDF9E6] drop-shadow-lg whitespace-nowrap">
        About us
      </h1>

      <!-- 右侧酒杯插画（占位） -->
      <div class="absolute right-[38vw] top-[50vh] z-30 w-[10vw] max-w-[200px] rotate-35">

        <div class="w-64">
          <img :src="Garlic1" alt="Garlic" class="w-full h-full object-contain drop-shadow-2xl/50" />
        </div>
      </div>
      <div class="absolute right-[25vw] top-[40vh] z-30 w-[10vw] max-w-[200px] -rotate-35">
        <div class="w-64">
          <img :src="Garlic2" alt="Garlic" class="w-full h-full object-contain drop-shadow-2xl/50" />
        </div>
      </div>
      <div class="absolute right-[10vw] top-[70vh] z-30">
        <div class="w-32">
          <img :src="Garlic3" alt="Garlic" class="w-full h-full object-contain drop-shadow-lg/50" />
        </div>
      </div>
      <div class="absolute right-[15vw] top-[70vh] z-30 w-[10vw] max-w-[200px] -rotate-35 ">
        <div class="w-32">
          <img :src="Garlic4" alt="Garlic" class="w-full h-full object-contain drop-shadow-lg/50" />
        </div>
      </div>
      <div class="absolute right-[8vw] top-[80vh] z-30 rotate-180">
        <div class="w-32">
          <img :src="Garlic3" alt="Garlic" class="w-full h-full object-contain drop-shadow-lg/50" />
        </div>
      </div>

      <!-- 底部弧形白色分割 -->
      <div class="absolute bottom-0 left-0 z-40 h-[10vh] w-full"
        style="background: #FDF9E6; border-radius: 100% 100% 0 0 / 80% 80% 0 0;"></div>
    </div>
  </section>

  <!-- Section 2: Company Information -->
  <section class="relative mx-auto p-12 pb-12">
    <div class="flex flex-col gap-12">
      <h2 class="font-black text-8xl font-basic text-[#7F0506] leading-tight pl-64">
        A Spoonful of Garlic, No Nonsense. All Yum.
      </h2>
      <div class="flex">
        <!-- 左侧图片容器 -->
        <div class="relative w-[50%] flex items-center justify-center pb-48">
          <!-- 叠加的图片 -->
          <img :src="Umami" alt="Umami Garlic Sauce" class="w-auto h-[60vh] object-contain" />
        </div>

        <!-- 右侧文字 -->
        <div class="flex flex-col gap-4 w-[36rem]">
          <div class="font-bold text-[#7F0506] text-2xl">We make garlic that's real, clean, and ready when you are. ♡
          </div>
          <div class="flex flex-col gap-4 font-bold font-basic text-lg text-[#7F0506]">
            <p>
              Haosuandao is a garlic-focused condiment brand developed by Jiangsu Liming Food Group, one of China's
              leading agricultural enterprises with over 20 years of experience in garlic production and processing.
            </p>
            <p>
              We are committed to real ingredients and honest flavor. Each jar is made with authentic garlic and
              contains no added preservatives, colorants, or artificial flavors. Our mission is to offer a healthier and
              more convenient way to enjoy the richness of garlic in everyday meals.
            </p>
            <p>
              Supported by the supply chain strength and strict quality standards of Liming Group, Haosuandao combines
              traditional garlic craftsmanship with the needs of modern kitchens. Whether it's a quick solo dish or a
              shared dinner, we believe every spoonful of flavor should feel natural, effortless, and full of heart.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
  <!-- Section 3: Photos -->
  <!-- Blob Overlays -->
  <div class="relative w-full h-0 z-20 overflow-visible" style="margin-top: -15vh;">
    <img :src="Sauces" alt="Garlic Sauces Set" class="absolute right-[15vw] top-[-5vh] w-[50vw]" />
  </div>
  <section
    class="relative w-full min-h-[60vh] overflow-hidden bg-[#ED6C2B] flex flex-col justify-center items-center py-16">
    <!-- 波浪分割线 -->
    <div class="absolute top-0 left-0 w-full h-32 z-0"
      style="background: #FDF9E6; border-radius: 0 0 100% 100% / 0 0 80% 80%;"></div>
    <!-- 主要文案 -->
    <div class="relative z-30 mt-24 flex flex-col items-start pt-32">
      <h2 class="font-black font-basic text-5xl leading-tight text-[#E0E0E0] drop-shadow-lg pl-48 w-1/2">
        One spoon of real garlic, zero stress. Full flavor made simple, with nothing fake and nothing extra.
      </h2>
    </div>
  </section>
  <!-- Section 4: Company -->
  <section class="relative mx-auto p-12 pt-24">
    <div class="flex flex-col gap-12">
      <h2 class="font-black text-8xl font-basic text-[#7F0506] leading-tight pl-96">
        A Spoonful of Garlic, No Nonsense. All Yum.
      </h2>
      <div class="flex">
        <!-- 左侧文字 -->
        <div class="flex flex-col gap-4 pl-64 w-[48rem]">
          <div class="font-bold text-[#7F0506] text-2xl">We make garlic that's real, clean, and ready when you are. ♡
          </div>
          <div class="flex flex-col gap-4 font-bold font-basic text-lg text-[#7F0506]">
            <p>
              Haosuandao is a garlic-focused condiment brand developed by Jiangsu Liming Food Group, one of China's
              leading agricultural enterprises with over 20 years of experience in garlic production and processing.
            </p>
            <p>
              We are committed to real ingredients and honest flavor. Each jar is made with authentic garlic and
              contains no added preservatives, colorants, or artificial flavors. Our mission is to offer a healthier and
              more convenient way to enjoy the richness of garlic in everyday meals.
            </p>
            <p>
              Supported by the supply chain strength and strict quality standards of Liming Group, Haosuandao combines
              traditional garlic craftsmanship with the needs of modern kitchens. Whether it's a quick solo dish or a
              shared dinner, we believe every spoonful of flavor should feel natural, effortless, and full of heart.
            </p>
          </div>
        </div>

        <!-- 右侧照片容器 -->
        <div class="relative w-[50%] flex items-center justify-center pb-48">
          <!-- 叠加的图片 -->
          <img :src="Pickles" alt="Pickle Garlic" class="w-auto h-[60vh] object-contain" />
        </div>
      </div>

    </div>
  </section>
</template>
