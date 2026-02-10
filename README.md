# Melvin-Web_Sprint0
Persoonlijke website

# Melvin Web Design & Development Sprint 0



## Week 1

### Maandag 2 februari 
Vrij

### Dinsdag 3 februari
Vandaag hadden we de eerste introductie van de minor, door middel van een soort "ren-je-rot" spel en een kick-off presentatie. Verder heb ik bedacht aan welke leerdoelen ik wil gaan werken tijdens de minor. Hierbij wil ik vooral focus hebben op de CSS kant, daar heb ik namelijk de meeste interesse in. Ik had namelijk al aardig wat JS ervaring door Project Tech van CMD. Van mijn 3 leerdoelen heb ik er dan dus ook 2 gefocust op CSS, de derde heeft daar ook wel een beetje mee te maken. In eerste instantie had ik hier staan dat ik minder gebruikt wilde maken van Divs in mijn HTML code. Maar deze kunnen wel gebruikt worden voor visuele elementen. Dus mijn leerdoelen worden

- Leerdoel 1: Ik wil mezelf verbeteren in het maken van animaties door gebruik van CSS zodat ik mijn website er interactiever en leuker uit kan laten zien.
- Leerdoel 2: Ik wil mijn website correct responsive maken door gebruik van de juiste styling in CSS en waar mogelijk zonder media queries zodat mijn website er op alle schermen goed uit blijft zien.
- Leerdoel 3: Ik wil alleen gebruik van maken divs in mijn html als dat nodig is voor visuele elementen zodat mijn websites beter werken voor screenreaders.

Voor de rest heb ik een idee bedacht voor mijn persoonlijke website. Ik wil laten zien dat ik veel met games doe, en het liefst ook met verschillende soorten games. Het leek me dus leuk om iets te doen met verschillende controllers. Ik wist alleen even niet hoe ik dat dan goed responsive ging krijgen. Dit heb ik met Vasilis overlegd en kwamen samen tot een idee. Sommige controllers zoals die van de Wii is redelijk verticaal, dus die kan ik goed gebruiken voor een mobiel formaat. Maar een controller zoals die van de Playstation zijn weer meer horizontaal, dus die kan ik beter gebruiker voor Desktop. Over het algemeneen heeft elke controller wel verschillende knoppen voor richting, dus die knoppen kan ik makkelijk gebruiken om consistent te houden. Iets anders wat handig is met dit idee is dat je makkelijk themes kan toevoegen in de vorm van de kleuren van de controller aan te passen.

### Woensdag 4 februari
Vandaag was ik wat eerder op school dus was ik alvast begonnen met wat dingen maken in HTML en CSS, daarna hadden we een workshop over Directus -> Fetch -> JJSON -> HTML. Hier had ik beetje ervaring mee, maar het was wel weer even een goede reminder van hoe alles ook al weer werkt. De rest van de dag ben ik verder gaan werken aan mijn wii controller voor mijn website. Hier heb ik vooral veel CSS voor geschreven. Ik heb nieuwe CSS technieken gebruikt in de vorm van specifeke selectors zoals #wii_center_buttons>p, #wii_center_buttons section>i. Maar heb ook geoefend en geleerd over dingen zoals filer: dropshadow, het stylen van hr elementen. Ik kwam ook nog op een nieuwe functie voor de on/off button. Ik leerde namelijk dat je vrij simpel een tablad kan sluiten mijn window.close() in javascript. Einde van de dag hadden we gast college van Killian Valkhof, het interessantste vond ik het gedeelte over modals, dat kan ik namelijk misschien gaan gebruiken voor mijn eigen website.

Morgen wil ik dan dus gaan werken aan de laatste puntjes op de i voor de wii controller, ik wil hem helemaal afmaken qua styling en thema's toevoegen, als ik tijd over heb wil ik al gaan werken aan de stukken tekst/illustraties voor mijn leerdoelen.

