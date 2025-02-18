import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { hashSync } from "bcrypt";

const prisma = new PrismaClient();

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, email, password } = req.body;
  let user = await prisma.user.findFirst({
    select: {
      email: true,
    },
  });
  if (!user) {
    const newUser = await prisma.user.create({
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
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  let user = await prisma.user.findFirst({
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
};
