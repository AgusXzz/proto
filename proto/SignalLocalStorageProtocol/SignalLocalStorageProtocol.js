/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $Array = $util.global.Array, $String = $util.global.String, $parseInt = $util.global.parseInt, $Number = $util.global.Number, $BigInt = $util.global.BigInt, $Boolean = $util.global.Boolean;

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

function longToString(value, unsigned) {
	if (typeof value === "string") {
		return value;
	}
	if (typeof value === "number") {
		return String(value);
	}
	if (!$util.Long) {
		return String(value);
	}
	const normalized = $util.Long.fromValue(value);
	const prepared = unsigned && normalized && typeof normalized.toUnsigned === "function"
		? normalized.toUnsigned()
		: normalized;
	return prepared.toString();
}

function longToNumber(value, unsigned) {
	if (typeof value === "number") {
		return value;
	}
	if (typeof value === "string") {
		const numeric = Number(value);
		return numeric;
	}
	if (!$util.Long) {
		return Number(value);
	}
	const normalized = $util.Long.fromValue(value);
	const prepared = unsigned && normalized && typeof normalized.toUnsigned === "function"
		? normalized.toUnsigned()
		: typeof normalized.toSigned === "function"
			? normalized.toSigned()
			: normalized;
	return prepared.toNumber();
}

