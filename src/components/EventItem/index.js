import './index.css'

const EventItem = props => {
  const {eventItem, onClickEventImage, isActive} = props
  const {imageUrl, name, registrationStatus, location, id} = eventItem
  const onClickEvent = () => {
    onClickEventImage(registrationStatus, id)
  }
  const activeClass = isActive ? 'active-tab' : ''
  return (
    <li className="eventItem-list">
      <button className="active-image-btn" onClick={onClickEvent} type="button">
        <img
          src={imageUrl}
          className={`eventItem-image ${activeClass} `}
          alt="event"
        />
      </button>

      <p className="eventItem-name"> {name} </p>
      <p className="eventItem-location"> {location} </p>
    </li>
  )
}
export default EventItem
