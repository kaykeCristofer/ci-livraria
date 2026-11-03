import { useCallback, useEffect, useRef, useState } from 'react'
import { useCart } from './hooks/useCart'
import { useTheme } from './hooks/useTheme'
import { useReveal } from './hooks/useReveal'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Catalog } from './components/Catalog'
import { Footer } from './components/Footer'
import { BookModal } from './components/BookModal'
import { CartDrawer } from './components/CartDrawer'
import { Toast } from './components/Toast'

export default function App() {
  const cart = useCart()
  const [theme, toggleTheme] = useTheme()
  const [cartOpen, setCartOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const [toast, setToast] = useState(null)
  const toastTimer = useRef()

  useReveal()

  const notify = (message) => {
    clearTimeout(toastTimer.current)
    setToast({ id: Date.now(), message })
    toastTimer.current = setTimeout(() => setToast(null), 2600)
  }

  const addBook = (book) => {
    cart.add(book.isbn)
    notify(`“${book.title}” foi para o carrinho`)
  }

  const quantityOf = (isbn) => cart.lines.find((l) => l.book.isbn === isbn)?.quantity ?? 0

  const closeCart = useCallback(() => setCartOpen(false), [])
  const closeModal = useCallback(() => setSelected(null), [])

  const checkout = () => {
    cart.clear()
    setCartOpen(false)
    notify('Pedido simulado com sucesso. Obrigado!')
  }

  // Trava a rolagem da página enquanto há um painel aberto.
  useEffect(() => {
    document.body.classList.toggle('no-scroll', cartOpen || !!selected)
  }, [cartOpen, selected])

  return (
    <>
      <a href="#catalogo" className="skip-link">
        Pular para o catálogo
      </a>
      <Header
        cartCount={cart.count}
        onOpenCart={() => setCartOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero onOpenBook={setSelected} />
        <Catalog quantityOf={quantityOf} onAdd={addBook} onOpen={setSelected} />
      </main>
      <Footer />

      <BookModal
        book={selected}
        onClose={closeModal}
        onAdd={addBook}
        inCart={selected ? quantityOf(selected.isbn) : 0}
      />
      <CartDrawer open={cartOpen} onClose={closeCart} cart={cart} onCheckout={checkout} />
      <Toast toast={toast} />
    </>
  )
}
