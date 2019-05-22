import Loadable from "react-loadable";
import React from "react";

const Components = [];


Components.ListSuperHeroes = Loadable({
  loader: () => import("../ListSuperHeroes"),
  loading() {
    return <div className="loading">Loading...</div>;
  }
});

Components.SuperHeroe = Loadable({
  loader: () => import("../SuperHeroe"),
  loading() {
    return <div className="loading">Loading...</div>;
  }
});

Components.Ranking = Loadable({
  loader: () => import("../Ranking"),
  loading() {
    return <div className="loading">Loading...</div>;
  }
});




export { Components };