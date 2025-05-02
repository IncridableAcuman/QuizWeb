import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { ThemeContext } from '../../contexts/ThemeProvider'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { toast } from 'react-toastify'
import axiosAPI from '../../api/axiosAPI'
import { useNavigate } from 'react-router-dom'

const Test = () => {
  const { theme } = useContext(ThemeContext);
  const [questionData, setQuestionData] = useState([]);// data
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);// current index for question answer
  const navigate=useNavigate();
  const handleOptionClick = (index) => {
    setSelectedOptions(prev => ({
      ...prev,
      [currentQuestionIndex]: index
    }));
  }
  const handleQuestion = async () => {
    try {
      const { data } = await axiosAPI.get("/quizz/questions/all");
      setQuestionData(data);//question data
      localStorage.setItem("totalQuestion",JSON.stringify(data.length));//all question length
      localStorage.setItem("score",JSON.stringify(0));//result
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }
  const handleAnswerSubmit = async () => {//submit answer to backend by true or false
    const selectedIndex = selectedOptions[currentQuestionIndex];
    if (selectedIndex === undefined) {
      toast.warning("Please!,Choose the something answer");
      return;
    }
    try {
      const userId = localStorage.getItem("userId");// which is user
      const question = questionData[currentQuestionIndex];
      const selectedOptionKey = question.options[selectedIndex].key;
      let score=JSON.parse(localStorage.getItem("score")) || 0;
      if(selectedOptionKey===question.currentAnswer){
        score+=1;
        localStorage.setItem("score",JSON.stringify(score));
      }
      await axiosAPI.post(`/quizz/question/submit?userId=${parseInt(userId)}&questionId=${question.id}&selectedOption=${selectedOptionKey}`);
      if (currentQuestionIndex < questionData.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        navigate("/score");
      }
    } catch (error) {
      console.log(error);
      toast.error("Javobni yuborishda xatolik!");
    }
  }

  useEffect(() => {
    handleQuestion();
  }, []);

  const currentQuestion = questionData[currentQuestionIndex];
  const selectedOption = selectedOptions[currentQuestionIndex];

  return (
    <>
      <div className={`fixed top-0 left-0 w-full min-h-screen  ${theme === "light" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        <Navbar />
        <div className="container w-full paddingPracent min-h-screen mx-auto px-4 mt-12 lg:mt-24">
          {questionData.length > 0 && (
            <div className="flex flex-col md:flex-row items-center justify-between gap-5">
              {/* LEFT: Question Info */}
              <div className="w-full max-w-md space-y-4 lg:mb-6">
                <p className='text-gray-500'>Question <span>{currentQuestionIndex + 1}</span> / <span>{questionData.length}</span></p>
                <p className='text-md lg:text-xl font-bold'>{currentQuestion.title}</p>
                <input type="range" min="0" max={questionData.length - 1} value={currentQuestionIndex} readOnly className='w-full' />
              </div>

              {/* RIGHT: Options */}
              <div className="flex flex-col space-y-4 w-full max-w-md">
                {currentQuestion.options.map((item, index) => (
                  <div
                    key={index}
                    className={`space-y-2 w-full p-4 rounded-xl shadow-lg cursor-pointer
                      ${theme === "light"
                        ? `bg-gray-800 text-white ${selectedOption === index ? "border-2 border-purple-500" : ""}`
                        : `bg-white text-gray-900 ${selectedOption === index ? "border-2 border-purple-500" : ""}`}`}
                    onClick={() => handleOptionClick(index)}
                  >
                    <div className="flex items-center gap-2">
                      <p className={`bg-amber-400 text-white rounded px-2 ${selectedOption === index ? "bg-blue-500" : ""}`}>
                        {item.key}
                      </p>
                      <p className='text-md uppercase'>{item.text}</p>
                    </div>
                  </div>
                ))}

                {/* Buttons */}
                <div className="flex justify-between gap-2 pt-2">
                  <button
                    disabled={currentQuestionIndex === 0}
                    onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-white transition duration-300
                      ${currentQuestionIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-600 hover:bg-gray-800"}`}
                  >
                    <ArrowLeft size={18} /> Back
                  </button>

                  <button
                    onClick={handleAnswerSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    {currentQuestionIndex === questionData.length - 1 ? "Finish" : "Next"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Test;
