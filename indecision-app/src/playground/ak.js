let contents="On"
let red=true
let visible=true
let squareStyles=["square","red"]


const changeContents = () => {
  console.log('Change contetns')
  contents = contents === 'On' ? 'Off' : 'On'
  renderApp()
}

const showSquare = () => {
  visible = !visible
  console.log('Visible?',visible)
  renderApp()
}

const changeColor = () => {

  console.log('Change color')

  if(red){
    red=false
  }else{
    red=true
  }


  if(!red) {
    squareStyles=squareStyles.filter((e)=>{
      console.log(e)
      return e !== "red"
    })

    console.log(squareStyles)
  }else{
    squareStyles.push("red")
  }

  renderApp()
}

const renderApp = () => {

    const template = (
        <div>
        <h1>Let's play with squares</h1>
        <button onClick={changeContents}>
           {contents === 'On' ? 'Off' : 'On'}
        </button>
        
        <button onClick={changeColor}>
           Change color
        </button>

        <button onClick={showSquare}>
           {showSquare ? 'Hide square' : 'Show square'}
        </button>

        { visible &&
        <div className={squareStyles.join(' ')}>
          <div className="innerText">{contents}</div>
        </div>
        }
        </div>
      );

    const appRoute = document.getElementById('app');
    ReactDOM.render(template, appRoute);
}

renderApp()