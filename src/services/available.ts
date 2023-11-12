import Availability, { AvailabilityInterface } from '../models/Availability';

const createAvailability = async (availability: {
  userId: string;
  available: any[];
}): Promise<AvailabilityInterface> => {
  console.log(availability);
  return Availability.create(availability);
};

const getAvailabilityByUserId = async (
  userId: string
): Promise<AvailabilityInterface | null> => {
  return Availability.findOne({ userId });
};

const getAllAvailabilities = async (): Promise<AvailabilityInterface[]> => {
  return Availability.find();
};

const getAllAvailabilitiesAndCompareWithUserAvailability = async (
  userId: string
): Promise<AvailabilityInterface[]> => {
  return Availability.find();
};

export default {
  createAvailability,
  getAvailabilityByUserId,
  getAllAvailabilities,
  getAllAvailabilitiesAndCompareWithUserAvailability,
};