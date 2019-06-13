/* global $ */
import moment from 'moment'

const generateArticleQL = (id) => {
    return `
    query {
        article(where: {
            id: "${id}"
        })  {
    	    id
    	    title
    	    published
            author {
                name
            }
            category
            content{
  	            html 
            }
        }
    }`
}

const renderArticle = (data) => {
    const dateView = new moment(data.published).format('MM/DD/YYYY')
    return `
        <article class="col-md-12 col-lg-8">
            <h2>
            ${data.title}
            </h2>
            <small>
            Published on: ${dateView}
            </small>
            <br>
            <p class="author">
            ${data.author.name}
            </p>
            <div>
                ${data.content.html}
            </div>
        </article>
        <div class="card col-12 col-sm-12 col-md-12 col-lg-4" style="width: 18rem;">
            <h5 class="card-title">Advertisement</h5>
            <img class="img-ad" src="../img/space-con-ad.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Buy Tickets to SpaceCon Today!</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Get Tickets Now!</a>
            </div>
        </div>
    `
}
    
const loadArticle = (id) => {
    $.post(
        {
            url: 'https://api-uswest.graphcms.com/v1/cjvx3xeam4hty01ehu73s4lw9/master',
            data: JSON.stringify({"query": generateArticleQL(id)}),
            success: (response) => {
                console.log(response.data)
                const article = response.data.article
                const html = renderArticle(article)
                $('main').html(html)
        },
        contentType: 'application/json'
        
        }
    )
}

export { loadArticle }