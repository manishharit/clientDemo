import React, { useState } from "react";
import Employee from "../Components/Employee";
import Vendor from "../Components/Vendor";


import { useNavigate } from "react-router-dom";
const InputForm = () => {
  const [toggleButton, setToggleButton] = useState("Employee");
  const navigate = useNavigate();
  const changeButton = () => {
    if (toggleButton == "Employee") {
      setToggleButton("Vendor");
    } else {
      setToggleButton("Employee");
    }
  };
const EmployeeHandle=()=>{
 navigate("/employees");   
}
const VendorsHandle=()=>{
navigate("/vendors")
}
  return (
    <>
    <div className=" flex flex-col">

      <div className=" flex justify-center">
        <button className=" border px-2 py-1 rounded-lg mt-2 bg-blue-500 font-mono text-white " onClick={changeButton}>Change to {toggleButton}</button>
      </div>
      <div className=" flex justify-center">

      {toggleButton !== "Employee" ? (
        <>
        <div className=" w-1/3">

          <Employee />
        </div>
        </>
      ) : (
        <>
        <div className=" w-1/3">

          <Vendor />
        </div>
        </>
      )}
        </div>

      <div className="flex flex-row justify-center space-x-2">
        <div>
          <button className=" border bg-blue-500 font-mono text-white rounded-md p-1"onClick={EmployeeHandle}>See all Employees</button>
        </div>
        <div>
          <button className=" border bg-blue-500 font-mono text-white rounded-md p-1"onClick={VendorsHandle}>See all Vendors</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default InputForm;

//employee

//vendor
