/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Array = $util.global.Array;

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

export const SignalWhisperTextProtocol = $root.SignalWhisperTextProtocol = (() => {

    const SignalWhisperTextProtocol = {};

    SignalWhisperTextProtocol.DeviceConsistencyCodeMessage = (function() {

        const DeviceConsistencyCodeMessage = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        DeviceConsistencyCodeMessage.prototype.generation = 0;
        DeviceConsistencyCodeMessage.prototype.signature = $util.newBuffer([]);

        DeviceConsistencyCodeMessage.create = function(properties) {
            return new DeviceConsistencyCodeMessage(properties);
        };

        DeviceConsistencyCodeMessage.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.generation != null && $Object.hasOwnProperty.call(m, "generation"))
                w.uint32(8).uint32(m.generation);
            if (m.signature != null && $Object.hasOwnProperty.call(m, "signature"))
                w.uint32(18).bytes(m.signature);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        DeviceConsistencyCodeMessage.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalWhisperTextProtocol.DeviceConsistencyCodeMessage();
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
                        m.generation = r.uint32();
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

        DeviceConsistencyCodeMessage.fromObject = function (d, q) {
            if (d instanceof $root.SignalWhisperTextProtocol.DeviceConsistencyCodeMessage)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".SignalWhisperTextProtocol.DeviceConsistencyCodeMessage: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.SignalWhisperTextProtocol.DeviceConsistencyCodeMessage();
            if (d.generation != null) {
                m.generation = d.generation >>> 0;
            }
            if (d.signature != null) {
                if (typeof d.signature === "string")
                    $util.base64.decode(d.signature, m.signature = $util.newBuffer($util.base64.length(d.signature)), 0);
                else if (d.signature.length >= 0)
                    m.signature = d.signature;
            }
            return m;
        };

        DeviceConsistencyCodeMessage.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.generation = 0;
                if (o.bytes === $String)
                    d.signature = "";
                else {
                    d.signature = [];
                    if (o.bytes !== $Array)
                        d.signature = $util.newBuffer(d.signature);
                }
            }
            if (m.generation != null && $Object.hasOwnProperty.call(m, "generation")) {
                d.generation = m.generation;
            }
            if (m.signature != null && $Object.hasOwnProperty.call(m, "signature")) {
                d.signature = o.bytes === $String ? $util.base64.encode(m.signature, 0, m.signature.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.signature) : m.signature;
            }
            return d;
        };

        DeviceConsistencyCodeMessage.prototype.toJSON = function() {
            return DeviceConsistencyCodeMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        DeviceConsistencyCodeMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalWhisperTextProtocol.DeviceConsistencyCodeMessage";
        };

        return DeviceConsistencyCodeMessage;
    })();

    SignalWhisperTextProtocol.SenderKeyDistributionMessage = (function() {

        const SenderKeyDistributionMessage = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SenderKeyDistributionMessage.prototype.id = 0;
        SenderKeyDistributionMessage.prototype.iteration = 0;
        SenderKeyDistributionMessage.prototype.chainKey = $util.newBuffer([]);
        SenderKeyDistributionMessage.prototype.signingKey = $util.newBuffer([]);

        SenderKeyDistributionMessage.create = function(properties) {
            return new SenderKeyDistributionMessage(properties);
        };

        SenderKeyDistributionMessage.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.id != null && $Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).uint32(m.id);
            if (m.iteration != null && $Object.hasOwnProperty.call(m, "iteration"))
                w.uint32(16).uint32(m.iteration);
            if (m.chainKey != null && $Object.hasOwnProperty.call(m, "chainKey"))
                w.uint32(26).bytes(m.chainKey);
            if (m.signingKey != null && $Object.hasOwnProperty.call(m, "signingKey"))
                w.uint32(34).bytes(m.signingKey);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SenderKeyDistributionMessage.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalWhisperTextProtocol.SenderKeyDistributionMessage();
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
                        if (u !== 0)
                            break;
                        m.iteration = r.uint32();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.chainKey = r.bytes();
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.signingKey = r.bytes();
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

        SenderKeyDistributionMessage.fromObject = function (d, q) {
            if (d instanceof $root.SignalWhisperTextProtocol.SenderKeyDistributionMessage)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".SignalWhisperTextProtocol.SenderKeyDistributionMessage: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.SignalWhisperTextProtocol.SenderKeyDistributionMessage();
            if (d.id != null) {
                m.id = d.id >>> 0;
            }
            if (d.iteration != null) {
                m.iteration = d.iteration >>> 0;
            }
            if (d.chainKey != null) {
                if (typeof d.chainKey === "string")
                    $util.base64.decode(d.chainKey, m.chainKey = $util.newBuffer($util.base64.length(d.chainKey)), 0);
                else if (d.chainKey.length >= 0)
                    m.chainKey = d.chainKey;
            }
            if (d.signingKey != null) {
                if (typeof d.signingKey === "string")
                    $util.base64.decode(d.signingKey, m.signingKey = $util.newBuffer($util.base64.length(d.signingKey)), 0);
                else if (d.signingKey.length >= 0)
                    m.signingKey = d.signingKey;
            }
            return m;
        };

        SenderKeyDistributionMessage.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.id = 0;
                d.iteration = 0;
                if (o.bytes === $String)
                    d.chainKey = "";
                else {
                    d.chainKey = [];
                    if (o.bytes !== $Array)
                        d.chainKey = $util.newBuffer(d.chainKey);
                }
                if (o.bytes === $String)
                    d.signingKey = "";
                else {
                    d.signingKey = [];
                    if (o.bytes !== $Array)
                        d.signingKey = $util.newBuffer(d.signingKey);
                }
            }
            if (m.id != null && $Object.hasOwnProperty.call(m, "id")) {
                d.id = m.id;
            }
            if (m.iteration != null && $Object.hasOwnProperty.call(m, "iteration")) {
                d.iteration = m.iteration;
            }
            if (m.chainKey != null && $Object.hasOwnProperty.call(m, "chainKey")) {
                d.chainKey = o.bytes === $String ? $util.base64.encode(m.chainKey, 0, m.chainKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.chainKey) : m.chainKey;
            }
            if (m.signingKey != null && $Object.hasOwnProperty.call(m, "signingKey")) {
                d.signingKey = o.bytes === $String ? $util.base64.encode(m.signingKey, 0, m.signingKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.signingKey) : m.signingKey;
            }
            return d;
        };

        SenderKeyDistributionMessage.prototype.toJSON = function() {
            return SenderKeyDistributionMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        SenderKeyDistributionMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalWhisperTextProtocol.SenderKeyDistributionMessage";
        };

        return SenderKeyDistributionMessage;
    })();

    SignalWhisperTextProtocol.SenderKeyMessage = (function() {

        const SenderKeyMessage = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SenderKeyMessage.prototype.id = 0;
        SenderKeyMessage.prototype.iteration = 0;
        SenderKeyMessage.prototype.ciphertext = $util.newBuffer([]);

        SenderKeyMessage.create = function(properties) {
            return new SenderKeyMessage(properties);
        };

        SenderKeyMessage.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.id != null && $Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).uint32(m.id);
            if (m.iteration != null && $Object.hasOwnProperty.call(m, "iteration"))
                w.uint32(16).uint32(m.iteration);
            if (m.ciphertext != null && $Object.hasOwnProperty.call(m, "ciphertext"))
                w.uint32(26).bytes(m.ciphertext);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SenderKeyMessage.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalWhisperTextProtocol.SenderKeyMessage();
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
                        if (u !== 0)
                            break;
                        m.iteration = r.uint32();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.ciphertext = r.bytes();
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

        SenderKeyMessage.fromObject = function (d, q) {
            if (d instanceof $root.SignalWhisperTextProtocol.SenderKeyMessage)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".SignalWhisperTextProtocol.SenderKeyMessage: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.SignalWhisperTextProtocol.SenderKeyMessage();
            if (d.id != null) {
                m.id = d.id >>> 0;
            }
            if (d.iteration != null) {
                m.iteration = d.iteration >>> 0;
            }
            if (d.ciphertext != null) {
                if (typeof d.ciphertext === "string")
                    $util.base64.decode(d.ciphertext, m.ciphertext = $util.newBuffer($util.base64.length(d.ciphertext)), 0);
                else if (d.ciphertext.length >= 0)
                    m.ciphertext = d.ciphertext;
            }
            return m;
        };

        SenderKeyMessage.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.id = 0;
                d.iteration = 0;
                if (o.bytes === $String)
                    d.ciphertext = "";
                else {
                    d.ciphertext = [];
                    if (o.bytes !== $Array)
                        d.ciphertext = $util.newBuffer(d.ciphertext);
                }
            }
            if (m.id != null && $Object.hasOwnProperty.call(m, "id")) {
                d.id = m.id;
            }
            if (m.iteration != null && $Object.hasOwnProperty.call(m, "iteration")) {
                d.iteration = m.iteration;
            }
            if (m.ciphertext != null && $Object.hasOwnProperty.call(m, "ciphertext")) {
                d.ciphertext = o.bytes === $String ? $util.base64.encode(m.ciphertext, 0, m.ciphertext.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.ciphertext) : m.ciphertext;
            }
            return d;
        };

        SenderKeyMessage.prototype.toJSON = function() {
            return SenderKeyMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        SenderKeyMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalWhisperTextProtocol.SenderKeyMessage";
        };

        return SenderKeyMessage;
    })();

    SignalWhisperTextProtocol.KeyExchangeMessage = (function() {

        const KeyExchangeMessage = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        KeyExchangeMessage.prototype.id = 0;
        KeyExchangeMessage.prototype.baseKey = $util.newBuffer([]);
        KeyExchangeMessage.prototype.ratchetKey = $util.newBuffer([]);
        KeyExchangeMessage.prototype.identityKey = $util.newBuffer([]);
        KeyExchangeMessage.prototype.baseKeySignature = $util.newBuffer([]);

        KeyExchangeMessage.create = function(properties) {
            return new KeyExchangeMessage(properties);
        };

        KeyExchangeMessage.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.id != null && $Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).uint32(m.id);
            if (m.baseKey != null && $Object.hasOwnProperty.call(m, "baseKey"))
                w.uint32(18).bytes(m.baseKey);
            if (m.ratchetKey != null && $Object.hasOwnProperty.call(m, "ratchetKey"))
                w.uint32(26).bytes(m.ratchetKey);
            if (m.identityKey != null && $Object.hasOwnProperty.call(m, "identityKey"))
                w.uint32(34).bytes(m.identityKey);
            if (m.baseKeySignature != null && $Object.hasOwnProperty.call(m, "baseKeySignature"))
                w.uint32(42).bytes(m.baseKeySignature);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        KeyExchangeMessage.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalWhisperTextProtocol.KeyExchangeMessage();
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
                        m.baseKey = r.bytes();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.ratchetKey = r.bytes();
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.identityKey = r.bytes();
                        continue;
                    }
                case 5: {
                        if (u !== 2)
                            break;
                        m.baseKeySignature = r.bytes();
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

        KeyExchangeMessage.fromObject = function (d, q) {
            if (d instanceof $root.SignalWhisperTextProtocol.KeyExchangeMessage)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".SignalWhisperTextProtocol.KeyExchangeMessage: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.SignalWhisperTextProtocol.KeyExchangeMessage();
            if (d.id != null) {
                m.id = d.id >>> 0;
            }
            if (d.baseKey != null) {
                if (typeof d.baseKey === "string")
                    $util.base64.decode(d.baseKey, m.baseKey = $util.newBuffer($util.base64.length(d.baseKey)), 0);
                else if (d.baseKey.length >= 0)
                    m.baseKey = d.baseKey;
            }
            if (d.ratchetKey != null) {
                if (typeof d.ratchetKey === "string")
                    $util.base64.decode(d.ratchetKey, m.ratchetKey = $util.newBuffer($util.base64.length(d.ratchetKey)), 0);
                else if (d.ratchetKey.length >= 0)
                    m.ratchetKey = d.ratchetKey;
            }
            if (d.identityKey != null) {
                if (typeof d.identityKey === "string")
                    $util.base64.decode(d.identityKey, m.identityKey = $util.newBuffer($util.base64.length(d.identityKey)), 0);
                else if (d.identityKey.length >= 0)
                    m.identityKey = d.identityKey;
            }
            if (d.baseKeySignature != null) {
                if (typeof d.baseKeySignature === "string")
                    $util.base64.decode(d.baseKeySignature, m.baseKeySignature = $util.newBuffer($util.base64.length(d.baseKeySignature)), 0);
                else if (d.baseKeySignature.length >= 0)
                    m.baseKeySignature = d.baseKeySignature;
            }
            return m;
        };

        KeyExchangeMessage.toObject = function (m, o, q) {
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
                    d.baseKey = "";
                else {
                    d.baseKey = [];
                    if (o.bytes !== $Array)
                        d.baseKey = $util.newBuffer(d.baseKey);
                }
                if (o.bytes === $String)
                    d.ratchetKey = "";
                else {
                    d.ratchetKey = [];
                    if (o.bytes !== $Array)
                        d.ratchetKey = $util.newBuffer(d.ratchetKey);
                }
                if (o.bytes === $String)
                    d.identityKey = "";
                else {
                    d.identityKey = [];
                    if (o.bytes !== $Array)
                        d.identityKey = $util.newBuffer(d.identityKey);
                }
                if (o.bytes === $String)
                    d.baseKeySignature = "";
                else {
                    d.baseKeySignature = [];
                    if (o.bytes !== $Array)
                        d.baseKeySignature = $util.newBuffer(d.baseKeySignature);
                }
            }
            if (m.id != null && $Object.hasOwnProperty.call(m, "id")) {
                d.id = m.id;
            }
            if (m.baseKey != null && $Object.hasOwnProperty.call(m, "baseKey")) {
                d.baseKey = o.bytes === $String ? $util.base64.encode(m.baseKey, 0, m.baseKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.baseKey) : m.baseKey;
            }
            if (m.ratchetKey != null && $Object.hasOwnProperty.call(m, "ratchetKey")) {
                d.ratchetKey = o.bytes === $String ? $util.base64.encode(m.ratchetKey, 0, m.ratchetKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.ratchetKey) : m.ratchetKey;
            }
            if (m.identityKey != null && $Object.hasOwnProperty.call(m, "identityKey")) {
                d.identityKey = o.bytes === $String ? $util.base64.encode(m.identityKey, 0, m.identityKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.identityKey) : m.identityKey;
            }
            if (m.baseKeySignature != null && $Object.hasOwnProperty.call(m, "baseKeySignature")) {
                d.baseKeySignature = o.bytes === $String ? $util.base64.encode(m.baseKeySignature, 0, m.baseKeySignature.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.baseKeySignature) : m.baseKeySignature;
            }
            return d;
        };

        KeyExchangeMessage.prototype.toJSON = function() {
            return KeyExchangeMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        KeyExchangeMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalWhisperTextProtocol.KeyExchangeMessage";
        };

        return KeyExchangeMessage;
    })();

    SignalWhisperTextProtocol.PreKeySignalMessage = (function() {

        const PreKeySignalMessage = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        PreKeySignalMessage.prototype.registrationId = 0;
        PreKeySignalMessage.prototype.preKeyId = 0;
        PreKeySignalMessage.prototype.signedPreKeyId = 0;
        PreKeySignalMessage.prototype.baseKey = $util.newBuffer([]);
        PreKeySignalMessage.prototype.identityKey = $util.newBuffer([]);
        PreKeySignalMessage.prototype.message = $util.newBuffer([]);
        PreKeySignalMessage.prototype.kyberPreKeyId = 0;
        PreKeySignalMessage.prototype.kyberCiphertext = $util.newBuffer([]);

        PreKeySignalMessage.create = function(properties) {
            return new PreKeySignalMessage(properties);
        };

        PreKeySignalMessage.encode = function (m, w, q) {
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
            if (m.identityKey != null && $Object.hasOwnProperty.call(m, "identityKey"))
                w.uint32(26).bytes(m.identityKey);
            if (m.message != null && $Object.hasOwnProperty.call(m, "message"))
                w.uint32(34).bytes(m.message);
            if (m.registrationId != null && $Object.hasOwnProperty.call(m, "registrationId"))
                w.uint32(40).uint32(m.registrationId);
            if (m.signedPreKeyId != null && $Object.hasOwnProperty.call(m, "signedPreKeyId"))
                w.uint32(48).uint32(m.signedPreKeyId);
            if (m.kyberPreKeyId != null && $Object.hasOwnProperty.call(m, "kyberPreKeyId"))
                w.uint32(56).uint32(m.kyberPreKeyId);
            if (m.kyberCiphertext != null && $Object.hasOwnProperty.call(m, "kyberCiphertext"))
                w.uint32(66).bytes(m.kyberCiphertext);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        PreKeySignalMessage.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalWhisperTextProtocol.PreKeySignalMessage();
            while (r.pos < c) {
                var s = r.pos;
                var t = r.tag();
                if (t === z) {
                    z = $undefined;
                    break;
                }
                var u = t & 7;
                switch (t >>>= 3) {
                case 5: {
                        if (u !== 0)
                            break;
                        m.registrationId = r.uint32();
                        continue;
                    }
                case 1: {
                        if (u !== 0)
                            break;
                        m.preKeyId = r.uint32();
                        continue;
                    }
                case 6: {
                        if (u !== 0)
                            break;
                        m.signedPreKeyId = r.uint32();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.baseKey = r.bytes();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.identityKey = r.bytes();
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.message = r.bytes();
                        continue;
                    }
                case 7: {
                        if (u !== 0)
                            break;
                        m.kyberPreKeyId = r.uint32();
                        continue;
                    }
                case 8: {
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

        PreKeySignalMessage.fromObject = function (d, q) {
            if (d instanceof $root.SignalWhisperTextProtocol.PreKeySignalMessage)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".SignalWhisperTextProtocol.PreKeySignalMessage: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.SignalWhisperTextProtocol.PreKeySignalMessage();
            if (d.registrationId != null) {
                m.registrationId = d.registrationId >>> 0;
            }
            if (d.preKeyId != null) {
                m.preKeyId = d.preKeyId >>> 0;
            }
            if (d.signedPreKeyId != null) {
                m.signedPreKeyId = d.signedPreKeyId >>> 0;
            }
            if (d.baseKey != null) {
                if (typeof d.baseKey === "string")
                    $util.base64.decode(d.baseKey, m.baseKey = $util.newBuffer($util.base64.length(d.baseKey)), 0);
                else if (d.baseKey.length >= 0)
                    m.baseKey = d.baseKey;
            }
            if (d.identityKey != null) {
                if (typeof d.identityKey === "string")
                    $util.base64.decode(d.identityKey, m.identityKey = $util.newBuffer($util.base64.length(d.identityKey)), 0);
                else if (d.identityKey.length >= 0)
                    m.identityKey = d.identityKey;
            }
            if (d.message != null) {
                if (typeof d.message === "string")
                    $util.base64.decode(d.message, m.message = $util.newBuffer($util.base64.length(d.message)), 0);
                else if (d.message.length >= 0)
                    m.message = d.message;
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

        PreKeySignalMessage.toObject = function (m, o, q) {
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
                if (o.bytes === $String)
                    d.identityKey = "";
                else {
                    d.identityKey = [];
                    if (o.bytes !== $Array)
                        d.identityKey = $util.newBuffer(d.identityKey);
                }
                if (o.bytes === $String)
                    d.message = "";
                else {
                    d.message = [];
                    if (o.bytes !== $Array)
                        d.message = $util.newBuffer(d.message);
                }
                d.registrationId = 0;
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
            if (m.identityKey != null && $Object.hasOwnProperty.call(m, "identityKey")) {
                d.identityKey = o.bytes === $String ? $util.base64.encode(m.identityKey, 0, m.identityKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.identityKey) : m.identityKey;
            }
            if (m.message != null && $Object.hasOwnProperty.call(m, "message")) {
                d.message = o.bytes === $String ? $util.base64.encode(m.message, 0, m.message.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.message) : m.message;
            }
            if (m.registrationId != null && $Object.hasOwnProperty.call(m, "registrationId")) {
                d.registrationId = m.registrationId;
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

        PreKeySignalMessage.prototype.toJSON = function() {
            return PreKeySignalMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        PreKeySignalMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalWhisperTextProtocol.PreKeySignalMessage";
        };

        return PreKeySignalMessage;
    })();

    SignalWhisperTextProtocol.SignalMessage = (function() {

        const SignalMessage = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SignalMessage.prototype.ratchetKey = $util.newBuffer([]);
        SignalMessage.prototype.counter = 0;
        SignalMessage.prototype.previousCounter = 0;
        SignalMessage.prototype.ciphertext = $util.newBuffer([]);

        SignalMessage.create = function(properties) {
            return new SignalMessage(properties);
        };

        SignalMessage.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.ratchetKey != null && $Object.hasOwnProperty.call(m, "ratchetKey"))
                w.uint32(10).bytes(m.ratchetKey);
            if (m.counter != null && $Object.hasOwnProperty.call(m, "counter"))
                w.uint32(16).uint32(m.counter);
            if (m.previousCounter != null && $Object.hasOwnProperty.call(m, "previousCounter"))
                w.uint32(24).uint32(m.previousCounter);
            if (m.ciphertext != null && $Object.hasOwnProperty.call(m, "ciphertext"))
                w.uint32(34).bytes(m.ciphertext);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SignalMessage.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.SignalWhisperTextProtocol.SignalMessage();
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
                        m.ratchetKey = r.bytes();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.counter = r.uint32();
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        m.previousCounter = r.uint32();
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.ciphertext = r.bytes();
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

        SignalMessage.fromObject = function (d, q) {
            if (d instanceof $root.SignalWhisperTextProtocol.SignalMessage)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".SignalWhisperTextProtocol.SignalMessage: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.SignalWhisperTextProtocol.SignalMessage();
            if (d.ratchetKey != null) {
                if (typeof d.ratchetKey === "string")
                    $util.base64.decode(d.ratchetKey, m.ratchetKey = $util.newBuffer($util.base64.length(d.ratchetKey)), 0);
                else if (d.ratchetKey.length >= 0)
                    m.ratchetKey = d.ratchetKey;
            }
            if (d.counter != null) {
                m.counter = d.counter >>> 0;
            }
            if (d.previousCounter != null) {
                m.previousCounter = d.previousCounter >>> 0;
            }
            if (d.ciphertext != null) {
                if (typeof d.ciphertext === "string")
                    $util.base64.decode(d.ciphertext, m.ciphertext = $util.newBuffer($util.base64.length(d.ciphertext)), 0);
                else if (d.ciphertext.length >= 0)
                    m.ciphertext = d.ciphertext;
            }
            return m;
        };

        SignalMessage.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                if (o.bytes === $String)
                    d.ratchetKey = "";
                else {
                    d.ratchetKey = [];
                    if (o.bytes !== $Array)
                        d.ratchetKey = $util.newBuffer(d.ratchetKey);
                }
                d.counter = 0;
                d.previousCounter = 0;
                if (o.bytes === $String)
                    d.ciphertext = "";
                else {
                    d.ciphertext = [];
                    if (o.bytes !== $Array)
                        d.ciphertext = $util.newBuffer(d.ciphertext);
                }
            }
            if (m.ratchetKey != null && $Object.hasOwnProperty.call(m, "ratchetKey")) {
                d.ratchetKey = o.bytes === $String ? $util.base64.encode(m.ratchetKey, 0, m.ratchetKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.ratchetKey) : m.ratchetKey;
            }
            if (m.counter != null && $Object.hasOwnProperty.call(m, "counter")) {
                d.counter = m.counter;
            }
            if (m.previousCounter != null && $Object.hasOwnProperty.call(m, "previousCounter")) {
                d.previousCounter = m.previousCounter;
            }
            if (m.ciphertext != null && $Object.hasOwnProperty.call(m, "ciphertext")) {
                d.ciphertext = o.bytes === $String ? $util.base64.encode(m.ciphertext, 0, m.ciphertext.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.ciphertext) : m.ciphertext;
            }
            return d;
        };

        SignalMessage.prototype.toJSON = function() {
            return SignalMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        SignalMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalWhisperTextProtocol.SignalMessage";
        };

        return SignalMessage;
    })();

    return SignalWhisperTextProtocol;
})();

export {
  $root as default
};
