import { ButtonConfig } from "./button.config"

export interface Button {
    text: string,
    config: ButtonConfig,
    action(...args: any): any | void
}
