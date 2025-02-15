import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const EditProducts = () => {
    const { id } = useParams();
    const initialFormData = {
        title: '',
        price: '',
        description: '',
        details: '',
        colors: [
            {
                color: '',
                image: '',
                image2: '',
                image3: '',
                image4: '',
            }
        ],
        category: ''
    };

    const [singleFormData, setSingleFormData] = useState(initialFormData);

    const EditFormData = (id) => {
        axios.get(`https://bk-aeropostale-json-server-1.onrender.com/sellerProducts/${id}`)
            .then(res => setSingleFormData(res.data))
            .catch(err => console.log(err));
    };

    const handleChange = (e, colorIndex) => {
        const { name, value } = e.target;
        setSingleFormData(prevState => {
            const updatedColors = prevState.colors.map((color, index) => {
                if (index === colorIndex) {
                    return { ...color, [name]: value };
                }
                return color;
            });
            return { ...prevState, colors: updatedColors};
        });
        setSingleFormData({...singleFormData,[name]:value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://bk-aeropostale-json-server-1.onrender.com/sellerProducts/${id}`, singleFormData)
            .then(res => setSingleFormData(res.data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        EditFormData(id);
    }, [id]);

    const { title, price, description, details, colors, category } = singleFormData;

    return (
        <div>
            <h2 className='text-center'><FaEdit />Edit Products</h2>
            <form onSubmit={handleSubmit} className='EditForm'>
                <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="Enter Title"
                    onChange={e =>handleChange(e)}
                /><br />
                <input
                    type="number"
                    name="price"
                    value={price}
                    placeholder="Enter Price"
                    onChange={e =>handleChange(e)}
                /><br />
                <input
                    type="text"
                    name="description"
                    value={description}
                    placeholder="Enter Description"
                    onChange={e =>handleChange(e)}
                /><br />
                <input
                    type="text"
                    name="details"
                    value={details}
                    placeholder="Enter Details"
                    onChange={e =>handleChange(e)}
                /><br />
                {colors.map((color, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="color"
                            value={color.color}
                            placeholder={`Enter Color ${index + 1}`}
                            onChange={(e) => handleChange(e, index)}
                        /><br />
                        <input
                            type="url"
                            name="image"
                            value={color.image}
                            placeholder={`Enter Image URL ${index + 1}`}
                            onChange={(e) => handleChange(e, index)}
                        /><br />
                        <input
                            type="url"
                            name="image2"
                            value={color.image2}
                            placeholder={`Enter Image2 URL ${index + 1}`}
                            onChange={(e) => handleChange(e, index)}
                        /><br />
                        <input
                            type="url"
                            name="image3"
                            value={color.image3}
                            placeholder={`Enter Image3 URL ${index + 1}`}
                            onChange={(e) => handleChange(e, index)}
                        /><br />
                        <input
                            type="url"
                            name="image4"
                            value={color.image4}
                            placeholder={`Enter Image4 URL ${index + 1}`}
                            onChange={(e) => handleChange(e, index)}
                        /><br />
                    </div>
                ))}
                <select
                    name="category"
                    value={category}
                    onChange={e =>handleChange(e)}
                    className='m-auto'
                    style={{width:"90%"}}
                >
                    <option value="">Select Category</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="UNISEX">Unisex</option>
                </select>
                <input type="submit" className='SubmitBtn'/>
            </form>
        </div>
    );
};

export default EditProducts;
