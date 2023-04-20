"use client";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import TableOfContent from "../Layout/TableOfContent";
import BaiHocLienQuan from "./BaiHocLienQuan";
import BaiHocLoading from "./BaiHocLoading";
const Content = () => {
  const params = useParams();
  const callDataApi = async (slug) => {
    const results = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_SERVER}/api/v1/baihoc/chitiet/${slug}`
    );
    return results.data;
  };
  const getListQuery = useQuery(
    ["get-detail-learning", params.slug],
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
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,

                width: "100%",
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
                  href={`/learn/phan-loai/${data.data.phanMuc.chuongHoc.phanLoai.slug}`}
                >
                  <BreadcrumbItem>
                    {data.data.phanMuc.chuongHoc.phanLoai.tenPhanLoai}
                  </BreadcrumbItem>
                </Link>
                <Link
                  href={`/learn/chuong-hoc/${data.data.phanMuc.chuongHoc.slug}`}
                >
                  <BreadcrumbItem>
                    {data.data.phanMuc.chuongHoc.tenChuongHoc}
                  </BreadcrumbItem>
                </Link>
                <Link href={`/learn/phan-muc/${data.data.phanMuc.slug}`}>
                  <BreadcrumbItem>
                    {data.data.phanMuc.tenPhanMuc}
                  </BreadcrumbItem>
                </Link>
              </Breadcrumbs>
              <Typography
                className="learn__title"
                component={"h1"}
                sx={{
                  fontWeight: "700",
                  fontSize: "3rem",
                  margin: "20px 0",
                }}
              >
                {data.data.tenBaiHoc}
              </Typography>

              <BaiHocLienQuan data={data.data}></BaiHocLienQuan>

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
              {/* <Edit data={data.data} /> */}
            </Box>
            <TableOfContent dataPost={data.data} />
          </Box>
        </>
      )}
    </>
  );
};
export default Content;
