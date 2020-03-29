import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InmunizaMayoresPage } from './inmuniza-mayores.page';

describe('InmunizaMayoresPage', () => {
  let component: InmunizaMayoresPage;
  let fixture: ComponentFixture<InmunizaMayoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmunizaMayoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InmunizaMayoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
