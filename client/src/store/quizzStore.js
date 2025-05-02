import {create} from 'zustand';
import axiosAPI from '../api/axiosAPI';
import { toast } from 'react-toastify';

const useQuizzStore=create((set,get)=>({

    questionData:[],
    selectedOptions:{},
    currentQuestionIndex:0,
    score:0,
    totalQuestion:0,

    fetchQuestion:async ()=>{
        try {
            const {data}=await axiosAPI.get("/quizz/questions/all");
            set({
                questionData:data,
                totalQuestion:data.length,
                score:0,
                selectedOptions:{},
                currentQuestionIndex:0
            })
        } catch (error) {
            console.log(error);
            toast.error("Error retrieving questions!");
        }
    },
    // choose question
    selectOption:(index)=>{
        const {currentQuestionIndex,selectedOptions}=get();
        set({selectedOptions:{...selectedOptions,[currentQuestionIndex]:index}});
    },
    // next question and isCorrect question
    handleAnswerSubmit:(navigate)=> async ()=>{
        const {questionData,currentQuestionIndex,selectedOptions,score}=get();
        const question=questionData[currentQuestionIndex];
        const selectIndex=selectedOptions[currentQuestionIndex];

        if(selectIndex===undefined){
            toast.warning("Please choose something answer");
            return;
        }
        const selesctedOptionKey=question.options[selectIndex].key;
        const userId=localStorage.getItem("userId");
        let newScore=score;
        if(selesctedOptionKey===question.currentAnswer){
            newScore+=1;
            set({score:newScore});
        }
        try {
            await axiosAPI.post(`/quizz/questions/submit?userId=${userId}&questionId=${question.id}&selectedOption=${selesctedOptionKey}`);
            if(currentQuestionIndex<questionData.length-1){
                set({currentQuestionIndex:currentQuestionIndex+1});
            }else{
                navigate("/score");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }
    },
    setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index })
}));

export default useQuizzStore;