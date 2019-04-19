
export interface IDialog {
    showInfo(content: string, title?: string): void;
    showWarn(content: string, title?: string): void;
    showError(content: string, title?: string): void;
    showSuccess(content: string, title?: string): void;
    showConfirm(content: string, title?: string): void;
    
}

