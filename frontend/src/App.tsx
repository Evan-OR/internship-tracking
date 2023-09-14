import { useEffect, useState } from 'react';
import { Application } from './types';
import ApplicationWrapper from './components/ApplicationWrapper';
import './index.scss';

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

  return <ApplicationWrapper apps={apps} />;
}

export default App;
