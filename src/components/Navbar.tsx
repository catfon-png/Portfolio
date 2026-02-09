import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const linkStyle = {
    textDecoration: "none",
    color: "black",
    "&.active": {
        borderBottom: "2px solid black",
        borderRadius: "0px",
    },
    "&:hover": {
        backgroundColor: "transparent",
        fontWeight: "bold",
    },
    "&:focus": {
        backgroundColor: "transparent",
        fontWeight: "bold",
    }
}

export default function Navbar() {
    const containerRef = useRef<HTMLDivElement>(null);
    const appBarRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "500px top",
                scrub: true,
            }
        });

        tl.fromTo(containerRef.current,
            { width: "30%" },
            { width: "100%" },
            0
        );

        tl.fromTo(appBarRef.current,
            {
                backgroundColor: "transparent",
                boxShadow: "none"
            },
            {
                backgroundColor: "rgba(14, 41, 178, 0.54)", // animate to primary color
                boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)" // Standard MUI elevation 4
            },
            0
        );
    }, []);

    return (
        <AppBar position="sticky" ref={appBarRef} sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar sx={{ justifyContent: "center" }}>
                <Box
                    ref={containerRef}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "30%", // Initial width matches GSAP 'from' state
                        margin: "0 auto"
                    }}
                >
                    <Typography variant="h6" style={{ textDecoration: 'none', color: 'black' }}>
                        CatFon
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

                        {/*                    <Button
                        component={NavLink}
                        to="/about"
                        sx={linkStyle}
                        color="inherit"
                    >
                        About
                    </Button>

 */}
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
                </Box>
            </Toolbar>
        </AppBar>
    )
}
