import Vue from 'vue'

const dateFilter = (value) => {
  const date = new Date(value)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}/${month}/${day}`
}

Vue.filter('dateFilter', dateFilter)
