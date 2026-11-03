import { useEffect, useRef } from 'react'
import { FREE_SHIPPING, formatPrice } from '../data/books'
import { BookCover } from './BookCover'
import { Icon } from './Icon'

export function CartDrawer({ open, onClose, cart, onCheckout }) {
  const closeRef = useRef(null)
  const rootRef = useRef(null)
  const missing = Math.max(0, FREE_SHIPPING - cart.total)
  const progress = Math.min(1, cart.total / FREE_SHIPPING)

  // `inert` impede foco/tab no painel fechado (React 18 não conhece a prop).
  useEffect(() => {
    rootRef.current?.toggleAttribute('inert', !open)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <div ref={rootRef} className={`drawer-root ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="overlay" onClick={onClose} />
      <aside className="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <header className="drawer__head">
          <h2 id="drawer-title">
            Seu carrinho <span className="drawer__count">{cart.count}</span>
          </h2>
          <button ref={closeRef} className="icon-btn" onClick={onClose} aria-label="Fechar carrinho">
            <Icon name="close" />
          </button>
        </header>

        {cart.count === 0 ? (
          <div className="drawer__empty">
            <div className="drawer__empty-art">
              <Icon name="bag" size={40} />
            </div>
            <p className="empty__title">Carrinho vazio</p>
            <p>Escolha um livro no catálogo para começar.</p>
            <button className="btn btn--ghost" onClick={onClose}>
              Continuar navegando
            </button>
          </div>
        ) : (
          <>
            <div className="shipping">
              <p>
                <Icon name="truck" size={18} />
                {missing > 0 ? (
                  <>
                    Faltam <strong>{formatPrice(missing)}</strong> para o frete grátis
                  </>
                ) : (
                  <strong>Você ganhou frete grátis!</strong>
                )}
              </p>
              <div className="shipping__bar">
                <span style={{ transform: `scaleX(${progress})` }} />
              </div>
            </div>

            <ul className="lines">
              {cart.lines.map(({ book, quantity }) => (
                <li key={book.isbn} className="line">
                  <BookCover book={book} size="sm" />
                  <div className="line__info">
                    <p className="line__title">{book.title}</p>
                    <p className="line__author">{book.authorShort ?? book.author}</p>
                    <div className="stepper">
                      <button onClick={() => cart.remove(book.isbn)} aria-label={`Remover um ${book.title}`}>
                        <Icon name="minus" size={16} />
                      </button>
                      <span aria-live="polite">{quantity}</span>
                      <button onClick={() => cart.add(book.isbn)} aria-label={`Adicionar mais um ${book.title}`}>
                        <Icon name="plus" size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="line__side">
                    <span className="price">{formatPrice(book.price * quantity)}</span>
                    <button
                      className="line__remove"
                      onClick={() => cart.removeAll(book.isbn)}
                      aria-label={`Tirar ${book.title} do carrinho`}
                    >
                      <Icon name="trash" size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="drawer__foot">
              <dl className="summary">
                <div>
                  <dt>Subtotal</dt>
                  <dd>{formatPrice(cart.total)}</dd>
                </div>
                <div>
                  <dt>Frete</dt>
                  <dd>{missing > 0 ? formatPrice(19.9) : 'Grátis'}</dd>
                </div>
                <div className="summary__total">
                  <dt>Total</dt>
                  <dd>{formatPrice(cart.total + (missing > 0 ? 19.9 : 0))}</dd>
                </div>
              </dl>
              <button className="btn btn--primary btn--block" onClick={onCheckout}>
                Finalizar pedido <Icon name="arrow" size={18} />
              </button>
              <button className="link-btn" onClick={cart.clear}>
                Esvaziar carrinho
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}
