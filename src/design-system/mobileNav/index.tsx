import React, { useState } from "react";
import SideModal from "../sideModal";
import { Box, Collapse, Text, Image } from "@chakra-ui/react";
import { navs, other_navs } from "../../utils/enums";
import { Link } from "react-router-dom";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import styles from "./styles.module.css";
import logo from "../../assets/images/eazi_logo.png";
import { MobileNavProps } from "../../utils/interface";

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [show, setShow] = useState<number | null>(null);
  const [active, setActive] = useState<string | null>("");

  const toggleCollapse = (itemId: number) => {
    if (show === itemId) {
      setShow(null);
    } else {
      setShow(itemId);
    }
  };
  return (
    <SideModal isOpen={isOpen} onClose={onClose}>
      <Box
        w="100%"
        bg="#fff"
        boxShadow="4px 0px 25px 0px #AAAAAA14"
        h="100vh"
        overflowY={"scroll"}
        pb="100px"
      >
        <Box className={styles.logo_container}>
          <Image src={logo} alt="eazipay logo" />
        </Box>
        <Box pt="37px" className={styles.container}>
          {navs.map((nav, idx) => (
            <div key={idx}>
              {nav.to ? (
                <Link
                  to={nav.to}
                  onClick={() => {
                    onClose();
                    setActive("");
                  }}
                >
                  <Box
                    display="flex"
                    bg={
                      window.location.pathname === nav.to ? "#F0F7EB80" : "#fff"
                    }
                    py="16px"
                    px="16px"
                    fontSize="16px"
                    fontWeight={"500"}
                    borderBottom="0.8px solid #E7E8E7"
                    gap="12px"
                    alignItems="center"
                    color={
                      window.location.pathname === nav.to
                        ? "#11453B"
                        : "#515251"
                    }
                    borderLeft={
                      window.location.pathname === nav.to
                        ? "4px solid #11453B"
                        : "none"
                    }
                    textTransform={"capitalize"}
                  >
                    {window.location.pathname === nav.to
                      ? nav.iconActive
                      : nav.icon}
                    {nav.name}
                  </Box>
                </Link>
              ) : (
                <>
                  <Box
                    onClick={() => toggleCollapse(idx)}
                    className={`${styles.nav_content} ${
                      active === nav.name ? styles.nav_content_active : ""
                    } ${
                      idx === navs.length - 1 ? styles.last_nav_content : ""
                    } `}
                  >
                    <Box display="flex" alignItems="center" gap="12px">
                      {active === nav.name ? nav.iconActive : nav.icon}
                      <Text whiteSpace={"nowrap"}>{nav.name}</Text>
                    </Box>
                    {show === idx ? <BiChevronUp /> : <BiChevronDown />}
                  </Box>
                  <Collapse in={show === idx} animateOpacity>
                    {nav?.others?.map((other, indx) => (
                      <Link
                        to={other.to}
                        key={indx + idx}
                        onClick={() => {
                          setShow(null);
                          setActive(nav.name);
                          onClose();
                        }}
                      >
                        <Box
                          py="10px"
                          px="16px"
                          borderBottom={
                            idx === navs.length - 1
                              ? "none"
                              : "0.8px solid #E7E8E7"
                          }
                        >
                          {other.name}
                        </Box>
                      </Link>
                    ))}
                  </Collapse>
                </>
              )}
            </div>
          ))}
        </Box>

        <Box p="16px">
          <Box width="100%" borderBottom="1px solid #E7E8E7" />
        </Box>

        <Box>
          {other_navs.map((nav, idx) => (
            <div key={idx}>
              {nav.to ? (
                <Link
                  to={nav.to}
                  onClick={() => {
                    setActive("");
                    onClose();
                  }}
                >
                  <Box
                    display="flex"
                    bg={
                      window.location.pathname === nav.to ? "#F0F7EB80" : "#fff"
                    }
                    py="16px"
                    px="16px"
                    fontSize="16px"
                    fontWeight={"500"}
                    borderBottom="0.8px solid #E7E8E7"
                    gap="12px"
                    alignItems="center"
                    color={
                      window.location.pathname === nav.to
                        ? "#11453B"
                        : "#515251"
                    }
                    borderLeft={
                      window.location.pathname === nav.to
                        ? "4px solid #11453B"
                        : "none"
                    }
                    textTransform={"capitalize"}
                  >
                    {window.location.pathname === nav.to
                      ? nav.iconActive
                      : nav.icon}
                    {nav.name}
                  </Box>
                </Link>
              ) : (
                <>
                  <Box
                    onClick={() => toggleCollapse(idx)}
                    className={`${styles.nav_content} ${
                      active === nav.name ? styles.nav_content_active : ""
                    } ${
                      idx === other_navs.length - 1
                        ? styles.last_nav_content
                        : ""
                    } `}
                  >
                    <Box display="flex" alignItems="center" gap="12px">
                      {active === nav.name ? nav.iconActive : nav.icon}
                      {nav.name}
                    </Box>
                    {show === idx ? <BiChevronUp /> : <BiChevronDown />}
                  </Box>
                  <Collapse in={show === idx} animateOpacity>
                    {nav?.others?.map((other, indx) => (
                      <Link
                        to={other.to}
                        key={indx + idx}
                        onClick={() => {
                          setShow(null);
                          setActive(nav.name);
                          onClose();
                        }}
                      >
                        <Box
                          py="10px"
                          px="16px"
                          borderBottom={
                            idx === navs.length - 1
                              ? "none"
                              : "0.8px solid #E7E8E7"
                          }
                        >
                          {other.name}
                        </Box>
                      </Link>
                    ))}
                  </Collapse>
                </>
              )}
            </div>
          ))}
        </Box>
      </Box>
    </SideModal>
  );
};

export default MobileNav;
