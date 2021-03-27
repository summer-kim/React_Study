<h1 align="center"> 📌<em>React_study</em></h1>

<p align="center"><em>Zerocho</em>님의 수업에서 배운 것을 복습하며 만든 클론코딩 <em>Repo</em>입니다.<br/>
제가 직접 기획한 프로젝트는 아니지만 배운 것이 많다고 생각되어 포트폴리오로 선정하였습니다.<br/>
다만, 지뢰찾기 부분인 <a href="https://github.com/summer-kim/React_Study/blob/main/components/findingMine/reducer.js"><em>findingMine Reducer</em></a><br/>
등등 일부는 수업내용과는 다르게 변형하여 작성하였습니다.
 </p>
<br/>

<h1 align="center"> 🌎<em>URL</em></h1>
<!-- <p align="center"><em>💗React Mini Games : <a href="https://reer-summer.herokuapp.com/">Link</a></em></p>
<br/> -->

<img src="https://github.com/summer-kim/React_Study/blob/main/asset/screenshot.png" width="825" height="375">

<h1 align="center"> 🌼<em>Improvement</em><br/>(배운것들)</h1>
<br/>
<p align="center"><em>❤️ React Class Component vs Function Component</em></p>

```
    Function Component 만 주로 사용해서 Class Component는 익숙하지 않았지만,
    여러 자료들이나 코드가 Class Component로 되어있어 배워야할 필요성을 느꼈습니다.
    처음에는 Class Component로 만든 뒤, Function Component로 변환하는 연습을 많이 하였습니다.
    또한 Life Cycle에 있어 두 컴포넌트가 일대일대응이 아니라
    ComponentDidMount, componentDidUpdate는 useEffect로 호환가능하고
    ComponentWillUnmount는 useEffect의 return으로 호환가능함을 배웠습니다.
```

<p align="center"><em>🧡 Webpack, Babel, CRA</em></p>

```
    ReeR 포트폴리오는 CRA를 사용하여 편한 환경에서 코딩을 했는데 이번엔 Webpack과 Babel로 하나하나 셋팅을 하는 법을
    배우면서 프론트엔드 개발환경에 대해 좀더 심도있게 이해하게 되었습니다.
```

<p align="center"><em>💛 Rendering Optimization</em></p>

```
    setInterval setTimeout같은 함수들도 unmount되기 전, clear함수들로 제거를 해줘야 함
```

<p align="center"><em>💚 useReducer, Context API</em></p>

```
    상태관리도구로 Redux에 이어 useReducer도 사용할 수 있습니다.
    Redux에 비해 store같은 boilerplate를 일일이 셋팅해주지 않아도 React에 자동으로 포함되어 있으며,
    Context API와 시너지를 내어 자식에게 Prop으로 전달하지않고
    전역적으로 바로 state Data를 쏴줄 수 있는 편리함이 있습니다.
```

 <br/>
 <h1 align="center"> 🛠<em>Tech/framework used</em></h1>
<br/>
<p align="center"> 💗 <em>FRONT</em> 💗<br/>
  <img src="https://img.shields.io/badge/-React-61dbfb?style=for-the-badge&logo=React&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/-Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/-Babel-F9DC3E?style=for-the-badge&logo=Babel&logoColor=white"/></a>&nbsp
 <br/>

<p align="center"> 💗 <em>DEPLOY</em> 💗<br/>
  <img src="https://img.shields.io/badge/-Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"/>
 </p>
 <br/>

<h1 align="center"> 🎯<em>Game List</em></h1>
<br/>
<p align="center"><em>❤️ FindingMine</em> 지뢰찾기
</br><em>useState, useEffect, useReducer, Context API, useMemo, useCallback, memo</em></p>
<p align="center"><em>🧡 Lotto </em> 로또 추첨기
</br><em>useState, useEffect, useRef, useMemo, useCallback, memo</em></p>
<p align="center"><em>💛 GuessNumber (Bulls and Cows)</em> 숫자 야구
</br><em>useState, useEffect, memo </em></p>
<p align="center"><em>💚 RockScissorsPaper</em> 컴퓨터와 가위바위보
</br><em>useState, useEffect, useRef</em></p>
<p align="center"><em>💙 SpeedMeasure</em> 반응속도체크
</br><em>useState, useRef </em></p>
<p align="center"><em>💜 Multiply</em> 구구단
</br><em>useState, useRef </em></p>
<br/>

<h1 align="center"> ☔️<em>Structure</em></h1>

```
React_Study
├── asset
├── component
│   ├── Display.jsx
│   ├── Games.jsx
│   ├── findingMine (⭐️)
│   │   ├── code.js
│   │   ├── reducer.js
│   │   ├── Form.js
│   │   ├── Table.js
│   │   ├── Tr.js
│   │   ├── Td.js
│   │   └── MineSearch.js
│   ├── guessNumber (⭐️)
│   │   ├── Ball.js
│   │   └── Lotto.js
│   ├── lotto (⭐️)
│   │   ├── Trail.js
│   │   └── GuessNumber.js
│   ├── multiply
│   ├── rockScissorsPaper
│   └── speedMeasure
├── index.html
├── client.jsx
└── webpack.config.js
```
