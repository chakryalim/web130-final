const Category = {
    Sports: 'Sports',
    National: 'National',
    Local: 'Local',
    Opinion: 'Opinion',
    Lifestyle: 'Lifestyle'
}

const renderMenuItems = () =>{
    let html = ''
    for (let category in Category) {
        html += `
            <a class="dropdown-item" href="?filter=${category}">
            ${category}
            </a>
        `
    }
    $('#categoryDropdown').html(html)
}


export { Category, renderMenuItems }