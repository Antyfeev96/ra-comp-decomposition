import './NewsItems.scss';
import { nanoid } from 'nanoid';
import React from 'react'
import NewsItem from '../NewsItem/NewsItem';

const ITEMS = [
  'Бесполезная новость № 1',
  'Бесполезная новость № 2',
  'Бесполезная новость № 3',
  'Бесполезная новость № 4',
  'Бесполезная новость № 5',
]

export default function NewsItems() {
  return (
    <div className="news__items">
      {ITEMS.map((item) => <NewsItem key={nanoid('5')} item={item}/>)}
    </div>
  )
}