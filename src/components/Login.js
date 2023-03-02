import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

export default function Login(){
  return(

    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <h2 className="login__title">BPR Dept Login</h2>
          <form className="login">
            <div className="login__field">
              <FontAwesomeIcon className="login__icon" icon={faUser} />
              <input type="text" className="login__input" placeholder="username"/>
            </div>
            <div className="login__field">
            <FontAwesomeIcon className="login__icon" icon={faLock} />
              <input type="password" className="login__input" placeholder="password"/>
            </div>
            <button className="button login__submit">
              <span className="button__text">Login</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>       
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>    
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>    
      </div>
    </div>
  )
}
