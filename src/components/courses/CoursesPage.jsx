import React from "react";
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseAction';
import PropTypes from 'prop-types';
import {bindActionCreators } from 'redux'


class CoursesPage extends React.Component {

    componentDidMount(){
        this.props.actions.loadCourses().catch(err =>{
            alert("loading courses failed" + err) 
        })
    }

    render() {
        return(
            <>   
                <h2>Courses</h2>
                {this.props.courses.map(course => (
                    <div key={course.id}>
                         {course.title}
                    </div>
                ))}
            </>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};



const mapStateToProps = (state, ownProps)=> {
    
    return {courses: state.courses}
}
    

const mapDispatchToProps = (dispatch)=>(
    {actions: bindActionCreators(courseActions, dispatch)}
);


export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);