document.addEventListener("DOMContentLoaded", function() {
    


let ps = document.querySelectorAll('p')
ps.forEach((p) => {
    p.innerHTML = p.textContent.replaceAll(/(\[\d\])/g, '<span class="fnnum">$1</span>')
});

console.log(document)

})