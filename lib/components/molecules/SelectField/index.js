import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { noop } from 'utils';

const SelectField = ({
  data,
  title,
  value,
  onChange,
  className,
}) => {

  const optionsData = useMemo(() => {
    if (!data || !data.length) return <option>No data</option>;
    return data.map(({ title, value }) => (
      <option value={value}>
        {title}
      </option>
    ));
  }, [data]);

  return (
    <div className={classnames('form-group', className)}>
      <label htmlFor="">{title}</label>
      <select
        className="form-control"
        onChange={onChange}
        value={value}
      >
        {optionsData}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  onChange: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
};

SelectField.defaultProps = {
  data: null,
  title: '',
  value: null,
  className: '',
  onChange: noop,
};

export default SelectField;
