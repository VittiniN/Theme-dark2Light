const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;


//button event handlers


darkButton.onclick = () => {
    body.classList.remove('light');
    body.classList.add('dark');
};
 

lightButton.onclick = () => {
body.classList.remove('dark');
body.classList.add('light');

};







