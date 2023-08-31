import './App.css';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState([]);

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileText = await file.text();
      setText(fileText);
      setTranslatedText(new Array(fileText.split('\n').length).fill(''));
    }
  };

  const handleTranslatedTextChange = (index, value) => {
    const newTranslatedText = [...translatedText];
    newTranslatedText[index] = value;
    setTranslatedText(newTranslatedText);
  };

  const handleExport = async () => {
    const combinedText = translatedText.join('\n');
    await navigator.clipboard.writeText(combinedText);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <label>
              Import text
              <input
                type="file"
                accept=".txt"
                onInput={handleFileInputChange}
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
                <button onClick={handleExport}>Export File</button>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
