import './BlockWeather.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'

function BlockWeather({ temperature }) {
  return (
    <div className="block__weather">
      <FontAwesomeIcon icon={faCloudRain} size="3x"/>
      <div>+{temperature}°</div>
      <div>
        <div>Утром +{temperature}°,</div>
        <div>Днём +{temperature + 3}°</div>
      </div>
    </div>
  )
}

BlockWeather.propTypes = {
  temperature: PropTypes.number.isRequired
}

export default BlockWeather

