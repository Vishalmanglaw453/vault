import React from "react";
import pyth from "../images/pyth.svg";
import usdc from "../images/Crypto.svg";

const Vault = () => {
  return (
    <>
      <section>
        <div className="container max-w-[1140px] mx-auto px-[12px] ">
          <div className=" row flex flex-row flex-wrap my-[-12px]">
            <div className=" w-8/12 max-lg:w-full px-[12px]">
            <div className="vault_card max-w-[752px] w-[100%]  ">
              <div className=" bg-[#222834] rounded-[24px_24px_0px_0px]    p-[38px_32px_24px_32px]">
                <div className=" flex justify-between items-center">
                  <p className=" font-Inter text-white font-medium text-[16px]  leading-[28px] ">
                    Your Vault Position
                  </p>
                  <div className="claim-btn bg-[#5099CC] p-[8px_12px_8px_12px] rounded-[12px] max-w-[120px]  font-Inter font-medium text-[14px] leading-[24px] text-white ">
                    Claim rewards
                  </div>
                </div>
                <div className="under_line w-[100%] h-[1px] bg-[linear-gradient(90deg,#1E232E_0%,#3C465D_100%)] mt-[12px]"></div>

                <div className=" flex items-center gap-[70px]">
                  <div>
                    <p className=" font-Inter  font-semibold text-[14px] leading-[20px] text-[#A1ADC4] mt-[16px] ">
                      Total Deposited
                    </p>
                    <h2 className=" font-poppins text-white font-semibold text-[28px] leading-[28px] mt-[10px] hover:text-[#06D6A0] duration-300">
                      $24,117.93
                    </h2>
                  </div>
                  <div>
                    <p className=" font-Inter  font-semibold text-[14px] leading-[20px] text-[#A1ADC4] mt-[16px] ">
                      Earned Fees
                    </p>
                    <h2 className=" font-poppins text-white font-semibold text-[28px] leading-[28px] mt-[10px] hover:text-[#06D6A0] duration-300 ">
                      +$231.77
                    </h2>
                  </div>
                  <div>
                    <p className=" font-Inter  font-semibold text-[14px] leading-[20px] text-[#A1ADC4] mt-[16px] ">
                      Asset Ratio
                    </p>
                    <h2 className=" font-poppins text-white font-semibold text-[28px] leading-[28px] mt-[10px] hover:text-[#06D6A0] duration-300 ">
                      0.8274
                    </h2>
                  </div>
                </div>
                <p className=" font-Inter  font-semibold text-[14px] leading-[20px] text-[#A1ADC4] mt-[16px] ">
                  Deposited Balances
                </p>
                <div className=" flex gap-[13px] items-center ">
                  <h3 className=" flex items-center gap-[8px]">
                    <span className=" font-Inter font-semibold text-[16px] leading-[20px] text-white">
                      11,872.4981
                    </span>
                    <span className="font-Inter font-bold text-[16px] leading-[28px] text-white">
                      PYTH
                    </span>
                  </h3>
                  <hr className=" bg-[#63779C] w-[3px] h-[19px] p-0 border-0 " />
                  <h3 className=" flex items-center gap-[8px]">
                    <span className=" font-Inter font-semibold text-[16px] leading-[20px] text-white">
                      10,331.2980
                    </span>
                    <span className="font-Inter font-bold text-[16px] leading-[28px] text-white">
                      USDC
                    </span>
                  </h3>
                </div>
              </div>
              <div className="bg-[#1E232E] rounded-[0px_0px_24px_24px] shadow-[0px_16px_16px_-1px_#00000014]    p-[32px_32px_32px_32px]">
                <div className=" max-w-[245px] w-[100%] bg-[#282F3E] py-[6px] px-[8px] rounded-[12px] flex items-center gap-[8px] ">
                  <button className=" w-[104px] flex gap-[12px] group hover:bg-[#39404D] duration-300 items-center rounded-[12px] py-[8px] px-[12px]  bg-transparent ">
                    <span className=" flex">
                      <svg
                        className=" group-hover:opacity-[100%] opacity-[72%]"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.75 0.75C6.75 0.335786 6.41421 0 6 0C5.58579 0 5.25 0.335786 5.25 0.75V5.25H0.75C0.335786 5.25 0 5.58579 0 6C0 6.41421 0.335786 6.75 0.75 6.75L5.25 6.75V11.25C5.25 11.6642 5.58579 12 6 12C6.41421 12 6.75 11.6642 6.75 11.25V6.75L11.25 6.75C11.6642 6.75 12 6.41421 12 6C12 5.58579 11.6642 5.25 11.25 5.25H6.75V0.75Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span className=" font-Inter font-medium text-[14px] leading-[24px] text-[#C3C5C9] group-hover:text-white ">
                      Deposit
                    </span>
                  </button>
                  <button className=" flex w-[117px] gap-[12px] group hover:bg-[#39404D] duration-300 items-center rounded-[12px] py-[8px] px-[12px]  bg-transparent ">
                    <span className=" flex">
                      <svg
                        className=" group-hover:opacity-[100%] opacity-[72%]"
                        width="14"
                        height="18"
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.00001 0C5.41422 0 5.75001 0.335786 5.75001 0.75V5H4.25001V0.75C4.25001 0.335786 4.58579 0 5.00001 0ZM4.25001 5V8.29553L3.30748 7.24828C3.03038 6.94039 2.55617 6.91543 2.24828 7.19253C1.9404 7.46962 1.91544 7.94384 2.19254 8.25172L4.44254 10.7517C4.58477 10.9098 4.78739 11 5.00001 11C5.21262 11 5.41525 10.9098 5.55748 10.7517L7.80748 8.25172C8.08457 7.94384 8.05961 7.46962 7.75173 7.19253C7.44385 6.91543 6.96963 6.94039 6.69254 7.24828L5.75001 8.29553V5H7.75C8.99264 5 10 6.00736 10 7.25V11.75C10 12.9926 8.99264 14 7.75 14H2.25C1.00736 14 0 12.9926 0 11.75V7.25C0 6.00736 1.00736 5 2.25 5H4.25001ZM4 15.75V15.5H7.75C9.82107 15.5 11.5 13.8211 11.5 11.75V9H11.75C12.9926 9 14 10.0074 14 11.25V15.75C14 16.9926 12.9926 18 11.75 18H6.25C5.00736 18 4 16.9926 4 15.75Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span className=" font-Inter font-medium text-[14px] leading-[24px] text-[#C3C5C9] group-hover:text-white ">
                      Withdraw
                    </span>
                  </button>
                </div>
                <div className=" flex items-center justify-between pt-[24px]">
                  <h3 className=" font-Inter font-bold text-[16px] leading-[28px] text-white ">
                    Enter deposit amounts:
                  </h3>
                  <div className=" flex  gap-[8px]">
                    <input type="checkbox" />
                    <p className=" flex gap-[4px] items-center ">
                      <span className="font-Inter font-medium text-[16px] leading-[24px] text-white">
                        Single asset deposit?
                      </span>
                      <span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.375 8.375L8.40957 8.35771C8.88717 8.11891 9.42493 8.55029 9.29542 9.06831L8.70458 11.4317C8.57507 11.9497 9.11283 12.3811 9.59043 12.1423L9.625 12.125M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9ZM9 5.875H9.00625V5.88125H9V5.875Z"
                            stroke="#A1ADC4"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="mt-[17px] flex gap-[24px]  justify-between  ">
                  <div className="max-w-[332px] w-[100%]">
                    <div className="pyth-box max-w-[332px] w-[100%]    flex justify-between items-center rounded-[12px] border-[1px] border-[#3C465D] py-[12px] px-[16px] ">
                      <div className=" flex items-center  gap-[10px]">
                        <img src={pyth} alt="pyth" />
                        <h4 className=" font-Inter font-medium text-[16px]  leading-[28px] text-white ">
                          PYTH
                        </h4>
                      </div>
                      <h3 className="font-Inter font-medium text-[20px]  leading-[32px] text-[#A1ADC4]">
                        0.00
                      </h3>
                    </div>
                    <div className="pt-[10px] flex justify-between items-center">
                      <p>
                        <span className=" font-inter font-medium text-[12px] leading-[16px] tracking-[0.2px] text-[#63779C] ">
                          Balance:{" "}
                        </span>{" "}
                        <span className=" text-white font-inter font-medium text-[12px] leading-[16px] tracking-[0.2px]">
                          1,248,992.4787
                        </span>
                      </p>
                      <div className=" flex gap-[8px]  items-center">
                        <button className="half-btn w-[41px] bg-[#323B4D]  py-[2px] px-[6px] font-Inter font-medium text-[11px] leading-[20px] rounded-[6px] text-[#C6C8CD] ">
                          HALF
                        </button>
                        <button className="half-btn w-[41px] bg-[#323B4D]  py-[2px] px-[6px] font-Inter font-medium text-[11px] leading-[20px] rounded-[6px] text-[#C6C8CD] ">
                          MAX
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[332px] w-[100%]">
                    <div className="pyth-box max-w-[332px]  w-[100%] flex justify-between items-center rounded-[12px] border-[1px] border-[#3C465D] py-[12px] px-[16px] ">
                      <div className=" flex items-center  gap-[10px]">
                        <img src={usdc} alt="usdc" />
                        <h4 className=" font-Inter font-medium text-[16px]  leading-[28px] text-white ">
                          USDC
                        </h4>
                      </div>
                      <h3 className="font-Inter font-medium text-[20px]  leading-[32px] text-[#A1ADC4]">
                        0.00
                      </h3>
                    </div>
                    <div className="pt-[10px] flex justify-between items-center">
                      <p>
                        <span className=" font-inter font-medium text-[12px] leading-[16px] tracking-[0.2px] text-[#63779C] ">
                          Balance:{" "}
                        </span>{" "}
                        <span className=" text-white font-inter font-medium text-[12px] leading-[16px] tracking-[0.2px]">
                          25,283.2098
                        </span>
                      </p>
                      <div className=" flex gap-[8px]  items-center">
                        <button className="half-btn w-[41px] bg-[#323B4D]  py-[2px] px-[6px] font-Inter font-medium text-[11px] leading-[20px] rounded-[6px] text-[#C6C8CD] ">
                          HALF
                        </button>
                        <button className="half-btn w-[41px] bg-[#323B4D]  py-[2px] px-[6px] font-Inter font-medium text-[11px] leading-[20px] rounded-[6px] text-[#C6C8CD] ">
                          MAX
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className=" w-[100%] mt-[24px] rounded-[12px] py-[14px] px-[32px] bg-[#30353F] text-[#72767C] font-Inter font-medium text-[16px] leading-[28px] ">
                  Deposit to vault
                </button>
              </div>
            </div></div>
            <div className=" w-4/12 max-lg:w-full px-[12px]">
            <div className="annual-card bg-[#1E232E] max-w-[364px] shadow-[0px_16px_16px_-1px_#00000014] w-[100%] rounded-[24px]  ">
              <div className="p-[32px]">
                <div className=" flex justify-between">
                  <div className=" flex flex-col">
                    <p className=" font-Inter  font-semibold text-[14px] leading-[20px] text-[#A1ADC4] ">
                      724.12%
                    </p>
                    <h2 className=" font-poppins text-white font-semibold text-[28px] leading-[28px] mt-[12px] hover:text-[#06D6A0] duration-300">
                      $24,117.93
                    </h2>
                  </div>
                  <div className="w-[40px] h-[40px] bg-[#384257] rounded-[50%] flex justify-center items-center">
                    <svg
                      width="18"
                      height="21"
                      viewBox="0 0 18 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.96335 1.28579C9.84158 1.12249 9.65862 1.01575 9.45654 0.990103C9.25446 0.964455 9.05064 1.02211 8.89194 1.14981C7.02176 2.65463 5.7174 4.83776 5.35322 7.32637C4.69665 6.85041 4.11999 6.27052 3.6476 5.61081C3.51764 5.42933 3.3136 5.31516 3.09095 5.29934C2.8683 5.28353 2.65017 5.36771 2.49587 5.529C0.950469 7.14442 0 9.33683 0 11.7497C0 16.7202 4.02944 20.7497 9 20.7497C13.9706 20.7497 18 16.7202 18 11.7497C18 8.08876 15.8143 4.93999 12.6798 3.53406C11.5706 2.99256 10.6547 2.21284 9.96335 1.28579ZM12.75 13.25C12.75 15.3211 11.0711 17 9 17C6.92893 17 5.25 15.3211 5.25 13.25C5.25 12.8407 5.31559 12.4467 5.43682 12.0779C6.06529 12.5425 6.78769 12.8874 7.57031 13.0787C7.78619 11.6779 8.48657 10.437 9.49489 9.53241C11.3321 9.77462 12.75 11.3467 12.75 13.25Z"
                        fill="#F37249"
                      />
                    </svg>
                  </div>
                </div>
                <div className=" pt-[24px]">
                  <p className=" font-Inter  font-semibold text-[14px] leading-[20px] text-[#A1ADC4] ">
                    Total Value Locked
                  </p>
                  <h2 className=" font-poppins text-white font-semibold text-[28px] leading-[28px] mt-[12px] hover:text-[#06D6A0] duration-300">
                    $782,471,229.40
                  </h2>
                </div>
                <div className="under_line w-[100%] h-[1px] bg-[linear-gradient(90deg,#1E232E_0%,#3C465D_50%,#1E232E_100%)] mt-[24px]"></div>
                <div className=" pt-[24px] flex justify-between items-center">
                  <button className=" w-[107px] p-[6px_8px] flex items-center bg-[#323B4D] rounded-[8px] text-white gap-[6px] font-Inter font-medium text-[14px] leading-[24px]">
                    <span>
                      <img width={24} height={24} src={pyth} alt="pyth" />
                    </span>
                    <span>PYTH</span>
                    <span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.54819 0.450603C5.55454 0.70574 5.35291 0.917723 5.09782 0.924079C4.15037 0.947687 3.16797 1.00728 2.05346 1.10331C1.55125 1.14658 1.1525 1.54178 1.10638 2.04016C0.835389 4.96839 0.887392 7.0165 1.12492 9.92572C1.16684 10.4391 1.5724 10.8472 2.08226 10.8907C4.9757 11.1374 7.01099 11.138 9.94253 10.8895C10.4516 10.8463 10.8563 10.4403 10.8986 9.92951C10.99 8.82527 11.0501 7.84912 11.0761 6.90745C11.0832 6.65233 11.2957 6.45124 11.5508 6.4583C11.8058 6.46536 12.0069 6.67789 11.9998 6.93301C11.9732 7.89644 11.9118 8.89029 11.8195 10.0057C11.7401 10.9646 10.9806 11.729 10.0206 11.8104C7.03733 12.0633 4.94967 12.0627 2.00378 11.8116C1.04101 11.7295 0.28232 10.9609 0.203944 10.0009C-0.0365969 7.05486 -0.0909833 4.95085 0.186269 1.95497C0.273941 1.00763 1.0301 0.263838 1.97416 0.182499C3.10242 0.085288 4.10416 0.0243326 5.0748 0.000146214C5.32989 -0.00621007 5.54183 0.195467 5.54819 0.450603Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.14654 0.478261C7.14654 0.214125 7.36066 0 7.6248 0H11.3942C11.7288 0 12 0.271226 12 0.605797V4.3752C12 4.63934 11.7859 4.85346 11.5217 4.85346C11.2576 4.85346 11.0435 4.63934 11.0435 4.3752V1.63288L5.48311 7.19325C5.29634 7.38003 4.99352 7.38003 4.80675 7.19325C4.61997 7.00648 4.61997 6.70366 4.80675 6.51689L10.3671 0.956522H7.6248C7.36066 0.956522 7.14654 0.742397 7.14654 0.478261Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                  <p className=" font-Inter font-medium text-[16px] leading-[28px] text-white">
                    289,998,153.4972
                  </p>
                </div>
                <div className=" pt-[16px] flex justify-between items-center">
                  <button className=" w-[107px] p-[6px_8px] flex items-center bg-[#323B4D] rounded-[8px] text-white gap-[6px] font-Inter font-medium text-[14px] leading-[24px]">
                    <span>
                      <img width={24} height={24} src={usdc} alt="pyth" />
                    </span>
                    <span>USDC</span>
                    <span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.54819 0.450603C5.55454 0.70574 5.35291 0.917723 5.09782 0.924079C4.15037 0.947687 3.16797 1.00728 2.05346 1.10331C1.55125 1.14658 1.1525 1.54178 1.10638 2.04016C0.835389 4.96839 0.887392 7.0165 1.12492 9.92572C1.16684 10.4391 1.5724 10.8472 2.08226 10.8907C4.9757 11.1374 7.01099 11.138 9.94253 10.8895C10.4516 10.8463 10.8563 10.4403 10.8986 9.92951C10.99 8.82527 11.0501 7.84912 11.0761 6.90745C11.0832 6.65233 11.2957 6.45124 11.5508 6.4583C11.8058 6.46536 12.0069 6.67789 11.9998 6.93301C11.9732 7.89644 11.9118 8.89029 11.8195 10.0057C11.7401 10.9646 10.9806 11.729 10.0206 11.8104C7.03733 12.0633 4.94967 12.0627 2.00378 11.8116C1.04101 11.7295 0.28232 10.9609 0.203944 10.0009C-0.0365969 7.05486 -0.0909833 4.95085 0.186269 1.95497C0.273941 1.00763 1.0301 0.263838 1.97416 0.182499C3.10242 0.085288 4.10416 0.0243326 5.0748 0.000146214C5.32989 -0.00621007 5.54183 0.195467 5.54819 0.450603Z"
                          fill="white"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.14654 0.478261C7.14654 0.214125 7.36066 0 7.6248 0H11.3942C11.7288 0 12 0.271226 12 0.605797V4.3752C12 4.63934 11.7859 4.85346 11.5217 4.85346C11.2576 4.85346 11.0435 4.63934 11.0435 4.3752V1.63288L5.48311 7.19325C5.29634 7.38003 4.99352 7.38003 4.80675 7.19325C4.61997 7.00648 4.61997 6.70366 4.80675 6.51689L10.3671 0.956522H7.6248C7.36066 0.956522 7.14654 0.742397 7.14654 0.478261Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                  <p className=" font-Inter font-medium text-[16px] leading-[28px] text-white">
                    145,157,224.1311
                  </p>
                </div>
                <div className=" flex items-center gap-[6px] pt-[20px]">
                  <div className="max-w-[183px] w-[100%] flex flex-col">
                    <p className=" mb-[3px] font-Inter font-medium text-[14px] leading-[24px]  text-[#A1ADC4]">
                      PYTH <span className=" font-bold text-white">63%</span>
                    </p>
                    <div className=" max-w-[183px] w-[100%]  h-[14px]  bg-[#5099CC] rounded-[4px]"></div>
                  </div>
                  <div className=" flex flex-col  max-w-[111px] w-[100%]">
                    <p className=" mb-[3px] text-end font-Inter font-medium text-[14px] leading-[24px]  text-[#A1ADC4]">
                      {" "}
                      <span className=" font-bold text-white">37%</span>
                      USDC
                    </p>
                    <div className=" max-w-[111px] w-[100%] h-[14px]  bg-[#29658E] rounded-[4px]"></div>
                  </div>
                </div>
              </div>
              <div className="  bg-[#222834] max-w-[364px] w-full rounded-[24px] p-[24px_32px_32px_32px] ">
                <div className=" flex justify-between items-center">
                  <h3 className="  font-Inter font-bold text-[14px]  leading-[24px] text-[#A1ADC4] ">
                    Market 24h Vol
                  </h3>
                  <p className="   font-Inter text-[14px]  leading-[24px] font-medium text-[#FFFFFF]  ">
                    $313,981,498.40
                  </p>
                </div>
                <div className=" flex justify-between items-center mt-[8px]">
                  <h3 className="  font-Inter font-bold text-[14px]  leading-[24px] text-[#A1ADC4] ">
                    Market 24h Fee
                  </h3>
                  <p className="   font-Inter text-[14px]  leading-[24px] font-medium text-[#FFFFFF]  ">
                    $124,876.11
                  </p>
                </div>
                {/* button_here */}
                <button className=" max-w-[300px] w-full py-[8px] bg-[#2C3444] rounded-[12px]  font-Inter font-medium text-[14px] leading-[24px]  flex   items-center  justify-center gap-[8.56px] mt-[16px] text-[#FFFFFF] ">
                  <span>
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 9.5C11.3807 9.5 12.5 8.38071 12.5 7C12.5 5.61929 11.3807 4.5 10 4.5C8.61929 4.5 7.5 5.61929 7.5 7C7.5 8.38071 8.61929 9.5 10 9.5Z"
                        fill="#A1ADC4"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.664255 7.59038C0.517392 7.20873 0.517518 6.78563 0.66461 6.40408C2.10878 2.65788 5.7433 0 9.99859 0C14.256 0 17.892 2.66051 19.3347 6.40962C19.4816 6.79127 19.4814 7.21437 19.3344 7.59593C17.8902 11.3421 14.2557 14 10.0004 14C5.74298 14 2.10698 11.3395 0.664255 7.59038ZM14.0004 7C14.0004 9.20914 12.2095 11 10.0004 11C7.79123 11 6.00037 9.20914 6.00037 7C6.00037 4.79086 7.79123 3 10.0004 3C12.2095 3 14.0004 4.79086 14.0004 7Z"
                        fill="#A1ADC4"
                      />
                    </svg>
                  </span>
                  See Market Details
                </button>
                <button className=" max-w-[300px] w-full py-[8px] bg-[#2C3444] rounded-[12px]  font-Inter font-medium text-[14px] leading-[24px]  flex   items-center  justify-center gap-[8.56px] mt-[8px] text-[#FFFFFF] ">
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_30_556)">
                        <path
                          d="M19.7094 10.0008C19.7094 15.5236 15.4114 20.0008 10.1094 20.0008C4.80746 20.0008 0.509399 15.5236 0.509399 10.0008C0.509399 4.47789 4.80746 0.000732422 10.1094 0.000732422C15.4114 0.000732422 19.7094 4.47789 19.7094 10.0008Z"
                          fill="#FFD15C"
                        />
                        <path
                          d="M5.45935 14.099C5.54218 14.0404 5.61951 13.9526 5.658 13.828C5.70077 13.6895 5.67553 13.5677 5.6555 13.5002C5.65485 13.4979 5.65415 13.4957 5.65345 13.4934L5.66941 13.3963C5.71349 13.4222 5.76423 13.4569 5.82209 13.4993C5.83605 13.5095 5.85555 13.5239 5.87585 13.539C5.90248 13.5588 5.93056 13.5798 5.94928 13.5933C5.98142 13.6166 6.02709 13.6491 6.07545 13.6758C7.35565 14.5047 8.41436 14.8463 9.25525 14.804C10.1246 14.7603 10.7343 14.3047 11.0489 13.6398C11.3528 12.9972 11.3633 12.2008 11.1504 11.4632C10.936 10.7208 10.4851 9.99917 9.81301 9.49984C8.68045 8.65842 7.64277 7.37908 7.11803 6.29125C6.85154 5.73876 6.74553 5.2932 6.77352 5.00227C6.78651 4.86687 6.82636 4.78495 6.87398 4.73225C6.92165 4.67949 7.00851 4.62131 7.17585 4.59261C7.53028 4.53179 7.94021 4.39881 8.35623 4.26389C8.51773 4.2115 8.68013 4.1588 8.84061 4.10993C9.44021 3.92729 10.075 3.77385 10.7422 3.77515C12.0364 3.77769 13.5552 4.36297 15.1543 6.79771C17.2085 9.92542 16.0807 13.4204 13.7142 15.2565C12.534 16.1722 11.0615 16.6583 9.54837 16.4734C8.18593 16.3071 6.75896 15.5928 5.45935 14.099Z"
                          fill="white"
                        />
                        <path
                          d="M5.69762 13.2895C5.69762 13.2896 5.69718 13.2905 5.69613 13.2921M5.569 13.3506C5.56895 13.3505 5.57026 13.3507 5.5731 13.3514M5.45935 14.099C5.54218 14.0404 5.61951 13.9526 5.658 13.828C5.70077 13.6895 5.67553 13.5677 5.6555 13.5002C5.65485 13.4979 5.65415 13.4957 5.65345 13.4934L5.66941 13.3963C5.71349 13.4222 5.76423 13.4569 5.82209 13.4993C5.83605 13.5095 5.85555 13.5239 5.87585 13.539C5.90248 13.5588 5.93056 13.5798 5.94928 13.5933C5.98142 13.6166 6.02709 13.6491 6.07545 13.6758C7.35565 14.5047 8.41436 14.8463 9.25525 14.804C10.1246 14.7603 10.7343 14.3047 11.0489 13.6398C11.3528 12.9972 11.3633 12.2008 11.1504 11.4632C10.936 10.7208 10.4851 9.99917 9.81301 9.49984C8.68045 8.65842 7.64277 7.37908 7.11803 6.29125C6.85154 5.73876 6.74553 5.2932 6.77352 5.00227C6.78651 4.86687 6.82636 4.78495 6.87398 4.73225C6.92165 4.67949 7.00851 4.62131 7.17585 4.59261C7.53028 4.53179 7.94021 4.39881 8.35623 4.26389C8.51773 4.2115 8.68013 4.1588 8.84061 4.10993C9.44021 3.92729 10.075 3.77385 10.7422 3.77515C12.0364 3.77769 13.5552 4.36297 15.1543 6.79771C17.2085 9.92542 16.0807 13.4204 13.7142 15.2565C12.534 16.1722 11.0615 16.6583 9.54837 16.4734C8.18593 16.3071 6.75896 15.5928 5.45935 14.099Z"
                          stroke="black"
                          stroke-width="0.966314"
                        />
                        <path
                          d="M6.6344 4.75253C6.6344 4.75253 10.3042 3.73462 11.1076 3.73462C11.9111 3.73462 15.1217 5.35864 16.0587 8.32643C17.3869 12.5337 13.774 15.2923 13.366 15.0218C17.253 11.6742 10.8905 5.4861 7.76357 5.95134C7.3727 6.00952 7.58985 6.35849 7.58985 6.35849L7.50299 7.26328L6.85154 6.1323L6.6344 4.75253Z"
                          fill="black"
                        />
                        <path
                          d="M15.5249 7.05981C16.6838 9.18483 16.443 7.9682 16.1857 10.3974C16.6618 9.59525 17.4062 10.1959 17.7136 10.5027C17.7687 10.5577 17.8596 10.5236 17.8571 10.4441C17.8454 10.0837 17.7463 9.30517 17.1736 8.46983C16.3884 7.32437 15.5249 7.05981 15.5249 7.05981Z"
                          fill="black"
                        />
                        <path
                          d="M16.1857 10.3974C16.23 10.2834 16.2992 10.1054 16.2992 10.1054M16.1857 10.3974C16.443 7.9682 16.6838 9.18483 15.5249 7.05981C15.5249 7.05981 16.3884 7.32437 17.1736 8.46983C17.7463 9.30516 17.8454 10.0837 17.8571 10.4441C17.8596 10.5236 17.7687 10.5577 17.7136 10.5027C17.4062 10.1959 16.6618 9.59525 16.1857 10.3974Z"
                          stroke="black"
                          stroke-width="0.0542873"
                        />
                        <path
                          d="M6.20137 10.0745C5.71241 10.9368 4.70921 10.8722 4.72842 11.9006C5.62446 13.9744 5.62975 13.8257 5.62975 13.8257C7.28956 12.8544 6.60746 10.7098 6.36119 10.079C6.33333 10.0077 6.23895 10.0083 6.20137 10.0745Z"
                          fill="black"
                        />
                        <path
                          d="M2.43763 11.9803C3.39098 12.1099 3.95968 11.2466 4.72589 11.8956C5.74302 13.9078 5.62721 13.8206 5.62721 13.8206C3.8706 14.585 2.66815 12.7048 2.34262 12.1142C2.30582 12.0476 2.36436 11.9704 2.43763 11.9803Z"
                          fill="black"
                        />
                        <path
                          d="M10.4364 10.702C10.4364 10.702 11.3919 11.72 10.8924 11.8782C10.2696 11.4789 9.15365 11.7892 8.60661 11.9814C8.47194 12.0287 8.3399 11.9042 8.38844 11.7651C8.57445 11.2319 9.03373 10.245 9.91525 10.1139C10.4364 9.97807 10.4364 10.702 10.4364 10.702Z"
                          fill="black"
                        />
                        <path
                          d="M11.0216 5.72409C10.913 5.56578 10.6959 5.13599 11.369 5.13599C12.0422 5.13599 13.0708 5.92997 13.28 6.22369C13.2148 6.40268 12.7805 6.44273 12.5634 6.42532C12.3462 6.40792 11.977 6.37069 11.6947 6.22369C11.4124 6.07667 11.1302 5.88245 11.0216 5.72409Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_30_556">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  1jH8...Bj8H
                  <span>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.04819 2.4506C8.05454 2.70574 7.85291 2.91772 7.59782 2.92408C6.65037 2.94769 5.66797 3.00728 4.55346 3.10331C4.05125 3.14658 3.6525 3.54178 3.60638 4.04016C3.33539 6.96839 3.38739 9.0165 3.62492 11.9257C3.66684 12.4391 4.0724 12.8472 4.58226 12.8907C7.4757 13.1374 9.51099 13.138 12.4425 12.8895C12.9516 12.8463 13.3563 12.4403 13.3986 11.9295C13.49 10.8253 13.5501 9.84912 13.5761 8.90745C13.5832 8.65233 13.7957 8.45124 14.0508 8.4583C14.3058 8.46536 14.5069 8.67789 14.4998 8.93301C14.4732 9.89644 14.4118 10.8903 14.3195 12.0057C14.2401 12.9646 13.4806 13.729 12.5206 13.8104C9.53733 14.0633 7.44967 14.0627 4.50378 13.8116C3.54101 13.7295 2.78232 12.9609 2.70394 12.0009C2.4634 9.05486 2.40902 6.95085 2.68627 3.95497C2.77394 3.00763 3.5301 2.26384 4.47416 2.1825C5.60242 2.08529 6.60416 2.02433 7.5748 2.00015C7.82989 1.99379 8.04183 2.19547 8.04819 2.4506Z"
                        fill="white"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.64654 2.47826C9.64654 2.21412 9.86066 2 10.1248 2H13.8942C14.2288 2 14.5 2.27123 14.5 2.6058V6.3752C14.5 6.63934 14.2859 6.85346 14.0217 6.85346C13.7576 6.85346 13.5435 6.63934 13.5435 6.3752V3.63288L7.98311 9.19325C7.79634 9.38003 7.49352 9.38003 7.30675 9.19325C7.11997 9.00648 7.11997 8.70366 7.30675 8.51689L12.8671 2.95652H10.1248C9.86066 2.95652 9.64654 2.7424 9.64654 2.47826Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vault;
