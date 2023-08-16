import React from "react";
import { Box, Text, Select } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  Title,
  Tooltip,
  PointElement,
  LineElement,
  LinearScale,
  Legend,
} from "chart.js/auto";

const ChartCard: React.FC = () => {
  const data = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUL",
      "JUN",
      "AUG",
      "SEPT",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        data: [10, 25, 50, 70, 100, 150, 200, 80, 60, 70, 50, 75],
        tension: 0.4,
        borderColor: "#EF4444",
        backgroundColor: "#EF4444",
        label: "Outflow",
      },
      {
        data: [10, 30, 40, 70, 120, 100, 90, 100, 60, 0, 0, 20],
        tension: 0.4,
        borderColor: "#219653",
        backgroundColor: "#219653",
        label: "Inflow",
      },
    ],
  };
  Chart.register(
    CategoryScale,
    Title,
    Tooltip,
    PointElement,
    LineElement,
    LinearScale,
    Legend
  );
  return (
    <Box p="48px" bg="#FFFFFF" borderRadius={"16px"} mt="48px">
      <Box display="flex" flexWrap="wrap" alignItems="flex-start">
        <Box flex="1">
          <Text color="#515251" fontSize="16px" fontWeight="500" mb="4px">
            Inflow
          </Text>
          <Text color="#219653" fontSize="28px" fontWeight="700">
            N1,567,552
          </Text>
        </Box>
        <Box flex="1">
          <Text color="#515251" fontSize="16px" fontWeight="500" mb="4px">
            Outflow
          </Text>
          <Text color="#EF4444" fontSize="28px" fontWeight="700">
            N1,567,552
          </Text>
        </Box>
        <Box>
          <Select
            border="none"
            fontSize="14px"
            color="#11453B"
            px="0"
            focusBorderColor="transparent"
            _selected={{
              color: "#11453B",
              fontSize: "14px",
            }}
          >
            <option selected>Inflow/Outflow</option>
          </Select>
        </Box>
      </Box>

      <Box overflow="auto" pt="30px" h="292px">
        <Line
          data={data}
          style={{ width: "100%", boxSizing: "border-box", fontSize: "16px" }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                display: false,
                position: "bottom",
                align: "center",
              },
            },
          }}
        />
      </Box>

      <Box display="flex" justifyContent={"flex-end"}>
        <Box
          bg="#11453B"
          px="16px"
          py="10px"
          fontSize="16px"
          fontWeight="700"
          color="#FFFFFF"
        >
          2022
        </Box>
      </Box>
    </Box>
  );
};

export default ChartCard;
