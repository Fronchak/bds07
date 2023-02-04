import DefaultErrorComponent from "../../components/DefaultErrorComponent";
import Navbar from "../../components/Navbar";
import './styles.css';

const DefaultErrorPage = () => {
  return (
    <>
      <Navbar />
      <div id="error-card-container" className="container mt-3 mt-sm-4 mt-md-5">
        <DefaultErrorComponent />
      </div>
    </>
  );
}

export default DefaultErrorPage;