import {Request, Response } from 'express';
import User, { UserInterface } from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import  userServices  from '../services/user';


export const signup = async (req: Request, res: Response) => {
  const { name, lastname, email, password } = req.body;

  // Validate unique email
  const findUser = await userServices.getUserByEmail(email);
  if (findUser) return res.status(400).json({ message: 'Email already exists' });

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = new User({ name, lastname, email, password: hashPassword });
  await user.save();

  const token = jwt.sign({
    name: user.name,
    id: user._id,
  }, process.env.TOKEN_SECRET as string, {
    expiresIn: 60 * 60 * 24,
  });

  res.header('auth-token', token).json({
    message: 'User created',
    token,
    user
  });
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const findUser = await userServices.getUserByEmail(email);
    if (!findUser) return res.status(400).json({ message: 'Email or password is wrong' });

    const validPassword = await bcrypt.compare(password, findUser.password);
    if (!validPassword) return res.status(400).json({ message: 'Email or password is wrong' });

    const token = jwt.sign({
      name: findUser.name,
      id: findUser._id,
    }, process.env.TOKEN_SECRET as string, {
      expiresIn: 60 * 60 * 24,
    });

    res.header('auth-token', token).json({
      message: 'Login success',
      token,
      findUser
    });
}


export const getUsers = async (req: Request, res: Response) => {
  const users = await userServices.getAllUsers();
  res.json(users);
}
