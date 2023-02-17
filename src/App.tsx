import "./App.css";
import Layout from "./Layout";
import { Text } from "@chakra-ui/react";

function App() {
  fetch("https://api.escuelajs.co/api/v1/categories")
    .then((res) => res.json())
    .then((json) => console.log(json));
  return (
    <>
      <Layout />
      <Text>
        {/* https://react-query-v3.tanstack.com/installation
        https://www.youtube.com/watch?v=4FhJkX18fS8&t=1205s */}
      </Text>
    </>
  );
}

export default App;