#### Bekeken websites van vandaag:
https://www.w3schools.com/cssref/css_pr_aspect-ratio.php
https://www.w3schools.com/cssref/css3_pr_justify-content.php
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/filter-function/drop-shadow
https://stackoverflow.com/questions/47601564/equal-width-columns-in-css-grid
https://www.w3schools.com/css/css_align.asp
https://developer.mozilla.org/en-US/docs/Web/API/Window/close
https://www.w3schools.com/css/css_grid_container.asp
https://stackoverflow.com/questions/4151743/how-can-i-change-the-thickness-of-my-hr-tag
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:not

#### AI:
Gevraagd of hij de volgende regels korter kon maken:
<code>
border-top: 2px solid var(--wii_button_border_color); 
border-left: 2px solid var(--wii_button_border_color); 
border-right: 2px solid var(--wii_button_border_color);
</code>

Werd veranderd naar het volgende: 
<code>
border: 2px solid var(--wii_button_border_color);
border-bottom: none;
</code>

#### Daily Checkout met Dylan
Toevallig werd ik gekoppeld met de persoon die naast me zat, dus wij hadden gedurende de dag al veel overlegd en gekeken naar elkaars werk, dus kon ik niet veel uit deze checkout halen.

<img src="Assets/img_readme/WiiController_Dag2.png">

### Donderdag 5 februari
Begon vandaag met 2 verschillende workshops, na de korte presentatie van Vasilis en Sanne. Eerst had ik een workshop over Theming van Vasilis. Hier had ik nog niet mee gewerkt in mijn project want ik wilde wachten op die workshop. Tijdens de workshop heb ik geleerd over verschillende manieren over hoe je theming kan regelen op je website. Ik heb na die tijd het ook op 1 van die manieren in mijn eigen project gedaan. Het duurde iets langer dan verwacht om dit werkend te krijgen, maar het waren uiteidnelijk allemaal kleine dingetjes die verkeerd gingen. Na de workshop had ik de workshop over responsiveness gevolgd van Sanne, veel dingen hiervan had ik wel eens eerder al mee gewerkt, maar het was wel een goede reminder. Want ik wel heel handig vond was de manier van werken met een grid-area. Ik weet nog niet of ik dat nodig ga hebben voor mijn persoonlijke website, maar kan ik zeker gebruiken in komende projecten. Voor mijn eigen website heb ik dus gewerkt aan theeming vandaag, was daar ongeveer een uur mee bezig. Ik heb ook mijn controller responsive gemaakt. Ik wist niet zeker of ik genoeg tijd zou hebben om een ps5 controller nog te maken voor de deadline, dus heb ik voor nu besloten om de wii controller te laten draaien en scalen zodat hij responsive is. Dit duurde ongeveer een half uurtje. Ik heb tussendoor nog wat kleine puntjes op de I gezet voor mijn website zoals: font, borders, correcte maten en selectors nesten en een sfx voor de close button. Dit duurde bij elkaar iets van 1,5 uur. Ik had helaas wat merge problemen waar ik ook een half uur mee bezig was om te fixen vandaag. Aan het einde van de dag had ik nog even aan Sanne wat feedback gevraagd over de responsiveness van mijn controller, hij vertelde dat ik ook op moest letten op de hoogte. Dus daar heb ik mijn media query toen nog op aangepast.

#### Checkout met Lisa
Geleerd over een website die makkelijk animaties laat zien en hoe de css code daarover werkt https://animista.net/. Voor de rest was het goed om te zien hoe zij pop-ups had gedaan, daar kan ik misschien ook iets mee doen. 

<img src="Assets/img_readme/WiiController_Dag3.png">
<img src="Assets/img_readme/Workshop_Responsive.png">

