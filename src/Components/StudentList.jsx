import { Link } from "react-router-dom";
import students from "../Data/students";
import style from "../Styles/studentList.module.css";

const StudentList = () => {
  return (
    <div className={style.student_list}>
      <h2>Student Records</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Joining Date</th>
            <th>Total Fee</th>
            <th>Deposited Fee</th>
            <th>Due Fee</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.branch}</td>
              <td>{student.joiningDate}</td>
              <td>₹{student.totalFee}</td>
              <td>₹{student.depositedFee}</td>
              <td>₹{student.totalFee - student.depositedFee}</td>
              <td>
                <Link to={`/students/${student.id}`} className={style.view_btn}>
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
