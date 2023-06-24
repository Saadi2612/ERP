import React from 'react'
import {
    Button,
    Stack,
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'
import ProjectImages from './ProjectImages'
import Review from './ReviewCard'

function Projects(){

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

    return (
        <>
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}
                sx={{
                    py: 2,
                    px: 12,
                    paddingTop: 10

                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <CustomGridItem component="section">
                    <Box component="article" sx={{ px: 4, color: "#130f40", pb: 2 }}>
                        <Title text={"OUR RECENT PROJECTS"} textAlign={"start"} sx={{ fontSize: "24px" }} />
                        <Box
                            sx={{
                                width: "15%",
                                borderTop: "4px solid",
                                borderColor: "#ff4d4d",
                                margin: "20px 0",
                            }}
                        />
                        <CustomTypography sx={{ color: "#000000", fontSize: "16px" }}>
                            Our team has worked tirelessly to bring this project to life and
                            we're thrilled with the results. We're already looking forward to our next challenge!
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
                                width: "28%",
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
                            href="/projects"
                        >
                            View All Projects &#x25B8;
                        </Button>
                    </Grid>
                </Grid>
                </Grid>
                <ProjectImages/>                   
                </>
    )
}

export default Projects;