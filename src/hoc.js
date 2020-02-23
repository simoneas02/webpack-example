import React from 'react'
import ReactDOM from 'react-dom'

const Info = ({ info }) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {info}</p>
  </div>
)

const withAdminWarning = WrappedComponent => props => (
  <div>
    {props.isAdmin && <p>This is private info. Please don't share</p>}
    <WrappedComponent {...props} />
  </div>
)

const requireAuthentication = WrappedComponent => props => (
  <div>
    {props.isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : (
      <p>Please login to view the info</p>
    )}
  </div>
)

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(
//   <AdminInfo isAdmin={false} info="details" />,
//   document.getElementById('root')
// )

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="details" />,
  document.getElementById('root')
)
