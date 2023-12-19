// JavaScript source code
//alert("This alert box was called with the onload event");

let world = [];
let yesno = [];
yesno.length = 88;

const cont = new Uint8Array
 ([
     3, 2, 3, 2, 3, 3, 2, 3, 3, 6,
     3, 2, 3, 2, 2, 3, 2, 3, 2, 3,
     3, 2, 3, 3, 3, 2, 3, 3, 2, 3,
     3, 6, 3, 2, 3, 2, 2, 3, 2, 3,
     2, 3, 3, 2, 3, 2, 3, 2, 3, 3,
     2, 3, 3, 6, 3, 2, 3, 2, 2, 3,
     2, 3, 2, 3, 3, 2, 3, 2, 3, 2,
     3, 3, 2, 3, 3, 6, 3, 2, 3, 2,
     2, 3, 2, 3, 2, 3, 3, 2
   ]);

world.push(
    'У вас чаще веселое и беззаботное настроение?',
    'Вы чувствительны к оскорблениям?',
    'Бывает ли так, что у вас на глаза навертываются слезы в кино, театре, беседе?',
    'Сделав что-то, вы сомневаетесь, все ли сделано правильно и не успокаиваетесь до тех пор, пока не убедитесь еще раз в том, что все сделано правильно?',
    'В детстве вы были таким же смелым и отчаянным как ваши сверстники?',
    'Часто ли у вас меняется настроение от состояния безграничного ликования до отвращения к жизни, себе?',
    'Являетесь ли вы обычно центром внимания в обществе, компании?',
    'Бывает ли так, что вы беспричинно находитесь в таком ворчливом состоянии, что с вами лучше не разговаривать?',
    ' Вы серьезный человек?',
    'Способны ли вы восторгаться, восхищаться чем-то?',
    'Предприимчивы ли вы?',
    'Вы быстро забываете, если вас кто-то обидит?',
    'Мягкосердечны ли вы?',
    'Опуская письмо в почтовый ящик, проверяете ли вы, проводя рукой по щели, что письмо полностью упало в него?',
    'Стремитесь ли вы всегда считаться в числе лучших?',
    'Бывало ли вам страшно в детстве во время грозы или при встрече с незнакомой собакой (а может такое чувство бывает в зрелом возрасте и теперь)?',
    'Стремитесь ли вы во всем и всюду соблюдать порядок?',
    'Зависит ли ваше настроение от внешних обстоятельств?',
    'Любят ли вас ваши знакомые?',
    'Часто ли у вас бывает чувство сильного внутреннего беспокойства?',
    'У вас несколько подавленное настроение?',
    'Бывало ли у вас истерика (нервный срыв) хоть раз?',
    'Трудно ли вам долго усидеть на одном месте?',
    'Если по отношению к вам поступили несправедливо, энергично ли вы отстаиваете свои интересы?',
    'Можете ли вы зарезать курицу (овцу)?',
    'Раздражает ли вас, если долго скатерть/занавес висят неровно и вы стремитесь их поправить сразу?',
    'Вы в детстве боялись остаться один в доме?',
    'Часто ли у вас бывают колебания настроения без причин?',
    'Всегда ли вы стремитесь быть сильным работником в своей профессии?',
    'Быстро ли вы начинаете злиться/впадать в гнев?',
    'Можете ли вы быть беззаботно веселым?',
    'Бывает ли так, что ощущение полного счастья буквально пронизывает вас?',
    'Как вы думаете, получился бы из вас ведущий юмористической программы?',
    'Вы обычно высказываете свое мнение людям достаточно откровенно, прямо и недвусмысленно?',
    'Вам трудно переносить вид вашей крови? Не вызывает ли это у вас неприятных ощущений?',
    'Любите ли вы работу с высокой ответственностью?',
    'Склонны ли вы выступать в защиту лиц по отношению к которым несправедливо поступили?',
    'Вам страшно (трудно) спускаться в темный подвал?',
    'Предпочитаете ли вы такую работу, где действовать надо быстро, но требования к качеству выполнения невысокие?',
    'Общительный ли вы человек?',
    'В школе вы охотно декларировали стихи?',
    'Убегали ли вы в детстве из дома?',
    'Кажется ли вам жизнь трудной?',
    'Бывали ли так, что после конфликта (обиды) вы были до того расстроены, что идти на работу/учеб было невозможно?',
    'Можно ли сказать, что при неудаче вы теряете чувство юмора?',
    'Предприняли бы вы первые шаги к примирению, если бы вас кто-нибудь обидел?',
    'Вы очень любите животных?',
    'Возвращаетесь ли вы, чтобы убедиться, что оставили дом (место работы) в таком состоянии, что там ничего не случится?',
    'Преследует ли вас мысль иногда, что с вами (вашими близкими) может случиться что-то страшное?',
    'Считаете ли вы, что ваше настроение очень изменчиво?',
    'Трудно ли вам докладывать (выступать на сцене) перед большим количеством людей?',
    'Вы можете ударить обидчика, если он вас оскорбил?',
    'У вас очень велика потребность общения с другими людьми?',
    'Вы относитесь к тем, то при каких либо обстоятельствах впадает в глубокое отчаянье?',
    'Вам нравится работа, требующая организаторской деятельности?',
    'Настойчиво ли вы добиваетесь намеченной цели, если на пути к ней приходится преодолевать массу препятствий?',
    'Может ли трагический фильм взволновать вас так, что на глазах выступят слезы?',
    'Часто ли вам бывает трудно уснуть из-за того, что проблемы прожитого дня или будущего крутятся в голове?',
    'В школе вы иногда подсказывали своим товарищам или давали списывать?',
    'Потребуется ли вам большое напряжение воли, чтобы ночью одному пройти через кладбище?',
    'Бывает ли так, что, ложась спать в хорошем настроении вы на следующий день встаете в подавленном состоянии длящемся несколько часов?',
    'Тщательно ли вы следите за тем, чтобы каждая вещь в вашем доме была на одном и том же месте?',
    'Легко ли вы привыкаете к новым ситуациям?',
    'Бывают ли у вас головные боли?',
    'Вы часто смеетесь?',
    'Можете ли вы быть приветливыми даже с теми, кого вы явно не цените, не любите и не уважаете?',
    'Вы подвижный человек?',
    'Вы очень переживаете из-за несправедливости?',
    'Вы настолько любите природу, что можете назвать ее своим другом?',
    'Уходя их дома, ложась спать, проверяете ли вы закрыт газ, погашен свет, заперты двери?',
    'Вы очень боязливы?',
    'Изменяется ли ваше настроение при приеме алкоголя?',
    'В молодости вы охотно участвовали в кружках художественной самодеятельности?',
    'Вы расцениваете жизнь несколько пессимистично без ожидания радости?',
    'Часто ли вас тянет путешествовать?',
    'Может ли ваше настроение измениться так резко, что ваше состояние радости вдруг сменится на угрюмое и подавленное?',
    'Легко ли вам удается поднять настроение друзей в компании?',
    'Долго ли вы переживаете обиду?',
    'Переживаете ли вы длительное время горести других людей?',
    'Часто ли вы, будучи школьником, переписывали страницу вашей тетради, если случайно ставили на ней помарку?',
    'Относитесь ли вы к людям скорее с недоверием и неосторожностью, чем с доверием?',
    'Часто ли вы видите страшные сны?',
    'Бывает ли, что стоя у окна многоэтажного дома, остерегаетесь того, что можете внезапно выпасть из окна?',
    'В веселой компании вы обычно веселы?',
    'Способны ли вы отвлечься от трудных проблем, требующих решения?',
    'Вы становитесь менее сдержанным и чувствуете себя более свободно, если примите алкоголь?',
    'В беседы вы скудны на слова?',
    'Если бы вам необходимо было играть на сцене, вы смогли бы так войти в роль, чтобы позабыть о том, что это только игра?'
);

