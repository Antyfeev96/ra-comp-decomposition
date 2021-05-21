import './BlockChannel.scss';
import PropTypes from 'prop-types'

export default function BlockChannel({ channel }) {
  return (
    <span className="block__channel">{channel}</span>
  )
}

BlockChannel.propTypes = {
  channel: PropTypes.string
}