/*! jQuery v1.12.3 | (c) jQuery Foundation | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.3",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return A.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
        else {
            d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (e) {}
            c && c.doScroll && ! function f() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return a.setTimeout(f, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0;
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
            },
            data: function(a, b, c) {
                return R(a, b, c)
            },
            removeData: function(a, b) {
                return S(a, b)
            },
            _data: function(a, b, c) {
                return R(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return S(a, b, !0)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) Y(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
            f = 0;
            while (g = i[f++]) _.test(g.type || "") && c.push(g)
        }
        return i = null, p
    }! function() {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Qa = d.documentElement;
    ! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(), f
                },
                boxSizingReliable: function() {
                    return null == b && k(), e
                },
                pixelMarginRight: function() {
                    return null == b && k(), c
                },
                pixelPosition: function() {
                    return null == b && k(), b
                },
                reliableMarginRight: function() {
                    return null == b && k(), g
                },
                reliableMarginLeft: function() {
                    return null == b && k(), h
                }
            });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab) return a
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }

    function fb(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ra(b),
            i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
            if (g = Sa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Oa.test(g)) return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
        }
        return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
            },
            prefilters: [ob],
            prefilter: function(a, b) {
                b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(ib), ib = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var tb, ub, vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
        }
    }), ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
        } : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }), xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;

    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, Cb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, Cb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];

    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x)
                }
            } else y(-1, "No Transport");

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Zb(a) {
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;

    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    } : hc;
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc) fc[a](void 0, !0)
    }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery,
        oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
    }, b || (a.jQuery = a.$ = n), n
});

/*! jQuery UI - v1.11.3 - 2015-02-27 * http://jqueryui.com * Includes: core.js, widget.js, mouse.js, position.js, draggable.js, resizable.js, autocomplete.js, button.js, dialog.js, menu.js, spinner.js, effect.js, effect-slide.js * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function(c) {
    "function" === typeof define && define.amd ? define(["jquery"], c) : c(jQuery)
})(function(c) {
    function p(a, b) {
        var d, f;
        d = a.nodeName.toLowerCase();
        if ("area" === d) {
            d = a.parentNode;
            f = d.name;
            if (!a.href || !f || "map" !== d.nodeName.toLowerCase()) return !1;
            d = c("img[usemap='#" + f + "']")[0];
            return !!d && r(d)
        }
        return (/^(input|select|textarea|button|object)$/.test(d) ? !a.disabled : "a" === d ? a.href || b : b) && r(a)
    }

    function r(a) {
        return c.expr.filters.visible(a) && !c(a).parents().addBack().filter(function() {
            return "hidden" === c.css(this, "visibility")
        }).length
    }

    function n(a) {
        return function() {
            var b = this.element.val();
            a.apply(this, arguments);
            this._refresh();
            b !== this.element.val() && this._trigger("change")
        }
    }
    c.ui = c.ui || {};
    c.extend(c.ui, {
        version: "1.11.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    c.fn.extend({
        scrollParent: function(a) {
            var b = this.css("position"),
                d = "absolute" === b,
                f = a ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
            a = this.parents().filter(function() {
                var a = c(this);
                return d && "static" === a.css("position") ? !1 : f.test(a.css("overflow") + a.css("overflow-y") + a.css("overflow-x"))
            }).eq(0);
            return "fixed" !== b && a.length ? a : c(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && c(this).removeAttr("id")
            })
        }
    });
    c.extend(c.expr[":"], {
        data: c.expr.createPseudo ? c.expr.createPseudo(function(a) {
            return function(b) {
                return !!c.data(b, a)
            }
        }) : function(a, b, d) {
            return !!c.data(a, d[3])
        },
        focusable: function(a) {
            return p(a, !isNaN(c.attr(a, "tabindex")))
        },
        tabbable: function(a) {
            var b = c.attr(a, "tabindex"),
                d = isNaN(b);
            return (d || 0 <= b) && p(a, !d)
        }
    });
    c("<a>").outerWidth(1).jquery || c.each(["Width", "Height"], function(a, b) {
        function d(a, b, d, e) {
            c.each(f, function() {
                b -= parseFloat(c.css(a, "padding" + this)) || 0;
                d && (b -= parseFloat(c.css(a, "border" + this + "Width")) || 0);
                e && (b -= parseFloat(c.css(a, "margin" + this)) || 0)
            });
            return b
        }
        var f = "Width" === b ? ["Left", "Right"] : ["Top", "Bottom"],
            e = b.toLowerCase(),
            g = {
                innerWidth: c.fn.innerWidth,
                innerHeight: c.fn.innerHeight,
                outerWidth: c.fn.outerWidth,
                outerHeight: c.fn.outerHeight
            };
        c.fn["inner" + b] = function(a) {
            return void 0 === a ? g["inner" + b].call(this) : this.each(function() {
                c(this).css(e, d(this, a) + "px")
            })
        };
        c.fn["outer" + b] = function(a, f) {
            return "number" !== typeof a ? g["outer" + b].call(this, a) : this.each(function() {
                c(this).css(e, d(this, a, !0, f) + "px")
            })
        }
    });
    c.fn.addBack || (c.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    });
    c("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (c.fn.removeData = function(a) {
        return function(b) {
            return arguments.length ? a.call(this, c.camelCase(b)) : a.call(this)
        }
    }(c.fn.removeData));
    c.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    c.fn.extend({
        focus: function(a) {
            return function(b, d) {
                return "number" === typeof b ? this.each(function() {
                    var a = this;
                    setTimeout(function() {
                        c(a).focus();
                        d && d.call(a)
                    }, b)
                }) : a.apply(this, arguments)
            }
        }(c.fn.focus),
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(a) {
            if (void 0 !== a) return this.css("zIndex", a);
            if (this.length) {
                a = c(this[0]);
                for (var b; a.length && a[0] !== document;) {
                    b = a.css("position");
                    if ("absolute" === b || "relative" === b || "fixed" === b)
                        if (b = parseInt(a.css("zIndex"), 10), !isNaN(b) && 0 !== b) return b;
                    a = a.parent()
                }
            }
            return 0
        }
    });
    c.ui.plugin = {
        add: function(a, b, d) {
            var f;
            a = c.ui[a].prototype;
            for (f in d) a.plugins[f] = a.plugins[f] || [], a.plugins[f].push([b, d[f]])
        },
        call: function(a, b, d, c) {
            if ((b = a.plugins[b]) && (c || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (c = 0; c < b.length; c++) a.options[b[c][0]] && b[c][1].apply(a.element, d)
        }
    };
    var v = 0,
        E = Array.prototype.slice;
    c.cleanData = function(a) {
        return function(b) {
            var d, f, e;
            for (e = 0; null != (f = b[e]); e++) try {
                (d = c._data(f, "events")) && d.remove && c(f).triggerHandler("remove")
            } catch (g) {}
            a(b)
        }
    }(c.cleanData);
    c.widget = function(a, b, d) {
        var f, e, g, h, k = {},
            l = a.split(".")[0];
        a = a.split(".")[1];
        f = l + "-" + a;
        d || (d = b, b = c.Widget);
        c.expr[":"][f.toLowerCase()] = function(a) {
            return !!c.data(a, f)
        };
        c[l] = c[l] || {};
        e = c[l][a];
        g = c[l][a] = function(a, b) {
            if (!this._createWidget) return new g(a, b);
            arguments.length && this._createWidget(a, b)
        };
        c.extend(g, e, {
            version: d.version,
            _proto: c.extend({}, d),
            _childConstructors: []
        });
        h = new b;
        h.options = c.widget.extend({}, h.options);
        c.each(d, function(a, d) {
            c.isFunction(d) ? k[a] = function() {
                var c = function() {
                        return b.prototype[a].apply(this, arguments)
                    },
                    f = function(d) {
                        return b.prototype[a].apply(this, d)
                    };
                return function() {
                    var a = this._super,
                        b = this._superApply,
                        e;
                    this._super = c;
                    this._superApply = f;
                    e = d.apply(this, arguments);
                    this._super = a;
                    this._superApply = b;
                    return e
                }
            }() : k[a] = d
        });
        g.prototype = c.widget.extend(h, {
            widgetEventPrefix: e ? h.widgetEventPrefix || a : a
        }, k, {
            constructor: g,
            namespace: l,
            widgetName: a,
            widgetFullName: f
        });
        e ? (c.each(e._childConstructors, function(a, b) {
            var d = b.prototype;
            c.widget(d.namespace + "." + d.widgetName, g, b._proto)
        }), delete e._childConstructors) : b._childConstructors.push(g);
        c.widget.bridge(a, g);
        return g
    };
    c.widget.extend = function(a) {
        for (var b = E.call(arguments, 1), d = 0, f = b.length, e, g; d < f; d++)
            for (e in b[d]) g = b[d][e], b[d].hasOwnProperty(e) && void 0 !== g && (c.isPlainObject(g) ? a[e] = c.isPlainObject(a[e]) ? c.widget.extend({}, a[e], g) : c.widget.extend({}, g) : a[e] = g);
        return a
    };
    c.widget.bridge = function(a, b) {
        var d = b.prototype.widgetFullName || a;
        c.fn[a] = function(f) {
            var e = "string" === typeof f,
                g = E.call(arguments, 1),
                h = this;
            e ? this.each(function() {
                var b, e = c.data(this, d);
                if ("instance" === f) return h = e, !1;
                if (!e) return c.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + f + "'");
                if (!c.isFunction(e[f]) || "_" === f.charAt(0)) return c.error("no such method '" + f + "' for " + a + " widget instance");
                b = e[f].apply(e, g);
                if (b !== e && void 0 !== b) return h = b && b.jquery ? h.pushStack(b.get()) : b, !1
            }) : (g.length && (f = c.widget.extend.apply(null, [f].concat(g))), this.each(function() {
                var a = c.data(this, d);
                a ? (a.option(f || {}), a._init && a._init()) : c.data(this, d, new b(f, this))
            }));
            return h
        }
    };
    c.Widget = function() {};
    c.Widget._childConstructors = [];
    c.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(a, b) {
            b = c(b || this.defaultElement || this)[0];
            this.element = c(b);
            this.uuid = v++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = c();
            this.hoverable = c();
            this.focusable = c();
            b !== this && (c.data(b, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === b && this.destroy()
                }
            }), this.document = c(b.style ? b.ownerDocument : b.document || b), this.window = c(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = c.widget.extend({}, this.options, this._getCreateOptions(), a);
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: c.noop,
        _getCreateEventData: c.noop,
        _create: c.noop,
        _init: c.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(c.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: c.noop,
        widget: function() {
            return this.element
        },
        option: function(a, b) {
            var d = a,
                f, e, g;
            if (0 === arguments.length) return c.widget.extend({}, this.options);
            if ("string" === typeof a)
                if (d = {}, f = a.split("."), a = f.shift(), f.length) {
                    e = d[a] = c.widget.extend({}, this.options[a]);
                    for (g = 0; g < f.length - 1; g++) e[f[g]] = e[f[g]] || {}, e = e[f[g]];
                    a = f.pop();
                    if (1 === arguments.length) return void 0 === e[a] ? null : e[a];
                    e[a] = b
                } else {
                    if (1 === arguments.length) return void 0 === this.options[a] ? null : this.options[a];
                    d[a] = b
                }
            this._setOptions(d);
            return this
        },
        _setOptions: function(a) {
            for (var b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            this.options[a] = b;
            "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")));
            return this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(a, b, d) {
            var f, e = this;
            "boolean" !== typeof a && (d = b, b = a, a = !1);
            d ? (b = f = c(b), this.bindings = this.bindings.add(b)) : (d = b, b = this.element, f = this.widget());
            c.each(d, function(d, h) {
                function k() {
                    if (a || !0 !== e.options.disabled && !c(this).hasClass("ui-state-disabled")) return ("string" === typeof h ? e[h] : h).apply(e, arguments)
                }
                "string" !== typeof h && (k.guid = h.guid = h.guid || k.guid || c.guid++);
                var l = d.match(/^([\w:-]*)\s*(.*)$/),
                    m = l[1] + e.eventNamespace;
                (l = l[2]) ? f.delegate(l, m, k): b.bind(m, k)
            })
        },
        _off: function(a, b) {
            b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            a.unbind(b).undelegate(b);
            this.bindings = c(this.bindings.not(a).get());
            this.focusable = c(this.focusable.not(a).get());
            this.hoverable = c(this.hoverable.not(a).get())
        },
        _delay: function(a, b) {
            var d = this;
            return setTimeout(function() {
                return ("string" === typeof a ? d[a] : a).apply(d, arguments)
            }, b || 0)
        },
        _hoverable: function(a) {
            this.hoverable = this.hoverable.add(a);
            this._on(a, {
                mouseenter: function(a) {
                    c(a.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(a) {
                    c(a.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(a) {
            this.focusable = this.focusable.add(a);
            this._on(a, {
                focusin: function(a) {
                    c(a.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(a) {
                    c(a.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(a, b, d) {
            var f, e = this.options[a];
            d = d || {};
            b = c.Event(b);
            b.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase();
            b.target = this.element[0];
            if (a = b.originalEvent)
                for (f in a) f in b || (b[f] = a[f]);
            this.element.trigger(b, d);
            return !(c.isFunction(e) && !1 === e.apply(this.element[0], [b].concat(d)) || b.isDefaultPrevented())
        }
    };
    c.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(a, b) {
        c.Widget.prototype["_" + a] = function(d, f, e) {
            "string" === typeof f && (f = {
                effect: f
            });
            var g, h = f ? !0 === f || "number" === typeof f ? b : f.effect || b : a;
            f = f || {};
            "number" === typeof f && (f = {
                duration: f
            });
            g = !c.isEmptyObject(f);
            f.complete = e;
            f.delay && d.delay(f.delay);
            if (g && c.effects && c.effects.effect[h]) d[a](f);
            else if (h !== a && d[h]) d[h](f.duration, f.easing, e);
            else d.queue(function(b) {
                c(this)[a]();
                e && e.call(d[0]);
                b()
            })
        }
    });
    var y = !1;
    c(document).mouseup(function() {
        y = !1
    });
    c.widget("ui.mouse", {
        version: "1.11.3",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var a = this;
            this.element.bind("mousedown." + this.widgetName, function(b) {
                return a._mouseDown(b)
            }).bind("click." + this.widgetName, function(b) {
                if (!0 === c.data(b.target, a.widgetName + ".preventClickEvent")) return c.removeData(b.target, a.widgetName + ".preventClickEvent"), b.stopImmediatePropagation(), !1
            });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(a) {
            if (!y) {
                this._mouseMoved = !1;
                this._mouseStarted && this._mouseUp(a);
                this._mouseDownEvent = a;
                var b = this,
                    d = 1 === a.which,
                    f = "string" === typeof this.options.cancel && a.target.nodeName ? c(a.target).closest(this.options.cancel).length : !1;
                if (!d || f || !this._mouseCapture(a)) return !0;
                this.mouseDelayMet = !this.options.delay;
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    b.mouseDelayMet = !0
                }, this.options.delay));
                if (this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = !1 !== this._mouseStart(a), !this._mouseStarted)) return a.preventDefault(), !0;
                !0 === c.data(a.target, this.widgetName + ".preventClickEvent") && c.removeData(a.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function(a) {
                    return b._mouseMove(a)
                };
                this._mouseUpDelegate = function(a) {
                    return b._mouseUp(a)
                };
                this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                a.preventDefault();
                return y = !0
            }
        },
        _mouseMove: function(a) {
            if (this._mouseMoved && (c.ui.ie && (!document.documentMode || 9 > document.documentMode) && !a.button || !a.which)) return this._mouseUp(a);
            if (a.which || a.button) this._mouseMoved = !0;
            if (this._mouseStarted) return this._mouseDrag(a), a.preventDefault();
            this._mouseDistanceMet(a) && this._mouseDelayMet(a) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, a)) ? this._mouseDrag(a) : this._mouseUp(a));
            return !this._mouseStarted
        },
        _mouseUp: function(a) {
            this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            this._mouseStarted && (this._mouseStarted = !1, a.target === this._mouseDownEvent.target && c.data(a.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(a));
            return y = !1
        },
        _mouseDistanceMet: function(a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    });
    (function() {
        function a(a, b, d) {
            return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? d / 100 : 1)]
        }

        function b(a) {
            var b = a[0];
            return 9 === b.nodeType ? {
                width: a.width(),
                height: a.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : c.isWindow(b) ? {
                width: a.width(),
                height: a.height(),
                offset: {
                    top: a.scrollTop(),
                    left: a.scrollLeft()
                }
            } : b.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: b.pageY,
                    left: b.pageX
                }
            } : {
                width: a.outerWidth(),
                height: a.outerHeight(),
                offset: a.offset()
            }
        }
        c.ui = c.ui || {};
        var d, f, e = Math.max,
            g = Math.abs,
            h = Math.round,
            k = /left|center|right/,
            l = /top|center|bottom/,
            m = /[\+\-]\d+(\.[\d]+)?%?/,
            p = /^\w+/,
            n = /%$/,
            r = c.fn.position;
        c.position = {
            scrollbarWidth: function() {
                if (void 0 !== d) return d;
                var a, b, f = c("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>");
                b = f.children()[0];
                c("body").append(f);
                a = b.offsetWidth;
                f.css("overflow", "scroll");
                b = b.offsetWidth;
                a === b && (b = f[0].clientWidth);
                f.remove();
                return d = a - b
            },
            getScrollInfo: function(a) {
                var b = a.isWindow || a.isDocument ? "" : a.element.css("overflow-x"),
                    d = a.isWindow || a.isDocument ? "" : a.element.css("overflow-y"),
                    b = "scroll" === b || "auto" === b && a.width < a.element[0].scrollWidth;
                return {
                    width: "scroll" === d || "auto" === d && a.height < a.element[0].scrollHeight ? c.position.scrollbarWidth() : 0,
                    height: b ? c.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(a) {
                a = c(a || window);
                var b = c.isWindow(a[0]),
                    d = !!a[0] && 9 === a[0].nodeType;
                return {
                    element: a,
                    isWindow: b,
                    isDocument: d,
                    offset: a.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: a.scrollLeft(),
                    scrollTop: a.scrollTop(),
                    width: b || d ? a.width() : a.outerWidth(),
                    height: b || d ? a.height() : a.outerHeight()
                }
            }
        };
        c.fn.position = function(d) {
            if (!d || !d.of) return r.apply(this, arguments);
            d = c.extend({}, d);
            var A, w, x, z, t, u, n = c(d.of),
                F = c.position.getWithinInfo(d.within),
                G = c.position.getScrollInfo(F),
                v = (d.collision || "flip").split(" "),
                C = {};
            u = b(n);
            n[0].preventDefault && (d.at = "left top");
            w = u.width;
            x = u.height;
            z = u.offset;
            t = c.extend({}, z);
            c.each(["my", "at"], function() {
                var a = (d[this] || "").split(" "),
                    b, c;
                1 === a.length && (a = k.test(a[0]) ? a.concat(["center"]) : l.test(a[0]) ? ["center"].concat(a) : ["center", "center"]);
                a[0] = k.test(a[0]) ? a[0] : "center";
                a[1] = l.test(a[1]) ? a[1] : "center";
                b = m.exec(a[0]);
                c = m.exec(a[1]);
                C[this] = [b ? b[0] : 0, c ? c[0] : 0];
                d[this] = [p.exec(a[0])[0], p.exec(a[1])[0]]
            });
            1 === v.length && (v[1] = v[0]);
            "right" === d.at[0] ? t.left += w : "center" === d.at[0] && (t.left += w / 2);
            "bottom" === d.at[1] ? t.top += x : "center" === d.at[1] && (t.top += x / 2);
            A = a(C.at, w, x);
            t.left += A[0];
            t.top += A[1];
            return this.each(function() {
                var b, k, l = c(this),
                    m = l.outerWidth(),
                    u = l.outerHeight(),
                    p = parseInt(c.css(this, "marginLeft"), 10) || 0,
                    r = parseInt(c.css(this, "marginTop"), 10) || 0,
                    I = m + p + (parseInt(c.css(this, "marginRight"), 10) || 0) + G.width,
                    y = u + r + (parseInt(c.css(this, "marginBottom"), 10) || 0) + G.height,
                    q = c.extend({}, t),
                    B = a(C.my, l.outerWidth(), l.outerHeight());
                "right" === d.my[0] ? q.left -= m : "center" === d.my[0] && (q.left -= m / 2);
                "bottom" === d.my[1] ? q.top -= u : "center" === d.my[1] && (q.top -= u / 2);
                q.left += B[0];
                q.top += B[1];
                f || (q.left = h(q.left), q.top = h(q.top));
                b = {
                    marginLeft: p,
                    marginTop: r
                };
                c.each(["left", "top"], function(a, f) {
                    if (c.ui.position[v[a]]) c.ui.position[v[a]][f](q, {
                        targetWidth: w,
                        targetHeight: x,
                        elemWidth: m,
                        elemHeight: u,
                        collisionPosition: b,
                        collisionWidth: I,
                        collisionHeight: y,
                        offset: [A[0] + B[0], A[1] + B[1]],
                        my: d.my,
                        at: d.at,
                        within: F,
                        elem: l
                    })
                });
                d.using && (k = function(a) {
                    var b = z.left - q.left,
                        c = b + w - m,
                        f = z.top - q.top,
                        h = f + x - u,
                        k = {
                            target: {
                                element: n,
                                left: z.left,
                                top: z.top,
                                width: w,
                                height: x
                            },
                            element: {
                                element: l,
                                left: q.left,
                                top: q.top,
                                width: m,
                                height: u
                            },
                            horizontal: 0 > c ? "left" : 0 < b ? "right" : "center",
                            vertical: 0 > h ? "top" : 0 < f ? "bottom" : "middle"
                        };
                    w < m && g(b + c) < w && (k.horizontal = "center");
                    x < u && g(f + h) < x && (k.vertical = "middle");
                    e(g(b), g(c)) > e(g(f), g(h)) ? k.important = "horizontal" : k.important = "vertical";
                    d.using.call(this, a, k)
                });
                l.offset(c.extend(q, {
                    using: k
                }))
            })
        };
        c.ui.position = {
            fit: {
                left: function(a, b) {
                    var d = b.within,
                        c = d.isWindow ? d.scrollLeft : d.offset.left,
                        f = d.width,
                        g = a.left - b.collisionPosition.marginLeft,
                        d = c - g,
                        h = g + b.collisionWidth - f - c;
                    b.collisionWidth > f ? 0 < d && 0 >= h ? (c = a.left + d + b.collisionWidth - f - c, a.left += d - c) : a.left = 0 < h && 0 >= d ? c : d > h ? c + f - b.collisionWidth : c : a.left = 0 < d ? a.left + d : 0 < h ? a.left - h : e(a.left - g, a.left)
                },
                top: function(a, b) {
                    var d = b.within,
                        c = d.isWindow ? d.scrollTop : d.offset.top,
                        f = b.within.height,
                        g = a.top - b.collisionPosition.marginTop,
                        d = c - g,
                        h = g + b.collisionHeight - f - c;
                    b.collisionHeight > f ? 0 < d && 0 >= h ? (c = a.top + d + b.collisionHeight - f - c, a.top += d - c) : a.top = 0 < h && 0 >= d ? c : d > h ? c + f - b.collisionHeight : c : a.top = 0 < d ? a.top + d : 0 < h ? a.top - h : e(a.top - g, a.top)
                }
            },
            flip: {
                left: function(a, b) {
                    var d = b.within,
                        c = d.offset.left + d.scrollLeft,
                        f = d.width,
                        e = d.isWindow ? d.scrollLeft : d.offset.left,
                        h = a.left - b.collisionPosition.marginLeft,
                        d = h - e,
                        k = h + b.collisionWidth - f - e,
                        h = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                        l = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                        m = -2 * b.offset[0];
                    if (0 > d) {
                        if (c = a.left + h + l + m + b.collisionWidth - f - c, 0 > c || c < g(d)) a.left += h + l + m
                    } else 0 < k && (c = a.left - b.collisionPosition.marginLeft + h + l + m - e, 0 < c || g(c) < k) && (a.left += h + l + m)
                },
                top: function(a, b) {
                    var d = b.within,
                        c = d.offset.top + d.scrollTop,
                        f = d.height,
                        e = d.isWindow ? d.scrollTop : d.offset.top,
                        h = a.top - b.collisionPosition.marginTop,
                        d = h - e,
                        k = h + b.collisionHeight - f - e,
                        h = "top" === b.my[1] ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                        l = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                        m = -2 * b.offset[1];
                    if (0 > d) {
                        if (c = a.top + h + l + m + b.collisionHeight - f - c, 0 > c || c < g(d)) a.top += h + l + m
                    } else 0 < k && (c = a.top - b.collisionPosition.marginTop + h + l + m - e, 0 < c || g(c) < k) && (a.top += h + l + m)
                }
            },
            flipfit: {
                left: function() {
                    c.ui.position.flip.left.apply(this, arguments);
                    c.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    c.ui.position.flip.top.apply(this, arguments);
                    c.ui.position.fit.top.apply(this, arguments)
                }
            }
        };
        (function() {
            var a, b, d, e, g = document.getElementsByTagName("body")[0];
            d = document.createElement("div");
            a = document.createElement(g ? "div" : "body");
            b = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            g && c.extend(b, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (e in b) a.style[e] = b[e];
            a.appendChild(d);
            b = g || document.documentElement;
            b.insertBefore(a, b.firstChild);
            d.style.cssText = "position: absolute; left: 10.7432222px;";
            d = c(d).offset().left;
            f = 10 < d && 11 > d;
            a.innerHTML = "";
            b.removeChild(a)
        })()
    })();
    c.widget("ui.draggable", c.ui.mouse, {
        version: "1.11.3",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative();
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function(a, b) {
            this._super(a, b);
            "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy())
        },
        _mouseCapture: function(a) {
            var b = this.options;
            this._blurActiveElement(a);
            if (this.helper || b.disabled || 0 < c(a.target).closest(".ui-resizable-handle").length) return !1;
            this.handle = this._getHandle(a);
            if (!this.handle) return !1;
            this._blockFrames(!0 === b.iframeFix ? "iframe" : b.iframeFix);
            return !0
        },
        _blockFrames: function(a) {
            this.iframeBlocks = this.document.find(a).map(function() {
                var a = c(this);
                return c("<div>").css("position", "absolute").appendTo(a.parent()).outerWidth(a.outerWidth()).outerHeight(a.outerHeight()).offset(a.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(a) {
            var b = this.document[0];
            if (this.handleElement.is(a.target)) try {
                b.activeElement && "body" !== b.activeElement.nodeName.toLowerCase() && c(b.activeElement).blur()
            } catch (d) {}
        },
        _mouseStart: function(a) {
            var b = this.options;
            this.helper = this._createHelper(a);
            this.helper.addClass("ui-draggable-dragging");
            this._cacheHelperProportions();
            c.ui.ddmanager && (c.ui.ddmanager.current = this);
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent(!0);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
                return "fixed" === c(this).css("position")
            }).length;
            this.positionAbs = this.element.offset();
            this._refreshOffsets(a);
            this.originalPosition = this.position = this._generatePosition(a, !1);
            this.originalPageX = a.pageX;
            this.originalPageY = a.pageY;
            b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt);
            this._setContainment();
            if (!1 === this._trigger("start", a)) return this._clear(), !1;
            this._cacheHelperProportions();
            c.ui.ddmanager && !b.dropBehaviour && c.ui.ddmanager.prepareOffsets(this, a);
            this._normalizeRightBottom();
            this._mouseDrag(a, !0);
            c.ui.ddmanager && c.ui.ddmanager.dragStart(this, a);
            return !0
        },
        _refreshOffsets: function(a) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: a.pageX - this.offset.left,
                top: a.pageY - this.offset.top
            }
        },
        _mouseDrag: function(a, b) {
            this.hasFixedAncestor && (this.offset.parent = this._getParentOffset());
            this.position = this._generatePosition(a, !0);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!b) {
                var d = this._uiHash();
                if (!1 === this._trigger("drag", a, d)) return this._mouseUp({}), !1;
                this.position = d.position
            }
            this.helper[0].style.left = this.position.left + "px";
            this.helper[0].style.top = this.position.top + "px";
            c.ui.ddmanager && c.ui.ddmanager.drag(this, a);
            return !1
        },
        _mouseStop: function(a) {
            var b = this,
                d = !1;
            c.ui.ddmanager && !this.options.dropBehaviour && (d = c.ui.ddmanager.drop(this, a));
            this.dropped && (d = this.dropped, this.dropped = !1);
            "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || !0 === this.options.revert || c.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? c(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== b._trigger("stop", a) && b._clear()
            }) : !1 !== this._trigger("stop", a) && this._clear();
            return !1
        },
        _mouseUp: function(a) {
            this._unblockFrames();
            c.ui.ddmanager && c.ui.ddmanager.dragStop(this, a);
            this.handleElement.is(a.target) && this.element.focus();
            return c.ui.mouse.prototype._mouseUp.call(this, a)
        },
        cancel: function() {
            this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear();
            return this
        },
        _getHandle: function(a) {
            return this.options.handle ? !!c(a.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function(a) {
            var b = this.options,
                d = c.isFunction(b.helper);
            a = d ? c(b.helper.apply(this.element[0], [a])) : "clone" === b.helper ? this.element.clone().removeAttr("id") : this.element;
            a.parents("body").length || a.appendTo("parent" === b.appendTo ? this.element[0].parentNode : b.appendTo);
            d && a[0] === this.element[0] && this._setPositionRelative();
            a[0] === this.element[0] || /(fixed|absolute)/.test(a.css("position")) || a.css("position", "absolute");
            return a
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(a) {
            "string" === typeof a && (a = a.split(" "));
            c.isArray(a) && (a = {
                left: +a[0],
                top: +a[1] || 0
            });
            "left" in a && (this.offset.click.left = a.left + this.margins.left);
            "right" in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left);
            "top" in a && (this.offset.click.top = a.top + this.margins.top);
            "bottom" in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
        },
        _isRootNode: function(a) {
            return /(html|body)/i.test(a.tagName) || a === this.document[0]
        },
        _getParentOffset: function() {
            var a = this.offsetParent.offset(),
                b = this.document[0];
            "absolute" === this.cssPosition && this.scrollParent[0] !== b && c.contains(this.scrollParent[0], this.offsetParent[0]) && (a.left += this.scrollParent.scrollLeft(), a.top += this.scrollParent.scrollTop());
            this._isRootNode(this.offsetParent[0]) && (a = {
                top: 0,
                left: 0
            });
            return {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var a = this.element.position(),
                b = this._isRootNode(this.scrollParent[0]);
            return {
                top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
                left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var a, b, d;
            a = this.options;
            b = this.document[0];
            this.relativeContainer = null;
            if (a.containment)
                if ("window" === a.containment) this.containment = [c(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, c(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, c(window).scrollLeft() + c(window).width() - this.helperProportions.width - this.margins.left, c(window).scrollTop() + (c(window).height() || b.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                else if ("document" === a.containment) this.containment = [0, 0, c(b).width() - this.helperProportions.width - this.margins.left, (c(b).height() || b.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            else if (a.containment.constructor === Array) this.containment = a.containment;
            else {
                if ("parent" === a.containment && (a.containment = this.helper[0].parentNode), b = c(a.containment), d = b[0]) a = /(scroll|auto)/.test(b.css("overflow")), this.containment = [(parseInt(b.css("borderLeftWidth"), 10) || 0) + (parseInt(b.css("paddingLeft"), 10) || 0), (parseInt(b.css("borderTopWidth"), 10) || 0) + (parseInt(b.css("paddingTop"), 10) || 0), (a ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(b.css("borderRightWidth"), 10) || 0) - (parseInt(b.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (a ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(b.css("borderBottomWidth"), 10) || 0) - (parseInt(b.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = b
            } else this.containment = null
        },
        _convertPositionTo: function(a, b) {
            b || (b = this.position);
            var d = "absolute" === a ? 1 : -1,
                c = this._isRootNode(this.scrollParent[0]);
            return {
                top: b.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.offset.scroll.top : c ? 0 : this.offset.scroll.top) * d,
                left: b.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.offset.scroll.left : c ? 0 : this.offset.scroll.left) * d
            }
        },
        _generatePosition: function(a, b) {
            var d, c, e, g = this.options,
                h = this._isRootNode(this.scrollParent[0]);
            e = a.pageX;
            c = a.pageY;
            h && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            });
            b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), d = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : d = this.containment, a.pageX - this.offset.click.left < d[0] && (e = d[0] + this.offset.click.left), a.pageY - this.offset.click.top < d[1] && (c = d[1] + this.offset.click.top), a.pageX - this.offset.click.left > d[2] && (e = d[2] + this.offset.click.left), a.pageY - this.offset.click.top > d[3] && (c = d[3] + this.offset.click.top)), g.grid && (c = g.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, c = d ? c - this.offset.click.top >= d[1] || c - this.offset.click.top > d[3] ? c : c - this.offset.click.top >= d[1] ? c - g.grid[1] : c + g.grid[1] : c, e = g.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, e = d ? e - this.offset.click.left >= d[0] || e - this.offset.click.left > d[2] ? e : e - this.offset.click.left >= d[0] ? e - g.grid[0] : e + g.grid[0] : e), "y" === g.axis && (e = this.originalPageX), "x" === g.axis && (c = this.originalPageY));
            return {
                top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1;
            this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function() {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto"));
            "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function(a, b, d) {
            d = d || this._uiHash();
            c.ui.plugin.call(this, a, [b, d, this], !0);
            /^(drag|start|stop)/.test(a) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs);
            return c.Widget.prototype._trigger.call(this, a, b, d)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    c.ui.plugin.add("draggable", "cursor", {
        start: function(a, b, d) {
            a = c("body");
            d = d.options;
            a.css("cursor") && (d._cursor = a.css("cursor"));
            a.css("cursor", d.cursor)
        },
        stop: function(a, b, d) {
            a = d.options;
            a._cursor && c("body").css("cursor", a._cursor)
        }
    });
    c.ui.plugin.add("draggable", "opacity", {
        start: function(a, b, d) {
            a = c(b.helper);
            d = d.options;
            a.css("opacity") && (d._opacity = a.css("opacity"));
            a.css("opacity", d.opacity)
        },
        stop: function(a, b, d) {
            a = d.options;
            a._opacity && c(b.helper).css("opacity", a._opacity)
        }
    });
    c.ui.plugin.add("draggable", "scroll", {
        start: function(a, b, d) {
            d.scrollParentNotHidden || (d.scrollParentNotHidden = d.helper.scrollParent(!1));
            d.scrollParentNotHidden[0] !== d.document[0] && "HTML" !== d.scrollParentNotHidden[0].tagName && (d.overflowOffset = d.scrollParentNotHidden.offset())
        },
        drag: function(a, b, d) {
            b = d.options;
            var f = !1,
                e = d.scrollParentNotHidden[0],
                g = d.document[0];
            e !== g && "HTML" !== e.tagName ? (b.axis && "x" === b.axis || (d.overflowOffset.top + e.offsetHeight - a.pageY < b.scrollSensitivity ? e.scrollTop = f = e.scrollTop + b.scrollSpeed : a.pageY - d.overflowOffset.top < b.scrollSensitivity && (e.scrollTop = f = e.scrollTop - b.scrollSpeed)), b.axis && "y" === b.axis || (d.overflowOffset.left + e.offsetWidth - a.pageX < b.scrollSensitivity ? e.scrollLeft = f = e.scrollLeft + b.scrollSpeed : a.pageX - d.overflowOffset.left < b.scrollSensitivity && (e.scrollLeft = f = e.scrollLeft - b.scrollSpeed))) : (b.axis && "x" === b.axis || (a.pageY - c(g).scrollTop() < b.scrollSensitivity ? f = c(g).scrollTop(c(g).scrollTop() - b.scrollSpeed) : c(window).height() - (a.pageY - c(g).scrollTop()) < b.scrollSensitivity && (f = c(g).scrollTop(c(g).scrollTop() + b.scrollSpeed))), b.axis && "y" === b.axis || (a.pageX - c(g).scrollLeft() < b.scrollSensitivity ? f = c(g).scrollLeft(c(g).scrollLeft() - b.scrollSpeed) : c(window).width() - (a.pageX - c(g).scrollLeft()) < b.scrollSensitivity && (f = c(g).scrollLeft(c(g).scrollLeft() + b.scrollSpeed))));
            !1 !== f && c.ui.ddmanager && !b.dropBehaviour && c.ui.ddmanager.prepareOffsets(d, a)
        }
    });
    c.ui.plugin.add("draggable", "stack", {
        start: function(a, b, d) {
            var f;
            a = c.makeArray(c(d.options.stack)).sort(function(a, b) {
                return (parseInt(c(a).css("zIndex"), 10) || 0) - (parseInt(c(b).css("zIndex"), 10) || 0)
            });
            a.length && (f = parseInt(c(a[0]).css("zIndex"), 10) || 0, c(a).each(function(a) {
                c(this).css("zIndex", f + a)
            }), this.css("zIndex", f + a.length))
        }
    });
    c.ui.plugin.add("draggable", "zIndex", {
        start: function(a, b, d) {
            a = c(b.helper);
            d = d.options;
            a.css("zIndex") && (d._zIndex = a.css("zIndex"));
            a.css("zIndex", d.zIndex)
        },
        stop: function(a, b, d) {
            a = d.options;
            a._zIndex && c(b.helper).css("zIndex", a._zIndex)
        }
    });
    c.widget("ui.resizable", c.ui.mouse, {
        version: "1.11.3",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(a) {
            return parseInt(a, 10) || 0
        },
        _isNumber: function(a) {
            return !isNaN(parseInt(a, 10))
        },
        _hasScroll: function(a, b) {
            if ("hidden" === c(a).css("overflow")) return !1;
            var d = b && "left" === b ? "scrollLeft" : "scrollTop",
                f = !1;
            if (0 < a[d]) return !0;
            a[d] = 1;
            f = 0 < a[d];
            a[d] = 0;
            return f
        },
        _create: function() {
            var a, b, d, f, e, g = this,
                h = this.options;
            this.element.addClass("ui-resizable");
            c.extend(this, {
                _aspectRatio: !!h.aspectRatio,
                aspectRatio: h.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
            });
            this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(c("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize());
            this.handles = h.handles || (c(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            if (this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), a = this.handles.split(","), this.handles = {}, b = 0; b < a.length; b++) d = c.trim(a[b]), e = "ui-resizable-" + d, f = c("<div class='ui-resizable-handle " + e + "'></div>"), f.css({
                    zIndex: h.zIndex
                }), "se" === d && f.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(f);
            this._renderAxis = function(a) {
                var b, d, f;
                a = a || this.element;
                for (b in this.handles) this.handles[b].constructor === String && (this.handles[b] = this.element.children(this.handles[b]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (d = c(this.handles[b], this.element), f = /sw|ne|nw|se|n|s/.test(b) ? d.outerHeight() : d.outerWidth(), d = ["padding", /ne|nw|n/.test(b) ? "Top" : /se|sw|s/.test(b) ? "Bottom" : /^e$/.test(b) ? "Right" : "Left"].join(""), a.css(d, f), this._proportionallyResize()), c(this.handles[b])
            };
            this._renderAxis(this.element);
            this._handles = c(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function() {
                g.resizing || (this.className && (f = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = f && f[1] ? f[1] : "se")
            });
            h.autoHide && (this._handles.hide(), c(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                h.disabled || (c(this).removeClass("ui-resizable-autohide"), g._handles.show())
            }).mouseleave(function() {
                h.disabled || g.resizing || (c(this).addClass("ui-resizable-autohide"), g._handles.hide())
            }));
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var a, b = function(a) {
                c(a).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            this.elementIsWrapper && (b(this.element), a = this.element, this.originalElement.css({
                position: a.css("position"),
                width: a.outerWidth(),
                height: a.outerHeight(),
                top: a.css("top"),
                left: a.css("left")
            }).insertAfter(a), a.remove());
            this.originalElement.css("resize", this.originalResizeStyle);
            b(this.originalElement);
            return this
        },
        _mouseCapture: function(a) {
            var b, d, f = !1;
            for (b in this.handles)
                if (d = c(this.handles[b])[0], d === a.target || c.contains(d, a.target)) f = !0;
            return !this.options.disabled && f
        },
        _mouseStart: function(a) {
            var b, d, f = this.options,
                e = this.element;
            this.resizing = !0;
            this._renderProxy();
            b = this._num(this.helper.css("left"));
            d = this._num(this.helper.css("top"));
            f.containment && (b += c(f.containment).scrollLeft() || 0, d += c(f.containment).scrollTop() || 0);
            this.offset = this.helper.offset();
            this.position = {
                left: b,
                top: d
            };
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: e.width(),
                height: e.height()
            };
            this.originalSize = this._helper ? {
                width: e.outerWidth(),
                height: e.outerHeight()
            } : {
                width: e.width(),
                height: e.height()
            };
            this.sizeDiff = {
                width: e.outerWidth() - e.width(),
                height: e.outerHeight() - e.height()
            };
            this.originalPosition = {
                left: b,
                top: d
            };
            this.originalMousePosition = {
                left: a.pageX,
                top: a.pageY
            };
            this.aspectRatio = "number" === typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            b = c(".ui-resizable-" + this.axis).css("cursor");
            c("body").css("cursor", "auto" === b ? this.axis + "-resize" : b);
            e.addClass("ui-resizable-resizing");
            this._propagate("start", a);
            return !0
        },
        _mouseDrag: function(a) {
            var b, d = this.originalMousePosition;
            b = a.pageX - d.left || 0;
            var d = a.pageY - d.top || 0,
                f = this._change[this.axis];
            this._updatePrevProperties();
            if (!f) return !1;
            b = f.apply(this, [a, b, d]);
            this._updateVirtualBoundaries(a.shiftKey);
            if (this._aspectRatio || a.shiftKey) b = this._updateRatio(b, a);
            b = this._respectSize(b, a);
            this._updateCache(b);
            this._propagate("resize", a);
            b = this._applyChanges();
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize();
            c.isEmptyObject(b) || (this._updatePrevProperties(), this._trigger("resize", a, this.ui()), this._applyChanges());
            return !1
        },
        _mouseStop: function(a) {
            this.resizing = !1;
            var b, d, f, e = this.options;
            this._helper && (b = this._proportionallyResizeElements, b = (d = b.length && /textarea/i.test(b[0].nodeName)) && this._hasScroll(b[0], "left") ? 0 : this.sizeDiff.height, d = d ? 0 : this.sizeDiff.width, d = {
                width: this.helper.width() - d,
                height: this.helper.height() - b
            }, b = parseInt(this.element.css("left"), 10) + (this.position.left - this.originalPosition.left) || null, f = parseInt(this.element.css("top"), 10) + (this.position.top - this.originalPosition.top) || null, e.animate || this.element.css(c.extend(d, {
                top: f,
                left: b
            })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !e.animate && this._proportionallyResize());
            c("body").css("cursor", "auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop", a);
            this._helper && this.helper.remove();
            return !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var a = {};
            this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px");
            this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px");
            this.size.width !== this.prevSize.width && (a.width = this.size.width + "px");
            this.size.height !== this.prevSize.height && (a.height = this.size.height + "px");
            this.helper.css(a);
            return a
        },
        _updateVirtualBoundaries: function(a) {
            var b, d, c, e;
            e = this.options;
            e = {
                minWidth: this._isNumber(e.minWidth) ? e.minWidth : 0,
                maxWidth: this._isNumber(e.maxWidth) ? e.maxWidth : Infinity,
                minHeight: this._isNumber(e.minHeight) ? e.minHeight : 0,
                maxHeight: this._isNumber(e.maxHeight) ? e.maxHeight : Infinity
            };
            if (this._aspectRatio || a) a = e.minHeight * this.aspectRatio, d = e.minWidth / this.aspectRatio, b = e.maxHeight * this.aspectRatio, c = e.maxWidth / this.aspectRatio, a > e.minWidth && (e.minWidth = a), d > e.minHeight && (e.minHeight = d), b < e.maxWidth && (e.maxWidth = b), c < e.maxHeight && (e.maxHeight = c);
            this._vBoundaries = e
        },
        _updateCache: function(a) {
            this.offset = this.helper.offset();
            this._isNumber(a.left) && (this.position.left = a.left);
            this._isNumber(a.top) && (this.position.top = a.top);
            this._isNumber(a.height) && (this.size.height = a.height);
            this._isNumber(a.width) && (this.size.width = a.width)
        },
        _updateRatio: function(a) {
            var b = this.position,
                d = this.size,
                c = this.axis;
            this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio);
            "sw" === c && (a.left = b.left + (d.width - a.width), a.top = null);
            "nw" === c && (a.top = b.top + (d.height - a.height), a.left = b.left + (d.width - a.width));
            return a
        },
        _respectSize: function(a) {
            var b = this._vBoundaries,
                d = this.axis,
                c = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width,
                e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height,
                g = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width,
                h = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height,
                k = this.originalPosition.left + this.originalSize.width,
                l = this.position.top + this.size.height,
                m = /sw|nw|w/.test(d),
                d = /nw|ne|n/.test(d);
            g && (a.width = b.minWidth);
            h && (a.height = b.minHeight);
            c && (a.width = b.maxWidth);
            e && (a.height = b.maxHeight);
            g && m && (a.left = k - b.minWidth);
            c && m && (a.left = k - b.maxWidth);
            h && d && (a.top = l - b.minHeight);
            e && d && (a.top = l - b.maxHeight);
            a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null;
            return a
        },
        _getPaddingPlusBorderDimensions: function(a) {
            var b = 0,
                d = [],
                c = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")];
            for (a = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; 4 > b; b++) d[b] = parseInt(c[b], 10) || 0, d[b] += parseInt(a[b], 10) || 0;
            return {
                height: d[0] + d[2],
                width: d[1] + d[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var a, b = 0, d = this.helper || this.element; b < this._proportionallyResizeElements.length; b++) a = this._proportionallyResizeElements[b], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({
                    height: d.height() - this.outerDimensions.height || 0,
                    width: d.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function() {
            var a = this.options;
            this.elementOffset = this.element.offset();
            this._helper ? (this.helper = this.helper || c("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++a.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(a, b) {
                return {
                    width: this.originalSize.width + b
                }
            },
            w: function(a, b) {
                return {
                    left: this.originalPosition.left + b,
                    width: this.originalSize.width - b
                }
            },
            n: function(a, b, d) {
                return {
                    top: this.originalPosition.top + d,
                    height: this.originalSize.height - d
                }
            },
            s: function(a, b, d) {
                return {
                    height: this.originalSize.height + d
                }
            },
            se: function(a, b, d) {
                return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [a, b, d]))
            },
            sw: function(a, b, d) {
                return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [a, b, d]))
            },
            ne: function(a, b, d) {
                return c.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [a, b, d]))
            },
            nw: function(a, b, d) {
                return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [a, b, d]))
            }
        },
        _propagate: function(a, b) {
            c.ui.plugin.call(this, a, [b, this.ui()]);
            "resize" !== a && this._trigger(a, b, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    c.ui.plugin.add("resizable", "containment", {
        start: function() {
            var a, b, d, f, e, g = c(this).resizable("instance"),
                h = g.element;
            d = g.options.containment;
            if (h = d instanceof c ? d.get(0) : /parent/.test(d) ? h.parent().get(0) : d) g.containerElement = c(h), /document/.test(d) || d === document ? (g.containerOffset = {
                left: 0,
                top: 0
            }, g.containerPosition = {
                left: 0,
                top: 0
            }, g.parentData = {
                element: c(document),
                left: 0,
                top: 0,
                width: c(document).width(),
                height: c(document).height() || document.body.parentNode.scrollHeight
            }) : (a = c(h), b = [], c(["Top", "Right", "Left", "Bottom"]).each(function(d, c) {
                b[d] = g._num(a.css("padding" + c))
            }), g.containerOffset = a.offset(), g.containerPosition = a.position(), g.containerSize = {
                height: a.innerHeight() - b[3],
                width: a.innerWidth() - b[1]
            }, d = g.containerOffset, f = g.containerSize.height, e = g.containerSize.width, e = g._hasScroll(h, "left") ? h.scrollWidth : e, f = g._hasScroll(h) ? h.scrollHeight : f, g.parentData = {
                element: h,
                left: d.left,
                top: d.top,
                width: e,
                height: f
            })
        },
        resize: function(a) {
            var b, d, f, e = c(this).resizable("instance");
            b = e.options;
            d = e.containerOffset;
            f = e.position;
            a = e._aspectRatio || a.shiftKey;
            var g = {
                    top: 0,
                    left: 0
                },
                h = e.containerElement,
                k = !0;
            h[0] !== document && /static/.test(h.css("position")) && (g = d);
            f.left < (e._helper ? d.left : 0) && (e.size.width += e._helper ? e.position.left - d.left : e.position.left - g.left, a && (e.size.height = e.size.width / e.aspectRatio, k = !1), e.position.left = b.helper ? d.left : 0);
            f.top < (e._helper ? d.top : 0) && (e.size.height += e._helper ? e.position.top - d.top : e.position.top, a && (e.size.width = e.size.height * e.aspectRatio, k = !1), e.position.top = e._helper ? d.top : 0);
            b = e.containerElement.get(0) === e.element.parent().get(0);
            f = /relative|absolute/.test(e.containerElement.css("position"));
            b && f ? (e.offset.left = e.parentData.left + e.position.left, e.offset.top = e.parentData.top + e.position.top) : (e.offset.left = e.element.offset().left, e.offset.top = e.element.offset().top);
            b = Math.abs(e.sizeDiff.width + (e._helper ? e.offset.left - g.left : e.offset.left - d.left));
            d = Math.abs(e.sizeDiff.height + (e._helper ? e.offset.top - g.top : e.offset.top - d.top));
            b + e.size.width >= e.parentData.width && (e.size.width = e.parentData.width - b, a && (e.size.height = e.size.width / e.aspectRatio, k = !1));
            d + e.size.height >= e.parentData.height && (e.size.height = e.parentData.height - d, a && (e.size.width = e.size.height * e.aspectRatio, k = !1));
            k || (e.position.left = e.prevPosition.left, e.position.top = e.prevPosition.top, e.size.width = e.prevSize.width, e.size.height = e.prevSize.height)
        },
        stop: function() {
            var a = c(this).resizable("instance"),
                b = a.options,
                d = a.containerOffset,
                f = a.containerPosition,
                e = a.containerElement,
                g = c(a.helper),
                h = g.offset(),
                k = g.outerWidth() - a.sizeDiff.width,
                g = g.outerHeight() - a.sizeDiff.height;
            a._helper && !b.animate && /relative/.test(e.css("position")) && c(this).css({
                left: h.left - f.left - d.left,
                width: "100px",
                height: g
            });
            a._helper && !b.animate && /static/.test(e.css("position")) && c(this).css({
                left: h.left - f.left - d.left,
                width: k,
                height: g
            })
        }
    });
    c.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var a = c(this).resizable("instance").options,
                b = function(a) {
                    c(a).each(function() {
                        var a = c(this);
                        a.data("ui-resizable-alsoresize", {
                            width: parseInt(a.width(), 10),
                            height: parseInt(a.height(), 10),
                            left: parseInt(a.css("left"), 10),
                            top: parseInt(a.css("top"), 10)
                        })
                    })
                };
            "object" !== typeof a.alsoResize || a.alsoResize.parentNode ? b(a.alsoResize) : a.alsoResize.length ? (a.alsoResize = a.alsoResize[0], b(a.alsoResize)) : c.each(a.alsoResize, function(a) {
                b(a)
            })
        },
        resize: function(a, b) {
            var d = c(this).resizable("instance"),
                f = d.options,
                e = d.originalSize,
                g = d.originalPosition,
                h = {
                    height: d.size.height - e.height || 0,
                    width: d.size.width - e.width || 0,
                    top: d.position.top - g.top || 0,
                    left: d.position.left - g.left || 0
                },
                k = function(a, d) {
                    c(a).each(function() {
                        var a = c(this),
                            f = c(this).data("ui-resizable-alsoresize"),
                            e = {},
                            g = d && d.length ? d : a.parents(b.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        c.each(g, function(a, b) {
                            var d = (f[b] || 0) + (h[b] || 0);
                            d && 0 <= d && (e[b] = d || null)
                        });
                        a.css(e)
                    })
                };
            "object" !== typeof f.alsoResize || f.alsoResize.nodeType ? k(f.alsoResize) : c.each(f.alsoResize, function(a, b) {
                k(a, b)
            })
        },
        stop: function() {
            c(this).removeData("resizable-alsoresize")
        }
    });
    c.widget("ui.menu", {
        version: "1.11.3",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            });
            this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
            this._on({
                "mousedown .ui-menu-item": function(a) {
                    a.preventDefault()
                },
                "click .ui-menu-item": function(a) {
                    var b = c(a.target);
                    !this.mouseHandled && b.not(".ui-state-disabled").length && (this.select(a), a.isPropagationStopped() || (this.mouseHandled = !0), b.has(".ui-menu").length ? this.expand(a) : !this.element.is(":focus") && c(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(a) {
                    if (!this.previousFilter) {
                        var b = c(a.currentTarget);
                        b.siblings(".ui-state-active").removeClass("ui-state-active");
                        this.focus(a, b)
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(a, b) {
                    var d = this.active || this.element.find(this.options.items).eq(0);
                    b || this.focus(a, d)
                },
                blur: function(a) {
                    this._delay(function() {
                        c.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(a)
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(a) {
                    this._closeOnDocumentClick(a) && this.collapseAll(a);
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var a = c(this);
                a.data("ui-menu-submenu-carat") && a.remove()
            });
            this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(a) {
            var b, d, f, e = !0;
            switch (a.keyCode) {
                case c.ui.keyCode.PAGE_UP:
                    this.previousPage(a);
                    break;
                case c.ui.keyCode.PAGE_DOWN:
                    this.nextPage(a);
                    break;
                case c.ui.keyCode.HOME:
                    this._move("first", "first", a);
                    break;
                case c.ui.keyCode.END:
                    this._move("last", "last", a);
                    break;
                case c.ui.keyCode.UP:
                    this.previous(a);
                    break;
                case c.ui.keyCode.DOWN:
                    this.next(a);
                    break;
                case c.ui.keyCode.LEFT:
                    this.collapse(a);
                    break;
                case c.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(a);
                    break;
                case c.ui.keyCode.ENTER:
                case c.ui.keyCode.SPACE:
                    this._activate(a);
                    break;
                case c.ui.keyCode.ESCAPE:
                    this.collapse(a);
                    break;
                default:
                    e = !1, b = this.previousFilter || "", d = String.fromCharCode(a.keyCode), f = !1, clearTimeout(this.filterTimer), d === b ? f = !0 : d = b + d, b = this._filterMenuItems(d), b = f && -1 !== b.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : b, b.length || (d = String.fromCharCode(a.keyCode), b = this._filterMenuItems(d)), b.length ? (this.focus(a, b), this.previousFilter = d, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1E3)) : delete this.previousFilter
            }
            e && a.preventDefault()
        },
        _activate: function(a) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(a) : this.select(a))
        },
        refresh: function() {
            var a, b = this,
                d = this.options.icons.submenu;
            a = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
            a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var a = c(this),
                    b = a.parent(),
                    g = c("<span>").addClass("ui-menu-icon ui-icon " + d).data("ui-menu-submenu-carat", !0);
                b.attr("aria-haspopup", "true").prepend(g);
                a.attr("aria-labelledby", b.attr("id"))
            });
            a = a.add(this.element).find(this.options.items);
            a.not(".ui-menu-item").each(function() {
                var a = c(this);
                b._isDivider(a) && a.addClass("ui-widget-content ui-menu-divider")
            });
            a.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            a.filter(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !c.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(a, b) {
            "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu);
            "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b);
            this._super(a, b)
        },
        focus: function(a, b) {
            var d;
            this.blur(a, a && "focus" === a.type);
            this._scrollIntoView(b);
            this.active = b.first();
            d = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
            this.options.role && this.element.attr("aria-activedescendant", d.attr("id"));
            this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
            a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay);
            d = b.children(".ui-menu");
            d.length && a && /^mouse/.test(a.type) && this._startOpening(d);
            this.activeMenu = b.parent();
            this._trigger("focus", a, {
                item: b
            })
        },
        _scrollIntoView: function(a) {
            var b, d, f;
            this._hasScroll() && (b = parseFloat(c.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(c.css(this.activeMenu[0], "paddingTop")) || 0, b = a.offset().top - this.activeMenu.offset().top - b - d, d = this.activeMenu.scrollTop(), f = this.activeMenu.height(), a = a.outerHeight(), 0 > b ? this.activeMenu.scrollTop(d + b) : b + a > f && this.activeMenu.scrollTop(d + b - f + a))
        },
        blur: function(a, b) {
            b || clearTimeout(this.timer);
            this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {
                item: this.active
            }))
        },
        _startOpening: function(a) {
            clearTimeout(this.timer);
            "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close();
                this._open(a)
            }, this.delay))
        },
        _open: function(a) {
            var b = c.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(a.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            a.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(b)
        },
        collapseAll: function(a, b) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var d = b ? this.element : c(a && a.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element);
                this._close(d);
                this.blur(a);
                this.activeMenu = d
            }, this.delay)
        },
        _close: function(a) {
            a || (a = this.active ? this.active.parent() : this.element);
            a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function(a) {
            return !c(a.target).closest(".ui-menu").length
        },
        _isDivider: function(a) {
            return !/[^\-\u2014\u2013\s]/.test(a.text())
        },
        collapse: function(a) {
            var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            b && b.length && (this._close(), this.focus(a, b))
        },
        expand: function(a) {
            var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            b && b.length && (this._open(b.parent()), this._delay(function() {
                this.focus(a, b)
            }))
        },
        next: function(a) {
            this._move("next", "first", a)
        },
        previous: function(a) {
            this._move("prev", "last", a)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(a, b, d) {
            var c;
            this.active && (c = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0));
            c && c.length && this.active || (c = this.activeMenu.find(this.options.items)[b]());
            this.focus(d, c)
        },
        nextPage: function(a) {
            var b, d, f;
            this.active ? this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, f = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                b = c(this);
                return 0 > b.offset().top - d - f
            }), this.focus(a, b)) : this.focus(a, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(a)
        },
        previousPage: function(a) {
            var b, d, f;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, f = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                b = c(this);
                return 0 < b.offset().top - d + f
            }), this.focus(a, b)) : this.focus(a, this.activeMenu.find(this.options.items).first())) : this.next(a)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(a) {
            this.active = this.active || c(a.target).closest(".ui-menu-item");
            var b = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(a, !0);
            this._trigger("select", a, b)
        },
        _filterMenuItems: function(a) {
            a = a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            var b = new RegExp("^" + a, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return b.test(c.trim(c(this).text()))
            })
        }
    });
    c.widget("ui.autocomplete", {
        version: "1.11.3",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var a, b, d, f = this.element[0].nodeName.toLowerCase(),
                e = "textarea" === f,
                f = "input" === f;
            this.isMultiLine = e ? !0 : f ? !1 : this.element.prop("isContentEditable");
            this.valueMethod = this.element[e || f ? "val" : "text"];
            this.isNewMenu = !0;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(f) {
                    if (this.element.prop("readOnly")) b = d = a = !0;
                    else {
                        b = d = a = !1;
                        var e = c.ui.keyCode;
                        switch (f.keyCode) {
                            case e.PAGE_UP:
                                a = !0;
                                this._move("previousPage", f);
                                break;
                            case e.PAGE_DOWN:
                                a = !0;
                                this._move("nextPage", f);
                                break;
                            case e.UP:
                                a = !0;
                                this._keyEvent("previous", f);
                                break;
                            case e.DOWN:
                                a = !0;
                                this._keyEvent("next", f);
                                break;
                            case e.ENTER:
                                this.menu.active && (a = !0, f.preventDefault(), this.menu.select(f));
                                break;
                            case e.TAB:
                                this.menu.active && this.menu.select(f);
                                break;
                            case e.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(f), f.preventDefault());
                                break;
                            default:
                                b = !0, this._searchTimeout(f)
                        }
                    }
                },
                keypress: function(d) {
                    if (a) a = !1, this.isMultiLine && !this.menu.element.is(":visible") || d.preventDefault();
                    else if (!b) {
                        var f = c.ui.keyCode;
                        switch (d.keyCode) {
                            case f.PAGE_UP:
                                this._move("previousPage", d);
                                break;
                            case f.PAGE_DOWN:
                                this._move("nextPage", d);
                                break;
                            case f.UP:
                                this._keyEvent("previous", d);
                                break;
                            case f.DOWN:
                                this._keyEvent("next", d)
                        }
                    }
                },
                input: function(a) {
                    d ? (d = !1, a.preventDefault()) : this._searchTimeout(a)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(a) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), this._change(a))
                }
            });
            this._initSource();
            this.menu = c("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance");
            this._on(this.menu.element, {
                mousedown: function(a) {
                    a.preventDefault();
                    this.cancelBlur = !0;
                    this._delay(function() {
                        delete this.cancelBlur
                    });
                    var b = this.menu.element[0];
                    c(a.target).closest(".ui-menu-item").length || this._delay(function() {
                        var a = this;
                        this.document.one("mousedown", function(d) {
                            d.target === a.element[0] || d.target === b || c.contains(b, d.target) || a.close()
                        })
                    })
                },
                menufocus: function(a, b) {
                    var d;
                    if (this.isNewMenu && (this.isNewMenu = !1, a.originalEvent && /^mouse/.test(a.originalEvent.type))) {
                        this.menu.blur();
                        this.document.one("mousemove", function() {
                            c(a.target).trigger(a.originalEvent)
                        });
                        return
                    }
                    d = b.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", a, {
                        item: d
                    }) && a.originalEvent && /^key/.test(a.originalEvent.type) && this._value(d.value);
                    (d = b.item.attr("aria-label") || d.value) && c.trim(d).length && (this.liveRegion.children().hide(), c("<div>").text(d).appendTo(this.liveRegion))
                },
                menuselect: function(a, b) {
                    var d = b.item.data("ui-autocomplete-item"),
                        c = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = c, this._delay(function() {
                        this.previous = c;
                        this.selectedItem = d
                    }));
                    !1 !== this._trigger("select", a, {
                        item: d
                    }) && this._value(d.value);
                    this.term = this._value();
                    this.close(a);
                    this.selectedItem = d
                }
            });
            this.liveRegion = c("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(a, b) {
            this._super(a, b);
            "source" === a && this._initSource();
            "appendTo" === a && this.menu.element.appendTo(this._appendTo());
            "disabled" === a && b && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var a = this.options.appendTo;
            a && (a = a.jquery || a.nodeType ? c(a) : this.document.find(a).eq(0));
            a && a[0] || (a = this.element.closest(".ui-front"));
            a.length || (a = this.document[0].body);
            return a
        },
        _initSource: function() {
            var a, b, d = this;
            c.isArray(this.options.source) ? (a = this.options.source, this.source = function(b, d) {
                d(c.ui.autocomplete.filter(a, b.term))
            }) : "string" === typeof this.options.source ? (b = this.options.source, this.source = function(a, e) {
                d.xhr && d.xhr.abort();
                d.xhr = c.ajax({
                    url: b,
                    data: a,
                    dataType: "json",
                    success: function(a) {
                        e(a)
                    },
                    error: function() {
                        e([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(a) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var b = this.term === this._value(),
                    d = this.menu.element.is(":visible"),
                    c = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
                if (!b || b && !d && !c) this.selectedItem = null, this.search(null, a)
            }, this.options.delay)
        },
        search: function(a, b) {
            a = null != a ? a : this._value();
            this.term = this._value();
            if (a.length < this.options.minLength) return this.close(b);
            if (!1 !== this._trigger("search", b)) return this._search(a)
        },
        _search: function(a) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({
                term: a
            }, this._response())
        },
        _response: function() {
            var a = ++this.requestIndex;
            return c.proxy(function(b) {
                a === this.requestIndex && this.__response(b);
                this.pending--;
                this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(a) {
            a && (a = this._normalize(a));
            this._trigger("response", null, {
                content: a
            });
            !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
        },
        close: function(a) {
            this.cancelSearch = !0;
            this._close(a)
        },
        _close: function(a) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
        },
        _change: function(a) {
            this.previous !== this._value() && this._trigger("change", a, {
                item: this.selectedItem
            })
        },
        _normalize: function(a) {
            return a.length && a[0].label && a[0].value ? a : c.map(a, function(a) {
                return "string" === typeof a ? {
                    label: a,
                    value: a
                } : c.extend({}, a, {
                    label: a.label || a.value,
                    value: a.value || a.label
                })
            })
        },
        _suggest: function(a) {
            var b = this.menu.element.empty();
            this._renderMenu(b, a);
            this.isNewMenu = !0;
            this.menu.refresh();
            b.show();
            this._resizeMenu();
            b.position(c.extend({
                of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(a, b) {
            var d = this;
            c.each(b, function(b, c) {
                d._renderItemData(a, c)
            })
        },
        _renderItemData: function(a, b) {
            return this._renderItem(a, b).data("ui-autocomplete-item", b)
        },
        _renderItem: function(a, b) {
            return c("<li>").text(b.label).appendTo(a)
        },
        _move: function(a, b) {
            if (this.menu.element.is(":visible"))
                if (this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a)) this.isMultiLine || this._value(this.term), this.menu.blur();
                else this.menu[a](b);
            else this.search(null, b)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(a, b) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(a, b), b.preventDefault()
        }
    });
    c.extend(c.ui.autocomplete, {
        escapeRegex: function(a) {
            return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(a, b) {
            var d = new RegExp(c.ui.autocomplete.escapeRegex(b), "i");
            return c.grep(a, function(a) {
                return d.test(a.label || a.value || a)
            })
        }
    });
    c.widget("ui.autocomplete", c.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(a) {
                    return a + (1 < a ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(a) {
            var b;
            this._superApply(arguments);
            this.options.disabled || this.cancelSearch || (b = a && a.length ? this.options.messages.results(a.length) : this.options.messages.noResults, this.liveRegion.children().hide(), c("<div>").text(b).appendTo(this.liveRegion))
        }
    });
    var D, J = function() {
            var a = c(this);
            setTimeout(function() {
                a.find(":ui-button").button("refresh")
            }, 1)
        },
        H = function(a) {
            var b = a.name,
                d = a.form,
                f = c([]);
            b && (b = b.replace(/'/g, "\\'"), f = d ? c(d).find("[name='" + b + "'][type=radio]") : c("[name='" + b + "'][type=radio]", a.ownerDocument).filter(function() {
                return !this.form
            }));
            return f
        };
    c.widget("ui.button", {
        version: "1.11.3",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, J);
            "boolean" !== typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var a = this,
                b = this.options,
                d = "checkbox" === this.type || "radio" === this.type,
                f = d ? "" : "ui-state-active";
            null === b.label && (b.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html());
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                b.disabled || this === D && c(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                b.disabled || c(this).removeClass(f)
            }).bind("click" + this.eventNamespace, function(a) {
                b.disabled && (a.preventDefault(), a.stopImmediatePropagation())
            });
            this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            });
            d && this.element.bind("change" + this.eventNamespace, function() {
                a.refresh()
            });
            "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (b.disabled) return !1
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (b.disabled) return !1;
                c(this).addClass("ui-state-active");
                a.buttonElement.attr("aria-pressed", "true");
                var d = a.element[0];
                H(d).not(d).map(function() {
                    return c(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                if (b.disabled) return !1;
                c(this).addClass("ui-state-active");
                D = this;
                a.document.one("mouseup", function() {
                    D = null
                })
            }).bind("mouseup" + this.eventNamespace, function() {
                if (b.disabled) return !1;
                c(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function(a) {
                if (b.disabled) return !1;
                a.keyCode !== c.ui.keyCode.SPACE && a.keyCode !== c.ui.keyCode.ENTER || c(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                c(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(a) {
                a.keyCode === c.ui.keyCode.SPACE && c(this).click()
            }));
            this._setOption("disabled", b.disabled);
            this._resetButton()
        },
        _determineButtonType: function() {
            var a, b;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button";
            "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), (a = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", a)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-active ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(a, b) {
            this._super(a, b);
            "disabled" === a ? (this.widget().toggleClass("ui-state-disabled", !!b), this.element.prop("disabled", !!b), b && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active"))) : this._resetButton()
        },
        refresh: function() {
            var a = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            a !== this.options.disabled && this._setOption("disabled", a);
            "radio" === this.type ? H(this.element[0]).each(function() {
                c(this).is(":checked") ? c(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : c(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) this.options.label && this.element.val(this.options.label);
            else {
                var a = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
                    b = c("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text(),
                    d = this.options.icons,
                    f = d.primary && d.secondary,
                    e = [];
                d.primary || d.secondary ? (this.options.text && e.push("ui-button-text-icon" + (f ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && a.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && a.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (e.push(f ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || a.attr("title", c.trim(b)))) : e.push("ui-button-text-only");
                a.addClass(e.join(" "))
            }
        }
    });
    c.widget("ui.buttonset", {
        version: "1.11.3",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(a, b) {
            "disabled" === a && this.buttons.button("option", a, b);
            this._super(a, b)
        },
        refresh: function() {
            var a = "rtl" === this.element.css("direction"),
                b = this.element.find(this.options.items),
                d = b.filter(":ui-button");
            b.not(":ui-button").button();
            d.button("refresh");
            this.buttons = b.map(function() {
                return c(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(a ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function() {
                return c(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    });
    c.widget("ui.dialog", {
        version: "1.11.3",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(a) {
                    var b = c(this).css(a).offset().top;
                    0 > b && c(this).css("top", a.top - b)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            this.options.title = this.options.title || this.originalTitle;
            this._createWrapper();
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && c.fn.draggable && this._makeDraggable();
            this.options.resizable && c.fn.resizable && this._makeResizable();
            this._isOpen = !1;
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var a = this.options.appendTo;
            return a && (a.jquery || a.nodeType) ? c(a) : this.document.find(a || "body").eq(0)
        },
        _destroy: function() {
            var a, b = this.originalPosition;
            this._destroyOverlay();
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
            this.uiDialog.stop(!0, !0).remove();
            this.originalTitle && this.element.attr("title", this.originalTitle);
            a = b.parent.children().eq(b.index);
            a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: c.noop,
        enable: c.noop,
        close: function(a) {
            var b, d = this;
            if (this._isOpen && !1 !== this._trigger("beforeClose", a)) {
                this._isOpen = !1;
                this._focusedElement = null;
                this._destroyOverlay();
                this._untrackInstance();
                if (!this.opener.filter(":focusable").focus().length) try {
                    (b = this.document[0].activeElement) && "body" !== b.nodeName.toLowerCase() && c(b).blur()
                } catch (f) {}
                this._hide(this.uiDialog, this.options.hide, function() {
                    d._trigger("close", a)
                })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(a, b) {
            var d = !1,
                f = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +c(this).css("z-index")
                }).get(),
                f = Math.max.apply(null, f);
            f >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", f + 1), d = !0);
            d && !b && this._trigger("focus", a);
            return d
        },
        open: function() {
            var a = this;
            this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, this.opener = c(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                a._focusTabbable();
                a._trigger("focus")
            }), this._makeFocusTarget(), this._trigger("open"))
        },
        _focusTabbable: function() {
            var a = this._focusedElement;
            a || (a = this.element.find("[autofocus]"));
            a.length || (a = this.element.find(":tabbable"));
            a.length || (a = this.uiDialogButtonPane.find(":tabbable"));
            a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable"));
            a.length || (a = this.uiDialog);
            a.eq(0).focus()
        },
        _keepFocus: function(a) {
            function b() {
                var a = this.document[0].activeElement;
                this.uiDialog[0] === a || c.contains(this.uiDialog[0], a) || this._focusTabbable()
            }
            a.preventDefault();
            b.call(this);
            this._delay(b)
        },
        _createWrapper: function() {
            this.uiDialog = c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._on(this.uiDialog, {
                keydown: function(a) {
                    if (this.options.closeOnEscape && !a.isDefaultPrevented() && a.keyCode && a.keyCode === c.ui.keyCode.ESCAPE) a.preventDefault(), this.close(a);
                    else if (a.keyCode === c.ui.keyCode.TAB && !a.isDefaultPrevented()) {
                        var b = this.uiDialog.find(":tabbable"),
                            d = b.filter(":first"),
                            f = b.filter(":last");
                        a.target !== f[0] && a.target !== this.uiDialog[0] || a.shiftKey ? a.target !== d[0] && a.target !== this.uiDialog[0] || !a.shiftKey || (this._delay(function() {
                            f.focus()
                        }), a.preventDefault()) : (this._delay(function() {
                            d.focus()
                        }), a.preventDefault())
                    }
                },
                mousedown: function(a) {
                    this._moveToTop(a) && this._focusTabbable()
                }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var a;
            this.uiDialogTitlebar = c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
            this._on(this.uiDialogTitlebar, {
                mousedown: function(a) {
                    c(a.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            });
            this.uiDialogTitlebarClose = c('<i class="head-close icon-cancel"></i>').addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
            this._on(this.uiDialogTitlebarClose, {
                click: function(a) {
                    a.preventDefault();
                    this.close(a)
                }
            });
            a = c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
            this._title(a);
            this.uiDialog.attr({
                "aria-labelledby": a.attr("id")
            })
        },
        _title: function(a) {
            this.options.title || a.html("&#160;");
            a.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
            this._createButtons()
        },
        _createButtons: function() {
            var a = this,
                b = this.options.buttons;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();
            c.isEmptyObject(b) || c.isArray(b) && !b.length ? this.uiDialog.removeClass("ui-dialog-buttons") : (c.each(b, function(b, f) {
                var e, g;
                f = c.isFunction(f) ? {
                    click: f,
                    text: b
                } : f;
                f = c.extend({
                    type: "button"
                }, f);
                e = f.click;
                f.click = function() {
                    e.apply(a.element[0], arguments)
                };
                g = {
                    icons: f.icons,
                    text: f.showText
                };
                delete f.icons;
                delete f.showText;
                c("<button></button>", f).button(g).appendTo(a.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function a(a) {
                return {
                    position: a.position,
                    offset: a.offset
                }
            }
            var b = this,
                d = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(d, e) {
                    c(this).addClass("ui-dialog-dragging");
                    b._blockFrames();
                    b._trigger("dragStart", d, a(e))
                },
                drag: function(d, c) {
                    b._trigger("drag", d, a(c))
                },
                stop: function(f, e) {
                    var g = e.offset.left - b.document.scrollLeft(),
                        h = e.offset.top - b.document.scrollTop();
                    d.position = {
                        my: "left top",
                        at: "left" + (0 <= g ? "+" : "") + g + " top" + (0 <= h ? "+" : "") + h,
                        of: b.window
                    };
                    c(this).removeClass("ui-dialog-dragging");
                    b._unblockFrames();
                    b._trigger("dragStop", f, a(e))
                }
            })
        },
        _makeResizable: function() {
            function a(a) {
                return {
                    originalPosition: a.originalPosition,
                    originalSize: a.originalSize,
                    position: a.position,
                    size: a.size
                }
            }
            var b = this,
                d = this.options,
                f = d.resizable,
                e = this.uiDialog.css("position"),
                f = "string" === typeof f ? f : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: d.maxWidth,
                maxHeight: d.maxHeight,
                minWidth: d.minWidth,
                minHeight: this._minHeight(),
                handles: f,
                start: function(d, f) {
                    c(this).addClass("ui-dialog-resizing");
                    b._blockFrames();
                    b._trigger("resizeStart", d, a(f))
                },
                resize: function(d, c) {
                    b._trigger("resize", d, a(c))
                },
                stop: function(f, e) {
                    var k = b.uiDialog.offset(),
                        l = k.left - b.document.scrollLeft(),
                        k = k.top - b.document.scrollTop();
                    d.height = b.uiDialog.height();
                    d.width = b.uiDialog.width();
                    d.position = {
                        my: "left top",
                        at: "left" + (0 <= l ? "+" : "") + l + " top" + (0 <= k ? "+" : "") + k,
                        of: b.window
                    };
                    c(this).removeClass("ui-dialog-resizing");
                    b._unblockFrames();
                    b._trigger("resizeStop", f, a(e))
                }
            }).css("position", e)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(a) {
                    this._makeFocusTarget();
                    this._focusedElement = c(a.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var a = this._trackingInstances(),
                b = c.inArray(this, a); - 1 !== b && a.splice(b, 1)
        },
        _trackingInstances: function() {
            var a = this.document.data("ui-dialog-instances");
            a || (a = [], this.document.data("ui-dialog-instances", a));
            return a
        },
        _minHeight: function() {
            var a = this.options;
            return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
        },
        _position: function() {
            var a = this.uiDialog.is(":visible");
            a || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            a || this.uiDialog.hide()
        },
        _setOptions: function(a) {
            var b = this,
                d = !1,
                f = {};
            c.each(a, function(a, c) {
                b._setOption(a, c);
                a in b.sizeRelatedOptions && (d = !0);
                a in b.resizableRelatedOptions && (f[a] = c)
            });
            d && (this._size(), this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", f)
        },
        _setOption: function(a, b) {
            var d, c = this.uiDialog;
            "dialogClass" === a && c.removeClass(this.options.dialogClass).addClass(b);
            "disabled" !== a && (this._super(a, b), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({
                label: "" + b
            }), "draggable" === a && ((d = c.is(":data(ui-draggable)")) && !b && c.draggable("destroy"), !d && b && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && ((d = c.is(":data(ui-resizable)")) && !b && c.resizable("destroy"), d && "string" === typeof b && c.resizable("option", "handles", b), d || !1 === b || this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var a, b, d, c = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            c.minWidth > c.width && (c.width = c.minWidth);
            a = this.uiDialog.css({
                height: "auto",
                width: c.width
            }).outerHeight();
            b = Math.max(0, c.minHeight - a);
            d = "number" === typeof c.maxHeight ? Math.max(0, c.maxHeight - a) : "none";
            "auto" === c.height ? this.element.css({
                minHeight: b,
                maxHeight: d,
                height: "auto"
            }) : this.element.height(Math.max(0, c.height - a));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var a = c(this);
                return c("<div>").css({
                    position: "absolute",
                    width: a.outerWidth(),
                    height: a.outerHeight()
                }).appendTo(a.parent()).offset(a.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(a) {
            return c(a.target).closest(".ui-dialog").length ? !0 : !!c(a.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var a = !0;
                this._delay(function() {
                    a = !1
                });
                this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(b) {
                        a || this._allowInteraction(b) || (b.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                });
                this.overlay = c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                });
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var a = this.document.data("ui-dialog-overlays") - 1;
                a ? this.document.data("ui-dialog-overlays", a) : this.document.unbind("focusin").removeData("ui-dialog-overlays");
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    c.widget("ui.spinner", {
        version: "1.11.3",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            "" !== this.value() && this._value(this.element.val(), !0);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var a = {},
                b = this.element;
            c.each(["min", "max", "step"], function(d, c) {
                var e = b.attr(c);
                void 0 !== e && e.length && (a[c] = e)
            });
            return a
        },
        _events: {
            keydown: function(a) {
                this._start(a) && this._keydown(a) && a.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(a) {
                this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", a))
            },
            mousewheel: function(a, b) {
                if (b) {
                    if (!this.spinning && !this._start(a)) return !1;
                    this._spin((0 < b ? 1 : -1) * this.options.step, a);
                    clearTimeout(this.mousewheelTimer);
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(a)
                    }, 100);
                    a.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(a) {
                function b() {
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
                        this.previous = d
                    }))
                }
                var d;
                d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
                a.preventDefault();
                b.call(this);
                this.cancelBlur = !0;
                this._delay(function() {
                    delete this.cancelBlur;
                    b.call(this)
                });
                !1 !== this._start(a) && this._repeat(null, c(a.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, a)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(a) {
                if (c(a.currentTarget).hasClass("ui-state-active")) {
                    if (!1 === this._start(a)) return !1;
                    this._repeat(null, c(a.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, a)
                }
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var a = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton");
            this.buttons = a.find(".ui-spinner-button").attr("tabIndex", -1).removeClass("ui-corner-all");
            this.buttons.height() > Math.ceil(.5 * a.height()) && 0 < a.height() && a.height(a.height());
            this.options.disabled && this.disable()
        },
        _keydown: function(a) {
            var b = this.options,
                d = c.ui.keyCode;
            switch (a.keyCode) {
                case d.UP:
                    return this._repeat(null, 1, a), !0;
                case d.DOWN:
                    return this._repeat(null, -1, a), !0;
                case d.PAGE_UP:
                    return this._repeat(null, b.page, a), !0;
                case d.PAGE_DOWN:
                    return this._repeat(null, -b.page, a), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr icon-triangle-up'></a><a class='ui-spinner-button ui-spinner-down ui-corner-br icon-triangle-down'></a>"
        },
        _start: function(a) {
            if (!this.spinning && !1 === this._trigger("start", a)) return !1;
            this.counter || (this.counter = 1);
            return this.spinning = !0
        },
        _repeat: function(a, b, d) {
            a = a || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, b, d)
            }, a);
            this._spin(b * this.options.step, d)
        },
        _spin: function(a, b) {
            var d = this.value() || 0;
            this.counter || (this.counter = 1);
            d = this._adjustValue(d + a * this._increment(this.counter));
            this.spinning && !1 === this._trigger("spin", b, {
                value: d
            }) || (this._value(d), this.counter++)
        },
        _increment: function(a) {
            var b = this.options.incremental;
            return b ? c.isFunction(b) ? b(a) : Math.floor(a * a * a / 5E4 - a * a / 500 + 17 * a / 200 + 1) : 1
        },
        _precision: function() {
            var a = this._precisionOf(this.options.step);
            null !== this.options.min && (a = Math.max(a, this._precisionOf(this.options.min)));
            return a
        },
        _precisionOf: function(a) {
            a = a.toString();
            var b = a.indexOf(".");
            return -1 === b ? 0 : a.length - b - 1
        },
        _adjustValue: function(a) {
            var b, d = this.options;
            b = null !== d.min ? d.min : 0;
            a = b + Math.round((a - b) / d.step) * d.step;
            a = parseFloat(a.toFixed(this._precision()));
            return null !== d.max && a > d.max ? d.max : null !== d.min && a < d.min ? d.min : a
        },
        _stop: function(a) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", a))
        },
        _setOption: function(a, b) {
            if ("culture" === a || "numberFormat" === a) {
                var d = this._parse(this.element.val());
                this.options[a] = b;
                this.element.val(this._format(d))
            } else "max" !== a && "min" !== a && "step" !== a || "string" !== typeof b || (b = this._parse(b)), "icons" === a && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)), this._super(a, b), "disabled" === a && (this.widget().toggleClass("ui-state-disabled", !!b), this.element.prop("disabled", !!b), this.buttons.button(b ? "disable" : "enable"))
        },
        _setOptions: n(function(a) {
            this._super(a)
        }),
        _parse: function(a) {
            "string" === typeof a && "" !== a && (a = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(a, 10, this.options.culture) : +a);
            return "" === a || isNaN(a) ? null : a
        },
        _format: function(a) {
            return "" === a ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(a, this.options.numberFormat, this.options.culture) : a
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var a = this.value();
            return null === a ? !1 : a === this._adjustValue(a)
        },
        _value: function(a, b) {
            var d;
            "" !== a && (d = this._parse(a), null !== d && (b || (d = this._adjustValue(d)), a = this._format(d)));
            this.element.val(a);
            this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: n(function(a) {
            this._stepUp(a)
        }),
        _stepUp: function(a) {
            this._start() && (this._spin((a || 1) * this.options.step), this._stop())
        },
        stepDown: n(function(a) {
            this._stepDown(a)
        }),
        _stepDown: function(a) {
            this._start() && (this._spin((a || 1) * -this.options.step), this._stop())
        },
        pageUp: n(function(a) {
            this._stepUp((a || 1) * this.options.page)
        }),
        pageDown: n(function(a) {
            this._stepDown((a || 1) * this.options.page)
        }),
        value: function(a) {
            if (!arguments.length) return this._parse(this.element.val());
            n(this._value).call(this, a)
        },
        widget: function() {
            return this.uiSpinner
        }
    });
    c.effects = {
        effect: {}
    };
    (function() {
        function a(a, b, e, g) {
            c.isPlainObject(a) && (b = a, a = a.effect);
            a = {
                effect: a
            };
            null == b && (b = {});
            c.isFunction(b) && (g = b, e = null, b = {});
            if ("number" === typeof b || c.fx.speeds[b]) g = e, e = b, b = {};
            c.isFunction(e) && (g = e, e = null);
            b && c.extend(a, b);
            e = e || b.duration;
            a.duration = c.fx.off ? 0 : "number" === typeof e ? e : e in c.fx.speeds ? c.fx.speeds[e] : c.fx.speeds._default;
            a.complete = g || b.complete;
            return a
        }

        function b(a) {
            return !a || "number" === typeof a || c.fx.speeds[a] || "string" === typeof a && !c.effects.effect[a] || c.isFunction(a) || "object" === typeof a && !a.effect ? !0 : !1
        }
        c.extend(c.effects, {
            version: "1.11.3",
            save: function(a, b) {
                for (var c = 0; c < b.length; c++) null !== b[c] && a.data("ui-effects-" + b[c], a[0].style[b[c]])
            },
            restore: function(a, b) {
                var c, g;
                for (g = 0; g < b.length; g++) null !== b[g] && (c = a.data("ui-effects-" + b[g]), void 0 === c && (c = ""), a.css(b[g], c))
            },
            setMode: function(a, b) {
                "toggle" === b && (b = a.is(":hidden") ? "show" : "hide");
                return b
            },
            getBaseline: function(a, b) {
                var c, g;
                switch (a[0]) {
                    case "top":
                        c = 0;
                        break;
                    case "middle":
                        c = .5;
                        break;
                    case "bottom":
                        c = 1;
                        break;
                    default:
                        c = a[0] / b.height
                }
                switch (a[1]) {
                    case "left":
                        g = 0;
                        break;
                    case "center":
                        g = .5;
                        break;
                    case "right":
                        g = 1;
                        break;
                    default:
                        g = a[1] / b.width
                }
                return {
                    x: g,
                    y: c
                }
            },
            createWrapper: function(a) {
                if (a.parent().is(".ui-effects-wrapper")) return a.parent();
                var b = {
                        width: a.outerWidth(!0),
                        height: a.outerHeight(!0),
                        "float": a.css("float")
                    },
                    e = c("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    g = {
                        width: a.width(),
                        height: a.height()
                    },
                    h = document.activeElement;
                try {
                    h.id
                } catch (k) {
                    h = document.body
                }
                a.wrap(e);
                (a[0] === h || c.contains(a[0], h)) && c(h).focus();
                e = a.parent();
                "static" === a.css("position") ? (e.css({
                    position: "relative"
                }), a.css({
                    position: "relative"
                })) : (c.extend(b, {
                    position: a.css("position"),
                    zIndex: a.css("z-index")
                }), c.each(["top", "left", "bottom", "right"], function(c, e) {
                    b[e] = a.css(e);
                    isNaN(parseInt(b[e], 10)) && (b[e] = "auto")
                }), a.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                }));
                a.css(g);
                return e.css(b).show()
            },
            removeWrapper: function(a) {
                var b = document.activeElement;
                a.parent().is(".ui-effects-wrapper") && (a.parent().replaceWith(a), (a[0] === b || c.contains(a[0], b)) && c(b).focus());
                return a
            },
            setTransition: function(a, b, e, g) {
                g = g || {};
                c.each(b, function(b, c) {
                    var f = a.cssUnit(c);
                    0 < f[0] && (g[c] = f[0] * e + f[1])
                });
                return g
            }
        });
        c.fn.extend({
            effect: function() {
                function b(a) {
                    function d() {
                        c.isFunction(g) && g.call(e[0]);
                        c.isFunction(a) && a()
                    }
                    var e = c(this),
                        g = f.complete,
                        n = f.mode;
                    (e.is(":hidden") ? "hide" === n : "show" === n) ? (e[n](), d()) : h.call(e[0], f, d)
                }
                var f = a.apply(this, arguments),
                    e = f.mode,
                    g = f.queue,
                    h = c.effects.effect[f.effect];
                return c.fx.off || !h ? e ? this[e](f.duration, f.complete) : this.each(function() {
                    f.complete && f.complete.call(this)
                }) : !1 === g ? this.each(b) : this.queue(g || "fx", b)
            },
            show: function(c) {
                return function(f) {
                    if (b(f)) return c.apply(this, arguments);
                    var e = a.apply(this, arguments);
                    e.mode = "show";
                    return this.effect.call(this, e)
                }
            }(c.fn.show),
            hide: function(c) {
                return function(f) {
                    if (b(f)) return c.apply(this, arguments);
                    var e = a.apply(this, arguments);
                    e.mode = "hide";
                    return this.effect.call(this, e)
                }
            }(c.fn.hide),
            toggle: function(c) {
                return function(f) {
                    if (b(f) || "boolean" === typeof f) return c.apply(this, arguments);
                    var e = a.apply(this, arguments);
                    e.mode = "toggle";
                    return this.effect.call(this, e)
                }
            }(c.fn.toggle),
            cssUnit: function(a) {
                var b = this.css(a),
                    e = [];
                c.each(["em", "px", "%", "pt"], function(a, c) {
                    0 < b.indexOf(c) && (e = [parseFloat(b), c])
                });
                return e
            }
        })
    })();
    c.effects.effect.slide = function(a, b) {
        var d = c(this),
            f = "position top bottom left right width height".split(" "),
            e = c.effects.setMode(d, a.mode || "show"),
            g = "show" === e,
            h = a.direction || "left",
            k = "up" === h || "down" === h ? "top" : "left",
            h = "up" === h || "left" === h,
            l, m = {};
        c.effects.save(d, f);
        d.show();
        l = a.distance || d["top" === k ? "outerHeight" : "outerWidth"](!0);
        c.effects.createWrapper(d).css({
            overflow: "hidden"
        });
        g && d.css(k, h ? isNaN(l) ? "-" + l : -l : l);
        m[k] = (g ? h ? "+=" : "-=" : h ? "-=" : "+=") + l;
        d.animate(m, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                "hide" === e && d.hide();
                c.effects.restore(d, f);
                c.effects.removeWrapper(d);
                b()
            }
        })
    };
    c.effects.effect.drop = function(a, b) {
        var d = c(this),
            f = "position top bottom left right opacity height width".split(" "),
            e = c.effects.setMode(d, a.mode || "hide"),
            g = "show" === e,
            h = a.direction || "left",
            k = "up" === h || "down" === h ? "top" : "left",
            h = "up" === h || "left" === h ? "pos" : "neg",
            l = {
                opacity: g ? 1 : 0
            },
            m;
        c.effects.save(d, f);
        d.show();
        c.effects.createWrapper(d);
        m = a.distance || d["top" === k ? "outerHeight" : "outerWidth"](!0) / 2;
        g && d.css("opacity", 0).css(k, "pos" === h ? -m : m);
        l[k] = (g ? "pos" === h ? "+=" : "-=" : "pos" === h ? "-=" : "+=") + m;
        d.animate(l, {
            queue: !1,
            duration: a.duration,
            easing: a.easing,
            complete: function() {
                "hide" === e && d.hide();
                c.effects.restore(d, f);
                c.effects.removeWrapper(d);
                b()
            }
        })
    }
});
(function(c) {
    c.widget("custom.combobox", {
        _create: function() {
            this.wrapper = c("<span>").addClass("custom-combobox").insertAfter(this.element);
            this.element.hide();
            this._createAutocomplete();
            this._createShowAllButton()
        },
        _createAutocomplete: function() {
            var p = this.element.children(":selected"),
                p = p.val() ? p.text() : "";
            this.input = c("<input>").appendTo(this.wrapper).val(p).attr("title", "").addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default").autocomplete({
                delay: 0,
                minLength: 0,
                autoFocus: !0,
                source: c.proxy(this, "_source")
            });
            this._on(this.input, {
                autocompleteselect: function(c, n) {
                    n.item.option.selected = !0;
                    this._trigger("select", c, {
                        item: n.item.option
                    });
                    this.element.val(n.item.option.value).trigger("change")
                },
                autocompleteopen: function(p, n) {
                    c(".ui-autocomplete").outerWidth(c(this.wrapper).width())
                },
                autocompletechange: "_removeIfInvalid"
            })
        },
        _createShowAllButton: function() {
            var p = this.input,
                r = !1;
            c("<a>").attr("tabIndex", -1).attr("title", "Mostrar todos los items").appendTo(this.wrapper).button({
                text: !1
            }).removeClass("ui-corner-all").addClass("custom-combobox-toggle icon-triangle-down2").mousedown(function() {
                r = p.autocomplete("widget").is(":visible")
            }).click(function() {
                p.focus();
                r || p.autocomplete("search", "")
            }).find(".ui-button-text").css("display", "none")
        },
        _source: function(p, r) {
            var n = new RegExp(c.ui.autocomplete.escapeRegex(p.term), "i");
            r(this.element.children("option").map(function() {
                var r = c(this).text();
                if (this.value && (!p.term || n.test(r))) return {
                    label: r,
                    value: r,
                    option: this
                }
            }))
        },
        _removeIfInvalid: function(p, r) {
            if (!r.item) {
                var n = this.input.val().toLowerCase(),
                    v = !1;
                this.element.children("option").each(function() {
                    if (c(this).text().toLowerCase() === n) return this.selected = v = !0, !1
                });
                v || (this.input.val(""), this.element.val(""), this.input.autocomplete("instance").term = "")
            }
        },
        _destroy: function() {
            this.wrapper.remove();
            this.element.show()
        }
    })
})(jQuery);

/* jQuery Fading Slide Toggle - (c) 2013, Don Walter; http://www.don-walter.com/; Licensed MIT License */
(function(a) {
    a.fn.fadingSlideToggle = function(d) {
        var b = a.extend({}, {
            duration: 500,
            easing: "swing"
        }, d);
        return this.each(function() {
            var c = a(this);
            c.css("display");
            c.animate({
                opacity: "toggle",
                height: "toggle"
            }, b.duration, b.easing)
        })
    }
})(jQuery);

