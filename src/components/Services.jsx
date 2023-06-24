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

function Services(){

    
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
                    py: 2,
                    px: 2,
                    backgroundColor: "#181818",
                    paddingTop: 10

                }}
            >
        <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <CustomGridItem component="section">
                            <Box component="article" sx={{ px: 4, color: "#ff4d4d", fontFamily: "Cambria", mb: 2 }}> {/* Added margin bottom */}
                                <TitleText variant="h4">Our Services</TitleText>
                            </Box>
                            <Box component="article" sx={{ px: 4, color: "#fff", pb: 2 }}> {/* Added padding bottom */}
                                <Title text={"PROFESSIONAL AND RELIABLE SERVICES"} textAlign={"start"} sx={{ color: "#fff", fontSize: "24px" }} />
                                <Box
                                    
                                    sx={{
                                        width: "15%",
                                        borderTop: "4px solid",
                                        borderColor: "#ff4d4d",
                                        margin: "20px 0",
                                    }}
                                />
                                <CustomTypography sx={{ color: "#fff", fontSize: "16px" }}>
                                    We are dedicated to delivering exceptional customer service and support, and work closely with our clients
                                    to ensure their success. Whether you're a small start-up or a large multinational corporation, we have the
                                    experience and expertise to help you reach your goals.
                                </CustomTypography>
                            </Box>
                        </CustomGridItem>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "capitalize",
                                borderRadius: 1,
                                width: "22%",
                                paddingLeft: "16px",
                                backgroundColor: "#d63031",
                                color: "#fff",
                                marginTop: "12px",
                                alignSelf: "flex-end", // Align button to the bottom end
                                fontSize: "14px",
                                mb: 2,
                                pt: 1,
                                pb: 1,
                                marginRight: "95px"
                            }}
                            href="/services"
                        >
                            Our Services &#x25B8;
                        </Button>
                    </Grid>

                    <Grid
                        item
                        xs={12} // Updated
                        sm={12} // Updated
                        md={12} // Updated
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginLeft: '90px',
                            paddingRight: "82px",
                            paddingBottom: "70px",

                        }}
                        component="section"
                    >
                        <Box
                            sx={{
                                color: '#fff',
                                flex: 1,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 5,
                                border: '1px solid white', // Add border
                                width: '100%', // Set equal width for each box
                                boxSizing: 'border-box',
                                margin: '0 10px',
                            }}
                        >
                            <h5 style={{ fontWeight: 'bold', fontFamily: 'inherit', color: "#eb4d4b" }}>Inventory Managment</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.</p>
                        </Box>
                        <Box
                            sx={{
                                color: '#fff',
                                flex: 1,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 5,
                                border: '1px solid white', // Add border
                                width: '100%', // Set equal width for each box
                                boxSizing: 'border-box',
                                margin: '0 10px',
                            }}
                        >
                            <h5 style={{ fontWeight: 'bold', fontFamily: 'inherit', color: "#eb4d4b" }}>Budget & Scheduling</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.</p>
                        </Box>
                        <Box
                            sx={{
                                color: '#fff',
                                flex: 1,
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 5,
                                border: '1px solid white', // Add border
                                width: '100%', // Set equal width for each box
                                boxSizing: 'border-box',
                                margin: '0 10px',
                            }}
                        >
                            <h5 style={{ fontWeight: 'bold', fontFamily: 'inherit', color: "#eb4d4b" }}>Project Management</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper mattis, pulvinar dapibus leo.</p>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default Services;