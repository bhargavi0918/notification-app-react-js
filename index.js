const Notification = props => {
  //  Write your code here.
  const containerClassName ={`notification-container ${className}`}
  return{
      <div className = {containerClassName}>
          <img className="icon" src={iconUrl}/>
          <p className = "message">{message}</p>
      </div>
  }
}

const element = (
  //  Write your code here.
  <div class="notifications-container">
      <h1 class="main-heading">Notifications</h1>
      <div class="container-list">
          <div containerClassNameText = "Information Message" containerClassNameText = "information-message">
              <img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" class="image" />
          </div>
          <div containerClassName = "Success Message" containerClassNameText="success-message">
              <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" class="image" />
          </div>
          <div containerClassName = "Warning Message" containerClassNameText="warning-message">
              <img src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" class="image" />
          </div>
          <div containerClassName = "Error Message" containerClassNameText="danger-message">
              <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" class="image" />
          </div>
      </div>
  </div>

);

ReactDOM.render(element, document.getElementById('root'))
 