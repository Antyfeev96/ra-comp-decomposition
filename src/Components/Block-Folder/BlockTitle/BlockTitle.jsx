import './BlockTitle.scss';
import PropTypes from 'prop-types'

export default function BlockTitle({ title }) {
  return (
    <span className="block__title">{title}</span>
  )
}


BlockTitle.propTypes = {
  title: PropTypes.string.isRequired
}