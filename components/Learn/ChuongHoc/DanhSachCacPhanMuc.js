"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const DanhSachCacPhanMuc = ({ data }) => {
  return (
    <>
      {data && data.length > 0 && (
        <Box
          sx={{
            backgroundColor: "#f6f7f9",
            padding: "20px",
            borderRadius: "15px",
            border: "2px solid #e5e7eb",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
            }}
          >
            Danh sách các phân mục
          </Typography>
          <Box
            component={"ul"}
            sx={{
              listStyleType: "disc",
              paddingLeft: "30px",
            }}
          >
            {data.map((item, i) => (
              <Link key={i} href={`/learn/phan-muc/${item.slug}`}>
                <Typography component={"li"}>{item.tenPhanMuc}</Typography>
              </Link>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};
export default DanhSachCacPhanMuc;
