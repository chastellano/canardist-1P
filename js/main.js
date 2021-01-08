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
let buttColors = ['btn-primary', 'btn-secondary', 'btn-success', 'btn-danger', 'btn-warning', 'btn-info', 'btn-dark', 'btn-primary', 'btn-secondary', 'btn-success']

let identityCards = [];
let teams = {};
let missions = [];
let users = [];
let currentMission = 0;
let checkedArr = [];
let submissionArr = [];
let playerNames = ['Tom', 'Dick', 'Harry', 'Philonia', 'Rosemary', 'Bilbert', 'LongNamePerson', 'Oakar', 'Simba', 'Jabushi']

const identityDeal = document.getElementById('identityDeal');
const identityHeader = document.getElementById('identityHeader');
const identityReveal = document.getElementById('identityReveal');
const missionReveal = document.getElementById('missionReveal');
const missionDeal = document.getElementById('missionDeal');
const playersInput = document.getElementById('playersInput');
const startHide = document.getElementById('startGame');
const reloadReveal = document.getElementById('reload');
const userDiv = document.getElementById('userDiv');
const userButts = document.getElementById('userButts')
const missionStart1 = document.getElementById('missionStart1');
const missionPropose = document.getElementById('missionPropose');
const proposeModalHeader = document.getElementById('proposeModalHeader');
const executeButt = document.getElementById('execute');
const redCard = document.getElementById('redCard');
const blackCard = document.getElementById('blackCard');

let numPlayers;

