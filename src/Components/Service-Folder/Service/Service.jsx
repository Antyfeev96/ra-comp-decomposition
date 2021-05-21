import './Service.scss';
import React from 'react'
import ServiceIcon from '../ServiceIcon/ServiceIcon';
import ServiceTitle from '../ServiceTitle/ServiceTitle';
import ServiceText from '../ServiceText/ServiceText';

export default function Service() {
  return (
    <div className='service'>
      <ServiceIcon />
      <ServiceTitle />
      <ServiceText />
    </div>
  )
}