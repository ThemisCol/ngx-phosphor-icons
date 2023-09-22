import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { PhosphorLight } from '../../public-api';

@NgModule()
export class NgxPhosphorIconsLightModule {
   
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry
    )
    {
        this._matIconRegistry.addSvgIconSetLiteralInNamespace('ph-light', this._domSanitizer.bypassSecurityTrustHtml(PhosphorLight));
    }
}
