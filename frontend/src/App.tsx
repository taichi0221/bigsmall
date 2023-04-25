import React, { useState } from 'react';
import SameValueComponent from './SameValueComponent';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [submittedValues, setSubmittedValues] = useState<{ value: string; count: number }[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    const index = submittedValues.findIndex((item) => item.value === inputValue);

    if (index !== -1) {
      const newSubmittedValues = [...submittedValues];
      newSubmittedValues[index].count += 1;
      setSubmittedValues(newSubmittedValues);
    } else {
      setSubmittedValues([...submittedValues, { value: inputValue, count: 1 }]);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flexGrow: 1 }}>
        {submittedValues.map((item) => (
          <SameValueComponent key={item.value} value={item.value} count={item.count} />
        ))}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSubmit}>送信</button>
      </div>
    </div>
  );
}

export default App;
