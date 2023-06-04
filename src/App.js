/* eslint-disable no-unused-vars */
import './App.css';
import ChooseFile from './fs/chooseFile';
import FileView from './fs/fileView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ChooseFile />
          <FileView/>
        </div>
      </header>
    </div>
  );
}

export default App;
