import React from "react";
import { Box } from "@chakra-ui/react";
import { SideModalProps } from "../../utils/interface";

const SideModal: React.FC<SideModalProps> = ({ children, isOpen, onClose }) => {
  return (
    <Box>
      <Box
        bg="black"
        opacity="0.5"
        position="fixed"
        top="0"
        w="100%"
        h="100vh"
        onClick={onClose}
        left={isOpen ? "0" : "-100%"}
        zIndex="9"
        transition="0.3s ease-in-out"
      />
      <Box
        position="fixed"
        top="0"
        w="300px"
        h="100vh"
        left={isOpen ? "0" : "-100%"}
        zIndex="10"
        bg="#fff"
        opacity={isOpen ? "100%" : "0"}
        transition="0.3s ease-in-out"
        overflowY="scroll"
      >
        {children}
      </Box>
    </Box>
  );
};

export default SideModal;
