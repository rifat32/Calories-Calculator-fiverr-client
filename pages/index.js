import Head from "next/head";

import { Inter } from "@next/font/google";

import { useEffect, useState } from "react";

import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [SectionTitle, setSectionTitle] = useState("Gender");
  const [Progressing, setProgressing] = useState(false);
  const [UserInputs, setUserInputs] = useState({
    heightUnit: "cm",
    weightUnit: "kg",
    heightInFt: { ft: 0, in: 0 },
    goalWeightUnit: "kg",
  });

  const [Sections, setSections] = useState([
    "Gender",
    "Age",
    "Weight",
    "Height",
    "Activity Level",
    "Goal Weight",
    "Time to reach your goal",
    "Result",
    "Tell Us More",
    "Thanks 💖",
  ]);

  useEffect(() => {
    if (SectionTitle == "Time to reach your goal") {
    }
  }, [SectionTitle]);

  async function submitReview() {
    setProgressing(true);
    try{
      let { data } = await axios.post("/api/saveReview", {
        rating: UserInputs.rating,
        review: UserInputs.review,
      });
  
     
      setSectionTitle("Thanks 💖");
      setProgressing(false);
    }
    catch(error) {
      console.log(error)
      setSectionTitle("Tell Us More");
      alert("Something Went Wrong");
      setProgressing(false);
    }
   
   
  }

  async function calculateCallories() {
    setProgressing(true);
    // console.log({
    //   sex: UserInputs.gender,
    //   activityLevel: UserInputs.activityLevel,
    //   weight: UserInputs.weight + UserInputs.weightUnit,
    //   goalWeight: UserInputs.goalWeight + UserInputs.goalWeightUnit,
    //   height:
    //     UserInputs.heightUnit != "ft"
    //       ? UserInputs.height + UserInputs.heightUnit
    //       : `${UserInputs.heightInFt.ft}'${UserInputs.heightInFt.in} ft`,
    //   timeToReachGoal: UserInputs.goalDays,
    // });
    // return;
    try {
      let { data } = await axios.post("/api/calculateCalories", {
        sex: UserInputs.gender,
        activityLevel: UserInputs.activityLevel,
        weight: UserInputs.weight + UserInputs.weightUnit,
        age: UserInputs.age,
        goalWeight: UserInputs.goalWeight + UserInputs.goalWeightUnit,
        height:
          UserInputs.heightUnit != "ft"
            ? UserInputs.height + UserInputs.heightUnit
            : `${UserInputs.heightInFt.ft}'${UserInputs.heightInFt.in} ft`,
        timeToReachGoal: UserInputs.goalDays,
      });

      setProgressing(false);
      setSectionTitle("Result");
      setUserInputs({ ...UserInputs, result: data.response });
    } catch {
      alert("Something Went Wrong");
      setProgressing(false);
    }
  }

  return (
    <>
      <Head>
        <title>Calories Calculator</title>
        <meta name="description" content="Developed By Sam, @justhackit.in" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="relative w-[100vw] h-[100vh] overflow-y-hidden bg-[rgb(35,91,90)]">
        <img className="absolute top-0 w-full" alt="" src="/leftTop.svg" />
        <img
          className="absolute bottom-0 w-full"
          alt=""
          src="/bottomDesign.png"
        />
        <div className="group absolute pt-4 ml-4">
          {Sections.indexOf(SectionTitle) - 1 >= 0 ? (
            <button
              onClick={() => {
                setSectionTitle(Sections[Sections.indexOf(SectionTitle) - 1]);
              }}
              className="mr-3 group w-[50px] h-[50px] items-center justify-center cursor-pointer flex bg-gray-100 opacity-60 rounded-lg group-hover:scale-125 hover:scale-125 transition-all duration-300 text-black font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                // fontWeight={40}
                // className="m-3"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </button>
          ) : (
            <label className=" font-bold text-2xl text-yellow-100 opacity-70">
              Calories
            </label>
          )}
        </div>
        <div className="absolute flex mt-10 flex-col w-full h-full top-0 left-0 py-6 px-6 ">
          <label className=" mt-[30px] font-[600] w-full text-center text-[35px] text-white">
            {SectionTitle}
          </label>

          {SectionTitle == "Gender" ? (
            <>
              <div className="w-full  h-[50%] max-w-[600px] mx-auto items-center flex flex-row justify-evenly">
                <img
                  onClick={() => {
                    setUserInputs({ ...UserInputs, gender: "female" });
                  }}
                  className={`w-[40%] h-full transition-all duration-300  object-contain ${
                    UserInputs.gender == "female" ? "opacity-100" : "opacity-50"
                  } hover:opacity-100`}
                  alt=""
                  src="/femaleSelected.png"
                />
                <img
                  onClick={() => {
                    setUserInputs({ ...UserInputs, gender: "male" });
                  }}
                  className={`w-[40%] h-full transition-all duration-300  object-contain ${
                    UserInputs.gender == "male" ? "opacity-100" : "opacity-50"
                  } hover:opacity-100`}
                  alt=""
                  src="/maleSelected.png"
                />
              </div>
              {/* <div className="w-[100%] mt-[100px] flex justify-center items-center"> */}
              <button
                onClick={() => {
                  UserInputs.gender && UserInputs.gender.trim() != ""
                    ? setSectionTitle("Age")
                    : alert("Please Select Gender");
                }}
                className=" mx-auto mt-[80px] w-[80%] h-[50px] max-w-[350px] hover:scale-110 transition-all duration-300 rounded-3xl text-2xl font-semibold text-[rgb(35,91,90)] [background:linear-gradient(180deg,_#f8b144,_#ffd492)]"
              >
                Next
              </button>
            </>
          ) : 
          SectionTitle == "Age" ? (
            <>
              <div className="w-full  h-[40%] max-w-[600px] mx-auto items-center flex flex-row justify-evenly">
                <img
                  // onClick={() => {
                  //   setUserInputs({ ...UserInputs, gender: "female" });
                  // }}
                  className={`w-[40%] transition-all duration-300  object-contain ${"opacity-100"} hover:opacity-100`}
                  style={{
                    height:
                      UserInputs.gender && UserInputs.gender == "female"
                        ? "100%"
                        : "100%",
                  }}
                  alt=""
                  src={
                    UserInputs.gender && UserInputs.gender == "female"
                      ? "/femaleSelected.png"
                      : "/maleSelected.png"
                  }
                />
              </div>
              <label className="w-full text-center text-yellow-300 font-[500] text-[16px]">
                Please insert your current Age
              </label>
              <input
                onChange={(data) => {
                  setUserInputs({
                    ...UserInputs,
                    age: parseInt(data.currentTarget.value),
                  });
                }}
                // defaultValue={0}
                value={UserInputs.age || 0}
                placeholder={0}
                className="mx-auto w-[50px] h-[30px] mt-2 bg-transparent text-yellow-300 border-2 rounded-[5px] border-yellow-100 text-lg font-[500] text-center"
              />
              <input
                style={{
                  color: "rgb(202,138,4)",
                  accentColor: "rgb(202,138,4)",

                  // color,
                }}
                min={0}
                max={100}
                value={UserInputs.age || 0}
                onChange={(data) => {
                  setUserInputs({
                    ...UserInputs,
                    age: parseInt(data.currentTarget.value),
                  });
                }}
                type={"range"}
                defaultValue={0}
                placeholder={0}
                className="mx-auto md:w-[80%] w-[90%] max-w-[500px]  h-[30px] mt-2  text-yellow-300 border-2 rounded-[5px] border-yellow-100 text-lg font-[500] text-center"
              />
              {/* <div className="w-full items-center flex gap-x-5 flex-row justify-center">
                <button
                  onClick={() => {
                    setUserInputs({ ...UserInputs, weightUnit: "kg" });
                  }}
                  className={`hover:bg-[#ffcf84] border-[#ffcf84] border-2 ${
                    UserInputs.weightUnit == "kg"
                      ? "text-black"
                      : "text-yellow-200 "
                  }transition-all duration-300 pb-1.5 ${
                    UserInputs.weightUnit == "kg"
                      ? "bg-[#ffcf84]"
                      : "bg-transparent"
                  } hover:text-black font-bold rounded-md px-4 py-1 `}
                >
                  Kg
                </button>
                <button
                  onClick={() => {
                    setUserInputs({ ...UserInputs, weightUnit: "lb" });
                  }}
                  className={`hover:bg-[#ffcf84] border-[#ffcf84] border-2 ${
                    UserInputs.weightUnit == "lb"
                      ? "text-black"
                      : "text-yellow-200 "
                  }transition-all duration-300 pb-1.5 ${
                    UserInputs.weightUnit == "lb"
                      ? "bg-[#ffcf84]"
                      : "bg-transparent"
                  } hover:text-black font-bold rounded-md px-4 py-1 `}
                >
                  lb
                </button>
              </div> */}
              <button
                onClick={() => {
                  UserInputs.age && UserInputs.age > 0
                    ? setSectionTitle("Weight")
                    : alert("Please Enter Age");
                }}
                className=" mx-auto mt-[50px] w-[80%] h-[50px] max-w-[350px] hover:scale-110 transition-all duration-300 rounded-3xl text-2xl font-semibold text-[rgb(35,91,90)] [background:linear-gradient(180deg,_#f8b144,_#ffd492)]"
              >
                Next
              </button>
            </>
          )
          : SectionTitle == "Weight" ? (
            <>
              <div className="w-full  h-[40%] max-w-[600px] mx-auto items-center flex flex-row justify-evenly">
                <img
                  // onClick={() => {
                  //   setUserInputs({ ...UserInputs, gender: "female" });
                  // }}
                  className={`w-[40%] transition-all duration-300  object-contain ${"opacity-100"} hover:opacity-100`}
                  style={{
                    height:
                      UserInputs.gender && UserInputs.gender == "female"
                        ? "100%"
                        : "100%",
                  }}
                  alt=""
                  src={
                    UserInputs.gender && UserInputs.gender == "female"
                      ? "/femaleSelected.png"
                      : "/maleSelected.png"
                  }
                />
              </div>
              <label className="w-full text-center text-yellow-300 font-[500] text-[16px]">
                Please insert your current weight
              </label>
              <input
                onChange={(data) => {
                  setUserInputs({
                    ...UserInputs,
                    weight: parseInt(data.currentTarget.value),
                  });
                }}
                // defaultValue={0}
                value={UserInputs.weight || 0}
                placeholder={0}
                className="mx-auto w-[50px] h-[30px] mt-2 bg-transparent text-yellow-300 border-2 rounded-[5px] border-yellow-100 text-lg font-[500] text-center"
              />
              <input
                style={{
                  color: "rgb(202,138,4)",
                  accentColor: "rgb(202,138,4)",

                  // color,
                }}
                min={0}
                max={150}
                value={UserInputs.weight || 0}
                onChange={(data) => {
                  setUserInputs({
                    ...UserInputs,
                    weight: parseInt(data.currentTarget.value),
                  });
                }}
                type={"range"}
                defaultValue={0}
                placeholder={0}
                className="mx-auto md:w-[80%] w-[90%] max-w-[500px]  h-[30px] mt-2  text-yellow-300 border-2 rounded-[5px] border-yellow-100 text-lg font-[500] text-center"
              />
              <div className="w-full items-center flex gap-x-5 flex-row justify-center">
                <button
                  onClick={() => {
                    setUserInputs({ ...UserInputs, weightUnit: "kg" });
                  }}
                  className={`hover:bg-[#ffcf84] border-[#ffcf84] border-2 ${
                    UserInputs.weightUnit == "kg"
                      ? "text-black"
                      : "text-yellow-200 "
                  }transition-all duration-300 pb-1.5 ${
                    UserInputs.weightUnit == "kg"
                      ? "bg-[#ffcf84]"
                      : "bg-transparent"
                  } hover:text-black font-bold rounded-md px-4 py-1 `}
                >
                  Kg
                </button>
                <button
                  onClick={() => {
                    setUserInputs({ ...UserInputs, weightUnit: "lb" });
                  }}
                  className={`hover:bg-[#ffcf84] border-[#ffcf84] border-2 ${
                    UserInputs.weightUnit == "lb"
                      ? "text-black"
                      : "text-yellow-200 "
                  }transition-all duration-300 pb-1.5 ${
                    UserInputs.weightUnit == "lb"
                      ? "bg-[#ffcf84]"
                      : "bg-transparent"
                  } hover:text-black font-bold rounded-md px-4 py-1 `}
                >
                  lb
                </button>
              </div>
              <button
                onClick={() => {
                  UserInputs.weight && UserInputs.weight > 0
                    ? setSectionTitle("Height")
                    : alert("Please Enter Weight");
                }}
                className=" mx-auto mt-[50px] w-[80%] h-[50px] max-w-[350px] hover:scale-110 transition-all duration-300 rounded-3xl text-2xl font-semibold text-[rgb(35,91,90)] [background:linear-gradient(180deg,_#f8b144,_#ffd492)]"
              >
                Next
              </button>
            </>
          ) : SectionTitle == "Height" ? (
            <>
              <div className="w-full  h-[40%] max-w-[600px] mx-auto items-center flex flex-row justify-evenly">
                <img
                  // onClick={() => {
                  //   setUserInputs({ ...UserInputs, gender: "female" });
                  // }}
                  className={`w-[40%] transition-all duration-300  object-contain 
                    opacity-100
                   hover:opacity-100`}
                  style={{
                    height:
                      UserInputs.gender && UserInputs.gender == "female"
                        ? "100%"
                        : "100%",
                  }}
                  alt=""
                  src={
                    UserInputs.gender && UserInputs.gender == "female"
                      ? "/femaleSelected.png"
                      : "/maleSelected.png"
                  }
                />
              </div>
              <label className="w-full text-center text-yellow-300 font-[500] text-[16px]">
                Please insert your current height
              </label>

              {UserInputs.heightUnit == "ft" ? (
                <div className="items-baseline mb-5 text-yellow-300 mx-auto flex flex-row justify-center gap-x-1">
                  <input
                    // type={"number"}
                    onChange={(data) => {
                      setUserInputs({
                        ...UserInputs,
                        heightInFt: {
                          ...UserInputs.heightInFt,
                          ft: parseInt(data.currentTarget.value),
                        },
                      });
                    }}
                    defaultValue={0}
                    value={
                      UserInputs.heightInFt && UserInputs.heightInFt.ft
                        ? UserInputs.heightInFt.ft
                        : 0
                    }
                    placeholder={0}
                    className=" w-[50px] h-[30px] mt-2 bg-transparent  border-2 rounded-[5px] border-yellow-100 text-lg font-[500] text-center"
                  />
                  <label className="mr-4">Feet</label>

                  <input
                    // type={""}

                    onChange={(data) => {
                      if (
                        data.currentTarget.value < 0 ||
                        data.currentTarget.value > 11
                      ) {
                        alert("Inch Should be between 1 to 11");

                        return;
                      }
                      setUserInputs({
                        ...UserInputs,
                        heightInFt: {
                          ...UserInputs.heightInFt,
                          in: parseInt(data.currentTarget.value),
                        },
                      });
                    }}
                    defaultValue={0}
                    value={
                      UserInputs.heightInFt && UserInputs.heightInFt.in
                        ? UserInputs.heightInFt.in
                        : 0
                    }
                    placeholder={0}
                    className=" w-[50px] h-[30px] mt-2 bg-transparent text-yellow-300 border-2 rounded-[5px] border-yellow-100 text-lg font-[500] text-center"
                  />
                  <label>Inches</label>
                </div>
              ) : (
                <>
                  <input
                    onChange={(data) => {
                      setUserInputs({
                        ...UserInputs,
                        height: parseInt(data.currentTarget.value),
                      });
                    }}
                    // defaultValue={0}
                    value={UserInputs.height || 0}
                    placeholder={0}
                    className="mx-auto w-[50px] h-[30px] mt-2 bg-transparent text-yellow-300 border-2 rounded-[5px] border-yellow-100 text-lg font-[500] text-center"
                  />
                  <input
                    style={{
                      color: "rgb(202,138,4)",
                      accentColor: "rgb(202,138,4)",

                      // color,
                    }}
                    min={0}
                    max={250}
                    value={UserInputs.height || 0}
                    onChange={(data) => {
                      setUserInputs({
                        ...UserInputs,
                        height: parseInt(data.currentTarget.value),
                      });
                    }}
                    type={"range"}
                    defaultValue={0}
                    placeholder={0}
                    className="mx-auto md:w-[80%] w-[90%] max-w-[500px]  h-[30px] mt-2  text-yellow-300 border-2 rounded-[5px] border-yellow-100 text-lg font-[500] text-center"
                  />
                </>
              )}

              <div className="w-full items-center flex gap-x-5 flex-row justify-center">
                <button
                  onClick={() => {
                    setUserInputs({ ...UserInputs, heightUnit: "cm" });
                  }}
                  className={`hover:bg-[#ffcf84] border-[#ffcf84] border-2 ${
                    UserInputs.heightUnit == "cm"
                      ? "text-black"
                      : "text-yellow-200 "
                  }transition-all duration-300 pb-1.5 ${
                    UserInputs.heightUnit == "cm"
                      ? "bg-[#ffcf84]"
                      : "bg-transparent"
                  } hover:text-black font-bold rounded-md px-4 py-1 `}
                >
                  CM
                </button>
                <button
                  onClick={() => {
                    setUserInputs({ ...UserInputs, heightUnit: "ft" });
                  }}
                  className={`hover:bg-[#ffcf84] border-[#ffcf84] border-2 ${
                    UserInputs.heightUnit == "ft"
                      ? "text-black"
                      : "text-yellow-200 "
                  }transition-all duration-300 pb-1.5 ${
                    UserInputs.heightUnit == "ft"
                      ? "bg-[#ffcf84]"
                      : "bg-transparent"
                  } hover:text-black font-bold rounded-md px-4 py-1 `}
                >
                  Ft
                </button>
              </div>

              <button
                onClick={() => {
                  (UserInputs.heightUnit != "ft" &&
                    UserInputs.height &&
                    UserInputs.height > 0) ||
                  UserInputs.heightInFt.ft + UserInputs.heightInFt.in > 0
                    ? setSectionTitle("Activity Level")
                    : alert("Please Enter Height");
                }}
                className=" mx-auto  mt-[50px] w-[80%] h-[50px] max-w-[350px] hover:scale-110 transition-all duration-300 rounded-3xl text-2xl font-semibold text-[rgb(35,91,90)] [background:linear-gradient(180deg,_#f8b144,_#ffd492)]"
              >
                Next
              </button>
            </>
          ) : SectionTitle == "Activity Level" ? (
            <>
              <div className="w-full  h-[40%] max-w-[600px] mx-auto items-center flex flex-row justify-evenly">
                <img
                  // onClick={() => {
                  //   setUserInputs({ ...UserInputs, gender: "female" });
                  // }}
                  className={`w-[40%] transition-all duration-300  object-contain 
                    opacity-100 hover:opacity-100`}
                  style={{
                    height:
                      UserInputs.gender && UserInputs.gender == "female"
                        ? "100%"
                        : "100%",
                  }}
                  alt=""
                  src={
                    UserInputs.gender && UserInputs.gender == "female"
                      ? "/femaleSelected.png"
                      : "/maleSelected.png"
                  }
                />
              </div>
              <label className="w-full text-center text-yellow-300 font-[500] text-[16px]">
                Please choose your activity level
              </label>

              <div className="w-full items-center mt-3 flex gap-x-3 flex-row justify-center">
                {[1, 2, 3, 4, 5].map((item) => (
                  <button
                    onClick={() => {
                      setUserInputs({ ...UserInputs, activityLevel: item });
                    }}
                    className={`hover:bg-[#ffcf84] border-[#ffcf84] border-2 ${
                      UserInputs.activityLevel == item
                        ? "text-black"
                        : "text-yellow-200 "
                    }transition-all duration-300 pb-1.5 ${
                      UserInputs.activityLevel == item
                        ? "bg-[#ffcf84]"
                        : "bg-transparent"
                    } hover:text-black font-semibold rounded-[5px] px-4 py-1 `}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="w-full flex flex-row gap-[150px] items-center justify-center text-[#ffcf84] text-sm font-semibold mt-1">
                <label>Not Active</label>
                <label>Very Active</label>
              </div>

              <button
                onClick={() => {
                  UserInputs.activityLevel && UserInputs.activityLevel > 0
                    ? setSectionTitle("Goal Weight")
                    : alert("Please Choose your Activity Level");
                }}
                className=" mx-auto  mt-[50px] w-[80%] h-[50px] max-w-[350px] hover:scale-110 transition-all duration-300 rounded-3xl text-2xl font-semibold text-[rgb(35,91,90)] [background:linear-gradient(180deg,_#f8b144,_#ffd492)]"
              >
                Next
              </button>
            </>
          ) : SectionTitle == "Goal Weight" ? (
            <>
              <div className="w-full  h-[40%] max-w-[600px] mx-auto items-center flex flex-row justify-evenly">
                <img
                  // onClick={() => {
                  //   setUserInputs({ ...UserInputs, gender: "female" });
                  // }}
                  className={`w-[40%] transition-all duration-300  object-contain ${"opacity-100"} hover:opacity-100`}
                  style={{
                    height:
                      UserInputs.gender && UserInputs.gender == "female"
                        ? "100%"
                        : "100%",
                  }}
                  alt=""
                  src={
                    UserInputs.gender && UserInputs.gender == "female"
                      ? "/femaleSelected.png"
                      : "/maleSelected.png"
                  }
                />
              </div>
              <label className="w-full text-center text-yellow-300 font-[500] text-[16px]">
                Please insert your goal weight
              </label>
              <input
                onChange={(data) => {
                  setUserInputs({
                    ...UserInputs,
                    goalWeight: parseInt(data.currentTarget.value),
                  });
                }}
                // defaultValue={0}
                value={UserInputs.goalWeight || 0}
                placeholder={0}
                className="mx-auto w-[50px] h-[30px] mt-2 bg-transparent text-yellow-300 border-2 rounded-[5px] border-yellow-100 text-lg font-[500] text-center"
              />
              <input
                style={{
                  color: "rgb(202,138,4)",
                  accentColor: "rgb(202,138,4)",

                  // color,
                }}
                min={0}
                max={150}
                value={UserInputs.goalWeight || 0}
                onChange={(data) => {
                  setUserInputs({
                    ...UserInputs,
                    goalWeight: parseInt(data.currentTarget.value),
                  });
                }}
                type={"range"}
                defaultValue={0}
                placeholder={0}
                className="mx-auto md:w-[80%] w-[90%] max-w-[500px] h-[30px] mt-2  text-yellow-300 border-2 rounded-[5px] border-yellow-100 text-lg font-[500] text-center"
              />
              <div className="w-full items-center flex gap-x-5 flex-row justify-center">
                <button
                  onClick={() => {
                    setUserInputs({ ...UserInputs, goalWeightUnit: "kg" });
                  }}
                  className={`hover:bg-[#ffcf84] border-[#ffcf84] border-2 ${
                    UserInputs.goalWeightUnit == "kg"
                      ? "text-black"
                      : "text-yellow-200 "
                  }transition-all duration-300 pb-1.5 ${
                    UserInputs.goalWeightUnit == "kg"
                      ? "bg-[#ffcf84]"
                      : "bg-transparent"
                  } hover:text-black font-bold rounded-md px-4 py-1 `}
                >
                  Kg
                </button>
                <button
                  onClick={() => {
                    setUserInputs({ ...UserInputs, goalWeightUnit: "lb" });
                  }}
                  className={`hover:bg-[#ffcf84] border-[#ffcf84] border-2 ${
                    UserInputs.goalWeightUnit == "lb"
                      ? "text-black"
                      : "text-yellow-200 "
                  }transition-all duration-300 pb-1.5 ${
                    UserInputs.goalWeightUnit == "lb"
                      ? "bg-[#ffcf84]"
                      : "bg-transparent"
                  } hover:text-black font-bold rounded-md px-4 py-1 `}
                >
                  lb
                </button>
              </div>
              <button
                onClick={() => {
                  UserInputs.goalWeight && UserInputs.goalWeight > 0
                    ? setSectionTitle("Time to reach your goal")
                    : alert("Please Enter Your Goal Weight");
                }}
                className=" mx-auto mt-[50px] w-[80%] h-[50px] max-w-[350px] hover:scale-110 transition-all duration-300 rounded-3xl text-2xl font-semibold text-[rgb(35,91,90)] [background:linear-gradient(180deg,_#f8b144,_#ffd492)]"
              >
                Next
              </button>
            </>
          ) : SectionTitle == "Time to reach your goal" ? (
            <>
              <input
                className="w-[55%] mx-auto mt-5 h-[40px] max-w-[300px] bg-[#ffcf84] border-[#ffcf84] focus:border-0 focus:border-none focus:border-[#ffcf84] font-semibold text-lg rounded-lg px-2"
                type="date"
                id="goalDate"
                name="date"
                onChange={(data) => {
                  // console.log(data.currentTarget.value);

                  var currentDate = new Date();

                  var givenDate = new Date(data.currentTarget.value);

                  var days;

                  console.log(compareDates(currentDate, givenDate));

                  if (compareDates(currentDate, givenDate)) {
                    alert("Please enter a valid date! Past Dates Not Allowed");
                  } else {
                    // Calculate the number of days between the two dates
                    var timeDifference =
                      givenDate.getTime() - currentDate.getTime();
                    days = Math.ceil(timeDifference / (1000 * 3600 * 24));
                  }

                  // let days = Math.round(
                  //   Math.abs(
                  //     new Date(data.currentTarget.value).getTime() -
                  //       new Date().getTime()
                  //   ) /
                  //     (1000 * 3600 * 24)
                  // );

                  if (days <= 0) {
                    return;
                  } else {
                    setUserInputs({
                      ...UserInputs,
                      goalDays: days,
                    });
                  }
                }}
              />

              {Progressing && (
                <div className="w-full flex justify-center mt-9">
                  <div className="loader"></div>
                </div>
              )}

              <button
                disabled={Progressing}
                onClick={() => {
                  UserInputs.goalDays && UserInputs.goalDays > 0
                    ? calculateCallories()
                    : alert("Please Enter a Valid Target Date");
                }}
                className=" mx-auto mt-[80px] w-[80%] h-[50px] max-w-[350px] hover:scale-110 transition-all duration-300 rounded-3xl text-2xl font-semibold text-[rgb(35,91,90)]"
                style={{
                  backgroundColor: Progressing ? "lightslategray" : "#ffd492",
                  background: !Progressing ? "#ffd492" : "lightgrey",
                }}
              >
                {Progressing ? "Calculating..." : "Calculate"}
              </button>
            </>
          ) : SectionTitle == "Result" ? (
            <>
              <p className="w-[94%] max-w-[500px] max-h-[60%] overflow-y-scroll mx-auto md:font-semibold text-[15px] md:text-[17px] text-[#ffd492] text-center">
                {UserInputs.result}
              </p>
              <label className="w-full text-center mt-[40px] text-gray-300 font-[500] text-[16px]">
                Please Rate the result
              </label>

              <div className="w-full items-center mt-3 flex gap-x-3 flex-row justify-center">
                {[1, 2, 3, 4, 5].map((item) => (
                  <button
                    onClick={() => {
                      setUserInputs({ ...UserInputs, rating: item });
                      setSectionTitle("Tell Us More");
                    }}
                    className={`hover:bg-[#ffcf84] border-[#ffcf84] border-2 ${
                      UserInputs.rating == item
                        ? "text-black"
                        : "text-yellow-200 "
                    }transition-all duration-300 pb-1.5 ${
                      UserInputs.rating == item
                        ? "bg-[#ffcf84]"
                        : "bg-transparent"
                    } hover:text-black font-semibold rounded-[5px] px-4 py-1 `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          ) : SectionTitle == "Tell Us More" ? (
            <>
              <div className="w-[90%] bg-yellow-100 rounded-lg drop-shadow-lg mx-auto mt-5 h-[50%] ">
                <textarea
                  onChange={(e) => {
                    if (e.target.value) {
                      setUserInputs({ ...UserInputs, review: e.target.value });
                    }
                  }}
                  value={UserInputs.review || ""}
                  style={{}}
                  color={"transparent"}
                  className="bg-transparent p-5 w-full placeholder:text-gray-500 h-full border-none outline-none focus:outline-none"
                  placeholder="Write what you want to tell us here..."
                />
              </div>
              <button
                disabled={Progressing}
                onClick={() => {
                  UserInputs.review && UserInputs.review.trim().length > 0
                    ? submitReview()
                    : alert("Please Leave a review");
                }}
                className=" mx-auto mt-[80px] w-[80%] h-[50px] max-w-[350px] hover:scale-110 transition-all duration-300 rounded-3xl text-2xl font-semibold text-[rgb(35,91,90)]"
                style={{
                  backgroundColor: Progressing ? "lightslategray" : "#ffd492",
                  background: !Progressing ? "#ffd492" : "lightgrey",
                }}
              >
                {Progressing ? "Submiting..." : "Submit"}
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </main>
    </>
  );
}

function compareDates(date1, date2) {
  console.log({ 1: date1.getTime(), 2: date2.getTime() });
  return date1.getTime() > date2.getTime();
}
