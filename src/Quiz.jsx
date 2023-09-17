import React, {useState} from 'react'
import './Quiz.css'
export default function Quiz() {
	const questions = [
		{
            id:1,
            questionText: 'Which type of student loan interest rate remains fixed throughout the life of the loan?',
            answerOptions: [
                { answerText: 'Variable interest rate', isCorrect: false },
                { answerText: 'Prime interest rate', isCorrect: false },
                { answerText: 'Fixed interest rate', isCorrect: true },
                { answerText: 'APR ', isCorrect: false },
            ],
        },
        {   
            id:2,
            questionText: 'What is the main benefit of having a good credit score when applying for loans or credit cards? ',
            answerOptions: [
                { answerText: 'Lower interest rates and better loan terms', isCorrect: true },
                { answerText: 'Higher monthly payments', isCorrect: false },
                { answerText: 'No need for a co-signer', isCorrect: false },
                { answerText: 'Instant loan approval', isCorrect: false },
            ],
        },
        {
            id:3,
            questionText: 'When is it advisable to seek professional financial advice or counseling?',
            answerOptions: [
                { answerText: 'Never, as financial advisors are not helpful', isCorrect: false },
                { answerText: 'When facing significant debt or financial difficulties', isCorrect: true },
                { answerText: 'Only when you have a high income', isCorrect: false },
                { answerText: 'After achieving financial independence', isCorrect: false },
            ],
        },
        {
            id:4,
            questionText: 'What is the first step in establishing a credit history in the U.S.?',
            answerOptions: [
                { answerText: 'Applying for multiple credit cards at once', isCorrect: false },
                { answerText: 'Paying all bills in cash', isCorrect: false },
                { answerText: 'Opening a secured credit card or credit-builder loan', isCorrect: true },
                { answerText: 'Ignoring credit entirely', isCorrect: false },
],
        },
        {
            id:5,
            questionText: 'Which government agency in the U.S. oversees federal financial aid programs for international students?',
            answerOptions: [
                { answerText: 'Department of State', isCorrect: false },
                { answerText: 'Department of Treasury', isCorrect: false },
                { answerText: 'Department of Homeland Security', isCorrect: false },
                { answerText: 'Department of Education', isCorrect: true },
],
        },
        {
            id:6,
            questionText: 'Which of the following is a key principle of budgeting for financial success?',
            answerOptions: [
                { answerText: 'reating a spending plan and sticking to it', isCorrect: true },
                { answerText: 'Ignoring monthly bills', isCorrect: false },
                { answerText: 'Spending without tracking expenses y', isCorrect: false },
                { answerText: 'Living beyond your means', isCorrect: false },
            ],
        },
        {
            id:7,
questionText: 'What is the primary advantage of applying for international student loans directly through your educational institution?',
            answerOptions: [
                { answerText: 'Lower interest rates', isCorrect: false },
                { answerText: 'No requirement for a co-signer', isCorrect: false },
                { answerText: 'Streamlined application process', isCorrect: true },
                { answerText: 'Access to international banking services', isCorrect: false },
            ],
        },
        {
            id:8,
questionText: 'What is an alternative funding source that does not require repayment and is often awarded based on academic achievement?',
            answerOptions: [
                { answerText: 'Scholarships', isCorrect: true },
                { answerText: 'Personal loans', isCorrect: false },
                { answerText: 'Credit cards', isCorrect: false },
                { answerText: 'Payday loans', isCorrect: false },
            ],
        },
        {
            id:9,
questionText: 'What is the purpose of a co-signer on an international student loan?',
            answerOptions: [
                { answerText: 'To borrow money from the student', isCorrect: false },
                { answerText: 'To provide moral support ', isCorrect: false },
                { answerText: 'To repay the loan if the student defaults', isCorrect: true },
                { answerText: 'To tutor the student', isCorrect: false },
            ],
        },
        {
            id:10,
questionText: 'What is the term for the period during which international students are not required to make loan payments and interest does not accrue?',
            answerOptions: [
                { answerText: 'Grace period', isCorrect: true },
                { answerText: 'Interest period', isCorrect: false },
                { answerText: 'Repayment period', isCorrect: false },
                { answerText: 'Deferment period', isCorrect: false },
            ],
        },
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
        <div>
            <center><h1>Try a fun quiz to test your financial literacy</h1></center>
        <div className='Quizcontainer'>
            <div className='app'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}!
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
        </div>
	);
}