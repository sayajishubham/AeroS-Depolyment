import axios from "axios";
import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const AddProducts = () => {
  const initialFormData = {
    title: "",
    price: "",
    description: "",
    details: "",
    colors: [
      {
        color: "",
        image: "",
        image2: "",
        image3: "",
        image4: "",
      },
    ],
    category: "",
  };

  const [singleFormData, setSingleFormData] = useState(initialFormData);

  const handleChange = (e, colorIndex = null) => {
    const { name, value } = e.target;
    if (colorIndex !== null) {
      setSingleFormData((prevState) => {
        const updatedColors = prevState.colors.map((color, index) => {
          if (index === colorIndex) {
            return { ...color, [name]: value };
          }
          return color;
        });
        return { ...prevState, colors: updatedColors };
      });
    } else {
      setSingleFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://bk-aeropostale-json-server-1.onrender.com/products",
        singleFormData
      )
      .then((res) => {
        setSingleFormData(res.data);
        setSingleFormData(initialFormData);
      })
      .catch((err) => console.log(err));

    axios
      .post(
        "https://bk-aeropostale-json-server-1.onrender.com/sellerProducts",
        singleFormData
      )
      .then((res) => {
        setSingleFormData(res.data);
        setSingleFormData(initialFormData);
      })
      .catch((err) => console.log(err));
  };

  const addColorFields = () => {
    setSingleFormData((prevState) => ({
      ...prevState,
      colors: [
        ...prevState.colors,
        {
          color: "",
          image: "",
          image2: "",
          image3: "",
          image4: "",
        },
      ],
    }));
  };
  const deleteColorFields = () => {
    setSingleFormData((prevState) => {
      const updatedColors = prevState.colors.slice(0, -1);
      return { ...prevState, colors: updatedColors };
    });
  };

  const { title, price, description, details, colors, category } =
    singleFormData;

  return (
    <div>
      <h2 className="text-center">
        <FaEdit />
        Add Products
      </h2>
      <form onSubmit={handleSubmit} className="EditForm">
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter Title"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={price}
          placeholder="Enter Price"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Enter Description"
          onChange={handleChange}
        />
        <input
          type="text"
          name="details"
          value={details}
          placeholder="Enter Details"
          onChange={handleChange}
        />
        <select
          name="category"
          value={category}
          onChange={handleChange}
          style={{ width: "90%" }}
        >
          <option value="">Select Category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="UNISEX">Unisex</option>
        </select>
        {colors.map((color, index) => (
          <div key={index}>
            <input
              type="text"
              name="color"
              value={color.color}
              placeholder={`Enter Color in Hex ${index + 1}`}
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="url"
              name="image"
              value={color.image}
              placeholder={`Enter Image URL ${index + 1}`}
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="url"
              name="image2"
              value={color.image2}
              placeholder={`Enter Image2 URL ${index + 1}`}
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="url"
              name="image3"
              value={color.image3}
              placeholder={`Enter Image3 URL ${index + 1}`}
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="url"
              name="image4"
              value={color.image4}
              placeholder={`Enter Image4 URL ${index + 1}`}
              onChange={(e) => handleChange(e, index)}
            />
          </div>
        ))}
        <div className="w-100 d-flex justify-content-evenly align-items-center">
          {" "}
          <button
            type="button"
            onClick={addColorFields}
            className="edit p-2 fw-bold"
          >
            Add More Images
          </button>
          <button
            type="button"
            onClick={deleteColorFields}
            className="delete p-2 fw-bold"
          >
            Delete Fields
          </button>
        </div>
        <input type="submit" className="SubmitBtn" />
      </form>
    </div>
  );
};

export default AddProducts;
