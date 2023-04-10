import React from 'react';
import '../HeaderStyles/NavbarStyle.css';


export default function navbar() {
  return (
    <div class="navbar">
        <div class="navbar__inner">
          <div class="navbar__tittle">Смирнов Григорий</div>
          <div class="navbar__search">serch(тут будет вектор)</div>
          <div class="navbar_menu">
            <div class="menu_text">Menu</div>
            <button class="burger" type="button" id="navToggle">
              <span class="burger__item"></span>
            </button>
          </div>
        </div>
      </div>
  )
}



