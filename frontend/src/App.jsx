import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { CreatePage } from "./pages/CreatePage";
import {Home}  from "./pages/home";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.800")}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<CreatePage/>} />
      </Routes>
    </Box>
  );
}

export default App;
