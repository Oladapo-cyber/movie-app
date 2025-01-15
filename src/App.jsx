// Import necessary components and dependencies from react-router-dom and local files
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

// Main App component that serves as the root of the application
const App = () => {
  return (
    // Main container with dark background and light text colors using Tailwind CSS
    // h-screen ensures the app takes full viewport height
    <div className="bg-[#212121] text-[#e2e2e2] h-screen">
      {/* Header component displayed at the top of the application */}
      <Header />

      {/* Flex container for sidebar and main content */}
      <div className="flex">
        {/* Sidebar component for navigation */}
        <SideBar />

        {/* Routes component to handle different page navigation */}
        <Routes>
          {/* Home route - displays Home component at root path */}
          <Route path="/" element={<Home />} />
          {/* Dynamic route for movie details - :id is a URL parameter */}
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </div>

      {/* Footer component displayed at the bottom of the application */}
      <Footer />
    </div>
  );
};

// Export the App component as the default export
export default App;
