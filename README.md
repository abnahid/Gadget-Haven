# GadgetHaven - E-Commerce Platform

Welcome to GadgetHaven, an e-commerce platform for gadget lovers! This platform is designed to provide a seamless experience for users to browse, add to cart, and wishlist their favorite gadgets. The site is based on a detailed Figma design and features dynamic pages with structured navigation, product filtering, and data persistence using the Context API and LocalStorage.

## Live Website
[Live Site Link](#) - (Replace with actual URL after deployment)

## Requirement Document
[Requirement Document Link](#) - (Replace with actual URL of the requirements document)

## Key Features
1. **Dynamic Navigation**: A structured navigation bar with an active route indicator.
2. **Product Categories**: Side navigation for easy filtering by category, showing gadgets in a grid layout.
3. **Wishlist and Cart Functionality**: Users can add items to their cart and wishlist, with persistence across sessions.
4. **Product Filtering and Sorting**: Filter products by categories and sort cart items by price.
5. **Detailed Product Pages**: View full details of each product with an add-to-cart and wishlist feature.

## React Fundamentals
The project utilizes key React concepts, including:
- **Components and Props**: Structured components for the Navbar, Product Cards, Cart, Wishlist, and more.
- **State Management**: State is used to manage user interactions with products.
- **Context API**: Used to handle global state for the cart and wishlist across components.
- **React Hooks**: Utilized hooks such as `useState`, `useEffect`, `useContext`, and `useLocation`.
- **Conditional Rendering**: Rendering different views based on route and component state.

## Data Management
The project uses:
- **Context API**: To manage the cart and wishlist globally across the app.
- **LocalStorage**: For persisting cart and wishlist data across browser sessions, providing a seamless experience even on page reloads.

## Project Structure
The app features multiple pages and components:
- **Home Page**: Displays categories, a banner section, product cards, and a sidebar for category filtering.
- **Details Page**: Contains product details, add-to-cart, and wishlist buttons.
- **Dashboard Page**: Allows users to manage cart and wishlist items, sort cart items by price, and see total cart cost.
- **Statistics Page**: Displays a composed chart of price vs. product name using a combination of bar and scatter charts.
- **404 Page**: A custom 404 page to handle invalid routes.

## Miscellaneous Features
- **Toast Notifications**: Display toast messages when items are added to the cart or wishlist with distinct messages.
- **Dynamic Titles**: Page titles update dynamically based on the current route.
- **Purchase Modal**: On checkout, a modal congratulates the user, clears the cart, and redirects to the home page.

## Future Improvements
 **Item Removal:** Enhance the wishlist by allowing items to be removed directly from the wishlist and cart.
 **Budget Limit:** Limit the cart total to a maximum of $1000, with error handling for failed additions.
 **Enhanced Statistics:** Expand the Statistics page to show additional analytics and trends in user choices.

## 🔗 Live Link

**Live Link**: https://ab-gadget-heaven.netlify.app/


## Thank You!
We hope you enjoy using GadgetHaven! For questions or suggestions, feel free to open an issue on GitHub.



