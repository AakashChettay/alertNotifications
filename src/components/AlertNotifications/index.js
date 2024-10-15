import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const notificationObjectList = [
  {
    id: 0,
    icon: AiFillCheckCircle, // Pass the actual icon component
    type: 'Success',
    status: 'You can access all the files in the folder',
    color: '#2dca73',
  },
  {
    id: 1,
    icon: RiErrorWarningFill, // Pass the actual icon component
    type: 'Error',
    status: 'Sorry, you are not authorized to have access to delete the file',
    color: '#ff0b37',
  },
  {
    id: 2,
    icon: MdWarning, // Pass the actual icon component
    type: 'Warning',
    status: 'Viewers of this file can see comments and suggestions',
    color: '#ffb800',
  },
  {
    id: 3,
    icon: MdInfo, // Pass the actual icon component
    type: 'Info',
    status: 'Anyone on the internet can view these files',
    color: '#0f81e0',
  },
]

class AlertNotifications extends Component {
  render() {
    return (
      <div className="main-bg-container">
        <h1 className="main-heading">Alert Notifications</h1>
        <ul className="notificationList">
          {notificationObjectList.map(notificationObj => (
            <Notification key={notificationObj.id}>
              {notificationObj}
            </Notification>
          ))}
        </ul>
      </div>
    )
  }
}

export default AlertNotifications
