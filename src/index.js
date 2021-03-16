import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from "./reducers"
import App from "./app"

let initialState = {
    'loading': false,
    'user': {},
    'playing': {},
    'myList':[{
      'favorites': true,
      "adult": false,
      "backdrop_path": "/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg",
      "genre_ids": [
        16,
        12,
        14,
        10751,
        28
      ],
      "id": 527774,
      "original_language": "en",
      "original_title": "Raya and the Last Dragon",
      "overview": "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
      "popularity": 4785.107,
      "poster_path": "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
      "release_date": "2021-03-03",
      "title": "Raya and the Last Dragon",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 1216
    }],
    "movies": [
        {
          "adult": false,
          "backdrop_path": "/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg",
          "genre_ids": [
            16,
            12,
            14,
            10751,
            28
          ],
          "id": 527774,
          "original_language": "en",
          "original_title": "Raya and the Last Dragon",
          "overview": "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
          "popularity": 4785.107,
          "poster_path": "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
          "release_date": "2021-03-03",
          "title": "Raya and the Last Dragon",
          "video": false,
          "vote_average": 8.5,
          "vote_count": 1216
        },
        {
          "adult": false,
          "backdrop_path": "/fev8UFNFFYsD5q7AcYS8LyTzqwl.jpg",
          "genre_ids": [
            28,
            35,
            10751,
            16,
            12
          ],
          "id": 587807,
          "original_language": "en",
          "original_title": "Tom & Jerry",
          "overview": "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
          "popularity": 2633.99,
          "poster_path": "/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
          "release_date": "2021-02-11",
          "title": "Tom & Jerry",
          "video": false,
          "vote_average": 7.6,
          "vote_count": 832
        },
        {
          "adult": false,
          "backdrop_path": "/vKzbIoHhk1z9DWYi8kyFe9Gg0HF.jpg",
          "genre_ids": [
            35
          ],
          "id": 484718,
          "original_language": "en",
          "original_title": "Coming 2 America",
          "overview": "Prince Akeem Joffer is set to become King of Zamunda when he discovers he has a son he never knew about in America – a street savvy Queens native named Lavelle. Honoring his royal father's dying wish to groom this son as the crown prince, Akeem and Semmi set off to America once again.",
          "popularity": 2041.426,
          "poster_path": "/nWBPLkqNApY5pgrJFMiI9joSI30.jpg",
          "release_date": "2021-03-05",
          "title": "Coming 2 America",
          "video": false,
          "vote_average": 7.1,
          "vote_count": 813
        },
        {
          "adult": false,
          "backdrop_path": "/z8TvnEVRenMSTemxYZwLGqFofgF.jpg",
          "genre_ids": [
            14,
            28,
            12
          ],
          "id": 458576,
          "original_language": "en",
          "original_title": "Monster Hunter",
          "overview": "A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.",
          "popularity": 1962.042,
          "poster_path": "/1UCOF11QCw8kcqvce8LKOO6pimh.jpg",
          "release_date": "2020-12-03",
          "title": "Monster Hunter",
          "video": false,
          "vote_average": 7.3,
          "vote_count": 1120
        },
        {
          "adult": false,
          "backdrop_path": "/srYya1ZlI97Au4jUYAktDe3avyA.jpg",
          "genre_ids": [
            14,
            28,
            12
          ],
          "id": 464052,
          "original_language": "en",
          "original_title": "Wonder Woman 1984",
          "overview": "A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.",
          "popularity": 1874.966,
          "poster_path": "/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
          "release_date": "2020-12-16",
          "title": "Wonder Woman 1984",
          "video": false,
          "vote_average": 6.9,
          "vote_count": 4253
        } ]
}

const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
        
   
        
    , 
    document.getElementById('app'));