import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCharacterComponent } from './show-character.component';

describe('ShowCharacterComponent', () => {
  let component: ShowCharacterComponent;
  let fixture: ComponentFixture<ShowCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCharacterComponent]
    });
    fixture = TestBed.createComponent(ShowCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
