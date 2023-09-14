import { Application } from '../types';
import style from './ApplicationDisplayStyle.module.scss';

type ApplicationDisplayProps = {
  app: Application;
};

function ApplicationDisplay({ app }: ApplicationDisplayProps) {
  const formatDate = (date: string) => {
    const dateObject = new Date(date);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${dateObject.getDate()} ${monthNames[dateObject.getMonth()]}`;
  };

  return (
    <div className={style.applicationDisplay}>
      <div className={style.title}>{app.title}</div>
      <div className={style.type}>{app.type}</div>
      <div className={style.status}>{app.status}</div>
      <div className={style.date}>{formatDate(app.date_applied)}</div>
      <div className={style.btn}>
        <button>Show Image</button>
      </div>
    </div>
  );
}

export default ApplicationDisplay;
