"use client";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import BaiHocLoading from "../BaiHoc/BaiHocLoading";
import DanhSachCacBaiHoc from "./DanhSachCacBaiHoc";

const Content = () => {
  const params = useParams();
  const callDataApi = async (slug) => {
    const results = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_SERVER}/api/v1/phanmuc/chitiet/${slug}`
    );
    return results.data;
  };
  const getListQuery = useQuery(
    ["get-detail-phanmuc", params.slug],
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
  const BreadcrumbItem = styled(Box)(({ theme }) => ({
    textTransform: "uppercase",
    color: "#087ea4",
    fontWeight: 600,
    fontSize: "1.4rem",
  }));
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
          <Breadcrumbs
            separator={
              <KeyboardArrowRightIcon
                sx={{
                  fontSize: "1.2rem",
                }}
              />
            }
            aria-label="breadcrumb"
          >
            <Link
              href={`/learn/phan-loai/${data.data.chuongHoc.phanLoai.slug}`}
            >
              <BreadcrumbItem>
                {data.data.chuongHoc.phanLoai.tenPhanLoai}
              </BreadcrumbItem>
            </Link>
            <Link href={`/learn/chuong-hoc/${data.data.chuongHoc.slug}`}>
              <BreadcrumbItem>
                {data.data.chuongHoc.tenChuongHoc}
              </BreadcrumbItem>
            </Link>
          </Breadcrumbs>
          <Typography
            className="learn__title"
            sx={{
              fontWeight: "700",
              fontSize: "3rem",
              margin: "20px 0",
            }}
          >
            Phân mục: {data.data.tenPhanMuc}
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
          <DanhSachCacBaiHoc data={data.baiHoc}></DanhSachCacBaiHoc>
        </Box>
      )}
    </>
  );
};
export default Content;
