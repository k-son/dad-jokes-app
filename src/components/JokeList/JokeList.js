import React, {Component} from 'react';
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
      jokes.push(res.data.joke);
    }
    this.setState({
      jokes: jokes
    })

    console.log(this.state.jokes);
  }

  render() {
    return (
      <div className="JokeList">
        <h1>Dad Jokes</h1>
        <div className="JokeList-jokes">
          {this.state.jokes.map(j => (
            <div>{j}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;