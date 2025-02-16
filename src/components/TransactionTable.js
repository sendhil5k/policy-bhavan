import React from "react";
import './TransactionTable.css';
import Card from './Card';  
import ReusableTable from './ReusableTable';
const TransactionTable = () => {
  const columns = ['id', 'name', 'language', 'version']; // Define the columns you want to display
  const dataUrl = 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json'; // Replace with your external JSON URL
  return (
    <Card title="Pending Transactions" content={
      <ReusableTable columns={columns} dataUrl={dataUrl} limit={10}/>
    } />
    
  )
}
export default TransactionTable;
