"use client";
import { Box } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import PhanLoai from "../Navigation/PhanLoai";

import NavigationLoading from "./NavigationLoading";
const Navigation = () => {
  const callDataApi = async () => {
    const results = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_SERVER}/api/v1/phanloai/get-all`
    );
    return results.data;
  };
  const getListQuery = useQuery(
    ["get-navigation-learning"],
    () => callDataApi(),
    {
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );
  const {
    data,
    isLoading,
    isFetching,
    isError: isErrorQuery,
    error,
  } = getListQuery;

  return (
    <>
      <Box
        sx={{
          marginTop: "64px",
          width: "320px",
          backgroundColor: "header.background.default",
          height: "calc(100vh - 64px)",
          color: "text.color.first",
          display: { xs: "none", sm: "block" },
          top: "64px",
          position: "sticky",
        }}
      >
        <Box
          sx={{
            maxHeight: "calc(100vh - 64px)",
            overflowY: "auto",
          }}
        >
          {isLoading && <NavigationLoading />}
          {!isLoading && (
            <Box
              sx={{
                paddingRight: "1.25rem",
                width: "100%",
                height: "100%",
              }}
            >
              {data &&
                data.data?.map((e, i) => <PhanLoai key={i} phanLoai={e} />)}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
export default Navigation;
