
//calculating players cost
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