/* Chosen v1.6.2 - Patrick Filler for Harvest, http://getharvest.com MIT License */
(function() {
    var t, e, s, i, r, o = {}.hasOwnProperty,
        n = function(t, e) {
            function s() {
                this.constructor = t
            }
            for (var i in e) o.call(e, i) && (t[i] = e[i]);
            return s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype, t
        };
    i = function() {
        function t() {
            this.options_index = 0, this.parsed = []
        }
        return t.prototype.add_node = function(t) {
            return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
        }, t.prototype.add_group = function(t) {
            var e, s, i, r, o, n;
            for (e = this.parsed.length, this.parsed.push({
                    array_index: e,
                    group: !0,
                    label: this.escapeExpression(t.label),
                    title: t.title ? t.title : void 0,
                    children: 0,
                    disabled: t.disabled,
                    classes: t.className
                }), o = t.childNodes, n = [], i = 0, r = o.length; r > i; i++) s = o[i], n.push(this.add_option(s, e, t.disabled));
            return n
        }, t.prototype.add_option = function(t, e, s) {
            return "OPTION" === t.nodeName.toUpperCase() ? ("" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                value: t.value,
                text: t.text,
                html: t.innerHTML,
                title: t.title ? t.title : void 0,
                selected: t.selected,
                disabled: !0 === s ? s : t.disabled,
                group_array_index: e,
                group_label: null != e ? this.parsed[e].label : null,
                classes: t.className,
                style: t.style.cssText
            })) : this.parsed.push({
                array_index: this.parsed.length,
                options_index: this.options_index,
                empty: !0
            }), this.options_index += 1) : void 0
        }, t.prototype.escapeExpression = function(t) {
            var e;
            return null == t || !1 === t ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, t.replace(/&(?!\w+;)|[\<\>\"\'\`]/g, function(t) {
                return e[t] || "&amp;"
            })) : t
        }, t
    }(), i.select_to_array = function(t) {
        var e, s, r, o;
        for (e = new i, o = t.childNodes, s = 0, r = o.length; r > s; s++) t = o[s], e.add_node(t);
        return e.parsed
    }, e = function() {
        function t(e, s) {
            this.form_field = e, this.options = null != s ? s : {}, t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
        }
        return t.prototype.set_default_values = function() {
            var t = this;
            return this.click_test_action = function(e) {
                return t.test_active_click(e)
            }, this.activate_action = function(e) {
                return t.activate_field(e)
            }, this.results_showing = this.mouse_on_container = this.active_field = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, this.case_sensitive_search = this.options.case_sensitive_search || !1
        }, t.prototype.set_default_text = function() {
            return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.default_text = this.is_multiple ? this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text
        }, t.prototype.choice_label = function(t) {
            return this.include_group_label_in_selected && null != t.group_label ? "<b class='group-name'>" + t.group_label + "</b>" + t.html : t.html
        }, t.prototype.mouse_enter = function() {
            return this.mouse_on_container = !0
        }, t.prototype.mouse_leave = function() {
            return this.mouse_on_container = !1
        }, t.prototype.input_focus = function(t) {
            var e = this;
            if (this.is_multiple) {
                if (!this.active_field) return setTimeout(function() {
                    return e.container_mousedown()
                }, 50)
            } else if (!this.active_field) return this.activate_field()
        }, t.prototype.input_blur = function(t) {
            var e = this;
            return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function() {
                return e.blur_test()
            }, 100))
        }, t.prototype.results_option_build = function(t) {
            var e, s, i, r, o, n, l;
            for (e = "", r = 0, l = this.results_data, o = 0, n = l.length; n > o && (s = l[o], i = s.group ? this.result_add_group(s) : this.result_add_option(s), "" !== i && (r++, e += i), null != t && t.first && (s.selected && this.is_multiple ? this.choice_build(s) : s.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(s))), !(r >= this.max_shown_results)); o++);
            return e
        }, t.prototype.result_add_option = function(t) {
            var e, s;
            return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), s = document.createElement("li"), s.className = e.join(" "), s.style.cssText = t.style, s.setAttribute("data-option-array-index", t.array_index), s.innerHTML = t.search_text, t.title && (s.title = t.title), this.outerHTML(s)) : ""
        }, t.prototype.result_add_group = function(t) {
            var e, s;
            return (t.search_match || t.group_match) && 0 < t.active_options ? (e = [], e.push("group-result"), t.classes && e.push(t.classes), s = document.createElement("li"), s.className = e.join(" "), s.innerHTML = t.search_text, t.title && (s.title = t.title), this.outerHTML(s)) : ""
        }, t.prototype.results_update_field = function() {
            return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
        }, t.prototype.reset_single_select_options = function() {
            var t, e, s, i, r;
            for (i = this.results_data, r = [], e = 0, s = i.length; s > e; e++) t = i[e], t.selected ? r.push(t.selected = !1) : r.push(void 0);
            return r
        }, t.prototype.results_toggle = function() {
            return this.results_showing ? this.results_hide() : this.results_show()
        }, t.prototype.results_search = function(t) {
            return this.results_showing ? this.winnow_results() : this.results_show()
        }, t.prototype.winnow_results = function() {
            var t, e, s, i, r, o, n, l, h, c, a;
            for (this.no_results_clear(), s = 0, r = this.get_search_text(), t = r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), l = new RegExp(t, "i"), e = this.get_search_regex(t), a = this.results_data, h = 0, c = a.length; c > h; h++) t = a[h], t.search_match = !1, i = null, this.include_option_in_results(t) && (t.group && (t.group_match = !1, t.active_options = 0), null != t.group_array_index && this.results_data[t.group_array_index] && (i = this.results_data[t.group_array_index], 0 === i.active_options && i.search_match && (s += 1), i.active_options += 1), t.search_text = t.group ? t.label : t.html, !t.group || this.group_search) && (t.search_match = this.search_string_match(t.search_text, e), t.search_match && !t.group && (s += 1), t.search_match ? (r.length && (o = t.search_text.search(l), n = t.search_text.substr(0, o + r.length) + "</em>" + t.search_text.substr(o + r.length), t.search_text = n.substr(0, o) + "<em>" + n.substr(o)), null != i && (i.group_match = !0)) : null != t.group_array_index && this.results_data[t.group_array_index].search_match && (t.search_match = !0));
            return this.result_clear_highlight(), 1 > s && r.length ? (this.update_results_content(""), this.no_results(r)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
        }, t.prototype.get_search_regex = function(t) {
            return new RegExp((this.search_contains ? "" : "^") + t, this.case_sensitive_search ? "" : "i")
        }, t.prototype.search_string_match = function(t, e) {
            var s, i, r, o;
            if (e.test(t)) return !0;
            if (this.enable_split_word_search && (0 <= t.indexOf(" ") || 0 === t.indexOf("[")) && (i = t.replace(/\[|\]/g, "").split(" "), i.length))
                for (r = 0, o = i.length; o > r; r++)
                    if (s = i[r], e.test(s)) return !0
        }, t.prototype.choices_count = function() {
            var t, e, s, i;
            if (null != this.selected_option_count) return this.selected_option_count;
            for (this.selected_option_count = 0, i = this.form_field.options, e = 0, s = i.length; s > e; e++) t = i[e], t.selected && (this.selected_option_count += 1);
            return this.selected_option_count
        }, t.prototype.choices_click = function(t) {
            return t.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
        }, t.prototype.keyup_checker = function(t) {
            var e, s;
            switch (e = null != (s = t.which) ? s : t.keyCode, this.search_field_scale(), e) {
                case 8:
                    if (this.is_multiple && 1 > this.backstroke_length && 0 < this.choices_count()) return this.keydown_backstroke();
                    if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                    break;
                case 13:
                    if (t.preventDefault(), this.results_showing) return this.result_select(t);
                    break;
                case 27:
                    return this.results_showing && this.results_hide(), !0;
                case 9:
                case 38:
                case 40:
                case 16:
                case 91:
                case 17:
                case 18:
                    break;
                default:
                    return this.results_search()
            }
        }, t.prototype.clipboard_event_checker = function(t) {
            var e = this;
            return setTimeout(function() {
                return e.results_search()
            }, 50)
        }, t.prototype.container_width = function() {
            return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
        }, t.prototype.include_option_in_results = function(t) {
            return this.is_multiple && !this.display_selected_options && t.selected || !this.display_disabled_options && t.disabled || t.empty ? !1 : !0
        }, t.prototype.search_results_touchstart = function(t) {
            return this.touch_started = !0, this.search_results_mouseover(t)
        }, t.prototype.search_results_touchmove = function(t) {
            return this.touch_started = !1, this.search_results_mouseout(t)
        }, t.prototype.search_results_touchend = function(t) {
            return this.touch_started ? this.search_results_mouseup(t) : void 0
        }, t.prototype.outerHTML = function(t) {
            var e;
            return t.outerHTML ? t.outerHTML : (e = document.createElement("div"), e.appendChild(t), e.innerHTML)
        }, t.browser_is_supported = function() {
            return "Microsoft Internet Explorer" === window.navigator.appName ? 8 <= document.documentMode : /iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent) ? !1 : !0
        }, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t
    }(), t = jQuery, t.fn.extend({
        chosen: function(i) {
            return e.browser_is_supported() ? this.each(function(e) {
                var r;
                e = t(this), r = e.data("chosen"), "destroy" === i ? r instanceof s && r.destroy() : r instanceof s || e.data("chosen", new s(this, i))
            }) : this
        }
    }), s = function(e) {
        function s() {
            return r = s.__super__.constructor.apply(this, arguments)
        }
        return n(s, e), s.prototype.setup = function() {
            return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
        }, s.prototype.set_up_html = function() {
            var e;
            return e = ["chosen-container"], e.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), e = {
                "class": e.join(" "),
                style: "width: " + this.container_width() + ";",
                title: this.form_field.title
            }, this.form_field.id.length && (e.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", e), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
        }, s.prototype.on_ready = function() {
            return this.form_field_jq.trigger("chosen:ready", {
                chosen: this
            })
        }, s.prototype.register_observers = function() {
            var t = this;
            return this.container.bind("touchstart.chosen", function(e) {
                return t.container_mousedown(e), e.preventDefault()
            }), this.container.bind("touchend.chosen", function(e) {
                return t.container_mouseup(e), e.preventDefault()
            }), this.container.bind("mousedown.chosen", function(e) {
                t.container_mousedown(e)
            }), this.container.bind("mouseup.chosen", function(e) {
                t.container_mouseup(e)
            }), this.container.bind("mouseenter.chosen", function(e) {
                t.mouse_enter(e)
            }), this.container.bind("mouseleave.chosen", function(e) {
                t.mouse_leave(e)
            }), this.search_results.bind("mouseup.chosen", function(e) {
                t.search_results_mouseup(e)
            }), this.search_results.bind("mouseover.chosen", function(e) {
                t.search_results_mouseover(e)
            }), this.search_results.bind("mouseout.chosen", function(e) {
                t.search_results_mouseout(e)
            }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(e) {
                t.search_results_mousewheel(e)
            }), this.search_results.bind("touchstart.chosen", function(e) {
                t.search_results_touchstart(e)
            }), this.search_results.bind("touchmove.chosen", function(e) {
                t.search_results_touchmove(e)
            }), this.search_results.bind("touchend.chosen", function(e) {
                t.search_results_touchend(e)
            }), this.form_field_jq.bind("chosen:updated.chosen", function(e) {
                t.results_update_field(e)
            }), this.form_field_jq.bind("chosen:activate.chosen", function(e) {
                t.activate_field(e)
            }), this.form_field_jq.bind("chosen:open.chosen", function(e) {
                t.container_mousedown(e)
            }), this.form_field_jq.bind("chosen:close.chosen", function(e) {
                t.input_blur(e)
            }), this.search_field.bind("blur.chosen", function(e) {
                t.input_blur(e)
            }), this.search_field.bind("keyup.chosen", function(e) {
                t.keyup_checker(e)
            }), this.search_field.bind("keydown.chosen", function(e) {
                t.keydown_checker(e)
            }), this.search_field.bind("focus.chosen", function(e) {
                t.input_focus(e)
            }), this.search_field.bind("cut.chosen", function(e) {
                t.clipboard_event_checker(e)
            }), this.search_field.bind("paste.chosen", function(e) {
                t.clipboard_event_checker(e)
            }), this.is_multiple ? this.search_choices.bind("click.chosen", function(e) {
                t.choices_click(e)
            }) : this.container.bind("click.chosen", function(t) {
                t.preventDefault()
            })
        }, s.prototype.destroy = function() {
            return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
        }, s.prototype.search_field_disabled = function() {
            return (this.is_disabled = this.form_field_jq[0].disabled) ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
        }, s.prototype.container_mousedown = function(e) {
            return this.is_disabled || (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(), null != e && t(e.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
        }, s.prototype.container_mouseup = function(t) {
            return "ABBR" !== t.target.nodeName || this.is_disabled ? void 0 : this.results_reset(t)
        }, s.prototype.search_results_mousewheel = function(t) {
            var e;
            return t.originalEvent && (e = t.originalEvent.deltaY || -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e ? (t.preventDefault(), "DOMMouseScroll" === t.type && (e *= 40), this.search_results.scrollTop(e + this.search_results.scrollTop())) : void 0
        }, s.prototype.blur_test = function(t) {
            return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
        }, s.prototype.close_field = function() {
            return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
        }, s.prototype.activate_field = function() {
            return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
        }, s.prototype.test_active_click = function(e) {
            return e = t(e.target).closest(".chosen-container"), e.length && this.container[0] === e[0] ? this.active_field = !0 : this.close_field()
        }, s.prototype.results_build = function() {
            return this.parsing = !0, this.selected_option_count = null, this.results_data = i.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                first: !0
            })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
        }, s.prototype.result_do_highlight = function(t) {
            var e, s, i, r;
            if (t.length) {
                if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), s = parseInt(this.search_results.css("maxHeight"), 10), r = this.search_results.scrollTop(), i = s + r, e = this.result_highlight.position().top + this.search_results.scrollTop(), t = e + this.result_highlight.outerHeight(), t >= i) return this.search_results.scrollTop(t - s > 0 ? t - s : 0);
                if (r > e) return this.search_results.scrollTop(e)
            }
        }, s.prototype.result_clear_highlight = function() {
            return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
        }, s.prototype.results_show = function() {
            return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                chosen: this
            }))
        }, s.prototype.update_results_content = function(t) {
            return this.search_results.html(t)
        }, s.prototype.results_hide = function() {
            return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                chosen: this
            })), this.results_showing = !1
        }, s.prototype.set_tab_index = function(t) {
            return this.form_field.tabIndex ? (t = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = t) : void 0
        }, s.prototype.set_label_behavior = function() {
            var e = this;
            return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), 0 < this.form_field_label.length ? this.form_field_label.bind("click.chosen", function(t) {
                return e.is_multiple ? e.container_mousedown(t) : e.activate_field()
            }) : void 0
        }, s.prototype.show_search_field_default = function() {
            return this.is_multiple && 1 > this.choices_count() && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
        }, s.prototype.search_results_mouseup = function(e) {
            var s;
            return s = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), s.length ? (this.result_highlight = s, this.result_select(e), this.search_field.focus()) : void 0
        }, s.prototype.search_results_mouseover = function(e) {
            return (e = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()) ? this.result_do_highlight(e) : void 0
        }, s.prototype.search_results_mouseout = function(e) {
            return t(e.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
        }, s.prototype.choice_build = function(e) {
            var s, i = this;
            return s = t("<li />", {
                "class": "search-choice"
            }).html("<span>" + this.choice_label(e) + "</span>"), e.disabled ? s.addClass("search-choice-disabled") : (e = t("<a />", {
                "class": "search-choice-close icon-close",
                "data-option-array-index": e.array_index
            }), e.bind("click.chosen", function(t) {
                return i.choice_destroy_link_click(t)
            }), s.append(e)), this.search_container.before(s)
        }, s.prototype.choice_destroy_link_click = function(e) {
            return e.preventDefault(), e.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(t(e.target))
        }, s.prototype.choice_destroy = function(t) {
            return this.result_deselect(t[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && 0 < this.choices_count() && 1 > this.search_field.val().length && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()) : void 0
        }, s.prototype.results_reset = function() {
            return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
        }, s.prototype.results_reset_cleanup = function() {
            return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
        }, s.prototype.result_select = function(t) {
            var e;
            return this.result_highlight ? (e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                chosen: this
            }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), e.addClass("result-selected"), e = this.results_data[e[0].getAttribute("data-option-array-index")], e.selected = !0, this.form_field.options[e.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(e) : this.single_set_selected_text(this.choice_label(e)), (t.metaKey || t.ctrlKey) && this.is_multiple || this.results_hide(), this.show_search_field_default(), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                selected: this.form_field.options[e.options_index].value
            }), this.current_selectedIndex = this.form_field.selectedIndex, t.preventDefault(), this.search_field_scale())) : void 0
        }, s.prototype.single_set_selected_text = function(t) {
            return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(t)
        }, s.prototype.result_deselect = function(t) {
            return t = this.results_data[t], this.form_field.options[t.options_index].disabled ? !1 : (t.selected = !1, this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                deselected: this.form_field.options[t.options_index].value
            }), this.search_field_scale(), !0)
        }, s.prototype.single_deselect_control_build = function() {
            return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
        }, s.prototype.get_search_text = function() {
            return t("<div/>").text(t.trim(this.search_field.val())).html()
        }, s.prototype.winnow_results_set_highlight = function() {
            var t;
            return t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), t = t.length ? t.first() : this.search_results.find(".active-result").first(), null != t ? this.result_do_highlight(t) : void 0
        }, s.prototype.no_results = function(e) {
            var s;
            return s = t('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), s.find("span").first().html(e), this.search_results.append(s), this.form_field_jq.trigger("chosen:no_results", {
                chosen: this
            })
        }, s.prototype.no_results_clear = function() {
            return this.search_results.find(".no-results").remove()
        }, s.prototype.keydown_arrow = function() {
            var t;
            return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
        }, s.prototype.keyup_arrow = function() {
            var t;
            return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result"), t.length ? this.result_do_highlight(t.first()) : (0 < this.choices_count() && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
        }, s.prototype.keydown_backstroke = function() {
            var t;
            return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last(), t.length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
        }, s.prototype.clear_backstroke = function() {
            return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
        }, s.prototype.keydown_checker = function(t) {
            var e, s;
            switch (e = null != (s = t.which) ? s : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
                case 8:
                    this.backstroke_length = this.search_field.val().length;
                    break;
                case 9:
                    this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                    break;
                case 13:
                    this.results_showing && t.preventDefault();
                    break;
                case 32:
                    this.disable_search && t.preventDefault();
                    break;
                case 38:
                    t.preventDefault(), this.keyup_arrow();
                    break;
                case 40:
                    t.preventDefault(), this.keydown_arrow()
            }
        }, s.prototype.search_field_scale = function() {
            var e, s, i, r, o;
            if (this.is_multiple) {
                for (e = "position:absolute; left: -1000px; top: -1000px; display:none;", i = "font-size font-style font-weight font-family line-height text-transform letter-spacing".split(" "), r = 0, o = i.length; o > r; r++) s = i[r], e += s + ":" + this.search_field.css(s) + ";";
                return e = t("<div />", {
                    style: e
                }), e.text(this.search_field.val()), t("body").append(e), s = e.width() + 25, e.remove(), e = this.container.outerWidth(), s > e - 10 && (s = e - 10), this.search_field.css({
                    width: s + "px"
                })
            }
        }, s
    }(e)
}).call(this);

