import { Component } from 'react';

var style = {
  wrapper: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    transition: 'background-color 0.25s ease-in-out'
  },
  swatches: {
    position: 'absolute',
    overflow: 'auto',
    margin: 0,
    bottom: '10px',
    right: '10px'
  },
  swatch: {
    display: 'block',
    float: 'left',
    margin: '0 0 0 10px',
    width: '20px',
    height: '20px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'opacity 0.25s ease-in-out'
  }
}

export class BackgroundColor extends Component {

  static state = {
    selected: null
  }

  componentWillMount() {
    this.setState({ selected: this.props.colors[0] });
    this.story = this.props.story();
  }

  selectColor (color) {
    return () => this.setState({ selected: color });
  }

  render () {
    return (
      <div style={Object.assign({},
          style.wrapper,
          { backgroundColor: this.state.selected }
        )}>
        {this.story}
        <ul style={style.swatches}>
          {this.props.colors.map(color => (
            <li
              key={color}
              style={Object.assign({},
                style.swatch, {
                  backgroundColor: color,
                  boxShadow: this.state.selected === color ? 'inset 0 0 0 2px rgba(0, 0, 0, 0.5)' : 'none'
                }
              )}
              onClick={this.selectColor(color)} />
          )) }
        </ul>
      </div>
    );
  }
}

export default colors => story => <BackgroundColor colors={colors} story={story} />;