### Vrijdag 6 februari
Vandaag was ik eerst bezig met het maken van de pop-ups, dit duurde ongeveer een uur. Daarna ging ik bezig om de API te laten werken zodat er informatie in 1 an die pop-ups zou worden getoond. Ik kon een groot deel van de code uit de workshop van Justus overnemen. Daardoor had ik het binnen een half uurtje al werkend gekregen. Daarna heb ik gewerkt aan het compleet draaien van de controller wanneer je op de + of - knoppen double klikt. Hier had ik ook een animatie voor gebruikt van animista en had ik een sfx aan toegevoegd. Eerst was er een probleem met de scaling. Wat kwam door een probleem met een media query. Ik kon het fixen toen ik ipv alleen de controller liet draaien, de complete main liet draaien. Dit duurde ongeveer een uur. Daarna heb ik kort nog even geprobeerd te fixen dat de A knop ook het thema veranderd. Dit duurde dan ook maar max 15 minuten.

#### Feedback uit markt
De meeste feedback die ik had gekregen was van Sanne. Hij vertelde me dat het voor de pop-ups misschien handig was om te kijken naar het pop-over attribute. Dat scheelt namelijk wat JS en beetje CSS code. Daar ga ik dus sowieso naar kijken, want nu had ik het redelijk primitief gedaan met een display: none en display: block. Voor de rest had hij een voorbeeld laten zien van een SNES controller die hij had gemaakt met animatie daarbij. Daar kan ik inspiratie uit halen voor het stylen van mijn eigen controller. Daarbij werd verteld dat het wel handig is om nog een knop over te laten voor de nieuwe eis die we maandag gaan krijgen. Het laatste kleine beetje feedback was dat ik nog een favicon kon toevoegen. Daar had ik nog niet naar gekeken namelijk.

Link naar de pagina van Sanne: https://sinds1971.nl/spelenmetcss/2022-feb/stephan/index.html <br>
Link naar pagina over pop over: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover

## Week 2

### Maandag 9 februari
Ben vandaag verder gegaan met de feedback die ik had gekregen uit de markt. Sanne had me verteld over het popover attribute. Ik heb hier naar gekeken en kon daardoor een groot deel van mijn javascript code weghalen. De pop-ups zelf werkend maken duurde 15 min. Er kwam hierdoor alleen wel een probleem met het positioneren van de popups. Omdat het nieuwe attribute het een position: fixed maakt, moest ik het centreren anders doen. Oorspronkelijk had ik het gedaan met position: absolute, maar dat werkte te hard met transform. Dit werkte weer niet vanwege mijn animaties omdat die ook transform gebruiken. Ik heb eerste de animaties uitgezet zodat ik eerst goed de positie kon regelen. Dat uitzoeken duurde ongeveer anderhalf uur. Ik ben toen eerst gaan werken aan de states van buttons. Ik wilde in ieder geval een pressed state toevoegen. Voor de A, - en + knop ging dit vrij gemakkelijk. Maar voor de D-Pad was dit een stuk moeilijker, ik probeer het eerst met een ~ selector, maar dit werkt alleen voor elementen die na het hoofdelement in de DOM komen, dus alleen de bovenste knop werkte goed. Ik heb daarna met wat hulp van ChatGPT het werkend gekregen. Ik gaf hem precies de uitleg van welke knoppen er moeten veranderen en welke op dezelfde manier veranderen. Later bleek dit toch iets anders te lopen. Maar het werkend krijgen van states van buttons duurde ongeveer 3 uur. Als laatste vandaag heb ik mijn API aangevuld en heb ik de pop up waar de informatie in staat ook wat meer ingevuld door mijn bijnaam en favoriete games toe te voegen. Dat gedeelte duurde ongeveer een uur.

#### Weggehaalde code
<code>
// =======================
// Button references
// =======================
const btnTop = document.getElementById("BtnTop");
const btnLeft = document.getElementById("BtnLeft");
const btnRight = document.getElementById("BtnRight");
const btnBottom = document.getElementById("BtnBottom");

const buttons = [btnTop, btnLeft, btnRight, btnBottom];

