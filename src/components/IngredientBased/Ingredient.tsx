import * as React from "react";
import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { withIngredients } from "../../recoil";

// models
import { IngredientModel } from "../../models";

import "./Ingredient.scss";

type Props = {
  model: IngredientModel;
};

const Ingredient = ({ model }: Props) => {
  const [ingredients, setIngredients] = useRecoilState(withIngredients);

  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter((ing) => ing.ingredient !== ingredient));
  };

  return (
    <React.Fragment>
      <div className="ingredient-container">
        <div className="ingredient">
          <p>{model.ingredient}</p>
        </div>
        <div className="grams">
          <p>{model.grams} g </p>
          <motion.button
            whileHover={{ color: "#EF5B5B" }}
            onClick={() => removeIngredient(model.ingredient)}
          >
            <i className="material-icons">remove</i>
          </motion.button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ingredient;
