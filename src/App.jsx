import "./App.css";
import { AuthProvider } from "./components/provider/AuthProvider";
import Wrapper from "./Wrapper";

function App() {
  return (
    <>
      <AuthProvider>
        <Wrapper />
      </AuthProvider>
    </>
  );
}

export default App;
