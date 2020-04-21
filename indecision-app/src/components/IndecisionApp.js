import React from 'react'
import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    componentDidMount() {
        const json = localStorage.getItem('options')
        try {
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((item) => item !== option)
        }))
    }

    handlePick = () => {
        const options = this.state.options
        const randomNum = Math.floor(Math.random() * options.length);
        const selectedOption = options[randomNum]
        this.setState(() => ({ selectedOption }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This item already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    render() {
        const subtitle = "Put your life in the hands of a computer"
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
            </div>
        );
    }
}

export default IndecisionApp