export enum ToWorkerMessageType {
    
}

export interface MessageToWorker {
    type: ToWorkerMessageType;
}

export enum FromWorkerMessageType {
    Log,
    Response,
    Event
}

export interface MessageFromWorker {
    type: FromWorkerMessageType;
    data: any;
}

export enum FromWorkerLogLevel {
    Trace,
    Debug,
    Info,
    Warn,
    Error,
    Fatal
}

export interface LogMessageFromWorker {
    logLevel: FromWorkerLogLevel;
    logMessage: any[];
}