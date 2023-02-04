import HomeImage from '../../assets/imgs/home-image.png';
import DefaultButton from '../../components/DefaultButton';
import './styles.css';

const Home = () => {
  return (
    <div className="container-xxl mt-3 mt-sm-4">
      <div id="home-card-container" className="secondary-bg-color px-2 py-4 py-md-5 p-xxl-5 text-center mb-3 mb-md-4 row mx-0 align-items-center">
        <div className="col-12 col-xxl-5 order-xxl-1">
          <img src={ HomeImage } alt="Car" className="img-fluid mb-3 mb-xxl-0" />
        </div>
        <div className="col-12 col-xxl-7">
          <h1 className="mb-3 mb-sm-1 text-xxl-start">O carro perfeito para você</h1>
          <p className="text-xxl-start">Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
        </div>
      </div>
      <div id="bottom-home-card-container" className="third-bg-color p-4 px-sm-5">
        <div id="home-button-container">
          <DefaultButton text="Ver Catálogo" />
        </div>
        <p className="fourth-color mb-0">Comece agora a navegar</p>
      </div>
    </div>
  );
}

export default Home;