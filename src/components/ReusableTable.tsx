import React, { FC, useEffect, useState, useMemo } from 'react';
type reuseProps = {
  columns: string[];
  dataUrl: any;
  limit: number;
}
type User = {
  id: number;
  name: string;
  email: string;
};
interface SortConfig {
    key: string | null;
    direction: 'ascending' | 'descending';
  }
const ReusableTable:FC<reuseProps> = ({ columns, dataUrl, limit = 10 }) => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState<{ key: string | null; direction: 'ascending' | 'descending' }>({ key: null, direction: 'ascending' });
  const [error, setError] = useState<Error | null>(null); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.slice(0, limit)); // Limit the records based on the limit parameter
      } catch (error) {
        setError(error as Error)
        console.log('Error ', error);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataUrl, limit]);

  const sortedData = useMemo(() => {
    if (sortConfig.key) {
      return [...data].sort((a, b) => {
        const key = sortConfig.key as string;
        if (a[key] < b[key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name: string) => {
    if (!sortConfig.key) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <div className="table-container">
    <table className="transactions-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
             <th key={index} onClick={() => requestSort(column)} className={getClassNamesFor(column)}>
             {column} {sortConfig.key === column ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
           </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, index) => (
          <tr key={index}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{item[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ReusableTable;
