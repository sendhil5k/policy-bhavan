import { Link } from 'react-router-dom';
import "./TwoColumnLayout.css"; // Import the CSS file
import MainLayout from "./MainLayout";
import Card from './Card';
const TwoColumnLayout = () => {
  

  return (
    <div className="mid-container">
      <div className="wrapper">
        <div className="column">
          <Card title='Details' content={
            <>
          <Link to="/transactiontable">Pending Transactions </Link><br /><br />
          <Link to="/transactiontable">Saved Transactions</Link><br /><br />
          <Link to="/transactiontable">Completed Transactions</Link><br /><br />
          <Link to="/transactiontable">Voided Transactions</Link><br /><br />
          <Link to="/transactiontable">Incompletes Transactions</Link><br /><br />
          <Link to="/transactiontable">Purged Transactions</Link>
          </>
        } />
        </div>
        <div className="column1">
          <MainLayout />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
