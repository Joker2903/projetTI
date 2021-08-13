import { ConditionDTO } from '../dto/conditionDTO';

export class Condition {
  private _conditionID: number;

  private _numberOfClient: number;

  private _startDate: Date;

  private _endDate: Date;

  private _expiration: number;

  private _giftId: number;

  constructor(
    conditionID: number = -1,
    numberOfClient: number = 0,
    startDate: Date = new Date(),
    endDate: Date = new Date(),
    expiration: number = 0,
    giftId: number = -1
  ) {
    this._conditionID = conditionID;
    this._numberOfClient = numberOfClient;
    this._startDate = startDate;
    this._endDate = endDate;
    this._expiration = expiration;
    this._giftId = giftId;
  }

  toConditionDTO(): ConditionDTO {
    return {
      conditionID: this._conditionID,
      numberOfClient: this._numberOfClient,
      startDate: this._startDate,
      endDate: this._endDate,
      expiration: this._expiration,
      giftId: this._giftId,
    };
  }

  fromConditionDTO(dto: ConditionDTO): Condition {
    Object.assign(this, dto);
    return this;
  }

  equals(obj: any): boolean {
    if (obj instanceof Condition) {
      return this._conditionID === (<Condition>obj)._conditionID;
    }
    return false;
  }
  public get conditionID(): number {
    return this._conditionID;
  }
  public set conditionID(value: number) {
    this._conditionID = value;
  }
  public get numberOfClient(): number {
    return this._numberOfClient;
  }
  public set numberOfClient(value: number) {
    this._numberOfClient = value;
  }
  public get startDate(): Date {
    return this._startDate;
  }
  public set startDate(value: Date) {
    this._startDate = value;
  }
  public get endDate(): Date {
    return this._endDate;
  }
  public set endDate(value: Date) {
    this._endDate = value;
  }
  public get expiration(): number {
    return this._expiration;
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public get giftId(): number {
    return this._giftId;
  }
  public set giftId(value: number) {
    this._giftId = value;
  }
}
