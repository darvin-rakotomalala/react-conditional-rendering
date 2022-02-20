import React from "react";

function ExampleTernary() {
  // if else
  function getFoodIfElse(isVegetarian) {
    if (isVegetarian) {
      return "tofu";
    } else {
      return "fish";
    }
  }

  console.log(getFoodIfElse(true));
  console.log(getFoodIfElse(false));

  // ternary operator
  function getFoodTernary(isVegetarian) {
    return isVegetarian ? "tofu" : "fish";
  }
  console.log(getFoodTernary(true));
  console.log(getFoodTernary(false));

  return (
    <div>
      <h2>Hello Conditional Rendering - TERNARY</h2>
      <hr />
      <p>
        Exemple (voir console.log) - Comparaison entre <b>if else</b> et{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">
          <b>ternary operator</b>
        </a>
      </p>
    </div>
  );
}

export default ExampleTernary;
