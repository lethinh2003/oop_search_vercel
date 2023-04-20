"use client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, IconButton, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BaiHoc from "./BaiHoc";
const PhanMuc = ({ phanmuc }) => {
  const [isExpand, setIsExpand] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (pathname.startsWith("/learn/phan-muc/")) {
      const getSlugPhanMuc = pathname.split("/")[3];
      setIsActive(getSlugPhanMuc === phanmuc.slug);
    } else {
      setIsActive(false);
    }
  }, [pathname]);
  const handleClick = (e, phanmuc) => {
    e.preventDefault();
    router.push(`/learn/phan-muc/${phanmuc.slug}`);
    setIsExpand(true);
  };
  return (
    <>
      <Box
        sx={{
          padding: "8px 10px",
          paddingLeft: "15px",
          cursor: "pointer",
          backgroundColor: isActive ? "#e6f7ff" : "",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          "&:hover": {
            backgroundColor: "#f6f7f9",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            color: isActive ? "#087ea4" : "#404756",
          }}
          onClick={(e) => handleClick(e, phanmuc)}
        >
          {phanmuc.tenPhanMuc}
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
        {phanmuc.baiHoc?.map((baihoc, i) => (
          <BaiHoc key={i} baihoc={baihoc} />
        ))}
      </Box>
    </>
  );
};
export default PhanMuc;
