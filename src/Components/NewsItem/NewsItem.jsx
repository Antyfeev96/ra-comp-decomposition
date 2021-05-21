import './NewsItem.scss';
import React from 'react'
import PropTypes from 'prop-types'
import NewsIcon from '../NewsIcon/NewsIcon';

export default function NewsItem({item}) {
  console.log(item);
  return (
    <div className='news__item'>
      <NewsIcon />
      <span className='news__text'>{item}</span>
    </div>
  )
}

NewsItem.propTypes = {

}
