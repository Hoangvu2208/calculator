import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number1: 0,
      number2: 0,
      result: 0,
    };
  }

  handleChangeInput1 = (e) => {
    this.setState({
      number1: e.target.value,
    });
  };
  handleChangeInput2 = (e) => {
    this.setState({
      number2: e.target.value,
    });
  };
  cong = () => {
    this.setState({
      result: parseInt(this.state.number1) + parseInt(this.state.number2),
    });
  };
  tru = () => {
    this.setState({
      result: parseInt(this.state.number1) - parseInt(this.state.number2),
    });
  };
  nhan = () => {
    this.setState({
      result: parseInt(this.state.number1) * parseInt(this.state.number2),
    });
  };
  chia = () => {
    if(this.state.number2 !== 0){
      this.setState({
        result: parseInt(this.state.number1) / parseInt(this.state.number2),
      });
    }else{
      alert('khong the chia cho 0!')
    }
  };

  render() {
    return (
      <form>
        <input type="number" onChange={(e) => this.handleChangeInput1(e)} />{" "}
        <br />
        <input
          type="number"
          onChange={(e) => this.handleChangeInput2(e)}
        />{" "}
        <br />
        <div className="result">
          <b>{this.state.result}</b>
        </div>
        <button type="button" onClick={(e) => this.cong()}>
          +
        </button>
        <button type="button" onClick={(e) => this.tru()}>
          -
        </button>
        <button type="button" onClick={(e) => this.nhan()}>
          x
        </button>
        <button type="button" onClick={(e) => this.chia()}>
          :
        </button>
      </form>
    );
  }
}

export default Calculator;
