import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  BottomNavigation,
} from "@mui/material";

import ImageCollage from "../ImageCollage";
import CustomizedAccordions from "../Accordian";
import BasicModal from "../Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the world in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/99.jpg"
          alt=""
          height={325}
          width={500}
        />
        <ImageCollage></ImageCollage>
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this tour
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Islam (/ˈɪslɑːm/;[a] Arabic: الإسلام, al-ʿIslām [ɪsˈlaːm] (listen),
          transl. "Submission [to God]")[6][7][8] is an Abrahamic monotheistic
          religion centred primarily around the Quran, a religious text
          considered by Muslims[9] to be the direct word of the God of Abraham
          (or Allah) as it was revealed to Muhammad, the main and final Islamic
          prophet.[10][11] It is the world's second-largest religion behind
          Christianity, with its followers ranging between 1-1.8 billion
          globally, or around 25 percent of the world population.[5][12][13]
          Islam teaches that God is merciful, all-powerful, and unique,[14] and
          has guided humanity through various prophets, revealed scriptures, and
          natural signs, with the Quran serving as the final and universal
          revelation and Muhammad serving as the "Seal of the Prophets" (the
          last prophet of God).[11][15] The teachings and practices of Muhammad
          (sunnah) documented in traditional collected accounts (hadith) provide
          a secondary constitutional model for Muslims to follow after the
          Quran.[16]: 63 
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Question
        </Typography>
        <CustomizedAccordions></CustomizedAccordions>
      </Box>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation style={{ backgroundColor: "lightGray" }}>
          <BasicModal></BasicModal>
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
