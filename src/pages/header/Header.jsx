import React from "react";
import {Navbar, Row, Icon} from 'react-materialize';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Row>  
      <Navbar className="grey darken-3">
            <div> 
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink className="Quero-Assistir" title="Quero Assistir" to='/quero-assistir'><Icon>note_add</Icon></NavLink></li>
              <li><NavLink title="Assistido" to='/assistido'><Icon>local_movies</Icon></NavLink></li>
              <li><NavLink title="Minha Conta" to='/my-account'><Icon>account_circle</Icon></NavLink></li>
            </div>
      </Navbar>
    </Row>
  )
}
export default Header;