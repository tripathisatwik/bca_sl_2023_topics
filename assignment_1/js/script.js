const quote = [
    { author: "Albert_Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
    { author: "Maya_Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." },
    { author: "Steve_Jobs", quote: "Your time is limited, don't waste it living someone else's life." },
    { author: "Mahatma_Gandhi", quote: "You must be the change you wish to see in the world." },
    { author: "Mother_Teresa", quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier." },
    { author: "Franklin_D_Roosevelt", quote: "The only thing we have to fear is fear itself." },
    { author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing" },
    { author: "Oprah_Winfrey", quote: "The biggest adventure you can take is to live the life of your dreams." },
    { author: "Nelson_Mandela", quote: "The greatest glory in living lies not in never falling, but in rising every time we fall." },
    { author: "Coco_Chanel", quote: "The most courageous act is still to think for yourself. Aloud." },
];

const display = document.getElementById("genQuote");
const author = document.getElementById("author");
const disQuote = document.getElementById("quote");

display.addEventListener("click", () => {
    let rand = Math.floor(Math.random() * quote.length);
    data = quote[rand];
    author.innerHTML = data.author.replace("_", " ");
    disQuote.innerHTML = data.quote;
});
