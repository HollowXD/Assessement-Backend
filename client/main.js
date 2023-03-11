const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const inputText = document.getElementById('input-text')
const inputForm = document.getElementById('input-form')
const adviceContainer = document.getElementById('adviceContainer')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const postAdvice = (e) => {
    e.preventDefault();
    const text = inputText.value;
    console.log(text);

    axios.post("http://localhost:4000/api/advice/", { text }).then((res) => {
        createElement(res.data);
    });
};

const createElement = (arr) => {
    arr.forEach(e => {
        const element = document.createElement('div')
        element.value = e
    })
};

fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
inputForm.addEventListener("submit", postAdvice)