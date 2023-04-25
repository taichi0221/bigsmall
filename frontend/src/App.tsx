import React, { useState } from 'react';
import SameValueComponent from './SameValueComponent';

function App() {
  const [value, setValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleInputChange} />
      <SameValueComponent value={value} />
    </div>
  );
}

export default App;
