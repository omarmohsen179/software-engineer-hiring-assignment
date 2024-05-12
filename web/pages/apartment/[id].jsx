// pages/apartment/[id].js

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { GET_APARTMENTS_BY_ID } from "../../services/apartment.API";
import styles from "./Apartment.module.css"; // Import CSS module
import Link from "next/link";
const ApartmentDetails = () => {
  const [apartment, setApartment] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Get the apartment ID from the router

  useEffect(() => {
    if (id) {
      fetchApartmentDetails(id);
    }
  }, [id]);

  const fetchApartmentDetails = async (id) => {
    GET_APARTMENTS_BY_ID(id)
      .then((res) => {
        setApartment(res);
      })
      .catch((error) => {
        console.error("Error fetching apartment details:", error);
      });
  };

  return !apartment ? (
    <p>Loading...</p>
  ) : (
    <div className={styles.container}>
      <Link href="/apartments" className={styles.linkContainer}>
        Go to Apartments Listing
      </Link>
      <h1 className={styles.title}>Name: {apartment.name}</h1>
      <p className={styles.detail}>Price: {apartment.price}</p>
      <p className={styles.detail}>Location: {apartment.location}</p>
      <p className={styles.description}>Description: {apartment.description}</p>
    </div>
  );
};

export default ApartmentDetails;
