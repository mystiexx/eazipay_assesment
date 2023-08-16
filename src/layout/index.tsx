import React from "react";
import { LayoutProps } from "../utils/interface";
import styles from "./styles.module.css";
import { Box } from "@chakra-ui/react";
import Navbar from "../design-system/navbar";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>sidebar</div>
      <Box w="100%">
        <div>
          <Navbar />
        </div>
        <Box className={styles.container}>{children}</Box>
      </Box>
    </div>
  );
};
