import styels from "./TableSection.module.css";
import { useListings } from "../../../hooks/useListings";
import TableRow from "./TableRow";

const TableSection = () => {
  const { data, isLoading, error } = useListings();
console.log("renders");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading listings.</div>;
  }

  if (data?.length === 0) {
    return <div>No listings found.</div>;
  }

  return (
    <div>
      <div className={styels.tableHeader}>
        <div style={{ width: "5%" }} className={styels.headerItem}>
          Image
        </div>
        <div style={{ width: "20%" }} className={styels.headerItem}>
          Title
        </div>
        <div style={{ width: "5%" }} className={styels.headerItem}>
          Type
        </div>
        <div style={{ width: "5%" }} className={styels.headerItem}>
          Number of Rooms
        </div>
        <div style={{ width: "5%" }} className={styels.headerItem}>
          Plot Size
        </div>
        <div style={{ width: "5%" }} className={styels.headerItem}>
          Floor
        </div>
        <div style={{ width: "10%" }} className={styels.headerItem}>
          Price
        </div>
        <div style={{ width: "10%" }} className={styels.headerItem}>
          Actions
        </div>
      </div>
      <div className={styels.tableBody}>
        {data?.map((listing) => (
            <TableRow key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default TableSection;
