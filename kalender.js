window.onload = function () { //Hinweis dass erst gewartet werden soll bis die Seite geladen ist.
	updateKalender(new Date());
};



function updateKalender(nDate) {   //Hauptfunktion in der die meisten Variablen stehen
	let date = new Date(nDate); //Aktuelles Datum mit Uhrzeit 
	let dateD = date.getDate(); // Heutiges Datum
	let weekdayD = date.getDay(); //wochentag Nummer
	let weekdayGerman = getWeekDayNameGerman(weekdayD); //Wochentag auf Deutsch in String, Funktion ist definiert unt ist weiter unten im Code
	// console.log(weekdayGerman); //Konsole ausgabe
	let startDate = new Date(date.getFullYear(), 0, 1); //Startdtatum der Berechnung
	let days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000)); //Aktuelles Datum minus Startdatum
	// console.log(days + 1);
	let weekNumber = Math.ceil(days / 7); //Wochennummer = Mathezeile (days und dann durch 7)
	let monthD = date.getMonth(); //Aktueller Monat als Zahl
	let monthsInGerman = getMonthsInGerman(monthD); //Monatsname auf Deutsch in String
	// console.log(monthsInGerman); // Konsolen ausgabe Monatsname
	let year = date.getFullYear(); //Aktuelles Jahr
	let datum = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear(); //Datum Tag, Monat, Jahr
	let dHowManyWeekday = getDHowManyWeekday(dateD); // Eine Funktion ist dafür definiert und gibt aus wievielte Woche im Monat wir haben // Eine Funktion die die Feiertage in Hessen berechnet und Anzeigt
	let holidayYesNoD = isDateHoliday(date); // Eine funktion die nachschaut ob heute ein feiertag ist
	document.getElementById("calendar").innerHTML = getCalendarForHTML(date);

	//*Consolen ausgaben
	// console.log(dHowManyWeekday); // Konsole ausabe wievielte Woche im Monat
	// console.log("hololidayYesNoD: " + holidayYesNoD) // Konsole Befehle die ausgeben wie in diesem Fall mit hilfe der Funktion holidayYesNoD ob es ein Feiertag ist oder nicht
	// console.log('date: ' + date);
	// console.log('weekdayD:' + date.getDay());
	// console.log('Week number of: ' + date + "is: " + weekNumber);
	// console.log('monthD:' + monthD);
	// console.log('year:' + date.getFullYear());
	// console.log('holidayYesNoD:');

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

function isDateHoliday(date) {  //Funktion die vergleicht mit einer for Schleife ist heute Feiertag.

	let holidaysList = getHolidayArrayHessen(date);
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
// html +=         `<button onclick="updateKalender(${new Date(date.getFullYear(),date.getMonth()-1,1).getTime()})">Vorheriger Monat</button>`;
// html +=         `<button onclick="changeTime(${new Date(date.getFullYear(),date.getMonth()-1,1).getTime()})">Vorheriger Monat</button>`;

let date = new Date();
function getCalendarForHTML(date) {
	let html = '<table id="kalender">';
	let cssClass = '<#kalender>';
	html += '<thead>';
	html += '<tr>';
	html += '<div id="MonatHeader">';
	html += '<th colspan="8">';
	html += `<button id ="left" onclick="updateKalender(${new Date(date.getFullYear(),date.getMonth()-1,1).getTime()})">⇦ Letzter Monat</button>`;
	html += `<button id ="middle" onclick = "isFeiertag(3)"> ${getMonthsInGerman(date.getMonth())} </button>`;
	html += `<button id="right" onclick="updateKalender(${new Date(date.getFullYear(),date.getMonth()+1,1).getTime()})">Nächster Monat⇨</button>`;
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


let last_date = new Date(date.getFullYear(),date.getMonth(),(date.getDate()-1));

for (z=0; z > last_date; z++) {
let today = new Date(date.getDate());
				if (today ==today) {
					today.bgColor="white";// Heutiger Tag als Rot
					html += "today";
				}
			}






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
		let classTags =""; //Die Brauchst du KlassenNamen
		if (day.getDate() == 1) {
			html += '<tr>';
		}
		
		
		
		
		classTags += " ausmonat"
		html += `<td class=${classTags} onclick="updateKalender(${day.getTime()})">`;
		html += day.getDate();
		html += '</td>';
		// tempDate = new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() + 1);

		if (day.getDay() == 0) {
			html += '</tr>';
		}
	}

	// Tage der Tabelle 1-31 ; Kompletter Code
	for (let i = 1; i <= days; i++) {
		let classTags =""; //Die Brauchst du KlassenNamen
		let datum = new Date(date.getFullYear(), date.getMonth(), i);
		if (datum.getDay() == 1) {  
			html += '<tr>';
		}
		if (datum.getDay() ==0){ // Das brauchst du Prüfung ob Heute Tag 0 ist Sonntag
			classTags += " sonntag" // Wiedergabe KlassenName den du dann im CSS bearbiten wirst davor leerzeichen nicht vergessen bevor Namen _Sonntag schreibst

		}
		if (datum.getDay() ==6){ // Das brauchst du Prüfung ob Heute Tag 6 ist Samstag
			classTags += " samstag" // Wiedergabe KlassenName den du dann im CSS bearbiten wirst davor leerzeichen nicht vergessen bevor Namen _Sonntag schreibst

		}
		if (isDateHoliday(datum)){
			classTags += " holidays"
		}
		// if (tageausVormonatZuzeichnen() != i){
		// 	classTags += " ausmonat"
		// }


		else  { //Wenn der Tag nicht Sonntag, Samstag, Holidays ist dann nimmt er die Klasse _Wochentage
			classTags += " wochentage"
}
		


		html += `<td class=${classTags} onclick="updateKalender(${new Date(datum.getFullYear(),datum.getMonth(),i).getTime()})">`; // Wenn du Klassen in HTML einfügst vergiss diese komischen klammern nicht ``
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
let day = new Date(date.getFullYear(), date.getMonth(), 1 - daysToDrawAfter);
for (let i = 1; i <= + daysToDrawAfter; i++) {


	
let classTags = "";
let datum = new Date(date.getFullYear(), date.getMonth() +1 , i);
classTags += " ausmonat"
	html += `<td class=${classTags} onclick="updateKalender(${datum.getTime()})">`;
	html += i;
	html += "</td>";
}
html += '</tr>';

html += '</tbody>'
html += '</table>';
return html;
}
