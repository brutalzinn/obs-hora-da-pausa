import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <img src="https://http.cat/404"></img>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}