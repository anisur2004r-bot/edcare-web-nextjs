"use client"
import React, { useState } from 'react';
import CoursePlan from './CoursePlan';
import CourseDitails from './CourseDitails';

const FilterCategory = ({ courseCategores, courseDitails }) => {
    const [id, setId] = useState()
    const handleId = (id) => {
        setId(id)
    }
    return (
        <div>
            <CoursePlan courseCategores={courseCategores} handleId={handleId}></CoursePlan>
            <CourseDitails courseDitails={courseDitails} id={id}></CourseDitails>
        </div>
    );
};

export default FilterCategory;