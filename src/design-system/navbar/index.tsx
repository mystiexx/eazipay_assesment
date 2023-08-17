import React, { useState } from "react";
import { Box, Avatar, Text, Image } from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";
import ArrowRight from "../../assets/icons/arrowRight";
import Notification from "../../assets/icons/notification";
import HeroMenu from "../../assets/icons/heroMenu";
import styles from "./styles.module.css";
import MobileNav from "../mobileNav";

const Navbar: React.FC = () => {
  const pathname = window.location.pathname;
  const pathWithoutSlash = pathname.replace(/^\//, "");
  const [show, setShow] = useState<boolean>(false);
  return (
    <Box className={styles.nav}>
      <Box className={styles.mobile}>
        <MobileNav isOpen={show} onClose={() => setShow(!show)} />
      </Box>
      <Box display="flex" justifyContent={"space-between"} alignItems="center">
        <Box
          className={styles.icon}
          cursor="pointer"
          onClick={() => setShow(!show)}
        >
          <HeroMenu />
        </Box>

        <Text className={styles.path_name}>{pathWithoutSlash}</Text>

        <Image src={logo} alt="Company logo" className={styles.image} />

        <Box display="flex" gap="64px" alignItems="center">
          <Box position="relative">
            <Box
              w="16px"
              h="16px"
              display="grid"
              placeItems="center"
              bg="#C92F02"
              borderRadius={"full"}
              fontSize="10px"
              fontWeight="700"
              color="#fff"
              position="absolute"
              zIndex="1"
              top="-5px"
              ml="10px"
            >
              7
            </Box>
            <Notification />
          </Box>

          {/* user  profile*/}
          <Box className={styles.profile}>
            <Avatar size="md" />
            <Box width="150px">
              <Text color="#2B2B2B" fontSize="16px" fontWeight="700">
                Kalu Abasiama
              </Text>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems={"center"}
                gap="17px"
              >
                <Text fontSize="14px" color="#898989" fontWeight="400">
                  Admin
                </Text>

                <ArrowRight />
              </Box>
            </Box>
          </Box>
          {/* user ending */}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
