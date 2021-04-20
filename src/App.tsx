import { Global } from "@emotion/react";
import globalStyles from "./shared/global";

function App() {
  return (
    <>
      <Global styles={globalStyles} /> App
    </>
  );
}

export default App;
