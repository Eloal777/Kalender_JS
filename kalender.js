window.onload = function () { //Hinweis dass erst gewartet werden soll bis die Seite geladen ist.
	updateKalender(new Date(2023,9,1));
};



function updateKalender(nDate) {   //Hauptfunktion in der die meisten Variablen stehen
	let date = nDate; //Aktuelles Datum mit Uhrzeit 
	let dateD = date.getDate(); // Heutiges Datum
	let weekdayD = date.getDay(); //wochentag Nummer
	let weekdayGerman = getWeekDayNameGerman(weekdayD); //Wochentag auf Deutsch in String, Funktion ist definiert unt ist weiter unten im Code
	console.log(weekdayGerman); //Konsole ausgabe
	let startDate = new Date(date.getFullYear(), 0, 1); //Startdtatum der Berechnung
	let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000)); //Aktuelles Datum minus Startdatum
	console.log(days + 1);
	let weekNumber = Math.ceil(days / 7); //Wochennummer = Mathezeile (days und dann durch 7)
	let monthD = date.getMonth(); //Aktueller Monat als Zahl
	let monthsInGerman = getMonthsInGerman(monthD); //Monatsname auf Deutsch in String
	console.log(monthsInGerman); // Konsolen ausgabe Monatsname
	let year = date.getFullYear(); //Aktuelles Jahr
	let datum = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear(); //Datum Tag, Monat, Jahr
	let dHowManyWeekday = getDHowManyWeekday(dateD); // Eine Funktion ist dafür definiert und gibt aus wievielte Woche im Monat wir haben
	let holidaysList = getHolidayArrayHessen(date); // Eine Funktion die die Feiertage in Hessen berechnet und Anzeigt
	let holidayYesNoD = isDateHoliday(date, holidaysList); // Eine funktion die nachschaut ob heute ein feiertag ist
	document.getElementById("calendar").innerHTML = getCalendarForHTML(date);

	//*Consolen ausgaben
	console.log(dHowManyWeekday); // Konsole ausabe wievielte Woche im Monat
	console.log("hololidayYesNoD: " + holidayYesNoD) // Konsole Befehle die ausgeben wie in diesem Fall mit hilfe der Funktion holidayYesNoD ob es ein Feiertag ist oder nicht
	console.log('date: ' + date);
	console.log('weekdayD:' + date.getDay());
	console.log('Week number of: ' + date + "is: " + weekNumber);
	console.log('monthD:' + monthD);
	console.log('year:' + date.getFullYear());
	console.log('holidayYesNoD:');

	let kalenderAufbauHtml = getCalendarForHTML(date); // Eine Variable für die Funktion die den ganzen Kalendr in HTML aufbaut. 
	//!In dieser Zeile ist der Kalender
	document.getElementById('calendar').innerHTML = kalenderAufbauHtml;//Im Span bereich im HTML wird dieser bereich mit der Variablen kalenderAufbauHtml gefüllt und ausgegeben. 
	// *Ersetzen in HTML der Span bereiche

	document.getElementById("infotext_year").innerHTML = year;

	document.getElementById("infotext_weekday").innerHTML = dHowManyWeekday;

	document.getElementById("infotext_date").innerHTML = datum;

	document.getElementsByClassName("infotext_holidays").innerHTML = holidayYesNoD;

	document.getElementById("infotext_monthd").innerHTML = dateD + "." + (monthD + 1); // Zeigt im Text den aktuellen Tag und Monat

	document.getElementById("alles").innerHTML = dateD + "." + monthsInGerman + "." + year; // Zeigt im Text den aktuellen Tag und Monat

	Array.from(document.getElementsByClassName("days")).forEach(element => {
		element.innerHTML = weekdayGerman;// Ersetzen in HTML von mehreren Elementen mit hilfe von class id
	});

	function getHolidayinfoForHTML(holidayYesNoD) {  // Funktion die vergleicht mit einer if Schleife ob heute ein Feiertag ist Wahr oder Falsch

		if (holidayYesNoD == true) {
			return "Heute ist ein Feiertag."

		}

		else return "Heute ist kein Feiertag."
	}





	// document.getElementById("buttonMiddle").innerHTML = dateD + ". " + monthsInGerman + " "+ year ;
	document.getElementById("middle").innerHTML = `${dateD}. ${monthsInGerman} ${year}`;

	// document.getElementById("field2").innerHTML = weekdayGerman;

	document.getElementById("holidayInfo").innerHTML = getHolidayinfoForHTML(holidayYesNoD);

	// document.getElementById("middle").innerHTML = datum;
	// let calendarHTML = calendarHTML();
	// document.getElementById("middle").innerHTML = htmlTabelle;
	//let getWeekdayShortGerman[];


}
function getDHowManyWeekday(dateD) { //  Funktion die zurückgibt wievielte Woche des Monats wir aktuell haben im Monat 1-5
	let howManyWeekDay;
	if (dateD < 8) {
		howManyWeekDay = "erste"
	}
	else if (dateD < 15) {
		howManyWeekDay = "zweite"
	}
	else if (dateD < 22) {
		howManyWeekDay = "dritte"
	}
	else if (dateD < 29) {
		howManyWeekDay = "vierte"
	}
	else howManyWeekDay = "fünfte"
	return howManyWeekDay;
}


