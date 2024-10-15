import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  const {icon: IconComponent, type, status, color} = children

  return (
    <li className="notificationItem">
      <div className="textContainer">
        <div className="logoAndTypeContainer">
          <IconComponent className="icon-style" style={{color}} />{' '}
          {/* Render icon */}
          <h1 style={{color}} className="heading-style">
            {type}
          </h1>
        </div>
        <p className="statusStyle">{status}</p>
      </div>
      <GrFormClose className="close-button" />
    </li>
  )
}

export default Notification
