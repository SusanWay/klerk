<script setup lang="ts">
interface Props {
  text: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center">
    <label class="inline-flex cursor-pointer items-center">
      <input type="checkbox" value="" class="peer sr-only focus:outline-none">
      <div class="peer relative h-6 w-11 rounded-full bg-[#DCDCDC] after:absolute after:start-[2px] after:top-[2px] after:size-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full" />
    </label>
    <span class="ml-2 text-[14px] leading-[20px]">{{ text }}</span>
  </div>
</template>

<style scoped>

</style>
