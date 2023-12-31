"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const allowedOrigins_1 = __importDefault(require("./allowedOrigins"));
const corsOptions = {
    origin: function (origin, cb) {
        if (allowedOrigins_1.default.indexOf(origin) !== -1 || !origin)
            return cb(null, true);
        cb(new Error("Not allowed by CORS"));
    },
    optionsSuccessStatus: 200,
};
exports.default = corsOptions;
