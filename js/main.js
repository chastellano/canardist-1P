let cards = {
    "ah": "cardsJS/cards/AH.svg",
    "ad": "cardsJS/cards/AD.svg",
    "ac": "cardsJS/cards/AC.svg",
    "as": "cardsJS/cards/AS.svg",
    "2h": "cardsJS/cards/2H.svg",
    "2d": "cardsJS/cards/2D.svg",
    "2c": "cardsJS/cards/2C.svg",
    "2s": "cardsJS/cards/2S.svg",
    "3h": "cardsJS/cards/3H.svg",
    "3d": "cardsJS/cards/3D.svg",
    "3c": "cardsJS/cards/3C.svg",
    "3s": "cardsJS/cards/3S.svg",
    "4h": "cardsJS/cards/4H.svg",
    "4d": "cardsJS/cards/4D.svg",
    "4c": "cardsJS/cards/4C.svg",
    "4s": "cardsJS/cards/4S.svg",
    "5h": "cardsJS/cards/5H.svg",
    "5d": "cardsJS/cards/5D.svg",
    "5c": "cardsJS/cards/5C.svg",
    "5s": "cardsJS/cards/5S.svg",
    "6h": "cardsJS/cards/6H.svg",
    "6d": "cardsJS/cards/6D.svg",
    "6c": "cardsJS/cards/6C.svg",
    "6s": "cardsJS/cards/6S.svg",
    "7h": "cardsJS/cards/7H.svg",
    "7d": "cardsJS/cards/7D.svg",
    "7c": "cardsJS/cards/7C.svg",
    "7s": "cardsJS/cards/7S.svg",
    "8h": "cardsJS/cards/8H.svg",
    "8d": "cardsJS/cards/8D.svg",
    "8c": "cardsJS/cards/8C.svg",
    "8s": "cardsJS/cards/8S.svg",
    "9h": "cardsJS/cards/9H.svg",
    "9d": "cardsJS/cards/9D.svg",
    "9c": "cardsJS/cards/9C.svg",
    "9s": "cardsJS/cards/9S.svg",
    "10h": "cardsJS/cards/10H.svg",
    "10d": "cardsJS/cards/10D.svg",
    "10c": "cardsJS/cards/10C.svg",
    "10s": "cardsJS/cards/10S.svg",
    "jh": "cardsJS/cards/JH.svg",
    "jd": "cardsJS/cards/JD.svg",
    "jc": "cardsJS/cards/JC.svg",
    "js": "cardsJS/cards/JS.svg",
    "qh": "cardsJS/cards/QH.svg",
    "qd": "cardsJS/cards/QD.svg",
    "qc": "cardsJS/cards/QC.svg",
    "qs": "cardsJS/cards/QS.svg",
    "kh": "cardsJS/cards/KH.svg",
    "kd": "cardsJS/cards/KD.svg",
    "kc": "cardsJS/cards/KC.svg",
    "ks": "cardsJS/cards/KS.svg"
}

let red = ['ah', 'ad', '2h', '2d', '3h', '3d', '4h', '4d', '5h', '5d', '6h', '6d', '7h', '7d', '8h', '8d', '9h', '9d', '10h', '10d', 'jh', 'jd', 'qh', 'qd', 'kh', 'kd'];
let black = ['ac', 'as', '2c', '2s', '3c', '3s', '4c', '4s', '5c', '5s', '6c', '6s', '7c', '7s', '8c', '8s', '9c', '9s', '10c', '10s', 'jc', 'js', 'qc', 'qs', 'kc', 'ks'];
let buttColors = ['btn-green', 'btn-blue', 'btn-yellow', 'btn-red', 'btn-indigo', 'btn-brown', 'btn-orange', 'btn-violet', 'btn-beige', 'btn-aqua']

let identityCards = [];
let playerColors = {};
let teamsTemp = {};
let missions = [];
let userDivArr = [];
let currentMission = 0;
let checkedArr = [];
let submissionArr = [];
let botNames = ['Mufasa', 'Simba', 'Rafiki', 'Nala', 'Scar', 'Timon', 'Pumbaa', 'Zazu', 'Ed', 'Shenzi']

let teams = {
    red: [],
    black: []
};

let scoreboard = {
    red: 0,
    black: 0
}

let numPlayers;
let missionMax;
let checkboxArr;

