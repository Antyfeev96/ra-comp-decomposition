import './News.scss'
import React from 'react'
import PropTypes from 'prop-types'
import NewsTitle from '../NewsTitle/NewsTitle'
import NewsItems from '../NewsItems/NewsItems'

export default function News(props) {
  return (
    <div className="news">
      <NewsTitle />
      <NewsItems />
    </div>
  )
}

News.propTypes = {

}