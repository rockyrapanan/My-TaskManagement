import { useAuth0 } from "@auth0/auth0-react";
import PageLayout from "./PageLayout";
import { Col } from "react-bootstrap";
import { useEffect } from "react";


const ProfilePage: React.FC = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        console.log('token', token);
      } catch (error) {
        console.error('Error getting access token', error);
      }
    };

    if (isAuthenticated) {
      fetchToken();
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  if (!isAuthenticated) {
    return <div>Not authenticated</div>;
  }

  if (!user) {
    return <div>No user profile</div>;
  }

  return (
    <PageLayout>
      <h2>Profile Page</h2>
      <Col className="text-center">
        {user.picture && (
          <img
            src={user.picture}
            alt={user.name}
            className="profile-picture"
          />
        )}
        <h3>{user.name}</h3>
        <div className="profile-details">
          <div className="profile-details-container">
            {Object.keys(user).map((objKey, index) => (
              <p key={index}>
                <b>{objKey}</b>: {user[objKey as keyof typeof user]?.toString()}
              </p>
            ))}
          </div>
        </div>
      </Col>
    </PageLayout>
  );
};

export default ProfilePage;