import { useRouteError } from "react-router-dom";

const RouteError = () => {
  let error = useRouteError();
  return <div>{error.data}</div>;
};

export default RouteError;
