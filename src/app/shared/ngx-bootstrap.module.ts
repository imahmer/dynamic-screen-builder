import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

  @NgModule({
    imports: [
      TooltipModule, 
      TabsModule.forRoot(),
      BsDropdownModule.forRoot()
    ],
    exports: [
      TooltipModule,
      TabsModule,
      BsDropdownModule
    ],
  })
  export class NGXBoostrapModule {}