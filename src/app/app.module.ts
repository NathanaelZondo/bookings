import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolComponent } from './tool/tool.component';
import { RouterModule,Routes } from '@angular/router';
import { PayComponent } from './pay/pay.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SignComponent } from './sign/sign.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolComponent,
    PayComponent,
    FeedbackComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([{path:'',component:SignComponent},
  {path:'pay',component:PayComponent},
{path:'feedback',component:FeedbackComponent},
{path:'tool',component:ToolComponent}
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
