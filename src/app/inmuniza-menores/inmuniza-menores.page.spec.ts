import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InmunizaMenoresPage } from './inmuniza-menores.page';

describe('InmunizaMenoresPage', () => {
  let component: InmunizaMenoresPage;
  let fixture: ComponentFixture<InmunizaMenoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmunizaMenoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InmunizaMenoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
