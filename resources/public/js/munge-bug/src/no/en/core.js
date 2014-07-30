goog.provide('no.en.core');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.crypt.base64');
goog.require('goog.crypt.base64');
goog.require('cljs.reader');
goog.require('clojure.string');
no.en.core.port_number = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$283,(80),cljs.core.constant$keyword$284,(443),cljs.core.constant$keyword$285,(3306),cljs.core.constant$keyword$286,(5432),cljs.core.constant$keyword$287,(5672)], null);
no.en.core.url_regex = /([^:]+):\/\/(([^:]+):([^@]+)@)?(([^:\/]+)(:([0-9]+))?((\/[^?]*)(\?([^#]*))?)?)(\#(.*))?/;
/**
* Split the string `s` by the regex `pattern`.
*/
no.en.core.split_by_regex = (function split_by_regex(s,pattern){if(cljs.core.sequential_QMARK_(s))
{return s;
} else
{if(cljs.core.not((clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1 ? clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1(s) : clojure.string.blank_QMARK_.call(null,s))))
{return (clojure.string.split.cljs$core$IFn$_invoke$arity$2 ? clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,pattern) : clojure.string.split.call(null,s,pattern));
} else
{return null;
}
}
});
/**
* Split the string `s` by comma.
*/
no.en.core.split_by_comma = (function split_by_comma(s){return no.en.core.split_by_regex(s,/\s*,\s*/);
});
/**
* Returns `bytes` as an UTF-8 encoded string.
*/
no.en.core.utf8_string = (function utf8_string(bytes){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("utf8-string not implemented yet",bytes);
});
/**
* Returns `s` as a Base64 encoded string.
*/
no.en.core.base64_encode = (function base64_encode(bytes){if(cljs.core.truth_(bytes))
{return goog.crypt.base64.encodeString(bytes,false);
} else
{return null;
}
});
/**
* Returns `s` as a Base64 decoded string.
*/
no.en.core.base64_decode = (function base64_decode(s){if(cljs.core.truth_(s))
{return goog.crypt.base64.decodeString(s,false);
} else
{return null;
}
});
/**
* Removes all map entries where the value of the entry is empty.
*/
no.en.core.compact_map = (function compact_map(m){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);if(((v == null)) || (((cljs.core.map_QMARK_(v)) || (cljs.core.sequential_QMARK_(v))) && (cljs.core.empty_QMARK_(v))))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else
{return m__$1;
}
}),m,cljs.core.keys(m));
});
/**
* Returns `s` as an URL encoded string.
* @param {...*} var_args
*/
no.en.core.url_encode = (function() { 
var url_encode__delegate = function (s,p__30530){var vec__30532 = p__30530;var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30532,(0),null);if(cljs.core.truth_(s))
{return (clojure.string.replace.cljs$core$IFn$_invoke$arity$3 ? clojure.string.replace.cljs$core$IFn$_invoke$arity$3(encodeURIComponent((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))),"*","%2A") : clojure.string.replace.call(null,encodeURIComponent((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))),"*","%2A"));
} else
{return null;
}
};
var url_encode = function (s,var_args){
var p__30530 = null;if (arguments.length > 1) {
  p__30530 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return url_encode__delegate.call(this,s,p__30530);};
url_encode.cljs$lang$maxFixedArity = 1;
url_encode.cljs$lang$applyTo = (function (arglist__30533){
var s = cljs.core.first(arglist__30533);
var p__30530 = cljs.core.rest(arglist__30533);
return url_encode__delegate(s,p__30530);
});
url_encode.cljs$core$IFn$_invoke$arity$variadic = url_encode__delegate;
return url_encode;
})()
;
/**
* Returns `s` as an URL decoded string.
* @param {...*} var_args
*/
no.en.core.url_decode = (function() { 
var url_decode__delegate = function (s,p__30534){var vec__30536 = p__30534;var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30536,(0),null);if(cljs.core.truth_(s))
{return decodeURIComponent(s);
} else
{return null;
}
};
var url_decode = function (s,var_args){
var p__30534 = null;if (arguments.length > 1) {
  p__30534 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return url_decode__delegate.call(this,s,p__30534);};
url_decode.cljs$lang$maxFixedArity = 1;
url_decode.cljs$lang$applyTo = (function (arglist__30537){
var s = cljs.core.first(arglist__30537);
var p__30534 = cljs.core.rest(arglist__30537);
return url_decode__delegate(s,p__30534);
});
url_decode.cljs$core$IFn$_invoke$arity$variadic = url_decode__delegate;
return url_decode;
})()
;
no.en.core.pow = (function pow(n,x){return Math.pow(n,x);
});
no.en.core.byte_scale = cljs.core.PersistentHashMap.fromArrays(["T","K","G","M","Y","Z","E","B","P"],[no.en.core.pow((1024),(4)),no.en.core.pow((1024),(1)),no.en.core.pow((1024),(3)),no.en.core.pow((1024),(2)),no.en.core.pow((1024),(8)),no.en.core.pow((1024),(7)),no.en.core.pow((1024),(6)),no.en.core.pow((1024),(0)),no.en.core.pow((1024),(5))]);
no.en.core.apply_unit = (function apply_unit(number,unit){if(typeof unit === 'string')
{var G__30540 = (clojure.string.upper_case.cljs$core$IFn$_invoke$arity$1 ? clojure.string.upper_case.cljs$core$IFn$_invoke$arity$1(unit) : clojure.string.upper_case.call(null,unit));switch (G__30540) {
default:
var G__30541 = unit;switch (G__30541) {
case "M":
return (number * (1000000));

break;
case "B":
return (number * (1000000000));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit))));

}

}
} else
{return number;
}
});
no.en.core.parse_number = (function parse_number(s,parse_fn){var temp__4124__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(M|B)?.*/,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;var number = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1))) : parse_fn.call(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1))));var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));if(cljs.core.not(isNaN(number)))
{return no.en.core.apply_unit(number,unit);
} else
{return null;
}
} else
{return null;
}
});
no.en.core.parse_bytes = (function parse_bytes(s){var temp__4124__auto__ = cljs.core.re_matches(/\s*([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)(B|K|M|G|T|P|E|Z|Y)?.*/,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;var number = (cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1))) : cljs.reader.read_string.call(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1))));var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3));return cljs.core.long$((cljs.core.long$((cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1))))) : cljs.reader.read_string.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1))))))) * cljs.core.get.cljs$core$IFn$_invoke$arity$3(no.en.core.byte_scale,(clojure.string.upper_case.cljs$core$IFn$_invoke$arity$1 ? clojure.string.upper_case.cljs$core$IFn$_invoke$arity$1((function (){var or__20001__auto__ = unit;if(cljs.core.truth_(or__20001__auto__))
{return or__20001__auto__;
} else
{return "";
}
})()) : clojure.string.upper_case.call(null,(function (){var or__20001__auto__ = unit;if(cljs.core.truth_(or__20001__auto__))
{return or__20001__auto__;
} else
{return "";
}
})())),(1))));
} else
{return null;
}
});
/**
* Parse `s` as a integer number.
*/
no.en.core.parse_integer = (function parse_integer(s){return no.en.core.parse_number(s,(function (p1__30544_SHARP_){return parseInt(p1__30544_SHARP_);
}));
});
/**
* Parse `s` as a long number.
*/
no.en.core.parse_long = (function parse_long(s){return no.en.core.parse_number(s,(function (p1__30545_SHARP_){return parseInt(p1__30545_SHARP_);
}));
});
/**
* Parse `s` as a double number.
*/
no.en.core.parse_double = (function parse_double(s){return no.en.core.parse_number(s,(function (p1__30546_SHARP_){return parseFloat(p1__30546_SHARP_);
}));
});
/**
* Parse `s` as a float number.
*/
no.en.core.parse_float = (function parse_float(s){return no.en.core.parse_number(s,(function (p1__30547_SHARP_){return parseFloat(p1__30547_SHARP_);
}));
});
/**
* Format the map `m` into a query parameter string.
*/
no.en.core.format_query_params = (function format_query_params(m){var params = (clojure.string.join.cljs$core$IFn$_invoke$arity$2 ? clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30550_SHARP_){return (clojure.string.join.cljs$core$IFn$_invoke$arity$2 ? clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__30550_SHARP_) : clojure.string.join.call(null,"=",p1__30550_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30549_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode(cljs.core.name(cljs.core.first(p1__30549_SHARP_))),no.en.core.url_encode(cljs.core.second(p1__30549_SHARP_))],null));
}),cljs.core.remove((function (p1__30548_SHARP_){return (clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1 ? clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__30548_SHARP_)))) : clojure.string.blank_QMARK_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__30548_SHARP_)))));
}),cljs.core.seq(m))))) : clojure.string.join.call(null,"&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30550_SHARP_){return (clojure.string.join.cljs$core$IFn$_invoke$arity$2 ? clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__30550_SHARP_) : clojure.string.join.call(null,"=",p1__30550_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30549_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[no.en.core.url_encode(cljs.core.name(cljs.core.first(p1__30549_SHARP_))),no.en.core.url_encode(cljs.core.second(p1__30549_SHARP_))],null));
}),cljs.core.remove((function (p1__30548_SHARP_){return (clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1 ? clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__30548_SHARP_)))) : clojure.string.blank_QMARK_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__30548_SHARP_)))));
}),cljs.core.seq(m))))));if(cljs.core.not((clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1 ? clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1(params) : clojure.string.blank_QMARK_.call(null,params))))
{return params;
} else
{return null;
}
});
/**
* Format the Ring map as an url.
*/
no.en.core.format_url = (function format_url(m){if(!(cljs.core.empty_QMARK_(m)))
{var query_params = cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(m);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(m))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(m)))+"://"):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var map__30552 = m;var map__30552__$1 = ((cljs.core.seq_QMARK_(map__30552))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30552):map__30552);var password = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30552__$1,cljs.core.constant$keyword$290);var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30552__$1,cljs.core.constant$keyword$291);if(cljs.core.truth_(user))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(user)?user:null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(password)?(":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)):null))+"@");
} else
{return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(m))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4124__auto__ = cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var port = temp__4124__auto__;if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(port,(no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(m)) : no.en.core.port_number.call(null,cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(m))))))
{return (":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(port));
} else
{return null;
}
} else
{return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(m) == null)) && (!(cljs.core.empty_QMARK_(query_params))))?"/":cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(m)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_(query_params)))?("?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.format_query_params(query_params))):null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not((clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1 ? clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(m)) : clojure.string.blank_QMARK_.call(null,cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(m)))))?("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(m))):null)));
} else
{return null;
}
});
/**
* Parse `s` as a percentage.
*/
no.en.core.parse_percent = (function parse_percent(s){return no.en.core.parse_double((clojure.string.replace.cljs$core$IFn$_invoke$arity$3 ? clojure.string.replace.cljs$core$IFn$_invoke$arity$3(s,"%","") : clojure.string.replace.call(null,s,"%","")));
});
/**
* Quote the special characters in `s` that are used in regular expressions.
*/
no.en.core.pattern_quote = (function pattern_quote(s){return (clojure.string.replace.cljs$core$IFn$_invoke$arity$3 ? clojure.string.replace.cljs$core$IFn$_invoke$arity$3(cljs.core.name(s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1") : clojure.string.replace.call(null,cljs.core.name(s),/([\[\]\^\$\|\(\)\\\+\*\?\{\}\=\!.])/,"\\\\$1"));
});
/**
* Returns the first string that separates the components in `s`.
*/
no.en.core.separator = (function separator(s){var temp__4124__auto__ = cljs.core.re_matches(/([a-z0-9_-]+)([^a-z0-9_-]+).*/i,s);if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(2));
} else
{return null;
}
});
/**
* Parse the query parameter string `s` and return a map.
*/
no.en.core.parse_query_params = (function parse_query_params(s){if(cljs.core.truth_(s))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__30555_SHARP_){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(cljs.core.first(p1__30555_SHARP_))),no.en.core.url_decode(cljs.core.second(p1__30555_SHARP_))],null));
}),cljs.core.filter((function (p1__30554_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(p1__30554_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30553_SHARP_){return (clojure.string.split.cljs$core$IFn$_invoke$arity$2 ? clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__30553_SHARP_,/=/) : clojure.string.split.call(null,p1__30553_SHARP_,/=/));
}),(clojure.string.split.cljs$core$IFn$_invoke$arity$2 ? clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/) : clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/))))));
} else
{return null;
}
});
/**
* Parse the url `s` and return a Ring compatible map.
*/
no.en.core.parse_url = (function parse_url(s){var temp__4124__auto__ = cljs.core.re_matches(no.en.core.url_regex,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));if(cljs.core.truth_(temp__4124__auto__))
{var matches = temp__4124__auto__;var scheme = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(1)));return no.en.core.compact_map(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$290,cljs.core.constant$keyword$295,cljs.core.constant$keyword$293,cljs.core.constant$keyword$288,cljs.core.constant$keyword$294,cljs.core.constant$keyword$292,cljs.core.constant$keyword$296,cljs.core.constant$keyword$291,cljs.core.constant$keyword$289],[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(14)),(function (){var or__20001__auto__ = no.en.core.parse_integer(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(8)));if(cljs.core.truth_(or__20001__auto__))
{return or__20001__auto__;
} else
{return (no.en.core.port_number.cljs$core$IFn$_invoke$arity$1 ? no.en.core.port_number.cljs$core$IFn$_invoke$arity$1(scheme) : no.en.core.port_number.call(null,scheme));
}
})(),no.en.core.parse_query_params(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(matches,(3)),scheme]));
} else
{return null;
}
});
/**
* Executes thunk. If an exception is thrown, will retry. At most n retries
* are done. If still some exception is thrown it is bubbled upwards in
* the call chain.
*/
no.en.core.with_retries_STAR_ = (function with_retries_STAR_(n,thunk){var n__$1 = n;while(true){
var temp__4124__auto__ = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null))], null);
}catch (e30557){if((e30557 instanceof Error))
{var e = e30557;if((n__$1 === (0)))
{throw e;
} else
{return null;
}
} else
{if(cljs.core.constant$keyword$275)
{throw e30557;
} else
{return null;
}
}
}})();if(cljs.core.truth_(temp__4124__auto__))
{var result = temp__4124__auto__;return (result.cljs$core$IFn$_invoke$arity$1 ? result.cljs$core$IFn$_invoke$arity$1((0)) : result.call(null,(0)));
} else
{{
var G__30558 = (n__$1 - (1));
n__$1 = G__30558;
continue;
}
}
break;
}
});
//# sourceMappingURL=core.js.map