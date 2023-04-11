import React from 'react'
import Col1 from './ColsComponents/Col1'
import Col2 from './ColsComponents/Col2'
import Col3 from './ColsComponents/Col3'
import '../WhatidosStyles/WorkStyle.css'

export default function WorksComponent() {
  return (
    <div className = 'container'>
        <Col1/>
        <Col2/>
        <Col3/>
    </div>
  )
}
