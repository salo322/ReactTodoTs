import List from "components/List";
import Header from "components/Header";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <Box
      sx={{
        maxWidth: 500,
        width: "auto",
        height: "auto",
        backgroundColor: "#0A2647",
        display: "flex",
        padding: "30px",
        marginTop: "100px",
        flexDirection: "column",
        margin: "100px auto",
      }}
    >
      <Header />
      <List />
    </Box>
  );
};

export default Main;
