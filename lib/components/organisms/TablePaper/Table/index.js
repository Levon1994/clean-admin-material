import React, { useMemo } from 'react';

import {
  Icon,
  Paper,
} from 'components';

import useFormatter from '../formatter';

import './style.scss';

const Table = ({
  data = [],
  title,
  columns = [],
  onEditRow,
  onDeleteRow,
  readyForEdit,
}) => {

  const formatter = useFormatter();

  const tableColumns = useMemo(() =>
    columns && columns.length && columns.map(item =>
      <th key={item.dataKey}>{item.name}</th>
    )
  , [columns]);

  const tableData = useMemo(() =>
    data && data.length && data.map(item =>
      <tr key={item._id}>
        {columns.map(el =>
          <td key={el.dataKey}>{formatter(el.type, item[el.dataKey], item)}</td>
        )}
        {readyForEdit &&
          <td style={{ padding: '0.9rem 0.2rem' }}>
            <Paper className="icons-block">
              {onEditRow && <Icon className="icon-feather-edit" onClick={() => onEditRow(item)}/>}
              {onDeleteRow && <Icon className="icon-feather-trash-2" onClick={() => onDeleteRow(item)} />}
            </Paper>
          </td>
        }
      </tr>
    )
  , [data, columns, formatter, readyForEdit, onEditRow, onDeleteRow]);

  return (
    <Paper className="Table">
      <table>
        <thead>
          <tr>
            {tableColumns}
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
    </Paper>
  );
};

export default Table;
