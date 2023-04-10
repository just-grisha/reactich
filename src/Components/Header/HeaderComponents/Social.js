import React from 'react'
import { ReactComponent as Facebook } from "../../../Icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../../Icons/Instagram.svg";
import { ReactComponent as Twitter } from "../../../Icons/Twitter.svg";
import { ReactComponent as Behance } from "../../../Icons/Behane.svg";
import { ReactComponent as Dribbble } from "../../../Icons/Dribble.svg";
import { ReactComponent as ScrollDown } from "../../../Icons/ScrollDown.svg";
import '../HeaderStyles/SocialStyle.css'


export default function Social() {
  return (
    <div className="iconscroll">
    <div className="social">
      <div className="social__item" href="#" target="_blank">
        <div className="social__icon">
          <Facebook/>
        </div>
      </div>
      <div className="social__item" href="#" target="_blank">
        <div className="social__icon">
          <Instagram/>
        </div>
      </div>
      <div className="social__item" href="#" target="_blank">
        <div className="social__icon">
          <Twitter/>
        </div>
      </div>
      <div className="social__item" href="#" target="_blank">
        <div className="social__icon">
          <Dribbble/>
        </div>
      </div>
      <div className="social__item" href="#" target="_blank">
        <div className="social__icon">
          <Behance/>
        </div>
      </div>

    </div>
    <div className='scroll'>
        <ScrollDown/>
    </div>
  </div>
  )
}
