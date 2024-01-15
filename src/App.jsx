import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";

import { PhotoCamera } from "@material-ui/icons";

const App = () => {
  return (
    <div>
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera />
            <Typography variant="h6">Photo Album</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Hello everyone I am practicing Material UI and I have coded from
                scratch this photo album.
              </Typography>
              <div>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="secondary">
                      See my photos
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </main>
      </>
    </div>
  );
};

export default App;
