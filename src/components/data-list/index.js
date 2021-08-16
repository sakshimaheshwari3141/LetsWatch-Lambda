import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid, useGridParamsApi } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import MovieDetailCard from "../movie-detail-card";
import FilterBar from '../filter-bar';
import Pagination from '@material-ui/lab/Pagination';
import Loader from '../loader'
const useStyles = makeStyles({
  root: {
    "& .super-app-theme--header": {
      backgroundColor: "#1e272c",
      wordBreak: "break-word",
      whiteSpace: "normal",
      textAlign: "center",
      lineHeight: "40px!important",

    },
    "& .super-app-theme--header2": {
      wordBreak: "break-word",
      whiteSpace: "normal",
      textAlign: "center",
    },
    "& .super-app-theme--header3": {
      backgroundColor: "#1e272c",
      wordBreak: "break-word",
      whiteSpace: "normal",
      textAlign: "center",


    },


  },

  ul: {
    "& .MuiPaginationItem-root": {
      color: "#d5f9f5"
    },
    "& .MuiPaginationItem-page": {
      background: "#0a9383"
    }
  }
});

export default function DataList(props) {
  const { movieCardData, getMovieDetail, searchResult, applyFilter, searchParams, setSearchParams , loader} = props
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (searchResult) {
      setResult(searchResult);
    }
  }, [searchResult])

  if (result) {
    result.map((obj, index) => {
      obj["id"] = index;
    });
  }

  const columns = [
    {
      field: "imageurl",
      headerName: "Poster",
      width: 170,
      disableReorder: true,
      headerAlign: "center",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <img
          src={params.value[0]}
          width="180"
          height="200"
          alt="Not Available"
        />
      ),
    },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      headerAlign: "center",
      disableReorder: true,
      sortable: false,
      disableColumnMenu: true,

      cellClassName: "super-app-theme--header3",
      headerClassName: "super-app-theme--header3",

    },
    {
      field: "genre",
      headerName: "genre",
      width: 200,
      disableReorder: true,
      headerAlign: "center",
      sortable: false,
      disableColumnMenu: true,

    },
    {
      field: "imdbrating",
      headerName: "Imdb",
      width: 130,
      headerAlign: "center",
      cellClassName: "super-app-theme--header3",
      headerClassName: "super-app-theme--header3",
      filterable: false,
      hide: false,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "released",
      headerName: "Year",
      width: 120,
      headerAlign: "center",
      cellClassName: "super-app-theme--header2",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "synopsis",
      headerName: "Synopsis",
      width: 400,
      headerAlign: "center",
      cellClassName: "super-app-theme--header",
      headerClassName: "super-app-theme--header3",
      sortable: false,
      disableColumnMenu: true


    },
  ];
  const classes = useStyles();

  //logic to open movie card dialog.
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [page, setPage] = React.useState(1);
  const handlePaginationTabChange = (event, value) => {
    setPage(value);
    setSearchParams({
      ...searchParams,
      ['page']: value
    })
  };

  return (
    <>
       {loader &&
        <Loader />
      }
      {result && result.length > 0 && !loader && (
        <div style={{ height: "100%", marginLeft: '250px', position: 'relative' }} className={classes.root} >
          <DataGrid
            rowHeight={200}
            style={{
              height: "600px",
              background: "#273238",
              fontFamily: "Arya, sans-serif",
              fontSize: "15px",
              color: "#dafffe",
              cursor: 'pointer'
            }}
            hideFooterPagination={true}

            columns={columns}
            rows={result}
            pageSize={0}
            onRowClick={(param, event) => {
              getMovieDetail(param.row.imdbid);
              handleClickOpen();
            }}
          />
          {movieCardData &&
            <MovieDetailCard
              open={open}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              movieCardData={movieCardData}
              setOpen={setOpen}
              loader={loader}
            />
          }
          <Pagination style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }} count={65} page={page} onChange={handlePaginationTabChange} className={classes.ul} />
        </div>
      )}
    </>
  );
}
