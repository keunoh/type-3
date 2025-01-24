import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StoryBook from './StoryBook';
import { Memo } from './Memo';
import { Memo2 } from './Memo2';
import { Callback } from './Callback';
import { Callback2 } from './Callback2';
import { MySwiper } from './MySwiper';
import ResponsiveSwiper from './ResponsiveSwiper';
import { Console } from './Console';
import TripleSwiperComponent from './TripleSwiper';
import { MySuspense } from './hook/MySuspense';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
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
    <MySuspense />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
