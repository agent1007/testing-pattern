import Testing from '../Testing/Testing';
import { Route, Routes } from 'react-router-dom';
import ElementsTest from '../../utils/constans/Tests/ElementsTest';
import ElementsTest2 from '../../utils/constans/Tests/ElementsTest2';


function App() {

  return (
    <div className="App">

      <Routes>
        <Route exact path="/*" element={<Testing
          ElementsTest={ElementsTest}
          ElementsTest2={ElementsTest2} />} />
      </Routes>

    </div>
  );
}

export default App;
