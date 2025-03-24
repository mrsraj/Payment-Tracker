import { useParams } from "react-router-dom";
import students from "../Data/students";
import style from "../Styles/studentDetails.module.css";

const StudentDetails = () => {
    const { id } = useParams();
    const student = students.find((s) => s.id === parseInt(id));

    if (!student) {
        return <h2>Student not found</h2>;
    }

    return (
        <div className={style.student_details}>
            <h2>Student Details: {student.name}</h2>
            <p><strong>Branch:</strong> {student.branch}</p>
            <p><strong>Joining Date:</strong> {student.joiningDate}</p>
            <p><strong>Total Fee:</strong> ₹{student.totalFee}</p>
            <p><strong>Deposited Fee:</strong> ₹{student.depositedFee}</p>
            <p><strong>Due Fee:</strong> ₹{student.totalFee - student.depositedFee}</p>

            <h3>Payment History</h3>
            <table>
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {student.paymentHistory.map((payment, index) => (
                        <tr key={index}>
                            <td>₹{payment.amount}</td>
                            <td>{payment.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentDetails;
