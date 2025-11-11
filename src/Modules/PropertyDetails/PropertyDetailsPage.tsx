import React from "react";
import styles from "./PropertyDetailsPage.module.css";
import { useParams, Link } from "react-router-dom";
import { useListingDetails } from "../../hooks/useListingDetails";

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: listing,
    isLoading,
    error,
  } = useListingDetails(id ? parseInt(id) : NaN);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading listing details.</div>;
  }

  if (!listing) {
    return <div>No listing found.</div>;
  }

  return (
    <div className={styles.detailsPage}>
      <div className={styles.imageContainer}>
        <img src={listing.image} alt=""  />
      </div>
      <div style={{ display: "flex", justifyContent:"space-between", width: "100%" }}>
        <div style={{flexGrow: 1}}>
          <h1 style={{ margin: "12px 0" }}>{listing.title}</h1>
          <h2 style={{ margin: "12px 0" }}>
            {listing.price.toLocaleString()} €
          </h2>
          <div
            style={{
              borderTop: "2px solid #cfcfcf",
              paddingTop: "16px",
              display: "flex",
              gap: "32px",
              justifyContent: "space-between",
            }}
          >
            <span>Type: {listing.type} </span>
            <span>Number of Rooms: {listing.rooms}</span>
            <span>
              {listing.plotSize
                ? "Plot Size: " + listing.plotSize
                : "Floor: " + listing.floor}{" "}
            </span>
          </div>
        </div>
        <div
          style={{
            background: "#fdfaf5",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "32px 48px",
            marginLeft: "32px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
            alt="agent"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
            <h3>{listing.shop}</h3>
            <h4 style={{ margin: "12px 0" }}>{listing.agent}</h4>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
