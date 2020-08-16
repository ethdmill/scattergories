import categories from '../data/categories'

export default function generateList () {
  let newList = []
  for (let i = 0; i < 12; i++) {
    let selection: string = categories[Math.round(Math.random() * (categories.length - 1))]
    newList.push(selection)
  }
  return newList
}