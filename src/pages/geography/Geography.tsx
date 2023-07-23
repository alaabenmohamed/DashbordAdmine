import { Box, useTheme } from '@mui/material';
import { ResponsiveChoropleth } from "@nivo/geo";
import { geo } from './world_countries';
import { data } from "./data.js";
import Geo from './Geo.tsx';
import Header from '../../components/Header.tsx';

function Geography() {
    const theme = useTheme();
  return (
    <Box>
      <Header title="Geography" subTitle="Simple Geography Chart" />

      <Geo />
    </Box>
  );
}

export default Geography
