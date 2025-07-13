// import { useState } from 'react';
// import axios from 'axios';

// function AddProductForm({ onProductAdded }) {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await axios.post('http://localhost:5000/api/products', { name, price });
//     onProductAdded(res.data); // Refresh product list
//     setName('');
//     setPrice('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="product-form">
//       <input value={name} onChange={e => setName(e.target.value)} placeholder="Product name" />
//       <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" />
//       <button type="submit">Add Product</button>
//     </form>
//   );
// }

// export default AddProductForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// function AddProductForm({ onProductAdded }) {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//    const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/products', {
//         name,
//         price: parseFloat(price)
//       });
//       onProductAdded(); // Refresh product list
//       setName('');
//       setPrice('');
//       setError('');
//     } catch (err) {
//       console.error('Failed to add product', err);
//         setError('Failed to add product. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="product-form">
//       <input
//         type="text"
//         placeholder="Product name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         type="number"
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//         required
//       />
//       <button type="submit">Add Product</button>
//     </form>
//   );
// }

// export default AddProductForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// function AddProductForm({ onProductAdded }) {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [error, setError] = useState('');
//    const [success, setSuccess] = useState('');
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!name.trim()) {
//       setError('Product name is required');
//       return;
//     }
//     if (!price || parseFloat(price) <= 0) {
//       setError('Price must be a positive number');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/api/products', {
//         name,
//         price: parseFloat(price),
//       });
//       onProductAdded();
//       setName('');
//       setPrice('');
//       setError('');
//       setSuccess('Product added successfully!');
//       setTimeout(() => setSuccess(''), 3000); 
//     } catch (err) {
//       setError('Failed to add product');
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="product-form">
//       <input
//         type="text"
//         placeholder="Product name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         type="number"
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//         required
//       />
//       <button type="submit">Add Product</button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}
//     </form>
//   );
// }

// export default AddProductForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// function AddProductForm({ onProductAdded }) {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//     const [image, setImage] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//    const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name.trim()) {
//       setError('Product name is required');
//       return;
//     }
//     if (!price || parseFloat(price) <= 0) {
//       setError('Price must be a positive number');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/api/products', {
//         name,
//         price: parseFloat(price),
//         image,
//       });
//       onProductAdded();
//       setName('');
//       setPrice('');
//        setImage('');
//       setError('');
//       setSuccess('Product added successfully!');
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (err) {
//       setError('Failed to add product');
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="product-form">
//       <input
//         type="text"
//         placeholder="Product name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       /> <input
//         type="text"
//         placeholder="Image URL"
//         value={image}
//         onChange={(e) => setImage(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <button type="submit">Add Product</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}
//     </form>
//   );
// }

// export default AddProductForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// function AddProductForm({ onProductAdded }) {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [file, setFile] = useState(null); // File state

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name.trim()) {
//       setError('Product name is required');
//       return;
//     }
//     if (!price || parseFloat(price) <= 0) {
//       setError('Price must be a positive number');
//       return;
//     }

//     let imageUrl = image; // Use manually entered image URL by default

//     // ✅ Upload file if selected
//     if (file) {
//       const formData = new FormData();
//       formData.append('image', file);

//       try {
//         const uploadRes = await axios.post('http://localhost:5000/api/upload', formData);
//         imageUrl = uploadRes.data.imageUrl; // Ensure your backend returns this key
//       } catch (err) {
//         setError('Image upload failed');
//         console.error(err);
//         return;
//       }
//     }

//     // ✅ Create product with image URL
//     try {
//       await axios.post('http://localhost:5000/api/products', {
//         name,
//         price: parseFloat(price),
//         image: imageUrl,
//       });

//       if (onProductAdded) onProductAdded();

//       // Reset form
//       setName('');
//       setPrice('');
//       setImage('');
//       setFile(null);
//       setError('');
//       setSuccess('Product added successfully!');
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (err) {
//       setError('Failed to add product');
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="product-form">
//       {/* Product Name */}
//       <input
//         type="text"
//         placeholder="Product Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />

//       {/* File input */}
//       <div>
//         <label htmlFor="productImage">Product Image</label>
//         <input
//           type="file"
//           id="productImage"
//           accept="image/*"
//           onChange={(e) => setFile(e.target.files[0])}
//         />
//       </div>

//       {/* Preview selected file name */}
//       {file && <p>Selected file: {file.name}</p>}

//       {/* Optional image URL input */}
//       <input
//         type="text"
//         placeholder="Image URL"
//         value={image}
//         onChange={(e) => setImage(e.target.value)}
//       />

//       {/* Product Price */}
//       <input
//         type="number"
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//         required
//       />

//       <button type="submit">Add Product</button>

//       {/* Feedback Messages */}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {success && <p style={{ color: 'green' }}>{success}</p>}
//     </form>
//   );
// }

// export default AddProductForm;
import React, { useState } from 'react';
import axios from 'axios';

function AddProductForm({ onProductAdded }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(''); // ✅ Category state
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Product name is required');
      return;
    }
    if (!price || parseFloat(price) <= 0) {
      setError('Price must be a positive number');
      return;
    }

    let imageUrl = image;

    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const uploadRes = await axios.post('http://localhost:5000/api/upload', formData);
        imageUrl = uploadRes.data.imageUrl;
      } catch (err) {
        setError('Image upload failed');
        console.error(err);
        return;
      }
    }

    try {
      await axios.post('http://localhost:5000/api/products', {
        name,
        price: parseFloat(price),
        image: imageUrl,
        category, // ✅ Send category to backend
      });

      if (onProductAdded) onProductAdded();

      // Reset form
      setName('');
      setPrice('');
      setImage('');
      setFile(null);
      setCategory(''); // ✅ Reset category
      setError('');
      setSuccess('Product added successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to add product');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      {/* Product Name */}
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      {/* File input */}
      <div>
        <label htmlFor="productImage">Product Image</label>
        <input
          type="file"
          id="productImage"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      {/* Preview selected file name */}
      {file && <p>Selected file: {file.name}</p>}

      {/* Optional image URL input */}
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {/* Product Price */}
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      {/* ✅ Category Dropdown */}
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="books">Books</option>
      </select>

      <button type="submit">Add Product</button>

      {/* Feedback Messages */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
}

export default AddProductForm;


