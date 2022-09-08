import * as React from "react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { withIngredients } from "../../recoil";
import Ingredient from "./Ingredient";

// components
import IngredientInput from "./IngredientInput";

import "./IngredientInputWrapper.scss";

const IngredientInputWrapper = () => {
  const [ingredients, setIngredients] = useRecoilState(withIngredients);
  const [isContainerFull, setContainerFullness] = useState<boolean>(false);

  useEffect(() => {
    const ingredientsDiv = document.getElementById("ingredients");
    if (
      (ingredientsDiv?.scrollHeight ?? 0) > (ingredientsDiv?.clientHeight ?? 0)
    )
      setContainerFullness(true);
    else setContainerFullness(false);
  }, [ingredients]);

  return (
    <React.Fragment>
      <div className="ingredient-input-wrapper-container">
        <p className="description">
          Add the ingredients with their names and weight. The ingredients can be written in Croatian or English.
        </p>
        {ingredients.length > 0 ? (
          <div
            className={`ingredients ${isContainerFull && "container-full"}`}
            id="ingredients"
          >
            {ingredients.map((model) => (
              <Ingredient model={model} />
            ))}
          </div>
        ) : (
          <h2>No added ingredients</h2>
        )}

        <IngredientInput
          onAdd={(model) => setIngredients([model, ...ingredients])}
        />
      </div>
    </React.Fragment>
  );
};

export default IngredientInputWrapper;
