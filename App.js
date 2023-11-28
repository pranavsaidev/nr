import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1 className="heading"> Hello from react jsx </h1>;

const HeadingComponent = () => {
	return <div id="container">
		{title}
	</div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
