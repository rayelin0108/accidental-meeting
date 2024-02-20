import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApiExample() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 替換成你的 API 端點
        const response = await axios.get('https://athena.eslite.com/api/v1/book_exhibits', { params: { product_guid: '10012122082682472954005' } });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); // 空依賴數組表示這個 effect 只會在組件裝載時運行一次

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <div>取資料範例</div>
      <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}

export default ApiExample;