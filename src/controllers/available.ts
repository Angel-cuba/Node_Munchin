const { Request, Response } = require('express');
import availableServices from '../services/available';
import userServices from '../services/user';

export const create = async (req: Request, res: any) => {
  const { userId, available } = req.body as any;

  const availability = await availableServices.createAvailability({ userId, available });
  res.json(availability);
};

export const getByUserId = async (req: any, res: any) => {
  const { userId } = req.params as any;

  const getUser = await userServices.getUserById(userId);
  const availability = await availableServices.getAvailabilityByUserId(userId);
  res.json({ getUser, availability });
};

export const getAll = async (req: Request, res: any) => {
  const availability = await availableServices.getAllAvailabilities();
  res.json(availability);
};
