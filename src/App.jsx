import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import RightSide from "./components/RightSide";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import About from "./pages/About";

function App() {
  return (
    <Router>
      {/* Full Screen Container */}
      <div
        className="flex justify-center items-center w-screen min-h-screen
                   font-sans rounded-md
                   bg-white dark:bg-[#0A0A0A] 
                   text-gray-900 dark:text-gray-100 
                   lg:overflow-hidden"
      >
        {/* Main Wrapper */}
        <div
          className="flex flex-col lg:flex-row w-[96%] h-auto lg:h-[96vh]
                     border rounded-lg 
                     bg-gray-100 dark:bg-[#0A0A0A] 
                     border-gray-200 dark:border-[#262626]
                     overflow-hidden"
        >
          {/* Sidebar */}
          <div
            className="w-full lg:w-2/5 border-b lg:border-b-0 lg:border-r 
                       border-gray-200 dark:border-[#262626] 
                       h-auto lg:h-full"
          >
            <Sidebar />
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-3/5 h-auto lg:h-full">
            <Routes>
              <Route element={<RightSide />}>
                
                <Route path="/" element={<Navigate to="/about" />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/experience" element={<Experience />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
