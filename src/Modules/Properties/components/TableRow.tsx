import { Link } from "react-router-dom";
import { Listing } from "../../../types";
import styels from "./TableSection.module.css";

const TableRow = ({ listing }: { listing: Listing }) => {
  return (
    <div className={styels.tableRow}>
      <div style={{ width: "5%" }} className={styels.rowItem}>
        <img
          src={listing.image}
          alt="property"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        style={{ width: "20%", cursor: "pointer" }}
        className={styels.rowItem}
      >
        <Link to={`/listings/${listing.id}`}>
          <span className={styels.underlineHover}>{listing.title}</span>
        </Link>
      </div>
      <div style={{ width: "5%" }} className={styels.rowItem}>
        {listing.type}
      </div>
      <div style={{ width: "5%" }} className={styels.rowItem}>
        {listing.rooms}
      </div>
      <div style={{ width: "5%" }} className={styels.rowItem}>
        {listing.plotSize ? `${listing.plotSize} m²` : " - "}
      </div>
      <div style={{ width: "5%" }} className={styels.rowItem}>
        {listing.floor ? listing.floor : " - "}
      </div>
      <div style={{ width: "10%" }} className={styels.rowItem}>
        {listing.price.toLocaleString()} €
      </div>
      <div style={{ width: "10%" }} className={styels.rowItem}>
        [Edit] [Delete]
      </div>
    </div>
  );
};

export default TableRow;
