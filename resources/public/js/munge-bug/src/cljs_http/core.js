goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('cljs_http.util');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){var temp__4126__auto__ = cljs.core.deref(cljs_http.core.pending_requests).call(null,channel);if(cljs.core.truth_(temp__4126__auto__))
{var xhr = temp__4126__auto__;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);
(cljs.core.async.close_BANG_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.close_BANG_.cljs$core$IFn$_invoke$arity$1(channel) : cljs.core.async.close_BANG_.call(null,channel));
return xhr.abort();
} else
{return null;
}
});
/**
* Execute the HTTP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.request = (function request(p__30571){var map__30574 = p__30571;var map__30574__$1 = ((cljs.core.seq_QMARK_(map__30574))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30574):map__30574);var request__$1 = map__30574__$1;var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30574__$1,cljs.core.constant$keyword$298);var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30574__$1,cljs.core.constant$keyword$299);var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30574__$1,cljs.core.constant$keyword$300);var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30574__$1,cljs.core.constant$keyword$301);var channel = (cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 ? cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0() : cljs.core.async.chan.call(null));var request_url = cljs_http.util.build_url(request__$1);var method = cljs.core.name((function (){var or__20001__auto__ = request_method;if(cljs.core.truth_(or__20001__auto__))
{return or__20001__auto__;
} else
{return cljs.core.constant$keyword$302;
}
})());var timeout = (function (){var or__20001__auto__ = cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(request__$1);if(cljs.core.truth_(or__20001__auto__))
{return or__20001__auto__;
} else
{return (0);
}
})();var headers__$1 = cljs_http.util.build_headers(headers);var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);var xhr = (function (){var G__30575 = (new goog.net.XhrIo());G__30575.setTimeoutInterval(timeout);
G__30575.setWithCredentials(send_credentials);
return G__30575;
})();cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);
xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__30574,map__30574__$1,request__$1,with_credentials_QMARK_,body,headers,request_method){
return (function (p1__30570_SHARP_){var target = p1__30570_SHARP_.target;(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$304,target.getStatus(),cljs.core.constant$keyword$305,target.isSuccess(),cljs.core.constant$keyword$299,target.getResponseText(),cljs.core.constant$keyword$300,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.constant$keyword$306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null)], null)) : cljs.core.async.put_BANG_.call(null,channel,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$304,target.getStatus(),cljs.core.constant$keyword$305,target.isSuccess(),cljs.core.constant$keyword$299,target.getResponseText(),cljs.core.constant$keyword$300,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.constant$keyword$306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);
return (cljs.core.async.close_BANG_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.close_BANG_.cljs$core$IFn$_invoke$arity$1(channel) : cljs.core.async.close_BANG_.call(null,channel));
});})(channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__30574,map__30574__$1,request__$1,with_credentials_QMARK_,body,headers,request_method))
);
xhr.send(request_url,method,body,headers__$1);
return channel;
});
//# sourceMappingURL=core.js.map