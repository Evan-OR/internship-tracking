import { Application } from '../types';
import ApplicationDisplay from './ApplicationDisplay';
import style from './ApplicationDisplayStyle.module.scss';

type ApplicationDisplayProps = {
  apps: Application[];
};

function ApplicationWrapper({ apps }: ApplicationDisplayProps) {
  return (
    <div className={style.wrapper}>
      <div className={style.headings}>
        <div className={style.title}>Title</div>
        <div className={style.type}>Duration</div>
        <div className={style.status}>Status</div>
        <div className={style.date}>Date Appllied</div>
        <div className={style.btn}>Application Image</div>
      </div>
      {apps.map((app) => (
        <ApplicationDisplay key={app.id} app={app} />
      ))}
    </div>
  );
}

export default ApplicationWrapper;
