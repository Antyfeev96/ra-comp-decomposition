import './Block.scss'
import PropTypes from 'prop-types'

export default function Block(props) {
  return (
    <div className="block">
      {props.children}
    </div>
  )
}

Block.propTypes = {

}