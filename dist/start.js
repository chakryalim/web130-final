/* global URLSearchParams */

import { loadArticlesList, loadFilterArticlesList } from './listViews'
import { loadArticle } from './detailView'
import { renderMenuItems } from './categories'

renderMenuItems()

let params = new URLSearchParams(window.location.search)

if(typeof js_page !== 'undefiend' && js_page === 'articles'){
    //only run on the articles pages
    if (params.get('article') !== null) {
        const id = params.get('article')
        loadArticle(id)
    } else if (params.get('filter') !== null){
        loadFilterArticlesList(params.get('filter'))        
    } else {
        loadArticlesList()
    }
} else if(typeof js_page !== 'undefiend' && js_page === 'login'){
    alert('You are on the login page!')
}

