import PrincipalList from "../Components/PrincipalList";
import { Link } from "react-router-dom";
import "../Styles/stylesPage.css";

const PrincipalsPage = () => {
    return (
        <div className="principals-page">
            <h2>Principals Managing Payments</h2>
            <PrincipalList />
            <Link to="/">← Back to Home</Link>
        </div>
    );
};

export default PrincipalsPage;