function getMonthsInGerman(monthD) {
	// let getMonatsName; Gibt den Monatsname per Funktion wieder aufgrund von Index positionen im Array.
	let monthsNamesGerman = ["Januar",
		"Februar",
		"März",
		"April",
		"Mai",
		"Juni",
		"Juli",
		"August",
		"September",
		"Oktober",
		"November",
		"Dezember"];

	return monthsNamesGerman[monthD];
}
function getWeekDayNameGerman(weekdayD) {  //Deutsche Wochentagenamen vollbenennung
	let weekdayGerman;
	if (weekdayD == 0) {
		weekdayGerman = "Sonntag"
	}
	if (weekdayD == 1) {
		weekdayGerman = "Montag"
	}
	if (weekdayD == 2) {
		weekdayGerman = "Dienstag"
	}
	if (weekdayD == 3) {
		weekdayGerman = "Mittwoch"
	}
	if (weekdayD == 4) {
		weekdayGerman = "Donnerstag"
	}
	if (weekdayD == 5) {
		weekdayGerman = "Freitag"
	}
	if (weekdayD == 6) {
		weekdayGerman = "Samstag"
	}
	return weekdayGerman;
}

function getWeekdayShortGerman(weekdayIndex) {  // Deutsche Wochentage kurzfassung
	let arr = ["so", "mo", "di", "mi", "do", "fr", "sa", "so"];
	return arr[weekdayIndex];
}

function isDateHoliday(date, holidaysList) {  //Funktion die vergleicht mit einer for Schleife ist heute Feiertag.

	let output = false;

	for (let I = 0; I < holidaysList.length; I++) {

		if (date.getTime() == holidaysList[I]) {

			output = true;
		}
	}
	return output;
}

function getHolidayArrayHessen(date) { // Hessische Feiertage
	let year = date.getFullYear();
	let array = [];
	array.push(new Date(year - 1, 11, 25).getTime()); // 1. Weihnachtstag Vorjahr
	array.push(new Date(year - 1, 11, 26).getTime()); // 2. Weihnachtstag Vorjahr
	array.push(new Date(year, 0, 1).getTime()); // Neujahr
	array.push(new Date(year, 4, 1).getTime()); // Tag der Arbeit
	array.push(new Date(year, 9, 3).getTime()); // Tag der Dt. Einheit
	array.push(new Date(year, 11, 25).getTime()); // 1. Weihnachtstag
	array.push(new Date(year, 11, 26).getTime()); // 2. Weihnachtstag
	array.push(new Date(year + 1, 0, 1).getTime()); // Neujahr nächstes Jahr
	let osterSonntag = getEasterSunday(year);
	array.push(osterSonntag.getTime());
	let osterMontag = new Date(year, osterSonntag.getMonth(), osterSonntag.getDate() + 1);
	array.push(osterMontag.getTime());
	let christiHimmelfahrt = new Date(year, osterSonntag.getMonth(), osterSonntag.getDate() + 39);
	array.push(christiHimmelfahrt.getTime());
	let pfingstMontag = new Date(year, osterSonntag.getMonth(), osterSonntag.getDate() + 50);
	array.push(pfingstMontag.getTime());
	let fronLeichnam = new Date(year, osterSonntag.getMonth(), osterSonntag.getDate() + 60);
	array.push(fronLeichnam.getTime());
	return array;
}

