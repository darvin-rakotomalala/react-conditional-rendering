import React from "react";

const users = [
  { id: "1", firstName: "Robin", lastName: "Wieruch" },
  { id: "2", firstName: "Dennis", lastName: "Wieruch" },
];

function ExampleIfElse() {
  return (
    <div>
      <h2>Hello Conditional Rendering - IF ELSE</h2>
      <hr />
      <List list={users} />
    </div>
  );
}

function List({ list }) {
  if (!list) {
    return null;
  }

  if (!list.length) {
    return (
      <p>
        <b>Sorry, the list is empty.</b>
      </p>
    );
  }

  return (
    <ul>
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li>
      {item.firstName} {item.lastName}
    </li>
  );
}

export default ExampleIfElse;
