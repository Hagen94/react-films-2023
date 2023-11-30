import { Link } from 'react-router-dom';
const AppLink = ({to,children, ...props}) => {
  return (
    <Link to={to} {...props}>{children}</Link>
  )
}

export default AppLink