<script setup lang="ts">
import type { Breadcrumb } from '~/types'

interface Props {
  breadcrumb: Breadcrumb
  isLast: boolean
}

defineProps<Props>()
</script>

<template>
  <li class="flex items-center gap-2 text-sm md:text-base">
    <nuxt-link v-if="breadcrumb.link" :to="breadcrumb.link">
      {{ breadcrumb.text }}
    </nuxt-link>
    <span v-else>{{ breadcrumb.text }}</span>
    <span v-if="isLast"> <Icon name="arrow/right" size="12" /> </span>
  </li>
</template>

<style scoped>

</style>
