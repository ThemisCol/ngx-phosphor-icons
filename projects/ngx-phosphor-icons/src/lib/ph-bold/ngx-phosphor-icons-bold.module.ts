import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { PhosphorBold } from '../../public-api';

@NgModule()
export class NgxPhosphorIconsBoldModule {
   
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry
    )
    {
        this._matIconRegistry.addSvgIconSetLiteralInNamespace('ph-bold', this._domSanitizer.bypassSecurityTrustHtml(PhosphorBold));
    }
}
