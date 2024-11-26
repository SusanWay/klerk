<script setup lang="ts">
import { useEventStore } from '~/stores/eventStore'
import type { Rubric } from '~/types'

const eventStore = useEventStore()

onMounted(() => {
  eventStore.fetchRubrics()
})
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-6 py-8">
    <RubricNavBar />
    <RubricWrapper>
      <Rubric v-for="(rubric, index) in eventStore.rubrics" :key="index" v-bind="rubric" />
    </RubricWrapper>
  </div>
</template>

<style scoped>

</style>