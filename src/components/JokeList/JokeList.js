import React, {Component} from 'react';
import './JokeList.css';
import axios from 'axios';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    }
  }

  async componentDidMount() {
    let jokes = [];
    // while beacouse if there are duplicates (you can get more instances of thesame joke) it will loop further
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json'
        }
      });
      jokes.push({
        joke: res.data.joke,
        votes: 0
      });
    }
    this.setState({
      jokes: jokes
    })

    console.log(this.state.jokes);
  }

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
          <button className="JokeList-getmore">New Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map(j => (
            <div>{j.joke} - {j.votes}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;