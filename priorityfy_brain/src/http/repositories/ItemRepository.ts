import { ItemModel } from "../model/ItemModel.ts";

export interface ItemRepository {
  getAllItems(): Promise<ItemModel[]>;
  getItemById(id: string): Promise<ItemModel | null>;
  createItem(item: Omit<ItemModel, "id">): Promise<ItemModel>;
  updateItem(
    id: string,
    item: Partial<Omit<ItemModel, "id">>
  ): Promise<ItemModel | null>;
  deleteItem(id: string): Promise<boolean>;
}
