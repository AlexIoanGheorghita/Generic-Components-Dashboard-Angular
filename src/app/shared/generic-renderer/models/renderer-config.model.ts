import { Type } from "@angular/core"

export interface ComponentRendererConfig {
  componentDataType: Type<any>,
  componentConfig: any | {[key: string]: any},
  componentInput: string | string[]
}
