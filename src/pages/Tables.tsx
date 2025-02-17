import TableOne from '../components/Tables/TableOne';
import TableTwo from '../components/Tables/TableTwo';

const Tables = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
      </div>
    </>
  );
};

export default Tables;
