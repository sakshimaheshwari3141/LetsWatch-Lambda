import React from "react";
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
import MovieDetailCard from "../movie-detail-card";
import "./SearchResult.css";

const useStyles = makeStyles((theme) => ({
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

export default function SearchResult(props) {
  const classes = useStyles();
  const { searchData ,movieCardData, getMovieDetail, handleClickOpen, open, handleClose} = props;
 
  function makeRandomColor(){
    var c = '';
    while (c.length < 6) {
      c += (Math.random()).toString(16).substr(-6).substr(-1)
    }
    return '#' + c;
  }
  

  let color1 = "#ff73b9";
  let color2 = "#ff40a1";

  return (
    <>
      <section className="card-area">
        {console.log('=========searchData=========',searchData)}
       
        {searchData && searchData.map((data, index) => {
          return (
            <section className="card-section" key={index}>
              <div className="card">
                <div className="flip-card">
                  <div className="flip-card__container">
                    <div className="card-front">
                      <div
                        className="card-front__tp"
                        style={{
                          background: `linear-gradient(to bottom,  ${makeRandomColor()} 0%,${makeRandomColor()} 100%)`,
                        }}
                      >
                        <h2 className="card-front__heading">{data.title}</h2>
                       {/*  <p className="card-front__text-price">{data.description}</p> */}
                      </div>

                      <div className="card-front__bt">
                        <p className="card-front__text-view card-front__text-view--city">
                          View me
                        </p>
                      </div>
                    </div>
                    <div className="card-back">
                      <img className="video__container" height='300' src={data.image} />
                    </div>
                  </div>
                </div>

                <div className="inside-page">
                  <div className="inside-page__container">
                    <h3 className="inside-page__heading inside-page__heading--city">
                      Description :
                    </h3>
                    
                    <Button  className="btn" onClick={() => {
            getMovieDetail(data.id);
            handleClickOpen();
          }}>Click for More info</Button>
                    {/* <a href="#" className="inside-page__btn inside-page__btn--city">View deals</a> */}
                   
                    {movieCardData &&
                      <MovieDetailCard
                        open={open}
                        handleClickOpen={handleClickOpen}
                        movieCardData={movieCardData}
                        handleClose={handleClose}
                      />
                    }
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
}
