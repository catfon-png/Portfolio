import { Box, Container, Grid, Typography, Stack, IconButton, Button } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';

export default function Contact() {
    return (
        <Box sx={{ flexGrow: 1, py: 8 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Left Column: Text */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                            Let's Connect!
                        </Typography>
                        <Typography variant="h6" color="text.secondary" paragraph>
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Feel free to reach out correctly or download my CV to learn more about my experience and skills.
                        </Typography>
                    </Grid>

                    {/* Right Column: Contact Info & CV */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Stack spacing={3} justifyContent="center" height="100%">
                            <Typography variant="h5" gutterBottom>
                                Contact Information
                            </Typography>

                            {/* Email */}
                            <Stack direction="row" spacing={2} alignItems="center" component="a" href="mailto:silvafonseca.catarina@gmail.com" sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main' } }}>
                                <EmailIcon fontSize="large" color="primary" />
                                <Typography variant="h6">silvafonseca.catarina@gmail.com</Typography>
                            </Stack>

                            {/* Socials */}
                            <Stack direction="row" spacing={2}>
                                <IconButton
                                    component="a"
                                    href="https://linkedin.com/in/catarinasilvafonseca"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    size="large"
                                >
                                    <LinkedInIcon fontSize="large" />
                                </IconButton>
                                <IconButton
                                    component="a"
                                    href="https://github.com/catfon-png"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    size="large"
                                >
                                    <GitHubIcon fontSize="large" />
                                </IconButton>
                            </Stack>

                            {/* CV Download */}
                            <Box sx={{ mt: 2 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<DownloadIcon />}
                                    component="a"
                                    href="/CV 2026 - FE Developer - Catarina Fonseca.pdf"
                                    download="CV-CatarinaFonseca.pdf"
                                >
                                    Download CV
                                </Button>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}