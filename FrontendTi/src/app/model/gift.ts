import { GiftDTO } from '../dto/giftDTO';

export class Gift {
  private _giftID: number;

  private _description: string;

  constructor(GiftID: number = -1, Description: string = '') {
    this._giftID = GiftID;
    this._description = Description;
  }

  toGiftDTO(): GiftDTO {
    return {
      giftID: this._giftID,
      description: this._description,
    };
  }

  fromGiftDTO(dto: GiftDTO): Gift {
    Object.assign(this, dto);
    return this;
  }

  equals(obj: any): boolean {
    if (obj instanceof Gift) {
      return this._giftID === (<Gift>obj)._giftID;
    }
    return false;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get giftID(): number {
    return this._giftID;
  }
  public set giftID(value: number) {
    this._giftID = value;
  }
}
