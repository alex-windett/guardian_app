function onTabClick(event) {
    event.preventDefault()
    let actives = document.querySelectorAll('.active');

    // for all items that have an active class, remove it
    for (let i=0; i < actives.length; i++){
        actives[i].className = actives[i].className.replace('active', '')
    }

    // actives.forEach( (active) =>
    //     console.log(active)
    // )

    event.target.parentElement.className += ' active';

    // Find the href attr and split on hash to get an id
    document.getElementById(event.target.href.split('#')[1]).className += ' active';
}

let el = document.getElementById('nav-tab')
el.addEventListener('click', onTabClick, false);
