import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  breadcrumbs: { name: string; path: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav className=" breadcrumbs text-sm font-medium mb-4">
      <ol className="flex space-x-2">
      {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <li>
              <Link to={crumb.path} className="hover:text-blue-600 transition-colors duration-300">
                {crumb.name}
              </Link>
            </li>
            {index < breadcrumbs.length - 1}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
