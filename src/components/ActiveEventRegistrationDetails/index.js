import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {contsructEvenet, activeEvent} = props
  const initial = () => (
    <>
      <p className="initail-active-heading">
        {' '}
        Click on an event to view its registration details{' '}
      </p>
    </>
  )
  const register = () => (
    <div className="completed-regestered">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        className="completed-register-image"
        alt="registered"
      />
      <h1 className="completed-regestered-para">
        {' '}
        You have already register for thie event{' '}
      </h1>
    </div>
  )
  const pendingRegister = () => (
    <div className="completed-regestered">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="pending-register-image"
        alt="yet to register"
      />
      <p className="pending-para">
        Use the Online IDE code editor to solve the given problem. Submit your
        code by running the below given submit command in the terminal. You can
        also publish your code using the publish command and open the URL link
      </p>
      <button className="register-btn" type="button">
        {' '}
        Register Here{' '}
      </button>
    </div>
  )
  const registerClosed = () => (
    <div className="completed-regestered">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        className="pending-register-image"
        alt="registrations closed"
      />
      <h1 className="completed-regestered-para">
        {' '}
        Registration are closed Now!{' '}
      </h1>
      <p className="closed-para">
        {' '}
        Stay tuned we will reponse the registration soon{' '}
      </p>
    </div>
  )

  switch (activeEvent) {
    case contsructEvenet.initial:
      return initial()
    case contsructEvenet.yetToRegister:
      return pendingRegister()
    case contsructEvenet.register:
      return register()
    case contsructEvenet.registerClosed:
      return registerClosed()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
