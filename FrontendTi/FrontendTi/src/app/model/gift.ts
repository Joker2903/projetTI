import { GiftDTO } from '../dto/giftDTO';

export class Gift {
  private _GiftID: number;

  private _Description: string;

  constructor(GiftID: number = -1, Description: string = '') {
    this._GiftID = GiftID;
    this._Description = Description;
  }

  toGiftDTO(): GiftDTO {
    return {
      GiftID: this._GiftID,
      Description: this._Description,
    };
  }

  fromGiftDTO(dto: GiftDTO): Gift {
    Object.assign(this, dto);
    return this;
  }

  equals(obj: any): boolean {
    if (obj instanceof Gift) {
      return this._GiftID === (<Gift>obj)._GiftID;
    }
    return false;
  }
  public get Description(): string {
    return this._Description;
  }
  public set Description(value: string) {
    this._Description = value;
  }
  public get GiftID(): number {
    return this._GiftID;
  }
  public set GiftID(value: number) {
    this._GiftID = value;
  }
}
