// libs
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router";

// router
import router from "./router";

function App() {
  // Create a client to query data
  const queryClient = new QueryClient();

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
