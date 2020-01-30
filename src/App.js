import React, { Component } from "react";
import Card from "./Card";
import RoundedImg from "./RoundedImg";
import Callout from "./Callout";
import Menu from "./Menu";
import Favorite from "./Favorite";
import Example from "./Example";
import MenuTwo from "./Menu";
import FavoriteTwo from "./Favorite";
import DataFetcher from "./DataFetcher";
import GrandParent from "./GrandParent";
import ThemeContext from "./ThemeContext";
import AppHead from "./AppHead";

class App extends Component {
  state = { count: 0 };

  increment = () =>
    this.setState(prevState => ({ count: prevState.count + 1 }));

  render() {
    console.log("[GP] [P] [C] [GC] APP just rendered");

    return (
      <div>
        <main>
          <AppHead />
          <Callout>
            <h2>Don't miss out!</h2>
            <p>
              Unless you don't suffer from FOMO, you better make sure you fill
              out the email form below!
            </p>
          </Callout>

          <p>
            This is probably the best site you've ever come across. I'm glad
            you're here to witness the magnificence of this website right now.
          </p>

          <Callout>
            <img src="https://picsum.photos/id/102/4320/3240" width="100%" />
            <figcaption>Just look at those sparkling raspberries!</figcaption>
          </Callout>

          <p>
            Here's some more unforgettable content. Lorem ipsum something or
            other.
          </p>

          <Callout>
            <h2>Give us your email. We definitely won't sell it to anyone.</h2>
            <input type="email" placeholder="Enter Email" />
            <button>Sign me up!</button>
          </Callout>
        </main>
        <br />
        <Example
          render={arr => {
            return (
              <div>
                <p>{arr.toString()}</p>
                <h2>
                  {arr.reduce((a, b) => a + b, 0) >= 30
                    ? "YOU MET THE 30 THRESHOLD!"
                    : "SORRY, YOU NEED MORE POINTS!"}
                </h2>
              </div>
            );
          }}
        />
        <Menu something="whatever" />
        <hr />
        <RoundedImg
          src="https://picsum.photos/id/237/300/300"
          borderRadius="10px"
        />
        <Favorite />
        <MenuTwo />
        <DataFetcher
          url="https://swapi.co/api/people/1"
          render={state => (
            <div>
              {state.loading ? (
                <h1>Loading...</h1>
              ) : (
                <p>{JSON.stringify(state.data)}</p>
              )}
            </div>
          )}
        />
        <Card cardColor="red" cardHeight={200} cardWidth={200} />
        <Card cardColor="blue" cardHeight={100} cardWidth={150} />
        <Card cardColor="green" cardWidth={155} />
        <FavoriteTwo />
        <div>
          <button onClick={this.increment}>+1</button>
          <h2>{this.state.count}</h2>
          <p>I'm the App component</p>
          <GrandParent count={this.state.count} />
          <GrandParent />
        </div>
      </div>
    );
  }
}

export default App;