const joinButt = document.getElementById('join');
const gameBody = document.getElementById('gameBody');
const nameInput = document.getElementById('nameInput');
const numPlayersButt = document.getElementById('numPlayersButt');
const playerIdentity = document.getElementById('playerIdentity');
const startWarning = document.getElementById('startWarning');
const identityDeal = document.getElementById('identityDeal');
const missionReveal = document.getElementById('missionReveal');
const missionDeal = document.getElementById('missionDeal');
const playersInput = document.getElementById('playersInput');
const startGameDiv = document.getElementById('startGame');
const reloadReveal = document.getElementById('reload');
const userDiv = document.getElementById('userDiv');
const userButts = document.getElementById('userButts')
const missionStart1 = document.getElementById('missionStart1');
const missionPropose = document.getElementById('missionPropose');
const proposedPlayers = document.getElementById('proposedPlayers');
const proposeModalHeader = document.getElementById('proposeModalHeader');
const executeButt = document.getElementById('executeButt');
const failEl = document.getElementById('redCard');
const passEl = document.getElementById('blackCard');
const startButtArr = [document.getElementById('missionStart1'), document.getElementById('missionStart2'), document.getElementById('missionStart3'), document.getElementById('missionStart4'), document.getElementById('missionStart5')]

joinButt.addEventListener('click', function() {
    nameModal();
    joinButt.style.display = 'none';
});

function nameModal () {
    $('#nameModal').modal('show');
    $('#nameModal').on('shown.bs.modal', function () {
        $('#nameInput').focus();
    });
    $('#enlistButt').click(function() {
        if (nameInput.value) {
            playerColors[nameInput.value] = {}
            $('#nameModal').modal('hide');
            startGameDiv.style.display = 'block';
            $('#playersInput').focus();
            numPlayersButt.addEventListener('click', () => startGame());
            return;
        } else {
            console.log('Enter your name');
        }
    });
}

function assignButtColor() {
    shuffle(buttColors);
    console.log(playerColors);
    for (const key in playerColors) {
        playerColors[key]['buttColor'] = dealOut(1, buttColors);
    }
}

function enlistBots() {
    numPlayers = parseInt(playersInput.value) - 1;
    shuffle(botNames)
    //enlist bots
    for (i=0; i<numPlayers; i++) {
        playerColors[botNames[i]] = {};
    }
    console.log(playerColors);
}

function assignTeams() {
    shuffle(identityCards);
    console.log(identityCards);
    console.log(playerColors);
    let i = 0;
    for (const key in playerColors) {
        let card = identityCards[i];
        playerColors[key]['card'] = card;
        if (card.includes('s') || card.includes('c')) {
            playerColors[key]['team'] = 'black';
        } else {
            playerColors[key]['team'] = 'red';
        }
        i += 1;
    }
    console.log(playerColors);
}

function playerIdentityReveal() {
    identityDeal.innerHTML = ''
    let name = nameInput.value;
    let card = playerColors[name]['card'];
    showCard([card], playerIdentity, 'identity');
    console.log('Identity cards are: ' + identityCards);
    for (key in playerColors) {
        if (key === nameInput.value) {
            continue;
        }
        card = playerColors[key]['card'];
        let identityDiv = document.createElement('div');
        identityDiv.innerHTML = `
            <p class="text-center">${key}</p>
            <img class="identityCardModal" src="cardsJS/cards/${card}.svg"/>
        `
        identityDeal.appendChild(identityDiv);
    }
}

function startGame() {
    if (players()) {
        enlistBots();
        assignButtColor();
        assignTeams();
        missionArr();
        playerIdentityReveal();
    }
}

function players() {
    console.log('Dealing...');
    numPlayers = parseInt(playersInput.value);
    
    switch (numPlayers) {
        case 5:
            teamsTemp.black = 3
            teamsTemp.red = 2
            break;
        case 6:
            teamsTemp.black = 4
            teamsTemp.red = 2
            break;
        case 7:
            teamsTemp.black = 4
            teamsTemp.red = 3
            break;
        case 8:
            teamsTemp.black = 5
            teamsTemp.red = 3
            break;
        case 9:
            teamsTemp.black = 6
            teamsTemp.red = 3
            break;
        case 10:
            teamsTemp.black = 6
            teamsTemp.red = 4
            break;
        default:
            console.log('Between 5 and 10 players are required for the game');
            startWarning.style.display = "block";
            return false;
    }

    console.log(teamsTemp);
    dealIdentity(teamsTemp.black, teamsTemp.red);
    startGameDiv.style.display = 'none';
    gameBody.style.display = 'block';
    missionStart1.addEventListener('click', firstProposal)
    return true;
}

$('#revealAll').click(function () {
    $('#identityModal').modal('show');
})

function firstProposal () {
    genUserDivArr();
    proposeModal();
}