let inc = 0;

let check1, check2;

let demist = 0;     //'Демонстративность, истероидность';
let zastreg = 0;    //'Застревание, регидность';
let pedan = 0;      //'Педантичность';
let neurav = 0;     //'Неуравновешенность, возбудимость';
let giper = 0;      //'Гипертимность';
let distin = 0;     //'Дистиммичность';
let trev = 0;       //'Тревожность, боязливость';
let ciklot = 0;     //'Циклотимичность';
let afect = 0;      //'Аффективность, экзальтированность';
let amotiv = 0;       //'Эмотивность, лабильность';

let initTest = false;
let inter = false;

let timer;
let elem = document.getElementById('timer');


let car = {
    color: 'green',
    maxSpeed: 250,
    audio: {
        brand: 'Sony',
        speakers:12
    },
    getColor() {
        return this.color;
    }
};

function countRabbits() {
    for (let i = 1; i <= 1; i++) {
        alert("Кролик номер " + i);
    }
}

function editText() {
    let elem1 = document.getElementById("result");   
    let elem2 = document.getElementById("result1");
    let a = 62;
    let b = 12.3;
    elem1.innerHTML = a+b;
    elem2.innerHTML = 'Эта цифра ' + a + ' есть';
}

function cleanText() {
    let elem1 = document.getElementById("result");
    let elem2 = document.getElementById("result1");
    elem1.innerHTML = '';
    elem2.innerHTML = '';
}

