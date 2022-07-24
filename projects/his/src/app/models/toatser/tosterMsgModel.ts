import { toasterType } from "./toasterType";
export class tosterMsgModel{
    public Title!:string;
    public Messages!:Array<string>;
    public Type!:toasterType;
    public ClassName!:string;
    public CallBack!:Function;
}