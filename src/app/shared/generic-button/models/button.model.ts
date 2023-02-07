import { ButtonConfig } from "./button.config"

export interface Button {
    text: string,
    config: ButtonConfig,
    role?: string,
    action(...args: any): any | void
}
