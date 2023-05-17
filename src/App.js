import "./App.css";
import { Header } from "./components/header/Header";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
