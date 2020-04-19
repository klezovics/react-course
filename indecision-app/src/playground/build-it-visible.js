// let visible=false


// const toggleShow = () => {
//   if(visible) {
//       visible=false
//   }
//   else{
//       visible=true
//   }
//   renderApp()
// }

// const renderApp = () => {

//     const template = (
//         <div>
//         <h1>Visibility toggle</h1>
//         <button onClick={toggleShow}>
//           {visible ? 'Hide details' : 'Show details'}
//         </button>
//         { visible && <p>Here are the details</p>}
//         </div>
//       );

//     const appRoute = document.getElementById('app');
//     ReactDOM.render(template, appRoute);
// }

// renderApp()

class VisibilityToggle extends React.Component {

  constructor(props) {
    super(props)
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.state = { visible: false }
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }

  render() {
    return (
      <div>
        <h1> Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide' : 'Show'}</button>
        {this.state.visible && <p>Here are the details</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))