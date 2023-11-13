import { Menu } from './menu';
export const Crown = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        display: 'flex',
        height: '5vh',
        width: '100vw',
        background: 'indigo',
        color: 'white',
      }}
    >
      <div style={{padding: '0.5vh'}}>
        <Menu />
      </div>
      <h1 style={{'line-height': '5vh', 'margin': '0', 'font-size': '3vh'}}>
        YOMI NO KUNI
      </h1>
    </div>
  );
}
