import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

// components
import Layout from "./components/Layout/Layout";

// screens
import DescriptionBased from "./screens/DescriptionBased";
import IngridientBased from "./screens/IngredientBased";

import "./App.scss";

const App = () => {
  return (
    <React.Fragment>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<DescriptionBased />} />
              <Route path="/ingredientbased" element={<IngridientBased />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </React.Fragment>
  );
};

export default App;
