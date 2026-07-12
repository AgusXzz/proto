/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Array = $util.global.Array, $parseInt = $util.global.parseInt, $Number = $util.global.Number, $BigInt = $util.global.BigInt;

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

export const Cert = $root.Cert = (() => {

    const Cert = {};

    Cert.CertChain = (function() {

        const CertChain = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        CertChain.prototype.leaf = null;
        CertChain.prototype.intermediate = null;

        CertChain.create = function(properties) {
            return new CertChain(properties);
        };

        CertChain.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.leaf != null && $Object.hasOwnProperty.call(m, "leaf"))
                $root.Cert.CertChain.NoiseCertificate.encode(m.leaf, w.uint32(10).fork(), q + 1).ldelim();
            if (m.intermediate != null && $Object.hasOwnProperty.call(m, "intermediate"))
                $root.Cert.CertChain.NoiseCertificate.encode(m.intermediate, w.uint32(18).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        CertChain.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Cert.CertChain();
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
                        m.leaf = $root.Cert.CertChain.NoiseCertificate.decode(r, r.uint32(), $undefined, q + 1, m.leaf);
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.intermediate = $root.Cert.CertChain.NoiseCertificate.decode(r, r.uint32(), $undefined, q + 1, m.intermediate);
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

        CertChain.fromObject = function (d, q) {
            if (d instanceof $root.Cert.CertChain)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Cert.CertChain: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Cert.CertChain();
            if (d.leaf != null) {
                if (!$util.isObject(d.leaf))
                    throw $TypeError(".Cert.CertChain.leaf: object expected");
                m.leaf = $root.Cert.CertChain.NoiseCertificate.fromObject(d.leaf, q + 1);
            }
            if (d.intermediate != null) {
                if (!$util.isObject(d.intermediate))
                    throw $TypeError(".Cert.CertChain.intermediate: object expected");
                m.intermediate = $root.Cert.CertChain.NoiseCertificate.fromObject(d.intermediate, q + 1);
            }
            return m;
        };

        CertChain.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.leaf = null;
                d.intermediate = null;
            }
            if (m.leaf != null && $Object.hasOwnProperty.call(m, "leaf")) {
                d.leaf = $root.Cert.CertChain.NoiseCertificate.toObject(m.leaf, o, q + 1);
            }
            if (m.intermediate != null && $Object.hasOwnProperty.call(m, "intermediate")) {
                d.intermediate = $root.Cert.CertChain.NoiseCertificate.toObject(m.intermediate, o, q + 1);
            }
            return d;
        };

        CertChain.prototype.toJSON = function() {
            return CertChain.toObject(this, $protobuf.util.toJSONOptions);
        };

        CertChain.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Cert.CertChain";
        };

        CertChain.NoiseCertificate = (function() {

            const NoiseCertificate = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            NoiseCertificate.prototype.details = $util.newBuffer([]);
            NoiseCertificate.prototype.signature = $util.newBuffer([]);

            NoiseCertificate.create = function(properties) {
                return new NoiseCertificate(properties);
            };

            NoiseCertificate.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.details != null && $Object.hasOwnProperty.call(m, "details"))
                    w.uint32(10).bytes(m.details);
                if (m.signature != null && $Object.hasOwnProperty.call(m, "signature"))
                    w.uint32(18).bytes(m.signature);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            NoiseCertificate.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Cert.CertChain.NoiseCertificate();
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
                            m.details = r.bytes();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.signature = r.bytes();
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

            NoiseCertificate.fromObject = function (d, q) {
                if (d instanceof $root.Cert.CertChain.NoiseCertificate)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".Cert.CertChain.NoiseCertificate: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.Cert.CertChain.NoiseCertificate();
                if (d.details != null) {
                    if (typeof d.details === "string")
                        $util.base64.decode(d.details, m.details = $util.newBuffer($util.base64.length(d.details)), 0);
                    else if (d.details.length >= 0)
                        m.details = d.details;
                }
                if (d.signature != null) {
                    if (typeof d.signature === "string")
                        $util.base64.decode(d.signature, m.signature = $util.newBuffer($util.base64.length(d.signature)), 0);
                    else if (d.signature.length >= 0)
                        m.signature = d.signature;
                }
                return m;
            };

            NoiseCertificate.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    if (o.bytes === $String)
                        d.details = "";
                    else {
                        d.details = [];
                        if (o.bytes !== $Array)
                            d.details = $util.newBuffer(d.details);
                    }
                    if (o.bytes === $String)
                        d.signature = "";
                    else {
                        d.signature = [];
                        if (o.bytes !== $Array)
                            d.signature = $util.newBuffer(d.signature);
                    }
                }
                if (m.details != null && $Object.hasOwnProperty.call(m, "details")) {
                    d.details = o.bytes === $String ? $util.base64.encode(m.details, 0, m.details.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.details) : m.details;
                }
                if (m.signature != null && $Object.hasOwnProperty.call(m, "signature")) {
                    d.signature = o.bytes === $String ? $util.base64.encode(m.signature, 0, m.signature.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.signature) : m.signature;
                }
                return d;
            };

            NoiseCertificate.prototype.toJSON = function() {
                return NoiseCertificate.toObject(this, $protobuf.util.toJSONOptions);
            };

            NoiseCertificate.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Cert.CertChain.NoiseCertificate";
            };

            NoiseCertificate.Details = (function() {

                const Details = function (p) {
                    if (p)
                        for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                };

                Details.prototype.serial = 0;
                Details.prototype.issuerSerial = 0;
                Details.prototype.key = $util.newBuffer([]);
                Details.prototype.notBefore = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
                Details.prototype.notAfter = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

                Details.create = function(properties) {
                    return new Details(properties);
                };

                Details.encode = function (m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (m.serial != null && $Object.hasOwnProperty.call(m, "serial"))
                        w.uint32(8).uint32(m.serial);
                    if (m.issuerSerial != null && $Object.hasOwnProperty.call(m, "issuerSerial"))
                        w.uint32(16).uint32(m.issuerSerial);
                    if (m.key != null && $Object.hasOwnProperty.call(m, "key"))
                        w.uint32(26).bytes(m.key);
                    if (m.notBefore != null && $Object.hasOwnProperty.call(m, "notBefore"))
                        w.uint32(32).uint64(m.notBefore);
                    if (m.notAfter != null && $Object.hasOwnProperty.call(m, "notAfter"))
                        w.uint32(40).uint64(m.notAfter);
                    if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                        for (var i = 0; i < m.$unknowns.length; ++i)
                            w.raw(m.$unknowns[i]);
                    return w;
                };

                Details.decode = function (r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === $undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Cert.CertChain.NoiseCertificate.Details();
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
                                m.serial = r.uint32();
                                continue;
                            }
                        case 2: {
                                if (u !== 0)
                                    break;
                                m.issuerSerial = r.uint32();
                                continue;
                            }
                        case 3: {
                                if (u !== 2)
                                    break;
                                m.key = r.bytes();
                                continue;
                            }
                        case 4: {
                                if (u !== 0)
                                    break;
                                m.notBefore = r.uint64();
                                continue;
                            }
                        case 5: {
                                if (u !== 0)
                                    break;
                                m.notAfter = r.uint64();
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

                Details.fromObject = function (d, q) {
                    if (d instanceof $root.Cert.CertChain.NoiseCertificate.Details)
                        return d;
                    if (!$util.isObject(d))
                        throw $TypeError(".Cert.CertChain.NoiseCertificate.Details: object expected");
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var m = new $root.Cert.CertChain.NoiseCertificate.Details();
                    if (d.serial != null) {
                        m.serial = d.serial >>> 0;
                    }
                    if (d.issuerSerial != null) {
                        m.issuerSerial = d.issuerSerial >>> 0;
                    }
                    if (d.key != null) {
                        if (typeof d.key === "string")
                            $util.base64.decode(d.key, m.key = $util.newBuffer($util.base64.length(d.key)), 0);
                        else if (d.key.length >= 0)
                            m.key = d.key;
                    }
                    if (d.notBefore != null) {
                        if ($util.Long)
                            m.notBefore = $util.Long.fromValue(d.notBefore, true);
                        else if (typeof d.notBefore === "string")
                            m.notBefore = $parseInt(d.notBefore, 10);
                        else if (typeof d.notBefore === "number")
                            m.notBefore = d.notBefore;
                        else if (typeof d.notBefore === "object")
                            m.notBefore = new $util.LongBits(d.notBefore.low >>> 0, d.notBefore.high >>> 0).toNumber(true);
                    }
                    if (d.notAfter != null) {
                        if ($util.Long)
                            m.notAfter = $util.Long.fromValue(d.notAfter, true);
                        else if (typeof d.notAfter === "string")
                            m.notAfter = $parseInt(d.notAfter, 10);
                        else if (typeof d.notAfter === "number")
                            m.notAfter = d.notAfter;
                        else if (typeof d.notAfter === "object")
                            m.notAfter = new $util.LongBits(d.notAfter.low >>> 0, d.notAfter.high >>> 0).toNumber(true);
                    }
                    return m;
                };

                Details.toObject = function (m, o, q) {
                    if (!o)
                        o = {};
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var d = {};
                    if (o.defaults) {
                        d.serial = 0;
                        d.issuerSerial = 0;
                        if (o.bytes === $String)
                            d.key = "";
                        else {
                            d.key = [];
                            if (o.bytes !== $Array)
                                d.key = $util.newBuffer(d.key);
                        }
                        if ($util.Long) {
                            var n = new $util.Long(0, 0, true);
                            d.notBefore = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                        } else
                            d.notBefore = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                        if ($util.Long) {
                            var n = new $util.Long(0, 0, true);
                            d.notAfter = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                        } else
                            d.notAfter = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                    }
                    if (m.serial != null && $Object.hasOwnProperty.call(m, "serial")) {
                        d.serial = m.serial;
                    }
                    if (m.issuerSerial != null && $Object.hasOwnProperty.call(m, "issuerSerial")) {
                        d.issuerSerial = m.issuerSerial;
                    }
                    if (m.key != null && $Object.hasOwnProperty.call(m, "key")) {
                        d.key = o.bytes === $String ? $util.base64.encode(m.key, 0, m.key.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.key) : m.key;
                    }
                    if (m.notBefore != null && $Object.hasOwnProperty.call(m, "notBefore")) {
                        if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                            d.notBefore = typeof m.notBefore === "number" ? $BigInt(m.notBefore) : $util.Long.fromBits(m.notBefore.low >>> 0, m.notBefore.high >>> 0, true).toBigInt();
                        else if (typeof m.notBefore === "number")
                            d.notBefore = o.longs === $String ? $String(m.notBefore) : m.notBefore;
                        else
                            d.notBefore = o.longs === String ? longToString(m.notBefore, true) : o.longs === Number ? longToNumber(m.notBefore, true) : m.notBefore;
                    }
                    if (m.notAfter != null && $Object.hasOwnProperty.call(m, "notAfter")) {
                        if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                            d.notAfter = typeof m.notAfter === "number" ? $BigInt(m.notAfter) : $util.Long.fromBits(m.notAfter.low >>> 0, m.notAfter.high >>> 0, true).toBigInt();
                        else if (typeof m.notAfter === "number")
                            d.notAfter = o.longs === $String ? $String(m.notAfter) : m.notAfter;
                        else
                            d.notAfter = o.longs === String ? longToString(m.notAfter, true) : o.longs === Number ? longToNumber(m.notAfter, true) : m.notAfter;
                    }
                    return d;
                };

                Details.prototype.toJSON = function() {
                    return Details.toObject(this, $protobuf.util.toJSONOptions);
                };

                Details.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/Cert.CertChain.NoiseCertificate.Details";
                };

                return Details;
            })();

            return NoiseCertificate;
        })();

        return CertChain;
    })();

    Cert.NoiseCertificate = (function() {

        const NoiseCertificate = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        NoiseCertificate.prototype.details = $util.newBuffer([]);
        NoiseCertificate.prototype.signature = $util.newBuffer([]);

        NoiseCertificate.create = function(properties) {
            return new NoiseCertificate(properties);
        };

        NoiseCertificate.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.details != null && $Object.hasOwnProperty.call(m, "details"))
                w.uint32(10).bytes(m.details);
            if (m.signature != null && $Object.hasOwnProperty.call(m, "signature"))
                w.uint32(18).bytes(m.signature);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        NoiseCertificate.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Cert.NoiseCertificate();
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
                        m.details = r.bytes();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.signature = r.bytes();
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

        NoiseCertificate.fromObject = function (d, q) {
            if (d instanceof $root.Cert.NoiseCertificate)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Cert.NoiseCertificate: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Cert.NoiseCertificate();
            if (d.details != null) {
                if (typeof d.details === "string")
                    $util.base64.decode(d.details, m.details = $util.newBuffer($util.base64.length(d.details)), 0);
                else if (d.details.length >= 0)
                    m.details = d.details;
            }
            if (d.signature != null) {
                if (typeof d.signature === "string")
                    $util.base64.decode(d.signature, m.signature = $util.newBuffer($util.base64.length(d.signature)), 0);
                else if (d.signature.length >= 0)
                    m.signature = d.signature;
            }
            return m;
        };

        NoiseCertificate.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                if (o.bytes === $String)
                    d.details = "";
                else {
                    d.details = [];
                    if (o.bytes !== $Array)
                        d.details = $util.newBuffer(d.details);
                }
                if (o.bytes === $String)
                    d.signature = "";
                else {
                    d.signature = [];
                    if (o.bytes !== $Array)
                        d.signature = $util.newBuffer(d.signature);
                }
            }
            if (m.details != null && $Object.hasOwnProperty.call(m, "details")) {
                d.details = o.bytes === $String ? $util.base64.encode(m.details, 0, m.details.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.details) : m.details;
            }
            if (m.signature != null && $Object.hasOwnProperty.call(m, "signature")) {
                d.signature = o.bytes === $String ? $util.base64.encode(m.signature, 0, m.signature.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.signature) : m.signature;
            }
            return d;
        };

        NoiseCertificate.prototype.toJSON = function() {
            return NoiseCertificate.toObject(this, $protobuf.util.toJSONOptions);
        };

        NoiseCertificate.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Cert.NoiseCertificate";
        };

        NoiseCertificate.Details = (function() {

            const Details = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            Details.prototype.serial = 0;
            Details.prototype.issuer = "";
            Details.prototype.expires = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            Details.prototype.subject = "";
            Details.prototype.key = $util.newBuffer([]);

            Details.create = function(properties) {
                return new Details(properties);
            };

            Details.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.serial != null && $Object.hasOwnProperty.call(m, "serial"))
                    w.uint32(8).uint32(m.serial);
                if (m.issuer != null && $Object.hasOwnProperty.call(m, "issuer"))
                    w.uint32(18).string(m.issuer);
                if (m.expires != null && $Object.hasOwnProperty.call(m, "expires"))
                    w.uint32(24).uint64(m.expires);
                if (m.subject != null && $Object.hasOwnProperty.call(m, "subject"))
                    w.uint32(34).string(m.subject);
                if (m.key != null && $Object.hasOwnProperty.call(m, "key"))
                    w.uint32(42).bytes(m.key);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            Details.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Cert.NoiseCertificate.Details();
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
                            m.serial = r.uint32();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.issuer = r.string();
                            continue;
                        }
                    case 3: {
                            if (u !== 0)
                                break;
                            m.expires = r.uint64();
                            continue;
                        }
                    case 4: {
                            if (u !== 2)
                                break;
                            m.subject = r.string();
                            continue;
                        }
                    case 5: {
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

            Details.fromObject = function (d, q) {
                if (d instanceof $root.Cert.NoiseCertificate.Details)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".Cert.NoiseCertificate.Details: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.Cert.NoiseCertificate.Details();
                if (d.serial != null) {
                    m.serial = d.serial >>> 0;
                }
                if (d.issuer != null) {
                    m.issuer = $String(d.issuer);
                }
                if (d.expires != null) {
                    if ($util.Long)
                        m.expires = $util.Long.fromValue(d.expires, true);
                    else if (typeof d.expires === "string")
                        m.expires = $parseInt(d.expires, 10);
                    else if (typeof d.expires === "number")
                        m.expires = d.expires;
                    else if (typeof d.expires === "object")
                        m.expires = new $util.LongBits(d.expires.low >>> 0, d.expires.high >>> 0).toNumber(true);
                }
                if (d.subject != null) {
                    m.subject = $String(d.subject);
                }
                if (d.key != null) {
                    if (typeof d.key === "string")
                        $util.base64.decode(d.key, m.key = $util.newBuffer($util.base64.length(d.key)), 0);
                    else if (d.key.length >= 0)
                        m.key = d.key;
                }
                return m;
            };

            Details.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.serial = 0;
                    d.issuer = "";
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, true);
                        d.expires = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                    } else
                        d.expires = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                    d.subject = "";
                    if (o.bytes === $String)
                        d.key = "";
                    else {
                        d.key = [];
                        if (o.bytes !== $Array)
                            d.key = $util.newBuffer(d.key);
                    }
                }
                if (m.serial != null && $Object.hasOwnProperty.call(m, "serial")) {
                    d.serial = m.serial;
                }
                if (m.issuer != null && $Object.hasOwnProperty.call(m, "issuer")) {
                    d.issuer = m.issuer;
                }
                if (m.expires != null && $Object.hasOwnProperty.call(m, "expires")) {
                    if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                        d.expires = typeof m.expires === "number" ? $BigInt(m.expires) : $util.Long.fromBits(m.expires.low >>> 0, m.expires.high >>> 0, true).toBigInt();
                    else if (typeof m.expires === "number")
                        d.expires = o.longs === $String ? $String(m.expires) : m.expires;
                    else
                        d.expires = o.longs === String ? longToString(m.expires, true) : o.longs === Number ? longToNumber(m.expires, true) : m.expires;
                }
                if (m.subject != null && $Object.hasOwnProperty.call(m, "subject")) {
                    d.subject = m.subject;
                }
                if (m.key != null && $Object.hasOwnProperty.call(m, "key")) {
                    d.key = o.bytes === $String ? $util.base64.encode(m.key, 0, m.key.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.key) : m.key;
                }
                return d;
            };

            Details.prototype.toJSON = function() {
                return Details.toObject(this, $protobuf.util.toJSONOptions);
            };

            Details.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Cert.NoiseCertificate.Details";
            };

            return Details;
        })();

        return NoiseCertificate;
    })();

    return Cert;
})();

export {
  $root as default
};
