import { model, Schema, Document } from 'mongoose';

export interface Available {
  week: string;
  free: string;
}

export interface AvailabilityInterface extends Document {
  userId: string;
  available: Available[];
}

const availability = new Schema<Available>(
  {
    week: { type: String, required: true },
    free: { type: String, required: true },
  },
  { _id: false }
);

const availabilitySchema = new Schema<AvailabilityInterface>({
  userId: { type: String, required: true },
  available: { type: [availability], required: true },
});

export default model<AvailabilityInterface>('Availability', availabilitySchema);
