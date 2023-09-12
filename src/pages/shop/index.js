import Product from '../../partials/product';

function Shop() {
    return (
        <section className="shop_section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        <Product/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Shop;