function shuffle(num, arr) {
    let i, j, x;
    for (i = arr.length - 1; i; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    let randCards = arr.slice(0, num);
    return randCards;
}

function dealIdentity(team1, team2) {
    let blackCards = shuffle(team1, black);
    let redCards = shuffle(team2, red);
    identityCards = blackCards.concat(redCards);
    console.log(identityCards)
    return identityCards;
}

function missionArr() {
    missionReveal.style.display = "none";
    missionDeal.innerHTML = '';
    numPlayers = parseInt(playersInput.value);
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
    missionReveal.style.display = "block"
    missionDeal.innerHTML = missions.join(', ');
}

function showMissionStart() {
    missionStart1.style.display = 'block';
}

function players() {
    identityDeal.innerHTML = ''
    identityHeader.innerHTML = ''
    console.log('Dealing...');
    numPlayers = parseInt(playersInput.value);
    
    switch (numPlayers) {
        case 5:
            teams.black = 3
            teams.red = 2
            break;
        case 6:
            teams.black = 4
            teams.red = 2
            break;
        case 7:
            teams.black = 4
            teams.red = 3
            break;
        case 8:
            teams.black = 5
            teams.red = 3
            break;
        case 9:
            teams.black = 6
            teams.red = 3
            break;
        case 10:
            teams.black = 6
            teams.red = 4
            break;
        default:
            console.log('Between 5 and 10 players are required for the game');
            identityHeader.innerHTML = "Between 5 and 10 players are required for the game";
            identityReveal.style.display = "block";
            return;
    }

    console.log(teams);
    dealIdentity(teams.black, teams.red);
    console.log('Identity cards are: ' + identityCards);

    identityHeader.innerHTML = 'The identity cards are: ';
    dealCard(identityCards, 'identityDeal');
    identityReveal.style.display = 'block';
    startHide.style.display = 'none';
    reloadReveal.style.display = 'block';
    showMissionStart();
    missionStart1.addEventListener('click', genUserModal)
}

function newMissionButt() {

}

function genUserModal() {
    $('#proposeModal').modal('show')
    userButts.innerHTML = '';
    numPlayers = parseInt(playersInput.value);
    proposeModalHeader.innerHTML = `Choose ${missions[currentMission]} people to go on your mission:`
    for (let i = 0; i < numPlayers; i++) {
        let div = document.createElement('div');
        // div.className = 'userButtDiv';
        div.innerHTML = `
            <input type="checkbox" class="hideInput checkcheck" id="${playerNames[i]}" name="user${i+1}" value="${playerNames[i]}">
            <label class="btn ${buttColors[i]} btn-circle" for="${playerNames[i]}">${playerNames[i]}</label>
        `;
        userButts.appendChild(div);
    }

    let missionMax = parseInt(`${missions[currentMission]}`)
    let checkboxArr = document.querySelectorAll('.checkcheck');
    let checkedCount = 0
    checkedArr = []
    checkcheck();
    function checkcheck() {
        for (i = 0; i < checkboxArr.length; i++) {
            checkboxArr[i].addEventListener('change', function() {
                if (this.checked && (checkedArr.length < missionMax)) {
                    checkedArr.push(this.nextElementSibling.innerHTML);
                } else if (this.checked && (checkedArr.length === missionMax)) {
                    this.checked = false;
                    proposeModalHeader.innerHTML = `You can <strong class='text-danger'>ONLY</strong> choose ${missions[currentMission]} people:`;
                } else if (!this.checked) {
                    let index = checkedArr.indexOf(this.nextElementSibling.innerHTML)
                    checkedArr.splice(index, 1)
                }
            });
        }
    }
    missionPropose.addEventListener('click', function() {
        voteMission(checkedArr, missionMax);
    });
}

function startGame() {
    players();
    missionArr();
}

function voteMission(arr, max) {
    if (arr.length === max) {
        document.getElementById('proposedPlayers').innerHTML = ''
        for (i=0; i < arr.length; i++) {
            let div = document.createElement('div');
            // div.className = 'userButtDiv';
            div.innerHTML = `
            <input type="checkbox" class="hideInput checkcheck" id="${arr[i]}">
            <label class="btn ${buttColors[i]} btn-circle" for="${arr[i]}">${arr[i]}</label>
            `;
            document.getElementById('proposedPlayers').appendChild(div);
        }
        $(function() {
            $('#proposeModal').modal('hide');
            $('#voteModal').modal('show');
        });
        let vote;
        let voteTotal = {
            yea: 0,
            nay: 0
        };
        // document.getElementById('thumbsUp').addEventListener('click', function() {
        //     if(!this.checked) {
        //         vote = 'yea';
        //     }
        // });
        // document.getElementById('thumbsDown').addEventListener('click', function() {
        //     if(!this.checked) {
        //         vote = 'nay';
        //     }
        // });
        voteSubmit.addEventListener('click', function() {
            if ($("input[type=radio]:checked").length > 0) {
                if ($("#yes").is(":checked")) {
                    vote = 'yea'
                    voteTotal.yea += 1;
                } else if ($("#no").is(":checked")) {
                    vote = 'nay'
                    voteTotal.nay += 1;
                }
                dealMission(checkedArr)
            } else {
                $("#voteWarning").css("display","block");
            }
            // if(vote) {
            //     if (vote='yea') {
            //         voteTotal.yea += 1;
            //     } else if (vote='nay') {
            //         voteTotal.nay += 1;  
            //     }
            //     dealMission(checkedArr);
            // } else {
            //     document.getElementById('voteWarning').style.display = 'block';
            // }
        });
    } else {
        document.getElementById('proposeModalHeader').innerHTML = `You <strong class='text-danger'>MUST</strong> choose ${missions[currentMission]} people:`;
    }
}

function dealMission(arr) {
    let submission;
    let reds = shuffle(arr.length, red);
    let blacks = shuffle(arr.length, black);
    redCard.setAttribute('src', `cardsJS/cards/${reds[0]}.svg`);
    blackCard.setAttribute('src', `cardsJS/cards/${blacks[0]}.svg`);
    $('#voteModal').modal('hide');
    $('#missionModal').modal('show');
    executeButt.addEventListener('click', function() {
        if ($("input[type=radio]:checked").length > 0) {
            if ($("#pass").is(":checked")) {
                submission = 'pass';
            } else if ($("#fail").is(":checked")) {
                submission = 'fail';
            }
            $(missionModal).modal('hide');
            submissionArr.push(submission);
            resolveMission();
        } else {
            $("#executeWarning").css("display","block");
        }
    });
}

function resolveMission(arr) {
    if (submissionArr.includes('fail')) {
        console.log('Mission Fail!')
    } else {
        console.log('Mission Success!')
    }



    submissionArr = []
}

function dealCard (cardArr, elementId) {
    for (let i = 0; i < cardArr.length; i++) {
        let j = cardArr[i];
        let cardEl = document.createElement('img');
        cardEl.setAttribute('src', cards[j]);
        cardEl.setAttribute('class', 'card');
        cardEl.style.display = "inline";
        document.getElementById(elementId).appendChild(cardEl);
    }
}