// calculates the easter sunday of a year
// no idea how it works, but it works
function getEasterSunday(year) {
	const a = year % 19;
	const b = year % 4;
	const c = year % 7;
	const k = Math.floor(year / 100);
	const p = Math.floor((13 + 8 * k) / 25);
	const q = Math.floor(k / 4);
	const M = (15 - p + k - q) % 30;
	const N = (4 + k - q) % 7;
	const d = (19 * a + M) % 30;
	const e = (2 * b + 4 * c + 6 * d + N) % 7;

	let day;
	let month;

	if (d + e > 9) {
		day = d + e - 9;
		month = 4; // April
	} else {
		day = d + e + 22;
		month = 3; // March
	}

	// Das Datum als neues Date-Objekt erstellen und zurückgeben
	let easterSundayDate = new Date(year, month - 1, day);
	return easterSundayDate;
}


// Aufgabe für Montag

function getCalendarForHTML(date,) {
	let html = '<table id="kalender">';
	let cssClass = '<#kalender>';
	html += '<thead>';
	html += '<tr>';
	html += '<div id="MonatHeader">';
	html += '<th colspan="8">';
	html += '<button id ="left" button onclick="myFunction()">⇦ Letzter Monat</button>';
	html += `<button id ="middle" button onclick = "isFeiertag(3)"> ${getMonthsInGerman(date.getMonth())} </button>`;
	html += '<button id="right" button onclick="myFunction()"><span id = "nextMonth">Nächster Monat⇨</span></button>';
	// html += '<th class="tage">Kw &ensp; </th>';
	html += '</div>';
	html += '</th>';
	html += '</tr>';
	html += '</thead>';

	html += '<tr id="header1">';
	html += '<th class="tage">Mo &ensp; </th>';
	html += '<th class="tage">Di &ensp; </th>';
	html += '<th class="tage">Mi &ensp; </th>';
	html += '<th class="tage">Do &ensp; </th>';
	html += '<th class="tage">Fr &ensp; </th>';
	html += '<th class="we1">Sa</th>';
	html += '<th class="we">So</th>';
	html += '</tr>'
	html += '<tbody>';











	let monatserste = new Date(date.getFullYear(), date.getMonth(), 1);
	let wochentagVomMonatsErsten = monatserste.getDay(); // 2 [0-6]
	let tageausVormonatZuzeichnen = wochentagVomMonatsErsten - 1;
	if (tageausVormonatZuzeichnen == -1) {
		tageausVormonatZuzeichnen = 6;
	}
	// Der nullte einses Monats ist der letzte Tag des vormonats bei Javascript
	let ersterTagderTabelle = new Date(date.getFullYear(), date.getMonth(), 1 - tageausVormonatZuzeichnen);

	let days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // Letzter des Monats berechnung

	// Tag 1 der Tabelle beziehungsweise Tage vor neuem Monat 
	for (let i = tageausVormonatZuzeichnen; i > 0; i--) {
		let day = new Date(date.getFullYear(), date.getMonth(), 1 - i);
		if (day.getDate() == 1) {
			html += '<tr>';
		}

		html += '<td class = "wochentage">';
		html += day.getDate();
		html += '</td>';
		// tempDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() + 1);

		if (day.getDay() == 0) {
			html += '</tr>';
		}
	}


	// Tage der Tabelle 1-31 ;
	for (let i = 1; i <= days; i++) {
		let datum = new Date(date.getFullYear(), date.getMonth(), i);
		if (datum.getDay() == 1) {
			html += '<tr>';
		}


		html += '<td class = "wochentage">';
		html += i;
		html += '</td>';
		// tempDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() + 1);
		if (datum.getDay() == 0) {
			html += '</tr>';
		}
	}


let wochenTag = date.getDay();	
// for (let i = wochenTag; i < 7; i++) {
// 		if (i == 1) {
// 			html += '<tr>';
// 		}
// 						html += '<td class = "wochentage">';
// 						html += (i-wochenTag +1)
// 						html += "</td>";

// 		if (i == 0) {
// 			html += '</tr>';
// 		}
// 	}

let lastWeekdayThisMonth = new Date(date.getFullYear(), date.getMonth()+ 1, 0).getDay();
let daysToDrawAfter = (7 - lastWeekdayThisMonth) % 7;
let day = date.getDate();

for (let i = 1; i <= + daysToDrawAfter; i++) {
	
	html += '<td class = "wochentage">';
	html += i;
	html += "</td>";
}
html += '</tr>';

html += '</tbody>'
html += '</table>';
return html;
}































