import React, { useState, useRef } from 'react';
import { Button, Fab, AppBar, Toolbar, useScrollTrigger } from '@mui/material';
import { textState, translatedTextState, fileState } from './atoms';
import { useRecoilState } from 'recoil';
import './App.css';

function App() {
  const [text, setText] = useRecoilState(textState);
  const [translatedText, setTranslatedText] = useRecoilState(translatedTextState);
  const [file, setFile] = useRecoilState(fileState);
  const [downloadLink, setDownloadLink] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileText = await file.text();
      const lines = fileText.split('\n');
      setFile(file);
      setText(fileText);
      setTranslatedText(new Array(lines.length).fill(''));
      setDownloadLink(null);
    }
  };

  const handleTranslatedTextChange = (index, value) => {
    const newTranslatedText = [...translatedText];
    newTranslatedText[index] = value;
    setTranslatedText(newTranslatedText);
  };

  const handleExport = () => {
    const combinedText = translatedText.join('\n');
    const blob = new Blob([combinedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    setDownloadLink(url);

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'translated.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="App">
      <AppBar position='fixed'>
        <Toolbar>
          <Fab color='primary' aria-label='add'>
            <label for="uploadfile">
              dd
            </label>
            <input
              id="uploadfile"
              type="file"
              accept=".txt"
              onInput={handleFileInputChange}
              ref={fileInputRef}
            />
          </Fab>
        </Toolbar>



        {file && <div>File: {file.name}</div>}

        {downloadLink && (
          <div>
            <a href={downloadLink} download="translated.txt">
              Download Translated Text
            </a>
          </div>
        )}
      </AppBar>
      <header className="App-header">
        <div>
          <div>
            {text && (
              <div>
                {text.split('\n').map((line, i) => (
                  <div key={i} className='container'>
                    <span className='line-number'>{i + 1}</span>
                    <div>{line}</div>
                    <div><textarea value={translatedText[i] || ''} onChange={(e) => handleTranslatedTextChange(i, e.target.value)} /></div>
                  </div>
                ))}
              </div>
            )}
            {text && (
              <div>
                <div>Click the button to save text to clipboard</div>
                <Button variant='contained' onClick={handleExport}>Export File</Button>
              </div>
            )}
          </div>
        </div>
      </header >
    </div >
  );
}

export default App;
