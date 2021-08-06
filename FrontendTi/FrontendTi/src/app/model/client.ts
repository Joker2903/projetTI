import { ClientDTO } from '../dto/clientDTO';

export class Client {
  private _clientID: number;

  private _FirstName: string;

  private _LastName: string;

  private _Mail: string;

  private _SponsorID: number;

  private _Password: string;

  constructor(
    clientID: number = -1,
    FirstName: string = '',
    LastName: string = '',
    Mail: string = '',
    SponsorID: number = -1,
    Password: string = ''
  ) {
    this._clientID = clientID;
    this._FirstName = FirstName;
    this._LastName = LastName;
    this._Mail = Mail;
    this._SponsorID = SponsorID;
    this._Password = Password;
  }

  toClientDTO(): ClientDTO {
    return {
      clientID: this._clientID,
      FirstName: this._FirstName,
      LastName: this._LastName,
      Mail: this._Mail,
      SponsorID: this._SponsorID,
      Password: this._Password,
    };
  }

  fromClientDTO(dto: ClientDTO): Client {
    Object.assign(this, dto);
    return this;
  }

  equals(obj: any): boolean {
    if (obj instanceof Client) {
      return this._clientID === (<Client>obj)._clientID;
    }
    return false;
  }
  public get clientID(): number {
    return this._clientID;
  }
  public set clientID(value: number) {
    this._clientID = value;
  }
  public get FirstName(): string {
    return this._FirstName;
  }
  public set FirstName(value: string) {
    this._FirstName = value;
  }
  public get LastName(): string {
    return this._LastName;
  }
  public set LastName(value: string) {
    this._LastName = value;
  }
  public get Mail(): string {
    return this._Mail;
  }
  public set Mail(value: string) {
    this._Mail = value;
  }
  public get SponsorID(): number {
    return this._SponsorID;
  }
  public set SponsorID(value: number) {
    this._SponsorID = value;
  }
  public get Password(): string {
    return this._Password;
  }
  public set Password(value: string) {
    this._Password = value;
  }
}
