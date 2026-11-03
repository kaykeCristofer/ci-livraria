import { useMemo, useState } from 'react'
import { books, categories } from '../data/books'
import { useReveal } from '../hooks/useReveal'
import { BookCard } from './BookCard'
import { Icon } from './Icon'

const sorters = {
  destaque: () => 0,
  'menor-preco': (a, b) => a.price - b.price,
  'maior-preco': (a, b) => b.price - a.price,
  titulo: (a, b) => a.title.localeCompare(b.title, 'pt-BR'),
  ano: (a, b) => b.year - a.year,
}

const normalize = (s) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

export function Catalog({ quantityOf, onAdd, onOpen }) {
  const [category, setCategory] = useState('Todos')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('destaque')

  const visible = useMemo(() => {
    const q = normalize(query.trim())
    return books
      .filter((b) => category === 'Todos' || b.category === category)
      .filter((b) => !q || normalize(`${b.title} ${b.author}`).includes(q))
      .sort(sorters[sort])
  }, [category, query, sort])

  useReveal([visible])

  return (
    <section className="section" id="catalogo">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow">Catálogo</p>
          <h2 className="section__title">Estante da semana</h2>
          <p className="section__lead">Clique em uma capa para ler a sinopse.</p>
        </div>

        <div className="toolbar" data-reveal>
          <label className="search">
            <Icon name="search" size={18} />
            <input
              type="search"
              placeholder="Buscar por título ou autor"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Buscar livros"
            />
          </label>

          <div className="chips" role="group" aria-label="Filtrar por categoria">
            {categories.map((c) => (
              <button
                key={c}
                className={`chip ${category === c ? 'chip--active' : ''}`}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <label className="select">
            <span className="visually-hidden">Ordenar por</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="destaque">Destaques</option>
              <option value="menor-preco">Menor preço</option>
              <option value="maior-preco">Maior preço</option>
              <option value="titulo">Título (A–Z)</option>
              <option value="ano">Mais recentes</option>
            </select>
          </label>
        </div>

        <p className="results" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'livro' : 'livros'}
        </p>

        {visible.length > 0 ? (
          <div className="grid">
            {visible.map((book, i) => (
              <BookCard
                key={book.isbn}
                book={book}
                index={i}
                inCart={quantityOf(book.isbn)}
                onAdd={onAdd}
                onOpen={onOpen}
              />
            ))}
          </div>
        ) : (
          <div className="empty">
            <p className="empty__title">Nenhum livro encontrado</p>
            <p>Tente outro termo ou limpe os filtros.</p>
            <button
              className="btn btn--ghost"
              onClick={() => {
                setQuery('')
                setCategory('Todos')
              }}
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
