import ProductCard from "../../components/ProductCard";


const Catalog = () => {
  return (
    <div className="container-xxl mt-3 mt-md-4" id="catalog-container">
      <div className="row mb-4">
        <div className="col-12">
          <div className="input-group mb-3">
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