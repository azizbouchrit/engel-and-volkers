import React from "react";
import styles from "./PageContent.module.css";

interface PageContentProps {
    children?: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({children}) => {
  return (
    <div className={styles.pageContent}>
        {children}
    </div>
  )
}

export default PageContent