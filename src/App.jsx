import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./Form";
import Data from "./Data";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";


function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    citizen: false,
    comments: "",
    employement: "",
    ethicity: "",
  });
  const [savedData, setSavedData] = useState(
    JSON.parse(localStorage.getItem("data")) ?? []
  );

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    const newData = savedData.concat(formData)
    setSavedData(newData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      citizen: false,
      comments: "",
      employement: "",
      ethicity: "",
    });
    localStorage.setItem("data", JSON.stringify(newData));
  }

  function deleteData(index){
    const newArray = savedData.filter((item, i) => i !== index )
    setSavedData(newArray)

  }    

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Form
              formData={formData}
              handleChange={handleChange}
              onSubmit={onSubmit}
            />
          }
        />

        <Route path="/data" exact element={<Data savedData={savedData} deleteData={deleteData} />} />
      </Routes>
    </Router>
  );
}

export default App;
