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

export const Adv = $root.Adv = (() => {

    const Adv = {};

    Adv.ADVSignedDeviceIdentityHMAC = (function() {

        const ADVSignedDeviceIdentityHMAC = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        ADVSignedDeviceIdentityHMAC.prototype.details = $util.newBuffer([]);
        ADVSignedDeviceIdentityHMAC.prototype.hmac = $util.newBuffer([]);
        ADVSignedDeviceIdentityHMAC.prototype.accountType = 0;

        ADVSignedDeviceIdentityHMAC.create = function(properties) {
            return new ADVSignedDeviceIdentityHMAC(properties);
        };

        ADVSignedDeviceIdentityHMAC.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.details != null && $Object.hasOwnProperty.call(m, "details"))
                w.uint32(10).bytes(m.details);
            if (m.hmac != null && $Object.hasOwnProperty.call(m, "hmac"))
                w.uint32(18).bytes(m.hmac);
            if (m.accountType != null && $Object.hasOwnProperty.call(m, "accountType"))
                w.uint32(24).int32(m.accountType);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        ADVSignedDeviceIdentityHMAC.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Adv.ADVSignedDeviceIdentityHMAC(), v;
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
                        m.hmac = r.bytes();
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.Adv.ADVEncryptionType[v] !== $undefined) {
                            m.accountType = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
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

        ADVSignedDeviceIdentityHMAC.fromObject = function (d, q) {
            if (d instanceof $root.Adv.ADVSignedDeviceIdentityHMAC)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Adv.ADVSignedDeviceIdentityHMAC: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Adv.ADVSignedDeviceIdentityHMAC();
            if (d.details != null) {
                if (typeof d.details === "string")
                    $util.base64.decode(d.details, m.details = $util.newBuffer($util.base64.length(d.details)), 0);
                else if (d.details.length >= 0)
                    m.details = d.details;
            }
            if (d.hmac != null) {
                if (typeof d.hmac === "string")
                    $util.base64.decode(d.hmac, m.hmac = $util.newBuffer($util.base64.length(d.hmac)), 0);
                else if (d.hmac.length >= 0)
                    m.hmac = d.hmac;
            }
            switch (d.accountType) {
            case "E2EE":
            case 0:
                m.accountType = 0;
                break;
            case "HOSTED":
            case 1:
                m.accountType = 1;
                break;
            case "NON_E2EE":
            case 2:
                m.accountType = 2;
                break;
            default:
            }
            return m;
        };

        ADVSignedDeviceIdentityHMAC.toObject = function (m, o, q) {
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
                    d.hmac = "";
                else {
                    d.hmac = [];
                    if (o.bytes !== $Array)
                        d.hmac = $util.newBuffer(d.hmac);
                }
                d.accountType = o.enums === $String ? "E2EE" : 0;
            }
            if (m.details != null && $Object.hasOwnProperty.call(m, "details")) {
                d.details = o.bytes === $String ? $util.base64.encode(m.details, 0, m.details.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.details) : m.details;
            }
            if (m.hmac != null && $Object.hasOwnProperty.call(m, "hmac")) {
                d.hmac = o.bytes === $String ? $util.base64.encode(m.hmac, 0, m.hmac.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.hmac) : m.hmac;
            }
            if (m.accountType != null && $Object.hasOwnProperty.call(m, "accountType")) {
                d.accountType = o.enums === $String ? $root.Adv.ADVEncryptionType[m.accountType] === $undefined ? m.accountType : $root.Adv.ADVEncryptionType[m.accountType] : m.accountType;
            }
            return d;
        };

        ADVSignedDeviceIdentityHMAC.prototype.toJSON = function() {
            return ADVSignedDeviceIdentityHMAC.toObject(this, $protobuf.util.toJSONOptions);
        };

        ADVSignedDeviceIdentityHMAC.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Adv.ADVSignedDeviceIdentityHMAC";
        };

        return ADVSignedDeviceIdentityHMAC;
    })();

    Adv.ADVSignedDeviceIdentity = (function() {

        const ADVSignedDeviceIdentity = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        ADVSignedDeviceIdentity.prototype.details = $util.newBuffer([]);
        ADVSignedDeviceIdentity.prototype.accountSignatureKey = $util.newBuffer([]);
        ADVSignedDeviceIdentity.prototype.accountSignature = $util.newBuffer([]);
        ADVSignedDeviceIdentity.prototype.deviceSignature = $util.newBuffer([]);

        ADVSignedDeviceIdentity.create = function(properties) {
            return new ADVSignedDeviceIdentity(properties);
        };

        ADVSignedDeviceIdentity.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.details != null && $Object.hasOwnProperty.call(m, "details"))
                w.uint32(10).bytes(m.details);
            if (m.accountSignatureKey != null && $Object.hasOwnProperty.call(m, "accountSignatureKey"))
                w.uint32(18).bytes(m.accountSignatureKey);
            if (m.accountSignature != null && $Object.hasOwnProperty.call(m, "accountSignature"))
                w.uint32(26).bytes(m.accountSignature);
            if (m.deviceSignature != null && $Object.hasOwnProperty.call(m, "deviceSignature"))
                w.uint32(34).bytes(m.deviceSignature);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        ADVSignedDeviceIdentity.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Adv.ADVSignedDeviceIdentity();
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
                        m.accountSignatureKey = r.bytes();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.accountSignature = r.bytes();
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.deviceSignature = r.bytes();
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

        ADVSignedDeviceIdentity.fromObject = function (d, q) {
            if (d instanceof $root.Adv.ADVSignedDeviceIdentity)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Adv.ADVSignedDeviceIdentity: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Adv.ADVSignedDeviceIdentity();
            if (d.details != null) {
                if (typeof d.details === "string")
                    $util.base64.decode(d.details, m.details = $util.newBuffer($util.base64.length(d.details)), 0);
                else if (d.details.length >= 0)
                    m.details = d.details;
            }
            if (d.accountSignatureKey != null) {
                if (typeof d.accountSignatureKey === "string")
                    $util.base64.decode(d.accountSignatureKey, m.accountSignatureKey = $util.newBuffer($util.base64.length(d.accountSignatureKey)), 0);
                else if (d.accountSignatureKey.length >= 0)
                    m.accountSignatureKey = d.accountSignatureKey;
            }
            if (d.accountSignature != null) {
                if (typeof d.accountSignature === "string")
                    $util.base64.decode(d.accountSignature, m.accountSignature = $util.newBuffer($util.base64.length(d.accountSignature)), 0);
                else if (d.accountSignature.length >= 0)
                    m.accountSignature = d.accountSignature;
            }
            if (d.deviceSignature != null) {
                if (typeof d.deviceSignature === "string")
                    $util.base64.decode(d.deviceSignature, m.deviceSignature = $util.newBuffer($util.base64.length(d.deviceSignature)), 0);
                else if (d.deviceSignature.length >= 0)
                    m.deviceSignature = d.deviceSignature;
            }
            return m;
        };

        ADVSignedDeviceIdentity.toObject = function (m, o, q) {
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
                    d.accountSignatureKey = "";
                else {
                    d.accountSignatureKey = [];
                    if (o.bytes !== $Array)
                        d.accountSignatureKey = $util.newBuffer(d.accountSignatureKey);
                }
                if (o.bytes === $String)
                    d.accountSignature = "";
                else {
                    d.accountSignature = [];
                    if (o.bytes !== $Array)
                        d.accountSignature = $util.newBuffer(d.accountSignature);
                }
                if (o.bytes === $String)
                    d.deviceSignature = "";
                else {
                    d.deviceSignature = [];
                    if (o.bytes !== $Array)
                        d.deviceSignature = $util.newBuffer(d.deviceSignature);
                }
            }
            if (m.details != null && $Object.hasOwnProperty.call(m, "details")) {
                d.details = o.bytes === $String ? $util.base64.encode(m.details, 0, m.details.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.details) : m.details;
            }
            if (m.accountSignatureKey != null && $Object.hasOwnProperty.call(m, "accountSignatureKey")) {
                d.accountSignatureKey = o.bytes === $String ? $util.base64.encode(m.accountSignatureKey, 0, m.accountSignatureKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.accountSignatureKey) : m.accountSignatureKey;
            }
            if (m.accountSignature != null && $Object.hasOwnProperty.call(m, "accountSignature")) {
                d.accountSignature = o.bytes === $String ? $util.base64.encode(m.accountSignature, 0, m.accountSignature.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.accountSignature) : m.accountSignature;
            }
            if (m.deviceSignature != null && $Object.hasOwnProperty.call(m, "deviceSignature")) {
                d.deviceSignature = o.bytes === $String ? $util.base64.encode(m.deviceSignature, 0, m.deviceSignature.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.deviceSignature) : m.deviceSignature;
            }
            return d;
        };

        ADVSignedDeviceIdentity.prototype.toJSON = function() {
            return ADVSignedDeviceIdentity.toObject(this, $protobuf.util.toJSONOptions);
        };

        ADVSignedDeviceIdentity.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Adv.ADVSignedDeviceIdentity";
        };

        return ADVSignedDeviceIdentity;
    })();

    Adv.ADVDeviceIdentity = (function() {

        const ADVDeviceIdentity = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        ADVDeviceIdentity.prototype.rawId = 0;
        ADVDeviceIdentity.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ADVDeviceIdentity.prototype.keyIndex = 0;
        ADVDeviceIdentity.prototype.accountType = 0;
        ADVDeviceIdentity.prototype.deviceType = 0;

        ADVDeviceIdentity.create = function(properties) {
            return new ADVDeviceIdentity(properties);
        };

        ADVDeviceIdentity.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.rawId != null && $Object.hasOwnProperty.call(m, "rawId"))
                w.uint32(8).uint32(m.rawId);
            if (m.timestamp != null && $Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(16).uint64(m.timestamp);
            if (m.keyIndex != null && $Object.hasOwnProperty.call(m, "keyIndex"))
                w.uint32(24).uint32(m.keyIndex);
            if (m.accountType != null && $Object.hasOwnProperty.call(m, "accountType"))
                w.uint32(32).int32(m.accountType);
            if (m.deviceType != null && $Object.hasOwnProperty.call(m, "deviceType"))
                w.uint32(40).int32(m.deviceType);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        ADVDeviceIdentity.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Adv.ADVDeviceIdentity(), v;
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
                        m.rawId = r.uint32();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.timestamp = r.uint64();
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        m.keyIndex = r.uint32();
                        continue;
                    }
                case 4: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.Adv.ADVEncryptionType[v] !== $undefined) {
                            m.accountType = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 5: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.Adv.ADVEncryptionType[v] !== $undefined) {
                            m.deviceType = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
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

        ADVDeviceIdentity.fromObject = function (d, q) {
            if (d instanceof $root.Adv.ADVDeviceIdentity)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Adv.ADVDeviceIdentity: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Adv.ADVDeviceIdentity();
            if (d.rawId != null) {
                m.rawId = d.rawId >>> 0;
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
            if (d.keyIndex != null) {
                m.keyIndex = d.keyIndex >>> 0;
            }
            switch (d.accountType) {
            case "E2EE":
            case 0:
                m.accountType = 0;
                break;
            case "HOSTED":
            case 1:
                m.accountType = 1;
                break;
            case "NON_E2EE":
            case 2:
                m.accountType = 2;
                break;
            default:
            }
            switch (d.deviceType) {
            case "E2EE":
            case 0:
                m.deviceType = 0;
                break;
            case "HOSTED":
            case 1:
                m.deviceType = 1;
                break;
            case "NON_E2EE":
            case 2:
                m.deviceType = 2;
                break;
            default:
            }
            return m;
        };

        ADVDeviceIdentity.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.rawId = 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, true);
                    d.timestamp = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.timestamp = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.keyIndex = 0;
                d.accountType = o.enums === $String ? "E2EE" : 0;
                d.deviceType = o.enums === $String ? "E2EE" : 0;
            }
            if (m.rawId != null && $Object.hasOwnProperty.call(m, "rawId")) {
                d.rawId = m.rawId;
            }
            if (m.timestamp != null && $Object.hasOwnProperty.call(m, "timestamp")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.timestamp = typeof m.timestamp === "number" ? $BigInt(m.timestamp) : $util.Long.fromBits(m.timestamp.low >>> 0, m.timestamp.high >>> 0, true).toBigInt();
                else if (typeof m.timestamp === "number")
                    d.timestamp = o.longs === $String ? $String(m.timestamp) : m.timestamp;
                else
                    d.timestamp = o.longs === String ? longToString(m.timestamp, true) : o.longs === Number ? longToNumber(m.timestamp, true) : m.timestamp;
            }
            if (m.keyIndex != null && $Object.hasOwnProperty.call(m, "keyIndex")) {
                d.keyIndex = m.keyIndex;
            }
            if (m.accountType != null && $Object.hasOwnProperty.call(m, "accountType")) {
                d.accountType = o.enums === $String ? $root.Adv.ADVEncryptionType[m.accountType] === $undefined ? m.accountType : $root.Adv.ADVEncryptionType[m.accountType] : m.accountType;
            }
            if (m.deviceType != null && $Object.hasOwnProperty.call(m, "deviceType")) {
                d.deviceType = o.enums === $String ? $root.Adv.ADVEncryptionType[m.deviceType] === $undefined ? m.deviceType : $root.Adv.ADVEncryptionType[m.deviceType] : m.deviceType;
            }
            return d;
        };

        ADVDeviceIdentity.prototype.toJSON = function() {
            return ADVDeviceIdentity.toObject(this, $protobuf.util.toJSONOptions);
        };

        ADVDeviceIdentity.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Adv.ADVDeviceIdentity";
        };

        return ADVDeviceIdentity;
    })();

    Adv.ADVSignedKeyIndexList = (function() {

        const ADVSignedKeyIndexList = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        ADVSignedKeyIndexList.prototype.details = $util.newBuffer([]);
        ADVSignedKeyIndexList.prototype.accountSignature = $util.newBuffer([]);
        ADVSignedKeyIndexList.prototype.accountSignatureKey = $util.newBuffer([]);

        ADVSignedKeyIndexList.create = function(properties) {
            return new ADVSignedKeyIndexList(properties);
        };

        ADVSignedKeyIndexList.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.details != null && $Object.hasOwnProperty.call(m, "details"))
                w.uint32(10).bytes(m.details);
            if (m.accountSignature != null && $Object.hasOwnProperty.call(m, "accountSignature"))
                w.uint32(18).bytes(m.accountSignature);
            if (m.accountSignatureKey != null && $Object.hasOwnProperty.call(m, "accountSignatureKey"))
                w.uint32(26).bytes(m.accountSignatureKey);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        ADVSignedKeyIndexList.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Adv.ADVSignedKeyIndexList();
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
                        m.accountSignature = r.bytes();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.accountSignatureKey = r.bytes();
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

        ADVSignedKeyIndexList.fromObject = function (d, q) {
            if (d instanceof $root.Adv.ADVSignedKeyIndexList)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Adv.ADVSignedKeyIndexList: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Adv.ADVSignedKeyIndexList();
            if (d.details != null) {
                if (typeof d.details === "string")
                    $util.base64.decode(d.details, m.details = $util.newBuffer($util.base64.length(d.details)), 0);
                else if (d.details.length >= 0)
                    m.details = d.details;
            }
            if (d.accountSignature != null) {
                if (typeof d.accountSignature === "string")
                    $util.base64.decode(d.accountSignature, m.accountSignature = $util.newBuffer($util.base64.length(d.accountSignature)), 0);
                else if (d.accountSignature.length >= 0)
                    m.accountSignature = d.accountSignature;
            }
            if (d.accountSignatureKey != null) {
                if (typeof d.accountSignatureKey === "string")
                    $util.base64.decode(d.accountSignatureKey, m.accountSignatureKey = $util.newBuffer($util.base64.length(d.accountSignatureKey)), 0);
                else if (d.accountSignatureKey.length >= 0)
                    m.accountSignatureKey = d.accountSignatureKey;
            }
            return m;
        };

        ADVSignedKeyIndexList.toObject = function (m, o, q) {
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
                    d.accountSignature = "";
                else {
                    d.accountSignature = [];
                    if (o.bytes !== $Array)
                        d.accountSignature = $util.newBuffer(d.accountSignature);
                }
                if (o.bytes === $String)
                    d.accountSignatureKey = "";
                else {
                    d.accountSignatureKey = [];
                    if (o.bytes !== $Array)
                        d.accountSignatureKey = $util.newBuffer(d.accountSignatureKey);
                }
            }
            if (m.details != null && $Object.hasOwnProperty.call(m, "details")) {
                d.details = o.bytes === $String ? $util.base64.encode(m.details, 0, m.details.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.details) : m.details;
            }
            if (m.accountSignature != null && $Object.hasOwnProperty.call(m, "accountSignature")) {
                d.accountSignature = o.bytes === $String ? $util.base64.encode(m.accountSignature, 0, m.accountSignature.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.accountSignature) : m.accountSignature;
            }
            if (m.accountSignatureKey != null && $Object.hasOwnProperty.call(m, "accountSignatureKey")) {
                d.accountSignatureKey = o.bytes === $String ? $util.base64.encode(m.accountSignatureKey, 0, m.accountSignatureKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.accountSignatureKey) : m.accountSignatureKey;
            }
            return d;
        };

        ADVSignedKeyIndexList.prototype.toJSON = function() {
            return ADVSignedKeyIndexList.toObject(this, $protobuf.util.toJSONOptions);
        };

        ADVSignedKeyIndexList.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Adv.ADVSignedKeyIndexList";
        };

        return ADVSignedKeyIndexList;
    })();

    Adv.ADVKeyIndexList = (function() {

        const ADVKeyIndexList = function (p) {
            this.validIndexes = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        ADVKeyIndexList.prototype.rawId = 0;
        ADVKeyIndexList.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ADVKeyIndexList.prototype.currentIndex = 0;
        ADVKeyIndexList.prototype.validIndexes = $util.emptyArray;
        ADVKeyIndexList.prototype.accountType = 0;

        ADVKeyIndexList.create = function(properties) {
            return new ADVKeyIndexList(properties);
        };

        ADVKeyIndexList.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.rawId != null && $Object.hasOwnProperty.call(m, "rawId"))
                w.uint32(8).uint32(m.rawId);
            if (m.timestamp != null && $Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(16).uint64(m.timestamp);
            if (m.currentIndex != null && $Object.hasOwnProperty.call(m, "currentIndex"))
                w.uint32(24).uint32(m.currentIndex);
            if (m.validIndexes != null && m.validIndexes.length) {
                w.uint32(34).uint32s(m.validIndexes);
            }
            if (m.accountType != null && $Object.hasOwnProperty.call(m, "accountType"))
                w.uint32(40).int32(m.accountType);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        ADVKeyIndexList.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Adv.ADVKeyIndexList(), v;
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
                        m.rawId = r.uint32();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.timestamp = r.uint64();
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        m.currentIndex = r.uint32();
                        continue;
                    }
                case 4: {
                        if (u === 2) {
                            if (!(m.validIndexes && m.validIndexes.length))
                                m.validIndexes = [];
                            r.uint32s(m.validIndexes);
                            continue;
                        }
                        if (u !== 0)
                            break;
                        if (!(m.validIndexes && m.validIndexes.length))
                            m.validIndexes = [];
                        m.validIndexes.push(r.uint32());
                        continue;
                    }
                case 5: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.Adv.ADVEncryptionType[v] !== $undefined) {
                            m.accountType = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
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

        ADVKeyIndexList.fromObject = function (d, q) {
            if (d instanceof $root.Adv.ADVKeyIndexList)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Adv.ADVKeyIndexList: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Adv.ADVKeyIndexList();
            if (d.rawId != null) {
                m.rawId = d.rawId >>> 0;
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
            if (d.currentIndex != null) {
                m.currentIndex = d.currentIndex >>> 0;
            }
            if (d.validIndexes) {
                if (!$Array.isArray(d.validIndexes))
                    throw $TypeError(".Adv.ADVKeyIndexList.validIndexes: array expected");
                m.validIndexes = $Array(d.validIndexes.length);
                for (var i = 0; i < d.validIndexes.length; ++i) {
                    m.validIndexes[i] = d.validIndexes[i] >>> 0;
                }
            }
            switch (d.accountType) {
            case "E2EE":
            case 0:
                m.accountType = 0;
                break;
            case "HOSTED":
            case 1:
                m.accountType = 1;
                break;
            case "NON_E2EE":
            case 2:
                m.accountType = 2;
                break;
            default:
            }
            return m;
        };

        ADVKeyIndexList.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.validIndexes = [];
            }
            if (o.defaults) {
                d.rawId = 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, true);
                    d.timestamp = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.timestamp = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.currentIndex = 0;
                d.accountType = o.enums === $String ? "E2EE" : 0;
            }
            if (m.rawId != null && $Object.hasOwnProperty.call(m, "rawId")) {
                d.rawId = m.rawId;
            }
            if (m.timestamp != null && $Object.hasOwnProperty.call(m, "timestamp")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.timestamp = typeof m.timestamp === "number" ? $BigInt(m.timestamp) : $util.Long.fromBits(m.timestamp.low >>> 0, m.timestamp.high >>> 0, true).toBigInt();
                else if (typeof m.timestamp === "number")
                    d.timestamp = o.longs === $String ? $String(m.timestamp) : m.timestamp;
                else
                    d.timestamp = o.longs === String ? longToString(m.timestamp, true) : o.longs === Number ? longToNumber(m.timestamp, true) : m.timestamp;
            }
            if (m.currentIndex != null && $Object.hasOwnProperty.call(m, "currentIndex")) {
                d.currentIndex = m.currentIndex;
            }
            if (m.validIndexes && m.validIndexes.length) {
                d.validIndexes = $Array(m.validIndexes.length);
                for (var j = 0; j < m.validIndexes.length; ++j) {
                    d.validIndexes[j] = m.validIndexes[j];
                }
            }
            if (m.accountType != null && $Object.hasOwnProperty.call(m, "accountType")) {
                d.accountType = o.enums === $String ? $root.Adv.ADVEncryptionType[m.accountType] === $undefined ? m.accountType : $root.Adv.ADVEncryptionType[m.accountType] : m.accountType;
            }
            return d;
        };

        ADVKeyIndexList.prototype.toJSON = function() {
            return ADVKeyIndexList.toObject(this, $protobuf.util.toJSONOptions);
        };

        ADVKeyIndexList.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Adv.ADVKeyIndexList";
        };

        return ADVKeyIndexList;
    })();

    Adv.ADVEncryptionType = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "E2EE"] = 0;
        values[valuesById[1] = "HOSTED"] = 1;
        values[valuesById[2] = "NON_E2EE"] = 2;
        return values;
    })();

    return Adv;
})();

export {
  $root as default
};
