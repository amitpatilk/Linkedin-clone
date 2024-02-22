import React from 'react'
import "./HeaderOption.css";
import { Avatar } from '@mui/material';

function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className='HeaderOption_icon'/>}
        {avatar && (
            <Avatar className='HeaderOption_icon' src={avatar}/>
        )}
        <h3 className='HeaderOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
