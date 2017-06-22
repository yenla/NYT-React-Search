import axios from "axios";

const APIKey = '71e1dd15c3634387a2286d34aeb921c9';

const Helpers = {

  runQuery(search, startYear, endYear)  {

    // var search = this.search.value;
    // var startYear = this.startYear.value;
    // var endYear = this.endYear.value;

    // var search = search.trim();
    // var startYear = startYear.trim();
    // var endYear = endYear.trim();
    // var start = dateFormatter();
    // start.dateFormat = "yyyy-MM-dd"

    // var end = dateFormatter();
    // end.dateFormat = "yyyy-MM-dd"

    // return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey + "&q=" +
    //               search + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "1231") 

    return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {
          'api-key': APIKey,
          'q': search,
          'begin_date': startYear,
          'end_date': endYear
          // 'begin_date': start,
          // 'end_date': end
      }
    })

    .then(function(results){
      console.log(results.data.response.docs);
      return results.data.response.docs;
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
