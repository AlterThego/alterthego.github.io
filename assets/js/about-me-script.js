const data = [
    {
        education: `
            <p class="text-cyan-400 font-bold uppercase">searching database. </p>
            <p class="text-cyan-400 font-bold uppercase">preparing for education information rendering. </p>
            <p class="text-green-500 font-bold uppercase">ready for access. </p>
            >> DATABASE\\PLR-7H8J-K4L5-N2M9\\Education: <br>&nbsp[<br> 
            <p class="px-4">ELEMENTARY: Saint Louis School (Center), Elementary Department; </p>
            <p class="px-4">JUNIOR-HIGHSCHOOL: Saint Louis School (Center), Highschool Department; </p>
            <p class="px-4">SENIOR-HIGH-SCHOOL: Saint Louis School (Center), Highschool Department; </p>
            <p class="px-4">COLLEGE: University of Cordilleras, Inc.</p>
            <p class="px-4">COURSE: </p>
            <p class="text-[--primary-yellow] text-center font-bold uppercase">Bachelor of Science in</p>
            <p class="text-[--primary-yellow] text-center font-bold uppercase">Information Technology</p>
            <p class="text-[--primary-yellow] text-center font-bold uppercase">Web Technologies Track</p>]<br> 
            <p class="text-green-600 text-center font-bold uppercase">Data compilation successful.</p>`
    },
    {
        experience: `
            <p class="text-cyan-400 font-bold uppercase">searching database. </p>
            <p class="text-cyan-400 font-bold uppercase">preparing for experience information rendering.</p>
            <p class="text-green-500 font-bold uppercase">ready for access. </p>
            >> DATABASE\\PLR-7H8J-K4L5-N2M9\\Experience: <br>&nbsp[<br> 
            <p class="px-4">ACCENTURE: SAP Advanced Business Application Programming (ABAP)</p> ]
            <p class="text-green-600 text-center font-bold uppercase">Data compilation successful.</p>`
    },
    {
        projects: `
            <p class="text-cyan-400 font-bold uppercase">searching database. </p>
            <p class="text-cyan-400 font-bold uppercase">preparing for project information rendering. </p>
            <p class="text-green-500 font-bold uppercase">ready for access. </p>
            >> DATABASE\\PLR-7H8J-K4L5-N2M9\\Projects: [<br> 
            <p><a href="#"></a>1. Personal Portfolio Website</p>
            <a href="https://github.com/AlterThego/PVO-EcoMetrics" target="_blank">2. Socio Economic Profile of Benguet</p> ]<br>
            <p class="text-green-600 text-center font-bold uppercase">Data compilation successful.</p>`
    },
];

const allElements = document.getElementsByClassName("typeing");
const element = document.getElementById("AboutDevTypeText");
const clearButton = document.querySelector('.clear-btn');

let currentContent = ">>> START BY PRESSING ANY OF THE BUTTONS...";
let i = 0, isTag, text;
let isTerminalEmpty = false;

(function type() {
    if (i === currentContent.length) {
        return;
    }

    text = currentContent.slice(0, i) + (i === currentContent.length - 1 ? currentContent.charAt(i) : '');
    element.innerHTML = text + `<span class='blinker'>&#32;</span>`;

    const char = text.slice(-1);
    if (char === "<") isTag = true;
    if (char === ">") isTag = false;

    if (isTag) {
        i++;
        return type();
    }

    i++;
    setTimeout(type, 10);
})();

function clearTerminal() {
    if (!isTerminalEmpty) {
        element.innerHTML = '>>> START BY PRESSING ANY OF THE BUTTONS...';
        currentContent = '>>> START BY PRESSING ANY OF THE BUTTONS...';
        i = 0;
        isTerminalEmpty = true;
    }
}

clearButton.addEventListener('click', clearTerminal);

document.querySelectorAll(".btn").forEach((button, index) => {
    button.addEventListener("click", function () {
        const section = this.dataset.section;

        // Ensure section and index are defined and exist in data array
        if (section && data[index] && data[index][section]) {
            const content = data[index][section];

            currentContent = content;
            i = 0;
            element.innerHTML = "";
            isTerminalEmpty = false;

            (function type() {
                if (i === currentContent.length) {
                    return;
                }

                text = currentContent.slice(0, i) + (i === currentContent.length - 1 ? currentContent.charAt(i) : '');
                element.innerHTML = text + `<span class='blinker'>&#32;</span>`;

                const char = text.slice(-1);
                if (char === "<") isTag = true;
                if (char === ">") isTag = false;

                if (isTag) {
                    i++;
                    return type();
                }

                i++;
                setTimeout(type, 10);
            })();
        }
    });
});
