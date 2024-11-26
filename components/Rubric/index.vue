<script setup lang="ts">
import type { Rubric } from '~/types'
import { useEventStore } from '~/stores/eventStore'

const props = defineProps<Rubric>()

const eventStore = useEventStore()

const isOpen = ref<boolean>(false)

const totalCount = computed(() => {
  const getTotalCount = (item: Rubric): number => {
    let total = item.count
    if (item.children) {
      for (const child of item.children)
        total += getTotalCount(child)
    }
    return total
  }
  return getTotalCount(props)
})

const isSelected = computed(() => {
  return eventStore.selectedRubrics.find(number => number === props.id) !== undefined
})

function selectRubric() {
  if (isSelected.value) {
    eventStore.removeSelectedRubric(props)
  }
  else {
    eventStore.getSelectedRubric(props)
  }
}
</script>

<template>
  <div class="rounded-2xl border-2 bg-white px-4 py-6">
    <div class="flex justify-between items-center">
      <p>
        {{ title }}
      </p>
      <Button @click="isOpen = !isOpen">
        ▼
      </Button>
    </div>
    <div v-show="isOpen" class="border-t-2 pt-4">
      <div class="flex items-center justify-between">
        <p>
          url: {{ url }}
        </p>
        <Button class="border-black" :to="`https://www.klerk.ru${url}`">
          Перейти
        </Button>
      </div>
      <div class="flex gap-4">
        <p>
          Участвовать в подсчете:
        </p>
        <input
          :checked="isSelected"
          type="checkbox"
          class="border-gray-300 size-5 rounded"
          @click="selectRubric()"
        >
      </div>
      <p class="mt-2">
        id: {{ id }}
      </p>
      <p class="mt-2">
        Count: {{ count }}, Общий Count: {{ totalCount }}
      </p>
      <div v-if="children?.length" class="mt-4">
        <p>
          Потомки: {{ children.length }} шт.
        </p>
        <div class="grid grid-cols-1 gap-4 border-t-2 pt-4">
          <Rubric v-for="(rubric, index) in children" :key="index" v-bind="rubric" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>