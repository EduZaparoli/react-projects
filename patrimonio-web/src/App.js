import DepartamentoProvider from "./context/DepartamentoContext";
import CategoriaProvider from "./context/CategoriaContext"
import PatrimonioProvider from "./context/PatrimonioContext"
import RoutesApp from "./routes";

function App() {
  return (
    <PatrimonioProvider>
      <CategoriaProvider>
        <DepartamentoProvider>
          <RoutesApp />
        </DepartamentoProvider>
      </CategoriaProvider>
    </PatrimonioProvider>
  );
}

export default App;
