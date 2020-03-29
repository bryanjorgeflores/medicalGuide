import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SulfatoFerrosoPage } from './sulfato-ferroso.page';

describe('SulfatoFerrosoPage', () => {
  let component: SulfatoFerrosoPage;
  let fixture: ComponentFixture<SulfatoFerrosoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SulfatoFerrosoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SulfatoFerrosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
