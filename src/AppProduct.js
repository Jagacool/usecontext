import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { API } from "./global"; // Make sure to import the correct API path

export function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [poster, setPoster] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div className="add-product-form">
      {/* TextField components for various input fields */}
      {/* ... (code for other fields) */}
      
      <Button
        variant="contained"
        onClick={() => {
          const newProduct = {
            name,
            price,
            poster,
            category,
            rating,
            description,
          };
          
          // Use fetch to send a POST request to the API
          fetch(`${API}/products`, {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then(() => navigate("/products"));
        }}
      >
        Add Product
      </Button>
    </div>
  );
}
