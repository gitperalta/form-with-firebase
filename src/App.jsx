import "./App.css";
import Form from "./components/form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Response from "./components/res/Response";
import Error from "./components/error/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="">
          <Route path="form" element={<Form />} />
          <Route path="response" element={<Response />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
