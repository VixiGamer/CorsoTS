//! S4 - L52 a 57

type Data = {
    initialAmount: number,
    anualContribution: number,
    expectedReturn: number,
    duration: number
}

type InvestementResult = {
    year: string | number
    totalAmount: number
    totalContributions: number
    totalInterestEarned: number
}

type CalculationResult = InvestementResult[] | string

function calculatInvestement(data: Data): CalculationResult {
    const { initialAmount, anualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) "Initial amount must be at least 0!"
    if (duration <= 0) "No valid amount of years provided!"
    if (expectedReturn < 0) "The Expected return must be at leat 1!"
    
    let total = initialAmount
    let totalContributions = 0
    let totalInterestEarned = 0
    const anualResults: InvestementResult[] = []

    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn)
        totalInterestEarned = total - totalContributions - initialAmount
        totalContributions = totalContributions + anualContribution
        total = total + anualContribution

        anualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalContributions,
            totalInterestEarned
        })
    }
    return anualResults
}

function printResults(results: CalculationResult) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }

    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total interest earned: ${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log(`------------------------------`);
    }
}

const invest1: Data = {
    initialAmount: 100,
    anualContribution: 600,
    expectedReturn: 0.08,
    duration: 2
}

const results = calculatInvestement(invest1)

printResults(results)