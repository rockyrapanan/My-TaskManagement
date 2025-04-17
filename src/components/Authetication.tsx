//AuthenticationGuard.tsx
import { withAuthenticationRequired } from "@auth0/auth0-react";
type AuthenticationGuardProps = {
    component: React.ComponentType;
}
/// This component is used to protect routes that require authentication
/// It uses the withAuthenticationRequired HOC from Auth0 to wrap the component
const Authentication: React.FC<AuthenticationGuardProps> = ({component})=>{
    const Component = withAuthenticationRequired(component,{
        onRedirecting: () => <div>Redirecting you to the login page...</div>,
    })

    return(
        <Component />
    )
}
/// This component is exported as the default export of the module. This allows it to be imported and used in other parts of the application.
export default Authentication;