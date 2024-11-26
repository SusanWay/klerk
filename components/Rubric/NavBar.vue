<script setup lang="ts">
import { useEventStore } from '~/stores/eventStore'
import type {Rubric} from "~/types";

const eventStore = useEventStore()
const isChecked = ref(false)

watch(isChecked, (newValue) => {
  eventStore.setFullData(newValue)
})

const count = computed(() => {
  let summ = 0

  function getSumm(item: Rubric) {
    if (eventStore.selectedRubrics.includes(item.id))
      summ += item.count

    if (item.children)
      item.children.forEach(children => getSumm(children))
  }

  eventStore.rubrics.forEach(rubric => getSumm(rubric))

  return summ
})
</script>

<template>
  <div class="grid w-11/12 grid-cols-1 gap-6 rounded-2xl bg-blue-light/50 p-6">
    <div class="flex gap-4">
      <p>
        Загружать пустые рубрики:
      </p>
      <input
        v-model="isChecked"
        type="checkbox"
        class="border-gray-300 size-5 rounded"
      >|
      <p>
        Сумму цифр выбранных элементов: {{ count }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>