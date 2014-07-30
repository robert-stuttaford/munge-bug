goog.provide('cljs_http.util');
goog.require('cljs.core');
goog.require('no.en.core');
goog.require('clojure.string');
goog.require('no.en.core');
goog.require('goog.userAgent');
goog.require('goog.userAgent');
goog.require('clojure.string');
goog.require('goog.Uri');
/**
* Returns the value of the HTTP basic authentication header for
* `credentials`.
*/
cljs_http.util.basic_auth = (function basic_auth(credentials){if(cljs.core.truth_(credentials))
{var vec__30560 = ((cljs.core.map_QMARK_(credentials))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(credentials,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$297,cljs.core.constant$keyword$290], null)):credentials);var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30560,(0),null);var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30560,(1),null);return ("Basic "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.base64_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(username)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)))));
} else
{return null;
}
});
/**
* Build the url from the request map.
*/
cljs_http.util.build_url = (function build_url(p__30561){var map__30564 = p__30561;var map__30564__$1 = ((cljs.core.seq_QMARK_(map__30564))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30564):map__30564);var query_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.constant$keyword$296);var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.constant$keyword$294);var server_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.constant$keyword$293);var server_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.constant$keyword$292);var scheme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.constant$keyword$289);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__30565 = (new goog.Uri());G__30565.setScheme(cljs.core.name((function (){var or__20001__auto__ = scheme;if(cljs.core.truth_(or__20001__auto__))
{return or__20001__auto__;
} else
{return cljs.core.constant$keyword$283;
}
})()));
G__30565.setDomain(server_name);
G__30565.setPort(server_port);
G__30565.setPath(uri);
G__30565.setQuery(query_string,true);
return G__30565;
})()));
});
/**
* Returns dash separeted string `s` in camel case.
*/
cljs_http.util.camelize = (function camelize(s){return (clojure.string.join.cljs$core$IFn$_invoke$arity$2 ? clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,(clojure.string.split.cljs$core$IFn$_invoke$arity$2 ? clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/-/) : clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/-/)))) : clojure.string.join.call(null,"-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,(clojure.string.split.cljs$core$IFn$_invoke$arity$2 ? clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/-/) : clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/-/)))));
});
/**
* Build the headers from the map.
*/
cljs_http.util.build_headers = (function build_headers(m){return cljs.core.clj__GT_js(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(m)),cljs.core.vals(m)));
});
/**
* Returns the user agent.
*/
cljs_http.util.user_agent = (function user_agent(){return goog.userAgent.getUserAgentString();
});
/**
* Returns true if the user agent is an Android client.
*/
cljs_http.util.android_QMARK_ = (function android_QMARK_(){return cljs.core.re_matches(/.*android.*/i,cljs_http.util.user_agent());
});
/**
* JSON decode an object from `s`.
*/
cljs_http.util.json_decode = (function json_decode(s){var temp__4124__auto__ = JSON.parse(s);if(cljs.core.truth_(temp__4124__auto__))
{var v = temp__4124__auto__;return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.array_seq([cljs.core.constant$keyword$279,true], 0));
} else
{return null;
}
});
/**
* JSON encode `x` into a String.
*/
cljs_http.util.json_encode = (function json_encode(x){return JSON.stringify(cljs.core.clj__GT_js(x));
});
cljs_http.util.parse_headers = (function parse_headers(headers){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30567_SHARP_,p2__30566_SHARP_){var vec__30569 = (clojure.string.split.cljs$core$IFn$_invoke$arity$2 ? clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__30566_SHARP_,/:\s+/) : clojure.string.split.call(null,p2__30566_SHARP_,/:\s+/));var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30569,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30569,(1),null);if(cljs.core.truth_((function (){var or__20001__auto__ = (clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1 ? clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : clojure.string.blank_QMARK_.call(null,k));if(cljs.core.truth_(or__20001__auto__))
{return or__20001__auto__;
} else
{return (clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1 ? clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : clojure.string.blank_QMARK_.call(null,v));
}
})()))
{return p1__30567_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30567_SHARP_,(clojure.string.lower_case.cljs$core$IFn$_invoke$arity$1 ? clojure.string.lower_case.cljs$core$IFn$_invoke$arity$1(k) : clojure.string.lower_case.call(null,k)),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,(clojure.string.split.cljs$core$IFn$_invoke$arity$2 ? clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var or__20001__auto__ = headers;if(cljs.core.truth_(or__20001__auto__))
{return or__20001__auto__;
} else
{return "";
}
})(),/(\n)|(\r)|(\r\n)|(\n\r)/) : clojure.string.split.call(null,(function (){var or__20001__auto__ = headers;if(cljs.core.truth_(or__20001__auto__))
{return or__20001__auto__;
} else
{return "";
}
})(),/(\n)|(\r)|(\r\n)|(\n\r)/)));
});
//# sourceMappingURL=util.js.map