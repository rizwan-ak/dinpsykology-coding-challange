import React, { useEffect, useState } from "react";
import { fetchLaunches } from "../common/api";

import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import DPButton from "../common/elements/DPButton";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    // [theme.breakpoints.down("sm")]: { padding: 5 },
    textAlign: "center",
  },
  launchImage: { maxHeight: "80vh", maxWidth: "90vw" },
}));

export default function MainPage() {
  const classes = useStyles();
  const [launchWithAtleast4Pictures, setLaunchWithAtleast4Pictures] = useState(
    []
  );
  const [selectedPic, setSelectedPic] = useState(0);

  // useEffect to fetch data
  useEffect(() => {
    fetchLaunches((val) =>
      setLaunchWithAtleast4Pictures(
        val
          .map((el) => el?.links?.flickr)
          ?.find((el) => el?.original?.length >= 4)?.original
      )
    );
  }, []);

  //handle next button click
  const handleNextClick = () => {
    selectedPic < launchWithAtleast4Pictures.length - 1
      ? setSelectedPic(selectedPic + 1)
      : setSelectedPic(0);
  };

  //handle previous button click
  const handlePreviousClick = () => {
    selectedPic === 0
      ? setSelectedPic(launchWithAtleast4Pictures.length - 1)
      : setSelectedPic(selectedPic - 1);
  };

  //handle random button click
  const handleRandomClick = () => {};

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <img
          src={launchWithAtleast4Pictures[selectedPic]}
          alt="Launch Scene"
          className={classes.launchImage}
        />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="space-around">
        <DPButton value="Previous" onClick={handlePreviousClick} />
        <DPButton
          value="Random"
          color="secondary"
          onClick={handleRandomClick}
        />
        <DPButton value="NEXT" onClick={handleNextClick} />
      </Grid>
    </Grid>
  );
}
