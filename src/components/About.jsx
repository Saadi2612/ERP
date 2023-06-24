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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Title from './Title';
// img
import bodyImg1 from '../assets/about2-2048x2560.jpg';
import bodyImg2 from '../assets/about1-350x350.jpeg';

function About(){

    const CustomGridItem = styled(Grid)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    const CustomTypography = styled(Typography)({
        fontSize: '1.1rem',
        textAlign: 'justify',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
        textjustify: "inter-word"
    })

    const TitleText = styled(Typography)(({ theme }) => ({
        fontWeight: 'bold',
        color: '#d63031',
        textAlign: 'start',
        fontSize: "1.3rem"
    }));

    return(
        
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}
                sx={{
                    py: 20,
                    px: 12,

                }}
            >

                <Grid item xs={12} sm={4} md={6}>
                    <img src={bodyImg1} alt="Body Image"
                        style={{
                            width: '100%',
                            height: autocompleteClasses,
                            borderRadius: "6px",
                        }}
                    />
                    <img src={bodyImg2} alt="Body Image"
                        style={{
                            width: '60%',
                            borderRadius: "6px",
                            zIndex: 5,
                            marginLeft: "240px",
                            marginTop: "-250px"
                        }}
                    />

                </Grid>

                <CustomGridItem item xs={12} sm={8} md={6} component='section'>
                    <Box component='article' sx={{ px: 4, color: "#d63031", fontFamily: "Cambria" }}>
                        <TitleText variant="body1">
                            About Company
                        </TitleText>
                    </Box>
                    <Box component='article' sx={{ px: 4 }} >
                        <Title text={'BUILDING YOUR DREAM'} textAlign={'start'} />
                        <Box
                           
                            sx={{
                                width: "15%",
                                borderTop: "4px solid",
                                borderColor: "#d63031",
                                margin: "20px 0",
                            }}
                        />
                        <CustomTypography>
                            Our company is a leading provider of Enterprise Resource Planning (ERP)
                            solutions for businesses of all sizes. Our mission is to help organizations
                            streamline their operations and make data-driven decisions through the use of
                            cutting-edge technology. Our team of experts has years of experience in the industry
                            and a deep understanding of the unique challenges that businesses face.
                        </CustomTypography>
                        <CustomTypography>
                            Our ERP solutions are designed to be flexible and customizable to meet the specific needs
                            of each client. With real-time data access, powerful reporting tools,
                            and intuitive user interfaces, our software empowers businesses to make informed decisions, improve
                            efficiency, and drive growth.
                        </CustomTypography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            px: 4,
                            py: 2,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', paddingRight: 8 }}>
                            <Icon sx={{ color: '#000000', marginRight: 1, fontSize: '1.5rem', marginTop: -1, height: "120%" }}>
                                <EngineeringIcon />
                            </Icon>
                            <Typography
                                variant='h7'
                                sx={{
                                    color: '#d63031',
                                    fontWeight: 'bold',
                                    lineHeight: 1.2,
                                }}
                            >
                                Quality Material
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Icon sx={{ color: '#000000', marginRight: 1, fontSize: '1.5rem', marginTop: -1, height: "120%" }}>
                                <CheckCircleIcon />
                            </Icon>
                            <Typography
                                variant='h7'
                                sx={{
                                    color: '#d63031',
                                    fontWeight: 'bold',
                                    lineHeight: 1.2,
                                }}
                            >
                                Accredited
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            px: 4,
                            py: 2,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', paddingRight: 8 }}>
                            <Icon sx={{ color: '#000000', marginRight: 1, fontSize: '1.5rem', marginTop: -1, height: "120%" }}>
                                <PersonIcon />
                            </Icon>
                            <Typography
                                variant='h7'
                                sx={{
                                    color: '#d63031',
                                    fontWeight: 'bold',
                                    lineHeight: 1.2,
                                }}
                            >
                                Trained Worker
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Icon sx={{ color: '#000000', marginRight: 1, fontSize: '1.5rem', marginTop: -1, height: "120%" }}>
                                <AccessTimeIcon />
                            </Icon>
                            <Typography
                                variant='h7'
                                sx={{
                                    color: '#d63031',
                                    fontWeight: 'bold',
                                    lineHeight: 1.2,
                                }}
                            >
                                Time Availability
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            px: 4,
                            py: 2,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', paddingRight: 8 }}>
                            <Icon sx={{ color: '#000000', marginRight: 1, fontSize: '1.5rem', marginTop: -1, height: "120%" }}>
                                <PhoneInTalkIcon />
                            </Icon>
                            <Typography
                                variant='h7'
                                sx={{
                                    color: '#d63031',
                                    fontWeight: 'bold',
                                    lineHeight: 1.2,
                                }}
                            >
                                Quick Response
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Icon sx={{ color: '#000000', marginRight: 1, fontSize: '1.5rem', marginTop: -1, height: "120%" }}>
                                <VerifiedUserIcon />
                            </Icon>
                            <Typography
                                variant='h7'
                                sx={{
                                    color: '#d63031',
                                    fontWeight: 'bold',
                                    lineHeight: 1.2,
                                }}
                            >
                                100% Guranted
                            </Typography>
                        </Box>
                    </Box>
                    <Button
                        variant='contained'
                        sx={{
                            textTransform: 'capitalize',
                            borderRadius: 1,
                            width: "105px",
                            paddingLeft: "16px",
                            backgroundColor: '#d63031',
                            color: '#fff',
                            marginLeft: "32px",
                            marginTop: "12px"
                        }}
                        href='/about'
                    >
                        Read More
                    </Button>

                </CustomGridItem>
            </Grid>
    )
}

export default About;