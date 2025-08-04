import patrick from "./component/patrick";
import Jon from "./component/Jon";
import Jeanetta from "./component/Jeanetta";
import Kira from "./component/Kira";
import Daniel from "./component/Daniel";

function App() {
  const arrOfComponents = [Daniel, Jon, Jeanetta, patrick, Kira];

  return (
    <>
      {arrOfComponents.map((Component, index) => (
        <div key={index}>
          <Component />
        </div>
      ))}
    </>
  );
}

export default App;
