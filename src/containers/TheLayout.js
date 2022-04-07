import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
//import { userContext } from '../context/UserContext'

const TheLayout = () => {
  // const user = localStorage.getItem("users")
  // if (user == "null") {
  //   return window.location = window.location.origin + '/#/login'
  // } else {
    return (
      <div className="c-app c-default-layout">
        <TheSidebar />
        <div className="c-wrapper">
          <TheHeader />
          <div className="c-body">
            <TheContent />
          </div>
          <TheFooter />
        </div>
      </div>
    )
  // }
}

export default TheLayout
