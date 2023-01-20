import Table from './Table';
import useSort from '../hooks/use-sort';

import { GoArrowSmallUp, GoArrowSmallDown } from 'react-icons/go';

function SortableTable(props) {
  const { config, data } = props;

  const { sortBy, sortOrder, setSortColumn, sortedData } = useSort(
    data,
    config
  );

  const updatedConfig = config.map(column => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  function getIcons(label) {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    }
    if (sortOrder === null) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    } else if (sortOrder === 'asc') {
      return (
        <div>
          <GoArrowSmallUp />
        </div>
      );
    } else if (sortOrder === 'desc') {
      return (
        <div>
          <GoArrowSmallDown />
        </div>
      );
    }
  }

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

export default SortableTable;
