import { Link } from 'react-router-dom';
interface BreadcrumbProps {
  pageName: string;
  direction: { name: string; path: string }[];
}
const Breadcrumb = ({ pageName, direction }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          {direction.map((item, key) => (
            <li key={key}>
              <Link className="font-medium" to={item.path}>
                {item.name} {key !== direction.length + 1 && '/'}
              </Link>
            </li>
          ))}
          <li className="font-medium text-primary">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