// 	function createCalender(elem, year, month){
// 	elem = document.querySelector(elem)



// let mon = month - 1;
// let d = new Date(year, mon);


// for (let i =0; i>getDay(d); i++){
// 	html += "<td></td>"  
// }

// while (d.getMonth() == mon){
// 		html += "<td>" + d.getDate() + "</td>"
// 	if (getDay(d) % 7 == 6){
// 		html += "</tr><tr>"
// 	}
// 	d.setDate(d.getDate() +1)

// }


// 	if(getDay(d) != 0) {
// 		for (let i = getDay; i<7; i++){
// 			html += "<td></td>";  
// 		}

// 	}
// 		html += "</tr>";


// function getDay(date){
// 	let day = date.getDay();
// 	if(day == 0) day = 7;
// 	return day-1;
// }
// // createCalendar("body",2020,7)
// }








	// for (let i = 0; i < 3; i++) {
	// 	if (lastOfMonth == 1) {
	// 		html += '<tr>';
	// 	}
	// 					html += '<td class = "wochentage">';
	// 					html += lastOfMonth;
	// 					html += "</td>";

	// 	if (lastOfMonth == 1) {
	// 		html += '</tr>';
	// 	}
	// }










	// html += '<tr class="kalenderblatt">';
	// html += '<td class="wzahl">31</td>';
	// html += '<td class="ausmonat">31</td>';
	// html += '<td class="wochentage">01</td>';
	// html += '<td class="wochentage">02</td>';
	// html += '<td class="wochentage">03</td>';
	// html += '<td class="wochentage">04</td>';
	// html += '<td class="samstag wejuli">05</td>';
	// html += '<td class="sonntag wejuli">06</td>';
	// html += '</tr>';
	// html += '<tr class="kalenderblatt">';
	// html += '<td class="wzahl">32</td>';
	// html += '<td class="wochentage">07</td>';
	// html += '<td class="wochentage">08</td>';
	// html += '<td class="wochentage">09</td>';
	// html += '<td class="wochentage">10</td>';
	// html += '<td class="wochentage">11</td>';
	// html += '<td class="samstag wejuli">12</td>';
	// html += '<td class="sonntag wejuli">13</td>';
	// html += '</tr>';
	// html += '<tr class="kalenderblatt">';
	// html += '<td class="wzahl">33</td>';
	// html += '<td class="wochentage">14</td>';
	// html += '<td class="wochentage">15</td>';
	// html += '<td class="wochentage">16</td>';
	// html += '<td class="wochentage">17</td>';
	// html += '<td class="wochentage">18</td>';
	// html += '<td class="samstag wejuli">19</td>';
	// html += '<td class="sonntag wejuli">20</td>';
	// html += '</tr>';
	// html += '<tr class="kalenderblatt">';
	// html += '<td class="wzahl">34</td>';
	// html += '<td class="wochentage">21</td>';
	// html += '<td class="wochentage">22</td>';
	// html += '<td class="wochentage">23</td>';
	// html += '<td class="wochentage">24</td>';
	// html += '<td class="wochentage" id = "today">25</td>';
	// html += '<td class="samstag wejuli">26</td>';
	// html += '<td class="sonntag wejuli">27</td>';
	// html += '</tr>';
	// html += '<tr class="kalenderblatt">';
	// html += '<td class="wzahl">35</td>';
	// html += '<td class="wochentage">28</td>';
	// html += '<td class="wochentage">29</td>';
	// html += '<td class="wochentage">30</td>';
	// html += '<td class="wochentage">31</td>';
	// html += '<td class="ausmonat">01</td>';
	// html += '<td class="ausmonat">02</td>';
	// html += '<td class="ausmonat">03</td>';
	// html += '</tr>';




	// function calendarHTML_cell(date) {
	//     let html = "";
	//     let cssClass = "";
	//     let weekday = date.getDay();
	//     if (weekday == 1) {
	//         // Montag: Neue Zeile beginnen
	//         html += "<tr>";
	//         // und Zelle für die Kalenderwoche
	//         html += '<td class="kw">' + getDHowManyWeekday(date) + "</td>";
	// }
	// let weekdayGerman = getWeekdayShortGerman(weekday);
	// html += '<td class="' + cssClass + '">' + date.getDate() + "</td>";
	// if (weekday == 0) {
	//     html += "</tr>";
	// }
	// return html;





	// function calendarHTML(datum) {
	//     let firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
	//     let firstOfMonthWeekday = firstOfMonth.getDay();
	//     let offsetStart;
	//     if (firstOfMonthWeekday == 0) {
	//         offsetStart = 6;
	//     } else {
	//         offsetStart = firstOfMonthWeekday - 1;
	//     }
	//     let firstOfCalendar = new Date(firstOfMonth);
	//     firstOfCalendar.setDate(firstOfCalendar.getDate() - offsetStart);
	//     let lastOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	//     let lastOfMonthWeekday = lastOfMonth.getDay();
	//     let offsetEnd;
	//     if (lastOfMonthWeekday == 0) {
	//         offsetEnd = 0;
	//     } else {
	//         offsetEnd = 7 - lastOfMonthWeekday;
	//     }
	//     let lastOfCalendar = new Date(lastOfMonth.getFullYear(), lastOfMonth.getMonth(), lastOfMonth.getDate() + offsetEnd);

	//     let html = "";
	//     html += calendarHTML_head(firstOfMonth);
	//     let indexDate = new Date(firstOfCalendar);
	//     while (indexDate <= lastOfCalendar) {
	//         html += calendarHTML_cell(indexDate);
	//         indexDate.setDate(indexDate.getDate() + 1);
	//     }
	//     html += calendarHTML_footer();




	//     function calendarHTML_head(date) {  // Andreas sein Code für den Kalenderkopf
	//         // console.log("calendarHTML_head: " + date);
	//         let nameOfMonth = getMonthsInGerman(date.getMonth() + 1);
	//         // console.log("calendarHTML_head: " + nameOfMonth);
	//         let html =
	//             `<table>
	//                     <thead>
	//                     <tr>
	//                             <th colspan = "8">` +
	//             nameOfMonth +
	//             `</th>
	//         </tr>
	//                         <tr>
	//                         <th class = "kw" > Kw </th>
	//                             <th class = "mo" > Mo </th>
	//                             <th class = "di" > Di </th>
	//                             <th class = "mi" > Mi </th>
	//                             <th class = "do" > Do </th>
	//                             <th class = "fr" > Fr </th>
	//                             <th class = "sa" > Sa </th>
	//                             <th class = "so" > So </th>
	//                             </tr>
	//                     </thead>
	//                     <tbody>`;
	//         return html;
	//     }


	//     }
	//     function calendarHTML_footer() {
	//         html = "</tbody></table>";
	//         return html;
	//     }


