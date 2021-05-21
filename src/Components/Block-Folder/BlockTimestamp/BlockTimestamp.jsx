import './BlockTimestamp.scss';
import PropTypes from 'prop-types'

export default function BlockTimestamp({ timestamp }) {
  return (
    <span>{timestamp}</span>
  )
}

BlockTimestamp.propTypes = {
  timestamp: PropTypes.string
}
