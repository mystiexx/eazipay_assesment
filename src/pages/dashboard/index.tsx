import React from "react";
import { Layout } from "../../layout";
import { Box, Text } from "@chakra-ui/react";
import Recent from "./components/recent";
import { activities } from "../../utils/enums";
import styles from "./styles.module.css";
import TopSection from "./components/topSection";
import ChartCard from "./components/chart";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Box>
        <Box mb="40px">
          <Text className={styles.header_text}>Welcome Abasiama</Text>
          <Text fontSize="16px" fontWeight="500">
            {" "}
            Pay and manage your employee in minutes
          </Text>
        </Box>
        <TopSection />

        <ChartCard />

        <Recent content={activities} />
      </Box>
    </Layout>
  );
};

export default Dashboard;
