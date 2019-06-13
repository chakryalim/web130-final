/* global URLSearchParams */

import { loadArticlesList, loadFilteredArticlesList } from './listViews'
import { loadArticle } from './detailView'
import { renderMenuItems } from './categories'
import { login, createArticle } from './api'

renderMenuItems()
export const global = {}

let params = new URLSearchParams(window.location.search)

if(typeof js_page !== 'undefiend' && js_page === 'articles'){
    //only run on the articles pages
    if (params.get('article') !== null) {
        const id = params.get('article')
        loadArticle(id)
    } else if (params.get('filter') !== null){
        loadFilteredArticlesList(params.get('filter'))        
    } else {
        loadArticlesList()
    }
} 

if (typeof js_page !== 'undefined' && js_page === 'login') {
    login()
}

if (typeof js_page !== 'undefined' && js_page === 'createArticle') {
    createArticle()
}

