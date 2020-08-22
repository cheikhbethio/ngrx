"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CourseComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var CourseComponent = /** @class */ (function () {
    function CourseComponent(coursesEntityService, lessonsEntityService, route) {
        this.coursesEntityService = coursesEntityService;
        this.lessonsEntityService = lessonsEntityService;
        this.route = route;
        this.displayedColumns = ['seqNo', 'description', 'duration'];
        this.nextPage = 0;
    }
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var courseUrl = this.route.snapshot.paramMap.get('courseUrl');
        this.course$ = this.coursesEntityService.entities$
            .pipe(operators_1.map(function (courses) { return courses.find(function (course) { return course.url === courseUrl; }); }));
        this.lessons$ = this.lessonsEntityService.entities$
            .pipe(operators_1.withLatestFrom(this.course$), operators_1.tap(function (_a) {
            var lessons = _a[0], course = _a[1];
            if (_this.nextPage === 0) {
                _this.loadLessonsPage(course);
            }
        }), operators_1.map(function (_a) {
            var lessons = _a[0], course = _a[1];
            return lessons.filter(function (lesson) { return lesson.courseId === course.id; });
        }));
        this.loading$ = this.lessonsEntityService.loaded$;
    };
    CourseComponent.prototype.loadLessonsPage = function (course) {
        this.lessonsEntityService.getWithQuery({
            courseId: course.id.toString(),
            pageNumber: this.nextPage.toString(),
            pageSize: '3'
        });
        this.nextPage++;
    };
    CourseComponent = __decorate([
        core_1.Component({
            selector: 'course',
            templateUrl: './course.component.html',
            styleUrls: ['./course.component.css']
        })
    ], CourseComponent);
    return CourseComponent;
}());
exports.CourseComponent = CourseComponent;
