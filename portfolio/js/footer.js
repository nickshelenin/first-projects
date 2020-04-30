async function getFooter() {
    await fetch('./footer.html')
    .then ((res) =>{
        return res.text();
    })
    .then((data) =>{
        document.querySelector('footer').innerHTML = data;
    })
}

getFooter();
