import React, {useState} from 'react'
import Icon from './components/Icon'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {Card, CardBody, Container, Button, Col, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {

  const[isCross, setIsCross] = useState(false);
  const[winMsg, setWinMsg] = useState("");
  const[count, setCount] = useState(1);

  const relodeGame = () =>{
    setCount(1);
    setWinMsg("");
    setIsCross(false);
    itemArray.fill("empty",0,9);
  }

  const checkWinner = ()=>{

    if(itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== "empty")
    {
      setWinMsg(`${itemArray[0]} Wins`)
    }
    
    else if(itemArray[3] === itemArray[4] && itemArray[3] === itemArray[5] && itemArray[3] !== "empty")
    {
      setWinMsg(`${itemArray[3]} Wins`)
    }

    else if(itemArray[6] === itemArray[7] && itemArray[6] === itemArray[8] && itemArray[6] !== "empty")
    {
      setWinMsg(`${itemArray[6]} Wins`)
    }

    if(itemArray[0] === itemArray[3] && itemArray[0] === itemArray[6] && itemArray[0] !== "empty")
    {
      setWinMsg(`${itemArray[0]} Wins`)
    }

    if(itemArray[1] === itemArray[4] && itemArray[1] === itemArray[7] && itemArray[1] !== "empty")
    {
      setWinMsg(`${itemArray[1]} Wins`)
    }

    if(itemArray[2] === itemArray[5] && itemArray[2] === itemArray[8] && itemArray[2] !== "empty")
    {
      setWinMsg(`${itemArray[2]} Wins`)
    }

    else if(itemArray[0] === itemArray[4] && itemArray[0] === itemArray[8] && itemArray[0] !== "empty")
    {
      setWinMsg(`${itemArray[0]} Wins`)
    }

    else if(itemArray[2] === itemArray[4] && itemArray[2] === itemArray[6] && itemArray[2] !== "empty")
    {
      setWinMsg(`${itemArray[2]} Wins`)
    }
  }

  const changeItem = (itemNumber) =>{
    setCount(count+1);
    if(count === 9){
      setWinMsg("Draw")
      return toast("No one win", {type : "info"});
    }

    if(winMsg){
      return toast(winMsg, {type : "success"});
    }

    if(itemArray[itemNumber]==="empty")
    {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    }
    else{
      return toast("Already filled", {type : "error"})
    }

    checkWinner();
  }

  return (
     <Container className="p-5">
        <div className="heading">
          <h1>Tic-Tac-Toe</h1>
        </div>
        <ToastContainer position="bottom-center"/>
        <Row>
          <Col md={6} className="offset-md-3">

            {winMsg ? (
              <div className="md-2 mt-2 text-center">
                <h1 className="text-success text-uppercase text-center">
                  {winMsg}
                </h1>
                <Button color="success" className="mb-3" block onClick={relodeGame}>
                    Reload The Game
                </Button>
                <br/>
              </div>
            ) : (
              <h1 className="text-center text-warning">
                {isCross ? "Cross" : "Circle"} Turn
              </h1>
            )}
              <div className="grid"> 
                {itemArray.map((item, index)=>(
                  <Card onClick={()=>changeItem(index)}>
                      <CardBody className="box">
                        <Icon name={item}/>
                      </CardBody>
                  </Card>
                ))}
              </div>
          </Col>
        </Row>
     </Container>
  );
}
export default App;