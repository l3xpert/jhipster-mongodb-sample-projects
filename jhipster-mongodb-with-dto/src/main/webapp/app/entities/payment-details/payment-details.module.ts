import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterMongodbWithDtoSharedModule } from 'app/shared';
import {
    PaymentDetailsComponent,
    PaymentDetailsDetailComponent,
    PaymentDetailsUpdateComponent,
    PaymentDetailsDeletePopupComponent,
    PaymentDetailsDeleteDialogComponent,
    paymentDetailsRoute,
    paymentDetailsPopupRoute
} from './';

const ENTITY_STATES = [...paymentDetailsRoute, ...paymentDetailsPopupRoute];

@NgModule({
    imports: [JhipsterMongodbWithDtoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        PaymentDetailsComponent,
        PaymentDetailsDetailComponent,
        PaymentDetailsUpdateComponent,
        PaymentDetailsDeleteDialogComponent,
        PaymentDetailsDeletePopupComponent
    ],
    entryComponents: [
        PaymentDetailsComponent,
        PaymentDetailsUpdateComponent,
        PaymentDetailsDeleteDialogComponent,
        PaymentDetailsDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterMongodbWithDtoPaymentDetailsModule {}
