import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) => theme.palette.primary.main,
                color: 'white'
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body1">
                        © {new Date().getFullYear()} My Portfolio
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center">
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'inherit', textDecoration: 'none' }} component="a" href="mailto:silvafonseca.catarina@gmail.com">
                            <EmailIcon />
                            <Typography variant="body2">silvafonseca.catarina@gmail.com</Typography>
                        </Stack>
                        <IconButton color="inherit" component="a" href="https://linkedin.com/in/catarinasilvafonseca" target="_blank" rel="noopener noreferrer" aria-label="Go to LinkedIn">
                            <LinkedInIcon /> LinkedIn <OpenInNewIcon sx={{ fontSize: 14, ml: 0.5 }} />
                        </IconButton>
                        <IconButton color="inherit" component="a" href="https://github.com/catfon-png" target="_blank" rel="noopener noreferrer" aria-label="Go to GitHub">
                            <GitHubIcon /> GitHub <OpenInNewIcon sx={{ fontSize: 14, ml: 0.5 }} />
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}