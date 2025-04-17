//CallbackPage.tsx
import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout";

const CallBack: React.FC = () => {
    {/* The useAuth0 hook provides access to the Auth0 context, which contains information about the authentication state and methods for logging in and out. */}
    const { error } = useAuth0();
    {/* The error object contains information about any errors that occurred during the authentication process. */}
    {/* If there is an error, we display an error message. */}
    {/* If there is no error, we simply render the page layout. */}
    if (error) {
        return <div>Oops... {error.message}</div>;
    }
    {/* The PageLayout component is a wrapper for the page content. It can be used to apply consistent styling and layout across different pages of the application. */}
    {/* In this case, we are using it to wrap the content of the CallBack page. */}
  return (
    <PageLayout>
      <h1>Call back Page</h1>
    </PageLayout>
  );
};
    
{/* The CallBack component is exported as the default export of the module. This allows it to be imported and used in other parts of the application. */}
export default CallBack;