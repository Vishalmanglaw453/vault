import React from "react";
import { useState } from "react";

const Todo = () => {
  const [inputvalue, setInputvalue] = useState({
    taskvalue: "",
    disvalue: "",
  });
  const [task, setTask] = useState([]);
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputvalue({ ...inputvalue, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setTask([...task, {text:inputvalue.taskvalue, pera:inputvalue.disvalue}])
    setInputvalue({  taskvalue: "",
    disvalue: "",})
  };
  const handledelete = (index) => {
    const value = [...task];
    value.splice(index, 1);
    setTask(value);
  };

  return (
    <>
      <div>
        <form className="  flex gap-7" onSubmit={handlesubmit}>
          <input
            onChange={handlechange}
            className="  border-[1px] border-black "
            type="text"
            value={inputvalue.taskvalue}
            name="taskvalue"
            required
          />
          <input
            onChange={handlechange}
            className="  border-[1px] border-black "
            type="text"
            name="disvalue"
            value={inputvalue.disvalue}
            required
          />
          <button type="submit"> ADD</button>
        </form>

        {task.map((data,index)=>(
            <>
            <p>{data.text}</p>
            <button onClick={handledelete}> delete</button>
            <p>{data.pera}</p>
            </>
        ))}
      </div>

      
    </>
  );
};

export default Todo;
