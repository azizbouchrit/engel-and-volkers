import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./design-system/Navbar";
import PageContent from "./design-system/PageContent";
import SideNav from "./Modules/Navigation/SideNav/SideNav";
import PropertiesPage from "./Modules/Properties/PropertiesPage";
import PropertyDetailsPage from "./Modules/PropertyDetails/PropertyDetailsPage";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.mainContent}>
        <SideNav />
        <PageContent>
          <Routes>
            <Route path="/" element={<Navigate to="/listings" replace />} />
            <Route path="/listings" element={<PropertiesPage />} />
            <Route path="/listings/:id" element={<PropertyDetailsPage />} />
          </Routes>{" "}
        </PageContent>
      </main>
    </div>
  );
}

export default App;
