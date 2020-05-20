import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Icon = ({
  name,
  className,
  ...restProps
}) => (
  <i
    className={classnames('Icon', [ name, className ])}
    {...restProps}
  />
);

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  name: '',
  className: '',
};

export default Icon;
