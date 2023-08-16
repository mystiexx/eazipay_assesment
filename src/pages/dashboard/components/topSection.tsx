import React from "react";
import { Box, Text } from "@chakra-ui/react";
import QuickActions from "./quickActions";
import Wallet from "./wallet";
import CalenderIcon from "../../../assets/icons/calender";
import styles from "../styles.module.css";

const TopSection: React.FC = () => {
  const male = 100;
  return (
    <Box display="flex" flexWrap="wrap" gap="48px">
      <Box flex="1" display="flex" flexDir="column" gap="48px">
        <Wallet />
        <QuickActions />
      </Box>

      <Box className={styles.aside}>
        <Box
          bg="#D9EBCD"
          textAlign="center"
          boxShadow="0px 9px 18px 0px #AAAAAA26"
          borderTopRadius={"24px"}
          color="#515251"
          fontSize="16px"
          fontWeight="700"
          pt="8px"
          pb="8px"
        >
          Next Payroll
        </Box>

        <Box
          pb="28px"
          display="grid"
          placeItems="center"
          pt="16px"
          borderBottom="1px solid #E7E8E7"
        >
          <Box
            display="flex"
            gap="4px"
            fontSize="12px"
            fontWeight="400"
            color="#515251"
            alignItems="center"
          >
            <CalenderIcon />
            Friday
          </Box>
          <Text fontSize="18px" fontWeight="700" color="#515251" mt="8px">
            09/11/2022
          </Text>
        </Box>
        <Box pt="26px" pb="16px" pl="16px" pr="16px">
          <Text color="#515251" fontSize="16px" fontWeight="500">
            Total Employee
          </Text>
          <Text
            color="#292A29"
            fontSize="32px"
            fontWeight="700"
            mt="8px"
            mb="8px"
          >
            64
          </Text>
          <Box display="flex" flexWrap={"wrap"}>
            <Box flex="1">
              <Box w="100%">
                <Box bg="#11453B" width={`${male}%`} h="8px" />
              </Box>
              <Text fontSize="10px" fontWeight="700" color="#8D8E8D">
                Male
              </Text>
              <Text fontSize="10px" fontWeight="700" color="#8D8E8D">
                32
              </Text>
            </Box>
            <Box flex="1">
              <Box w="100%">
                <Box bg="#EA4E4B" width={`${male}%`} h="8px" />
              </Box>
              <Text fontSize="10px" fontWeight="700" color="#8D8E8D">
                Female
              </Text>
              <Text fontSize="10px" fontWeight="700" color="#8D8E8D">
                32
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopSection;
