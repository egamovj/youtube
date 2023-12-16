import { Box } from "@mui/material";
import { Routes, Route, Outlet } from "react-router-dom";
import { Min, Channel, VideoDetail, Search, Navbar } from "./components/index";
import { Library, Shorts, Subscriptions, WatchLater } from "./pages";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Min />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/shorts" element={<Shorts/>}/>
        <Route path="/subscriptions" element={<Subscriptions/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/history" element={<WatchLater/>}/>
      </Routes>
      <Outlet />
    </Box>
  );
}

export default App;
