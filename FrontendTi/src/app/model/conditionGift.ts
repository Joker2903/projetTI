import { ConditionGiftDTO } from '../dto/conditionGiftDTO';

export class ConditionGift {
    private _conditionID: number;

    private _numberOfClient: number;

    private _giftID: number;

    private _description: string;

    constructor(conditionID: number = -1, numberOfClient: number = 0, GiftID: number = -1, Description: string = '') {
        this._conditionID = conditionID
        this._numberOfClient = numberOfClient
        this._giftID = GiftID;
        this._description = Description;
    }

    // toGiftDTO(): GiftDTO {
    //     return {
    //         giftID: this._giftID,
    //         description: this._description,
    //     };
    // }

    fromConditionGiftDTO(dto: ConditionGiftDTO): ConditionGift {
        Object.assign(this, dto);
        return this;
    }

    equals(obj: any): boolean {
        if (obj instanceof ConditionGift) {
            return this._giftID === (<ConditionGift>obj)._giftID && this._conditionID === (<ConditionGift>obj)._conditionID;
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

    public get giftID(): number {
        return this._giftID;
    }
    public set giftID(value: number) {
        this._giftID = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
}
