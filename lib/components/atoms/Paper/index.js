import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { noop } from 'utils';

import './style.scss';

const Paper = forwardRef(({
  style,
  onClick,
  flexName,
  className,
  children,
  ...restProps
}, ref) => (
    <div className = {classnames('paper',{[className] : className, [flexName] : flexName})}
      onClick = {onClick}
      style = {style}
      ref = {ref}
      {...restProps}
    >
      {children}
    </div>
));

Paper.propTypes = {
  style: PropTypes.any,
  children: PropTypes.children,
  flexName: PropTypes.string,
  className: PropTypes.className,
  onClick: PropTypes.func,
};

Paper.defaultProps = {
  style: null,
  children: null,
  flexName: '',
  className: '',
  onClick: noop,
};

export default Paper;
