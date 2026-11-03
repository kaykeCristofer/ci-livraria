import { useEffect, useState } from 'react'
import { Icon } from './Icon'

export function Header({ cartCount, onOpenCart, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [bump, setBump] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (cartCount === 0) return
    setBump(true)
    const t = setTimeout(() => setBump(false), 400)
    return () => clearTimeout(t)
  }, [cartCount])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#topo" className="brand" aria-label="Livraria TDD, início">
          <span className="brand__mark">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M8 8h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H8z" />
              <path d="M24 8h-3a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h3z" opacity=".65" />
            </svg>
          </span>
          <span className="brand__name">
            Livraria <em>TDD</em>
          </span>
        </a>

        <nav className="nav" aria-label="Seções">
          <a href="#catalogo">Catálogo</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <div className="header__actions">
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Usar tema claro' : 'Usar tema escuro'}
            title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button className="cart-btn" onClick={onOpenCart} aria-label={`Abrir carrinho, ${cartCount} itens`}>
            <Icon name="bag" />
            <span className="cart-btn__label">Carrinho</span>
            <span className={`cart-btn__count ${bump ? 'is-bumping' : ''}`}>{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
