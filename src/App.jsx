
import { Routes, Route } from "react-router-dom";
import CategoryGrid from "./pages/home/Home";
import CategoryDetail from "./pages/home/categoryDetails";
import { Toaster } from "react-hot-toast";
import Header from "./pages/home/header";
import Footer from "./pages/home/footer";

function App() {
  return (
    <>
    <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<CategoryGrid />} />
        <Route path="/category/:name" element={<CategoryDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
