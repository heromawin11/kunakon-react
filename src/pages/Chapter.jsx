import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";



const Chapter = () => {
  const params = useParams();
  const id = params.id;
  // ยิง api ไป get chapter ยังไง?
  const [data, setData] = useState([]);
  const callApi = async () => {
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    console.log(res);
    const data_format = await res.data.data;
    // เก็บข้อมูลที่อ่านได้ใส่ State
    setData(data_format);
  };
  useEffect(() => {
    //call api เมื่อมีการเปิด component ครั้งแรก
    callApi();
    console.log(data);
  }, []);
  return (
  <>
  <h1 className=" bg-pink-300 underline decoration-double font-semibold h-12 text-3xl flex justify-center">Course</h1>
  <hr />
    <div className="flex justify-center">
    <div className="grid grid-cols-3 gap-6">
    {data.map((c) => (
      <ChapterCourse Key={c.ch_id} {...c}/>
    ))}
  </div>
  </div>

  </>
  );
};
const ChapterCourse = (props) =>{
  return (
  
    <div className="bg-green-300 p-5 max-w-md   ">
   <iframe className="w-full" src={"https://www.youtube.com/embed/"+ props.ch_url}></iframe> 
   <div>view:{props.ch_view}</div>
   <div>time:{props.ch_timetotal}</div>
    </div>

  );
}

export default Chapter;