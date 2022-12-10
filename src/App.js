import * as React from "react";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

import { Container, Content, Row } from "./styles";

export default function App() {
  const [currentNumber, setCurrentNumber] = React.useState('0')
  const [firstNumber, setFirstNumber] = React.useState('0')
  const [operation, setOperation] = React.useState('0')


  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('') //setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
      
    }
  }

  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('') //setCurrentNumber('0')
      setOperation('-')
    } else {
      const sub = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sub))
      setOperation('')
      
    }
  }

 //funcao multiplicar
 //funcao dividir

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch (operation) {
        case '+':
          handleSumNumbers()
          break;

        case '-':
          handleSubNumbers()
          break
      
        default:
          break;
      }
      
      // setFirstNumber(String(currentNumber))
      // setCurrentNumber('0')
    }
  }


  return (
    <>
      <Container>
        <Content>
          <Input value={currentNumber}></Input>
          <Row>
            <Button label={"AC"} onClick={handleOnClear}></Button>
            <Button label={"( )"}o nClick={() => handleAddNumber('')}></Button>
            <Button label={"%"} onClick={() => handleAddNumber('')}></Button>
            <Button label={"/"} onClick={() => handleAddNumber('')}></Button>
          </Row>
          <Row>
            <Button label={9} onClick={() => handleAddNumber('9')}></Button>
            <Button label={8} onClick={() => handleAddNumber('8')}></Button>
            <Button label={7} onClick={() => handleAddNumber('7')}></Button>
            <Button label={"x"} onClick={() => handleAddNumber('')}></Button>
          </Row>
          <Row>
            <Button label={6} onClick={() => handleAddNumber('6')}></Button>
            <Button label={5} onClick={() => handleAddNumber('5')}></Button>
            <Button label={4} onClick={() => handleAddNumber('4')}></Button>
            <Button label={"-"} onClick={handleSubNumbers}></Button>
          </Row>
          <Row>
            <Button label={3} onClick={() => handleAddNumber('3')}></Button>
            <Button label={2} onClick={() => handleAddNumber('2')}></Button>
            <Button label={1} onClick={() => handleAddNumber('1')}></Button>
            <Button label={"+"} onClick={handleSumNumbers}></Button>
          </Row>
          <Row>
            <Button label={0} onClick={() => handleAddNumber('0')}></Button>
            <Button label={","} onClick={() => handleAddNumber(',')}></Button>
            <Button label={"<"} onClick={() => handleAddNumber('')}></Button>
            <Button label={"="} onClick={handleEquals}></Button>
          </Row>
        </Content>
      </Container>
    </>
  );
}