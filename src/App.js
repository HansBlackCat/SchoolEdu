import './App.css';
import { Component } from 'react';
import data from './data.json'
import datad from './datad.json'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast'

const PMAX = 32;
const DMAX = 10;

class PointCard extends Component {
  constructor(props) {
    super(props);
    let arr = [...Array(PMAX).keys()]
      .sort(() => Math.random() - 0.5)
    this.state = {
      p_rnd: arr,
      p_num: 0,
      p_content: "ㅤ",
      p_result: "ㅤ",
      p_ans: "ㅤ",
    }
  }

  render() {
    return (
      <Container>
        <h1 className='header'>퀴즈 카드</h1>
        <p>퀴즈 카드를 한장 뽑습니다</p>
        <Button
          className='card-button btn-primary'
          onClick={() => {
            let popped = this.state.p_rnd.pop()
            this.setState(
              {
                p_num: popped,
                p_content: data[popped].설명,
                p_result: data[popped].결과,
                p_ans: "ㅤ"
              }
            )

            if (this.state.p_rnd.length === 0 || this.state.p_rnd === 'undefinded') {
              this.setState({
                p_rnd: [...Array(PMAX).keys()]
                  .sort(() => Math.random() - 0.5)
              })
            }
          }}
        >
          카드 뽑기
        </Button>
        <Button
          className='card-button btn-danger'
          onClick={() => {
            this.setState({
              p_ans: data[this.state.p_num].정답
            })
          }}
        >
          정답 보기
        </Button>
        <hr />
        <Toast>
          <Toast.Body>
            {this.state.p_content}
          </Toast.Body>
        </Toast>
        <Toast>
          <Toast.Body>
            {this.state.p_result}
          </Toast.Body>
        </Toast>
        <Toast>
          <Toast.Body>
            {this.state.p_ans}
          </Toast.Body>
        </Toast>
      </Container >
    )
  }
}

class DiscoveryCard extends Component {
  constructor(props) {
    super(props);
    let arr = [...Array(DMAX).keys()]
      .sort(() => Math.random() - 0.5)
    this.state = {
      p_rnd: arr,
      p_num: 0,
      p_content: "ㅤ",
      p_result: "ㅤ",
      p_ans: "ㅤ",
    }
  }

  render() {
    return (
      <Container>
        <h1 className='header'>디스커버리 카드</h1>
        <p>디스커버리 카드를 한장 뽑습니다</p>
        <Button
          className='card-button'
          onClick={() => {
            let popped = this.state.p_rnd.pop()
            this.setState(
              {
                p_num: popped,
                p_content: datad[popped].설명,
                p_result: datad[popped].결과,
                p_ans: "ㅤ"
              }
            )

            if (this.state.p_rnd.length === 0 || this.state.p_rnd === 'undefinded') {
              this.setState({
                p_rnd: [...Array(PMAX).keys()]
                  .sort(() => Math.random() - 0.5)
              })
            }
          }}
        >
          카드 뽑기
        </Button>
        <hr />
        <Toast>
          <Toast.Body>
            {this.state.p_content}
          </Toast.Body>
        </Toast>
        <Toast>
          <Toast.Body>
            {this.state.p_result}
          </Toast.Body>
        </Toast>
      </Container >
    )
  }
}

function App() {
  return (
    <Container>
      <Row>
        <div className='col-sm'>
          <PointCard />
        </div>

        <div className='col-sm'>
          <DiscoveryCard />
        </div>
      </Row>
    </Container>
  );
}

export default App;
