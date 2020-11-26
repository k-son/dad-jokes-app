import React, {Component} from 'react';
import './JokeList.css';
import Joke from '../Joke/Joke';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
      loading: false
    };
    // list of loaded jokes, to check if new loaded joke isn't a duplicate 
    this.seenJokes = new Set(this.state.jokes.map(j => j.text));
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }

  async getJokes() {
    try {
      let jokes = [];
      // while beacouse if there are duplicates (you can get more instances of thesame joke) it will loop further
      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get('https://icanhazdadjoke.com/', {
          headers: {
            Accept: 'application/json'
          }
        });

        const newJoke = res.data.joke;
        if (!this.seenJokes.has(newJoke)) {
          jokes.push({
            id: uuidv4(),
            text: newJoke,
            votes: 0
          });
        }
      }

      this.setState(st => ({
        loading: false,
        jokes: [...st.jokes, ...jokes]
      }),
        // optional second argument, a callback function executed once setState is completed
        () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
      );
    } catch(e) {
      alert(e);
      this.setState({loading: false});
    }
  }

  handleVote(id, delta) {
    this.setState(st => ({
      jokes: st.jokes.map(j => 
        j.id === id ? {...j, votes: j.votes + delta} : j
      )
    }),
      // optional second argument, a callback function executed once setState is completed
      () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    );
  }

  handleClick() {
    this.setState({loading: true }, this.getJokes);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin" />
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      );
    }

    const jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);

    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt="rotfl" />
          <button className="JokeList-getmore" onClick={this.handleClick}>New Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {jokes.map(j => (
            <div>
              <Joke 
                key={j.id}
                votes={j.votes}
                text={j.text}
                upvote={() => this.handleVote(j.id, 1)}
                downvote={() => this.handleVote(j.id, -1)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;