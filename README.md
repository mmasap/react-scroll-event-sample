# React useEffect cleanup 関数によるイベントの削除

ある画面のコンポーネントでブラウザのスクロールを検知する際に以下のようなコードを記述したとします。

```
import React, { useEffect } from 'react';

const DetectScrollEvent = () => {
  useEffect(() => {
    let timer;
    const scrollEvent = () => {
      clearTimeout(timer);
      timer = setTimeout(() => console.log('scroll event'), 500);
    };
    window.addEventListener('scroll', scrollEvent);
  }, []);
}
```

その後、DetectScrollEvent を使用しない画面に遷移し、ブラウザをスクロールすると console に'scroll event'と表示されてしまいます。
原因は React 等を使用した SinglePageAplication ではページの再読み込みが発生しないため、window オブジェクトにイベントを登録すると、ブラウザを閉じるまでイベントが残り続けてしまうためです。

## useEffect cleanup 関数

useEffect 内で return 文に関数を記述するとその画面を離れる際に実行する処理を記入することができます。今回のケースでは、そこでイベントの削除を行う必要があります。

```
import React, { useEffect } from 'react';

const DetectScrollEvent = () => {
  useEffect(() => {
    let timer;
    const scrollEvent = () => {
      clearTimeout(timer);
      timer = setTimeout(() => console.log('scroll event'), 500);
    };
    window.addEventListener('scroll', scrollEvent);

    // add cleanup function
    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);
}
```
