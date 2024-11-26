import { defineStore } from 'pinia'
import axios from 'axios'
import type { Rubric } from '~/types'

export const useEventStore = defineStore('eventStore', {
  state: () => ({
    rubrics: [] as Rubric[],
    loading: false,
    error: null as string | null,
    isFullData: false,
    selectedRubrics: [] as number[],
  }),

  actions: {
    async fetchRubrics() {
      this.loading = true
      this.error = null

      let url = 'https://www.klerk.ru/yindex.php/v3/event/rubrics'

      if (this.isFullData)
        url += '?allowEmpty=1'

      try {
        const response = await axios.get(url)
        this.rubrics = response.data as Rubric[]
      }
      catch (err) {
        this.error = `Ошибка при загрузке данных: ${err.message}`
      }
      finally {
        this.loading = false
      }
    },
    setFullData(state: boolean) {
      this.isFullData = state
      this.fetchRubrics()
    },
    getSelectedRubric(item: Rubric) {
      this.selectedRubrics.push(item.id)

      if (item.children)
        item.children.forEach(children => this.getSelectedRubric(children))
    },
    removeSelectedRubric(item: Rubric) {
      this.selectedRubrics = this.selectedRubrics.filter(num => num !== item.id)

      if (item.children)
        item.children.forEach(children => this.removeSelectedRubric(children))
    },
  },
})
