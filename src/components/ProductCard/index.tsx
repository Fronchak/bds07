import { Link } from 'react-router-dom';
import CardImage from '../../assets/imgs/card-image.png';
import DefaultButton from '../DefaultButton';
import './styles.css';

const ProductCard = () => {

  return (
    <div className="card product-card third-bg-color default-card">
      <img src={ CardImage } alt="Product" className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title text-black fw-bold text-center mb-3">Audi Supra TT</h4>
        <p className="card-text fourth-color mb-4"><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</i></p>
        <Link to={"1"}>
          <DefaultButton text='Comprar' />
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;