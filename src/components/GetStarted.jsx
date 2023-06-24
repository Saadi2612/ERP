import React from 'react'
import {
    autocompleteClasses,
    Box,
    Grid,
    styled,
    Typography,
    Button,
    Icon,
} from '@mui/material'
import About from './About';
import Services from './Services';



const GetStarted = () => {


    return (
        <>
            
            <About />
            <Grid
                item
                xs={12}
                sm={8}
                md={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'center',
                    paddingLeft: 15,
                    paddingRight: 15,
                    zIndex: 10,
                    marginBottom: "-70px",
                    marginTop: "-95px"
                }}
                component="section"
            >
                <Box
                    sx={{
                        backgroundColor: '#d63031',
                        color: '#fff',
                        flex: 1,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                    }}
                >
                    <h3 style={{ fontWeight: "bold", fontFamily: "inherit" }}>15+</h3>
                    <p>Years in Business</p>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#ffffff',
                        color: '#000000',
                        flex: 1,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                    }}
                >
                    <h3 style={{ fontWeight: "bold", fontFamily: "inherit" }}>1.5K</h3>
                    <p>Happy Clients</p>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#192a56',
                        color: '#fff',
                        flex: 1,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                    }}
                >
                    <h3 style={{ fontWeight: "bold", fontFamily: "inherit" }}>2.5K</h3>
                    <p>Projects Completed</p>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#e74c3c',
                        color: '#fff',
                        flex: 1,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 5,
                    }}
                >
                    <h3 style={{ fontWeight: "bold", fontFamily: "inherit" }}>150+</h3>
                    <p>Trained Staff</p>
                </Box>
            </Grid>
            <Services />
        </>
    )
}

export default GetStarted;