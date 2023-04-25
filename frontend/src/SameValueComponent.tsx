import React, { useState, useRef, useEffect } from 'react';

type SameValueComponentProps = {
  value: string;
};

function SameValueComponent(props: SameValueComponentProps) {
  const [count, setCount] = useState(1);
  const { value } = props;
  const prevValue = useRef(value);

  useEffect(() => {
    if (value !== prevValue.current) {
      setCount(count + 1);
      prevValue.current = value;
    }
  }, [value, count]);

  const fontSize = 10 + count;

  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      {value}
    </div>
  );
}

export default SameValueComponent;
