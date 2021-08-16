import DataList from './components/data-list';
import React , { useState } from 'react';
import {makeStyles} from '@material-ui/core';
import FilterBar from './components/filter-bar';
import axios from "axios";
import SearchBar from './components/search-bar';
import SearchResult from './components/search-result'
import './App.css'
import Loader from './components/loader'

//css 
const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#0a9383',
      outline: '1px solid slategrey'
    }
  },

}));



export default function App() {
  const classes = useStyles();
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useState({
    start_year: "1970",
    end_year: "2020",
    min_imdb: "6",
    max_imdb: "7.8",
    genre: "action",
    language: "english",
    type: "movie",
    sort: "latest",
    page: "1",
  });
  
  console.log('=========searchParams======',searchParams)

  //movie card data code
  const [movieCardData, setMovieCardData] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const getMovieDetail = (imdbId) => {
    let options = {
      method: "GET",
      url: `https://imdb-api.com/en/API/Title/k_9ipg3k0x/${imdbId}/Trailer`,
      headers: {
        'accept': 'text/plain'
      },
    };
    setLoader(true);
    axios
      .request(options)
      .then(function (response) {
        console.log('===========getMovieDetail imdbId=======',imdbId)
        console.log('===========getMovieDetail response=======',response)
        if (response.data) {
          setMovieCardData(response.data);
        }
        setLoader(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoader(false);
      });
  };


  const applyFilter = (params) => {
    var options = {
      method: 'GET',
      url: 'https://ott-details.p.rapidapi.com/advancedsearch',
      params: {
        start_year: params.start_year,
        end_year: params.end_year,
        min_imdb: params.min_imdb,
        max_imdb: params.max_imdb,
        genre: params.genre,
        language: 'english',
        type: params.type,
        sort: "latest",
        page: params.page
      },
      headers: {
        'x-rapidapi-key': 'a883d3207bmshb563db839a6d6e0p10944ejsn070464211615',
        'x-rapidapi-host': 'ott-details.p.rapidapi.com'
      }
    };
    setLoader(true);
    axios
      .request(options)
      .then(function (response) {
        if (response.data) {
          setSearchResult(Object.values(response.data)[1]);
          console.log("==== applyFilter Response data======", Object.values((response.data)))
          setSearchParams(params);
          setLoader(false);
        }
      })
      .catch(function (error) {
        console.error(error);
        setLoader(false);
      });
  };

  const [showFilters, setShowFilters] = useState(true);
  const [expression, setExpression] = useState('');
  const [searchData, setSearchData] = useState(null);

  const applySearch = (expression) => {
    var options = {
      method: 'GET',
      url: `https://imdb-api.com/en/API/SearchAll/k_9ipg3k0x/${expression}`,
    };
    setLoader(true);
    axios
      .request(options)
      .then(function (response) {
        if (response.data) {
          console.log("==== applySearch Response data======", response)
          setSearchData(response.data.results.splice(0,5));
          setLoader(false);
        }
      })
      .catch(function (error) {
        console.error(error);
        setLoader(false);
      });
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  console.log("====searchData======", searchData)
  
  return (
    <>
      <SearchBar
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        expression={expression}
        setExpression={setExpression}
        applySearch={applySearch}
      />
      {loader &&
        <Loader />
      }
      {(!showFilters && searchData) &&
        <SearchResult searchData={searchData} getMovieDetail={getMovieDetail} handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} movieCardData={movieCardData} handleClose={handleClose} />
      }
      {(!showFilters && !searchData && !loader) &&
        <h1
        style={{
          color: "#0a9283",
          fontSize: "50px",
          textAlign: "center",
          
          marginTop: '200px'
        }}
      >
        Sorry! No data found. &#128566;
      </h1>
      }
      
      {showFilters && (
        <>
          <FilterBar
            applyFilter={applyFilter}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <main
            className={classes.content}
            style={{ background: "#273238", height: "100vh" }}
          >
            <div className={classes.toolbar} />
            <h1
              style={{
                color: "#0a9283",
                fontSize: "50px",
                textAlign: "center",
                marginLeft: "200px"
              }}
            >
              Movie List
            </h1>
            <DataList
              style={{ position: "relative" }}
              getMovieDetail={getMovieDetail}
              movieCardData={movieCardData}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              searchResult={searchResult}
              applyFilter={applyFilter}
              loader={loader}
            ></DataList>
          </main>
        </>
      )}
    </>
  );
}

