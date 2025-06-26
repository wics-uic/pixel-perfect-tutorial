import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../views/LandingPage";
import Projects from "../views/Projects";

// This is where we add all our routes for our Personal Website by default, we navigate to the Landing Page
// Whatever page you create, whether it's /blog, /cooking, /about - this maps your URL to the component/page on your website
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}