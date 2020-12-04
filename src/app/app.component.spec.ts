// jasmine is the testing framework
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// describe is a keywork to define a test suite
describe('AppComponent', () => {
  // beforeEach is called before every test spec is run
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // "it" is a keyword to define a test spec
  // the string 'should create the app' is just the title of the spec
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    //expect is a keyword to define a particular expectation
    // toBeTruthy is a matcher expression
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-tour-of-heroes'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-tour-of-heroes');
  });

  // You can focus and individual test by prepending with f
  // so it becomes fit
  // You can ignore an individual spec by prepending with x
  // so it becomes xit
  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-tour-of-heroes app is running!');
  });
});
