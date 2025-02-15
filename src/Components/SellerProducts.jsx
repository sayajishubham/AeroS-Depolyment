import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../Context/Search";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const SellerProducts = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(null);
  const [order, setOrder] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { search } = useContext(SearchContext) || { search: "" };

  const getProductsData = () => {
    setLoading(true);
    axios
      .get("https://bk-aeropostale-json-server-1.onrender.com/sellerProducts", {
        params: {
          _page: page,
          _limit: 8,
          category: category,
          _sort: "price",
          _order: order,
          q: search,
        },
      })
      .then((res) => {
        setProductData(res.data);
        const totalItems = parseInt(res.headers["x-total-count"], 10);
        setTotalPages(Math.ceil(totalItems / 10));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const DeleteProductsBtn = (id) => {
    axios
      .delete(
        `https://bk-aeropostale-json-server-1.onrender.com/sellerProducts/${id}`
      )
      .then((res) => {
        getProductsData();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductsData();
  }, [page, category, order, search]);
  return loading ? (
    <div className="loader-spin">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  ) : (
    <div>
      <div className="d-flex justify-content-between flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row flex-xxl-row w-75 m-auto align-items-center topHeader">
        <div className="ShowCategory">
          <select
            name=""
            id=""
            onChange={(e) => setCategory(e.target.value)}
            className="border-rounded rounded-3 mb-2"
          >
            <option value="">Show Filters</option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="UNISEX">Unisex</option>
          </select>
        </div>
        <div>
          <button className="editBtn p-2 mb-2">
            <Link to={"/addProducts"} className="btnLink text-decoration-none ">
              Add Products
            </Link>
          </button>
        </div>
        <div className="SortBy">
          <select
            name=""
            id=""
            onChange={(e) => setOrder(e.target.value)}
            className="border-rounded rounded-3 mb-2"
          >
            <option value="">Sort By</option>
            <option value="asc">Price Low To High</option>
            <option value="desc">Price High To Low</option>
          </select>
        </div>
      </div>
      <div className="productsContentMain mb-5">
        {productData.map((item) => (
          <div key={item.id} className="productsContent text-center">
            <Link to={`/description/${item.id}`}>
              <img
                src={item.colors[0].image}
                alt={item.title}
                style={{ width: "100%" }}
              />
            </Link>
            <h5>{item.title}</h5>
            <h5> ${item.price}</h5>
            <div className="EditDeleteBtn d-flex justify-content-between align-items-center">
              <button className="edit ">
                <Link
                  to={`/editProducts/${item.id}`}
                  className="btnLink text-decoration-none"
                >
                  Edit
                </Link>
              </button>
              <button
                className="delete"
                onClick={() => DeleteProductsBtn(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex w-50 justify-content-between m-auto align-items-center">
        <button
          type="button"
          className="button"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <span className="button__text">Prev</span>
          <span className="button__icon">
            <FaArrowLeftLong />
          </span>
        </button>
        <span className="fs-5">{page}</span>
        <button
          type="button"
          className="button"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          <span className="button__text">Next</span>
          <span className="button__icon">
            <FaArrowRightLong />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SellerProducts;
