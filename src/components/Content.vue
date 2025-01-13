<template lang="">
  <div
    class="w-full min-h-screen bg-cover bg-center background py-10"
    :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
  >
    <div
      class="content md:max-w-[468px] my-0 mx-auto flex items-center flex-col"
    >
      <div class="profile">
        <img
          src="/src/assets/C.png"
          alt=""
          class="rounded-full border-4 border-green-600 w-40 h-40"
        />
      </div>

      <div class="social-media flex mt-3 gap-4">
        <a href="https://www.instagram.com/adityayfn">
          <svg-icon
            type="mdi"
            :path="mdiInstagram"
            size="40px"
            color="white"
            class="hover:text-green-400 cursor-pointer transition-all ease-in duration-200"
          ></svg-icon>
        </a>
        <a href="https://www.linkedin.com/in/aditya-yudha-firstian">
          <svg-icon
            type="mdi"
            :path="mdiLinkedin"
            size="40px"
            color="white"
            class="hover:text-green-400 cursor-pointer transition-all ease-in duration-200"
          ></svg-icon>
        </a>
        <a href="https://github.com/adityayfn">
          <svg-icon
            type="mdi"
            :path="mdiGithub"
            size="40px"
            color="white"
            class="hover:text-green-400 cursor-pointer transition-all ease-in duration-200"
          >
          </svg-icon>
        </a>
      </div>

      <div class="link-item mt-10 flex flex-col gap-4">
        <LinkItem
          v-for="item in Items"
          :icon="item.icon"
          :link="item.link"
          :title="item.title"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  mdiInstagram,
  mdiLinkedin,
  mdiGithub,
  mdiWeb,
  mdiMovieOpenOutline,
  mdiBookOpenBlankVariant,
  mdiCartOutline,
  mdiImageOutline,
  mdiAccountCircleOutline,
} from "@mdi/js"

const Items = [
  {
    id: 1,
    title: "Personal Website",
    icon: mdiAccountCircleOutline,
    link: "https://adityayfn.vercel.app",
  },
  {
    id: 2,
    title: "Streaming Film ",
    icon: mdiMovieOpenOutline,
    link: "https://sukanonton.vercel.app/",
  },
  {
    id: 3,
    title: "Streaming Anime | Sub Indo ",
    icon: mdiMovieOpenOutline,
    link: "https://animes-dex.vercel.app/",
  },
  {
    id: 4,
    title: "Islam Apps ",
    icon: mdiBookOpenBlankVariant,
    link: "https://islam-apps.netlify.app/alquran",
  },

  {
    id: 5,
    title: "Fake Boots Store",
    icon: mdiCartOutline,
    link: "https://fake-drmartens-store.netlify.app/",
  },
  {
    id: 6,
    title: "Pict Hunt | Hunting Image",
    icon: mdiImageOutline,
    link: "https://pict-hunt.vercel.app/",
  },
]

const backgroundImageUrl = new URL("/src/assets/bg.jpeg", import.meta.url).href
</script>
<style lang=""></style>
