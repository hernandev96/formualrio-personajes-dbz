import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDbzComponent } from './registro-dbz.component';

describe('RegistroDbzComponent', () => {
  let component: RegistroDbzComponent;
  let fixture: ComponentFixture<RegistroDbzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroDbzComponent]
    });
    fixture = TestBed.createComponent(RegistroDbzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
