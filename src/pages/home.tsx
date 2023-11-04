import {Accessor, For} from 'solid-js';
import type {Component} from 'solid-js';
import {css} from 'solid-styled-components';
import {Link} from '@solidjs/router';
import {authors, Author} from '../authors';

const Icon = (props: {
  width?: string;
  height?: string;
}) => {
  const { width = "50px", height = "50px" } = props;

  return (
    <div style={{width, height}}>
      <svg version="1.1" id="Capa_1" viewBox="0 0 54 54">
        <circle style="fill:#694F87;" cx="27" cy="27" r="27"/>
        <line style="fill:none;stroke:#EBBA16;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="14" y1="15" x2="40" y2="15"/>
        <line style="fill:none;stroke:#EBBA16;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="10" y1="31" x2="44" y2="31"/>
        <line style="fill:none;stroke:#EBBA16;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="10" y1="23" x2="44" y2="23"/>
        <line style="fill:none;stroke:#EBBA16;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="14" y1="39" x2="40" y2="39"/>
      </svg>
    </div>
  );
}

const Home: Component<{ isSP: Accessor<boolean> }> = () => {
  return (
    <div class={HomeContainer}>
      <div style={{position: "fixed", top: "0", display: 'flex', height: "5vh", width: "100vw", background: "indigo", color: "white"}}>
        <div style={{padding: "0.5vh"}}>
          <Icon width={"4vh"} height={"4vh"}/>
        </div>
        <h1 style={{"line-height": "5vh", margin: "0", "font-size": "3vh"}}>YOMI NO KUNI</h1>
      </div>
      <div style={{padding: "1vh 0 0 15px", color: "gold"}}>
        {"著者総件数" + ": " + String(authors.length) + "件"}
      </div>
      <For each={authors}>
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
  color: "white",
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
