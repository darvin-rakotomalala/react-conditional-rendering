import React from "react";

const users = [
  { id: "1", firstName: "Robin", lastName: "Wieruch" },
  { id: "2", firstName: "Dennis", lastName: "Wieruch" },
];

function ExampleNested() {
  return (
    <div>
      <h2>Hello Conditional Rendering - NESTED CONDITIONAL RENDERING</h2>
      <hr />
      <p>Exemple rendus conditionnels imbriqués dans React</p>
      <List list={users} />
    </div>
  );
}

function List({ list }) {
  const isNotAvailable = !list;
  const isEmpty = !list.length;

  return (
    <div>
      {isNotAvailable ? (
        <p>
          <b>Sorry, the list is not there.</b>
        </p>
      ) : isEmpty ? (
        <p>
          <b>Sorry, the list is empty.</b>
        </p>
      ) : (
        <div>
          {list.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      {item.firstName} {item.lastName}
    </li>
  );
}

export default ExampleNested;
