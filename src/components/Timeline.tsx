import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ExploreIcon from '@mui/icons-material/Explore';

const timelineItems = [
    {
        date: 'September 2014 - June 2017',
        category: 'Education',
        title: "Bachelor's in Marketing Management",
        institution: 'ISCTE-IUL Lisbon, Portugal',
        description: '- Consumer Behaviour Psychology\n- Strategic Management\n- Marketing Communication',
        icon: <SchoolIcon />,
        color: 'success.main',
    },
    {
        date: 'June 2016',
        category: 'Soul work',
        title: 'Erasmus+ Volunteer at a Youth Exchange in Georgia',
        description: 'Participation in workshops and debates regarding environmental issues in European countries',
        icon: <ExploreIcon />,
        color: 'secondary.main',
    },
    {
        date: 'August 2017 - November 2017',
        category: 'Work',
        title: 'Front desk',
        institution: 'Easy Lisbon Hostel',
        description: 'Responsible for guest check-in, check-out and overall quality of stay.\n Managed online reservations across platforms (Booking, Expedia, HostelWorld).\n Initiated design work by creating a portfolio and a website.',
        icon: <WorkIcon />,
        color: 'secondary.main',
    },
    {
        date: 'November 2017 - May 2019',
        category: 'Work',
        title: 'Content & Social Media Manager',
        institution: 'Shiptimize (eCommerce operator)',
        description: 'Developed a content strategy (in Portuguese, English and Spanish) based on SEO and eCommerce metrics.\n Coordinated with development and marketing to ensure consistency in tone, visuals, and messaging',
        icon: <WorkIcon />,
        color: 'secondary.main',
    },
    {
        date: 'February 2019 - May 2019',
        category: 'Soul work',
        title: 'Volunteer English Teacher',
        institution: 'Speak Social Lisbon',
        description: 'Taught English to refugees and immigrants in Lisbon',
        icon: <ExploreIcon />,
        color: 'secondary.main',
    },
    {
        date: 'June 2019 - August 2019',
        category: 'Soul work',
        title: 'Solo trip to Southeast Asia',
        description: 'Solo trip through Singapore, Malaysia, Thailand, Cambodia and Vietnam',
        icon: <ExploreIcon />,
        color: 'secondary.main',
    },
    {
        date: 'September 2019 - May 2021',
        category: 'Education',
        title: "Master's in New Media Design",
        institution: 'Tilburg University, The Netherlands',
        description: '- UX & Usability Evaluation\n- Human Media Interaction Theory\n- Prototyping & Research',
        icon: <SchoolIcon />,
        color: 'success.main',
    },
    {
        date: 'February 2020 - May 2021',
        category: 'Work',
        title: 'Student jobs',
        description: 'Delivery driver at Dominos Pizza\n Logistics Operator at H&M warehouse',
        icon: <WorkIcon />,
        color: 'secondary.main',
    },
    {
        date: 'September 2020 - May 2021',
        category: 'Education',
        title: "Outreaching Honors Program",
        institution: 'Tilburg University, The Netherlands',
        description: '- UX & Usability Evaluation\n- Human Media Interaction Theory\n- Prototyping & Research',
        icon: <SchoolIcon />,
        color: 'success.main',
    },
    {
        date: 'May 2021 - January 2022',
        category: 'Soul work',
        title: 'International Volunteer with European Solidarity Corps (ESC)',
        description: "Led a team of volunteers and organised a series of entrepreneurship events across Hungary\n Collaborated in a multicultural team to plan content and communications for 'Respekt und Neugier Festival' (a music and arts festival in Berlin)\n Designed and facilitated workshops in a children's festival in Magdeburg \n Worked with children with special needs, refugees, and low-income families in Cairo",
        icon: <ExploreIcon />,
        color: 'secondary.main',
    },
    {
        date: 'June 2021 - December 2022',
        category: 'Work',
        title: 'Portuguese teacher',
        institution: 'iTalki',
        description: 'Taught Portuguese to students online through grammar, reading and speaking exercises',
        icon: <WorkIcon />,
        color: 'primary.main',
    },
    {
        date: 'March 2022 - September 2022',
        category: 'Work',
        title: 'Communication Specialist',
        institution: 'ChibiPhoenix (gaming studio)',
        description: 'Led the design of landing pages for gaming products (Figma)\nCollected and analysed user engagement data (LinkedIn, Facebook) to create digital promotional assets (Photoshop, Canva, Adobe Premiere Pro)',
        icon: <WorkIcon />,
        color: 'primary.main',
    },
    {
        date: 'January 2023 - April 2023',
        category: 'Education',
        title: "Full Stack TypeScript Bootcamp",
        institution: 'School of Applied Technology Amsterdam (SALT)',
        description: 'Intensive training program with a focus on NodeJS, Express, HTML&CSS, React, under a test-driven development.',
        icon: <SchoolIcon />,
        color: 'success.main',
    },
    {
        date: 'April 2023 - July 2023',
        category: 'Work',
        title: 'Freelance designer and fullstack developer',
        institution: 'Self-employed',
        description: 'Worked directly with clients to understand business goals and transform them into wireframes and prototypes (Figma)\nDeveloped functional and responsive web pages using TypeScript, React, and Tailwind',
        icon: <WorkIcon />,
        color: 'primary.main',
    },
    {
        date: 'July 2023 - Present',
        category: 'Work',
        title: 'Frontend Developer',
        institution: 'SaxoBank (investment bank)',
        description: 'Translated Figma designs into performant, accessible frontend components (e.g., news modules). Ensured robustness through unit and integration tests.\nParticipated in sprint ‘ceremonies’, including backlog grooming, standups, and retrospectives. Collaborated with designers to refine designs according to technical restrictions\nStack: TypeScript, React, Redux, Playwright, Jest',
        icon: <WorkIcon />,
        color: 'primary.main',
    },
];

function MyTimeline() {
    return (
        <Box sx={{ width: '100%', overflowX: 'auto', py: 4 }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    minWidth: 'max-content',
                    px: 2,
                }}
            >
                {timelineItems.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            minWidth: 200,
                        }}
                    >
                        {/* Connector line */}
                        {index < timelineItems.length - 1 && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 20,
                                    left: '50%',
                                    width: '100%',
                                    height: 2,
                                    bgcolor: 'grey.300',
                                    zIndex: 0,
                                }}
                            />
                        )}

                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                bgcolor: item.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                zIndex: 1,
                                mb: 2,
                            }}
                        >
                            {item.icon}
                        </Box>

                        {/* Content */}
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5 }}>
                            {item.date}
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600 }}>
                            {item.title}
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600 }}>
                            {item.institution ? item.institution : ""}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ textAlign: 'center', px: 1, whiteSpace: 'pre-line' }}
                        >
                            {item.title}
                        </Typography>
                        {item.description && (
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ textAlign: 'left', px: 1, mt: 1, whiteSpace: 'pre-line' }}
                            >
                                {item.description}
                            </Typography>
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default MyTimeline;