// function genTestUserDivArr(num) {
//     for (let i = 0; i < num; i++) {
//         let j = 1;
//         let buttonDiv = document.createElement('div');
//         buttonDiv.innerHTML = `
//             <input type="checkbox" class="hideInput checkcheck" id="${playerColors[j]}" name="user${j}" value="${playerColors[j]}">
//             <label class="btn btn-circle" for="${playerColors[j]}">${playerColors[j]}</label>
//         `;
//         let label = (buttonDiv.children)[1];
//         $(label).addClass(buttColors[i]);
//         userDivArr.push(buttonDiv);
//     }
// }

function genUserDivArr() {
    let i = 0;
    for (const key in playerColors) {
        let buttonDiv = document.createElement('div');
        buttonDiv.innerHTML = `
            <input type="checkbox" class="hideInput checkcheck" id="${key}" name="user${i}" value="${key}">
            <label class="btn-circle" id="${key}Label" for="${key}">${key}</label>
        `;
        let label = (buttonDiv.children)[1];
        $(label).addClass(playerColors[key]['buttColor']);
        userDivArr.push(buttonDiv);
        i += 1;
    }
}



function missionArr() {
    numplayers = numPlayers = parseInt(playersInput.value);
    missionDeal.innerHTML = '';
    switch (numPlayers) {
        case 5:
            missions[0] = 2;
            missions[1] = 3;
            missions[2] = 2;
            missions[3] = 3;
            missions[4] = 3;
            break;
        case 6:
            missions[0] = 2;
            missions[1] = 3;
            missions[2] = 4;
            missions[3] = 3;
            missions[4] = 4;
            break;
        case 7:
            missions[0] = 2;
            missions[1] = 3;
            missions[2] = 3;
            missions[3] = 4;//***
            missions[4] = 4;
            break;
        case 8:
        case 9:
        case 10:
            missions[0] = 3;
            missions[1] = 4;
            missions[2] = 4;
            missions[3] = 5;//***
            missions[4] = 5;
            break;
        default:
            return;
    }
    missionDeal.innerHTML = missions.join(', ');
}

function proposeModal() {
    $('#proposeModal').modal('show')
    $('#userButts').empty();
    checkedArr = [];
    checkboxArr = $('#userButts .checkcheck');
    console.log($('#userButts .checkcheck'))
    missionMax = parseInt(`${missions[currentMission]}`);
    console.log(missionMax)
    console.log(`Mission: ${currentMission}, Max: ${missionMax}`)
    proposeModalHeader.innerHTML = `Choose ${missions[currentMission]} people to go on your mission:`
    for (let i=0; i < userDivArr.length; i++) {
        userButts.appendChild(userDivArr[i]);
    }
    checkboxArr = $('#userButts .checkcheck');
    console.log(checkboxArr)
    // missionMax = parseInt(`${missions[currentMission]}`);
    checkboxArr.on('click', clickCheck);
    function clickCheck() {
        if (this.checked && (checkedArr.length < missionMax)) {
            checkedArr.push(this.nextElementSibling.innerHTML);
            console.log(`Checked: ${checkedArr.length}, Max: ${missionMax}`);
        } else if (this.checked && (checkedArr.length === missionMax)) {
            this.checked = false;
            console.log(`Checked: ${checkedArr.length}, Max: ${missionMax}`);
            proposeModalHeader.innerHTML = `You can <strong class='text-danger'>ONLY</strong> choose ${missions[currentMission]} people:`;
        } else if (!this.checked) {
            let index = checkedArr.indexOf(this.nextElementSibling.innerHTML)
            checkedArr.splice(index, 1);
            console.log(`Checked: ${checkedArr.length}, Max: ${missionMax}`);
        }
    };
    
    $('#proposeEsc').click(function () {
        $('#userButts').empty();
        userDivArr = [];

    });
    $('#missionPropose').on('click', function() {
        if (checkedArr.length === missionMax) {
            voteMission(checkedArr);
            $('#proposeModal').modal('hide');
            $('#missionPropose').off('click');
            return;
        } else {
            document.getElementById('proposeModalHeader').innerHTML = `You <strong class='text-danger'>MUST</strong> choose ${missions[currentMission]} people:`;
        }
    });
}

