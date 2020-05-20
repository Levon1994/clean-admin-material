import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { noop } from '../../utils';

const TextField = ({
  type,
  value,
  title,
  required,
  onChange,
  textarea,
  errorText,
  className,
  withRadius,
  placeholder,
  textareaRows,
  ...restProps
}) => {
  return (
    <div className={classnames('form-group', className)}>
      {title && <label htmlFor="">title</label>}
        {
          textarea
           ? <textarea
                class="form-control"
                placeholder={placeholder}
                rows={textareaRows}
                required={required}
                onChange={onChange}
                {...restProps}
             />
           : <input
               className={classnames('form-control' , { 'rounded': withRadius })}
               placeholder={placeholder}
               required={required}
               type={type}
               onChange={onChange}
               {...restProps}
             />
        }
      {errorText && <div className="help-block form-text with-errors form-control-feedback">{errorText}</div>}
    </div>
  )
};

TextField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  title: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  withRadius: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  textareaRows: PropTypes.number,
};

TextField.defaultProps = {
  value: '',
  title: null,
  type: 'text',
  className: '',
  onChange: noop,
  required: false,
  errorText: null,
  textareaRows: 3,
  withRadius: false,
  placeholder: null,
};

export default TextField;
