import { Icon } from './Icon'

export function Toast({ toast }) {
  return (
    <div className="toast-region" aria-live="polite">
      {toast && (
        <div className="toast" key={toast.id}>
          <span className="toast__icon">
            <Icon name="check" size={16} />
          </span>
          {toast.message}
        </div>
      )}
    </div>
  )
}
