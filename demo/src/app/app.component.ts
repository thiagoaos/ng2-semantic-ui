import { Component, HostBinding } from "@angular/core";
import { SuiPopupConfig, SuiLocalizationService } from "../../../src/public";
import localizationPt from "../../../src/behaviors/localization/locales/pt";

@Component({
    selector: "demo-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    constructor(popupConfig:SuiPopupConfig, localizationService:SuiLocalizationService) {
        popupConfig.isInverted = true;
        popupConfig.delay = 300;

        localizationService.load("pt", localizationPt);
        localizationService.patch("pt", {
            datepicker: {
                formats: {
                    date: "DD/MM/YYYY",
                    datetime: "DD/MM/YYYY"
                }
            }
        });
        localizationService.setLanguage("pt");
    }
}
