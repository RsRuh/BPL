
//Calculating Players Cost.....

document.getElementById('playerCostBtn').addEventListener('click', function () {
    const perPlayerCost = document.getElementById('inputOfPerPlayer');
    const playersCostValue = parseFloat(perPlayerCost.value);
    if (isNaN(playersCostValue) || playersCostValue < 0) {
        alert('Please Provide A Valid Number');
        return;
    }
    const playerList = document.getElementById('player-list').childElementCount;
    const totalExpense = playersCostValue * playerList;
    const totalPlayerCostElement = document.getElementById('playerExpenses');
    totalPlayerCostElement.innerText = totalExpense;
});




// Players, Manager And Coach Cost Calculating.....

document.getElementById('totalCalculate').addEventListener('click', function () {
    const perPlayerCost = document.getElementById('inputOfPerPlayer');
    const playersCostValue = parseFloat(perPlayerCost.value);
    if (isNaN(playersCostValue) || playersCostValue < 0) {
        alert('Please Provide A Valid Number In All Input');
        return;
    }
    const playerList = document.getElementById('player-list').childElementCount;
    const totalExpense = playersCostValue * playerList;
    const totalPlayerCostElement = document.getElementById('playerExpenses');
    totalPlayerCostElement.innerText = totalExpense;


    const playerExpense = parseFloat(totalPlayerCostElement.innerText);
    const finalTotalCost = document.getElementById('finalTotal');

    const managerCost = document.getElementById('managerCost');
    const managerCostValue = parseFloat(managerCost.value);

    if (isNaN(managerCostValue) || managerCostValue < 0) {
        alert('Please Provide A Valid Number');
        return;
    }
    const coachCost = document.getElementById('coachCost');
    const coachCostValue = parseFloat(coachCost.value);

    if (isNaN(coachCostValue) || coachCostValue < 0) {
        alert('Please Provide A Valid Number');
        return;
    }
    const finalExpenses = playerExpense + managerCostValue + coachCostValue;
    finalTotalCost.innerText = finalExpenses;
});

