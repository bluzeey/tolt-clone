"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const isAuthenticated = (req, res, next) => {
    if (req.session.user)
        next();
    else
        next("route");
};
exports.isAuthenticated = isAuthenticated;
