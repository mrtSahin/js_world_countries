

async function fetchCountries(){
    let names=[]
    let response = await fetch('https://restcountries.com/v2/all')
    let data = await response.json()
    data.forEach(country => {
        names.push(country.name)
    })
    return names
}
fetchCountries()
.then(countriesName=>{
    let countText=document.getElementById('countCountries')
    countText.innerHTML=`Dünya üzerindeki ülke sayısı: ${countriesName.length}`

    countriesName.forEach(countryName=>{
    let text=document.createElement('p1')
    text.textContent=countryName.toUpperCase()

    let box=document.createElement('div')
    box.className='countries'
    box.style="float:left"
    box.textContent=text.textContent
    document.body.appendChild(box)
    })
})




