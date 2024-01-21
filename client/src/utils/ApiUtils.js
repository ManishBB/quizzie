import axios from "axios";

export const getQuiz = async () => {
    try {
      const response = await axios.get('/api/quiz');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch quiz');
    }
  };
  
  export const createQuiz = async (quizData) => {
    try {
      const response = await axios.post('/api/quiz', quizData);
      return response.data;
    } catch (error) {
      throw new Error('Failed to create quiz');
    }
};


const QuizPage = () => {
    const [quiz, setQuiz] = useState(null);
  
    useEffect(() => {
      const fetchQuiz = async () => {
        try {
          const quizData = await api.getQuiz();
          setQuiz(quizData);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchQuiz();
    }, []);
  
    // Rest of the component code
  };


  const fetchQuiz = async () => {
    try {
      const quizData = await api.getQuiz();
      setQuiz(quizData);
      dispatch(updateQuiz(quizData)); // Dispatch the updated quiz data to the Redux store
    } catch (error) {
      console.error(error);
    }
  };

  const postData = async (data) => {
    try {
      const response = await axios.post('/api/endpoint', data, {
        headers: {
          'Authorization': `Bearer ${getAccessTokenFromCookies()}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to post data');
    }
  };
  
  const getAccessTokenFromCookies = () => {
    // Implement your logic to retrieve the access token from cookies
    // and return it here
  };
  