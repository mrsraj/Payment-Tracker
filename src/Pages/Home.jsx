import ChairmanDashboard from "../Components/ChairmanDashboard";
import StudentList from "../Components/StudentList";
import PaymentForm from "../Components/PaymentForm";
import PaymentTable from "../Components/PaymentTable";

const Home = () => {
    return (
        <div>
            <h1>Payment Tracking System</h1>
            <ChairmanDashboard />
            <PaymentForm />
            <StudentList />
            <PaymentTable />
        </div>
    );
};

export default Home;
