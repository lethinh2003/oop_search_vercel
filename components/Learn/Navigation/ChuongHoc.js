"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, IconButton, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PhanMuc from "./PhanMuc";
const ChuongHoc = ({ chuong }) => {
  const [isExpand, setIsExpand] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (pathname.startsWith("/learn/chuong-hoc/")) {
      const getSlugChuongHoc = pathname.split("/")[3];
      setIsActive(getSlugChuongHoc === chuong.slug);
    } else {
      setIsActive(false);
    }
  }, [pathname]);
  const handleClick = (e, chuonghoc) => {
    e.preventDefault();
    router.push(`/learn/chuong-hoc/${chuonghoc.slug}`);
    setIsExpand(true);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            backgroundColor: isActive ? "#e6f7ff" : "",
            padding: "8px 10px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#f6f7f9",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              color: isActive ? "#087ea4" : "#23272f",
            }}
            onClick={(e) => handleClick(e, chuong)}
          >
            {chuong.tenChuongHoc}
          </Typography>

          <IconButton onClick={() => setIsExpand(!isExpand)}>
            {!isExpand && (
              <KeyboardArrowRightIcon
                sx={{
                  width: "20px",
                  height: "20px",
                }}
              />
            )}
            {isExpand && (
              <KeyboardArrowDownIcon
                sx={{
                  width: "20px",
                  height: "20px",
                }}
              />
            )}
          </IconButton>
        </Box>
        <Box
          sx={{
            display: isExpand ? "block" : "none",
          }}
        >
          {chuong.phanMuc?.map((phanmuc, i) => (
            <PhanMuc key={i} phanmuc={phanmuc} />
          ))}
        </Box>
      </Box>
    </>
  );
};
export default ChuongHoc;
