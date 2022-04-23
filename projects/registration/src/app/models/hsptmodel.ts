import { HsptContactModel } from "./hsptcontactmodel";
import { HsptUserModel } from "./hsptUserModel";
import { HsptMiscellaneousModel } from "./HsptMiscellaneousModel";
import { FetaureModel } from "./FeatureModel";
import { PostFeatureModel } from "./PostFeatureModel";

export class HsptModel {
    pk: number = 0;
    name: string = '';
    sysRegisterNum: string = ''
    registerNum: string = ''
    registerDate: Date = null!;
    registerRenewal: Date = null!;
    panNum: string = ''
    gstNum: string = ''
    website: string = ''
    accreditation: string = ''
    reminderDate: Date = new Date();
    digitalSignature: string = ''
    billingFk: number = 0;
    hsptContact: HsptContactModel = new HsptContactModel();
    hsptContacts: Array<HsptContactModel> = new Array<HsptContactModel>();
    hsptUser: HsptUserModel = new HsptUserModel();
    hsptUsers: Array<HsptUserModel> = new Array<HsptUserModel>();
    hsptMiscellaneous: HsptMiscellaneousModel = new HsptMiscellaneousModel();
    hsptMiscellaneousList: Array<HsptMiscellaneousModel> = new Array<HsptMiscellaneousModel>();
    hsptProviders: Array<PostFeatureModel> = new Array<PostFeatureModel>();
    hsptFacilities: Array<PostFeatureModel> = new Array<PostFeatureModel>();
    hsptSpecialities: Array<PostFeatureModel> = new Array<PostFeatureModel>();
    hsptInsurances: Array<PostFeatureModel> = new Array<PostFeatureModel>();
    hsptAyush: Array<PostFeatureModel> = new Array<PostFeatureModel>();
}