/**
 * RestWorkerClientWorker
 * This is the webworker portion of RestWorkerClient.  It initializes and dispatches.
 */

import { RestClient } from '../RestClient/index';
import {
    ToWorkerMessageType,
    MessageToWorker,
    FromWorkerMessageType,
    MessageFromWorker,
    LogMessageFromWorker,
    FromWorkerLogLevel
} from '../lib/WebWorkerTypes';

function submitMessage(message: MessageFromWorker) {
    postMessage(message);
}

function log(level: FromWorkerLogLevel, ...args: string[]) {
    const data: LogMessageFromWorker = {
        logLevel: level,
        logMessage: args
    }

    submitMessage({
        type: FromWorkerMessageType.Log,
        data,
    });
}

onmessage = function(e: MessageEvent) {
    if (e.data instanceof Object && !(e.data instanceof String)) {
        const message: MessageToWorker = e.data;

    } else {
        log(FromWorkerLogLevel.Error, 'Did not receive a JSON payload from worker.')
    }
}