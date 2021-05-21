import './BlockText.scss';
import PropTypes from 'prop-types'

export default function BlockText(props) {
  return (
    <div className="block__text">
      {props.children}
    </div>
  )
}

BlockText.propTypes = {

}
