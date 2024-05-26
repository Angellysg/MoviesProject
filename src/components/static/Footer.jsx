import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: '#2c3e50' }}>
            <Toolbar>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '10px 0' }}>
                    <Typography variant="h6" color="inherit" sx={{ marginBottom: '5px' }}>
                        🎥 Movies App
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1" color="inherit" sx={{ marginRight: '10px' }}>
                            Made with <span role="img" aria-label="heart">❤️</span> by Angelly Sepulveda
                        </Typography>
                        <IconButton
                            sx={{
                                color: '#FFFFFF',
                                '&:hover': {
                                    color: '#FFFFFF',
                                    boxShadow: '0px 0px 8px 0px #e67e22',
                                },
                            }}
                            aria-label="LinkedIn"
                            href="https://www.linkedin.com/in/angellysg/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton
                            sx={{
                                color: '#FFFFFF',
                                '&:hover': {
                                    color: '#FFFFFF',
                                    boxShadow: '0px 0px 8px 0px #e67e22',
                                },
                            }}
                            aria-label="GitHub"
                            href="https://github.com/Angellysg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            sx={{
                                color: '#FFFFFF',
                                '&:hover': {
                                    color: '#FFFFFF',
                                    boxShadow: '0px 0px 8px 0px #e67e22',
                                },
                            }}
                            aria-label="Email"
                            href="mailto:sepulveda.angelly1@gmail.com"
                        >
                            <EmailIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;

