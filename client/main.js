const { text } = require("express")

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

const adviceCallback = (res) => displayAdvice(res.data);

const updateAdvice = (id, text) => {
    console.log({ id }, { text });
    axios.put(`http://localhost:4000/api/advice/${id}`, { text })
    .then(adviceCallback);
}

const postAdvice = (e) => {
    e.preventDefault();
    const text = inputText.value;
    console.log(text);

    axios.post("http://localhost:4000/api/advice/", { text })
    .then(adviceCallback);
};

function displayAdvice(arr) {
    adviceContainer.innerHTML = ``;
    for (let i = 0; i < arr.length; i++) {
        createAdvice(arr[i], i);
    }
}

function createAdvice(advice, id) {
    const adviceContainer = document.createElement("div")
    adviceContainer.classList.add("advice")
}

adviceContainer.innerHTML = `
<p class="advice-title">${advice}</p>
<div>
    <input id='text-advice' type='text'/>
    <button onclick='updateAdvice(${id})'>Update</button>
</div>
`;

fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
inputForm.addEventListener("submit", postAdvice)