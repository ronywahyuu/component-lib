/* eslint-disable prettier/prettier */

import "./index.css"
interface BadgeProps {
    children: React.ReactNode;
}

const Badge = ({children}:BadgeProps) => {
  return <span className="e-badge e-badge-primary">{children}</span>;
};

export default Badge;
