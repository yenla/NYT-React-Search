import axios from "axios";

const APIKey = '71e1dd15c3634387a2286d34aeb921c9';

const Helpers = {

  runQuery(terms)  {

    // var term = term.trim();
    // var start = dateFormatter();
    // start.dateFormat = "yyyy-MM-dd"
    // // var start = start.trim() + "0101";

    // var end = dateFormatter();
    // end.dateFormat = "yyyy-MM-dd"
    // var end = end.trim() + "1231";

    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
          'api-key': APIKey,
          'q': terms.search,
          'begin_date': terms.start + "0101",
          'end_date': terms.end + "1231"
          // 'begin_date': start,
          // 'end_date': end
      }
    })

    .then(function(results){

      return results.data.response;
    });
  },

  getSaved(){

    return axios.get('/api/saved')
      .then(function(results){

        return results;
      })
  },

  postSaved(title, date, url){

    var newArticle = {title: title, date: date, url: url};
    return axios.post('/api/saved', newArticle)
      .then(function(results){
        return results._id;
      })

  },

  deleteSaved(title, data, url){

    return axios.delete('/api/saved', {
      params: {
          'title': title,
          'data': data,
          'url': url,
      }
    })
    .then(function(results){
      return results;
    })
  }

}

module.exports = Helpers;