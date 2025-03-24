import { usePayments } from "../ContextApi/PaymentContext";
import "../Styles/stylesPage.css";

const PaymentTable = () => {
    const { payments } = usePayments();

    return (
        <table className="payment-table">
            <thead>
                <tr>
                    <th>Student</th>
                    <th>Amount Paid</th>
                    <th>Due</th>
                </tr>
            </thead>
            <tbody>
                {payments.map((payment) => (
                    <tr key={payment.id}>
                        <td>{payment.student}</td>
                        <td>₹{payment.amount}</td>
                        <td>₹{payment.due}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PaymentTable;
