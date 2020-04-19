const app = {
    title: "This is my app",
    subtitle: "It is awesome",
    options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log('Form submitted')
  
  const option = e.target.elements.option.value

  if(option){
    app.options.push(option)
    e.target.elements.option.value=""
    renderApp()
  }
}

const onRemoveOptions = (e) => {
    e.preventDefault()
    app.options=[]
    renderApp()
}

const onMakeDecision= () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]

    if(option) {
      alert(option)
    }
}


const appRoute = document.getElementById('app');

const renderApp = () => {

    const template = (
        <div>
          <h1 id="app-title">{app.title}</h1> 
          {app.subtitle && <p>{app.subtitle}</p>}
          
          <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do ?</button>
          <button onClick={onRemoveOptions}>Remove all</button>

          <ol>
          {
              app.options.map((option) => {
                return <li key={option}>{option}</li>
              })
          }
          </ol>
          <form onSubmit={onFormSubmit}>
            <input type="text" name="option"></input>
            <button>Add option</button>
          </form>
        </div>
      );

    ReactDOM.render(template, appRoute);
}

renderApp()
