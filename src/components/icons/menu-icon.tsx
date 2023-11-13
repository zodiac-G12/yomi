export const MenuIcon = (props: { width?: string; height?: string }) => {
  const {width = '50px', height = '50px'} = props;

  return (
    <div style={{width, height}}>
      <svg version="1.1" id="Capa_1" viewBox="0 0 54 54">
        <circle style={{fill: '#694F87'}} cx="27" cy="27" r="27" />
        <line
          style={{
            'fill': 'none',
            'stroke': '#EBBA16',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-miterlimit': '10',
          }}
          x1="14"
          y1="15"
          x2="40"
          y2="15"
        />
        <line
          style={{
            'fill': 'none',
            'stroke': '#EBBA16',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-miterlimit': '10',
          }}
          x1="10"
          y1="31"
          x2="44"
          y2="31"
        />
        <line
          style={{
            'fill': 'none',
            'stroke': '#EBBA16',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-miterlimit': '10',
          }}
          x1="10"
          y1="23"
          x2="44"
          y2="23"
        />
        <line
          style={{
            'fill': 'none',
            'stroke': '#EBBA16',
            'stroke-width': '2',
            'stroke-linecap': 'round',
            'stroke-miterlimit': '10',
          }}
          x1="14"
          y1="39"
          x2="40"
          y2="39"
        />
      </svg>
    </div>
  );
};
