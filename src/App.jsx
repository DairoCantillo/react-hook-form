import BasicForm from "./components/BasicForm/BasicForm";
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Layout className="App">
      <Routes>
        <Route path="/" element={<BasicForm />} />
        <Route path="/test" element={<h1>route test</h1>} />
      </Routes>
    </Layout>
  );
};

export default App;
