import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Home } from "./home";

export const Single = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="jumbotron">
      {store.verifiedUser ? <h1>Authenticaded</h1> : <Home />}
    </div>
  );
};
