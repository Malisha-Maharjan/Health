import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { HomeScreen } from "./screens/homeScreen";

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
};

export default App;