/*! nanoScrollerJS - v0.8.4 - (c) 2014 James Florentino; Licensed MIT */
! function(a) {
    return "function" == typeof define && define.amd ? define(["jquery"], function(b) {
        return a(b, window, document)
    }) : a(jQuery, window, document)
}(function(a, b, c) {
    "use strict";
    var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H;
    z = {
        paneClass: "nano-pane",
        sliderClass: "nano-slider",
        contentClass: "nano-content",
        iOSNativeScrolling: !1,
        preventPageScrolling: !1,
        disableResize: !1,
        alwaysVisible: !1,
        flashDelay: 1500,
        sliderMinHeight: 20,
        sliderMaxHeight: null,
        documentContext: null,
        windowContext: null
    }, u = "scrollbar", t = "scroll", l = "mousedown", m = "mouseenter", n = "mousemove", p = "mousewheel", o = "mouseup", s = "resize", h = "drag", i = "enter", w = "up", r = "panedown", f = "DOMMouseScroll", g = "down", x = "wheel", j = "keydown", k = "keyup", v = "touchmove", d = "Microsoft Internet Explorer" === b.navigator.appName && /msie 7./i.test(b.navigator.appVersion) && b.ActiveXObject, e = null, D = b.requestAnimationFrame, y = b.cancelAnimationFrame, F = c.createElement("div").style, H = function() {
        var a, b, c, d, e, f;
        for (d = ["t", "webkitT", "MozT", "msT", "OT"], a = e = 0, f = d.length; f > e; a = ++e)
            if (c = d[a], b = d[a] + "ransform", b in F) return d[a].substr(0, d[a].length - 1);
        return !1
    }(), G = function(a) {
        return H === !1 ? !1 : "" === H ? a : H + a.charAt(0).toUpperCase() + a.substr(1)
    }, E = G("transform"), B = E !== !1, A = function() {
        var a, b, d;
        return a = c.createElement("div"), b = a.style, b.position = "absolute", b.width = "100px", b.height = "100px", b.overflow = t, b.top = "-9999px", c.body.appendChild(a), d = a.offsetWidth - a.clientWidth, c.body.removeChild(a), d
    }, C = function() {
        var a, c, d;
        return c = b.navigator.userAgent, (a = /(?=.+Mac OS X)(?=.+Firefox)/.test(c)) ? (d = /Firefox\/\d{2}\./.exec(c), d && (d = d[0].replace(/\D+/g, "")), a && +d > 23) : !1
    }, q = function() {
        function j(d, f) {
            this.el = d, this.options = f, e || (e = A()), this.$el = a(this.el), this.doc = a(this.options.documentContext || c), this.win = a(this.options.windowContext || b), this.body = this.doc.find("body"), this.$content = this.$el.children("." + f.contentClass), this.$content.attr("tabindex", this.options.tabIndex || 0), this.content = this.$content[0], this.previousPosition = 0, this.options.iOSNativeScrolling && null != this.el.style.WebkitOverflowScrolling ? this.nativeScrolling() : this.generate(), this.createEvents(), this.addEvents(), this.reset()
        }
        return j.prototype.preventScrolling = function(a, b) {
            if (this.isActive)
                if (a.type === f)(b === g && a.originalEvent.detail > 0 || b === w && a.originalEvent.detail < 0) && a.preventDefault();
                else if (a.type === p) {
                if (!a.originalEvent || !a.originalEvent.wheelDelta) return;
                (b === g && a.originalEvent.wheelDelta < 0 || b === w && a.originalEvent.wheelDelta > 0) && a.preventDefault()
            }
        }, j.prototype.nativeScrolling = function() {
            this.$content.css({
                WebkitOverflowScrolling: "touch"
            }), this.iOSNativeScrolling = !0, this.isActive = !0
        }, j.prototype.updateScrollValues = function() {
            var a, b;
            a = this.content, this.maxScrollTop = a.scrollHeight - a.clientHeight, this.prevScrollTop = this.contentScrollTop || 0, this.contentScrollTop = a.scrollTop, b = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same", this.previousPosition = this.contentScrollTop, "same" !== b && this.$el.trigger("update", {
                position: this.contentScrollTop,
                maximum: this.maxScrollTop,
                direction: b
            }), this.iOSNativeScrolling || (this.maxSliderTop = this.paneHeight - this.sliderHeight, this.sliderTop = 0 === this.maxScrollTop ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop)
        }, j.prototype.setOnScrollStyles = function() {
            var a;
            B ? (a = {}, a[E] = "translate(0, " + this.sliderTop + "px)") : a = {
                top: this.sliderTop
            }, D ? (y && this.scrollRAF && y(this.scrollRAF), this.scrollRAF = D(function(b) {
                return function() {
                    return b.scrollRAF = null, b.slider.css(a)
                }
            }(this))) : this.slider.css(a)
        }, j.prototype.createEvents = function() {
            this.events = {
                down: function(a) {
                    return function(b) {
                        return a.isBeingDragged = !0, a.offsetY = b.pageY - a.slider.offset().top, a.slider.is(b.target) || (a.offsetY = 0), a.pane.addClass("active"), a.doc.bind(n, a.events[h]).bind(o, a.events[w]), a.body.bind(m, a.events[i]), !1
                    }
                }(this),
                drag: function(a) {
                    return function(b) {
                        return a.sliderY = b.pageY - a.$el.offset().top - a.paneTop - (a.offsetY || .5 * a.sliderHeight), a.scroll(), a.contentScrollTop >= a.maxScrollTop && a.prevScrollTop !== a.maxScrollTop ? a.$el.trigger("scrollend") : 0 === a.contentScrollTop && 0 !== a.prevScrollTop && a.$el.trigger("scrolltop"), !1
                    }
                }(this),
                up: function(a) {
                    return function() {
                        return a.isBeingDragged = !1, a.pane.removeClass("active"), a.doc.unbind(n, a.events[h]).unbind(o, a.events[w]), a.body.unbind(m, a.events[i]), !1
                    }
                }(this),
                resize: function(a) {
                    return function() {
                        a.reset()
                    }
                }(this),
                panedown: function(a) {
                    return function(b) {
                        return a.sliderY = (b.offsetY || b.originalEvent.layerY) - .5 * a.sliderHeight, a.scroll(), a.events.down(b), !1
                    }
                }(this),
                scroll: function(a) {
                    return function(b) {
                        a.updateScrollValues(), a.isBeingDragged || (a.iOSNativeScrolling || (a.sliderY = a.sliderTop, a.setOnScrollStyles()), null != b && (a.contentScrollTop >= a.maxScrollTop ? (a.options.preventPageScrolling && a.preventScrolling(b, g), a.prevScrollTop !== a.maxScrollTop && a.$el.trigger("scrollend")) : 0 === a.contentScrollTop && (a.options.preventPageScrolling && a.preventScrolling(b, w), 0 !== a.prevScrollTop && a.$el.trigger("scrolltop"))))
                    }
                }(this),
                wheel: function(a) {
                    return function(b) {
                        var c;
                        if (null != b) return c = b.delta || b.wheelDelta || b.originalEvent && b.originalEvent.wheelDelta || -b.detail || b.originalEvent && -b.originalEvent.detail, c && (a.sliderY += -c / 3), a.scroll(), !1
                    }
                }(this),
                enter: function(a) {
                    return function(b) {
                        var c;
                        if (a.isBeingDragged) return 1 !== (b.buttons || b.which) ? (c = a.events)[w].apply(c, arguments) : void 0
                    }
                }(this)
            }
        }, j.prototype.addEvents = function() {
            var a;
            this.removeEvents(), a = this.events, this.options.disableResize || this.win.bind(s, a[s]), this.iOSNativeScrolling || (this.slider.bind(l, a[g]), this.pane.bind(l, a[r]).bind("" + p + " " + f, a[x])), this.$content.bind("" + t + " " + p + " " + f + " " + v, a[t])
        }, j.prototype.removeEvents = function() {
            var a;
            a = this.events, this.win.unbind(s, a[s]), this.iOSNativeScrolling || (this.slider.unbind(), this.pane.unbind()), this.$content.unbind("" + t + " " + p + " " + f + " " + v, a[t])
        }, j.prototype.generate = function() {
            var a, c, d, f, g, h, i;
            return f = this.options, h = f.paneClass, i = f.sliderClass, a = f.contentClass, (g = this.$el.children("." + h)).length || g.children("." + i).length || this.$el.append('<div class="' + h + '"><div class="' + i + '" /></div>'), this.pane = this.$el.children("." + h), this.slider = this.pane.find("." + i), 0 === e && C() ? (d = b.getComputedStyle(this.content, null).getPropertyValue("padding-right").replace(/[^0-9.]+/g, ""), c = {
                right: -14,
                paddingRight: +d + 14
            }) : e && (c = {
                right: -e
            }, this.$el.addClass("has-scrollbar")), null != c && this.$content.css(c), this
        }, j.prototype.restore = function() {
            this.stopped = !1, this.iOSNativeScrolling || this.pane.show(), this.addEvents()
        }, j.prototype.reset = function() {
            var a, b, c, f, g, h, i, j, k, l, m, n;
            return this.iOSNativeScrolling ? void(this.contentHeight = this.content.scrollHeight) : (this.$el.find("." + this.options.paneClass).length || this.generate().stop(), this.stopped && this.restore(), a = this.content, f = a.style, g = f.overflowY, d && this.$content.css({
                height: this.$content.height()
            }), b = a.scrollHeight + e, l = parseInt(this.$el.css("max-height"), 10), l > 0 && (this.$el.height(""), this.$el.height(a.scrollHeight > l ? l : a.scrollHeight)), i = this.pane.outerHeight(!1), k = parseInt(this.pane.css("top"), 10), h = parseInt(this.pane.css("bottom"), 10), j = i + k + h, n = Math.round(j / b * j), n < this.options.sliderMinHeight ? n = this.options.sliderMinHeight : null != this.options.sliderMaxHeight && n > this.options.sliderMaxHeight && (n = this.options.sliderMaxHeight), g === t && f.overflowX !== t && (n += e), this.maxSliderTop = j - n, this.contentHeight = b, this.paneHeight = i, this.paneOuterHeight = j, this.sliderHeight = n, this.paneTop = k, this.slider.height(n), this.events.scroll(), this.pane.show(), this.isActive = !0, a.scrollHeight === a.clientHeight || this.pane.outerHeight(!0) >= a.scrollHeight && g !== t ? (this.pane.hide(), this.isActive = !1) : this.el.clientHeight === a.scrollHeight && g === t ? this.slider.hide() : this.slider.show(), this.pane.css({
                opacity: this.options.alwaysVisible ? 1 : "",
                visibility: this.options.alwaysVisible ? "visible" : ""
            }), c = this.$content.css("position"), ("static" === c || "relative" === c) && (m = parseInt(this.$content.css("right"), 10), m && this.$content.css({
                right: "",
                marginRight: m
            })), this)
        }, j.prototype.scroll = function() {
            return this.isActive ? (this.sliderY = Math.max(0, this.sliderY), this.sliderY = Math.min(this.maxSliderTop, this.sliderY), this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop), this.iOSNativeScrolling || (this.updateScrollValues(), this.setOnScrollStyles()), this) : void 0
        }, j.prototype.scrollBottom = function(a) {
            return this.isActive ? (this.$content.scrollTop(this.contentHeight - this.$content.height() - a).trigger(p), this.stop().restore(), this) : void 0
        }, j.prototype.scrollTop = function(a) {
            return this.isActive ? (this.$content.scrollTop(+a).trigger(p), this.stop().restore(), this) : void 0
        }, j.prototype.scrollTo = function(a) {
            return this.isActive ? (this.scrollTop(this.$el.find(a).get(0).offsetTop), this) : void 0
        }, j.prototype.stop = function() {
            return y && this.scrollRAF && (y(this.scrollRAF), this.scrollRAF = null), this.stopped = !0, this.removeEvents(), this.iOSNativeScrolling || this.pane.hide(), this
        }, j.prototype.destroy = function() {
            return this.stopped || this.stop(), !this.iOSNativeScrolling && this.pane.length && this.pane.remove(), d && this.$content.height(""), this.$content.removeAttr("tabindex"), this.$el.hasClass("has-scrollbar") && (this.$el.removeClass("has-scrollbar"), this.$content.css({
                right: ""
            })), this
        }, j.prototype.flash = function() {
            return !this.iOSNativeScrolling && this.isActive ? (this.reset(), this.pane.addClass("flashed"), setTimeout(function(a) {
                return function() {
                    a.pane.removeClass("flashed")
                }
            }(this), this.options.flashDelay), this) : void 0
        }, j
    }(), a.fn.nanoScroller = function(b) {
        return this.each(function() {
            var c, d;
            if ((d = this.nanoscroller) || (c = a.extend({}, z, b), this.nanoscroller = d = new q(this, c)), b && "object" == typeof b) {
                if (a.extend(d.options, b), null != b.scrollBottom) return d.scrollBottom(b.scrollBottom);
                if (null != b.scrollTop) return d.scrollTop(b.scrollTop);
                if (b.scrollTo) return d.scrollTo(b.scrollTo);
                if ("bottom" === b.scroll) return d.scrollBottom(0);
                if ("top" === b.scroll) return d.scrollTop(0);
                if (b.scroll && b.scroll instanceof a) return d.scrollTo(b.scroll);
                if (b.stop) return d.stop();
                if (b.destroy) return d.destroy();
                if (b.flash) return d.flash()
            }
            return d.reset()
        })
    }, a.fn.nanoScroller.Constructor = q
});
Array.prototype.inArray = function(b) {
    for (var a = this.length; a--;)
        if (this[a] === b) return !0;
    return !1
};

