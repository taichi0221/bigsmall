import React from 'react';
import './SameValueComponent.css';

type SameValueComponentProps = {
  value: string;
  count: number;
};

function SameValueComponent(props: SameValueComponentProps) {
  const { value, count } = props;
  const fontSize = 10 * count;

  return (
    <div className="same-value-component" style={{ fontSize: `${fontSize}px` }}>
      {value}
    </div>
  );
}

export default SameValueComponent;
