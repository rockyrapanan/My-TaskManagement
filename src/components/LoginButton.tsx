// LoginButton.tsx
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

// LoginButton.tsx
// This component is responsible for rendering the login button and handling the login process using Auth0.
const LoginButton: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  // This function is called when the user clicks the login button. It redirects the user to the Auth0 login page.
  // The appState parameter is used to specify where the user should be redirected after logging in.
  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/profile",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };
  // This condition checks if the user is authenticated. If they are not, it renders the login button.
  // If the user is authenticated, it returns null (no button is rendered).
  if(!isAuthenticated) return (<Button onClick={handleLogin}>Log In</Button>)
  return null;
};

// This component is exported as the default export of the module. This allows it to be imported and used in other parts of the application.
// The LoginButton component is a functional component that uses the useAuth0 hook to access the authentication context provided by Auth0.
export default LoginButton;