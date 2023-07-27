import {lazy, createEffect, createSignal} from 'solid-js';
import type {Component} from 'solid-js';
import {Router, Routes, Route, hashIntegration} from '@solidjs/router';

const spMaxWidth = 450;
const homeFileName = 'home';
const Home = lazy(() => import(`./pages/${homeFileName}.tsx`));
const authorFileName = 'author';
const Author = lazy(() => import(`./pages/${authorFileName}.tsx`));
const novelFileName = 'novel';
const NovelDetail = lazy(() => import(`./pages/${novelFileName}.tsx`));

const App: Component = () => {
  const [isSP, setIsSP] = createSignal(false);

  createEffect(() => {
    const currentWidth = window.innerWidth;

    const isSP = spMaxWidth > currentWidth ? true : false;

    setIsSP(isSP);
  });

  return (
    <Router source={hashIntegration()}>
      <Routes>
        <Route path="/" element={<Home isSP={isSP} />} />
        <Route
          // path={`/authors/${author.authorID}`}
          path={'/authors/:id'}
          element={<Author isSP={isSP} />}
        />
        <Route
          path={`/authors/:authorID/novels/:novelID`}
          element={<NovelDetail isSP={isSP} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
