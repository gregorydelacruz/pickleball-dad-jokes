import React, { useState } from 'react';

    const dadJokes = [
      "Why did the pickleball player bring a ladder to the court? Because they heard the serves were high!",
      "I told my wife I was going to start playing pickleball. She said, 'That's a dill-lightful idea!'",
      "What do you call a pickleball player who's always late? A dally-baller!",
      "Why did the pickleball get a ticket? Because it was caught double-bouncing!",
      "I'm reading a book about pickleball. It has a lot of good volleys!",
      "Why did the pickleball player break up with the tennis player? They just couldn't see eye-to-eye on the court!",
      "What's a pickleball player's favorite type of music? Anything with a good beat!",
      "Why are pickleball players so good at math? Because they're always calculating angles!",
      "I tried to explain pickleball to my friend, but they just couldn't grasp the concept. I guess it's not their forte!",
      "What do you call a pickleball player who's always complaining? A whiner-baller!"
    ];

    function App() {
      const [joke, setJoke] = useState('');

      const handleKeyPress = (index) => {
        setJoke(dadJokes[index]);
      };

      return (
        <div>
          <h1>Pickleball Dad Jokes</h1>
          <div className="keyboard">
            {dadJokes.map((_, index) => (
              <div key={index} className="key" onClick={() => handleKeyPress(index)}>
                Joke {index + 1}
              </div>
            ))}
          </div>
          {joke && <div className="joke-display">{joke}</div>}
        </div>
      );
    }

    export default App;
