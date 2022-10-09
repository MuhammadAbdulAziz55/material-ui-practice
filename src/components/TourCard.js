import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./TourCard.css";
import { Typography } from "@mui/material";
import AccessTime from "@mui/icons-material/AccessTime";
import { Box } from "@mui/material";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

const TourCard = ({ tour }) => {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 13,
            },
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 11,
            },
          },
        ],
      },
    },
  });
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img className="img" src={tour.image} alt="" />
          <Box padding={1}>
            <Typography variant="subtitle2" component="h2">
              {tour.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography marginLeft={0.5} variant="body2" component="p">
                {tour.duration} hours
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={3}
            >
              <Rating
                size="small"
                name="read-only"
                value={tour.rating}
                precision={0.5}
                readOnly
              />
              <Typography marginLeft={0.5} variant="body2" component="p">
                {tour.rating}
              </Typography>
              <Typography marginLeft={1.5} variant="body3" component="p">
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography marginTop={0.5} variant="h6" component="h3">
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
