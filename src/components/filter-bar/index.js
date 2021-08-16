import React, { useEffect, useState } from 'react';
import {
    Container, Card, FormControlLabel, Checkbox, Divider, Typography, Toolbar, AppBar, CssBaseline, Drawer, makeStyles, CardContent, InputBase, alpha, FormControl, InputLabel, Select, MenuItem, Button,
    Radio, RadioGroup, FormLabel, Input
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
        background: '#1e272c'
    },
    // necessary for content to be below app bar

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        border: '1px solid #f6fcfd',

        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        color: 'white',
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '300px',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

    formControl1: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty1: {
        color: '#dafffe',
        marginTop: theme.spacing(2),
    },
    textHead1: {
        fontFamily: 'Aladin, handwriting',
        fontSize: '28px',
        fontWeight: 100,
        color: '#d6f9f6',

        fontStyle: 'normal',

        lineHeight: '2em',
        letterSpacing: '0px',
        textShadow: '0px 0px 0px rgba(218, 233, 235, 1)'
    },
    textHead2: {
        fontFamily: 'Arya, sans-serif',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#009788',
        fontStyle: 'normal',
        lineHeight: '2em',
        letterSpacing: '0px',
    },
    textHead3: {
        fontFamily: 'Arya, sans-serif',
        fontSize: '15px',
        color: '#dafffe',
        fontStyle: 'normal',
        lineHeight: '2em',
        letterSpacing: '0px',
    },

    outlineCard: {
        borderColor: 'white',
        borderWidth: '2px',
        backgroundColor: '#273238',
        //backgroundImage: 'linear-gradient( 135deg, #65FDF0 10%, #1D6FA3 100%)',

    },
}));

