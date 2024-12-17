import * as winston from "winston";
import {transports} from "winston";

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.cli(),
    // defaultMeta: { service: 'user-service' },
    transports: [
        new transports.Console()
    ],
});