<template>
  <a
    class="bg-green-700 text-white w-80 p-4 text-center bg-opacity-70 rounded-xl cursor-pointer hover:bg-opacity-100 transition-all ease-in hover:px-5 duration-200 flex justify-center gap-1 border-2 border-green-500"
    :href="props.link"
  >
    <svg-icon
      type="mdi"
      :path="props.icon"
      size="25px"
      color="white"
    ></svg-icon>
    <h1>{{ props.title }}</h1>
  </a>
</template>
<script setup lang="ts">
const props = defineProps<{
  icon: any
  link: string
  title: string
}>()
</script>
<style></style>
