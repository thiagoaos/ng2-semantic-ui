import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiDimmerModule } from "../dimmer/index";
import { SuiTransitionModule } from "../transition/index";
import { SuiUtilityModule } from "../../misc/util/index";
import { SuiModalService } from "./services/modal.service";
import { SuiModal } from "./components/modal";

const imports = [
    CommonModule
];

const declarations = [
    SuiModal
];

const entryComponents = [
    SuiModal
];

const exports = [
    SuiModal
];

@NgModule({
    imports: [
        ...imports,
        SuiDimmerModule.forRoot(),
        SuiTransitionModule.forRoot(),
        SuiUtilityModule.forRoot()
    ],
    declarations,
    entryComponents,
    providers: [
        SuiModalService
    ],
    exports
})
export class SuiModalModule {
    public static forRoot():ModuleWithProviders {
        return {
            ngModule: SuiModalModule,
            providers: []
        };
    }
}
