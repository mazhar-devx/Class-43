import Danger from "./components/Alert/Danger";
import Success from "./components/Alert/Success";
import Warn from "./components/Alert/Warning";
function App() {
  return (
    <div>
      <Success text="Record Aded Successfully"/>
      <Danger text="Record Aded Successfully"/>
      <Warn text="Record Aded Successfully"/>
    </div>
  )
}
export default App;