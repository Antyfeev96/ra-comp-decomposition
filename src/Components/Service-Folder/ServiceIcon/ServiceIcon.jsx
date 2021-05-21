import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

export default function ServiceIcon() {
  return (
    <div className="service__icon">
      <FontAwesomeIcon icon={faCircle} size='8x' />
    </div>
  )
}
