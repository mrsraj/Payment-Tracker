import ChairmanDashboard from "../Components/ChairmanDashboard";
import { Link } from "react-router-dom";
import "../Styles/stylesPage.css";

const ChairmanPage = () => {
    return (
        <div className="chairman-page">
            <h2>Chairman Dashboard</h2>
            <ChairmanDashboard />
            <Link to="/">← Back to Home</Link>
        </div>
    );
};

export default ChairmanPage;
