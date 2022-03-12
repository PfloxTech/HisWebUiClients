import { HsptContactModel } from "./hsptcontactmodel";
import { HsptUserModel } from "./hsptUserModel";
export class HsptModel {
    HospitalName: string = '';
    HsptContact: HsptContactModel = new HsptContactModel();
    HsptUser: HsptUserModel = new HsptUserModel();
}