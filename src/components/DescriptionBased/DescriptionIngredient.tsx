import React, { useState, useEffect } from "react";
import { DescriptionIngredientModel } from "../../models";

import "./DescriptionIngredient.scss";

type Props = {
  model: DescriptionIngredientModel;
};

const DescriptionIngredient = ({ model }: Props) => {
  return (
    <React.Fragment>
      <div className="description-ingredient-container">
        {model.ingredientName} | P {model.proteine} g | C {model.calories} kalcs
      </div>
    </React.Fragment>
  );
};

export default DescriptionIngredient;
