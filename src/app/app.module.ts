import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HightLightDirective } from './Directives/hight-light.directive';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { OnSalePipe } from './on-sale.pipe';
import { GetDataComponent } from './get-data/get-data.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDataComponent } from './post-data/post-data.component';
import { ChaComponent } from './cha/cha.component';
import { ConComponent } from './con/con.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ZooComponent } from './zoo/zoo.component';
import { ZooState } from 'src/store/animal.state';
import { EmployeeState } from 'src/store/employee.state';
import { EmployeeComponent } from './employee/employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleEmployeeComponent } from './single-employee/single-employee.component';
import { ModalComponent } from './modal/modal.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    HightLightDirective,
    ParentComponent,
    ChildComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    OnSalePipe,
    GetDataComponent,
    PostDataComponent,
    ChaComponent,
    ConComponent,
    ZooComponent,
    EmployeeComponent,
    SingleEmployeeComponent,
    ModalComponent,
    LearnRxjsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsModule.forRoot([ZooState, EmployeeState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
