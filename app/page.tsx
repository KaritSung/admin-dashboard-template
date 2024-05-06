"use client"
import Image from "next/image";
import Sidebar from "./component/sidebar";
import { LayoutDashboard } from "lucide-react";
import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import { Bar, Chart, Doughnut } from "react-chartjs-2";

const cardItem = [
  { title1: "HTTP Devices", title2: "146", value: 70 },
  { title1: "HTTP Device Sensors", title2: "290", value: 90 },
  { title1: "MQTT Devices", title2: "28", value: 30 },
  { title1: "MQTT Device Sensors", title2: "28", value: 30 },
]

const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const donutData = {
  labels: ['HTTP Devices', 'HTTP Device Sensors', 'MQTT Devices', 'MQTT Device Sensors'],
  datasets: [{
    label: 'Value',
    data: [146, 290, 28, 28],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'green'
    ],
    hoverOffset: 4
  }]
};
import "chart.js/auto";
export default function Home() {
  return (
    <div>
      <p className="text-xl font-semibold">Dashboard</p>
      <Stack direction={'row'} mt={3} width={'100%'} spacing={3}>
        {cardItem.map((item, index) => (
          <Box key={index} bgcolor={'white'} width={'370px'}>
            <Box py={2} px={2} boxShadow={3}>
              <Typography color={'gray'}>{item.title1}</Typography>
              <Typography fontSize={'24px'} fontWeight={'500'}>{item.title2}</Typography>
              <Typography mt={3}>Device</Typography>
              <LinearProgress variant="determinate" value={item.value} />
            </Box>
          </Box>
        ))}
      </Stack>
      <Stack display={'flex'} justifyContent={'flex-start'} alignContent={'center'} direction={'row'} mt={5} width={'100%'} spacing={3}>
        <Box display={'flex'} justifyContent={'center'} alignContent={'center'} className="dataCard customerCard" bgcolor={'white'} width={'49.5%'} height={'450px'} mt={5} boxShadow={3}>
          <Box width="100%" height="100%" py={2} px={2}>
            <Bar
              data={{
                labels: ['HTTP Devices', 'HTTP Device Sensors', 'MQTT Devices', 'MQTT Device Sensors'],
                datasets: [{
                  label: 'Count', data: [146, 290, 28, 28], backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(43, 63, 229, 0.8)",
                  ],
                }],
              }}
              options={options}
            ></Bar>
          </Box>
        </Box>
        <Box className="dataCard customerCard" bgcolor={'white'} width={'50.5%'} height={'450px'} mt={5} boxShadow={3}>
          <Box width="100%" height="100%" py={2} px={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Doughnut
              data={donutData}
            ></Doughnut>
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
