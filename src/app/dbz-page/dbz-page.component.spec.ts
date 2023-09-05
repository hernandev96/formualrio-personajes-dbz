import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzPageComponent } from './dbz-page.component';

describe('DbzPageComponent', () => {
  let component: DbzPageComponent;
  let fixture: ComponentFixture<DbzPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DbzPageComponent]
    });
    fixture = TestBed.createComponent(DbzPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
