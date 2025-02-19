import { Link ,useRouteError} from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-container">
      <h3>{err.status} : {err.statusText}</h3>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-button">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
