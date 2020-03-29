import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InmunizaPobRiesgoPage } from './inmuniza-pob-riesgo.page';

describe('InmunizaPobRiesgoPage', () => {
  let component: InmunizaPobRiesgoPage;
  let fixture: ComponentFixture<InmunizaPobRiesgoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmunizaPobRiesgoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InmunizaPobRiesgoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
