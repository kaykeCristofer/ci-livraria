export function BookCover({ book, size = 'md', className = '' }) {
  const { bg, fg, accent, pattern } = book.cover
  return (
    <div
      className={`cover cover--${size} cover--${pattern} ${className}`}
      style={{ '--c-bg': bg, '--c-fg': fg, '--c-accent': accent }}
      aria-hidden="true"
    >
      <div className="cover__art" />
      {size !== 'sm' && (
        <div className="cover__text">
          <span className="cover__title">{book.title}</span>
          <span className="cover__author">{book.authorShort ?? book.author}</span>
        </div>
      )}
      <span className="cover__spine" />
      <span className="cover__shine" />
    </div>
  )
}
