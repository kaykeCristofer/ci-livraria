import { FREE_SHIPPING, formatPrice } from '../data/books'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="footer" id="sobre">
      <div className="container footer__inner">
        <div className="footer__about">
          <p className="brand__name">
            Livraria <em>TDD</em>
          </p>
        </div>
        <div className="footer__meta">
          <p>
            <Icon name="truck" size={18} /> Frete grátis acima de {formatPrice(FREE_SHIPPING)}
          </p>
          <p className="footer__mono">© {new Date().getFullYear()} Livraria TDD</p>
        </div>
      </div>
    </footer>
  )
}
