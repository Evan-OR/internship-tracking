import { useEffect, useState } from 'react';
import './App.css';

interface Application {
  date_applied: string; // Date format: "Fri, 01 Sep 2023 00:00:00 GMT"
  id: number;
  post_image: string | null; // Assuming post_image can be either a string (file path) or null
  status: string;
  title: string;
  type: string;
}

function App() {
  const [apps, setApps] = useState<Application[]>([]);

  const getApplications = async () => {
    const req = await fetch('http://127.0.0.1:5000/apps');
    const res = await req.json();
    console.log(res);
    setApps(res);
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <>
      <div>{apps ? apps.map((app) => <div key={app.id}>{app.title}</div>) : 'no apps'}</div>
    </>
  );
}

export default App;
