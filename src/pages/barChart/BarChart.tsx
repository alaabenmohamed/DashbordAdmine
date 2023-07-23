import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import Bar from "./Bar";
import Header from "../../components/Header";



function BarChart() {
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </Box>
  );
}

export default BarChart;
