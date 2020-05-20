import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

import { noop } from '../../utils';

import './style.scss';

const Modal = ({
  title,
  onSave,
  onClose,
  children,
  maxWidth,
  className,
  customFooter,
}) => {
  const wrapperRef = useRef(null);

  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      onClose();
    };
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    createPortal(
      <div className="modal-open">
        <div className="modal">
          <div
            ref={wrapperRef}
            style={{ maxWidth }}
            className={classnames('modal-dialog animated', className)}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {title}
                </h5>
                <Icon name="icon-feather-x" onClick={onClose} />
              </div>
              <div className="modal-body">
                {children}
              </div>
              <div className="modal-footer">
                {
                  customFooter ||
                    <>
                      <Button className="btn btn-secondary" onClick={onClose}>
                        Close
                      </Button>
                      <Button className="btn btn-primary" onClick={onSave}>
                        Save changes
                      </Button>
                    </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.querySelector('#root-modal')
    )
  );
};

Modal.propTypes = {
  onSave: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any,
  onClose: PropTypes.func,
  maxWidth: PropTypes.number,
  className: PropTypes.string,
};

Modal.defaultProps = {
  title: null,
  className: 'fadeInDown',
  onClose: noop,
  maxWidth: null,
  children: null,
};

export default Modal;
