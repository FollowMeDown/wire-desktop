/*
 * Wire
 * Copyright (C) 2019 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import {LogFactory, LoggerOptions} from '@wireapp/commons';
import * as logdown from 'logdown';

const LOGGER_NAMESPACE = 'wire-desktop';
const {environment} = require('../../package.json');

function getLogger(name: string): logdown.Logger {
  const options: LoggerOptions = {
    namespace: LOGGER_NAMESPACE,
    separator: '/',
  };

  if (environment !== 'production') {
    options.forceEnable = true;
  }

  return LogFactory.getLogger(name, options);
}

export {getLogger, LOGGER_NAMESPACE};