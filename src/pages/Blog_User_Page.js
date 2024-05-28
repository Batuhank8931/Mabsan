import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/data';

const Blog_User_Page = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    header_1: '',
    text_1: '',
    text_2: ''
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(BASE_URL, formData);
      fetchData();
      setFormData({
        date: '',
        header_1: '',
        text_1: '',
        text_2: ''
      });
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <input type="text" name="header_1" placeholder="Header 1" value={formData.header_1} onChange={handleChange} />
        <input type="text" name="text_1" placeholder="Text 1" value={formData.text_1} onChange={handleChange} />
        <input type="text" name="text_2" placeholder="Text 2" value={formData.text_2} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div>{item.date}</div>
            <div>{item.header_1}</div>
            <div>{item.text_1}</div>
            <div>{item.text_2}</div>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog_User_Page;
