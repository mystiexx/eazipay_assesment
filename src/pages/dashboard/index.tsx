import React, { useEffect, useState } from "react";
import { Layout } from "../../layout";
import { Box, Text } from "@chakra-ui/react";
import Recent from "./components/recent";
import { activities } from "../../utils/enums";
import styles from "./styles.module.css";
import TopSection from "./components/topSection";
import ChartCard from "./components/chart";
import { Act } from "../../utils/types";

const Dashboard: React.FC = () => {
  const [content, setContent] = useState<Act[] | null>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setContent(activities);
  }, []);

  const handleSearch = (search: string) => {
    setSearchTerm(search);
    if (search.trim() === "") {
      setContent(activities);
      return;
    }
    const filteredActivities = activities.filter((activity) =>
      activity.activity.some(
        (entry) =>
          entry.name.toLowerCase().includes(search.toLowerCase()) ||
          entry.first_name.toLowerCase().includes(search.toLowerCase()) ||
          entry.last_name.toLowerCase().includes(search.toLowerCase())
      )
    );
    setContent(filteredActivities);
  };

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

        <Recent
          content={content}
          handleSearch={handleSearch}
          search={searchTerm}
        />
      </Box>
    </Layout>
  );
};

export default Dashboard;
