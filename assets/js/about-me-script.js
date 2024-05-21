const data = [
    {
        education: `
            <p class="text-cyan-400 font-bold">searching database. </p>
            <p class="text-cyan-400 font-bold">preparing for education information rendering. </p>
            <p class="text-green-500 font-bold">ready for access. </p>
            >> database\\PLR-7H8J-K4L5-N2M9\\Education: <br>&nbsp[<br> 
            &nbsp&nbsp--nursery-school: Baguio Cathedral Nursery School; <br> 
            &nbsp&nbsp--elementary: Saint Louis School (Center), ED; <br> 
            &nbsp&nbsp--high-school: Saint Louis School (Center), HD; <br> 
            &nbsp&nbsp--senior-high-school: Saint Louis School (Center), HD; <br> 
            &nbsp&nbsp--college-br: University of Cordilleras, Inc.<br> 
            &nbsp&nbsp--course:<br>
            <p class="text-[--primary-yellow] text-center font-bold">Bachelor of Science in</p>
            <p class="text-[--primary-yellow] text-center font-bold">Information Technology</p>
            <p class="text-[--primary-yellow] text-center font-bold">Web Technologies Track</p>]<br> 
            <p class="text-green-600 text-center font-bold">Data compilation successful.</p>`
    },
    {
        experience: `
            <p class="text-cyan-400 font-bold">searching database. </p>
            <p class="text-cyan-400 font-bold">preparing for experience information rendering.</p>
            <p class="text-green-500 font-bold">ready for access. </p>
            >> database\\PLR-7H8J-K4L5-N2M9\\Experience: <br>&nbsp[<br> 
            <p class="text-red-500 font-bold">&nbsp&nbspERROR: Not applicable yet!</p> ]
            <p class="text-green-600 text-center font-bold">Data compilation successful.</p>`
    },
    {
        skills: `
            <p class="text-cyan-400 font-bold">searching database. </p>
            <p class="text-cyan-400 font-bold">preparing for skill information rendering. </p>
            <p class="text-green-500 font-bold">ready for access. </p>
            >> database\\PLR-7H8J-K4L5-N2M9\\Skills: [<br> 
            --programming-languages: JavaScript, PHP, HTML, CSS, SAP ABAP<br> 
            --frameworks-Libraries: Laravel, Node.js, Tailwind.css<br> 
            --databases: MySQL, SQLite<br> 
            --tools: Git, Visual Studio Code, Github<br> 
            --soft-skills: Problem-solving, Critical Thinking, Communication <br> ]
            <p class="text-green-600 text-center font-bold">Data compilation successful.</p>`
    },
    {
        projects: `>> database\\PLR-7H8J-K4L5-N2M9\\Projects: [<br> 
            <p class="text-cyan-400 font-bold">searching database. </p>
            <p class="text-cyan-400 font-bold">preparing for project information rendering. </p>
            <p class="text-green-500 font-bold">ready for access. </p>
            <p><a href="#"></a>1. Personal Portfolio Website</p>
            <a href="https://github.com/AlterThego/PVO-EcoMetrics" target="_blank">2. Socio Economic Profile of Benguet</p> ]<br>
            <p class="text-green-600 text-center font-bold">Data compilation successful.</p>`
    }
];

const allElements = document.getElementsByClassName("typeing");
const element = document.getElementById("AboutDevTypeText");
const clearButton = document.querySelector('.clear-btn');

let currentContent = ">>> start by pressing any of the buttons...";
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
        element.innerHTML = '>>> start by pressing any of the buttons...';
        currentContent = '>>> start by pressing any of the buttons...';
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
