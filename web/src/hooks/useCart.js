import { useEffect, useMemo, useState } from 'react'
import { bookByIsbn } from '../data/books'

const KEY = 'livraria:carrinho'

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY))
    return Array.isArray(saved) ? saved.filter((isbn) => bookByIsbn[isbn]) : []
  } catch {
    return []
  }
}

// Mesma ideia do ShoppingCart em livraria.py: uma lista de itens com add/remove/total.
export function useCart() {
  const [items, setItems] = useState(load)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items))
    } catch {
      /* armazenamento indisponível: o carrinho vive só na memória */
    }
  }, [items])

  const add = (isbn) => setItems((prev) => [...prev, isbn])

  const remove = (isbn) =>
    setItems((prev) => {
      const i = prev.lastIndexOf(isbn)
      return i < 0 ? prev : [...prev.slice(0, i), ...prev.slice(i + 1)]
    })

  const removeAll = (isbn) => setItems((prev) => prev.filter((x) => x !== isbn))

  const clear = () => setItems([])

  const lines = useMemo(() => {
    const qty = new Map()
    for (const isbn of items) qty.set(isbn, (qty.get(isbn) ?? 0) + 1)
    return [...qty].map(([isbn, quantity]) => ({ book: bookByIsbn[isbn], quantity }))
  }, [items])

  const total = useMemo(() => items.reduce((sum, isbn) => sum + bookByIsbn[isbn].price, 0), [items])

  return { items, lines, count: items.length, total, add, remove, removeAll, clear }
}
