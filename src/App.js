import InputForm from "../src/Components/InputForm";
import VendorTable from "../src/Components/VendorTable";
import EmployeeTable from "../src/Components/EmployeeTable";
import { Routes, Route ,BrowserRouter} from "react-router-dom";
import ShowAllEmails from "../src/Components/InputForm";
import './App.css';
import ShowSendEmails from "./Components/ShowSendEmails";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputForm />} />
        <Route path="/vendors" element={<VendorTable />} />
        <Route path="/employees" element={<EmployeeTable />} />
        <Route path="/allemails" element={<ShowSendEmails />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
