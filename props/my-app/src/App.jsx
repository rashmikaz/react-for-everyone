import "./App.css";
import Num from "./Num/Num";
import Type from "./props/Type";
import Str from "./str/Str";

let currentYear = 2025;
let birthYear = 2000;
const age = currentYear - birthYear;

function App() {
  return (
    <>
      {/* <Type name="rashmikas" age="15" /> */}

      {/* <Str
        welcome="Welcome to 30 Days Of React"
        title="Getting Started React"
        subtitle="JavaScript Library"
        firstName="Asabeneh"
        lastName="Yetayeh"
        date="Oct 4, 2020"
      /> */}

      <Num age={age} />
    </>
  );
}

export default App;
