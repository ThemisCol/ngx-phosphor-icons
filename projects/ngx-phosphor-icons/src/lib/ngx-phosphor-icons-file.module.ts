import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule()
export class NgxPhosphorIconsFileModule {
   
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry
    )
    {
        this._matIconRegistry.addSvgIconSetInNamespace('ph-bold', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/phosphor-bold.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('ph-duotone', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/phosphor-duotone.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('ph-light', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/phosphor-light.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('ph-regular', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/phosphor-regular.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('ph-thin', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/phosphor-thin.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('ph-fill', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/phosphor-fill.svg'));
    }
}
