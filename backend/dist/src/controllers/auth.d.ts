import { NextFunction, Request, Response } from "express";
export declare const signUp: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const login: (req: Request, res: Response) => Promise<void>;
