import React from "react";

function ExampleEquals() {
  // Exemple Tenary operator
  function LoadingIndicator1({ isLoading }) {
    return <div>{isLoading ? <p>Loading...</p> : null}</div>;
  }

  // Exemple logical && operator
  const result1 = true && "Hello World";
  console.log(result1);

  const result2 = false && "Hello World";
  console.log(result2);

  // Exemple logical && operator
  function LoadingIndicator2({ isLoading }) {
    return <div>{isLoading && <p>Loading...</p>}</div>;
  }

  return (
    <div>
      <h2>Hello Conditional Rendering - logical && operator</h2>
      <hr />
      <p>
        Il arrive souvent que vous vouliez rendre soit un élément soit rien. L'
        <b>opérateur logique &&</b> vous aide à rendre plus concises les
        conditions qui renverraient null - Exemple (voir console.log)
      </p>
    </div>
  );
}

export default ExampleEquals;
