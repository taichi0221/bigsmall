import React, { useState } from 'react';
import SameValueComponent from './SameValueComponent';

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  // useState フックを使って、状態変数 inputValue を定義する。
  // <string> は TypeScript のジェネリック型引数で、状態変数が文字列型であることを明示している。
  // useState に渡された引数 '' は、inputValue の初期値として空文字列を設定している。
  // この初期値は、コンポーネントが最初にレンダリングされる際に inputValue に設定される。
  // setInputValue は、inputValue の状態を更新するための関数である。
  // この関数に新しい値を渡すことで、inputValue の状態を更新し、コンポーネントが再レンダリングされる。

  const [submittedValues, setSubmittedValues] = useState<{ value: string; count: number }[]>([]);

  // useState フックを使って、状態変数 submittedValues を定義する。
  // submittedValues は、送信された値とその送信回数を保持するオブジェクトの配列である。
  // オブジェクトは、value（送信されたテキスト）と count（送信された回数）という2つのプロパティを持つ。
  // 初期値は空の配列である。
  // setSubmittedValues は、submittedValues の状態を更新するための関数である。
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // handleInputChange は、<input> 要素で発生する onChange イベントに対応するイベントハンドラ関数。
  // event 引数は、<input> 要素で発生する onChange イベントを表す。
  // 関数内では、event.target.value を使って、<input> 要素の現在の値を取得する。
  // その値を setInputValue 関数に渡して、状態変数 inputValue を更新する。
  // event という名前の引数は自分で変更できる、React.ChangeEvent<HTMLInputElement> は React で定義された型　変更×

  const handleSubmit = () => {
    // handleSubmit アロー関数を定義
    const index = submittedValues.findIndex((item) => item.value === inputValue);
    // submittedValues 配列から inputValue と一致する要素のインデックスを検索
    // 条件に一致すればfindiIndexはtrue、条件に一致する要素がない場合、findIndex は -1 を返す

    // inputValue がすでに submittedValues 配列に存在するかどうかをチェック
    if (index !== -1) {
      // inputValue が存在する場合

      // submittedValues を新しい配列にコピー
      const newSubmittedValues = [...submittedValues];
      // 該当する要素の count プロパティをインクリメント
      newSubmittedValues[index].count += 1;
      // 更新された配列を setSubmittedValues を使って state に保存
      setSubmittedValues(newSubmittedValues);
    } else {
      // inputValue が存在しない場合

      // submittedValues 配列に新しい要素を追加し、count を 1 に設定
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
