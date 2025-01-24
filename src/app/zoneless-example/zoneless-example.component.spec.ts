import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonelessExampleComponent } from './zoneless-example.component';

describe('ZonelessExampleComponent', () => {
  let component: ZonelessExampleComponent;
  let fixture: ComponentFixture<ZonelessExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZonelessExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonelessExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
