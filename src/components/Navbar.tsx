import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material"
import { NavLink } from "react-router-dom"

const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    "&.active": {
        color: "secondary.main",
        fontWeight: "bold",
    }
}

export default function Navbar() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        My Portfolio
                    </NavLink>
                </Typography>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                        component={NavLink}
                        to="/"
                        sx={linkStyle}
                        color="inherit"
                    >
                        Home
                    </Button>

                    <Button
                        component={NavLink}
                        to="/about"
                        sx={linkStyle}
                        color="inherit"
                    >
                        About
                    </Button>

                    <Button
                        component={NavLink}
                        to="/projects"
                        sx={linkStyle}
                        color="inherit"
                    >
                        Projects
                    </Button>

                    <Button
                        component={NavLink}
                        to="/contacts"
                        sx={linkStyle}
                        color="inherit"
                    >
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
