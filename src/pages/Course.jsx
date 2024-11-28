import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
const Course = () => {
    const [data, setData] = useState([]);
    const callApi = async () => {
      const res = await axios.get("https://api.codingthailand.com/api/course");
      const data_format = await res.data.data;
        // เก็บข้อมูลที่่อ่านได้ใส่ State
      setData(data_format);
    };
    useEffect(() => {
        //call apui เมื่อเปิด comeponet ครั้งแรก
        callApi();
        console.log(data);
      },[]);
  return (
    <>
    <h1 className=' bg-pink-300  italic text-3xl font-semibold flex justify-center'>Course</h1>
    <hr />
    <div className=" bg-purple-400 flex justify-center">
    <div className=" grid grid-cols-3 gap-6">
    {data.map((course) => (
            <CourseCard key={course.id} {...course} />
        ))}
      </div>
      </div>
    </>
  )
}
const CourseCard = (props) => {
    return (
      <div className=' border-4 justify-items-center bg-yellow-200 w-auto grid-rows-3 gap-4 '>
        <div>
          <img src={props.picture} alt="" style={{ width: 100 }}/>
        </div>
        <div className='underline font-semibold'>{props.title}</div>
        <div>{props.detail}</div>
        <hr />
        <div>
            <NavLink className="border-4 border-pink-600 underline hover:underline font-normal hover:font-bold" to={'/course/'+props.id}>เนื้อหาเพิ่มเติม</NavLink>
        </div>
      </div>
    );
  }



export default Course