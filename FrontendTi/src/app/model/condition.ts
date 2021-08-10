import { ConditionDTO } from '../dto/conditionDTO';

export class Condition {
  private _ConditionID: number;

  private _NumberOfClient: number;

  private _StartDate: Date;

  private _EndDate: Date;

  private _Expiration: number;

  private _GiftId: number;

  constructor(
    ConditionID: number = -1,
    NumberOfClient: number = 0,
    StartDate: Date = new Date(),
    EndDate: Date = new Date(),
    Expiration: number = 0,
    GiftId: number = -1
  ) {
    this._ConditionID = ConditionID;
    this._NumberOfClient = NumberOfClient;
    this._StartDate = StartDate;
    this._EndDate = EndDate;
    this._Expiration = Expiration;
    this._GiftId = GiftId;
  }

  toConditionDTO(): ConditionDTO {
    return {
      ConditionID: this._ConditionID,
      NumberOfClient: this._NumberOfClient,
      StartDate: this._StartDate,
      EndDate: this._EndDate,
      Expiration: this._Expiration,
      GiftId: this._GiftId,
    };
  }

  fromConditionDTO(dto: ConditionDTO): Condition {
    Object.assign(this, dto);
    return this;
  }

  equals(obj: any): boolean {
    if (obj instanceof Condition) {
      return this._ConditionID === (<Condition>obj)._ConditionID;
    }
    return false;
  }
  public get ConditionID(): number {
    return this._ConditionID;
  }
  public set ConditionID(value: number) {
    this._ConditionID = value;
  }
  public get NumberOfClient(): number {
    return this._NumberOfClient;
  }
  public set NumberOfClient(value: number) {
    this._NumberOfClient = value;
  }
  public get StartDate(): Date {
    return this._StartDate;
  }
  public set StartDate(value: Date) {
    this._StartDate = value;
  }
  public get EndDate(): Date {
    return this._EndDate;
  }
  public set EndDate(value: Date) {
    this._EndDate = value;
  }
  public get Expiration(): number {
    return this._Expiration;
  }
  public set Expiration(value: number) {
    this._Expiration = value;
  }
  public get GiftId(): number {
    return this._GiftId;
  }
  public set GiftId(value: number) {
    this._GiftId = value;
  }
}
