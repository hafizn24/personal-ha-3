import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { Box, Grid } from '@mui/material'
import '@splidejs/splide/dist/css/splide.min.css';

export default function Element() {

    const text = [
        "I thought my life would be full of emptiness and meaningless events that would fill my entire life. Then, I met you ❤️.",
        "Lingering thoughts of you have filled my mind since I saw you at the APU’s cafeteria. I know something has been blooming inside me since I saw you 🌸. Something that was dead inside me for a long time.",
        "Overwhelming joy fills my heart when I see you and your lovely smile 😊. Even just thinking about you right now reminds me of our time together.",
        "Venturing the unknown, I try to make you experience happiness and joy throughout your days and future endeavors 🏞️. ",
        "Eternally grateful, I treasure every moment we spend together because they are priceless. No amount of money 💰 is enough to replace it.",
        "U the only one that I want, the one I want to spend days together. I started to forget days without you. I Love U and only U, Anisha 💕.",
        "I'm sorry for my imperfect. I always want to make you smile and spend my time together, but I’m just a human who tries his best. Sorryy 🙏",
    ]


    return (
        <Splide aria-label="My Favorite Images">
            <SplideSlide>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        height: '80vh',
                        p: '16px',
                    }}
                >
                    <Box>
                        <p>{text[0]}</p>
                    </Box>
                </Grid>
            </SplideSlide>
            <SplideSlide>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        height: '80vh',
                        p: '16px',
                    }}
                >
                    <Box>
                        <p>{text[1]}</p>
                    </Box>
                </Grid>
            </SplideSlide>
            <SplideSlide>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        height: '80vh',
                        p: '16px',
                    }}
                >
                    <Box>
                        <p>{text[2]}</p>
                    </Box>
                </Grid>
            </SplideSlide>
            <SplideSlide>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        height: '80vh',
                        p: '16px',
                    }}
                >
                    <Box>
                        <p>{text[3]}</p>
                    </Box>
                </Grid>
            </SplideSlide>
            <SplideSlide>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        height: '80vh',
                        p: '16px',
                    }}
                >
                    <Box>
                        <p>{text[4]}</p>
                    </Box>
                </Grid>
            </SplideSlide>
            <SplideSlide>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        height: '80vh',
                        p: '16px',
                    }}
                >
                    <Box>
                        <p>{text[5]}</p>
                    </Box>
                </Grid>
            </SplideSlide>
            <SplideSlide>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        height: '80vh',
                        p: '16px',
                    }}
                >
                    <Box>
                        <p>{text[6]}</p>
                    </Box>
                </Grid>
            </SplideSlide>
        </Splide>
    )
}
