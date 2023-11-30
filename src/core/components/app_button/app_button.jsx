

const AppButton = ({children, ...props}) => { //rest operator
  return <button {...props}>{children}</button>;//spread operator
  
}

export default AppButton;