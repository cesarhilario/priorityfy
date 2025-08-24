export type ItemModel = {
  id: string;
  name: string;
  description: string;
  quadrant: number;
  durationInMinutes: number;
  desire: number;
  score: number;
  createdAt: Date;
  updatedAt: Date | null;
};
