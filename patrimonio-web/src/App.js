import DepartamentoProvider from "./context/DepartamentoContext";
import RoutesApp from "./routes";

function App() {
  return (
    <DepartamentoProvider>
      <RoutesApp />
    </DepartamentoProvider>
  );
}

export default App;
