import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <p>{"oops: " + error}</p>
    </div>
  );
};

export default ErrorPage;
