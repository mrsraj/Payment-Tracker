import { useState } from "react";
import { usePayments } from "../ContextApi/PaymentContext";
import "../Styles/stylesPage.css";

const PaymentForm = () => {
    const { payments, setPayments } = usePayments();
    const [student, setStudent] = useState("");
    const [amount, setAmount] = useState("");
    const [due, setDue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setPayments([...payments, { id: payments.length + 1, student, amount, due }]);
        setStudent("");
        setAmount("");
        setDue("");
    };

    return (
        <form onSubmit={handleSubmit} className="payment-form">
            <input type="text" value={student} onChange={(e) => setStudent(e.target.value)} placeholder="Student Name" required />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount Paid" required />
            <input type="number" value={due} onChange={(e) => setDue(e.target.value)} placeholder="Due Amount" required />
            <button type="submit">Add Payment</button>
        </form>
    );
};

export default PaymentForm;
