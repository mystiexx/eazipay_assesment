import React from "react";
import { LayoutProps } from "../utils/interface";
import styles from "./styles.module.css";
import { Box } from "@chakra-ui/react";
import Navbar from "../design-system/navbar";
import Sidebar from "../design-system/sidebar";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <Box w="100%">
        <div>
          <Navbar />
        </div>
        <Box className={styles.container}>{children}</Box>
      </Box>
    </div>
  );
};
