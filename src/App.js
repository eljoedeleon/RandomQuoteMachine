import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      randomIndex: '0',
      fade: false
    }
    this.generateQuote = this.generateQuote.bind(this);
  }
  generateQuote() {
    this.setState({
      randomIndex: Math.floor(Math.random() * 21),
      fade: true
    })
  }
  render() {
    const generate = [
      { quote: "Winter is coming.", author: 'Ned Stark' },
      { quote: "Fear cuts deeper than swords.", author: 'Arya Stark' },
      { quote: "Everything before the word ‘but’ is horseshit.", author: 'Jon Snow' },
      { quote: "A lion doesn’t concern himself with the opinions of a sheep.", author: 'Tywin Lannister' },
      { quote: "If you think this has a happy ending you haven’t been paying attention.", author: 'Ramsay Bolton' },
      { quote: "A man with no motive is a man no one suspects. Always keep your foes confused.", author: 'Lord Baelish' },
      { quote: "The man who passes the sentence should swing the sword.", author: 'Ned Stark' },
      { quote: "Any man who must say ‘I am the king’ is no true king.", author: 'Tywin Lannister' },
      { quote: "A ruler who kills those devoted to her is not a ruler who inspires devotion.", author: 'Tyrion Lannister' },
      { quote: "Power resides where men believe it resides. It’s a trick, a shadow on the wall. And a very small man can cast a very large shadow.", author: 'Lord Varys' },
      { quote: "When you play the game of thrones, you win or you die.", author: 'Cersei Lannister' },
      { quote: "Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.", author: 'Tyrion Lannister' },
      { quote: "Chaos isn’t a pit. Chaos is a ladder.", author: 'Lord Baelish' },
      { quote: "The world is overflowing with horrible things, but they’re all a tray of cakes next to death.", author: 'Olenna Tyrell' },
      { quote: "Nothing f***s you harder than time.", author: 'Ser Davos' },
      { quote: "I don’t care about checking my worst impulses. I don’t care about making the world a better place. Hang the world.", author: 'Cersei Lannister' },
      { quote: "All men must die, but we are not men.", author: 'Daenerys Targaryen' },
      { quote: "The night is dark and full of terrors", author: 'Melisandre' },
      { quote: "There is only one god and his name is Death, and there is only one thing we say to Death: ‘Not today.’", author: 'Syrio Forel' },
      { quote: "The freedom to make my own mistakes was all I ever wanted.", author: 'Mance Rayder' },
      { quote: "It doesn’t matter what we want. Once we get it, then we want something else.", author: 'Lord Baelish' }
    ];
    const fade = this.state.fade;
    const generateNewQuote = generate[this.state.randomIndex].quote;
    const generateQuoteAuthor = generate[this.state.randomIndex].author;
    const tweet = `https://twitter.com/intent/tweet?text=${generateNewQuote} - ${generateQuoteAuthor}`;

    return (
      <div id="container">
        <div id="quote-box">
          <div onAnimationEnd={() => this.setState({ fade: false })}
            className={fade ? 'fadeIn' : ''}>
            <div id="text">
              <h2><i className="fas fa-quote-left"></i>{" "}{generateNewQuote}</h2>
            </div>
            <div id="author">
              <p><em>{"- "}{generateQuoteAuthor}</em></p>
            </div>
          </div>
          <button
            id="new-quote" onClick={this.generateQuote}>New Quote</button>
          <a href={tweet}
            id="tweet-quote"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <footer>by{' '}
        <a href="https://github.com/eljoedeleon" 
        target="_blank" 
        rel="noopener noreferrer">eljoedeleon</a>
        </footer>
      </div>
    );
  }

}

export default App;
