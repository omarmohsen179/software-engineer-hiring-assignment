import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  APARTMENT_EDIT,
  GET_APARTMENTS_BY_ID,
} from "../../services/apartment.API";
import Link from "next/link";
import styles from "./ApartmentEdit.module.css"; // Import CSS module

const ApartmentEdit = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    location: "",
    description: "",
  });
  const router = useRouter();
  const { id } = router.query;
  const isUpdating = !!id;

  useEffect(() => {
    if (isUpdating) {
      fetchApartmentDetails();
    }
  }, [isUpdating]);

  const fetchApartmentDetails = async () => {
    GET_APARTMENTS_BY_ID(id)
      .then((res) => {
        setFormData(res);
      })
      .catch((error) => {
        console.error("Error fetching apartment details:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    APARTMENT_EDIT(formData)
      .then(() => {
        router.push("/apartments");
      })
      .catch((error) => {
        console.error("Error adding/updating apartment:", error);
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {isUpdating ? "Update Apartment" : "Add New Apartment"}
      </h1>
      <Link href="/apartments" className={styles.linkContainer}>
        Go to Apartments Listing
      </Link>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.button}>
          {isUpdating ? "Update" : "Add"} Apartment
        </button>
      </form>
    </div>
  );
};

export default ApartmentEdit;
