// let count=0
// const addOne = () => {
//     count++
//     console.log('Add one',count)
//     renderCounterApp()
// }
// const minusOne = () => {
//     count--
//     console.log('Minus one')
//     renderCounterApp()
// }
// const reset = () => {
//     count=0
//     console.log('Reset')
//     renderCounterApp()
// }



// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//           <h1>Count: {count}</h1>
//           <button onClick={addOne}>+1</button>
//           <button onClick={minusOne}>-1</button>
//           <button onClick={reset}>0</button>
//         </div>
//       );

//       ReactDOM.render(template2, appRoute)
// }

// renderCounterApp()

class Counter extends React.Component{

    constructor(props) {
        super(props)
        this.handleAddOne=this.handleAddOne.bind(this)
        this.handleMinusOne=this.handleMinusOne.bind(this)
        this.handleReset=this.handleReset.bind(this)
        this.state={
            count: 0
        }
    }

    handleAddOne() {
       this.setState((prevState)=>{
           return {
               count: prevState.count + 1
           }
       })
    }

    handleMinusOne() {
        this.setState((prevState)=>{
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset() {
        console.log('Reset')
        this.setState(()=>{
            return {
                count: 0
            }
        })
    }

    componentDidMount() {
       let count = parseInt(localStorage.getItem('count'),10)
       if(isNaN(count)) { 
           console.log('Error reading count')
           count=0
       }
       this.setState(()=>({count}))
    }

    componentDidUpdate(prevProps, prevState) {
       if(prevState.count === this.state.count){
           return
       }  
       
       const count = this.state.count
       localStorage.setItem('count',count)
    }

    render() {
        return (
            <div>
              <h1> Count: {this.state.count}</h1>
              <button onClick={this.handleAddOne}>+1</button>
              <button onClick={this.handleMinusOne}>-1</button>
              <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />,document.getElementById('app'))