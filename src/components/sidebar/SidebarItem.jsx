import React from 'react'

const SidebarItem = (props) => {
    return (
        <div className="sidebar_item">
          <div className="line_shadow">
            hi
          </div>
            <div className="sidebar_item_icon">
                <props.icon/>
            </div>
            <div className="sidebar_item_text">
                {props.text}
            </div>
            <div className="right_badge" style={{display:props.rightBadgeText?"block":"none"}}>
                {props.rightBadgeText}
            </div>
            <div className="right_upper_badge" style={{display:props.rightUpperBadgeText?"block":"none"}}>
                {props.rightUpperBadgeText}
            </div>
        </div>
    )
}

export default SidebarItem