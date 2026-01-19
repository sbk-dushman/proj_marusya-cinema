import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGanresStore = defineStore('ganre', {
  state: () => {
    return {
      // for initially empty lists
      ganreList: [
        'history',
        'horror',
        'scifi',
        'stand-up',
        'fantasy',
        'drama',
        'mystery',
        'family',
        'comedy',
        'romance',
        'music',
        'crime',
        'tv-movie',
        'documentary',
        'action',
        'thriller',
        'western',
        'animation',
        'war',
        'adventure',
      ] as string[],
      // for data that is not yet loaded
      ganre: null as ganreInfo | null,
    }
  },
  getters: {
    getGanres(state) {
      return state
    },
  },
})

interface ganreInfo {
  title: string
}
