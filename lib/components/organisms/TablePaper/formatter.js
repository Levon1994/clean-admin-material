import React from 'react';
import dayjs from 'dayjs';

import {
  Icon,
  Paper,
  Avatar,
  Status,
} from 'components';

import { isMobile } from 'utils';

const FB_URL = 'https://firebasestorage.googleapis.com/v0/b/level-up-courses.appspot.com/o/facebook.svg?alt=media&token=483d7dd8-f433-40f0-a7fd-75746b670d41';
const GMAIL_URL = 'https://firebasestorage.googleapis.com/v0/b/level-up-courses.appspot.com/o/gmail.svg?alt=media&token=601f2602-bb89-4244-8204-24992aa3b27d';

const useFormatter = () => {
  return (type, value, data) => {
    switch (type) {
      case 'MULTIPLE_TEXT':
        return <Paper flexName="flexible aCenter jCenter" className="table-multiple-text-value" style={{ width: 300 }}>
                <Paper flexName="flexible aCenter wrap">
                  {value.length ? value.map((item, index) => (
                    <Paper key={index} className="multiple-text-item">{item}</Paper>
                  )) : null}
                </Paper>
               </Paper>
      case 'URL' :
        return <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="table-url-type-value flexible jCenter aCenter"
                >
                  {value}
                  <Icon style={{ marginLeft: 10 }} className="icon-feather-external-link" />
                </a>
      case 'DATE':
        return dayjs(value).format('DD/MM/YYYY');
      case 'IMAGE':
        return <Avatar src={value} />;
      case 'LOGGED_BY':
        if(data.fb_id) {
          return <Avatar src={FB_URL} />
        } else if(data.google_id) {
          return <Avatar src={GMAIL_URL} />
        } else {
          return <Avatar src={null} />;
        }
      case 'STATUS':
        return <Paper flexName="flexible jCenter">
                <Status isActive={value} />
               </Paper>;
      case 'DESC':
        return <Paper style={{ maxWidth: isMobile() ? 130: 200 }} flexName="flexible jBetween">
                <Paper className="singleLine truncate" title={value}>{value}</Paper>
              </Paper>
      default:
        return value;
    };
  };
};

export default useFormatter;
