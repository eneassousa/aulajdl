import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AulajdlRegionModule } from './region/region.module';
import { AulajdlCountryModule } from './country/country.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        AulajdlRegionModule,
        AulajdlCountryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AulajdlEntityModule {}
