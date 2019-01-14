
export interface IDialog{
    showInfo(content:string):void;
    showWarn(content:string):void;
    showError(content:string):void;
    showSuccess(content:string):void;
    showConfirm(content:string):void;
}

