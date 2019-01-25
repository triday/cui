
export interface IButton {

}
export interface IButtonProps {
    text: string,
    icon?: string,
    click?: () => void,
    Size?:ButtonSize,
    Kind?:ButtonKind,
    Enabled?:boolean
}
export enum ButtonSize
{
    Default,
    Large,
    Small
}
export enum ButtonKind
{
    Default,
    Primary,
    Flat,
    Danger,
}
export interface IButtonStates {

}

