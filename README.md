<h1 align="center"> ๐<em>React_study</em></h1>

<p align="center"><em>Zerocho</em>๋์ ์์์์ ๋ฐฐ์ด ๊ฒ์ ๋ณต์ตํ๋ฉฐ ๋ง๋  ํด๋ก ์ฝ๋ฉ <em>Repo</em>์๋๋ค.<br/>
์ ๊ฐ ์ง์  ๊ธฐํํ ํ๋ก์ ํธ๋ ์๋์ง๋ง ๋ฐฐ์ด ๊ฒ์ด ๋ง๋ค๊ณ  ์๊ฐ๋์ด ํฌํธํด๋ฆฌ์ค๋ก ์ ์ ํ์์ต๋๋ค.<br/>
๋ค๋ง, ์ง๋ขฐ์ฐพ๊ธฐ ๋ถ๋ถ์ธ <a href="https://github.com/summer-kim/React_Study/blob/main/components/findingMine/reducer.js"><em>findingMine Reducer</em></a><br/>
๋ฑ๋ฑ ์ผ๋ถ๋ ์์๋ด์ฉ๊ณผ๋ ๋ค๋ฅด๊ฒ ๋ณํํ์ฌ ์์ฑํ์์ต๋๋ค.
 </p>
<br/>

<h1 align="center"> ๐<em>URL</em></h1>
<!-- <p align="center"><em>๐React Mini Games : <a href="https://reer-summer.herokuapp.com/">Link</a></em></p>
<br/> -->

<img src="https://github.com/summer-kim/React_Study/blob/main/asset/screenshot.png" width="825" height="375">

<h1 align="center"> ๐ผ<em>Improvement</em><br/>(๋ฐฐ์ด๊ฒ๋ค)</h1>
<br/>
<p align="center"><em>โค๏ธ React Class Component vs Function Component</em></p>

```
    Function Component ๋ง ์ฃผ๋ก ์ฌ์ฉํด์ Class Component๋ ์ต์ํ์ง ์์์ง๋ง,
    ์ฌ๋ฌ ์๋ฃ๋ค์ด๋ ์ฝ๋๊ฐ Class Component๋ก ๋์ด์์ด ๋ฐฐ์์ผํ  ํ์์ฑ์ ๋๊ผ์ต๋๋ค.
    ์ฒ์์๋ Class Component๋ก ๋ง๋  ๋ค, Function Component๋ก ๋ณํํ๋ ์ฐ์ต์ ๋ง์ด ํ์์ต๋๋ค.
    ๋ํ Life Cycle์ ์์ด ๋ ์ปดํฌ๋ํธ๊ฐ ์ผ๋์ผ๋์์ด ์๋๋ผ
    ComponentDidMount, componentDidUpdate๋ useEffect๋ก ํธํ๊ฐ๋ฅํ๊ณ 
    ComponentWillUnmount๋ useEffect์ return์ผ๋ก ํธํ๊ฐ๋ฅํจ์ ๋ฐฐ์ ์ต๋๋ค.
```

<p align="center"><em>๐งก Webpack, Babel, CRA</em></p>

```
    ๊ทธ๋์ CRA๋ฅผ ์ฌ์ฉํ  ๋๋ ๋ชฐ๋๋ ํ๋ก ํธ์๋ ๊ฐ๋ฐํ๊ฒฝ์ ๋ํด ์ข๋ ์ฌ๋์๊ฒ ์ดํดํ๊ฒ ๋์์ต๋๋ค.
    ์ฌ๋ฌ๊ฐ๋ก ์ชผ๊ฐ์ ธ ์๋ ์๋ฐ์คํฌ๋ฆฝํธ ํ์ผ์ ๋ฐ๊ธฐ ์ํด ์๋ฒ์ ์ฌ๋ฌ๋ฒ ํต์ ํ๊ฒ ๋๋๊ฒ ๋นํจ์จ์ ์ด์ฌ์
    ํ๋๋ก ํฉ์ณ์ฃผ๋ Webpack๊ฐ์ ๋ชจ๋ ๋ฒ๋ค๋ฌ๊ฐ ํ์ํ๋ค๋ ๊ฒ์ ์ดํดํ์ต๋๋ค.
    ๋ํ Babel loader๋ CSS,file loader์ Plugin,entry,output์
    webpack.config.js์ ์ค์ ํ  ์ ์์ต๋๋ค.
```

<p align="center"><em>๐ Rendering Optimization</em></p>

