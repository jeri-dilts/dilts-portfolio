import "./HamburgerNav.css";

export default function Header() {

return(
    <nav id="hamnav">
        {/* <!-- [THE HAMBURGER] --> */}
        <label for="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger"/>
        
        {/* <!-- [MENU ITEMS] --> */}
        <div id="hamitems">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="tech.html">Tech</a>
            <a href="games.html">Games</a>
            <a href="reviews.html">Reviews</a>
        </div>
    </nav>
)

// https://code-boxx.com/simple-responsive-pure-css-hamburger-menu/