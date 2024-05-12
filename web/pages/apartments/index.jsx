import React, { useState, useEffect } from "react";
import Link from "next/link";
import { APARTMENT_DELETE, GET_APARTMENTS } from "../../services/apartment.API";
import styles from "./Apartments.module.css"; // Import CSS module
const Apartments = () => {
  const [apartments, setApartments] = useState(null);

  useEffect(() => {
    fetchApartments();
  }, []);

  const fetchApartments = async () => {
    GET_APARTMENTS()
      .then((res) => {
        setApartments(res);
      })
      .catch((error) => {
        console.error("Error fetching apartments:", error);
      });
  };

  const handleDeleteApartment = async (id) => {
    APARTMENT_DELETE(id)
      .then(() => {
        fetchApartments();
      })
      .catch((error) => {
        console.error("Error deleting apartment:", error);
      });
  };

  return !apartments ? (
    <p>Loading...</p>
  ) : (
    <div className={styles.container}>
      <h1 className={styles.title}>Apartment Listing</h1>
      <Link href="/add-apartment">
        <button className={styles.button}>Add Apartment</button>
      </Link>
      <ul className={styles.list}>
        {apartments.map((apartment) => (
          <li key={apartment.id} className={styles.item}>
            <Link href={`/apartment/${apartment.id}`}>
              <div className={styles.apartmentDetails}>
                <h2 className={styles.apartmentName}>Name: {apartment.name}</h2>
                <p className={styles.apartmentInfo}>Price: {apartment.price}</p>
                <p className={styles.apartmentInfo}>
                  Location: {apartment.location}
                </p>
              </div>
            </Link>
            <Link href={`/add-apartment/${apartment.id}`}>
              <button className={styles.button}>Update</button>
            </Link>
            <button
              className={styles.button}
              onClick={() => handleDeleteApartment(apartment.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Apartments;
