import React from "react";
import { Box, Text } from "@chakra-ui/react";
import AddEmployeeIcon from "../../../assets/icons/addEmployeeIcon";
import MoneyIcon from "../../../assets/icons/moneyIcon";
import PayIcon from "../../../assets/icons/payIcon";
import LoanIcon from "../../../assets/icons/loanIcon";
import styles from "../styles.module.css";

const QuickActions: React.FC = () => {
  return (
    <Box className={styles.quick_actions}>
      <Box
        flex="1"
        display="grid"
        placeItems="center"
        bg="#fff"
        border="1px solid #E7E8E7"
        borderRadius={"24px"}
        pb="16px"
        pt="16px"
        cursor="pointer"
      >
        <Box
          w="48px"
          h="48px"
          display="grid"
          placeItems="center"
          bg="#FFEDEC"
          borderRadius="12px"
        >
          <AddEmployeeIcon />
        </Box>

        <Text color="#515251" fontSize="14px" fontWeight="500" mt="15px">
          Add Employee
        </Text>
      </Box>

      <Box
        flex="1"
        display="grid"
        placeItems="center"
        bg="#fff"
        border="1px solid #E7E8E7"
        borderRadius={"24px"}
        pb="16px"
        pt="16px"
        cursor="pointer"
      >
        <Box
          w="48px"
          h="48px"
          display="grid"
          placeItems="center"
          bg="#F0F7EB"
          borderRadius="12px"
        >
          <MoneyIcon />
        </Box>

        <Text color="#515251" fontSize="14px" fontWeight="500" mt="15px">
          Pay Salaries
        </Text>
      </Box>

      <Box
        flex="1"
        display="grid"
        placeItems="center"
        bg="#fff"
        border="1px solid #E7E8E7"
        borderRadius={"24px"}
        pb="16px"
        pt="16px"
        cursor="pointer"
      >
        <Box
          w="48px"
          h="48px"
          display="grid"
          placeItems="center"
          bg="#E0F8EA"
          borderRadius="12px"
        >
          <PayIcon />
        </Box>

        <Text color="#515251" fontSize="14px" fontWeight="500" mt="15px">
          Pay Compliances
        </Text>
      </Box>

      <Box
        flex="1"
        display="grid"
        placeItems="center"
        bg="#fff"
        border="1px solid #E7E8E7"
        borderRadius={"24px"}
        pb="16px"
        pt="16px"
        cursor="pointer"
      >
        <Box
          w="48px"
          h="48px"
          display="grid"
          placeItems="center"
          bg="#EDF5FF"
          borderRadius="12px"
        >
          <LoanIcon />
        </Box>

        <Text color="#515251" fontSize="14px" fontWeight="500" mt="15px">
          Quick Loan
        </Text>
      </Box>
    </Box>
  );
};

export default QuickActions;
