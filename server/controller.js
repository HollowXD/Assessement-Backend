let advice = [
    "Stay on the task at hand.",
    "Keep your head up.",
    "Success doesn't come without trial."
];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Chance favors those in motion.", "Bide your time, for success is near.", "Every flower blooms in its own sweet time.", "Don't just think, act!", "Smile when you are ready."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    postAdvice: (req, res) => {
        const { text } = req.body;
        console.log(text);
        advice.push(text);
        res.status(200).send(advice);
    },
}