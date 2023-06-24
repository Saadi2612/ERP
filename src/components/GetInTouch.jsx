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
import Projects from './Projects';

const GetInTouch = () => {
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

            <Projects />
            <Stack
                component='section'
                direction="column"
                justifyContent='center'
                alignItems='center'
                sx={{
                    py: 10,
                    mx: 6,
                }}
            >
                <Title
                    text={
                        'People say the Nicest Things'
                    }
                    textAlign={'center'}
                />
                 <Box
                            sx={{
                                width: "15%",
                                borderTop: "4px solid",
                                borderColor: "#d63031",
                                margin: "20px 0",
                            }}
                        />
                <Paragraph
                    text={
                        'We value our clients experience and always strive to provide the best service possible.'
                    }
                    maxWidth={'sm'}
                    mx={0}
                    textAlign={'center'}
                />
            </Stack>
            <Review />
        </>
    )
}

export default GetInTouch;