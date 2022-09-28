import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";

function Navigation() {
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
        case "About":
            return <About />;
        case "Portfolio":
            return <Portfolio />;
        case "Contact":
            return <Contact />;
        case "Resume":
            return <Resume />;
        default:
            return <About />;
        }
    };
};

export default Navigation;
