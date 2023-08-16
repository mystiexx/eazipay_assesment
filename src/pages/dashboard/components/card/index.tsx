import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { RecentCardProps } from "../../../../utils/interface";
import styles from "../../styles.module.css";

const RecentCard: React.FC<RecentCardProps> = ({ content }) => {
  return (
    <Box>
      {content.map((data: any, idx: number) => (
        <Box key={idx} display="flex" flexDir="column" mb="45px">
          <Box>
            <Text color="#515251" fontSize="18px" fontWeight="500" mb="21px">
              {data.date}
            </Text>
            <Box display="flex" flexDir="column" gap="12px">
              {data.activity.map((act: any, indx: number) => (
                <Box key={indx + idx} className={styles.card}>
                  <Text
                    mb="8px"
                    mt="8px"
                    textTransform="uppercase"
                    fontSize="12px"
                    fontWeight="400"
                    color="#8D8E8D"
                  >
                    {act.title}
                  </Text>
                  <Box className={styles.card_content} pb="20px">
                    <Box
                      display="flex"
                      gap="10px"
                      alignItems={"center"}
                      mt="12px"
                    >
                      <Box
                        display="grid"
                        placeItems="center"
                        w="40px"
                        h="40px"
                        fontSize="16px"
                        fontWeight="500"
                        borderRadius={"full"}
                        color="#fff"
                        bg="#01AA8C"
                      >
                        {`${act?.first_name?.slice(
                          0,
                          1
                        )}${act?.last_name?.slice(0, 1)}`}
                      </Box>
                      <Text color="#515251" fontSize="16px" fontWeight="500">
                        {" "}
                        {act.name}
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        color="#8D8E8D"
                        fontSize="12px"
                        fontWeight="400"
                        textTransform={"uppercase"}
                      >
                        Activity
                      </Text>
                      <Text
                        color="#515251"
                        fontSize="16px"
                        fontWeight="500"
                        mt="12px"
                        whiteSpace={"nowrap"}
                      >
                        {act.activity}
                      </Text>
                    </Box>
                    {act.employee && (
                      <Box>
                        <Text
                          color="#8D8E8D"
                          fontSize="12px"
                          fontWeight="400"
                          textTransform={"uppercase"}
                        >
                          employee
                        </Text>
                        <Text
                          color="#515251"
                          fontSize="16px"
                          fontWeight="500"
                          mt="12px"
                        >
                          {act.employee}
                        </Text>
                      </Box>
                    )}
                    {act.bonus && (
                      <Box>
                        <Text
                          color="#8D8E8D"
                          fontSize="12px"
                          fontWeight="400"
                          textTransform={"uppercase"}
                        >
                          bonus name
                        </Text>
                        <Text
                          color="#515251"
                          fontSize="16px"
                          fontWeight="500"
                          mt="12px"
                        >
                          {act.bonus}
                        </Text>
                      </Box>
                    )}

                    {act.amount && (
                      <Box>
                        <Text
                          color="#8D8E8D"
                          fontSize="12px"
                          fontWeight="400"
                          textTransform={"uppercase"}
                        >
                          amount
                        </Text>
                        <Text
                          color="#EA4E4B"
                          fontSize="16px"
                          fontWeight="500"
                          mt="12px"
                        >
                          {act.amount}
                        </Text>
                      </Box>
                    )}
                    {act.time && (
                      <Box>
                        <Text
                          color="#8D8E8D"
                          fontSize="12px"
                          fontWeight="400"
                          textTransform={"uppercase"}
                        >
                          time
                        </Text>
                        <Text
                          color="#515251"
                          fontSize="16px"
                          fontWeight="500"
                          mt="12px"
                        >
                          {act.time}
                        </Text>
                      </Box>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default RecentCard;
