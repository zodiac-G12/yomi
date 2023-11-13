import {Accessor, For} from 'solid-js';
import type {Component} from 'solid-js';
import {css} from 'solid-styled-components';
import {Link} from '@solidjs/router';
import {authors, Author} from '../authors';
import { Crown } from '../components/parts';

const Home: Component<{ isSP: Accessor<boolean> }> = () => {
  return (
    <div class={HomeContainer}>
      <Crown />
      <div style={{padding: '1vh 0 0 15px', color: 'gold'}}>
        {'著者総件数' + ': ' + String(authors.length) + '件'}
      </div>
      <For
        each={authors.sort((a, b) => {
          if (a.author > b.author) {
            return 1;
          }
          return -1;
        })}
      >
        {(author: Author) => {
          return (
            <div class={AuthorItemContainer}>
              <Link href={`/authors/${author.authorID}`} class={AuthorItemView}>
                {author.author.replaceAll('—', ' ').replaceAll(' ', ' ').trim()}
              </Link>
            </div>
          );
        }}
      </For>
    </div>
  );
};

export default Home;

// const Title = css({
//   textAlign: 'center',
//   margin: '20px',
//   fontSize: '20px',
//   fontFamily: 'Gotham Bold',
//   fontWeight: 'Bold',
//   color: 'white',
// });
//
// const Divider = css({
//   borderTop: '2px solid #fff',
//   width: '100%',
// });
//
// const TitleContainer = css({
//   marginLeft: '10%',
//   width: '80%',
// });

const HomeContainer = css({
  background: 'black',
  color: 'white',
  paddingTop: '5vh',
});

const AuthorItemContainer = css({
  padding: '10px',
});

const AuthorItemView = css({
  color: 'white',
  fontSize: '20px',
  fontFamily: 'MyFont',
  padding: '5px',
});

// const Pankuzu = css({
//   marginLeft: '10%',
//   padding: '10px',
//   color: 'gray',
//   fontFamily: 'Gotham Bold',
//   fontWeight: 'Bold',
// });