// =======================
// Popup references
// =======================
const popUps = [
  document.getElementById("pop-up1"),
  document.getElementById("pop-up2"),
  document.getElementById("pop-up3"),
  document.getElementById("pop-up4"),
];

let activePopup = null;

// =======================
// Helper functions
// =======================
function hideAllPopups() {
  popUps.forEach(popup => {
    if (!popup) return;

    popup.classList.remove("pop-up_active");
    popup.classList.add("pop-up_inactive");
  });

  activePopup = null;
}

function togglePopup(popup) {
  if (!popup) return;

  // Same popup → close
  if (activePopup === popup) {
    popup.classList.remove("slide-fwd-left");
    hideAllPopups();
    return;
  }

  // Close others
  hideAllPopups();

  // Show popup
  popup.classList.remove("pop-up_inactive");
  popup.classList.add("pop-up_active");

  if (popup.id === "pop-up1") {
    popup.classList.remove("slide-fwd-top"); 
    void popup.offsetWidth; 
    popup.classList.add("slide-fwd-top");
  }

  if (popup.id === "pop-up2") {
    popup.classList.remove("slide-fwd-left"); 
    void popup.offsetWidth; 
    popup.classList.add("slide-fwd-left");
  }

  if (popup.id === "pop-up3") {
    popup.classList.remove("slide-fwd-right");
    void popup.offsetWidth;
    popup.classList.add("slide-fwd-right");
  }

  if (popup.id === "pop-up4") {
    popup.classList.remove("slide-fwd-bottom");
    void popup.offsetWidth;
    popup.classList.add("slide-fwd-bottom");
  }

  activePopup = popup;
}



// =======================
// Close popup when clicking outside
// =======================
document.addEventListener("click", (e) => {
  if (!activePopup) return;

  const clickedButton = buttons.some(btn => btn?.contains(e.target));
  const clickedPopup = activePopup.contains(e.target);

  if (!clickedButton && !clickedPopup) {
    hideAllPopups();
  }
});
</code>

#### Geprobeerde code voor D-Pad states
<code>
    #BtnTop:active {
        background: yellow;
        
        ~ #BtnRight,  ~ #BtnLeft {
            background:red;
        }

        ~ #BtnBottom {
            background:green;
        }
    }

    /* Left button pressed */
    #BtnLeft:active {
        background: yellow;
        
        ~ #BtnTop, ~ #BtnBottom {
            background:red;
        }

        ~ #BtnRight {
            background:green;
        }
    }

    /* Right button pressed */
    #BtnRight:active {
        background: yellow;
        
        ~ #BtnTop, ~ #BtnBottom {
            background:red;
        }

        ~ #BtnLeft {
            background:green;
        }
    }

    /* Right button pressed */
    #BtnBottom:active {
        background: yellow;
        
        ~ #BtnLeft, ~ #BtnRight {
            background:red;
        }

        ~ #BtnTop {
            background:green;
        }
    }
</code>

<img src="Assets/img_readme/D-Pad_States.png">

#### Bekeken websites van vandaag:
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function/rotateX 
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/transform-function/scale

