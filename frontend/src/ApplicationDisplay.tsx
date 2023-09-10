import { Application } from './types';

type ApplicationDisplayProps = {
  app: Application;
};

function ApplicationDisplay({ app }: ApplicationDisplayProps) {
  return (
    <div>
      <h3>{app.title}</h3>
      <ul>
        <li>{app.type}</li>
        <li>{app.status}</li>
        <li>{app.date_applied}</li>
      </ul>
    </div>
  );
}

export default ApplicationDisplay;
