import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InmunizaNinaAdolPage } from './inmuniza-nina-adol.page';

describe('InmunizaNinaAdolPage', () => {
  let component: InmunizaNinaAdolPage;
  let fixture: ComponentFixture<InmunizaNinaAdolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmunizaNinaAdolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InmunizaNinaAdolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
