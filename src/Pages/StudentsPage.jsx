import StudentList from "../Components/StudentList";
import { Link } from "react-router-dom";
import "../Styles/stylesPage.css";

const StudentsPage = () => {
    return (
        <div className="students-page">
            <h2>Students Payment Data</h2>
            <StudentList />
            <Link to="/">← Back to Home</Link>
        </div>
    );
};

export default StudentsPage;
