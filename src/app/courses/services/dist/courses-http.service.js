"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoursesHttpService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var CoursesHttpService = /** @class */ (function () {
    function CoursesHttpService(http) {
        this.http = http;
    }
    CoursesHttpService.prototype.findAllCourses = function () {
        return this.http.get('/api/courses')
            .pipe(operators_1.map(function (res) { return res['payload']; }));
    };
    CoursesHttpService.prototype.findCourseByUrl = function (courseUrl) {
        return this.http.get("/api/courses/" + courseUrl);
    };
    CoursesHttpService.prototype.findLessons = function (courseId, pageNumber, pageSize) {
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        return this.http.get('/api/lessons', {
            params: new http_1.HttpParams()
                .set('courseId', courseId.toString())
                .set('sortOrder', 'asc')
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        });
    };
    CoursesHttpService.prototype.saveCourse = function (courseId, changes) {
        return this.http.put('/api/course/' + courseId, changes);
    };
    CoursesHttpService = __decorate([
        core_1.Injectable()
    ], CoursesHttpService);
    return CoursesHttpService;
}());
exports.CoursesHttpService = CoursesHttpService;
