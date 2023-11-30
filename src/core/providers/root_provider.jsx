
import { AuthProvider } from '../auth/provider/auth_provider'

const Root_provider = ({children}) => {
  return (
    <AuthProvider >
        {children}
    </AuthProvider>
  )
}

export default Root_provider