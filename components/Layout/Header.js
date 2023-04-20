"use client";
import { getToggleNavigation } from "@/redux/actions/_navigation";
import ClearIcon from "@mui/icons-material/Clear";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "./SearchInput";
const Header = () => {
  const dispatch = useDispatch();
  const getStatusNavigation = useSelector((state) => state.navigation.on);
  const handleClickNavigation = () => {
    console.log(getStatusNavigation);
    dispatch(getToggleNavigation(!getStatusNavigation));
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          height: "64px",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "header.background.default",
          color: "text.color.first",
          padding: "10px",
          zIndex: 99,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flex: 1,
            }}
          >
            <IconButton
              onClick={handleClickNavigation}
              sx={{ display: { xs: "flex", sm: "none" } }}
            >
              {!getStatusNavigation && <ReorderIcon />}
              {getStatusNavigation && <ClearIcon />}
            </IconButton>
            <Box>
              <img
                src="https://nhuthz10.github.io/Course-TA/assets/img/Logo.svg"
                width={40}
                height={40}
              />
            </Box>
            <SearchInput />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Box className="btn is-center is-hover">
              <Link href="/learn">
                <Typography>Learn</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Header;