function beginTest()
{
    inc = 0;

    let elem1 = document.getElementById("result");
    let elem2 = document.getElementById("result1");
    let elem3 = document.getElementById("result11");
    let elem4 = document.getElementById("result12");
    let elem5 = document.getElementById("result13");
    let elem6 = document.getElementById("result14");
    let elem7 = document.getElementById("result15");
    let elem8 = document.getElementById("result16");
    let elem9 = document.getElementById("result17");
    let elem10 = document.getElementById("result18");
    let elem11 = document.getElementById("result19");
    let elem12 = document.getElementById("result20");
    let elem13 = document.getElementById("result21");
    let elem14 = document.getElementById("result22");
    let elem15 = document.getElementById("result23");

    let elemyes = document.getElementById("yes");
    var radioButtons1 = document.getElementsByName("elemr1"); /*getElementsByName elemr1 */
    var radioButtons2 = document.getElementsByName("elemr2");

    demist = 0;
    zastreg = 0;
    pedan = 0;
    neurav = 0;
    giper = 0;
    distin = 0;
    trev = 0;
    ciklot = 0;
    afect = 0;
    amotiv = 0;

    elem1.innerHTML = inc + 1;
    elem2.innerHTML = world[inc];
    elem3.innerText = 'Демонстративность, истероидность     ' + demist;
    elem4.innerHTML = 'Застревание, регидность    ' + zastreg;
    elem5.innerHTML = 'Педантичность      ' + pedan;
    elem6.innerHTML = 'Неуравновешенность, возбудимость   ' + neurav;
    elem7.innerHTML = 'Гипертимность       ' + giper;
    elem8.innerHTML = 'Дистиммичность      ' + distin;
    elem9.innerHTML = 'Тревожность, боязливость     ' + trev;
    elem10.innerHTML = 'Циклотимичность    ' + ciklot;
    elem11.innerHTML = 'Аффективность, экзальтированность   ' + afect;
    elem12.innerHTML = 'Эмотивность, лабильность   ' + amotiv;
    elem13.innerHTML = 0;
    elem14.innerHTML = cont[inc]; //22;// cont[inc];
    elem15.innerText = 'Прохождение теста'; //22;// cont[inc];

    elem15.style.background = 'linear-gradient(to bottom, #ea3c3c, #f69d3c)';
    elem15.style.color='#eeeddde0';

    initTest = true;
}