function voteMission(arr) {
    proposedPlayers.innerHTML = ''
    for (i=0; i < arr.length; i++) {
        let name = arr[i];
        let div = document.createElement('div');
        div.innerHTML = `
        <label class="${playerColors[name]['buttColor']} btn-circle">${name}</label>
        `;
        proposedPlayers.appendChild(div);
    }

    $('#voteModal').modal('show');
    let voteTotal = {
        yea: 0,
        nay: 0
    };

    $('#voteSubmit').on('click', function() {
        if ($("#voteButts>div>input:checked").length > 0) {
            if ($("#yes").is(":checked")) {
                voteTotal.yea += 1;
            } else if ($("#no").is(":checked")) {
                voteTotal.nay += 1;
            }
            missionModal();
            console.log("red: ", red.length, "black: ", black.length);
            $('#voteSubmit').off('click');
            return;
        } else {
            $("#voteWarning").css("display","block");
        }
        
    });
}

function missionModal() {
    shuffle(red);
    shuffle(black);
    let failKey = dealOut(1, red);
    let passKey = dealOut(1, black);
    console.log("red: ", red.length, "black: ", black.length)
    failEl.setAttribute('src', `cardsJS/cards/${failKey}.svg`);
    passEl.setAttribute('src', `cardsJS/cards/${passKey}.svg`);

    $('#executeButt').on('click', function() {
        console.log('pressed')
        executeMission(failKey, passKey);
    });

    $('#voteModal').modal('hide');
    $('#missionModal').modal('show');
}

function executeMission(redCard, blackCard) {
    let submission;
    if ($("#passFailButts>div>input:checked").length > 0) {
        if ($("#pass").is(":checked")) {
            submission = 'pass';
        } else if ($("#fail").is(":checked")) {
            submission = 'fail';
        }
        $('#missionModal').modal('hide');
        dealReturn(redCard, red);
        dealReturn(blackCard, black);
        submissionArr.push(submission);
        $('#executeButt').off('click');
        resolveMission();
        return;
    } else {
        $("#executeWarning").css("display","block");
    }
}

function resolveMission() {
    let currentMissionButt = startButtArr[currentMission];
    missionStart1.removeEventListener('click', firstProposal);
    if (submissionArr.includes('fail')) {
        scoreboard.red += 1;
        currentMissionButt.innerHTML = `Mission ${currentMission + 1} Failure!`;
        currentMissionButt.classList.add('btn-danger');
        currentMissionButt.classList.remove('btn-info');
    } else {
        scoreboard.black += 1;
        currentMissionButt.innerHTML = `Mission ${currentMission + 1} Success!`;
        currentMissionButt.classList.add('btn-success');
        currentMissionButt.classList.remove('btn-info');
    }
    if ((scoreboard.red === 3) || (scoreboard.black === 3)) {
        currentMissionButt.removeEventListener('click', proposeModal);
        console.log('Game Over!');
        if (scoreboard.red > 2) {
            $('#winnerDiv h2').html('RED TEAM WINS!!!');
        } else if (scoreboard.black > 2) {
            $('#winnerDiv h2').html('BLACK TEAM WINS!!!');
        }
    } else {
        let nextMissionButt = startButtArr[currentMission + 1];
        nextMissionButt.addEventListener('click', proposeModal);
        nextMissionButt.style.display = 'block';
        currentMissionButt.removeEventListener('click', proposeModal);
        currentMission += 1;
    }
    console.log(scoreboard);
    console.log(checkedArr);
    console.log("red: ", red.length, "black: ", black.length);
    clearAllInput();
    return;
}

function clearAllInput() {
    $('input[type=checkbox]').prop('checked', false);
    $('input[type=radio]').prop('checked', false);
    $('#userButts').empty();
    $("#voteWarning").css("display","none");
    $("#executeWarning").css("display","none");
    checkedArr = [];
    submission = '';
    submissionArr = [];
}

function shuffle(arr) {
    let i, j, x;
    for (i = arr.length - 1; i; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}

function dealOut (num, arr) {
    newArr = arr.splice(0, num)
    if (num === 1) {
        return newArr[0];
    } else {
        return newArr;
    }
}

function dealReturn (item, arr) {
    arr.push(item);
}

function dealIdentity(team1, team2) {
    shuffle(black);
    let blackCards = dealOut(team1, black)
    console.log(black)
    shuffle(red);
    let redCards = dealOut(team2, red)
    console.log(red)
    identityCards = blackCards.concat(redCards);
    return identityCards;
}

function showCard (cardArr, elementId, className) {
    for (let i = 0; i < cardArr.length; i++) {
        let j = cardArr[i];
        let cardEl = document.createElement('img');
        cardEl.setAttribute('src', cards[j]);
        cardEl.setAttribute('class', className);
        cardEl.style.display = "inline";
        elementId.appendChild(cardEl);
    }
}