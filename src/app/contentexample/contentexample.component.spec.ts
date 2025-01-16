import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentexampleComponent } from './contentexample.component';

describe('ContentexampleComponent', () => {
  let component: ContentexampleComponent;
  let fixture: ComponentFixture<ContentexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentexampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
