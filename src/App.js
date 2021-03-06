import React from "react";
import {
    IconButton, Toolbar, Container, AppBar, Typography, Button, Box, CardContent, Paper, Grid, Card, CardMedia,
    CardActions, BottomNavigation, BottomNavigationAction
} from '@mui/material'
import {Menu, Restore, Favorite, LocationOn, Folder} from "@mui/icons-material";
import {makeStyles} from '@mui/styles';
import ApiIcon from '@mui/icons-material/Api';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";


const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        marginBottom: 5,
        marginTop: 5
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
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: 'rgba(0,0,0.3)'
    },
    mainButtons: {
        marginBottom: 25
    },
    mainButtonsContainer: {
        justifyContent: "center"
    },
    mainFeaturesPostContent: {
        position: 'relative',
        padding: 3,
        marginTop: 100,
        marginBottom: 40
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: 4
    }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents')
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
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
                            <Button color='inherit' variant='outlined' onClick={handleClickOpen}>Log In</Button>
                            <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
                                <DialogTitle id='form-dialog-title'>Log In</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>Log in to see videos</DialogContentText>
                                    <TextField autoFocus
                                               margin='dense'
                                               id='name'
                                               label='Email Adress'
                                               type='email'
                                               fullWidth>
                                    </TextField>
                                    <TextField
                                               margin='dense'
                                               id='pass'
                                               label='Password'
                                               type='password'
                                               fullWidth>
                                    </TextField>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color='primary'>Cancel</Button>
                                    <Button onClick={handleClose} color='primary'>Log In</Button>
                                </DialogActions>
                            </Dialog>
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
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography component='h1' variant='h3' color='inherit' gutterBottom>
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
                <div>
                    <Container maxWidth='md'>
                        <Typography variant='h2' align='center' color='Primary' gutterBottom>Developer</Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit. Accusantium asperiores at blanditiis debitis hic
                            inventore, ipsa, molestias nemo non officia omnis pariatur quibusdam recusandae reiciendis
                            sapiente ut voluptatem! Delectus, sapiente.</Typography>

                        <div className={classes.mainButtons}>
                            <Grid container spacing={2} className={classes.mainButtonsContainer}>
                                <Grid item>
                                    <Button variant='contained' color='primary'>Start Now</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>Learn more</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia}
                                               image='https://source.unsplash.com/random'
                                               title='Image title'
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant='h5' gutterBottom>
                                            Blog post
                                        </Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, esse?
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'>View</Button>
                                        <Button size='small' color='primary'>Edit</Button>
                                        <ApiIcon/>
                                        <ArrowCircleRightIcon/>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer>
                <Typography variant='h6' align='center'></Typography>
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                    className={classes.root}
                >
                    <BottomNavigationAction
                        label="Restore"
                        value='restore'
                        icon={<Restore/>}
                    />
                    <BottomNavigationAction
                        label="Favorite"
                        value='favorite'
                        icon={<Favorite/>}
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        value='nearby'
                        icon={<LocationOn/>}
                    />
                    <BottomNavigationAction
                        label="Folder"
                        value='folder'
                        icon={<Folder/>}
                    />
                </BottomNavigation>
                <Typography
                    align='center'
                    color='textSecondary'
                    component='p'
                    variant='subtitle1'
                >
                    React JS Material Ui Site
                </Typography>
            </footer>
        </>
    );
}

export default App;
