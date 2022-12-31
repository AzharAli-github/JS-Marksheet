let toDoName = document.querySelector('#toDoName');
let toDoFather = document.querySelector('#toDoFather');
let toDodob = document.querySelector('#toDodob');
let toDoAddress = document.querySelector('#toDoAddress');
let toDoQualf = document.querySelector('#toDoQualf');
let toDoEnglish = document.querySelector('#toDoEnglish');
let toDoMaths = document.querySelector('#toDoMaths');
let toDoUrdu = document.querySelector('#toDoUrdu');
let toDoIslamiat = document.querySelector('#toDoIslamiat');
let toDoScience = document.querySelector('#toDoScience');
let toDoPak = document.querySelector('#toDoPak');
let toDoSubmit = document.querySelector('#toDoSubmit');
let detail = document.querySelector('#detail');
let tableOne = document.querySelector('#tableOne');
let tableTwo = document.querySelector('#tableTwo');
let tableThree = document.querySelector('#tableThree');
let tableFour = document.querySelector('#tableFour');
let tableFive = document.querySelector('#tableFive');
let tableSix = document.querySelector('#tableSix');
let table = document.querySelector('#table');
let SectionTwo = document.querySelector('#SectionTwo');
let tableTotal = document.querySelector('#tableTotal');
let lastLine = document.querySelector('#lastLine');
let formName = document.querySelector('#form-name')
let errorOne = document.querySelector('#error1');
let messageOne = document.querySelector('#message1');
let formFather = document.querySelector('#form-father')
let errorTwo = document.querySelector('#error2');
let messageTwo = document.querySelector('#message2');
let formDob = document.querySelector('#form-dob')
let errorThree = document.querySelector('#error3');
let messageThree = document.querySelector('#message3');
let formAddress = document.querySelector('#form-address')
let errorFour = document.querySelector('#error4');
let messageFour = document.querySelector('#message4');
let formQualf = document.querySelector('#form-qualf')
let errorFive = document.querySelector('#error5');
let messageFive = document.querySelector('#message5');

// console.log(name + father + dob + address + qualification + English + Maths + Urdu + Islamiat + Science + Pak + Submit);

toDoSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if ((toDoName.value == "") && (toDoFather.value == "") && (toDodob.value == "") && (toDoAddress.value == "") && (toDoQualf.value == "")) {
        errorOne.classList.add('error');
        messageOne.classList.add('message');

        errorTwo.classList.add('error');
        messageTwo.classList.add('message');

        errorThree.classList.add('error');
        messageThree.classList.add('message');

        errorFour.classList.add('error');
        messageFour.classList.add('message');

        errorFive.classList.add('error');
        messageFive.classList.add('message');
    } else if ((toDoFather.value == "") && (toDodob.value == "") && (toDoAddress.value == "") && (toDoQualf.value == "")) {
        errorOne.classList.remove('error');
        messageOne.classList.remove('message');

        errorTwo.classList.add('error');
        messageTwo.classList.add('message');

        errorThree.classList.add('error');
        messageThree.classList.add('message');

        errorFour.classList.add('error');
        messageFour.classList.add('message');

        errorFive.classList.add('error');
        messageFive.classList.add('message');
        formName.classList.add('success');
    } else if ((toDodob.value == "") && (toDoAddress.value == "") && (toDoQualf.value == "")) {
        errorOne.classList.remove('error');
        messageOne.classList.remove('message');

        errorTwo.classList.remove('error');
        messageTwo.classList.remove('message');

        errorThree.classList.add('error');
        messageThree.classList.add('message');

        errorFour.classList.add('error');
        messageFour.classList.add('message');

        errorFive.classList.add('error');
        messageFive.classList.add('message');
        formName.classList.add('success');
        formFather.classList.add('success');
    } else if ((toDoAddress.value == "") && (toDoQualf.value == "")) {
        errorOne.classList.remove('error');
        messageOne.classList.remove('message');

        errorTwo.classList.remove('error');
        messageTwo.classList.remove('message');

        errorThree.classList.remove('error');
        messageThree.classList.remove('message');

        errorFour.classList.add('error');
        messageFour.classList.add('message');

        errorFive.classList.add('error');
        messageFive.classList.add('message');
        formName.classList.add('success');
        formFather.classList.add('success');
        formDob.classList.add('success');
    } else if ((toDoQualf.value == "")) {
        errorOne.classList.remove('error');
        messageOne.classList.remove('message');

        errorTwo.classList.remove('error');
        messageTwo.classList.remove('message');

        errorThree.classList.remove('error');
        messageThree.classList.remove('message');

        errorFour.classList.remove('error');
        messageFour.classList.remove('message');

        errorFive.classList.add('error');
        messageFive.classList.add('message');
        formName.classList.add('success');
        formFather.classList.add('success');
        formDob.classList.add('success');
        formAddress.classList.add('success');
    } else {
        errorOne.classList.remove('error');
        messageOne.classList.remove('message');
        errorTwo.classList.remove('error');
        messageTwo.classList.remove('message');
        errorThree.classList.remove('error');
        messageThree.classList.remove('message');
        errorFour.classList.remove('error');
        messageFour.classList.remove('message');
        errorFive.classList.remove('error');
        messageFive.classList.remove('message');
        formName.classList.add('success');
        formFather.classList.add('success');
        formDob.classList.add('success');
        formAddress.classList.add('success');
        formQualf.classList.add('success');
        SectionTwo.classList.add('secTwo');
        document.getElementById('detail').innerHTML = `
        <div style="text-align: center; margin: 80px">
            <img src="images/logo.png">
        </div>
        <div class="fullDetail">
        <div class="detailOne">
            <h2>Name:  ${toDoName.value} </h2>
            <h2>Father Name:  ${toDoFather.value} </h2>
            <h2>Date of Birth:  ${toDodob.value} </h2>
            <h2>Address:  ${toDoAddress.value} </h2>
            <h2>Qualification:  ${toDoQualf.value} </h2>
        </div>
        <div class="detailTwo">
            <img src="images/img1.jpg" alt="">
        </div>
    </div>


        `

        // const createHeader = document.createElement('h2');
        // const firstHeader = toDoName.value;
        // createHeader.innerHTML = firstHeader;
        // detail.appendChild(createHeader);
        // createHeader.appendChild(firstHeader);

        // const creatTableRow = document.createElement('tr');


        const RowName = toDoName.value;
        const RowFather = toDoFather.value;
        const RowEnglish = Number(toDoEnglish.value);
        const totalMarks = 100;


        const creatTableData1 = document.createElement('td');
        const creatTableData2 = document.createElement('td');


        creatTableData1.innerHTML = totalMarks;
        creatTableData2.innerHTML = RowEnglish;

        const RowMaths = Number(toDoMaths.value);

        const creatTableData3 = document.createElement('td');
        const creatTableData4 = document.createElement('td');


        creatTableData3.innerHTML = totalMarks;
        creatTableData4.innerHTML = RowMaths;

        const RowUrdu = Number(toDoUrdu.value);

        const creatTableData5 = document.createElement('td');
        const creatTableData6 = document.createElement('td');


        creatTableData5.innerHTML = totalMarks;
        creatTableData6.innerHTML = RowUrdu;

        const RowIslamiat = Number(toDoIslamiat.value);

        const creatTableData7 = document.createElement('td');
        const creatTableData8 = document.createElement('td');


        creatTableData7.innerHTML = totalMarks;
        creatTableData8.innerHTML = RowIslamiat;

        const RowScience = Number(toDoScience.value);

        const creatTableData9 = document.createElement('td');
        const creatTableData10 = document.createElement('td');


        creatTableData9.innerHTML = totalMarks;
        creatTableData10.innerHTML = RowScience;

        const RowPak = Number(toDoPak.value);

        const creatTableData11 = document.createElement('td');
        const creatTableData12 = document.createElement('td');


        creatTableData11.innerHTML = totalMarks;
        creatTableData12.innerHTML = RowPak;

        let totalPercent = (RowEnglish + RowMaths + RowIslamiat + RowPak + RowUrdu + RowScience) / 600 * 100;

        let tableTot = totalPercent;

        const RowTotal = tableTot;

        const creatTableData13 = document.createElement('td');
        const creatTableData14 = document.createElement('td');


        creatTableData13.innerHTML = "Percentage";
        creatTableData14.innerHTML = RowTotal;




        if (toDoName.value == "" && toDoFather.value == "" && toDoEnglish.value == "") {

        } else {
            // table.appendChild(creatTableRow);
            tableOne.appendChild(creatTableData1);
            tableOne.appendChild(creatTableData2);

            tableTwo.appendChild(creatTableData3);
            tableTwo.appendChild(creatTableData4);

            tableThree.appendChild(creatTableData5);
            tableThree.appendChild(creatTableData6);

            tableFour.appendChild(creatTableData7);
            tableFour.appendChild(creatTableData8);

            tableFive.appendChild(creatTableData9);
            tableFive.appendChild(creatTableData10);

            tableSix.appendChild(creatTableData11);
            tableSix.appendChild(creatTableData12);

            tableSix.appendChild(creatTableData11);
            tableSix.appendChild(creatTableData12);

            tableTotal.appendChild(creatTableData13);
            tableTotal.appendChild(creatTableData14);
            // creatTableData.appendChild(RowName);
        }


        const creatTableData16 = document.createElement('li');
        const creatTableData17 = document.createElement('li');
        const creatTableData18 = document.createElement('li');
        const creatTableData19 = document.createElement('li');
        const creatTableData20 = document.createElement('li');
        const creatTableData21 = document.createElement('li');
        const creatTableData22 = document.createElement('li');

        creatTableData16.innerHTML = "Sorry you didn't Passed";
        creatTableData17.innerHTML = "You are placed in Grade D";
        creatTableData18.innerHTML = "You are placed in Grade C";
        creatTableData19.innerHTML = "You are placed in Grade B";
        creatTableData20.innerHTML = "You are placed in Grade A";
        creatTableData21.innerHTML = "You are placed in Grade A+";
        creatTableData22.innerHTML = "Number Does Not Exist";

        if (RowTotal <= 40) {
            lastLine.appendChild(creatTableData16);
        } else if (RowTotal > 40 && RowTotal < 50) {
            lastLine.appendChild(creatTableData17);
        } else if (RowTotal > 50 && RowTotal < 60) {
            lastLine.appendChild(creatTableData118);
        } else if (RowTotal > 60 && RowTotal < 70) {
            lastLine.appendChild(creatTableData19);
        } else if (RowTotal > 70 && RowTotal < 80) {
            lastLine.appendChild(creatTableData20);
        } else if (RowTotal > 80 && RowTotal < 100) {
            lastLine.appendChild(creatTableData21);
        } else {
            lastLine.appendChild(creatTableData22);
        }
    }

})