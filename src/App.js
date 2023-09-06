import React, { useState, useRef } from 'react';
import { Input, Button, Fab, TextField } from '@mui/material';
import { textState, translatedTextState } from './atoms';
import { useRecoilState } from 'recoil';
import './App.css';

function App() {
  const [text, setText] = useRecoilState(textState);
  const [translatedText, setTranslatedText] = useRecoilState(translatedTextState);
  const [downloadLink, setDownloadLink] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileText = await file.text();
      const lines = fileText.split('\n');
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
      <header className="App-header">
        <div>
          <div>
            <Fab color='primary' aria-label='add'>
              <label for="uploadfile">
                dd
              </label>
            </Fab>
            <Input
              id="uploadfile"
              type="file"
              accept=".txt"
              onInput={handleFileInputChange}
              ref={fileInputRef}
            />
          
          {text && (
            <div>
              {text.split('\n').map((line, i) => (
                <div key={i}>
                  {line}
                  <TextField variant='filled'
                    value={translatedText[i] || ''}
                    onChange={(e) => handleTranslatedTextChange(i, e.target.value)}
                  />
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
          {downloadLink && (
            <div>
              <a href={downloadLink} download="translated.txt">
                Download Translated Text
              </a>
            </div>
          )}
          </div>
        </div>
      </header >
    </div >
  );
}

export default App;
