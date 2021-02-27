import React from "react"

class App extends React.Component{
  constructor () {
    super ()
    this.state = {
      number : '',
      binary : '0',
      octal : '0',
      decimal : '0',
      hexaDecimal : '0' 
    }
    this.handle = this.handle.bind(this)
    this.change = this.change.bind(this)
    this.changeFromBase2 = this.changeFromBase2.bind(this)
    this.changeFromBase8 = this.changeFromBase8.bind(this)
    this.changeFromBase16 = this.changeFromBase16.bind(this)
    this.clearAll = this.clearAll.bind(this)
  }
  handle (event) {
    const {value} = event.target
    this.setState({ number : value})
  }
  change () {
    const newNum = (this.state.number.replace(/[^0-9]/gi,'')) === '' ? '0' : this.state.number.replace(/[^0-9]/gi,'')
    const binary = parseInt(newNum).toString(2)
    const octal = parseInt(newNum).toString(8)
    const hexaDecimal = parseInt(newNum).toString(16).toUpperCase()
    this.setState({decimal : newNum, binary : binary, octal : octal, hexaDecimal : hexaDecimal})
  }
  changeFromBase2 () {
    const newNum = (this.state.number.replace(/[^0-1]/gi,'')) === '' ? '0' : this.state.number.replace(/[^0-1]/gi,'')
    const decimal = parseInt(newNum,2).toString()
    const octal = parseInt(decimal).toString(8)
    const hexaDecimal = parseInt(decimal).toString(16).toUpperCase()
    this.setState({binary : newNum, decimal: decimal, octal: octal, hexaDecimal: hexaDecimal})
  }
  changeFromBase8 () {
    const newNum = (this.state.number.replace(/[^0-7]/gi,'')) === '' ? '0' : this.state.number.replace(/[^0-7]/gi,'')
    const decimal = parseInt(newNum,8).toString()
    const binary = parseInt(decimal).toString(2)
    const hexaDecimal = parseInt(decimal).toString(16).toUpperCase()
    this.setState({binary: binary, octal: newNum, decimal: decimal, hexaDecimal: hexaDecimal})
  }
  changeFromBase16 () {
    const newNum = (this.state.number.replace(/[^0-9A-F]/gi,'')) === '' ? '0' : this.state.number.replace(/[^0-9A-F]/gi,'').toUpperCase()
    const decimal = parseInt(newNum,16)
    const binary = parseInt(decimal).toString(2)
    const octal = parseInt(decimal).toString(8)
    this.setState({binary: binary, octal: octal, decimal: decimal, hexaDecimal: newNum})
  }

  clearAll () {
    this.setState({number : '', decimal: '0', binary : '0', octal: '0', hexaDecimal: '0'})
  }

  render () {
    return (
      <div>
      <h1>Base Number Converter</h1>
      <input placeholder="Enter your Number" value = {this.state.number} onChange = {this.handle}/>
      <button onClick={this.clearAll} className="clearBtn">Clear</button>
      <p>Given Number is..</p>
      <button className='selectBtn' onClick={this.change}>Decimal</button>
      <button className='selectBtn' onClick={this.changeFromBase2}>Binary</button>
      <button className='selectBtn' onClick={this.changeFromBase8}>Octal</button>
      <button className='selectBtn' onClick={this.changeFromBase16}>Hex</button>
      <p>After Converted..</p>
      <div className="output">
      <h2>Decimal Number :- {this.state.decimal}</h2>
      <h2>Binary Number :- {this.state.binary}</h2>
      <h2>Octal Number :- {this.state.octal}</h2>
      <h2>Hex Number :- {this.state.hexaDecimal}</h2>
      </div>
      </div>
    )
  }
}

export default App