export const SignalLocalStorageProtocol = $root.SignalLocalStorageProtocol = (() => {

    const SignalLocalStorageProtocol = {};

    SignalLocalStorageProtocol.SenderKeyRecordStructure = (function() {

        const SenderKeyRecordStructure = function (p) {
            this.senderKeyStates = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SenderKeyRecordStructure.prototype.senderKeyStates = $util.emptyArray;

        SenderKeyRecordStructure.create = function(properties) {
            return new SenderKeyRecordStructure(properties);
        };

        SenderKeyRecordStructure.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.senderKeyStates != null && m.senderKeyStates.length) {
                for (var i = 0; i < m.senderKeyStates.length; ++i)
                    $root.SignalLocalStorageProtocol.SenderKeyStateStructure.encode(m.senderKeyStates[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SenderKeyRecordStructure.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.SenderKeyRecordStructure();
            while (r.pos < c) {
                var s = r.pos;
                var t = r.tag();
                if (t === z) {
                    z = $undefined;
                    break;
                }
                var u = t & 7;
                switch (t >>>= 3) {
                case 1: {
                        if (u !== 2)
                            break;
                        if (!(m.senderKeyStates && m.senderKeyStates.length))
                            m.senderKeyStates = [];
                        m.senderKeyStates.push($root.SignalLocalStorageProtocol.SenderKeyStateStructure.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                }
                r.skipType(u, q, t);
                if (!r.discardUnknown) {
                    $util.makeProp(m, "$unknowns", false);
                    (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                }
            }
            if (z !== $undefined)
                throw $Error("missing end group");
            return m;
        };

        SenderKeyRecordStructure.fromObject = function (d, q) {
            if (d instanceof $root.SignalLocalStorageProtocol.SenderKeyRecordStructure)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".SignalLocalStorageProtocol.SenderKeyRecordStructure: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.SignalLocalStorageProtocol.SenderKeyRecordStructure();
            if (d.senderKeyStates) {
                if (!$Array.isArray(d.senderKeyStates))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyRecordStructure.senderKeyStates: array expected");
                m.senderKeyStates = $Array(d.senderKeyStates.length);
                for (var i = 0; i < d.senderKeyStates.length; ++i) {
                    if (!$util.isObject(d.senderKeyStates[i]))
                        throw $TypeError(".SignalLocalStorageProtocol.SenderKeyRecordStructure.senderKeyStates: object expected");
                    m.senderKeyStates[i] = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.fromObject(d.senderKeyStates[i], q + 1);
                }
            }
            return m;
        };

        SenderKeyRecordStructure.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.senderKeyStates = [];
            }
            if (m.senderKeyStates && m.senderKeyStates.length) {
                d.senderKeyStates = $Array(m.senderKeyStates.length);
                for (var j = 0; j < m.senderKeyStates.length; ++j) {
                    d.senderKeyStates[j] = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.toObject(m.senderKeyStates[j], o, q + 1);
                }
            }
            return d;
        };

        SenderKeyRecordStructure.prototype.toJSON = function() {
            return SenderKeyRecordStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        SenderKeyRecordStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.SenderKeyRecordStructure";
        };

        return SenderKeyRecordStructure;
    })();

    SignalLocalStorageProtocol.SenderKeyStateStructure = (function() {

        const SenderKeyStateStructure = function (p) {
            this.senderMessageKeys = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SenderKeyStateStructure.prototype.senderKeyId = 0;
        SenderKeyStateStructure.prototype.senderChainKey = null;
        SenderKeyStateStructure.prototype.senderSigningKey = null;
        SenderKeyStateStructure.prototype.senderMessageKeys = $util.emptyArray;

        SenderKeyStateStructure.create = function(properties) {
            return new SenderKeyStateStructure(properties);
        };

        SenderKeyStateStructure.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.senderKeyId != null && $Object.hasOwnProperty.call(m, "senderKeyId"))
                w.uint32(8).uint32(m.senderKeyId);
            if (m.senderChainKey != null && $Object.hasOwnProperty.call(m, "senderChainKey"))
                $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.encode(m.senderChainKey, w.uint32(18).fork(), q + 1).ldelim();
            if (m.senderSigningKey != null && $Object.hasOwnProperty.call(m, "senderSigningKey"))
                $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.encode(m.senderSigningKey, w.uint32(26).fork(), q + 1).ldelim();
            if (m.senderMessageKeys != null && m.senderMessageKeys.length) {
                for (var i = 0; i < m.senderMessageKeys.length; ++i)
                    $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.encode(m.senderMessageKeys[i], w.uint32(34).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SenderKeyStateStructure.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.SenderKeyStateStructure();
            while (r.pos < c) {
                var s = r.pos;
                var t = r.tag();
                if (t === z) {
                    z = $undefined;
                    break;
                }
                var u = t & 7;
                switch (t >>>= 3) {
                case 1: {
                        if (u !== 0)
                            break;
                        m.senderKeyId = r.uint32();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.senderChainKey = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.decode(r, r.uint32(), $undefined, q + 1, m.senderChainKey);
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.senderSigningKey = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.decode(r, r.uint32(), $undefined, q + 1, m.senderSigningKey);
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        if (!(m.senderMessageKeys && m.senderMessageKeys.length))
                            m.senderMessageKeys = [];
                        m.senderMessageKeys.push($root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                }
                r.skipType(u, q, t);
                if (!r.discardUnknown) {
                    $util.makeProp(m, "$unknowns", false);
                    (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                }
            }
            if (z !== $undefined)
                throw $Error("missing end group");
            return m;
        };

        SenderKeyStateStructure.fromObject = function (d, q) {
            if (d instanceof $root.SignalLocalStorageProtocol.SenderKeyStateStructure)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.SignalLocalStorageProtocol.SenderKeyStateStructure();
            if (d.senderKeyId != null) {
                m.senderKeyId = d.senderKeyId >>> 0;
            }
            if (d.senderChainKey != null) {
                if (!$util.isObject(d.senderChainKey))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.senderChainKey: object expected");
                m.senderChainKey = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.fromObject(d.senderChainKey, q + 1);
            }
            if (d.senderSigningKey != null) {
                if (!$util.isObject(d.senderSigningKey))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.senderSigningKey: object expected");
                m.senderSigningKey = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.fromObject(d.senderSigningKey, q + 1);
            }
            if (d.senderMessageKeys) {
                if (!$Array.isArray(d.senderMessageKeys))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.senderMessageKeys: array expected");
                m.senderMessageKeys = $Array(d.senderMessageKeys.length);
                for (var i = 0; i < d.senderMessageKeys.length; ++i) {
                    if (!$util.isObject(d.senderMessageKeys[i]))
                        throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.senderMessageKeys: object expected");
                    m.senderMessageKeys[i] = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.fromObject(d.senderMessageKeys[i], q + 1);
                }
            }
            return m;
        };

        SenderKeyStateStructure.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.senderMessageKeys = [];
            }
            if (o.defaults) {
                d.senderKeyId = 0;
                d.senderChainKey = null;
                d.senderSigningKey = null;
            }
            if (m.senderKeyId != null && $Object.hasOwnProperty.call(m, "senderKeyId")) {
                d.senderKeyId = m.senderKeyId;
            }
            if (m.senderChainKey != null && $Object.hasOwnProperty.call(m, "senderChainKey")) {
                d.senderChainKey = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.toObject(m.senderChainKey, o, q + 1);
            }
            if (m.senderSigningKey != null && $Object.hasOwnProperty.call(m, "senderSigningKey")) {
                d.senderSigningKey = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.toObject(m.senderSigningKey, o, q + 1);
            }
            if (m.senderMessageKeys && m.senderMessageKeys.length) {
                d.senderMessageKeys = $Array(m.senderMessageKeys.length);
                for (var j = 0; j < m.senderMessageKeys.length; ++j) {
                    d.senderMessageKeys[j] = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.toObject(m.senderMessageKeys[j], o, q + 1);
                }
            }
            return d;
        };

        SenderKeyStateStructure.prototype.toJSON = function() {
            return SenderKeyStateStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        SenderKeyStateStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.SenderKeyStateStructure";
        };

        SenderKeyStateStructure.SenderChainKey = (function() {

            const SenderChainKey = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            SenderChainKey.prototype.iteration = 0;
            SenderChainKey.prototype.seed = $util.newBuffer([]);

            SenderChainKey.create = function(properties) {
                return new SenderChainKey(properties);
            };

            SenderChainKey.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.iteration != null && $Object.hasOwnProperty.call(m, "iteration"))
                    w.uint32(8).uint32(m.iteration);
                if (m.seed != null && $Object.hasOwnProperty.call(m, "seed"))
                    w.uint32(18).bytes(m.seed);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            SenderChainKey.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey();
                while (r.pos < c) {
                    var s = r.pos;
                    var t = r.tag();
                    if (t === z) {
                        z = $undefined;
                        break;
                    }
                    var u = t & 7;
                    switch (t >>>= 3) {
                    case 1: {
                            if (u !== 0)
                                break;
                            m.iteration = r.uint32();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.seed = r.bytes();
                            continue;
                        }
                    }
                    r.skipType(u, q, t);
                    if (!r.discardUnknown) {
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                }
                if (z !== $undefined)
                    throw $Error("missing end group");
                return m;
            };

            SenderChainKey.fromObject = function (d, q) {
                if (d instanceof $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey();
                if (d.iteration != null) {
                    m.iteration = d.iteration >>> 0;
                }
                if (d.seed != null) {
                    if (typeof d.seed === "string")
                        $util.base64.decode(d.seed, m.seed = $util.newBuffer($util.base64.length(d.seed)), 0);
                    else if (d.seed.length >= 0)
                        m.seed = d.seed;
                }
                return m;
            };

            SenderChainKey.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.iteration = 0;
                    if (o.bytes === $String)
                        d.seed = "";
                    else {
                        d.seed = [];
                        if (o.bytes !== $Array)
                            d.seed = $util.newBuffer(d.seed);
                    }
                }
                if (m.iteration != null && $Object.hasOwnProperty.call(m, "iteration")) {
                    d.iteration = m.iteration;
                }
                if (m.seed != null && $Object.hasOwnProperty.call(m, "seed")) {
                    d.seed = o.bytes === $String ? $util.base64.encode(m.seed, 0, m.seed.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.seed) : m.seed;
                }
                return d;
            };

            SenderChainKey.prototype.toJSON = function() {
                return SenderChainKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            SenderChainKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey";
            };

            return SenderChainKey;
        })();

        SenderKeyStateStructure.SenderMessageKey = (function() {

            const SenderMessageKey = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            SenderMessageKey.prototype.iteration = 0;
            SenderMessageKey.prototype.seed = $util.newBuffer([]);

            SenderMessageKey.create = function(properties) {
                return new SenderMessageKey(properties);
            };

            SenderMessageKey.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.iteration != null && $Object.hasOwnProperty.call(m, "iteration"))
                    w.uint32(8).uint32(m.iteration);
                if (m.seed != null && $Object.hasOwnProperty.call(m, "seed"))
                    w.uint32(18).bytes(m.seed);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            SenderMessageKey.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey();
                while (r.pos < c) {
                    var s = r.pos;
                    var t = r.tag();
                    if (t === z) {
                        z = $undefined;
                        break;
                    }
                    var u = t & 7;
                    switch (t >>>= 3) {
                    case 1: {
                            if (u !== 0)
                                break;
                            m.iteration = r.uint32();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.seed = r.bytes();
                            continue;
                        }
                    }
                    r.skipType(u, q, t);
                    if (!r.discardUnknown) {
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                }
                if (z !== $undefined)
                    throw $Error("missing end group");
                return m;
            };

            SenderMessageKey.fromObject = function (d, q) {
                if (d instanceof $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey();
                if (d.iteration != null) {
                    m.iteration = d.iteration >>> 0;
                }
                if (d.seed != null) {
                    if (typeof d.seed === "string")
                        $util.base64.decode(d.seed, m.seed = $util.newBuffer($util.base64.length(d.seed)), 0);
                    else if (d.seed.length >= 0)
                        m.seed = d.seed;
                }
                return m;
            };

            SenderMessageKey.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.iteration = 0;
                    if (o.bytes === $String)
                        d.seed = "";
                    else {
                        d.seed = [];
                        if (o.bytes !== $Array)
                            d.seed = $util.newBuffer(d.seed);
                    }
                }
                if (m.iteration != null && $Object.hasOwnProperty.call(m, "iteration")) {
                    d.iteration = m.iteration;
                }
                if (m.seed != null && $Object.hasOwnProperty.call(m, "seed")) {
                    d.seed = o.bytes === $String ? $util.base64.encode(m.seed, 0, m.seed.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.seed) : m.seed;
                }
                return d;
            };

            SenderMessageKey.prototype.toJSON = function() {
                return SenderMessageKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            SenderMessageKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey";
            };

            return SenderMessageKey;
        })();

        SenderKeyStateStructure.SenderSigningKey = (function() {

            const SenderSigningKey = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            SenderSigningKey.prototype["public"] = $util.newBuffer([]);
            SenderSigningKey.prototype["private"] = $util.newBuffer([]);

            SenderSigningKey.create = function(properties) {
                return new SenderSigningKey(properties);
            };

            SenderSigningKey.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m["public"] != null && $Object.hasOwnProperty.call(m, "public"))
                    w.uint32(10).bytes(m["public"]);
                if (m["private"] != null && $Object.hasOwnProperty.call(m, "private"))
                    w.uint32(18).bytes(m["private"]);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            SenderSigningKey.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey();
                while (r.pos < c) {
                    var s = r.pos;
                    var t = r.tag();
                    if (t === z) {
                        z = $undefined;
                        break;
                    }
                    var u = t & 7;
                    switch (t >>>= 3) {
                    case 1: {
                            if (u !== 2)
                                break;
                            m["public"] = r.bytes();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m["private"] = r.bytes();
                            continue;
                        }
                    }
                    r.skipType(u, q, t);
                    if (!r.discardUnknown) {
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                }
                if (z !== $undefined)
                    throw $Error("missing end group");
                return m;
            };

            SenderSigningKey.fromObject = function (d, q) {
                if (d instanceof $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey();
                if (d["public"] != null) {
                    if (typeof d["public"] === "string")
                        $util.base64.decode(d["public"], m["public"] = $util.newBuffer($util.base64.length(d["public"])), 0);
                    else if (d["public"].length >= 0)
                        m["public"] = d["public"];
                }
                if (d["private"] != null) {
                    if (typeof d["private"] === "string")
                        $util.base64.decode(d["private"], m["private"] = $util.newBuffer($util.base64.length(d["private"])), 0);
                    else if (d["private"].length >= 0)
                        m["private"] = d["private"];
                }
                return m;
            };

            SenderSigningKey.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    if (o.bytes === $String)
                        d["public"] = "";
                    else {
                        d["public"] = [];
                        if (o.bytes !== $Array)
                            d["public"] = $util.newBuffer(d["public"]);
                    }
                    if (o.bytes === $String)
                        d["private"] = "";
                    else {
                        d["private"] = [];
                        if (o.bytes !== $Array)
                            d["private"] = $util.newBuffer(d["private"]);
                    }
                }
                if (m["public"] != null && $Object.hasOwnProperty.call(m, "public")) {
                    d["public"] = o.bytes === $String ? $util.base64.encode(m["public"], 0, m["public"].length) : o.bytes === $Array ? $Array.prototype.slice.call(m["public"]) : m["public"];
                }
                if (m["private"] != null && $Object.hasOwnProperty.call(m, "private")) {
                    d["private"] = o.bytes === $String ? $util.base64.encode(m["private"], 0, m["private"].length) : o.bytes === $Array ? $Array.prototype.slice.call(m["private"]) : m["private"];
                }
                return d;
            };

            SenderSigningKey.prototype.toJSON = function() {
                return SenderSigningKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            SenderSigningKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey";
            };

            return SenderSigningKey;
        })();

        return SenderKeyStateStructure;
    })();

    SignalLocalStorageProtocol.IdentityKeyPairStructure = (function() {

        const IdentityKeyPairStructure = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        IdentityKeyPairStructure.prototype.publicKey = $util.newBuffer([]);
        IdentityKeyPairStructure.prototype.privateKey = $util.newBuffer([]);

        IdentityKeyPairStructure.create = function(properties) {
            return new IdentityKeyPairStructure(properties);
        };

        IdentityKeyPairStructure.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.publicKey != null && $Object.hasOwnProperty.call(m, "publicKey"))
                w.uint32(10).bytes(m.publicKey);
            if (m.privateKey != null && $Object.hasOwnProperty.call(m, "privateKey"))
                w.uint32(18).bytes(m.privateKey);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        IdentityKeyPairStructure.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.IdentityKeyPairStructure();
            while (r.pos < c) {
                var s = r.pos;
                var t = r.tag();
                if (t === z) {
                    z = $undefined;
                    break;
                }
                var u = t & 7;
                switch (t >>>= 3) {
                case 1: {
                        if (u !== 2)
                            break;
                        m.publicKey = r.bytes();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.privateKey = r.bytes();
                        continue;
                    }
                }
                r.skipType(u, q, t);
                if (!r.discardUnknown) {
                    $util.makeProp(m, "$unknowns", false);
                    (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                }
            }
            if (z !== $undefined)
                throw $Error("missing end group");
            return m;
        };

        IdentityKeyPairStructure.fromObject = function (d, q) {
            if (d instanceof $root.SignalLocalStorageProtocol.IdentityKeyPairStructure)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".SignalLocalStorageProtocol.IdentityKeyPairStructure: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.SignalLocalStorageProtocol.IdentityKeyPairStructure();
            if (d.publicKey != null) {
                if (typeof d.publicKey === "string")
                    $util.base64.decode(d.publicKey, m.publicKey = $util.newBuffer($util.base64.length(d.publicKey)), 0);
                else if (d.publicKey.length >= 0)
                    m.publicKey = d.publicKey;
            }
            if (d.privateKey != null) {
                if (typeof d.privateKey === "string")
                    $util.base64.decode(d.privateKey, m.privateKey = $util.newBuffer($util.base64.length(d.privateKey)), 0);
                else if (d.privateKey.length >= 0)
                    m.privateKey = d.privateKey;
            }
            return m;
        };

        IdentityKeyPairStructure.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                if (o.bytes === $String)
                    d.publicKey = "";
                else {
                    d.publicKey = [];
                    if (o.bytes !== $Array)
                        d.publicKey = $util.newBuffer(d.publicKey);
                }
                if (o.bytes === $String)
                    d.privateKey = "";
                else {
                    d.privateKey = [];
                    if (o.bytes !== $Array)
                        d.privateKey = $util.newBuffer(d.privateKey);
                }
            }
            if (m.publicKey != null && $Object.hasOwnProperty.call(m, "publicKey")) {
                d.publicKey = o.bytes === $String ? $util.base64.encode(m.publicKey, 0, m.publicKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.publicKey) : m.publicKey;
            }
            if (m.privateKey != null && $Object.hasOwnProperty.call(m, "privateKey")) {
                d.privateKey = o.bytes === $String ? $util.base64.encode(m.privateKey, 0, m.privateKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.privateKey) : m.privateKey;
            }
            return d;
        };

        IdentityKeyPairStructure.prototype.toJSON = function() {
            return IdentityKeyPairStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        IdentityKeyPairStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.IdentityKeyPairStructure";
        };

        return IdentityKeyPairStructure;
    })();

    SignalLocalStorageProtocol.SignedPreKeyRecordStructure = (function() {

        const SignedPreKeyRecordStructure = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SignedPreKeyRecordStructure.prototype.id = 0;
        SignedPreKeyRecordStructure.prototype.publicKey = $util.newBuffer([]);
        SignedPreKeyRecordStructure.prototype.privateKey = $util.newBuffer([]);
        SignedPreKeyRecordStructure.prototype.signature = $util.newBuffer([]);
        SignedPreKeyRecordStructure.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        SignedPreKeyRecordStructure.create = function(properties) {
            return new SignedPreKeyRecordStructure(properties);
        };

        SignedPreKeyRecordStructure.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.id != null && $Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).uint32(m.id);
            if (m.publicKey != null && $Object.hasOwnProperty.call(m, "publicKey"))
                w.uint32(18).bytes(m.publicKey);
            if (m.privateKey != null && $Object.hasOwnProperty.call(m, "privateKey"))
                w.uint32(26).bytes(m.privateKey);
            if (m.signature != null && $Object.hasOwnProperty.call(m, "signature"))
                w.uint32(34).bytes(m.signature);
            if (m.timestamp != null && $Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(41).fixed64(m.timestamp);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SignedPreKeyRecordStructure.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.SignedPreKeyRecordStructure();
            while (r.pos < c) {
                var s = r.pos;
                var t = r.tag();
                if (t === z) {
                    z = $undefined;
                    break;
                }
                var u = t & 7;
                switch (t >>>= 3) {
                case 1: {
                        if (u !== 0)
                            break;
                        m.id = r.uint32();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.publicKey = r.bytes();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.privateKey = r.bytes();
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.signature = r.bytes();
                        continue;
                    }
                case 5: {
                        if (u !== 1)
                            break;
                        m.timestamp = r.fixed64();
                        continue;
                    }
                }
                r.skipType(u, q, t);
                if (!r.discardUnknown) {
                    $util.makeProp(m, "$unknowns", false);
                    (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                }
            }
            if (z !== $undefined)
                throw $Error("missing end group");
            return m;
        };

        SignedPreKeyRecordStructure.fromObject = function (d, q) {
            if (d instanceof $root.SignalLocalStorageProtocol.SignedPreKeyRecordStructure)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".SignalLocalStorageProtocol.SignedPreKeyRecordStructure: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.SignalLocalStorageProtocol.SignedPreKeyRecordStructure();
            if (d.id != null) {
                m.id = d.id >>> 0;
            }
            if (d.publicKey != null) {
                if (typeof d.publicKey === "string")
                    $util.base64.decode(d.publicKey, m.publicKey = $util.newBuffer($util.base64.length(d.publicKey)), 0);
                else if (d.publicKey.length >= 0)
                    m.publicKey = d.publicKey;
            }
            if (d.privateKey != null) {
                if (typeof d.privateKey === "string")
                    $util.base64.decode(d.privateKey, m.privateKey = $util.newBuffer($util.base64.length(d.privateKey)), 0);
                else if (d.privateKey.length >= 0)
                    m.privateKey = d.privateKey;
            }
            if (d.signature != null) {
                if (typeof d.signature === "string")
                    $util.base64.decode(d.signature, m.signature = $util.newBuffer($util.base64.length(d.signature)), 0);
                else if (d.signature.length >= 0)
                    m.signature = d.signature;
            }
            if (d.timestamp != null) {
                if ($util.Long)
                    m.timestamp = $util.Long.fromValue(d.timestamp, true);
                else if (typeof d.timestamp === "string")
                    m.timestamp = $parseInt(d.timestamp, 10);
                else if (typeof d.timestamp === "number")
                    m.timestamp = d.timestamp;
                else if (typeof d.timestamp === "object")
                    m.timestamp = new $util.LongBits(d.timestamp.low >>> 0, d.timestamp.high >>> 0).toNumber(true);
            }
            return m;
        };

        SignedPreKeyRecordStructure.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.id = 0;
                if (o.bytes === $String)
                    d.publicKey = "";
                else {
                    d.publicKey = [];
                    if (o.bytes !== $Array)
                        d.publicKey = $util.newBuffer(d.publicKey);
                }
                if (o.bytes === $String)
                    d.privateKey = "";
                else {
                    d.privateKey = [];
                    if (o.bytes !== $Array)
                        d.privateKey = $util.newBuffer(d.privateKey);
                }
                if (o.bytes === $String)
                    d.signature = "";
                else {
                    d.signature = [];
                    if (o.bytes !== $Array)
                        d.signature = $util.newBuffer(d.signature);
                }
                if ($util.Long) {
                    var n = new $util.Long(0, 0, true);
                    d.timestamp = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.timestamp = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
            }
            if (m.id != null && $Object.hasOwnProperty.call(m, "id")) {
                d.id = m.id;
            }
            if (m.publicKey != null && $Object.hasOwnProperty.call(m, "publicKey")) {
                d.publicKey = o.bytes === $String ? $util.base64.encode(m.publicKey, 0, m.publicKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.publicKey) : m.publicKey;
            }
            if (m.privateKey != null && $Object.hasOwnProperty.call(m, "privateKey")) {
                d.privateKey = o.bytes === $String ? $util.base64.encode(m.privateKey, 0, m.privateKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.privateKey) : m.privateKey;
            }
            if (m.signature != null && $Object.hasOwnProperty.call(m, "signature")) {
                d.signature = o.bytes === $String ? $util.base64.encode(m.signature, 0, m.signature.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.signature) : m.signature;
            }
            if (m.timestamp != null && $Object.hasOwnProperty.call(m, "timestamp")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.timestamp = typeof m.timestamp === "number" ? $BigInt(m.timestamp) : $util.Long.fromBits(m.timestamp.low >>> 0, m.timestamp.high >>> 0, true).toBigInt();
                else if (typeof m.timestamp === "number")
                    d.timestamp = o.longs === $String ? $String(m.timestamp) : m.timestamp;
                else
                    d.timestamp = o.longs === String ? longToString(m.timestamp, true) : o.longs === Number ? longToNumber(m.timestamp, true) : m.timestamp;
            }
            return d;
        };

        SignedPreKeyRecordStructure.prototype.toJSON = function() {
            return SignedPreKeyRecordStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        SignedPreKeyRecordStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.SignedPreKeyRecordStructure";
        };

        return SignedPreKeyRecordStructure;
    })();

    SignalLocalStorageProtocol.PreKeyRecordStructure = (function() {

        const PreKeyRecordStructure = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        PreKeyRecordStructure.prototype.id = 0;
        PreKeyRecordStructure.prototype.publicKey = $util.newBuffer([]);
        PreKeyRecordStructure.prototype.privateKey = $util.newBuffer([]);

        PreKeyRecordStructure.create = function(properties) {
            return new PreKeyRecordStructure(properties);
        };

        PreKeyRecordStructure.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.id != null && $Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).uint32(m.id);
            if (m.publicKey != null && $Object.hasOwnProperty.call(m, "publicKey"))
                w.uint32(18).bytes(m.publicKey);
            if (m.privateKey != null && $Object.hasOwnProperty.call(m, "privateKey"))
                w.uint32(26).bytes(m.privateKey);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        PreKeyRecordStructure.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.PreKeyRecordStructure();
            while (r.pos < c) {
                var s = r.pos;
                var t = r.tag();
                if (t === z) {
                    z = $undefined;
                    break;
                }
                var u = t & 7;
                switch (t >>>= 3) {
                case 1: {
                        if (u !== 0)
                            break;
                        m.id = r.uint32();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.publicKey = r.bytes();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.privateKey = r.bytes();
                        continue;
                    }
                }
                r.skipType(u, q, t);
                if (!r.discardUnknown) {
                    $util.makeProp(m, "$unknowns", false);
                    (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                }
            }
            if (z !== $undefined)
                throw $Error("missing end group");
            return m;
        };

        PreKeyRecordStructure.fromObject = function (d, q) {
            if (d instanceof $root.SignalLocalStorageProtocol.PreKeyRecordStructure)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".SignalLocalStorageProtocol.PreKeyRecordStructure: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.SignalLocalStorageProtocol.PreKeyRecordStructure();
            if (d.id != null) {
                m.id = d.id >>> 0;
            }
            if (d.publicKey != null) {
                if (typeof d.publicKey === "string")
                    $util.base64.decode(d.publicKey, m.publicKey = $util.newBuffer($util.base64.length(d.publicKey)), 0);
                else if (d.publicKey.length >= 0)
                    m.publicKey = d.publicKey;
            }
            if (d.privateKey != null) {
                if (typeof d.privateKey === "string")
                    $util.base64.decode(d.privateKey, m.privateKey = $util.newBuffer($util.base64.length(d.privateKey)), 0);
                else if (d.privateKey.length >= 0)
                    m.privateKey = d.privateKey;
            }
            return m;
        };

        PreKeyRecordStructure.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.id = 0;
                if (o.bytes === $String)
                    d.publicKey = "";
                else {
                    d.publicKey = [];
                    if (o.bytes !== $Array)
                        d.publicKey = $util.newBuffer(d.publicKey);
                }
                if (o.bytes === $String)
                    d.privateKey = "";
                else {
                    d.privateKey = [];
                    if (o.bytes !== $Array)
                        d.privateKey = $util.newBuffer(d.privateKey);
                }
            }
            if (m.id != null && $Object.hasOwnProperty.call(m, "id")) {
                d.id = m.id;
            }
            if (m.publicKey != null && $Object.hasOwnProperty.call(m, "publicKey")) {
                d.publicKey = o.bytes === $String ? $util.base64.encode(m.publicKey, 0, m.publicKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.publicKey) : m.publicKey;
            }
            if (m.privateKey != null && $Object.hasOwnProperty.call(m, "privateKey")) {
                d.privateKey = o.bytes === $String ? $util.base64.encode(m.privateKey, 0, m.privateKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.privateKey) : m.privateKey;
            }
            return d;
        };

        PreKeyRecordStructure.prototype.toJSON = function() {
            return PreKeyRecordStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        PreKeyRecordStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.PreKeyRecordStructure";
        };

        return PreKeyRecordStructure;
    })();

    SignalLocalStorageProtocol.RecordStructure = (function() {

        const RecordStructure = function (p) {
            this.previousSessions = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        RecordStructure.prototype.currentSession = null;
        RecordStructure.prototype.previousSessions = $util.emptyArray;

        RecordStructure.create = function(properties) {
            return new RecordStructure(properties);
        };

        RecordStructure.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.currentSession != null && $Object.hasOwnProperty.call(m, "currentSession"))
                $root.SignalLocalStorageProtocol.SessionStructure.encode(m.currentSession, w.uint32(10).fork(), q + 1).ldelim();
            if (m.previousSessions != null && m.previousSessions.length) {
                for (var i = 0; i < m.previousSessions.length; ++i)
                    $root.SignalLocalStorageProtocol.SessionStructure.encode(m.previousSessions[i], w.uint32(18).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        RecordStructure.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.RecordStructure();
            while (r.pos < c) {
                var s = r.pos;
                var t = r.tag();
                if (t === z) {
                    z = $undefined;
                    break;
                }
                var u = t & 7;
                switch (t >>>= 3) {
                case 1: {
                        if (u !== 2)
                            break;
                        m.currentSession = $root.SignalLocalStorageProtocol.SessionStructure.decode(r, r.uint32(), $undefined, q + 1, m.currentSession);
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        if (!(m.previousSessions && m.previousSessions.length))
                            m.previousSessions = [];
                        m.previousSessions.push($root.SignalLocalStorageProtocol.SessionStructure.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                }
                r.skipType(u, q, t);
                if (!r.discardUnknown) {
                    $util.makeProp(m, "$unknowns", false);
                    (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                }
            }
            if (z !== $undefined)
                throw $Error("missing end group");
            return m;
        };

        RecordStructure.fromObject = function (d, q) {
            if (d instanceof $root.SignalLocalStorageProtocol.RecordStructure)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".SignalLocalStorageProtocol.RecordStructure: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.SignalLocalStorageProtocol.RecordStructure();
            if (d.currentSession != null) {
                if (!$util.isObject(d.currentSession))
                    throw $TypeError(".SignalLocalStorageProtocol.RecordStructure.currentSession: object expected");
                m.currentSession = $root.SignalLocalStorageProtocol.SessionStructure.fromObject(d.currentSession, q + 1);
            }
            if (d.previousSessions) {
                if (!$Array.isArray(d.previousSessions))
                    throw $TypeError(".SignalLocalStorageProtocol.RecordStructure.previousSessions: array expected");
                m.previousSessions = $Array(d.previousSessions.length);
                for (var i = 0; i < d.previousSessions.length; ++i) {
                    if (!$util.isObject(d.previousSessions[i]))
                        throw $TypeError(".SignalLocalStorageProtocol.RecordStructure.previousSessions: object expected");
                    m.previousSessions[i] = $root.SignalLocalStorageProtocol.SessionStructure.fromObject(d.previousSessions[i], q + 1);
                }
            }
            return m;
        };

        RecordStructure.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.previousSessions = [];
            }
            if (o.defaults) {
                d.currentSession = null;
            }
            if (m.currentSession != null && $Object.hasOwnProperty.call(m, "currentSession")) {
                d.currentSession = $root.SignalLocalStorageProtocol.SessionStructure.toObject(m.currentSession, o, q + 1);
            }
            if (m.previousSessions && m.previousSessions.length) {
                d.previousSessions = $Array(m.previousSessions.length);
                for (var j = 0; j < m.previousSessions.length; ++j) {
                    d.previousSessions[j] = $root.SignalLocalStorageProtocol.SessionStructure.toObject(m.previousSessions[j], o, q + 1);
                }
            }
            return d;
        };

        RecordStructure.prototype.toJSON = function() {
            return RecordStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        RecordStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.RecordStructure";
        };

        return RecordStructure;
    })();

    SignalLocalStorageProtocol.SessionStructure = (function() {

        const SessionStructure = function (p) {
            this.receiverChains = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SessionStructure.prototype.sessionVersion = 0;
        SessionStructure.prototype.localIdentityPublic = $util.newBuffer([]);
        SessionStructure.prototype.remoteIdentityPublic = $util.newBuffer([]);
        SessionStructure.prototype.rootKey = $util.newBuffer([]);
        SessionStructure.prototype.previousCounter = 0;
        SessionStructure.prototype.senderChain = null;
        SessionStructure.prototype.receiverChains = $util.emptyArray;
        SessionStructure.prototype.pendingKeyExchange = null;
        SessionStructure.prototype.pendingPreKey = null;
        SessionStructure.prototype.remoteRegistrationId = 0;
        SessionStructure.prototype.localRegistrationId = 0;
        SessionStructure.prototype.needsRefresh = false;
        SessionStructure.prototype.aliceBaseKey = $util.newBuffer([]);

        SessionStructure.create = function(properties) {
            return new SessionStructure(properties);
        };

        SessionStructure.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.sessionVersion != null && $Object.hasOwnProperty.call(m, "sessionVersion"))
                w.uint32(8).uint32(m.sessionVersion);
            if (m.localIdentityPublic != null && $Object.hasOwnProperty.call(m, "localIdentityPublic"))
                w.uint32(18).bytes(m.localIdentityPublic);
            if (m.remoteIdentityPublic != null && $Object.hasOwnProperty.call(m, "remoteIdentityPublic"))
                w.uint32(26).bytes(m.remoteIdentityPublic);
            if (m.rootKey != null && $Object.hasOwnProperty.call(m, "rootKey"))
                w.uint32(34).bytes(m.rootKey);
            if (m.previousCounter != null && $Object.hasOwnProperty.call(m, "previousCounter"))
                w.uint32(40).uint32(m.previousCounter);
            if (m.senderChain != null && $Object.hasOwnProperty.call(m, "senderChain"))
                $root.SignalLocalStorageProtocol.SessionStructure.Chain.encode(m.senderChain, w.uint32(50).fork(), q + 1).ldelim();
            if (m.receiverChains != null && m.receiverChains.length) {
                for (var i = 0; i < m.receiverChains.length; ++i)
                    $root.SignalLocalStorageProtocol.SessionStructure.Chain.encode(m.receiverChains[i], w.uint32(58).fork(), q + 1).ldelim();
            }
            if (m.pendingKeyExchange != null && $Object.hasOwnProperty.call(m, "pendingKeyExchange"))
                $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.encode(m.pendingKeyExchange, w.uint32(66).fork(), q + 1).ldelim();
            if (m.pendingPreKey != null && $Object.hasOwnProperty.call(m, "pendingPreKey"))
                $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey.encode(m.pendingPreKey, w.uint32(74).fork(), q + 1).ldelim();
            if (m.remoteRegistrationId != null && $Object.hasOwnProperty.call(m, "remoteRegistrationId"))
                w.uint32(80).uint32(m.remoteRegistrationId);
            if (m.localRegistrationId != null && $Object.hasOwnProperty.call(m, "localRegistrationId"))
                w.uint32(88).uint32(m.localRegistrationId);
            if (m.needsRefresh != null && $Object.hasOwnProperty.call(m, "needsRefresh"))
                w.uint32(96).bool(m.needsRefresh);
            if (m.aliceBaseKey != null && $Object.hasOwnProperty.call(m, "aliceBaseKey"))
                w.uint32(106).bytes(m.aliceBaseKey);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SessionStructure.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.SessionStructure();
            while (r.pos < c) {
                var s = r.pos;
                var t = r.tag();
                if (t === z) {
                    z = $undefined;
                    break;
                }
                var u = t & 7;
                switch (t >>>= 3) {
                case 1: {
                        if (u !== 0)
                            break;
                        m.sessionVersion = r.uint32();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.localIdentityPublic = r.bytes();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.remoteIdentityPublic = r.bytes();
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.rootKey = r.bytes();
                        continue;
                    }
                case 5: {
                        if (u !== 0)
                            break;
                        m.previousCounter = r.uint32();
                        continue;
                    }
                case 6: {
                        if (u !== 2)
                            break;
                        m.senderChain = $root.SignalLocalStorageProtocol.SessionStructure.Chain.decode(r, r.uint32(), $undefined, q + 1, m.senderChain);
                        continue;
                    }
                case 7: {
                        if (u !== 2)
                            break;
                        if (!(m.receiverChains && m.receiverChains.length))
                            m.receiverChains = [];
                        m.receiverChains.push($root.SignalLocalStorageProtocol.SessionStructure.Chain.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                case 8: {
                        if (u !== 2)
                            break;
                        m.pendingKeyExchange = $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.decode(r, r.uint32(), $undefined, q + 1, m.pendingKeyExchange);
                        continue;
                    }
                case 9: {
                        if (u !== 2)
                            break;
                        m.pendingPreKey = $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey.decode(r, r.uint32(), $undefined, q + 1, m.pendingPreKey);
                        continue;
                    }
                case 10: {
                        if (u !== 0)
                            break;
                        m.remoteRegistrationId = r.uint32();
                        continue;
                    }
                case 11: {
                        if (u !== 0)
                            break;
                        m.localRegistrationId = r.uint32();
                        continue;
                    }
                case 12: {
                        if (u !== 0)
                            break;
                        m.needsRefresh = r.bool();
                        continue;
                    }
                case 13: {
                        if (u !== 2)
                            break;
                        m.aliceBaseKey = r.bytes();
                        continue;
                    }
                }
                r.skipType(u, q, t);
                if (!r.discardUnknown) {
                    $util.makeProp(m, "$unknowns", false);
                    (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                }
            }
            if (z !== $undefined)
                throw $Error("missing end group");
            return m;
        };

        SessionStructure.fromObject = function (d, q) {
            if (d instanceof $root.SignalLocalStorageProtocol.SessionStructure)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".SignalLocalStorageProtocol.SessionStructure: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.SignalLocalStorageProtocol.SessionStructure();
            if (d.sessionVersion != null) {
                m.sessionVersion = d.sessionVersion >>> 0;
            }
            if (d.localIdentityPublic != null) {
                if (typeof d.localIdentityPublic === "string")
                    $util.base64.decode(d.localIdentityPublic, m.localIdentityPublic = $util.newBuffer($util.base64.length(d.localIdentityPublic)), 0);
                else if (d.localIdentityPublic.length >= 0)
                    m.localIdentityPublic = d.localIdentityPublic;
            }
            if (d.remoteIdentityPublic != null) {
                if (typeof d.remoteIdentityPublic === "string")
                    $util.base64.decode(d.remoteIdentityPublic, m.remoteIdentityPublic = $util.newBuffer($util.base64.length(d.remoteIdentityPublic)), 0);
                else if (d.remoteIdentityPublic.length >= 0)
                    m.remoteIdentityPublic = d.remoteIdentityPublic;
            }
            if (d.rootKey != null) {
                if (typeof d.rootKey === "string")
                    $util.base64.decode(d.rootKey, m.rootKey = $util.newBuffer($util.base64.length(d.rootKey)), 0);
                else if (d.rootKey.length >= 0)
                    m.rootKey = d.rootKey;
            }
            if (d.previousCounter != null) {
                m.previousCounter = d.previousCounter >>> 0;
            }
            if (d.senderChain != null) {
                if (!$util.isObject(d.senderChain))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.senderChain: object expected");
                m.senderChain = $root.SignalLocalStorageProtocol.SessionStructure.Chain.fromObject(d.senderChain, q + 1);
            }
            if (d.receiverChains) {
                if (!$Array.isArray(d.receiverChains))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.receiverChains: array expected");
                m.receiverChains = $Array(d.receiverChains.length);
                for (var i = 0; i < d.receiverChains.length; ++i) {
                    if (!$util.isObject(d.receiverChains[i]))
                        throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.receiverChains: object expected");
                    m.receiverChains[i] = $root.SignalLocalStorageProtocol.SessionStructure.Chain.fromObject(d.receiverChains[i], q + 1);
                }
            }
            if (d.pendingKeyExchange != null) {
                if (!$util.isObject(d.pendingKeyExchange))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.pendingKeyExchange: object expected");
                m.pendingKeyExchange = $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.fromObject(d.pendingKeyExchange, q + 1);
            }
            if (d.pendingPreKey != null) {
                if (!$util.isObject(d.pendingPreKey))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.pendingPreKey: object expected");
                m.pendingPreKey = $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey.fromObject(d.pendingPreKey, q + 1);
            }
            if (d.remoteRegistrationId != null) {
                m.remoteRegistrationId = d.remoteRegistrationId >>> 0;
            }
            if (d.localRegistrationId != null) {
                m.localRegistrationId = d.localRegistrationId >>> 0;
            }
            if (d.needsRefresh != null) {
                m.needsRefresh = $Boolean(d.needsRefresh);
            }
            if (d.aliceBaseKey != null) {
                if (typeof d.aliceBaseKey === "string")
                    $util.base64.decode(d.aliceBaseKey, m.aliceBaseKey = $util.newBuffer($util.base64.length(d.aliceBaseKey)), 0);
                else if (d.aliceBaseKey.length >= 0)
                    m.aliceBaseKey = d.aliceBaseKey;
            }
            return m;
        };

        SessionStructure.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.receiverChains = [];
            }
            if (o.defaults) {
                d.sessionVersion = 0;
                if (o.bytes === $String)
                    d.localIdentityPublic = "";
                else {
                    d.localIdentityPublic = [];
                    if (o.bytes !== $Array)
                        d.localIdentityPublic = $util.newBuffer(d.localIdentityPublic);
                }
                if (o.bytes === $String)
                    d.remoteIdentityPublic = "";
                else {
                    d.remoteIdentityPublic = [];
                    if (o.bytes !== $Array)
                        d.remoteIdentityPublic = $util.newBuffer(d.remoteIdentityPublic);
                }
                if (o.bytes === $String)
                    d.rootKey = "";
                else {
                    d.rootKey = [];
                    if (o.bytes !== $Array)
                        d.rootKey = $util.newBuffer(d.rootKey);
                }
                d.previousCounter = 0;
                d.senderChain = null;
                d.pendingKeyExchange = null;
                d.pendingPreKey = null;
                d.remoteRegistrationId = 0;
                d.localRegistrationId = 0;
                d.needsRefresh = false;
                if (o.bytes === $String)
                    d.aliceBaseKey = "";
                else {
                    d.aliceBaseKey = [];
                    if (o.bytes !== $Array)
                        d.aliceBaseKey = $util.newBuffer(d.aliceBaseKey);
                }
            }
            if (m.sessionVersion != null && $Object.hasOwnProperty.call(m, "sessionVersion")) {
                d.sessionVersion = m.sessionVersion;
            }
            if (m.localIdentityPublic != null && $Object.hasOwnProperty.call(m, "localIdentityPublic")) {
                d.localIdentityPublic = o.bytes === $String ? $util.base64.encode(m.localIdentityPublic, 0, m.localIdentityPublic.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.localIdentityPublic) : m.localIdentityPublic;
            }
            if (m.remoteIdentityPublic != null && $Object.hasOwnProperty.call(m, "remoteIdentityPublic")) {
                d.remoteIdentityPublic = o.bytes === $String ? $util.base64.encode(m.remoteIdentityPublic, 0, m.remoteIdentityPublic.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.remoteIdentityPublic) : m.remoteIdentityPublic;
            }
            if (m.rootKey != null && $Object.hasOwnProperty.call(m, "rootKey")) {
                d.rootKey = o.bytes === $String ? $util.base64.encode(m.rootKey, 0, m.rootKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.rootKey) : m.rootKey;
            }
            if (m.previousCounter != null && $Object.hasOwnProperty.call(m, "previousCounter")) {
                d.previousCounter = m.previousCounter;
            }
            if (m.senderChain != null && $Object.hasOwnProperty.call(m, "senderChain")) {
                d.senderChain = $root.SignalLocalStorageProtocol.SessionStructure.Chain.toObject(m.senderChain, o, q + 1);
            }
            if (m.receiverChains && m.receiverChains.length) {
                d.receiverChains = $Array(m.receiverChains.length);
                for (var j = 0; j < m.receiverChains.length; ++j) {
                    d.receiverChains[j] = $root.SignalLocalStorageProtocol.SessionStructure.Chain.toObject(m.receiverChains[j], o, q + 1);
                }
            }
            if (m.pendingKeyExchange != null && $Object.hasOwnProperty.call(m, "pendingKeyExchange")) {
                d.pendingKeyExchange = $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.toObject(m.pendingKeyExchange, o, q + 1);
            }
            if (m.pendingPreKey != null && $Object.hasOwnProperty.call(m, "pendingPreKey")) {
                d.pendingPreKey = $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey.toObject(m.pendingPreKey, o, q + 1);
            }
            if (m.remoteRegistrationId != null && $Object.hasOwnProperty.call(m, "remoteRegistrationId")) {
                d.remoteRegistrationId = m.remoteRegistrationId;
            }
            if (m.localRegistrationId != null && $Object.hasOwnProperty.call(m, "localRegistrationId")) {
                d.localRegistrationId = m.localRegistrationId;
            }
            if (m.needsRefresh != null && $Object.hasOwnProperty.call(m, "needsRefresh")) {
                d.needsRefresh = m.needsRefresh;
            }
            if (m.aliceBaseKey != null && $Object.hasOwnProperty.call(m, "aliceBaseKey")) {
                d.aliceBaseKey = o.bytes === $String ? $util.base64.encode(m.aliceBaseKey, 0, m.aliceBaseKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.aliceBaseKey) : m.aliceBaseKey;
            }
            return d;
        };

        SessionStructure.prototype.toJSON = function() {
            return SessionStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        SessionStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.SessionStructure";
        };

        SessionStructure.Chain = (function() {

            const Chain = function (p) {
                this.messageKeys = [];
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            Chain.prototype.senderRatchetKey = $util.newBuffer([]);
            Chain.prototype.senderRatchetKeyPrivate = $util.newBuffer([]);
            Chain.prototype.chainKey = null;
            Chain.prototype.messageKeys = $util.emptyArray;

            Chain.create = function(properties) {
                return new Chain(properties);
            };

            Chain.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.senderRatchetKey != null && $Object.hasOwnProperty.call(m, "senderRatchetKey"))
                    w.uint32(10).bytes(m.senderRatchetKey);
                if (m.senderRatchetKeyPrivate != null && $Object.hasOwnProperty.call(m, "senderRatchetKeyPrivate"))
                    w.uint32(18).bytes(m.senderRatchetKeyPrivate);
                if (m.chainKey != null && $Object.hasOwnProperty.call(m, "chainKey"))
                    $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.encode(m.chainKey, w.uint32(26).fork(), q + 1).ldelim();
                if (m.messageKeys != null && m.messageKeys.length) {
                    for (var i = 0; i < m.messageKeys.length; ++i)
                        $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.encode(m.messageKeys[i], w.uint32(34).fork(), q + 1).ldelim();
                }
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            Chain.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.SessionStructure.Chain();
                while (r.pos < c) {
                    var s = r.pos;
                    var t = r.tag();
                    if (t === z) {
                        z = $undefined;
                        break;
                    }
                    var u = t & 7;
                    switch (t >>>= 3) {
                    case 1: {
                            if (u !== 2)
                                break;
                            m.senderRatchetKey = r.bytes();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.senderRatchetKeyPrivate = r.bytes();
                            continue;
                        }
                    case 3: {
                            if (u !== 2)
                                break;
                            m.chainKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.decode(r, r.uint32(), $undefined, q + 1, m.chainKey);
                            continue;
                        }
                    case 4: {
                            if (u !== 2)
                                break;
                            if (!(m.messageKeys && m.messageKeys.length))
                                m.messageKeys = [];
                            m.messageKeys.push($root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.decode(r, r.uint32(), $undefined, q + 1));
                            continue;
                        }
                    }
                    r.skipType(u, q, t);
                    if (!r.discardUnknown) {
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                }
                if (z !== $undefined)
                    throw $Error("missing end group");
                return m;
            };

            Chain.fromObject = function (d, q) {
                if (d instanceof $root.SignalLocalStorageProtocol.SessionStructure.Chain)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.Chain: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.SignalLocalStorageProtocol.SessionStructure.Chain();
                if (d.senderRatchetKey != null) {
                    if (typeof d.senderRatchetKey === "string")
                        $util.base64.decode(d.senderRatchetKey, m.senderRatchetKey = $util.newBuffer($util.base64.length(d.senderRatchetKey)), 0);
                    else if (d.senderRatchetKey.length >= 0)
                        m.senderRatchetKey = d.senderRatchetKey;
                }
                if (d.senderRatchetKeyPrivate != null) {
                    if (typeof d.senderRatchetKeyPrivate === "string")
                        $util.base64.decode(d.senderRatchetKeyPrivate, m.senderRatchetKeyPrivate = $util.newBuffer($util.base64.length(d.senderRatchetKeyPrivate)), 0);
                    else if (d.senderRatchetKeyPrivate.length >= 0)
                        m.senderRatchetKeyPrivate = d.senderRatchetKeyPrivate;
                }
                if (d.chainKey != null) {
                    if (!$util.isObject(d.chainKey))
                        throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.Chain.chainKey: object expected");
                    m.chainKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.fromObject(d.chainKey, q + 1);
                }
                if (d.messageKeys) {
                    if (!$Array.isArray(d.messageKeys))
                        throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.Chain.messageKeys: array expected");
                    m.messageKeys = $Array(d.messageKeys.length);
                    for (var i = 0; i < d.messageKeys.length; ++i) {
                        if (!$util.isObject(d.messageKeys[i]))
                            throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.Chain.messageKeys: object expected");
                        m.messageKeys[i] = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.fromObject(d.messageKeys[i], q + 1);
                    }
                }
                return m;
            };

            Chain.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.arrays || o.defaults) {
                    d.messageKeys = [];
                }
                if (o.defaults) {
                    if (o.bytes === $String)
                        d.senderRatchetKey = "";
                    else {
                        d.senderRatchetKey = [];
                        if (o.bytes !== $Array)
                            d.senderRatchetKey = $util.newBuffer(d.senderRatchetKey);
                    }
                    if (o.bytes === $String)
                        d.senderRatchetKeyPrivate = "";
                    else {
                        d.senderRatchetKeyPrivate = [];
                        if (o.bytes !== $Array)
                            d.senderRatchetKeyPrivate = $util.newBuffer(d.senderRatchetKeyPrivate);
                    }
                    d.chainKey = null;
                }
                if (m.senderRatchetKey != null && $Object.hasOwnProperty.call(m, "senderRatchetKey")) {
                    d.senderRatchetKey = o.bytes === $String ? $util.base64.encode(m.senderRatchetKey, 0, m.senderRatchetKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.senderRatchetKey) : m.senderRatchetKey;
                }
                if (m.senderRatchetKeyPrivate != null && $Object.hasOwnProperty.call(m, "senderRatchetKeyPrivate")) {
                    d.senderRatchetKeyPrivate = o.bytes === $String ? $util.base64.encode(m.senderRatchetKeyPrivate, 0, m.senderRatchetKeyPrivate.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.senderRatchetKeyPrivate) : m.senderRatchetKeyPrivate;
                }
                if (m.chainKey != null && $Object.hasOwnProperty.call(m, "chainKey")) {
                    d.chainKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.toObject(m.chainKey, o, q + 1);
                }
                if (m.messageKeys && m.messageKeys.length) {
                    d.messageKeys = $Array(m.messageKeys.length);
                    for (var j = 0; j < m.messageKeys.length; ++j) {
                        d.messageKeys[j] = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.toObject(m.messageKeys[j], o, q + 1);
                    }
                }
                return d;
            };

            Chain.prototype.toJSON = function() {
                return Chain.toObject(this, $protobuf.util.toJSONOptions);
            };

            Chain.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/SignalLocalStorageProtocol.SessionStructure.Chain";
            };

            Chain.ChainKey = (function() {

                const ChainKey = function (p) {
                    if (p)
                        for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                };

                ChainKey.prototype.index = 0;
                ChainKey.prototype.key = $util.newBuffer([]);

                ChainKey.create = function(properties) {
                    return new ChainKey(properties);
                };

                ChainKey.encode = function (m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (m.index != null && $Object.hasOwnProperty.call(m, "index"))
                        w.uint32(8).uint32(m.index);
                    if (m.key != null && $Object.hasOwnProperty.call(m, "key"))
                        w.uint32(18).bytes(m.key);
                    if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                        for (var i = 0; i < m.$unknowns.length; ++i)
                            w.raw(m.$unknowns[i]);
                    return w;
                };

                ChainKey.decode = function (r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === $undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey();
                    while (r.pos < c) {
                        var s = r.pos;
                        var t = r.tag();
                        if (t === z) {
                            z = $undefined;
                            break;
                        }
                        var u = t & 7;
                        switch (t >>>= 3) {
                        case 1: {
                                if (u !== 0)
                                    break;
                                m.index = r.uint32();
                                continue;
                            }
                        case 2: {
                                if (u !== 2)
                                    break;
                                m.key = r.bytes();
                                continue;
                            }
                        }
                        r.skipType(u, q, t);
                        if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                    }
                    if (z !== $undefined)
                        throw $Error("missing end group");
                    return m;
                };

                ChainKey.fromObject = function (d, q) {
                    if (d instanceof $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey)
                        return d;
                    if (!$util.isObject(d))
                        throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey: object expected");
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var m = new $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey();
                    if (d.index != null) {
                        m.index = d.index >>> 0;
                    }
                    if (d.key != null) {
                        if (typeof d.key === "string")
                            $util.base64.decode(d.key, m.key = $util.newBuffer($util.base64.length(d.key)), 0);
                        else if (d.key.length >= 0)
                            m.key = d.key;
                    }
                    return m;
                };

                ChainKey.toObject = function (m, o, q) {
                    if (!o)
                        o = {};
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var d = {};
                    if (o.defaults) {
                        d.index = 0;
                        if (o.bytes === $String)
                            d.key = "";
                        else {
                            d.key = [];
                            if (o.bytes !== $Array)
                                d.key = $util.newBuffer(d.key);
                        }
                    }
                    if (m.index != null && $Object.hasOwnProperty.call(m, "index")) {
                        d.index = m.index;
                    }
                    if (m.key != null && $Object.hasOwnProperty.call(m, "key")) {
                        d.key = o.bytes === $String ? $util.base64.encode(m.key, 0, m.key.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.key) : m.key;
                    }
                    return d;
                };

                ChainKey.prototype.toJSON = function() {
                    return ChainKey.toObject(this, $protobuf.util.toJSONOptions);
                };

                ChainKey.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey";
                };

                return ChainKey;
            })();

            Chain.MessageKey = (function() {

                const MessageKey = function (p) {
                    if (p)
                        for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                };

                MessageKey.prototype.index = 0;
                MessageKey.prototype.cipherKey = $util.newBuffer([]);
                MessageKey.prototype.macKey = $util.newBuffer([]);
                MessageKey.prototype.iv = $util.newBuffer([]);

                MessageKey.create = function(properties) {
                    return new MessageKey(properties);
                };

                MessageKey.encode = function (m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (m.index != null && $Object.hasOwnProperty.call(m, "index"))
                        w.uint32(8).uint32(m.index);
                    if (m.cipherKey != null && $Object.hasOwnProperty.call(m, "cipherKey"))
                        w.uint32(18).bytes(m.cipherKey);
                    if (m.macKey != null && $Object.hasOwnProperty.call(m, "macKey"))
                        w.uint32(26).bytes(m.macKey);
                    if (m.iv != null && $Object.hasOwnProperty.call(m, "iv"))
                        w.uint32(34).bytes(m.iv);
                    if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                        for (var i = 0; i < m.$unknowns.length; ++i)
                            w.raw(m.$unknowns[i]);
                    return w;
                };

                MessageKey.decode = function (r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === $undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey();
                    while (r.pos < c) {
                        var s = r.pos;
                        var t = r.tag();
                        if (t === z) {
                            z = $undefined;
                            break;
                        }
                        var u = t & 7;
                        switch (t >>>= 3) {
                        case 1: {
                                if (u !== 0)
                                    break;
                                m.index = r.uint32();
                                continue;
                            }
                        case 2: {
                                if (u !== 2)
                                    break;
                                m.cipherKey = r.bytes();
                                continue;
                            }
                        case 3: {
                                if (u !== 2)
                                    break;
                                m.macKey = r.bytes();
                                continue;
                            }
                        case 4: {
                                if (u !== 2)
                                    break;
                                m.iv = r.bytes();
                                continue;
                            }
                        }
                        r.skipType(u, q, t);
                        if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                    }
                    if (z !== $undefined)
                        throw $Error("missing end group");
                    return m;
                };

                MessageKey.fromObject = function (d, q) {
                    if (d instanceof $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey)
                        return d;
                    if (!$util.isObject(d))
                        throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey: object expected");
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var m = new $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey();
                    if (d.index != null) {
                        m.index = d.index >>> 0;
                    }
                    if (d.cipherKey != null) {
                        if (typeof d.cipherKey === "string")
                            $util.base64.decode(d.cipherKey, m.cipherKey = $util.newBuffer($util.base64.length(d.cipherKey)), 0);
                        else if (d.cipherKey.length >= 0)
                            m.cipherKey = d.cipherKey;
                    }
                    if (d.macKey != null) {
                        if (typeof d.macKey === "string")
                            $util.base64.decode(d.macKey, m.macKey = $util.newBuffer($util.base64.length(d.macKey)), 0);
                        else if (d.macKey.length >= 0)
                            m.macKey = d.macKey;
                    }
                    if (d.iv != null) {
                        if (typeof d.iv === "string")
                            $util.base64.decode(d.iv, m.iv = $util.newBuffer($util.base64.length(d.iv)), 0);
                        else if (d.iv.length >= 0)
                            m.iv = d.iv;
                    }
                    return m;
                };

                MessageKey.toObject = function (m, o, q) {
                    if (!o)
                        o = {};
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var d = {};
                    if (o.defaults) {
                        d.index = 0;
                        if (o.bytes === $String)
                            d.cipherKey = "";
                        else {
                            d.cipherKey = [];
                            if (o.bytes !== $Array)
                                d.cipherKey = $util.newBuffer(d.cipherKey);
                        }
                        if (o.bytes === $String)
                            d.macKey = "";
                        else {
                            d.macKey = [];
                            if (o.bytes !== $Array)
                                d.macKey = $util.newBuffer(d.macKey);
                        }
                        if (o.bytes === $String)
                            d.iv = "";
                        else {
                            d.iv = [];
                            if (o.bytes !== $Array)
                                d.iv = $util.newBuffer(d.iv);
                        }
                    }
                    if (m.index != null && $Object.hasOwnProperty.call(m, "index")) {
                        d.index = m.index;
                    }
                    if (m.cipherKey != null && $Object.hasOwnProperty.call(m, "cipherKey")) {
                        d.cipherKey = o.bytes === $String ? $util.base64.encode(m.cipherKey, 0, m.cipherKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.cipherKey) : m.cipherKey;
                    }
                    if (m.macKey != null && $Object.hasOwnProperty.call(m, "macKey")) {
                        d.macKey = o.bytes === $String ? $util.base64.encode(m.macKey, 0, m.macKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.macKey) : m.macKey;
                    }
                    if (m.iv != null && $Object.hasOwnProperty.call(m, "iv")) {
                        d.iv = o.bytes === $String ? $util.base64.encode(m.iv, 0, m.iv.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.iv) : m.iv;
                    }
                    return d;
                };

                MessageKey.prototype.toJSON = function() {
                    return MessageKey.toObject(this, $protobuf.util.toJSONOptions);
                };

                MessageKey.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey";
                };

                return MessageKey;
            })();

            return Chain;
        })();

        SessionStructure.PendingKeyExchange = (function() {

            const PendingKeyExchange = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            PendingKeyExchange.prototype.sequence = 0;
            PendingKeyExchange.prototype.localBaseKey = $util.newBuffer([]);
            PendingKeyExchange.prototype.localBaseKeyPrivate = $util.newBuffer([]);
            PendingKeyExchange.prototype.localRatchetKey = $util.newBuffer([]);
            PendingKeyExchange.prototype.localRatchetKeyPrivate = $util.newBuffer([]);
            PendingKeyExchange.prototype.localIdentityKey = $util.newBuffer([]);
            PendingKeyExchange.prototype.localIdentityKeyPrivate = $util.newBuffer([]);

            PendingKeyExchange.create = function(properties) {
                return new PendingKeyExchange(properties);
            };

            PendingKeyExchange.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.sequence != null && $Object.hasOwnProperty.call(m, "sequence"))
                    w.uint32(8).uint32(m.sequence);
                if (m.localBaseKey != null && $Object.hasOwnProperty.call(m, "localBaseKey"))
                    w.uint32(18).bytes(m.localBaseKey);
                if (m.localBaseKeyPrivate != null && $Object.hasOwnProperty.call(m, "localBaseKeyPrivate"))
                    w.uint32(26).bytes(m.localBaseKeyPrivate);
                if (m.localRatchetKey != null && $Object.hasOwnProperty.call(m, "localRatchetKey"))
                    w.uint32(34).bytes(m.localRatchetKey);
                if (m.localRatchetKeyPrivate != null && $Object.hasOwnProperty.call(m, "localRatchetKeyPrivate"))
                    w.uint32(42).bytes(m.localRatchetKeyPrivate);
                if (m.localIdentityKey != null && $Object.hasOwnProperty.call(m, "localIdentityKey"))
                    w.uint32(58).bytes(m.localIdentityKey);
                if (m.localIdentityKeyPrivate != null && $Object.hasOwnProperty.call(m, "localIdentityKeyPrivate"))
                    w.uint32(66).bytes(m.localIdentityKeyPrivate);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            PendingKeyExchange.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange();
                while (r.pos < c) {
                    var s = r.pos;
                    var t = r.tag();
                    if (t === z) {
                        z = $undefined;
                        break;
                    }
                    var u = t & 7;
                    switch (t >>>= 3) {
                    case 1: {
                            if (u !== 0)
                                break;
                            m.sequence = r.uint32();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.localBaseKey = r.bytes();
                            continue;
                        }
                    case 3: {
                            if (u !== 2)
                                break;
                            m.localBaseKeyPrivate = r.bytes();
                            continue;
                        }
                    case 4: {
                            if (u !== 2)
                                break;
                            m.localRatchetKey = r.bytes();
                            continue;
                        }
                    case 5: {
                            if (u !== 2)
                                break;
                            m.localRatchetKeyPrivate = r.bytes();
                            continue;
                        }
                    case 7: {
                            if (u !== 2)
                                break;
                            m.localIdentityKey = r.bytes();
                            continue;
                        }
                    case 8: {
                            if (u !== 2)
                                break;
                            m.localIdentityKeyPrivate = r.bytes();
                            continue;
                        }
                    }
                    r.skipType(u, q, t);
                    if (!r.discardUnknown) {
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                }
                if (z !== $undefined)
                    throw $Error("missing end group");
                return m;
            };

            PendingKeyExchange.fromObject = function (d, q) {
                if (d instanceof $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange();
                if (d.sequence != null) {
                    m.sequence = d.sequence >>> 0;
                }
                if (d.localBaseKey != null) {
                    if (typeof d.localBaseKey === "string")
                        $util.base64.decode(d.localBaseKey, m.localBaseKey = $util.newBuffer($util.base64.length(d.localBaseKey)), 0);
                    else if (d.localBaseKey.length >= 0)
                        m.localBaseKey = d.localBaseKey;
                }
                if (d.localBaseKeyPrivate != null) {
                    if (typeof d.localBaseKeyPrivate === "string")
                        $util.base64.decode(d.localBaseKeyPrivate, m.localBaseKeyPrivate = $util.newBuffer($util.base64.length(d.localBaseKeyPrivate)), 0);
                    else if (d.localBaseKeyPrivate.length >= 0)
                        m.localBaseKeyPrivate = d.localBaseKeyPrivate;
                }
                if (d.localRatchetKey != null) {
                    if (typeof d.localRatchetKey === "string")
                        $util.base64.decode(d.localRatchetKey, m.localRatchetKey = $util.newBuffer($util.base64.length(d.localRatchetKey)), 0);
                    else if (d.localRatchetKey.length >= 0)
                        m.localRatchetKey = d.localRatchetKey;
                }
                if (d.localRatchetKeyPrivate != null) {
                    if (typeof d.localRatchetKeyPrivate === "string")
                        $util.base64.decode(d.localRatchetKeyPrivate, m.localRatchetKeyPrivate = $util.newBuffer($util.base64.length(d.localRatchetKeyPrivate)), 0);
                    else if (d.localRatchetKeyPrivate.length >= 0)
                        m.localRatchetKeyPrivate = d.localRatchetKeyPrivate;
                }
                if (d.localIdentityKey != null) {
                    if (typeof d.localIdentityKey === "string")
                        $util.base64.decode(d.localIdentityKey, m.localIdentityKey = $util.newBuffer($util.base64.length(d.localIdentityKey)), 0);
                    else if (d.localIdentityKey.length >= 0)
                        m.localIdentityKey = d.localIdentityKey;
                }
                if (d.localIdentityKeyPrivate != null) {
                    if (typeof d.localIdentityKeyPrivate === "string")
                        $util.base64.decode(d.localIdentityKeyPrivate, m.localIdentityKeyPrivate = $util.newBuffer($util.base64.length(d.localIdentityKeyPrivate)), 0);
                    else if (d.localIdentityKeyPrivate.length >= 0)
                        m.localIdentityKeyPrivate = d.localIdentityKeyPrivate;
                }
                return m;
            };

            PendingKeyExchange.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.sequence = 0;
                    if (o.bytes === $String)
                        d.localBaseKey = "";
                    else {
                        d.localBaseKey = [];
                        if (o.bytes !== $Array)
                            d.localBaseKey = $util.newBuffer(d.localBaseKey);
                    }
                    if (o.bytes === $String)
                        d.localBaseKeyPrivate = "";
                    else {
                        d.localBaseKeyPrivate = [];
                        if (o.bytes !== $Array)
                            d.localBaseKeyPrivate = $util.newBuffer(d.localBaseKeyPrivate);
                    }
                    if (o.bytes === $String)
                        d.localRatchetKey = "";
                    else {
                        d.localRatchetKey = [];
                        if (o.bytes !== $Array)
                            d.localRatchetKey = $util.newBuffer(d.localRatchetKey);
                    }
                    if (o.bytes === $String)
                        d.localRatchetKeyPrivate = "";
                    else {
                        d.localRatchetKeyPrivate = [];
                        if (o.bytes !== $Array)
                            d.localRatchetKeyPrivate = $util.newBuffer(d.localRatchetKeyPrivate);
                    }
                    if (o.bytes === $String)
                        d.localIdentityKey = "";
                    else {
                        d.localIdentityKey = [];
                        if (o.bytes !== $Array)
                            d.localIdentityKey = $util.newBuffer(d.localIdentityKey);
                    }
                    if (o.bytes === $String)
                        d.localIdentityKeyPrivate = "";
                    else {
                        d.localIdentityKeyPrivate = [];
                        if (o.bytes !== $Array)
                            d.localIdentityKeyPrivate = $util.newBuffer(d.localIdentityKeyPrivate);
                    }
                }
                if (m.sequence != null && $Object.hasOwnProperty.call(m, "sequence")) {
                    d.sequence = m.sequence;
                }
                if (m.localBaseKey != null && $Object.hasOwnProperty.call(m, "localBaseKey")) {
                    d.localBaseKey = o.bytes === $String ? $util.base64.encode(m.localBaseKey, 0, m.localBaseKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.localBaseKey) : m.localBaseKey;
                }
                if (m.localBaseKeyPrivate != null && $Object.hasOwnProperty.call(m, "localBaseKeyPrivate")) {
                    d.localBaseKeyPrivate = o.bytes === $String ? $util.base64.encode(m.localBaseKeyPrivate, 0, m.localBaseKeyPrivate.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.localBaseKeyPrivate) : m.localBaseKeyPrivate;
                }
                if (m.localRatchetKey != null && $Object.hasOwnProperty.call(m, "localRatchetKey")) {
                    d.localRatchetKey = o.bytes === $String ? $util.base64.encode(m.localRatchetKey, 0, m.localRatchetKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.localRatchetKey) : m.localRatchetKey;
                }
                if (m.localRatchetKeyPrivate != null && $Object.hasOwnProperty.call(m, "localRatchetKeyPrivate")) {
                    d.localRatchetKeyPrivate = o.bytes === $String ? $util.base64.encode(m.localRatchetKeyPrivate, 0, m.localRatchetKeyPrivate.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.localRatchetKeyPrivate) : m.localRatchetKeyPrivate;
                }
                if (m.localIdentityKey != null && $Object.hasOwnProperty.call(m, "localIdentityKey")) {
                    d.localIdentityKey = o.bytes === $String ? $util.base64.encode(m.localIdentityKey, 0, m.localIdentityKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.localIdentityKey) : m.localIdentityKey;
                }
                if (m.localIdentityKeyPrivate != null && $Object.hasOwnProperty.call(m, "localIdentityKeyPrivate")) {
                    d.localIdentityKeyPrivate = o.bytes === $String ? $util.base64.encode(m.localIdentityKeyPrivate, 0, m.localIdentityKeyPrivate.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.localIdentityKeyPrivate) : m.localIdentityKeyPrivate;
                }
                return d;
            };

            PendingKeyExchange.prototype.toJSON = function() {
                return PendingKeyExchange.toObject(this, $protobuf.util.toJSONOptions);
            };

            PendingKeyExchange.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange";
            };

            return PendingKeyExchange;
        })();

        SessionStructure.PendingPreKey = (function() {

            const PendingPreKey = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            PendingPreKey.prototype.preKeyId = 0;
            PendingPreKey.prototype.signedPreKeyId = 0;
            PendingPreKey.prototype.baseKey = $util.newBuffer([]);
            PendingPreKey.prototype.kyberPreKeyId = 0;
            PendingPreKey.prototype.kyberCiphertext = $util.newBuffer([]);

            PendingPreKey.create = function(properties) {
                return new PendingPreKey(properties);
            };

            PendingPreKey.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.preKeyId != null && $Object.hasOwnProperty.call(m, "preKeyId"))
                    w.uint32(8).uint32(m.preKeyId);
                if (m.baseKey != null && $Object.hasOwnProperty.call(m, "baseKey"))
                    w.uint32(18).bytes(m.baseKey);
                if (m.signedPreKeyId != null && $Object.hasOwnProperty.call(m, "signedPreKeyId"))
                    w.uint32(24).int32(m.signedPreKeyId);
                if (m.kyberPreKeyId != null && $Object.hasOwnProperty.call(m, "kyberPreKeyId"))
                    w.uint32(32).uint32(m.kyberPreKeyId);
                if (m.kyberCiphertext != null && $Object.hasOwnProperty.call(m, "kyberCiphertext"))
                    w.uint32(42).bytes(m.kyberCiphertext);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            PendingPreKey.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey();
                while (r.pos < c) {
                    var s = r.pos;
                    var t = r.tag();
                    if (t === z) {
                        z = $undefined;
                        break;
                    }
                    var u = t & 7;
                    switch (t >>>= 3) {
                    case 1: {
                            if (u !== 0)
                                break;
                            m.preKeyId = r.uint32();
                            continue;
                        }
                    case 3: {
                            if (u !== 0)
                                break;
                            m.signedPreKeyId = r.int32();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.baseKey = r.bytes();
                            continue;
                        }
                    case 4: {
                            if (u !== 0)
                                break;
                            m.kyberPreKeyId = r.uint32();
                            continue;
                        }
                    case 5: {
                            if (u !== 2)
                                break;
                            m.kyberCiphertext = r.bytes();
                            continue;
                        }
                    }
                    r.skipType(u, q, t);
                    if (!r.discardUnknown) {
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                }
                if (z !== $undefined)
                    throw $Error("missing end group");
                return m;
            };

            PendingPreKey.fromObject = function (d, q) {
                if (d instanceof $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.PendingPreKey: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey();
                if (d.preKeyId != null) {
                    m.preKeyId = d.preKeyId >>> 0;
                }
                if (d.signedPreKeyId != null) {
                    m.signedPreKeyId = d.signedPreKeyId | 0;
                }
                if (d.baseKey != null) {
                    if (typeof d.baseKey === "string")
                        $util.base64.decode(d.baseKey, m.baseKey = $util.newBuffer($util.base64.length(d.baseKey)), 0);
                    else if (d.baseKey.length >= 0)
                        m.baseKey = d.baseKey;
                }
                if (d.kyberPreKeyId != null) {
                    m.kyberPreKeyId = d.kyberPreKeyId >>> 0;
                }
                if (d.kyberCiphertext != null) {
                    if (typeof d.kyberCiphertext === "string")
                        $util.base64.decode(d.kyberCiphertext, m.kyberCiphertext = $util.newBuffer($util.base64.length(d.kyberCiphertext)), 0);
                    else if (d.kyberCiphertext.length >= 0)
                        m.kyberCiphertext = d.kyberCiphertext;
                }
                return m;
            };

            PendingPreKey.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.preKeyId = 0;
                    if (o.bytes === $String)
                        d.baseKey = "";
                    else {
                        d.baseKey = [];
                        if (o.bytes !== $Array)
                            d.baseKey = $util.newBuffer(d.baseKey);
                    }
                    d.signedPreKeyId = 0;
                    d.kyberPreKeyId = 0;
                    if (o.bytes === $String)
                        d.kyberCiphertext = "";
                    else {
                        d.kyberCiphertext = [];
                        if (o.bytes !== $Array)
                            d.kyberCiphertext = $util.newBuffer(d.kyberCiphertext);
                    }
                }
                if (m.preKeyId != null && $Object.hasOwnProperty.call(m, "preKeyId")) {
                    d.preKeyId = m.preKeyId;
                }
                if (m.baseKey != null && $Object.hasOwnProperty.call(m, "baseKey")) {
                    d.baseKey = o.bytes === $String ? $util.base64.encode(m.baseKey, 0, m.baseKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.baseKey) : m.baseKey;
                }
                if (m.signedPreKeyId != null && $Object.hasOwnProperty.call(m, "signedPreKeyId")) {
                    d.signedPreKeyId = m.signedPreKeyId;
                }
                if (m.kyberPreKeyId != null && $Object.hasOwnProperty.call(m, "kyberPreKeyId")) {
                    d.kyberPreKeyId = m.kyberPreKeyId;
                }
                if (m.kyberCiphertext != null && $Object.hasOwnProperty.call(m, "kyberCiphertext")) {
                    d.kyberCiphertext = o.bytes === $String ? $util.base64.encode(m.kyberCiphertext, 0, m.kyberCiphertext.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.kyberCiphertext) : m.kyberCiphertext;
                }
                return d;
            };

            PendingPreKey.prototype.toJSON = function() {
                return PendingPreKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            PendingPreKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/SignalLocalStorageProtocol.SessionStructure.PendingPreKey";
            };

            return PendingPreKey;
        })();

        return SessionStructure;
    })();

    return SignalLocalStorageProtocol;
})();

export {
  $root as default
};
