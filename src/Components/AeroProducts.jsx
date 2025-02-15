import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../Context/Search";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { WishListContext } from "../Context/WishListContext";
import { CartContext } from "../Context/CartContext";
import { BiCart } from "react-icons/bi";

const AeroProducts = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(null);
  const [order, setOrder] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [priceRange, setPriceRange] = useState(null);
  const { AddWishListProduct } = useContext(WishListContext);
  const { addItemToCart } = useContext(CartContext);
  const { search } = useContext(SearchContext);

  const getProductsData = async () => {
    try {
      setLoading(true);
      const params = {
        ...(category && { category }),
        ...((order === "asc" || order === "desc") && {
          _sort: "price",
          _order: order,
        }),
        ...(search && { q: search }),
      };

      const response = await axios.get(
        "https://bk-aeropostale-json-server-1.onrender.com/products",
        { params, credentials: "include" }
      );

      let data = response.data;

      // Filtering price
      if (priceRange && priceRange.includes("-")) {
        const [minPrice, maxPrice] = priceRange.split("-");
        data = data.filter(
          (item) =>
            item.price >= Number(minPrice) && item.price <= Number(maxPrice)
        );
      }

      // Sorting alphabetically
      if (order === "atoz") {
        data.sort((a, b) => a.title.localeCompare(b.title));
      } else if (order === "ztoa") {
        data.sort((a, b) => b.title.localeCompare(a.title));
      }

      // Total data count
      const totalItems = data.length;

      // Calculate total pages based on data
      setTotalPages(Math.ceil(totalItems / 8 || 1));

      // Slice the data to get the items for the current page
      const startIndex = (page - 1) * 8;
      const paginatedData = data.slice(startIndex, startIndex + 8);
      setProductData(paginatedData);
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsData();
  }, [page, category, order, priceRange, search]);

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
            onChange={(e) => setCategory(e.target.value)}
            className="border-rounded rounded-3 mb-2"
          >
            <option value="">Show Filters</option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="UNISEX">Unisex</option>
          </select>
        </div>

        <div className="SortBy">
          <select
            onChange={(e) => setOrder(e.target.value)}
            className="border-rounded rounded-3 mb-2"
          >
            <option value="">Sort By</option>
            <option value="asc">Price Low To High</option>
            <option value="desc">Price High To Low</option>
            <option value="atoz">A to Z</option>
            <option value="ztoa">Z to A</option>
          </select>
        </div>

        <div className="PriceFilter">
          <select
            onChange={(e) => setPriceRange(e.target.value)}
            className="border-rounded rounded-3 mb-2"
          >
            <option value="">Price Range</option>
            <option value="10-50">$10 to $50</option>
            <option value="51-100">$51 to $100</option>
          </select>
        </div>
      </div>

      <div className="productsContentMain">
        {productData.map((item) => (
          <div key={item.id} className="productsContent text-center">
            <div className="productsImagesEach">
              <Link to={`/description/${item.id}`}>
                <img
                  src={item.colors[0].image}
                  alt={item.title}
                  style={{ width: "100%" }}
                  className="productsImage"
                />
              </Link>
              <div className="WishListCartMainDiv">
                <button
                  onClick={() => AddWishListProduct(item)}
                  className="WishListBtn"
                >
                  <span>
                    <FaHeart />
                  </span>
                </button>
                <button onClick={() => addItemToCart(item)} className="CartBtn">
                  <span>
                    <BiCart />
                  </span>
                </button>
              </div>
            </div>
            <h5>{item.title}</h5>
            <h5>${item.price}</h5>
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
          <span className="button__text1">Prev</span>
          <span className="button__icon1">
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

export default AeroProducts;
