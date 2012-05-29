/*
 * Modified by: Fan
 * Modified date: 2012-5-13
 * How to use:
 * 1.Please include the publicsuffix.js in the <head> of your html file.
 * 2.Get the url without http:// or https:// (Just like the examples below).
 * 3.Call the function parsedomain(url) and get the returned object.
 */

var tests =
  [ [ 'jp', { publicSuffix: 'jp' } ]
  , [ 'www.nht.ac.jp', { publicSuffix: 'ac.jp', domain: 'nht'
                       , subdomain: 'www'
                       } ]
  , [ 'www.dt.ntdent.ac.jp', { publicSuffix: 'ac.jp', domain: 'ntdent'
                             , subdomain: 'www.dt'
                             } ]
  , [ 'www.library.city.kameoka.kyoto.jp'
    , { publicSuffix: 'kameoka.kyoto.jp', domain: 'city'
      , subdomain: 'www.library'
      } ]
  , [ 'www.pref.kyoto.jp', { publicSuffix: 'kyoto.jp', domain: 'pref'
                           , subdomain: 'www'
                           } ]
  , [ 'metro.tokyo.jp', { publicSuffix: 'tokyo.jp', domain: 'metro' } ]
  , [ 'omg.yahoo.com', { publicSuffix: 'com', domain: 'yahoo'
                       , subdomain: 'omg'
                       } ]
  , [ 'trevor.caira.com', { publicSuffix: 'com', domain: 'caira'
                          , subdomain: 'trevor'
                          } ]
  , [ '西交利物浦大学.中国', { publicSuffix: '中国'
                             , domain: '西交利物浦大学'
                             } ]
  , [ 'www.bcd.pvt.k12.ma.us', { publicSuffix: 'pvt.k12.ma.us'
                               , domain: 'bcd'
                               , subdomain: 'www'
                               } ]
  ];

var i, netloc, parsed, expected;

for (i = 0; i < tests.length; ++i) {
  netloc = tests[i][0];
  expected = tests[i][1];
  parsed = parsedomain(netloc);
  
  console.log(parsed);
}

console.log('' + tests.length + ' tests passed.');
