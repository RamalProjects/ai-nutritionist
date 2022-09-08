import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import DescriptionIngredient from "../components/DescriptionBased/DescriptionIngredient";
import { withDescription, withDescriptionResult } from "../recoil";

import "./styles/DescriptionBased.scss";

const DescriptionBased = () => {
  const [caloriesProteine, setCaloriesProteine] = useState<[Number, Number]>([
    0, 0,
  ]);

  const descriptionResult = useRecoilValue(withDescriptionResult);
  const description = useRecoilValue(withDescription);

  useEffect(() => {
    let calories = 0;
    let proteine = 0;

    for (const ing of descriptionResult.ingredients) {
      calories += ing.calories;
      proteine += ing.proteine;
    }

    setCaloriesProteine([calories, proteine]);
  }, [descriptionResult]);

  return (
    <React.Fragment>
      <div className="description-based-container">
        {descriptionResult.ingredients.length > 0 ? (
          <>
            <h1>
              {descriptionResult.nameOfDish} | P{" "}
              {caloriesProteine.at(1)?.toString()} g | C{" "}
              {caloriesProteine.at(0)?.toString()} kalcs
            </h1>

            <div className="ingredients">
              {descriptionResult.ingredients.map((model) => (
                <DescriptionIngredient model={model} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h1>No data to display</h1>
            <p>Enter the description of the dish in the textarea to display the data</p>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default DescriptionBased;
