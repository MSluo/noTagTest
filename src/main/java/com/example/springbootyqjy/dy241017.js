"use strict";

(self.webpackChunkdouyin_search = self.webpackChunkdouyin_search || []).push([[4522], {
    84522: function(e, t, n) {
        n.r(t),
            n.d(t, {
                SecureSDK: function() {
                    return ne
                },
                createSecureInstance: function() {
                    return nt
                }
            });
        var r, o, i, a, c, s, u, l, f, d, g, p, v, h, m, y = function(e) {
            return e ? e.startsWith("http") ? new URL(e).pathname : e : ""
        }, _ = n(57073), b = function() {
            return (b = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }
            ).apply(this, arguments)
        }, k = {
            params_for_special: "uc_login"
        }, w = function() {
            function e(e) {
                var t = e.appId
                    , n = e.config;
                this.zeroTrustTea = new _.Collector("zeroTrustTea"),
                    this.zeroTrustTea.init({
                        app_id: t,
                        channel: "cn",
                        log: !1,
                        disable_auto_pv: !0,
                        disable_webid: !0
                    }),
                    this.setConfig(void 0 === n ? {} : n),
                    this.zeroTrustTea.start()
            }
            return e.initTea = function(t) {
                var n = t.appId
                    , r = t.config;
                return this._instance || (this._instance = new e({
                    appId: n,
                    config: void 0 === r ? {} : r
                })),
                    this._instance
            }
                ,
                e.getTea = function() {
                    return this._instance
                }
                ,
                e.prototype.setEvtParams = function(e) {
                    this.zeroTrustTea.config({
                        evtParams: e
                    })
                }
                ,
                e.prototype.setConfig = function(e) {
                    void 0 === e && (e = {}),
                        this.zeroTrustTea.config(b({
                            _staging_flag: 0
                        }, e))
                }
                ,
                e.prototype.sendLog = function(e, t) {
                    e && this.zeroTrustTea.event(e, t)
                }
                ,
                e.prototype.sendBecon = function(e, t) {
                    e && this.zeroTrustTea.beconEvent(e, t)
                }
                ,
                e
        }(), S = function(e) {
            var t = e.appId
                , n = e.webId
                , r = void 0 === n ? "" : n
                , o = e.config;
            w.initTea({
                appId: (void 0 === t ? 1661 : t) || 1661,
                config: b({
                    user_unique_id: r,
                    device_id: r,
                    user_id: r
                }, void 0 === o ? {} : o)
            })
        }, C = function(e) {
            var t;
            void 0 === e && (e = {}),
            null === (t = w.getTea()) || void 0 === t || t.setEvtParams(e)
        }, K = function(e, t) {
            var n;
            return null === (n = w.getTea()) || void 0 === n ? void 0 : n.sendLog(e, b(b({}, k), t || {}))
        }, x = function(e, t) {
            var n;
            return null === (n = w.getTea()) || void 0 === n ? void 0 : n.sendBecon(e, b(b({}, k), t || {}))
        };
        (r = h || (h = {})).logWebBdTicketGuardConsumerResponse = "web_bd_ticket_guard_consumer_response",
            r.logWebBdTicketGuardEnv = "web_bd_ticket_guard_env",
            r.logWebBdTicketGuardLocalMiss = "web_bd_ticket_guard_local_miss",
            r.logWebBdTicketGuardIframeStatusBeforeUnLoad = "web_bd_ticket_guard_iframe_status_before_unload",
            r.logWebBdTicketGuardIframeStatus = "web_bd_ticket_guard_iframe_status",
            r.logWebBdTicketGuardConsumerResponseError = "web_bd_ticket_guard_consumer_response_error",
            r.logWebBdTicketGuardHeaderProviderResponse = "web_bd_ticket_guard_header_provider_response";
        var I = function(e, t) {
            var n, r, o, i, a, c, s, u, l = "";
            try {
                l = y(null === (n = null == e ? void 0 : e.config) || void 0 === n ? void 0 : n.url)
            } catch (e) {}
            var f = (null === (r = null == e ? void 0 : e.headers) || void 0 === r ? void 0 : r["x-tt-logid"]) || ""
                , d = null === (o = null == e ? void 0 : e.reqHeaders) || void 0 === o ? void 0 : o["bd-ticket-guard-version"]
                , g = null === (i = null == e ? void 0 : e.reqHeaders) || void 0 === i ? void 0 : i["bd-ticket-guard-iteration-version"]
                , p = (null === (a = null == e ? void 0 : e.reqHeaders) || void 0 === a ? void 0 : a["bd-ticket-guard-client-csr"]) ? 1 : 0
                , v = (null === (c = null == e ? void 0 : e.reqHeaders) || void 0 === c ? void 0 : c["bd-ticket-guard-client-cert"]) ? 1 : 0
                , m = (null === (s = null == e ? void 0 : e.reqHeaders) || void 0 === s ? void 0 : s["bd-ticket-guard-client-data"]) ? 1 : 0
                , _ = (null === (u = null == window ? void 0 : window.location) || void 0 === u ? void 0 : u.hostname) || ""
                , b = (null == t ? void 0 : t.isHasNewTssign) || "-99";
            K(h.logWebBdTicketGuardHeaderProviderResponse, {
                logid: f,
                path: l,
                ticket_guard_version: d,
                ticket_guard_iteration_version: g,
                request_with_csr: p,
                request_with_cert: v,
                request_with_client_data: m,
                hostname: _,
                is_has_new_ts_sign: b
            })
        }
            , T = function(e, t) {
            var n, r, o, i, a, c, s, u, l, f = "";
            try {
                f = y(null === (n = null == e ? void 0 : e.config) || void 0 === n ? void 0 : n.url)
            } catch (e) {}
            var d = (null === (r = null == e ? void 0 : e.headers) || void 0 === r ? void 0 : r["bd-ticket-guard-result"]) || "-99"
                , g = (null === (o = null == e ? void 0 : e.headers) || void 0 === o ? void 0 : o["x-tt-logid"]) || ""
                , p = null === (i = null == e ? void 0 : e.reqHeaders) || void 0 === i ? void 0 : i["bd-ticket-guard-version"]
                , v = null === (a = null == e ? void 0 : e.reqHeaders) || void 0 === a ? void 0 : a["bd-ticket-guard-iteration-version"]
                , m = (null === (c = null == e ? void 0 : e.reqHeaders) || void 0 === c ? void 0 : c["bd-ticket-guard-client-csr"]) ? 1 : 0
                , _ = (null === (s = null == e ? void 0 : e.reqHeaders) || void 0 === s ? void 0 : s["bd-ticket-guard-client-cert"]) ? 1 : 0
                , b = (null === (u = null == e ? void 0 : e.reqHeaders) || void 0 === u ? void 0 : u["bd-ticket-guard-client-data"]) ? 1 : 0
                , k = (null == e ? void 0 : e.loginStatus) || "-1"
                , w = (null == e ? void 0 : e.cookieStatus) || "0"
                , S = (null == e ? void 0 : e.signVersion) || "0"
                , C = (null == e ? void 0 : e.webDomain) || "3"
                , x = (null == t ? void 0 : t.dataFrom) || "-99"
                , I = (null == t ? void 0 : t.crossStatus) || "-99"
                , T = (null == e ? void 0 : e.cookieCrypt) || "0"
                , D = (null == t ? void 0 : t.match_md5_local) || "-99"
                , E = (null == t ? void 0 : t.match_md5_iframe) || "-99"
                , O = t.is_pubkey_ts_sign || "-99"
                , P = (null == t ? void 0 : t.isConnection) || "-99"
                , L = (null == t ? void 0 : t.retryCount) || "-99"
                , B = (null == t ? void 0 : t.lost) || "0"
                , R = (null == t ? void 0 : t.initMatch) || "0"
                , j = (null == t ? void 0 : t.is_new_cert) || "0"
                , A = (null === (l = null == window ? void 0 : window.location) || void 0 === l ? void 0 : l.hostname) || "";
            K(h.logWebBdTicketGuardConsumerResponse, {
                logid: g,
                path: f,
                ticket_guard_version: p,
                ticket_guard_iteration_version: v,
                request_with_csr: m,
                request_with_cert: _,
                request_with_client_data: b,
                error_code: d,
                login_status: k,
                sign_version: S,
                cookie_status: w,
                data_from: x,
                cookie_crypt: T,
                iframe_status: I,
                match_md5_local: D,
                match_md5_iframe: E,
                is_pubkey_ts_sign: O,
                iframe_connection: P,
                iframe_retrycount: L,
                lost: B,
                init_match: R,
                is_new_cert: j,
                hostname: A,
                cookie_domain: C
            }),
            d > 0 && K(h.logWebBdTicketGuardConsumerResponseError, {
                logid: g,
                path: f,
                ticket_guard_version: p,
                ticket_guard_iteration_version: v,
                request_with_csr: m,
                request_with_cert: _,
                request_with_client_data: b,
                error_code: d,
                login_status: k,
                sign_version: S,
                cookie_status: w,
                data_from: x,
                cookie_crypt: T,
                iframe_status: I,
                match_md5_local: D,
                match_md5_iframe: E,
                is_pubkey_ts_sign: O,
                iframe_connection: P,
                iframe_retrycount: L,
                lost: B,
                init_match: R,
                is_new_cert: j,
                hostname: A,
                cookie_domain: C
            })
        }
            , D = function(e) {
            x(h.logWebBdTicketGuardIframeStatusBeforeUnLoad, e)
        }
            , E = function(e) {
            K(h.logWebBdTicketGuardIframeStatus, e)
        }
            , O = n(23700)
            , P = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
            ),
                i;
            function c(i) {
                return function(c) {
                    return function(i) {
                        if (n)
                            throw TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                    0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++,
                                            {
                                                value: i[1],
                                                done: !1
                                            };
                                    case 5:
                                        a.label++,
                                            r = i[1],
                                            i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(),
                                            a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1],
                                                o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2],
                                                a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(),
                                            a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e],
                                    r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, c])
                }
            }
        }
            , L = function(e) {
            return O.utf8tob64(e)
        }
            , B = function(e) {
            var t = new O.KJUR.crypto.MessageDigest({
                alg: "md5",
                prov: "cryptojs"
            });
            return t.updateString(e),
                t.digest()
        }
            , R = function(e) {
            return O.hextob64(e)
        }
            , j = function(e) {
            return O.b64toutf8(e)
        }
            , A = function(e) {
            var t = O.KEYUTIL.getKey(e);
            return O.KEYUTIL.getPEM(t)
        }
            , N = function(e) {
            for (var t = [], n = 0; n < e.length; n += 3)
                for (var r = e[n] << 16 | e[n + 1] << 8 | e[n + 2], o = 0; o < 4; o++)
                    8 * n + 6 * o <= 8 * e.length ? t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >>> 6 * (3 - o) & 63)) : t.push("=");
            return t.join("")
        }
            , M = function(e) {
            return e ? N(function(e) {
                for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length; n += 2)
                    t[n / 2] = parseInt(e.substr(n, 2), 16);
                return t
            }(O.KEYUTIL.getKey(e).generatePublicKeyHex())) : ""
        }
            , q = function(e, t) {
            try {
                if (!e || !t || "string" != typeof e)
                    return !1;
                var n = JSON.parse(e)
                    , r = A(t)
                    , o = (n || {}).ec_publicKey;
                if (r === o)
                    return !0;
                return !1
            } catch (e) {
                return !1
            }
        }
            , W = function(e, t) {
            try {
                if (!e || !t || "string" != typeof e)
                    return !1;
                var n = (JSON.parse(e) || {}).ec_privateKey
                    , r = M(n)
                    , o = t.split(".")[1];
                if (r === o)
                    return !0;
                return !1
            } catch (e) {
                return !1
            }
        }
            , H = function(e, t, n, r) {
            try {
                if (!e || !t || !n || !r || "string" != typeof t || "string" != typeof r)
                    return !1;
                var o = (JSON.parse(t || "{}") || {}).ec_publicKey;
                if (!o)
                    return !1;
                if (B(JSON.stringify({
                    publicKey: o,
                    cert: n,
                    serverData: r
                })) === e)
                    return !0
            } catch (e) {}
            return !1
        }
            , U = function(e, t, n) {
            try {
                if (!e || !t || !n || "string" != typeof e || "string" != typeof n)
                    return "";
                var r = (JSON.parse(e) || {}).ec_publicKey;
                if (!r)
                    return "";
                return B(JSON.stringify({
                    publicKey: r,
                    cert: t,
                    serverData: n
                }))
            } catch (e) {}
            return ""
        }
            , V = function(e, t, n, r, o) {
            return function() {
                for (var i, a, c, s, u = [], l = 0; l < arguments.length; l++)
                    u[l] = arguments[l];
                return i = void 0,
                    a = void 0,
                    c = void 0,
                    s = function() {
                        var i;
                        return P(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]),
                                        [4, e.apply(this, u)];
                                case 1:
                                    return [2, a.sent()];
                                case 2:
                                    return i = a.sent(),
                                    null == n || n(i, t, o, r, u),
                                        [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    }
                    ,
                    new (c || (c = Promise))(function(e, t) {
                            function n(e) {
                                try {
                                    o(s.next(e))
                                } catch (e) {
                                    t(e)
                                }
                            }
                            function r(e) {
                                try {
                                    o(s.throw(e))
                                } catch (e) {
                                    t(e)
                                }
                            }
                            function o(t) {
                                var o;
                                t.done ? e(t.value) : ((o = t.value)instanceof c ? o : new c(function(e) {
                                        e(o)
                                    }
                                )).then(n, r)
                            }
                            o((s = s.apply(i, a || [])).next())
                        }
                    )
            }
        }
            , J = function(e) {
            var t, n;
            return function() {
                for (var r = [], o = 0; o < arguments.length; o++)
                    r[o] = arguments[o];
                return t ? Promise.resolve(t) : (n || (n = new Promise(function(o, i) {
                        e.apply(void 0, r).then(function(e) {
                            e && (t = e),
                                o(e),
                                n = void 0
                        }).catch(function(e) {
                            i(e),
                                n = void 0
                        })
                    }
                )),
                    n)
            }
        }
            , F = function() {
            function e() {
                var e = this;
                this.list = [],
                    this.count = 0,
                    this.maxCount = 1,
                    this.provider = function(t) {
                        return e.addTask(function() {
                            return new Promise(function(e, n) {
                                    t().then(function(t) {
                                        e(t)
                                    }).catch(function(e) {
                                        n(e)
                                    })
                                }
                            )
                        })
                    }
                    ,
                    this.wait = function() {
                        e.provider(function() {
                            return Promise.resolve(!0)
                        })
                    }
                    ,
                    this.list = [],
                    this.count = 0
            }
            return e.prototype.addTask = function(e) {
                var t = this;
                return new Promise(function(n) {
                        t.list.push(function() {
                            return e().then(function(e) {
                                return t.count -= 1,
                                    t.consume(),
                                    n(e),
                                    e
                            })
                        }),
                            t.consume()
                    }
                )
            }
                ,
                e.prototype.consume = function() {
                    if (this.count < this.maxCount && this.list.length > 0) {
                        this.count += 1;
                        var e = this.list.shift();
                        e && e()
                    }
                }
                ,
                e
        }()
            , G = function(e, t, n) {
            if (n || 2 == arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++)
                    !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                        r[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        }
            , z = function() {
            function e() {
                this.eventMap = {}
            }
            return e.prototype.on = function(e, t) {
                var n = this.eventMap;
                n[e] ? n[e].push(t) : n[e] = [t]
            }
                ,
                e.prototype.off = function(e, t) {
                    var n = this.eventMap;
                    if (n[e])
                        for (var r = n[e], o = r.length; o >= 0; o--)
                            t && r[o] !== t || r.splice(o, 1)
                }
                ,
                e.prototype.emit = function(e, t) {
                    var n = this.eventMap[e];
                    n && G([], n, !0).forEach(function(e) {
                        e(t)
                    })
                }
                ,
                e.prototype.has = function(e, t) {
                    var n = this.eventMap;
                    return !!n[e] && ("function" != typeof t || -1 !== n[e].indexOf(t))
                }
                ,
                e
        }()
            , X = "4.0.3";
        function $() {
            var e, t;
            try {
                return !!navigator.userAgent.match(/chrome\/[\d.]+/gi) && !!(null == navigator ? void 0 : navigator.userAgentData) || !!(null === (e = navigator.storage) || void 0 === e ? void 0 : e.getDirectory) || !!navigator.canShare || -1 !== ((null === (t = window.Promise) || void 0 === t ? void 0 : t.allSettled) || "").toString().indexOf("[native code]") && !!(Number((navigator.userAgent.match(/Chrome\/(\d+\.+\d+)/) || [])[1]) >= 76 && window.visualViewport)
            } catch (e) {
                return !1
            }
        }
        var Y = $()
            , Q = "https://lf-zt.douyin.com"
            , Z = "".concat(Q, "/obj/uc-assets/zt/")
            , ee = function(e, t, n) {
            return "".concat(e).concat("@byted/x-storage-web", "/").concat(t || X, "/dist/").concat(n || (Y ? "latest" : "page"), "/index.html")
        }
            , et = function(e) {
            try {
                localStorage.setItem("X_STORAGE_FALLBACK_VERSION", e)
            } catch (e) {}
        }
            , en = function() {
            try {
                return localStorage.getItem("X_STORAGE_FALLBACK_VERSION")
            } catch (e) {}
        }
            , er = function() {
            var e = en();
            if (e)
                return ee(Z, e)
        }
            , eo = (o = function(e, t) {
                return (o = Object.setPrototypeOf || ({
                            __proto__: []
                        })instanceof Array && function(e, t) {
                            e.__proto__ = t
                        }
                        || function(e, t) {
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                )(e, t)
            }
                ,
                function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                        this.constructor = e
                    }
                    o(e, t),
                        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                            new n)
                }
        )
            , ei = function(e) {
            function t(t, n, r) {
                var o = e.call(this, n) || this;
                return o.message = n || "",
                    o.name = t,
                    o.origin = r || location.origin,
                    o
            }
            return eo(t, e),
                t
        }(Error)
            , ea = {}
            , ec = {}
            , es = function() {
            try {
                return indexedDB || window.indexedDB || webkitIndexedDB || mozIndexedDB || OIndexedDB
            } catch (e) {
                return
            }
        }
            , eu = "DBStorageNotSupport"
            , el = Promise.resolve()
            , ef = 0
            , ed = function(e) {
            return new Promise(function(t, n) {
                    e.onsuccess = function() {
                        t(e.result)
                    }
                        ,
                        e.onerror = function() {
                            n(e.error)
                        }
                }
            )
        }
            , eg = function(e, t) {
            return new Promise(function(n, r) {
                    e.oncomplete = function() {
                        n()
                    }
                        ,
                        e.onabort = e.onerror = function() {
                            var e, n = t ? t.error || (null === (e = t.transaction) || void 0 === e ? void 0 : e.error) : {
                                name: "TransactionAbortOrError",
                                message: ""
                            };
                            r(new ei((null == n ? void 0 : n.name) || "TransactionAbortOrError",(null == n ? void 0 : n.message) || ""))
                        }
                }
            )
        }
            , ep = function() {
            return (ep = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }
            ).apply(this, arguments)
        }
            , ev = function() {
            function e(t) {
                var n = this;
                this.config = {
                    dbName: "secure-store",
                    storeName: "cryptvalues",
                    closeDBTime: 2e4
                },
                    this.getItem = function(e) {
                        return n.getItemByKeys([e]).then(function(e) {
                            return e[0]
                        })
                    }
                    ,
                    this.getItemByKeys = function(e) {
                        var t = n.config.storeName;
                        return n.transaction(function() {
                            return n.openDB().then(function(n) {
                                var r = n.transaction(t, "readonly").objectStore(t);
                                return Promise.all(e.map(function(e) {
                                    return ed(r.get(e)).then(function(e) {
                                        return JSON.parse(e || "{}").data
                                    })
                                }))
                            })
                        })
                    }
                    ,
                    this.setItem = function(e, t) {
                        return n.setItemByKeys([[e, t]]).then(function(e) {
                            return e[0]
                        })
                    }
                    ,
                    this.setItemByKeys = function(e) {
                        var t = n.config.storeName;
                        return n.transaction(function() {
                            return n.openDB().then(function(n) {
                                var r = n.transaction(t, "readwrite")
                                    , o = r.objectStore(t);
                                return Promise.all(e.map(function(e) {
                                    var t = e[0]
                                        , n = e[1]
                                        , r = JSON.stringify({
                                        data: n
                                    });
                                    return ed(o.get(t)).then(function(e) {
                                        return e !== r && o.put(r, t),
                                            n
                                    })
                                })).then(function(e) {
                                    return eg(r).then(function() {
                                        return e
                                    })
                                })
                            })
                        })
                    }
                    ,
                    this.removeItem = function(e) {
                        var t = n.config.storeName;
                        return n.openDB().then(function(n) {
                            var r = n.transaction(t, "readwrite")
                                , o = r.objectStore(t).delete(e);
                            return eg(r, o)
                        })
                    }
                    ,
                    this.getKeys = function() {
                        var e = n.config.storeName;
                        return n.transaction(function() {
                            return n.openDB().then(function(t) {
                                var n = t.transaction(e).objectStore(e).openKeyCursor();
                                return new Promise(function(e, t) {
                                        var r = [];
                                        n.onsuccess = function() {
                                            n.result ? (r.push(n.result.key),
                                                n.result.continue()) : e(r)
                                        }
                                            ,
                                            n.onerror = function() {
                                                t(n.error)
                                            }
                                    }
                                )
                            })
                        })
                    }
                    ,
                    this.openDB = function() {
                        var t = n.config
                            , r = t.storeName
                            , o = t.dbName
                            , i = t.closeDBTime;
                        return clearTimeout(ec[o]),
                            ec[o] = setTimeout(function() {
                                e.closeDB(o).catch(function() {})
                            }, i),
                            e.openDB(n.config).then(function(t) {
                                if (!t.objectStoreNames.contains(r)) {
                                    var i = t.version + 1;
                                    return e.closeDB(o).then(function() {
                                        return e.openDB(n.config, i)
                                    })
                                }
                                return t
                            })
                    }
                    ,
                    this.transaction = function(e) {
                        var t, r = n.config, o = r.dbName, i = r.onQuotaErrorCallback;
                        return t = function(e, t) {
                            e && "function" == typeof i && i.call(n, t)
                        }
                            ,
                            el = el.then(function() {
                                var n = function() {
                                    return e().then(function(e) {
                                        return ef = 0,
                                            e
                                    }).catch(function(e) {
                                        if (ef < 3)
                                            return ef++,
                                                ea[o] = void 0,
                                                Promise.resolve({
                                                    isQuotaError: "quotaexceedederror" === ((null == e ? void 0 : e.name) || "").toLowerCase(),
                                                    clean: function(e) {
                                                        var t = es()
                                                            , n = null == t ? void 0 : t.deleteDatabase(e || o);
                                                        return new Promise(function(e) {
                                                                n ? (n.onsuccess = function() {
                                                                        e()
                                                                    }
                                                                        ,
                                                                        n.onerror = function() {
                                                                            e()
                                                                        }
                                                                ) : e()
                                                            }
                                                        )
                                                    }
                                                }).then(function(e) {
                                                    if ("function" == typeof t)
                                                        return t(e.isQuotaError, e.clean)
                                                }),
                                                n();
                                        throw ef = 0,
                                            e
                                    })
                                };
                                return n()
                            })
                    }
                    ,
                    this.config = ep(ep({}, this.config), t || {})
            }
            return e.isSupport = function() {
                return !!es()
            }
                ,
                e.openDB = function(t, n) {
                    var r = t.dbName
                        , o = t.storeName
                        , i = t.version;
                    if (n && (ea[r] = void 0),
                        !e.isSupport())
                        return Promise.reject(new ei(eu));
                    var a = es()
                        , c = function(e, t) {
                        return new Promise(function(n, r) {
                                var i = a.open(e, t);
                                i.onsuccess = function() {
                                    n(i.result)
                                }
                                    ,
                                    i.onerror = function(e) {
                                        var t, n;
                                        e.preventDefault(),
                                            r(new ei((null === (t = i.error) || void 0 === t ? void 0 : t.name) || "IndexedDBOpenError",null === (n = i.error) || void 0 === n ? void 0 : n.message))
                                    }
                                    ,
                                    i.onupgradeneeded = function(e) {
                                        try {
                                            (i.result || e.target.result).createObjectStore(o)
                                        } catch (e) {
                                            r(e)
                                        }
                                    }
                            }
                        )
                    };
                    return ea[r] || (ea[r] = new Promise(function(e, t) {
                            try {
                                c(r, n || i || 1).catch(function(e) {
                                    if (eh(e))
                                        return em(r).then(function(e) {
                                            return e ? c(r, e) : c(r)
                                        }).catch(function() {
                                            return c(r)
                                        });
                                    throw e
                                }).then(e).catch(t)
                            } catch (e) {
                                t(new ei(eu,e.message))
                            }
                        }
                    ))
                }
                ,
                e.deleteDB = function(t) {
                    var n = es();
                    return n ? e.closeDB(t).then(function() {
                        if (null == n ? void 0 : n.deleteDatabase) {
                            var e = null == n ? void 0 : n.deleteDatabase(t);
                            if (e)
                                return clearTimeout(ec[t]),
                                    new Promise(function(t, n) {
                                            e.onsuccess = function() {
                                                t(e.result)
                                            }
                                                ,
                                                e.onerror = function() {
                                                    n(null == e ? void 0 : e.error)
                                                }
                                        }
                                    )
                        }
                        return Promise.reject(new ei("IDBDeleteDataBaseError"))
                    }) : Promise.reject(new ei("IDBObjectError"))
                }
                ,
                e.closeDB = function(e) {
                    return new Promise(function(t, n) {
                            ea[e] ? ea[e].then(function(r) {
                                !function() {
                                    ea[e] = void 0;
                                    try {
                                        r.close(),
                                            t(1)
                                    } catch (e) {
                                        n(e)
                                    }
                                }()
                            }).catch(n) : t(-1)
                        }
                    )
                }
                ,
                e
        }()
            , eh = function(e) {
            return "versionerror" === ((null == e ? void 0 : e.name) || "").toString().toLowerCase() && (!!(-1 !== ((null == e ? void 0 : e.message) || "").indexOf("version") || ((null == e ? void 0 : e.message) || "").match(/\s*less\s*than/i)) || -1 !== ((null == e ? void 0 : e.message) || "").match(/\s*higher\s*version\s*than\s*/gi) || void 0)
        }
            , em = function(e) {
            return new Promise(function(t, n) {
                    var r = es();
                    if (null == r ? void 0 : r.databases)
                        return r.databases().then(function(n) {
                            var r = n.filter(function(t) {
                                return t.name === e
                            })[0];
                            t(null == r ? void 0 : r.version)
                        }).catch(n);
                    n(Error("idb.database is ".concat(typeof (null == r ? void 0 : r.databases))))
                }
            )
        }
            , ey = function() {
            function e() {
                var t = this;
                this.getItem = function(e) {
                    return t.getItemByKeys([e]).then(function(e) {
                        return e[0]
                    })
                }
                    ,
                    this.setItem = function(e, n) {
                        return t.setItemByKeys([[e, n]]).then(function(e) {
                            return e[0]
                        })
                    }
                    ,
                    this.getItemByKeys = function(e) {
                        return t.openLocalStorage().then(function(t) {
                            return e.map(function(e) {
                                return JSON.parse(t.getItem(e) || "{}").data
                            })
                        })
                    }
                    ,
                    this.setItemByKeys = function(e) {
                        return t.openLocalStorage().then(function(t) {
                            return e.map(function(e) {
                                var n = e[0]
                                    , r = e[1]
                                    , o = JSON.stringify({
                                    data: r
                                });
                                return t.setItem(n, o),
                                    r
                            })
                        })
                    }
                    ,
                    this.removeItem = function(e) {
                        return t.openLocalStorage().then(function(t) {
                            t.removeItem(e)
                        })
                    }
                    ,
                    this.getKeys = function() {
                        return t.openLocalStorage().then(function(e) {
                            for (var t = [], n = 0; n < e.length; n++)
                                e.key(n) && t.push(e.key(n));
                            return t
                        })
                    }
                    ,
                    this.openLocalStorage = function() {
                        return e.isSupport() ? Promise.resolve(e_()) : Promise.reject(new ei("LocalStorageNotSupport"))
                    }
            }
            return e.isSupport = function() {
                var e = e_();
                if (!e)
                    return !1;
                try {
                    var t = "__x_storage_test__";
                    e.setItem(t, t);
                    var n = e.getItem(t);
                    return e.removeItem(t),
                    t === n
                } catch (e) {
                    return !1
                }
            }
                ,
                e
        }()
            , e_ = function() {
            return window.localStorage
        }
            , eb = {}
            , ek = function() {
            function e() {
                var e = this;
                this.getItem = function(t) {
                    return e.getItemByKeys([t]).then(function(e) {
                        return e[0]
                    })
                }
                    ,
                    this.setItem = function(t, n) {
                        return e.setItemByKeys([[t, n]]).then(function(e) {
                            return e[0]
                        })
                    }
                    ,
                    this.getItemByKeys = function(t) {
                        return e.openMStorage().then(function(e) {
                            return t.map(function(t) {
                                return JSON.parse(e.getItem(t) || "{}").data
                            })
                        })
                    }
                    ,
                    this.setItemByKeys = function(t) {
                        return e.openMStorage().then(function(e) {
                            return t.map(function(t) {
                                var n = t[0]
                                    , r = t[1]
                                    , o = JSON.stringify({
                                    data: r
                                });
                                return e.setItem(n, o),
                                    r
                            })
                        })
                    }
                    ,
                    this.removeItem = function(t) {
                        return e.openMStorage().then(function(e) {
                            e.removeItem(t)
                        })
                    }
                    ,
                    this.getKeys = function() {
                        return e.openMStorage().then(function() {
                            return Object.keys(eb)
                        })
                    }
                    ,
                    this.openMStorage = function() {
                        return Promise.resolve({
                            setItem: function(e, t) {
                                eb[e] = "".concat(t)
                            },
                            getItem: function(e) {
                                return eb[e] || null
                            },
                            removeItem: function(e) {
                                delete eb[e]
                            }
                        })
                    }
            }
            return e.isSupport = function() {
                return !0
            }
                ,
                e
        }()
            , ew = window
            , eS = ew.addEventListener
            , eC = ew.removeEventListener
            , eK = ew.location
            , ex = document
            , eI = function() {
            return performance.now && Number(performance.now().toFixed(0)) || Date.now()
        }
            , eT = function(e) {
            var t = e.split("//") || [];
            return "".concat(t[0], "//").concat(t[1].split("/")[0])
        }
            , eD = function(e, t) {
            return -1 !== e.indexOf("html?") ? "".concat(e, "&").concat(t) : "".concat(e, "?").concat(t)
        }
            , eE = function(e, t) {
            for (var n = 0; n < e.length; n++)
                if (-1 === t.indexOf(e[n]))
                    return !1;
            return !0
        }
            , eO = function(e, t) {
            for (var n = Promise.reject(new ei("WebStorageRunSerialQueueError")), r = function(r) {
                n = n.then(function(n) {
                    return "function" == typeof t && t(n) || void 0 === n ? e[r]() : n
                }).catch(function() {
                    return e[r]()
                })
            }, o = 0; o < e.length; o++)
                r(o);
            return n
        }
            , eP = function(e) {
            for (var t = Promise.reject(new ei("WebStorageRunSerialQueueIfOneResolveError")), n = function(n) {
                e[n] && (t = t.then(function(t) {
                    return e[n]().catch(function(e) {}),
                        t
                }).catch(function(t) {
                    return e[n]()
                }))
            }, r = 0; r < e.length; r++)
                n(r);
            return t
        }
            , eL = function(e) {
            for (var t = Promise.reject(new ei("WebStorageRunSerialQueueIfOneResolveError")), n = function(n) {
                e[n] && (t = t.then(function(t) {
                    return e[n]().catch(function(e) {
                        return Promise.resolve(t)
                    })
                }).catch(function(t) {
                    return e[n]()
                }))
            }, r = 0; r < e.length; r++)
                n(r);
            return t
        }
            , eB = "J_uc_iframe_box-".concat(Date.now())
            , eR = function() {
            var e = function() {
                var e = document.getElementById(eB);
                if (e)
                    return e;
                var t = document.createElement("div");
                return t.style.display = "none",
                    t.id = eB,
                    ex.body.appendChild(t),
                    t
            };
            return new Promise(function(t) {
                    var n = ex.body
                        , r = {
                        appendChild: function(t) {
                            e().appendChild(t)
                        }
                    };
                    n ? t(r) : "loading" === ex.readyState ? ex.addEventListener("DOMContentLoaded", function() {
                        t(r)
                    }) : t(r)
                }
            )
        }
            , ej = !1
            , eA = function(e) {
            !ej && e.config.debug && (ej = !0,
                e.emit("debug", {
                    name: "OpenMessageLog"
                }),
                window.addEventListener("message", function(t) {
                    var n = t.data;
                    ej && "string" == typeof n && 0 === n.indexOf("log:") && e.emit("debug", {
                        name: "Message:Log=".concat(n.substring(4))
                    })
                }))
        }
            , eN = function(e) {
            try {
                eK.origin === Q && window.parent.postMessage("log:".concat(e), "*")
            } catch (e) {}
        }
            , eM = (i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                            __proto__: []
                        })instanceof Array && function(e, t) {
                            e.__proto__ = t
                        }
                        || function(e, t) {
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                )(e, t)
            }
                ,
                function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                        this.constructor = e
                    }
                    i(e, t),
                        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                            new n)
                }
        )
            , eq = function() {
            return (eq = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }
            ).apply(this, arguments)
        }
            , eW = eK.origin
            , eH = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.dbSetFlag = [],
                    n.getItem = function(e) {
                        return n.getItemByKeys([e]).then(function(e) {
                            return e[0]
                        })
                    }
                    ,
                    n.setItem = function(e, t) {
                        return n.setItemByKeys([[e, t]]).then(function(e) {
                            return e[0]
                        })
                    }
                    ,
                    n.getItemByKeys = function(e) {
                        var t = -1
                            , r = [];
                        return n.db.then(function(t) {
                            return eO(t.map(function(t, n) {
                                return function() {
                                    return t.getItemByKeys(e).then(function(t) {
                                        return r[n] = e.map(function(e, r) {
                                            return {
                                                from: void 0 !== t[r] ? n : -1,
                                                value: t[r],
                                                origin: eW
                                            }
                                        }),
                                            t
                                    })
                                }
                            }), function(e) {
                                for (var t = 0; t < (null == e ? void 0 : e.length); t++)
                                    if (void 0 === e[t])
                                        return !0;
                                return !1
                            })
                        }).catch(function(r) {
                            return n.fallbackDB.getItemByKeys(e).then(function(e) {
                                return t = 2,
                                    e
                            })
                        }).then(function(e) {
                            return r[0] ? r[0].map(function(e, t) {
                                return void 0 !== e.value ? e : r[1] && r[1][t] ? void 0 === r[1][t].value ? e : r[1][t] : e
                            }) : r[1] ? r[1] : e.map(function(e) {
                                return {
                                    value: e,
                                    from: t,
                                    origin: eW
                                }
                            })
                        })
                    }
                    ,
                    n.setItemByKeys = function(e) {
                        var t = -1;
                        return n.db.then(function(r) {
                            return eP(r.map(function(n, r) {
                                return function() {
                                    return n.setItemByKeys(e).then(function(e) {
                                        return t = r,
                                            e
                                    })
                                }
                            })).catch(function(r) {
                                return t = 2,
                                    n.fallbackDB.setItemByKeys(e)
                            }).then(function(e) {
                                return e.map(function(e) {
                                    return {
                                        value: e,
                                        from: t,
                                        origin: eW
                                    }
                                })
                            })
                        }).then(function(e) {
                            return e
                        }, function(e) {
                            throw eN("storage:setItemByKeys:error:".concat(null == e ? void 0 : e.message)),
                                e
                        })
                    }
                    ,
                    n.removeItem = function(e) {
                        return n.db.then(function(t) {
                            return Promise.all(t.map(function(t) {
                                return t.removeItem(e)
                            })).then(function() {
                                return n.fallbackDB.removeItem(e)
                            })
                        })
                    }
                    ,
                    n.config = t || {},
                    n.localDB = new ey,
                    n.db = Promise.resolve([n.localDB, new ev(eq(eq({}, (null == t ? void 0 : t.dbStorage) || {}), {
                        onQuotaErrorCallback: function() {
                            n.emit("log", {
                                name: "QuotaError"
                            })
                        }
                    }))]),
                    n.fallbackDB = new ek,
                    n
            }
            return eM(t, e),
                t.prototype.getKeys = function() {
                    return this.db.then(function(e) {
                        return eO(e.map(function(e) {
                            return function() {
                                return e.getKeys()
                            }
                        }), function(e) {
                            return void 0 === e || 0 === e.length
                        })
                    })
                }
                ,
                t
        }(z)
            , eU = ["security-sdk/s_sdk_crypt_sdk", "security-sdk/s_sdk_cert_key", "security-sdk/s_sdk_sign_data_key/web_protect"]
            , eV = (a = function(e, t) {
                return (a = Object.setPrototypeOf || ({
                            __proto__: []
                        })instanceof Array && function(e, t) {
                            e.__proto__ = t
                        }
                        || function(e, t) {
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                )(e, t)
            }
                ,
                function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                        this.constructor = e
                    }
                    a(e, t),
                        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                            new n)
                }
        )
            , eJ = function() {
            return (eJ = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }
            ).apply(this, arguments)
        }
            , eF = {
            get visibility() {
                return document.visibilityState
            }
        }
            , eG = {
            current: 0,
            max: 2
        }
            , ez = "visibilitychange"
            , eX = function() {
            return "hidden" === document.visibilityState
        }
            , e$ = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.autoLoadIframeConfig = {
                    max: 10,
                    current: 0,
                    iframeLoadPromise: null
                },
                    n.reset = function() {
                        var e = n.autoLoadIframeConfig;
                        e.current >= e.max && (e.max += 10),
                            e.iframeLoadPromise = null,
                        eG.current >= eG.max && (eG.max += 3)
                    }
                    ,
                    n.loadWindow = function() {
                        var e = n.config
                            , t = e.url
                            , r = e.ackTimeout
                            , o = n.autoLoadIframeConfig;
                        return new Promise(function(e) {
                                setTimeout(e, 0 === o.current ? 0 : 100)
                            }
                        ).then(function() {
                            if (!t)
                                throw Error("URL Error");
                            var e = o.current === o.max ? eD(t, "t=".concat(Date.now())) : t;
                            return n.createIframeElement(e, r)
                        }).catch(function(e) {
                            if (o.current >= o.max) {
                                if (eX())
                                    return new Promise(function(e) {
                                            var t = function() {
                                                eX() || (document.removeEventListener(ez, t),
                                                    e(1))
                                            };
                                            document.addEventListener(ez, t)
                                        }
                                    ).then(function() {
                                        return n.loadWindow().then(function(e) {
                                            return n.emit("log", {
                                                name: "visibilityChangeLoadWindowSuccuess"
                                            }),
                                                e
                                        })
                                    });
                                var t = er();
                                if (t)
                                    return n.emit("debug", {
                                        name: "StartFireFallbackURL",
                                        content: t
                                    }),
                                        n.createIframeElement(t, r).then(function(e) {
                                            return n.emit("debug", {
                                                name: "EndFireFallbackURL",
                                                content: t
                                            }),
                                                e.fallback = !0,
                                                e
                                        }).catch(function(t) {
                                            throw n.emit("debug", {
                                                name: "fireFallbackURLError",
                                                content: "".concat(null == t ? void 0 : t.name, ":").concat(null == t ? void 0 : t.message)
                                            }),
                                                e
                                        });
                                throw e
                            }
                            return o.current++,
                                n.loadWindow()
                        })
                    }
                    ,
                    n.createPostMessageFlight = function(e, t) {
                        void 0 === t && (t = 3e3);
                        var r, o = eI(), i = o, a = function(e) {
                            n.config.debug && n.emit("metrics", {
                                name: "PostMessageFlight",
                                metrics: {
                                    startTime: o,
                                    endTime: i,
                                    loadTime: i - o
                                },
                                categories: {
                                    status: e,
                                    retryCount: String(eG.current),
                                    version: X
                                }
                            })
                        };
                        return Promise.race([new Promise(function(t, n) {
                                var o = "ACK_0_".concat(Math.random())
                                    , a = function(e) {
                                    e.data === "ACK_1_".concat(o) && (clearTimeout(r),
                                        i = eI(),
                                        t(),
                                        eC("message", a))
                                };
                                eS("message", a);
                                try {
                                    e(o)
                                } catch (e) {
                                    n(new ei("PostMessageWindowError",null == e ? void 0 : e.message))
                                }
                            }
                        ), new Promise(function(e, n) {
                                r = setTimeout(function() {
                                    i = eI(),
                                        n(new ei("PostMessageTimeout"))
                                }, t)
                            }
                        )]).then(function() {
                            a("1")
                        }).catch(function(e) {
                            throw a("0"),
                                e
                        })
                    }
                    ,
                    n.config = eJ({
                        ackTimeout: 2e3
                    }, t || {}),
                    n
            }
            return eV(t, e),
                t.prototype.setConfig = function(e) {
                    this.config = {
                        ackTimeout: e.ackTimeout || this.config.ackTimeout,
                        url: e.url || this.config.url
                    }
                }
                ,
                t.prototype.start = function() {
                    var e = this.autoLoadIframeConfig;
                    return e.iframeLoadPromise = e.iframeLoadPromise || this.loadWindow()
                }
                ,
                t.prototype.createIframeElement = function(e, t) {
                    var n, r, o, i = this, a = t || this.config.ackTimeout, c = this.autoLoadIframeConfig, s = eI(), u = ex.createElement("iframe"), l = s, f = !1, d = -1;
                    return u.style.display = "none",
                        u.src = e,
                        eR().then(function(t) {
                            var i = Promise.race([new Promise(function(e, t) {
                                    u.onload = function() {
                                        l = eI(),
                                        f || (r = setTimeout(function() {
                                            f || t(new ei("CreateIframeError",JSON.stringify(eJ(eJ({
                                                startTime: s,
                                                endTime: l,
                                                loadTime: l - s
                                            }, eF), {
                                                current: c.current,
                                                max: c.max
                                            }))))
                                        }, a || 2e3))
                                    }
                                }
                            ), new Promise(function(t, i) {
                                    var a = function(c) {
                                        try {
                                            -1 === d && "ACK" === c.data && eT(e) === c.origin && (f = !0,
                                                n = c.source,
                                                clearTimeout(r),
                                                clearTimeout(o),
                                                t(),
                                                eC("message", a))
                                        } catch (e) {
                                            i(e)
                                        }
                                    };
                                    eS("message", a)
                                }
                            ), new Promise(function(e, t) {
                                    o = setTimeout(function() {
                                        t(new ei("CreateIframeMainTimeout"))
                                    }, 12e4)
                                }
                            )]);
                            return t.appendChild(u),
                                i
                        }).then(function() {
                            return i.createPostMessageFlight(function(t) {
                                var r = eT(e);
                                (u.contentWindow || n).postMessage(t, r)
                            }).catch(function(e) {
                                if ("PostMessageWindowError" === e.name) {
                                    if (eG.current < eG.max)
                                        throw eG.current++,
                                            e
                                } else
                                    throw e
                            })
                        }).then(function() {
                            if (u.parentNode)
                                return d = 1,
                                    {
                                        startTime: s,
                                        endTime: eI(),
                                        postMessage: function(e, t) {
                                            (u.contentWindow || n).postMessage(e, t || "*")
                                        },
                                        destory: function() {
                                            var e;
                                            try {
                                                null === (e = u.parentNode) || void 0 === e || e.removeChild(u)
                                            } catch (e) {}
                                        },
                                        isValid: function() {
                                            var e;
                                            return !!((null == u ? void 0 : u.parentNode) && (null === (e = null == u ? void 0 : u.parentNode) || void 0 === e ? void 0 : e.parentNode))
                                        }
                                    };
                            throw Error("CreateIframeElementError")
                        }).catch(function(e) {
                            var t;
                            d = 0;
                            try {
                                null === (t = u.parentNode) || void 0 === t || t.removeChild(u)
                            } catch (e) {}
                            try {
                                "CreateIframeMainTimeout" === e.name && i.emit("debug", {
                                    name: "CreateIframeMainTimeout"
                                })
                            } catch (e) {}
                            throw e
                        })
                }
                ,
                t
        }(z)
            , eY = (c = function(e, t) {
                return (c = Object.setPrototypeOf || ({
                            __proto__: []
                        })instanceof Array && function(e, t) {
                            e.__proto__ = t
                        }
                        || function(e, t) {
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                )(e, t)
            }
                ,
                function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                        this.constructor = e
                    }
                    c(e, t),
                        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                            new n)
                }
        )
            , eQ = function() {
            return (eQ = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }
            ).apply(this, arguments)
        }
            , eZ = function(e, t, n) {
            if (n || 2 == arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++)
                    !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                        r[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        }
            , e0 = function(e) {
            return "p-".concat(e)
        }
            , e1 = ".".concat(location.origin.split(".").slice(-2).join("."))
            , e2 = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.config = {
                    protocol: "Common"
                },
                    n.loadTime = 0,
                    n.startTime = 0,
                    n.endTime = 0,
                    n.callParentBridgetIndex = 0,
                    n.listen = function() {
                        window.parent !== window && window.parent.postMessage("ACK", "*")
                    }
                    ,
                    n.getIframeState = function() {
                        return {
                            isConnection: "boolean" == typeof n.isConnection ? Number(!!n.isConnection) : -1,
                            retryCount: n.iframeConnection.autoLoadIframeConfig.current,
                            startTime: n.startTime,
                            endTime: n.endTime,
                            loadTime: n.loadTime,
                            origin: location.origin
                        }
                    }
                    ,
                    n.postIframeMessage = function(e) {
                        var t = n.config.protocol;
                        if (n.window) {
                            var r = n.config.url;
                            return n.window.catch(function(e) {
                                return n.reConnection()
                            }).then(function(n) {
                                n.target.postMessage({
                                    protocol: t,
                                    data: e
                                }, eT(r))
                            })
                        }
                        return Promise.reject(new ei("postMessageError"))
                    }
                    ,
                    n.postWindowMessage = function(e, t, r, o) {
                        void 0 === o && (o = "*");
                        var i = n.config.protocol;
                        return new Promise(function(n) {
                                e.postMessage({
                                    type: t,
                                    protocol: i,
                                    data: r
                                }, o),
                                    n()
                            }
                        )
                    }
                    ,
                    n.postParentMessage = function(e, t, r) {
                        void 0 === r && (r = "*");
                        var o = ew.parent;
                        return o !== ew ? n.postWindowMessage(o, e, t, r) : Promise.resolve()
                    }
                    ,
                    n.dispatchParentEvent = function(e, t) {
                        return n.postParentMessage("event", {
                            id: e0(n.callParentBridgetIndex++),
                            message: {
                                eventName: e,
                                eventData: t
                            }
                        })
                    }
                    ,
                    n.callParentBridge = function(e, t, r) {
                        var o = e0(n.callParentBridgetIndex++);
                        return Promise.race([new Promise(function(i, a) {
                                var c = function(e) {
                                    var t = e.data;
                                    t.id === o && (n.off("message", c),
                                        "reject" === t.promiseStatus ? a(new ei("".concat(t.message || "UNKNOW_CallParentBridge_Error"))) : i(t.message))
                                };
                                n.on("message", c),
                                    n.postParentMessage("function", {
                                        id: o,
                                        message: {
                                            callObj: e,
                                            callName: t,
                                            callArgs: r
                                        }
                                    }).catch(a)
                            }
                        ), new Promise(function(n, r) {
                                setTimeout(function() {
                                    r(new ei("CallParentBridgeInvokeTimeout","CallBridge invoke timeout: callObj=".concat(e, ";callName=").concat(t, ";")))
                                }, 5e3)
                            }
                        )])
                    }
                    ,
                    n.startConnection = function(e) {
                        var t = n.config.url;
                        !n.window && t && (n.isStart = !0,
                            n.isConnection = void 0,
                            n.emit("log", {
                                name: "startConnection:".concat(e)
                            }),
                            n.createConnection(t))
                    }
                    ,
                    n.reStartConection = function(e) {
                        n.isStart = !1,
                        n.window && n.window.then(function(e) {
                            return e.target.destory()
                        }).catch(function() {}),
                            n.window = void 0,
                            n.iframeConnection.reset(),
                            n.startConnection(e)
                    }
                    ,
                    n.start = function(e) {
                        return new Promise(function(t) {
                                n.config = eQ(eQ({}, n.config || {}), e || {}),
                                    n.isStart = !0,
                                    n.emit("config"),
                                    t()
                            }
                        )
                    }
                    ,
                    n.reConnection = function() {
                        var e = n.config.url;
                        return n.createConnection(e)
                    }
                    ,
                    n.preCheck = function() {
                        return n.isConnection && n.isStart && n.window ? n.window.then(function(e) {
                            e.target.isValid() || n.reStartConection("valid")
                        }) : (!n.config.disablePreCheckConnection && !1 === n.isConnection && n.iframeConnection.autoLoadIframeConfig.current >= n.iframeConnection.autoLoadIframeConfig.max && n.reStartConection("reConnection"),
                            Promise.resolve())
                    }
                    ,
                    n.onMessage = function(e) {
                        var t, r, o, i, a = function(t, n) {
                            var r;
                            try {
                                null === (r = e.source) || void 0 === r || r.postMessage("SOCKET_ERROR_".concat(t, "@").concat(n), e.origin)
                            } catch (e) {}
                        };
                        try {
                            var c = n.config
                                , s = c.url
                                , u = c.protocol
                                , l = c.allowOrigin
                                , f = !!s && eT(s) === e.origin
                                , d = s ? f : !!eZ([e1], void 0 === l ? [] : l, !0).filter(function(t) {
                                return -1 !== e.origin.lastIndexOf(t)
                            })[0];
                            try {
                                e.origin || n.emit("debug", {
                                    name: "eventLostOrigin",
                                    content: JSON.stringify(e.data || {})
                                })
                            } catch (e) {}
                            if (d) {
                                if ("string" == typeof e.data && 0 === e.data.indexOf("ACK_0_"))
                                    try {
                                        null === (t = e.source) || void 0 === t || t.postMessage("ACK_1_".concat(e.data), e.origin)
                                    } catch (e) {}
                                else if ((null === (r = e.data) || void 0 === r ? void 0 : r.protocol) === u)
                                    try {
                                        n.emit("message", {
                                            type: null === (o = e.data) || void 0 === o ? void 0 : o.type,
                                            data: null === (i = e.data) || void 0 === i ? void 0 : i.data,
                                            origin: e.origin,
                                            sourceWindow: e.source
                                        })
                                    } catch (t) {
                                        a(500, JSON.stringify(e.data)),
                                            n.emit("debug", {
                                                name: "postMessage:protocol:error:".concat(null == t ? void 0 : t.message)
                                            })
                                    }
                            }
                        } catch (e) {
                            a(501, "".concat(e.message)),
                                n.emit("debug", {
                                    name: "SomePostMessageEventError",
                                    content: null == e ? void 0 : e.message
                                })
                        }
                    }
                    ,
                    n.initMessageEvent = function() {
                        n.removeMessageEvent(),
                            window.addEventListener("message", n.onMessage),
                            n.emit("debug", {
                                name: "initMessageEvent"
                            })
                    }
                    ,
                    n.removeMessageEvent = function() {
                        window.addEventListener("message", n.onMessage)
                    }
                    ,
                    n.config = eQ(eQ({}, n.config), t || {}),
                    n.iframeConnection = new e$,
                    n.startConnection("init"),
                    n.on("config", function() {
                        n.startConnection("config")
                    }),
                    n.initMessageEvent(),
                    n.on("connection", function(e) {
                        n.loadTime = e.endTime - e.startTime,
                            n.startTime = e.startTime,
                            n.endTime = e.endTime,
                            n.isConnection = !0,
                        n.config.enableFallback && !e.target.fallback && et(X),
                            n.emit("debug", {
                                name: "ConnectionSuccess"
                            }),
                            n.initMessageEvent()
                    }),
                    n.iframeConnection.on("debug", function(e) {
                        n.emit("debug", e)
                    }),
                    n.iframeConnection.on("log", function(e) {
                        n.emit("log", e)
                    }),
                    n.iframeConnection.on("metrics", function(e) {
                        n.emit("metrics", e)
                    }),
                    n.on("connectionFail", function(e) {
                        var t = n.config.downgradeCSPURL;
                        if (n.isConnection = !1,
                            n.emit("error", new ei("Connection:".concat(e.name),e.message)),
                            n.emit("debug", {
                                name: "connectionFail"
                            }),
                        t && (null == e ? void 0 : e.message.indexOf("Content Security Policy")) !== -1) {
                            var r = "string" == typeof t ? t : ee(Z, void 0, "page");
                            r && n.config.url !== r && (n.emit("debug", {
                                name: "fireDefaultPageURL",
                                content: r
                            }),
                                n.config.url = r,
                                n.reStartConection("csp"))
                        }
                    }),
                    eS("message", function(e) {
                        "string" == typeof e.data && (-1 !== e.data.indexOf("SOCKET_ERROR_") ? n.emit("error", new ei("SCOKET_ERROR",e.data)) : -1 !== e.data.indexOf("Version:") && n.emit("debug", {
                            name: "SocketVersion",
                            content: e.data.split(":")[1]
                        }))
                    }),
                    n
            }
            return eY(t, e),
                t.prototype.createConnection = function(e) {
                    var t = this
                        , n = this.config.ackTimeout
                        , r = eI()
                        , o = this.iframeConnection.autoLoadIframeConfig.max;
                    this.iframeConnection.setConfig({
                        url: o > 10 ? eD(e, "t=".concat(o)) : e,
                        ackTimeout: n
                    });
                    var i = this.iframeConnection.start().then(function(e) {
                        var n = {
                            target: e,
                            startTime: r,
                            endTime: eI()
                        };
                        return t.emit("connection", eQ({}, n)),
                            n
                    }).catch(function(e) {
                        throw t.emit("connectionFail", new ei("".concat(e.name || "ConnectionError"),e.message)),
                            e
                    });
                    return this.window = i
                }
                ,
                t
        }(z)
            , e4 = function(e) {
            return function(t) {
                return e.then(function(e) {
                    return Promise.resolve(t()).then(function() {
                        return e
                    })
                }, function(e) {
                    return Promise.resolve(t()).then(function() {
                        throw e
                    })
                })
            }
        }
            , e3 = null
            , e5 = -1
            , e6 = 0
            , e9 = {}
            , e7 = function(e, t, n) {
            void 0 === t && (t = !1),
            void 0 === n && (n = 8e3);
            var r = e.postIframeMessage;
            return function(o, i, a) {
                var c, s = e6++, u = "".concat(s);
                if ("string" != typeof o || "string" != typeof i)
                    return Promise.reject(new ei("CallBridgeParameterError","callObj:".concat(o, ", callName:").concat(i)));
                var l = function(t) {
                    return e.emit("debug", {
                        name: "PostMessageId=".concat(u),
                        content: "".concat(o, ":").concat(i)
                    }),
                        e9[u] = {},
                        e9[u].st = eI(),
                        Promise.race([e.window.then(function() {
                            return new Promise(function(t, n) {
                                    var s = function(r) {
                                        try {
                                            var o;
                                            (o = r.data).id === u && e9[u] && !e9[u].et && (e9[u].et = eI(),
                                                e.emit("debug", {
                                                    name: "BackPostMessageId=".concat(u)
                                                }),
                                                clearTimeout(c),
                                                e.off("message", s),
                                                "reject" === o.promiseStatus ? n(new ei("".concat(o.message || "UNKNOW_CallBridge_Error"))) : t(o.message),
                                                delete e9[u])
                                        } catch (e) {
                                            n(e)
                                        }
                                    };
                                    e.on("message", s),
                                        r({
                                            id: u,
                                            message: {
                                                callObj: o,
                                                callName: i,
                                                callArgs: a
                                            }
                                        }).catch(n)
                                }
                            )
                        }), new Promise(function(n, r) {
                                c = setTimeout(function() {
                                    e9[u].timeout = eI(),
                                        r(new ei("CallBridgeInvokeTimeout:".concat(o, ":").concat(i),"".concat(JSON.stringify({
                                            iframe: e.getIframeState(),
                                            id: u
                                        }))))
                                }, t)
                            }
                        )])
                };
                return e.preCheck().then(function() {
                    return l(n)
                }).catch(function(n) {
                    if (!0 === e.isConnection && t && -1 !== ((null == n ? void 0 : n.name) || "").indexOf("CallBridgeInvokeTimeout")) {
                        var r = s < e5
                            , o = e6;
                        return e.emit("debug", {
                            name: "reCallBridgeWhenTimeout",
                            content: JSON.stringify({
                                isTimeoutId: r,
                                $MessageId: o,
                                $id: s,
                                callName: i,
                                reCallBridgeWhenTimeout: !!e3
                            })
                        }),
                            (e3 = e3 && r ? e3 : new Promise(function(t) {
                                    e5 = o,
                                        eA(e),
                                        e.reStartConection("callBridge"),
                                        t()
                                }
                            )).then(function() {
                                return l(8e3)
                            })
                    }
                    throw n
                })
            }
        }
            , e8 = (s = function(e, t) {
                return (s = Object.setPrototypeOf || ({
                            __proto__: []
                        })instanceof Array && function(e, t) {
                            e.__proto__ = t
                        }
                        || function(e, t) {
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                )(e, t)
            }
                ,
                function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                        this.constructor = e
                    }
                    s(e, t),
                        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                            new n)
                }
        )
            , te = function() {
            return (te = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }
            ).apply(this, arguments)
        }
            , tt = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.listen = function() {
                    n.client.listen()
                }
                    ,
                    n.setConfig = function(e) {
                        return new Promise(function(t) {
                                n.config = te(te({}, n.config || {}), e),
                                    n.emit("config", n.config),
                                    t()
                            }
                        )
                    }
                    ,
                    n.startStorageChecker = function() {
                        return new Promise(function(e) {
                                n.client.isConnection ? e() : n.client.on("connection", function() {
                                    e()
                                })
                            }
                        ).then(function() {
                            return e7(n.client, !0, 3e3)("config", "startChecker", [])
                        })
                    }
                    ,
                    n.startChecker = function() {
                        return new Promise(function(e, t) {
                                var r = (n.config || {}).startStorageCheckerCallBack;
                                null == r || r(),
                                    e()
                            }
                        )
                    }
                    ,
                    n.setOriginStorageConfig = function(e) {
                        return new Promise(function(e) {
                                n.client.isConnection ? e() : n.client.on("connection", function() {
                                    e()
                                })
                            }
                        ).then(function() {
                            if (n.client.config.url)
                                return e7(n.client, !0, 3e4)("config", "setConfig", [e]);
                            throw Error("NoOriginStorageURL")
                        })
                    }
                    ,
                    n.setItem = function(e, t, r) {
                        return n.setItemByKeys([[e, t]], r).then(function(e) {
                            return e[0]
                        })
                    }
                    ,
                    n.getItem = function(e, t) {
                        return n.getItemByKeys([e], t).then(function(e) {
                            return e[0]
                        })
                    }
                    ,
                    n.getItemByKeys = function(e, t) {
                        var r = t || {}
                            , o = r.async
                            , i = r.logger
                            , a = void 0 === i || i
                            , c = eI()
                            , s = 0
                            , u = 0
                            , l = -1
                            , f = {}
                            , d = function() {
                            if (a)
                                try {
                                    s = s || eI(),
                                        u = u || s,
                                        n.emit("metrics", {
                                            name: "getOriginItemByKeys",
                                            metrics: {
                                                duration: s - c,
                                                callTime: s - u,
                                                startCallTime: u,
                                                startTime: c,
                                                endTime: s
                                            },
                                            categories: te({
                                                status: String(l)
                                            }, f)
                                        })
                                } catch (e) {}
                        }
                            , g = function(t) {
                            l = l > -1 ? l : 1;
                            try {
                                t.forEach(function(t, n) {
                                    ["from", "origin", "status", "code"].forEach(function(r) {
                                        var o = e[n]
                                            , i = o.split("/")
                                            , a = "status" === r ? String(t.value ? 1 : 0) : String(t[r]);
                                        "undefined" !== a && (f["".concat(i[1] || o, "_").concat(r)] = a)
                                    })
                                })
                            } catch (e) {}
                        }
                            , p = function() {
                            var t = n.client.config.url;
                            u = eI();
                            var r = function() {
                                return e7(n.client)("storage", "getItemByKeys", [e]).then(function(t) {
                                    return s = eI(),
                                        l = 2,
                                        Promise.all(t.map(function(t, r) {
                                            return void 0 === t.value && (l = 3),
                                                void 0 === t.value ? n.storage.getItem(e[r]) : t
                                        }))
                                })
                            };
                            return t ? void 0 !== o ? Promise.race([r(), new Promise(function(e) {
                                    setTimeout(e, "number" == typeof o ? o : 1e3)
                                }
                            ).then(function() {
                                return n.storage.getItemByKeys(e)
                            })]) : eP([r, function() {
                                return n.storage.getItemByKeys(e).then(function(e) {
                                    return e.map(function(e) {
                                        return e.code = 1001,
                                            e
                                    })
                                })
                            }
                            ]) : n.storage.getItemByKeys(e)
                        };
                        return n.getLocalItemWithSignByKeys(e).then(function(e) {
                            var t = e.values
                                , n = e.st
                                , r = e.et;
                            return c = n,
                                s = r,
                                l = 12,
                                g(t),
                                d(),
                                t
                        }).catch(function() {
                            return e4(p().catch(function() {
                                return n.storage.getItemByKeys(e)
                            }).then(function(e) {
                                return g(e),
                                    e
                            }).catch(function(e) {
                                throw l = 0,
                                    e
                            }))(d)
                        })
                    }
                    ,
                    n.setItemByKeys = function(e, t) {
                        var r, o, i, a, c, s = t || {}, u = s.async, l = s.logger, f = void 0 === l || l, d = eI(), g = 0, p = -1, v = 0, h = 0, m = {}, y = {
                            end: !1,
                            sync: !1,
                            resolve: function() {}
                        }, _ = function(t) {
                            p = p > -1 ? p : 1;
                            try {
                                t.forEach(function(t, n) {
                                    ["from", "origin", "status"].forEach(function(r) {
                                        var o = e[n][0]
                                            , i = o.split("/");
                                        m["".concat(i[1] || o, "_").concat(r)] = "status" === r ? String(t.value ? 1 : 0) : String(t[r])
                                    })
                                })
                            } catch (e) {}
                        };
                        new Promise(function(e) {
                                y.resolve = e
                            }
                        ).then(function() {
                            if (f)
                                try {
                                    g = g || eI(),
                                        n.emit("metrics", {
                                            name: "setOriginItemByKeys",
                                            metrics: {
                                                duration: g - d,
                                                callTime: g - h,
                                                startCallTime: h,
                                                startTime: d,
                                                endTime: g,
                                                retryCount: v
                                            },
                                            categories: te({
                                                status: String(p)
                                            }, m)
                                        })
                                } catch (e) {}
                        });
                        var b = function(e) {
                            y[e] = !0,
                            y.end && y.sync && y.resolve()
                        };
                        return e4((r = e,
                            a = n.client.config.url,
                            h = eI(),
                            c = function(e) {
                                return e7(n.client, !0, e)("storage", "setItemByKeys", [r]).then(function(e) {
                                    return p = 2,
                                        _(e),
                                        g = eI(),
                                        e
                                })
                            }
                            ,
                            a ? void 0 !== u ? Promise.race([e4(c(3e4).catch(function(e) {
                                var t = "".concat(null == e ? void 0 : e.name, "@").concat(null == e ? void 0 : e.message);
                                return v++,
                                    c().catch(function(r) {
                                        throw n.emit("log", {
                                            name: "callBridgeSetItemByKeysRetryError",
                                            content: JSON.stringify({
                                                iframe: n.client.getIframeState(),
                                                errorMessage: t
                                            })
                                        }),
                                            e
                                    })
                            }))(b.bind(null, "sync")), new Promise(function(e) {
                                    setTimeout(e, "number" == typeof u ? u : 1e3)
                                }
                            ).then(function() {
                                return n.storage.setItemByKeys(r)
                            })]) : eL([(i = {
                                    timeout: 2500,
                                    result: [{
                                        value: "timeout",
                                        from: "timeout",
                                        origin: "timeout"
                                    }]
                                },
                                    o = function() {
                                        return e4(c())(b.bind(null, "sync"))
                                    }
                                    ,
                                void 0 === i && (i = {}),
                                    function() {
                                        var e = i.timeout
                                            , t = void 0 === e ? 3e3 : e;
                                        return Promise.race([new Promise(function(e) {
                                                setTimeout(function() {
                                                    e(i.result || {})
                                                }, t)
                                            }
                                        ), o()])
                                    }
                            ), function() {
                                return n.storage.setItemByKeys(r)
                            }
                            ]) : n.storage.setItemByKeys(r)).catch(function() {
                            return n.storage.setItemByKeys(e)
                        }).catch(function(e) {
                            throw p = 0,
                                e
                        }).then(function(e) {
                            return _(e),
                                e
                        }))(b.bind(null, "end"))
                    }
                    ,
                    n.removeItem = function(e) {
                        return n.client.config.url ? Promise.all([n.storage.removeItem(e), e7(n.client)("storage", "removeItem", [e])]).then(function() {}) : n.storage.removeItem(e)
                    }
                    ,
                    n.getLocalItemWithSignByKeys = function(e) {
                        var t;
                        if ((null === (t = n.sign) || void 0 === t ? void 0 : t.verify) && eE(e, eU)) {
                            var r = eI();
                            return n.storage.localDB.getItemByKeys(eU).then(function(t) {
                                return n.sign.verify(t).then(function(n) {
                                    if (n)
                                        return e.map(function(e) {
                                            return {
                                                value: t[eU.indexOf(e)],
                                                origin: location.origin,
                                                from: 0,
                                                code: 304
                                            }
                                        });
                                    throw Error("VerifySignFail")
                                }).then(function(e) {
                                    return {
                                        values: e,
                                        st: r,
                                        et: eI()
                                    }
                                })
                            })
                        }
                        return Promise.reject(Error("NotVerifySignFunction"))
                    }
                    ,
                    n.initBirdgeEvent = function() {
                        n.client.on("message", function(e) {
                            var t = e.data
                                , r = e.origin
                                , o = e.type
                                , i = e.sourceWindow
                                , a = (t || {}).id;
                            if ("event" === o) {
                                var c = t.message || {}
                                    , s = c.eventName
                                    , u = c.eventData;
                                if ("error" === s)
                                    n.emit("error", new ei(u.name,u.message,u.origin));
                                else if ("log" === s)
                                    return n.emit("log", u)
                            } else {
                                var l = t.message || {}
                                    , f = l.callObj
                                    , d = l.callName
                                    , g = l.callArgs
                                    , p = function(e, t) {
                                    return n.client.postWindowMessage(i, "function", {
                                        id: a,
                                        promiseStatus: e,
                                        message: t
                                    }, r)
                                };
                                if (-1 !== ["storage", "storageX", "client", "sign", "config", "logger"].indexOf(f))
                                    try {
                                        eN("".concat(f, "-").concat(d)),
                                            (-1 !== ["storage", "config"].indexOf(f) ? n : n[f])[d].apply(n, void 0 === g ? [] : g).then(p.bind(null, "resolve")).catch(function(e) {
                                                p("reject", e.name || e.message || "UnknowMessageError").catch(function() {})
                                            })
                                    } catch (e) {
                                        p("reject", "UnknowMessageError").catch(function() {})
                                    }
                            }
                        })
                    }
                    ,
                    n.config = te({
                        debug: !1,
                        hostname: location.hostname
                    }, t || {}),
                    n.client = new e2(te(te({}, n.config.scoket || {}), {
                        protocol: n.config.protocol,
                        allowOrigin: n.config.allowOrigin,
                        debug: n.config.debug,
                        url: n.config.url
                    })),
                    n.storage = new eH(n.config.storage),
                    n.storageX = n.storage,
                n.config.verifySignMethod && (n.sign = te(te({}, n.sign || {}), {
                    verify: function(e) {
                        return Promise.resolve(n.config.verifySignMethod(e))
                    }
                })),
                    n.logger = {
                        metrics: function(e) {
                            return n.emit("metrics", e),
                                Promise.resolve()
                        }
                    },
                    n.initBirdgeEvent(),
                    n.on("error", function(e) {
                        n.config.disableReportLogger || n.client.dispatchParentEvent("error", {
                            name: e.name,
                            message: e.message,
                            origin: e.origin
                        }).catch(function() {})
                    }),
                    n.on("log", function(e) {
                        n.config.disableReportLogger || n.client.dispatchParentEvent("log", e).catch(function() {})
                    }),
                    n.on("debug", function(e) {
                        n.config.debug && n.emit("log", te(te({}, e), {
                            name: "Debug:".concat(e.name)
                        }))
                    }),
                    n.client.on("error", function(e) {
                        e.name = "Socket:".concat(e.name),
                            n.emit("error", e)
                    }),
                    n.storage.on("error", function(e) {
                        n.emit("error", (e.name = "".concat("WebStorage", ":").concat(e.name),
                            e))
                    }),
                    n.storage.on("log", function(e) {
                        n.emit("log", e)
                    }),
                    n.client.on("log", function(e) {
                        n.emit("log", e)
                    }),
                    n.client.on("metrics", function(e) {
                        n.emit("metrics", e)
                    }),
                    n.client.on("debug", function(e) {
                        n.emit("debug", e)
                    }),
                    n.client.start().catch(function(e) {
                        n.emit("error", new ei("StartSocketClientError",e.message))
                    }),
                    n
            }
            return e8(t, e),
                t
        }(z)
            , tn = function(e, t) {
            var n = window.location.hostname;
            return t || -1 === n.indexOf("douyin.com") ? e ? "https://lf-zt.douyin.com/obj/uc-assets/zt/" : "https://lf-ucenter-web.yhgfb-cn-static.com/obj/passport-fe/ucenter_fe/" : "https://lf-zt.douyin.com/obj/uc-assets/zt/"
        }
            , tr = function() {
            try {
                var e = ""
                    , t = document.location.hostname
                    , n = t.split(".");
                if (/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(t) || "localhost" === t)
                    return document.location.hostname.replace(/^.*?\b\.\b/, "");
                var r = [];
                for (r.unshift(n.pop()); r.length < 2; )
                    r.unshift(n.pop()),
                        e = r.join(".");
                return e || document.location.hostname
            } catch (e) {
                return document.location.hostname
            }
        }
            , to = function(e) {
            try {
                for (var t = "".concat(e, "="), n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                    var o = n[r].trim();
                    if (0 === o.indexOf(t)) {
                        var i = o.substring(t.length, o.length);
                        if (i.length > 0)
                            return decodeURIComponent(i)
                    }
                }
            } catch (e) {}
            return ""
        }
            , ti = (u = function(e, t) {
                return (u = Object.setPrototypeOf || ({
                            __proto__: []
                        })instanceof Array && function(e, t) {
                            e.__proto__ = t
                        }
                        || function(e, t) {
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                )(e, t)
            }
                ,
                function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                        this.constructor = e
                    }
                    u(e, t),
                        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                            new n)
                }
        )
            , ta = function(e, t, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? o(e.value) : ((t = e.value)instanceof n ? t : new n(function(e) {
                                e(t)
                            }
                        )).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
            )
        }
            , tc = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
            ),
                i;
            function c(i) {
                return function(c) {
                    return function(i) {
                        if (n)
                            throw TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                    0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++,
                                            {
                                                value: i[1],
                                                done: !1
                                            };
                                    case 5:
                                        a.label++,
                                            r = i[1],
                                            i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(),
                                            a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1],
                                                o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2],
                                                a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(),
                                            a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e],
                                    r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, c])
                }
            }
        }
            , ts = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                n.getCurrentHostName = function() {
                    var e, t = null === (e = null == window ? void 0 : window.location) || void 0 === e ? void 0 : e.hostname;
                    if (t && -1 !== t.indexOf("creator.douyin.com"))
                        return t
                }
                    ,
                    n.startStorageChecker = function() {
                        var e;
                        null === (e = n.storage) || void 0 === e || e.startStorageChecker().catch(function(e) {
                            n.emit("error", {
                                name: "start storage checker error",
                                error: e
                            })
                        })
                    }
                    ,
                    n.initLoadIframePromise = function() {
                        return new Promise(function(e, t) {
                                var r;
                                n.storage ? null === (r = n.storage) || void 0 === r || r.client.on("connection", function(t) {
                                    n.crossStatus = !0,
                                        e()
                                }) : e()
                            }
                        )
                    }
                    ,
                    n.getStorageStatus = function() {
                        var e;
                        return null === (e = n.storage) || void 0 === e ? void 0 : e.client.getIframeState()
                    }
                    ,
                    n._createStorageKey = function(e) {
                        var t = n.config.namespace;
                        return t ? "security-sdk/".concat(t, "/").concat(e) : "security-sdk/".concat(e)
                    }
                    ,
                    n._deleteStorageKey = function(e) {
                        return e.replace(/security-sdk\//g, "")
                    }
                    ,
                    n.getItem = function(e) {
                        return ta(n, void 0, void 0, function() {
                            var t, n, r, o, i, a;
                            return tc(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (t = this._createStorageKey(e),
                                            this.disableCrossStorage)
                                            return [3, 2];
                                        return [4, null === (i = this.storage) || void 0 === i ? void 0 : i.getItem(t)];
                                    case 1:
                                        return n = c.sent(),
                                            [3, 4];
                                    case 2:
                                        return [4, null === (a = this.localStore) || void 0 === a ? void 0 : a.getItem(t)];
                                    case 3:
                                        n = c.sent(),
                                            c.label = 4;
                                    case 4:
                                        if (n)
                                            return o = (r = n || {}).value,
                                                r.from,
                                                r.origin,
                                                [2, o || ""];
                                        return [2, ""]
                                }
                            })
                        })
                    }
                    ,
                    n.getLocalItem = function(e) {
                        return ta(n, void 0, void 0, function() {
                            var t, n, r, o, i, a, c, s, u, l;
                            return tc(this, function(f) {
                                switch (f.label) {
                                    case 0:
                                        if (t = this._createStorageKey(e),
                                            n = new Date().getTime(),
                                            !this.disableCrossStorage)
                                            return [3, 2];
                                        return [4, null === (u = this.localStore) || void 0 === u ? void 0 : u.getItem(t)];
                                    case 1:
                                        return r = f.sent(),
                                            [3, 4];
                                    case 2:
                                        return [4, null === (l = this.storage) || void 0 === l ? void 0 : l.storage.getItem(t)];
                                    case 3:
                                        r = f.sent(),
                                            f.label = 4;
                                    case 4:
                                        if (o = new Date().getTime(),
                                            r)
                                            return a = (i = r || {}).value,
                                                c = i.from,
                                                s = i.origin,
                                                this.emit("execute", {
                                                    action: "localstorage",
                                                    op: "getItem",
                                                    status: a ? "success" : "success_null",
                                                    duration: o > n ? o - n : 0,
                                                    ctx: {
                                                        key: e,
                                                        from: "number" == typeof c ? c.toString() : "-99",
                                                        origin: s || "",
                                                        type: "localStorage"
                                                    }
                                                }),
                                                [2, a || ""];
                                        return this.emit("execute", {
                                            action: "localstorage",
                                            op: "getItem",
                                            duration: o > n ? o - n : 0,
                                            ctx: {
                                                key: e,
                                                type: "localStorage"
                                            },
                                            status: "success_null"
                                        }),
                                            [2, ""]
                                }
                            })
                        })
                    }
                    ,
                    n.setLocalItem = function(e, t) {
                        return ta(n, void 0, void 0, function() {
                            var n, r, o, i, a, c, s, u, l;
                            return tc(this, function(f) {
                                switch (f.label) {
                                    case 0:
                                        if (n = this._createStorageKey(e),
                                            r = new Date().getTime(),
                                            !this.disableCrossStorage)
                                            return [3, 2];
                                        return [4, null === (u = this.localStore) || void 0 === u ? void 0 : u.setItem(n, t)];
                                    case 1:
                                        return o = f.sent(),
                                            [3, 4];
                                    case 2:
                                        return [4, null === (l = this.storage) || void 0 === l ? void 0 : l.storage.setItem(n, t)];
                                    case 3:
                                        o = f.sent(),
                                            f.label = 4;
                                    case 4:
                                        return a = (i = o || {}).from,
                                            c = i.origin,
                                            s = new Date().getTime(),
                                            this.emit("execute", {
                                                action: "localstorage",
                                                op: "setItem",
                                                status: "success",
                                                duration: s > r ? s - r : 0,
                                                ctx: {
                                                    key: e,
                                                    from: "number" == typeof a ? a.toString() : "-99",
                                                    origin: c || ""
                                                }
                                            }),
                                            [2]
                                }
                            })
                        })
                    }
                    ,
                    n.getLocalItemsWithKeys = function(e) {
                        return ta(n, void 0, void 0, function() {
                            var t, n, r, o, i, a, c, s, u, l = this;
                            return tc(this, function(f) {
                                switch (f.label) {
                                    case 0:
                                        if (t = e.map(function(e) {
                                            return l._createStorageKey(e)
                                        }),
                                            n = new Date().getTime(),
                                            !this.disableCrossStorage)
                                            return [3, 2];
                                        return [4, null === (c = this.localStore) || void 0 === c ? void 0 : c.getItemByKeys(t)];
                                    case 1:
                                        return r = f.sent(),
                                            [3, 4];
                                    case 2:
                                        return [4, null === (u = null === (s = this.storage) || void 0 === s ? void 0 : s.storage) || void 0 === u ? void 0 : u.getItemByKeys(t)];
                                    case 3:
                                        r = f.sent(),
                                            f.label = 4;
                                    case 4:
                                        if (o = new Date().getTime(),
                                            i = {},
                                            a = {},
                                        r && Array.isArray(r) && r.length === e.length)
                                            return r.forEach(function(t, n) {
                                                var r = t || {}
                                                    , o = r.value
                                                    , c = r.from
                                                    , s = r.origin
                                                    , u = e[n]
                                                    , l = "number" == typeof c ? c.toString() : "-99";
                                                a["".concat(u.replace(/\//g, "_"), "_origin")] = s || "",
                                                    a["".concat(u.replace(/\//g, "_"), "_from")] = l,
                                                    a["".concat(u.replace(/\//g, "_"), "_status")] = o ? "success" : "success_null",
                                                    i[u] = o
                                            }),
                                                this.emit("execute", {
                                                    action: "localstorage",
                                                    op: "getKeys",
                                                    status: "success",
                                                    duration: o > n ? o - n : 0,
                                                    ctx: a
                                                }),
                                                [2, i];
                                        return e.forEach(function(e) {
                                            i[e] = "",
                                                a["".concat(e.replace(/\//g, "_"), "_status")] = "success_null"
                                        }),
                                            this.emit("execute", {
                                                action: "localstorage",
                                                op: "getKeys",
                                                duration: o > n ? o - n : 0,
                                                ctx: a,
                                                status: "success_null"
                                            }),
                                            [2, i]
                                }
                            })
                        })
                    }
                    ,
                    n.getItemWithKeys = function(e) {
                        return ta(n, void 0, void 0, function() {
                            var t, n, r, o, i, a, c = this;
                            return tc(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (t = e.map(function(e) {
                                            return c._createStorageKey(e)
                                        }),
                                            !this.disableCrossStorage)
                                            return [3, 2];
                                        return [4, null === (i = this.localStore) || void 0 === i ? void 0 : i.getItemByKeys(t)];
                                    case 1:
                                        return n = s.sent(),
                                            [3, 4];
                                    case 2:
                                        return [4, null === (a = this.storage) || void 0 === a ? void 0 : a.getItemByKeys(t)];
                                    case 3:
                                        n = s.sent(),
                                            s.label = 4;
                                    case 4:
                                        if (r = {},
                                            (o = {}).cross = "1",
                                        n && Array.isArray(n) && n.length === e.length)
                                            return n.forEach(function(t, n) {
                                                var i = t || {}
                                                    , a = i.value
                                                    , c = i.from
                                                    , s = i.origin
                                                    , u = e[n];
                                                s && -1 === s.indexOf("lf-zt.douyin.com") && (o.cross = "0");
                                                var l = "number" == typeof c ? c.toString() : "-99";
                                                o["".concat(u.replace(/\//g, "_"), "_origin")] = s || "",
                                                    o["".concat(u.replace(/\//g, "_"), "_from")] = l,
                                                    o["".concat(u.replace(/\//g, "_"), "_status")] = a ? "success" : "success_null",
                                                    r[u] = a
                                            }),
                                                [2, r];
                                        return e.forEach(function(e) {
                                            r[e] = "",
                                                o["".concat(e.replace(/\//g, "_"), "_status")] = "success_null"
                                        }),
                                            [2, r]
                                }
                            })
                        })
                    }
                    ,
                    n.getItemsWithOrigin = function(e) {
                        return ta(n, void 0, void 0, function() {
                            var t, n, r, o, i, a, c, s = this;
                            return tc(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (t = e.map(function(e) {
                                            return s._createStorageKey(e)
                                        }),
                                            !this.disableCrossStorage)
                                            return [3, 2];
                                        return [4, null === (a = this.localStore) || void 0 === a ? void 0 : a.getItemByKeys(t)];
                                    case 1:
                                        return n = u.sent(),
                                            [3, 4];
                                    case 2:
                                        return [4, null === (c = this.storage) || void 0 === c ? void 0 : c.getItemByKeys(t)];
                                    case 3:
                                        n = u.sent(),
                                            u.label = 4;
                                    case 4:
                                        if (r = {
                                            data: {}
                                        },
                                            o = {},
                                            (i = {}).cross = "1",
                                        n && Array.isArray(n) && n.length === e.length)
                                            return n.forEach(function(t, n) {
                                                var r = t || {}
                                                    , a = r.value
                                                    , c = r.from
                                                    , s = r.origin
                                                    , u = e[n];
                                                s && -1 === s.indexOf("lf-zt.douyin.com") && (i.cross = "0");
                                                var l = "number" == typeof c ? c.toString() : "-99";
                                                i["".concat(u.replace(/\//g, "_"), "_origin")] = s || "",
                                                    i["".concat(u.replace(/\//g, "_"), "_from")] = l,
                                                    i["".concat(u.replace(/\//g, "_"), "_status")] = a ? "success" : "success_null",
                                                    o[u] = {
                                                        key: u,
                                                        value: a,
                                                        from: l || "-99",
                                                        origin: s || "-1"
                                                    }
                                            }),
                                                r.data = o,
                                                r.from = (null == i ? void 0 : i.cross) || "0",
                                                [2, r];
                                        return e.forEach(function(e) {
                                            o[e] = {
                                                key: e,
                                                value: "",
                                                from: "-98",
                                                origin: "-2"
                                            },
                                                i["".concat(e.replace(/\//g, "_"), "_status")] = "success_null"
                                        }),
                                            r.data = o,
                                            [2, r]
                                }
                            })
                        })
                    }
                    ,
                    n.setItemWithKeys = function(e, t, r) {
                        return ta(n, void 0, void 0, function() {
                            var n, r, o, i, a, c = this;
                            return tc(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (e.length !== t.length)
                                            throw Error("set item with Keys need equal length");
                                        if (n = [],
                                            e.forEach(function(e, r) {
                                                var o = [c._createStorageKey(e), t[r]];
                                                n.push(o)
                                            }),
                                            !this.disableCrossStorage)
                                            return [3, 2];
                                        return [4, null === (i = this.localStore) || void 0 === i ? void 0 : i.setItemByKeys(n)];
                                    case 1:
                                        return r = s.sent(),
                                            [3, 4];
                                    case 2:
                                        return [4, null === (a = this.storage) || void 0 === a ? void 0 : a.setItemByKeys(n, {
                                            async: 3e3
                                        })];
                                    case 3:
                                        r = s.sent(),
                                            s.label = 4;
                                    case 4:
                                        if ((o = {}).cross = "1",
                                        r && Array.isArray(r) && r.length === e.length)
                                            return r.forEach(function(t, n) {
                                                var r = t || {}
                                                    , i = r.from
                                                    , a = r.origin
                                                    , c = e[n];
                                                a && -1 === a.indexOf("lf-zt.douyin.com") && (o.cross = "0");
                                                var s = "number" == typeof i ? i.toString() : "-99";
                                                o["".concat(c.replace(/\//g, "_"), "_origin")] = a || "",
                                                    o["".concat(c.replace(/\//g, "_"), "_from")] = s
                                            }),
                                                [2, {
                                                    cross: o.cross || "0"
                                                }];
                                        return [2, {
                                            cross: "0"
                                        }]
                                }
                            })
                        })
                    }
                    ,
                    n.setItem = function(e, t, r) {
                        return ta(n, void 0, void 0, function() {
                            var n, o, i, a, c, s, u;
                            return tc(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (n = this._createStorageKey(e),
                                            new Date().getTime(),
                                            !this.disableCrossStorage)
                                            return [3, 2];
                                        return [4, null === (c = this.localStore) || void 0 === c ? void 0 : c.setItem(n, t)];
                                    case 1:
                                    case 3:
                                        return o = l.sent(),
                                            [3, 6];
                                    case 2:
                                        if (!r)
                                            return [3, 4];
                                        return [4, null === (s = this.storage) || void 0 === s ? void 0 : s.setItem(n, t)];
                                    case 4:
                                        return [4, null === (u = this.storage) || void 0 === u ? void 0 : u.setItem(n, t, {
                                            async: !0
                                        })];
                                    case 5:
                                        o = l.sent(),
                                            l.label = 6;
                                    case 6:
                                        return (i = o || {}).from,
                                            a = i.origin,
                                            new Date().getTime(),
                                            [2, {
                                                cross: a && -1 !== a.indexOf("lf-zt.douyin.com") ? "1" : "0"
                                            }]
                                }
                            })
                        })
                    }
                    ,
                    n.deleteItem = function(e) {
                        return ta(n, void 0, void 0, function() {
                            var t, n, r;
                            return tc(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (t = this._createStorageKey(e),
                                            !this.disableCrossStorage)
                                            return [3, 2];
                                        return [4, null === (n = this.localStore) || void 0 === n ? void 0 : n.removeItem(t)];
                                    case 1:
                                        return o.sent(),
                                            [3, 4];
                                    case 2:
                                        return [4, null === (r = this.storage) || void 0 === r ? void 0 : r.removeItem(t)];
                                    case 3:
                                        o.sent(),
                                            o.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    n.checkIframeStatus = function(e) {
                        var t;
                        try {
                            if (n.hasCheckIframeStatus && !e)
                                return;
                            n.hasCheckIframeStatus = !0;
                            var r = null === (t = null == document ? void 0 : document.querySelectorAll) || void 0 === t ? void 0 : t.call(document, "iframe")
                                , o = !1;
                            r && r.length > 0 && r.forEach(function(t) {
                                var r = t.src;
                                r && -1 !== r.indexOf("lf-zt.douyin.com") && (n.emit("execute", {
                                    action: "iframe",
                                    op: e ? "check" : "getKeys",
                                    status: "success",
                                    ctx: {
                                        type: e ? "unload" : "getKeys"
                                    }
                                }),
                                    o = !0)
                            }),
                            o || n.emit("execute", {
                                action: "iframe",
                                op: e ? "check" : "getKeys",
                                status: "fail",
                                ctx: {
                                    type: e ? "unload" : "getKeys"
                                }
                            })
                        } catch (t) {
                            n.emit("error", {
                                error: t,
                                name: "check iframe status error"
                            }),
                                n.emit("execute", {
                                    action: "iframe",
                                    op: e ? "check" : "getKeys",
                                    status: "fail",
                                    ctx: {
                                        type: e ? "unload" : "getKeys"
                                    }
                                })
                        }
                    }
                    ,
                    n.getIframeStatus = function() {
                        return n.crossStatus || n.iframeStatus
                    }
                    ,
                    n.verifySignMethod = function(e) {
                        try {
                            var t = to("_bd_ticket_crypt_cookie") || "";
                            if (e && Array.isArray(e) && 3 === e.length) {
                                var r = e[0]
                                    , o = e[1]
                                    , i = e[2];
                                return H(t, r, o, i)
                            }
                        } catch (e) {
                            n.emit("error", {
                                error: e,
                                name: "verify sign method error"
                            })
                        }
                        return !1
                    }
                    ,
                    n.enableHotPath = function() {
                        try {
                            var e = document.location.href;
                            if (-1 !== e.indexOf("creator.douyin.com"))
                                return !0
                        } catch (e) {
                            n.emit("error", {
                                error: e,
                                name: "enable hot path error"
                            })
                        }
                        return !1
                    }
                    ,
                    n.initUnloadEvent = function() {
                        try {
                            window.addEventListener("beforeunload", function(e) {})
                        } catch (e) {
                            n.emit("error", {
                                error: e,
                                name: "unload check error"
                            })
                        }
                    }
                ;
                var r = t.url
                    , o = t.fallbackCacheOriginURL
                    , i = t.sendEvent
                    , a = t.disableCrossStorage
                    , c = t.ztIframe
                    , s = t.agid;
                if (n.disableCrossStorage = a,
                    n.config = t,
                    n.disableCrossStorage)
                    n.localStore = new eH,
                        n.localStore.on("log", function(e) {
                            var t = e || {}
                                , r = t.name
                                , o = t.content;
                            n.emit("log", {
                                extra: {
                                    content: o || ""
                                },
                                content: r,
                                level: "info"
                            })
                        }),
                        n.localStore.on("error", function(e) {
                            n.emit("error", {
                                error: e,
                                name: "storage error"
                            })
                        });
                else {
                    var u = ee(tn(void 0 !== c && c, s));
                    n.localStore = new eH,
                        n.storage = new tt({
                            url: r || u || "",
                            protocol: "SERCURE",
                            fallback: o,
                            verifySignMethod: n.verifySignMethod
                        }),
                        n.storage.setOriginStorageConfig({
                            enableHotPatch: n.enableHotPath(),
                            hostname: n.getCurrentHostName()
                        }).catch(function(e) {
                            n.emit("error", {
                                name: "enbale hot patch error",
                                error: e
                            })
                        }),
                        n.hasCheckIframeStatus = !1,
                        n.iframeStatus = !1,
                        n.crossStatus = !1,
                        n.storage.on("error", function(e) {
                            n.emit("error", {
                                error: e,
                                name: "storage error"
                            })
                        }),
                        n.storage.on("log", function(e) {
                            var t = e || {}
                                , r = t.name
                                , o = t.content;
                            n.emit("log", {
                                extra: {
                                    content: o || ""
                                },
                                content: r,
                                level: "info"
                            })
                        }),
                        n.storage.on("metrics", function(e) {
                            var t = e || {}
                                , n = t.name
                                , r = t.metrics
                                , o = t.categories;
                            n && "string" == typeof n ? null == i || i({
                                name: "storage_".concat(n),
                                metrics: r,
                                categories: o
                            }) : null == i || i({
                                name: "storage_event_without_name",
                                metrics: r,
                                categories: o
                            })
                        }),
                        n.loadIframePromise = n.initLoadIframePromise()
                }
                return n
            }
            return ti(t, e),
                t
        }(z)
            , tu = function(e) {
            var t = this;
            this.getKeys = function() {
                return {
                    publicKey: t._public_key,
                    privateKey: t._private_key
                }
            }
                ,
                this.sign = function(e) {
                    var n = O.KEYUTIL.getKey(t._private_key || "")
                        , r = new O.KJUR.crypto.Signature({
                        alg: "SHA256withECDSA"
                    });
                    return r.init(n),
                        r.signString(e)
                }
                ,
                this.verify = function(e, n, r) {
                    var o = new O.KJUR.crypto.Signature({
                        alg: "SHA256withECDSA"
                    });
                    if (r)
                        o.init(r);
                    else {
                        var i = O.KEYUTIL.getKey(t._public_key || "");
                        o.init(i)
                    }
                    return o.updateString(n),
                        o.verify(e)
                }
                ,
                this.getCSR = function() {
                    var e;
                    return new O.KJUR.asn1.csr.CertificationRequest({
                        subject: {
                            str: "/C=CN/CN=bd_ticket_guard"
                        },
                        sbjpubkey: t._public_key || "",
                        sigalg: "SHA256withECDSA",
                        extreq: [{
                            extname: "subjectAltName",
                            array: [{
                                dns: (null === (e = null == window ? void 0 : window.location) || void 0 === e ? void 0 : e.hostname) || ""
                            }]
                        }],
                        sbjprvkey: t._private_key || ""
                    }).getPEM()
                }
                ,
                this.comparePubKey = function(e, t) {
                    var n = O.KEYUTIL.getKey(e)
                        , r = O.pemtohex(t)
                        , o = n.generatePublicKeyHex();
                    return r.includes(o)
                }
            ;
            var n = e.privateKey
                , r = e.publicKey;
            if (n && r)
                this._public_key = r,
                    this._private_key = n;
            else {
                var o = O.KEYUTIL.generateKeypair("EC", "secp256r1")
                    , i = o.prvKeyObj
                    , a = o.pubKeyObj;
                this._public_key = O.KEYUTIL.getPEM(a),
                    this._private_key = O.KEYUTIL.getPEM(i, "PKCS8PRV")
            }
        }
            , tl = (l = function(e, t) {
                return (l = Object.setPrototypeOf || ({
                            __proto__: []
                        })instanceof Array && function(e, t) {
                            e.__proto__ = t
                        }
                        || function(e, t) {
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                )(e, t)
            }
                ,
                function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                        this.constructor = e
                    }
                    l(e, t),
                        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                            new n)
                }
        )
            , tf = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.getCookie = function(e) {
                    try {
                        return decodeURIComponent(document.cookie.replace(RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
                    } catch (e) {
                        t.emit("error", {
                            error: e,
                            name: "cookie get item error"
                        })
                    }
                    return null
                }
                    ,
                    t.setCookie = function(e, n, r, o, i, a) {
                        try {
                            if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e))
                                return !1;
                            return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(n) + (i ? "; max-age=" + i : "") + (o ? "; domain=" + o : "") + (r ? "; path=" + r : "") + (a ? "; secure" : ""),
                                !0
                        } catch (e) {
                            t.emit("error", {
                                error: e,
                                name: "cookie set item error"
                            })
                        }
                        return !1
                    }
                    ,
                    t.setCookieNoTimeout = function(e, n) {
                        t.setCookie(e, n, "/")
                    }
                    ,
                    t.setCookieWithMaxAge = function(e, n) {
                        t.setCookie(e, n, "/", void 0, 5184e3)
                    }
                    ,
                    t.setCookieWithDomain = function(e, n) {
                        var r = tr();
                        t.setCookie(e, n, "/", r, 5184e3)
                    }
                    ,
                    t.deleteCookie = function(e, n, r) {
                        return !!(e && t.hasCookie(e)) && (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC" + (r ? "; domain=" + r : "") + (n ? "; path=" + n : ""),
                            !0)
                    }
                    ,
                    t.deleteAllCookie = function(e) {
                        var n = tr()
                            , r = document.location.hostname;
                        t.deleteCookie(e, "/", n),
                            t.deleteCookie(e, "/", r),
                            t.deleteCookie(e, "/")
                    }
                    ,
                    t.hasCookie = function(e) {
                        return RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
                    }
                    ,
                    t.getCookieKeys = function() {
                        for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), t = [], n = 0; n < e.length; n++)
                            e[n] && t.push(decodeURIComponent(e[n]));
                        return t
                    }
                    ,
                    t
            }
            return tl(t, e),
                t
        }(z)
            , td = (f = function(e, t) {
                return (f = Object.setPrototypeOf || ({
                            __proto__: []
                        })instanceof Array && function(e, t) {
                            e.__proto__ = t
                        }
                        || function(e, t) {
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                )(e, t)
            }
                ,
                function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                        this.constructor = e
                    }
                    f(e, t),
                        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                            new n)
                }
        )
            , tg = function() {
            return (tg = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }
            ).apply(this, arguments)
        }
            , tp = function(e, t, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? o(e.value) : ((t = e.value)instanceof n ? t : new n(function(e) {
                                e(t)
                            }
                        )).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
            )
        }
            , tv = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
            ),
                i;
            function c(i) {
                return function(c) {
                    return function(i) {
                        if (n)
                            throw TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                    0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++,
                                            {
                                                value: i[1],
                                                done: !1
                                            };
                                    case 5:
                                        a.label++,
                                            r = i[1],
                                            i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(),
                                            a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1],
                                                o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2],
                                                a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(),
                                            a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e],
                                    r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, c])
                }
            }
        }
            , th = "s_sdk_crypt_sdk"
            , tm = "s_sdk_cert_key"
            , ty = "s_sdk_sign_data_key"
            , t_ = "_bd_ticket_crypt_cookie"
            , tb = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.signType = "pubKey",
                    n.initType = "pubKey",
                    n.setType = function(e) {
                        var t = e.initType
                            , r = e.signType;
                        n.signType = void 0 === r ? "pubKey" : r,
                            n.initType = void 0 === t ? "pubKey" : t
                    }
                    ,
                    n.setStorageType = function(e) {
                        if (n.storeType && e !== n.storeType)
                            throw Error("secure sdk only one storage type, please set correct type!");
                        n.storeType = e
                    }
                    ,
                    n.setDisableStorageSignData = function(e) {
                        n._disableStorageSignData = e
                    }
                    ,
                    n.setCrossStorageURL = function(e) {
                        n._iframeURL = e
                    }
                    ,
                    n.setCrossStorageBackURL = function(e) {
                        n._iframeBackURL = e
                    }
                    ,
                    n.setDisableCrossStorage = function(e) {
                        n._disableCrossStorage = e
                    }
                    ,
                    n.setStorageNamespace = function(e) {
                        n._storageNamespace = e
                    }
                    ,
                    n.setAgidAndHost = function(e, t) {
                        if (n._agid = e,
                            t) {
                            n._storageNamespace = "".concat(e, "_").concat(t);
                            return
                        }
                        var r = tr();
                        if (1 === e && "douyin.com" === r) {
                            n._ztIframe = !0;
                            return
                        }
                        var o = r.split(".")[0];
                        n._storageNamespace = "".concat(e, "_").concat(o || "default")
                    }
                    ,
                    n.setUpdateKeys = function(e) {
                        n.updateKeys = e
                    }
                    ,
                    n.setConfig = function(e) {
                        n.config = e
                    }
                    ,
                    n.setContext = function(e) {
                        var t = e.disableCrossStorage
                            , r = e.updateKeys
                            , o = e.storageNamespace
                            , i = e.iframeBackURL
                            , a = e.iframeURL
                            , c = e.signType
                            , s = e.initType
                            , u = e.storeType
                            , l = e.disableStorageSignData;
                        n.signType = void 0 === c ? "pubKey" : c,
                            n.initType = void 0 === s ? "pubKey" : s,
                            n._disableCrossStorage = void 0 !== t && t,
                            n._storageNamespace = o,
                            n._iframeBackURL = i,
                            n._iframeURL = a,
                            n.updateKeys = void 0 !== r && r,
                            n.storeType = void 0 === u ? "iframe" : u,
                            n._disableStorageSignData = void 0 !== l && l
                    }
                    ,
                    n.start = function() {
                        n.initIframeKeys(),
                            Object.keys(n.config || {}).forEach(function(e) {
                                var t, r = null === (t = n.config) || void 0 === t ? void 0 : t[e], o = Array.isArray(r) && r.length > 0 && r[0] || {}, i = o.scene;
                                "cookie" === o.certType && n._initCookie(void 0 === i ? "" : i)
                            })
                    }
                    ,
                    n.initIframeStore = function() {
                        var e, t = n._iframeURL;
                        if (!n._storeSDK) {
                            n.cookieOperate = new tf,
                            null === (e = n.cookieOperate) || void 0 === e || e.on("error", function(e) {
                                n.emit("error", e)
                            });
                            var r = (n.initConfig || {}).sendEvent
                                , o = new ts({
                                agid: n._agid,
                                ztIframe: n._ztIframe,
                                url: t,
                                fallbackCacheOriginURL: n._iframeBackURL,
                                sendEvent: r,
                                disableCrossStorage: n._disableCrossStorage,
                                namespace: n._storageNamespace
                            });
                            n.loadIframePromise = o.loadIframePromise,
                                o.on("error", function(e) {
                                    n.emit("error", e)
                                }),
                                o.on("load", function(e) {
                                    n.emit("load", e)
                                }),
                                o.on("execute", function(e) {
                                    n.emit("execute", e)
                                }),
                                o.on("log", function(e) {
                                    n.emit("log", e)
                                });
                            var i = void 0;
                            i = {
                                get: V(o.getItem, "iframe get item error", n.reportError, "getItem", "storage"),
                                set: V(o.setItem, "iframe set item error", n.reportError, "setItem", "storage"),
                                delete: V(o.deleteItem, "iframe delete item error", n.reportError, "deleteItem", "storage"),
                                getItems: V(o.getItemWithKeys, "iframe get items keys error", n.reportError, "getKeys", "storage"),
                                setItems: V(o.setItemWithKeys, "iframe set items keys error", n.reportError, "setKeys", "storage"),
                                getItemsWithOrigin: V(o.getItemsWithOrigin, "iframe get items keys with origin error", n.reportError, "getKeys", "storage"),
                                getLocalItem: V(o.getLocalItem, "localstorage get item keys error", n.reportError, "getItem", "localstorage"),
                                setLocalItem: V(o.setLocalItem, "localstorage set item keys error", n.reportError, "setItem", "localstorage"),
                                getLocalItems: V(o.getLocalItemsWithKeys, "localstorage set item keys error", n.reportError, "setItem", "localstorage"),
                                getIframeStatus: o.getIframeStatus,
                                getStorageStatus: o.getStorageStatus,
                                startStorageChecker: o.startStorageChecker
                            },
                                n._storeSDK = i
                        }
                    }
                    ,
                    n.initIframeKeys = function() {
                        n.initIframeStore(),
                            n._checkCryptKeys()
                    }
                    ,
                    n._initCookie = J(function(e) {
                        return tp(n, void 0, void 0, function() {
                            var t;
                            return tv(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 3, , 4]),
                                            [4, this._processServerCookie(e)];
                                    case 1:
                                        return n.sent(),
                                            [4, this._processCookie()];
                                    case 2:
                                        return n.sent(),
                                            [2, !0];
                                    case 3:
                                        return t = n.sent(),
                                            this.reportError(t, "Init Cookie Error"),
                                            [3, 4];
                                    case 4:
                                        return [2, !1]
                                }
                            })
                        })
                    }),
                    n._checkCryptKeys = J(function() {
                        return tp(n, void 0, void 0, function() {
                            var e, t, n, r, o, i, a, c, s, u, l, f;
                            return tv(this, function(d) {
                                switch (d.label) {
                                    case 0:
                                        return d.trys.push([0, 9, , 10]),
                                            e = this._getInitKeys(),
                                            [4, null === (f = this._storeSDK) || void 0 === f ? void 0 : f.getItems(e)];
                                    case 1:
                                        if (n = (t = d.sent()) && t[th],
                                            this._initData = t || {},
                                            !(n && "string" == typeof n))
                                            return [3, 7];
                                        d.label = 2;
                                    case 2:
                                        if (d.trys.push([2, 5, , 7]),
                                            i = (o = (r = JSON.parse(n)) || {}).ec_privateKey,
                                            a = o.ec_publicKey,
                                            c = o.ec_csr,
                                            !(!i || !a || "cert" === this.initType && !c))
                                            return [3, 4];
                                        return this._initData = {},
                                            this.emit("load", {
                                                action: "keys",
                                                op: "check",
                                                status: "fail"
                                            }),
                                            [4, this._initCert()];
                                    case 3:
                                    case 6:
                                        return [2, d.sent()];
                                    case 4:
                                        return this.cryptoSDK = new tu({
                                            privateKey: i,
                                            publicKey: a
                                        }),
                                            this._cryptObject = r,
                                            this._cryptData = n,
                                            this.emit("load", {
                                                action: "sdk",
                                                op: "init",
                                                duration: this.getPerfomanceTimes(),
                                                status: "success"
                                            }),
                                            [2, !0];
                                    case 5:
                                        return s = d.sent(),
                                            this.emit("load", {
                                                action: "keys",
                                                op: "check",
                                                status: "fail"
                                            }),
                                            this.emit("error", {
                                                error: s,
                                                name: "check crypt data error"
                                            }),
                                            this._initData = {},
                                            [4, this._initCert()];
                                    case 7:
                                        return [4, this._initCert()];
                                    case 8:
                                        return u = d.sent(),
                                            this.emit("load", {
                                                action: "sdk",
                                                op: "init",
                                                duration: this.getPerfomanceTimes(),
                                                status: "success"
                                            }),
                                            [2, u];
                                    case 9:
                                        return l = d.sent(),
                                            this.emit("load", {
                                                action: "sdk",
                                                op: "init",
                                                status: "fail"
                                            }),
                                            this.reportError(l, "check_crypt_keys_error"),
                                            [2, !1];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }),
                    n.getPerfomanceTimes = function() {
                        var e, t = 0;
                        try {
                            t = (null === (e = window.performance) || void 0 === e ? void 0 : e.now()) || new Date().getTime()
                        } catch (e) {}
                        return t
                    }
                    ,
                    n._getInitKeys = function() {
                        try {
                            var e = [th, tm]
                                , t = "".concat(ty, "/web_protect");
                            return e.push(t),
                                e
                        } catch (e) {
                            n.emit("error", {
                                error: e,
                                name: "get init keys error"
                            })
                        }
                        return [th, tm]
                    }
                    ,
                    n._processCookie = function() {
                        return tp(n, void 0, void 0, function() {
                            var e, t, n, r, o, i, a, c, s, u, l, f, d;
                            return tv(this, function(g) {
                                switch (g.label) {
                                    case 0:
                                        return g.trys.push([0, 4, , 5]),
                                            [4, this._checkCryptKeys()];
                                    case 1:
                                        if (g.sent(),
                                            !(!this._hasProcessServerData || "pubKey" === this.initType))
                                            return [3, 3];
                                        return [4, this.checkCookieMd5()];
                                    case 2:
                                        g.sent(),
                                            g.label = 3;
                                    case 3:
                                        if (null === (c = null === (a = this._storeSDK) || void 0 === a ? void 0 : a.startStorageChecker) || void 0 === c || c.call(a),
                                            t = (e = this._cryptObject || {}).ec_privateKey,
                                            n = e.ec_csr,
                                        "cert" === this.initType && !n || !t)
                                            return [2];
                                        return r = "cert" === this.initType ? {
                                            "bd-ticket-guard-client-csr": n || ""
                                        } : {
                                            "bd-ticket-guard-ree-public-key": M(t),
                                            "bd-ticket-guard-web-version": 2
                                        },
                                            o = L(JSON.stringify(tg({
                                                "bd-ticket-guard-version": 2,
                                                "bd-ticket-guard-iteration-version": 1
                                            }, r))),
                                        null === (s = this.cookieOperate) || void 0 === s || s.deleteAllCookie("bd_ticket_guard_client_data"),
                                        null === (u = this.cookieOperate) || void 0 === u || u.setCookieWithDomain("bd_ticket_guard_client_data", o),
                                        null === (l = this.cookieOperate) || void 0 === l || l.setCookieWithDomain("bd_ticket_guard_client_web_domain", "2"),
                                            this.emit("execute", {
                                                action: "cookie",
                                                op: "setItem",
                                                status: "success",
                                                ctx: {
                                                    type: "client"
                                                }
                                            }),
                                            this.emit("log", {
                                                extra: {
                                                    cookie: (null === (f = this.cookieOperate) || void 0 === f ? void 0 : f.getCookie("bd_ticket_guard_client_data")) || "",
                                                    cookieString: o
                                                },
                                                content: "set client data success",
                                                level: "info"
                                            }),
                                            [3, 5];
                                    case 4:
                                        return i = g.sent(),
                                            this.emit("log", {
                                                extra: {
                                                    cookie: (null === (d = this.cookieOperate) || void 0 === d ? void 0 : d.getCookie("bd_ticket_guard_client_data")) || ""
                                                },
                                                content: "process client cookie error",
                                                level: "error"
                                            }),
                                            this.reportError(i, "Process Cookie Error"),
                                            this.emit("execute", {
                                                action: "cookie",
                                                op: "setItem",
                                                status: "fail",
                                                ctx: {
                                                    type: "client"
                                                }
                                            }),
                                            [3, 5];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    n.checkCookieMd5 = function() {
                        return tp(n, void 0, void 0, function() {
                            var e, t, n, r, o, i, a, c, s, u, l, f, d, g, p, v, h, m, y, _ = this;
                            return tv(this, function(b) {
                                switch (b.label) {
                                    case 0:
                                        if (b.trys.push([0, 3, , 4]),
                                            !(e = (null === (f = this.cookieOperate) || void 0 === f ? void 0 : f.getCookie(t_)) || ""))
                                            return [2, !1];
                                        if (H(e, this._cryptData, this._initData[tm], this._initData["".concat(ty, "/web_protect")]))
                                            return t = [th, tm, "".concat(ty, "/web_protect")],
                                                n = [this._cryptData || "", this._initData[tm] || "", this._initData["".concat(ty, "/web_protect")] || ""],
                                            null === (d = this.loadIframePromise) || void 0 === d || d.then(function() {
                                                var e;
                                                return null === (e = _._storeSDK) || void 0 === e ? void 0 : e.setItems(t, n, 2).then(function(e) {
                                                    var n, r = (e || {}).cross, o = void 0 === r ? "0" : r;
                                                    return null === (n = _._storeSDK) || void 0 === n ? void 0 : n.getItems(t).then(function(e) {
                                                        var t, n = H((null === (t = _.cookieOperate) || void 0 === t ? void 0 : t.getCookie(t_)) || "", null == e ? void 0 : e[th], null == e ? void 0 : e[tm], null == e ? void 0 : e["".concat(ty, "/web_protect")]);
                                                        _.emit("load", {
                                                            action: "cookie",
                                                            op: "process",
                                                            status: "success",
                                                            ctx: {
                                                                type: "1",
                                                                scene: "callback",
                                                                correct: n ? "1" : "0",
                                                                cross: o
                                                            }
                                                        })
                                                    })
                                                })
                                            }).catch(function(e) {
                                                _.emit("load", {
                                                    action: "cookie",
                                                    op: "process",
                                                    status: "fail",
                                                    ctx: {
                                                        type: "1",
                                                        scene: "callback"
                                                    }
                                                }),
                                                    _.emit("error", {
                                                        error: e,
                                                        name: "async data fail"
                                                    })
                                            }),
                                                this.emit("load", {
                                                    action: "cookie",
                                                    op: "process",
                                                    status: "success",
                                                    ctx: {
                                                        type: "1"
                                                    }
                                                }),
                                                this.initMatch = !0,
                                                [2];
                                        return [4, null === (g = this._storeSDK) || void 0 === g ? void 0 : g.getLocalItem(th)];
                                    case 1:
                                        if (r = b.sent(),
                                            H(e, r, (null === (p = this._initData) || void 0 === p ? void 0 : p[tm]) || "", (null === (v = this._initData) || void 0 === v ? void 0 : v["".concat(ty, "/web_protect")]) || ""))
                                            return o = [th, tm, "".concat(ty, "/web_protect")],
                                                i = [r || "", this._initData[tm] || "", this._initData["".concat(ty, "/web_protect")] || ""],
                                                this._processCryptData(r, "check cookie md5 error"),
                                            null === (h = this.loadIframePromise) || void 0 === h || h.then(function() {
                                                var e;
                                                return null === (e = _._storeSDK) || void 0 === e ? void 0 : e.setItems(o, i, 2).then(function(e) {
                                                    var t, n = (e || {}).cross, r = void 0 === n ? "0" : n;
                                                    return null === (t = _._storeSDK) || void 0 === t ? void 0 : t.getItems(o).then(function(e) {
                                                        var t, n = H((null === (t = _.cookieOperate) || void 0 === t ? void 0 : t.getCookie(t_)) || "", null == e ? void 0 : e[th], null == e ? void 0 : e[tm], null == e ? void 0 : e["".concat(ty, "/web_protect")]);
                                                        _.emit("load", {
                                                            action: "cookie",
                                                            op: "process",
                                                            status: "success",
                                                            ctx: {
                                                                type: "2",
                                                                scene: "callback",
                                                                correct: n ? "1" : "0",
                                                                cross: r
                                                            }
                                                        })
                                                    })
                                                })
                                            }).catch(function(e) {
                                                _.emit("load", {
                                                    action: "cookie",
                                                    op: "process",
                                                    status: "fail",
                                                    ctx: {
                                                        type: "2",
                                                        scene: "callback"
                                                    }
                                                }),
                                                    _.emit("error", {
                                                        error: e,
                                                        name: "async data fail"
                                                    })
                                            }),
                                                this.emit("load", {
                                                    action: "cookie",
                                                    op: "process",
                                                    status: "success",
                                                    ctx: {
                                                        type: "2"
                                                    }
                                                }),
                                                this.initMatch = !0,
                                                [2];
                                        return a = this._getInitKeys(),
                                            [4, null === (m = this._storeSDK) || void 0 === m ? void 0 : m.getLocalItems(a)];
                                    case 2:
                                        if (c = b.sent(),
                                            H(e, null == c ? void 0 : c[th], null == c ? void 0 : c[tm], null == c ? void 0 : c["".concat(ty, "/web_protect")]))
                                            return s = [th, tm, "".concat(ty, "/web_protect")],
                                                u = [null == c ? void 0 : c[th], null == c ? void 0 : c[tm], null == c ? void 0 : c["".concat(ty, "/web_protect")]],
                                                this._processCryptData((null == c ? void 0 : c[th]) || "", "check cookie md5 error"),
                                            null === (y = this.loadIframePromise) || void 0 === y || y.then(function() {
                                                var e;
                                                return null === (e = _._storeSDK) || void 0 === e ? void 0 : e.setItems(s, u, 2).then(function(e) {
                                                    var t, n = (e || {}).cross, r = void 0 === n ? "0" : n;
                                                    return null === (t = _._storeSDK) || void 0 === t ? void 0 : t.getItems(s).then(function(e) {
                                                        var t, n = H((null === (t = _.cookieOperate) || void 0 === t ? void 0 : t.getCookie(t_)) || "", null == e ? void 0 : e[th], null == e ? void 0 : e[tm], null == e ? void 0 : e["".concat(ty, "/web_protect")]);
                                                        _.emit("load", {
                                                            action: "cookie",
                                                            op: "process",
                                                            status: "success",
                                                            ctx: {
                                                                type: "3",
                                                                scene: "callback",
                                                                correct: n ? "1" : "0",
                                                                cross: r
                                                            }
                                                        })
                                                    })
                                                })
                                            }).catch(function(e) {
                                                _.emit("load", {
                                                    action: "cookie",
                                                    op: "process",
                                                    status: "fail",
                                                    ctx: {
                                                        type: "3",
                                                        scene: "callback"
                                                    }
                                                }),
                                                    _.emit("error", {
                                                        error: e,
                                                        name: "async data fail"
                                                    })
                                            }),
                                                this.emit("load", {
                                                    action: "cookie",
                                                    op: "process",
                                                    status: "success",
                                                    ctx: {
                                                        type: "3"
                                                    }
                                                }),
                                                this.initMatch = !0,
                                                [2];
                                        return this.emit("load", {
                                            action: "cookie",
                                            op: "process",
                                            status: "fail"
                                        }),
                                            [3, 4];
                                    case 3:
                                        return l = b.sent(),
                                            this.emit("error", {
                                                error: l,
                                                name: "check cookie md5 fail"
                                            }),
                                            [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    n._processCryptData = function(e, t) {
                        try {
                            if (!e || "string" != typeof e)
                                return;
                            var r = JSON.parse(e)
                                , o = r || {}
                                , i = o.ec_privateKey
                                , a = o.ec_publicKey;
                            o.ec_csr,
                                n._cryptData = e,
                                n._initData[th] = e,
                                n._cryptObject = r,
                                n.cryptoSDK = new tu({
                                    privateKey: i,
                                    publicKey: a
                                })
                        } catch (e) {
                            n.emit("error", {
                                error: e,
                                name: t || "process crypt data error"
                            })
                        }
                    }
                    ,
                    n._compareCookieWithCache = function(e, t) {
                        return !!t && !!e && t === e
                    }
                    ,
                    n._processServerCookie = function(e) {
                        return tp(n, void 0, void 0, function() {
                            var t, n, r, o, i, a, c, s, u, l, f, d, g, p, v, h, m, y, _, b, k, w, S, C, K, x, I, T, D, E, O, P, L, B, R, A, N, M, H;
                            return tv(this, function(V) {
                                switch (V.label) {
                                    case 0:
                                        return V.trys.push([0, 8, , 9]),
                                            [4, this._checkCryptKeys()];
                                    case 1:
                                        if (V.sent(),
                                            t = (null === (C = this.cookieOperate) || void 0 === C ? void 0 : C.getCookie("bd_ticket_guard_server_data")) || "",
                                            n = to("bd_ticket_guard_server_data") || "",
                                        (t || n) && this.emit("log", {
                                            extra: {
                                                cookie: t,
                                                cookie2: n,
                                                docCookie: (null == document ? void 0 : document.cookie) || "",
                                                lost: t && n ? "0" : "1"
                                            },
                                            content: "get_cookie_two",
                                            level: "info"
                                        }),
                                            r = t || n,
                                        (o = (null === (K = this.cookieOperate) || void 0 === K ? void 0 : K.getCookie("bd_ticket_guard_web_domain")) || "") && (this.emit("execute", {
                                            op: "check",
                                            action: "server_data",
                                            status: "success",
                                            ctx: {
                                                server: r ? "1" : "0",
                                                server2: n ? "1" : "0",
                                                domain: o
                                            }
                                        }),
                                        null === (x = this.cookieOperate) || void 0 === x || x.setCookieWithDomain("_bd_ticket_crypt_doamin", o)),
                                            !r)
                                            return [3, 6];
                                        if (i = new Date().getTime(),
                                            c = (JSON.parse(a = j(decodeURIComponent(r))) || {}).client_cert,
                                            s = ["".concat(ty, "/").concat(e)],
                                            u = [a],
                                            !c)
                                            return [3, 4];
                                        if (this._initData[tm] = c,
                                            s.push(tm),
                                            u.push(c),
                                            l = q(this._cryptData, c),
                                            f = W(this._cryptData, c),
                                            !(!l && !f))
                                            return [3, 3];
                                        return [4, null === (I = this._storeSDK) || void 0 === I ? void 0 : I.getLocalItem(th)];
                                    case 2:
                                        return g = q(d = V.sent(), c),
                                            p = W(d, c),
                                            d && (g || p) ? (s.push(th),
                                                u.push(d),
                                                this._processCryptData(d, "process local server cert error"),
                                                v = new Date().getTime(),
                                            (h = U(d, c, a)) && (null === (T = this.cookieOperate) || void 0 === T || T.setCookieWithDomain(t_, h)),
                                                m = new Date().getTime(),
                                                this.emit("log", {
                                                    extra: {
                                                        md5: h,
                                                        md5Cookie: (null === (D = this.cookieOperate) || void 0 === D ? void 0 : D.getCookie(t_)) || "",
                                                        duration: m - v
                                                    },
                                                    content: "generate keys info success local",
                                                    level: "info"
                                                }),
                                                this.emit("load", {
                                                    action: "cookie",
                                                    op: "check",
                                                    status: "success",
                                                    ctx: {
                                                        type: "local"
                                                    }
                                                })) : (this.emit("load", {
                                                action: "cookie",
                                                op: "check",
                                                status: "fail",
                                                ctx: {
                                                    type: "local",
                                                    local: d ? "1" : "0",
                                                    localCorrect: g ? "1" : "0"
                                                }
                                            }),
                                                _ = (y = this._cryptObject || {}).ec_csr,
                                                b = y.ec_publicKey,
                                                this.emit("log", {
                                                    content: "generate keys info success fail",
                                                    level: "info",
                                                    extra: {
                                                        csr: _ || "",
                                                        pub: b || "",
                                                        cert: c || ""
                                                    }
                                                })),
                                            [3, 4];
                                    case 3:
                                        this._cryptData && s.push(th),
                                        this._cryptData && u.push(this._cryptData),
                                        (h = U(this._cryptData, c, a)) && (null === (E = this.cookieOperate) || void 0 === E || E.setCookieWithDomain(t_, h)),
                                            this.emit("log", {
                                                extra: {
                                                    md5: h,
                                                    md5Cookie: (null === (O = this.cookieOperate) || void 0 === O ? void 0 : O.getCookie(t_)) || ""
                                                },
                                                content: "generate keys info success init",
                                                level: "info"
                                            }),
                                            this.emit("load", {
                                                action: "cookie",
                                                op: "check",
                                                status: "success",
                                                ctx: {
                                                    type: "init"
                                                }
                                            }),
                                            V.label = 4;
                                    case 4:
                                        return [4, null === (P = this._storeSDK) || void 0 === P ? void 0 : P.setItems(s, u)];
                                    case 5:
                                        V.sent(),
                                        null === (L = this.cookieOperate) || void 0 === L || L.deleteAllCookie("bd_ticket_guard_server_data"),
                                        o && (null === (B = this.cookieOperate) || void 0 === B || B.deleteAllCookie("bd_ticket_guard_web_domain")),
                                            this.emit("log", {
                                                extra: {
                                                    cookie: r,
                                                    setCookie: (null === (R = this.cookieOperate) || void 0 === R ? void 0 : R.getCookie("bd_ticket_guard_server_data")) || "",
                                                    utf8Data: a
                                                },
                                                content: "process server cookie success",
                                                level: "info"
                                            }),
                                            k = (null === (A = this.cookieOperate) || void 0 === A ? void 0 : A.getCookie("bd_ticket_guard_server_data")) ? "0" : "1",
                                            w = new Date().getTime(),
                                            this.emit("execute", {
                                                action: "cookie",
                                                op: "setItem",
                                                status: "success",
                                                duration: w > i ? w - i : 0,
                                                ctx: {
                                                    type: "server",
                                                    deleteStatus: k
                                                }
                                            });
                                        try {
                                            null === (N = this.cookieOperate) || void 0 === N || N.setCookieWithDomain("__security_server_data_status", "1"),
                                                this.emit("execute", {
                                                    action: "cookie",
                                                    op: "process",
                                                    status: "success"
                                                })
                                        } catch (e) {
                                            this.emit("execute", {
                                                action: "cookie",
                                                op: "process",
                                                status: "fail"
                                            }),
                                                this.emit("log", {
                                                    content: "set process server cookie error",
                                                    level: "error"
                                                })
                                        }
                                        return this._hasProcessServerData = !0,
                                            [3, 7];
                                    case 6:
                                        !r && o && (null === (M = this.cookieOperate) || void 0 === M || M.deleteAllCookie("bd_ticket_guard_web_domain"),
                                            this.emit("log", {
                                                content: "process_web_domain",
                                                level: "info",
                                                extra: {
                                                    cookie: (null == document ? void 0 : document.cookie) || "",
                                                    domain: (null === (H = this.cookieOperate) || void 0 === H ? void 0 : H.getCookie("bd_ticket_guard_web_domain")) || ""
                                                }
                                            })),
                                            V.label = 7;
                                    case 7:
                                        return [2, !0];
                                    case 8:
                                        return S = V.sent(),
                                            this.emit("log", {
                                                extra: {
                                                    cookie: null == document ? void 0 : document.cookie
                                                },
                                                content: "Process server Cookie Error",
                                                level: "error"
                                            }),
                                            this.reportError(S, "process server cookie Error"),
                                            this.emit("execute", {
                                                action: "cookie",
                                                op: "setItem",
                                                status: "fail",
                                                ctx: {
                                                    type: "server"
                                                }
                                            }),
                                            [3, 9];
                                    case 9:
                                        return [2, !1]
                                }
                            })
                        })
                    }
                    ,
                    n._initCert = function() {
                        return tp(n, void 0, void 0, function() {
                            var e, t, n, r, o, i, a, c, s, u, l;
                            return tv(this, function(f) {
                                switch (f.label) {
                                    case 0:
                                        return f.trys.push([0, 4, , 5]),
                                            t = (e = this._getCertificatePem()).ec_privateKey,
                                            n = e.ec_publicKey,
                                            r = e.ec_csr,
                                            [4, null === (a = this._storeSDK) || void 0 === a ? void 0 : a.getLocalItem(th)];
                                    case 1:
                                        if ((o = f.sent()) && "string" == typeof o)
                                            return this._cryptData = o,
                                                this._cryptObject = JSON.parse(o),
                                                this.cryptoSDK = new tu({
                                                    privateKey: null === (c = this._cryptObject) || void 0 === c ? void 0 : c.ec_privateKey,
                                                    publicKey: null === (s = this._cryptObject) || void 0 === s ? void 0 : s.ec_publicKey
                                                }),
                                                this._initData = {
                                                    cryptCacheKey: o
                                                },
                                                this.emit("ready", {
                                                    action: "keys",
                                                    op: "init",
                                                    status: "fail",
                                                    ctx: {
                                                        type: "check"
                                                    }
                                                }),
                                                [2, !0];
                                        return this._cryptObject = {
                                            ec_privateKey: t,
                                            ec_publicKey: n,
                                            ec_csr: r
                                        },
                                            this._cryptData = JSON.stringify(this._cryptObject),
                                            [4, null === (u = this._storeSDK) || void 0 === u ? void 0 : u.setLocalItem(th, this._cryptData)];
                                    case 2:
                                        return f.sent(),
                                            [4, null === (l = this._storeSDK) || void 0 === l ? void 0 : l.set(th, this._cryptData)];
                                    case 3:
                                        return f.sent(),
                                            this._initData = {
                                                cryptCacheKey: this._cryptData
                                            },
                                            [2, !0];
                                    case 4:
                                        return i = f.sent(),
                                            this.emit("load", {
                                                action: "keys",
                                                op: "init",
                                                status: "fail"
                                            }),
                                            this.reportError(i, "init_cert_error"),
                                            [2, !1];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    n.getCertificate = function(e) {
                        return tp(n, void 0, void 0, function() {
                            var t, n, r, o, i, a;
                            return tv(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        t = e.certType,
                                            n = e.scene,
                                            c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 8, , 9]),
                                            [4, this._checkCryptKeys()];
                                    case 2:
                                        if (c.sent(),
                                        "cookie" !== t)
                                            return [3, 5];
                                        return [4, this._initCookie()];
                                    case 3:
                                        return c.sent(),
                                            [4, this._processServerCookie(n)];
                                    case 4:
                                        c.sent(),
                                            c.label = 5;
                                    case 5:
                                        return [4, null === (i = this.setSignValueScheduler) || void 0 === i ? void 0 : i.wait()];
                                    case 6:
                                        return c.sent(),
                                            [4, null === (a = this._storeSDK) || void 0 === a ? void 0 : a.get(tm)];
                                    case 7:
                                        if (r = c.sent())
                                            return this.emit("log", {
                                                extra: {
                                                    cert: r || ""
                                                },
                                                content: "Get Cert Success",
                                                level: "info"
                                            }),
                                                [2, L(r)];
                                        return this.emit("log", {
                                            extra: {
                                                cert: r || ""
                                            },
                                            content: "Get Cert Fail",
                                            level: "info"
                                        }),
                                            [2, !1];
                                    case 8:
                                        return o = c.sent(),
                                            this.reportError(o, "get cert fail"),
                                            [3, 9];
                                    case 9:
                                        return [2, !1]
                                }
                            })
                        })
                    }
                    ,
                    n.getPubKey = function() {
                        return tp(n, void 0, void 0, function() {
                            var e, t;
                            return tv(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]),
                                            [4, this._checkCryptKeys()];
                                    case 1:
                                        if (n.sent(),
                                            e = (this._cryptObject || {}).ec_privateKey)
                                            return [2, M(e)];
                                        return [3, 3];
                                    case 2:
                                        return t = n.sent(),
                                            this.reportError(t, "get pubkey error"),
                                            [3, 3];
                                    case 3:
                                        return [2, ""]
                                }
                            })
                        })
                    }
                    ,
                    n.getCertSignRequest = function() {
                        return tp(n, void 0, void 0, function() {
                            var e, t;
                            return tv(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]),
                                            [4, this._checkCryptKeys()];
                                    case 1:
                                        if (n.sent(),
                                            e = (this._cryptObject || {}).ec_csr)
                                            return [2, L(e)];
                                        return [2, ""];
                                    case 2:
                                        return t = n.sent(),
                                            this.reportError(t, "get csr error"),
                                            [3, 3];
                                    case 3:
                                        return [2, ""]
                                }
                            })
                        })
                    }
                    ,
                    n._signValueWithIframe = function(e, t, r, o) {
                        return tp(n, void 0, void 0, function() {
                            var n, i, a, c, s, u, l, f, d, g, p, v, h, m, y;
                            return tv(this, function(_) {
                                switch (_.label) {
                                    case 0:
                                        return _.trys.push([0, 12, , 13]),
                                            i = (n = JSON.parse(e) || {}).client_cert,
                                            a = n.ts_sign,
                                            n.ticket,
                                            [4, null === (d = this._storeSDK) || void 0 === d ? void 0 : d.get("".concat(ty, "/").concat(t))];
                                    case 1:
                                        if (c = _.sent(),
                                            s = new Date().toString(),
                                            this.emit("log", {
                                                level: "info",
                                                content: "[store] store response server_data with storeSDK begin",
                                                extra: tg({
                                                    client_cert: i,
                                                    ts_sign: a,
                                                    scene: t,
                                                    namespace: r || "",
                                                    disableStorageSignData: this._disableStorageSignData ? "1" : "0",
                                                    this_sign_data: this._signData || "",
                                                    current_local_server_data: c || "",
                                                    store_time: s
                                                }, o || {})
                                            }),
                                            this._disableStorageSignData)
                                            return [3, 4];
                                        return [4, null === (g = this._storeSDK) || void 0 === g ? void 0 : g.set("".concat(ty, "/").concat(t), e, !0)];
                                    case 2:
                                        return _.sent(),
                                            [4, null === (p = this._storeSDK) || void 0 === p ? void 0 : p.set("".concat(ty, "/").concat(t, "/time"), s, !0)];
                                    case 3:
                                        _.sent(),
                                            _.label = 4;
                                    case 4:
                                        return this._signData = e,
                                            [4, null === (v = this._storeSDK) || void 0 === v ? void 0 : v.get("".concat(ty, "/").concat(t))];
                                    case 5:
                                        if (u = _.sent(),
                                            this.emit("log", {
                                                level: "info",
                                                content: "[store] store response server_data with storeSDK end",
                                                extra: tg({
                                                    client_cert: i,
                                                    ts_sign: a,
                                                    scene: t,
                                                    namespace: r || "",
                                                    disableStorageSignData: this._disableStorageSignData ? "1" : "0",
                                                    this_sign_data: this._signData || "",
                                                    current_local_server_data: u || "",
                                                    store_time: s
                                                }, o || {})
                                            }),
                                            !r)
                                            return [3, 8];
                                        if (!i)
                                            return [3, 7];
                                        return [4, null === (h = this._storeSDK) || void 0 === h ? void 0 : h.set("".concat(tm), i, !0)];
                                    case 6:
                                        _.sent(),
                                            _.label = 7;
                                    case 7:
                                        return [3, 11];
                                    case 8:
                                        if (!this._storageNamespace)
                                            return [3, 11];
                                        if (!i)
                                            return [3, 10];
                                        return [4, null === (m = this._storeSDK) || void 0 === m ? void 0 : m.set("".concat(tm), i, !0)];
                                    case 9:
                                        _.sent(),
                                            _.label = 10;
                                    case 10:
                                        _.label = 11;
                                    case 11:
                                        return "web_protect" === t && (l = U(this._cryptData, i, e),
                                        null === (y = this.cookieOperate) || void 0 === y || y.setCookieWithDomain(t_, l)),
                                            [2, !0];
                                    case 12:
                                        return f = _.sent(),
                                            this.reportError(f, "sign value error"),
                                            [2, !1];
                                    case 13:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    n.setSignValue = function(e) {
                        var t, r, o = e || {}, i = o.sign, a = o.scene, c = o.namespace, s = o.logCtx;
                        try {
                            if ("string" == typeof i)
                                r = j(i);
                            else {
                                if ("object" != typeof i)
                                    return !1;
                                r = JSON.stringify(i)
                            }
                            return null === (t = n.setSignValueScheduler) || void 0 === t || t.provider(function() {
                                return n._signValueWithIframe(r, a, c, s)
                            }),
                                !0
                        } catch (e) {
                            return n.reportError(e, "set signValue Error"),
                                !1
                        }
                    }
                    ,
                    n.setSignValueAsync = function(e) {
                        return tp(n, void 0, void 0, function() {
                            var t, n, r, o, i, a, c;
                            return tv(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        n = (t = e || {}).sign,
                                            r = t.scene,
                                            o = t.namespace,
                                            i = t.logCtx,
                                            s.label = 1;
                                    case 1:
                                        if (s.trys.push([1, 3, , 4]),
                                        "string" == typeof n)
                                            a = j(n);
                                        else {
                                            if ("object" != typeof n)
                                                return [2, !1];
                                            a = JSON.stringify(n)
                                        }
                                        return [4, this._signValueWithIframe(a, r, o, i)];
                                    case 2:
                                        return s.sent(),
                                            [2, !0];
                                    case 3:
                                        return c = s.sent(),
                                            this.reportError(c, "set signValue Error"),
                                            [2, !1];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    n.clearSignData = function(e) {
                        return tp(n, void 0, void 0, function() {
                            var t, n;
                            return tv(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 4, , 5]),
                                            [4, null === (t = this._storeSDK) || void 0 === t ? void 0 : t.delete("".concat(ty, "/").concat(e))];
                                    case 1:
                                        if (r.sent(),
                                            this._signData = "",
                                            !this._storageNamespace)
                                            return [3, 3];
                                        return [4, null === (n = this._storeSDK) || void 0 === n ? void 0 : n.delete("".concat(tm))];
                                    case 2:
                                        r.sent(),
                                            r.label = 3;
                                    case 3:
                                        return [2, !0];
                                    case 4:
                                        return r.sent(),
                                            [2, !1];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    n.sign = function(e) {
                        return tp(n, void 0, void 0, function() {
                            var t, n, r, o, i, a, c, s, u, l, f, d, g, p, v, h;
                            return tv(this, function(m) {
                                switch (m.label) {
                                    case 0:
                                        t = e.sign_data,
                                            n = e.req_content,
                                            r = e.timestamp,
                                            i = void 0 === (o = e.certType) ? "header" : o,
                                            a = e.scene,
                                            m.label = 1;
                                    case 1:
                                        return m.trys.push([1, 11, , 12]),
                                            [4, this._checkCryptKeys()];
                                    case 2:
                                        if (m.sent(),
                                        "cookie" !== i)
                                            return [3, 5];
                                        return [4, this._initCookie()];
                                    case 3:
                                        return m.sent(),
                                            [4, this._processServerCookie(a || "")];
                                    case 4:
                                        m.sent(),
                                            m.label = 5;
                                    case 5:
                                        if ("header" !== i)
                                            return [3, 7];
                                        return [4, null === (p = this.setSignValueScheduler) || void 0 === p ? void 0 : p.wait()];
                                    case 6:
                                        m.sent(),
                                            m.label = 7;
                                    case 7:
                                        if (c = void 0,
                                            this._disableStorageSignData)
                                            return [3, 9];
                                        return [4, null === (v = this._storeSDK) || void 0 === v ? void 0 : v.get("".concat(ty, "/").concat(a))];
                                    case 8:
                                        return c = m.sent(),
                                            [3, 10];
                                    case 9:
                                        c = this._signData,
                                            m.label = 10;
                                    case 10:
                                        if (u = (s = JSON.parse(c || "{}")).ticket,
                                            l = s.ts_sign,
                                        !t && !u)
                                            return this.emit("log", {
                                                extra: {
                                                    content: "sign_data and ticket is null"
                                                },
                                                content: "sign data fail",
                                                level: "info"
                                            }),
                                                [2, ""];
                                        return f = R((null === (h = this.cryptoSDK) || void 0 === h ? void 0 : h.sign(t || u)) || ""),
                                            d = {
                                                ts_sign: l,
                                                req_content: n || t || u,
                                                req_sign: f,
                                                timestamp: r || Math.floor(new Date().getTime() / 1e3)
                                            },
                                            this.emit("log", {
                                                extra: {
                                                    content: JSON.stringify(d)
                                                },
                                                content: "sign data success",
                                                level: "info"
                                            }),
                                            [2, L(JSON.stringify(d) || "")];
                                    case 11:
                                        return g = m.sent(),
                                            this.emit("log", {
                                                extra: {
                                                    sign_data: t || "",
                                                    req_content: n || "",
                                                    certType: i || "",
                                                    scene: a || ""
                                                },
                                                content: "sign data is error",
                                                level: "error"
                                            }),
                                            this.reportError(g, "sign error"),
                                            [3, 12];
                                    case 12:
                                        return [2, ""]
                                }
                            })
                        })
                    }
                    ,
                    n.pureSign = function(e) {
                        var t;
                        try {
                            var r = null === (t = n.cryptoSDK) || void 0 === t ? void 0 : t.sign(e);
                            return R(r || "")
                        } catch (e) {
                            return n.reportError(e, "pure sign fail"),
                                ""
                        }
                    }
                    ,
                    n.getTSSign = function(e) {
                        return tp(n, void 0, void 0, function() {
                            var t, n, r, o, i, a, c, s;
                            return tv(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        n = void 0 === (t = e.certType) ? "header" : t,
                                            r = e.scene,
                                            u.label = 1;
                                    case 1:
                                        return u.trys.push([1, 11, , 12]),
                                            [4, this._checkCryptKeys()];
                                    case 2:
                                        if (u.sent(),
                                        "cookie" !== n)
                                            return [3, 5];
                                        return [4, this._initCookie()];
                                    case 3:
                                        return u.sent(),
                                            [4, this._processServerCookie(r)];
                                    case 4:
                                        u.sent(),
                                            u.label = 5;
                                    case 5:
                                        if ("header" !== n)
                                            return [3, 7];
                                        return [4, null === (c = this.setSignValueScheduler) || void 0 === c ? void 0 : c.wait()];
                                    case 6:
                                        u.sent(),
                                            u.label = 7;
                                    case 7:
                                        if (o = void 0,
                                            this._disableStorageSignData)
                                            return [3, 9];
                                        return [4, null === (s = this._storeSDK) || void 0 === s ? void 0 : s.get("".concat(ty, "/").concat(r))];
                                    case 8:
                                        if (!(o = u.sent()))
                                            return this.emit("log", {
                                                extra: {
                                                    content: o || ""
                                                },
                                                content: "get tssign fail",
                                                level: "info"
                                            }),
                                                [2, !1];
                                        return [3, 10];
                                    case 9:
                                        o = this._signData,
                                            u.label = 10;
                                    case 10:
                                        return i = JSON.parse(o || "{}").ts_sign,
                                            this.emit("log", {
                                                extra: {
                                                    content: i || ""
                                                },
                                                content: "get tssign success",
                                                level: "info"
                                            }),
                                            [2, i];
                                    case 11:
                                        return a = u.sent(),
                                            this.reportError(a, "get ts sign Error"),
                                            [3, 12];
                                    case 12:
                                        return [2, !1]
                                }
                            })
                        })
                    }
                    ,
                    n.getTicket = function(e) {
                        return tp(n, void 0, void 0, function() {
                            var t, n, r, o, i, a, c;
                            return tv(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        t = e.certType,
                                            n = e.scene,
                                            s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 11, , 12]),
                                            [4, this._checkCryptKeys()];
                                    case 2:
                                        if (s.sent(),
                                        "cookie" !== t)
                                            return [3, 5];
                                        return [4, this._initCookie()];
                                    case 3:
                                        return s.sent(),
                                            [4, this._processServerCookie(n)];
                                    case 4:
                                        return s.sent(),
                                            [3, 7];
                                    case 5:
                                        if ("header" !== t)
                                            return [3, 7];
                                        return [4, null === (a = this.setSignValueScheduler) || void 0 === a ? void 0 : a.wait()];
                                    case 6:
                                        s.sent(),
                                            s.label = 7;
                                    case 7:
                                        if (r = void 0,
                                            this._disableStorageSignData)
                                            return [3, 9];
                                        return [4, null === (c = this._storeSDK) || void 0 === c ? void 0 : c.get("".concat(ty, "/").concat(n))];
                                    case 8:
                                        if (!(r = s.sent()))
                                            return this.emit("log", {
                                                content: "Get Ticket Fail",
                                                level: "error"
                                            }),
                                                [2, !1];
                                        return [3, 10];
                                    case 9:
                                        r = this._signData,
                                            s.label = 10;
                                    case 10:
                                        return o = (JSON.parse(r || "{}") || {}).ticket,
                                            this.emit("log", {
                                                extra: {
                                                    storage_sign_data: r || "",
                                                    ticket: o || ""
                                                },
                                                content: "Get Ticket Success",
                                                level: "info"
                                            }),
                                            [2, o];
                                    case 11:
                                        return i = s.sent(),
                                            this.reportError(i, "Get Ticket Error"),
                                            [2, !1];
                                    case 12:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    n._getCertificatePem = function() {
                        var e, t, r = new Date().getTime();
                        n.cryptoSDK = new tu({});
                        var o = (null === (e = n.cryptoSDK) || void 0 === e ? void 0 : e.getKeys()) || {}
                            , i = o.publicKey
                            , a = void 0 === i ? "" : i
                            , c = o.privateKey
                            , s = void 0 === c ? "" : c
                            , u = null === (t = n.cryptoSDK) || void 0 === t ? void 0 : t.getCSR()
                            , l = new Date().getTime();
                        return n.emit("load", {
                            action: "keys",
                            op: "init",
                            duration: l > r ? l - r : 0,
                            status: "success",
                            ctx: {
                                pri: s ? "1" : "0",
                                pub: a ? "1" : "0"
                            }
                        }),
                            {
                                ec_publicKey: a,
                                ec_privateKey: s,
                                ec_csr: u
                            }
                    }
                    ,
                    n._checkCert = function(e) {
                        try {
                            var t = (n._cryptObject || {}).ec_publicKey;
                            if (!e || !t)
                                return !0;
                            var r = A(e);
                            if (r && t !== r)
                                return n.emit("log", {
                                    extra: {
                                        message: "Cert Fail Delete",
                                        localCert: e || "",
                                        ec_publicKey: t || ""
                                    },
                                    content: "Cert Fail Delete",
                                    level: "error"
                                }),
                                    n.emit("ready", {
                                        action: "cert",
                                        op: "check",
                                        status: "fail"
                                    }),
                                    !1;
                            n.emit("ready", {
                                action: "cert",
                                op: "check",
                                status: "success"
                            })
                        } catch (e) {
                            n.emit("ready", {
                                action: "cert",
                                op: "check",
                                status: "fail"
                            }),
                                n.reportError(e, "Check Cert fail")
                        }
                        return !0
                    }
                    ,
                    n.refresh = function() {
                        return tp(n, void 0, void 0, function() {
                            var e, t;
                            return tv(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this._cryptData = void 0,
                                            this._cryptObject = void 0,
                                            this._signData = void 0,
                                            [4, null === (e = this._storeSDK) || void 0 === e ? void 0 : e.delete(th)];
                                    case 1:
                                        return n.sent(),
                                            [4, null === (t = this._storeSDK) || void 0 === t ? void 0 : t.delete(tm)];
                                    case 2:
                                        return n.sent(),
                                            this._storeSDK = void 0,
                                            [2, this.start()]
                                }
                            })
                        })
                    }
                    ,
                    n.reportError = function(e, t, r, o, i) {
                        try {
                            if (n.emit("error", {
                                error: e,
                                name: t
                            }),
                            r && o) {
                                var a = Array.isArray(i) && i.length > 0 && i[0];
                                if ("string" == typeof a)
                                    n.emit("log", {
                                        content: "report error",
                                        extra: {
                                            key: a || ""
                                        },
                                        level: "error"
                                    });
                                else if (a && Array.isArray(a)) {
                                    var c = {};
                                    a.forEach(function(e) {
                                        c["".concat(e.replace(/\//g, "_"))] = "1"
                                    }),
                                        n.emit("log", {
                                            content: "report error",
                                            extra: tg({}, c || {}),
                                            level: "error"
                                        })
                                }
                            }
                        } catch (e) {
                            n.emit("error", {
                                error: e,
                                name: "report error"
                            })
                        }
                    }
                    ,
                    n.getKeysInfo = function(e) {
                        return tp(n, void 0, void 0, function() {
                            var t, n, r, o, i, a, c, s, u, l, f, d, g, p, v, h, m, y;
                            return tv(this, function(_) {
                                switch (_.label) {
                                    case 0:
                                        t = e.certType,
                                            n = e.scene,
                                            _.label = 1;
                                    case 1:
                                        return _.trys.push([1, 9, , 10]),
                                            [4, this._checkCryptKeys()];
                                    case 2:
                                        if (_.sent(),
                                        "cookie" !== t)
                                            return [3, 5];
                                        return [4, this._initCookie()];
                                    case 3:
                                        return _.sent(),
                                            [4, this._processServerCookie(n)];
                                    case 4:
                                        return _.sent(),
                                            [3, 7];
                                    case 5:
                                        if ("header" !== t)
                                            return [3, 7];
                                        return [4, null === (m = this.setSignValueScheduler) || void 0 === m ? void 0 : m.wait()];
                                    case 6:
                                        _.sent(),
                                            _.label = 7;
                                    case 7:
                                        return r = [th, tm, "".concat(ty, "/").concat(n)],
                                            [4, null === (y = this._storeSDK) || void 0 === y ? void 0 : y.getItems(r)];
                                    case 8:
                                        if (!(o = _.sent()))
                                            return this.emit("log", {
                                                content: "Get Keys Info Fail",
                                                level: "error"
                                            }),
                                                [2, {}];
                                        return i = o[th],
                                            a = o[tm],
                                            c = o["".concat(ty, "/").concat(n)],
                                            u = (s = JSON.parse(i || "{}") || {}).ec_privateKey,
                                            l = s.ec_publicKey,
                                            f = s.ec_csr,
                                            g = (d = JSON.parse(c || "{}") || {}).ticket,
                                            p = d.ts_sign,
                                            v = d.client_cert,
                                            this.emit("log", {
                                                extra: {
                                                    server_data: c || "",
                                                    cert_data: a || "",
                                                    csr: f || ""
                                                },
                                                content: "Get Keys Info Success",
                                                level: "info"
                                            }),
                                            [2, {
                                                crypt: {
                                                    ec_privateKey: u,
                                                    ec_publicKey: l
                                                },
                                                cert: a,
                                                sign: {
                                                    ticket: g,
                                                    ts_sign: p,
                                                    client_cert: v
                                                },
                                                b64Cert: L(a || ""),
                                                b64PubKey: j(l || ""),
                                                b64Csr: L(f || "")
                                            }];
                                    case 9:
                                        return h = _.sent(),
                                            this.reportError(h, "Get Ticket Fail"),
                                            [3, 10];
                                    case 10:
                                        return [2, {}]
                                }
                            })
                        })
                    }
                    ,
                    n.getKeysInfoWithOrigin = function(e) {
                        return tp(n, void 0, void 0, function() {
                            var t, n, r, o, i, a, c, s, u, l, f, d, g, p, v, h, m, y, _, b, k, w, S, C, K, x, I, T, D, E;
                            return tv(this, function(O) {
                                switch (O.label) {
                                    case 0:
                                        t = e.certType,
                                            n = e.scene,
                                            O.label = 1;
                                    case 1:
                                        return O.trys.push([1, 9, , 10]),
                                            [4, this._checkCryptKeys()];
                                    case 2:
                                        if (O.sent(),
                                        "cookie" !== t)
                                            return [3, 5];
                                        return [4, this._initCookie()];
                                    case 3:
                                        return O.sent(),
                                            [4, this._processServerCookie(n)];
                                    case 4:
                                        return O.sent(),
                                            [3, 7];
                                    case 5:
                                        if ("header" !== t)
                                            return [3, 7];
                                        return [4, null === (D = this.setSignValueScheduler) || void 0 === D ? void 0 : D.wait()];
                                    case 6:
                                        O.sent(),
                                            O.label = 7;
                                    case 7:
                                        return r = [th, tm, "".concat(ty, "/").concat(n), "".concat(ty, "/").concat(n, "/time")],
                                            [4, null === (E = this._storeSDK) || void 0 === E ? void 0 : E.getItemsWithOrigin(r)];
                                    case 8:
                                        if (!(o = O.sent()))
                                            return this.emit("log", {
                                                content: "Get Keys Info Fail",
                                                level: "error"
                                            }),
                                                [2, {}];
                                        return c = void 0 === (a = (i = o || {}).data) ? {} : a,
                                            u = void 0 === (s = i.from) ? "0" : s,
                                            l = Object.values(c),
                                            f = c[th],
                                            d = c[tm],
                                            g = c["".concat(ty, "/").concat(n)],
                                            p = c["".concat(ty, "/").concat(n, "/time")],
                                            y = (m = JSON.parse((h = void 0 === (v = (f || {}).value) ? "" : v) || "{}") || {}).ec_privateKey,
                                            _ = m.ec_publicKey,
                                            b = m.ec_csr,
                                            k = (null == g ? void 0 : g.value) || "",
                                            w = (null == d ? void 0 : d.value) || "",
                                            C = (S = JSON.parse(k || "{}") || {}).ticket,
                                            K = S.ts_sign,
                                            x = S.client_cert,
                                            I = M(y) || "",
                                            this.emit("log", {
                                                extra: {
                                                    server_data: k || "",
                                                    cert_data: w || "",
                                                    b64PubKey: I
                                                },
                                                content: "Get Keys Info Success",
                                                level: "info"
                                            }),
                                            [2, {
                                                crypt: {
                                                    ec_privateKey: y,
                                                    ec_publicKey: _
                                                },
                                                cryptData: h,
                                                cert: w,
                                                sign: {
                                                    ticket: C,
                                                    ts_sign: K,
                                                    client_cert: x
                                                },
                                                store_time: (null == p ? void 0 : p.value) || "",
                                                b64Cert: L(w || ""),
                                                b64PubKey: I,
                                                b64Csr: L(b || ""),
                                                serverData: k,
                                                dataFrom: u,
                                                items: l
                                            }];
                                    case 9:
                                        return T = O.sent(),
                                            this.reportError(T, "Get Ticket catch"),
                                            [3, 10];
                                    case 10:
                                        return [2, {}]
                                }
                            })
                        })
                    }
                    ,
                    n.signWithKeysInfo = function(e) {
                        return tp(n, void 0, void 0, function() {
                            var t, n, r, o, i, a, c, s, u, l, f, d, g, p, v, h, m, y, _, b, k;
                            return tv(this, function(w) {
                                switch (w.label) {
                                    case 0:
                                        t = e.sign_data,
                                            n = e.req_content,
                                            r = e.timestamp,
                                            o = e.certType,
                                            i = e.scene,
                                            a = e.keysInfo,
                                            w.label = 1;
                                    case 1:
                                        return w.trys.push([1, 8, , 9]),
                                            [4, this._checkCryptKeys()];
                                    case 2:
                                        if (w.sent(),
                                        "cookie" !== o)
                                            return [3, 5];
                                        return [4, this._initCookie()];
                                    case 3:
                                        return w.sent(),
                                            [4, this._processServerCookie(i || "")];
                                    case 4:
                                        w.sent(),
                                            w.label = 5;
                                    case 5:
                                        if ("header" !== o)
                                            return [3, 7];
                                        return [4, null === (y = this.setSignValueScheduler) || void 0 === y ? void 0 : y.wait()];
                                    case 6:
                                        w.sent(),
                                            w.label = 7;
                                    case 7:
                                        if (c = a.sign,
                                            s = a.crypt,
                                            !c)
                                            return this.emit("log", {
                                                content: "sign data fail",
                                                level: "info",
                                                extra: {
                                                    content: "sign data is null"
                                                }
                                            }),
                                                [2, ""];
                                        if (l = (u = c || {}).ticket,
                                            f = u.ts_sign,
                                        !t && !l)
                                            return this.emit("log", {
                                                content: "sign data fail",
                                                level: "info",
                                                extra: {
                                                    content: "sign data and ticket is null"
                                                }
                                            }),
                                                [2, ""];
                                        return g = (d = s || {}).ec_privateKey,
                                            p = d.ec_publicKey,
                                            this.cryptoSDK = new tu({
                                                privateKey: g,
                                                publicKey: p
                                            }),
                                            v = R((null === (_ = this.cryptoSDK) || void 0 === _ ? void 0 : _.sign(t || l)) || ""),
                                            h = {
                                                ts_sign: f,
                                                req_content: n || t || l,
                                                req_sign: v,
                                                timestamp: r || Math.floor(new Date().getTime() / 1e3)
                                            },
                                            this.emit("log", {
                                                extra: {
                                                    content: JSON.stringify(h)
                                                },
                                                content: "sign data success",
                                                level: "info"
                                            }),
                                            [2, L(JSON.stringify(h) || "")];
                                    case 8:
                                        return m = w.sent(),
                                            this.emit("log", {
                                                extra: {
                                                    sign_data: t || "",
                                                    req_content: n || "",
                                                    certType: o || "",
                                                    scene: i || "",
                                                    csr: (null === (b = null == a ? void 0 : a.crypt) || void 0 === b ? void 0 : b.ec_csr) || "",
                                                    cert: a.cert || "",
                                                    sign: (null === (k = a.sign) || void 0 === k ? void 0 : k.ticket) || ""
                                                },
                                                content: "sign data with keys Info is error",
                                                level: "error"
                                            }),
                                            this.reportError(m, "sign error"),
                                            [3, 9];
                                    case 9:
                                        return [2, ""]
                                }
                            })
                        })
                    }
                    ,
                    n.setKeysAndValues = function(e, t) {
                        var r, o = "", i = "", a = "";
                        null === (r = n._storeSDK) || void 0 === r || r.setItems(e, t, 2).then(function(r) {
                            e.forEach(function(e, n) {
                                var r = t[n];
                                e === th ? o = r : e === tm ? i = r : e === "".concat(ty, "/web_protect") && (a = r)
                            });
                            var c, s, u = U(o, i, a);
                            u && (null === (c = n.cookieOperate) || void 0 === c || c.setCookieWithDomain(t_, u)),
                                n.emit("log", {
                                    extra: {
                                        md5: u,
                                        md5Cookie: (null === (s = n.cookieOperate) || void 0 === s ? void 0 : s.getCookie(t_)) || ""
                                    },
                                    content: "generate crypt key success sign success",
                                    level: "info"
                                })
                        }).catch(function(e) {
                            n.emit("error", {
                                error: e,
                                name: "update keys when sign error"
                            })
                        })
                    }
                    ,
                    n.b642str = function(e) {
                        return j(e)
                    }
                    ,
                    n.getIframeStatus = function() {
                        var e;
                        return null === (e = n._storeSDK) || void 0 === e ? void 0 : e.getIframeStatus()
                    }
                    ,
                    n.getCookieCryptStatus = function() {
                        var e;
                        return null !== (e = n.cookieOperate) && void 0 !== e && !!e.getCookie(t_)
                    }
                    ,
                    n.getStorageStatus = function() {
                        var e;
                        return null === (e = n._storeSDK) || void 0 === e ? void 0 : e.getStorageStatus()
                    }
                    ,
                    n.checkSignData = function(e) {
                        return tp(n, void 0, void 0, function() {
                            var t, n, r, o, i, a, c, s, u, l, f;
                            return tv(this, function(d) {
                                switch (d.label) {
                                    case 0:
                                        if (d.trys.push([0, 2, , 3]),
                                            !(t = (null === (l = this.cookieOperate) || void 0 === l ? void 0 : l.getCookie(t_)) || ""))
                                            return [2, {
                                                match_md5_local: "-99",
                                                match_md5_iframe: "-99"
                                            }];
                                        return r = (n = e || {}).cryptData,
                                            o = n.cert,
                                            i = n.serverData,
                                            n.dataFrom,
                                            a = H(t, r, o, i),
                                            c = this._getInitKeys(),
                                            [4, null === (f = this._storeSDK) || void 0 === f ? void 0 : f.getLocalItems(c)];
                                    case 1:
                                        return s = d.sent(),
                                            [2, {
                                                match_md5_local: H(t, null == s ? void 0 : s[th], null == s ? void 0 : s[tm], null == s ? void 0 : s["".concat(ty, "/web_protect")]) ? "1" : "-99",
                                                match_md5_iframe: a ? "1" : "-99"
                                            }];
                                    case 2:
                                        return u = d.sent(),
                                            this.emit("error", {
                                                error: u,
                                                name: "check sign data error"
                                            }),
                                            [3, 3];
                                    case 3:
                                        return [2, {
                                            match_md5_local: "-99",
                                            match_md5_iframe: "-99"
                                        }]
                                }
                            })
                        })
                    }
                    ,
                    n.isTopBrowser = function() {
                        return $()
                    }
                    ,
                    n.initConfig = t,
                    n.setSignValueScheduler = new F,
                    n._initData = {},
                    n._hasProcessServerData = !1,
                    n.initMatch = !1,
                    n
            }
            return td(t, e),
                t
        }(z)
            , tk = n(21231)
            , tw = function() {
            function e(t) {
                var n, r = this;
                if (this.setContext = function(e) {
                    for (var t in e)
                        r.accountApiSlardar("context.set", t, e[t])
                }
                    ,
                    this.setWebId = function(t) {
                        var n;
                        null === (n = null == e ? void 0 : e._instance) || void 0 === n || n.accountApiSlardar("config", {
                            userId: t
                        })
                    }
                    ,
                    this.setEnv = function(t) {
                        var n;
                        null === (n = null == e ? void 0 : e._instance) || void 0 === n || n.accountApiSlardar("config", {
                            env: t
                        })
                    }
                    ,
                    !e._instance) {
                    this.accountApiSlardar = (0,
                        tk.createBrowserClient)(),
                        this.accountApiSlardar("init", {
                            bid: "uc_secure_sdk",
                            pid: null === (n = null == window ? void 0 : window.location) || void 0 === n ? void 0 : n.host,
                            env: "online",
                            plugins: {
                                tti: !1,
                                fmp: !1,
                                performance: !1,
                                resource: !1,
                                resourceError: !1,
                                pageview: !1,
                                jsError: {
                                    onerror: !1,
                                    onunhandledrejection: !1,
                                    dedupe: !1,
                                    captureGlobalAsync: !1
                                },
                                breadcrumb: {
                                    dom: !1
                                },
                                ajax: {
                                    autoWrap: !1,
                                    ignoreUrls: [/^((?!\/passport\/).)*$/],
                                    collectBodyOnError: !0
                                },
                                fetch: {
                                    autoWrap: !1,
                                    ignoreUrls: [/^((?!\/passport\/).)*$/],
                                    collectBodyOnError: !0
                                },
                                blankScreen: {
                                    autoDetect: !1,
                                    screenshot: !1
                                }
                            }
                        }),
                        this.accountApiSlardar("start");
                    var o = this.checkEnv();
                    this.accountApiSlardar("context.set", "container", o),
                        this.accountApiSlardar("context.set", "sdkversion", t),
                        e._instance = this
                }
                return e._instance
            }
            return e.getSlardar = function() {
                return this._instance
            }
                ,
                e.clearSlardar = function() {
                    this._instance = null
                }
                ,
                e.prototype.dot = function(t) {
                    var n;
                    try {
                        null === (n = null == e ? void 0 : e._instance) || void 0 === n || n.accountApiSlardar("sendEvent", t)
                    } catch (e) {}
                }
                ,
                e.prototype.log = function(t) {
                    var n;
                    try {
                        null === (n = null == e ? void 0 : e._instance) || void 0 === n || n.accountApiSlardar("sendLog", t)
                    } catch (e) {}
                }
                ,
                e.prototype.throw = function(t) {
                    var n;
                    try {
                        var r = t.err
                            , o = t.extra;
                        null === (n = null == e ? void 0 : e._instance) || void 0 === n || n.accountApiSlardar("captureException", r, o)
                    } catch (e) {}
                }
                ,
                e.prototype.checkEnv = function() {
                    var e = null == window ? void 0 : window.navigator.userAgent;
                    return /TTElectron/.test(e) ? "electron" : "web"
                }
                ,
                e.prototype.logRequestResponse = function(e, t) {
                    var n;
                    try {
                        try {
                            y(null === (n = null == e ? void 0 : e.config) || void 0 === n ? void 0 : n.url)
                        } catch (e) {}
                    } catch (e) {}
                }
                ,
                e
        }()
            , tS = function(e) {
            return decodeURIComponent(document.cookie.replace(RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
        }
            , tC = function() {
            var e = null == window ? void 0 : window.navigator.userAgent;
            return /TTElectron/.test(e) ? "electron" : "web"
        }
            , tK = 18e6
            , tx = {}
            , tI = !1
            , tT = function(e) {
            tI || (tK = e),
                tI = !0
        }
            , tD = function(e, t) {
            try {
                var n = tx[e];
                if (!n)
                    return "";
                var r = n.timeout
                    , o = n.signStr;
                if (n.ticket !== t || new Date().getTime() >= r)
                    return "";
                if (o)
                    return o
            } catch (e) {}
            return ""
        }
            , tE = function(e, t, n) {
            try {
                var r = new Date().getTime()
                    , o = r + tK;
                tx[e] = {
                    timeout: o,
                    signStr: n,
                    ticket: t,
                    createTime: r
                }
            } catch (e) {}
        }
            , tO = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        function tP(e) {
            var t, n, r, o = {};
            return e && e.split("\n").forEach(function(e) {
                r = e.indexOf(":"),
                    t = e.substr(0, r).trim().toLowerCase(),
                    n = e.substr(r + 1).trim(),
                t && !(o[t] && tO.indexOf(t) >= 0) && ("set-cookie" === t ? o[t] = (o[t] ? o[t] : []).concat([n]) : o[t] = o[t] ? o[t] + ", " + n : n)
            }),
                o
        }
        var tL = function(e) {
            try {
                if (!e)
                    return "";
                if (e.startsWith("http"))
                    return new URL(e).pathname
            } catch (e) {}
            return e
        };
        (d = m || (m = {})).V0 = "v0",
            d.V1 = "v1",
            d.V2 = "v2";
        var tB = function(e) {
            return e.slice(0, 4)
        }
            , tR = function(e) {
            if (e)
                switch (e.slice(0, 4)) {
                    case "ts.1":
                        return m.V1;
                    case "ts.2":
                        break;
                    default:
                        return m.V0
                }
            return m.V2
        }
            , tj = function(e) {
            var t = e.b64Cert
                , n = e.b64Csr;
            return t ? {
                "bd-ticket-guard-client-cert": t || ""
            } : {
                "bd-ticket-guard-client-csr": n || ""
            }
        }
            , tA = function(e) {
            var t = e.b64PubKey
                , n = e.version;
            return {
                "bd-ticket-guard-ree-public-key": t,
                "bd-ticket-guard-web-version": void 0 === n ? 2 : n
            }
        }
            , tN = function(e) {
            var t = e.initType
                , n = e.b64PubKey
                , r = e.b64Cert
                , o = e.b64Csr;
            return "cert" === (void 0 === t ? "pubKey" : t) ? tj({
                b64Cert: r,
                b64Csr: o
            }) : tA({
                b64PubKey: n,
                version: 2
            })
        }
            , tM = function(e) {
            var t = e.signType
                , n = e.b64PubKey
                , r = e.b64Cert
                , o = e.b64Csr
                , i = e.tsSign
                , a = e.cert
                , c = tR(void 0 === i ? "" : i);
            if ("cert" === (void 0 === t ? "pubKey" : t) || c === m.V0 || !tq(a))
                return tj({
                    b64Cert: r,
                    b64Csr: o
                });
            switch (c) {
                case m.V1:
                    return tA({
                        b64PubKey: n,
                        version: 1
                    });
                case m.V2:
                default:
                    return tA({
                        b64PubKey: n,
                        version: 2
                    })
            }
        }
            , tq = function(e) {
            return !e || "string" == typeof e && -1 !== e.indexOf("pub.")
        }
            , tW = function() {
            return (tW = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }
            ).apply(this, arguments)
        }
            , tH = function(e, t, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? o(e.value) : ((t = e.value)instanceof n ? t : new n(function(e) {
                                e(t)
                            }
                        )).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
            )
        }
            , tU = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
            ),
                i;
            function c(i) {
                return function(c) {
                    return function(i) {
                        if (n)
                            throw TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                    0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++,
                                            {
                                                value: i[1],
                                                done: !1
                                            };
                                    case 5:
                                        a.label++,
                                            r = i[1],
                                            i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(),
                                            a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1],
                                                o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2],
                                                a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(),
                                            a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e],
                                    r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, c])
                }
            }
        }
            , tV = function(e, t, n, r) {
            try {
                if (!t)
                    return {
                        needProxy: !1
                    };
                var o, i = (e || {}).url;
                if (!i)
                    return {
                        needProxy: !1
                    };
                var a = !1
                    , c = void 0
                    , s = void 0;
                return Object.keys(t).forEach(function(e) {
                    var n = t[e];
                    Array.isArray(n) && n.forEach(function(e) {
                        var t = e || {}
                            , n = t.providerPathList
                            , r = void 0 === n ? [] : n
                            , u = t.consumerPathList
                            , l = void 0 === u ? [] : u;
                        if (r.length > 0 && !c)
                            for (var f = 0; f < r.length; f++) {
                                var d = r[f]
                                    , g = new RegExp(d);
                                if (i.match(g)) {
                                    a = !0,
                                        c = e,
                                        o = d;
                                    break
                                }
                            }
                        if (l.length > 0 && !s)
                            for (var f = 0; f < l.length; f++) {
                                var d = l[f]
                                    , g = new RegExp(d);
                                if (i.match(g)) {
                                    a = !0,
                                        s = e,
                                        o = d;
                                    break
                                }
                            }
                    })
                }),
                    {
                        needProxy: a,
                        providerConfig: c,
                        consumerConfig: s,
                        url: o,
                        signType: n,
                        initType: r
                    }
            } catch (e) {
                return {
                    needProxy: !1
                }
            }
        }
            , tJ = function(e, t, n, r) {
            return tH(void 0, void 0, void 0, function() {
                var o, i, a, c, s, u, l, f, d, g, p, v, h, m, y, _, b, k, w, S, C, K, x, I, T, D, E, O, P, L, B, R, j, A, N, M, q, W, H, U, V, J, F, G, z, X, $, Y, Q, Z, ee, et, en, er;
                return tU(this, function(eo) {
                    switch (eo.label) {
                        case 0:
                            if (eo.trys.push([0, 7, , 8]),
                                o = (e || {}).headers,
                                i = t.crypt,
                            !o || "string" == typeof o)
                                return [2, Promise.resolve(e)];
                            if (a = new Date().getTime(),
                                c = n.needProxy,
                                s = n.consumerConfig,
                                u = n.providerConfig,
                                l = n.url,
                                d = void 0 === (f = n.signType) ? "pubKey" : f,
                                p = void 0 === (g = n.initType) ? "pubKey" : g,
                                m = void 0 === (h = (v = s || u || {}).scene) ? "" : h,
                                _ = void 0 === (y = v.certType) ? "header" : y,
                                b = v.signTimeout,
                                k = !!u,
                                !(c && i))
                                return [3, 6];
                            return w = !1,
                                [4, null == i ? void 0 : i.getKeysInfoWithOrigin({
                                    certType: _,
                                    scene: m
                                })];
                        case 1:
                            return S = eo.sent(),
                                [4, null == i ? void 0 : i.checkSignData(S)];
                        case 2:
                            if (K = (C = eo.sent()).match_md5_iframe,
                                x = C.match_md5_local,
                                T = (I = (null == S ? void 0 : S.crypt) || {}).ec_publicKey,
                                D = I.ec_csr,
                                O = (E = (null == S ? void 0 : S.sign) || {}).ticket,
                                P = E.ts_sign,
                                L = (null == S ? void 0 : S.store_time) || "",
                                R = (B = S || {}).cert,
                                j = B.b64Cert,
                                A = B.dataFrom,
                                N = B.b64PubKey,
                                M = B.b64Csr,
                                q = void 0,
                                W = "0",
                                H = null == i ? void 0 : i.getCookieCryptStatus(),
                            O || P || !H || (W = "1"),
                                !(O && T && s && l))
                                return [3, 5];
                            if (b && tT(b),
                                !(U = tD(l, O)))
                                return [3, 3];
                            return q = U,
                                w = !0,
                                [3, 5];
                        case 3:
                            return J = (V = tF(e, O, (null == s ? void 0 : s.urlRewriteRules) || [], r)).req_content,
                                F = V.sign_data,
                                G = V.timestamp,
                                [4, null == i ? void 0 : i.signWithKeysInfo({
                                    sign_data: F,
                                    req_content: J,
                                    timestamp: G,
                                    certType: _,
                                    scene: m,
                                    keysInfo: S
                                })];
                        case 4:
                            (q = eo.sent()) && (tE(l, O, q),
                                r.reportLog({
                                    extra: {
                                        content: q,
                                        url: l,
                                        ticket: O
                                    },
                                    content: "set cache data success",
                                    level: "info"
                                })),
                                eo.label = 5;
                        case 5:
                            z = {
                                tsSign: P || "",
                                initType: p,
                                signType: d,
                                b64PubKey: N,
                                b64Cert: j,
                                b64Csr: M,
                                cert: R
                            },
                                X = k ? tN(z) : tM(z),
                                e.headers = tW(tW(tW({}, e.headers), X), {
                                    "bd-ticket-guard-version": (null == s ? void 0 : s.signVersion) || (null == u ? void 0 : u.signVersion) || 2,
                                    "bd-ticket-guard-iteration-version": 1
                                }),
                            q && (e.headers = tW(tW({}, null == e ? void 0 : e.headers), {
                                "bd-ticket-guard-client-data": q
                            }),
                                r.reportLog({
                                    extra: {
                                        client_data: q,
                                        url: l || "",
                                        ts_sign: P || "",
                                        store_time: L
                                    },
                                    content: "[request] add client_data success",
                                    level: "info"
                                })),
                                $ = new Date().getTime(),
                                r.reportLog({
                                    extra: {
                                        content: JSON.stringify(e),
                                        time: new Date().getTime()
                                    },
                                    content: "process request config ",
                                    level: "info"
                                }),
                                Q = (Y = (null == i ? void 0 : i.getStorageStatus()) || {}).isConnection,
                                Z = Y.retryCount,
                                ee = Y.startTime,
                                et = Y.endTime,
                                en = Y.loadTime,
                                r.reportEvent({
                                    action: "request",
                                    op: "sign",
                                    duration: $ > a ? $ - a : 0,
                                    status: "success",
                                    ctx: {
                                        cache: w ? "1" : "0",
                                        path: l || "",
                                        cert: R ? "1" : "0",
                                        pubKey: T ? "1" : "0",
                                        isPubKeySign: tB(P || ""),
                                        isPubKeyInit: "pubKey" === p ? "1" : "0",
                                        csr: D ? "1" : "0",
                                        version: "".concat((null == s ? void 0 : s.signVersion) || "") || "".concat((null == u ? void 0 : u.signVersion) || "") || "1",
                                        server: q ? "1" : "0",
                                        crossStatus: (null == i ? void 0 : i.getIframeStatus()) ? "1" : "0",
                                        initMatch: (null == i ? void 0 : i.initMatch) ? "1" : "0",
                                        dataFrom: A || "-99",
                                        match_md5_local: x || "-99",
                                        match_md5_iframe: K || "-99",
                                        lost: W,
                                        isNewCert: tq(R) ? "1" : "0",
                                        isConnection: tG(Q),
                                        retryCount: tG(Z)
                                    },
                                    metrics: {
                                        startTime: ee || 0,
                                        endTime: et || 0,
                                        loadTime: en || 0
                                    }
                                }),
                                e.extras = tW(tW({}, S || {}), {
                                    scene: m,
                                    certType: _,
                                    match_md5_iframe: K,
                                    match_md5_local: x,
                                    is_pubkey_ts_sign: tB(P || ""),
                                    is_new_cert: tq(R) ? "1" : "0",
                                    lost: W,
                                    isPubKeyInit: "pubKey" === p ? "1" : "0"
                                }),
                                eo.label = 6;
                        case 6:
                            return [3, 8];
                        case 7:
                            return er = eo.sent(),
                                r.reportError({
                                    error: er,
                                    name: "process request config fail"
                                }),
                                r.reportLog({
                                    content: "process request config fail",
                                    extra: {
                                        content: JSON.stringify(e)
                                    }
                                }),
                                r.reportEvent({
                                    action: "request",
                                    op: "sign",
                                    status: "fail",
                                    ctx: {
                                        path: (null == e ? void 0 : e.url) || ""
                                    }
                                }),
                                [3, 8];
                        case 8:
                            return [2, Promise.resolve(e)]
                    }
                })
            })
        }
            , tF = function(e, t, n, r) {
            try {
                var o = (e || {}).url;
                if (!o)
                    return {
                        req_content: "",
                        sign_data: ""
                    };
                var i = Math.floor(new Date().getTime() / 1e3)
                    , a = new URL(o,window.location.href).pathname;
                return n && n.length > 0 && n.forEach(function(e) {
                    if (e instanceof Array && e.length > 1) {
                        var t = e[0]
                            , n = e[1]
                            , r = new RegExp(t);
                        o.match(r) && (a = n)
                    }
                }),
                    {
                        req_content: "ticket,path,timestamp",
                        sign_data: "ticket=".concat(t, "&path=").concat(a, "&timestamp=").concat(i),
                        timestamp: i
                    }
            } catch (e) {
                return null == r || r.reportError({
                    error: e,
                    name: "request process sign data fail"
                }),
                    {
                        req_content: "",
                        sign_data: ""
                    }
            }
        }
            , tG = function(e) {
            return "number" == typeof e ? e.toString() : "-99"
        }
            , tz = function(e, t, n, r, o, i) {
            return tH(void 0, void 0, void 0, function() {
                var a, c, s, u, l, f, d, g, p, v, h, m, y, _, b, k, w, S, C, K, x, I, T, D, E, O, P, L, B, R, j, A, N, M, q, W, H, U, V;
                return tU(this, function(J) {
                    switch (J.label) {
                        case 0:
                            if (J.trys.push([0, 5, , 6]),
                                a = t.crypt,
                                !(null === (N = null == e ? void 0 : e.config) || void 0 === N ? void 0 : N.headers))
                                return i.reportEvent({
                                    action: "response",
                                    op: "respHandler",
                                    status: "fail",
                                    ctx: {
                                        url: tL(null == e ? void 0 : e.config.url) || ""
                                    },
                                    extras: e
                                }),
                                    i.reportError({
                                        error: JSON.stringify((null == e ? void 0 : e.config) || {}),
                                        name: "response headers is empty"
                                    }),
                                    [2, e];
                            if ("string" == typeof (null === (M = null == e ? void 0 : e.config) || void 0 === M ? void 0 : M.headers))
                                return i.reportEvent({
                                    action: "response",
                                    op: "respHandler",
                                    status: "fail",
                                    ctx: {
                                        url: tL(null == e ? void 0 : e.config.url) || ""
                                    },
                                    extras: e
                                }),
                                    i.reportError({
                                        error: JSON.stringify((null == e ? void 0 : e.config) || {}),
                                        name: "response headers type is string"
                                    }),
                                    [2, e];
                            if (l = (u = (s = void 0 === (c = ((null == e ? void 0 : e.config) || {}).extras) ? {} : c) || {}).dataFrom,
                                f = u.match_md5_local,
                                d = u.match_md5_iframe,
                                g = u.is_pubkey_ts_sign,
                                p = u.is_new_cert,
                                v = u.lost,
                                h = u.isPubKeyInit,
                                y = (m = (null == a ? void 0 : a.getStorageStatus()) || {}).isConnection,
                                _ = m.retryCount,
                                b = m.startTime,
                                k = m.endTime,
                                w = m.loadTime,
                            (null == e ? void 0 : e.reqHeaders) && (null === (q = null == e ? void 0 : e.reqHeaders) || void 0 === q ? void 0 : q["bd-ticket-guard-version"]) && i.reportEvent({
                                action: "response",
                                op: "sign",
                                status: "finish",
                                ctx: {
                                    url: tL(null == e ? void 0 : e.config.url) || "",
                                    crossStatus: (null == a ? void 0 : a.getIframeStatus()) ? "1" : "0",
                                    lost: v,
                                    dataFrom: l || "-99",
                                    match_md5_local: f,
                                    match_md5_iframe: d,
                                    initMatch: (null == a ? void 0 : a.initMatch) ? "1" : "0",
                                    isConnection: tG(y),
                                    retryCount: tG(_),
                                    is_pubkey_ts_sign: g,
                                    is_new_cert: p,
                                    isPubKeyInit: h
                                },
                                metrics: {
                                    startTime: b || 0,
                                    endTime: k || 0,
                                    loadTime: w || 0
                                },
                                extras: e
                            }),
                                S = new Date().getTime(),
                                C = n.needProxy,
                                K = n.providerConfig,
                                n.signType,
                                I = (x = K || {}).scene,
                                T = x.namespace,
                                !(C && a))
                                return [3, 4];
                            if (D = (null === (W = null == e ? void 0 : e.headers) || void 0 === W ? void 0 : W["bd-ticket-guard-server-data"]) || "",
                                E = (null === (H = null == e ? void 0 : e.headers) || void 0 === H ? void 0 : H["bd-ticket-guard-result"]) || "-99",
                                L = ((P = (O = D && (null == a ? void 0 : a.b642str(D))) && JSON.parse(O)) || {}).ticket,
                                B = {
                                    url: tL(null === (U = null == e ? void 0 : e.config) || void 0 === U ? void 0 : U.url) || "",
                                    logId: (null === (V = null == e ? void 0 : e.headers) || void 0 === V ? void 0 : V["x-tt-logid"]) || ""
                                },
                                !(L && I && T))
                                return [3, 2];
                            return [4, null == a ? void 0 : a.setSignValueAsync({
                                sign: P,
                                scene: I,
                                namespace: T,
                                logCtx: B
                            })];
                        case 1:
                            return J.sent(),
                                [3, 3];
                        case 2:
                            L && I && (null == a || a.setSignValue({
                                sign: P,
                                scene: I,
                                logCtx: B
                            })),
                                J.label = 3;
                        case 3:
                            try {
                                D && !I && i.reportLog({
                                    content: "[new ts_sign scene cannot find]: ".concat(JSON.stringify(n)),
                                    extra: tW({}, B),
                                    level: "info"
                                })
                            } catch (e) {}
                            R = tX(E, s, e, t, r, o, i),
                                j = new Date().getTime(),
                                i.reportLog({
                                    content: "[new ts_sign info]：".concat(D),
                                    extra: tW(tW({}, P || {}), B),
                                    level: "info"
                                }),
                                i.reportEvent({
                                    action: "response",
                                    op: "init",
                                    status: "success",
                                    duration: j > S ? j - S : 0,
                                    ctx: tW({
                                        url: tL(null == e ? void 0 : e.config.url) || "",
                                        crossStatus: (null == a ? void 0 : a.getIframeStatus()) ? "1" : "0",
                                        lost: v,
                                        verify: E,
                                        dataFrom: l || "-99",
                                        match_md5_local: f,
                                        match_md5_iframe: d,
                                        isConnection: tG(y),
                                        retryCount: tG(_),
                                        initMatch: (null == a ? void 0 : a.initMatch) ? "1" : "0",
                                        isNewCert: p,
                                        isPubkeyTssign: g,
                                        isPubKeyInit: h,
                                        isHasNewTssign: D ? "1" : "0"
                                    }, R || {}),
                                    metrics: {
                                        startTime: b || 0,
                                        endTime: k || 0,
                                        loadTime: w || 0
                                    },
                                    extras: e
                                }),
                                J.label = 4;
                        case 4:
                        case 6:
                            return [2, e];
                        case 5:
                            return A = J.sent(),
                                i.reportEvent({
                                    action: "response",
                                    op: "init",
                                    status: "fail",
                                    ctx: {
                                        url: tL(null == e ? void 0 : e.config.url) || ""
                                    }
                                }),
                                i.reportError({
                                    error: A,
                                    name: "get sign data error in response"
                                }),
                                [3, 6]
                    }
                })
            })
        }
            , tX = function(e, t, n, r, o, i, a) {
            var c, s, u, l, f;
            try {
                var d = r.crypt
                    , g = t || {}
                    , p = g.certType
                    , v = g.items
                    , h = void 0 === v ? [] : v
                    , m = {}
                    , y = []
                    , _ = []
                    , b = (null === (c = null == n ? void 0 : n.reqHeaders) || void 0 === c ? void 0 : c["bd-ticket-guard-client-data"]) ? "1" : "0"
                    , k = ((null == n ? void 0 : n.config) || {}).url;
                if ("header" === p)
                    return {};
                if ("cookie" === p && (h && Array.isArray(h) && h.forEach(function(e) {
                    var t = e || {}
                        , n = t.key
                        , r = t.value
                        , o = t.from
                        , i = t.origin;
                    m["".concat(n.replace(/\//g, "_"), "_origin")] = i || "",
                        m["".concat(n.replace(/\//g, "_"), "_from")] = o || "-99",
                        m["".concat(n.replace(/\//g, "_"), "_status")] = r ? "success" : "success_null",
                    r && (y.push(n),
                        _.push(r))
                }),
                "-99" === e && o && k))
                    for (var w = ["/aweme/v1/web/commit/item/digg", "/aweme/v1/web/commit/follow/user", "/aweme/v1/web/comment/publish", "/web/api/media/aweme/create"], S = 0; S < w.length; S++) {
                        var C = w[S]
                            , K = new RegExp(C);
                        if (k.match(K)) {
                            y.length > 0 && d.setKeysAndValues(y, _);
                            break
                        }
                    }
                var x = (null === (s = null == n ? void 0 : n.reqHeaders) || void 0 === s ? void 0 : s["bd-ticket-guard-version"]) || "-99"
                    , I = (null === (u = null == n ? void 0 : n.reqHeaders) || void 0 === u ? void 0 : u["bd-ticket-guard-iteration-version"]) || "-99"
                    , T = (null === (l = null == n ? void 0 : n.reqHeaders) || void 0 === l ? void 0 : l["bd-ticket-guard-client-csr"]) ? "1" : "0"
                    , D = (null === (f = null == n ? void 0 : n.reqHeaders) || void 0 === f ? void 0 : f["bd-ticket-guard-client-cert"]) ? "1" : "0";
                return tW(tW({}, {
                    csr: T,
                    cert: D,
                    server: b,
                    version: x,
                    iterVersion: I
                }), m)
            } catch (e) {
                a.reportError({
                    error: e,
                    name: "process Request Header Error"
                })
            }
            return {}
        }
            , t$ = function(e) {
            var t, n, r = {};
            return r["bd-ticket-guard-server-data"] = (null === (t = null == e ? void 0 : e.headers) || void 0 === t ? void 0 : t.get("bd-ticket-guard-server-data")) || "",
                r["bd-ticket-guard-result"] = (null === (n = null == e ? void 0 : e.headers) || void 0 === n ? void 0 : n.get("bd-ticket-guard-result")) || "",
                r
        }
            , tY = (g = function(e, t) {
                return (g = Object.setPrototypeOf || ({
                            __proto__: []
                        })instanceof Array && function(e, t) {
                            e.__proto__ = t
                        }
                        || function(e, t) {
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                )(e, t)
            }
                ,
                function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                        this.constructor = e
                    }
                    g(e, t),
                        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                            new n)
                }
        )
            , tQ = function(e, t, n, r) {
            return new (n || (n = Promise))(function(o, i) {
                    function a(e) {
                        try {
                            s(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        try {
                            s(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function s(e) {
                        var t;
                        e.done ? o(e.value) : ((t = e.value)instanceof n ? t : new n(function(e) {
                                e(t)
                            }
                        )).then(a, c)
                    }
                    s((r = r.apply(e, t || [])).next())
                }
            )
        }
            , tZ = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
            ),
                i;
            function c(i) {
                return function(c) {
                    return function(i) {
                        if (n)
                            throw TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                    0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++,
                                            {
                                                value: i[1],
                                                done: !1
                                            };
                                    case 5:
                                        a.label++,
                                            r = i[1],
                                            i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(),
                                            a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1],
                                                o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2],
                                                a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(),
                                            a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e],
                                    r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, c])
                }
            }
        }
            , t0 = "fetch"in window
            , t1 = "Request"in window
            , t2 = "Headers"in window
            , t4 = function(e) {
            function t(t) {
                var n = e.call(this) || this;
                return n.config = {},
                    n.updateData = !1,
                    n.login = !1,
                    n.signType = "pubKey",
                    n.initType = "pubKey",
                    n.nativeXMLHttpRequestOpen = window.XMLHttpRequest.prototype.open,
                    n.nativeXMLHttpRequestSend = window.XMLHttpRequest.prototype.send,
                    n.nativeXMLHttpRequestSetRequestHeader = window.XMLHttpRequest.prototype.setRequestHeader,
                    n.nativeFetch = window.fetch,
                    n.setType = function(e) {
                        var t = e.initType
                            , r = e.signType;
                        n.signType = void 0 === r ? "pubKey" : r,
                            n.initType = void 0 === t ? "pubKey" : t
                    }
                    ,
                    n.setConfig = function(e) {
                        n.config = e
                    }
                    ,
                    n.setUpdateDataWhenVerifySuccess = function(e) {
                        n.updateData = e
                    }
                    ,
                    n.setLogin = function(e) {
                        n.login = e
                    }
                    ,
                    n.reportEvent = function(e) {
                        n.emit("execute", e)
                    }
                    ,
                    n.reportError = function(e) {
                        n.emit("error", e)
                    }
                    ,
                    n.reportLog = function(e) {
                        n.emit("log", e)
                    }
                    ,
                    n.params = t,
                    n.monkeyPatchXMLHttpRequest(),
                    n.monkeyPatchFetch(),
                    n
            }
            return tY(t, e),
                t.prototype.monkeyPatchXMLHttpRequest = function() {
                    var e = this;
                    XMLHttpRequest.prototype.open = function() {
                        this.secureOpenArgs = arguments,
                            e.nativeXMLHttpRequestOpen.apply(this, arguments)
                    }
                        ,
                        XMLHttpRequest.prototype.send = function() {
                            var t = this
                                , n = this.secureOpenArgs
                                , r = arguments
                                , o = n[0] || "GET"
                                , i = new URL(n[1],window.location.href).toString()
                                , a = tV({
                                method: o,
                                url: i,
                                headers: {}
                            }, e.config, e.signType || "pubKey", e.initType || "pubKey")
                                , c = (a || {}).needProxy;
                            if (!c)
                                return e.nativeXMLHttpRequestSend.apply(this, r);
                            var s = {}
                                , u = {};
                            if ("onloadend"in this && "function" == typeof this.onloadend) {
                                var l = this.onloadend;
                                this.onloadend = function() {
                                    for (var n = [], r = 0; r < arguments.length; r++)
                                        n[r] = arguments[r];
                                    return tQ(t, void 0, void 0, function() {
                                        var t;
                                        return tZ(this, function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    if (4 !== this.readyState || !("getAllResponseHeaders"in this && "function" == typeof this.getAllResponseHeaders) || !c)
                                                        return [3, 2];
                                                    return t = tP(this.getAllResponseHeaders()),
                                                        [4, tz({
                                                            config: {
                                                                method: o,
                                                                url: i,
                                                                headers: {},
                                                                extras: u
                                                            },
                                                            headers: t || {},
                                                            reqHeaders: s
                                                        }, e.params, a, e.updateData, e.login, {
                                                            reportEvent: e.reportEvent,
                                                            reportError: e.reportError,
                                                            reportLog: e.reportLog
                                                        })];
                                                case 1:
                                                    r.sent(),
                                                        r.label = 2;
                                                case 2:
                                                    return [2, l.apply(this, n)]
                                            }
                                        })
                                    })
                                }
                            } else {
                                var f = this.onreadystatechange;
                                "onreadystatechange"in this && "function" == typeof f ? this.onreadystatechange = function() {
                                        for (var n = [], r = 0; r < arguments.length; r++)
                                            n[r] = arguments[r];
                                        return tQ(t, void 0, void 0, function() {
                                            var t;
                                            return tZ(this, function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        if (4 !== this.readyState || !("getAllResponseHeaders"in this && "function" == typeof this.getAllResponseHeaders) || !c)
                                                            return [3, 2];
                                                        return t = tP(this.getAllResponseHeaders()),
                                                            [4, tz({
                                                                config: {
                                                                    method: o,
                                                                    url: i,
                                                                    headers: {},
                                                                    extras: u
                                                                },
                                                                headers: t || {},
                                                                reqHeaders: s
                                                            }, e.params, a, e.updateData, e.login, {
                                                                reportEvent: e.reportEvent,
                                                                reportError: e.reportError,
                                                                reportLog: e.reportLog
                                                            })];
                                                    case 1:
                                                        r.sent(),
                                                            r.label = 2;
                                                    case 2:
                                                        return [2, f.apply(this, n)]
                                                }
                                            })
                                        })
                                    }
                                    : this.onreadystatechange = function() {
                                        for (var n = [], r = 0; r < arguments.length; r++)
                                            n[r] = arguments[r];
                                        return tQ(t, void 0, void 0, function() {
                                            var t;
                                            return tZ(this, function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        if (4 !== this.readyState || !("getAllResponseHeaders"in this && "function" == typeof this.getAllResponseHeaders) || !c)
                                                            return [3, 2];
                                                        return t = tP(this.getAllResponseHeaders()),
                                                            [4, tz({
                                                                config: {
                                                                    method: o,
                                                                    url: i,
                                                                    headers: {},
                                                                    extras: u
                                                                },
                                                                headers: t || {},
                                                                reqHeaders: s
                                                            }, e.params, a, e.updateData, e.login, {
                                                                reportEvent: e.reportEvent,
                                                                reportError: e.reportError,
                                                                reportLog: e.reportLog
                                                            })];
                                                    case 1:
                                                        n.sent(),
                                                            n.label = 2;
                                                    case 2:
                                                        return [2]
                                                }
                                            })
                                        })
                                    }
                            }
                            if (n.length >= 3 && !n[2])
                                return e.nativeXMLHttpRequestSend.apply(this, r);
                            null == tJ || tJ({
                                method: o,
                                url: i,
                                headers: {}
                            }, e.params, a, {
                                reportEvent: e.reportEvent,
                                reportError: e.reportError,
                                reportLog: e.reportLog
                            }).then(function(n) {
                                var o = n || {}
                                    , i = o.headers
                                    , a = void 0 === i ? {} : i
                                    , c = o.extras;
                                return u = void 0 === c ? {} : c,
                                    Object.keys(a).forEach(function(n) {
                                        s[n] = a[n],
                                            e.nativeXMLHttpRequestSetRequestHeader.call(t, n, a[n])
                                    }),
                                    e.nativeXMLHttpRequestSend.apply(t, r)
                            })
                        }
                }
                ,
                t.prototype.monkeyPatchFetch = function() {
                    if (t0) {
                        var e = this;
                        window.fetch = function(t, n) {
                            var r, o, i = this;
                            t1 && t instanceof Request ? (r = t.url,
                                o = t.method) : (r = t,
                                o = n && n.method ? n.method : "GET");
                            var a = tV({
                                method: o,
                                url: r,
                                headers: {}
                            }, e.config, e.signType || "pubKey", e.initType || "pubKey");
                            return (a || {}).needProxy ? tJ({
                                method: o,
                                url: r,
                                headers: {}
                            }, e.params, a, {
                                reportEvent: e.reportEvent,
                                reportError: e.reportError,
                                reportLog: e.reportLog
                            }).then(function(c) {
                                var s = c || {}
                                    , u = s.headers
                                    , l = s.extras
                                    , f = void 0 === l ? {} : l;
                                try {
                                    t1 && t instanceof Request ? Object.keys(u).forEach(function(e) {
                                        t.headers.set(e, u[e])
                                    }) : ((n = n || {}).headers = n.headers || {},
                                        t2 && (null == n ? void 0 : n.headers)instanceof Headers ? Object.keys(u).forEach(function(e) {
                                            var t, r;
                                            null === (r = null === (t = null == n ? void 0 : n.headers) || void 0 === t ? void 0 : t.set) || void 0 === r || r.call(t, e, u[e])
                                        }) : n && n.headers && Array.isArray(n.headers) ? Object.keys(u).forEach(function(e) {
                                            var t;
                                            n && n.headers && Array.isArray(n.headers) && (null === (t = null == n ? void 0 : n.headers) || void 0 === t || t.push([e, u[e]]))
                                        }) : Object.keys(u).forEach(function(e) {
                                            n.headers[e] = u[e]
                                        }))
                                } catch (e) {}
                                return e.nativeFetch.apply(i, [t, n]).then(function(t) {
                                    var n, i, c, s, l = {};
                                    if (null == t ? void 0 : t.headers) {
                                        if ("function" == typeof (null === (n = null == t ? void 0 : t.headers) || void 0 === n ? void 0 : n.forEach))
                                            null === (c = null === (i = null == t ? void 0 : t.headers) || void 0 === i ? void 0 : i.forEach) || void 0 === c || c.call(i, function(e, t) {
                                                l[t] = e
                                            });
                                        else if ("function" == typeof (null === (s = null == t ? void 0 : t.headers) || void 0 === s ? void 0 : s.get)) {
                                            var d = t$(t);
                                            Object.keys(d).forEach(function(e) {
                                                l[e] = d[e]
                                            })
                                        }
                                        return tz({
                                            config: {
                                                method: o,
                                                url: r,
                                                headers: {},
                                                extras: f
                                            },
                                            headers: l,
                                            reqHeaders: u
                                        }, e.params, a, e.updateData, e.login, {
                                            reportEvent: e.reportEvent,
                                            reportError: e.reportError,
                                            reportLog: e.reportLog
                                        }).then(function() {
                                            return t
                                        }).catch(function(e) {
                                            return t
                                        })
                                    }
                                    return t
                                })
                            }) : e.nativeFetch.apply(this, [t, n])
                        }
                    }
                }
                ,
                t
        }(z)
            , t3 = "3.0.27"
            , t5 = (p = function(e, t) {
                return (p = Object.setPrototypeOf || ({
                            __proto__: []
                        })instanceof Array && function(e, t) {
                            e.__proto__ = t
                        }
                        || function(e, t) {
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                )(e, t)
            }
                ,
                function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                        this.constructor = e
                    }
                    p(e, t),
                        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                            new n)
                }
        )
            , t6 = function() {
            return (t6 = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }
            ).apply(this, arguments)
        }
            , t9 = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
            ),
                i;
            function c(i) {
                return function(c) {
                    return function(i) {
                        if (n)
                            throw TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                    0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++,
                                            {
                                                value: i[1],
                                                done: !1
                                            };
                                    case 5:
                                        a.label++,
                                            r = i[1],
                                            i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(),
                                            a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1],
                                                o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2],
                                                a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(),
                                            a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e],
                                    r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, c])
                }
            }
        }
            , t7 = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.config = {},
                    t.processSignCookie = function() {
                        var e;
                        try {
                            var n = tS("_bd_ticket_crypt_doamin") || ""
                                , r = tS("bd_ticket_guard_client_web_domain") || "3"
                                , o = tS("_bd_ticket_crypt_cookie") ? "1" : "0"
                                , i = tS("__security_server_data_status") || "0"
                                , a = tS("bd_sign_version") || "0"
                                , c = (null === (e = t.cryptoSDK) || void 0 === e ? void 0 : e.isTopBrowser()) ? "1" : "0";
                            return {
                                cookieStatus: i,
                                signVersion: a,
                                cookieCrypt: o,
                                isTopBrowser: c,
                                webDomain: n || "3",
                                webClientDomain: r
                            }
                        } catch (e) {
                            e instanceof Error ? t._slardarSDK.throw({
                                err: e,
                                extra: {
                                    content: "init sign cookie error"
                                }
                            }) : t._slardarSDK.throw({
                                err: Error("init sign cookie error"),
                                extra: {
                                    content: "init sign cookie error"
                                }
                            })
                        }
                        return {
                            cookieStatus: "0",
                            signVersion: "0",
                            cookieCrypt: "0",
                            isTopBrowser: "0",
                            webDomain: "3",
                            webClientDomain: "3"
                        }
                    }
                    ,
                    t.setStorageType = function(e) {
                        t.cryptoSDK.setStorageType(e)
                    }
                    ,
                    t.setUpdateDataWhenVerifySuccess = function(e) {
                        t.secureProxy.setUpdateDataWhenVerifySuccess(e)
                    }
                    ,
                    t.setDisableGenerateKey = function(e) {}
                    ,
                    t.setNamespace = function(e) {
                        t._slardarSDK.setContext({
                            namespace: e
                        }),
                            t.cryptoSDK.setStorageNamespace(e)
                    }
                    ,
                    t.setAgidAndHost = function(e, n) {
                        var r = (window.location || {}).hostname;
                        t._slardarSDK.setContext({
                            agid: e,
                            scope: n || r || ""
                        }),
                            t.cryptoSDK.setAgidAndHost(e, n)
                    }
                    ,
                    t.setDisableCrossStorage = function(e) {
                        t.cryptoSDK.setDisableCrossStorage(e)
                    }
                    ,
                    t.setDisableStorageSignData = function(e) {
                        t.cryptoSDK.setDisableStorageSignData(e)
                    }
                    ,
                    t.setCrossStorageURL = function(e) {
                        t.cryptoSDK.setCrossStorageURL(e)
                    }
                    ,
                    t.setCrossStorageBackURL = function(e) {
                        t.cryptoSDK.setCrossStorageBackURL(e)
                    }
                    ,
                    t.setLoginStatus = function(e) {
                        "boolean" == typeof e && (t._isLogin = e ? "1" : "0",
                            t.secureProxy.setLogin(e)),
                        "function" == typeof e && (t._isLoginPromise = e().catch(function(e) {
                            return !1
                        }))
                    }
                    ,
                    t.start = function() {
                        t.cryptoSDK.start(),
                            t.emit("load", {
                                action: "sdk",
                                op: "init",
                                status: "start"
                            })
                    }
                    ,
                    t.setUpdateKeys = function(e) {
                        t.cryptoSDK.setUpdateKeys(e)
                    }
                    ,
                    t.setContext = function(e) {
                        t.cryptoSDK.setContext(e)
                    }
                    ,
                    t.setWebId = function(e, n) {
                        var r;
                        null === (r = null == tw ? void 0 : tw._instance) || void 0 === r || r.setWebId(e),
                            S({
                                appId: n || 1661,
                                webId: e,
                                config: {
                                    evtParams: {
                                        sdk_version: t3,
                                        self_platform: tC()
                                    }
                                }
                            }),
                            t.emit("load", {
                                action: "sdk",
                                op: "setwebid",
                                status: "success"
                            })
                    }
                    ,
                    t.setSlardarEnv = function(e) {
                        var t;
                        null === (t = null == tw ? void 0 : tw._instance) || void 0 === t || t.setEnv(e)
                    }
                    ,
                    t.setConfig = function(e) {
                        var n = e.scene;
                        if (t.config) {
                            if (t.config[n]) {
                                var r = t.config[n];
                                Array.isArray(r) ? (r.push(e),
                                    t.config[n] = r) : t.config[n] = [e]
                            } else
                                t.config[n] = [e]
                        } else
                            t.config = {},
                                t.config[n] = [e];
                        t.cryptoSDK.setConfig(t.config),
                            t.secureProxy.setConfig(t.config),
                            t.emit("load", {
                                action: "sdk",
                                op: "config",
                                status: "success"
                            })
                    }
                    ,
                    t.refresh = function() {
                        var e, n, r;
                        return e = void 0,
                            n = void 0,
                            r = function() {
                                return t9(this, function(e) {
                                    return [2, this.cryptoSDK.refresh()]
                                })
                            }
                            ,
                            new (n || (n = Promise))(function(o, i) {
                                    function a(e) {
                                        try {
                                            s(r.next(e))
                                        } catch (e) {
                                            i(e)
                                        }
                                    }
                                    function c(e) {
                                        try {
                                            s(r.throw(e))
                                        } catch (e) {
                                            i(e)
                                        }
                                    }
                                    function s(e) {
                                        var t;
                                        e.done ? o(e.value) : ((t = e.value)instanceof n ? t : new n(function(e) {
                                                e(t)
                                            }
                                        )).then(a, c)
                                    }
                                    s((r = r.apply(t, e || [])).next())
                                }
                            )
                    }
                    ,
                    t.sendEvent = function(e) {
                        var n = t.processSignCookie()
                            , r = e.name
                            , o = e.metrics
                            , i = e.categories;
                        t._slardarSDK.dot({
                            name: r,
                            metrics: o,
                            categories: t6(t6(t6({}, i || {}), n || {}), {
                                loginStatus: t._isLogin
                            })
                        })
                    }
                    ,
                    t.setType = function(e) {
                        t.cryptoSDK.setType(e),
                            t.secureProxy.setType(e),
                            C({
                                init_type: e.initType,
                                sign_type: e.signType
                            }),
                            t._slardarSDK.setContext({
                                initType: e.initType,
                                signType: e.signType,
                                type: e.signType
                            })
                    }
                    ,
                    t.convertBase64ToString = function(e) {
                        return j(e)
                    }
                    ,
                    t.convertStringToBase64 = function(e) {
                        return L(e)
                    }
                    ,
                    t.convertHexToBase64 = function(e) {
                        return R(e)
                    }
                    ,
                    t._isLogin = "-1",
                    t._slardarSDK = new tw(t3),
                    t.cryptoSDK = new tb({
                        sendEvent: t.sendEvent
                    }),
                    t.cryptoSDK.on("error", function(e) {
                        var n = e.error
                            , r = e.name;
                        n instanceof Error ? t._slardarSDK.throw({
                            err: n,
                            extra: {
                                content: r,
                                origin: (null == n ? void 0 : n.origin) || "",
                                login: t._isLogin
                            }
                        }) : t._slardarSDK.throw({
                            err: Error(r),
                            extra: {
                                content: r,
                                login: t._isLogin
                            }
                        }),
                            t.emit("error", e)
                    }),
                    t.cryptoSDK.on("load", function(e) {
                        var n = e.action
                            , r = e.op
                            , o = e.status
                            , i = e.duration
                            , a = e.ctx
                            , c = e.metrics
                            , s = "load_".concat(n, "_").concat(r.toLocaleLowerCase())
                            , u = t.processSignCookie();
                        t._isLoginPromise ? t._isLoginPromise.then(function(e) {
                            t._isLogin = e ? "1" : "0",
                                t._slardarSDK.dot({
                                    name: s,
                                    metrics: t6({
                                        count: 1,
                                        duration: i || 0
                                    }, c || {}),
                                    categories: t6(t6({
                                        satus: o,
                                        login: t._isLogin
                                    }, a || {}), u)
                                })
                        }) : t._slardarSDK.dot({
                            name: s,
                            metrics: t6({
                                count: 1,
                                duration: i || 0
                            }, c || {}),
                            categories: t6(t6({
                                satus: o,
                                login: t._isLogin
                            }, a || {}), u)
                        }),
                            t.emit("load", e)
                    }),
                    t.cryptoSDK.on("log", function(e) {
                        var n = t.processSignCookie()
                            , r = e || {}
                            , o = r.level
                            , i = r.extra
                            , a = r.content;
                        t._slardarSDK.log({
                            content: a,
                            extra: t6(t6({}, n || {}), i || {}),
                            level: o
                        }),
                            t.emit("log", e)
                    }),
                    t.cryptoSDK.on("execute", function(e) {
                        var n = e.action
                            , r = e.op
                            , o = e.status
                            , i = e.duration
                            , a = e.ctx
                            , c = e.metrics
                            , s = "execute_".concat(n, "_").concat(r.toLocaleLowerCase())
                            , u = t.processSignCookie();
                        t._isLoginPromise ? t._isLoginPromise.then(function(e) {
                            t._isLogin = e ? "1" : "0",
                                t._slardarSDK.dot({
                                    name: s,
                                    metrics: t6({
                                        count: 1,
                                        duration: i || 0
                                    }, c || {}),
                                    categories: t6(t6({
                                        satus: o,
                                        login: t._isLogin
                                    }, a || {}), u)
                                })
                        }) : t._slardarSDK.dot({
                            name: s,
                            metrics: t6({
                                count: 1,
                                duration: i || 0
                            }, c || {}),
                            categories: t6(t6({
                                satus: o,
                                login: t._isLogin
                            }, a || {}), u)
                        }),
                            t.emit("execute", e)
                    }),
                    t.cryptoSDK.on("ready", function(e) {
                        var n = e.action
                            , r = e.op
                            , o = e.status
                            , i = e.duration
                            , a = e.ctx
                            , c = e.metrics
                            , s = "ready_".concat(n, "_").concat(r.toLocaleLowerCase());
                        t._isLoginPromise ? t._isLoginPromise.then(function(e) {
                            t._isLogin = e ? "1" : "0",
                                t._slardarSDK.dot({
                                    name: s,
                                    metrics: t6({
                                        count: 1,
                                        duration: i || 0
                                    }, c || {}),
                                    categories: t6({
                                        satus: o,
                                        login: t._isLogin
                                    }, a || {})
                                })
                        }) : t._slardarSDK.dot({
                            name: s,
                            metrics: t6({
                                count: 1,
                                duration: i || 0
                            }, c || {}),
                            categories: t6({
                                satus: o,
                                login: t._isLogin
                            }, a || {})
                        }),
                            t.emit("execute", e)
                    }),
                    t.secureProxy = new t4({
                        crypt: t.cryptoSDK
                    }),
                    t.secureProxy.on("error", function(e) {
                        var n = e.error
                            , r = e.name;
                        n instanceof Error ? t._slardarSDK.throw({
                            err: n,
                            extra: {
                                content: r,
                                login: t._isLogin
                            }
                        }) : t._slardarSDK.throw({
                            err: Error(r),
                            extra: {
                                content: r,
                                login: t._isLogin
                            }
                        }),
                            t.emit("error", e)
                    }),
                    t.secureProxy.on("execute", function(e) {
                        var n = e.action
                            , r = e.op
                            , o = e.status
                            , i = e.duration
                            , a = e.ctx
                            , c = e.extras
                            , s = e.metrics
                            , u = "execute_".concat(n, "_").concat(r.toLocaleLowerCase())
                            , l = t.processSignCookie();
                        t._isLoginPromise ? t._isLoginPromise.then(function(f) {
                            t._isLogin = f ? "1" : "0",
                            "sign" === r && "response" === n || t._slardarSDK.dot({
                                name: u,
                                metrics: t6({
                                    count: 1,
                                    duration: i || 0
                                }, s || {}),
                                categories: t6(t6({
                                    satus: o,
                                    login: t._isLogin
                                }, a || {}), l)
                            }),
                                t.emit("execute", t6(t6({}, e), {
                                    extras: t6({
                                        loginStatus: t._isLogin
                                    }, c || {})
                                }))
                        }).catch(function(e) {}) : ("sign" === r && "response" === n || t._slardarSDK.dot({
                            name: u,
                            metrics: t6({
                                count: 1,
                                duration: i || 0
                            }, s || {}),
                            categories: t6(t6({
                                satus: o,
                                login: t._isLogin
                            }, a || {}), l)
                        }),
                            t.emit("execute", t6(t6({}, e), {
                                extras: t6(t6({
                                    loginStatus: t._isLogin
                                }, c || {}), l)
                            })))
                    }),
                    t.secureProxy.on("log", function(e) {
                        var n = t.processSignCookie()
                            , r = e || {}
                            , o = r.level
                            , i = r.extra
                            , a = r.content;
                        t._slardarSDK.log({
                            content: a,
                            extra: t6(t6({}, n || {}), i || {}),
                            level: o
                        }),
                            t.emit("log", e)
                    }),
                    window.$SECURE_VERSION = t3,
                    t
            }
            return t5(t, e),
                t
        }(z)
            , t8 = (v = function(e, t) {
                return (v = Object.setPrototypeOf || ({
                            __proto__: []
                        })instanceof Array && function(e, t) {
                            e.__proto__ = t
                        }
                        || function(e, t) {
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                )(e, t)
            }
                ,
                function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                    function n() {
                        this.constructor = e
                    }
                    v(e, t),
                        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                            new n)
                }
        )
            , ne = new (function(e) {
            function t() {
                var n = e.call(this) || this;
                return t.instance || (t.instance = n),
                    t.instance
            }
            return t8(t, e),
                t
        }(t7));
        ne.on("execute", function(e) {
            var t = e.action
                , n = e.op
                , r = e.extras
                , o = e.ctx
                , i = e.status;
            try {
                "response" === t && "sign" === n ? T(r, o) : "response" === t && "init" === n ? I(r, o) : "iframe" === t && "getKeys" === n ? E({
                    iframe_status: "success" === i ? "1" : "0"
                }) : "iframe" === t && "check" === n && D({
                    iframe_status: "success" === i ? "1" : "0"
                })
            } catch (e) {}
        });
        var nt = function() {
            var e = new t7;
            return e.on("execute", function(e) {
                var t = e.action
                    , n = e.op
                    , r = e.extras
                    , o = e.ctx
                    , i = e.status;
                try {
                    "response" === t && "sign" === n ? T(r, o) : "response" === t && "init" === n ? I(r, o) : "iframe" === t && "getKeys" === n ? E({
                        iframe_status: "success" === i ? "1" : "0"
                    }) : "iframe" === t && "check" === n && D({
                        iframe_status: "success" === i ? "1" : "0"
                    })
                } catch (e) {}
            }),
                e
        }
    }
}]);
