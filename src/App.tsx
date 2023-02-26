import { AppProvider } from "./context/AppContext";
import Layout from "./Layout";
import "./App.css";

function App() {
  // fetch("https://api.escuelajs.co/api/v1/categories/1/products")
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));
  return (
    <>
      <AppProvider>
        <Layout />
      </AppProvider>
      {/* https://react-query-v3.tanstack.com/installation
        https://www.youtube.com/watch?v=4FhJkX18fS8&t=1205s */}
    </>
  );
}

export default App;
