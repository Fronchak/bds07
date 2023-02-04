import { useRouteError } from 'react-router-dom';
import './styles.css';

const DefaultErrorComponent = () => {
  
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id="error-component" className="text-center third-bg-color p-2 p-md-3 p-lg-4 p-xl-5">
      <h1 className="secondary-color">Oops!</h1>
      <p className="secondary-color">Sorry, an unexpected error has occurred.</p>
      <div className="alert alert-danger" role="alert">
        <i>{error.statusText || error.message}</i>
      </div>
    </div>
  );
}

export default DefaultErrorComponent;