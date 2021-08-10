import { ClientDTO } from '../dto/clientDTO';

export class Client {
  private _clientID: number;

  private _firstName: string;

  private _lastName: string;

  private _mail: string;

  private _sponsorID: number;

  private _password: string;

  constructor(
    clientID: number = -1,
    firstname: string = '',
    lastname: string = '',
    mail: string = '',
    sponsorID: number = -1,
    password: string = ''
  ) {
    this._clientID = clientID;
    this._firstName = firstname;
    this._lastName = lastname;
    this._mail = mail;
    this._sponsorID = sponsorID;
    this._password = password;
  }

  toClientDTO(): ClientDTO {
    return {
      clientID: this._clientID,
      firstname: this._firstName,
      lastname: this._lastName,
      mail: this._mail,
      sponsorID: this._sponsorID,
      password: this._password,
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
  public get firstname(): string {
    return this._firstName;
  }
  public set firstname(value: string) {
    this._firstName = value;
  }
  public get lastname(): string {
    return this._lastName;
  }
  public set lastname(value: string) {
    this._lastName = value;
  }
  public get mail(): string {
    return this._mail;
  }
  public set mail(value: string) {
    this._mail = value;
  }
  public get sponsorID(): number {
    return this._sponsorID;
  }
  public set sponsorID(value: number) {
    this._sponsorID = value;
  }
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
}
