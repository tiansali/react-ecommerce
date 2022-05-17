import './Notification.scss'

const Notification = (props) => {
    const message = props.message
    const color = { backgroundColor: props.color }

    if (!message) {
        return null
    }
    
    return(
        <div className='Notification' style={color}>
            <p className='Notification__message'>{message}</p>
        </div>
    )
}

export default Notification