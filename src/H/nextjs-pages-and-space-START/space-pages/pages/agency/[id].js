// pages/agency/[id].js

import Head from 'next/head';

import { Typography, Container, Grid } from '@mui/material';

import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard';

import { useRouter } from 'next/router';

export default function Agency() {
    const router = useRouter();
    const { id } = router.query; // Note that my variable name matches the slug name in my component

    return <>
        <NavBar />
        <Container sx={{paddingTop:2}}>
            <Grid container>
                <Grid item xs="2">

                </Grid>
                <Grid item xs="10">
                    <Typography variant="h3" gutterBottom>
                        Agency Page for {id}.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </>
}