export default function FilterBar(props) {
    const classes = useStyles();
    //for genre field
    const [genre, setGenre] = React.useState('action');

    const [startYear, setStartYear] = useState('1970');
    const [endYear, setEndYear] = useState('2020');

    const handleSetYear = (startYear, endYear) => {
        setSearchParams({
            ...searchParams,
            ['start_year']: startYear,
            ['end_year']: endYear
        })
    }

    const [minImdb, setminImdb] = useState('6');
    const [maxImdb, setmaxImdb] = useState('7.8');

    const handleSetImdb = (minImdb,maxImdb) => {
        setSearchParams({
            ...searchParams,
            ['min_imdb']: minImdb,
            ['max_imdb']: maxImdb
        })
    }

    console.log('=======startYear=======',startYear)
    console.log('=======endYear=======',endYear)

    const { applyFilter, searchParams, setSearchParams } = props

    const handleChange = (event) => {
        setSearchParams({
            ...searchParams,
            [event.target.name]: event.target.value
        })
        //setType(event.target.value);
        //console.log(event.target.value);
    };

    useEffect(() => {
        if (searchParams) {
            applyFilter(searchParams);
        }
    }, [searchParams])


    return (
        <div>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <Container >
                    <div style={{ textAlign: 'center' }}>
                        <svg style={{ width: '12vw', marginTop: '10px' }} xmlns="http://www.w3.org/2000/svg" data-name="Layer 3" viewBox="0 0 64 32"><path fill="#f5b94c" d="M2,12V9A7,7,0,0,1,9,2H55a7,7,0,0,1,7,7v3a3,3,0,0,0-3,3h0a3,3,0,0,0,3,3v3a7,7,0,0,1-7,7H9a7,7,0,0,1-7-7V18a3,3,0,0,0,3-3H5A3,3,0,0,0,2,12Z" /><path fill="#f9d161" d="M55,2H9a7.026,7.026,0,0,0-1,.08V20a5,5,0,0,0,5,5H60.74A6.962,6.962,0,0,0,62,21V18a3,3,0,0,1,0-6V9A7,7,0,0,0,55,2Z" /><rect width="2" height="4.999" x="12" y="2" fill="#aab1b7" /><rect width="2" height="5.001" x="12" y="8.999" fill="#aab1b7" /><rect width="2" height="5" x="12" y="16" fill="#aab1b7" /><rect width="2" height="5" x="12" y="23" fill="#aab1b7" /><rect width="2" height="4.999" x="12" y="2" fill="#aab1b7" /><rect width="2" height="5.001" x="12" y="8.999" fill="#aab1b7" /><rect width="2" height="5" x="12" y="16" fill="#aab1b7" /><rect width="2" height="5" x="12" y="23" fill="#aab1b7" /><rect width="18" height="12" x="24" y="12" fill="#dd4334" /><rect width="16" height="10" x="26" y="12" fill="#df573d" /><polyline fill="#69737a" points="42.001 14.2 48.001 13 48.001 23 42.001 21.8" /><circle cx="38.001" cy="9" r="3" fill="#43525b" /><path fill="#43525b" d="M30.237,11A3,3,0,1,0,28,12,2.99,2.99,0,0,0,30.237,11Z" /><polygon fill="#fff" points="30 15 30 21 36 18 30 15" /><path fill="#aab1b7" d="M29.492 10.333A2 2 0 1 0 28 11 1.994 1.994 0 0 0 29.492 10.333zM39.491 10.333A2 2 0 1 0 38 11 1.994 1.994 0 0 0 39.491 10.333z" /><polygon fill="#91989d" points="48.001 13 42.001 14.2 42.001 19.8 48.001 21 48.001 13" /></svg>

                    </div>
                    <Typography className={classes.textHead1} style={{ justifyContent: 'center', display: 'flex' }}>
                        Filter
                    </Typography>

                    <Card className={classes.root, classes.outlineCard} variant="outlined" >
                        <CardContent>
                            <FormControl component="fieldset">
                                <Typography className={classes.textHead2} style={{ justifyContent: 'center', display: 'flex' }}>Type</Typography>

                                <RadioGroup className={classes.textHead3} name="type" aria-label="Type" value={searchParams.type} onChange={handleChange}>

                                    <FormControlLabel value="movie" control={<Radio />} label="Movies" />
                                    <FormControlLabel value="show" control={<Radio />} label="Webseries" />

                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                    </Card>

                    <Card className={classes.root, classes.outlineCard} variant="outlined" style={{ marginTop: '20px' }}>
                        <CardContent>


                            <Typography className={classes.textHead2} style={{ justifyContent: 'center', display: 'flex' }}>Start Year</Typography>

                            <form className={classes.root} autoComplete="off" value={searchParams.start_year} >
                                <Input defaultValue="1970" inputProps={{ 'aria-label': 'number', 'color': 'white' }} onChange={(e) => setStartYear(e.target.value)} name="start_year"  className="set_year" inputProps={{ className: classes.textHead3 }}/>

                            </form>


                            <Typography className={classes.textHead2} style={{ justifyContent: 'center', display: 'flex' }}>End Year</Typography>

                            <form className={classes.root} autoComplete="off" value={searchParams.end_year} >
                                <Input defaultValue="2020" inputProps={{ 'aria-label': 'number', 'color': 'white' }} className={classes.selectEmpty1,classes.textHead3} onChange={(e) => setEndYear(e.target.value)} name="end_year" className="set_year" 
                                inputProps={{ className: classes.textHead3 }}/>

                            </form>

                            <Button  className="btn" style={{ margin: '10px' }} onClick={() => handleSetYear(startYear, endYear)}>Set Year</Button>


                        </CardContent>


                    </Card>

                    <Card className={classes.root, classes.outlineCard} variant="outlined" style={{ marginTop: '20px' }}>
                        <CardContent>
                            <Typography className={classes.textHead2} style={{ justifyContent: 'center', display: 'flex' }}>Genre</Typography>
                            <FormControl className={classes.formControl1}>

                                <Select className={classes.textHead3}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    displayEmpty
                                    name="genre"
                                    className={classes.selectEmpty1}
                                    value={searchParams.genre}
                                    onChange={handleChange}>


                                    <MenuItem value={'action'}>Action</MenuItem>
                                    <MenuItem value={'adult'}>Adult</MenuItem>
                                    <MenuItem value={'adventure'}>Adventure</MenuItem>
                                    <MenuItem value={'animation'}>Animation</MenuItem>
                                    <MenuItem value={'biography'}>Biography</MenuItem>
                                    <MenuItem value={'comedy'}>Comedy</MenuItem>
                                    <MenuItem value={'crime'}>Crime</MenuItem>
                                    <MenuItem value={'documentary'}>Documentary</MenuItem>
                                    <MenuItem value={'drama'}>Drama</MenuItem>
                                    <MenuItem value={'family'}>Family</MenuItem>
                                    <MenuItem value={'fantasy'}>Fantasy</MenuItem>
                                    <MenuItem value={'game-show'}>Game-Show</MenuItem>
                                    <MenuItem value={'history'}>History</MenuItem>
                                    <MenuItem value={'horror'}>Horror</MenuItem>
                                    <MenuItem value={'music'}>Music</MenuItem>
                                    <MenuItem value={'musical'}>Musical</MenuItem>
                                    <MenuItem value={'mystery'}>Mystery</MenuItem>
                                    <MenuItem value={'news'}>News</MenuItem>
                                    <MenuItem value={'reality-tv'}>Reality-TV</MenuItem>
                                    <MenuItem value={'romance'}>Romance</MenuItem>
                                    <MenuItem value={'sci-fi'}>Sci-Fi</MenuItem>
                                    <MenuItem value={'short'}>Short</MenuItem>
                                    <MenuItem value={'sport'}>Sport</MenuItem>
                                    <MenuItem value={'talk-show'}>Talk-Show</MenuItem>
                                    <MenuItem value={'thriller'}>Thriller</MenuItem>
                                    <MenuItem value={'war'}>War</MenuItem>
                                    <MenuItem value={'western'}>Western</MenuItem>

                                </Select>
                            </FormControl>
                        </CardContent>

                    </Card>

                    <Card className={classes.root, classes.outlineCard} variant="outlined" style={{ marginTop: '20px' }}>
                        <CardContent>
                            <Typography className={classes.textHead2} style={{ justifyContent: 'center', display: 'flex' }}>Min Imdb</Typography>

                            <form className={classes.root} autoComplete="off" value={searchParams.min_imdb} >
                                <Input defaultValue="6" name="min_imdb" inputProps={{ 'aria-label': 'number', 'color': 'white' }} inputProps={{ className: classes.textHead3 }} onChange={(e) => setminImdb(e.target.value)}/>
                               
                            </form>
                            <Typography className={classes.textHead2} style={{ justifyContent: 'center', display: 'flex' }}>Max Imdb</Typography>

                            <form className={classes.root} autoComplete="off" value={searchParams.max_imdb} >
                                <Input defaultValue="7.8" inputProps={{ className: classes.textHead3 }}  name="max_imdb" onChange={(e) => setmaxImdb(e.target.value)}/>

                            </form>

                            <Button  className="btn" style={{ margin: '10px' }}  onClick={() => handleSetImdb(minImdb,maxImdb)}>Set Imdb</Button>

                        </CardContent>

                    </Card>
                </Container>

            </Drawer>



        </div>
    );
}


