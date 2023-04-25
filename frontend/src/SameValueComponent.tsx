import React, { useEffect, useState } from 'react';
import './SameValueComponent.css';

type SameValueComponentProps = {
  value: string;
  count: number;
};

function SameValueComponent(props: SameValueComponentProps) {
  const { value, count } = props;
  const fontSize = 10 * count;
  const [animationStyle, setAnimationStyle] = useState({});

  useEffect(() => {
    // 画面サイズに合わせて、移動範囲を調整するパーセンテージ
    const rangePercentage = 80;

    const randomX = (Math.random() * rangePercentage) - rangePercentage / 2;
    const randomY = (Math.random() * rangePercentage) - rangePercentage / 2;
    // const randomX = Math.random() * 100 - 50;
    // const randomY = Math.random() * 100 - 50;

    const animationKeyframes = `@keyframes randomMove {
      0%, 100% {
        transform: translate(0, 0);
      }
      50% {
        transform: translate(${randomX}%, ${randomY}%);
      }
    }`;

    setAnimationStyle({
      animation: `randomMove 5s infinite`,
      WebkitAnimation: `randomMove 5s infinite`,
    });

    const styleElement = document.createElement('style');
    styleElement.textContent = animationKeyframes;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div
      className="same-value-component"
      style={{
        fontSize: `${fontSize}px`,
        ...animationStyle,
      }}
    >
      {value}
    </div>
  );
}

export default SameValueComponent;
