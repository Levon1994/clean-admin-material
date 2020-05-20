import React, { useMemo } from 'react';

import {
  Icon,
  Paper,
  KeyValue,
} from 'components';

import useFormatter from '../formatter';

import './style.scss';

const CardList = ({
  data,
  columns,
  onEditRow,
  onDeleteRow,
  readyForEdit,
}) => {

  const formatter = useFormatter();

  const cardlistBody = useMemo(() => {
    if(!data || !columns) return null;

    return columns.map(item => (
      <KeyValue
        key={item.name}
        title={item.name}
        value={formatter(item.type, data[item.dataKey], item)}
      />
    ))
  }, [data, columns, formatter]);

  return (
    <Paper className="CardList" flexName="flexible wrap">
      {cardlistBody}
      {
        readyForEdit &&
        <Paper className="buttons-block" flexName="flexible grow aCenter">
          <Paper flexName="flexible jCenter">
            <Icon className="icon-feather-edit" onClick={() => onEditRow(data)}/>
          </Paper>
          <Paper flexName="flexible jCenter">
            <Icon className="icon-feather-trash-2" onClick={() => onDeleteRow(data)} />
          </Paper>
        </Paper>
      }
    </Paper>
  )
};

export default CardList;
