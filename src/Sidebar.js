import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
        <span className='sidebar_hash'>#</span>
        <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="./banner-linkedin.avif" alt="" />
            <Avatar className='sidebar_avatar'/>
            <h2>Amit Rajeev Patil</h2>
            <h4>amitpatilk@gmail.com</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>2,300</p>
            </div>

            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>2,300</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p className='Recent'>Recent</p>
            {/* {recentItem('Amit')} */}
            {recentItem("react.js")}
            {recentItem("Programming")}
            {recentItem("Node.js")}
            {recentItem("Web Development")}
            {recentItem("Backend")}
        </div>
    </div>
  )
}

export default Sidebar
