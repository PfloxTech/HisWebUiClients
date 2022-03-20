import { HsptContactModel } from "./hsptcontactmodel";
import { HsptUserModel } from "./hsptUserModel";
import { HsptMiscellaneousModel } from "./HsptMiscellaneousModel";
import { FetaureModel } from "./FeatureModel";
import { PostFeatureModel } from "./PostFeatureModel";

export class HsptModel {
    Pk: number = 0;
    Name: string = '';
    SysRegisterNum: string = ''
    RegisterNum: string = ''
    RegisterDate: Date = new Date();
    RegisterRenewal: Date = new Date();
    PanNum: string = ''
    GstNum: string = ''
    Website: string = ''
    Accreditation: string = ''
    ReminderDate: Date = new Date();
    DigitalSignature: string = ''
    HsptContact: HsptContactModel = new HsptContactModel();
    HsptContacts: Array<HsptContactModel> = new Array<HsptContactModel>();
    HsptUser: HsptUserModel = new HsptUserModel();
    HsptMiscellaneous: HsptMiscellaneousModel = new HsptMiscellaneousModel();
    HsptMiscellaneousList: Array<HsptMiscellaneousModel> = new Array<HsptMiscellaneousModel>();
    HsptProviders: Array<PostFeatureModel> = new Array<PostFeatureModel>();
    HsptFacilities: Array<PostFeatureModel> = new Array<PostFeatureModel>();
    HsptSpecialities: Array<PostFeatureModel> = new Array<PostFeatureModel>();
    HsptInsurances: Array<PostFeatureModel> = new Array<PostFeatureModel>();
    HsptAyush: Array<PostFeatureModel> = new Array<PostFeatureModel>();
}