/*! Ordenamiento de arreglos de objetos por el valor de una propiedad. Autor: Israel Muñoz http://deployando.net/ */
Array.prototype.orderByNumber = function(p, s) {
    if (s != -1 && s != 1) s = 1;
    this.sort(function(a, b) {
        return (a[p] - b[p]) * s
    })
};
Array.prototype.orderByString = function(p, s, i) {
    if (s != -1 && s != 1) s = 1;
    this.sort(function(a, b) {
        var c = a[p] != null ? a[p].toString() : '',
            d = b[p] != null ? b[p].toString() : '';
        if (i == true) {
            c = c.toLowerCase();
            d = d.toLowerCase()
        }
        return (c < d ? -1 : c > d ? 1 : 0) * s
    })
};
Array.prototype.orderByDate = function(p, s) {
    if (s != -1 && s != 1) s = 1;
    this.sort(function(a, b) {
        var c = new Date(a[p]),
            d = new Date(b[p]);
        return (c - d) * s
    })
};

/* ContextMenu - Version: r2 - (c) 2007 Chris Domigan, Dan G. Switzer, II inspired by Joern Zaefferer's Tooltip plugin - Licensed under the MIT and GPL */
(function(a) {
    function n(e, c, d, k) {
        var b = g[e];
        h = a("#" + b.id).find("ul:first").clone(!0);
        h.css(b.menuStyle).find("li").css(b.itemStyle).hover(function() {
            a(this).css(b.itemHoverStyle)
        }, function() {
            a(this).css(b.itemStyle)
        }).find("img").css({
            verticalAlign: "middle",
            paddingRight: "2px"
        });
        h.find("li.menu_sep").css(b.sepStyle).hover(function() {
            a(this).css(b.sepStyle)
        }, function() {
            a(this).css(b.sepStyle)
        });
        h.find("li.menu_disable").css(b.disableStyle).hover(function() {
            a(this).css(b.disableStyle)
        }, function() {
            a(this).css(b.disableStyle)
        });
        f.html(h);
        b.onShowMenu && (f = b.onShowMenu(d, f));
        a.each(b.bindings, function(b, d) {
            a("#" + b, f).not(".menu_disable").bind("click", function(a) {
                m();
                d(c, p)
            })
        });
        e = a(document).outerHeight();
        k = f.height();
        e - d[b.eventPosY] > k ? (f.css({
            left: d[b.eventPosX],
            top: d[b.eventPosY]
        }).show(), b.shadow && l.css({
            width: f.width(),
            height: f.height(),
            left: d.pageX + 2,
            top: d.pageY + 2
        }).show()) : (f.css({
            left: d[b.eventPosX],
            top: d[b.eventPosY] - k
        }).show(), b.shadow && l.css({
            width: f.width(),
            height: k,
            left: d.pageX + 2,
            top: d.pageY + 2 - k
        }).show());
        a(document).one("click", m)
    }

    function m() {
        f.hide();
        l.hide()
    }
    var f, l, h, g, p, e = {
        menuStyle: {
            listStyle: "none",
            padding: "1px",
            margin: "0px",
            backgroundColor: "#fff",
            border: "1px solid #999",
            width: "100px"
        },
        itemStyle: {
            margin: "0px",
            color: "#000",
            display: "block",
            cursor: "default",
            padding: "3px",
            border: "1px solid #fff",
            backgroundColor: "transparent"
        },
        itemHoverStyle: {
            border: "1px solid #0a246a",
            backgroundColor: "transparent"
        },
        sepStyle: {
            "border-bottom": "1px solid #DEDEDE",
            backgroundColor: "#DDD",
            padding: "0px"
        },
        disableStyle: {
            color: "#cccccc",
            backgroundColor: "#fff"
        },
        eventPosX: "pageX",
        eventPosY: "pageY",
        shadow: !0,
        onContextMenu: null,
        onShowMenu: null
    };
    a.fn.contextMenu = function(h, c) {
        f || (f = a('<div id="jqContextMenu"></div>').hide().css({
            position: "absolute",
            zIndex: "500"
        }).appendTo("body").bind("click", function(a) {
            a.stopPropagation()
        }));
        l || (l = a("<div></div>").css({
            backgroundColor: "#000",
            position: "absolute",
            opacity: .2,
            zIndex: 499
        }).appendTo("body").hide());
        g = g || [];
        g.push({
            id: h,
            menuStyle: a.extend({}, e.menuStyle, c.menuStyle || {}),
            itemStyle: a.extend({}, e.itemStyle, c.itemStyle || {}),
            itemHoverStyle: a.extend({}, e.itemHoverStyle, c.itemHoverStyle || {}),
            sepStyle: a.extend({}, e.sepStyle, c.sepStyle || {}),
            disableStyle: a.extend({}, e.disableStyle, c.disableStyle || {}),
            bindings: c.bindings || {},
            shadow: c.shadow || !1 === c.shadow ? c.shadow : e.shadow,
            onContextMenu: c.onContextMenu || e.onContextMenu,
            onShowMenu: c.onShowMenu || e.onShowMenu,
            eventPosX: c.eventPosX || e.eventPosX,
            eventPosY: c.eventPosY || e.eventPosY
        });
        var d = g.length - 1;
        a(this).bind("contextmenu", function(a) {
            (g[d].onContextMenu ? g[d].onContextMenu(a) : 1) && n(d, this, a, c);
            return !1
        });
        return this
    };
    a.contextMenu = {
        defaults: function(f) {
            a.each(f, function(c, d) {
                "object" == typeof d && e[c] ? a.extend(e[c], d) : e[c] = d
            })
        }
    }
})(jQuery);
$(function() {
    $("div.contextMenu").hide()
});

