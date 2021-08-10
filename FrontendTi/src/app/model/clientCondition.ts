import { ClientConditionDTO } from '../dto/clientConditionDTO';

export class ClientCondition {
  private _clientId: number;
  private _conditionId: number;
  private _completedDate: Date;

  constructor(
    clientId: number = -1,
    conditionId: number = 1,
    completedDate: Date
  ) {
    this._clientId = clientId;
    this._conditionId = conditionId;
    this._completedDate = completedDate;
  }

  toClientConditionDTO(): ClientConditionDTO {
    return {
      clientId: this._clientId,
      conditionId: this._conditionId,
      completedDate: this._completedDate,
    };
  }

  fromClientConditionDTO(dto: ClientConditionDTO): ClientCondition {
    Object.assign(this, dto);
    return this;
  }

  equals(obj: any): boolean {
    if (obj instanceof ClientCondition) {
      return (
        this._clientId === (<ClientCondition>obj)._clientId &&
        this._conditionId === (<ClientCondition>obj)._conditionId
      );
    }
    return false;
  }

  public get completedDate(): Date {
    return this._completedDate;
  }
  public set completedDate(value: Date) {
    this._completedDate = value;
  }
  public get clientId(): number {
    return this._clientId;
  }
  public set clientId(value: number) {
    this._clientId = value;
  }
  public get conditionId(): number {
    return this._conditionId;
  }
  public set conditionId(value: number) {
    this._conditionId = value;
  }
}
