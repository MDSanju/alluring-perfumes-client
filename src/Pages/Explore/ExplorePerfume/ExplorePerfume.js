import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { CardDetail, PICTURE } from "../../styles/Cards.styles";
// explore all orders page
const ExplorePerfume = ({ perfume }) => {
  const { _id, name, img, price, description } = perfume;
  const history = useHistory();

  const showName = name.split(" ")[0];

  const showDescription = description.slice(0, 36);

  const handlePurchase = () => {
    history.push(`/purchase/${_id}`);
  };
  return (
    <div>
      <li data-category="" data-price="">
        <PICTURE>
          <img src={img} alt="" />
        </PICTURE>
        <CardDetail>
          <p>
            <span>
              <i className="far fa-heart"></i>
            </span>
            <span>
              <i className="far fa-share-square"></i>
            </span>
            <span>
              <i className="fas fa-shopping-basket"></i>
            </span>
          </p>
          <strong>{showName}...</strong>
          <span>{showDescription}...</span>
          <div
            style={{ marginLeft: "20px", marginTop: "3px", fontSize: "14px" }}
          >
            <Link to={`/purchase/${_id}`}>See More</Link>
          </div>

          <small onClick={handlePurchase}>Purchase</small>
        </CardDetail>
        <h4>${price}</h4>
      </li>
    </div>
  );
};

export default ExplorePerfume;
