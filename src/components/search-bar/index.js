import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  Container,
  Card,
  FormControlLabel,
  Checkbox,
  Divider,
  Typography,
  Toolbar,
  AppBar,
  CssBaseline,
  Drawer,
  makeStyles,
  CardContent,
  InputBase,
  alpha,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Radio,
  RadioGroup,
  FormLabel,
  Input,
} from "@material-ui/core";
import './searchBar.css'
export default function SearchBar(props) {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      width: `100%`,
    },
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerPaper: {
      width: 240,
      background: "#1e272c",
    },
    // necessary for content to be below app bar

    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      border: "1px solid #f6fcfd",

      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      color: "white",
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "300px",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },

    formControl1: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty1: {
      color: "#dafffe",
      marginTop: theme.spacing(2),
    },
    textHead1: {
      fontFamily: "Aladin, handwriting",
      fontSize: "28px",
      fontWeight: 100,
      color: "#d6f9f6",

      fontStyle: "normal",

      lineHeight: "2em",
      letterSpacing: "0px",
      textShadow: "0px 0px 0px rgba(218, 233, 235, 1)",
    },
    textHead2: {
      fontFamily: "Arya, sans-serif",
      fontSize: "18px",
      fontWeight: "bold",
      color: "#009788",
      fontStyle: "normal",
      lineHeight: "2em",
      letterSpacing: "0px",
    },
    textHead3: {
      fontFamily: "Arya, sans-serif",
      fontSize: "15px",
      color: "#dafffe",
      fontStyle: "normal",
      lineHeight: "2em",
      letterSpacing: "0px",
    },

    outlineCard: {
      borderColor: "white",
      borderWidth: "2px",
      backgroundColor: "#273238",
      //backgroundImage: 'linear-gradient( 135deg, #65FDF0 10%, #1D6FA3 100%)',
    },
    
  }));
  const classes = useStyles();
  const {
    showFilters,
    setShowFilters,
    expression,
    setExpression,
    applySearch,
  } = props;

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      style={{ background: "#0a9283" }}
    >
      <Toolbar style={{ marginLeft: "240px" }}>
        <Typography className={classes.textHead1} noWrap>
          Lets Watch
        </Typography>
        <div
          className={classes.search}
          style={{ width: "50ch", marginLeft: "30px" }}
        >
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search for movies, web series or actors."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
              root: classes.customTextField,
            }}
            style={{ width: "60ch" }}
            inputProps={{ "aria-label": "search" }}
            value={expression}
            onChange={(e) => setExpression(e.target.value)}
          />
        </div>
        <Button
          className="btn"
          onClick={() => {
            setShowFilters(false);
            applySearch(expression);
          }}
        >
          {"Search"}
        </Button>
        {!showFilters && (
          <Button
          className="btn"
            onClick={() => setShowFilters(true)}
            style={{ marginLeft: "1rem" }}
          >
            {"Filter"}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
