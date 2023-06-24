import React from 'react'
import { Box, Button, styled, Typography, TextField } from "@mui/material";
import { Link } from 'react-router-dom'
import headerImage from '../assets/first-div-1500x1000.jpg';

const Header = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        position: 'relative',
        zIndex: 2,
        padding:"50px",
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


    const BottomBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        position: 'absolute',
        bottom: theme.spacing(-6),
        left: theme.spacing(12),
        right: theme.spacing(12),
        borderRadius: theme.spacing(1),
        backgroundColor: '#fff',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    }));

    const TitleText = styled(Typography)(({ theme }) => ({
        fontWeight: 'bold',
        color: '#d63031',
        marginBottom: theme.spacing(5),
    }));

    const SendRequestText = styled(Typography)(({ theme }) => ({
        color: '#000000',
        fontSize: '1.8rem',
        fontFamily:"Impact",
        marginBottom: theme.spacing(-2),
        marginLeft: theme.spacing(-22),
        marginRight: theme.spacing(10)
    }));

    const InputField = styled(TextField)(({ theme }) => ({
        marginRight: theme.spacing(2),
    }));

    const SendButton = styled(Button)(({ theme }) => ({
        textTransform: 'capitalize',
        borderRadius: theme.spacing(1),
        backgroundColor: '#d63031',
        color: '#fff',
    }));


    return (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText
                component='section'
            >
                <Typography
                    variant='h2'
                    component='h1'
                    sx={{
                        fontWeight: 700,
                        color: '#fff',
                    }}
                >
                    Streamline Your Process With Our ERP Software
                </Typography>

                <Typography
                    variant='p'
                    component='p'
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                        color: '#fff',
                    }}
                >
                    One stop solution to run all your sales, purchase, inventory and production operations.
                </Typography>

                <Box>
                    <Button
                        variant='contained'
                        sx={{
                            mr: 2,
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            borderColor: '#d63031',
                            borderRadius: '6px',
                            color: '#fff',
                            backgroundColor: '#d63031',
                            "&&:hover": {
                                backgroundColor: "#343a55"
                            },
                            "&&:focus": {
                                backgroundColor: "#343a55"
                            }
                        }}
                        href='/login'
                    >
                        Get Started
                    </Button>
                    {/* <Button 
                    component={Link} 
                    to={'/about'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        color: '#fff',
                        backgroundColor: 'transparent',
                        borderColor: '#fff',
                        "&&:hover": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        },
                        "&&:focus": {
                            color: '#343a55',
                            borderColor: '#343a55',
                        }
                    }}
                    >
                        explore
                    </Button> */}
                </Box>
            </BoxText>

            {/* <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={headerImage}
                alt="headerImage"
                style={{ 
                    width: "75%", 
                    marginBottom: -15,
                    
                }}
                />
            </Box> */}

            <BottomBox>
                <TitleText variant="body1">
                    Quick Service Request
                </TitleText>
                <SendRequestText variant="body1">
                    Send Inspection Request
                </SendRequestText>
                <InputField label="Name" variant="outlined" size="small" />
                <InputField label="Phone Number" variant="outlined" size="small" />
                <SendButton variant="contained" color="primary">
                    Send
                </SendButton>
            </BottomBox>

        </CustomBox>
    )
}

export default Header