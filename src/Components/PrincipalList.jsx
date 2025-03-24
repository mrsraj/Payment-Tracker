import { usePayments } from "../ContextApi/PaymentContext";
import "../Styles/stylesPage.css";

const PrincipalList = () => {
    const { payments } = usePayments();

    const principals = [...new Set(payments.map((p) => p.principal))];

    return (
        <div className="principal-list">
            <h3>Principals</h3>
            <ul>
                {principals.map((principal, index) => (
                    <li key={index}>
                        {principal} - {payments.filter((p) => p.principal === principal).length} students
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PrincipalList;
