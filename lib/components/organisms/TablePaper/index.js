import React, { useState, useMemo } from 'react';

import {
  Paper,
  Title,
  TextField,
  BusyLoader,
} from 'components';

import { isMobile } from 'utils';

import Table from './Table';
import CardList from './CardList';
import Pagination from './Pagination';

import './style.scss';

const TablePaper = ({
  data,
  count,
  title,
  isBusy,
  columns,
  buttons,
  maxCount,
  onEditRow,
  withSearch,
  onDeleteRow,
  initialPage,
  readyForEdit,
  handleUpdate,
  onPageChange,
  searchValueField,
}) => {

  const mobile = isMobile();

  const [searchValue, setSearchValue] = useState('');

  const tableData = useMemo(() => {
    if(!data || !data.length) return null;

    return data
    .filter(item =>
      (item.name && item.name.toLowerCase().includes(searchValue.toLowerCase()))
      || (item[searchValueField] && item[searchValueField].toLowerCase().includes(searchValue.toLowerCase()))
    )
    .map(item => item);
  }, [searchValue, data, searchValueField]);

  const cardListContent = useMemo(() => {
    if (!tableData || !tableData.length) return null;

    return tableData.map(item => (
      <CardList
        key={item._id}
        columns={columns}
        data={item}
        onEditRow={onEditRow}
        onDeleteRow={onDeleteRow}
        readyForEdit={readyForEdit}
      />
    ));
  }, [tableData, columns, onEditRow, onDeleteRow, readyForEdit]);

  return (
    <Paper className="TablePaper">
      <Title
        count={count}
        title={title}
        withUpdate
        handleUpdate={handleUpdate}
      />
      <BusyLoader isBusy={isBusy}>
        <Paper flexName="serch-line flexible jBetween aCenter">
          {withSearch &&
            <TextField
              searchField
              placeholder="Search"
              value={searchValue}
              onChange={({ target }) => setSearchValue(target.value)}
            />
          }
          {buttons}
        </Paper>
        {
          !mobile
            ? <>
                <Table
                  data={tableData}
                  columns={columns}
                  onEditRow={onEditRow}
                  onDeleteRow={onDeleteRow}
                  readyForEdit={readyForEdit}
                />
                {
                  onPageChange &&
                  <Pagination
                    count={count}
                    maxCount={maxCount}
                    initialPage={initialPage}
                    onPageChange={onPageChange}
                  />
                }
              </>
            : <Paper className="CardListComponent" flexName="flexible vertical">
                {cardListContent}
              </Paper>
        }
      </BusyLoader>
    </Paper>
  );
};

export default TablePaper;