### Dinsdag 10 februari
Vandaag had ik eerst een workshop over typografie. Hier had ik de vraag naar wat basisregels voor typografie. Dus bijvoorbeeld hoeveel tekens op een regel en lettergrootte enzo. Hierin was het advies vooral om het soms een beetje aan te kijken of het er goed uitziet en eventueel dus meer line-spacing toe te voegen of de regels korter te maken. Maar dat de regel ongeveer 20 tot 40 keer de fontgrootte goed is, of 40 tot 80 tekens. Dat is het belangrijkste wat ik ervan had geleerd. Deze workshop duurde een uurtje. Daarna ging ik werken aan extra eis die we maandag kregen. Ik had hier wel ChatGPT om hulp gevraagd voor het API gedeelte. Ik had namelijk wat problemen met het inladen van de informatie op de juiste locatie. Zo had ik vooral hulp nodig in mijn standaard javascript. Want sommige ids van mensen werkten niet en had ik hulp nodig voor het randomizen van welk id je kreeg te zien. Ik wilde namelijk dat als je op de 1 of 2 klikt dat je een random id van een andere minor student krijgt en dat als je op 1 klikt dat hij 1 id naar beneden gaat en als je op 2 klikt dat hij 1 id omhoog gaat. Deze API dingen regelen duurde ongeveer 2 uur. De rest van de dag ben ik bezig geweest met een nieuwe mechanic voor mijn homebutton. Ik wilde dat als je op de button klikt dat bepaalde elementen met gravity vallen, maar dat ze nog steeds binnen het scherm liggen en dat je ermee kan spelen en dat ze nog steeds klikbaar zijn. Ik heb hier verschillende websites voor gebruikt. Uiteindelijk leerde ik over matter.js. Dit was een makkelijke manier om physics toe te voegen aan mijn website, maar ik kreeg het niet werkend zoals ik voor ogen had. Het maakte namelijk losse elementen op een canvas, maar het hield dus niet de styling die het al had. Het was flink lastig, maar misschien handig voor een ander project.

<img src="Assets/img_readme/Matter_JS_proberen.png">


#### Bekeken websites
https://www.reddit.com/r/learnjavascript/comments/gp2t2h/how_to_add_gravity_to_elements/
https://brm.io/matter-js/

#### Geprobeerde code
<code>
// =======================
// Home button gravity effect
// =======================
document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('homeBtn');

    homeBtn.addEventListener('click', () => {
        // Prevent multiple initializations
        if (window.gravityActivated) return;
        window.gravityActivated = true;

        const { Engine, Runner, Bodies, Composite, Events } = Matter;

        // Create engine
        const engine = Engine.create();
        const world = engine.world;

        const width = window.innerWidth;
        const height = window.innerHeight;

        // Get all elements with the gravity-target class
        const gravityTargets = document.querySelectorAll('.gravity-target');

        gravityTargets.forEach(elem => {
            const rect = elem.getBoundingClientRect();

            const body = Bodies.rectangle(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2,
                rect.width,
                rect.height,
                {
                    restitution: 0.5, // bounce
                    friction: 0.1,
                    frictionAir: 0.02,
                    inertia: Infinity // keeps them upright (optional)
                }
            );

            elem._matterBody = body;
            Composite.add(world, body);
        });

        // Invisible walls to keep elements inside viewport
        const thickness = 100;
        const walls = [
            Bodies.rectangle(width / 2, -thickness / 2, width, thickness, { isStatic: true }),
            Bodies.rectangle(width / 2, height + thickness / 2, width, thickness, { isStatic: true }),
            Bodies.rectangle(-thickness / 2, height / 2, thickness, height, { isStatic: true }),
            Bodies.rectangle(width + thickness / 2, height / 2, thickness, height, { isStatic: true })
        ];
        Composite.add(world, walls);

        // Run the physics engine
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Move the actual HTML elements according to physics bodies
        Events.on(engine, 'afterUpdate', () => {
            gravityTargets.forEach(elem => {
                const body = elem._matterBody;
                elem.style.position = 'absolute';
                elem.style.left = `${body.position.x - body.bounds.max.x + body.bounds.min.x + (body.bounds.max.x - body.bounds.min.x)/2}px`;
                elem.style.top = `${body.position.y - body.bounds.max.y + body.bounds.min.y + (body.bounds.max.y - body.bounds.min.y)/2}px`;
                elem.style.transform = `rotate(${body.angle}rad)`; // remove this line if you want to prevent rotation
            });
        });
    });
});
</code>

### Woensdag 11 februari

### Donderdag 12 februari
Vandaag om 10.00 is de deadline

### Vrijdag 13 februari
Vrij
