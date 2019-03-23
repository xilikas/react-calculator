import React, { Component } from 'react';
import styled from 'styled-components';

export default class Calculator extends Component {
  state = {
    current: 0,
    previous: 0,
    operator: '',
    result: 0,
  }

  input = (input) => {
    const {
      current, previous, operator, result,
    } = this.state;
    // if input is 'c', clear state
    // if input is number, add number to state
    // if input is not a number, set operator
    // if operator is set and input is a number, set second number
    // if input '=', put first and second number into result
    if (input === 'c') {
      this.setState({
        current: 0,
        previous: 0,
        operator: '',
        result: 0,
      });
      return;
    }

    if (input === '=') {
      if (operator === '+') {
        this.setState({ result: current + previous });
      }
      if (operator === '-') {
        this.setState({ result: previous - current });
      }
      if (operator === '×') {
        this.setState({ result: current * previous });
      }
      if (operator === '÷') {
        this.setState({ result: previous / current });
      }
      return;
    }
    if (typeof (input) === 'number') {
      if (current === 0) {
        this.setState({ current: input });
      } else {
        this.setState({ current: parseInt(`${current}${input}`) });
      }
    }
    if (typeof (input) === 'string') {
      this.setState({
        previous: current,
        current: 0,
        operator: input,
      });
      if (result !== 0) {
        this.setState({
          previous: result,
          result: 0,
        });
      }
    }
  }

  render() {
    const { current, result } = this.state;

    return (
      <div>
        <h3>
          {result === 0 && current}
          {result !== 0 && result}
        </h3>
        <CalcGrid>
          <button onClick={() => this.input('c')} type="button">C</button>
          <button onClick={() => this.input(1)} type="button">1</button>
          <button onClick={() => this.input(2)} type="button">2</button>
          <button onClick={() => this.input(3)} type="button">3</button>
          <button onClick={() => this.input(4)} type="button">4</button>
          <button onClick={() => this.input(5)} type="button">5</button>
          <button onClick={() => this.input(6)} type="button">6</button>
          <button onClick={() => this.input(7)} type="button">7</button>
          <button onClick={() => this.input(8)} type="button">8</button>
          <button onClick={() => this.input(9)} type="button">9</button>
          <button onClick={() => this.input(0)} type="button">0</button>
          <button onClick={() => this.input('+')} type="button">+</button>
          <button onClick={() => this.input('×')} type="button">×</button>
          <button onClick={() => this.input('-')} type="button">-</button>
          <button onClick={() => this.input('÷')} type="button">÷</button>
          <button onClick={() => this.input('=')} type="button"> =</button>
        </CalcGrid>
      </div>
    );
  }
}

const CalcGrid = styled.div`
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat (3, 1fr);
  grid-row-gap: 1rem;
`;
