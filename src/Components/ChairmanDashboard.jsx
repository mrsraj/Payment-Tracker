import { usePayments } from "../ContextApi/PaymentContext";
import "../Styles/stylesPage.css";

const ChairmanDashboard = () => {
    const { payments } = usePayments();

    const principalTotals = payments.reduce((acc, payment) => {
        acc[payment.principal] = (acc[payment.principal] || 0) + payment.amount;
        return acc;
    }, {});

    return (
        <div className="chairman-dashboard">
            <h3>Total Payments by Principal</h3>
            <table>
                <thead>
                    <tr>
                        <th>Principal</th>
                        <th>Total Collected</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(principalTotals).map((principal, index) => (
                        <tr key={index}>
                            <td>{principal}</td>
                            <td>₹{principalTotals[principal]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ChairmanDashboard;
