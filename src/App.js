import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    gameOver: false,
    score: 0,
    topScore: 0,
    images: [
      {
        alreadyClicked: false,
        name: "arryn",
        img: require("./assets/arryn.jpg")
      },
      {
        alreadyClicked: false,
        name: "baratheon",
        img: require("./assets/baratheon.webp")
      },
      {
        alreadyClicked: false,
        name: "bolton",
        img: require("./assets/bolton.jpg")
      },
      {
        alreadyClicked: false,
        name: "greyjoy",
        img: require("./assets/greyjoy.webp")
      },
      {
        alreadyClicked: false,
        name: "lannister",
        img: require("./assets/lannister.webp")
      },
      {
        alreadyClicked: false,
        name: "martell",
        img: require("./assets/martell.webp")
      },
      {
        alreadyClicked: false,
        name: "mormont",
        img: require("./assets/mormont.jpg")
      },
      {
        alreadyClicked: false,
        name: "stark",
        img: require("./assets/stark.webp")
      },
      {
        alreadyClicked: false,
        name: "targaryen",
        img: require("./assets/targaryen.jpg")
      },
      {
        alreadyClicked: false,
        name: "tarly",
        img: require("./assets/tarly.jpg")
      },
      {
        alreadyClicked: false,
        name: "tully",
        img: require("./assets/tully.webp")
      },
      {
        alreadyClicked: false,
        name: "tyrell",
        img: require("./assets/tyrell.webp")
      }
    ],
    clicked: []
  };

  handleClick = name => {
    const { score, topScore, clicked } = this.state;
    this.state.images.sort((a, b) => 0.5 - Math.random());

    if (clicked.includes(name)) {
      this.endGame();
      this.resetGame();
      return
    }

    // NEVER DIRECTLY MUTATE STATE
    const newClicked = [...clicked];
    newClicked.push(name);
    
    const newScore = score + 1;
    if (newScore === 12) {
      alert("When you play the Game of Thrones you win or you die. You won!")
      }
    this.setState({ score: newScore });
    if (newScore > topScore) {
      this.setState({ topScore: newScore });
    }
    console.log("clicked", clicked);
    console.log("already clicked?", clicked.includes(name));

    this.setState({ clicked: newClicked });
  };

  updateAlreadyClicked = () => {
    this.setState({
      images: [
        {
          alreadyClicked: true
        }
      ]
    });
  };

  endGame = () => {
    alert("Game Over!");
  };

  resetGame = () => {
    this.setState({
      gameOver: false,
      score: 0,
      clicked: []
    });
  };

  render() {
    return (
      <div>
        <nav>
          <h1
            onClick={function refreshPage() {
              window.location.reload();
            }}
          >
            Clicky Game
          </h1>
          <h2>Click an image to begin</h2>
          <h2>
            Score: {this.state.score} | Top score: {this.state.topScore}
          </h2>
        </nav>
        {this.state.images.map(image => (
          <img
            key={image.name}
            onClick={() => this.handleClick(image.name, image.alreadyClicked)}
            className="img"
            src={image.img}
            alt={image.name}
          ></img>
        ))}
      </div>
    );
  }
}

export default App;
