import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './testing/reportWebVitals';
import App from './hook/useActionState/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    {/* <StoryBook /> */}
    {/* <Memo /> */}
    {/* <Memo2 /> */}
    {/* <Callback /> */}
    {/* <Callback2 /> */}
    {/* <MySwiper /> */}
    {/* <DomHandling /> */}
    {/* <ResponsiveSwiper /> */}
    {/* <Console /> */}
    {/* <TripleSwiperComponent /> */}
    {/* <MyPromise /> */}
    {/* <MySuspense /> */}
    {/* <Counter /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
