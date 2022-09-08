import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  withIngredients,
  withInstructions,
  withInstructionsLoading,
} from "../../recoil";
import { IngredientBasedServiceFactory } from "../../service/IngredientBasedService";

// models
import { IngredientModel } from "../../models";

import "./IngredientInput.scss";
import CircularSpinner from "../spinner/CircularSpinner";

type Props = {
  onAdd: (model: IngredientModel) => void;
};

const IngredientInput = (props: Props) => {
  const [ingredient, setIngredient] = useState<string>("");
  const [grams, setGrams] = useState<number>(0);

  const ingredients = useRecoilValue(withIngredients);
  const [instructions, setInstructions] = useRecoilState(withInstructions);
  const [instructionsLoading, setInstructionsLoading] = useRecoilState(
    withInstructionsLoading
  );

  const service = IngredientBasedServiceFactory.getInstance();

  const onAdd = () => {
    if (grams !== 0 && ingredient !== "") {
      const model = {
        grams,
        ingredient,
      } as IngredientModel;

      props.onAdd(model);

      Promise.all([setGrams(0), setIngredient("")]);
    }
  };

  const applay = () => {
    setInstructionsLoading(true);

    service
      .get(ingredients)
      .then((res) => {
        console.log("fetched instructions", res);
        setInstructions(res);
        setInstructionsLoading(false);
      })
      .catch((err) => {
        setInstructionsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <div className="ingredient-input-container">
        <div className="shadow-component">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <input
            type="number"
            value={grams}
            onChange={(e) => setGrams(Number(e.target.value))}
          />
          <div className="grams">
            <p>g</p>
          </div>
        </div>

        <motion.button
          className="add"
          onClick={onAdd}
          whileTap={{ scale: [null, 0.9] }}
          transition={{ duration: 0.05 }}
        >
          <i className="material-icons">add</i>
        </motion.button>

        {instructionsLoading ? (
          <CircularSpinner />
        ) : (
          <motion.button
            className="applay"
            onClick={applay}
            whileTap={{ scale: [null, 0.9] }}
            transition={{ duration: 0.05 }}
          >
            <i className="material-icons">done</i>
          </motion.button>
        )}
      </div>
    </React.Fragment>
  );
};

export default IngredientInput;
