const news = [
    {
        "headline": "Regeringen skjuter på publiklättnader",
        "author": "Erik Wikén",
        "href": "https://www.svt.se/nyheter/inrikes/regeringen-skjuter-pa-publiklattnader",
        "summary": "Det blir inga lättnader i publikrestriktioner som planerat – åtminstone inte nu. Det beskedet gav regeringen i dag. Orsaken är den återigen ökade smittspridningen i samhället."
    },
    {
        "headline": "Graffitin – så kom den till Sverige genom Public service",
        "author": "",
        "href": "https://www.svt.se/nyheter/lokalt/ost/graffitin-sa-kom-den-till-sverige-genom-public-service",
        "summary": "Det går faktiskt nästan att fastställa på minuten när graffitin kom till Sverige. Se hur det gick till och hur subkulturen har utvecklats sedan dess i videon."
    },
    {
        "headline": "Louise Glück får Nobelpriset i litteratur",
        "author": ["Jakob Runevad Kjellmer", "Lydia Farran-Lee", "Sebastian Folcker"],
        "href": "https://www.svt.se/kultur/nobelpriset-i-litteratur-2020",
        "summary": "Den amerikanska poeten Louise Glück mottar Nobelpriset i litteratur 2020. Hon debuterade med Firstborn 1968 och anses vara en av de mest tongivande samtida amerikanska poeterna."
    },
]

/** 
 * 
 * This is where you add code that will manipulate index.html!
 * 
 * When you open index.html in your browser, this javascript file will be run once. This javascript file is loaded via the script tag in index.html.
 * 
 * Most of what you need is in the lecture slides! For the stuff that isn't, there are very strong hints in the lecture slides at least. 
 * 
 * You can also figure most things out with the MDN docs. 
 * 
 * Or, by using chrome devtools and debugger statements. 
 * 
 * 
 * Good luck :) 
 */

document.getElementById('ex01').innerText = ('done')

document.getElementsByClassName('ex02')[0].style.color = ('red')

document.getElementsByTagName('blockquote')[0].innerText = ('testare som är festare')

var node = document.createElement("LI");
var textnode = document.createTextNode("Milk");
node.appendChild(textnode);
document.getElementById("shopping-list").appendChild(node);


for (let index = 0; index < news.length; index++) {

    const headline = document.createElement('h3')
    headline.textContent = news[index].headline
    headline.className = 'purple'

    const author = document.createElement('p')
    author.textContent = news[index].author

    const link = document.createElement('a')
    link.href = news[index].href
    link.textContent = 'Suupercoola nyhetslänken'

    const summary = document.createElement('p')
    summary.textContent = news[index].summary

    const currentDiv = document.querySelector('#news')
    currentDiv.appendChild(headline)
    currentDiv.appendChild(author)
    currentDiv.appendChild(link)
    currentDiv.appendChild(summary)

}

    const button = document.querySelector('button')
    button.addEventListener('click', function(event) {
    event = button.disabled = true
    })

    let clicks = 0;
    document.addEventListener("click", function(){
    clicks += 1;
    document.getElementById('click-counter').innerHTML = clicks;
    })

    document.getElementById("link-to-svt").href = "#";

    document.getElementsByTagName("img")[0].src = ("https://images.unsplash.com/photo-1602891382287-daa85a949cd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
console.log('js loaded!')



