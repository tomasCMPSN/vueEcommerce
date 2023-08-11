import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDbStore = defineStore('db', () => {
  const data = []
  const proudData = []
  const trendingData = []
  const product = {}
  const initialTags = []
  const filteredTags = ref([])
  const currentTag = ref("All")

  function fill() {
    import('../../db.json').then((r) => {
      this.data = r.default
      const proud = this.data.filter((item) => item.proud)
      this.proudData = proud
      const trending = this.data.filter((item) => item.trending)
      this.trendingData = trending
      const tags = this.data.map((a) => a.tag)
      this.initialTags = ['All', ...new Set(tags)]
    })
  }

  async function oneItem(productId) {
    const response = await fetch('../../db.json')
    this.data = await response.json()
    const filtered = this.data.filter((item) => item.id == productId)
    this.product = filtered
  }

  async function filterByTag(tag) {
    const response = await fetch('../../db.json')
    this.data = await response.json()
    if (tag == 'All') {
      return (this.filteredTags = this.data)
    } else {
      const filtered = this.data.filter((item) => item.tag == tag)
      this.filteredTags = filtered
    }
  }

  function changeTag(tag){
    this.currentTag = tag
  }

  return {
    data,
    proudData,
    trendingData,
    product,
    initialTags,
    filteredTags,
    currentTag,
    fill,
    oneItem,
    filterByTag,
    changeTag,
  }
})
