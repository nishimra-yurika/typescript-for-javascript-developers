import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//action = {
//  type:'CREAT_EVENT'
//  title:'2020東京オリンピックのお知らせ',
//  body:'2020年に東京でオリンピックを開催します！つきましては、、、、、、、'
//}
//#before
//state = []
//
//#after
//state = [
//  {
//    id: 1,
//    title:'2020東京オリンピックのお知らせ',
//    body:'2020年に東京でオリンピックを開催します！つきましては、、、、、、、'
//  }
//]
//

//#before
//state = [
//  { id: 1, title: 'タイトル1', body: 'ボディ1'},
//  { id: 2, title: 'タイトル2', body: 'ボディ2'},
//  { id: 3, title: 'タイトル3', body: 'ボディ3'},
//]

//#after
//state = [
//  { id: 1, title: 'タイトル1', body: 'ボディ1'},
//  { id: 2, title: 'タイトル2', body: 'ボディ2'},
//  { id: 3, title: 'タイトル3', body: 'ボディ3'},
//  { 
//    id: 4,
//    title:'2020東京オリンピックのお知らせ',
//    body:'2020年に東京でオリンピックを開催します！つきましては、、、、、、、'
//  }
//]


const events = (state = [], action) => {
  switch(action, type){
    case 'CREATE_EVENT':
      const event = {title: action.title, body: action.body}
      const Length = state.length
      let id = length === 0 ? 1:state[length -1].id +1
      return [...state,{id: id, ...event}]
    case 'DELETE_EVENT':
      return state
    case 'DELETE_ALL_EVENTS':
      return []
    default:
      return state
  }
}
export default events