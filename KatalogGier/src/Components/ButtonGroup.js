import React from "react";

const ButtonGroup = ({ handleGenreChange }) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button
        type="button"
        className="btn btn-primary mb-1"
        onClick={() => handleGenreChange("Wszystkie")}
      >
        Wszystkie
      </button>
      <button
        type="button"
        className="btn btn-primary mb-1"
        onClick={() => handleGenreChange("RPG")}
      >
        RPG
      </button>
      <button
        type="button"
        className="btn btn-primary mb-1"
        onClick={() => handleGenreChange("Akcja")}
      >
        Akcja
      </button>
      <button
        type="button"
        className="btn btn-primary mb-1"
        onClick={() => handleGenreChange("Horror")}
      >
        Horror
      </button>
      <button
        type="button"
        className="btn btn-primary mb-1"
        onClick={() => handleGenreChange("Strategiczne")}
      >
        Strategiczne
      </button>
      <button
        type="button"
        className="btn btn-primary mb-1"
        onClick={() => handleGenreChange("Przygodowe")}
      >
        Przygodowe
      </button>
    </div>
  );
};

export default ButtonGroup;
