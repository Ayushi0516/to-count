import React from "react";
// import {Form} from "./components/Form"
// import {v4 as uuid}from "uuid";
import {Counter} from "./components/Counter"
import {List} from "./components/List"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      <List/>
      <Counter/>
    </div>
  );
}
