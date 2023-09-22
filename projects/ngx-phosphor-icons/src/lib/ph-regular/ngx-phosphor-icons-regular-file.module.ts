import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule()
export class NgxPhosphorIconsRegularFileModule {
   
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry
    )
    {
        this._matIconRegistry.addSvgIconSetInNamespace('ph-regular', this._domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/phosphor-regular.svg'));
    }
}
