import * as type from './actionTypes'
import * as courseApi from '../../api/courseApi'


export const createCourse = (course) => {
    return { type: type.CREATE_COURSE, course: course }
}


export const loadCourseSuccess = (courses) => {
    return { type: type.LOAD_COURSES_SUCCESS, courses };
}


export const loadCourses = () => {
    return (dispatch) => {
        return courseApi.getCourses()
            .then(courses => {
                dispatch(loadCourseSuccess(courses));
                console.log(courses);

            })
            .catch(err => {
                throw err;
            })
    }
}