import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
        id: "heading",
        xyz: "abc",
    },
    "Hello from reactJS"
);

const parent = React.createElement(
    "div",
    {
        id: "parent",
    },
    React.createElement(
        "div",
        {
            id: "child",
        },
        [
            React.createElement("h1", {}, "I am an h1 tag"),
            React.createElement("h2", {}, "I am an h2 tag"),
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
