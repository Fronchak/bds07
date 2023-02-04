import ProductCard from "../../components/ProductCard";
import './styles.css';

const Catalog = () => {
  return (
    <div className="container-xxl mt-3 mt-md-4" id="catalog-container">
      <div className="row mb-4">
        <div className="col-12">
          <div id="catalog-input-card-container" className="text-center px-2 py-3 px-sm-3 py-sm-4 p-xl-4 third-bg-color default-card">
            <div className="input-group">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Digite a sua busca" 
                aria-label="Recipient's username" 
                aria-describedby="button-addon2"
              />
              <button 
                className="btn default-btn" 
                type="button" 
                id="button-addon2">Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2 g-md-3 g-lg-4">
        <div className="col">
          <ProductCard />
        </div>
        <div className="col">
          <ProductCard />
        </div>
        <div className="col">
          <ProductCard />
        </div>
        <div className="col">
          <ProductCard />
        </div>
        <div className="col">
          <ProductCard />
        </div>
        <div className="col">
          <ProductCard />
        </div>
        <div className="col">
          <ProductCard />
        </div>
        <div className="col">
          <ProductCard />
        </div>
        <div className="col">
          <ProductCard />
        </div>
        <div className="col">
          <ProductCard />
        </div>
        <div className="col">
          <ProductCard />
        </div>
        <div className="col">
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Catalog;