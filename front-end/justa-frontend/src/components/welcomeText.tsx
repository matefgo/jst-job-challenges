import React from 'react';

const WelcomeText: React.FC = () => {
  return (
    <div className="WelcomeText">
      <p id="welcomeLine">
        <p className="fontIcon">W</p>elcome to <p className="fontIcon">5</p>
        eaking <p className="fontIcon">6</p>d Characters.
      </p>
      <p id="detailsLine">
        Search for your favorite character below, where you can get infos that
        goes from birth date to life status. Hope for the best!
      </p>
    </div>
  );
};

export default WelcomeText;
