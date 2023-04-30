const PMS__NAME = "박명수"

const quotes = [
    {
        quote: "배움은 누구도 챙겨주지 않고 내가 훔쳐 먹는 것이다",
        author: "배우 김태리",
    },
    {
        quote: "늦었다고 생각할 때가 늦었다",
        author: PMS__NAME,
    },
    {
        quote: "내일도 할 수 있는 일을 굳이 오늘 할 필요 없다",
        author: PMS__NAME,
    },
    {
        quote: "즐길 수 없으면 피하라",
        author: PMS__NAME,
    },
    {
        quote: "내 너 그럴 줄 알았다, 알았으면 제발 미리 말 해줘라",
        author: PMS__NAME,
    },
    {
        quote: "성공은 1% 재능과 99%의 빽",
        author: PMS__NAME,
    },
    {
        quote: "가는 말이 고우면 얕본다",
        author: PMS__NAME,
    },
    {
        quote: "참을 인 세 번이면 호구",
        author: PMS__NAME,
    },
]

const quote = document.querySelector(".main__content__random-quote > .random-quote")
const quoteAuthor = document.querySelector(".main__content__random-quote > .random-author")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = `"${todaysQuote.quote}"`
quoteAuthor.innerText = `- ${todaysQuote.author} -`
