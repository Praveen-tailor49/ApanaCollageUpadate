import React, { useEffect, useState } from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../utils/Spinner";
import { SET_ERRORS } from "../../../redux/actionTypes";
import * as classes from "../../../utils/styles";
import { Link } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState({});
  const testResult = useSelector((state) => state.student.marks.marks);

  const [loading, setLoading] = useState(false);
  const store = useSelector((state) => state);

  const [search, setSearch] = useState(false);
  useEffect(() => {
    if (Object.keys(store.errors).length !== 0) {
      setError(store.errors);
      setLoading(false);
    }
  }, [store.errors]);

  const subjects = useSelector((state) => state.admin.subjects.result);
  useEffect(() => {
    if (subjects?.length !== 0) setLoading(false);
  }, [subjects]);

  useEffect(() => {
    dispatch({ type: SET_ERRORS, payload: {} });
  }, []);

  console.log(testResult);

  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <MenuBookIcon />
          <h1>All Subjects</h1>
        </div>
        <div className=" mr-10 bg-white rounded-xl pt-6 pl-6 h-[29.5rem]">
          <div className="col-span-3 mr-6">
            <div className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Loading"
                  height={50}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
              {error.noSubjectError && (
                <p className="text-red-500 text-2xl font-bold">
                  {error.noSubjectError}
                </p>
              )}
            </div>
            {/* {!loading &&
              Object.keys(error).length === 0 
              && */}
            {/* // testResult?.length !== 0 && ( */}
            <div className={classes.adminData}>
              <div className="grid grid-cols-8">
                {/* <h1 className={`${classes.adminDataHeading} col-span-1`}>
                      Sr no.
                    </h1> */}
                <h1 className={`${classes.adminDataHeading} col-span-1`}>
                  Subject Code
                </h1>
                <h1 className={`${classes.adminDataHeading} col-span-2`}>
                  Subject Name
                </h1>
                <h1 className={`${classes.adminDataHeading} col-span-2`}>
                  Test
                </h1>
                <h1 className={`${classes.adminDataHeading} col-span-1`}>
                  Marks Obtained
                </h1>
                <h1 className={`${classes.adminDataHeading} col-span-1`}>
                  Grade
                </h1>
                <h1 className={`${classes.adminDataHeading} col-span-1`}>
                  Proformance
                </h1>
              </div>
              {testResult?.map((res, idx) => (
                <div
                  key={idx}
                  className={`${classes.adminDataBody} grid-cols-8`}>
                  {/* <h1
                        className={`col-span-1 ${classes.adminDataBodyFields}`}>
                        {idx + 1}
                      </h1> */}
                  <h1
                    className={`col-span-1 ${classes.adminDataBodyFields}`}>
                    {res.subjectCode}
                  </h1>
                  <h1
                    className={`col-span-2 ${classes.adminDataBodyFields}`}>
                    {res.subject}
                  </h1>
                  <h1
                    className={`col-span-2 ${classes.adminDataBodyFields}`}>
                    {res.subject}
                  </h1>
                  <h1
                    className={`col-span-1 ${classes.adminDataBodyFields}`}>
                    {parseInt(res.internalMarks) + parseInt(res.externalMarks)}
                  </h1>
                  <h1
                    className={`col-span-1 ${classes.adminDataBodyFields}`}>
                    {
                      parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 100 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 79 ? "O"
                        :
                        parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 79.99 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 69 ? "A+"
                          :
                          parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 69.99 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 59 ? "A"
                            :
                            parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 59.99 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 55 ? "B+"
                              :
                              parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 54.99 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 50 ? "B"
                                :
                                parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 49.99 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 45 ? "C"
                                  :
                                  parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 44.99 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 40 ? "D"
                                    : "F"
                    }
                  </h1>
                  <h1
                    className={`col-span-1 ${classes.adminDataBodyFields}`}>
                    

{
                      parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 100 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 79 ? "Outstanding"
                        :
                        parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 79.99 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 69 ? "Excellent"
                          :
                          parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 69.99 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 59 ? "Very Good"
                            :
                            parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 59.99 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 55 ? "Good"
                              :
                              parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 54.99 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 50 ? "Above Average"
                                :
                                parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 49.99 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 45 ? "Average"
                                  :
                                  parseInt(res.internalMarks) + parseInt(res.externalMarks) <= 44.99 && parseInt(res.internalMarks) + parseInt(res.externalMarks) > 40 ? "Pass"
                                    : "F"
                    }
                  </h1>
                </div>
              ))}

              <div className="">
                <Link to='/view/result'>
                  <button className={`${classes.adminFormSubmitButton} bg-blue-500 mt-5 ml-[22rem]`}>Veiw Result</button>
                </Link>
              </div>
            </div>
            {/* // ) */}
            {/* } */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
