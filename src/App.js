//https://mui.com/material-ui/react-autocomplete/
//materail ui

import React, { useState, useRef } from 'react';
import { Input, Button } from '@mui/material';

function App() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState([]);
  const [downloadLink, setDownloadLink] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileText = await file.text();
      setText(fileText);
      setTranslatedText(new Array(fileText.split('\n').length).fill(''));
      setDownloadLink(null); // Reset the download link
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

    // Trigger the download
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'translated.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Clean up the URL
    URL.revokeObjectURL(url);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <label>
              Import text
              <Input
                type="file"
                accept=".txt"
                onInput={handleFileInputChange}
                ref={fileInputRef}
              />
            </label>
          </div>
          <div>
            {text && (
              <div>
                {text.split('\n').map((line, i) => (
                  <div key={i}>
                    {line}
                    <textarea
                      value={translatedText[i] || ''}
                      onChange={(e) => handleTranslatedTextChange(i, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {text && (
              <div>
                <div>Click the button to save text to clipboard</div>
                <Button onClick={handleExport}>Export File</Button>
              </div>
            )}
          </div>
          {downloadLink && (
            <div>
              <a href={downloadLink} download="translated.txt">
                Download Translated Text
              </a>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
