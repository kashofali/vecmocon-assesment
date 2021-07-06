import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "./SideBar";

export default function MainPage() {
  return (
    <div>
      <SideBar />
      <Paper>
        <Grid container>
          <Grid item xs={6}>
            <Typography>On Rental</Typography>
            <Typography>0</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Assets</Typography>
            <Typography>2</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Users</Typography>
            <Typography>3</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Service Alerts</Typography>
            <Typography>2</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
