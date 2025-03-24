import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PaymentProvider } from "./ContextApi/PaymentContext";
import Home from "./Pages/Home";
import StudentPage from "./Pages/StudentPage";
import StudentsPage from "./Pages/StudentsPage";
import PrincipalsPage from "./Pages/PrincipalsPage";
import ChairmanPage from "./Pages/ChairmanPage";
import Navbar from "./Navigation/Navebar";
import StudentDetails from "./Components/StudentDetails";
import "./Styles/stylesPage.css";

function App() {
  return (
    <PaymentProvider>
      <Router>
       <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/student/:name" element={<StudentPage />} />
            <Route path="/principals" element={<PrincipalsPage />} />
            <Route path="/chairman" element={<ChairmanPage />} />
            <Route path="/students/:id" element={<StudentDetails />} />
          </Routes>
        </div>
      </Router>
    </PaymentProvider>
  );
}

export default App;

