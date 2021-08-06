import { AdminDTO } from '../dto/adminDTO';
import { ClientDTO } from '../dto/clientDTO';

export class Admin {
  private _ID: number;

  private _Login: string;

  private _Password: string;

  constructor(ID: number = -1, Login: string = '', Password: string = '') {
    this._ID = ID;
    this._Login = Login;
    this._Password = Password;
  }

  toAdminDTO(): AdminDTO {
    return {
      ID: this._ID,
      Login: this._Login,
      Password: this._Password,
    };
  }

  fromAdminDTO(dto: AdminDTO): Admin {
    Object.assign(this, dto);
    return this;
  }

  equals(obj: any): boolean {
    if (obj instanceof Admin) {
      return this._ID === (<Admin>obj)._ID;
    }
    return false;
  }
  public get ID(): number {
    return this._ID;
  }
  public set ID(value: number) {
    this._ID = value;
  }
  public get Login(): string {
    return this._Login;
  }
  public set Login(value: string) {
    this._Login = value;
  }
  public get Password(): string {
    return this._Password;
  }
  public set Password(value: string) {
    this._Password = value;
  }
}
