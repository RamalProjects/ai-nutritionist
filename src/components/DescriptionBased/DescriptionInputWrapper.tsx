import * as React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useRecoilState } from "recoil";
import { withDescription, withDescriptionLoading, withDescriptionResult } from "../../recoil";

import CircularSpinner from "../spinner/CircularSpinner";

import { DescriptionBasedServiceFactory } from "../../service";

import "./DescriptionInputWrapper.scss";

const DescriptionInputWrapper = () => {
  const [description, setDescription] = useRecoilState(withDescription);
  const [descriptionResult, setDescriptionResult] = useRecoilState(
    withDescriptionResult
  );
  const [descriptionLoading, setDescriptionLoading] = useRecoilState(
    withDescriptionLoading
  );

  const service = DescriptionBasedServiceFactory.getInstance();

  const applay = () => {
    setDescriptionLoading(true);
    service
      .get(description)
      .then((res) => {
        console.log("fetched", res);

        setDescriptionResult(res);
        setDescriptionLoading(false);
      })
      .catch(console.log);
  };

  return (
    <React.Fragment>
      <div className="description-input-container">
        <p>
          Write a description of what you ate today to get the approximate
          number of calories and protein you consumed. The description can be in
          English or Croatian.
        </p>
        <motion.div
          initial={{ width: "0px", opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
        >
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="E.g. Jelo je napravljeno od razvčenog tjesta i mljevenog mesa. Popularno je jelo na Balkanu."
          />
        </motion.div>

        {descriptionLoading ? (
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

export default DescriptionInputWrapper;
