import { useParams, Link } from "react-router-dom";
import { usePayments } from "../ContextApi/PaymentContext";
import StudentDetails from "../Components/StudentDetails";
import "../Styles/stylesPage.css";

const StudentPage = () => {
    const { name } = useParams();
    const { payments } = usePayments();
    const studentPayments = payments.filter((p) => p.student === name);

    return (
        <div className="student-page">
            <h2>Payment Details for {name}</h2>
            {studentPayments.length > 0 ? (
                <StudentDetails payments={studentPayments} />
            ) : (
                <p>No payment records found.</p>
            )}
            <Link to="/">← Back to Home</Link>
        </div>
    );
};

export default StudentPage;
