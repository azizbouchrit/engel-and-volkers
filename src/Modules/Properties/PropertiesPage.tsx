import { useState } from "react";

import Button from "../../design-system/Button";
import FiltersSection from "./components/FiltersSection";
import TableSection from "./components/TableSection";
import { FiltersContextProvider } from "./FiltersContext";
import styles from "./PropertiesPage.module.css";
import CreateListingModal from "./components/CreateListingModal";

const PropertiesPage = () => {
      const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className={styles.header}>
        <h1>Properties</h1>
        <Button onClick={() => setModalOpen(true)}>Create Property</Button>
      </div>
      <FiltersContextProvider>
        <FiltersSection />
        <TableSection />
      </FiltersContextProvider>
      <CreateListingModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default PropertiesPage;