/*! rangeslider.js - v1.0.0 | (c) 2015 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
(function(b) {
    "function" === typeof define && define.amd ? define(["jquery"], b) : "object" === typeof exports ? b(require("jquery")) : b(jQuery)
})(function(b) {
    function l(a, c) {
        var e = Array.prototype.slice.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, e)
        }, c)
    }

    function m(a, c) {
        c = c || 100;
        return function() {
            if (!a.debouncing) {
                var e = Array.prototype.slice.apply(arguments);
                a.lastReturnVal = a.apply(window, e);
                a.debouncing = !0
            }
            clearTimeout(a.debounceTimeout);
            a.debounceTimeout = setTimeout(function() {
                a.debouncing = !1
            }, c);
            return a.lastReturnVal
        }
    }

    function n(a) {
        var c = [];
        for (a = a.parentNode; 0 === a.offsetWidth || 0 === a.offsetHeight || !1 === a.open;) c.push(a), a = a.parentNode;
        return c
    }

    function h(a, c) {
        function e(a) {
            "undefined" !== typeof a.open && (a.open = a.open ? !1 : !0)
        }
        var b = n(a),
            d = b.length,
            k = [],
            f = a[c];
        if (d) {
            for (f = 0; f < d; f++) k[f] = b[f].style.display, b[f].style.display = "block", b[f].style.height = "0", b[f].style.overflow = "hidden", b[f].style.visibility = "hidden", e(b[f]);
            for (var f = a[c], g = 0; g < d; g++) e(b[g]), b[g].style.display = k[g], b[g].style.height = "", b[g].style.overflow = "", b[g].style.visibility = ""
        }
        return f
    }

    function d(a, c) {
        this.$window = b(window);
        this.$document = b(document);
        this.$element = b(a);
        this.options = b.extend({}, p, c);
        this.polyfill = this.options.polyfill;
        this.onInit = this.options.onInit;
        this.onSlide = this.options.onSlide;
        this.onSlideEnd = this.options.onSlideEnd;
        if (this.polyfill && q) return !1;
        this.identifier = "js-rangeslider-" + r++;
        this.startEvent = this.options.startEvent.join("." + this.identifier + " ") + "." + this.identifier;
        this.moveEvent = this.options.moveEvent.join("." + this.identifier + " ") + "." + this.identifier;
        this.endEvent = this.options.endEvent.join("." + this.identifier + " ") + "." + this.identifier;
        this.min = parseFloat(this.$element[0].getAttribute("min") || 0);
        this.max = parseFloat(this.$element[0].getAttribute("max") || 100);
        this.value = parseFloat(this.$element[0].value || this.min + (this.max - this.min) / 2);
        this.step = parseFloat(this.$element[0].getAttribute("step") || 1);
        this.toFixed = (this.step + "").replace(".", "").length - 1;
        this.$fill = b('<div class="' + this.options.fillClass + '" />');
        this.$handle = b('<div class="' + this.options.handleClass + '" />');
        this.$range = b('<div class="' + this.options.rangeClass + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle);
        this.$element.css({
            position: "absolute",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            opacity: "0"
        });
        this.handleDown = b.proxy(this.handleDown, this);
        this.handleMove = b.proxy(this.handleMove, this);
        this.handleEnd = b.proxy(this.handleEnd, this);
        this.init();
        var e = this;
        this.$window.on("resize." + this.identifier, m(function() {
            l(function() {
                e.update()
            }, 300)
        }, 20));
        this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown);
        this.$element.on("change." + this.identifier, function(a, c) {
            if (!c || c.origin !== e.identifier) {
                var b = e.getPositionFromValue(a.target.value);
                e.setPosition(b)
            }
        })
    }
    var r = 0,
        q = function() {
            var a = document.createElement("input");
            a.setAttribute("type", "range");
            return "text" !== a.type
        }(),
        p = {
            polyfill: !0,
            rangeClass: "rangeslider",
            disabledClass: "rangeslider--disabled",
            fillClass: "rangeslider__fill",
            handleClass: "rangeslider__handle",
            startEvent: ["mousedown", "touchstart", "pointerdown"],
            moveEvent: ["mousemove", "touchmove", "pointermove"],
            endEvent: ["mouseup", "touchend", "pointerup"]
        };
    d.prototype.init = function() {
        if (this.onInit && "function" === typeof this.onInit) this.onInit();
        this.update()
    };
    d.prototype.update = function() {
        this.handleWidth = h(this.$handle[0], "offsetWidth");
        this.rangeWidth = h(this.$range[0], "offsetWidth");
        this.maxHandleX = this.rangeWidth - this.handleWidth;
        this.grabX = this.handleWidth / 2;
        this.position = this.getPositionFromValue(this.value);
        this.$element[0].disabled ? this.$range.addClass(this.options.disabledClass) : this.$range.removeClass(this.options.disabledClass);
        this.setPosition(this.position)
    };
    d.prototype.handleDown = function(a) {
        a.preventDefault();
        this.$document.on(this.moveEvent, this.handleMove);
        this.$document.on(this.endEvent, this.handleEnd);
        if (!(-1 < (" " + a.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass))) {
            a = this.getRelativePosition(a);
            var c = this.$range[0].getBoundingClientRect().left,
                c = this.getPositionFromNode(this.$handle[0]) - c;
            this.setPosition(a - this.grabX);
            a >= c && a < c + this.handleWidth && (this.grabX = a - c)
        }
    };
    d.prototype.handleMove = function(a) {
        a.preventDefault();
        a = this.getRelativePosition(a);
        this.setPosition(a - this.grabX)
    };
    d.prototype.handleEnd = function(a) {
        a.preventDefault();
        this.$document.off(this.moveEvent, this.handleMove);
        this.$document.off(this.endEvent, this.handleEnd);
        this.$element.trigger("change", {
            origin: this.identifier
        });
        if (this.onSlideEnd && "function" === typeof this.onSlideEnd) this.onSlideEnd(this.position, this.value)
    };
    d.prototype.cap = function(a, c, b) {
        return a < c ? c : a > b ? b : a
    };
    d.prototype.setPosition = function(a) {
        var c;
        a = this.getValueFromPosition(this.cap(a, 0, this.maxHandleX));
        c = this.getPositionFromValue(a);
        this.$fill[0].style.width = c + this.grabX + "px";
        this.$handle[0].style.left = c + "px";
        this.setValue(a);
        this.position = c;
        this.value = a;
        if (this.onSlide && "function" === typeof this.onSlide) this.onSlide(c, a)
    };
    d.prototype.getPositionFromNode = function(a) {
        for (var c = 0; null !== a;) c += a.offsetLeft, a = a.offsetParent;
        return c
    };
    d.prototype.getRelativePosition = function(a) {
        var c = this.$range[0].getBoundingClientRect().left,
            b = 0;
        "undefined" !== typeof a.pageX ? b = a.pageX : "undefined" !== typeof a.originalEvent.clientX ? b = a.originalEvent.clientX : a.originalEvent.touches && a.originalEvent.touches[0] && "undefined" !== typeof a.originalEvent.touches[0].clientX ? b = a.originalEvent.touches[0].clientX : a.currentPoint && "undefined" !== typeof a.currentPoint.x && (b = a.currentPoint.x);
        return b - c
    };
    d.prototype.getPositionFromValue = function(a) {
        return (a - this.min) / (this.max - this.min) * this.maxHandleX
    };
    d.prototype.getValueFromPosition = function(a) {
        return Number((this.step * Math.round(a / (this.maxHandleX || 1) * (this.max - this.min) / this.step) + this.min).toFixed(this.toFixed))
    };
    d.prototype.setValue = function(a) {
        a !== this.value && this.$element.val(a).trigger("input", {
            origin: this.identifier
        })
    };
    d.prototype.destroy = function() {
        this.$document.off("." + this.identifier);
        this.$window.off("." + this.identifier);
        this.$element.off("." + this.identifier).removeAttr("style").removeData("plugin_rangeslider");
        this.$range && this.$range.length && this.$range[0].parentNode.removeChild(this.$range[0])
    };
    b.fn.rangeslider = function(a) {
        return this.each(function() {
            var c = b(this),
                e = c.data("plugin_rangeslider");
            e || c.data("plugin_rangeslider", e = new d(this, a));
            if ("string" === typeof a) e[a]()
        })
    }
});

(function(d) {
    var e = function(a, b, c) {
        return a ? c ? {
            duration: a,
            easing: b,
            complete: c
        } : b ? {
            duration: a,
            complete: b
        } : "object" === typeof a ? a : {
            duration: a
        } : {
            duration: "normal"
        }
    };
    d.fn.showDown = function(a, b, c) {
        a = e(a, b, c);
        b = {
            queue: !1,
            duration: a.duration,
            easing: a.easing
        };
        return d(this).hide().css("opacity", 0).slideDown(a).animate({
            opacity: 1
        }, b)
    };
    d.fn.hideUp = function(a, b, c) {
        a = e(a, b, c);
        b = {
            queue: !1,
            duration: a.duration,
            easing: a.easing
        };
        return d(this).show().css("opacity", 1).slideUp(a).animate({
            opacity: 0
        }, b)
    }
})(jQuery);

jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};

/*! is.js 0.8.0 Aras Atasaygin */
(function(g, h) {
    g.is = h()
})(this, function() {
    function g(a) {
        return function() {
            return !a.apply(null, l.call(arguments))
        }
    }

    function h(a) {
        return function() {
            for (var b = m(arguments), c = b.length, d = 0; d < c; d++)
                if (!a.call(null, b[d])) return !1;
            return !0
        }
    }

    function p(a) {
        return function() {
            for (var b = m(arguments), c = b.length, d = 0; d < c; d++)
                if (a.call(null, b[d])) return !0;
            return !1
        }
    }

    function e(a, b) {
        var c = b + "",
            d = +(c.match(/\d+/) || NaN),
            c = c.match(/^[<>]=?|/)[0];
        return n[c] ? n[c](a, d) : a == d || d !== d
    }

    function m(f) {
        f = l.call(f);
        1 === f.length && a.array(f[0]) && (f = f[0]);
        return f
    }
    var a = {
            not: {},
            all: {},
            any: {}
        },
        l = Array.prototype.slice,
        q = Object.prototype.hasOwnProperty,
        n = {
            "<": function(a, b) {
                return a < b
            },
            "<=": function(a, b) {
                return a <= b
            },
            ">": function(a, b) {
                return a > b
            },
            ">=": function(a, b) {
                return a >= b
            }
        };
    a["function"] = function(a) {
        return "[object Function]" === toString.call(a) || "function" === typeof a
    };
    var k = (navigator && navigator.appVersion || "").toLowerCase(),
        c = (navigator && navigator.userAgent || "").toLowerCase(),
        r = (navigator && navigator.vendor || "").toLowerCase();
    a.chrome = function(a) {
        var b = /google inc/.test(r) && c.match(/(?:chrome|crios)\/(\d+)/);
        return !!b && e(b[1], a)
    };
    a.chrome.api = ["not"];
    a.firefox = function(a) {
        var b = c.match(/(?:firefox|fxios)\/(\d+)/);
        return !!b && e(b[1], a)
    };
    a.firefox.api = ["not"];
    a.edge = function(a) {
        var b = c.match(/edge\/(\d+)/);
        return !!b && e(b[1], a)
    };
    a.edge.api = ["not"];
    a.ie = function(a) {
        var b = c.match(/(?:msie |trident.+?; rv:)(\d+)/);
        return !!b && e(b[1], a)
    };
    a.ie.api = ["not"];
    a.opera = function(a) {
        var b = c.match(/(?:^opera.+?version|opr)\/(\d+)/);
        return !!b && e(b[1], a)
    };
    a.opera.api = ["not"];
    a.safari = function(a) {
        var b = c.match(/version\/(\d+).+?safari/);
        return !!b && e(b[1], a)
    };
    a.safari.api = ["not"];
    a.phantom = function(a) {
        var b = c.match(/phantomjs\/(\d+)/);
        return !!b && e(b[1], a)
    };
    a.phantom.api = ["not"];
    a.ios = function() {
        return a.iphone() || a.ipad() || a.ipod()
    };
    a.ios.api = ["not"];
    a.iphone = function(a) {
        var b = c.match(/iphone(?:.+?os (\d+))?/);
        return !!b && e(b[1] || 1, a)
    };
    a.iphone.api = ["not"];
    a.ipad = function(a) {
        var b = c.match(/ipad.+?os (\d+)/);
        return !!b && e(b[1], a)
    };
    a.ipad.api = ["not"];
    a.ipod = function(a) {
        var b = c.match(/ipod.+?os (\d+)/);
        return !!b && e(b[1], a)
    };
    a.ipod.api = ["not"];
    a.android = function() {
        return /android/.test(c)
    };
    a.android.api = ["not"];
    a.androidPhone = function() {
        return /android/.test(c) && /mobile/.test(c)
    };
    a.androidPhone.api = ["not"];
    a.androidTablet = function() {
        return /android/.test(c) && !/mobile/.test(c)
    };
    a.androidTablet.api = ["not"];
    a.blackberry = function() {
        return /blackberry/.test(c) || /bb10/.test(c)
    };
    a.blackberry.api = ["not"];
    a.desktop = function() {
        return a.not.mobile() && a.not.tablet()
    };
    a.desktop.api = ["not"];
    a.linux = function() {
        return /linux/.test(k)
    };
    a.linux.api = ["not"];
    a.mac = function() {
        return /mac/.test(k)
    };
    a.mac.api = ["not"];
    a.windows = function() {
        return /win/.test(k)
    };
    a.windows.api = ["not"];
    a.windowsPhone = function() {
        return a.windows() && /phone/.test(c)
    };
    a.windowsPhone.api = ["not"];
    a.windowsTablet = function() {
        return a.windows() && a.not.windowsPhone() && /touch/.test(c)
    };
    a.windowsTablet.api = ["not"];
    a.mobile = function() {
        return a.iphone() || a.ipod() || a.androidPhone() || a.blackberry() || a.windowsPhone()
    };
    a.mobile.api = ["not"];
    a.tablet = function() {
        return a.ipad() || a.androidTablet() || a.windowsTablet()
    };
    a.tablet.api = ["not"];
    a.online = function() {
        return navigator.onLine
    };
    a.online.api = ["not"];
    a.offline = g(a.online);
    a.offline.api = ["not"];
    a.touchDevice = function() {
        return "ontouchstart" in freeSelf || "DocumentTouch" in freeSelf && document instanceof DocumentTouch
    };
    a.touchDevice.api = ["not"];
    (function() {
        var c = a,
            b;
        for (b in c)
            if (q.call(c, b) && a["function"](c[b]))
                for (var e = c[b].api || ["not", "all", "any"], d = 0; d < e.length; d++) "not" === e[d] && (a.not[b] = g(a[b])), "all" === e[d] && (a.all[b] = h(a[b])), "any" === e[d] && (a.any[b] = p(a[b]))
    })();
    return a
});

