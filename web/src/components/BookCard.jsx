import { formatPrice } from '../data/books'
import { BookCover } from './BookCover'
import { Icon } from './Icon'

export function BookCard({ book, inCart, onAdd, onOpen, index }) {
  return (
    <article className="card" data-reveal style={{ '--i': index % 8 }}>
      <button className="card__cover" onClick={() => onOpen(book)} aria-label={`Ver detalhes de ${book.title}`}>
        <BookCover book={book} />
      </button>
      <div className="card__body">
        <p className="card__meta">
          <span className="tag">{book.category}</span>
          <span>{book.year}</span>
        </p>
        <h3 className="card__title">
          <button onClick={() => onOpen(book)}>{book.title}</button>
        </h3>
        <p className="card__author">{book.author}</p>
        <div className="card__foot">
          <span className="price">{formatPrice(book.price)}</span>
          <button
            className={`add-btn ${inCart ? 'add-btn--in' : ''}`}
            onClick={() => onAdd(book)}
            aria-label={`Adicionar ${book.title} ao carrinho`}
          >
            <Icon name={inCart ? 'check' : 'plus'} size={18} />
            <span>{inCart ? `${inCart} no carrinho` : 'Adicionar'}</span>
          </button>
        </div>
      </div>
    </article>
  )
}
