// Compiled by ClojureScript 0.0-2227
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18264 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18264 = (function (f,fn_handler,meta18265){
this.f = f;
this.fn_handler = fn_handler;
this.meta18265 = meta18265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18264.cljs$lang$type = true;
cljs.core.async.t18264.cljs$lang$ctorStr = "cljs.core.async/t18264";
cljs.core.async.t18264.cljs$lang$ctorPrWriter = (function (this__10848__auto__,writer__10849__auto__,opt__10850__auto__){return cljs.core._write.call(null,writer__10849__auto__,"cljs.core.async/t18264");
});
cljs.core.async.t18264.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18266){var self__ = this;
var _18266__$1 = this;return self__.meta18265;
});
cljs.core.async.t18264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18266,meta18265__$1){var self__ = this;
var _18266__$1 = this;return (new cljs.core.async.t18264(self__.f,self__.fn_handler,meta18265__$1));
});
cljs.core.async.__GT_t18264 = (function __GT_t18264(f__$1,fn_handler__$1,meta18265){return (new cljs.core.async.t18264(f__$1,fn_handler__$1,meta18265));
});
}
return (new cljs.core.async.t18264(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18268 = buff;if(G__18268)
{var bit__10931__auto__ = null;if(cljs.core.truth_((function (){var or__10281__auto__ = bit__10931__auto__;if(cljs.core.truth_(or__10281__auto__))
{return or__10281__auto__;
} else
{return G__18268.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18268.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18268);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18268);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_18269 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18269);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18269,ret){
return (function (){return fn1.call(null,val_18269);
});})(val_18269,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__11137__auto___18270 = n;var x_18271 = 0;while(true){
if((x_18271 < n__11137__auto___18270))
{(a[x_18271] = 0);
{
var G__18272 = (x_18271 + 1);
x_18271 = G__18272;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__18273 = (i + 1);
i = G__18273;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18277 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18277 = (function (flag,alt_flag,meta18278){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18278 = meta18278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18277.cljs$lang$type = true;
cljs.core.async.t18277.cljs$lang$ctorStr = "cljs.core.async/t18277";
cljs.core.async.t18277.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__10848__auto__,writer__10849__auto__,opt__10850__auto__){return cljs.core._write.call(null,writer__10849__auto__,"cljs.core.async/t18277");
});})(flag))
;
cljs.core.async.t18277.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t18277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t18277.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18279){var self__ = this;
var _18279__$1 = this;return self__.meta18278;
});})(flag))
;
cljs.core.async.t18277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18279,meta18278__$1){var self__ = this;
var _18279__$1 = this;return (new cljs.core.async.t18277(self__.flag,self__.alt_flag,meta18278__$1));
});})(flag))
;
cljs.core.async.__GT_t18277 = ((function (flag){
return (function __GT_t18277(flag__$1,alt_flag__$1,meta18278){return (new cljs.core.async.t18277(flag__$1,alt_flag__$1,meta18278));
});})(flag))
;
}
return (new cljs.core.async.t18277(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18283 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18283 = (function (cb,flag,alt_handler,meta18284){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18284 = meta18284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18283.cljs$lang$type = true;
cljs.core.async.t18283.cljs$lang$ctorStr = "cljs.core.async/t18283";
cljs.core.async.t18283.cljs$lang$ctorPrWriter = (function (this__10848__auto__,writer__10849__auto__,opt__10850__auto__){return cljs.core._write.call(null,writer__10849__auto__,"cljs.core.async/t18283");
});
cljs.core.async.t18283.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18285){var self__ = this;
var _18285__$1 = this;return self__.meta18284;
});
cljs.core.async.t18283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18285,meta18284__$1){var self__ = this;
var _18285__$1 = this;return (new cljs.core.async.t18283(self__.cb,self__.flag,self__.alt_handler,meta18284__$1));
});
cljs.core.async.__GT_t18283 = (function __GT_t18283(cb__$1,flag__$1,alt_handler__$1,meta18284){return (new cljs.core.async.t18283(cb__$1,flag__$1,alt_handler__$1,meta18284));
});
}
return (new cljs.core.async.t18283(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18286_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18286_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18287_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18287_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__10281__auto__ = wport;if(cljs.core.truth_(or__10281__auto__))
{return or__10281__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__18288 = (i + 1);
i = G__18288;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__10281__auto__ = ret;if(cljs.core.truth_(or__10281__auto__))
{return or__10281__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__10269__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__10269__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__10269__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__18289){var map__18291 = p__18289;var map__18291__$1 = ((cljs.core.seq_QMARK_.call(null,map__18291))?cljs.core.apply.call(null,cljs.core.hash_map,map__18291):map__18291);var opts = map__18291__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__18289 = null;if (arguments.length > 1) {
  p__18289 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18289);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18292){
var ports = cljs.core.first(arglist__18292);
var p__18289 = cljs.core.rest(arglist__18292);
return alts_BANG___delegate(ports,p__18289);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t18300 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18300 = (function (ch,f,map_LT_,meta18301){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18301 = meta18301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18300.cljs$lang$type = true;
cljs.core.async.t18300.cljs$lang$ctorStr = "cljs.core.async/t18300";
cljs.core.async.t18300.cljs$lang$ctorPrWriter = (function (this__10848__auto__,writer__10849__auto__,opt__10850__auto__){return cljs.core._write.call(null,writer__10849__auto__,"cljs.core.async/t18300");
});
cljs.core.async.t18300.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18300.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t18300.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18300.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t18303 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18303 = (function (fn1,_,meta18301,ch,f,map_LT_,meta18304){
this.fn1 = fn1;
this._ = _;
this.meta18301 = meta18301;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18304 = meta18304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18303.cljs$lang$type = true;
cljs.core.async.t18303.cljs$lang$ctorStr = "cljs.core.async/t18303";
cljs.core.async.t18303.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__10848__auto__,writer__10849__auto__,opt__10850__auto__){return cljs.core._write.call(null,writer__10849__auto__,"cljs.core.async/t18303");
});})(___$1))
;
cljs.core.async.t18303.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18303.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t18303.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t18303.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__18293_SHARP_){return f1.call(null,(((p1__18293_SHARP_ == null))?null:self__.f.call(null,p1__18293_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t18303.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18305){var self__ = this;
var _18305__$1 = this;return self__.meta18304;
});})(___$1))
;
cljs.core.async.t18303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18305,meta18304__$1){var self__ = this;
var _18305__$1 = this;return (new cljs.core.async.t18303(self__.fn1,self__._,self__.meta18301,self__.ch,self__.f,self__.map_LT_,meta18304__$1));
});})(___$1))
;
cljs.core.async.__GT_t18303 = ((function (___$1){
return (function __GT_t18303(fn1__$1,___$2,meta18301__$1,ch__$2,f__$2,map_LT___$2,meta18304){return (new cljs.core.async.t18303(fn1__$1,___$2,meta18301__$1,ch__$2,f__$2,map_LT___$2,meta18304));
});})(___$1))
;
}
return (new cljs.core.async.t18303(fn1,___$1,self__.meta18301,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__10269__auto__ = ret;if(cljs.core.truth_(and__10269__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__10269__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t18300.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18300.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18300.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t18300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18302){var self__ = this;
var _18302__$1 = this;return self__.meta18301;
});
cljs.core.async.t18300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18302,meta18301__$1){var self__ = this;
var _18302__$1 = this;return (new cljs.core.async.t18300(self__.ch,self__.f,self__.map_LT_,meta18301__$1));
});
cljs.core.async.__GT_t18300 = (function __GT_t18300(ch__$1,f__$1,map_LT___$1,meta18301){return (new cljs.core.async.t18300(ch__$1,f__$1,map_LT___$1,meta18301));
});
}
return (new cljs.core.async.t18300(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t18309 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18309 = (function (ch,f,map_GT_,meta18310){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18310 = meta18310;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18309.cljs$lang$type = true;
cljs.core.async.t18309.cljs$lang$ctorStr = "cljs.core.async/t18309";
cljs.core.async.t18309.cljs$lang$ctorPrWriter = (function (this__10848__auto__,writer__10849__auto__,opt__10850__auto__){return cljs.core._write.call(null,writer__10849__auto__,"cljs.core.async/t18309");
});
cljs.core.async.t18309.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18309.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t18309.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18309.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18309.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18309.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18311){var self__ = this;
var _18311__$1 = this;return self__.meta18310;
});
cljs.core.async.t18309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18311,meta18310__$1){var self__ = this;
var _18311__$1 = this;return (new cljs.core.async.t18309(self__.ch,self__.f,self__.map_GT_,meta18310__$1));
});
cljs.core.async.__GT_t18309 = (function __GT_t18309(ch__$1,f__$1,map_GT___$1,meta18310){return (new cljs.core.async.t18309(ch__$1,f__$1,map_GT___$1,meta18310));
});
}
return (new cljs.core.async.t18309(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t18315 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18315 = (function (ch,p,filter_GT_,meta18316){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18316 = meta18316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18315.cljs$lang$type = true;
cljs.core.async.t18315.cljs$lang$ctorStr = "cljs.core.async/t18315";
cljs.core.async.t18315.cljs$lang$ctorPrWriter = (function (this__10848__auto__,writer__10849__auto__,opt__10850__auto__){return cljs.core._write.call(null,writer__10849__auto__,"cljs.core.async/t18315");
});
cljs.core.async.t18315.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18315.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t18315.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18315.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18315.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18315.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18315.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t18315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18317){var self__ = this;
var _18317__$1 = this;return self__.meta18316;
});
cljs.core.async.t18315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18317,meta18316__$1){var self__ = this;
var _18317__$1 = this;return (new cljs.core.async.t18315(self__.ch,self__.p,self__.filter_GT_,meta18316__$1));
});
cljs.core.async.__GT_t18315 = (function __GT_t18315(ch__$1,p__$1,filter_GT___$1,meta18316){return (new cljs.core.async.t18315(ch__$1,p__$1,filter_GT___$1,meta18316));
});
}
return (new cljs.core.async.t18315(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15366__auto___18400 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto___18400,out){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto___18400,out){
return (function (state_18379){var state_val_18380 = (state_18379[1]);if((state_val_18380 === 1))
{var state_18379__$1 = state_18379;var statearr_18381_18401 = state_18379__$1;(statearr_18381_18401[2] = null);
(statearr_18381_18401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18380 === 2))
{var state_18379__$1 = state_18379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18379__$1,4,ch);
} else
{if((state_val_18380 === 3))
{var inst_18377 = (state_18379[2]);var state_18379__$1 = state_18379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18379__$1,inst_18377);
} else
{if((state_val_18380 === 4))
{var inst_18361 = (state_18379[7]);var inst_18361__$1 = (state_18379[2]);var inst_18362 = (inst_18361__$1 == null);var state_18379__$1 = (function (){var statearr_18382 = state_18379;(statearr_18382[7] = inst_18361__$1);
return statearr_18382;
})();if(cljs.core.truth_(inst_18362))
{var statearr_18383_18402 = state_18379__$1;(statearr_18383_18402[1] = 5);
} else
{var statearr_18384_18403 = state_18379__$1;(statearr_18384_18403[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18380 === 5))
{var inst_18364 = cljs.core.async.close_BANG_.call(null,out);var state_18379__$1 = state_18379;var statearr_18385_18404 = state_18379__$1;(statearr_18385_18404[2] = inst_18364);
(statearr_18385_18404[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18380 === 6))
{var inst_18361 = (state_18379[7]);var inst_18366 = p.call(null,inst_18361);var state_18379__$1 = state_18379;if(cljs.core.truth_(inst_18366))
{var statearr_18386_18405 = state_18379__$1;(statearr_18386_18405[1] = 8);
} else
{var statearr_18387_18406 = state_18379__$1;(statearr_18387_18406[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18380 === 7))
{var inst_18375 = (state_18379[2]);var state_18379__$1 = state_18379;var statearr_18388_18407 = state_18379__$1;(statearr_18388_18407[2] = inst_18375);
(statearr_18388_18407[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18380 === 8))
{var inst_18361 = (state_18379[7]);var state_18379__$1 = state_18379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18379__$1,11,out,inst_18361);
} else
{if((state_val_18380 === 9))
{var state_18379__$1 = state_18379;var statearr_18389_18408 = state_18379__$1;(statearr_18389_18408[2] = null);
(statearr_18389_18408[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18380 === 10))
{var inst_18372 = (state_18379[2]);var state_18379__$1 = (function (){var statearr_18390 = state_18379;(statearr_18390[8] = inst_18372);
return statearr_18390;
})();var statearr_18391_18409 = state_18379__$1;(statearr_18391_18409[2] = null);
(statearr_18391_18409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18380 === 11))
{var inst_18369 = (state_18379[2]);var state_18379__$1 = state_18379;var statearr_18392_18410 = state_18379__$1;(statearr_18392_18410[2] = inst_18369);
(statearr_18392_18410[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto___18400,out))
;return ((function (switch__15295__auto__,c__15366__auto___18400,out){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_18396 = [null,null,null,null,null,null,null,null,null];(statearr_18396[0] = state_machine__15296__auto__);
(statearr_18396[1] = 1);
return statearr_18396;
});
var state_machine__15296__auto____1 = (function (state_18379){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_18379);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e18397){if((e18397 instanceof Object))
{var ex__15299__auto__ = e18397;var statearr_18398_18411 = state_18379;(statearr_18398_18411[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18379);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18412 = state_18379;
state_18379 = G__18412;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_18379){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_18379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto___18400,out))
})();var state__15368__auto__ = (function (){var statearr_18399 = f__15367__auto__.call(null);(statearr_18399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto___18400);
return statearr_18399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto___18400,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__15366__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto__){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto__){
return (function (state_18578){var state_val_18579 = (state_18578[1]);if((state_val_18579 === 1))
{var state_18578__$1 = state_18578;var statearr_18580_18621 = state_18578__$1;(statearr_18580_18621[2] = null);
(statearr_18580_18621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 2))
{var state_18578__$1 = state_18578;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18578__$1,4,in$);
} else
{if((state_val_18579 === 3))
{var inst_18576 = (state_18578[2]);var state_18578__$1 = state_18578;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18578__$1,inst_18576);
} else
{if((state_val_18579 === 4))
{var inst_18519 = (state_18578[7]);var inst_18519__$1 = (state_18578[2]);var inst_18520 = (inst_18519__$1 == null);var state_18578__$1 = (function (){var statearr_18581 = state_18578;(statearr_18581[7] = inst_18519__$1);
return statearr_18581;
})();if(cljs.core.truth_(inst_18520))
{var statearr_18582_18622 = state_18578__$1;(statearr_18582_18622[1] = 5);
} else
{var statearr_18583_18623 = state_18578__$1;(statearr_18583_18623[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 5))
{var inst_18522 = cljs.core.async.close_BANG_.call(null,out);var state_18578__$1 = state_18578;var statearr_18584_18624 = state_18578__$1;(statearr_18584_18624[2] = inst_18522);
(statearr_18584_18624[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 6))
{var inst_18519 = (state_18578[7]);var inst_18528 = f.call(null,inst_18519);var inst_18529 = cljs.core.seq.call(null,inst_18528);var inst_18530 = inst_18529;var inst_18531 = null;var inst_18532 = 0;var inst_18533 = 0;var state_18578__$1 = (function (){var statearr_18585 = state_18578;(statearr_18585[8] = inst_18532);
(statearr_18585[9] = inst_18533);
(statearr_18585[10] = inst_18531);
(statearr_18585[11] = inst_18530);
return statearr_18585;
})();var statearr_18586_18625 = state_18578__$1;(statearr_18586_18625[2] = null);
(statearr_18586_18625[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 7))
{var inst_18574 = (state_18578[2]);var state_18578__$1 = state_18578;var statearr_18587_18626 = state_18578__$1;(statearr_18587_18626[2] = inst_18574);
(statearr_18587_18626[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 8))
{var inst_18532 = (state_18578[8]);var inst_18533 = (state_18578[9]);var inst_18535 = (inst_18533 < inst_18532);var inst_18536 = inst_18535;var state_18578__$1 = state_18578;if(cljs.core.truth_(inst_18536))
{var statearr_18588_18627 = state_18578__$1;(statearr_18588_18627[1] = 10);
} else
{var statearr_18589_18628 = state_18578__$1;(statearr_18589_18628[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 9))
{var inst_18566 = (state_18578[2]);var inst_18567 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_18578__$1 = (function (){var statearr_18590 = state_18578;(statearr_18590[12] = inst_18566);
return statearr_18590;
})();if(cljs.core.truth_(inst_18567))
{var statearr_18591_18629 = state_18578__$1;(statearr_18591_18629[1] = 21);
} else
{var statearr_18592_18630 = state_18578__$1;(statearr_18592_18630[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 10))
{var inst_18533 = (state_18578[9]);var inst_18531 = (state_18578[10]);var inst_18538 = cljs.core._nth.call(null,inst_18531,inst_18533);var state_18578__$1 = state_18578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18578__$1,13,out,inst_18538);
} else
{if((state_val_18579 === 11))
{var inst_18530 = (state_18578[11]);var inst_18544 = (state_18578[13]);var inst_18544__$1 = cljs.core.seq.call(null,inst_18530);var state_18578__$1 = (function (){var statearr_18596 = state_18578;(statearr_18596[13] = inst_18544__$1);
return statearr_18596;
})();if(inst_18544__$1)
{var statearr_18597_18631 = state_18578__$1;(statearr_18597_18631[1] = 14);
} else
{var statearr_18598_18632 = state_18578__$1;(statearr_18598_18632[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 12))
{var inst_18564 = (state_18578[2]);var state_18578__$1 = state_18578;var statearr_18599_18633 = state_18578__$1;(statearr_18599_18633[2] = inst_18564);
(statearr_18599_18633[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 13))
{var inst_18532 = (state_18578[8]);var inst_18533 = (state_18578[9]);var inst_18531 = (state_18578[10]);var inst_18530 = (state_18578[11]);var inst_18540 = (state_18578[2]);var inst_18541 = (inst_18533 + 1);var tmp18593 = inst_18532;var tmp18594 = inst_18531;var tmp18595 = inst_18530;var inst_18530__$1 = tmp18595;var inst_18531__$1 = tmp18594;var inst_18532__$1 = tmp18593;var inst_18533__$1 = inst_18541;var state_18578__$1 = (function (){var statearr_18600 = state_18578;(statearr_18600[8] = inst_18532__$1);
(statearr_18600[9] = inst_18533__$1);
(statearr_18600[10] = inst_18531__$1);
(statearr_18600[11] = inst_18530__$1);
(statearr_18600[14] = inst_18540);
return statearr_18600;
})();var statearr_18601_18634 = state_18578__$1;(statearr_18601_18634[2] = null);
(statearr_18601_18634[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 14))
{var inst_18544 = (state_18578[13]);var inst_18546 = cljs.core.chunked_seq_QMARK_.call(null,inst_18544);var state_18578__$1 = state_18578;if(inst_18546)
{var statearr_18602_18635 = state_18578__$1;(statearr_18602_18635[1] = 17);
} else
{var statearr_18603_18636 = state_18578__$1;(statearr_18603_18636[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 15))
{var state_18578__$1 = state_18578;var statearr_18604_18637 = state_18578__$1;(statearr_18604_18637[2] = null);
(statearr_18604_18637[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 16))
{var inst_18562 = (state_18578[2]);var state_18578__$1 = state_18578;var statearr_18605_18638 = state_18578__$1;(statearr_18605_18638[2] = inst_18562);
(statearr_18605_18638[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 17))
{var inst_18544 = (state_18578[13]);var inst_18548 = cljs.core.chunk_first.call(null,inst_18544);var inst_18549 = cljs.core.chunk_rest.call(null,inst_18544);var inst_18550 = cljs.core.count.call(null,inst_18548);var inst_18530 = inst_18549;var inst_18531 = inst_18548;var inst_18532 = inst_18550;var inst_18533 = 0;var state_18578__$1 = (function (){var statearr_18606 = state_18578;(statearr_18606[8] = inst_18532);
(statearr_18606[9] = inst_18533);
(statearr_18606[10] = inst_18531);
(statearr_18606[11] = inst_18530);
return statearr_18606;
})();var statearr_18607_18639 = state_18578__$1;(statearr_18607_18639[2] = null);
(statearr_18607_18639[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 18))
{var inst_18544 = (state_18578[13]);var inst_18553 = cljs.core.first.call(null,inst_18544);var state_18578__$1 = state_18578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18578__$1,20,out,inst_18553);
} else
{if((state_val_18579 === 19))
{var inst_18559 = (state_18578[2]);var state_18578__$1 = state_18578;var statearr_18608_18640 = state_18578__$1;(statearr_18608_18640[2] = inst_18559);
(statearr_18608_18640[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 20))
{var inst_18544 = (state_18578[13]);var inst_18555 = (state_18578[2]);var inst_18556 = cljs.core.next.call(null,inst_18544);var inst_18530 = inst_18556;var inst_18531 = null;var inst_18532 = 0;var inst_18533 = 0;var state_18578__$1 = (function (){var statearr_18609 = state_18578;(statearr_18609[8] = inst_18532);
(statearr_18609[9] = inst_18533);
(statearr_18609[10] = inst_18531);
(statearr_18609[11] = inst_18530);
(statearr_18609[15] = inst_18555);
return statearr_18609;
})();var statearr_18610_18641 = state_18578__$1;(statearr_18610_18641[2] = null);
(statearr_18610_18641[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 21))
{var state_18578__$1 = state_18578;var statearr_18611_18642 = state_18578__$1;(statearr_18611_18642[2] = null);
(statearr_18611_18642[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 22))
{var state_18578__$1 = state_18578;var statearr_18612_18643 = state_18578__$1;(statearr_18612_18643[2] = null);
(statearr_18612_18643[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18579 === 23))
{var inst_18572 = (state_18578[2]);var state_18578__$1 = state_18578;var statearr_18613_18644 = state_18578__$1;(statearr_18613_18644[2] = inst_18572);
(statearr_18613_18644[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto__))
;return ((function (switch__15295__auto__,c__15366__auto__){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_18617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18617[0] = state_machine__15296__auto__);
(statearr_18617[1] = 1);
return statearr_18617;
});
var state_machine__15296__auto____1 = (function (state_18578){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_18578);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e18618){if((e18618 instanceof Object))
{var ex__15299__auto__ = e18618;var statearr_18619_18645 = state_18578;(statearr_18619_18645[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18578);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18646 = state_18578;
state_18578 = G__18646;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_18578){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_18578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto__))
})();var state__15368__auto__ = (function (){var statearr_18620 = f__15367__auto__.call(null);(statearr_18620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto__);
return statearr_18620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto__))
);
return c__15366__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__15366__auto___18741 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto___18741){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto___18741){
return (function (state_18717){var state_val_18718 = (state_18717[1]);if((state_val_18718 === 1))
{var state_18717__$1 = state_18717;var statearr_18719_18742 = state_18717__$1;(statearr_18719_18742[2] = null);
(statearr_18719_18742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18718 === 2))
{var state_18717__$1 = state_18717;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18717__$1,4,from);
} else
{if((state_val_18718 === 3))
{var inst_18715 = (state_18717[2]);var state_18717__$1 = state_18717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18717__$1,inst_18715);
} else
{if((state_val_18718 === 4))
{var inst_18696 = (state_18717[7]);var inst_18696__$1 = (state_18717[2]);var inst_18697 = (inst_18696__$1 == null);var state_18717__$1 = (function (){var statearr_18720 = state_18717;(statearr_18720[7] = inst_18696__$1);
return statearr_18720;
})();if(cljs.core.truth_(inst_18697))
{var statearr_18721_18743 = state_18717__$1;(statearr_18721_18743[1] = 5);
} else
{var statearr_18722_18744 = state_18717__$1;(statearr_18722_18744[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18718 === 5))
{var state_18717__$1 = state_18717;if(cljs.core.truth_(close_QMARK_))
{var statearr_18723_18745 = state_18717__$1;(statearr_18723_18745[1] = 8);
} else
{var statearr_18724_18746 = state_18717__$1;(statearr_18724_18746[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18718 === 6))
{var inst_18696 = (state_18717[7]);var state_18717__$1 = state_18717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18717__$1,11,to,inst_18696);
} else
{if((state_val_18718 === 7))
{var inst_18713 = (state_18717[2]);var state_18717__$1 = state_18717;var statearr_18725_18747 = state_18717__$1;(statearr_18725_18747[2] = inst_18713);
(statearr_18725_18747[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18718 === 8))
{var inst_18700 = cljs.core.async.close_BANG_.call(null,to);var state_18717__$1 = state_18717;var statearr_18726_18748 = state_18717__$1;(statearr_18726_18748[2] = inst_18700);
(statearr_18726_18748[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18718 === 9))
{var state_18717__$1 = state_18717;var statearr_18727_18749 = state_18717__$1;(statearr_18727_18749[2] = null);
(statearr_18727_18749[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18718 === 10))
{var inst_18703 = (state_18717[2]);var state_18717__$1 = state_18717;var statearr_18728_18750 = state_18717__$1;(statearr_18728_18750[2] = inst_18703);
(statearr_18728_18750[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18718 === 11))
{var inst_18706 = (state_18717[2]);var state_18717__$1 = state_18717;if(cljs.core.truth_(inst_18706))
{var statearr_18729_18751 = state_18717__$1;(statearr_18729_18751[1] = 12);
} else
{var statearr_18730_18752 = state_18717__$1;(statearr_18730_18752[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18718 === 12))
{var state_18717__$1 = state_18717;var statearr_18731_18753 = state_18717__$1;(statearr_18731_18753[2] = null);
(statearr_18731_18753[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18718 === 13))
{var state_18717__$1 = state_18717;var statearr_18732_18754 = state_18717__$1;(statearr_18732_18754[2] = null);
(statearr_18732_18754[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18718 === 14))
{var inst_18711 = (state_18717[2]);var state_18717__$1 = state_18717;var statearr_18733_18755 = state_18717__$1;(statearr_18733_18755[2] = inst_18711);
(statearr_18733_18755[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto___18741))
;return ((function (switch__15295__auto__,c__15366__auto___18741){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_18737 = [null,null,null,null,null,null,null,null];(statearr_18737[0] = state_machine__15296__auto__);
(statearr_18737[1] = 1);
return statearr_18737;
});
var state_machine__15296__auto____1 = (function (state_18717){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_18717);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e18738){if((e18738 instanceof Object))
{var ex__15299__auto__ = e18738;var statearr_18739_18756 = state_18717;(statearr_18739_18756[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18717);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18757 = state_18717;
state_18717 = G__18757;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_18717){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_18717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto___18741))
})();var state__15368__auto__ = (function (){var statearr_18740 = f__15367__auto__.call(null);(statearr_18740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto___18741);
return statearr_18740;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto___18741))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__15366__auto___18858 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto___18858,tc,fc){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto___18858,tc,fc){
return (function (state_18833){var state_val_18834 = (state_18833[1]);if((state_val_18834 === 1))
{var state_18833__$1 = state_18833;var statearr_18835_18859 = state_18833__$1;(statearr_18835_18859[2] = null);
(statearr_18835_18859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18834 === 2))
{var state_18833__$1 = state_18833;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18833__$1,4,ch);
} else
{if((state_val_18834 === 3))
{var inst_18831 = (state_18833[2]);var state_18833__$1 = state_18833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18833__$1,inst_18831);
} else
{if((state_val_18834 === 4))
{var inst_18810 = (state_18833[7]);var inst_18810__$1 = (state_18833[2]);var inst_18811 = (inst_18810__$1 == null);var state_18833__$1 = (function (){var statearr_18836 = state_18833;(statearr_18836[7] = inst_18810__$1);
return statearr_18836;
})();if(cljs.core.truth_(inst_18811))
{var statearr_18837_18860 = state_18833__$1;(statearr_18837_18860[1] = 5);
} else
{var statearr_18838_18861 = state_18833__$1;(statearr_18838_18861[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18834 === 5))
{var inst_18813 = cljs.core.async.close_BANG_.call(null,tc);var inst_18814 = cljs.core.async.close_BANG_.call(null,fc);var state_18833__$1 = (function (){var statearr_18839 = state_18833;(statearr_18839[8] = inst_18813);
return statearr_18839;
})();var statearr_18840_18862 = state_18833__$1;(statearr_18840_18862[2] = inst_18814);
(statearr_18840_18862[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18834 === 6))
{var inst_18810 = (state_18833[7]);var inst_18816 = p.call(null,inst_18810);var state_18833__$1 = state_18833;if(cljs.core.truth_(inst_18816))
{var statearr_18841_18863 = state_18833__$1;(statearr_18841_18863[1] = 9);
} else
{var statearr_18842_18864 = state_18833__$1;(statearr_18842_18864[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18834 === 7))
{var inst_18829 = (state_18833[2]);var state_18833__$1 = state_18833;var statearr_18843_18865 = state_18833__$1;(statearr_18843_18865[2] = inst_18829);
(statearr_18843_18865[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18834 === 8))
{var inst_18822 = (state_18833[2]);var state_18833__$1 = state_18833;if(cljs.core.truth_(inst_18822))
{var statearr_18844_18866 = state_18833__$1;(statearr_18844_18866[1] = 12);
} else
{var statearr_18845_18867 = state_18833__$1;(statearr_18845_18867[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18834 === 9))
{var state_18833__$1 = state_18833;var statearr_18846_18868 = state_18833__$1;(statearr_18846_18868[2] = tc);
(statearr_18846_18868[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18834 === 10))
{var state_18833__$1 = state_18833;var statearr_18847_18869 = state_18833__$1;(statearr_18847_18869[2] = fc);
(statearr_18847_18869[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18834 === 11))
{var inst_18810 = (state_18833[7]);var inst_18820 = (state_18833[2]);var state_18833__$1 = state_18833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18833__$1,8,inst_18820,inst_18810);
} else
{if((state_val_18834 === 12))
{var state_18833__$1 = state_18833;var statearr_18848_18870 = state_18833__$1;(statearr_18848_18870[2] = null);
(statearr_18848_18870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18834 === 13))
{var state_18833__$1 = state_18833;var statearr_18849_18871 = state_18833__$1;(statearr_18849_18871[2] = null);
(statearr_18849_18871[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18834 === 14))
{var inst_18827 = (state_18833[2]);var state_18833__$1 = state_18833;var statearr_18850_18872 = state_18833__$1;(statearr_18850_18872[2] = inst_18827);
(statearr_18850_18872[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto___18858,tc,fc))
;return ((function (switch__15295__auto__,c__15366__auto___18858,tc,fc){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_18854 = [null,null,null,null,null,null,null,null,null];(statearr_18854[0] = state_machine__15296__auto__);
(statearr_18854[1] = 1);
return statearr_18854;
});
var state_machine__15296__auto____1 = (function (state_18833){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_18833);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e18855){if((e18855 instanceof Object))
{var ex__15299__auto__ = e18855;var statearr_18856_18873 = state_18833;(statearr_18856_18873[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18833);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18855;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18874 = state_18833;
state_18833 = G__18874;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_18833){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_18833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto___18858,tc,fc))
})();var state__15368__auto__ = (function (){var statearr_18857 = f__15367__auto__.call(null);(statearr_18857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto___18858);
return statearr_18857;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto___18858,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__15366__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto__){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto__){
return (function (state_18921){var state_val_18922 = (state_18921[1]);if((state_val_18922 === 7))
{var inst_18917 = (state_18921[2]);var state_18921__$1 = state_18921;var statearr_18923_18939 = state_18921__$1;(statearr_18923_18939[2] = inst_18917);
(statearr_18923_18939[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18922 === 6))
{var inst_18907 = (state_18921[7]);var inst_18910 = (state_18921[8]);var inst_18914 = f.call(null,inst_18907,inst_18910);var inst_18907__$1 = inst_18914;var state_18921__$1 = (function (){var statearr_18924 = state_18921;(statearr_18924[7] = inst_18907__$1);
return statearr_18924;
})();var statearr_18925_18940 = state_18921__$1;(statearr_18925_18940[2] = null);
(statearr_18925_18940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18922 === 5))
{var inst_18907 = (state_18921[7]);var state_18921__$1 = state_18921;var statearr_18926_18941 = state_18921__$1;(statearr_18926_18941[2] = inst_18907);
(statearr_18926_18941[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18922 === 4))
{var inst_18910 = (state_18921[8]);var inst_18910__$1 = (state_18921[2]);var inst_18911 = (inst_18910__$1 == null);var state_18921__$1 = (function (){var statearr_18927 = state_18921;(statearr_18927[8] = inst_18910__$1);
return statearr_18927;
})();if(cljs.core.truth_(inst_18911))
{var statearr_18928_18942 = state_18921__$1;(statearr_18928_18942[1] = 5);
} else
{var statearr_18929_18943 = state_18921__$1;(statearr_18929_18943[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18922 === 3))
{var inst_18919 = (state_18921[2]);var state_18921__$1 = state_18921;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18921__$1,inst_18919);
} else
{if((state_val_18922 === 2))
{var state_18921__$1 = state_18921;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18921__$1,4,ch);
} else
{if((state_val_18922 === 1))
{var inst_18907 = init;var state_18921__$1 = (function (){var statearr_18930 = state_18921;(statearr_18930[7] = inst_18907);
return statearr_18930;
})();var statearr_18931_18944 = state_18921__$1;(statearr_18931_18944[2] = null);
(statearr_18931_18944[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});})(c__15366__auto__))
;return ((function (switch__15295__auto__,c__15366__auto__){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_18935 = [null,null,null,null,null,null,null,null,null];(statearr_18935[0] = state_machine__15296__auto__);
(statearr_18935[1] = 1);
return statearr_18935;
});
var state_machine__15296__auto____1 = (function (state_18921){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_18921);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e18936){if((e18936 instanceof Object))
{var ex__15299__auto__ = e18936;var statearr_18937_18945 = state_18921;(statearr_18937_18945[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18921);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18936;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18946 = state_18921;
state_18921 = G__18946;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_18921){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_18921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto__))
})();var state__15368__auto__ = (function (){var statearr_18938 = f__15367__auto__.call(null);(statearr_18938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto__);
return statearr_18938;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto__))
);
return c__15366__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__15366__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto__){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto__){
return (function (state_19020){var state_val_19021 = (state_19020[1]);if((state_val_19021 === 1))
{var inst_18996 = cljs.core.seq.call(null,coll);var inst_18997 = inst_18996;var state_19020__$1 = (function (){var statearr_19022 = state_19020;(statearr_19022[7] = inst_18997);
return statearr_19022;
})();var statearr_19023_19045 = state_19020__$1;(statearr_19023_19045[2] = null);
(statearr_19023_19045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 2))
{var inst_18997 = (state_19020[7]);var state_19020__$1 = state_19020;if(cljs.core.truth_(inst_18997))
{var statearr_19024_19046 = state_19020__$1;(statearr_19024_19046[1] = 4);
} else
{var statearr_19025_19047 = state_19020__$1;(statearr_19025_19047[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 3))
{var inst_19018 = (state_19020[2]);var state_19020__$1 = state_19020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19020__$1,inst_19018);
} else
{if((state_val_19021 === 4))
{var inst_18997 = (state_19020[7]);var inst_19000 = cljs.core.first.call(null,inst_18997);var state_19020__$1 = state_19020;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19020__$1,7,ch,inst_19000);
} else
{if((state_val_19021 === 5))
{var inst_18997 = (state_19020[7]);var state_19020__$1 = state_19020;var statearr_19026_19048 = state_19020__$1;(statearr_19026_19048[2] = inst_18997);
(statearr_19026_19048[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 6))
{var inst_19005 = (state_19020[2]);var state_19020__$1 = state_19020;if(cljs.core.truth_(inst_19005))
{var statearr_19027_19049 = state_19020__$1;(statearr_19027_19049[1] = 8);
} else
{var statearr_19028_19050 = state_19020__$1;(statearr_19028_19050[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 7))
{var inst_19002 = (state_19020[2]);var state_19020__$1 = state_19020;var statearr_19029_19051 = state_19020__$1;(statearr_19029_19051[2] = inst_19002);
(statearr_19029_19051[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 8))
{var inst_18997 = (state_19020[7]);var inst_19007 = cljs.core.next.call(null,inst_18997);var inst_18997__$1 = inst_19007;var state_19020__$1 = (function (){var statearr_19030 = state_19020;(statearr_19030[7] = inst_18997__$1);
return statearr_19030;
})();var statearr_19031_19052 = state_19020__$1;(statearr_19031_19052[2] = null);
(statearr_19031_19052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 9))
{var state_19020__$1 = state_19020;if(cljs.core.truth_(close_QMARK_))
{var statearr_19032_19053 = state_19020__$1;(statearr_19032_19053[1] = 11);
} else
{var statearr_19033_19054 = state_19020__$1;(statearr_19033_19054[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 10))
{var inst_19016 = (state_19020[2]);var state_19020__$1 = state_19020;var statearr_19034_19055 = state_19020__$1;(statearr_19034_19055[2] = inst_19016);
(statearr_19034_19055[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 11))
{var inst_19011 = cljs.core.async.close_BANG_.call(null,ch);var state_19020__$1 = state_19020;var statearr_19035_19056 = state_19020__$1;(statearr_19035_19056[2] = inst_19011);
(statearr_19035_19056[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 12))
{var state_19020__$1 = state_19020;var statearr_19036_19057 = state_19020__$1;(statearr_19036_19057[2] = null);
(statearr_19036_19057[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19021 === 13))
{var inst_19014 = (state_19020[2]);var state_19020__$1 = state_19020;var statearr_19037_19058 = state_19020__$1;(statearr_19037_19058[2] = inst_19014);
(statearr_19037_19058[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto__))
;return ((function (switch__15295__auto__,c__15366__auto__){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_19041 = [null,null,null,null,null,null,null,null];(statearr_19041[0] = state_machine__15296__auto__);
(statearr_19041[1] = 1);
return statearr_19041;
});
var state_machine__15296__auto____1 = (function (state_19020){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_19020);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e19042){if((e19042 instanceof Object))
{var ex__15299__auto__ = e19042;var statearr_19043_19059 = state_19020;(statearr_19043_19059[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19020);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19060 = state_19020;
state_19020 = G__19060;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_19020){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_19020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto__))
})();var state__15368__auto__ = (function (){var statearr_19044 = f__15367__auto__.call(null);(statearr_19044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto__);
return statearr_19044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto__))
);
return c__15366__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj19062 = {};return obj19062;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__10269__auto__ = _;if(and__10269__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__10269__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__10908__auto__ = (((_ == null))?null:_);return (function (){var or__10281__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10908__auto__)]);if(or__10281__auto__)
{return or__10281__auto__;
} else
{var or__10281__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__10281__auto____$1)
{return or__10281__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj19064 = {};return obj19064;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__10269__auto__ = m;if(and__10269__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__10269__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__10908__auto__ = (((m == null))?null:m);return (function (){var or__10281__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10908__auto__)]);if(or__10281__auto__)
{return or__10281__auto__;
} else
{var or__10281__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__10281__auto____$1)
{return or__10281__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__10269__auto__ = m;if(and__10269__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__10269__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__10908__auto__ = (((m == null))?null:m);return (function (){var or__10281__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10908__auto__)]);if(or__10281__auto__)
{return or__10281__auto__;
} else
{var or__10281__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__10281__auto____$1)
{return or__10281__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__10269__auto__ = m;if(and__10269__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__10269__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__10908__auto__ = (((m == null))?null:m);return (function (){var or__10281__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10908__auto__)]);if(or__10281__auto__)
{return or__10281__auto__;
} else
{var or__10281__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__10281__auto____$1)
{return or__10281__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19286 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19286 = (function (cs,ch,mult,meta19287){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19287 = meta19287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19286.cljs$lang$type = true;
cljs.core.async.t19286.cljs$lang$ctorStr = "cljs.core.async/t19286";
cljs.core.async.t19286.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10848__auto__,writer__10849__auto__,opt__10850__auto__){return cljs.core._write.call(null,writer__10849__auto__,"cljs.core.async/t19286");
});})(cs))
;
cljs.core.async.t19286.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19286.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19286.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19286.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19286.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19286.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19288){var self__ = this;
var _19288__$1 = this;return self__.meta19287;
});})(cs))
;
cljs.core.async.t19286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19288,meta19287__$1){var self__ = this;
var _19288__$1 = this;return (new cljs.core.async.t19286(self__.cs,self__.ch,self__.mult,meta19287__$1));
});})(cs))
;
cljs.core.async.__GT_t19286 = ((function (cs){
return (function __GT_t19286(cs__$1,ch__$1,mult__$1,meta19287){return (new cljs.core.async.t19286(cs__$1,ch__$1,mult__$1,meta19287));
});})(cs))
;
}
return (new cljs.core.async.t19286(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__15366__auto___19507 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto___19507,cs,m,dchan,dctr,done){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto___19507,cs,m,dchan,dctr,done){
return (function (state_19419){var state_val_19420 = (state_19419[1]);if((state_val_19420 === 32))
{var inst_19360 = (state_19419[7]);var inst_19361 = (state_19419[8]);var inst_19362 = (state_19419[9]);var inst_19359 = (state_19419[10]);var inst_19374 = (state_19419[2]);var inst_19375 = (inst_19362 + 1);var tmp19421 = inst_19360;var tmp19422 = inst_19361;var tmp19423 = inst_19359;var inst_19359__$1 = tmp19423;var inst_19360__$1 = tmp19421;var inst_19361__$1 = tmp19422;var inst_19362__$1 = inst_19375;var state_19419__$1 = (function (){var statearr_19424 = state_19419;(statearr_19424[7] = inst_19360__$1);
(statearr_19424[8] = inst_19361__$1);
(statearr_19424[9] = inst_19362__$1);
(statearr_19424[10] = inst_19359__$1);
(statearr_19424[11] = inst_19374);
return statearr_19424;
})();var statearr_19425_19508 = state_19419__$1;(statearr_19425_19508[2] = null);
(statearr_19425_19508[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 1))
{var state_19419__$1 = state_19419;var statearr_19426_19509 = state_19419__$1;(statearr_19426_19509[2] = null);
(statearr_19426_19509[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 33))
{var inst_19378 = (state_19419[12]);var inst_19380 = cljs.core.chunked_seq_QMARK_.call(null,inst_19378);var state_19419__$1 = state_19419;if(inst_19380)
{var statearr_19427_19510 = state_19419__$1;(statearr_19427_19510[1] = 36);
} else
{var statearr_19428_19511 = state_19419__$1;(statearr_19428_19511[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 2))
{var state_19419__$1 = state_19419;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19419__$1,4,ch);
} else
{if((state_val_19420 === 34))
{var state_19419__$1 = state_19419;var statearr_19429_19512 = state_19419__$1;(statearr_19429_19512[2] = null);
(statearr_19429_19512[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 3))
{var inst_19417 = (state_19419[2]);var state_19419__$1 = state_19419;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19419__$1,inst_19417);
} else
{if((state_val_19420 === 35))
{var inst_19401 = (state_19419[2]);var state_19419__$1 = state_19419;var statearr_19430_19513 = state_19419__$1;(statearr_19430_19513[2] = inst_19401);
(statearr_19430_19513[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 4))
{var inst_19291 = (state_19419[13]);var inst_19291__$1 = (state_19419[2]);var inst_19292 = (inst_19291__$1 == null);var state_19419__$1 = (function (){var statearr_19431 = state_19419;(statearr_19431[13] = inst_19291__$1);
return statearr_19431;
})();if(cljs.core.truth_(inst_19292))
{var statearr_19432_19514 = state_19419__$1;(statearr_19432_19514[1] = 5);
} else
{var statearr_19433_19515 = state_19419__$1;(statearr_19433_19515[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 36))
{var inst_19378 = (state_19419[12]);var inst_19382 = cljs.core.chunk_first.call(null,inst_19378);var inst_19383 = cljs.core.chunk_rest.call(null,inst_19378);var inst_19384 = cljs.core.count.call(null,inst_19382);var inst_19359 = inst_19383;var inst_19360 = inst_19382;var inst_19361 = inst_19384;var inst_19362 = 0;var state_19419__$1 = (function (){var statearr_19434 = state_19419;(statearr_19434[7] = inst_19360);
(statearr_19434[8] = inst_19361);
(statearr_19434[9] = inst_19362);
(statearr_19434[10] = inst_19359);
return statearr_19434;
})();var statearr_19435_19516 = state_19419__$1;(statearr_19435_19516[2] = null);
(statearr_19435_19516[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 5))
{var inst_19298 = cljs.core.deref.call(null,cs);var inst_19299 = cljs.core.seq.call(null,inst_19298);var inst_19300 = inst_19299;var inst_19301 = null;var inst_19302 = 0;var inst_19303 = 0;var state_19419__$1 = (function (){var statearr_19436 = state_19419;(statearr_19436[14] = inst_19302);
(statearr_19436[15] = inst_19303);
(statearr_19436[16] = inst_19301);
(statearr_19436[17] = inst_19300);
return statearr_19436;
})();var statearr_19437_19517 = state_19419__$1;(statearr_19437_19517[2] = null);
(statearr_19437_19517[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 37))
{var inst_19378 = (state_19419[12]);var inst_19387 = (state_19419[18]);var inst_19291 = (state_19419[13]);var inst_19387__$1 = cljs.core.first.call(null,inst_19378);var inst_19388 = cljs.core.async.put_BANG_.call(null,inst_19387__$1,inst_19291,done);var state_19419__$1 = (function (){var statearr_19438 = state_19419;(statearr_19438[18] = inst_19387__$1);
return statearr_19438;
})();if(cljs.core.truth_(inst_19388))
{var statearr_19439_19518 = state_19419__$1;(statearr_19439_19518[1] = 39);
} else
{var statearr_19440_19519 = state_19419__$1;(statearr_19440_19519[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 6))
{var inst_19351 = (state_19419[19]);var inst_19350 = cljs.core.deref.call(null,cs);var inst_19351__$1 = cljs.core.keys.call(null,inst_19350);var inst_19352 = cljs.core.count.call(null,inst_19351__$1);var inst_19353 = cljs.core.reset_BANG_.call(null,dctr,inst_19352);var inst_19358 = cljs.core.seq.call(null,inst_19351__$1);var inst_19359 = inst_19358;var inst_19360 = null;var inst_19361 = 0;var inst_19362 = 0;var state_19419__$1 = (function (){var statearr_19441 = state_19419;(statearr_19441[7] = inst_19360);
(statearr_19441[8] = inst_19361);
(statearr_19441[9] = inst_19362);
(statearr_19441[19] = inst_19351__$1);
(statearr_19441[10] = inst_19359);
(statearr_19441[20] = inst_19353);
return statearr_19441;
})();var statearr_19442_19520 = state_19419__$1;(statearr_19442_19520[2] = null);
(statearr_19442_19520[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 38))
{var inst_19398 = (state_19419[2]);var state_19419__$1 = state_19419;var statearr_19443_19521 = state_19419__$1;(statearr_19443_19521[2] = inst_19398);
(statearr_19443_19521[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 7))
{var inst_19415 = (state_19419[2]);var state_19419__$1 = state_19419;var statearr_19444_19522 = state_19419__$1;(statearr_19444_19522[2] = inst_19415);
(statearr_19444_19522[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 39))
{var state_19419__$1 = state_19419;var statearr_19445_19523 = state_19419__$1;(statearr_19445_19523[2] = null);
(statearr_19445_19523[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 8))
{var inst_19302 = (state_19419[14]);var inst_19303 = (state_19419[15]);var inst_19305 = (inst_19303 < inst_19302);var inst_19306 = inst_19305;var state_19419__$1 = state_19419;if(cljs.core.truth_(inst_19306))
{var statearr_19446_19524 = state_19419__$1;(statearr_19446_19524[1] = 10);
} else
{var statearr_19447_19525 = state_19419__$1;(statearr_19447_19525[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 40))
{var inst_19387 = (state_19419[18]);var inst_19391 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19392 = cljs.core.async.untap_STAR_.call(null,m,inst_19387);var state_19419__$1 = (function (){var statearr_19448 = state_19419;(statearr_19448[21] = inst_19391);
return statearr_19448;
})();var statearr_19449_19526 = state_19419__$1;(statearr_19449_19526[2] = inst_19392);
(statearr_19449_19526[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 9))
{var inst_19348 = (state_19419[2]);var state_19419__$1 = state_19419;var statearr_19450_19527 = state_19419__$1;(statearr_19450_19527[2] = inst_19348);
(statearr_19450_19527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 41))
{var inst_19378 = (state_19419[12]);var inst_19394 = (state_19419[2]);var inst_19395 = cljs.core.next.call(null,inst_19378);var inst_19359 = inst_19395;var inst_19360 = null;var inst_19361 = 0;var inst_19362 = 0;var state_19419__$1 = (function (){var statearr_19451 = state_19419;(statearr_19451[7] = inst_19360);
(statearr_19451[8] = inst_19361);
(statearr_19451[9] = inst_19362);
(statearr_19451[22] = inst_19394);
(statearr_19451[10] = inst_19359);
return statearr_19451;
})();var statearr_19452_19528 = state_19419__$1;(statearr_19452_19528[2] = null);
(statearr_19452_19528[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 10))
{var inst_19303 = (state_19419[15]);var inst_19301 = (state_19419[16]);var inst_19309 = cljs.core._nth.call(null,inst_19301,inst_19303);var inst_19310 = cljs.core.nth.call(null,inst_19309,0,null);var inst_19311 = cljs.core.nth.call(null,inst_19309,1,null);var state_19419__$1 = (function (){var statearr_19453 = state_19419;(statearr_19453[23] = inst_19310);
return statearr_19453;
})();if(cljs.core.truth_(inst_19311))
{var statearr_19454_19529 = state_19419__$1;(statearr_19454_19529[1] = 13);
} else
{var statearr_19455_19530 = state_19419__$1;(statearr_19455_19530[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 42))
{var state_19419__$1 = state_19419;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19419__$1,45,dchan);
} else
{if((state_val_19420 === 11))
{var inst_19300 = (state_19419[17]);var inst_19320 = (state_19419[24]);var inst_19320__$1 = cljs.core.seq.call(null,inst_19300);var state_19419__$1 = (function (){var statearr_19456 = state_19419;(statearr_19456[24] = inst_19320__$1);
return statearr_19456;
})();if(inst_19320__$1)
{var statearr_19457_19531 = state_19419__$1;(statearr_19457_19531[1] = 16);
} else
{var statearr_19458_19532 = state_19419__$1;(statearr_19458_19532[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 43))
{var state_19419__$1 = state_19419;var statearr_19459_19533 = state_19419__$1;(statearr_19459_19533[2] = null);
(statearr_19459_19533[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 12))
{var inst_19346 = (state_19419[2]);var state_19419__$1 = state_19419;var statearr_19460_19534 = state_19419__$1;(statearr_19460_19534[2] = inst_19346);
(statearr_19460_19534[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 44))
{var inst_19412 = (state_19419[2]);var state_19419__$1 = (function (){var statearr_19461 = state_19419;(statearr_19461[25] = inst_19412);
return statearr_19461;
})();var statearr_19462_19535 = state_19419__$1;(statearr_19462_19535[2] = null);
(statearr_19462_19535[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 13))
{var inst_19310 = (state_19419[23]);var inst_19313 = cljs.core.async.close_BANG_.call(null,inst_19310);var state_19419__$1 = state_19419;var statearr_19463_19536 = state_19419__$1;(statearr_19463_19536[2] = inst_19313);
(statearr_19463_19536[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 45))
{var inst_19409 = (state_19419[2]);var state_19419__$1 = state_19419;var statearr_19467_19537 = state_19419__$1;(statearr_19467_19537[2] = inst_19409);
(statearr_19467_19537[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 14))
{var state_19419__$1 = state_19419;var statearr_19468_19538 = state_19419__$1;(statearr_19468_19538[2] = null);
(statearr_19468_19538[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 15))
{var inst_19302 = (state_19419[14]);var inst_19303 = (state_19419[15]);var inst_19301 = (state_19419[16]);var inst_19300 = (state_19419[17]);var inst_19316 = (state_19419[2]);var inst_19317 = (inst_19303 + 1);var tmp19464 = inst_19302;var tmp19465 = inst_19301;var tmp19466 = inst_19300;var inst_19300__$1 = tmp19466;var inst_19301__$1 = tmp19465;var inst_19302__$1 = tmp19464;var inst_19303__$1 = inst_19317;var state_19419__$1 = (function (){var statearr_19469 = state_19419;(statearr_19469[14] = inst_19302__$1);
(statearr_19469[15] = inst_19303__$1);
(statearr_19469[16] = inst_19301__$1);
(statearr_19469[17] = inst_19300__$1);
(statearr_19469[26] = inst_19316);
return statearr_19469;
})();var statearr_19470_19539 = state_19419__$1;(statearr_19470_19539[2] = null);
(statearr_19470_19539[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 16))
{var inst_19320 = (state_19419[24]);var inst_19322 = cljs.core.chunked_seq_QMARK_.call(null,inst_19320);var state_19419__$1 = state_19419;if(inst_19322)
{var statearr_19471_19540 = state_19419__$1;(statearr_19471_19540[1] = 19);
} else
{var statearr_19472_19541 = state_19419__$1;(statearr_19472_19541[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 17))
{var state_19419__$1 = state_19419;var statearr_19473_19542 = state_19419__$1;(statearr_19473_19542[2] = null);
(statearr_19473_19542[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 18))
{var inst_19344 = (state_19419[2]);var state_19419__$1 = state_19419;var statearr_19474_19543 = state_19419__$1;(statearr_19474_19543[2] = inst_19344);
(statearr_19474_19543[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 19))
{var inst_19320 = (state_19419[24]);var inst_19324 = cljs.core.chunk_first.call(null,inst_19320);var inst_19325 = cljs.core.chunk_rest.call(null,inst_19320);var inst_19326 = cljs.core.count.call(null,inst_19324);var inst_19300 = inst_19325;var inst_19301 = inst_19324;var inst_19302 = inst_19326;var inst_19303 = 0;var state_19419__$1 = (function (){var statearr_19475 = state_19419;(statearr_19475[14] = inst_19302);
(statearr_19475[15] = inst_19303);
(statearr_19475[16] = inst_19301);
(statearr_19475[17] = inst_19300);
return statearr_19475;
})();var statearr_19476_19544 = state_19419__$1;(statearr_19476_19544[2] = null);
(statearr_19476_19544[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 20))
{var inst_19320 = (state_19419[24]);var inst_19330 = cljs.core.first.call(null,inst_19320);var inst_19331 = cljs.core.nth.call(null,inst_19330,0,null);var inst_19332 = cljs.core.nth.call(null,inst_19330,1,null);var state_19419__$1 = (function (){var statearr_19477 = state_19419;(statearr_19477[27] = inst_19331);
return statearr_19477;
})();if(cljs.core.truth_(inst_19332))
{var statearr_19478_19545 = state_19419__$1;(statearr_19478_19545[1] = 22);
} else
{var statearr_19479_19546 = state_19419__$1;(statearr_19479_19546[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 21))
{var inst_19341 = (state_19419[2]);var state_19419__$1 = state_19419;var statearr_19480_19547 = state_19419__$1;(statearr_19480_19547[2] = inst_19341);
(statearr_19480_19547[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 22))
{var inst_19331 = (state_19419[27]);var inst_19334 = cljs.core.async.close_BANG_.call(null,inst_19331);var state_19419__$1 = state_19419;var statearr_19481_19548 = state_19419__$1;(statearr_19481_19548[2] = inst_19334);
(statearr_19481_19548[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 23))
{var state_19419__$1 = state_19419;var statearr_19482_19549 = state_19419__$1;(statearr_19482_19549[2] = null);
(statearr_19482_19549[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 24))
{var inst_19320 = (state_19419[24]);var inst_19337 = (state_19419[2]);var inst_19338 = cljs.core.next.call(null,inst_19320);var inst_19300 = inst_19338;var inst_19301 = null;var inst_19302 = 0;var inst_19303 = 0;var state_19419__$1 = (function (){var statearr_19483 = state_19419;(statearr_19483[28] = inst_19337);
(statearr_19483[14] = inst_19302);
(statearr_19483[15] = inst_19303);
(statearr_19483[16] = inst_19301);
(statearr_19483[17] = inst_19300);
return statearr_19483;
})();var statearr_19484_19550 = state_19419__$1;(statearr_19484_19550[2] = null);
(statearr_19484_19550[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 25))
{var inst_19361 = (state_19419[8]);var inst_19362 = (state_19419[9]);var inst_19364 = (inst_19362 < inst_19361);var inst_19365 = inst_19364;var state_19419__$1 = state_19419;if(cljs.core.truth_(inst_19365))
{var statearr_19485_19551 = state_19419__$1;(statearr_19485_19551[1] = 27);
} else
{var statearr_19486_19552 = state_19419__$1;(statearr_19486_19552[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 26))
{var inst_19351 = (state_19419[19]);var inst_19405 = (state_19419[2]);var inst_19406 = cljs.core.seq.call(null,inst_19351);var state_19419__$1 = (function (){var statearr_19487 = state_19419;(statearr_19487[29] = inst_19405);
return statearr_19487;
})();if(inst_19406)
{var statearr_19488_19553 = state_19419__$1;(statearr_19488_19553[1] = 42);
} else
{var statearr_19489_19554 = state_19419__$1;(statearr_19489_19554[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 27))
{var inst_19360 = (state_19419[7]);var inst_19362 = (state_19419[9]);var inst_19291 = (state_19419[13]);var inst_19367 = (state_19419[30]);var inst_19367__$1 = cljs.core._nth.call(null,inst_19360,inst_19362);var inst_19368 = cljs.core.async.put_BANG_.call(null,inst_19367__$1,inst_19291,done);var state_19419__$1 = (function (){var statearr_19490 = state_19419;(statearr_19490[30] = inst_19367__$1);
return statearr_19490;
})();if(cljs.core.truth_(inst_19368))
{var statearr_19491_19555 = state_19419__$1;(statearr_19491_19555[1] = 30);
} else
{var statearr_19492_19556 = state_19419__$1;(statearr_19492_19556[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 28))
{var inst_19378 = (state_19419[12]);var inst_19359 = (state_19419[10]);var inst_19378__$1 = cljs.core.seq.call(null,inst_19359);var state_19419__$1 = (function (){var statearr_19493 = state_19419;(statearr_19493[12] = inst_19378__$1);
return statearr_19493;
})();if(inst_19378__$1)
{var statearr_19494_19557 = state_19419__$1;(statearr_19494_19557[1] = 33);
} else
{var statearr_19495_19558 = state_19419__$1;(statearr_19495_19558[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 29))
{var inst_19403 = (state_19419[2]);var state_19419__$1 = state_19419;var statearr_19496_19559 = state_19419__$1;(statearr_19496_19559[2] = inst_19403);
(statearr_19496_19559[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 30))
{var state_19419__$1 = state_19419;var statearr_19497_19560 = state_19419__$1;(statearr_19497_19560[2] = null);
(statearr_19497_19560[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19420 === 31))
{var inst_19367 = (state_19419[30]);var inst_19371 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19372 = cljs.core.async.untap_STAR_.call(null,m,inst_19367);var state_19419__$1 = (function (){var statearr_19498 = state_19419;(statearr_19498[31] = inst_19371);
return statearr_19498;
})();var statearr_19499_19561 = state_19419__$1;(statearr_19499_19561[2] = inst_19372);
(statearr_19499_19561[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto___19507,cs,m,dchan,dctr,done))
;return ((function (switch__15295__auto__,c__15366__auto___19507,cs,m,dchan,dctr,done){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_19503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19503[0] = state_machine__15296__auto__);
(statearr_19503[1] = 1);
return statearr_19503;
});
var state_machine__15296__auto____1 = (function (state_19419){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_19419);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e19504){if((e19504 instanceof Object))
{var ex__15299__auto__ = e19504;var statearr_19505_19562 = state_19419;(statearr_19505_19562[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19419);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19504;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19563 = state_19419;
state_19419 = G__19563;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_19419){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_19419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto___19507,cs,m,dchan,dctr,done))
})();var state__15368__auto__ = (function (){var statearr_19506 = f__15367__auto__.call(null);(statearr_19506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto___19507);
return statearr_19506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto___19507,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj19565 = {};return obj19565;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__10269__auto__ = m;if(and__10269__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__10269__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__10908__auto__ = (((m == null))?null:m);return (function (){var or__10281__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10908__auto__)]);if(or__10281__auto__)
{return or__10281__auto__;
} else
{var or__10281__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__10281__auto____$1)
{return or__10281__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__10269__auto__ = m;if(and__10269__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__10269__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__10908__auto__ = (((m == null))?null:m);return (function (){var or__10281__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10908__auto__)]);if(or__10281__auto__)
{return or__10281__auto__;
} else
{var or__10281__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__10281__auto____$1)
{return or__10281__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__10269__auto__ = m;if(and__10269__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__10269__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__10908__auto__ = (((m == null))?null:m);return (function (){var or__10281__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10908__auto__)]);if(or__10281__auto__)
{return or__10281__auto__;
} else
{var or__10281__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__10281__auto____$1)
{return or__10281__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__10269__auto__ = m;if(and__10269__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__10269__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__10908__auto__ = (((m == null))?null:m);return (function (){var or__10281__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10908__auto__)]);if(or__10281__auto__)
{return or__10281__auto__;
} else
{var or__10281__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__10281__auto____$1)
{return or__10281__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__10269__auto__ = m;if(and__10269__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__10269__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__10908__auto__ = (((m == null))?null:m);return (function (){var or__10281__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10908__auto__)]);if(or__10281__auto__)
{return or__10281__auto__;
} else
{var or__10281__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__10281__auto____$1)
{return or__10281__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t19685 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19685 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta19686){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta19686 = meta19686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19685.cljs$lang$type = true;
cljs.core.async.t19685.cljs$lang$ctorStr = "cljs.core.async/t19685";
cljs.core.async.t19685.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10848__auto__,writer__10849__auto__,opt__10850__auto__){return cljs.core._write.call(null,writer__10849__auto__,"cljs.core.async/t19685");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19685.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t19685.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19685.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19685.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19685.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19685.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19685.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19685.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19687){var self__ = this;
var _19687__$1 = this;return self__.meta19686;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19687,meta19686__$1){var self__ = this;
var _19687__$1 = this;return (new cljs.core.async.t19685(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta19686__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t19685 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19685(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19686){return (new cljs.core.async.t19685(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta19686));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t19685(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__15366__auto___19804 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto___19804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto___19804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19757){var state_val_19758 = (state_19757[1]);if((state_val_19758 === 1))
{var inst_19691 = (state_19757[7]);var inst_19691__$1 = calc_state.call(null);var inst_19692 = cljs.core.seq_QMARK_.call(null,inst_19691__$1);var state_19757__$1 = (function (){var statearr_19759 = state_19757;(statearr_19759[7] = inst_19691__$1);
return statearr_19759;
})();if(inst_19692)
{var statearr_19760_19805 = state_19757__$1;(statearr_19760_19805[1] = 2);
} else
{var statearr_19761_19806 = state_19757__$1;(statearr_19761_19806[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 2))
{var inst_19691 = (state_19757[7]);var inst_19694 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19691);var state_19757__$1 = state_19757;var statearr_19762_19807 = state_19757__$1;(statearr_19762_19807[2] = inst_19694);
(statearr_19762_19807[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 3))
{var inst_19691 = (state_19757[7]);var state_19757__$1 = state_19757;var statearr_19763_19808 = state_19757__$1;(statearr_19763_19808[2] = inst_19691);
(statearr_19763_19808[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 4))
{var inst_19691 = (state_19757[7]);var inst_19697 = (state_19757[2]);var inst_19698 = cljs.core.get.call(null,inst_19697,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19699 = cljs.core.get.call(null,inst_19697,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19700 = cljs.core.get.call(null,inst_19697,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_19701 = inst_19691;var state_19757__$1 = (function (){var statearr_19764 = state_19757;(statearr_19764[8] = inst_19698);
(statearr_19764[9] = inst_19699);
(statearr_19764[10] = inst_19700);
(statearr_19764[11] = inst_19701);
return statearr_19764;
})();var statearr_19765_19809 = state_19757__$1;(statearr_19765_19809[2] = null);
(statearr_19765_19809[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 5))
{var inst_19701 = (state_19757[11]);var inst_19704 = cljs.core.seq_QMARK_.call(null,inst_19701);var state_19757__$1 = state_19757;if(inst_19704)
{var statearr_19766_19810 = state_19757__$1;(statearr_19766_19810[1] = 7);
} else
{var statearr_19767_19811 = state_19757__$1;(statearr_19767_19811[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 6))
{var inst_19755 = (state_19757[2]);var state_19757__$1 = state_19757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19757__$1,inst_19755);
} else
{if((state_val_19758 === 7))
{var inst_19701 = (state_19757[11]);var inst_19706 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19701);var state_19757__$1 = state_19757;var statearr_19768_19812 = state_19757__$1;(statearr_19768_19812[2] = inst_19706);
(statearr_19768_19812[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 8))
{var inst_19701 = (state_19757[11]);var state_19757__$1 = state_19757;var statearr_19769_19813 = state_19757__$1;(statearr_19769_19813[2] = inst_19701);
(statearr_19769_19813[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 9))
{var inst_19709 = (state_19757[12]);var inst_19709__$1 = (state_19757[2]);var inst_19710 = cljs.core.get.call(null,inst_19709__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_19711 = cljs.core.get.call(null,inst_19709__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_19712 = cljs.core.get.call(null,inst_19709__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_19757__$1 = (function (){var statearr_19770 = state_19757;(statearr_19770[13] = inst_19711);
(statearr_19770[14] = inst_19712);
(statearr_19770[12] = inst_19709__$1);
return statearr_19770;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19757__$1,10,inst_19710);
} else
{if((state_val_19758 === 10))
{var inst_19717 = (state_19757[15]);var inst_19716 = (state_19757[16]);var inst_19715 = (state_19757[2]);var inst_19716__$1 = cljs.core.nth.call(null,inst_19715,0,null);var inst_19717__$1 = cljs.core.nth.call(null,inst_19715,1,null);var inst_19718 = (inst_19716__$1 == null);var inst_19719 = cljs.core._EQ_.call(null,inst_19717__$1,change);var inst_19720 = (inst_19718) || (inst_19719);var state_19757__$1 = (function (){var statearr_19771 = state_19757;(statearr_19771[15] = inst_19717__$1);
(statearr_19771[16] = inst_19716__$1);
return statearr_19771;
})();if(cljs.core.truth_(inst_19720))
{var statearr_19772_19814 = state_19757__$1;(statearr_19772_19814[1] = 11);
} else
{var statearr_19773_19815 = state_19757__$1;(statearr_19773_19815[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 11))
{var inst_19716 = (state_19757[16]);var inst_19722 = (inst_19716 == null);var state_19757__$1 = state_19757;if(cljs.core.truth_(inst_19722))
{var statearr_19774_19816 = state_19757__$1;(statearr_19774_19816[1] = 14);
} else
{var statearr_19775_19817 = state_19757__$1;(statearr_19775_19817[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 12))
{var inst_19731 = (state_19757[17]);var inst_19712 = (state_19757[14]);var inst_19717 = (state_19757[15]);var inst_19731__$1 = inst_19712.call(null,inst_19717);var state_19757__$1 = (function (){var statearr_19776 = state_19757;(statearr_19776[17] = inst_19731__$1);
return statearr_19776;
})();if(cljs.core.truth_(inst_19731__$1))
{var statearr_19777_19818 = state_19757__$1;(statearr_19777_19818[1] = 17);
} else
{var statearr_19778_19819 = state_19757__$1;(statearr_19778_19819[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 13))
{var inst_19753 = (state_19757[2]);var state_19757__$1 = state_19757;var statearr_19779_19820 = state_19757__$1;(statearr_19779_19820[2] = inst_19753);
(statearr_19779_19820[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 14))
{var inst_19717 = (state_19757[15]);var inst_19724 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19717);var state_19757__$1 = state_19757;var statearr_19780_19821 = state_19757__$1;(statearr_19780_19821[2] = inst_19724);
(statearr_19780_19821[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 15))
{var state_19757__$1 = state_19757;var statearr_19781_19822 = state_19757__$1;(statearr_19781_19822[2] = null);
(statearr_19781_19822[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 16))
{var inst_19727 = (state_19757[2]);var inst_19728 = calc_state.call(null);var inst_19701 = inst_19728;var state_19757__$1 = (function (){var statearr_19782 = state_19757;(statearr_19782[11] = inst_19701);
(statearr_19782[18] = inst_19727);
return statearr_19782;
})();var statearr_19783_19823 = state_19757__$1;(statearr_19783_19823[2] = null);
(statearr_19783_19823[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 17))
{var inst_19731 = (state_19757[17]);var state_19757__$1 = state_19757;var statearr_19784_19824 = state_19757__$1;(statearr_19784_19824[2] = inst_19731);
(statearr_19784_19824[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 18))
{var inst_19711 = (state_19757[13]);var inst_19712 = (state_19757[14]);var inst_19717 = (state_19757[15]);var inst_19734 = cljs.core.empty_QMARK_.call(null,inst_19712);var inst_19735 = inst_19711.call(null,inst_19717);var inst_19736 = cljs.core.not.call(null,inst_19735);var inst_19737 = (inst_19734) && (inst_19736);var state_19757__$1 = state_19757;var statearr_19785_19825 = state_19757__$1;(statearr_19785_19825[2] = inst_19737);
(statearr_19785_19825[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 19))
{var inst_19739 = (state_19757[2]);var state_19757__$1 = state_19757;if(cljs.core.truth_(inst_19739))
{var statearr_19786_19826 = state_19757__$1;(statearr_19786_19826[1] = 20);
} else
{var statearr_19787_19827 = state_19757__$1;(statearr_19787_19827[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 20))
{var inst_19716 = (state_19757[16]);var state_19757__$1 = state_19757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19757__$1,23,out,inst_19716);
} else
{if((state_val_19758 === 21))
{var inst_19709 = (state_19757[12]);var inst_19701 = inst_19709;var state_19757__$1 = (function (){var statearr_19788 = state_19757;(statearr_19788[11] = inst_19701);
return statearr_19788;
})();var statearr_19789_19828 = state_19757__$1;(statearr_19789_19828[2] = null);
(statearr_19789_19828[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 22))
{var inst_19751 = (state_19757[2]);var state_19757__$1 = state_19757;var statearr_19790_19829 = state_19757__$1;(statearr_19790_19829[2] = inst_19751);
(statearr_19790_19829[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 23))
{var inst_19742 = (state_19757[2]);var state_19757__$1 = state_19757;if(cljs.core.truth_(inst_19742))
{var statearr_19791_19830 = state_19757__$1;(statearr_19791_19830[1] = 24);
} else
{var statearr_19792_19831 = state_19757__$1;(statearr_19792_19831[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 24))
{var inst_19709 = (state_19757[12]);var inst_19701 = inst_19709;var state_19757__$1 = (function (){var statearr_19793 = state_19757;(statearr_19793[11] = inst_19701);
return statearr_19793;
})();var statearr_19794_19832 = state_19757__$1;(statearr_19794_19832[2] = null);
(statearr_19794_19832[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 25))
{var state_19757__$1 = state_19757;var statearr_19795_19833 = state_19757__$1;(statearr_19795_19833[2] = null);
(statearr_19795_19833[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19758 === 26))
{var inst_19747 = (state_19757[2]);var state_19757__$1 = state_19757;var statearr_19796_19834 = state_19757__$1;(statearr_19796_19834[2] = inst_19747);
(statearr_19796_19834[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto___19804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__15295__auto__,c__15366__auto___19804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_19800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19800[0] = state_machine__15296__auto__);
(statearr_19800[1] = 1);
return statearr_19800;
});
var state_machine__15296__auto____1 = (function (state_19757){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_19757);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e19801){if((e19801 instanceof Object))
{var ex__15299__auto__ = e19801;var statearr_19802_19835 = state_19757;(statearr_19802_19835[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19801;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19836 = state_19757;
state_19757 = G__19836;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_19757){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_19757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto___19804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__15368__auto__ = (function (){var statearr_19803 = f__15367__auto__.call(null);(statearr_19803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto___19804);
return statearr_19803;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto___19804,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj19838 = {};return obj19838;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__10269__auto__ = p;if(and__10269__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__10269__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__10908__auto__ = (((p == null))?null:p);return (function (){var or__10281__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10908__auto__)]);if(or__10281__auto__)
{return or__10281__auto__;
} else
{var or__10281__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__10281__auto____$1)
{return or__10281__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__10269__auto__ = p;if(and__10269__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__10269__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__10908__auto__ = (((p == null))?null:p);return (function (){var or__10281__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10908__auto__)]);if(or__10281__auto__)
{return or__10281__auto__;
} else
{var or__10281__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__10281__auto____$1)
{return or__10281__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__10269__auto__ = p;if(and__10269__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__10269__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__10908__auto__ = (((p == null))?null:p);return (function (){var or__10281__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10908__auto__)]);if(or__10281__auto__)
{return or__10281__auto__;
} else
{var or__10281__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10281__auto____$1)
{return or__10281__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__10269__auto__ = p;if(and__10269__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__10269__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__10908__auto__ = (((p == null))?null:p);return (function (){var or__10281__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10908__auto__)]);if(or__10281__auto__)
{return or__10281__auto__;
} else
{var or__10281__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10281__auto____$1)
{return or__10281__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__10281__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__10281__auto__))
{return or__10281__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__10281__auto__,mults){
return (function (p1__19839_SHARP_){if(cljs.core.truth_(p1__19839_SHARP_.call(null,topic)))
{return p1__19839_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__19839_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__10281__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t19954 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19954 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19955){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19955 = meta19955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19954.cljs$lang$type = true;
cljs.core.async.t19954.cljs$lang$ctorStr = "cljs.core.async/t19954";
cljs.core.async.t19954.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10848__auto__,writer__10849__auto__,opt__10850__auto__){return cljs.core._write.call(null,writer__10849__auto__,"cljs.core.async/t19954");
});})(mults,ensure_mult))
;
cljs.core.async.t19954.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t19954.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t19954.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t19954.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t19954.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t19954.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t19954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19956){var self__ = this;
var _19956__$1 = this;return self__.meta19955;
});})(mults,ensure_mult))
;
cljs.core.async.t19954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19956,meta19955__$1){var self__ = this;
var _19956__$1 = this;return (new cljs.core.async.t19954(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19955__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t19954 = ((function (mults,ensure_mult){
return (function __GT_t19954(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19955){return (new cljs.core.async.t19954(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19955));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t19954(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__15366__auto___20068 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto___20068,mults,ensure_mult,p){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto___20068,mults,ensure_mult,p){
return (function (state_20024){var state_val_20025 = (state_20024[1]);if((state_val_20025 === 1))
{var state_20024__$1 = state_20024;var statearr_20026_20069 = state_20024__$1;(statearr_20026_20069[2] = null);
(statearr_20026_20069[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 2))
{var state_20024__$1 = state_20024;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20024__$1,4,ch);
} else
{if((state_val_20025 === 3))
{var inst_20022 = (state_20024[2]);var state_20024__$1 = state_20024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20024__$1,inst_20022);
} else
{if((state_val_20025 === 4))
{var inst_19959 = (state_20024[7]);var inst_19959__$1 = (state_20024[2]);var inst_19960 = (inst_19959__$1 == null);var state_20024__$1 = (function (){var statearr_20027 = state_20024;(statearr_20027[7] = inst_19959__$1);
return statearr_20027;
})();if(cljs.core.truth_(inst_19960))
{var statearr_20028_20070 = state_20024__$1;(statearr_20028_20070[1] = 5);
} else
{var statearr_20029_20071 = state_20024__$1;(statearr_20029_20071[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 5))
{var inst_19966 = cljs.core.deref.call(null,mults);var inst_19967 = cljs.core.vals.call(null,inst_19966);var inst_19968 = cljs.core.seq.call(null,inst_19967);var inst_19969 = inst_19968;var inst_19970 = null;var inst_19971 = 0;var inst_19972 = 0;var state_20024__$1 = (function (){var statearr_20030 = state_20024;(statearr_20030[8] = inst_19970);
(statearr_20030[9] = inst_19972);
(statearr_20030[10] = inst_19971);
(statearr_20030[11] = inst_19969);
return statearr_20030;
})();var statearr_20031_20072 = state_20024__$1;(statearr_20031_20072[2] = null);
(statearr_20031_20072[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 6))
{var inst_19959 = (state_20024[7]);var inst_20007 = (state_20024[12]);var inst_20007__$1 = topic_fn.call(null,inst_19959);var inst_20008 = cljs.core.deref.call(null,mults);var inst_20009 = cljs.core.get.call(null,inst_20008,inst_20007__$1);var inst_20010 = cljs.core.async.muxch_STAR_.call(null,inst_20009);var state_20024__$1 = (function (){var statearr_20032 = state_20024;(statearr_20032[12] = inst_20007__$1);
return statearr_20032;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20024__$1,19,inst_20010,inst_19959);
} else
{if((state_val_20025 === 7))
{var inst_20020 = (state_20024[2]);var state_20024__$1 = state_20024;var statearr_20033_20073 = state_20024__$1;(statearr_20033_20073[2] = inst_20020);
(statearr_20033_20073[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 8))
{var inst_19972 = (state_20024[9]);var inst_19971 = (state_20024[10]);var inst_19974 = (inst_19972 < inst_19971);var inst_19975 = inst_19974;var state_20024__$1 = state_20024;if(cljs.core.truth_(inst_19975))
{var statearr_20037_20074 = state_20024__$1;(statearr_20037_20074[1] = 10);
} else
{var statearr_20038_20075 = state_20024__$1;(statearr_20038_20075[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 9))
{var inst_20005 = (state_20024[2]);var state_20024__$1 = state_20024;var statearr_20039_20076 = state_20024__$1;(statearr_20039_20076[2] = inst_20005);
(statearr_20039_20076[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 10))
{var inst_19970 = (state_20024[8]);var inst_19972 = (state_20024[9]);var inst_19971 = (state_20024[10]);var inst_19969 = (state_20024[11]);var inst_19977 = cljs.core._nth.call(null,inst_19970,inst_19972);var inst_19978 = cljs.core.async.muxch_STAR_.call(null,inst_19977);var inst_19979 = cljs.core.async.close_BANG_.call(null,inst_19978);var inst_19980 = (inst_19972 + 1);var tmp20034 = inst_19970;var tmp20035 = inst_19971;var tmp20036 = inst_19969;var inst_19969__$1 = tmp20036;var inst_19970__$1 = tmp20034;var inst_19971__$1 = tmp20035;var inst_19972__$1 = inst_19980;var state_20024__$1 = (function (){var statearr_20040 = state_20024;(statearr_20040[8] = inst_19970__$1);
(statearr_20040[9] = inst_19972__$1);
(statearr_20040[10] = inst_19971__$1);
(statearr_20040[13] = inst_19979);
(statearr_20040[11] = inst_19969__$1);
return statearr_20040;
})();var statearr_20041_20077 = state_20024__$1;(statearr_20041_20077[2] = null);
(statearr_20041_20077[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 11))
{var inst_19983 = (state_20024[14]);var inst_19969 = (state_20024[11]);var inst_19983__$1 = cljs.core.seq.call(null,inst_19969);var state_20024__$1 = (function (){var statearr_20042 = state_20024;(statearr_20042[14] = inst_19983__$1);
return statearr_20042;
})();if(inst_19983__$1)
{var statearr_20043_20078 = state_20024__$1;(statearr_20043_20078[1] = 13);
} else
{var statearr_20044_20079 = state_20024__$1;(statearr_20044_20079[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 12))
{var inst_20003 = (state_20024[2]);var state_20024__$1 = state_20024;var statearr_20045_20080 = state_20024__$1;(statearr_20045_20080[2] = inst_20003);
(statearr_20045_20080[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 13))
{var inst_19983 = (state_20024[14]);var inst_19985 = cljs.core.chunked_seq_QMARK_.call(null,inst_19983);var state_20024__$1 = state_20024;if(inst_19985)
{var statearr_20046_20081 = state_20024__$1;(statearr_20046_20081[1] = 16);
} else
{var statearr_20047_20082 = state_20024__$1;(statearr_20047_20082[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 14))
{var state_20024__$1 = state_20024;var statearr_20048_20083 = state_20024__$1;(statearr_20048_20083[2] = null);
(statearr_20048_20083[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 15))
{var inst_20001 = (state_20024[2]);var state_20024__$1 = state_20024;var statearr_20049_20084 = state_20024__$1;(statearr_20049_20084[2] = inst_20001);
(statearr_20049_20084[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 16))
{var inst_19983 = (state_20024[14]);var inst_19987 = cljs.core.chunk_first.call(null,inst_19983);var inst_19988 = cljs.core.chunk_rest.call(null,inst_19983);var inst_19989 = cljs.core.count.call(null,inst_19987);var inst_19969 = inst_19988;var inst_19970 = inst_19987;var inst_19971 = inst_19989;var inst_19972 = 0;var state_20024__$1 = (function (){var statearr_20050 = state_20024;(statearr_20050[8] = inst_19970);
(statearr_20050[9] = inst_19972);
(statearr_20050[10] = inst_19971);
(statearr_20050[11] = inst_19969);
return statearr_20050;
})();var statearr_20051_20085 = state_20024__$1;(statearr_20051_20085[2] = null);
(statearr_20051_20085[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 17))
{var inst_19983 = (state_20024[14]);var inst_19992 = cljs.core.first.call(null,inst_19983);var inst_19993 = cljs.core.async.muxch_STAR_.call(null,inst_19992);var inst_19994 = cljs.core.async.close_BANG_.call(null,inst_19993);var inst_19995 = cljs.core.next.call(null,inst_19983);var inst_19969 = inst_19995;var inst_19970 = null;var inst_19971 = 0;var inst_19972 = 0;var state_20024__$1 = (function (){var statearr_20052 = state_20024;(statearr_20052[8] = inst_19970);
(statearr_20052[9] = inst_19972);
(statearr_20052[10] = inst_19971);
(statearr_20052[11] = inst_19969);
(statearr_20052[15] = inst_19994);
return statearr_20052;
})();var statearr_20053_20086 = state_20024__$1;(statearr_20053_20086[2] = null);
(statearr_20053_20086[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 18))
{var inst_19998 = (state_20024[2]);var state_20024__$1 = state_20024;var statearr_20054_20087 = state_20024__$1;(statearr_20054_20087[2] = inst_19998);
(statearr_20054_20087[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 19))
{var inst_20012 = (state_20024[2]);var state_20024__$1 = state_20024;if(cljs.core.truth_(inst_20012))
{var statearr_20055_20088 = state_20024__$1;(statearr_20055_20088[1] = 20);
} else
{var statearr_20056_20089 = state_20024__$1;(statearr_20056_20089[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 20))
{var state_20024__$1 = state_20024;var statearr_20057_20090 = state_20024__$1;(statearr_20057_20090[2] = null);
(statearr_20057_20090[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 21))
{var inst_20007 = (state_20024[12]);var inst_20015 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20007);var state_20024__$1 = state_20024;var statearr_20058_20091 = state_20024__$1;(statearr_20058_20091[2] = inst_20015);
(statearr_20058_20091[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20025 === 22))
{var inst_20017 = (state_20024[2]);var state_20024__$1 = (function (){var statearr_20059 = state_20024;(statearr_20059[16] = inst_20017);
return statearr_20059;
})();var statearr_20060_20092 = state_20024__$1;(statearr_20060_20092[2] = null);
(statearr_20060_20092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto___20068,mults,ensure_mult,p))
;return ((function (switch__15295__auto__,c__15366__auto___20068,mults,ensure_mult,p){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_20064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20064[0] = state_machine__15296__auto__);
(statearr_20064[1] = 1);
return statearr_20064;
});
var state_machine__15296__auto____1 = (function (state_20024){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_20024);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e20065){if((e20065 instanceof Object))
{var ex__15299__auto__ = e20065;var statearr_20066_20093 = state_20024;(statearr_20066_20093[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20024);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20065;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20094 = state_20024;
state_20024 = G__20094;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_20024){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_20024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto___20068,mults,ensure_mult,p))
})();var state__15368__auto__ = (function (){var statearr_20067 = f__15367__auto__.call(null);(statearr_20067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto___20068);
return statearr_20067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto___20068,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__15366__auto___20231 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto___20231,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto___20231,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20201){var state_val_20202 = (state_20201[1]);if((state_val_20202 === 1))
{var state_20201__$1 = state_20201;var statearr_20203_20232 = state_20201__$1;(statearr_20203_20232[2] = null);
(statearr_20203_20232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20202 === 2))
{var inst_20164 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20165 = 0;var state_20201__$1 = (function (){var statearr_20204 = state_20201;(statearr_20204[7] = inst_20165);
(statearr_20204[8] = inst_20164);
return statearr_20204;
})();var statearr_20205_20233 = state_20201__$1;(statearr_20205_20233[2] = null);
(statearr_20205_20233[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20202 === 3))
{var inst_20199 = (state_20201[2]);var state_20201__$1 = state_20201;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20201__$1,inst_20199);
} else
{if((state_val_20202 === 4))
{var inst_20165 = (state_20201[7]);var inst_20167 = (inst_20165 < cnt);var state_20201__$1 = state_20201;if(cljs.core.truth_(inst_20167))
{var statearr_20206_20234 = state_20201__$1;(statearr_20206_20234[1] = 6);
} else
{var statearr_20207_20235 = state_20201__$1;(statearr_20207_20235[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20202 === 5))
{var inst_20185 = (state_20201[2]);var state_20201__$1 = (function (){var statearr_20208 = state_20201;(statearr_20208[9] = inst_20185);
return statearr_20208;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20201__$1,12,dchan);
} else
{if((state_val_20202 === 6))
{var state_20201__$1 = state_20201;var statearr_20209_20236 = state_20201__$1;(statearr_20209_20236[2] = null);
(statearr_20209_20236[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20202 === 7))
{var state_20201__$1 = state_20201;var statearr_20210_20237 = state_20201__$1;(statearr_20210_20237[2] = null);
(statearr_20210_20237[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20202 === 8))
{var inst_20183 = (state_20201[2]);var state_20201__$1 = state_20201;var statearr_20211_20238 = state_20201__$1;(statearr_20211_20238[2] = inst_20183);
(statearr_20211_20238[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20202 === 9))
{var inst_20165 = (state_20201[7]);var inst_20178 = (state_20201[2]);var inst_20179 = (inst_20165 + 1);var inst_20165__$1 = inst_20179;var state_20201__$1 = (function (){var statearr_20212 = state_20201;(statearr_20212[10] = inst_20178);
(statearr_20212[7] = inst_20165__$1);
return statearr_20212;
})();var statearr_20213_20239 = state_20201__$1;(statearr_20213_20239[2] = null);
(statearr_20213_20239[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20202 === 10))
{var inst_20169 = (state_20201[2]);var inst_20170 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20201__$1 = (function (){var statearr_20214 = state_20201;(statearr_20214[11] = inst_20169);
return statearr_20214;
})();var statearr_20215_20240 = state_20201__$1;(statearr_20215_20240[2] = inst_20170);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20201__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20202 === 11))
{var inst_20165 = (state_20201[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20201,10,Object,null,9);var inst_20174 = chs__$1.call(null,inst_20165);var inst_20175 = done.call(null,inst_20165);var inst_20176 = cljs.core.async.take_BANG_.call(null,inst_20174,inst_20175);var state_20201__$1 = state_20201;var statearr_20216_20241 = state_20201__$1;(statearr_20216_20241[2] = inst_20176);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20201__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20202 === 12))
{var inst_20187 = (state_20201[12]);var inst_20187__$1 = (state_20201[2]);var inst_20188 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20187__$1);var state_20201__$1 = (function (){var statearr_20217 = state_20201;(statearr_20217[12] = inst_20187__$1);
return statearr_20217;
})();if(cljs.core.truth_(inst_20188))
{var statearr_20218_20242 = state_20201__$1;(statearr_20218_20242[1] = 13);
} else
{var statearr_20219_20243 = state_20201__$1;(statearr_20219_20243[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20202 === 13))
{var inst_20190 = cljs.core.async.close_BANG_.call(null,out);var state_20201__$1 = state_20201;var statearr_20220_20244 = state_20201__$1;(statearr_20220_20244[2] = inst_20190);
(statearr_20220_20244[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20202 === 14))
{var inst_20187 = (state_20201[12]);var inst_20192 = cljs.core.apply.call(null,f,inst_20187);var state_20201__$1 = state_20201;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20201__$1,16,out,inst_20192);
} else
{if((state_val_20202 === 15))
{var inst_20197 = (state_20201[2]);var state_20201__$1 = state_20201;var statearr_20221_20245 = state_20201__$1;(statearr_20221_20245[2] = inst_20197);
(statearr_20221_20245[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20202 === 16))
{var inst_20194 = (state_20201[2]);var state_20201__$1 = (function (){var statearr_20222 = state_20201;(statearr_20222[13] = inst_20194);
return statearr_20222;
})();var statearr_20223_20246 = state_20201__$1;(statearr_20223_20246[2] = null);
(statearr_20223_20246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto___20231,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__15295__auto__,c__15366__auto___20231,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_20227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20227[0] = state_machine__15296__auto__);
(statearr_20227[1] = 1);
return statearr_20227;
});
var state_machine__15296__auto____1 = (function (state_20201){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_20201);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e20228){if((e20228 instanceof Object))
{var ex__15299__auto__ = e20228;var statearr_20229_20247 = state_20201;(statearr_20229_20247[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20201);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20248 = state_20201;
state_20201 = G__20248;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_20201){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_20201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto___20231,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__15368__auto__ = (function (){var statearr_20230 = f__15367__auto__.call(null);(statearr_20230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto___20231);
return statearr_20230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto___20231,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15366__auto___20356 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto___20356,out){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto___20356,out){
return (function (state_20332){var state_val_20333 = (state_20332[1]);if((state_val_20333 === 1))
{var inst_20303 = cljs.core.vec.call(null,chs);var inst_20304 = inst_20303;var state_20332__$1 = (function (){var statearr_20334 = state_20332;(statearr_20334[7] = inst_20304);
return statearr_20334;
})();var statearr_20335_20357 = state_20332__$1;(statearr_20335_20357[2] = null);
(statearr_20335_20357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20333 === 2))
{var inst_20304 = (state_20332[7]);var inst_20306 = cljs.core.count.call(null,inst_20304);var inst_20307 = (inst_20306 > 0);var state_20332__$1 = state_20332;if(cljs.core.truth_(inst_20307))
{var statearr_20336_20358 = state_20332__$1;(statearr_20336_20358[1] = 4);
} else
{var statearr_20337_20359 = state_20332__$1;(statearr_20337_20359[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20333 === 3))
{var inst_20330 = (state_20332[2]);var state_20332__$1 = state_20332;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20332__$1,inst_20330);
} else
{if((state_val_20333 === 4))
{var inst_20304 = (state_20332[7]);var state_20332__$1 = state_20332;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20332__$1,7,inst_20304);
} else
{if((state_val_20333 === 5))
{var inst_20326 = cljs.core.async.close_BANG_.call(null,out);var state_20332__$1 = state_20332;var statearr_20338_20360 = state_20332__$1;(statearr_20338_20360[2] = inst_20326);
(statearr_20338_20360[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20333 === 6))
{var inst_20328 = (state_20332[2]);var state_20332__$1 = state_20332;var statearr_20339_20361 = state_20332__$1;(statearr_20339_20361[2] = inst_20328);
(statearr_20339_20361[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20333 === 7))
{var inst_20311 = (state_20332[8]);var inst_20312 = (state_20332[9]);var inst_20311__$1 = (state_20332[2]);var inst_20312__$1 = cljs.core.nth.call(null,inst_20311__$1,0,null);var inst_20313 = cljs.core.nth.call(null,inst_20311__$1,1,null);var inst_20314 = (inst_20312__$1 == null);var state_20332__$1 = (function (){var statearr_20340 = state_20332;(statearr_20340[8] = inst_20311__$1);
(statearr_20340[9] = inst_20312__$1);
(statearr_20340[10] = inst_20313);
return statearr_20340;
})();if(cljs.core.truth_(inst_20314))
{var statearr_20341_20362 = state_20332__$1;(statearr_20341_20362[1] = 8);
} else
{var statearr_20342_20363 = state_20332__$1;(statearr_20342_20363[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20333 === 8))
{var inst_20304 = (state_20332[7]);var inst_20311 = (state_20332[8]);var inst_20312 = (state_20332[9]);var inst_20313 = (state_20332[10]);var inst_20316 = (function (){var c = inst_20313;var v = inst_20312;var vec__20309 = inst_20311;var cs = inst_20304;return ((function (c,v,vec__20309,cs,inst_20304,inst_20311,inst_20312,inst_20313,state_val_20333,c__15366__auto___20356,out){
return (function (p1__20249_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20249_SHARP_);
});
;})(c,v,vec__20309,cs,inst_20304,inst_20311,inst_20312,inst_20313,state_val_20333,c__15366__auto___20356,out))
})();var inst_20317 = cljs.core.filterv.call(null,inst_20316,inst_20304);var inst_20304__$1 = inst_20317;var state_20332__$1 = (function (){var statearr_20343 = state_20332;(statearr_20343[7] = inst_20304__$1);
return statearr_20343;
})();var statearr_20344_20364 = state_20332__$1;(statearr_20344_20364[2] = null);
(statearr_20344_20364[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20333 === 9))
{var inst_20312 = (state_20332[9]);var state_20332__$1 = state_20332;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20332__$1,11,out,inst_20312);
} else
{if((state_val_20333 === 10))
{var inst_20324 = (state_20332[2]);var state_20332__$1 = state_20332;var statearr_20346_20365 = state_20332__$1;(statearr_20346_20365[2] = inst_20324);
(statearr_20346_20365[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20333 === 11))
{var inst_20304 = (state_20332[7]);var inst_20321 = (state_20332[2]);var tmp20345 = inst_20304;var inst_20304__$1 = tmp20345;var state_20332__$1 = (function (){var statearr_20347 = state_20332;(statearr_20347[7] = inst_20304__$1);
(statearr_20347[11] = inst_20321);
return statearr_20347;
})();var statearr_20348_20366 = state_20332__$1;(statearr_20348_20366[2] = null);
(statearr_20348_20366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto___20356,out))
;return ((function (switch__15295__auto__,c__15366__auto___20356,out){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_20352 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20352[0] = state_machine__15296__auto__);
(statearr_20352[1] = 1);
return statearr_20352;
});
var state_machine__15296__auto____1 = (function (state_20332){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_20332);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e20353){if((e20353 instanceof Object))
{var ex__15299__auto__ = e20353;var statearr_20354_20367 = state_20332;(statearr_20354_20367[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20332);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20368 = state_20332;
state_20332 = G__20368;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_20332){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_20332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto___20356,out))
})();var state__15368__auto__ = (function (){var statearr_20355 = f__15367__auto__.call(null);(statearr_20355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto___20356);
return statearr_20355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto___20356,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15366__auto___20461 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto___20461,out){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto___20461,out){
return (function (state_20438){var state_val_20439 = (state_20438[1]);if((state_val_20439 === 1))
{var inst_20415 = 0;var state_20438__$1 = (function (){var statearr_20440 = state_20438;(statearr_20440[7] = inst_20415);
return statearr_20440;
})();var statearr_20441_20462 = state_20438__$1;(statearr_20441_20462[2] = null);
(statearr_20441_20462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20439 === 2))
{var inst_20415 = (state_20438[7]);var inst_20417 = (inst_20415 < n);var state_20438__$1 = state_20438;if(cljs.core.truth_(inst_20417))
{var statearr_20442_20463 = state_20438__$1;(statearr_20442_20463[1] = 4);
} else
{var statearr_20443_20464 = state_20438__$1;(statearr_20443_20464[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20439 === 3))
{var inst_20435 = (state_20438[2]);var inst_20436 = cljs.core.async.close_BANG_.call(null,out);var state_20438__$1 = (function (){var statearr_20444 = state_20438;(statearr_20444[8] = inst_20435);
return statearr_20444;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20438__$1,inst_20436);
} else
{if((state_val_20439 === 4))
{var state_20438__$1 = state_20438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20438__$1,7,ch);
} else
{if((state_val_20439 === 5))
{var state_20438__$1 = state_20438;var statearr_20445_20465 = state_20438__$1;(statearr_20445_20465[2] = null);
(statearr_20445_20465[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20439 === 6))
{var inst_20433 = (state_20438[2]);var state_20438__$1 = state_20438;var statearr_20446_20466 = state_20438__$1;(statearr_20446_20466[2] = inst_20433);
(statearr_20446_20466[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20439 === 7))
{var inst_20420 = (state_20438[9]);var inst_20420__$1 = (state_20438[2]);var inst_20421 = (inst_20420__$1 == null);var inst_20422 = cljs.core.not.call(null,inst_20421);var state_20438__$1 = (function (){var statearr_20447 = state_20438;(statearr_20447[9] = inst_20420__$1);
return statearr_20447;
})();if(inst_20422)
{var statearr_20448_20467 = state_20438__$1;(statearr_20448_20467[1] = 8);
} else
{var statearr_20449_20468 = state_20438__$1;(statearr_20449_20468[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20439 === 8))
{var inst_20420 = (state_20438[9]);var state_20438__$1 = state_20438;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20438__$1,11,out,inst_20420);
} else
{if((state_val_20439 === 9))
{var state_20438__$1 = state_20438;var statearr_20450_20469 = state_20438__$1;(statearr_20450_20469[2] = null);
(statearr_20450_20469[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20439 === 10))
{var inst_20430 = (state_20438[2]);var state_20438__$1 = state_20438;var statearr_20451_20470 = state_20438__$1;(statearr_20451_20470[2] = inst_20430);
(statearr_20451_20470[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20439 === 11))
{var inst_20415 = (state_20438[7]);var inst_20425 = (state_20438[2]);var inst_20426 = (inst_20415 + 1);var inst_20415__$1 = inst_20426;var state_20438__$1 = (function (){var statearr_20452 = state_20438;(statearr_20452[7] = inst_20415__$1);
(statearr_20452[10] = inst_20425);
return statearr_20452;
})();var statearr_20453_20471 = state_20438__$1;(statearr_20453_20471[2] = null);
(statearr_20453_20471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto___20461,out))
;return ((function (switch__15295__auto__,c__15366__auto___20461,out){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_20457 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20457[0] = state_machine__15296__auto__);
(statearr_20457[1] = 1);
return statearr_20457;
});
var state_machine__15296__auto____1 = (function (state_20438){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_20438);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e20458){if((e20458 instanceof Object))
{var ex__15299__auto__ = e20458;var statearr_20459_20472 = state_20438;(statearr_20459_20472[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20438);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20473 = state_20438;
state_20438 = G__20473;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_20438){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_20438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto___20461,out))
})();var state__15368__auto__ = (function (){var statearr_20460 = f__15367__auto__.call(null);(statearr_20460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto___20461);
return statearr_20460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto___20461,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15366__auto___20570 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto___20570,out){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto___20570,out){
return (function (state_20545){var state_val_20546 = (state_20545[1]);if((state_val_20546 === 1))
{var inst_20522 = null;var state_20545__$1 = (function (){var statearr_20547 = state_20545;(statearr_20547[7] = inst_20522);
return statearr_20547;
})();var statearr_20548_20571 = state_20545__$1;(statearr_20548_20571[2] = null);
(statearr_20548_20571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20546 === 2))
{var state_20545__$1 = state_20545;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20545__$1,4,ch);
} else
{if((state_val_20546 === 3))
{var inst_20542 = (state_20545[2]);var inst_20543 = cljs.core.async.close_BANG_.call(null,out);var state_20545__$1 = (function (){var statearr_20549 = state_20545;(statearr_20549[8] = inst_20542);
return statearr_20549;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20545__$1,inst_20543);
} else
{if((state_val_20546 === 4))
{var inst_20525 = (state_20545[9]);var inst_20525__$1 = (state_20545[2]);var inst_20526 = (inst_20525__$1 == null);var inst_20527 = cljs.core.not.call(null,inst_20526);var state_20545__$1 = (function (){var statearr_20550 = state_20545;(statearr_20550[9] = inst_20525__$1);
return statearr_20550;
})();if(inst_20527)
{var statearr_20551_20572 = state_20545__$1;(statearr_20551_20572[1] = 5);
} else
{var statearr_20552_20573 = state_20545__$1;(statearr_20552_20573[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20546 === 5))
{var inst_20522 = (state_20545[7]);var inst_20525 = (state_20545[9]);var inst_20529 = cljs.core._EQ_.call(null,inst_20525,inst_20522);var state_20545__$1 = state_20545;if(inst_20529)
{var statearr_20553_20574 = state_20545__$1;(statearr_20553_20574[1] = 8);
} else
{var statearr_20554_20575 = state_20545__$1;(statearr_20554_20575[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20546 === 6))
{var state_20545__$1 = state_20545;var statearr_20556_20576 = state_20545__$1;(statearr_20556_20576[2] = null);
(statearr_20556_20576[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20546 === 7))
{var inst_20540 = (state_20545[2]);var state_20545__$1 = state_20545;var statearr_20557_20577 = state_20545__$1;(statearr_20557_20577[2] = inst_20540);
(statearr_20557_20577[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20546 === 8))
{var inst_20522 = (state_20545[7]);var tmp20555 = inst_20522;var inst_20522__$1 = tmp20555;var state_20545__$1 = (function (){var statearr_20558 = state_20545;(statearr_20558[7] = inst_20522__$1);
return statearr_20558;
})();var statearr_20559_20578 = state_20545__$1;(statearr_20559_20578[2] = null);
(statearr_20559_20578[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20546 === 9))
{var inst_20525 = (state_20545[9]);var state_20545__$1 = state_20545;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20545__$1,11,out,inst_20525);
} else
{if((state_val_20546 === 10))
{var inst_20537 = (state_20545[2]);var state_20545__$1 = state_20545;var statearr_20560_20579 = state_20545__$1;(statearr_20560_20579[2] = inst_20537);
(statearr_20560_20579[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20546 === 11))
{var inst_20525 = (state_20545[9]);var inst_20534 = (state_20545[2]);var inst_20522 = inst_20525;var state_20545__$1 = (function (){var statearr_20561 = state_20545;(statearr_20561[7] = inst_20522);
(statearr_20561[10] = inst_20534);
return statearr_20561;
})();var statearr_20562_20580 = state_20545__$1;(statearr_20562_20580[2] = null);
(statearr_20562_20580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto___20570,out))
;return ((function (switch__15295__auto__,c__15366__auto___20570,out){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_20566 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20566[0] = state_machine__15296__auto__);
(statearr_20566[1] = 1);
return statearr_20566;
});
var state_machine__15296__auto____1 = (function (state_20545){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_20545);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e20567){if((e20567 instanceof Object))
{var ex__15299__auto__ = e20567;var statearr_20568_20581 = state_20545;(statearr_20568_20581[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20545);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20582 = state_20545;
state_20545 = G__20582;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_20545){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_20545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto___20570,out))
})();var state__15368__auto__ = (function (){var statearr_20569 = f__15367__auto__.call(null);(statearr_20569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto___20570);
return statearr_20569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto___20570,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15366__auto___20717 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto___20717,out){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto___20717,out){
return (function (state_20687){var state_val_20688 = (state_20687[1]);if((state_val_20688 === 1))
{var inst_20650 = (new Array(n));var inst_20651 = inst_20650;var inst_20652 = 0;var state_20687__$1 = (function (){var statearr_20689 = state_20687;(statearr_20689[7] = inst_20651);
(statearr_20689[8] = inst_20652);
return statearr_20689;
})();var statearr_20690_20718 = state_20687__$1;(statearr_20690_20718[2] = null);
(statearr_20690_20718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20688 === 2))
{var state_20687__$1 = state_20687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20687__$1,4,ch);
} else
{if((state_val_20688 === 3))
{var inst_20685 = (state_20687[2]);var state_20687__$1 = state_20687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20687__$1,inst_20685);
} else
{if((state_val_20688 === 4))
{var inst_20655 = (state_20687[9]);var inst_20655__$1 = (state_20687[2]);var inst_20656 = (inst_20655__$1 == null);var inst_20657 = cljs.core.not.call(null,inst_20656);var state_20687__$1 = (function (){var statearr_20691 = state_20687;(statearr_20691[9] = inst_20655__$1);
return statearr_20691;
})();if(inst_20657)
{var statearr_20692_20719 = state_20687__$1;(statearr_20692_20719[1] = 5);
} else
{var statearr_20693_20720 = state_20687__$1;(statearr_20693_20720[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20688 === 5))
{var inst_20651 = (state_20687[7]);var inst_20652 = (state_20687[8]);var inst_20660 = (state_20687[10]);var inst_20655 = (state_20687[9]);var inst_20659 = (inst_20651[inst_20652] = inst_20655);var inst_20660__$1 = (inst_20652 + 1);var inst_20661 = (inst_20660__$1 < n);var state_20687__$1 = (function (){var statearr_20694 = state_20687;(statearr_20694[11] = inst_20659);
(statearr_20694[10] = inst_20660__$1);
return statearr_20694;
})();if(cljs.core.truth_(inst_20661))
{var statearr_20695_20721 = state_20687__$1;(statearr_20695_20721[1] = 8);
} else
{var statearr_20696_20722 = state_20687__$1;(statearr_20696_20722[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20688 === 6))
{var inst_20652 = (state_20687[8]);var inst_20673 = (inst_20652 > 0);var state_20687__$1 = state_20687;if(cljs.core.truth_(inst_20673))
{var statearr_20698_20723 = state_20687__$1;(statearr_20698_20723[1] = 12);
} else
{var statearr_20699_20724 = state_20687__$1;(statearr_20699_20724[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20688 === 7))
{var inst_20683 = (state_20687[2]);var state_20687__$1 = state_20687;var statearr_20700_20725 = state_20687__$1;(statearr_20700_20725[2] = inst_20683);
(statearr_20700_20725[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20688 === 8))
{var inst_20651 = (state_20687[7]);var inst_20660 = (state_20687[10]);var tmp20697 = inst_20651;var inst_20651__$1 = tmp20697;var inst_20652 = inst_20660;var state_20687__$1 = (function (){var statearr_20701 = state_20687;(statearr_20701[7] = inst_20651__$1);
(statearr_20701[8] = inst_20652);
return statearr_20701;
})();var statearr_20702_20726 = state_20687__$1;(statearr_20702_20726[2] = null);
(statearr_20702_20726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20688 === 9))
{var inst_20651 = (state_20687[7]);var inst_20665 = cljs.core.vec.call(null,inst_20651);var state_20687__$1 = state_20687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20687__$1,11,out,inst_20665);
} else
{if((state_val_20688 === 10))
{var inst_20671 = (state_20687[2]);var state_20687__$1 = state_20687;var statearr_20703_20727 = state_20687__$1;(statearr_20703_20727[2] = inst_20671);
(statearr_20703_20727[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20688 === 11))
{var inst_20667 = (state_20687[2]);var inst_20668 = (new Array(n));var inst_20651 = inst_20668;var inst_20652 = 0;var state_20687__$1 = (function (){var statearr_20704 = state_20687;(statearr_20704[7] = inst_20651);
(statearr_20704[12] = inst_20667);
(statearr_20704[8] = inst_20652);
return statearr_20704;
})();var statearr_20705_20728 = state_20687__$1;(statearr_20705_20728[2] = null);
(statearr_20705_20728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20688 === 12))
{var inst_20651 = (state_20687[7]);var inst_20675 = cljs.core.vec.call(null,inst_20651);var state_20687__$1 = state_20687;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20687__$1,15,out,inst_20675);
} else
{if((state_val_20688 === 13))
{var state_20687__$1 = state_20687;var statearr_20706_20729 = state_20687__$1;(statearr_20706_20729[2] = null);
(statearr_20706_20729[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20688 === 14))
{var inst_20680 = (state_20687[2]);var inst_20681 = cljs.core.async.close_BANG_.call(null,out);var state_20687__$1 = (function (){var statearr_20707 = state_20687;(statearr_20707[13] = inst_20680);
return statearr_20707;
})();var statearr_20708_20730 = state_20687__$1;(statearr_20708_20730[2] = inst_20681);
(statearr_20708_20730[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20688 === 15))
{var inst_20677 = (state_20687[2]);var state_20687__$1 = state_20687;var statearr_20709_20731 = state_20687__$1;(statearr_20709_20731[2] = inst_20677);
(statearr_20709_20731[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto___20717,out))
;return ((function (switch__15295__auto__,c__15366__auto___20717,out){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_20713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20713[0] = state_machine__15296__auto__);
(statearr_20713[1] = 1);
return statearr_20713;
});
var state_machine__15296__auto____1 = (function (state_20687){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_20687);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e20714){if((e20714 instanceof Object))
{var ex__15299__auto__ = e20714;var statearr_20715_20732 = state_20687;(statearr_20715_20732[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20687);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20733 = state_20687;
state_20687 = G__20733;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_20687){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_20687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto___20717,out))
})();var state__15368__auto__ = (function (){var statearr_20716 = f__15367__auto__.call(null);(statearr_20716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto___20717);
return statearr_20716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto___20717,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__15366__auto___20876 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__15366__auto___20876,out){
return (function (){var f__15367__auto__ = (function (){var switch__15295__auto__ = ((function (c__15366__auto___20876,out){
return (function (state_20846){var state_val_20847 = (state_20846[1]);if((state_val_20847 === 1))
{var inst_20805 = [];var inst_20806 = inst_20805;var inst_20807 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_20846__$1 = (function (){var statearr_20848 = state_20846;(statearr_20848[7] = inst_20807);
(statearr_20848[8] = inst_20806);
return statearr_20848;
})();var statearr_20849_20877 = state_20846__$1;(statearr_20849_20877[2] = null);
(statearr_20849_20877[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20847 === 2))
{var state_20846__$1 = state_20846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20846__$1,4,ch);
} else
{if((state_val_20847 === 3))
{var inst_20844 = (state_20846[2]);var state_20846__$1 = state_20846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20846__$1,inst_20844);
} else
{if((state_val_20847 === 4))
{var inst_20810 = (state_20846[9]);var inst_20810__$1 = (state_20846[2]);var inst_20811 = (inst_20810__$1 == null);var inst_20812 = cljs.core.not.call(null,inst_20811);var state_20846__$1 = (function (){var statearr_20850 = state_20846;(statearr_20850[9] = inst_20810__$1);
return statearr_20850;
})();if(inst_20812)
{var statearr_20851_20878 = state_20846__$1;(statearr_20851_20878[1] = 5);
} else
{var statearr_20852_20879 = state_20846__$1;(statearr_20852_20879[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20847 === 5))
{var inst_20810 = (state_20846[9]);var inst_20814 = (state_20846[10]);var inst_20807 = (state_20846[7]);var inst_20814__$1 = f.call(null,inst_20810);var inst_20815 = cljs.core._EQ_.call(null,inst_20814__$1,inst_20807);var inst_20816 = cljs.core.keyword_identical_QMARK_.call(null,inst_20807,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_20817 = (inst_20815) || (inst_20816);var state_20846__$1 = (function (){var statearr_20853 = state_20846;(statearr_20853[10] = inst_20814__$1);
return statearr_20853;
})();if(cljs.core.truth_(inst_20817))
{var statearr_20854_20880 = state_20846__$1;(statearr_20854_20880[1] = 8);
} else
{var statearr_20855_20881 = state_20846__$1;(statearr_20855_20881[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20847 === 6))
{var inst_20806 = (state_20846[8]);var inst_20831 = inst_20806.length;var inst_20832 = (inst_20831 > 0);var state_20846__$1 = state_20846;if(cljs.core.truth_(inst_20832))
{var statearr_20857_20882 = state_20846__$1;(statearr_20857_20882[1] = 12);
} else
{var statearr_20858_20883 = state_20846__$1;(statearr_20858_20883[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20847 === 7))
{var inst_20842 = (state_20846[2]);var state_20846__$1 = state_20846;var statearr_20859_20884 = state_20846__$1;(statearr_20859_20884[2] = inst_20842);
(statearr_20859_20884[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20847 === 8))
{var inst_20810 = (state_20846[9]);var inst_20814 = (state_20846[10]);var inst_20806 = (state_20846[8]);var inst_20819 = inst_20806.push(inst_20810);var tmp20856 = inst_20806;var inst_20806__$1 = tmp20856;var inst_20807 = inst_20814;var state_20846__$1 = (function (){var statearr_20860 = state_20846;(statearr_20860[11] = inst_20819);
(statearr_20860[7] = inst_20807);
(statearr_20860[8] = inst_20806__$1);
return statearr_20860;
})();var statearr_20861_20885 = state_20846__$1;(statearr_20861_20885[2] = null);
(statearr_20861_20885[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20847 === 9))
{var inst_20806 = (state_20846[8]);var inst_20822 = cljs.core.vec.call(null,inst_20806);var state_20846__$1 = state_20846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20846__$1,11,out,inst_20822);
} else
{if((state_val_20847 === 10))
{var inst_20829 = (state_20846[2]);var state_20846__$1 = state_20846;var statearr_20862_20886 = state_20846__$1;(statearr_20862_20886[2] = inst_20829);
(statearr_20862_20886[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20847 === 11))
{var inst_20810 = (state_20846[9]);var inst_20814 = (state_20846[10]);var inst_20824 = (state_20846[2]);var inst_20825 = [];var inst_20826 = inst_20825.push(inst_20810);var inst_20806 = inst_20825;var inst_20807 = inst_20814;var state_20846__$1 = (function (){var statearr_20863 = state_20846;(statearr_20863[12] = inst_20824);
(statearr_20863[13] = inst_20826);
(statearr_20863[7] = inst_20807);
(statearr_20863[8] = inst_20806);
return statearr_20863;
})();var statearr_20864_20887 = state_20846__$1;(statearr_20864_20887[2] = null);
(statearr_20864_20887[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20847 === 12))
{var inst_20806 = (state_20846[8]);var inst_20834 = cljs.core.vec.call(null,inst_20806);var state_20846__$1 = state_20846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20846__$1,15,out,inst_20834);
} else
{if((state_val_20847 === 13))
{var state_20846__$1 = state_20846;var statearr_20865_20888 = state_20846__$1;(statearr_20865_20888[2] = null);
(statearr_20865_20888[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20847 === 14))
{var inst_20839 = (state_20846[2]);var inst_20840 = cljs.core.async.close_BANG_.call(null,out);var state_20846__$1 = (function (){var statearr_20866 = state_20846;(statearr_20866[14] = inst_20839);
return statearr_20866;
})();var statearr_20867_20889 = state_20846__$1;(statearr_20867_20889[2] = inst_20840);
(statearr_20867_20889[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20847 === 15))
{var inst_20836 = (state_20846[2]);var state_20846__$1 = state_20846;var statearr_20868_20890 = state_20846__$1;(statearr_20868_20890[2] = inst_20836);
(statearr_20868_20890[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15366__auto___20876,out))
;return ((function (switch__15295__auto__,c__15366__auto___20876,out){
return (function() {
var state_machine__15296__auto__ = null;
var state_machine__15296__auto____0 = (function (){var statearr_20872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20872[0] = state_machine__15296__auto__);
(statearr_20872[1] = 1);
return statearr_20872;
});
var state_machine__15296__auto____1 = (function (state_20846){while(true){
var ret_value__15297__auto__ = (function (){try{while(true){
var result__15298__auto__ = switch__15295__auto__.call(null,state_20846);if(cljs.core.keyword_identical_QMARK_.call(null,result__15298__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__15298__auto__;
}
break;
}
}catch (e20873){if((e20873 instanceof Object))
{var ex__15299__auto__ = e20873;var statearr_20874_20891 = state_20846;(statearr_20874_20891[5] = ex__15299__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20846);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20873;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15297__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20892 = state_20846;
state_20846 = G__20892;
continue;
}
} else
{return ret_value__15297__auto__;
}
break;
}
});
state_machine__15296__auto__ = function(state_20846){
switch(arguments.length){
case 0:
return state_machine__15296__auto____0.call(this);
case 1:
return state_machine__15296__auto____1.call(this,state_20846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__15296__auto____0;
state_machine__15296__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__15296__auto____1;
return state_machine__15296__auto__;
})()
;})(switch__15295__auto__,c__15366__auto___20876,out))
})();var state__15368__auto__ = (function (){var statearr_20875 = f__15367__auto__.call(null);(statearr_20875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15366__auto___20876);
return statearr_20875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15368__auto__);
});})(c__15366__auto___20876,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map