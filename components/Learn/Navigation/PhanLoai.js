"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ChuongHoc from "./ChuongHoc";
const PhanLoai = ({ phanLoai }) => {
  const [isExpand, setIsExpand] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (pathname.startsWith("/learn/phan-loai/")) {
      const getSlugPhanLoai = pathname.split("/")[3];
      setIsActive(getSlugPhanLoai === phanLoai.slug);
    } else {
      setIsActive(false);
    }
  }, [pathname]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "10px",
          borderBottom: "2px solid #f2f3f6",
        }}
      >
        <Box
          sx={{
            padding: "8px 10px",
          }}
        >
          <Link href={`/learn/phan-loai/${phanLoai.slug}`}>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: isActive ? "#087ea4" : "#5e687e",
              }}
            >
              {phanLoai.tenPhanLoai}
            </Typography>
          </Link>
        </Box>
        {phanLoai.chuongHoc?.map((chuong, i) => (
          <ChuongHoc key={i} chuong={chuong} />
        ))}
      </Box>
    </>
  );
};
export default PhanLoai;
