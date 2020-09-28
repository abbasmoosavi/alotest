/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import AppConfig from '../configs/AppConfig';

const isDEV = !!AppConfig.IS_DEBUG;

const pad = time => time.padStart(2, '0');

function getTimeStamp() {
  const date = new Date();
  const hours = pad(date.getHours().toString());
  const minutes = pad(date.getMinutes().toString());
  const secs = pad(date.getSeconds().toString());
  return `${hours}:${minutes}:${secs}`;
}

function echo(message, data) {
  return data || message;
}

const levels = {
  trace: { priority: 10, color: '#6699cc' },
  debug: { priority: 20, color: '#B0BDC4' },
  info: { priority: 30, color: '#99cc99' },
  warn: { priority: 40, color: '#ffcc66' },
  error: { priority: 50, color: '#F00000' },
  request_header: { priority: 60, color: '#512DA8' },
  request_body: { priority: 60, color: '#512DA8' },
  response_header: { priority: 70, color: '#1abc9c' },
  response_body: { priority: 70, color: '#1abc9c' },
  socket: { priority: 80, color: '#FF4081' },
};

function Logger({ level = 'info' } = {}) {
  if (!levels[level]) {
    throw Error('Invalid log level set');
  }

  const createLogger = {};

  const log = level => {
    const { color } = levels[level];
    const css = `color: #fff;font-weight:bold; background-color: ${color}; padding: 3px 3px;`;

    return (message = '', data = '') => {
      if (typeof message !== 'string') {
        data = message;
        message = '';
      }

      const output = `%c${getTimeStamp()} ${level.toUpperCase().padEnd(6)}%c ${message}`;
      console.log(output, css, 'color: inherit;', '\n', data);
      return data || message;
    };
  };

  for (let current in levels) {
    const shouldLog = levels[current].priority >= levels[level].priority && isDEV;
    createLogger[current] = shouldLog ? log(current) : echo;
  }

  return createLogger;
}

export default Logger;
