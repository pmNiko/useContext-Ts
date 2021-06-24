import Button from "./components/Button";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <div className="container">
        <Page1 />
        <Page2 />
        <Button />
      </div>
    </Provider>
  );
}

export default App;
