import { RouterProvider } from "react-router-dom";
import { router } from "@/app/Router"; // ← lowercase r

function App() {
  return <RouterProvider router={router} />;
}

export default App;