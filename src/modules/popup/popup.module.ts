import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiTransitionModule } from "../transition/index";
import { SuiUtilityModule } from "../../misc/util/index";
import { SuiPopupDirective } from "./directives/popup.directive";
import { SuiPopupArrow } from "./components/popup-arrow";
import { SuiPopup } from "./components/popup";
import { SuiPopupConfig } from "./services/popup.service";

const imports = [
    CommonModule
];

const declarations = [
    SuiPopupDirective,
    SuiPopupArrow,
    SuiPopup
];

const exports = [
    SuiPopupDirective,
    SuiPopup
];

const entryComponents = [
    SuiPopup
];

@NgModule({
    imports: [
        ...imports,
        SuiTransitionModule.forRoot(),
        SuiUtilityModule.forRoot()
    ],
    declarations,
    entryComponents,
    providers: [
        SuiPopupConfig
    ],
    exports
})
export class SuiPopupModule {
    public static forRoot():ModuleWithProviders {
        return {
            ngModule: SuiPopupModule,
            providers: []
        };
    }
}
