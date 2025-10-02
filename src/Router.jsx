import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<CategoryPage />} />
        <Route path="/category/:type/:item" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Home from "./pages/Home.jsx";
// import CategoryPage from "./pages/Categorypage.jsx";
// import DetailPage from "./pages/DetailPage.jsx";
// // adjust path based on your project structure

// export default function Router() {
//   return (
//     <BrowserRouter>
//       {/* <Navbar /> */}
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/category/:type" element={<CategoryPage />} />
//         <Route path="/category/:type/:item" element={<DetailPage />} />
//       </Routes>

//     </BrowserRouter>
//   );
// }

