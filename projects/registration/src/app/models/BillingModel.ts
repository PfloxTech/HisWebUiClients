import { BillingModuleModel } from './BillingModuleModel'
export interface BillingModel {
     pk: number;
     name: string;
     monthDuration: number;
     users: number;
     support: string;
     description: string;
     price: number;
     modules: Array<string>;
}