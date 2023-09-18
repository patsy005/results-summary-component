const getData = async function () {
	// const data = await fetch('../../data.json')
	// .then(res => res.json())
	// .then(data => console.log(data))
	// console.log(data)

	try {
		const req = await fetch('../../data.json')
		const data = await req.json()
		getScores(data)
		calcTotalScore(data)
	} catch (err) {
		console.log(err)
	}
}

const getScores = function (data) {
	const scoresEl = document.querySelector('.component__summary')
	const scores = data

	for (const score of scores) {
		const html = `
        <div class="component__summary-box">
            <div class="skill">
                <img src="./src/img/icon-${score.category}.svg" alt="" />
                <p>${score.category}</p>
            </div>
            <p class="score">${score.score} <span> / 100</span></p>
        </div>

        `
		scoresEl.insertAdjacentHTML('beforeend', html)
	}

	const btn = `<button class="btn">Continue</button>`
	scoresEl.insertAdjacentHTML('beforeend', btn)
}

const calcTotalScore = function (score) {
	const scoreEl = document.querySelector('.component__result-circle .score')
	const arr = []

	for (const s of score) {
		arr.push(s.score)
	}
	const sum = arr.reduce((acc, cur) => acc + cur / 4, 0)
	!sum ? (scoreEl.textContent = '') : (scoreEl.textContent = sum.toFixed(0))
}

getData()