function nextQuestion(bNext) {
    if (initTest)
    {
        //alert("Кролик номер");
        let elem1 = document.getElementById("result");
        let elem2 = document.getElementById("result1");  /*номер вопроса*/
        let elem3 = document.getElementById("result11");
        let elem4 = document.getElementById("result12");
        let elem5 = document.getElementById("result13");
        let elem6 = document.getElementById("result14");
        let elem7 = document.getElementById("result15");
        let elem8 = document.getElementById("result16");
        let elem9 = document.getElementById("result17");
        let elem10 = document.getElementById("result18");
        let elem11 = document.getElementById("result19");
        let elem12 = document.getElementById("result20");
        let elem13 = document.getElementById("result21");
        let elem14 = document.getElementById("result22");
        let elem15 = document.getElementById("result23");

        let elemyes = document.getElementById("yes");
        var radioButtons1 = document.getElementsByName("elemr1"); /*getElementsByName elemr1 */
        var radioButtons2 = document.getElementsByName("elemr2"); /*getElementsByName elemr1 */

        if (radioButtons1[0].checked == false && radioButtons2[0].checked == false ||
            radioButtons1[0].checked == true && radioButtons2[0].checked == true)
        {
            alert("Необходимо выбрать вариант ответа Да или Нет");
            bNext.style.color = 'blueviolet';
        }
        else
        {
            if (inc == 87)
            {
                elem15.style.background = 'linear-gradient(to bottom, #000000, #f69d3c)';
                elem15.style.color = 'red';
                elem15.innerText = 'Тест закончен'; //22;// cont[inc];

            }
            else
            {
                switch (inc)
                {
                    case 0:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) {yesno[inc] = 0; }
                        }
                        break;

                    case 1:
                        {

                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 2:
                        {

                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 3:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 4:
                        {
                            if (radioButtons1[0].checked) { yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { trev -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 5:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 6:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 7:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 8:
                        {
                            if (radioButtons1[0].checked) { distin += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 9:
                        {
                            if (radioButtons1[0].checked) { afect += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 10:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 11:
                        {
                            if (radioButtons2[0].checked) { yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { zastreg -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 12:
                        {
                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 13:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 14:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 15:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 16:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 17:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 18:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 19:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 20:
                        {
                            if (radioButtons1[0].checked) { distin += cont[inc]; yesno[inc] = 1;}
                            else if (radioButtons2[0].checked) { distin -= 3; yesno[inc] = 0;}
                        }
                        break;

                    case 21:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1;}
                            else if (radioButtons2[0].checked) {yesno[inc] = 0;}
                        }
                        break;

                    case 22:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1;}
                            else if (radioButtons2[0].checked) {yesno[inc] = 0;}
                        }
                        break;

                    case 23:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1;}
                            else if (radioButtons2[0].checked) {yesno[inc] = 0;}
                        }
                        break;

                    case 24:
                        {
                            if (radioButtons1[0].checked) {  yesno[inc] = 1;}
                            else if (radioButtons2[0].checked) { amotiv -= cont[inc]; yesno[inc] = 0;}
                        }
                        break;

                    case 25:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1;}
                            else if (radioButtons2[0].checked) { yesno[inc] = 0;}
                        }
                        break;

                    case 26:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1;}
                            else if (radioButtons2[0].checked) { yesno[inc] = 0;}
                        }
                        break;

                    case 27:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 28:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 29:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 30:
                        {
                            if (radioButtons2[0].checked) {  yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { distin -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 31:
                        {
                            if (radioButtons1[0].checked) { afect += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 32:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 33:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 34:
                        {
                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 35:
                        {
                            if (radioButtons2[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 36:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 37:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 38:
                        {
                            if (radioButtons1[0].checked) { yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { pedan -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 39:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 40:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 41:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 42:
                        {
                            if (radioButtons1[0].checked) { distin += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 43:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 44:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 45:
                        {
                            if (radioButtons2[0].checked) { yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { zastreg -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 46:
                        {
                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 47:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 48:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 49:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 50:
                        {
                            if (radioButtons2[0].checked) { yesno[inc] = 0; }
                            else if (radioButtons2[0].checked) { demist -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 51:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 52:
                        {
                            if (radioButtons2[0].checked) {  yesno[inc] = 0; }
                            else if (radioButtons2[0].checked) { distin -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 53:
                        {
                            if (radioButtons1[0].checked) { afect += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 54:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 55:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 56:
                        {
                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 57:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 58:
                        {
                            if (radioButtons2[0].checked) {  yesno[inc] = 0; }
                            else if (radioButtons2[0].checked) { zastreg -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 59:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 60:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 61:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 62:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 63:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 64:
                        {
                            if (radioButtons2[0].checked) { yesno[inc] = 0; }
                            else if (radioButtons2[0].checked) { distin -= cont[inc]; yesno[inc] = 0; }
                        }
                        break;

                    case 65:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 66:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;
                    case 67:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 68:
                        {
                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 69:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 70:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 71:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 72:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 73:
                        {
                            if (radioButtons1[0].checked) { distin += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 74:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 75:
                        {
                            if (radioButtons1[0].checked) { afect += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 76:
                        {
                            if (radioButtons1[0].checked) { giper += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 77:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 78:
                        {
                            if (radioButtons1[0].checked) { amotiv += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 79:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 80:
                        {
                            if (radioButtons1[0].checked) { zastreg += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 81:
                        {
                            if (radioButtons1[0].checked) { trev += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 82:
                        {
                            if (radioButtons1[0].checked) { pedan += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 83:
                        {
                            if (radioButtons1[0].checked) { ciklot += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 84:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 85:
                        {
                            if (radioButtons1[0].checked) { neurav += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 86:
                        {
                            if (radioButtons1[0].checked) { distin += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;

                    case 87:
                        {
                            if (radioButtons1[0].checked) { demist += cont[inc]; yesno[inc] = 1; }
                            else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                        }
                        break;
                }
                inc++;
            }


            elem1.innerHTML = inc + 1;    /*номер вопроса*/
            elem2.innerHTML = world[inc]; /*вопрос*/
            elem3.innerHTML = 'Демонстративность, истероидность     ' + demist;
            elem4.innerHTML = 'Застревание, регидность    ' + zastreg;
            elem5.innerHTML = 'Педантичность      ' + pedan;
            elem6.innerHTML = 'Неуравновешенность, возбудимость   ' + neurav;
            elem7.innerHTML = 'Гипертимность       ' + giper;
            elem8.innerHTML = 'Дистиммичность      ' + distin;
            elem9.innerHTML = 'Тревожность, боязливость     ' + trev;
            elem10.innerHTML = 'Циклотимичность    ' + ciklot;
            elem11.innerHTML = 'Аффективность, экзальтированность   ' + afect;
            elem12.innerHTML = 'Эмотивность, лабильность   ' + amotiv;
            elem13.innerHTML = 0;
            elem14.innerHTML = cont[inc];// cont[inc];

            bNext.style.color = 'blueviolet';

        }
        radioButtons1[0].checked = false;
        radioButtons2[0].checked = false;

    }
}

function onClik(rButon)
{
    let elem13 = document.getElementById("result21");
    var radioButtons1 = document.getElementsByName("elemr1"); 
    var radioButtons2 = document.getElementsByName("elemr2"); 

    if (radioButtons1[0].checked == true) { elem13.innerHTML = 1;}

    if (radioButtons2[0].checked == true) { elem13.innerHTML = 0; }  

    if (radioButtons1[0].checked == true && radioButtons2[0].checked == false ||
        radioButtons1[0].checked == false && radioButtons2[0].checked == true)
    {
        //alert('suchka');
        //const parrent = document.getElementById('buttens');
        let butnext = document.getElementById("butNext");
        butnext.style.color = 'aqua';/*style.background = 'color:green';*/

    }
}

function backQue() {
    //alert("Предидущий вопрос");
    let elem1 = document.getElementById("result");   /*вопрос*/
    let elem2 = document.getElementById("result1");  /*номер вопроса*/
    let elem3 = document.getElementById("result11");
    let elem4 = document.getElementById("result12");
    let elem5 = document.getElementById("result13");
    let elem6 = document.getElementById("result14");
    let elem7 = document.getElementById("result15");
    let elem8 = document.getElementById("result16");
    let elem9 = document.getElementById("result17");
    let elem10 = document.getElementById("result18");
    let elem11 = document.getElementById("result19");
    let elem12 = document.getElementById("result20");
    let elem13 = document.getElementById("result21");
    let elem14 = document.getElementById("result22")

    var radioButtons1 = document.getElementsByName("elemr1"); /*getElementsByName elemr1 */
    var radioButtons2 = document.getElementsByName("elemr2"); /*getElementsByName elemr1 */


    if (inc != 0)
    {
        inc--;
       

        switch (inc)
        {
            case 0:
                {
                    if (yesno[inc]==1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 1:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 2:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 3:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 4:
                {
                    if (yesno[inc] == 0) { trev += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 5:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 6:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 7:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 8:
                {
                    if (yesno[inc] == 1) { distin -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 9:
                {
                    if (yesno[inc] == 1) { afect -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 10:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 11:
                {
                    if (yesno[inc] == 0) { zastreg += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 12:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 13:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 14:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 15:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 16:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 17:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 18:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 19:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 20:
                {
                    if (yesno[inc] == 1) { distin -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 21:
                {
                    if(yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 22:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 23:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 24:
                {
                    if (yesno[inc] == 0) { amotiv += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 25:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 26:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 27:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 28:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 29:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 30:
                {
                    if (yesno[inc] == 0) { distin += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 31:
                {
                    if (yesno[inc] == 1) { afect -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 32:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 33:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 34:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 35:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 36:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 37:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 38:
                {
                    if (yesno[inc] == 0) { pedan += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 39:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 40:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 41:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 42:
                {
                    if (yesno[inc] == 1) { distin -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 43:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 44:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 45:
                {
                    if (yesno[inc] == 0) { zastreg += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 46:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 47:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 48:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 49:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 50:
                {
                    if (yesno[inc] == 0) { demist += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 51:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 52:
                {
                    if (yesno[inc] == 0) { distin += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 53:
                {
                    if (yesno[inc] == 1) { afect -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 54:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 55:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 56:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 57:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 58:
                {
                    if (yesno[inc] == 0) { zastreg += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 59:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 60:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 61:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 62:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 63:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 64:
                {
                    if (yesno[inc] == 0) { distin += cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 65:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 66:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;
            case 67:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 68:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 69:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 70:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 71:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 72:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 73:
                {
                    if (yesno[inc] == 1) { distin -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 74:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 75:
                {
                    if (yesno[inc] == 1) { afect -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 76:
                {
                    if (yesno[inc] == 1) { giper -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 77:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 78:
                {
                    if (yesno[inc] == 1) { amotiv -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 79:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 80:
                {
                    if (yesno[inc] == 1) { zastreg -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 81:
                {
                    if (yesno[inc] == 1) { trev -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 82:
                {
                    if (yesno[inc] == 1) { pedan -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 83:
                {
                    if (yesno[inc] == 1) { ciklot -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 84:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 85:
                {
                    if (yesno[inc] == 1) { neurav -= cont[inc]; yesno[inc] = 0; }
                }
                break;

            case 86:
                {
                    if (yesno[inc] == 1) { distin -= cont[inc]; yesno[inc] = 0; }
                    else if (radioButtons2[0].checked) { yesno[inc] = 0; }
                }
                break;

            case 87:
                {
                    if (yesno[inc] == 1) { demist -= cont[inc]; yesno[inc] = 0; }
                }
                break;
        }

        elem1.innerHTML = world[inc]; /*вопрос*/
        elem2.innerHTML = inc + 1;    /*номер вопроса*/
        elem3.innerHTML = 'Демонстративность, истероидность     ' + demist;
        elem4.innerHTML = 'Застревание, регидность    ' + zastreg;
        elem5.innerHTML = 'Педантичность      ' + pedan;
        elem6.innerHTML = 'Неуравновешенность, возбудимость   ' + neurav;
        elem7.innerHTML = 'Гипертимность       ' + giper;
        elem8.innerHTML = 'Дистиммичность      ' + distin;
        elem9.innerHTML = 'Тревожность, боязливость     ' + trev;
        elem10.innerHTML = 'Циклотимичность    ' + ciklot;
        elem11.innerHTML = 'Аффективность, экзальтированность   ' + afect;
        elem12.innerHTML = 'Эмотивность, лабильность   ' + amotiv;
        elem13.innerHTML = yesno[inc];//вариант ответа
        elem14.innerHTML = cont[inc];//коэффициент
    }
}

(function () {
    //alert('timer');
    let sec = 0;
    timer = setInterval(() => {
        elem.innerText = sec;
        sec ++;
    }, 1000)
})()