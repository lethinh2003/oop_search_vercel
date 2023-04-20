"use client";

import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import BaiHocLoading from "../BaiHoc/BaiHocLoading";
import DanhSachCacChuong from "./DanhSachCacChuong";
const Content = () => {
  const params = useParams();
  const callDataApi = async (slug) => {
    const results = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_SERVER}/api/v1/phanloai/chitiet/${slug}`
    );
    return results.data;
  };
  const getListQuery = useQuery(
    ["get-detail-phanloai", params.slug],
    () => callDataApi(params.slug),
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
      {isLoading && <BaiHocLoading />}
      {!isLoading && data && data.data && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            className="learn__title"
            sx={{
              fontWeight: "700",
              fontSize: "3rem",
              margin: "20px 0",
            }}
          >
            Phân loại: {data.data.tenPhanLoai}
          </Typography>
          <Typography
            component="div"
            sx={{
              fontFamily: "Noto Sans",
              width: "100%",
              fontSize: "2rem",
            }}
          >
            <div
              className="content-html"
              dangerouslySetInnerHTML={{ __html: data.data.noiDung }}
            />
          </Typography>
          <DanhSachCacChuong data={data.chuongHoc}></DanhSachCacChuong>
        </Box>
      )}
    </>
  );
};
export default Content;
