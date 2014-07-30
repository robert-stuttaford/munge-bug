goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__19989__auto__ = v;if(cljs.core.truth_(and__19989__auto__))
{return (v > (0));
} else
{return and__19989__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not((clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1 ? clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1(s) : clojure.string.blank_QMARK_.call(null,s))))
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30577_SHARP_,p2__30576_SHARP_){var vec__30579 = (clojure.string.split.cljs$core$IFn$_invoke$arity$2 ? clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__30576_SHARP_,/=/) : clojure.string.split.call(null,p2__30576_SHARP_,/=/));var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30579,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30579,(1),null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30577_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,(clojure.string.split.cljs$core$IFn$_invoke$arity$2 ? clojure.string.split.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/) : clojure.string.split.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),/&/)));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not((clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1 ? clojure.string.blank_QMARK_.cljs$core$IFn$_invoke$arity$1(url) : clojure.string.blank_QMARK_.call(null,url))))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$289,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.constant$keyword$292,uri.getDomain(),cljs.core.constant$keyword$293,cljs_http.client.if_pos(uri.getPort()),cljs.core.constant$keyword$294,uri.getPath(),cljs.core.constant$keyword$296,((cljs.core.not(query_data.isEmpty()))?(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null),cljs.core.constant$keyword$288,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data))):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k)))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return (clojure.string.join.cljs$core$IFn$_invoke$arity$2 ? clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30580_SHARP_){return cljs_http.client.encode_val(k,p1__30580_SHARP_);
}),vs)) : clojure.string.join.call(null,"&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30580_SHARP_){return cljs_http.client.encode_val(k,p1__30580_SHARP_);
}),vs)));
});
cljs_http.client.encode_param = (function encode_param(p__30581){var vec__30583 = p__30581;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30583,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30583,(1),null);if(cljs.core.coll_QMARK_(v))
{return cljs_http.client.encode_vals(k,v);
} else
{return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return (clojure.string.join.cljs$core$IFn$_invoke$arity$2 ? clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params)) : clojure.string.join.call(null,"&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params)));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__19989__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$307,request_method);if(and__19989__auto__)
{return cljs.core.re_find(cljs.core.re_pattern(("(?i)"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(content_type))),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))));
} else
{return and__19989__auto__;
}
})()))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$299], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$308),cljs.core.constant$keyword$299,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"content-type"], null),"application/edn")) : client.call(null,cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$308),cljs.core.constant$keyword$299,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"content-type"], null),"application/edn")));
} else
{return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = (cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 ? cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0() : cljs.core.async.chan.call(null));var c__23660__auto___30620 = (cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1)) : cljs.core.async.chan.call(null,(1)));(cljs.core.async.impl.dispatch.run.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.dispatch.run.cljs$core$IFn$_invoke$arity$1(((function (c__23660__auto___30620,channel){
return (function (){var f__23661__auto__ = (function (){var switch__23645__auto__ = ((function (c__23660__auto___30620,channel){
return (function (state_30610){var state_val_30611 = (state_30610[(1)]);if((state_val_30611 === (2)))
{var inst_30604 = (state_30610[(2)]);var inst_30605 = cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(request);var inst_30606 = cljs_http.client.decode_body(inst_30604,cljs.reader.read_string,"application/edn",inst_30605);var inst_30607 = (cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_30606) : cljs.core.async.put_BANG_.call(null,channel,inst_30606));var inst_30608 = (cljs.core.async.close_BANG_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.close_BANG_.cljs$core$IFn$_invoke$arity$1(channel) : cljs.core.async.close_BANG_.call(null,channel));var state_30610__$1 = (function (){var statearr_30612 = state_30610;(statearr_30612[(7)] = inst_30607);
return statearr_30612;
})();return (cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2(state_30610__$1,inst_30608) : cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30610__$1,inst_30608));
} else
{if((state_val_30611 === (1)))
{var inst_30602 = (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));var state_30610__$1 = state_30610;return (cljs.core.async.impl.ioc_helpers.take_BANG_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.async.impl.ioc_helpers.take_BANG_.cljs$core$IFn$_invoke$arity$3(state_30610__$1,(2),inst_30602) : cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30610__$1,(2),inst_30602));
} else
{return null;
}
}
});})(c__23660__auto___30620,channel))
;return ((function (switch__23645__auto__,c__23660__auto___30620,channel){
return (function() {
var state_machine__23646__auto__ = null;
var state_machine__23646__auto____0 = (function (){var statearr_30616 = [null,null,null,null,null,null,null,null];(statearr_30616[(0)] = state_machine__23646__auto__);
(statearr_30616[(1)] = (1));
return statearr_30616;
});
var state_machine__23646__auto____1 = (function (state_30610){while(true){
var ret_value__23647__auto__ = (function (){try{while(true){
var result__23648__auto__ = switch__23645__auto__(state_30610);if(cljs.core.keyword_identical_QMARK_(result__23648__auto__,cljs.core.constant$keyword$309))
{{
continue;
}
} else
{return result__23648__auto__;
}
break;
}
}catch (e30617){if((e30617 instanceof Object))
{var ex__23649__auto__ = e30617;var statearr_30618_30621 = state_30610;(statearr_30618_30621[(5)] = ex__23649__auto__);
(cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1(state_30610) : cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30610));
return cljs.core.constant$keyword$309;
} else
{if(cljs.core.constant$keyword$275)
{throw e30617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23647__auto__,cljs.core.constant$keyword$309))
{{
var G__30622 = state_30610;
state_30610 = G__30622;
continue;
}
} else
{return ret_value__23647__auto__;
}
break;
}
});
state_machine__23646__auto__ = function(state_30610){
switch(arguments.length){
case 0:
return state_machine__23646__auto____0.call(this);
case 1:
return state_machine__23646__auto____1.call(this,state_30610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23646__auto____0;
state_machine__23646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23646__auto____1;
return state_machine__23646__auto__;
})()
;})(switch__23645__auto__,c__23660__auto___30620,channel))
})();var state__23662__auto__ = (function (){var statearr_30619 = (f__23661__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23661__auto__.cljs$core$IFn$_invoke$arity$0() : f__23661__auto__.call(null));(statearr_30619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23660__auto___30620);
return statearr_30619;
})();return (cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1(state__23662__auto__) : cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23662__auto__));
});})(c__23660__auto___30620,channel))
) : cljs.core.async.impl.dispatch.run.call(null,((function (c__23660__auto___30620,channel){
return (function (){var f__23661__auto__ = (function (){var switch__23645__auto__ = ((function (c__23660__auto___30620,channel){
return (function (state_30610){var state_val_30611 = (state_30610[(1)]);if((state_val_30611 === (2)))
{var inst_30604 = (state_30610[(2)]);var inst_30605 = cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(request);var inst_30606 = cljs_http.client.decode_body(inst_30604,cljs.reader.read_string,"application/edn",inst_30605);var inst_30607 = (cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_30606) : cljs.core.async.put_BANG_.call(null,channel,inst_30606));var inst_30608 = (cljs.core.async.close_BANG_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.close_BANG_.cljs$core$IFn$_invoke$arity$1(channel) : cljs.core.async.close_BANG_.call(null,channel));var state_30610__$1 = (function (){var statearr_30612 = state_30610;(statearr_30612[(7)] = inst_30607);
return statearr_30612;
})();return (cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2(state_30610__$1,inst_30608) : cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30610__$1,inst_30608));
} else
{if((state_val_30611 === (1)))
{var inst_30602 = (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));var state_30610__$1 = state_30610;return (cljs.core.async.impl.ioc_helpers.take_BANG_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.async.impl.ioc_helpers.take_BANG_.cljs$core$IFn$_invoke$arity$3(state_30610__$1,(2),inst_30602) : cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30610__$1,(2),inst_30602));
} else
{return null;
}
}
});})(c__23660__auto___30620,channel))
;return ((function (switch__23645__auto__,c__23660__auto___30620,channel){
return (function() {
var state_machine__23646__auto__ = null;
var state_machine__23646__auto____0 = (function (){var statearr_30616 = [null,null,null,null,null,null,null,null];(statearr_30616[(0)] = state_machine__23646__auto__);
(statearr_30616[(1)] = (1));
return statearr_30616;
});
var state_machine__23646__auto____1 = (function (state_30610){while(true){
var ret_value__23647__auto__ = (function (){try{while(true){
var result__23648__auto__ = switch__23645__auto__(state_30610);if(cljs.core.keyword_identical_QMARK_(result__23648__auto__,cljs.core.constant$keyword$309))
{{
continue;
}
} else
{return result__23648__auto__;
}
break;
}
}catch (e30617){if((e30617 instanceof Object))
{var ex__23649__auto__ = e30617;var statearr_30618_30623 = state_30610;(statearr_30618_30623[(5)] = ex__23649__auto__);
(cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1(state_30610) : cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30610));
return cljs.core.constant$keyword$309;
} else
{if(cljs.core.constant$keyword$275)
{throw e30617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23647__auto__,cljs.core.constant$keyword$309))
{{
var G__30624 = state_30610;
state_30610 = G__30624;
continue;
}
} else
{return ret_value__23647__auto__;
}
break;
}
});
state_machine__23646__auto__ = function(state_30610){
switch(arguments.length){
case 0:
return state_machine__23646__auto____0.call(this);
case 1:
return state_machine__23646__auto____1.call(this,state_30610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23646__auto____0;
state_machine__23646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23646__auto____1;
return state_machine__23646__auto__;
})()
;})(switch__23645__auto__,c__23660__auto___30620,channel))
})();var state__23662__auto__ = (function (){var statearr_30619 = (f__23661__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23661__auto__.cljs$core$IFn$_invoke$arity$0() : f__23661__auto__.call(null));(statearr_30619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23660__auto___30620);
return statearr_30619;
})();return (cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1(state__23662__auto__) : cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23662__auto__));
});})(c__23660__auto___30620,channel))
));
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__30625){var vec__30627 = p__30625;var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30627,(0),null);return ((function (vec__30627,accept){
return (function (request){var temp__4124__auto__ = (function (){var or__20001__auto__ = cljs.core.constant$keyword$310.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__20001__auto__))
{return or__20001__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"accept"], null),accept__$1)) : client.call(null,cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"accept"], null),accept__$1)));
} else
{return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__30627,accept))
};
var wrap_accept = function (client,var_args){
var p__30625 = null;if (arguments.length > 1) {
  p__30625 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__30625);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__30628){
var client = cljs.core.first(arglist__30628);
var p__30625 = cljs.core.rest(arglist__30628);
return wrap_accept__delegate(client,p__30625);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__30629){var vec__30631 = p__30629;var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30631,(0),null);return ((function (vec__30631,content_type){
return (function (request){var temp__4124__auto__ = (function (){var or__20001__auto__ = cljs.core.constant$keyword$311.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__20001__auto__))
{return or__20001__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"content-type"], null),content_type__$1)) : client.call(null,cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"content-type"], null),content_type__$1)));
} else
{return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__30631,content_type))
};
var wrap_content_type = function (client,var_args){
var p__30629 = null;if (arguments.length > 1) {
  p__30629 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__30629);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__30632){
var client = cljs.core.first(arglist__30632);
var p__30629 = cljs.core.rest(arglist__30632);
return wrap_content_type__delegate(client,p__30629);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = cljs.core.constant$keyword$312.cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$312),cljs.core.constant$keyword$299,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"content-type"], null),"application/json")) : client.call(null,cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$312),cljs.core.constant$keyword$299,cljs_http.util.json_encode(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"content-type"], null),"application/json")));
} else
{return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = (cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 ? cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0() : cljs.core.async.chan.call(null));var c__23660__auto___30669 = (cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1)) : cljs.core.async.chan.call(null,(1)));(cljs.core.async.impl.dispatch.run.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.dispatch.run.cljs$core$IFn$_invoke$arity$1(((function (c__23660__auto___30669,channel){
return (function (){var f__23661__auto__ = (function (){var switch__23645__auto__ = ((function (c__23660__auto___30669,channel){
return (function (state_30659){var state_val_30660 = (state_30659[(1)]);if((state_val_30660 === (2)))
{var inst_30653 = (state_30659[(2)]);var inst_30654 = cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(request);var inst_30655 = cljs_http.client.decode_body(inst_30653,cljs_http.util.json_decode,"application/json",inst_30654);var inst_30656 = (cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_30655) : cljs.core.async.put_BANG_.call(null,channel,inst_30655));var inst_30657 = (cljs.core.async.close_BANG_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.close_BANG_.cljs$core$IFn$_invoke$arity$1(channel) : cljs.core.async.close_BANG_.call(null,channel));var state_30659__$1 = (function (){var statearr_30661 = state_30659;(statearr_30661[(7)] = inst_30656);
return statearr_30661;
})();return (cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2(state_30659__$1,inst_30657) : cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30659__$1,inst_30657));
} else
{if((state_val_30660 === (1)))
{var inst_30651 = (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));var state_30659__$1 = state_30659;return (cljs.core.async.impl.ioc_helpers.take_BANG_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.async.impl.ioc_helpers.take_BANG_.cljs$core$IFn$_invoke$arity$3(state_30659__$1,(2),inst_30651) : cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30659__$1,(2),inst_30651));
} else
{return null;
}
}
});})(c__23660__auto___30669,channel))
;return ((function (switch__23645__auto__,c__23660__auto___30669,channel){
return (function() {
var state_machine__23646__auto__ = null;
var state_machine__23646__auto____0 = (function (){var statearr_30665 = [null,null,null,null,null,null,null,null];(statearr_30665[(0)] = state_machine__23646__auto__);
(statearr_30665[(1)] = (1));
return statearr_30665;
});
var state_machine__23646__auto____1 = (function (state_30659){while(true){
var ret_value__23647__auto__ = (function (){try{while(true){
var result__23648__auto__ = switch__23645__auto__(state_30659);if(cljs.core.keyword_identical_QMARK_(result__23648__auto__,cljs.core.constant$keyword$309))
{{
continue;
}
} else
{return result__23648__auto__;
}
break;
}
}catch (e30666){if((e30666 instanceof Object))
{var ex__23649__auto__ = e30666;var statearr_30667_30670 = state_30659;(statearr_30667_30670[(5)] = ex__23649__auto__);
(cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1(state_30659) : cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30659));
return cljs.core.constant$keyword$309;
} else
{if(cljs.core.constant$keyword$275)
{throw e30666;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23647__auto__,cljs.core.constant$keyword$309))
{{
var G__30671 = state_30659;
state_30659 = G__30671;
continue;
}
} else
{return ret_value__23647__auto__;
}
break;
}
});
state_machine__23646__auto__ = function(state_30659){
switch(arguments.length){
case 0:
return state_machine__23646__auto____0.call(this);
case 1:
return state_machine__23646__auto____1.call(this,state_30659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23646__auto____0;
state_machine__23646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23646__auto____1;
return state_machine__23646__auto__;
})()
;})(switch__23645__auto__,c__23660__auto___30669,channel))
})();var state__23662__auto__ = (function (){var statearr_30668 = (f__23661__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23661__auto__.cljs$core$IFn$_invoke$arity$0() : f__23661__auto__.call(null));(statearr_30668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23660__auto___30669);
return statearr_30668;
})();return (cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1(state__23662__auto__) : cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23662__auto__));
});})(c__23660__auto___30669,channel))
) : cljs.core.async.impl.dispatch.run.call(null,((function (c__23660__auto___30669,channel){
return (function (){var f__23661__auto__ = (function (){var switch__23645__auto__ = ((function (c__23660__auto___30669,channel){
return (function (state_30659){var state_val_30660 = (state_30659[(1)]);if((state_val_30660 === (2)))
{var inst_30653 = (state_30659[(2)]);var inst_30654 = cljs.core.constant$keyword$301.cljs$core$IFn$_invoke$arity$1(request);var inst_30655 = cljs_http.client.decode_body(inst_30653,cljs_http.util.json_decode,"application/json",inst_30654);var inst_30656 = (cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,inst_30655) : cljs.core.async.put_BANG_.call(null,channel,inst_30655));var inst_30657 = (cljs.core.async.close_BANG_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.close_BANG_.cljs$core$IFn$_invoke$arity$1(channel) : cljs.core.async.close_BANG_.call(null,channel));var state_30659__$1 = (function (){var statearr_30661 = state_30659;(statearr_30661[(7)] = inst_30656);
return statearr_30661;
})();return (cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2 ? cljs.core.async.impl.ioc_helpers.return_chan.cljs$core$IFn$_invoke$arity$2(state_30659__$1,inst_30657) : cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30659__$1,inst_30657));
} else
{if((state_val_30660 === (1)))
{var inst_30651 = (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));var state_30659__$1 = state_30659;return (cljs.core.async.impl.ioc_helpers.take_BANG_.cljs$core$IFn$_invoke$arity$3 ? cljs.core.async.impl.ioc_helpers.take_BANG_.cljs$core$IFn$_invoke$arity$3(state_30659__$1,(2),inst_30651) : cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30659__$1,(2),inst_30651));
} else
{return null;
}
}
});})(c__23660__auto___30669,channel))
;return ((function (switch__23645__auto__,c__23660__auto___30669,channel){
return (function() {
var state_machine__23646__auto__ = null;
var state_machine__23646__auto____0 = (function (){var statearr_30665 = [null,null,null,null,null,null,null,null];(statearr_30665[(0)] = state_machine__23646__auto__);
(statearr_30665[(1)] = (1));
return statearr_30665;
});
var state_machine__23646__auto____1 = (function (state_30659){while(true){
var ret_value__23647__auto__ = (function (){try{while(true){
var result__23648__auto__ = switch__23645__auto__(state_30659);if(cljs.core.keyword_identical_QMARK_(result__23648__auto__,cljs.core.constant$keyword$309))
{{
continue;
}
} else
{return result__23648__auto__;
}
break;
}
}catch (e30666){if((e30666 instanceof Object))
{var ex__23649__auto__ = e30666;var statearr_30667_30672 = state_30659;(statearr_30667_30672[(5)] = ex__23649__auto__);
(cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.process_exception.cljs$core$IFn$_invoke$arity$1(state_30659) : cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30659));
return cljs.core.constant$keyword$309;
} else
{if(cljs.core.constant$keyword$275)
{throw e30666;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__23647__auto__,cljs.core.constant$keyword$309))
{{
var G__30673 = state_30659;
state_30659 = G__30673;
continue;
}
} else
{return ret_value__23647__auto__;
}
break;
}
});
state_machine__23646__auto__ = function(state_30659){
switch(arguments.length){
case 0:
return state_machine__23646__auto____0.call(this);
case 1:
return state_machine__23646__auto____1.call(this,state_30659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23646__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23646__auto____0;
state_machine__23646__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23646__auto____1;
return state_machine__23646__auto__;
})()
;})(switch__23645__auto__,c__23660__auto___30669,channel))
})();var state__23662__auto__ = (function (){var statearr_30668 = (f__23661__auto__.cljs$core$IFn$_invoke$arity$0 ? f__23661__auto__.cljs$core$IFn$_invoke$arity$0() : f__23661__auto__.call(null));(statearr_30668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23660__auto___30669);
return statearr_30668;
})();return (cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.cljs$core$IFn$_invoke$arity$1(state__23662__auto__) : cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23662__auto__));
});})(c__23660__auto___30669,channel))
));
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__30676){var map__30677 = p__30676;var map__30677__$1 = ((cljs.core.seq_QMARK_(map__30677))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30677):map__30677);var req = map__30677__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30677__$1,cljs.core.constant$keyword$288);if(cljs.core.truth_(query_params))
{return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$288),cljs.core.constant$keyword$296,cljs_http.client.generate_query_string(query_params))) : client.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$288),cljs.core.constant$keyword$296,cljs_http.client.generate_query_string(query_params))));
} else
{return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__30680){var map__30681 = p__30680;var map__30681__$1 = ((cljs.core.seq_QMARK_(map__30681))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30681):map__30681);var request = map__30681__$1;var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30681__$1,cljs.core.constant$keyword$301);var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30681__$1,cljs.core.constant$keyword$313);if(cljs.core.truth_((function (){var and__19989__auto__ = form_params;if(cljs.core.truth_(and__19989__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$314,null,cljs.core.constant$keyword$315,null,cljs.core.constant$keyword$316,null,cljs.core.constant$keyword$317,null], null), null).call(null,request_method);
} else
{return and__19989__auto__;
}
})()))
{return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$313),cljs.core.constant$keyword$299,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"content-type"], null),"application/x-www-form-urlencoded")) : client.call(null,cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.constant$keyword$313),cljs.core.constant$keyword$299,cljs_http.client.generate_query_string(form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"content-type"], null),"application/x-www-form-urlencoded")));
} else
{return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,cljs.core.constant$keyword$318], null),(Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null))):request)) : client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_())?cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,cljs.core.constant$keyword$318], null),(Math.random.cljs$core$IFn$_invoke$arity$0 ? Math.random.cljs$core$IFn$_invoke$arity$0() : Math.random.call(null))):request)));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$319.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$319),cljs.core.constant$keyword$301,m)) : client.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$319),cljs.core.constant$keyword$301,m)));
} else
{return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__30682_SHARP_){return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30682_SHARP_,cljs.core.constant$keyword$292,server_name)) : client.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30682_SHARP_,cljs.core.constant$keyword$292,server_name)));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__30686){var map__30687 = p__30686;var map__30687__$1 = ((cljs.core.seq_QMARK_(map__30687))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30687):map__30687);var req = map__30687__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30687__$1,cljs.core.constant$keyword$288);var temp__4124__auto__ = cljs_http.client.parse_url(cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$320),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288], null),((function (spec,temp__4124__auto__,map__30687,map__30687__$1,req,query_params){
return (function (p1__30683_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__30683_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__30687,map__30687__$1,req,query_params))
)) : client.call(null,cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.constant$keyword$320),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288], null),((function (spec,temp__4124__auto__,map__30687,map__30687__$1,req,query_params){
return (function (p1__30683_SHARP_){return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__30683_SHARP_,query_params], 0));
});})(spec,temp__4124__auto__,map__30687,map__30687__$1,req,query_params))
)));
} else
{return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__30688){var vec__30690 = p__30688;var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30690,(0),null);return ((function (vec__30690,credentials){
return (function (req){var credentials__$1 = (function (){var or__20001__auto__ = cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__20001__auto__))
{return or__20001__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_(credentials__$1)))
{return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"authorization"], null),cljs_http.util.basic_auth(credentials__$1))) : client.call(null,cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"authorization"], null),cljs_http.util.basic_auth(credentials__$1))));
} else
{return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__30690,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__30688 = null;if (arguments.length > 1) {
  p__30688 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__30688);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__30691){
var client = cljs.core.first(arglist__30691);
var p__30688 = cljs.core.rest(arglist__30691);
return wrap_basic_auth__delegate(client,p__30688);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)))) : client.call(null,cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.constant$keyword$322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"authorization"], null),("Bearer "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)))));
} else
{return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_android_cors_bugfix(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__30692){var vec__30694 = p__30692;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30694,(0),null);return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$315,cljs.core.constant$keyword$320,url], null)], 0))) : cljs_http.client.request.call(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$315,cljs.core.constant$keyword$320,url], null)], 0))));
};
var delete$ = function (url,var_args){
var p__30692 = null;if (arguments.length > 1) {
  p__30692 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__30692);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__30695){
var url = cljs.core.first(arglist__30695);
var p__30692 = cljs.core.rest(arglist__30695);
return delete$__delegate(url,p__30692);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__30696){var vec__30698 = p__30696;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30698,(0),null);return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$302,cljs.core.constant$keyword$320,url], null)], 0))) : cljs_http.client.request.call(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$302,cljs.core.constant$keyword$320,url], null)], 0))));
};
var get = function (url,var_args){
var p__30696 = null;if (arguments.length > 1) {
  p__30696 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__30696);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__30699){
var url = cljs.core.first(arglist__30699);
var p__30696 = cljs.core.rest(arglist__30699);
return get__delegate(url,p__30696);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__30700){var vec__30702 = p__30700;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30702,(0),null);return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$307,cljs.core.constant$keyword$320,url], null)], 0))) : cljs_http.client.request.call(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$307,cljs.core.constant$keyword$320,url], null)], 0))));
};
var head = function (url,var_args){
var p__30700 = null;if (arguments.length > 1) {
  p__30700 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__30700);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__30703){
var url = cljs.core.first(arglist__30703);
var p__30700 = cljs.core.rest(arglist__30703);
return head__delegate(url,p__30700);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__30704){var vec__30706 = p__30704;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30706,(0),null);return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$323,cljs.core.constant$keyword$320,url], null)], 0))) : cljs_http.client.request.call(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$323,cljs.core.constant$keyword$320,url], null)], 0))));
};
var move = function (url,var_args){
var p__30704 = null;if (arguments.length > 1) {
  p__30704 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__30704);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__30707){
var url = cljs.core.first(arglist__30707);
var p__30704 = cljs.core.rest(arglist__30707);
return move__delegate(url,p__30704);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__30708){var vec__30710 = p__30708;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30710,(0),null);return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$324,cljs.core.constant$keyword$320,url], null)], 0))) : cljs_http.client.request.call(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$324,cljs.core.constant$keyword$320,url], null)], 0))));
};
var options = function (url,var_args){
var p__30708 = null;if (arguments.length > 1) {
  p__30708 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__30708);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__30711){
var url = cljs.core.first(arglist__30711);
var p__30708 = cljs.core.rest(arglist__30711);
return options__delegate(url,p__30708);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__30712){var vec__30714 = p__30712;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30714,(0),null);return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$314,cljs.core.constant$keyword$320,url], null)], 0))) : cljs_http.client.request.call(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$314,cljs.core.constant$keyword$320,url], null)], 0))));
};
var patch = function (url,var_args){
var p__30712 = null;if (arguments.length > 1) {
  p__30712 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__30712);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__30715){
var url = cljs.core.first(arglist__30715);
var p__30712 = cljs.core.rest(arglist__30715);
return patch__delegate(url,p__30712);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__30716){var vec__30718 = p__30716;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30718,(0),null);return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$316,cljs.core.constant$keyword$320,url], null)], 0))) : cljs_http.client.request.call(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$316,cljs.core.constant$keyword$320,url], null)], 0))));
};
var post = function (url,var_args){
var p__30716 = null;if (arguments.length > 1) {
  p__30716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__30716);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__30719){
var url = cljs.core.first(arglist__30719);
var p__30716 = cljs.core.rest(arglist__30719);
return post__delegate(url,p__30716);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__30720){var vec__30722 = p__30720;var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30722,(0),null);return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$317,cljs.core.constant$keyword$320,url], null)], 0))) : cljs_http.client.request.call(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$319,cljs.core.constant$keyword$317,cljs.core.constant$keyword$320,url], null)], 0))));
};
var put = function (url,var_args){
var p__30720 = null;if (arguments.length > 1) {
  p__30720 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__30720);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__30723){
var url = cljs.core.first(arglist__30723);
var p__30720 = cljs.core.rest(arglist__30723);
return put__delegate(url,p__30720);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
//# sourceMappingURL=client.js.map