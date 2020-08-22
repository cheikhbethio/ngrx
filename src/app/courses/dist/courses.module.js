"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoursesModule = exports.coursesRoutes = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var home_component_1 = require("./home/home.component");
var courses_card_list_component_1 = require("./courses-card-list/courses-card-list.component");
var edit_course_dialog_component_1 = require("./edit-course-dialog/edit-course-dialog.component");
var courses_http_service_1 = require("./services/courses-http.service");
var course_component_1 = require("./course/course.component");
var datepicker_1 = require("@angular/material/datepicker");
var dialog_1 = require("@angular/material/dialog");
var input_1 = require("@angular/material/input");
var paginator_1 = require("@angular/material/paginator");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var select_1 = require("@angular/material/select");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var tabs_1 = require("@angular/material/tabs");
var forms_1 = require("@angular/forms");
var material_moment_adapter_1 = require("@angular/material-moment-adapter");
var card_1 = require("@angular/material/card");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var router_1 = require("@angular/router");
var course_1 = require("./model/course");
var lesson_1 = require("./model/lesson");
var courses_entity_service_1 = require("./services/courses-entity.service");
var courses_resolver_1 = require("./courses-resolver");
var courses_data_service_1 = require("./services/courses-data.service");
var lesson_entity_service_1 = require("./services/lesson-entity.service");
exports.coursesRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        resolve: {
            courses: courses_resolver_1.CourseResolver
        }
    },
    {
        path: ':courseUrl',
        component: course_component_1.CourseComponent,
        resolve: {
            courses: courses_resolver_1.CourseResolver
        }
    }
];
var entityMetadata = {
    Course: {
        sortComparer: course_1.compareCourses
    },
    Lesson: {
        sortComparer: lesson_1.compareLessons
    }
};
var CoursesModule = /** @class */ (function () {
    function CoursesModule(entityDefinitionService, entityDataService, courseDataService) {
        entityDefinitionService.registerMetadataMap(entityMetadata);
        entityDataService.registerService('Course', courseDataService);
    }
    CoursesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                button_1.MatButtonModule,
                icon_1.MatIconModule,
                card_1.MatCardModule,
                tabs_1.MatTabsModule,
                input_1.MatInputModule,
                table_1.MatTableModule,
                paginator_1.MatPaginatorModule,
                sort_1.MatSortModule,
                progress_spinner_1.MatProgressSpinnerModule,
                slide_toggle_1.MatSlideToggleModule,
                dialog_1.MatDialogModule,
                select_1.MatSelectModule,
                datepicker_1.MatDatepickerModule,
                material_moment_adapter_1.MatMomentDateModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild(exports.coursesRoutes)
            ],
            declarations: [
                home_component_1.HomeComponent,
                courses_card_list_component_1.CoursesCardListComponent,
                edit_course_dialog_component_1.EditCourseDialogComponent,
                course_component_1.CourseComponent
            ],
            exports: [
                home_component_1.HomeComponent,
                courses_card_list_component_1.CoursesCardListComponent,
                edit_course_dialog_component_1.EditCourseDialogComponent,
                course_component_1.CourseComponent
            ],
            entryComponents: [edit_course_dialog_component_1.EditCourseDialogComponent],
            providers: [
                courses_http_service_1.CoursesHttpService,
                courses_entity_service_1.CourseEntityService,
                courses_resolver_1.CourseResolver,
                courses_data_service_1.CourseDataService,
                lesson_entity_service_1.LessonEntityService,
            ]
        })
    ], CoursesModule);
    return CoursesModule;
}());
exports.CoursesModule = CoursesModule;
