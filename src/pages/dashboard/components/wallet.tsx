import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import styles from "../styles.module.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Wallet: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);
  const balance = "N12,560,078.00";
  const maskedBalance = show ? balance : "*".repeat(balance.length);

  const toggleBalance = () => {
    setShow(!show);
  };
  return (
    <Box className={styles.wallet_box}>
      <Text fontWeight="500" fontSize="16px" color="#D9EBCD" mb="8px">
        Wallet Balance
      </Text>
      <Box className={styles.wallet_content}>
        <Box className={styles.balance}>
          <Text fontSize="32px" fontWeight="700" color="#fff">
            {maskedBalance}
          </Text>
          {show ? (
            <AiOutlineEyeInvisible
              color="#DBE8CE"
              size={25}
              onClick={toggleBalance}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <AiOutlineEye
              color="#DBE8CE"
              size={25}
              onClick={toggleBalance}
              style={{ cursor: "pointer" }}
            />
          )}
        </Box>

        <button className={styles.btn}>fund wallet</button>
      </Box>
    </Box>
  );
};

export default Wallet;
