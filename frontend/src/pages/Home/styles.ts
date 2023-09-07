import styled from "@emotion/styled";
import { Box, Paper, Typography, TableRow } from "@mui/material";

export const ButtonContent = styled(Box)({
  display: "flex",
  gap: "1rem",
  justifyContent: "end",
});

export const Content = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  gap: "1rem",
  minHeight: "80vh",
});

export const Title = styled(Typography)({
  display: "flex",
  fontFamily: "Lato",
  fontSize: "1.25rem",
  fontWeight: 700,
  fontStyle: "normal",
  color: "#FFF",
  alignItems: "center",
});

export const BodyRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#FAFAFA",
  },
}));
