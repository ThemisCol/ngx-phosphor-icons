import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { PhosphorDuotone } from '../../public-api';

@NgModule()
export class NgxPhosphorIconsDuotoneModule {
   
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry
    )
    {
        this._matIconRegistry.addSvgIconSetLiteralInNamespace('ph-duotone', this._domSanitizer.bypassSecurityTrustHtml(PhosphorDuotone));
    }
}
