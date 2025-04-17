// Auth0Provider.tsx
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
type Auth0ProviderWithNavigateProps = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const domain = "dev-5idjbcfpve83ru7n.us.auth0.com" ; // your Auth0 domain
  const clientId = "TilnqfCELoCzWl904qz6GqLXhSQfBjUq"; // your Auth0 client ID;
  const redirectUri = "http://localhost:5173/callback"; // make sure the port matches your server
  
  // This function will be called after the user is redirected back to your app
  const onRedirectCallback = (appState?: { returnTo?: string }) => {
    navigate((appState?.returnTo) || window.location.pathname);
  };
  // Check if domain, clientId, and redirectUri are defined
  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    // Auth0Provider is a wrapper that provides authentication context to your app
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        scope: "openid profile email",
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

// This component wraps the Auth0Provider and provides it with the navigate function from react-router-dom
export default Auth0ProviderWithNavigate;