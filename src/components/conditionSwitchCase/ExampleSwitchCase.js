import React from "react";

function ExampleSwitchCase() {
  function Notification({ status }) {
    switch (status) {
      case "info":
        return <Info textStatus="Status info" />;
      case "warning":
        return <Warning textStatus="Status warning" />;
      case "error":
        return <Error textStatus="Status error" />;
      default:
        return null;
    }
  }

  function Info({ textStatus }) {
    return <b>{textStatus}</b>;
  }

  function Warning({ textStatus }) {
    return <b>{textStatus}</b>;
  }

  function Error({ textStatus }) {
    return <b>{textStatus}</b>;
  }

  return (
    <div>
      <h2>Hello Conditional Rendering - SWITCH CASE</h2>
      <hr />
      <p>
        Il peut y avoir des cas où vous avez plusieurs rendus conditionnels -
        Exemple (voir le code source).
      </p>
      <ul>
        <li>
          <Notification status="info" />
        </li>
        <li>
          <Notification status="warning" />
        </li>
        <li>
          <Notification status="error" />
        </li>
      </ul>
    </div>
  );
}

export default ExampleSwitchCase;
