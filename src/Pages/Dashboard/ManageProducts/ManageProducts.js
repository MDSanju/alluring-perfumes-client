import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import ScaleLoader from "react-spinners/ScaleLoader";
import Pagination from "@mui/material/Pagination";
import { MyOrderPageTitle } from "../../styles/Random.styles";
import ManageProduct from "../ManageProduct/ManageProduct";
import { toast, ToastContainer } from "react-toastify";
import "./ManageProducts.css";

// manage products for admin
const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const [pageCount, setPageCount] = useState(0);
  const [pageData, setPageData] = useState(0);

  const history = useHistory();

  const dataSize = 3;

  const notify = () =>
    toast.success("Delete Confirm!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    fetch(`http://localhost:5000/perfumes?page=${pageData}&&size=${dataSize}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.perfumes);
        const count = data.count;
        const pageNumber = Math.ceil(count / dataSize);
        setPageCount(pageNumber);
      });
  }, [pageData]);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm(
      "Are you sure that you want to Delete this Product forever?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/perfumes/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setDeleteSuccess(true);
            notify();
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };

  const handleAddProduct = () => {
    history.push("/newDashboard/addProduct");
  };

  return (
    <div style={{ marginTop: "36px" }}>
      <MyOrderPageTitle>
        <div className="orders_placed_title">Delete any product needed</div>
        <Button onClick={handleAddProduct} variant="text">
          Add Product
        </Button>
      </MyOrderPageTitle>
      {products.length ? (
        <>
          {products.map((product) => (
            <ManageProduct
              key={product._id}
              product={product}
              handleDeleteProduct={handleDeleteProduct}
            />
          ))}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "45px",
          }}
        >
          <ScaleLoader color={"#003665"} size={85} />
        </div>
      )}
      {deleteSuccess && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
      <div
        style={{
          marginTop: "3rem",
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "right",
        }}
      >
        <Pagination
          count={pageCount}
          onChange={(event, value) => setPageData(value - 1)}
        />
      </div>
    </div>
  );
};

export default ManageProducts;
