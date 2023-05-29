/* eslint-disable no-unused-vars */
import './App.css';
import ChooseFile from './fs/chooseFile';
import FileView from './fs/fileView';
import TextWrapper from './fs/textFile/textWrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ChooseFile />
          <TextWrapper/>
        </div>
      </header>
    </div>
  );
}

export default App;
