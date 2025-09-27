import "./App.css";
import Type from "./props/Type";
import Str from "./str/Str";

function App() {
  return (
    <>
      {/* <Type name="rashmikas" age="15" /> */}

      <Str
        welcome="Welcome to 30 Days Of React"
        title="Getting Started React"
        subtitle="JavaScript Library"
        firstName="Asabeneh"
        lastName="Yetayeh"
        date="Oct 4, 2020"
      />
    </>
  );
}

export default App;
