import { FREE_SHIPPING, books, categories, formatPrice } from '../data/books'
import { BookCover } from './BookCover'
import { Icon } from './Icon'

const featured = ['978-8576082675', '978-0321146533', '978-8582601037'].map((isbn) =>
  books.find((b) => b.isbn === isbn),
)

export function Hero({ onOpenBook }) {
  return (
    <section className="hero" id="topo">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">
            Livros que passam em <em>todos</em> os testes.
          </h1>
          <p className="hero__lead">
            Clássicos de engenharia de software — de TDD a arquitetura, de refatoração a entrega
            contínua — escolhidos para quem leva o ofício a sério.
          </p>
          <div className="hero__cta">
            <a href="#catalogo" className="btn btn--primary">
              Ver catálogo <Icon name="arrow" size={18} />
            </a>
            <a href="#sobre" className="btn btn--ghost">
              Sobre a livraria
            </a>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>Títulos</dt>
              <dd>{books.length}</dd>
            </div>
            <div>
              <dt>Categorias</dt>
              <dd>{categories.length - 1}</dd>
            </div>
            <div>
              <dt>Frete grátis</dt>
              <dd>
                <small>acima de </small>
                {formatPrice(FREE_SHIPPING).replace(',00', '')}
              </dd>
            </div>
          </dl>
        </div>

        <div className="hero__stack" aria-label="Livros em destaque">
          {featured.map((book, i) => (
            <button
              key={book.isbn}
              className={`hero__book hero__book--${i}`}
              onClick={() => onOpenBook(book)}
              aria-label={`Ver detalhes de ${book.title}`}
            >
              <BookCover book={book} size="lg" />
            </button>
          ))}
          <div className="hero__shelf" />
        </div>
      </div>
    </section>
  )
}
