import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TradeRoutingModule } from './trade-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    SharedModule,
    TradeRoutingModule
  ],
  declarations: [ListComponent]
})
export class TradeModule { }
