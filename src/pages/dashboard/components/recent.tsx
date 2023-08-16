import React from "react";
import { Box, Text, Input } from "@chakra-ui/react";
import SearchIcon from "../../../assets/icons/search";
import FilterIcon from "../../../assets/icons/filter";
import { RecentProps } from "../../../utils/interface";
import RecentCard from "./card";
import styles from "../styles.module.css";

const Recent: React.FC<RecentProps> = ({ content }) => {
  return (
    <Box mt="48px" mb="100px">
      <Text className={styles.header_activity}>
        Recent Activities
      </Text>

      {/* search and filter */}
      <Box display="flex" gap="16px" alignItems={"center"}>
        {/* search box */}
        <Box
          display="flex"
          borderRadius={"16px"}
          alignItems="stretch"
          alignContent={"center"}
          bg="#fff"
          border="1px solid #B5B6B5"
          w="full"
          h="48px"
        >
          <Input
            type="text"
            border="none"
            borderLeftRadius="16px"
            focusBorderColor="transparent"
            outline="none"
            bg="transparent"
            p="16px"
            h="48px"
            placeholder="Search employee"
            _placeholder={{
              color: "#B9BBC0",
              fontSize: "14px",
              fontWeight: "400",
            }}
          />
          <Box
          className={styles.search_box}
          >
            <SearchIcon />
          </Box>
        </Box>

        {/* filter box */}
        <Box
          border="1px solid #B5B6B5"
          h="48px"
          display="grid"
          placeItems="center"
          borderRadius={"16px"}
          bg="#fff"
          textTransform="capitalize"
          color="#8D8E8D"
          fontSize="14px"
          pr="16px"
          pl="16px"
          fontWeight="500"
        >
          <Box display="flex" gap="8px" alignItems="center">
            <FilterIcon />
            filter
          </Box>
        </Box>
      </Box>

      {/* search and filter ending */}

      <Box className={styles.activities_card}>
        <Box>
          <RecentCard content={content} />
        </Box>
      </Box>
    </Box>
  );
};

export default Recent;
