import Head from 'next/head';
import React from 'react';
import { Box, Container, getTableSortLabelUtilityClass, Grid, Table, Typography } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { Report } from '../components/dashboard/report-main';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { typography } from '@mui/system';

function createData(ReportId, Seller, EndUSer, Macchinario, MacchinarioSn,DataIntervento, Tecnico,DataVendita,ParteCat,StatoRep) {
  return { ReportId, Seller, EndUSer, Macchinario, MacchinarioSn,DataIntervento, Tecnico,DataVendita,ParteCat,StatoRep };}

const report = [
  createData(1,	'TWS AUTOMATION',	'PINO',	'QUADRA DVC EVO',	1,	'2021-12-12',	'AM',	'2020-12-10',	'CAVO USB',	'chiuso'),
  createData(2,	'TWS AUTOMATION',	'PINO',	'QUADRA DVC EVO',	3,	'2021-12-07',	'AM',	'2022-01-01',	'MOTORE',	'chiuso'),
  createData(3,	'TWS AUTOMATION',	'GINO',	'QUADRA DVC EVO',	54,	'2020-05-12',	'AM',	'2019-01-03',	'ELETTRICO CAVO USB',	'aperto'),
  createData(4,	'TWS AUTOMATION',	'PIPPO', 'QUADRA DVC EVO',	1, '2021-12-12',	'AM',	'2020-12-10',	'ELETTRICO CAVO USB',	'chiuso'),
  createData(5,	'TWS AUTOMATION',	'SA',	'QUADRA LASER ENCODER',	2,	'2022-01-01',	'AM', '2020-01-02',	'CAM',	'chiuso'),
];

const Dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false} 
            sx={{maxWidth:1000}}>
        <Grid
          container
          spacing={1}
        >

          <Grid
            item
           
            xs={12}
          >
            <Typography fontSize="3.5rem" fontWeight="300" color="#3f3f45" >Main Report</Typography>
          </Grid>
          

          <Grid
            item
           
            xs={12}
          >
            <Report sx={{ height: '100%' }} />
          </Grid>

          
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
