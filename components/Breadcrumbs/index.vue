<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import type { Breadcrumb } from '~/types'

interface Props {
  breadcrumbs: Breadcrumb[]
}

const props = defineProps<Props>()

const breadcrumbs = ref<Breadcrumb[]>(props.breadcrumbs)
</script>

<template>
  <BreadcrumbsWrapper>
    <nav>
      <ul class="flex gap-2 text-sm text-grey-light">
        <BreadcrumbsItem
          v-for="(breadcrumb, index) in breadcrumbs"
          :key="index"
          :breadcrumb="breadcrumb"
          :is-last="index < breadcrumbs.length - 1"
        />
      </ul>
    </nav>
  </BreadcrumbsWrapper>
</template>

<style scoped>

</style>
