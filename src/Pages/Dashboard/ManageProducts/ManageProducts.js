import React, { useEffect, useState } from "react";
// manage products for admin
const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  // preloading spinner
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    fetch("https://mysterious-brook-12035.herokuapp.com/perfumes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    setIsloading(false);
  }, []);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm(
      "Are you sure that you want to Delete this Product forever?"
    );
    if (proceed) {
      fetch(`https://mysterious-brook-12035.herokuapp.com/perfumes/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Delete Confirm!");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <div style={{ marginTop: "75px", marginBottom: "145px" }}>
      <h2 className="container fw-bold mb-5 text-center">
        All {products.length} Perfumes on this Website!
      </h2>
      {!isLoading && (
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
            {products.map((product) => (
              <div key={product._id} product={product}>
                <div className="col">
                  <div className="card card-custom">
                    <img
                      style={{ height: "340px" }}
                      src={product.img}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h2 className="card-title">{product.name}</h2>
                      <p className="fs-4 text-primary">
                        Price: ${product.price}
                      </p>
                      <p className="card-text">{product.description}</p>
                    </div>
                    <div className="mt-4 mb-4 d-flex justify-content-center">
                      <button
                        onClick={() => handleDeleteProduct(product._id)}
                        className="btn btn-danger mx-auto"
                      >
                        Delete Forever
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {isLoading && (
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "18vh" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
