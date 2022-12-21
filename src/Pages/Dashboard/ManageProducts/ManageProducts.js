import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import ScaleLoader from "react-spinners/ScaleLoader";
import Pagination from "@mui/material/Pagination";
import ManageProduct from "../ManageProduct/ManageProduct";
import { toast, ToastContainer } from "react-toastify";
import NavLogoPNG from "../../../images/webLogo.png";
import noSearchRes from "../../../images/no_search_result.png";
import { IoSearchOutline } from "react-icons/io5";
import {
  MyOrderPageTitle,
  NoSearchResultContainer,
  SearchBarField,
  SearchBarLogo,
  SearchFieldIcon,
  SearchLogoContainer,
} from "../../styles/Random.styles";
import "./ManageProducts.css";

// manage products for admin
const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [searchResults, setSearchResults] = useState(false);

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
    fetch(
      `https://alluring-perfumes-server.onrender.com/perfumes?page=${pageData}&&size=${dataSize}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.perfumes);
        const count = data.count;
        const pageNumber = Math.ceil(count / dataSize);
        setPageCount(pageNumber);
      });
  }, [pageData]);

  useEffect(() => {
    fetch("https://alluring-perfumes-server.onrender.com/allPerfumes")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  const handleDeleteProduct = (id) => {
    const proceed = window.confirm(
      "Are you sure that you want to Delete this Product forever?"
    );
    if (proceed) {
      fetch(`https://alluring-perfumes-server.onrender.com/perfumes/${id}`, {
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

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = allProducts.filter((element) =>
      element.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
    if (searchText === "") {
      setSearchResults(false);
    } else {
      setSearchResults(true);
    }
  };

  return (
    <div style={{ marginTop: "36px" }}>
      <MyOrderPageTitle>
        <div className="orders_placed_title">Delete any product below</div>
        <Button onClick={handleAddProduct} variant="text">
          Add Product
        </Button>
      </MyOrderPageTitle>
      <SearchBarLogo>
        <SearchLogoContainer>
          <img src={NavLogoPNG} alt="" />
        </SearchLogoContainer>

        <SearchBarField>
          <SearchFieldIcon>
            <IoSearchOutline color="#868282" />
          </SearchFieldIcon>
          <input type="text" placeholder="Search…" onChange={handleSearch} />
        </SearchBarField>
      </SearchBarLogo>
      <br />
      {allProducts.length ? (
        <>
          {searchResults ? (
            <>
              {displayProducts.length ? (
                <>
                  {displayProducts.map((product) => (
                    <ManageProduct
                      key={product._id}
                      product={product}
                      handleDeleteProduct={handleDeleteProduct}
                    />
                  ))}
                </>
              ) : (
                <>
                  <NoSearchResultContainer>
                    <img src={noSearchRes} alt="" />
                    <h4>Sorry, No search result found!</h4>
                  </NoSearchResultContainer>
                </>
              )}
            </>
          ) : (
            <>
              {products.map((product) => (
                <ManageProduct
                  key={product._id}
                  product={product}
                  handleDeleteProduct={handleDeleteProduct}
                />
              ))}
            </>
          )}
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
      {!searchResults && (
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
      )}
    </div>
  );
};

export default ManageProducts;
