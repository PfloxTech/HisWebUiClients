import { HsptContactModel } from "./hsptcontactmodel";
import { HsptUserModel } from "./hsptUserModel";
import { HsptMiscellaneousModel } from "./HsptMiscellaneousModel";
import { FetaureModel } from "./FeatureModel";

export class HsptModel {
    HospitalName: string = '';
    HsptContact: HsptContactModel = new HsptContactModel();
    HsptUser: HsptUserModel = new HsptUserModel();
    HsptMiscellaneous: HsptMiscellaneousModel = new HsptMiscellaneousModel();
    HsptProviders: Array<FetaureModel> = new Array<FetaureModel>();
    HsptFacilities: Array<FetaureModel> = new Array<FetaureModel>();
    HsptSpecialities: Array<FetaureModel> = new Array<FetaureModel>();
    HsptInsurances: Array<FetaureModel> = new Array<FetaureModel>();
    HsptAyush: Array<FetaureModel> = new Array<FetaureModel>();
}