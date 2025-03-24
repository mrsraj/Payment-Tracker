import { createContext, useContext, useState } from "react";

// Create the Context
const PaymentContext = createContext();

// Create a Provider Component
export const PaymentProvider = ({ children }) => {
    const [payments, setPayments] = useState([
        { id: 1, student: "Amit", principal: "Mr. Sharma", amount: 5000, due: 2000 },
        { id: 2, student: "Sita", principal: "Ms. Verma", amount: 4000, due: 1000 },
        { id: 3, student: "Raj", principal: "Mr. Sharma", amount: 6000, due: 3000 },
        { id: 4, student: "Neha", principal: "Ms. Verma", amount: 7000, due: 2000 },
        { id: 5, student: "Kunal", principal: "Mr. Singh", amount: 4500, due: 500 },
    ]);

    return (
        <PaymentContext.Provider value={{ payments, setPayments }}>
            {children}
        </PaymentContext.Provider>
    );
};

// Custom Hook to use the Payment Context
export const usePayments = () => {
    return useContext(PaymentContext);
};
