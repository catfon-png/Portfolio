import { Box, Typography, Button, Container } from '@mui/material';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Hero() {
    const titleRef = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 }
        )
            .fromTo(subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8 },
                '-=0.5'
            )
            .fromTo(ctaRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                '-=0.4'
            );
    }, []);

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
                    pointerEvents: 'none',
                }
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        textAlign: 'center',
                        color: 'white',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <Typography
                        ref={titleRef}
                        variant="h1"
                        sx={{
                            fontWeight: 800,
                            fontSize: { xs: '3rem', sm: '4rem', md: '6rem' },
                            mb: 2,
                            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        }}
                    >
                        Hi, I'm CatFon
                    </Typography>

                    <Typography
                        ref={subtitleRef}
                        variant="h4"
                        sx={{
                            fontWeight: 300,
                            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                            mb: 4,
                            opacity: 0.95,
                        }}
                    >
                        Full Stack Developer & Creative Problem Solver
                    </Typography>

                    <Box ref={ctaRef}>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowDownwardIcon />}
                            sx={{
                                backgroundColor: 'white',
                                color: '#667eea',
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                borderRadius: '50px',
                                textTransform: 'none',
                                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                            onClick={() => {
                                window.scrollTo({
                                    top: window.innerHeight,
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            Explore My Work
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Hero;