import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const New = () => {
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
    setTask([
      ...task,
      {
        text: inputvalue.taskvalue,
        pera: inputvalue.disvalue,
        showCloseButton: true,
        showCancelButton: true,
        iscomplete: false,
      },
    ]);
    setInputvalue({ taskvalue: "", disvalue: "" });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Task add now",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handledone = (index) => {
    const dataupdate = [...task];
    dataupdate[index].iscomplete = !dataupdate[index].iscomplete;
    setTask(dataupdate);
  };

  const [showModal, setShowModal] = useState(false);
  const showmodal = () => {
    setShowModal(true);
  };
  const offmodal = () => {
    setShowModal(false);
  };

  const handledelete = (index) => {
    const value = [...task];
    value.splice(index, 1);
    setTask(value);
    setShowModal(!showModal);
  };

  const [block, setBlock] = useState(false);

  const handleblock = () => {
    setBlock(!block);
  };
  const [line, setline] = useState(false);
  const handleline = () => {
    const value = [...task];
    setline(!line);
  };

  return (
    <>
      <div className="task-box min-h-[731px] w-[411px]  mx-auto  rounded-[10px] bg_grident relative ">
        <div className=" flex justify-center">
          <div className="search-box flex  items-center  justify-between">
            <input
              type="text"
              placeholder="Search by task title"
              className=" bg-transparent border-0 outline-none text-white  placeholder:text-white"
            />
            <span>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3142 7.19231C12.3142 4.66887 10.2491 2.61538 7.71135 2.61538C5.1736 2.61538 3.10847 4.66887 3.10847 7.19231C3.10847 9.71574 5.1736 11.7692 7.71135 11.7692C10.2491 11.7692 12.3142 9.71574 12.3142 7.19231ZM17.5747 15.6923C17.5747 16.4075 16.9788 17 16.2596 17C15.9102 17 15.5712 16.857 15.3349 16.6118L11.8108 13.1178C10.6087 13.9453 9.1703 14.3846 7.71135 14.3846C3.71466 14.3846 0.478256 11.1665 0.478256 7.19231C0.478256 3.21815 3.71466 0 7.71135 0C11.708 0 14.9444 3.21815 14.9444 7.19231C14.9444 8.64303 14.5027 10.0733 13.6704 11.2686L17.1945 14.7728C17.4308 15.0078 17.5747 15.345 17.5747 15.6923Z"
                  fill="white"
                  fill-opacity="0.5"
                />
              </svg>
            </span>
          </div>
        </div>
        <p className=" text-[16px] text-white mt-[70px] ml-[29px]">
          Tasks List
        </p>
        <ul className=" flex flex-col  items-center">
          {task.map((data, index) => (
            <>
              <li
                onClick={showmodal}
                className={`${
                  data.iscomplete ? "thought-line " : ""
                } mini-task-box  max-w-[375px]  flex justify-between  items-center w-[100%] p-[11px] bg-white mt-[35px] rounded-[5px] `}
              >
                <span> {data.text}</span>{" "}
                <span>
                  <svg
                    width="12"
                    height="17"
                    viewBox="0 0 12 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3913 8.05321L3.36035 0.686162C3.08976 0.437946 2.65683 0.437946 2.38624 0.686162L0.589565 2.33432C0.318981 2.58253 0.318981 2.97968 0.589565 3.22789L6.33677 8.5L0.589565 13.7721C0.318981 14.0203 0.318981 14.4175 0.589565 14.6657L2.38624 16.3138C2.65683 16.5621 3.08976 16.5621 3.36035 16.3138L11.3913 8.94679C11.6619 8.69857 11.6619 8.30143 11.3913 8.05321Z"
                      fill="#0EA5E9"
                    />
                  </svg>
                </span>
              </li>
              {/* <div className="checkbox  h-[20px] w-[20px] border-[3px] border-gray-500 ">
              <svg
                className={`${data.iscomplete ? "opacity-100" : "opacity-0"}`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="black"
                viewBox="0 0 16 16"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
              </svg>
            </div> */}
              {/* <button className=" mt-1 deletebtn" onClick={handledelete}>
              delete
            </button> */}
            </>
          ))}
        </ul>
        <div
          className={`${
            block ? "hidden " : " block"
          } write-task-box px-[27px] pt-[54px] absolute bottom-0`}
        >
          <form className=" " onSubmit={handlesubmit}>
            <div className="task flex p-[12px] ">
         
              <div>
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 7.97443V11.1364C14 12.7173 12.7173 14 11.1364 14H2.86364C1.28267 14 0 12.7173 0 11.1364V2.86364C0 1.28267 1.28267 0 2.86364 0H11.1364C11.5341 0 11.9318 0.0795455 12.2997 0.24858C12.3892 0.288352 12.4588 0.377841 12.4787 0.477273C12.4986 0.586648 12.4688 0.68608 12.3892 0.765625L11.902 1.25284C11.8423 1.3125 11.7528 1.35227 11.6733 1.35227C11.6435 1.35227 11.6136 1.34233 11.5838 1.33239C11.4347 1.29261 11.2855 1.27273 11.1364 1.27273H2.86364C1.98864 1.27273 1.27273 1.98864 1.27273 2.86364V11.1364C1.27273 12.0114 1.98864 12.7273 2.86364 12.7273H11.1364C12.0114 12.7273 12.7273 12.0114 12.7273 11.1364V8.6108C12.7273 8.53125 12.7571 8.4517 12.8168 8.39205L13.4531 7.75568C13.5227 7.68608 13.6023 7.65625 13.6818 7.65625C13.7216 7.65625 13.7614 7.66619 13.8011 7.68608C13.9205 7.7358 14 7.84517 14 7.97443ZM16.2969 3.11222L8.20312 11.206C7.88494 11.5241 7.38778 11.5241 7.0696 11.206L2.79403 6.9304C2.47585 6.61222 2.47585 6.11506 2.79403 5.79688L3.88778 4.70312C4.20597 4.38494 4.70312 4.38494 5.02131 4.70312L7.63636 7.31818L14.0696 0.884943C14.3878 0.566761 14.8849 0.566761 15.2031 0.884943L16.2969 1.97869C16.6151 2.29688 16.6151 2.79403 16.2969 3.11222Z"
                    fill="white"
                  />
                </svg>
              </div>

              <input
                onChange={handlechange}
                className="pl-[14px]  w-[100%] bg-transparent border-0 outline-none  text-white  placeholder:white"
                placeholder="task"
                type="text"
                value={inputvalue.taskvalue}
                name="taskvalue"
                required
              />
            </div>
            <div className="Description_box p-[15px]  max-w-[358px] min-h-[159px] rounded-[5px] bg-[#05243E] w-[100%] mt-[34px] ">
              <div className=" flex gap-3 ">
                <span>
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 13.8182V15.2727C20 15.6705 19.6763 16 19.2857 16H0.714286C0.323661 16 0 15.6705 0 15.2727V13.8182C0 13.4205 0.323661 13.0909 0.714286 13.0909H19.2857C19.6763 13.0909 20 13.4205 20 13.8182ZM15.7143 9.45455V10.9091C15.7143 11.3068 15.3906 11.6364 15 11.6364H0.714286C0.323661 11.6364 0 11.3068 0 10.9091V9.45455C0 9.05682 0.323661 8.72727 0.714286 8.72727H15C15.3906 8.72727 15.7143 9.05682 15.7143 9.45455ZM18.5714 5.09091V6.54545C18.5714 6.94318 18.2478 7.27273 17.8571 7.27273H0.714286C0.323661 7.27273 0 6.94318 0 6.54545V5.09091C0 4.69318 0.323661 4.36364 0.714286 4.36364H17.8571C18.2478 4.36364 18.5714 4.69318 18.5714 5.09091ZM14.2857 0.727273V2.18182C14.2857 2.57955 13.9621 2.90909 13.5714 2.90909H0.714286C0.323661 2.90909 0 2.57955 0 2.18182V0.727273C0 0.329545 0.323661 0 0.714286 0H13.5714C13.9621 0 14.2857 0.329545 14.2857 0.727273Z"
                      fill="white"
                    />
                  </svg>
                </span>

                <textarea
                  onChange={handlechange}
                  className=" resize-none text-white placeholder:text-white bg-transparent w-[100%] min-h-[145px] outline-none"
                  placeholder="Description"
                  type="text"
                  name="disvalue"
                  value={inputvalue.disvalue}
                  required
                />
              </div>
            </div>
            <div className=" flex items-center gap-[24px] pt-[21px]">
              <button
                type="reset"
                className=" cancel_btn"
                onClick={handleblock}
              >
                cancel
              </button>
              <button className=" cerate_btn">create</button>
            </div>
          </form>
        </div>
        <button
          onClick={handleblock}
          className={`${
            block ? "block " : "  hidden"
          } w-[50px] h-[50px] show_btn flex justify-center  items-center    absolute  right-[29px] bottom-[105px]`}
        >
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1471 7.40443V9.74267C17.1471 10.3881 16.6234 10.9118 15.978 10.9118H10.9118V15.978C10.9118 16.6234 10.3881 17.1471 9.74267 17.1471H7.40443C6.75898 17.1471 6.23531 16.6234 6.23531 15.978V10.9118H1.16912C0.523669 10.9118 0 10.3881 0 9.74267V7.40443C0 6.75898 0.523669 6.23531 1.16912 6.23531H6.23531V1.16912C6.23531 0.523669 6.75898 0 7.40443 0H9.74267C10.3881 0 10.9118 0.523669 10.9118 1.16912V6.23531H15.978C16.6234 6.23531 17.1471 6.75898 17.1471 7.40443Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
        {showModal ? (
          <>
            <div className="flex justify-center items-center  absolute top-0 left-0 inset-0 z-50 outline-none ">
              <div className="relative     max-w-[411px] w-[100%]  h-[731px]   ">
                <div className="border-0 rounded-lg   px-[40px] py-[67px] h-[731px]  shadow-lg relative flex flex-col   bg_grident outline-none focus:outline-none">
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={offmodal}
                  >
                    <span className="  flex gap-[14px] items-center ">
                      <span>
                        <svg
                          width="10"
                          height="17"
                          viewBox="0 0 10 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.91383 1.41383C9.91383 1.5501 9.84569 1.70341 9.74349 1.80561L3.0491 8.5L9.74349 15.1944C9.84569 15.2966 9.91383 15.4499 9.91383 15.5862C9.91383 15.7224 9.84569 15.8758 9.74349 15.978L8.89178 16.8297C8.78958 16.9319 8.63627 17 8.5 17C8.36373 17 8.21042 16.9319 8.10822 16.8297L0.170341 8.89178C0.0681363 8.78958 0 8.63627 0 8.5C0 8.36373 0.0681363 8.21042 0.170341 8.10822L8.10822 0.170341C8.21042 0.0681363 8.36373 0 8.5 0C8.63627 0 8.78958 0.0681363 8.89178 0.170341L9.74349 1.02204C9.84569 1.12425 9.91383 1.26052 9.91383 1.41383Z"
                            fill="#63D9F3"
                          />
                        </svg>
                      </span>
                      <span className=" text-white  font-medium text-[16px] leading-[24px] tracking-[9%] ">
                        Task Details
                      </span>
                    </span>
                  </button>
                  <ul className=" pt-[76px]">
                    {task.map((data, index) => (
                      <>
                        <li
                          onClick={() => handledone(index)}
                          className={`${
                            data.iscomplete ? "thought-line " : ""
                          }  flex  gap-[7px]  items-center `}
                        >
                          <span className=" text-[18px] leading-[27px] tracking-[9%] text-white  font-medium ">
                            <p className={`${line ? "line_through" : ""}`}>
                              {data.text}
                            </p>
                          </span>
                          <span>
                            <svg
                              width="21"
                              height="16"
                              viewBox="0 0 21 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0909 12L11.4091 10.6818L9.68182 8.95455L8.36364 10.2727V10.9091H9.45455V12H10.0909ZM15.0909 3.81818C14.9886 3.71591 14.8182 3.72727 14.7159 3.82955L10.7386 7.80682C10.6364 7.90909 10.625 8.07955 10.7273 8.18182C10.8295 8.28409 11 8.27273 11.1023 8.17045L15.0795 4.19318C15.1818 4.09091 15.1932 3.92045 15.0909 3.81818ZM16 10.5682V12.7273C16 14.5341 14.5341 16 12.7273 16H3.27273C1.46591 16 0 14.5341 0 12.7273V3.27273C0 1.46591 1.46591 0 3.27273 0H12.7273C13.1818 0 13.6364 0.0909091 14.0568 0.284091C14.1591 0.329545 14.2386 0.431818 14.2614 0.545455C14.2841 0.670455 14.25 0.784091 14.1591 0.875L13.6023 1.43182C13.5 1.53409 13.3636 1.56818 13.2386 1.52273C13.0682 1.47727 12.8977 1.45455 12.7273 1.45455H3.27273C2.27273 1.45455 1.45455 2.27273 1.45455 3.27273V12.7273C1.45455 13.7273 2.27273 14.5455 3.27273 14.5455H12.7273C13.7273 14.5455 14.5455 13.7273 14.5455 12.7273V11.2955C14.5455 11.2045 14.5795 11.1136 14.6477 11.0455L15.375 10.3182C15.4886 10.2045 15.6364 10.1818 15.7727 10.2386C15.9091 10.2955 16 10.4205 16 10.5682ZM14.9091 2.18182L18.1818 5.45455L10.5455 13.0909H7.27273V9.81818L14.9091 2.18182ZM19.9545 3.68182L18.9091 4.72727L15.6364 1.45455L16.6818 0.409091C17.1023 -0.0113636 17.8068 -0.0113636 18.2273 0.409091L19.9545 2.13636C20.375 2.55682 20.375 3.26136 19.9545 3.68182Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </li>
                     
                      </>
                    ))}
                  </ul>
                  <div className=" border-[1px] border-[#4A72A4] mt-[33px] "></div>

                  <ul className=" pt-[76px]">
                    {task.map((data, index) => (
                      <>
                        <li
                          onClick={() => handledone(index)}
                          className={`${
                            data.iscomplete ? "thought-line " : ""
                          }  flex  gap-[7px]  items-center `}
                        >
                          <span className=" text-[18px] leading-[27px] tracking-[9%] text-white  font-medium ">
                            <p className={`${line ? "line_through" : ""}`}>
                              {data.pera}
                            </p>
                          </span>
                        </li>
                      </>
                    ))}
                  </ul>
                  <div className="flex items-center justify-end p-6 ">
                    <button
                      className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={offmodal}
                    >
                      Submit
                    </button>
                    <button
                      className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      onClick={handledelete}
                    >
                      delete
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default New;
