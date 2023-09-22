import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { PhosphorThin } from '../../public-api';

@NgModule()
export class NgxPhosphorIconsThinModule {
   
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry
    )
    {
        this._matIconRegistry.addSvgIconSetLiteralInNamespace('ph-thin', this._domSanitizer.bypassSecurityTrustHtml(PhosphorThin));
    }
}
