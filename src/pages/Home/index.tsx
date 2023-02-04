import HomeImage from '../../assets/imgs/home-image.png';
import DefaultButton from '../../components/DefaultButton';
import './styles.css';

const Home = () => {
  return (
    <div className="container-lg mt-3">
      <div id="home-card-container" className="secondary-bg-color px-2 py-4 text-center mb-3">
        <img src={ HomeImage } alt="Car" className="img-fluid mb-3" />
        <h1 className="mb-3">O carro perfeito para você</h1>
        <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
      </div>
      <div id="bottom-home-card-container" className="third-bg-color p-4">
        <div id="home-button-container">
          <DefaultButton text="Ver Catálogo" />
        </div>
        <p className="fourth-color text-center mb-0">Comece agora a navegar</p>
      </div>
    </div>
  );
}

export default Home;