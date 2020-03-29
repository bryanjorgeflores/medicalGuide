import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VacunaPage } from './vacuna.page';

describe('VacunaPage', () => {
  let component: VacunaPage;
  let fixture: ComponentFixture<VacunaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacunaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VacunaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
