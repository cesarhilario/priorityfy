import type { ItemModel } from "../model/ItemModel";

export type CreateItemDTO = Omit<ItemModel, "id">;
export type UpdateItemDTO = Partial<Omit<ItemModel, "id">>;
export type DeleteItemDto = Pick<ItemModel, "id">;