/*! Sortable - RubaXa   <trash@rubaxa.org> - license MIT */
(function(m) {
    "function" === typeof define && define.amd ? define(m) : "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = m() : "undefined" !== typeof Package ? Sortable = m() : window.Sortable = m()
})(function() {
    function m(a, b) {
        if (!a || !a.nodeType || 1 !== a.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(a);
        this.el = a;
        this.options = b = S({}, b);
        a[D] = this;
        var c = {
                group: Math.random(),
                sort: !0,
                disabled: !1,
                store: null,
                handle: null,
                scroll: !0,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                draggable: /[uo]l/i.test(a.nodeName) ? "li" : ">*",
                ghostClass: "sortable-ghost",
                chosenClass: "sortable-chosen",
                ignore: "a, img",
                filter: null,
                animation: 0,
                setData: function(a, b) {
                    a.setData("Text", b.textContent)
                },
                dropBubble: !1,
                dragoverBubble: !1,
                dataIdAttr: "data-id",
                delay: 0,
                forceFallback: !1,
                fallbackClass: "sortable-fallback",
                fallbackOnBody: !1
            },
            d;
        for (d in c) d in b || (b[d] = c[d]);
        T(b);
        for (var e in this) "_" === e.charAt(0) && (this[e] = this[e].bind(this));
        this.nativeDraggable = b.forceFallback ? !1 : ba;
        g(a, "mousedown", this._onTapStart);
        g(a, "touchstart", this._onTapStart);
        this.nativeDraggable && (g(a, "dragover", this), g(a, "dragenter", this));
        H.push(this._onDragOver);
        b.store && this.sort(b.store.get(this))
    }

    function N(a) {
        t && t.state !== a && (h(t, "display", a ? "none" : ""), !a && t.state && f.insertBefore(t, e), t.state = a)
    }

    function x(a, b, c) {
        if (a) {
            c = c || n;
            b = b.split(".");
            var d = b.shift().toUpperCase(),
                e = new RegExp("\\s(" + b.join("|") + ")(?=\\s)", "g");
            do
                if (">*" === d && a.parentNode === c || !("" !== d && a.nodeName.toUpperCase() != d || b.length && ((" " + a.className + " ").match(e) || []).length != b.length)) return a;
            while (a !== c && (a = a.parentNode))
        }
        return null
    }

    function g(a, b, c) {
        a.addEventListener(b, c, !1)
    }

    function p(a, b, c) {
        a.removeEventListener(b, c, !1)
    }

    function E(a, b, c) {
        if (a)
            if (a.classList) a.classList[c ? "add" : "remove"](b);
            else {
                var d = (" " + a.className + " ").replace(U, " ").replace(" " + b + " ", " ");
                a.className = (d + (c ? " " + b : "")).replace(U, " ")
            }
    }

    function h(a, b, c) {
        var d = a && a.style;
        if (d) {
            if (void 0 === c) return n.defaultView && n.defaultView.getComputedStyle ? c = n.defaultView.getComputedStyle(a, "") : a.currentStyle && (c = a.currentStyle), void 0 === b ? c : c[b];
            b in d || (b = "-webkit-" + b);
            d[b] = c + ("string" === typeof c ? "" : "px")
        }
    }

    function V(a, b, c) {
        if (a) {
            a = a.getElementsByTagName(b);
            b = 0;
            var d = a.length;
            if (c)
                for (; b < d; b++) c(a[b], b);
            return a
        }
        return []
    }

    function w(a, b, c, d, e, A, k) {
        var y = n.createEvent("Event"),
            h = (a || b[D]).options,
            l = "on" + c.charAt(0).toUpperCase() + c.substr(1);
        y.initEvent(c, !0, !0);
        y.to = b;
        y.from = e || b;
        y.item = d || b;
        y.clone = t;
        y.oldIndex = A;
        y.newIndex = k;
        b.dispatchEvent(y);
        h[l] && h[l].call(a, y)
    }

    function W(a, b, c, d, e, A) {
        var k, h = a[D],
            l = h.options.onMove,
            f;
        k = n.createEvent("Event");
        k.initEvent("move", !0, !0);
        k.to = b;
        k.from = a;
        k.dragged = c;
        k.draggedRect = d;
        k.related = e || b;
        k.relatedRect = A || b.getBoundingClientRect();
        a.dispatchEvent(k);
        l && (f = l.call(h, k));
        return f
    }

    function X(a) {
        a.draggable = !1
    }

    function ca() {
        O = !1
    }

    function da(a) {
        a = a.tagName + a.className + a.src + a.href + a.textContent;
        for (var b = a.length, c = 0; b--;) c += a.charCodeAt(b);
        return c.toString(36)
    }

    function J(a) {
        var b = 0;
        if (!a || !a.parentNode) return -1;
        for (; a && (a = a.previousElementSibling);) "TEMPLATE" !== a.nodeName.toUpperCase() && b++;
        return b
    }

    function Y(a, b) {
        var c, d;
        return function() {
            void 0 === c && (c = arguments, d = this, setTimeout(function() {
                1 === c.length ? a.call(d, c[0]) : a.apply(d, c);
                c = void 0
            }, b))
        }
    }

    function S(a, b) {
        if (a && b)
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }
    var e, F, l, t, f, I, q, P, Q, K, R, u, r, B, z = {},
        C, v, L, U = /\s+/g,
        D = "Sortable" + (new Date).getTime(),
        G = window,
        n = G.document,
        Z = G.parseInt,
        ba = !!("draggable" in n.createElement("div")),
        aa = function(a) {
            a = n.createElement("x");
            a.style.cssText = "pointer-events:auto";
            return "auto" === a.style.pointerEvents
        }(),
        O = !1,
        M = Math.abs,
        H = [],
        ea = Y(function(a, b, c) {
            if (c && b.scroll) {
                var d, e = b.scrollSensitivity,
                    A = b.scrollSpeed,
                    k = a.clientX;
                a = a.clientY;
                var h = window.innerWidth,
                    l = window.innerHeight,
                    f, g;
                if (P !== c && (q = b.scroll, P = c, !0 === q)) {
                    q = c;
                    do
                        if (q.offsetWidth < q.scrollWidth || q.offsetHeight < q.scrollHeight) break;
                    while (q = q.parentNode)
                }
                q && (d = q, b = q.getBoundingClientRect(), f = (M(b.right - k) <= e) - (M(b.left - k) <= e), g = (M(b.bottom - a) <= e) - (M(b.top - a) <= e));
                f || g || (f = (h - k <= e) - (k <= e), g = (l - a <= e) - (a <= e), (f || g) && (d = G));
                if (z.vx !== f || z.vy !== g || z.el !== d) z.el = d, z.vx = f, z.vy = g, clearInterval(z.pid), d && (z.pid = setInterval(function() {
                    d === G ? G.scrollTo(G.pageXOffset + f * A, G.pageYOffset + g * A) : (g && (d.scrollTop += g * A), f && (d.scrollLeft += f * A))
                }, 24))
            }
        }, 30),
        T = function(a) {
            var b = a.group;
            b && "object" == typeof b || (b = a.group = {
                name: b
            });
            ["pull", "put"].forEach(function(a) {
                a in b || (b[a] = !0)
            });
            a.groups = " " + b.name + (b.put.join ? " " + b.put.join(" ") : "") + " "
        };
    m.prototype = {
        constructor: m,
        _onTapStart: function(a) {
            var b = this,
                c = this.el,
                d = this.options,
                e = a.touches && a.touches[0],
                f = (e || a).target,
                k = f,
                h = d.filter;
            if (!("mousedown" === a.type && 0 !== a.button || d.disabled) && (f = x(f, d.draggable, c))) {
                u = J(f);
                if ("function" === typeof h) {
                    if (h.call(this, a, f, this)) {
                        w(b, k, "filter", f, c, u);
                        a.preventDefault();
                        return
                    }
                } else if (h && (h = h.split(",").some(function(a) {
                        if (a = x(k, a.trim(), c)) return w(b, a, "filter", f, c, u), !0
                    }))) {
                    a.preventDefault();
                    return
                }
                d.handle && !x(k, d.handle, c) || this._prepareDragStart(a, e, f)
            }
        },
        _prepareDragStart: function(a, b, c) {
            var d = this,
                h = d.el,
                l = d.options,
                k = h.ownerDocument;
            c && !e && c.parentNode === h && (C = a, f = h, e = c, F = e.parentNode, I = e.nextSibling, B = l.group, a = function() {
                d._disableDelayedDrag();
                e.draggable = !0;
                E(e, d.options.chosenClass, !0);
                d._triggerDragStart(b)
            }, l.ignore.split(",").forEach(function(a) {
                V(e, a.trim(), X)
            }), g(k, "mouseup", d._onDrop), g(k, "touchend", d._onDrop), g(k, "touchcancel", d._onDrop), l.delay ? (g(k, "mouseup", d._disableDelayedDrag), g(k, "touchend", d._disableDelayedDrag), g(k, "touchcancel", d._disableDelayedDrag), g(k, "mousemove", d._disableDelayedDrag), g(k, "touchmove", d._disableDelayedDrag), d._dragStartTimer = setTimeout(a, l.delay)) : a())
        },
        _disableDelayedDrag: function() {
            var a = this.el.ownerDocument;
            clearTimeout(this._dragStartTimer);
            p(a, "mouseup", this._disableDelayedDrag);
            p(a, "touchend", this._disableDelayedDrag);
            p(a, "touchcancel", this._disableDelayedDrag);
            p(a, "mousemove", this._disableDelayedDrag);
            p(a, "touchmove", this._disableDelayedDrag)
        },
        _triggerDragStart: function(a) {
            a ? (C = {
                target: e,
                clientX: a.clientX,
                clientY: a.clientY
            }, this._onDragStart(C, "touch")) : this.nativeDraggable ? (g(e, "dragend", this), g(f, "dragstart", this._onDragStart)) : this._onDragStart(C, !0);
            try {
                n.selection ? n.selection.empty() : window.getSelection().removeAllRanges()
            } catch (b) {}
        },
        _dragStarted: function() {
            f && e && (E(e, this.options.ghostClass, !0), m.active = this, w(this, f, "start", e, f, u))
        },
        _emulateDragOver: function() {
            if (v && (this._lastX !== v.clientX || this._lastY !== v.clientY)) {
                this._lastX = v.clientX;
                this._lastY = v.clientY;
                aa || h(l, "display", "none");
                var a = n.elementFromPoint(v.clientX, v.clientY),
                    b = a,
                    c = " " + this.options.group.name + "",
                    d = H.length;
                if (b) {
                    do {
                        if (b[D] && -1 < b[D].options.groups.indexOf(c)) {
                            for (; d--;) H[d]({
                                clientX: v.clientX,
                                clientY: v.clientY,
                                target: a,
                                rootEl: b
                            });
                            break
                        }
                        a = b
                    } while (b = b.parentNode)
                }
                aa || h(l, "display", "")
            }
        },
        _onTouchMove: function(a) {
            if (C) {
                m.active || this._dragStarted();
                this._appendGhost();
                var b = a.touches ? a.touches[0] : a,
                    c = b.clientX - C.clientX,
                    d = b.clientY - C.clientY,
                    c = a.touches ? "translate3d(" + c + "px," + d + "px,0)" : "translate(" + c + "px," + d + "px)";
                L = !0;
                v = b;
                h(l, "webkitTransform", c);
                h(l, "mozTransform", c);
                h(l, "msTransform", c);
                h(l, "transform", c);
                a.preventDefault()
            }
        },
        _appendGhost: function() {
            if (!l) {
                var a = e.getBoundingClientRect(),
                    b = h(e),
                    c = this.options;
                l = e.cloneNode(!0);
                E(l, c.ghostClass, !1);
                E(l, c.fallbackClass, !0);
                h(l, "top", a.top - Z(b.marginTop, 10));
                h(l, "left", a.left - Z(b.marginLeft, 10));
                h(l, "width", a.width);
                h(l, "height", a.height);
                h(l, "opacity", "0.8");
                h(l, "position", "fixed");
                h(l, "zIndex", "100000");
                h(l, "pointerEvents", "none");
                c.fallbackOnBody && n.body.appendChild(l) || f.appendChild(l);
                b = l.getBoundingClientRect();
                h(l, "width", 2 * a.width - b.width);
                h(l, "height", 2 * a.height - b.height)
            }
        },
        _onDragStart: function(a, b) {
            var c = a.dataTransfer,
                d = this.options;
            this._offUpEvents();
            "clone" == B.pull && (t = e.cloneNode(!0), h(t, "display", "none"), f.insertBefore(t, e));
            b ? ("touch" === b ? (g(n, "touchmove", this._onTouchMove), g(n, "touchend", this._onDrop), g(n, "touchcancel", this._onDrop)) : (g(n, "mousemove", this._onTouchMove), g(n, "mouseup", this._onDrop)), this._loopId = setInterval(this._emulateDragOver, 50)) : (c && (c.effectAllowed = "move", d.setData && d.setData.call(this, c, e)), g(n, "drop", this), setTimeout(this._dragStarted, 0))
        },
        _onDragOver: function(a) {
            var b = this.el,
                c, d, g;
            d = this.options;
            c = d.group;
            var n = c.put,
                k = B === c,
                p = d.sort;
            void 0 !== a.preventDefault && (a.preventDefault(), !d.dragoverBubble && a.stopPropagation());
            L = !0;
            if (B && !d.disabled && (k ? p || (g = !f.contains(e)) : B.pull && n && (B.name === c.name || n.indexOf && ~n.indexOf(B.name))) && (void 0 === a.rootEl || a.rootEl === this.el) && (ea(a, d, this.el), !O))
                if (c = x(a.target, d.draggable, b), d = e.getBoundingClientRect(), g) N(!0), t || I ? f.insertBefore(e, t || I) : p || f.appendChild(e);
                else if (!(g = 0 === b.children.length || b.children[0] === l) && (g = b === a.target) && (c = b.lastElementChild, g = c.getBoundingClientRect(), g = c = (5 < a.clientY - (g.top + g.height) || 5 < a.clientX - (g.right + g.width)) && c), g) {
                if (c) {
                    if (c.animated) return;
                    m = c.getBoundingClientRect()
                }
                N(k);
                !1 !== W(f, b, e, d, c, m) && (e.contains(b) || (b.appendChild(e), F = b), this._animate(d, e), c && this._animate(m, c))
            } else if (c && !c.animated && c !== e && void 0 !== c.parentNode[D]) {
                Q !== c && (Q = c, K = h(c), R = h(c.parentNode));
                var m = c.getBoundingClientRect(),
                    r = m.right - m.left,
                    q = m.bottom - m.top,
                    p = /left|right|inline/.test(K.cssFloat + K.display) || "flex" == R.display && 0 === R["flex-direction"].indexOf("row");
                g = c.offsetWidth > e.offsetWidth;
                n = c.offsetHeight > e.offsetHeight;
                r = .5 < (p ? (a.clientX - m.left) / r : (a.clientY - m.top) / q);
                a = c.nextElementSibling;
                q = W(f, b, e, d, c, m);
                !1 !== q && (O = !0, setTimeout(ca, 30), N(k), 1 === q || -1 === q ? k = 1 === q : p ? (k = e.offsetTop, p = c.offsetTop, k = k === p ? c.previousElementSibling === e && !g || r && g : p > k) : k = a !== e && !n || r && n, e.contains(b) || (k && !a ? b.appendChild(e) : c.parentNode.insertBefore(e, k ? a : c)), F = e.parentNode, this._animate(d, e), this._animate(m, c))
            }
        },
        _animate: function(a, b) {
            var c = this.options.animation;
            if (c) {
                var d = b.getBoundingClientRect();
                h(b, "transition", "none");
                h(b, "transform", "translate3d(" + (a.left - d.left) + "px," + (a.top - d.top) + "px,0)");
                b.offsetWidth;
                h(b, "transition", "all " + c + "ms");
                h(b, "transform", "translate3d(0,0,0)");
                clearTimeout(b.animated);
                b.animated = setTimeout(function() {
                    h(b, "transition", "");
                    h(b, "transform", "");
                    b.animated = !1
                }, c)
            }
        },
        _offUpEvents: function() {
            var a = this.el.ownerDocument;
            p(n, "touchmove", this._onTouchMove);
            p(a, "mouseup", this._onDrop);
            p(a, "touchend", this._onDrop);
            p(a, "touchcancel", this._onDrop)
        },
        _onDrop: function(a) {
            var b = this.el,
                c = this.options;
            clearInterval(this._loopId);
            clearInterval(z.pid);
            clearTimeout(this._dragStartTimer);
            p(n, "mousemove", this._onTouchMove);
            this.nativeDraggable && (p(n, "drop", this), p(b, "dragstart", this._onDragStart));
            this._offUpEvents();
            if (a) {
                L && (a.preventDefault(), !c.dropBubble && a.stopPropagation());
                l && l.parentNode.removeChild(l);
                if (e && (this.nativeDraggable && p(e, "dragend", this), X(e), E(e, this.options.ghostClass, !1), E(e, this.options.chosenClass, !1), f !== F ? (r = J(e), 0 <= r && (w(null, F, "sort", e, f, u, r), w(this, f, "sort", e, f, u, r), w(null, F, "add", e, f, u, r), w(this, f, "remove", e, f, u, r))) : (t && t.parentNode.removeChild(t), e.nextSibling !== I && (r = J(e), 0 <= r && (w(this, f, "update", e, f, u, r), w(this, f, "sort", e, f, u, r)))), m.active)) {
                    if (null === r || -1 === r) r = u;
                    w(this, f, "end", e, f, u, r);
                    this.save()
                }
                f = e = F = l = I = t = q = P = C = v = L = r = Q = K = B = m.active = null
            }
        },
        handleEvent: function(a) {
            var b = a.type;
            "dragover" === b || "dragenter" === b ? e && (this._onDragOver(a), a.dataTransfer && (a.dataTransfer.dropEffect = "move"), a.preventDefault()) : "drop" !== b && "dragend" !== b || this._onDrop(a)
        },
        toArray: function() {
            for (var a = [], b, c = this.el.children, d = 0, e = c.length, f = this.options; d < e; d++) b = c[d], x(b, f.draggable, this.el) && a.push(b.getAttribute(f.dataIdAttr) || da(b));
            return a
        },
        sort: function(a) {
            var b = {},
                c = this.el;
            this.toArray().forEach(function(a, e) {
                var f = c.children[e];
                x(f, this.options.draggable, c) && (b[a] = f)
            }, this);
            a.forEach(function(a) {
                b[a] && (c.removeChild(b[a]), c.appendChild(b[a]))
            })
        },
        save: function() {
            var a = this.options.store;
            a && a.set(this)
        },
        closest: function(a, b) {
            return x(a, b || this.options.draggable, this.el)
        },
        option: function(a, b) {
            var c = this.options;
            if (void 0 === b) return c[a];
            c[a] = b;
            "group" === a && T(c)
        },
        destroy: function() {
            var a = this.el;
            a[D] = null;
            p(a, "mousedown", this._onTapStart);
            p(a, "touchstart", this._onTapStart);
            this.nativeDraggable && (p(a, "dragover", this), p(a, "dragenter", this));
            Array.prototype.forEach.call(a.querySelectorAll("[draggable]"), function(a) {
                a.removeAttribute("draggable")
            });
            H.splice(H.indexOf(this._onDragOver), 1);
            this._onDrop();
            this.el = a = null
        }
    };
    m.utils = {
        on: g,
        off: p,
        css: h,
        find: V,
        is: function(a, b) {
            return !!x(a, b, a)
        },
        extend: S,
        throttle: Y,
        closest: x,
        toggleClass: E,
        index: J
    };
    m.create = function(a, b) {
        return new m(a, b)
    };
    m.version = "1.4.2";
    return m
});
! function() {
    window.geo = {}
}(), $(function() {
    geo.init()
}), geo = {
    Plugins: {
        partidos: [],
        init: function() {
            var e = this;
            if ($.getJSON("process/partidos.json", function(t) {
                    e.partidos = t
                }), "undefined" != typeof this.pluginsInit && 0 < this.pluginsInit.length)
                for (var t = 0, n = this.pluginsInit.length; n > t; t++) this[this.pluginsInit[t]].init();
            this.Menu.init(), $("#measure").css({
                top: $("#mainmenu .ruler").offset().top - 50
            })
        }
    },
    init: function() {
        this.Map.init(), this.Layout.init(), this.Map.Layer.init(), this.Map.Info.init(), this.Search.init(), this.Plugins.init()
    }
}, geo.Map = {
    map: null,
    baselayer: null,
    wmslayers: [],
    Layer: {},
    controls: {
        pan: new OpenLayers.Control.Pan,
        zoomin: new OpenLayers.Control.ZoomBox({
            out: !1
        }),
        zoomout: new OpenLayers.Control.ZoomBox({
            out: !0
        }),
        line: new OpenLayers.Control.Measure(OpenLayers.Handler.Path, {
            eventListeners: {
                measure: function(e) {
                    geo.Map.handleMeasure(e)
                },
                measurepartial: function(e) {
                    geo.Map.handleMeasure(e)
                }
            },
            persist: !0,
            immediate: !0,
            geodesic: !0
        }),
        polygon: new OpenLayers.Control.Measure(OpenLayers.Handler.Polygon, {
            eventListeners: {
                measure: function(e) {
                    geo.Map.handleMeasure(e)
                },
                measurepartial: function(e) {
                    geo.Map.handleMeasure(e)
                }
            },
            persist: !0,
            geodesic: !0
        })
    },
    layers: [{
        name: "OpenStreetMap",
        source: "OSM",
        url: ["https://a.tile.openstreetmap.org/${z}/${x}/${y}.png", "https://b.tile.openstreetmap.org/${z}/${x}/${y}.png", "https://c.tile.openstreetmap.org/${z}/${x}/${y}.png"]
    }, {
        name: "OpenCycleMap",
        source: "OSM",
        url: ["http://a.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png", "http://b.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png", "http://c.tile.opencyclemap.org/cycle/${z}/${x}/${y}.png"]
    }, {
        name: "Humanitarian",
        source: "OSM",
        url: ["https://tile-a.openstreetmap.fr/hot/${z}/${x}/${y}.png", "https://tile-b.openstreetmap.fr/hot/${z}/${x}/${y}.png", "https://tile-c.openstreetmap.fr/hot/${z}/${x}/${y}.png"]
    }, {
        name: "MapQuest Callejero",
        source: "MapQuest",
        url: ["http://tileproxy.cloud.mapquest.com/tiles/1.0.0/map/${z}/${x}/${y}.png"]
    }, {
        name: "MapQuest Satélite",
        source: "MapQuest",
        url: ["http://tileproxy.cloud.mapquest.com/tiles/1.0.0/sat/${z}/${x}/${y}.png"]
    }, {
        name: "MapQuest Hibrido",
        source: "MapQuest",
        url: ["http://tileproxy.cloud.mapquest.com/tiles/1.0.0/hyb/${z}/${x}/${y}.png"]
    }, {
        name: "Google Callejero",
        source: "Google",
        type: google.maps.MapTypeId.ROADMAP
    }, {
        name: "Google Satélite",
        source: "Google",
        type: google.maps.MapTypeId.SATELLITE
    }, {
        name: "Google Hibrido",
        source: "Google",
        type: google.maps.MapTypeId.HYBRID
    }, {
        name: "Google Fisico",
        source: "Google",
        type: google.maps.MapTypeId.TERRAIN
    }, {
        name: "Sin Capa Base",
        source: "Blanco"
    }],
    init: function() {
        var e = this;
        OpenLayers.ProxyHost = "proxy.php?url=", OpenLayers.IMAGE_RELOAD_ATTEMPTS = 3, OpenLayers.Util.onImageLoadErrorColor = "transparent", OpenLayers.ImgPath = "images/", this.map = new OpenLayers.Map("map", {
            theme: null,
            projection: new OpenLayers.Projection("EPSG:900913"),
            displayProjection: new OpenLayers.Projection("EPSG:4326"),
            units: "m",
            controls: [new OpenLayers.Control.Navigation({
                zoomWheelEnabled: !0,
                zoomWheelOptions: {
                    interval: 250
                },
                dragPanOptions: {
                    enableKinetic: !0
                }
            }), new OpenLayers.Control.LoadingPanel({
                div: document.getElementById("loading")
            }), new OpenLayers.Control.KeyboardDefaults, new OpenLayers.Control.Legend({
                div: OpenLayers.Util.getElement("legend"),
                useScale: !0
            })],
            fallThrough: !0,
            tileManager: null,
            eventListeners: {
                moveend: function() {
                    e.moveend()
                },
                changebaselayer: function() {
                    e.moveend()
                }
            },
            scales: [6933504, 3466752, 1733376, 866688, 433344, 216672, 108336, 54168, 27084, 13542],
            maxExtent: new OpenLayers.Bounds(-8284116, -5118327, -5128795, -3766839),
            restrictedExtent: new OpenLayers.Bounds(-9084116, -5118327, -4328795, -3766839),
            maxResolution: "auto"
        }), this.addLayers(this.layers);
        var t = this.map.getLayersByName("OpenStreetMap")[0];
        this.map.addControl(new OpenLayers.Control.OverviewMap({
            layers: [t.clone()],
            mapOptions: {
                theme: null
            }
        }));
        for (var n in this.controls) t = this.controls[n], this.map.addControl(t);
        this.events(), this.measureStyle()
    },
    addLayers: function(e) {
        for (var t = this, n = e.length, o = function(e) {
                return t.map.addLayer(e), e
            }, a = 0; n > a; a++) {
            var i, s = [156543.03390625, 78271.516953125, 39135.7584765625, 19567.87923828125, 9783.939619140625, 4891.9698095703125, 2445.9849047851562, 1222.9924523925781, 611.4962261962891, 305.74811309814453, 152.87405654907226, 76.43702827453613, 38.218514137268066, 19.109257068634033, 9.554628534317017, 4.777314267158508, 2.388657133579254, 1.194328566789627, .5971642833948135, .25, .1, .05];
            switch (e[a].source) {
                case "Google":
                    i = o(new OpenLayers.Layer.Google(e[a].name, {
                        type: e[a].type,
                        sphericalMercator: !0,
                        numZoomLevels: 20,
                        resolutions: s,
                        serverResolutions: s,
                        transitionEffect: "resize",
                        useTiltImages: !1
                    }));
                    break;
                case "MapQuest":
                case "OSM":
                    i = s.slice(0, e[a].zoomlevels || 19), i = o(new OpenLayers.Layer.OSM(e[a].name, e[a].url, {
                        tileOptions: {
                            crossOriginKeyword: null
                        },
                        sphericalMercator: !0,
                        resolutions: i,
                        serverResolutions: i,
                        transitionEffect: "resize",
                        buffer: 0
                    }));
                    break;
                case "Bing":
                    i = o(new OpenLayers.Layer.Bing({
                        name: e[a].name,
                        type: e[a].type,
                        key: "API-KEY"
                    }));
                    break;
                case "Blanco":
                    i = o(new OpenLayers.Layer.Vector(e[a].name, {
                        isBaseLayer: !0,
                        numZoomLevels: 22,
                        minScale: 6933504
                    }));
                    break;
                case "WMS":
                    i = o(new OpenLayers.Layer.WMS(e[a].name, geo.Utils.trimUrl(e[a].url), {
                        layers: e[a].name,
                        format: "image/png",
                        transparent: !0,
                        styles: e[a].styles
                    }, {
                        title: e[a].title,
                        transitionEffect: null,
                        projection: "EPSG:900913",
                        units: "m",
                        visibility: e[a].visibility || !1,
                        isBaseLayer: e[a].isBaseLayer || !1
                    })), e[a].tiled && (i.params.TILED = !0), this.wmslayers.push(i)
            }
            e[a].id = i.id
        }
    },
    events: function() {
        var e = this;
        $(document).on("click", ".ctrl", e.toggleCtrl), $("#mainmenu .ruler").click(function() {
            $("#measure").toggle("slide", {
                direction: "left"
            }, 400)
        }), $("#measure .btnset").click(function(e) {
            e.stopPropagation(), e = $(this).data("control");
            var t = $("i", this).attr("class");
            geo.Map.toggleControl(e), geo.Layout.deactivateMainMenu(), $("#mainmenu .ruler span").addClass("active").find("i").attr("class", t), $("#measure").toggle("slide", {
                direction: "left"
            }, 400)
        }), $(document).on("click", "#mainmenu li:not('.ruler')", function() {
            var e = $("#measure");
            e.is(":visible") && e.toggle("slide", {
                direction: "left"
            }, 400)
        }), $("#mainmenu .zmax").click(function() {
            e.zoomExtent()
        }), $("#mainmenu .over").click(function() {
            $(".olControlOverviewMapElement").fadingSlideToggle(), $("#mainmenu .over span").toggleClass("active")
        }), $(document.body).on("click", ".baselayer", function() {
            e.changeBaseLayer($(this))
        }), $(document.body).on("click", ".overlayer", function() {
            e.setVisibilityLayer($(this))
        })
    },
    moveend: function() {
        "Google" === this.baselayer ? this.map.fractionalZoom = !1 : this.map.fractionalZoom = !0, this.setBaseLayer()
    },
    changeBaseLayer: function(e) {
        $("#layers ul li ul .baselayer").removeClass("active").find("i").removeClass("icon-radio-button-on"), e.find("i").addClass("icon-radio-button-on"), e = this.map.getLayersBy("id", e.addClass("active").data("base"))[0], this.map.setBaseLayer(e), this.setBaseLayer()
    },
    measureStyle: function() {
        for (var e = this.map.getControlsBy("displayClass", "olControlMeasure"), t = e.length, n = {
                Point: {
                    pointRadius: 7,
                    fillColor: "#9aca3c",
                    fillOpacity: .2,
                    strokeWidth: 2,
                    strokeOpacity: 1,
                    strokeColor: "#9aca3c"
                },
                Line: {
                    strokeWidth: 3,
                    strokeOpacity: 1,
                    strokeColor: "#9aca3c",
                    strokeDashstyle: "dash"
                },
                Polygon: {
                    strokeWidth: 3,
                    strokeOpacity: 1,
                    strokeColor: "#9aca3c",
                    fillColor: "white",
                    fillOpacity: .3
                }
            }, o = function() {
                var e = new OpenLayers.Style;
                e.addRules([new OpenLayers.Rule({
                    symbolizer: n
                })]);
                var e = new OpenLayers.StyleMap({
                        "default": e
                    }),
                    t = OpenLayers.Util.getParameters(window.location.href).renderer,
                    t = t ? [t] : OpenLayers.Layer.Vector.prototype.renderers;
                return {
                    renderers: t,
                    styleMap: e
                }
            }, a = 0; t > a; a++) delete e[a].handler.style, $.extend(e[a].handler, {
            layerOptions: {}
        }), $.extend(e[a].handler.layerOptions, o())
    },
    handleMeasure: function(e) {
        var t = e.units,
            n = e.measure,
            o = "",
            o = 1 == e.order ? o + (n.toFixed(3) + " " + t) : o + (n.toFixed(3) + " " + t + "<sup>2</sup>");
        $("#out").html(o).show()
    },
    setBaseLayer: function() {
        this.baselayer = this.map.baseLayer.id.split("_")[2]
    },
    setWMSLayers: function() {
        this.wmslayers = [];
        for (var e = this.map.layers.length, t = 0; e > t; t++) {
            var n = this.map.layers[t];
            n instanceof OpenLayers.Layer.WMS && this.wmslayers.push(n)
        }
        return this.wmslayers
    },
    setVisibilityLayer: function(e) {
        e.find("i").toggleClass("icon-radio-button-off icon-radio-button-on"), e = this.map.getLayersBy("id", e.toggleClass("active").attr("name"))[0], e.setVisibility(!e.visibility)
    },
    toggleControl: function(e) {
        for (var t in this.controls) {
            var n = this.controls[t];
            e == t ? n.activate() : (n.deactivate(), $("#out").text("").hide())
        }
    },
    toggleCtrl: function() {
        var e = $(this).data("control");
        geo.Map.toggleControl(e), geo.Layout.activateMenuItem(e)
    },
    zoomExtent: function() {
        var e;
        switch (this.baselayer) {
            case "Bing":
                e = 5;
                break;
            case "Vector":
                e = 0;
                break;
            default:
                e = 6
        }
        this.map.setCenter(new OpenLayers.LonLat(-6692904, -4353282), e)
    },
    zoomToExtend: function(e, t, n, o) {
        this.map.zoomToExtent(new OpenLayers.Bounds(e, t, n, o), !0)
    }
}, geo.Layout = {
    activate: 0,
    item: null,
    isOpened: !0,
    init: function() {
        var e = this;
        $(document).on("click", "#sidebar span", e.showItem), $("#toggle-content").click(function() {
            300 > $(".nano-content").width() ? e.open() : e.close()
        }), $("#toggle-menu").click(function() {
            $("#toggle-menu i").toggleClass("icon-chevron-left icon-chevron-right"), $("#north-center").toggle("slide", {
                direction: "right"
            })
        }), $(window).resize(function() {
            window.setTimeout(function() {
                e.resize()
            }, 100)
        }), $(document).on("click", "#layers span.folder", e.checkContext), is.mobile() && ($('#mainmenu li[data-control="zoomin"]').remove(), $('#mainmenu li[data-control="zoomout"]').remove()), this.resize()
    },
    showItem: function() {
        var e = $(this).data("href"),
            t = geo.Layout;
        t.active == e && t.isOpened || $(this).parent("a").length || (300 > $(".nano-content").width() && t.open(), $(this).hasClass("active") || ($($("#sidebar span.active").data("href")).hide().addClass("hidden"), $(e).fadeIn().removeClass("hidden"), $("#sidebar span").removeClass("active"), $(this).addClass("active"), t.scroll()), t.active = e)
    },
    open: function() {
        $("#toggle-content i").toggleClass("icon-chevron-left icon-chevron-right"), $("#sidebar span.previous-active").addClass("active").removeClass("previous-active"), $("#map, #south-center").animate({
            left: "370px"
        }, 500, function() {
            geo.Map.map.updateSize()
        }), $("#content").hide().toggle("slide", {
            direction: "left"
        }, 400), this.isOpened = !0
    },
    close: function() {
        $("#toggle-content i").toggleClass("icon-chevron-left icon-chevron-right"), $("#sidebar span.active").removeClass("active").addClass("previous-active"), $("#map, #south-center").animate({
            left: "70px"
        }, 400, function() {
            geo.Map.map.updateSize()
        }), $("#content").show().toggle("slide", {
            direction: "left"
        }, 500), this.isOpened = !1
    },
    scroll: function() {
        $(".nano").nanoScroller()
    },
    resize: function() {
        var e = $(window).height(); - 1 !== navigator.appVersion.indexOf("MSIE") ? ($("#west, #content").height(e - 56), $("#map").height(e - 78)) : $("#west, #content, #map").height(e - 50), this.scroll(), geo.Map.map.updateSize()
    },
    deactivateMainMenu: function() {
        $("#mainmenu .btnset span").removeClass("active")
    },
    activateMenuItem: function(e) {
        this.deactivateMainMenu(), $("#mainmenu .btnset[data-control='" + e + "']").find("span").addClass("active")
    },
    checkContext: function() {
        var e = geo.Layout;
        e.activate || e.contextMenu()
    },
    contextMenu: function() {
        if (geo.contextList) {
            var e = {
                    border: "1px solid #bbb",
                    width: "160px"
                },
                t = {
                    color: "#333333",
                    border: "none",
                    padding: "5px 10px",
                    margin: "2px 0",
                    fontFamily: "Geneva, Arial, Helvetica, sans-serif",
                    "font-size": "95%"
                },
                n = {
                    color: "#ffffff",
                    border: "none"
                };
            $.each(geo.contextList, function() {
                var o = '<div style="display:none" class="contextMenu" id="' + this.menuid + '">',
                    a = {},
                    o = o + "<ul>";
                $.each(this.menulist, function() {
                    if (this.sep) o += "<li class='menu_sep'></li>";
                    else {
                        var e = "";
                        this.val && (e = this.val), o += '<li id="' + this.id + '" data-val="' + e + '">', e = this.text, this.imgsrc && (o += '<img src="images/menus/' + this.imgsrc + '" alt="' + e + '"/>'), o += e + "</li>", a[this.id] = geo.contextRun[this.run]
                    }
                }), o += "</ul>", $("#" + this.menuid).length || $("body").append(o), $(this.bindto).contextMenu(this.menuid, {
                    bindings: a,
                    menuStyle: $.extend({}, e, this.styles.menuStyle || {}),
                    itemStyle: $.extend({}, t, this.styles.itemStyle || {}),
                    itemHoverStyle: $.extend({}, n, this.styles.itemHoverStyle || {}),
                    onContextMenu: this.onContextMenu || null,
                    onShowMenu: this.onShowMenu || null
                })
            }), this.activate = 1, $(document).off("click", "#layers span.folder", this.checkContext)
        }
    }
}, geo.contextList = [{
    bindto: "li.ctxmenu",
    menuid: "menu",
    menulist: [],
    styles: {}
}], geo.contextRun = {}, geo.Map.Layer = {
    init: function() {
        this.load()
    },
    load: function() {
        var e = this;
        $.ajax({
            url: "./process/layers.php",
            data: {},
            dataType: "JSON",
            success: function(t) {
                null != t && geo.Map.addLayers(t), geo.TOC.init(t), e.getData(t)
            }
        })
    },
    getData: function(e) {
        for (var t = [], n = 0, o = e.length; o > n; n++) {
            var a = geo,
                i = a.Store,
                s = a.Utils,
                r = a.Map,
                a = s.trimUrl(e[n].url),
                l = e[n].repository; - 1 == t.indexOf(a) && (t.push(a), i.servers.push({
                url: a,
                title: l
            }), i.getCapabilities(a, function(e, t) {
                if (0 != t && void 0 != t) {
                    var n = s.getBy(i.servers, "url", e).value,
                        o = i.addServer(t),
                        a = r.map.getLayersBy("url", e);
                    n.layers = o;
                    for (var n = 0, l = a.length; l > n; n++) {
                        var c = a[n],
                            p = s.getBy(o, "name", c.name);
                        r.Info.layers.push(c), null != p && (p = p.value.layer.options, p.title = c.options.title, $.extend(c.options, p), $.extend(c, p))
                    }
                    r.Info.getFeatureInfo(), r.Info.check("#mainmenu .ctrl:eq(0)")
                }
            }))
        }
    }
}, geo.TOC = {
    init: function(e) {
        e = this.separate(e), e[0].length && e[0].orderByString("category"), e[1].length && e[1].orderByString("title"), this.addBaseLayers(e[0]), this.addOverLayers(e[1]), this.collapseAll(), geo.Map.zoomExtent(), $("#layers ul li ul .baselayer").eq(0).click(), $(document).on("click", ".folder", function() {
            $(this).next().slideToggle(function() {
                geo.Layout.scroll()
            })
        });
        var t = this;
        $("input.search-query").keyup(function() {
            t.search(this.value)
        })
    },
    separate: function(e) {
        for (var t = [], n = [], o = 0, a = e.length; a > o; o++) {
            var i = !1,
                s = e[o];
            void 0 != s.isBaseLayer && 1 == s.isBaseLayer && (i = !0), i ? t.push(s) : n.push(s)
        }
        return [t, n]
    },
    addBaseLayers: function(e) {
        for (var t = $('<li><span class="folder">Mapa Base</span></li>'), n = $("<ul></ul>"), o = [], a = 0, i = e.length; i > a; a++) {
            var s = e[a];
            if (!o.inArray(s.category)) {
                o.push(s.category);
                var r = $('<li><span class="folder">' + s.category + "</span></li>"),
                    l = $("<ul></ul>")
            }
            l.append('<li class="baselayer" data-base="' + s.id + '"><i class="icon-radio-button-off"></i> ' + s.title + "</li>"), r.append(l), n.append(r)
        }
        for (e = 0, o = [], a = geo.Map.layers, i = a.length; i > e; e++) {
            if (s = a[e], !o.inArray(s.source)) {
                o.push(s.source);
                var c = $('<li><span class="folder">' + s.source + "</span></li>"),
                    p = $("<ul></ul>")
            }
            p.append('<li class="baselayer" data-base="' + s.id + '"><i class="icon-radio-button-off"></i> ' + s.name + "</li>"), c.append(p), n.append(c)
        }
        t.append(n), $("#layers").append(t)
    },
    addOverLayers: function(e) {
        var t, n = {},
            o = [];
        t = "<li><span class='folder'>Capas</span><ul>";
        for (var a = 0; a < e.length; a++) {
            var i = "class='icon-radio-button-off'",
                s = e;
            void 0 == n[s[a].category] && (o.push(s[a].category), n[s[a].category] = []);
            var r = "";
            s[a].visibility && (r = " active", i = "class='icon-radio-button-on'"), n[s[a].category].push("<li class='overlayer ctxmenu" + r + "' name='" + s[a].id + "'><i " + i + "></i> " + s[a].title + "</li>")
        }
        for (o.sort(), e = 0; e < o.length; e++) {
            for (a = o[e], i = n[a].length, t += "<li><span class='folder'>" + a + "</span><ul>", s = 0; i > s; s++) t += n[a][s];
            t += "</ul></li>"
        }
        $(t + "</ul></li>").appendTo("#layers")
    },
    search: function(e) {
        var t = this;
        if ($("#no-layers").length || $("#layers").before('<div id="no-layers">No existe la capa buscada</div>'), "" != e) {
            if (!$("#layers-content .search .search-cancel").length) {
                var n = $("#layers-content .search");
                n.append('<b class="icon-cancel search-cancel"></b>'), $(".search-cancel", n).click(function() {
                    n.find("input").val(""), $(this).remove(), t.cancelSearch()
                })
            }
            $("#layers .overlayer, #layers .baselayer").hide().parent().hide().parent().hide().parent().hide().parent().hide(), $("#layers .overlayer:contains('" + e + "'), #layers .baselayer:contains('" + e + "')").show().parent().show().parent().show().parent().show().parent().show(), $("#layers .folder").is(":visible") ? $("#no-layers").hide() : $("#no-layers").show()
        } else $("#layers-content .search .search-cancel").remove(), t.cancelSearch();
        geo.Layout.scroll()
    },
    cancelSearch: function() {
        $("#no-layers").remove(), $("#layers .overlayer, #layers .baselayer").show().parent().hide().parent().show().parent().show().parent().show(), this.collapseAll()
    },
    collapseAll: function() {
        $(".folder").next().hide(), geo.Layout.scroll()
    }
}, geo.Map.Info = {
    layers: [],
    controls: [],
    popupCache: null,
    format: "html",
    numRequest: 0,
    options: {
        position: {
            top: 49,
            left: 0
        },
        size: {}
    },
    init: function() {
        var e = this;
        $(document).on("click", ".ctrl", function() {
            e.check(this)
        }), $(document).on("click", "#q_response .result_query", function() {
            $(this).next().slideToggle(), $("i", this).toggleClass("icon-angle-right icon-chevron-small-down")
        })
    },
    queryableLayers: function() {
        for (var e = this.layers.length, t = [], n = 0; e > n; n++) this.layers[n].queryable && t.push(this.layers[n]);
        return t
    },
    getFeatureInfo: function() {
        var e, t = this,
            n = t.controls,
            o = t.queryableLayers();
        t.popupCache = {};
        for (var a = 0, i = n.length; i > a; a++) e = n[a], e.deactivate(), e.destroy();
        t.controls = [], o.length && $.each(o, function() {
            var e = this,
                n = new OpenLayers.Control.WMSGetFeatureInfo({
                    url: e.url,
                    queryVisible: !0,
                    layers: [e],
                    infoFormat: "text/html",
                    eventListeners: {
                        getfeatureinfo: function(n) {
                            if (--t.numRequest, 200 == n.request.status) {
                                var o = e.title || e.name,
                                    a = n.text.match(/<body[^>]*>([\s\S]*)<\/body>/);
                                a && !a[1].match(/^\s*$/) ? t.process(n, o, a[1]) : t.process(n, o, "")
                            }
                        },
                        beforegetfeatureinfo: function(e) {
                            if (t.numRequest += 1, void 0 != this.x) {
                                var n = this.map.getLonLatFromPixel(e.xy),
                                    n = this.map.getPixelFromLonLat(new OpenLayers.LonLat(n.lon + this.x, n.lat + this.y));
                                e.xy = n
                            }
                            return e
                        },
                        nogetfeatureinfo: function(e) {
                            --t.numRequest
                        },
                        scope: this
                    }
                });
            geo.Map.map.addControl(n), t.controls.push(n), t.check($("li.ctrl[data-control='info']")[0])
        })
    },
    check: function(e) {
        e = $(e).data("control");
        var t = this.controls,
            n = t.length;
        if (0 != n)
            for (var o = 0; n > o; o++) {
                var a = t[o];
                "info" == e ? (a.deactivate(), a.activate()) : a.deactivate()
            }
    },
    process: function(e, t, n) {
        this.popupKey = e.xy.x + "." + e.xy.y, this.popupKey in this.popupCache || (this.popupCache[this.popupKey] = []), e = e.object.id.split(".").pop();
        var o = "";
        n && (o = o + ("<div class='result_query' data-name='" + e + "'>Capa: " + t + "<i class='icon-chevron-small-down'></i></div>") + ("<div id='" + e + "' class='result_query_content'>" + n + "</div><div class='clear'></div>")), this.popupCache[this.popupKey].push(o), this.popup()
    },
    popup: function() {
        var e = geo.Map.Info;
        if (0 != e.numRequest && void 0 != e.numRequest) window.setTimeout(e.popup, 500);
        else if (null != e.popupCache) {
            var t = e.popupCache[e.popupKey];
            void 0 != t && 0 < t.length && (e.popupCache = [], e = t.join(""), "" == e ? this.show("<div id='no_results'>No hay resultados.</div>") : this.show(e))
        }
    },
    show: function(e) {
        var t = this.options.position,
            n = this.options.size,
            o = $("#q_response");
        o.length && (o.remove(), $(".dialog.response").remove());
        var a, i, s, r, l = geo.Plugins.FullScreen;
        void 0 !== l && l.isFullscreen() && (i = 370, a = window.innerHeight, s = r = 1);
        var c;
        $("#content").is(":visible") || (c = 370);
        var p = $("<div id='q_response'></div>");
        p.dialog({
            appendTo: "#info",
            title: "Resultados",
            autoOpen: !1,
            height: a || n.height || parseInt($("#west").height()),
            width: i || n.width || c || window.innerWidth - $("#map").width(),
            close: function(e, t) {
                $(".dialog.response").remove(), o.remove()
            },
            open: function(e, n) {
                void 0 !== t.top && $(e.target).parent().css({
                    position: "fixed",
                    top: s || t.top + "px",
                    left: r || t.left + "px"
                })
            },
            dragStop: function(e, n) {
                t.top = n.offset.top, t.left = n.offset.left
            },
            resize: function(e, t) {
                var n = $(".response .ui-dialog");
                p.css({
                    height: n.height() - 45,
                    width: n.width()
                })
            },
            resizeStop: function(e, t) {
                n.height = t.size.height, n.width = t.size.width;
                var o = $(".response .ui-dialog");
                p.css({
                    height: o.height() - 45,
                    width: o.width()
                })
            }
        }).parents(".ui-dialog:eq(0)").wrap("<div class='dialog response'></div>"), p.html(e).dialog("open")
    }
}, geo.Store = {
    servers: [],
    getCapabilities: function(e, t) {
        var n = {
            SERVICE: "WMS",
            REQUEST: "GetCapabilities"
        };
        new OpenLayers.Request.GET({
            url: e = geo.Utils.trimUrl(e, n),
            params: n,
            success: function(n) {
                var o = n.responseXML;
                return o && o.documentElement || (o = n.responseText), n = new OpenLayers.Format.WMSCapabilities, "string" == typeof o || o.nodeType ? (o = n.read(o), t && t(e, o), o) : !1
            }
        })
    },
    addServer: function(e) {
        var t = e.version,
            n = e.capability || {};
        e = n.request && n.request.getmap && n.request.getmap.href;
        var n = n.layers,
            o = [];
        if (e && n)
            for (var a, i, s, r, l = geo.Map.map.getProjection(), c = 0, p = n.length; p > c; c++)
                if (a = n[c], a.name) {
                    i = {}, r = [{
                        name: "name",
                        type: "string"
                    }, {
                        name: "title",
                        type: "string"
                    }, {
                        name: "abstract",
                        type: "string"
                    }, {
                        name: "queryable",
                        type: "boolean"
                    }, {
                        name: "opaque",
                        type: "boolean"
                    }, {
                        name: "noSubsets",
                        type: "boolean"
                    }, {
                        name: "cascaded",
                        type: "int"
                    }, {
                        name: "fixedWidth",
                        type: "int"
                    }, {
                        name: "fixedHeight",
                        type: "int"
                    }, {
                        name: "minScale",
                        type: "float"
                    }, {
                        name: "maxScale",
                        type: "float"
                    }, {
                        name: "prefix",
                        type: "string"
                    }, {
                        name: "formats"
                    }, {
                        name: "styles"
                    }, {
                        name: "srs"
                    }, {
                        name: "dimensions"
                    }, {
                        name: "bbox"
                    }, {
                        name: "llbbox"
                    }, {
                        name: "attribution"
                    }, {
                        name: "keywords"
                    }, {
                        name: "identifiers"
                    }, {
                        name: "authorityURLs"
                    }, {
                        name: "metadataURLs"
                    }, {
                        name: "infoFormats"
                    }];
                    for (var u = 0, d = r.length; d > u; u++) s = r[u], i[s.name] = a[s.name];
                    s = a.name, r = a.formats, r = a.opaque && -1 < OpenLayers.Util.indexOf(r, "image/jpeg") ? "image/jpeg" : -1 < OpenLayers.Util.indexOf(r, "image/png") ? "image/png" : -1 < OpenLayers.Util.indexOf(r, "image/png; mode=24bit") ? "image/png; mode=24bit" : -1 < OpenLayers.Util.indexOf(r, "image/gif") ? "image/gif" : r[0], r = {
                        layers: s,
                        format: r,
                        transparent: void 0 == a.opaque || !a.opaque,
                        version: t
                    }, s = {
                        minScale: a.minScale,
                        maxScale: a.maxScale,
                        queryable: i.queryable,
                        infoFormats: i.infoFormats,
                        title: i.title,
                        projection: "EPSG:900913"
                    }, i.layer = new OpenLayers.Layer.WMS(a.title || a.name, e, r, s), a = i.bbox;
                    var h, g;
                    a && a[l] ? (h = OpenLayers.Bounds.fromArray(a[l].bbox, i.layer.reverseAxisOrder()), g = OpenLayers.Bounds.fromArray(a[l].bbox, i.layer.reverseAxisOrder()).transform(l, "EPSG:4326")) : (a = i.llbbox) && (a[0] = Math.max(a[0], -180), a[1] = Math.max(a[1], -90), a[2] = Math.min(a[2], 180), a[3] = Math.min(a[3], 90), g = OpenLayers.Bounds.fromArray(a), h = OpenLayers.Bounds.fromArray(a).transform("EPSG:4326", l)), $.extend(i.layer.options, {
                        maxExtent: h,
                        worldExtent: g
                    }), o.push(i)
                }
        return o
    }
}, geo.Utils = {
    isInt: function(e) {
        return e = window.event ? e.keyCode : e.charCode, 0 == e || 8 == e || 9 == e || 46 == e || e >= 48 && 57 >= e || e >= 96 && 105 >= e ? !0 : !1
    },
    trimUrl: function(e, t) {
        var n = OpenLayers.Util.getParameters(e);
        t = OpenLayers.Util.upperCaseObject(t);
        var o, a = 0;
        for (o in n) ++a, o.toUpperCase() in t && (--a, delete n[o]);
        return e.split("?").shift() + (a ? "?" + OpenLayers.Util.getParameterString(n) : "")
    },
    getBy: function(e, t, n, o) {
        for (var a = null, i = 0, s = e.length; s > i; i++) {
            var r = e[i][t];
            if (r && r == n) {
                if (!0 === o) return e.splice(i, 1);
                a = {
                    index: i,
                    value: e[i]
                };
                break
            }
        }
        return a
    },
    getSelect: function(e, t, n, o, a) {
        var i = "<select";
        for (e && (i += ' id="' + e + '"'), t && (i += ' class="' + t + '"'), i += ">", a && (i += "<option></option>"), e = 0, t = n.length; t > e; e++) a = n[e], "string" == typeof a && (a = {
            value: a,
            title: a
        }), i = a.value == o ? i + ("<option value='" + a.value + "' selected>" + a.title + "</option>") : i + ("<option value='" + a.value + "'>" + a.title + "</option>");
        return i + "</select>"
    },
    alert: function(e) {
        var t = $("#inf-alert");
        t.length && t.remove(), t = $(".alert"), t.length && t.remove(), e = $("<div id='info-alert'><p><i class='icon-info-with-circle'></i><label style='padding:5px;'>" + e + "</label></p></div>"), e.dialog({
            autoOpen: !1,
            title: "Atención",
            show: {
                effect: "drop",
                direction: "up",
                duration: 1e3
            },
            hide: {
                effect: "drop",
                direction: "up",
                duration: 1e3
            },
            resizable: !1,
            modal: !0,
            open: function() {
                $(".ui-widget-overlay").addClass("overlay-ligth")
            },
            beforeClose: function() {
                $(".ui-widget-overlay").removeClass("overlay-ligth")
            },
            close: function() {
                $(this).dialog("destroy").remove(), $(".dialog.alert").remove()
            }
        }).parents(".ui-dialog:eq(0)").wrap("<div class='dialog alert'></div>"), e.dialog("open")
    },
    pad: function(e, t) {
        return e += "", e.length > t && (e = e.substring(0, t)), ([1e15] + e).slice(-t)
    },
    deserialize: function(e, t, n) {
        e = e.split("&");
        var o = {};
        t && (o = []);
        for (var a = 0; a < e.length; a++) {
            var i = e[a].split("="),
                s = i[1];
            n && (s = s.toUpperCase()), t ? o.push(s) : o[i[0]] = s
        }
        return o
    }
}, geo.Plugins.Menu = {
    activecontrol: null,
    addToMenu: function(e, t, n, o, a, i) {
        var s = "<li";
        e && (s += " id='" + e + "'"), o && (s += " class='" + o + "'"), a && (s += " data-name='" + a + "'"), s += ">" + t + "</li>", $("#" + n + "-options .drop ul").append(s), e && i && $(document).on("click", "#" + e, i), this.active = !0
    },
    setLabel: function(e, t) {
        var n = $("#" + t + "-options input");
        e != n.val() && n.val(e)
    },
    add: function(e, t, n) {
        0 == $(e).length && $("#" + n + "-items").html(t)
    },
    init: function() {
        var e = geo,
            t = this;
        this.toggleMenu("location"), $(document).on("click", "#location-options .drop li", function(e) {
            t.setLabel($(this).text(), "location"), t.cancel("location", "Determinar Ubicación por...")
        }), this.toggleMenu("tools"), $(document).on("click", "#tools-options .drop li", function(n) {
            t.setLabel($(this).text(), "tools"), t.cancel("tools", "Seleccionar Herramienta", function() {
                t.activecontrol && (t.activecontrol = null, e.Layout.activateMenuItem("pan"), e.Map.toggleControl("pan"))
            })
        }), $(document).on({
            mouseenter: function() {
                $(this).addClass("btn-tool-hover")
            },
            mouseleave: function() {
                $(this).removeClass("btn-tool-hover"), $(this).data("active") ? $(this).addClass("btn-tool-active") : $(this).removeClass("btn-tool-active")
            }
        }, ".btn-tool, .btn-s-tool, .btn-set-tool"), $(document).on("click", "#tools-items .btn-set-tool", function() {
            t.activateButtonSet(this)
        }), $(document).on("click", "#tools-items .btn-s-tool", function() {
            $(this).data("active") ? ($(this).removeClass("btn-tool-active").data("active", !1), $(this).blur()) : $(this).addClass("btn-tool-active").data("active", !0)
        }), $(document).on("click", ".btnset", t.deactivateButtonSet)
    },
    toggleMenu: function(e) {
        $("#" + e + "-options .nav i").click(function() {
            var t = $("#" + e + "-options .drop");
            return t.fadingSlideToggle(600), $(document).one("click", function() {
                (t.is(":visible") || "block" == t.css("display")) && t.hideUp(600).animate({
                    opacity: 1
                })
            }), !1
        })
    },
    cancel: function(e, t, n) {
        if (!$("#" + e + "-options .nav .nav-cancel").length) {
            var o = $("#" + e + "-options .nav");
            o.append('<b class="icon-cancel nav-cancel"></b>'), $(".nav-cancel", o).click(function() {
                o.find("input").val(t), $("#" + e + "-items").html(""), $(this).remove(), null != n && n(), geo.Layout.scroll()
            })
        }
    },
    checkActiveControl: function() {
        null !== this.activecontrol && this.activateButtonSet($("#tools-items .tc[data-control='" + this.activecontrol + "']"))
    },
    activateButtonSet: function(e) {
        $("#tools-items .btn-set-tool").removeClass("btn-tool-active").data("active", !1), geo.Layout.deactivateMainMenu(), e ? ($(e).addClass("btn-tool-active").data("active", !0), this.setActiveControl($(e).data("control"))) : this.activecontrol = null
    },
    deactivateButtonSet: function() {
        $("#tools .btn-set-tool").removeClass("btn-tool-active").data("active", !1), this.activecontrol = null
    },
    setActiveControl: function(e) {
        void 0 != e && (this.activecontrol = e)
    }
}, geo.Plugins.Transparency = {
    init: function() {
        var e = geo;
        $.each(e.contextList, function() {
            "menu" == this.menuid && this.menulist.push({
                id: "menu_transp",
                text: "Transparencia",
                run: "Transparency"
            })
        }), $.extend(e.contextRun, {
            Transparency: function(t) {
                t = $(t);
                var n = t.attr("name"),
                    o = $(".range[data-range='" + n + "']");
                if (!(0 < o.length)) {
                    var a = e.Map.map.getLayersBy("id", n)[0],
                        i = 100 - 100 * a.opacity;
                    t.after('<li class="range" data-range="' + n + '"><input type="range" min="" max="" value="' + i + '" /><span>' + i + '</span><i class="icon-cancel"></i></li>'), $(".range[data-range='" + n + "'] input[type=range]").rangeslider({
                        polyfill: !1,
                        onSlide: function(e, t) {
                            $(".range[data-range='" + n + "'] span").text(t + "%"), a.setOpacity(1 - t / 100)
                        }
                    }), o = $(".range[data-range='" + n + "']"), o.showDown(), window.setTimeout(function() {
                        e.Layout.scroll()
                    }, 500), $(".range[data-range='" + n + "'] i").click(function() {
                        o.hideUp(), window.setTimeout(function() {
                            $(".range[data-range='" + n + "'] input[type=range]").rangeslider("destroy"), o.delay(500).remove(), e.Layout.scroll()
                        }, 500)
                    })
                }
            }
        })
    }
}, geo.Plugins.ZoomToCoordinates = {
    pois: new OpenLayers.Layer.Markers("poi"),
    ico: "./images/mark.png",
    poi: {},
    map: null,
    init: function() {
        this.map = geo.Map.map, this.map.addLayer(this.pois)
    },
    icon: function(e, t, n) {
        return e = new OpenLayers.Size(e, t), new OpenLayers.Icon(n, e, new OpenLayers.Pixel(-(e.w / 2), -e.h))
    },
    zoom: function(e, t, n, o) {
        e = new OpenLayers.LonLat(e, t), e = e.transform(n, this.map.projection), this.map.setCenter(e, 17), this.map.raiseLayer(this.pois, this.map.layers.length), null != o && (this.poi = new OpenLayers.Marker(e, this.icon(40, 40, this.ico)), this.pois.addMarker(this.poi))
    },
    remove: function() {
        if (void 0 != this.pois)
            for (var e = this.pois.markers.length, t = 0; e > t; t++) this.pois.removeMarker(this.pois.markers[0])
    }
}, geo.Plugins.GeocodingGoogle2 = {
    map: null,
    bounds: null,
    geocoder: null,
    result: null,
    zoomed: {},
    delay: null,
    init: function() {
        var e = this;
        if ("undefined" != typeof google) {
            var t = google.maps;
            e.map = geo.Map.map, this.geocoder = new t.Geocoder, this.bounds = function() {
                var n = e.map.maxExtent,
                    n = n.clone().transform(e.map.getProjectionObject(), new OpenLayers.Projection("EPSG:4326")),
                    n = n.toArray();
                return n = new t.LatLngBounds(new t.LatLng(n[1], n[0]), new t.LatLng(n[3], n[2]))
            }(), $("#geocoding_google_address").change(function() {
                clearTimeout(e.delay);
                var t = this;
                e.delay = setTimeout(function() {
                    e.geocoding(t.value)
                }, 100)
            }).keyup(function(e) {
                40 == e.keyCode && $("#geocoding_google_result").show().find("li").first().focus()
            }), $(document).on("click", "#geocoding_google_result li", function() {
                var t = $(this).data("idx");
                e.onSelect(e.result[t])
            }), $(document).click(function(e) {
                $(e.target).closest("#geocoding_google_address").length || $("#geocoding_google_result").is(":visible") && $("#geocoding_google_result").hide()
            }), $("#geocoding_google_clean").click(function() {
                e.result = null, e.zoomed = {}, $("#geocoding_google_address").val(""), $("#geocoding_google_result ul").html(""), geo.Plugins.ZoomToCoordinates.remove()
            })
        }
    },
    geocoding: function(e) {
        var t = this;
        e && (this.value = e, this.geocoder.geocode({
            address: e,
            bounds: t.bounds
        }, function(e, n) {
            var o = google.maps;
            n != o.GeocoderStatus.OK && n != o.GeocoderStatus.ZERO_RESULTS || t.googleResults(e)
        }))
    },
    googleResults: function(e) {
        var t, n, o, a, i = e.length,
            s = Array(i),
            r = $("#geocoding_google_result");
        $("ul", r).html("");
        for (var l = 0; i > l; ++l) t = e[l], n = t.geometry.location, o = t.geometry.viewport, a = o.getNorthEast(), o = o.getSouthWest(), t = t.formatted_address, $("ul", r).append("<li data-idx='" + l + "'>" + t + "</li>"), n = new OpenLayers.LonLat(n.lng(), n.lat()), a = new OpenLayers.Bounds(o.lng(), o.lat(), a.lng(), a.lat()), s[l] = {
            address: t,
            location: n.clone().transform(new OpenLayers.Projection("EPSG:4326"), this.map.getProjectionObject()),
            viewport: a.clone().transform(new OpenLayers.Projection("EPSG:4326"), this.map.getProjectionObject())
        };
        this.result = s, l > 0 && r.show()
    },
    onSelect: function(e) {
        var t = geo.Plugins.ZoomToCoordinates,
            n = !1;
        if (e.viewport instanceof OpenLayers.Bounds && (n = !0), is.mobile()) {
            var o = this;
            geo.Layout.close(), window.setTimeout(function() {
                n ? o.map.zoomToExtent(e.viewport, !0) : o.map.setCenter(e.location)
            }, 500)
        } else n ? this.map.zoomToExtent(e.viewport, !0) : this.map.setCenter(e.location);
        var a = e.location.lon + e.location.lat;
        this.zoomed[a] || (this.map.raiseLayer(t.pois, this.map.layers.length), t.poi = new OpenLayers.Marker(e.location, t.icon(40, 40, t.ico)), t.pois.addMarker(t.poi), this.zoomed[a] = e), $("#geocoding_google_result").hide()
    }
}, geo.Plugins.ZoomToLayer = {
    init: function() {
        var e = geo;
        $.each(e.contextList, function() {
            "menu" == this.menuid && this.menulist.push({
                id: "menu_zoom",
                text: "Zoom a la Capa",
                run: "ZoomToLayer"
            })
        }), $.extend(e.contextRun, {
            ZoomToLayer: function(t) {
                var n = e.Map;
                t = n.map.getLayersBy("id", $(t).attr("name"))[0], t instanceof OpenLayers.Layer.Vector ? n.map.zoomToExtent(t.getDataExtent()) : n.map.zoomToExtent(t.restrictedExtent || t.maxExtent || n.map.maxExtent, !0)
            }
        })
    }
}, geo.Plugins.OrderLayers = {
    menu: "tools",
    layers: [],
    map: null,
    init: function() {
        var e = geo,
            t = this;
        t.map = e.Map.map, t.map.events.register("changelayer", t.map, function(e) {
            "visibility" == e.property && (e.layer instanceof OpenLayers.Layer.WMS || e.layer instanceof OpenLayers.Layer.Vector) && $("#order_layers_tools").length && $(".nav-cancel", "#tools-options .nav").click()
        }), e.Plugins.Menu.addToMenu("order_layers_menu", "Orden de Capas", this.menu, null, null, function() {
            t.show(), e.Layout.scroll()
        })
    },
    show: function() {
        0 == $("#order_layers_tools").length && geo.Plugins.Menu.add("#order_layers_tools", '<div id="order_layers_tools"></div>', this.menu);
        var e = this.map.layers;
        this.layers = [], $("#order_layers").remove();
        for (var t = 0, n = e.length; n > t; t++) {
            var o = e[t];
            (o instanceof OpenLayers.Layer.WMS || o instanceof OpenLayers.Layer.Vector && "Sin Capa Base" != o.name && -1 == o.name.indexOf("Handler")) && o.visibility && this.layers.push({
                layer: o,
                index: this.map.getLayerIndex(o)
            })
        }
        for (e = '<ul id="order_layers" class="block__list block__list_words">', t = this.layers.length; t > 0; t--) n = this.layers[t - 1], e += "<li name='" + n.layer.id + "' idx='" + n.index + "'>" + (n.layer.title || n.layer.name) + "</li>";
        e += "</ul>", $("#order_layers_tools").append(e), Sortable.create(document.getElementById("order_layers"), {
            animation: 150,
            scroll: !1,
            onEnd: function(e) {
                if (e.newIndex != e.oldIndex) {
                    var t = $("#order_layers_tools li");
                    if (1 < t.length) {
                        var n = geo.Map.map,
                            o = -1 * (e.newIndex - e.oldIndex),
                            a = 0;
                        isNaN(o) || (o > 0 ? (a = 1, t = t.eq(e.newIndex + 1).attr("name")) : t = t.eq(e.newIndex - 1).attr("name"), n.setLayerIndex(n.getLayersBy("id", $(e.item).attr("name"))[0], n.getLayerIndex(n.getLayersBy("id", t)[0]) + a))
                    }
                }
            }
        })
    }
}, geo.Plugins.StreetView = {
    menu: "tools",
    panorama: null,
    map: null,
    heading: 0,
    pitch: 0,
    zoom: 0,
    location: null,
    pano: null,
    init: function() {
        var e = this;
        "undefined" != typeof google && ($("#map").append("<div id='map_streetview'><div id='map_google'></div><div id='toggle_google'><i class='icon-backward'></i></div></div>"), $('<li id="streetview" title="Street View"><span><i class="icon-man"></i></span></li>').appendTo("#mainmenu").click(function() {
            e.activate()
        }), $(document).on("click", "#toggle_google", function() {
            e.toggle()
        }), $(document).on("click", "#closepano", function() {
            e.deactivate()
        }))
    },
    toggle: function() {
        var e = $("#map_google").parent(),
            t = $("#toggle_google");
        e.is(":visible") ? (e.show().toggle("slide", {
            direction: "left"
        }, 500), t.animate({
            left: 0
        }, 480, function() {
            $("i", this).toggleClass("icon-backward icon-forward")
        })) : (e.hide().toggle("slide", {
            direction: "left"
        }, 500), t.animate({
            left: 183
        }, 510, function() {
            $("i", this).toggleClass("icon-backward icon-forward")
        }))
    },
    activate: function() {
        if (!(0 < $("#pano").length)) {
            var e = geo,
                t = $("#map"),
                n = $("#map_google");
            t.append("<div id='pano'></div>"), t.append("<div id='closepano' class='icon-cancel'></div>"), this.pano = $("<div id='pano'></div>"), this.pano.width("100%").height("100%"), $("#north-center, #toggle-menu, #measure, div.olMapViewport, div.olForeignContainer").hide(), $("#toggle_google").css({
                left: 183
            }).show();
            var o = e.Map.map,
                t = google,
                a = o.getCenter(),
                a = a.transform(o.projection, o.displayProjection),
                a = new t.maps.LatLng(a.lat, a.lon),
                o = {
                    position: a,
                    pov: {
                        heading: this.heading,
                        pitch: this.pitch,
                        zoom: this.zoom
                    }
                };
            this.map = new t.maps.Map(n[0], {
                zoom: 14,
                mapTypeControl: !1,
                scaleControl: !1,
                rotateControl: !1,
                zoomControl: !0,
                streetViewControl: !0
            }), this.panorama = new t.maps.StreetViewPanorama(document.getElementById("pano"), o), this.map.setStreetView(this.panorama), $("#toggle-content").on("click", e.Plugins.StreetView.resize), this.dialog = n.dialog({
                appendTo: "#map_streetview",
                height: 185,
                width: 185,
                resizable: !1,
                draggable: !1,
                closeOnEscape: !1,
                position: {
                    my: "left bottom",
                    at: "left bottom",
                    of: "#pano"
                },
                open: function(e, t) {
                    $(".ui-dialog-titlebar-close", t.dialog | t).hide(), $(".ui-dialog-titlebar", t.dialog | t).css({
                        padding: "0",
                        border: "none",
                        fontSize: 0
                    }), $("#map_google", t.dialog | t).css({
                        padding: "0"
                    })
                }
            }), t.maps.event.trigger(this.map, "resize");
            var i = this;
            $(window).on("orientationchange", i.resize), setTimeout(function() {
                $("#map_streetview div.ui-dialog").css({
                    bottom: 0,
                    top: "initial"
                }), i.map.setCenter(a), $("#map_google").css("height", "183px")
            }, 50)
        }
    },
    deactivate: function() {
        this.dialog.dialog("close"), $("#pano, #closepano").remove(), $("#map_google").html("").hide(), $("#toggle_google").hide().find("i").addClass("icon-backward").removeClass("icon-forward");
        var e = geo,
            t = e.Map.map,
            n = this.panorama.getPosition(),
            n = new OpenLayers.LonLat(n.lng(), n.lat());
        n.transform(t.displayProjection, t.projection), t.setCenter(n, 17), $("#toggle-content").off("click", e.Plugins.StreetView.resize), e = google, e.maps.event.clearListeners(this.map, "resize"), e.maps.event.clearListeners(this.panorama, "resize"), this.panorama = null, $(window).off("orientationchange", this.resize), $("#north-center, #toggle-menu, div.olMapViewport, div.olForeignContainer").show()
    },
    resize: function() {
        window.setTimeout(function() {
            var e = geo.Plugins.StreetView.panorama;
            e && "object" == typeof e && (google.maps.event.trigger(e, "resize"), $("#map_streetview div.ui-dialog").css({
                bottom: 0,
                top: "initial"
            }))
        }, 600)
    }
}, geo.Plugins.FullScreen = {
    keyboardAllowed: "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
    fn: function() {
        var e, t, n = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")],
            o = 0;
        t = n.length;
        for (var a = {}; t > o; o++)
            if ((e = n[o]) && e[1] in document) {
                for (o = 0, t = e.length; t > o; o++) a[n[0][o]] = e[o];
                return a
            }
        return !1
    }(),
    isFullscreen: function() {
        return !!document[this.fn.fullscreenElement]
    },
    element: function() {
        return document[this.fn.fullscreenElement]
    },
    enabled: function() {
        return !!document[this.fn.fullscreenEnabled]
    },
    init: function() {
        if (this.fn) {
            var e = this,
                t = document.getElementById("map");
            $('<li id="fullscreen" title="Pantalla Completa"><span><i class="icon-full-screen"></i></span></li>').prependTo("#mainmenu").click(function() {
                e.toggle(t)
            }), $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function() {
                var t = $("#fullscreen i");
                t.removeClass(), e.isFullscreen() ? t.addClass("icon-normal-screen") : t.addClass("icon-full-screen")
            })
        } else geo.Plugins.FullScreen = !1
    },
    request: function(e) {
        var t = this.fn.requestFullscreen;
        e = e || document.documentElement, /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? e[t]() : e[t](this.keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT)
    },
    exit: function() {
        document[this.fn.exitFullscreen]()
    },
    toggle: function(e) {
        this.isFullscreen() ? this.exit() : this.request(e)
    }
}, geo.Plugins.Geolocation = {
    layer: null,
    active: !1,
    type: null,
    watch: !1,
    watchId: null,
    x: null,
    y: null,
    fn: function() {
        return "geolocation" in navigator ? is.chrome() ? is.chrome(">=50") && "https:" == location.protocol || is.chrome("<50") && "http:" == location.protocol ? !0 : !1 : !0 : !1
    }(),
    init: function() {
        var e = geo;
        if (this.fn) {
            var t = this;
            this.layer = new OpenLayers.Layer.Vector("Mi Ubicación"), e.Map.map.addLayer(this.layer), this.layer.setVisibility(!1), $('<li class="geolocation" title="Mi Ubicación"><span><i class="icon-geolocation"></i></span></li>').prependTo("#mainmenu").click(function() {
                $("#geolocation").toggle("slide", {
                    direction: "left"
                }, 400)
            }), $('<div id="geolocation"><ul><li class="btnset geolocation" title="Ubicación actual" data-control="current"><span><i class="icon-geolocation"></i></span></li><li class="btnset" title="Posición en movimiento" data-control="watch"><span><i class="icon-geolocation"></i></span></li></ul></div>').appendTo("#map"), $("#geolocation li").click(function() {
                var e = $(this).data("control"),
                    n = $("span", this);
                t.watch = "watch" == e ? !0 : !1, $("#geolocation li span").removeClass("active"), null == t.type || t.type == e ? t.active ? t.deactivate() : t.activate(e, n) : (t.deactivate(), t.activate(e, n))
            }), $(document).on("click", "#mainmenu li:not('.geolocation')", function() {
                var e = $("#geolocation");
                e.is(":visible") && e.toggle("slide", {
                    direction: "left"
                }, 400)
            }), $("#geolocation").css({
                top: $("#mainmenu .geolocation").offset().top - 50
            })
        } else e.Plugins.Geolocation = !1
    },
    activate: function(e, t) {
        this.type = e, t.addClass("active"), this.get()
    },
    deactivate: function() {
        null !== this.watchId && (navigator.geolocation.clearWatch(this.watchId), this.watchId = null, this.watch = !1), this.layer.setVisibility(!1), this.active = !1, this.type = null
    },
    get: function() {
        var e = {
            enableHighAccuracy: !0,
            maximumAge: 2e3
        };
        this.watch ? this.watchId = navigator.geolocation.watchPosition(this.show, this.error, e) : navigator.geolocation.getCurrentPosition(this.show, this.error, e)
    },
    show: function(e) {
        geo.Plugins.Geolocation.buffer(e.coords.longitude, e.coords.latitude, "EPSG:4326", parseInt(e.coords.accuracy / 2))
    },
    error: function(e) {
        geo.Utils.alert({
            1: "Permiso denegado",
            2: "Posición no encontrada",
            3: "Tiempo agotado en la solicitud"
        }[e.code])
    },
    buffer: function(e, t, n, o) {
        var a = this.layer;
        this.x = e, this.y = t, a.removeAllFeatures(), a.setVisibility(!0), e = new OpenLayers.LonLat(e, t).transform(n, a.map.projection), e = new OpenLayers.Geometry.Point(e.lon, e.lat), o = new OpenLayers.Geometry.Polygon.createRegularPolygon(e, o, 100, 0), a.addFeatures([new OpenLayers.Feature.Vector(o, {}, {
            fillColor: "#000",
            fillOpacity: .1,
            strokeColor: "#1f3dd0",
            strokeWidth: 1
        }), new OpenLayers.Feature.Vector(e, {}, {
            graphicName: "circle",
            strokeColor: "#fff",
            strokeWidth: 1,
            fillColor: "#1f3dd0",
            fillOpacity: 1,
            pointRadius: 6
        })]), a.map.zoomToExtent(a.getDataExtent()), this.active = !0
    }
}, geo.Search = {
    searchs: {},
    xhr: !1,
    layer: new OpenLayers.Layer.Vector("Búsquedas", {
        styleMap: new OpenLayers.StyleMap({
            strokeColor: "#9aca3c",
            strokeWidth: 3,
            fillColor: "white",
            fillOpacity: .3
        })
    }),
    init: function() {
        var e = this;
        geo.Map.map.addLayer(e.layer), e.layer.setVisibility(!1), $.ajax({
            url: "process/searchs.php",
            dataType: "JSON",
            success: function(t) {
                null == t || t.error || e.create(t.search)
            }
        })
    },
    create: function(e) {
        for (var t = this, n = geo, o = 0, a = e.length; a > o; o++) {
            var i = e[o];
            this.searchs[i.id] = i, "location" == i.menu && n.Plugins.Menu.addToMenu("search_" + +i.id + "_menu", i.title, i.menu, "search", i.id)
        }
        $(document).on("click", "#location-options .drop li.search", function(e) {
            e = $(this).data("name"), $("#location-form :button").eq(0).data("item") != e && (t.createSearchInput(e, "location"), n.Layout.scroll())
        })
    },
    createSearchInput: function(e, t) {
        var n = this.searchs[e],
            o = $("#" + t + "-items"),
            a = n.fields,
            i = n.show,
            n = $("<div>"),
            s = $('<form id="' + t + '-form">');
        if (o.html(""), s.appendTo(o), n.appendTo(s), o = "", i) void 0 != this.shows[i] && this.shows[i](n);
        else
            for (i = 0; i < a.length; i++) {
                var r = a[i].title,
                    s = a[i].name,
                    l = a[i].maxlength,
                    c = a[i].required,
                    p = a[i].definition,
                    u = "";
                a[i]["int"] && (u = " " + (is.firefox() ? "onkeypress" : "onkeydown") + '="return geo.Utils.isInt(event);"');
                var d = "";
                if (l && (d = ' maxlength="' + l + '"'), l = "", c && (l = ' class="required"'), p) {
                    if ("combobox-pdo" == p.type) {
                        for (u = $("<div>"), d = '<select name="' + s + '" id="fld_' + s + "_" + t + '"' + l + "><option></option>", l = geo.Plugins.partidos, c = l.length, p = 0; c > p; p++) d += '<option value="' + l[p].value + '">' + l[p].value + "- " + l[p].label + "</option>";
                        d += "</select>", $('<div class="searchdesc">' + r + "</div>").appendTo(n), u.appendTo(n), $(d).appendTo(u), $("#fld_" + s + "_" + t).combobox()
                    }
                } else r = '<div class="searchdesc">' + r + "</div>", r += '<div><input type="text" id="fld_' + s + "_" + t + '" name="' + s + '"' + u + d + l + " /></div>", $(r).appendTo(n)
            }
        $(o + '<div class="panel_button">' + ('<input class="button" type="button" value="Buscar" onclick="geo.Search.submit(\'' + e + "', '" + t + '\');" data-item="' + e + '" />') + '<input class="button" type="button" value="Limpiar" onclick="geo.Search.clean();" />').appendTo(n)
    },
    submit: function(e, t) {
        var n = this,
            o = geo,
            a = this.getKeyValue(t + "-form");
        if (a.error) a = $("#fld_" + a.id + "_" + t), "select-one" != a[0].type || a.is(":visible") ? a.focus() : a.next().find("input").focus();
        else {
            var i = this.searchs[e],
                s = i.call;
            if (s && (a.obj = this.calls[s](a.obj)), a.obj) {
                var r, l = [],
                    s = new OpenLayers.Format.Filter;
                for (r in a.obj) "layer" != r && (l[l.length] = new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: r,
                    value: a.obj[r]
                }));
                if (r = l.length, 1 == r) l = l[0];
                else {
                    if (!(r > 1)) return;
                    l = new OpenLayers.Filter.Logical({
                        type: OpenLayers.Filter.Logical.AND,
                        filters: l
                    })
                }
                s = $(s.write(l)).html(), s = s.replace(/ogc:/g, ""), this.getFeature(i.url || o.Store.servers[0].url, a.obj.layer || i.layer, s, "location" == t ? "geom" : null, null, function(e, t) {
                    t.length ? (n.layer.removeAllFeatures(), n.layer.setVisibility(!0), n.layer.map.raiseLayer(n.layer, n.layer.map.layers.length), n.layer.addFeatures(t), is.mobile() ? (o.Layout.close(), window.setTimeout(function() {
                        n.layer.map.zoomToExtent(n.layer.getDataExtent()), 750 > n.layer.map.getScale() && n.layer.map.zoomToScale(750, !0)
                    }, 500)) : (n.layer.map.zoomToExtent(n.layer.getDataExtent()), 750 > n.layer.map.getScale() && n.layer.map.zoomToScale(750, !0))) : o.Utils.alert("No hay resultados")
                })
            }
        }
    },
    clean: function() {
        this.layer.removeAllFeatures(), this.layer.setVisibility(!1)
    },
    getFeature: function(e, t, n, o, a, i) {
        t = {
            SERVICE: "WFS",
            REQUEST: "GetFeature",
            VERSION: "1.0.0",
            typeName: t,
            maxFeatures: a || "100",
            srsName: geo.Map.map.getProjection(),
            outputFormat: "application/json",
            filter: n,
            propertyName: o || null
        };
        var s = this;
        s.xhr && s.xhr.abort(), s.xhr = new OpenLayers.Request.GET({
            url: e,
            params: t,
            headers: {
                "Content-Type": "application/json"
            },
            complete: function() {
                s.xhr = !1
            },
            success: function(t) {
                return t = t.responseText, "string" == typeof t || t.nodeType ? (t = (new OpenLayers.Format.GeoJSON).read(t), i && i(e, t), t) : !1
            }
        })
    },
    getKeyValue: function(e) {
        e = document.getElementById(e).elements;
        for (var t = {}, n = 0; n < e.length; n++) {
            var o = e[n],
                a = o.name,
                i = o.value,
                s = o.type,
                r = o.className;
            if (0 < i.length && "#" != i && "" != a) switch (s) {
                case "select-one":
                    t[a] = o.options[o.selectedIndex].value;
                    break;
                default:
                    t[a] = i
            } else if ("required" == r) return {
                error: 1,
                id: a
            }
        }
        return {
            error: 0,
            obj: t
        }
    },
    calls: {
        numeroPlano: function(e) {
            return {
                plano: e.partido + "-" + e.secuencia + "-" + e.anio
            }
        },
        nomenclatura: function(e) {
            var t = e = "",
                n = geo.Utils,
                o = "Provincia circunscripciones secciones macizos parcelas subparcelas".split(" "),
                a = n.deserialize($("#location-form").serialize(), !0, !0);
            return "" != a[13] ? (e = o[5], t = n.pad(a[0], 3) + n.pad(a[1], 2) + n.pad(a[2], 2) + n.pad(a[3], 4) + n.pad(a[4], 3) + n.pad(a[5], 4) + n.pad(a[6], 3) + n.pad(a[7], 4) + n.pad(a[8], 3) + n.pad(a[9], 4) + n.pad(a[10], 3) + n.pad(a[11], 4) + n.pad(a[12], 3) + n.pad(a[13], 6), {
                NOMENCLA: t,
                layer: e
            }) : ("" != a[11] || "" != a[12] ? (e = o[4], t = n.pad(a[0], 3) + n.pad(a[1], 2) + n.pad(a[2], 2) + n.pad(a[3], 4) + n.pad(a[4], 3) + n.pad(a[5], 4) + n.pad(a[6], 3) + n.pad(a[7], 4) + n.pad(a[8], 3) + n.pad(a[9], 4) + n.pad(a[10], 3) + n.pad(a[11], 4) + n.pad(a[12], 3)) : ("" != a[3] || "" != a[5] || "" != a[7] || "" != a[9] && "" == a[11] && "" == a[12]) && (e = o[3], t = n.pad(a[0], 3) + n.pad(a[1], 2) + n.pad(a[2], 2) + n.pad(a[3], 4) + n.pad(a[4], 3) + n.pad(a[5], 4) + n.pad(a[6], 3) + n.pad(a[7], 4) + n.pad(a[8], 3) + n.pad(a[9], 4) + n.pad(a[10], 3)), "" != a[2] && "" == a[3] && "" == a[4] && "" == a[5] && "" == a[6] && "" == a[7] && "" == a[8] && "" == a[9] && "" == a[10] && "" == a[11] && "" == a[12] && (e = o[2], t = n.pad(a[0], 3) + n.pad(a[1], 2) + n.pad(a[2], 2)), "" != a[1] && "" == a[2] && "" == a[3] && "" == a[4] && "" == a[5] && "" == a[6] && "" == a[7] && "" == a[8] && "" == a[9] && "" == a[10] && "" == a[11] && "" == a[12] && (e = o[1], t = n.pad(a[0], 3) + n.pad(a[1], 2)), "" == a[1] && "" == a[2] && "" == a[3] && "" == a[4] && "" == a[5] && "" == a[6] && "" == a[7] && "" == a[8] && "" == a[9] && "" == a[10] && "" == a[11] && "" == a[12] && (e = o[0], t = n.pad(a[0], 3)), {
                nomencla: t,
                layer: e
            })
        }
    },
    shows: {
        nomenclatura: function(e) {
            for (var t = is.firefox() ? "onkeypress" : "onkeydown", n = '<div class="descrp">Partido</div><select name="pdo_nom" id="fld_pdo_nom_location" class="required"><option></option>', o = geo.Plugins.partidos, a = o.length, i = 0; a > i; i++) n += '<option value="' + o[i].value + '">' + o[i].value + "- " + o[i].label + "</option>";
            $(n + "</select>" + ('<div class="descrp">Circuncripción<input type="text" class="inp-cir" ' + t + '="return geo.Utils.isInt(event);" name="cir" maxLength="2" /></div>') + '<div class="descrp">Sección<input type="text" class="inp-sec" name="sec" maxLength=2 /></div>' + ('<div class="descrp">Chacra <input type="text" class="inp70 inp-ch" ' + t + '="return geo.Utils.isInt(event);" name="chn" maxLength="4" /><input type="text" class="inp70" name="chl" maxLength="3" /></div>') + ('<div class="descrp">Quinta<input type="text" class="inp70 inp-qt" ' + t + '="return geo.Utils.isInt(event);" name="qtn" maxLength="4" /><input type="text" class="inp70" name="qtl" maxLength="3" /></div>') + ('<div class="descrp">Fracción<input type="text" class="inp70 inp-fr" ' + t + '="return geo.Utils.isInt(event);" name="frn" maxLength="4" /><input type="text" class="inp70" name="frl" maxLength="3" /></div>') + ('<div class="descrp">Manzana<input type="text" class="inp70 inp-mz" ' + t + '="return geo.Utils.isInt(event);" name="mzn" maxLength="4" /><input type="text" class="inp70" name="mzl" maxLength="3" /></div>') + ('<div class="descrp">Parcela<input type="text" class="inp70 inp-pc" ' + t + '="return geo.Utils.isInt(event);" name="pcn" maxLength="4" /><input type="text" class="inp70" name="pcl" maxLength="3" /></div>') + '<div class="descrp">Subparcela<input type="text" class="inp70 inp-spc" name="spc" maxLength="6" /></div>').appendTo(e), $("#fld_pdo_nom_location").combobox()
        }
    }
}, OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, {
    get: function(e) {},
    defaultHandlerOptions: {
        single: !0,
        "double": !1,
        pixelTolerance: 0,
        stopSingle: !1,
        stopDouble: !1
    },
    initialize: function(e) {
        this.handlerOptions = OpenLayers.Util.extend({}, this.defaultHandlerOptions), OpenLayers.Control.prototype.initialize.apply(this, arguments), this.handler = new OpenLayers.Handler.Click(this, {
            click: this.trigger
        }, this.handlerOptions)
    },
    trigger: function(e) {
        this.get(this.map.getLonLatFromPixel(e.xy))
    },
    CLASS_NAME: "OpenLayers.Control.Click"
}), geo.Plugins.HistoryPlanes = {
    typename: "parcelas",
    control: $.extend(geo.Map.controls, {
        historyplanes: new OpenLayers.Control.Click({
            get: function(e) {
                var t = $("#loading");
                $.ajax({
                    type: "POST",
                    url: "./process/planes.php",
                    dataType: "json",
                    data: {
                        lon: e.lon,
                        lat: e.lat
                    },
                    beforeSend: function() {
                        t.show()
                    },
                    success: function(e) {
                        t.hide(), e.error || geo.Plugins.HistoryPlanes.result(e.result)
                    }
                })
            }
        })
    }),
    menu: "tools",
    init: function() {
        $('<li class="ctrl btnset" title="Historial de Macizos" data-control="historyplanes"><span><i class="icon-plan"></i></span></li>').appendTo("#mainmenu")
    },
    result: function(e) {
        var t = "",
            n = "No se encuentran planos.";
        if ("object" == typeof e && "" != e) {
            e = e.planos;
            var o = e.length;
            if (o) {
                for (n = "<table width='100%'><tr><th>Plano</th><th>Parcelas</th></tr>", t = 0; o > t; t++) n += "<tr><td><img title='Ver Plano' src='images/magnifier_zoom.png' onClick=\"window.open('http://www.mosp.gba.gov.ar/sistemas/geodesia/ugeodesia/Geodesia/" + e[t].plano + "(PA).dwf', '_blank');\" /> " + e[t].plano + "</td><td>" + e[t].objetos + e[t].parcelas + "</td></tr>";
                n += "</table>", t = " class='pyes'"
            }
        }
        geo.Map.Info.show("<div id='history_planes_result'" + t + ">" + n + "</div>")
    }
}, $.extend(OpenLayers.Layer.prototype, {
    y: 0,
    x: 0
}), OpenLayers.Control.WMSGetFeatureInfo.prototype.getInfoForClick = function(e) {
    e = this.events.triggerEvent("beforegetfeatureinfo", {
        xy: e.xy
    }), OpenLayers.Element.addClass(this.map.viewPortDiv, "olCursorWait"), this.request(e.xy, {})
}, OpenLayers.Layer.WMS.prototype.getURL = function(e) {
    e.top += this.y, e.bottom += this.y, e.left += this.x, e.right += this.x, e = this.adjustBounds(e);
    var t = this.getImageSize(e),
        n = {},
        o = this.reverseAxisOrder();
    return n.BBOX = this.encodeBBOX ? e.toBBOX(null, o) : e.toArray(o), n.WIDTH = t.w, n.HEIGHT = t.h, this.getFullRequestString(n)
}, OpenLayers.Control.MoveLayers = OpenLayers.Class(OpenLayers.Control, {
    layers: [],
    lonlat: null,
    initialize: function(e, t) {
        this.layers = e, OpenLayers.Control.prototype.initialize.apply(this, [t]), this.handler = new OpenLayers.Handler.Drag(this, {
            down: this._start,
            move: this._move,
            done: this._finish
        })
    },
    _start: function(e) {
        this.ini = e, this.lonlat = this.map.getLonLatFromPixel(e)
    },
    _move: function(e) {
        for (var t = 0; t < this.layers.length; t++) {
            var n, o, a = this.layers[t];
            n = e.x - this.ini.x, o = e.y - this.ini.y, a.div.style.left = n + "px", a.div.style.top = o + "px"
        }
    },
    _finish: function(e) {
        var t = this.map.getLonLatFromPixel(e);
        e = t.lat - this.lonlat.lat;
        for (var t = t.lon - this.lonlat.lon, n = 0, o = this.layers.length; o > n; n++) {
            var a = this.layers[n];
            a.y -= e, a.x -= t, $("img", a.div).hide(), a.redraw(), a.div.style.left = "0px", a.div.style.top = "0px"
        }
    },
    reset: function() {
        for (var e = 0, t = this.layers.length; t > e; e++) {
            var n = this.layers[e];
            n.y = 0, n.x = 0, $("img", n.div).hide(), n.redraw()
        }
    },
    setLayers: function(e) {
        this.deactivate(), this.layers = [], this.initialize(e, {})
    },
    setMap: function(e) {
        this.handler.setMap(e), OpenLayers.Control.prototype.setMap.apply(this, arguments)
    },
    CLASS_NAME: "OpenLayers.Control.MoveLayers"
}), geo.Plugins.MoveLayers = {
    menu: "tools",
    map: null,
    id: "select_movelayers",
    active: [],
    layers: [],
    navigation: null,
    control: new OpenLayers.Control.MoveLayers(null, {}),
    init: function() {
        var e = this,
            t = geo,
            n = t.Plugins.Menu,
            o = t.Map;
        this.map = o.map, n.addToMenu("move_layers_menu", "Mover Capas WMS", this.menu, null, null, function(o) {
            e.show(), n.checkActiveControl(), "move_layers" == n.activecontrol && e.activate(o, 1), t.Layout.scroll()
        }), $(document).on("click", "#activate_movelayers", function(t) {
            e.activate(t, 0)
        }), $(document).on("click", "#deactivate_movelayers", function() {
            e.active.length && e.deactivate()
        }), $(document).on("click", "#reset_movelayers", function(t) {
            e.reset(t)
        }), this.navigation = this.map.getControlsBy("displayClass", "olControlNavigation")[0], o.controls.movelayers = this.control, this.map.addControl(this.control)
    },
    show: function() {
        if (0 == $("#movelayers_tool").length) {
            var e = geo.Map.wmslayers;
            e.orderByString("title", !0, !0), this.layers = e, e = "<div id='movelayers_tool'>" + ("<div>" + this.getOptions() + "</div>"), geo.Plugins.Menu.add("#movelayers_tool", e + "<div id='movelayers_tool_buttons' class='panel_button'><button class='btn-set-tool btn-tool-default tc btn-l' data-active='false' data-control='move_layers' id='activate_movelayers' title='Desplazar Capas'><i class='icon-popup'></i></button><button class='btn-tool btn-tool-default' data-active='false' id='deactivate_movelayers' title='Parar desplazamiento'><i class='icon-square'></i></button><button class='btn-tool btn-tool-default btn-r' data-active='false' id='reset_movelayers' title='Quitar desplazamiento'><i class='icon-close'></i></button></div></div>", this.menu), $("#" + this.id).chosen({
                no_results_text: "No se encuentra!",
                width: "100%"
            })
        }
    },
    getOptions: function() {
        for (var e = this.layers, t = "<select id='" + this.id + "' multiple='multiple' data-placeholder='Seleccione las capas a desplazar...'>", n = e.length, o = 0; n > o; o++) var a = e[o],
            i = a.id,
            a = a.options.title,
            t = 0 <= $.inArray(i, this.active) ? t + ("<option value='" + i + "' selected>" + a + "</option>") : t + ("<option value='" + i + "'>" + a + "</option>");
        return t + "</select>"
    },
    activate: function(e, t) {
        var n = $("#" + this.id),
            o = n.val();
        if ($.isArray(o))
            if (1 > o.length) e.stopImmediatePropagation();
            else {
                if (0 !== t || this.active.toString() != o.toString()) {
                    var a = geo,
                        i = a.Map,
                        a = a.Layout;
                    n.prop("disabled", "disabled").trigger("chosen:updated"), $(document).off("click", ".ctrl", i.toggleCtrl), $(document).off("click", "#sidebar span", a.showItem), $("#tools-options .drop").css("visibility", "hidden"), $("#tools-options .nav-cancel").css({
                        visibility: "hidden",
                        display: "none"
                    }), this.active = o, this.control.setLayers(this.getLayers(o)), i.controls.movelayers = this.control
                }
                this.navigation.deactivate(), this.control.activate()
            }
        else e.stopImmediatePropagation()
    },
    deactivate: function() {
        $("#" + this.id).prop("disabled", !1).trigger("chosen:updated"), this.control.deactivate(), this.navigation.activate();
        var e = geo,
            t = e.Map,
            n = e.Layout;
        e.Plugins.Menu.activateButtonSet(), t.toggleControl("pan"), n.activateMenuItem("pan"), this.active = [], $(document).on("click", ".ctrl", t.toggleCtrl), $(document).on("click", "#sidebar span", n.showItem), $("#tools-options .nav-cancel").css({
            visibility: "",
            display: "block"
        }), $("#tools-options .drop").css({
            visibility: "",
            display: "none"
        })
    },
    reset: function(e) {
        var t = $("#" + this.id).val();
        $.isArray(t) ? 1 > t.length ? e.stopImmediatePropagation() : (this.control.setLayers(this.getLayers(t)), this.control.reset(), this.active = [], this.deactivate()) : e.stopImmediatePropagation()
    },
    getLayers: function(e) {
        for (var t = [], n = 0, o = e.length; o > n; n++) t.push(this.map.getLayersBy("id", e[n])[0]);
        return t
    }
}, geo.Plugins.pluginsInit = "Transparency ZoomToLayer ZoomToCoordinates GeocodingGoogle2 OrderLayers MoveLayers StreetView FullScreen Geolocation HistoryPlanes".split(" ");

/* https://github.com/sindresorhus/screenfull.js MIT © Sindre Sorhus **/
