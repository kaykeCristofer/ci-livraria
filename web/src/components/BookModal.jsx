import { useEffect, useRef } from 'react'
import { formatPrice } from '../data/books'
import { BookCover } from './BookCover'
import { Icon } from './Icon'

export function BookModal({ book, onClose, onAdd, inCart }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!book) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => document.removeEventListener('keydown', onKey)
  }, [book, onClose])

  if (!book) return null

  return (
    <div className="overlay overlay--center" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} className="icon-btn modal__close" onClick={onClose} aria-label="Fechar">
          <Icon name="close" />
        </button>
        <div className="modal__cover">
          <BookCover book={book} size="lg" />
        </div>
        <div className="modal__body">
          <p className="card__meta">
            <span className="tag">{book.category}</span>
            <span>{book.year}</span>
            <span>{book.pages} págs.</span>
          </p>
          <h2 id="modal-title" className="modal__title">
            {book.title}
          </h2>
          {book.subtitle && <p className="modal__subtitle">{book.subtitle}</p>}
          <p className="modal__author">por {book.author}</p>
          <p className="modal__blurb">{book.blurb}</p>
          <p className="modal__isbn">ISBN {book.isbn}</p>
          <div className="modal__foot">
            <span className="price price--lg">{formatPrice(book.price)}</span>
            <button className="btn btn--primary" onClick={() => onAdd(book)}>
              <Icon name="bag" size={18} />
              {inCart ? `Adicionar outro (${inCart})` : 'Adicionar ao carrinho'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
