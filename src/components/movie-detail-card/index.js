import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ButtonBase from '@material-ui/core/ButtonBase';
import './MovieDetailCard.css';
import { useEffect } from 'react';
import Loader from '../loader'


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  textHead3: {
    fontFamily: 'Arya, sans-serif',
    fontSize: '15px',
    color: '#dafffe',
    fontStyle: 'normal',
    lineHeight: '2em',
    letterSpacing: '0px',
  },
  ulx: {
    "& .MuiCardMedia-media	": {
      width: '410px'
    },

  }


});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});



const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function MovieDetailCard(props) {
  const { open, handleClose, handleClickOpen, movieCardData,loader  } = props

  console.log('==========movieCardData========', movieCardData)

  const setIframeStyle = () => {
    let iframeElem = window.getElementById('imdb-player')
    console.log('=========iframe loadded=======',iframeElem)
  }

  useEffect(() => {
    window.addEventListener('load', setIframeStyle);
  })

  return (
    <>
      {movieCardData && !movieCardData.id && (
        <Dialog open={open} onClose={handleClose} maxWidth='xs' >
          <DialogContent>No data Available</DialogContent>
        </Dialog>
      )}
      {loader &&
        <Loader />
      }
      {(movieCardData && movieCardData.id && !loader)&& (<Dialog maxWidth='md' onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle   style={{ color: '#cdeeee', textAlign: 'center', backgroundColor: '#0a9383', position: 'relative'}} onClose={handleClose} className="movie-detail-card-title">
          {movieCardData.title}
        </DialogTitle>
        <DialogContent dividers>
          <div id="container">

            <div className="product-details">

              <p className="information" style={{ wordWrap: 'break-word' }}>{movieCardData.plot}</p>
              {movieCardData.trailer && movieCardData.trailer.linkEmbed &&
                 
                 <iframe src={movieCardData.trailer.linkEmbed+"?autoplay=false&width=450"}  height='250' width='800' allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" frameborder="no" scrolling="no"></iframe> 
                 
              }
             
             {/*  <iframe src="{movieCardData.trailer.linkEmbed}?autoplay=false&width=404" width="854" height="480" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" frameborder="no" scrolling="no"></iframe> */}
            </div>
            <div className="product-image">
              <img src={movieCardData.image} alt="" />
              <div className="info">
                <h2> Description</h2>
                <ul>
                  <li><strong>Year : </strong>{movieCardData.year}</li>
                  <li><strong>Content Rating : </strong>{movieCardData.contentRating}</li>
                  <li><strong>Movie Length : </strong>{movieCardData.runtimeStr}</li>
                  <li><strong>Rating : </strong>{movieCardData.imDbRating}</li>
                  <li><strong>Directors : </strong>{movieCardData.directors}</li>
                  <li><strong>Cast : </strong>{movieCardData.stars}</li>
                </ul>
              </div>
            </div>
          </div>


        </DialogContent>
      </Dialog>)}
     
    </>
  );
}









/*

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',

  },
  image: {
    width: 250,
    height: 350,
  },
  img: {
    width: 250,
    height: 350,
    display: 'block',

  },
}));
 */
/* export default function MovieDetailCard(props) {
  const { open, handleClose, handleClickOpen, movieCardData } = props
  const classes = useStyles();

  console.log('==========movieCardData========', movieCardData)

  return (

    <div>

      <Dialog PaperProps={{
        style: {
          backgroundColor: '#273238'
        },
      }} maxWidth='md' onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle style={{ color: '#cdeeee', textAlign: 'center', backgroundColor: '#0a9383'  }} id="customized-dialog-title" onClose={handleClose}>
          {movieCardData.title}
        </DialogTitle>

        <DialogContent dividers>
        <Paper className={classes.paper} style={{backgroundImage: `url(${movieCardData.image})` ,opacity: '0.2'}}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img  className={classes.img} alt="complex" src={movieCardData.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                <strong>Description : </strong>{movieCardData.plot}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                <strong>Release Year : </strong>{movieCardData.year}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                <strong>Content Rating : </strong>{movieCardData.contentRating}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                <strong>Movie Length : </strong>{movieCardData.runtimeStr}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                <strong>Rating : </strong>{movieCardData.imDbRating}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                <strong>Directors : </strong>{movieCardData.directors}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                <strong>Cast : </strong>{movieCardData.stars}
                </Typography>

              </Grid>

            </Grid>

          </Grid>
        </Grid>
      </Paper>

      <Grid><CardMedia
          component="iframe"
          width = "100%"
          height = "400"
          image= {movieCardData.trailer.linkEmbed}
          /></Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
} */