```
    prop์ด ๋ณ๊ฒฝ๋๊ฑฐ๋ ๋ถ๋ชจ๊ฐ Rerendering๋  ๋ ์์๊น์ง ์ ๋ถ๋ค rerendering๋์ด
    ๋ถํ์ํ Rendering์ด ์ผ์ด๋ ๋ ๋๋ง ์ต์ ํ๋ฅผ ํด์ผํ  ํ์์ฑ์ ์๊ฒ๋์์ต๋๋ค.
    Class Component์์๋ shouldcomponentupdate, Function Component์๋ useMemo, memo, useCallback
    ๋ฑ์ ์ฌ์ฉํ์ฌ ๋ ๋๋ง ์ต์ ํ๋ฅผ ํ  ์ ์์ต๋๋ค.
    ๋ฟ๋ง ์๋๋ผ, setInterval setTimeout๊ฐ์ ํจ์๋ค๋ Unmount๋๊ธฐ ์ , clearํจ์๋ค๋ก ์ ๊ฑฐํ  ์ ์์ต๋๋ค.
```

<p align="center"><em>๐ useReducer, Context API</em></p>

```
    ์ํ๊ด๋ฆฌ๋๊ตฌ๋ก Redux์ ์ด์ด useReducer๋ ์ฌ์ฉํ  ์ ์์ต๋๋ค.
    Redux์ ๋นํด store๊ฐ์ boilerplate๋ฅผ ์ผ์ผ์ด ์ํํด์ฃผ์ง ์์๋ React์ ์๋์ผ๋ก ํฌํจ๋์ด ์์ผ๋ฉฐ,
    Context API์ ์๋์ง๋ฅผ ๋ด์ด ์์์๊ฒ Prop์ผ๋ก ์ ๋ฌํ์ง์๊ณ 
    ์ ์ญ์ ์ผ๋ก ๋ฐ๋ก state Data๋ฅผ ์ด์ค ์ ์๋ ํธ๋ฆฌํจ์ด ์์ต๋๋ค.
```

 <br/>
 <h1 align="center"> ๐ <em>Tech/framework used</em></h1>
<br/>
<p align="center"> ๐ <em>FRONT</em> ๐<br/>
  <img src="https://img.shields.io/badge/-React-61dbfb?style=for-the-badge&logo=React&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/-Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white"/></a>&nbsp
  <img src="https://img.shields.io/badge/-Babel-F9DC3E?style=for-the-badge&logo=Babel&logoColor=white"/></a>&nbsp
 <br/>

<p align="center"> ๐ <em>DEPLOY</em> ๐<br/>
  <img src="https://img.shields.io/badge/-Netlify-00C7B7?style=for-the-badge&logo=Netlify&logoColor=white"/>
 </p>
 <br/>

<h1 align="center"> ๐ฏ<em>Game List</em></h1>
<br/>
<p align="center"><em>โค๏ธ FindingMine</em> ์ง๋ขฐ์ฐพ๊ธฐ
</br><em>useState, useEffect, useReducer, Context API, useMemo, useCallback, memo</em></p>
<p align="center"><em>๐งก Lotto </em> ๋ก๋ ์ถ์ฒจ๊ธฐ
</br><em>useState, useEffect, useRef, useMemo, useCallback, memo</em></p>
<p align="center"><em>๐ GuessNumber (Bulls and Cows)</em> ์ซ์ ์ผ๊ตฌ
</br><em>useState, useEffect, memo </em></p>
<p align="center"><em>๐ RockScissorsPaper</em> ์ปดํจํฐ์ ๊ฐ์๋ฐ์๋ณด
</br><em>useState, useEffect, useRef</em></p>
<p align="center"><em>๐ SpeedMeasure</em> ๋ฐ์์๋์ฒดํฌ
</br><em>useState, useRef </em></p>
<p align="center"><em>๐ Multiply</em> ๊ตฌ๊ตฌ๋จ
</br><em>useState, useRef </em></p>
<br/>

<h1 align="center"> โ๏ธ<em>Structure</em></h1>

```
React_Study
โโโ asset
โโโ component
โ   โโโ Display.jsx
โ   โโโ Games.jsx
โ   โโโ findingMine (โญ๏ธ)
โ   โ   โโโ code.js
โ   โ   โโโ reducer.js
โ   โ   โโโ Form.js
โ   โ   โโโ Table.js
โ   โ   โโโ Tr.js
โ   โ   โโโ Td.js
โ   โ   โโโ MineSearch.js
โ   โโโ guessNumber (โญ๏ธ)
โ   โ   โโโ Ball.js
โ   โ   โโโ Lotto.js
โ   โโโ lotto (โญ๏ธ)
โ   โ   โโโ Trail.js
โ   โ   โโโ GuessNumber.js
โ   โโโ multiply
โ   โโโ rockScissorsPaper
โ   โโโ speedMeasure
โโโ index.html
โโโ client.jsx
โโโ webpack.config.js
```
