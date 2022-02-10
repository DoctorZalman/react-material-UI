import React from "react";
import {IconButton, Toolbar, Container, AppBar, Typography, Button, Box} from '@mui/material'
import {Menu} from "@mui/icons-material";
import {makeStyles} from '@mui/styles';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: 1
    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost: {
        position: 'relative',
        // color: theme.palette.common.white
        marginBottom: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
}))

function App() {
    const classes = useStyles();
    return (
        <>
            <AppBar position='fixed'>
                <Container fixed>
                    <Toolbar>
                        <IconButton edge='start' color='inherit' aria-label='menu' className={classes.menuButton}>
                            <Menu/>
                        </IconButton>
                        <Typography variant='h6' className={classes.title}>
                            Material UI
                        </Typography>
                        <Box mr={3}>
                            <Button color='inherit' variant='outlined'>Log In</Button>
                        </Box>
                        <Button color='secondary' variant='contained'>Sing up</Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <main>
                <Paper
                    className={classes.mainFeaturesPost}
                    style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                    <Container fixed>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography component='h1' color='inherit' gutterBottom>
                                        Developer
                                    </Typography>
                                    <Typography component='h5' color='inherit' paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem dolorum
                                        omnis! Aliquam animi assumenda cum, dolor fugit perferendis quas repellendus
                                        saepe tempora veniam voluptates.
                                    </Typography>
                                    <Button variant='contained' color='secondary'>Learn more</Button>

                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </main>
        </>
    );
}

export default App;
