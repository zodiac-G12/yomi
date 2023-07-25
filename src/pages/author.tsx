import {For, Accessor} from 'solid-js';
import type {Component} from 'solid-js';
import {css} from 'solid-styled-components';
import {Link, useParams} from '@solidjs/router';
import {authors, Novel} from '../authors';

const AuthorDetail: Component<{
  isSP: Accessor<boolean>;
}> = (props) => {
  const params = useParams();

  const author = authors.find((author) => author.authorID === params.id);

  if (!author) {
    return <>Author Not Found</>;
  }

  return (
    <div class={AuthorDetailContainer}>
      <div class={AuthorNameView}>{author.author}</div>
      <For each={author.novels}>
        {(novel: Novel) => {
          return (
            <div class={NovelItemContainer}>
              <Link
                class={NovelItemView}
                href={`/authors/${params.id}/novels/${novel.novelID}`}
              >
                {novel.novelTitle
                    .replaceAll('—', ' ')
                    .replaceAll(' ', ' ')
                    .trim()}
              </Link>
            </div>
          );
        }}
      </For>
    </div>
  );
};

export default AuthorDetail;

const AuthorNameView = css({
  color: 'white',
  textAlign: 'center',
  fontSize: '25px',
  fontFamily: 'MyFont',
  padding: '10px',
});

const AuthorDetailContainer = css({
  background: 'black',
  height: '100vh',
});

const NovelItemContainer = css({
  padding: '10px',
});

const NovelItemView = css({
  color: 'white',
  fontSize: '20px',
  fontFamily: 'MyFont',
  padding: '5px',
});
