import { profile } from '../data/profile';
export const TopBar = () => (
  <header className="topbar">
    <b>{profile.name}</b>
    <span><i className="pulse" /> open to data analyst roles</span>
  </header>
);
