const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do</button>
        </div>
    );

}

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p> Options appear here </p>}
            {props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption} />
            )
            )}
            <button onClick={props.handleDeleteOptions}>Remove all</button>
        </div>
    )
}

class AddOption extends React.Component {

    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }))

        if(!error) {
            e.target.elements.option.value = ''
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            > Remove </button>
        </div>
    );
}

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        const json = localStorage.getItem('options')
        try {
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({ options }))
            }
        }catch(e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter((item) => item !== option)
        }))
    }

    handlePick() {
        const options = this.state.options
        const randomNum = Math.floor(Math.random() * options.length);
        const option = options[randomNum]
        alert(option)
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    render() {
        const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
// const User = (props) => {
//     return (
//         <div>
//           <p>Name: {props.name}</p>
//           <p>Age: {props.age} </p>
//         </div>
//     );
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))