"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Introduce = () => {
  return (
    <Box
      sx={{
        paddingTop: "64px",
        width: "100%",

        backgroundColor: "header.background.default",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          color: "text.color.first",
          padding: "20px",
        }}
      >
        <Box>
          {" "}
          <img
            src="https://nhuthz10.github.io/Course-TA/assets/img/Logo.svg"
            width={120}
            height={120}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            OOP Search
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            The website for study OOP
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Link href="/learn">
            <Box className="btn is-normal">Learn OOP</Box>
          </Link>
          <Box className="btn is-normal">About us</Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Introduce;
