import * as React from "react";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { withInstructions } from "../recoil";

import "./styles/IngredientBased.scss";

const IngredientBased = () => {
  const instructions = useRecoilValue(withInstructions);

  return (
    <React.Fragment>
      <div className="ingredient-base-container">
        {instructions.instructions.length > 0 ? (
          <>
            <h2>Recipe</h2>

            <div className="instructions">
              {instructions.instructions.map((instruction, i) => (
                <>
                  <p>{instruction}</p>
                </>
              ))}

              <p>
                <b>Total calories:</b> {instructions.calories.toString()} kalc
              </p>
              <p>
                <b>Total proteine:</b> {instructions.proteins.toString()} g
              </p>
            </div>
          </>
        ) : (
          <>
            <h1>No instructions to display</h1>
            <p>Enter and applay ingredients to generate instructions.</p>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default IngredientBased;
