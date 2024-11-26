<script setup lang="ts">
import type { Subscription } from '~/types'

defineProps<Subscription>()
</script>

<template>
  <div class="relative flex rounded-[16px] bg-white px-4 py-6 md:p-6">
    <div>
      <p class="text-sm text-grey-light">
        {{ introduction }}
      </p>
      <h4 class="text-title-h4 font-medium">
        {{ title }}
      </h4>
      <p class="mt-2 text-[14px] leading-[20px] text-grey md:w-5/6 lg:w-11/12">
        {{ description }}
      </p>
      <div class="mt-4 flex flex-col gap-2">
        <div v-for="(item, index) in checkList" :key="index" class="flex flex-row gap-2">
          <Icon name="check" size="16" class="shrink-0 text-[#00CC33]" />
          <p class="text-[14px] leading-[20px]">
            {{ item }}
          </p>
        </div>
      </div>
      <Toggle class="mt-4" :text="toggleText" />
    </div>
    <div class="absolute right-4 top-6 size-10 shrink-0 md:right-6 md:size-[50px] lg:block lg:size-20">
      <img :src="img" alt="">
    </div>
  </div>
</template>

<style scoped>

</style>
