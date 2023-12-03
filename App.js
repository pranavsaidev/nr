import React from "react";
import ReactDOM from "react-dom/client";

const Navbar = () => {
	return (
		<div className="navbar" >
			<h2>Company Logo</h2>
			<div>
				<ul className="navbar-navigation">
					<li>Home</li>
					<li>About</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
}

const RestaurantCard = () => {
	return (
		<div className="restaurant-card">
			<img className="restaurant-image" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/92d9b4053ef0965120828b4fa4eecc3b_o2_featured_v2.jpg?output-format=webp" alt="restaurant-image" />
			<h3>Pranav Foods</h3>
			<h4>⭐⭐⭐⭐⭐</h4>
			<h4>Biryani, South Indian, Chinese</h4>
			<h4>20 mins</h4>
		</div>
	)
}

const RestaurantContainer = () => {
	return (
		<div>
			<div className="search-bar">
				<input type="text" placeholder="Search for Restaurants" />
			</div>
			<div className="restaurants">
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
			</div>
		</div>
	);
}

const App = () => {
	return <div className="app-container">
		<Navbar />
		<RestaurantContainer />
	</div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
