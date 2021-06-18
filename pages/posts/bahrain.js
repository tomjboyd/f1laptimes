import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Flex,
  Box,
  SimpleGrid,
  Grid,
  GridItem,
  Spacer,
  HStack,
} from '@chakra-ui/react';
import LAPTIMES from '../../data/2021/bahrain';
import DRIVERS from '../../data/drivers';
import { getSortedLaptimes, getData } from '../../scripts/data';
import legendHandler from '../../scripts/charts';

const SORTED_LAPTIMES = getSortedLaptimes(DRIVERS, LAPTIMES);
const data = getData(LAPTIMES, SORTED_LAPTIMES);

const options = {
  legend: legendHandler,
  aspectRatio: 2.5,
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  hover: {
    mode: 'index',
    intersect: false,
  },
};

export default () => (
  <Flex columns={2} spacing={10} p={5}>
    <Box>
      <Heading>Bahrain 2021</Heading>

      <Box>
        <Stat>
          <StatNumber>Bahrain International Circuit</StatNumber>
          <StatHelpText>Sun, 28 Mar, 16:00</StatHelpText>
        </Stat>
      </Box>
      <HStack spacing="24px">

        <Box>
          <Stat>
            <StatNumber>Winner</StatNumber>
            <StatHelpText>Lewis Hamilton</StatHelpText>
          </Stat>
        </Box>
        <Box>
          <Stat>
            <StatNumber>Fastest lap</StatNumber>
            <StatHelpText>Valtteri Bottas</StatHelpText>
          </Stat>
        </Box>
      </HStack>
    </Box>
    <Box w="100%">
      <Line
        height={null}
        width={null}
        data={data}
        options={options}
      />
    </Box>
  </Flex>
);
