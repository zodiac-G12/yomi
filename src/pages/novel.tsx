import {
  lazy,
  createEffect,
  createSignal,
  For,
  Accessor,
  createResource,
  onCleanup,
} from 'solid-js';
import type {Component} from 'solid-js';
import {Router, Routes, Route, Link, useParams} from '@solidjs/router';
import {authors, Author, Novel} from '../authors';
import {css} from 'solid-styled-components';
import SolidMarkdown from 'solid-markdown';

const getNovel = async (props: { authorID: string; novelID: string }) => {
  const {authorID, novelID} = props;

  const path = new URL(
      `/src/assets/cards/${authorID}/files/${novelID}/${novelID}.txt`,
      import.meta.url
  ).href;

  const response = await fetch(path);

  const result = await response.text();

  // const head = result.split("\n").slice(0, 3).join("\n");

  const sentence = result
      .replace(
          /.*?(?=\-------------------------------------------------------)/s,
          ''
      )
      .replaceAll(/［[^\］]*］/g, '')
      .replaceAll(
          /-------------------------------------------------------([\s\S]*?)-------------------------------------------------------/g,
          ''
      )
      .replace(/\n{2,}/g, '\n')
      .replace(/ +/g, ' ')
      .replace(/—/g, '-');

  // return head + sentence;
  return sentence;
};

const NovelDetail: Component<{
  isSP: Accessor<boolean>;
}> = (props) => {
  const params = useParams();

  const [count, setCount] = createSignal(0);

  const author = authors.find((author) => author.authorID === params.authorID);

  if (!author) {
    return <>Author Not Found</>;
  }

  const {novels} = author;

  if (!novels) {
    return <>Novels Not Found</>;
  }

  const novel = novels.find((novel) => novel.novelID === params.novelID);

  if (!novel) {
    return <>Novel Not Found</>;
  }

  const [data] = createResource(
      {authorID: params.authorID, novelID: params.novelID},
      getNovel
  );

  const [sentence, setSentence] = createSignal(data()?.toString());

  const [isStop, setIsStop] = createSignal(false);
  const [scrollHeight, setScrollHeight] = createSignal(0);
  const [scrollTop, setScrollTop] = createSignal(0);

  const handleClick = () => {
    setIsStop(!isStop());
  };

  createEffect(async () => {
    const dataValue = data();

    if (isStop()) {
      return;
    }

    if (!dataValue) {
      const timer = setInterval(() => setCount(count() + 0), 100);
      onCleanup(() => clearInterval(timer));
    } else {
      const timer = setInterval(
          () => {
            (setCount(count() + 1), setSentence(dataValue.slice(0, count())));
            if (document.scrollingElement) {
              console.log(scrollTop(), scrollHeight());
              setScrollHeight(document.scrollingElement.scrollHeight);
              setScrollTop(scrollHeight());
              document.scrollingElement.scrollTop = scrollTop();
            }
          },
          100
      );
      onCleanup(() => clearInterval(timer));
    }
  });

  return (
    <div class={NovelDetailContainer} onClick={handleClick}>
      <div class={Fantom}></div>
      <div class={NovelTitle}>{novel.novelTitle}</div>
      <div class={NovelAuthor}>{novel.author}</div>
      <div class={NovelSentence}>{sentence()}</div>
      {/* <SolidMarkdown
        class={NovelSentence}
        children={sentence()}
      />
      */}
    </div>
  );
};

export default NovelDetail;

const Fantom = css({
  position: "fixed",
  height: 'calc(100vh - 20px)',
  width: 'calc(100vw - 20px)',
  background: "rgba(0,0,0,0)",
  zIndex: 1,
});

const NovelDetailContainer = css({
  background: 'black',
  padding: '10px',
  zIndex: 2,
});

const NovelTitle = css({
  color: 'white',
  textAlign: 'center',
  fontSize: '25px',
  fontFamily: 'MyFont',
  padding: '10px',
  zIndex: 2,
});

const NovelAuthor = css({
  color: 'white',
  textAlign: 'center',
  fontSize: '20px',
  fontFamily: 'MyFont',
  padding: '10px',
  marginBottom: '20px',
  zIndex: 2,
});

const NovelSentence = css({
  color: 'white',
  fontSize: '18px',
  fontFamily: 'MyFont',
  whiteSpace: 'pre-line',
  zIndex: 2,
  marginBottom: "5vw",
});
