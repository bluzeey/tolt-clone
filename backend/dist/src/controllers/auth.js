"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signUp = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = req.body;
    let user = yield prisma.user.findFirst({
        select: {
            email: true,
        },
    });
    if (!user) {
        const newUser = yield prisma.user.create({
            data: {
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password,
            },
        });
        req.session.user = newUser;
        req.session.save();
        res.json(newUser);
        next();
    }
});
exports.signUp = signUp;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    let user = yield prisma.user.findFirst({
        select: {
            email: true,
            firstName: true,
            lastName: true,
        },
    });
    res.json(user);
    if (!user) {
        res.status(403).send("User not found");
    }
});
exports.login = login;
