/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $Boolean = $util.global.Boolean, $String = $util.global.String, $Array = $util.global.Array, $parseInt = $util.global.parseInt, $Number = $util.global.Number, $BigInt = $util.global.BigInt, $isFinite = $util.global.isFinite;

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

export const AICommon = $root.AICommon = (() => {

    const AICommon = {};

    AICommon.AIProvenance = (function() {

        const AIProvenance = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        AIProvenance.prototype.c2PaMetadata = null;
        AIProvenance.prototype.iptcMetadata = null;

        AIProvenance.create = function(properties) {
            return new AIProvenance(properties);
        };

        AIProvenance.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.c2PaMetadata != null && $Object.hasOwnProperty.call(m, "c2PaMetadata"))
                $root.AICommon.AIProvenance.Metadata.encode(m.c2PaMetadata, w.uint32(10).fork(), q + 1).ldelim();
            if (m.iptcMetadata != null && $Object.hasOwnProperty.call(m, "iptcMetadata"))
                $root.AICommon.AIProvenance.Metadata.encode(m.iptcMetadata, w.uint32(18).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        AIProvenance.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.AIProvenance();
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
                        m.c2PaMetadata = $root.AICommon.AIProvenance.Metadata.decode(r, r.uint32(), $undefined, q + 1, m.c2PaMetadata);
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.iptcMetadata = $root.AICommon.AIProvenance.Metadata.decode(r, r.uint32(), $undefined, q + 1, m.iptcMetadata);
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

        AIProvenance.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.AIProvenance)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.AIProvenance: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.AIProvenance();
            if (d.c2PaMetadata != null) {
                if (!$util.isObject(d.c2PaMetadata))
                    throw $TypeError(".AICommon.AIProvenance.c2PaMetadata: object expected");
                m.c2PaMetadata = $root.AICommon.AIProvenance.Metadata.fromObject(d.c2PaMetadata, q + 1);
            }
            if (d.iptcMetadata != null) {
                if (!$util.isObject(d.iptcMetadata))
                    throw $TypeError(".AICommon.AIProvenance.iptcMetadata: object expected");
                m.iptcMetadata = $root.AICommon.AIProvenance.Metadata.fromObject(d.iptcMetadata, q + 1);
            }
            return m;
        };

        AIProvenance.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.c2PaMetadata = null;
                d.iptcMetadata = null;
            }
            if (m.c2PaMetadata != null && $Object.hasOwnProperty.call(m, "c2PaMetadata")) {
                d.c2PaMetadata = $root.AICommon.AIProvenance.Metadata.toObject(m.c2PaMetadata, o, q + 1);
            }
            if (m.iptcMetadata != null && $Object.hasOwnProperty.call(m, "iptcMetadata")) {
                d.iptcMetadata = $root.AICommon.AIProvenance.Metadata.toObject(m.iptcMetadata, o, q + 1);
            }
            return d;
        };

        AIProvenance.prototype.toJSON = function() {
            return AIProvenance.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIProvenance.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.AIProvenance";
        };

        AIProvenance.Metadata = (function() {

            const Metadata = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            Metadata.prototype.createdWithGenAi = false;
            Metadata.prototype.editedWithGenAi = false;

            Metadata.create = function(properties) {
                return new Metadata(properties);
            };

            Metadata.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.createdWithGenAi != null && $Object.hasOwnProperty.call(m, "createdWithGenAi"))
                    w.uint32(8).bool(m.createdWithGenAi);
                if (m.editedWithGenAi != null && $Object.hasOwnProperty.call(m, "editedWithGenAi"))
                    w.uint32(16).bool(m.editedWithGenAi);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            Metadata.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.AIProvenance.Metadata();
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
                            m.createdWithGenAi = r.bool();
                            continue;
                        }
                    case 2: {
                            if (u !== 0)
                                break;
                            m.editedWithGenAi = r.bool();
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

            Metadata.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.AIProvenance.Metadata)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.AIProvenance.Metadata: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.AIProvenance.Metadata();
                if (d.createdWithGenAi != null) {
                    m.createdWithGenAi = $Boolean(d.createdWithGenAi);
                }
                if (d.editedWithGenAi != null) {
                    m.editedWithGenAi = $Boolean(d.editedWithGenAi);
                }
                return m;
            };

            Metadata.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.createdWithGenAi = false;
                    d.editedWithGenAi = false;
                }
                if (m.createdWithGenAi != null && $Object.hasOwnProperty.call(m, "createdWithGenAi")) {
                    d.createdWithGenAi = m.createdWithGenAi;
                }
                if (m.editedWithGenAi != null && $Object.hasOwnProperty.call(m, "editedWithGenAi")) {
                    d.editedWithGenAi = m.editedWithGenAi;
                }
                return d;
            };

            Metadata.prototype.toJSON = function() {
                return Metadata.toObject(this, $protobuf.util.toJSONOptions);
            };

            Metadata.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.AIProvenance.Metadata";
            };

            return Metadata;
        })();

        return AIProvenance;
    })();

    AICommon.BotAgentDeepLinkMetadata = (function() {

        const BotAgentDeepLinkMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotAgentDeepLinkMetadata.prototype.token = "";
        BotAgentDeepLinkMetadata.prototype.clientPublicKey = $util.newBuffer([]);

        BotAgentDeepLinkMetadata.create = function(properties) {
            return new BotAgentDeepLinkMetadata(properties);
        };

        BotAgentDeepLinkMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.token != null && $Object.hasOwnProperty.call(m, "token"))
                w.uint32(10).string(m.token);
            if (m.clientPublicKey != null && $Object.hasOwnProperty.call(m, "clientPublicKey"))
                w.uint32(18).bytes(m.clientPublicKey);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotAgentDeepLinkMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotAgentDeepLinkMetadata();
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
                        m.token = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.clientPublicKey = r.bytes();
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

        BotAgentDeepLinkMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotAgentDeepLinkMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotAgentDeepLinkMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotAgentDeepLinkMetadata();
            if (d.token != null) {
                m.token = $String(d.token);
            }
            if (d.clientPublicKey != null) {
                if (typeof d.clientPublicKey === "string")
                    $util.base64.decode(d.clientPublicKey, m.clientPublicKey = $util.newBuffer($util.base64.length(d.clientPublicKey)), 0);
                else if (d.clientPublicKey.length >= 0)
                    m.clientPublicKey = d.clientPublicKey;
            }
            return m;
        };

        BotAgentDeepLinkMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.token = "";
                if (o.bytes === $String)
                    d.clientPublicKey = "";
                else {
                    d.clientPublicKey = [];
                    if (o.bytes !== $Array)
                        d.clientPublicKey = $util.newBuffer(d.clientPublicKey);
                }
            }
            if (m.token != null && $Object.hasOwnProperty.call(m, "token")) {
                d.token = m.token;
            }
            if (m.clientPublicKey != null && $Object.hasOwnProperty.call(m, "clientPublicKey")) {
                d.clientPublicKey = o.bytes === $String ? $util.base64.encode(m.clientPublicKey, 0, m.clientPublicKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.clientPublicKey) : m.clientPublicKey;
            }
            return d;
        };

        BotAgentDeepLinkMetadata.prototype.toJSON = function() {
            return BotAgentDeepLinkMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotAgentDeepLinkMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotAgentDeepLinkMetadata";
        };

        return BotAgentDeepLinkMetadata;
    })();

    AICommon.BotAgentMetadata = (function() {

        const BotAgentMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotAgentMetadata.prototype.deepLinkMetadata = null;

        BotAgentMetadata.create = function(properties) {
            return new BotAgentMetadata(properties);
        };

        BotAgentMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.deepLinkMetadata != null && $Object.hasOwnProperty.call(m, "deepLinkMetadata"))
                $root.AICommon.BotAgentDeepLinkMetadata.encode(m.deepLinkMetadata, w.uint32(10).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotAgentMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotAgentMetadata();
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
                        m.deepLinkMetadata = $root.AICommon.BotAgentDeepLinkMetadata.decode(r, r.uint32(), $undefined, q + 1, m.deepLinkMetadata);
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

        BotAgentMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotAgentMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotAgentMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotAgentMetadata();
            if (d.deepLinkMetadata != null) {
                if (!$util.isObject(d.deepLinkMetadata))
                    throw $TypeError(".AICommon.BotAgentMetadata.deepLinkMetadata: object expected");
                m.deepLinkMetadata = $root.AICommon.BotAgentDeepLinkMetadata.fromObject(d.deepLinkMetadata, q + 1);
            }
            return m;
        };

        BotAgentMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.deepLinkMetadata = null;
            }
            if (m.deepLinkMetadata != null && $Object.hasOwnProperty.call(m, "deepLinkMetadata")) {
                d.deepLinkMetadata = $root.AICommon.BotAgentDeepLinkMetadata.toObject(m.deepLinkMetadata, o, q + 1);
            }
            return d;
        };

        BotAgentMetadata.prototype.toJSON = function() {
            return BotAgentMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotAgentMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotAgentMetadata";
        };

        return BotAgentMetadata;
    })();

    AICommon.BotInfrastructureDiagnostics = (function() {

        const BotInfrastructureDiagnostics = function (p) {
            this.toolsUsed = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotInfrastructureDiagnostics.prototype.botBackend = 0;
        BotInfrastructureDiagnostics.prototype.toolsUsed = $util.emptyArray;
        BotInfrastructureDiagnostics.prototype.isThinking = false;

        BotInfrastructureDiagnostics.create = function(properties) {
            return new BotInfrastructureDiagnostics(properties);
        };

        BotInfrastructureDiagnostics.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.botBackend != null && $Object.hasOwnProperty.call(m, "botBackend"))
                w.uint32(8).int32(m.botBackend);
            if (m.toolsUsed != null && m.toolsUsed.length) {
                for (var i = 0; i < m.toolsUsed.length; ++i)
                    w.uint32(18).string(m.toolsUsed[i]);
            }
            if (m.isThinking != null && $Object.hasOwnProperty.call(m, "isThinking"))
                w.uint32(24).bool(m.isThinking);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotInfrastructureDiagnostics.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotInfrastructureDiagnostics(), v;
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
                        v = r.int32();
                        if ($root.AICommon.BotInfrastructureDiagnostics.BotBackend[v] !== $undefined) {
                            m.botBackend = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        if (!(m.toolsUsed && m.toolsUsed.length))
                            m.toolsUsed = [];
                        m.toolsUsed.push(r.string());
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        m.isThinking = r.bool();
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

        BotInfrastructureDiagnostics.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotInfrastructureDiagnostics)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotInfrastructureDiagnostics: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotInfrastructureDiagnostics();
            switch (d.botBackend) {
            case "AAPI":
            case 0:
                m.botBackend = 0;
                break;
            case "CLIPPY":
            case 1:
                m.botBackend = 1;
                break;
            default:
            }
            if (d.toolsUsed) {
                if (!$Array.isArray(d.toolsUsed))
                    throw $TypeError(".AICommon.BotInfrastructureDiagnostics.toolsUsed: array expected");
                m.toolsUsed = $Array(d.toolsUsed.length);
                for (var i = 0; i < d.toolsUsed.length; ++i) {
                    m.toolsUsed[i] = $String(d.toolsUsed[i]);
                }
            }
            if (d.isThinking != null) {
                m.isThinking = $Boolean(d.isThinking);
            }
            return m;
        };

        BotInfrastructureDiagnostics.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.toolsUsed = [];
            }
            if (o.defaults) {
                d.botBackend = o.enums === $String ? "AAPI" : 0;
                d.isThinking = false;
            }
            if (m.botBackend != null && $Object.hasOwnProperty.call(m, "botBackend")) {
                d.botBackend = o.enums === $String ? $root.AICommon.BotInfrastructureDiagnostics.BotBackend[m.botBackend] === $undefined ? m.botBackend : $root.AICommon.BotInfrastructureDiagnostics.BotBackend[m.botBackend] : m.botBackend;
            }
            if (m.toolsUsed && m.toolsUsed.length) {
                d.toolsUsed = $Array(m.toolsUsed.length);
                for (var j = 0; j < m.toolsUsed.length; ++j) {
                    d.toolsUsed[j] = m.toolsUsed[j];
                }
            }
            if (m.isThinking != null && $Object.hasOwnProperty.call(m, "isThinking")) {
                d.isThinking = m.isThinking;
            }
            return d;
        };

        BotInfrastructureDiagnostics.prototype.toJSON = function() {
            return BotInfrastructureDiagnostics.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotInfrastructureDiagnostics.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotInfrastructureDiagnostics";
        };

        BotInfrastructureDiagnostics.BotBackend = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "AAPI"] = 0;
            values[valuesById[1] = "CLIPPY"] = 1;
            return values;
        })();

        return BotInfrastructureDiagnostics;
    })();

    AICommon.AIHomeState = (function() {

        const AIHomeState = function (p) {
            this.capabilityOptions = [];
            this.conversationOptions = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        AIHomeState.prototype.lastFetchTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        AIHomeState.prototype.capabilityOptions = $util.emptyArray;
        AIHomeState.prototype.conversationOptions = $util.emptyArray;

        AIHomeState.create = function(properties) {
            return new AIHomeState(properties);
        };

        AIHomeState.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.lastFetchTime != null && $Object.hasOwnProperty.call(m, "lastFetchTime"))
                w.uint32(8).int64(m.lastFetchTime);
            if (m.capabilityOptions != null && m.capabilityOptions.length) {
                for (var i = 0; i < m.capabilityOptions.length; ++i)
                    $root.AICommon.AIHomeState.AIHomeOption.encode(m.capabilityOptions[i], w.uint32(18).fork(), q + 1).ldelim();
            }
            if (m.conversationOptions != null && m.conversationOptions.length) {
                for (var i = 0; i < m.conversationOptions.length; ++i)
                    $root.AICommon.AIHomeState.AIHomeOption.encode(m.conversationOptions[i], w.uint32(26).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        AIHomeState.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.AIHomeState();
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
                        m.lastFetchTime = r.int64();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        if (!(m.capabilityOptions && m.capabilityOptions.length))
                            m.capabilityOptions = [];
                        m.capabilityOptions.push($root.AICommon.AIHomeState.AIHomeOption.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        if (!(m.conversationOptions && m.conversationOptions.length))
                            m.conversationOptions = [];
                        m.conversationOptions.push($root.AICommon.AIHomeState.AIHomeOption.decode(r, r.uint32(), $undefined, q + 1));
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

        AIHomeState.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.AIHomeState)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.AIHomeState: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.AIHomeState();
            if (d.lastFetchTime != null) {
                if ($util.Long)
                    m.lastFetchTime = $util.Long.fromValue(d.lastFetchTime, false);
                else if (typeof d.lastFetchTime === "string")
                    m.lastFetchTime = $parseInt(d.lastFetchTime, 10);
                else if (typeof d.lastFetchTime === "number")
                    m.lastFetchTime = d.lastFetchTime;
                else if (typeof d.lastFetchTime === "object")
                    m.lastFetchTime = new $util.LongBits(d.lastFetchTime.low >>> 0, d.lastFetchTime.high >>> 0).toNumber();
            }
            if (d.capabilityOptions) {
                if (!$Array.isArray(d.capabilityOptions))
                    throw $TypeError(".AICommon.AIHomeState.capabilityOptions: array expected");
                m.capabilityOptions = $Array(d.capabilityOptions.length);
                for (var i = 0; i < d.capabilityOptions.length; ++i) {
                    if (!$util.isObject(d.capabilityOptions[i]))
                        throw $TypeError(".AICommon.AIHomeState.capabilityOptions: object expected");
                    m.capabilityOptions[i] = $root.AICommon.AIHomeState.AIHomeOption.fromObject(d.capabilityOptions[i], q + 1);
                }
            }
            if (d.conversationOptions) {
                if (!$Array.isArray(d.conversationOptions))
                    throw $TypeError(".AICommon.AIHomeState.conversationOptions: array expected");
                m.conversationOptions = $Array(d.conversationOptions.length);
                for (var i = 0; i < d.conversationOptions.length; ++i) {
                    if (!$util.isObject(d.conversationOptions[i]))
                        throw $TypeError(".AICommon.AIHomeState.conversationOptions: object expected");
                    m.conversationOptions[i] = $root.AICommon.AIHomeState.AIHomeOption.fromObject(d.conversationOptions[i], q + 1);
                }
            }
            return m;
        };

        AIHomeState.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.capabilityOptions = [];
                d.conversationOptions = [];
            }
            if (o.defaults) {
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.lastFetchTime = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.lastFetchTime = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
            }
            if (m.lastFetchTime != null && $Object.hasOwnProperty.call(m, "lastFetchTime")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.lastFetchTime = typeof m.lastFetchTime === "number" ? $BigInt(m.lastFetchTime) : $util.Long.fromBits(m.lastFetchTime.low >>> 0, m.lastFetchTime.high >>> 0, false).toBigInt();
                else if (typeof m.lastFetchTime === "number")
                    d.lastFetchTime = o.longs === $String ? $String(m.lastFetchTime) : m.lastFetchTime;
                else
                    d.lastFetchTime = o.longs === String ? longToString(m.lastFetchTime) : o.longs === Number ? longToNumber(m.lastFetchTime) : m.lastFetchTime;
            }
            if (m.capabilityOptions && m.capabilityOptions.length) {
                d.capabilityOptions = $Array(m.capabilityOptions.length);
                for (var j = 0; j < m.capabilityOptions.length; ++j) {
                    d.capabilityOptions[j] = $root.AICommon.AIHomeState.AIHomeOption.toObject(m.capabilityOptions[j], o, q + 1);
                }
            }
            if (m.conversationOptions && m.conversationOptions.length) {
                d.conversationOptions = $Array(m.conversationOptions.length);
                for (var j = 0; j < m.conversationOptions.length; ++j) {
                    d.conversationOptions[j] = $root.AICommon.AIHomeState.AIHomeOption.toObject(m.conversationOptions[j], o, q + 1);
                }
            }
            return d;
        };

        AIHomeState.prototype.toJSON = function() {
            return AIHomeState.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIHomeState.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.AIHomeState";
        };

        AIHomeState.AIHomeOption = (function() {

            const AIHomeOption = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            AIHomeOption.prototype.type = 0;
            AIHomeOption.prototype.title = "";
            AIHomeOption.prototype.promptText = "";
            AIHomeOption.prototype.sessionId = "";
            AIHomeOption.prototype.imageWdsIdentifier = "";
            AIHomeOption.prototype.imageTintColor = "";
            AIHomeOption.prototype.imageBackgroundColor = "";
            AIHomeOption.prototype.cardTypeId = "";

            AIHomeOption.create = function(properties) {
                return new AIHomeOption(properties);
            };

            AIHomeOption.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.type != null && $Object.hasOwnProperty.call(m, "type"))
                    w.uint32(8).int32(m.type);
                if (m.title != null && $Object.hasOwnProperty.call(m, "title"))
                    w.uint32(18).string(m.title);
                if (m.promptText != null && $Object.hasOwnProperty.call(m, "promptText"))
                    w.uint32(26).string(m.promptText);
                if (m.sessionId != null && $Object.hasOwnProperty.call(m, "sessionId"))
                    w.uint32(34).string(m.sessionId);
                if (m.imageWdsIdentifier != null && $Object.hasOwnProperty.call(m, "imageWdsIdentifier"))
                    w.uint32(42).string(m.imageWdsIdentifier);
                if (m.imageTintColor != null && $Object.hasOwnProperty.call(m, "imageTintColor"))
                    w.uint32(50).string(m.imageTintColor);
                if (m.imageBackgroundColor != null && $Object.hasOwnProperty.call(m, "imageBackgroundColor"))
                    w.uint32(58).string(m.imageBackgroundColor);
                if (m.cardTypeId != null && $Object.hasOwnProperty.call(m, "cardTypeId"))
                    w.uint32(66).string(m.cardTypeId);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            AIHomeOption.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.AIHomeState.AIHomeOption(), v;
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
                            v = r.int32();
                            if ($root.AICommon.AIHomeState.AIHomeOption.AIHomeActionType[v] !== $undefined) {
                                m.type = v;
                            } else if (!r.discardUnknown) {
                                $util.makeProp(m, "$unknowns", false);
                                (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                            }
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.title = r.string();
                            continue;
                        }
                    case 3: {
                            if (u !== 2)
                                break;
                            m.promptText = r.string();
                            continue;
                        }
                    case 4: {
                            if (u !== 2)
                                break;
                            m.sessionId = r.string();
                            continue;
                        }
                    case 5: {
                            if (u !== 2)
                                break;
                            m.imageWdsIdentifier = r.string();
                            continue;
                        }
                    case 6: {
                            if (u !== 2)
                                break;
                            m.imageTintColor = r.string();
                            continue;
                        }
                    case 7: {
                            if (u !== 2)
                                break;
                            m.imageBackgroundColor = r.string();
                            continue;
                        }
                    case 8: {
                            if (u !== 2)
                                break;
                            m.cardTypeId = r.string();
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

            AIHomeOption.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.AIHomeState.AIHomeOption)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.AIHomeState.AIHomeOption: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.AIHomeState.AIHomeOption();
                switch (d.type) {
                case "PROMPT":
                case 0:
                    m.type = 0;
                    break;
                case "CREATE_IMAGE":
                case 1:
                    m.type = 1;
                    break;
                case "ANIMATE_PHOTO":
                case 2:
                    m.type = 2;
                    break;
                case "ANALYZE_FILE":
                case 3:
                    m.type = 3;
                    break;
                case "COLLABORATE":
                case 4:
                    m.type = 4;
                    break;
                case "OPEN_GREETING_CARD":
                case 5:
                    m.type = 5;
                    break;
                default:
                }
                if (d.title != null) {
                    m.title = $String(d.title);
                }
                if (d.promptText != null) {
                    m.promptText = $String(d.promptText);
                }
                if (d.sessionId != null) {
                    m.sessionId = $String(d.sessionId);
                }
                if (d.imageWdsIdentifier != null) {
                    m.imageWdsIdentifier = $String(d.imageWdsIdentifier);
                }
                if (d.imageTintColor != null) {
                    m.imageTintColor = $String(d.imageTintColor);
                }
                if (d.imageBackgroundColor != null) {
                    m.imageBackgroundColor = $String(d.imageBackgroundColor);
                }
                if (d.cardTypeId != null) {
                    m.cardTypeId = $String(d.cardTypeId);
                }
                return m;
            };

            AIHomeOption.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.type = o.enums === $String ? "PROMPT" : 0;
                    d.title = "";
                    d.promptText = "";
                    d.sessionId = "";
                    d.imageWdsIdentifier = "";
                    d.imageTintColor = "";
                    d.imageBackgroundColor = "";
                    d.cardTypeId = "";
                }
                if (m.type != null && $Object.hasOwnProperty.call(m, "type")) {
                    d.type = o.enums === $String ? $root.AICommon.AIHomeState.AIHomeOption.AIHomeActionType[m.type] === $undefined ? m.type : $root.AICommon.AIHomeState.AIHomeOption.AIHomeActionType[m.type] : m.type;
                }
                if (m.title != null && $Object.hasOwnProperty.call(m, "title")) {
                    d.title = m.title;
                }
                if (m.promptText != null && $Object.hasOwnProperty.call(m, "promptText")) {
                    d.promptText = m.promptText;
                }
                if (m.sessionId != null && $Object.hasOwnProperty.call(m, "sessionId")) {
                    d.sessionId = m.sessionId;
                }
                if (m.imageWdsIdentifier != null && $Object.hasOwnProperty.call(m, "imageWdsIdentifier")) {
                    d.imageWdsIdentifier = m.imageWdsIdentifier;
                }
                if (m.imageTintColor != null && $Object.hasOwnProperty.call(m, "imageTintColor")) {
                    d.imageTintColor = m.imageTintColor;
                }
                if (m.imageBackgroundColor != null && $Object.hasOwnProperty.call(m, "imageBackgroundColor")) {
                    d.imageBackgroundColor = m.imageBackgroundColor;
                }
                if (m.cardTypeId != null && $Object.hasOwnProperty.call(m, "cardTypeId")) {
                    d.cardTypeId = m.cardTypeId;
                }
                return d;
            };

            AIHomeOption.prototype.toJSON = function() {
                return AIHomeOption.toObject(this, $protobuf.util.toJSONOptions);
            };

            AIHomeOption.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.AIHomeState.AIHomeOption";
            };

            AIHomeOption.AIHomeActionType = (function() {
                const valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "PROMPT"] = 0;
                values[valuesById[1] = "CREATE_IMAGE"] = 1;
                values[valuesById[2] = "ANIMATE_PHOTO"] = 2;
                values[valuesById[3] = "ANALYZE_FILE"] = 3;
                values[valuesById[4] = "COLLABORATE"] = 4;
                values[valuesById[5] = "OPEN_GREETING_CARD"] = 5;
                return values;
            })();

            return AIHomeOption;
        })();

        return AIHomeState;
    })();

    AICommon.BotDocumentMessageMetadata = (function() {

        const BotDocumentMessageMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotDocumentMessageMetadata.prototype.pluginType = 0;

        BotDocumentMessageMetadata.create = function(properties) {
            return new BotDocumentMessageMetadata(properties);
        };

        BotDocumentMessageMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.pluginType != null && $Object.hasOwnProperty.call(m, "pluginType"))
                w.uint32(8).int32(m.pluginType);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotDocumentMessageMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotDocumentMessageMetadata(), v;
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
                        v = r.int32();
                        if ($root.AICommon.BotDocumentMessageMetadata.DocumentPluginType[v] !== $undefined) {
                            m.pluginType = v;
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

        BotDocumentMessageMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotDocumentMessageMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotDocumentMessageMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotDocumentMessageMetadata();
            switch (d.pluginType) {
            case "TEXT_EXTRACTION":
            case 0:
                m.pluginType = 0;
                break;
            case "OCR_AND_IMAGES":
            case 1:
                m.pluginType = 1;
                break;
            default:
            }
            return m;
        };

        BotDocumentMessageMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.pluginType = o.enums === $String ? "TEXT_EXTRACTION" : 0;
            }
            if (m.pluginType != null && $Object.hasOwnProperty.call(m, "pluginType")) {
                d.pluginType = o.enums === $String ? $root.AICommon.BotDocumentMessageMetadata.DocumentPluginType[m.pluginType] === $undefined ? m.pluginType : $root.AICommon.BotDocumentMessageMetadata.DocumentPluginType[m.pluginType] : m.pluginType;
            }
            return d;
        };

        BotDocumentMessageMetadata.prototype.toJSON = function() {
            return BotDocumentMessageMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotDocumentMessageMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotDocumentMessageMetadata";
        };

        BotDocumentMessageMetadata.DocumentPluginType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "TEXT_EXTRACTION"] = 0;
            values[valuesById[1] = "OCR_AND_IMAGES"] = 1;
            return values;
        })();

        return BotDocumentMessageMetadata;
    })();

    AICommon.SessionTransparencyMetadata = (function() {

        const SessionTransparencyMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SessionTransparencyMetadata.prototype.disclaimerText = "";
        SessionTransparencyMetadata.prototype.hcaId = "";
        SessionTransparencyMetadata.prototype.sessionTransparencyType = 0;

        SessionTransparencyMetadata.create = function(properties) {
            return new SessionTransparencyMetadata(properties);
        };

        SessionTransparencyMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.disclaimerText != null && $Object.hasOwnProperty.call(m, "disclaimerText"))
                w.uint32(10).string(m.disclaimerText);
            if (m.hcaId != null && $Object.hasOwnProperty.call(m, "hcaId"))
                w.uint32(18).string(m.hcaId);
            if (m.sessionTransparencyType != null && $Object.hasOwnProperty.call(m, "sessionTransparencyType"))
                w.uint32(24).int32(m.sessionTransparencyType);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SessionTransparencyMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.SessionTransparencyMetadata(), v;
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
                        m.disclaimerText = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.hcaId = r.string();
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.SessionTransparencyType[v] !== $undefined) {
                            m.sessionTransparencyType = v;
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

        SessionTransparencyMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.SessionTransparencyMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.SessionTransparencyMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.SessionTransparencyMetadata();
            if (d.disclaimerText != null) {
                m.disclaimerText = $String(d.disclaimerText);
            }
            if (d.hcaId != null) {
                m.hcaId = $String(d.hcaId);
            }
            switch (d.sessionTransparencyType) {
            case "UNKNOWN_TYPE":
            case 0:
                m.sessionTransparencyType = 0;
                break;
            case "NY_AI_SAFETY_DISCLAIMER":
            case 1:
                m.sessionTransparencyType = 1;
                break;
            default:
            }
            return m;
        };

        SessionTransparencyMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.disclaimerText = "";
                d.hcaId = "";
                d.sessionTransparencyType = o.enums === $String ? "UNKNOWN_TYPE" : 0;
            }
            if (m.disclaimerText != null && $Object.hasOwnProperty.call(m, "disclaimerText")) {
                d.disclaimerText = m.disclaimerText;
            }
            if (m.hcaId != null && $Object.hasOwnProperty.call(m, "hcaId")) {
                d.hcaId = m.hcaId;
            }
            if (m.sessionTransparencyType != null && $Object.hasOwnProperty.call(m, "sessionTransparencyType")) {
                d.sessionTransparencyType = o.enums === $String ? $root.AICommon.SessionTransparencyType[m.sessionTransparencyType] === $undefined ? m.sessionTransparencyType : $root.AICommon.SessionTransparencyType[m.sessionTransparencyType] : m.sessionTransparencyType;
            }
            return d;
        };

        SessionTransparencyMetadata.prototype.toJSON = function() {
            return SessionTransparencyMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        SessionTransparencyMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.SessionTransparencyMetadata";
        };

        return SessionTransparencyMetadata;
    })();

    AICommon.AIRegenerateMetadata = (function() {

        const AIRegenerateMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        AIRegenerateMetadata.prototype.messageKey = null;
        AIRegenerateMetadata.prototype.responseTimestampMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        AIRegenerateMetadata.create = function(properties) {
            return new AIRegenerateMetadata(properties);
        };

        AIRegenerateMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.messageKey != null && $Object.hasOwnProperty.call(m, "messageKey"))
                $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.encode(m.messageKey, w.uint32(10).fork(), q + 1).ldelim();
            if (m.responseTimestampMs != null && $Object.hasOwnProperty.call(m, "responseTimestampMs"))
                w.uint32(16).int64(m.responseTimestampMs);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        AIRegenerateMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.AIRegenerateMetadata();
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
                        m.messageKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.decode(r, r.uint32(), $undefined, q + 1, m.messageKey);
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.responseTimestampMs = r.int64();
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

        AIRegenerateMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.AIRegenerateMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.AIRegenerateMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.AIRegenerateMetadata();
            if (d.messageKey != null) {
                if (!$util.isObject(d.messageKey))
                    throw $TypeError(".AICommon.AIRegenerateMetadata.messageKey: object expected");
                m.messageKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.fromObject(d.messageKey, q + 1);
            }
            if (d.responseTimestampMs != null) {
                if ($util.Long)
                    m.responseTimestampMs = $util.Long.fromValue(d.responseTimestampMs, false);
                else if (typeof d.responseTimestampMs === "string")
                    m.responseTimestampMs = $parseInt(d.responseTimestampMs, 10);
                else if (typeof d.responseTimestampMs === "number")
                    m.responseTimestampMs = d.responseTimestampMs;
                else if (typeof d.responseTimestampMs === "object")
                    m.responseTimestampMs = new $util.LongBits(d.responseTimestampMs.low >>> 0, d.responseTimestampMs.high >>> 0).toNumber();
            }
            return m;
        };

        AIRegenerateMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.messageKey = null;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.responseTimestampMs = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.responseTimestampMs = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
            }
            if (m.messageKey != null && $Object.hasOwnProperty.call(m, "messageKey")) {
                d.messageKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.toObject(m.messageKey, o, q + 1);
            }
            if (m.responseTimestampMs != null && $Object.hasOwnProperty.call(m, "responseTimestampMs")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.responseTimestampMs = typeof m.responseTimestampMs === "number" ? $BigInt(m.responseTimestampMs) : $util.Long.fromBits(m.responseTimestampMs.low >>> 0, m.responseTimestampMs.high >>> 0, false).toBigInt();
                else if (typeof m.responseTimestampMs === "number")
                    d.responseTimestampMs = o.longs === $String ? $String(m.responseTimestampMs) : m.responseTimestampMs;
                else
                    d.responseTimestampMs = o.longs === String ? longToString(m.responseTimestampMs) : o.longs === Number ? longToNumber(m.responseTimestampMs) : m.responseTimestampMs;
            }
            return d;
        };

        AIRegenerateMetadata.prototype.toJSON = function() {
            return AIRegenerateMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRegenerateMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.AIRegenerateMetadata";
        };

        return AIRegenerateMetadata;
    })();

    AICommon.AIRichResponseUnifiedResponse = (function() {

        const AIRichResponseUnifiedResponse = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        AIRichResponseUnifiedResponse.prototype.data = $util.newBuffer([]);

        AIRichResponseUnifiedResponse.create = function(properties) {
            return new AIRichResponseUnifiedResponse(properties);
        };

        AIRichResponseUnifiedResponse.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.data != null && $Object.hasOwnProperty.call(m, "data"))
                w.uint32(10).bytes(m.data);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        AIRichResponseUnifiedResponse.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.AIRichResponseUnifiedResponse();
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
                        m.data = r.bytes();
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

        AIRichResponseUnifiedResponse.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.AIRichResponseUnifiedResponse)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.AIRichResponseUnifiedResponse: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.AIRichResponseUnifiedResponse();
            if (d.data != null) {
                if (typeof d.data === "string")
                    $util.base64.decode(d.data, m.data = $util.newBuffer($util.base64.length(d.data)), 0);
                else if (d.data.length >= 0)
                    m.data = d.data;
            }
            return m;
        };

        AIRichResponseUnifiedResponse.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                if (o.bytes === $String)
                    d.data = "";
                else {
                    d.data = [];
                    if (o.bytes !== $Array)
                        d.data = $util.newBuffer(d.data);
                }
            }
            if (m.data != null && $Object.hasOwnProperty.call(m, "data")) {
                d.data = o.bytes === $String ? $util.base64.encode(m.data, 0, m.data.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.data) : m.data;
            }
            return d;
        };

        AIRichResponseUnifiedResponse.prototype.toJSON = function() {
            return AIRichResponseUnifiedResponse.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIRichResponseUnifiedResponse.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.AIRichResponseUnifiedResponse";
        };

        return AIRichResponseUnifiedResponse;
    })();

    AICommon.BotMessageSharingInfo = (function() {

        const BotMessageSharingInfo = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotMessageSharingInfo.prototype.botEntryPointOrigin = 0;
        BotMessageSharingInfo.prototype.forwardScore = 0;

        BotMessageSharingInfo.create = function(properties) {
            return new BotMessageSharingInfo(properties);
        };

        BotMessageSharingInfo.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.botEntryPointOrigin != null && $Object.hasOwnProperty.call(m, "botEntryPointOrigin"))
                w.uint32(8).int32(m.botEntryPointOrigin);
            if (m.forwardScore != null && $Object.hasOwnProperty.call(m, "forwardScore"))
                w.uint32(16).uint32(m.forwardScore);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotMessageSharingInfo.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotMessageSharingInfo(), v;
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
                        v = r.int32();
                        if ($root.AICommon.BotMetricsEntryPoint[v] !== $undefined) {
                            m.botEntryPointOrigin = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.forwardScore = r.uint32();
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

        BotMessageSharingInfo.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotMessageSharingInfo)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotMessageSharingInfo: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotMessageSharingInfo();
            switch (d.botEntryPointOrigin) {
            case "UNDEFINED_ENTRY_POINT":
            case 0:
                m.botEntryPointOrigin = 0;
                break;
            case "FAVICON":
            case 1:
                m.botEntryPointOrigin = 1;
                break;
            case "CHATLIST":
            case 2:
                m.botEntryPointOrigin = 2;
                break;
            case "AISEARCH_NULL_STATE_PAPER_PLANE":
            case 3:
                m.botEntryPointOrigin = 3;
                break;
            case "AISEARCH_NULL_STATE_SUGGESTION":
            case 4:
                m.botEntryPointOrigin = 4;
                break;
            case "AISEARCH_TYPE_AHEAD_SUGGESTION":
            case 5:
                m.botEntryPointOrigin = 5;
                break;
            case "AISEARCH_TYPE_AHEAD_PAPER_PLANE":
            case 6:
                m.botEntryPointOrigin = 6;
                break;
            case "AISEARCH_TYPE_AHEAD_RESULT_CHATLIST":
            case 7:
                m.botEntryPointOrigin = 7;
                break;
            case "AISEARCH_TYPE_AHEAD_RESULT_MESSAGES":
            case 8:
                m.botEntryPointOrigin = 8;
                break;
            case "AIVOICE_SEARCH_BAR":
            case 9:
                m.botEntryPointOrigin = 9;
                break;
            case "AIVOICE_FAVICON":
            case 10:
                m.botEntryPointOrigin = 10;
                break;
            case "AISTUDIO":
            case 11:
                m.botEntryPointOrigin = 11;
                break;
            case "DEEPLINK":
            case 12:
                m.botEntryPointOrigin = 12;
                break;
            case "NOTIFICATION":
            case 13:
                m.botEntryPointOrigin = 13;
                break;
            case "PROFILE_MESSAGE_BUTTON":
            case 14:
                m.botEntryPointOrigin = 14;
                break;
            case "FORWARD":
            case 15:
                m.botEntryPointOrigin = 15;
                break;
            case "APP_SHORTCUT":
            case 16:
                m.botEntryPointOrigin = 16;
                break;
            case "FF_FAMILY":
            case 17:
                m.botEntryPointOrigin = 17;
                break;
            case "AI_TAB":
            case 18:
                m.botEntryPointOrigin = 18;
                break;
            case "AI_HOME":
            case 19:
                m.botEntryPointOrigin = 19;
                break;
            case "AI_DEEPLINK_IMMERSIVE":
            case 20:
                m.botEntryPointOrigin = 20;
                break;
            case "AI_DEEPLINK":
            case 21:
                m.botEntryPointOrigin = 21;
                break;
            case "META_AI_CHAT_SHORTCUT_AI_STUDIO":
            case 22:
                m.botEntryPointOrigin = 22;
                break;
            case "UGC_CHAT_SHORTCUT_AI_STUDIO":
            case 23:
                m.botEntryPointOrigin = 23;
                break;
            case "NEW_CHAT_AI_STUDIO":
            case 24:
                m.botEntryPointOrigin = 24;
                break;
            case "AIVOICE_FAVICON_CALL_HISTORY":
            case 25:
                m.botEntryPointOrigin = 25;
                break;
            case "ASK_META_AI_CONTEXT_MENU":
            case 26:
                m.botEntryPointOrigin = 26;
                break;
            case "ASK_META_AI_CONTEXT_MENU_1ON1":
            case 27:
                m.botEntryPointOrigin = 27;
                break;
            case "ASK_META_AI_CONTEXT_MENU_GROUP":
            case 28:
                m.botEntryPointOrigin = 28;
                break;
            case "INVOKE_META_AI_1ON1":
            case 29:
                m.botEntryPointOrigin = 29;
                break;
            case "INVOKE_META_AI_GROUP":
            case 30:
                m.botEntryPointOrigin = 30;
                break;
            case "META_AI_FORWARD":
            case 31:
                m.botEntryPointOrigin = 31;
                break;
            case "NEW_CHAT_AI_CONTACT":
            case 32:
                m.botEntryPointOrigin = 32;
                break;
            case "MESSAGE_QUICK_ACTION_1_ON_1_CHAT":
            case 33:
                m.botEntryPointOrigin = 33;
                break;
            case "MESSAGE_QUICK_ACTION_GROUP_CHAT":
            case 34:
                m.botEntryPointOrigin = 34;
                break;
            case "ATTACHMENT_TRAY_1_ON_1_CHAT":
            case 35:
                m.botEntryPointOrigin = 35;
                break;
            case "ATTACHMENT_TRAY_GROUP_CHAT":
            case 36:
                m.botEntryPointOrigin = 36;
                break;
            case "ASK_META_AI_MEDIA_VIEWER_1ON1":
            case 37:
                m.botEntryPointOrigin = 37;
                break;
            case "ASK_META_AI_MEDIA_VIEWER_GROUP":
            case 38:
                m.botEntryPointOrigin = 38;
                break;
            case "MEDIA_PICKER_1_ON_1_CHAT":
            case 39:
                m.botEntryPointOrigin = 39;
                break;
            case "MEDIA_PICKER_GROUP_CHAT":
            case 40:
                m.botEntryPointOrigin = 40;
                break;
            case "ASK_META_AI_NO_SEARCH_RESULTS":
            case 41:
                m.botEntryPointOrigin = 41;
                break;
            case "META_AI_SETTINGS":
            case 45:
                m.botEntryPointOrigin = 45;
                break;
            case "WEB_INTRO_PANEL":
            case 46:
                m.botEntryPointOrigin = 46;
                break;
            case "WEB_NAVIGATION_BAR":
            case 47:
                m.botEntryPointOrigin = 47;
                break;
            case "GROUP_MEMBER":
            case 54:
                m.botEntryPointOrigin = 54;
                break;
            case "CHATLIST_SEARCH":
            case 55:
                m.botEntryPointOrigin = 55;
                break;
            case "NEW_CHAT_LIST":
            case 56:
                m.botEntryPointOrigin = 56;
                break;
            case "CONTACTS_TAB":
            case 57:
                m.botEntryPointOrigin = 57;
                break;
            default:
            }
            if (d.forwardScore != null) {
                m.forwardScore = d.forwardScore >>> 0;
            }
            return m;
        };

        BotMessageSharingInfo.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.botEntryPointOrigin = o.enums === $String ? "UNDEFINED_ENTRY_POINT" : 0;
                d.forwardScore = 0;
            }
            if (m.botEntryPointOrigin != null && $Object.hasOwnProperty.call(m, "botEntryPointOrigin")) {
                d.botEntryPointOrigin = o.enums === $String ? $root.AICommon.BotMetricsEntryPoint[m.botEntryPointOrigin] === $undefined ? m.botEntryPointOrigin : $root.AICommon.BotMetricsEntryPoint[m.botEntryPointOrigin] : m.botEntryPointOrigin;
            }
            if (m.forwardScore != null && $Object.hasOwnProperty.call(m, "forwardScore")) {
                d.forwardScore = m.forwardScore;
            }
            return d;
        };

        BotMessageSharingInfo.prototype.toJSON = function() {
            return BotMessageSharingInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMessageSharingInfo.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotMessageSharingInfo";
        };

        return BotMessageSharingInfo;
    })();

    AICommon.ForwardedAIBotMessageInfo = (function() {

        const ForwardedAIBotMessageInfo = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        ForwardedAIBotMessageInfo.prototype.botName = "";
        ForwardedAIBotMessageInfo.prototype.botJid = "";
        ForwardedAIBotMessageInfo.prototype.creatorName = "";

        ForwardedAIBotMessageInfo.create = function(properties) {
            return new ForwardedAIBotMessageInfo(properties);
        };

        ForwardedAIBotMessageInfo.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.botName != null && $Object.hasOwnProperty.call(m, "botName"))
                w.uint32(10).string(m.botName);
            if (m.botJid != null && $Object.hasOwnProperty.call(m, "botJid"))
                w.uint32(18).string(m.botJid);
            if (m.creatorName != null && $Object.hasOwnProperty.call(m, "creatorName"))
                w.uint32(26).string(m.creatorName);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        ForwardedAIBotMessageInfo.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.ForwardedAIBotMessageInfo();
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
                        m.botName = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.botJid = r.string();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.creatorName = r.string();
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

        ForwardedAIBotMessageInfo.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.ForwardedAIBotMessageInfo)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.ForwardedAIBotMessageInfo: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.ForwardedAIBotMessageInfo();
            if (d.botName != null) {
                m.botName = $String(d.botName);
            }
            if (d.botJid != null) {
                m.botJid = $String(d.botJid);
            }
            if (d.creatorName != null) {
                m.creatorName = $String(d.creatorName);
            }
            return m;
        };

        ForwardedAIBotMessageInfo.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.botName = "";
                d.botJid = "";
                d.creatorName = "";
            }
            if (m.botName != null && $Object.hasOwnProperty.call(m, "botName")) {
                d.botName = m.botName;
            }
            if (m.botJid != null && $Object.hasOwnProperty.call(m, "botJid")) {
                d.botJid = m.botJid;
            }
            if (m.creatorName != null && $Object.hasOwnProperty.call(m, "creatorName")) {
                d.creatorName = m.creatorName;
            }
            return d;
        };

        ForwardedAIBotMessageInfo.prototype.toJSON = function() {
            return ForwardedAIBotMessageInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        ForwardedAIBotMessageInfo.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.ForwardedAIBotMessageInfo";
        };

        return ForwardedAIBotMessageInfo;
    })();

    AICommon.BotFeedbackMessage = (function() {

        const BotFeedbackMessage = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotFeedbackMessage.prototype.messageKey = null;
        BotFeedbackMessage.prototype.kind = 0;
        BotFeedbackMessage.prototype.text = "";
        BotFeedbackMessage.prototype.kindNegative = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        BotFeedbackMessage.prototype.kindPositive = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        BotFeedbackMessage.prototype.kindReport = 0;
        BotFeedbackMessage.prototype.sideBySideSurveyMetadata = null;

        BotFeedbackMessage.create = function(properties) {
            return new BotFeedbackMessage(properties);
        };

        BotFeedbackMessage.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.messageKey != null && $Object.hasOwnProperty.call(m, "messageKey"))
                $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.encode(m.messageKey, w.uint32(10).fork(), q + 1).ldelim();
            if (m.kind != null && $Object.hasOwnProperty.call(m, "kind"))
                w.uint32(16).int32(m.kind);
            if (m.text != null && $Object.hasOwnProperty.call(m, "text"))
                w.uint32(26).string(m.text);
            if (m.kindNegative != null && $Object.hasOwnProperty.call(m, "kindNegative"))
                w.uint32(32).uint64(m.kindNegative);
            if (m.kindPositive != null && $Object.hasOwnProperty.call(m, "kindPositive"))
                w.uint32(40).uint64(m.kindPositive);
            if (m.kindReport != null && $Object.hasOwnProperty.call(m, "kindReport"))
                w.uint32(48).int32(m.kindReport);
            if (m.sideBySideSurveyMetadata != null && $Object.hasOwnProperty.call(m, "sideBySideSurveyMetadata"))
                $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.encode(m.sideBySideSurveyMetadata, w.uint32(58).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotFeedbackMessage.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotFeedbackMessage(), v;
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
                        m.messageKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.decode(r, r.uint32(), $undefined, q + 1, m.messageKey);
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotFeedbackMessage.BotFeedbackKind[v] !== $undefined) {
                            m.kind = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.text = r.string();
                        continue;
                    }
                case 4: {
                        if (u !== 0)
                            break;
                        m.kindNegative = r.uint64();
                        continue;
                    }
                case 5: {
                        if (u !== 0)
                            break;
                        m.kindPositive = r.uint64();
                        continue;
                    }
                case 6: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotFeedbackMessage.ReportKind[v] !== $undefined) {
                            m.kindReport = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 7: {
                        if (u !== 2)
                            break;
                        m.sideBySideSurveyMetadata = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.decode(r, r.uint32(), $undefined, q + 1, m.sideBySideSurveyMetadata);
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

        BotFeedbackMessage.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotFeedbackMessage)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotFeedbackMessage: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotFeedbackMessage();
            if (d.messageKey != null) {
                if (!$util.isObject(d.messageKey))
                    throw $TypeError(".AICommon.BotFeedbackMessage.messageKey: object expected");
                m.messageKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.fromObject(d.messageKey, q + 1);
            }
            switch (d.kind) {
            case "BOT_FEEDBACK_POSITIVE":
            case 0:
                m.kind = 0;
                break;
            case "BOT_FEEDBACK_NEGATIVE_GENERIC":
            case 1:
                m.kind = 1;
                break;
            case "BOT_FEEDBACK_NEGATIVE_HELPFUL":
            case 2:
                m.kind = 2;
                break;
            case "BOT_FEEDBACK_NEGATIVE_INTERESTING":
            case 3:
                m.kind = 3;
                break;
            case "BOT_FEEDBACK_NEGATIVE_ACCURATE":
            case 4:
                m.kind = 4;
                break;
            case "BOT_FEEDBACK_NEGATIVE_SAFE":
            case 5:
                m.kind = 5;
                break;
            case "BOT_FEEDBACK_NEGATIVE_OTHER":
            case 6:
                m.kind = 6;
                break;
            case "BOT_FEEDBACK_NEGATIVE_REFUSED":
            case 7:
                m.kind = 7;
                break;
            case "BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING":
            case 8:
                m.kind = 8;
                break;
            case "BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT":
            case 9:
                m.kind = 9;
                break;
            case "BOT_FEEDBACK_NEGATIVE_PERSONALIZED":
            case 10:
                m.kind = 10;
                break;
            case "BOT_FEEDBACK_NEGATIVE_CLARITY":
            case 11:
                m.kind = 11;
                break;
            case "BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON":
            case 12:
                m.kind = 12;
                break;
            case "BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY":
            case 13:
                m.kind = 13;
                break;
            case "BOT_FEEDBACK_NEGATIVE":
            case 14:
                m.kind = 14;
                break;
            default:
            }
            if (d.text != null) {
                m.text = $String(d.text);
            }
            if (d.kindNegative != null) {
                if ($util.Long)
                    m.kindNegative = $util.Long.fromValue(d.kindNegative, true);
                else if (typeof d.kindNegative === "string")
                    m.kindNegative = $parseInt(d.kindNegative, 10);
                else if (typeof d.kindNegative === "number")
                    m.kindNegative = d.kindNegative;
                else if (typeof d.kindNegative === "object")
                    m.kindNegative = new $util.LongBits(d.kindNegative.low >>> 0, d.kindNegative.high >>> 0).toNumber(true);
            }
            if (d.kindPositive != null) {
                if ($util.Long)
                    m.kindPositive = $util.Long.fromValue(d.kindPositive, true);
                else if (typeof d.kindPositive === "string")
                    m.kindPositive = $parseInt(d.kindPositive, 10);
                else if (typeof d.kindPositive === "number")
                    m.kindPositive = d.kindPositive;
                else if (typeof d.kindPositive === "object")
                    m.kindPositive = new $util.LongBits(d.kindPositive.low >>> 0, d.kindPositive.high >>> 0).toNumber(true);
            }
            switch (d.kindReport) {
            case "NONE":
            case 0:
                m.kindReport = 0;
                break;
            case "GENERIC":
            case 1:
                m.kindReport = 1;
                break;
            default:
            }
            if (d.sideBySideSurveyMetadata != null) {
                if (!$util.isObject(d.sideBySideSurveyMetadata))
                    throw $TypeError(".AICommon.BotFeedbackMessage.sideBySideSurveyMetadata: object expected");
                m.sideBySideSurveyMetadata = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.fromObject(d.sideBySideSurveyMetadata, q + 1);
            }
            return m;
        };

        BotFeedbackMessage.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.messageKey = null;
                d.kind = o.enums === $String ? "BOT_FEEDBACK_POSITIVE" : 0;
                d.text = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, true);
                    d.kindNegative = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.kindNegative = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, true);
                    d.kindPositive = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.kindPositive = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.kindReport = o.enums === $String ? "NONE" : 0;
                d.sideBySideSurveyMetadata = null;
            }
            if (m.messageKey != null && $Object.hasOwnProperty.call(m, "messageKey")) {
                d.messageKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.toObject(m.messageKey, o, q + 1);
            }
            if (m.kind != null && $Object.hasOwnProperty.call(m, "kind")) {
                d.kind = o.enums === $String ? $root.AICommon.BotFeedbackMessage.BotFeedbackKind[m.kind] === $undefined ? m.kind : $root.AICommon.BotFeedbackMessage.BotFeedbackKind[m.kind] : m.kind;
            }
            if (m.text != null && $Object.hasOwnProperty.call(m, "text")) {
                d.text = m.text;
            }
            if (m.kindNegative != null && $Object.hasOwnProperty.call(m, "kindNegative")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.kindNegative = typeof m.kindNegative === "number" ? $BigInt(m.kindNegative) : $util.Long.fromBits(m.kindNegative.low >>> 0, m.kindNegative.high >>> 0, true).toBigInt();
                else if (typeof m.kindNegative === "number")
                    d.kindNegative = o.longs === $String ? $String(m.kindNegative) : m.kindNegative;
                else
                    d.kindNegative = o.longs === String ? longToString(m.kindNegative, true) : o.longs === Number ? longToNumber(m.kindNegative, true) : m.kindNegative;
            }
            if (m.kindPositive != null && $Object.hasOwnProperty.call(m, "kindPositive")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.kindPositive = typeof m.kindPositive === "number" ? $BigInt(m.kindPositive) : $util.Long.fromBits(m.kindPositive.low >>> 0, m.kindPositive.high >>> 0, true).toBigInt();
                else if (typeof m.kindPositive === "number")
                    d.kindPositive = o.longs === $String ? $String(m.kindPositive) : m.kindPositive;
                else
                    d.kindPositive = o.longs === String ? longToString(m.kindPositive, true) : o.longs === Number ? longToNumber(m.kindPositive, true) : m.kindPositive;
            }
            if (m.kindReport != null && $Object.hasOwnProperty.call(m, "kindReport")) {
                d.kindReport = o.enums === $String ? $root.AICommon.BotFeedbackMessage.ReportKind[m.kindReport] === $undefined ? m.kindReport : $root.AICommon.BotFeedbackMessage.ReportKind[m.kindReport] : m.kindReport;
            }
            if (m.sideBySideSurveyMetadata != null && $Object.hasOwnProperty.call(m, "sideBySideSurveyMetadata")) {
                d.sideBySideSurveyMetadata = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.toObject(m.sideBySideSurveyMetadata, o, q + 1);
            }
            return d;
        };

        BotFeedbackMessage.prototype.toJSON = function() {
            return BotFeedbackMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotFeedbackMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotFeedbackMessage";
        };

        BotFeedbackMessage.BotFeedbackKind = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "BOT_FEEDBACK_POSITIVE"] = 0;
            values[valuesById[1] = "BOT_FEEDBACK_NEGATIVE_GENERIC"] = 1;
            values[valuesById[2] = "BOT_FEEDBACK_NEGATIVE_HELPFUL"] = 2;
            values[valuesById[3] = "BOT_FEEDBACK_NEGATIVE_INTERESTING"] = 3;
            values[valuesById[4] = "BOT_FEEDBACK_NEGATIVE_ACCURATE"] = 4;
            values[valuesById[5] = "BOT_FEEDBACK_NEGATIVE_SAFE"] = 5;
            values[valuesById[6] = "BOT_FEEDBACK_NEGATIVE_OTHER"] = 6;
            values[valuesById[7] = "BOT_FEEDBACK_NEGATIVE_REFUSED"] = 7;
            values[valuesById[8] = "BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING"] = 8;
            values[valuesById[9] = "BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT"] = 9;
            values[valuesById[10] = "BOT_FEEDBACK_NEGATIVE_PERSONALIZED"] = 10;
            values[valuesById[11] = "BOT_FEEDBACK_NEGATIVE_CLARITY"] = 11;
            values[valuesById[12] = "BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON"] = 12;
            values[valuesById[13] = "BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY"] = 13;
            values[valuesById[14] = "BOT_FEEDBACK_NEGATIVE"] = 14;
            return values;
        })();

        BotFeedbackMessage.BotFeedbackKindMultipleNegative = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[1] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC"] = 1;
            values[valuesById[2] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL"] = 2;
            values[valuesById[4] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING"] = 4;
            values[valuesById[8] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE"] = 8;
            values[valuesById[16] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE"] = 16;
            values[valuesById[32] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER"] = 32;
            values[valuesById[64] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED"] = 64;
            values[valuesById[128] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING"] = 128;
            values[valuesById[256] = "BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT"] = 256;
            return values;
        })();

        BotFeedbackMessage.BotFeedbackKindMultiplePositive = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[1] = "BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC"] = 1;
            return values;
        })();

        BotFeedbackMessage.ReportKind = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "GENERIC"] = 1;
            return values;
        })();

        BotFeedbackMessage.SideBySideSurveyMetadata = (function() {

            const SideBySideSurveyMetadata = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            SideBySideSurveyMetadata.prototype.selectedRequestId = "";
            SideBySideSurveyMetadata.prototype.surveyId = 0;
            SideBySideSurveyMetadata.prototype.simonSessionFbid = "";
            SideBySideSurveyMetadata.prototype.responseOtid = "";
            SideBySideSurveyMetadata.prototype.responseTimestampMsString = "";
            SideBySideSurveyMetadata.prototype.isSelectedResponsePrimary = false;
            SideBySideSurveyMetadata.prototype.messageIdToEdit = "";
            SideBySideSurveyMetadata.prototype.analyticsData = null;
            SideBySideSurveyMetadata.prototype.metaAiAnalyticsData = null;

            SideBySideSurveyMetadata.create = function(properties) {
                return new SideBySideSurveyMetadata(properties);
            };

            SideBySideSurveyMetadata.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.selectedRequestId != null && $Object.hasOwnProperty.call(m, "selectedRequestId"))
                    w.uint32(10).string(m.selectedRequestId);
                if (m.surveyId != null && $Object.hasOwnProperty.call(m, "surveyId"))
                    w.uint32(16).uint32(m.surveyId);
                if (m.simonSessionFbid != null && $Object.hasOwnProperty.call(m, "simonSessionFbid"))
                    w.uint32(26).string(m.simonSessionFbid);
                if (m.responseOtid != null && $Object.hasOwnProperty.call(m, "responseOtid"))
                    w.uint32(34).string(m.responseOtid);
                if (m.responseTimestampMsString != null && $Object.hasOwnProperty.call(m, "responseTimestampMsString"))
                    w.uint32(42).string(m.responseTimestampMsString);
                if (m.isSelectedResponsePrimary != null && $Object.hasOwnProperty.call(m, "isSelectedResponsePrimary"))
                    w.uint32(48).bool(m.isSelectedResponsePrimary);
                if (m.messageIdToEdit != null && $Object.hasOwnProperty.call(m, "messageIdToEdit"))
                    w.uint32(58).string(m.messageIdToEdit);
                if (m.analyticsData != null && $Object.hasOwnProperty.call(m, "analyticsData"))
                    $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.encode(m.analyticsData, w.uint32(66).fork(), q + 1).ldelim();
                if (m.metaAiAnalyticsData != null && $Object.hasOwnProperty.call(m, "metaAiAnalyticsData"))
                    $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.encode(m.metaAiAnalyticsData, w.uint32(74).fork(), q + 1).ldelim();
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            SideBySideSurveyMetadata.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata();
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
                            m.selectedRequestId = r.string();
                            continue;
                        }
                    case 2: {
                            if (u !== 0)
                                break;
                            m.surveyId = r.uint32();
                            continue;
                        }
                    case 3: {
                            if (u !== 2)
                                break;
                            m.simonSessionFbid = r.string();
                            continue;
                        }
                    case 4: {
                            if (u !== 2)
                                break;
                            m.responseOtid = r.string();
                            continue;
                        }
                    case 5: {
                            if (u !== 2)
                                break;
                            m.responseTimestampMsString = r.string();
                            continue;
                        }
                    case 6: {
                            if (u !== 0)
                                break;
                            m.isSelectedResponsePrimary = r.bool();
                            continue;
                        }
                    case 7: {
                            if (u !== 2)
                                break;
                            m.messageIdToEdit = r.string();
                            continue;
                        }
                    case 8: {
                            if (u !== 2)
                                break;
                            m.analyticsData = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.decode(r, r.uint32(), $undefined, q + 1, m.analyticsData);
                            continue;
                        }
                    case 9: {
                            if (u !== 2)
                                break;
                            m.metaAiAnalyticsData = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.decode(r, r.uint32(), $undefined, q + 1, m.metaAiAnalyticsData);
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

            SideBySideSurveyMetadata.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata();
                if (d.selectedRequestId != null) {
                    m.selectedRequestId = $String(d.selectedRequestId);
                }
                if (d.surveyId != null) {
                    m.surveyId = d.surveyId >>> 0;
                }
                if (d.simonSessionFbid != null) {
                    m.simonSessionFbid = $String(d.simonSessionFbid);
                }
                if (d.responseOtid != null) {
                    m.responseOtid = $String(d.responseOtid);
                }
                if (d.responseTimestampMsString != null) {
                    m.responseTimestampMsString = $String(d.responseTimestampMsString);
                }
                if (d.isSelectedResponsePrimary != null) {
                    m.isSelectedResponsePrimary = $Boolean(d.isSelectedResponsePrimary);
                }
                if (d.messageIdToEdit != null) {
                    m.messageIdToEdit = $String(d.messageIdToEdit);
                }
                if (d.analyticsData != null) {
                    if (!$util.isObject(d.analyticsData))
                        throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.analyticsData: object expected");
                    m.analyticsData = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.fromObject(d.analyticsData, q + 1);
                }
                if (d.metaAiAnalyticsData != null) {
                    if (!$util.isObject(d.metaAiAnalyticsData))
                        throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.metaAiAnalyticsData: object expected");
                    m.metaAiAnalyticsData = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.fromObject(d.metaAiAnalyticsData, q + 1);
                }
                return m;
            };

            SideBySideSurveyMetadata.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.selectedRequestId = "";
                    d.surveyId = 0;
                    d.simonSessionFbid = "";
                    d.responseOtid = "";
                    d.responseTimestampMsString = "";
                    d.isSelectedResponsePrimary = false;
                    d.messageIdToEdit = "";
                    d.analyticsData = null;
                    d.metaAiAnalyticsData = null;
                }
                if (m.selectedRequestId != null && $Object.hasOwnProperty.call(m, "selectedRequestId")) {
                    d.selectedRequestId = m.selectedRequestId;
                }
                if (m.surveyId != null && $Object.hasOwnProperty.call(m, "surveyId")) {
                    d.surveyId = m.surveyId;
                }
                if (m.simonSessionFbid != null && $Object.hasOwnProperty.call(m, "simonSessionFbid")) {
                    d.simonSessionFbid = m.simonSessionFbid;
                }
                if (m.responseOtid != null && $Object.hasOwnProperty.call(m, "responseOtid")) {
                    d.responseOtid = m.responseOtid;
                }
                if (m.responseTimestampMsString != null && $Object.hasOwnProperty.call(m, "responseTimestampMsString")) {
                    d.responseTimestampMsString = m.responseTimestampMsString;
                }
                if (m.isSelectedResponsePrimary != null && $Object.hasOwnProperty.call(m, "isSelectedResponsePrimary")) {
                    d.isSelectedResponsePrimary = m.isSelectedResponsePrimary;
                }
                if (m.messageIdToEdit != null && $Object.hasOwnProperty.call(m, "messageIdToEdit")) {
                    d.messageIdToEdit = m.messageIdToEdit;
                }
                if (m.analyticsData != null && $Object.hasOwnProperty.call(m, "analyticsData")) {
                    d.analyticsData = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData.toObject(m.analyticsData, o, q + 1);
                }
                if (m.metaAiAnalyticsData != null && $Object.hasOwnProperty.call(m, "metaAiAnalyticsData")) {
                    d.metaAiAnalyticsData = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.toObject(m.metaAiAnalyticsData, o, q + 1);
                }
                return d;
            };

            SideBySideSurveyMetadata.prototype.toJSON = function() {
                return SideBySideSurveyMetadata.toObject(this, $protobuf.util.toJSONOptions);
            };

            SideBySideSurveyMetadata.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.BotFeedbackMessage.SideBySideSurveyMetadata";
            };

            SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData = (function() {

                const SideBySideSurveyAnalyticsData = function (p) {
                    if (p)
                        for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                };

                SideBySideSurveyAnalyticsData.prototype.tessaEvent = "";
                SideBySideSurveyAnalyticsData.prototype.tessaSessionFbid = "";
                SideBySideSurveyAnalyticsData.prototype.simonSessionFbid = "";

                SideBySideSurveyAnalyticsData.create = function(properties) {
                    return new SideBySideSurveyAnalyticsData(properties);
                };

                SideBySideSurveyAnalyticsData.encode = function (m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (m.tessaEvent != null && $Object.hasOwnProperty.call(m, "tessaEvent"))
                        w.uint32(10).string(m.tessaEvent);
                    if (m.tessaSessionFbid != null && $Object.hasOwnProperty.call(m, "tessaSessionFbid"))
                        w.uint32(18).string(m.tessaSessionFbid);
                    if (m.simonSessionFbid != null && $Object.hasOwnProperty.call(m, "simonSessionFbid"))
                        w.uint32(26).string(m.simonSessionFbid);
                    if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                        for (var i = 0; i < m.$unknowns.length; ++i)
                            w.raw(m.$unknowns[i]);
                    return w;
                };

                SideBySideSurveyAnalyticsData.decode = function (r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === $undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData();
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
                                m.tessaEvent = r.string();
                                continue;
                            }
                        case 2: {
                                if (u !== 2)
                                    break;
                                m.tessaSessionFbid = r.string();
                                continue;
                            }
                        case 3: {
                                if (u !== 2)
                                    break;
                                m.simonSessionFbid = r.string();
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

                SideBySideSurveyAnalyticsData.fromObject = function (d, q) {
                    if (d instanceof $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData)
                        return d;
                    if (!$util.isObject(d))
                        throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData: object expected");
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var m = new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData();
                    if (d.tessaEvent != null) {
                        m.tessaEvent = $String(d.tessaEvent);
                    }
                    if (d.tessaSessionFbid != null) {
                        m.tessaSessionFbid = $String(d.tessaSessionFbid);
                    }
                    if (d.simonSessionFbid != null) {
                        m.simonSessionFbid = $String(d.simonSessionFbid);
                    }
                    return m;
                };

                SideBySideSurveyAnalyticsData.toObject = function (m, o, q) {
                    if (!o)
                        o = {};
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var d = {};
                    if (o.defaults) {
                        d.tessaEvent = "";
                        d.tessaSessionFbid = "";
                        d.simonSessionFbid = "";
                    }
                    if (m.tessaEvent != null && $Object.hasOwnProperty.call(m, "tessaEvent")) {
                        d.tessaEvent = m.tessaEvent;
                    }
                    if (m.tessaSessionFbid != null && $Object.hasOwnProperty.call(m, "tessaSessionFbid")) {
                        d.tessaSessionFbid = m.tessaSessionFbid;
                    }
                    if (m.simonSessionFbid != null && $Object.hasOwnProperty.call(m, "simonSessionFbid")) {
                        d.simonSessionFbid = m.simonSessionFbid;
                    }
                    return d;
                };

                SideBySideSurveyAnalyticsData.prototype.toJSON = function() {
                    return SideBySideSurveyAnalyticsData.toObject(this, $protobuf.util.toJSONOptions);
                };

                SideBySideSurveyAnalyticsData.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SideBySideSurveyAnalyticsData";
                };

                return SideBySideSurveyAnalyticsData;
            })();

            SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData = (function() {

                const SidebySideSurveyMetaAiAnalyticsData = function (p) {
                    if (p)
                        for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                };

                SidebySideSurveyMetaAiAnalyticsData.prototype.surveyId = 0;
                SidebySideSurveyMetaAiAnalyticsData.prototype.primaryResponseId = "";
                SidebySideSurveyMetaAiAnalyticsData.prototype.testArmName = "";
                SidebySideSurveyMetaAiAnalyticsData.prototype.timestampMsString = "";
                SidebySideSurveyMetaAiAnalyticsData.prototype.ctaImpressionEvent = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.ctaClickEvent = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.cardImpressionEvent = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.responseEvent = null;
                SidebySideSurveyMetaAiAnalyticsData.prototype.abandonEvent = null;

                SidebySideSurveyMetaAiAnalyticsData.create = function(properties) {
                    return new SidebySideSurveyMetaAiAnalyticsData(properties);
                };

                SidebySideSurveyMetaAiAnalyticsData.encode = function (m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (m.surveyId != null && $Object.hasOwnProperty.call(m, "surveyId"))
                        w.uint32(8).uint32(m.surveyId);
                    if (m.primaryResponseId != null && $Object.hasOwnProperty.call(m, "primaryResponseId"))
                        w.uint32(18).string(m.primaryResponseId);
                    if (m.testArmName != null && $Object.hasOwnProperty.call(m, "testArmName"))
                        w.uint32(26).string(m.testArmName);
                    if (m.timestampMsString != null && $Object.hasOwnProperty.call(m, "timestampMsString"))
                        w.uint32(34).string(m.timestampMsString);
                    if (m.ctaImpressionEvent != null && $Object.hasOwnProperty.call(m, "ctaImpressionEvent"))
                        $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.encode(m.ctaImpressionEvent, w.uint32(42).fork(), q + 1).ldelim();
                    if (m.ctaClickEvent != null && $Object.hasOwnProperty.call(m, "ctaClickEvent"))
                        $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.encode(m.ctaClickEvent, w.uint32(50).fork(), q + 1).ldelim();
                    if (m.cardImpressionEvent != null && $Object.hasOwnProperty.call(m, "cardImpressionEvent"))
                        $root.AICommon.SideBySideSurveyCardImpressionEventData.encode(m.cardImpressionEvent, w.uint32(58).fork(), q + 1).ldelim();
                    if (m.responseEvent != null && $Object.hasOwnProperty.call(m, "responseEvent"))
                        $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.encode(m.responseEvent, w.uint32(66).fork(), q + 1).ldelim();
                    if (m.abandonEvent != null && $Object.hasOwnProperty.call(m, "abandonEvent"))
                        $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.encode(m.abandonEvent, w.uint32(74).fork(), q + 1).ldelim();
                    if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                        for (var i = 0; i < m.$unknowns.length; ++i)
                            w.raw(m.$unknowns[i]);
                    return w;
                };

                SidebySideSurveyMetaAiAnalyticsData.decode = function (r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === $undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData();
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
                                m.surveyId = r.uint32();
                                continue;
                            }
                        case 2: {
                                if (u !== 2)
                                    break;
                                m.primaryResponseId = r.string();
                                continue;
                            }
                        case 3: {
                                if (u !== 2)
                                    break;
                                m.testArmName = r.string();
                                continue;
                            }
                        case 4: {
                                if (u !== 2)
                                    break;
                                m.timestampMsString = r.string();
                                continue;
                            }
                        case 5: {
                                if (u !== 2)
                                    break;
                                m.ctaImpressionEvent = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.decode(r, r.uint32(), $undefined, q + 1, m.ctaImpressionEvent);
                                continue;
                            }
                        case 6: {
                                if (u !== 2)
                                    break;
                                m.ctaClickEvent = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.decode(r, r.uint32(), $undefined, q + 1, m.ctaClickEvent);
                                continue;
                            }
                        case 7: {
                                if (u !== 2)
                                    break;
                                m.cardImpressionEvent = $root.AICommon.SideBySideSurveyCardImpressionEventData.decode(r, r.uint32(), $undefined, q + 1, m.cardImpressionEvent);
                                continue;
                            }
                        case 8: {
                                if (u !== 2)
                                    break;
                                m.responseEvent = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.decode(r, r.uint32(), $undefined, q + 1, m.responseEvent);
                                continue;
                            }
                        case 9: {
                                if (u !== 2)
                                    break;
                                m.abandonEvent = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.decode(r, r.uint32(), $undefined, q + 1, m.abandonEvent);
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

                SidebySideSurveyMetaAiAnalyticsData.fromObject = function (d, q) {
                    if (d instanceof $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData)
                        return d;
                    if (!$util.isObject(d))
                        throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData: object expected");
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var m = new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData();
                    if (d.surveyId != null) {
                        m.surveyId = d.surveyId >>> 0;
                    }
                    if (d.primaryResponseId != null) {
                        m.primaryResponseId = $String(d.primaryResponseId);
                    }
                    if (d.testArmName != null) {
                        m.testArmName = $String(d.testArmName);
                    }
                    if (d.timestampMsString != null) {
                        m.timestampMsString = $String(d.timestampMsString);
                    }
                    if (d.ctaImpressionEvent != null) {
                        if (!$util.isObject(d.ctaImpressionEvent))
                            throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ctaImpressionEvent: object expected");
                        m.ctaImpressionEvent = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.fromObject(d.ctaImpressionEvent, q + 1);
                    }
                    if (d.ctaClickEvent != null) {
                        if (!$util.isObject(d.ctaClickEvent))
                            throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.ctaClickEvent: object expected");
                        m.ctaClickEvent = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.fromObject(d.ctaClickEvent, q + 1);
                    }
                    if (d.cardImpressionEvent != null) {
                        if (!$util.isObject(d.cardImpressionEvent))
                            throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.cardImpressionEvent: object expected");
                        m.cardImpressionEvent = $root.AICommon.SideBySideSurveyCardImpressionEventData.fromObject(d.cardImpressionEvent, q + 1);
                    }
                    if (d.responseEvent != null) {
                        if (!$util.isObject(d.responseEvent))
                            throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.responseEvent: object expected");
                        m.responseEvent = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.fromObject(d.responseEvent, q + 1);
                    }
                    if (d.abandonEvent != null) {
                        if (!$util.isObject(d.abandonEvent))
                            throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.abandonEvent: object expected");
                        m.abandonEvent = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.fromObject(d.abandonEvent, q + 1);
                    }
                    return m;
                };

                SidebySideSurveyMetaAiAnalyticsData.toObject = function (m, o, q) {
                    if (!o)
                        o = {};
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var d = {};
                    if (o.defaults) {
                        d.surveyId = 0;
                        d.primaryResponseId = "";
                        d.testArmName = "";
                        d.timestampMsString = "";
                        d.ctaImpressionEvent = null;
                        d.ctaClickEvent = null;
                        d.cardImpressionEvent = null;
                        d.responseEvent = null;
                        d.abandonEvent = null;
                    }
                    if (m.surveyId != null && $Object.hasOwnProperty.call(m, "surveyId")) {
                        d.surveyId = m.surveyId;
                    }
                    if (m.primaryResponseId != null && $Object.hasOwnProperty.call(m, "primaryResponseId")) {
                        d.primaryResponseId = m.primaryResponseId;
                    }
                    if (m.testArmName != null && $Object.hasOwnProperty.call(m, "testArmName")) {
                        d.testArmName = m.testArmName;
                    }
                    if (m.timestampMsString != null && $Object.hasOwnProperty.call(m, "timestampMsString")) {
                        d.timestampMsString = m.timestampMsString;
                    }
                    if (m.ctaImpressionEvent != null && $Object.hasOwnProperty.call(m, "ctaImpressionEvent")) {
                        d.ctaImpressionEvent = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData.toObject(m.ctaImpressionEvent, o, q + 1);
                    }
                    if (m.ctaClickEvent != null && $Object.hasOwnProperty.call(m, "ctaClickEvent")) {
                        d.ctaClickEvent = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData.toObject(m.ctaClickEvent, o, q + 1);
                    }
                    if (m.cardImpressionEvent != null && $Object.hasOwnProperty.call(m, "cardImpressionEvent")) {
                        d.cardImpressionEvent = $root.AICommon.SideBySideSurveyCardImpressionEventData.toObject(m.cardImpressionEvent, o, q + 1);
                    }
                    if (m.responseEvent != null && $Object.hasOwnProperty.call(m, "responseEvent")) {
                        d.responseEvent = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData.toObject(m.responseEvent, o, q + 1);
                    }
                    if (m.abandonEvent != null && $Object.hasOwnProperty.call(m, "abandonEvent")) {
                        d.abandonEvent = $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData.toObject(m.abandonEvent, o, q + 1);
                    }
                    return d;
                };

                SidebySideSurveyMetaAiAnalyticsData.prototype.toJSON = function() {
                    return SidebySideSurveyMetaAiAnalyticsData.toObject(this, $protobuf.util.toJSONOptions);
                };

                SidebySideSurveyMetaAiAnalyticsData.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData";
                };

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData = (function() {

                    const SideBySideSurveyAbandonEventData = function (p) {
                        if (p)
                            for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    };

                    SideBySideSurveyAbandonEventData.prototype.abandonDwellTimeMsString = "";

                    SideBySideSurveyAbandonEventData.create = function(properties) {
                        return new SideBySideSurveyAbandonEventData(properties);
                    };

                    SideBySideSurveyAbandonEventData.encode = function (m, w, q) {
                        if (!w)
                            w = $Writer.create();
                        if (q === $undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (m.abandonDwellTimeMsString != null && $Object.hasOwnProperty.call(m, "abandonDwellTimeMsString"))
                            w.uint32(10).string(m.abandonDwellTimeMsString);
                        if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                            for (var i = 0; i < m.$unknowns.length; ++i)
                                w.raw(m.$unknowns[i]);
                        return w;
                    };

                    SideBySideSurveyAbandonEventData.decode = function (r, l, z, q, g) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (q === $undefined)
                            q = 0;
                        if (q > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData();
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
                                    m.abandonDwellTimeMsString = r.string();
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

                    SideBySideSurveyAbandonEventData.fromObject = function (d, q) {
                        if (d instanceof $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData)
                            return d;
                        if (!$util.isObject(d))
                            throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData: object expected");
                        if (q === $undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var m = new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData();
                        if (d.abandonDwellTimeMsString != null) {
                            m.abandonDwellTimeMsString = $String(d.abandonDwellTimeMsString);
                        }
                        return m;
                    };

                    SideBySideSurveyAbandonEventData.toObject = function (m, o, q) {
                        if (!o)
                            o = {};
                        if (q === $undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var d = {};
                        if (o.defaults) {
                            d.abandonDwellTimeMsString = "";
                        }
                        if (m.abandonDwellTimeMsString != null && $Object.hasOwnProperty.call(m, "abandonDwellTimeMsString")) {
                            d.abandonDwellTimeMsString = m.abandonDwellTimeMsString;
                        }
                        return d;
                    };

                    SideBySideSurveyAbandonEventData.prototype.toJSON = function() {
                        return SideBySideSurveyAbandonEventData.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    SideBySideSurveyAbandonEventData.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyAbandonEventData";
                    };

                    return SideBySideSurveyAbandonEventData;
                })();

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData = (function() {

                    const SideBySideSurveyCTAClickEventData = function (p) {
                        if (p)
                            for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    };

                    SideBySideSurveyCTAClickEventData.prototype.isSurveyExpired = false;
                    SideBySideSurveyCTAClickEventData.prototype.clickDwellTimeMsString = "";

                    SideBySideSurveyCTAClickEventData.create = function(properties) {
                        return new SideBySideSurveyCTAClickEventData(properties);
                    };

                    SideBySideSurveyCTAClickEventData.encode = function (m, w, q) {
                        if (!w)
                            w = $Writer.create();
                        if (q === $undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (m.isSurveyExpired != null && $Object.hasOwnProperty.call(m, "isSurveyExpired"))
                            w.uint32(8).bool(m.isSurveyExpired);
                        if (m.clickDwellTimeMsString != null && $Object.hasOwnProperty.call(m, "clickDwellTimeMsString"))
                            w.uint32(18).string(m.clickDwellTimeMsString);
                        if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                            for (var i = 0; i < m.$unknowns.length; ++i)
                                w.raw(m.$unknowns[i]);
                        return w;
                    };

                    SideBySideSurveyCTAClickEventData.decode = function (r, l, z, q, g) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (q === $undefined)
                            q = 0;
                        if (q > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData();
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
                                    m.isSurveyExpired = r.bool();
                                    continue;
                                }
                            case 2: {
                                    if (u !== 2)
                                        break;
                                    m.clickDwellTimeMsString = r.string();
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

                    SideBySideSurveyCTAClickEventData.fromObject = function (d, q) {
                        if (d instanceof $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData)
                            return d;
                        if (!$util.isObject(d))
                            throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData: object expected");
                        if (q === $undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var m = new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData();
                        if (d.isSurveyExpired != null) {
                            m.isSurveyExpired = $Boolean(d.isSurveyExpired);
                        }
                        if (d.clickDwellTimeMsString != null) {
                            m.clickDwellTimeMsString = $String(d.clickDwellTimeMsString);
                        }
                        return m;
                    };

                    SideBySideSurveyCTAClickEventData.toObject = function (m, o, q) {
                        if (!o)
                            o = {};
                        if (q === $undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var d = {};
                        if (o.defaults) {
                            d.isSurveyExpired = false;
                            d.clickDwellTimeMsString = "";
                        }
                        if (m.isSurveyExpired != null && $Object.hasOwnProperty.call(m, "isSurveyExpired")) {
                            d.isSurveyExpired = m.isSurveyExpired;
                        }
                        if (m.clickDwellTimeMsString != null && $Object.hasOwnProperty.call(m, "clickDwellTimeMsString")) {
                            d.clickDwellTimeMsString = m.clickDwellTimeMsString;
                        }
                        return d;
                    };

                    SideBySideSurveyCTAClickEventData.prototype.toJSON = function() {
                        return SideBySideSurveyCTAClickEventData.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    SideBySideSurveyCTAClickEventData.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAClickEventData";
                    };

                    return SideBySideSurveyCTAClickEventData;
                })();

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData = (function() {

                    const SideBySideSurveyCTAImpressionEventData = function (p) {
                        if (p)
                            for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    };

                    SideBySideSurveyCTAImpressionEventData.prototype.isSurveyExpired = false;

                    SideBySideSurveyCTAImpressionEventData.create = function(properties) {
                        return new SideBySideSurveyCTAImpressionEventData(properties);
                    };

                    SideBySideSurveyCTAImpressionEventData.encode = function (m, w, q) {
                        if (!w)
                            w = $Writer.create();
                        if (q === $undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (m.isSurveyExpired != null && $Object.hasOwnProperty.call(m, "isSurveyExpired"))
                            w.uint32(8).bool(m.isSurveyExpired);
                        if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                            for (var i = 0; i < m.$unknowns.length; ++i)
                                w.raw(m.$unknowns[i]);
                        return w;
                    };

                    SideBySideSurveyCTAImpressionEventData.decode = function (r, l, z, q, g) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (q === $undefined)
                            q = 0;
                        if (q > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData();
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
                                    m.isSurveyExpired = r.bool();
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

                    SideBySideSurveyCTAImpressionEventData.fromObject = function (d, q) {
                        if (d instanceof $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData)
                            return d;
                        if (!$util.isObject(d))
                            throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData: object expected");
                        if (q === $undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var m = new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData();
                        if (d.isSurveyExpired != null) {
                            m.isSurveyExpired = $Boolean(d.isSurveyExpired);
                        }
                        return m;
                    };

                    SideBySideSurveyCTAImpressionEventData.toObject = function (m, o, q) {
                        if (!o)
                            o = {};
                        if (q === $undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var d = {};
                        if (o.defaults) {
                            d.isSurveyExpired = false;
                        }
                        if (m.isSurveyExpired != null && $Object.hasOwnProperty.call(m, "isSurveyExpired")) {
                            d.isSurveyExpired = m.isSurveyExpired;
                        }
                        return d;
                    };

                    SideBySideSurveyCTAImpressionEventData.prototype.toJSON = function() {
                        return SideBySideSurveyCTAImpressionEventData.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    SideBySideSurveyCTAImpressionEventData.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyCTAImpressionEventData";
                    };

                    return SideBySideSurveyCTAImpressionEventData;
                })();

                SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData = (function() {

                    const SideBySideSurveyResponseEventData = function (p) {
                        if (p)
                            for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    };

                    SideBySideSurveyResponseEventData.prototype.responseDwellTimeMsString = "";
                    SideBySideSurveyResponseEventData.prototype.selectedResponseId = "";

                    SideBySideSurveyResponseEventData.create = function(properties) {
                        return new SideBySideSurveyResponseEventData(properties);
                    };

                    SideBySideSurveyResponseEventData.encode = function (m, w, q) {
                        if (!w)
                            w = $Writer.create();
                        if (q === $undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        if (m.responseDwellTimeMsString != null && $Object.hasOwnProperty.call(m, "responseDwellTimeMsString"))
                            w.uint32(10).string(m.responseDwellTimeMsString);
                        if (m.selectedResponseId != null && $Object.hasOwnProperty.call(m, "selectedResponseId"))
                            w.uint32(18).string(m.selectedResponseId);
                        if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                            for (var i = 0; i < m.$unknowns.length; ++i)
                                w.raw(m.$unknowns[i]);
                        return w;
                    };

                    SideBySideSurveyResponseEventData.decode = function (r, l, z, q, g) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (q === $undefined)
                            q = 0;
                        if (q > $Reader.recursionLimit)
                            throw $Error("max depth exceeded");
                        var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData();
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
                                    m.responseDwellTimeMsString = r.string();
                                    continue;
                                }
                            case 2: {
                                    if (u !== 2)
                                        break;
                                    m.selectedResponseId = r.string();
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

                    SideBySideSurveyResponseEventData.fromObject = function (d, q) {
                        if (d instanceof $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData)
                            return d;
                        if (!$util.isObject(d))
                            throw $TypeError(".AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData: object expected");
                        if (q === $undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var m = new $root.AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData();
                        if (d.responseDwellTimeMsString != null) {
                            m.responseDwellTimeMsString = $String(d.responseDwellTimeMsString);
                        }
                        if (d.selectedResponseId != null) {
                            m.selectedResponseId = $String(d.selectedResponseId);
                        }
                        return m;
                    };

                    SideBySideSurveyResponseEventData.toObject = function (m, o, q) {
                        if (!o)
                            o = {};
                        if (q === $undefined)
                            q = 0;
                        if (q > $util.recursionLimit)
                            throw $Error("max depth exceeded");
                        var d = {};
                        if (o.defaults) {
                            d.responseDwellTimeMsString = "";
                            d.selectedResponseId = "";
                        }
                        if (m.responseDwellTimeMsString != null && $Object.hasOwnProperty.call(m, "responseDwellTimeMsString")) {
                            d.responseDwellTimeMsString = m.responseDwellTimeMsString;
                        }
                        if (m.selectedResponseId != null && $Object.hasOwnProperty.call(m, "selectedResponseId")) {
                            d.selectedResponseId = m.selectedResponseId;
                        }
                        return d;
                    };

                    SideBySideSurveyResponseEventData.prototype.toJSON = function() {
                        return SideBySideSurveyResponseEventData.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    SideBySideSurveyResponseEventData.getTypeUrl = function(prefix) {
                        if (prefix === $undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/AICommon.BotFeedbackMessage.SideBySideSurveyMetadata.SidebySideSurveyMetaAiAnalyticsData.SideBySideSurveyResponseEventData";
                    };

                    return SideBySideSurveyResponseEventData;
                })();

                return SidebySideSurveyMetaAiAnalyticsData;
            })();

            return SideBySideSurveyMetadata;
        })();

        return BotFeedbackMessage;
    })();

    AICommon.BotGroupParticipantMetadata = (function() {

        const BotGroupParticipantMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotGroupParticipantMetadata.prototype.botFbid = "";

        BotGroupParticipantMetadata.create = function(properties) {
            return new BotGroupParticipantMetadata(properties);
        };

        BotGroupParticipantMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.botFbid != null && $Object.hasOwnProperty.call(m, "botFbid"))
                w.uint32(10).string(m.botFbid);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotGroupParticipantMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotGroupParticipantMetadata();
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
                        m.botFbid = r.string();
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

        BotGroupParticipantMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotGroupParticipantMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotGroupParticipantMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotGroupParticipantMetadata();
            if (d.botFbid != null) {
                m.botFbid = $String(d.botFbid);
            }
            return m;
        };

        BotGroupParticipantMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.botFbid = "";
            }
            if (m.botFbid != null && $Object.hasOwnProperty.call(m, "botFbid")) {
                d.botFbid = m.botFbid;
            }
            return d;
        };

        BotGroupParticipantMetadata.prototype.toJSON = function() {
            return BotGroupParticipantMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotGroupParticipantMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotGroupParticipantMetadata";
        };

        return BotGroupParticipantMetadata;
    })();

    AICommon.BotRenderingConfigMetadata = (function() {

        const BotRenderingConfigMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotRenderingConfigMetadata.prototype.bloksVersioningId = "";
        BotRenderingConfigMetadata.prototype.pixelDensity = 0;

        BotRenderingConfigMetadata.create = function(properties) {
            return new BotRenderingConfigMetadata(properties);
        };

        BotRenderingConfigMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.bloksVersioningId != null && $Object.hasOwnProperty.call(m, "bloksVersioningId"))
                w.uint32(10).string(m.bloksVersioningId);
            if (m.pixelDensity != null && $Object.hasOwnProperty.call(m, "pixelDensity"))
                w.uint32(17).double(m.pixelDensity);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotRenderingConfigMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotRenderingConfigMetadata();
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
                        m.bloksVersioningId = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 1)
                            break;
                        m.pixelDensity = r.double();
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

        BotRenderingConfigMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotRenderingConfigMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotRenderingConfigMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotRenderingConfigMetadata();
            if (d.bloksVersioningId != null) {
                m.bloksVersioningId = $String(d.bloksVersioningId);
            }
            if (d.pixelDensity != null) {
                m.pixelDensity = $Number(d.pixelDensity);
            }
            return m;
        };

        BotRenderingConfigMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.bloksVersioningId = "";
                d.pixelDensity = 0;
            }
            if (m.bloksVersioningId != null && $Object.hasOwnProperty.call(m, "bloksVersioningId")) {
                d.bloksVersioningId = m.bloksVersioningId;
            }
            if (m.pixelDensity != null && $Object.hasOwnProperty.call(m, "pixelDensity")) {
                d.pixelDensity = o.json && !$isFinite(m.pixelDensity) ? $String(m.pixelDensity) : m.pixelDensity;
            }
            return d;
        };

        BotRenderingConfigMetadata.prototype.toJSON = function() {
            return BotRenderingConfigMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotRenderingConfigMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotRenderingConfigMetadata";
        };

        return BotRenderingConfigMetadata;
    })();

    AICommon.BotHistoryShareMetadata = (function() {

        const BotHistoryShareMetadata = function (p) {
            this.participantsMetadata = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotHistoryShareMetadata.prototype.participantsMetadata = $util.emptyArray;

        BotHistoryShareMetadata.create = function(properties) {
            return new BotHistoryShareMetadata(properties);
        };

        BotHistoryShareMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.participantsMetadata != null && m.participantsMetadata.length) {
                for (var i = 0; i < m.participantsMetadata.length; ++i)
                    $root.AICommon.BotGroupParticipantMetadata.encode(m.participantsMetadata[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotHistoryShareMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotHistoryShareMetadata();
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
                        if (!(m.participantsMetadata && m.participantsMetadata.length))
                            m.participantsMetadata = [];
                        m.participantsMetadata.push($root.AICommon.BotGroupParticipantMetadata.decode(r, r.uint32(), $undefined, q + 1));
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

        BotHistoryShareMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotHistoryShareMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotHistoryShareMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotHistoryShareMetadata();
            if (d.participantsMetadata) {
                if (!$Array.isArray(d.participantsMetadata))
                    throw $TypeError(".AICommon.BotHistoryShareMetadata.participantsMetadata: array expected");
                m.participantsMetadata = $Array(d.participantsMetadata.length);
                for (var i = 0; i < d.participantsMetadata.length; ++i) {
                    if (!$util.isObject(d.participantsMetadata[i]))
                        throw $TypeError(".AICommon.BotHistoryShareMetadata.participantsMetadata: object expected");
                    m.participantsMetadata[i] = $root.AICommon.BotGroupParticipantMetadata.fromObject(d.participantsMetadata[i], q + 1);
                }
            }
            return m;
        };

        BotHistoryShareMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.participantsMetadata = [];
            }
            if (m.participantsMetadata && m.participantsMetadata.length) {
                d.participantsMetadata = $Array(m.participantsMetadata.length);
                for (var j = 0; j < m.participantsMetadata.length; ++j) {
                    d.participantsMetadata[j] = $root.AICommon.BotGroupParticipantMetadata.toObject(m.participantsMetadata[j], o, q + 1);
                }
            }
            return d;
        };

        BotHistoryShareMetadata.prototype.toJSON = function() {
            return BotHistoryShareMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotHistoryShareMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotHistoryShareMetadata";
        };

        return BotHistoryShareMetadata;
    })();

    AICommon.BotGroupMetadata = (function() {

        const BotGroupMetadata = function (p) {
            this.participantsMetadata = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotGroupMetadata.prototype.participantsMetadata = $util.emptyArray;

        BotGroupMetadata.create = function(properties) {
            return new BotGroupMetadata(properties);
        };

        BotGroupMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.participantsMetadata != null && m.participantsMetadata.length) {
                for (var i = 0; i < m.participantsMetadata.length; ++i)
                    $root.AICommon.BotGroupParticipantMetadata.encode(m.participantsMetadata[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotGroupMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotGroupMetadata();
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
                        if (!(m.participantsMetadata && m.participantsMetadata.length))
                            m.participantsMetadata = [];
                        m.participantsMetadata.push($root.AICommon.BotGroupParticipantMetadata.decode(r, r.uint32(), $undefined, q + 1));
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

        BotGroupMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotGroupMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotGroupMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotGroupMetadata();
            if (d.participantsMetadata) {
                if (!$Array.isArray(d.participantsMetadata))
                    throw $TypeError(".AICommon.BotGroupMetadata.participantsMetadata: array expected");
                m.participantsMetadata = $Array(d.participantsMetadata.length);
                for (var i = 0; i < d.participantsMetadata.length; ++i) {
                    if (!$util.isObject(d.participantsMetadata[i]))
                        throw $TypeError(".AICommon.BotGroupMetadata.participantsMetadata: object expected");
                    m.participantsMetadata[i] = $root.AICommon.BotGroupParticipantMetadata.fromObject(d.participantsMetadata[i], q + 1);
                }
            }
            return m;
        };

        BotGroupMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.participantsMetadata = [];
            }
            if (m.participantsMetadata && m.participantsMetadata.length) {
                d.participantsMetadata = $Array(m.participantsMetadata.length);
                for (var j = 0; j < m.participantsMetadata.length; ++j) {
                    d.participantsMetadata[j] = $root.AICommon.BotGroupParticipantMetadata.toObject(m.participantsMetadata[j], o, q + 1);
                }
            }
            return d;
        };

        BotGroupMetadata.prototype.toJSON = function() {
            return BotGroupMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotGroupMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotGroupMetadata";
        };

        return BotGroupMetadata;
    })();

    AICommon.AISubscriptionUpsellMetadata = (function() {

        const AISubscriptionUpsellMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        AISubscriptionUpsellMetadata.prototype.requestType = 0;

        AISubscriptionUpsellMetadata.create = function(properties) {
            return new AISubscriptionUpsellMetadata(properties);
        };

        AISubscriptionUpsellMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.requestType != null && $Object.hasOwnProperty.call(m, "requestType"))
                w.uint32(8).int32(m.requestType);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        AISubscriptionUpsellMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.AISubscriptionUpsellMetadata(), v;
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
                        v = r.int32();
                        if ($root.AICommon.AISubscriptionRequestType[v] !== $undefined) {
                            m.requestType = v;
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

        AISubscriptionUpsellMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.AISubscriptionUpsellMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.AISubscriptionUpsellMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.AISubscriptionUpsellMetadata();
            switch (d.requestType) {
            case "UNSPECIFIED":
            case 0:
                m.requestType = 0;
                break;
            case "THINK_HARD":
            case 1:
                m.requestType = 1;
                break;
            case "IMAGE_GEN":
            case 2:
                m.requestType = 2;
                break;
            case "VIDEO_GEN":
            case 3:
                m.requestType = 3;
                break;
            default:
            }
            return m;
        };

        AISubscriptionUpsellMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.requestType = o.enums === $String ? "UNSPECIFIED" : 0;
            }
            if (m.requestType != null && $Object.hasOwnProperty.call(m, "requestType")) {
                d.requestType = o.enums === $String ? $root.AICommon.AISubscriptionRequestType[m.requestType] === $undefined ? m.requestType : $root.AICommon.AISubscriptionRequestType[m.requestType] : m.requestType;
            }
            return d;
        };

        AISubscriptionUpsellMetadata.prototype.toJSON = function() {
            return AISubscriptionUpsellMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        AISubscriptionUpsellMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.AISubscriptionUpsellMetadata";
        };

        return AISubscriptionUpsellMetadata;
    })();

    AICommon.BotMetadata = (function() {

        const BotMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotMetadata.prototype.personaId = "";
        BotMetadata.prototype.pluginMetadata = null;
        BotMetadata.prototype.suggestedPromptMetadata = null;
        BotMetadata.prototype.invokerJid = "";
        BotMetadata.prototype.sessionMetadata = null;
        BotMetadata.prototype.memuMetadata = null;
        BotMetadata.prototype.timezone = "";
        BotMetadata.prototype.reminderMetadata = null;
        BotMetadata.prototype.modelMetadata = null;
        BotMetadata.prototype.messageDisclaimerText = "";
        BotMetadata.prototype.progressIndicatorMetadata = null;
        BotMetadata.prototype.capabilityMetadata = null;
        BotMetadata.prototype.imagineMetadata = null;
        BotMetadata.prototype.memoryMetadata = null;
        BotMetadata.prototype.renderingMetadata = null;
        BotMetadata.prototype.botMetricsMetadata = null;
        BotMetadata.prototype.botLinkedAccountsMetadata = null;
        BotMetadata.prototype.richResponseSourcesMetadata = null;
        BotMetadata.prototype.aiConversationContext = $util.newBuffer([]);
        BotMetadata.prototype.botPromotionMessageMetadata = null;
        BotMetadata.prototype.botModeSelectionMetadata = null;
        BotMetadata.prototype.botQuotaMetadata = null;
        BotMetadata.prototype.botAgeCollectionMetadata = null;
        BotMetadata.prototype.conversationStarterPromptId = "";
        BotMetadata.prototype.botResponseId = "";
        BotMetadata.prototype.verificationMetadata = null;
        BotMetadata.prototype.unifiedResponseMutation = null;
        BotMetadata.prototype.botMessageOriginMetadata = null;
        BotMetadata.prototype.inThreadSurveyMetadata = null;
        BotMetadata.prototype.botThreadInfo = null;
        BotMetadata.prototype.regenerateMetadata = null;
        BotMetadata.prototype.sessionTransparencyMetadata = null;
        BotMetadata.prototype.botDocumentMessageMetadata = null;
        BotMetadata.prototype.botGroupMetadata = null;
        BotMetadata.prototype.botRenderingConfigMetadata = null;
        BotMetadata.prototype.botInfrastructureDiagnostics = null;
        BotMetadata.prototype.aiMediaCollectionMetadata = null;
        BotMetadata.prototype.commandMetadata = null;
        BotMetadata.prototype.resolvedToolCallMetadata = null;
        BotMetadata.prototype.subscriptionUpsellMetadata = null;
        BotMetadata.prototype.pttPromptMetadata = null;
        BotMetadata.prototype.botHistoryShareMetadata = null;
        BotMetadata.prototype.internalMetadata = $util.newBuffer([]);

        BotMetadata.create = function(properties) {
            return new BotMetadata(properties);
        };

        BotMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.personaId != null && $Object.hasOwnProperty.call(m, "personaId"))
                w.uint32(18).string(m.personaId);
            if (m.pluginMetadata != null && $Object.hasOwnProperty.call(m, "pluginMetadata"))
                $root.AICommon.BotPluginMetadata.encode(m.pluginMetadata, w.uint32(26).fork(), q + 1).ldelim();
            if (m.suggestedPromptMetadata != null && $Object.hasOwnProperty.call(m, "suggestedPromptMetadata"))
                $root.AICommon.BotSuggestedPromptMetadata.encode(m.suggestedPromptMetadata, w.uint32(34).fork(), q + 1).ldelim();
            if (m.invokerJid != null && $Object.hasOwnProperty.call(m, "invokerJid"))
                w.uint32(42).string(m.invokerJid);
            if (m.sessionMetadata != null && $Object.hasOwnProperty.call(m, "sessionMetadata"))
                $root.AICommon.BotSessionMetadata.encode(m.sessionMetadata, w.uint32(50).fork(), q + 1).ldelim();
            if (m.memuMetadata != null && $Object.hasOwnProperty.call(m, "memuMetadata"))
                $root.AICommon.BotMemuMetadata.encode(m.memuMetadata, w.uint32(58).fork(), q + 1).ldelim();
            if (m.timezone != null && $Object.hasOwnProperty.call(m, "timezone"))
                w.uint32(66).string(m.timezone);
            if (m.reminderMetadata != null && $Object.hasOwnProperty.call(m, "reminderMetadata"))
                $root.AICommon.BotReminderMetadata.encode(m.reminderMetadata, w.uint32(74).fork(), q + 1).ldelim();
            if (m.modelMetadata != null && $Object.hasOwnProperty.call(m, "modelMetadata"))
                $root.AICommon.BotModelMetadata.encode(m.modelMetadata, w.uint32(82).fork(), q + 1).ldelim();
            if (m.messageDisclaimerText != null && $Object.hasOwnProperty.call(m, "messageDisclaimerText"))
                w.uint32(90).string(m.messageDisclaimerText);
            if (m.progressIndicatorMetadata != null && $Object.hasOwnProperty.call(m, "progressIndicatorMetadata"))
                $root.AICommon.BotProgressIndicatorMetadata.encode(m.progressIndicatorMetadata, w.uint32(98).fork(), q + 1).ldelim();
            if (m.capabilityMetadata != null && $Object.hasOwnProperty.call(m, "capabilityMetadata"))
                $root.AICommon.BotCapabilityMetadata.encode(m.capabilityMetadata, w.uint32(106).fork(), q + 1).ldelim();
            if (m.imagineMetadata != null && $Object.hasOwnProperty.call(m, "imagineMetadata"))
                $root.AICommon.BotImagineMetadata.encode(m.imagineMetadata, w.uint32(114).fork(), q + 1).ldelim();
            if (m.memoryMetadata != null && $Object.hasOwnProperty.call(m, "memoryMetadata"))
                $root.AICommon.BotMemoryMetadata.encode(m.memoryMetadata, w.uint32(122).fork(), q + 1).ldelim();
            if (m.renderingMetadata != null && $Object.hasOwnProperty.call(m, "renderingMetadata"))
                $root.AICommon.BotRenderingMetadata.encode(m.renderingMetadata, w.uint32(130).fork(), q + 1).ldelim();
            if (m.botMetricsMetadata != null && $Object.hasOwnProperty.call(m, "botMetricsMetadata"))
                $root.AICommon.BotMetricsMetadata.encode(m.botMetricsMetadata, w.uint32(138).fork(), q + 1).ldelim();
            if (m.botLinkedAccountsMetadata != null && $Object.hasOwnProperty.call(m, "botLinkedAccountsMetadata"))
                $root.AICommon.BotLinkedAccountsMetadata.encode(m.botLinkedAccountsMetadata, w.uint32(146).fork(), q + 1).ldelim();
            if (m.richResponseSourcesMetadata != null && $Object.hasOwnProperty.call(m, "richResponseSourcesMetadata"))
                $root.AICommon.BotSourcesMetadata.encode(m.richResponseSourcesMetadata, w.uint32(154).fork(), q + 1).ldelim();
            if (m.aiConversationContext != null && $Object.hasOwnProperty.call(m, "aiConversationContext"))
                w.uint32(162).bytes(m.aiConversationContext);
            if (m.botPromotionMessageMetadata != null && $Object.hasOwnProperty.call(m, "botPromotionMessageMetadata"))
                $root.AICommon.BotPromotionMessageMetadata.encode(m.botPromotionMessageMetadata, w.uint32(170).fork(), q + 1).ldelim();
            if (m.botModeSelectionMetadata != null && $Object.hasOwnProperty.call(m, "botModeSelectionMetadata"))
                $root.AICommon.BotModeSelectionMetadata.encode(m.botModeSelectionMetadata, w.uint32(178).fork(), q + 1).ldelim();
            if (m.botQuotaMetadata != null && $Object.hasOwnProperty.call(m, "botQuotaMetadata"))
                $root.AICommon.BotQuotaMetadata.encode(m.botQuotaMetadata, w.uint32(186).fork(), q + 1).ldelim();
            if (m.botAgeCollectionMetadata != null && $Object.hasOwnProperty.call(m, "botAgeCollectionMetadata"))
                $root.AICommon.BotAgeCollectionMetadata.encode(m.botAgeCollectionMetadata, w.uint32(194).fork(), q + 1).ldelim();
            if (m.conversationStarterPromptId != null && $Object.hasOwnProperty.call(m, "conversationStarterPromptId"))
                w.uint32(202).string(m.conversationStarterPromptId);
            if (m.botResponseId != null && $Object.hasOwnProperty.call(m, "botResponseId"))
                w.uint32(210).string(m.botResponseId);
            if (m.verificationMetadata != null && $Object.hasOwnProperty.call(m, "verificationMetadata"))
                $root.AICommon.BotSignatureVerificationMetadata.encode(m.verificationMetadata, w.uint32(218).fork(), q + 1).ldelim();
            if (m.unifiedResponseMutation != null && $Object.hasOwnProperty.call(m, "unifiedResponseMutation"))
                $root.AICommon.BotUnifiedResponseMutation.encode(m.unifiedResponseMutation, w.uint32(226).fork(), q + 1).ldelim();
            if (m.botMessageOriginMetadata != null && $Object.hasOwnProperty.call(m, "botMessageOriginMetadata"))
                $root.AICommon.BotMessageOriginMetadata.encode(m.botMessageOriginMetadata, w.uint32(234).fork(), q + 1).ldelim();
            if (m.inThreadSurveyMetadata != null && $Object.hasOwnProperty.call(m, "inThreadSurveyMetadata"))
                $root.AICommon.InThreadSurveyMetadata.encode(m.inThreadSurveyMetadata, w.uint32(242).fork(), q + 1).ldelim();
            if (m.botThreadInfo != null && $Object.hasOwnProperty.call(m, "botThreadInfo"))
                $root.AICommon.AIThreadInfo.encode(m.botThreadInfo, w.uint32(250).fork(), q + 1).ldelim();
            if (m.regenerateMetadata != null && $Object.hasOwnProperty.call(m, "regenerateMetadata"))
                $root.AICommon.AIRegenerateMetadata.encode(m.regenerateMetadata, w.uint32(258).fork(), q + 1).ldelim();
            if (m.sessionTransparencyMetadata != null && $Object.hasOwnProperty.call(m, "sessionTransparencyMetadata"))
                $root.AICommon.SessionTransparencyMetadata.encode(m.sessionTransparencyMetadata, w.uint32(266).fork(), q + 1).ldelim();
            if (m.botDocumentMessageMetadata != null && $Object.hasOwnProperty.call(m, "botDocumentMessageMetadata"))
                $root.AICommon.BotDocumentMessageMetadata.encode(m.botDocumentMessageMetadata, w.uint32(274).fork(), q + 1).ldelim();
            if (m.botGroupMetadata != null && $Object.hasOwnProperty.call(m, "botGroupMetadata"))
                $root.AICommon.BotGroupMetadata.encode(m.botGroupMetadata, w.uint32(282).fork(), q + 1).ldelim();
            if (m.botRenderingConfigMetadata != null && $Object.hasOwnProperty.call(m, "botRenderingConfigMetadata"))
                $root.AICommon.BotRenderingConfigMetadata.encode(m.botRenderingConfigMetadata, w.uint32(290).fork(), q + 1).ldelim();
            if (m.botInfrastructureDiagnostics != null && $Object.hasOwnProperty.call(m, "botInfrastructureDiagnostics"))
                $root.AICommon.BotInfrastructureDiagnostics.encode(m.botInfrastructureDiagnostics, w.uint32(298).fork(), q + 1).ldelim();
            if (m.aiMediaCollectionMetadata != null && $Object.hasOwnProperty.call(m, "aiMediaCollectionMetadata"))
                $root.AICommon.AIMediaCollectionMetadata.encode(m.aiMediaCollectionMetadata, w.uint32(306).fork(), q + 1).ldelim();
            if (m.commandMetadata != null && $Object.hasOwnProperty.call(m, "commandMetadata"))
                $root.AICommon.BotCommandMetadata.encode(m.commandMetadata, w.uint32(314).fork(), q + 1).ldelim();
            if (m.resolvedToolCallMetadata != null && $Object.hasOwnProperty.call(m, "resolvedToolCallMetadata"))
                $root.AICommon.BotResolvedToolCallMetadata.encode(m.resolvedToolCallMetadata, w.uint32(322).fork(), q + 1).ldelim();
            if (m.subscriptionUpsellMetadata != null && $Object.hasOwnProperty.call(m, "subscriptionUpsellMetadata"))
                $root.AICommon.AISubscriptionUpsellMetadata.encode(m.subscriptionUpsellMetadata, w.uint32(330).fork(), q + 1).ldelim();
            if (m.pttPromptMetadata != null && $Object.hasOwnProperty.call(m, "pttPromptMetadata"))
                $root.AICommon.BotPttPromptMetadata.encode(m.pttPromptMetadata, w.uint32(338).fork(), q + 1).ldelim();
            if (m.botHistoryShareMetadata != null && $Object.hasOwnProperty.call(m, "botHistoryShareMetadata"))
                $root.AICommon.BotHistoryShareMetadata.encode(m.botHistoryShareMetadata, w.uint32(346).fork(), q + 1).ldelim();
            if (m.internalMetadata != null && $Object.hasOwnProperty.call(m, "internalMetadata"))
                w.uint32(7994).bytes(m.internalMetadata);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotMetadata();
            while (r.pos < c) {
                var s = r.pos;
                var t = r.tag();
                if (t === z) {
                    z = $undefined;
                    break;
                }
                var u = t & 7;
                switch (t >>>= 3) {
                case 2: {
                        if (u !== 2)
                            break;
                        m.personaId = r.string();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.pluginMetadata = $root.AICommon.BotPluginMetadata.decode(r, r.uint32(), $undefined, q + 1, m.pluginMetadata);
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.suggestedPromptMetadata = $root.AICommon.BotSuggestedPromptMetadata.decode(r, r.uint32(), $undefined, q + 1, m.suggestedPromptMetadata);
                        continue;
                    }
                case 5: {
                        if (u !== 2)
                            break;
                        m.invokerJid = r.string();
                        continue;
                    }
                case 6: {
                        if (u !== 2)
                            break;
                        m.sessionMetadata = $root.AICommon.BotSessionMetadata.decode(r, r.uint32(), $undefined, q + 1, m.sessionMetadata);
                        continue;
                    }
                case 7: {
                        if (u !== 2)
                            break;
                        m.memuMetadata = $root.AICommon.BotMemuMetadata.decode(r, r.uint32(), $undefined, q + 1, m.memuMetadata);
                        continue;
                    }
                case 8: {
                        if (u !== 2)
                            break;
                        m.timezone = r.string();
                        continue;
                    }
                case 9: {
                        if (u !== 2)
                            break;
                        m.reminderMetadata = $root.AICommon.BotReminderMetadata.decode(r, r.uint32(), $undefined, q + 1, m.reminderMetadata);
                        continue;
                    }
                case 10: {
                        if (u !== 2)
                            break;
                        m.modelMetadata = $root.AICommon.BotModelMetadata.decode(r, r.uint32(), $undefined, q + 1, m.modelMetadata);
                        continue;
                    }
                case 11: {
                        if (u !== 2)
                            break;
                        m.messageDisclaimerText = r.string();
                        continue;
                    }
                case 12: {
                        if (u !== 2)
                            break;
                        m.progressIndicatorMetadata = $root.AICommon.BotProgressIndicatorMetadata.decode(r, r.uint32(), $undefined, q + 1, m.progressIndicatorMetadata);
                        continue;
                    }
                case 13: {
                        if (u !== 2)
                            break;
                        m.capabilityMetadata = $root.AICommon.BotCapabilityMetadata.decode(r, r.uint32(), $undefined, q + 1, m.capabilityMetadata);
                        continue;
                    }
                case 14: {
                        if (u !== 2)
                            break;
                        m.imagineMetadata = $root.AICommon.BotImagineMetadata.decode(r, r.uint32(), $undefined, q + 1, m.imagineMetadata);
                        continue;
                    }
                case 15: {
                        if (u !== 2)
                            break;
                        m.memoryMetadata = $root.AICommon.BotMemoryMetadata.decode(r, r.uint32(), $undefined, q + 1, m.memoryMetadata);
                        continue;
                    }
                case 16: {
                        if (u !== 2)
                            break;
                        m.renderingMetadata = $root.AICommon.BotRenderingMetadata.decode(r, r.uint32(), $undefined, q + 1, m.renderingMetadata);
                        continue;
                    }
                case 17: {
                        if (u !== 2)
                            break;
                        m.botMetricsMetadata = $root.AICommon.BotMetricsMetadata.decode(r, r.uint32(), $undefined, q + 1, m.botMetricsMetadata);
                        continue;
                    }
                case 18: {
                        if (u !== 2)
                            break;
                        m.botLinkedAccountsMetadata = $root.AICommon.BotLinkedAccountsMetadata.decode(r, r.uint32(), $undefined, q + 1, m.botLinkedAccountsMetadata);
                        continue;
                    }
                case 19: {
                        if (u !== 2)
                            break;
                        m.richResponseSourcesMetadata = $root.AICommon.BotSourcesMetadata.decode(r, r.uint32(), $undefined, q + 1, m.richResponseSourcesMetadata);
                        continue;
                    }
                case 20: {
                        if (u !== 2)
                            break;
                        m.aiConversationContext = r.bytes();
                        continue;
                    }
                case 21: {
                        if (u !== 2)
                            break;
                        m.botPromotionMessageMetadata = $root.AICommon.BotPromotionMessageMetadata.decode(r, r.uint32(), $undefined, q + 1, m.botPromotionMessageMetadata);
                        continue;
                    }
                case 22: {
                        if (u !== 2)
                            break;
                        m.botModeSelectionMetadata = $root.AICommon.BotModeSelectionMetadata.decode(r, r.uint32(), $undefined, q + 1, m.botModeSelectionMetadata);
                        continue;
                    }
                case 23: {
                        if (u !== 2)
                            break;
                        m.botQuotaMetadata = $root.AICommon.BotQuotaMetadata.decode(r, r.uint32(), $undefined, q + 1, m.botQuotaMetadata);
                        continue;
                    }
                case 24: {
                        if (u !== 2)
                            break;
                        m.botAgeCollectionMetadata = $root.AICommon.BotAgeCollectionMetadata.decode(r, r.uint32(), $undefined, q + 1, m.botAgeCollectionMetadata);
                        continue;
                    }
                case 25: {
                        if (u !== 2)
                            break;
                        m.conversationStarterPromptId = r.string();
                        continue;
                    }
                case 26: {
                        if (u !== 2)
                            break;
                        m.botResponseId = r.string();
                        continue;
                    }
                case 27: {
                        if (u !== 2)
                            break;
                        m.verificationMetadata = $root.AICommon.BotSignatureVerificationMetadata.decode(r, r.uint32(), $undefined, q + 1, m.verificationMetadata);
                        continue;
                    }
                case 28: {
                        if (u !== 2)
                            break;
                        m.unifiedResponseMutation = $root.AICommon.BotUnifiedResponseMutation.decode(r, r.uint32(), $undefined, q + 1, m.unifiedResponseMutation);
                        continue;
                    }
                case 29: {
                        if (u !== 2)
                            break;
                        m.botMessageOriginMetadata = $root.AICommon.BotMessageOriginMetadata.decode(r, r.uint32(), $undefined, q + 1, m.botMessageOriginMetadata);
                        continue;
                    }
                case 30: {
                        if (u !== 2)
                            break;
                        m.inThreadSurveyMetadata = $root.AICommon.InThreadSurveyMetadata.decode(r, r.uint32(), $undefined, q + 1, m.inThreadSurveyMetadata);
                        continue;
                    }
                case 31: {
                        if (u !== 2)
                            break;
                        m.botThreadInfo = $root.AICommon.AIThreadInfo.decode(r, r.uint32(), $undefined, q + 1, m.botThreadInfo);
                        continue;
                    }
                case 32: {
                        if (u !== 2)
                            break;
                        m.regenerateMetadata = $root.AICommon.AIRegenerateMetadata.decode(r, r.uint32(), $undefined, q + 1, m.regenerateMetadata);
                        continue;
                    }
                case 33: {
                        if (u !== 2)
                            break;
                        m.sessionTransparencyMetadata = $root.AICommon.SessionTransparencyMetadata.decode(r, r.uint32(), $undefined, q + 1, m.sessionTransparencyMetadata);
                        continue;
                    }
                case 34: {
                        if (u !== 2)
                            break;
                        m.botDocumentMessageMetadata = $root.AICommon.BotDocumentMessageMetadata.decode(r, r.uint32(), $undefined, q + 1, m.botDocumentMessageMetadata);
                        continue;
                    }
                case 35: {
                        if (u !== 2)
                            break;
                        m.botGroupMetadata = $root.AICommon.BotGroupMetadata.decode(r, r.uint32(), $undefined, q + 1, m.botGroupMetadata);
                        continue;
                    }
                case 36: {
                        if (u !== 2)
                            break;
                        m.botRenderingConfigMetadata = $root.AICommon.BotRenderingConfigMetadata.decode(r, r.uint32(), $undefined, q + 1, m.botRenderingConfigMetadata);
                        continue;
                    }
                case 37: {
                        if (u !== 2)
                            break;
                        m.botInfrastructureDiagnostics = $root.AICommon.BotInfrastructureDiagnostics.decode(r, r.uint32(), $undefined, q + 1, m.botInfrastructureDiagnostics);
                        continue;
                    }
                case 38: {
                        if (u !== 2)
                            break;
                        m.aiMediaCollectionMetadata = $root.AICommon.AIMediaCollectionMetadata.decode(r, r.uint32(), $undefined, q + 1, m.aiMediaCollectionMetadata);
                        continue;
                    }
                case 39: {
                        if (u !== 2)
                            break;
                        m.commandMetadata = $root.AICommon.BotCommandMetadata.decode(r, r.uint32(), $undefined, q + 1, m.commandMetadata);
                        continue;
                    }
                case 40: {
                        if (u !== 2)
                            break;
                        m.resolvedToolCallMetadata = $root.AICommon.BotResolvedToolCallMetadata.decode(r, r.uint32(), $undefined, q + 1, m.resolvedToolCallMetadata);
                        continue;
                    }
                case 41: {
                        if (u !== 2)
                            break;
                        m.subscriptionUpsellMetadata = $root.AICommon.AISubscriptionUpsellMetadata.decode(r, r.uint32(), $undefined, q + 1, m.subscriptionUpsellMetadata);
                        continue;
                    }
                case 42: {
                        if (u !== 2)
                            break;
                        m.pttPromptMetadata = $root.AICommon.BotPttPromptMetadata.decode(r, r.uint32(), $undefined, q + 1, m.pttPromptMetadata);
                        continue;
                    }
                case 43: {
                        if (u !== 2)
                            break;
                        m.botHistoryShareMetadata = $root.AICommon.BotHistoryShareMetadata.decode(r, r.uint32(), $undefined, q + 1, m.botHistoryShareMetadata);
                        continue;
                    }
                case 999: {
                        if (u !== 2)
                            break;
                        m.internalMetadata = r.bytes();
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

        BotMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotMetadata();
            if (d.personaId != null) {
                m.personaId = $String(d.personaId);
            }
            if (d.pluginMetadata != null) {
                if (!$util.isObject(d.pluginMetadata))
                    throw $TypeError(".AICommon.BotMetadata.pluginMetadata: object expected");
                m.pluginMetadata = $root.AICommon.BotPluginMetadata.fromObject(d.pluginMetadata, q + 1);
            }
            if (d.suggestedPromptMetadata != null) {
                if (!$util.isObject(d.suggestedPromptMetadata))
                    throw $TypeError(".AICommon.BotMetadata.suggestedPromptMetadata: object expected");
                m.suggestedPromptMetadata = $root.AICommon.BotSuggestedPromptMetadata.fromObject(d.suggestedPromptMetadata, q + 1);
            }
            if (d.invokerJid != null) {
                m.invokerJid = $String(d.invokerJid);
            }
            if (d.sessionMetadata != null) {
                if (!$util.isObject(d.sessionMetadata))
                    throw $TypeError(".AICommon.BotMetadata.sessionMetadata: object expected");
                m.sessionMetadata = $root.AICommon.BotSessionMetadata.fromObject(d.sessionMetadata, q + 1);
            }
            if (d.memuMetadata != null) {
                if (!$util.isObject(d.memuMetadata))
                    throw $TypeError(".AICommon.BotMetadata.memuMetadata: object expected");
                m.memuMetadata = $root.AICommon.BotMemuMetadata.fromObject(d.memuMetadata, q + 1);
            }
            if (d.timezone != null) {
                m.timezone = $String(d.timezone);
            }
            if (d.reminderMetadata != null) {
                if (!$util.isObject(d.reminderMetadata))
                    throw $TypeError(".AICommon.BotMetadata.reminderMetadata: object expected");
                m.reminderMetadata = $root.AICommon.BotReminderMetadata.fromObject(d.reminderMetadata, q + 1);
            }
            if (d.modelMetadata != null) {
                if (!$util.isObject(d.modelMetadata))
                    throw $TypeError(".AICommon.BotMetadata.modelMetadata: object expected");
                m.modelMetadata = $root.AICommon.BotModelMetadata.fromObject(d.modelMetadata, q + 1);
            }
            if (d.messageDisclaimerText != null) {
                m.messageDisclaimerText = $String(d.messageDisclaimerText);
            }
            if (d.progressIndicatorMetadata != null) {
                if (!$util.isObject(d.progressIndicatorMetadata))
                    throw $TypeError(".AICommon.BotMetadata.progressIndicatorMetadata: object expected");
                m.progressIndicatorMetadata = $root.AICommon.BotProgressIndicatorMetadata.fromObject(d.progressIndicatorMetadata, q + 1);
            }
            if (d.capabilityMetadata != null) {
                if (!$util.isObject(d.capabilityMetadata))
                    throw $TypeError(".AICommon.BotMetadata.capabilityMetadata: object expected");
                m.capabilityMetadata = $root.AICommon.BotCapabilityMetadata.fromObject(d.capabilityMetadata, q + 1);
            }
            if (d.imagineMetadata != null) {
                if (!$util.isObject(d.imagineMetadata))
                    throw $TypeError(".AICommon.BotMetadata.imagineMetadata: object expected");
                m.imagineMetadata = $root.AICommon.BotImagineMetadata.fromObject(d.imagineMetadata, q + 1);
            }
            if (d.memoryMetadata != null) {
                if (!$util.isObject(d.memoryMetadata))
                    throw $TypeError(".AICommon.BotMetadata.memoryMetadata: object expected");
                m.memoryMetadata = $root.AICommon.BotMemoryMetadata.fromObject(d.memoryMetadata, q + 1);
            }
            if (d.renderingMetadata != null) {
                if (!$util.isObject(d.renderingMetadata))
                    throw $TypeError(".AICommon.BotMetadata.renderingMetadata: object expected");
                m.renderingMetadata = $root.AICommon.BotRenderingMetadata.fromObject(d.renderingMetadata, q + 1);
            }
            if (d.botMetricsMetadata != null) {
                if (!$util.isObject(d.botMetricsMetadata))
                    throw $TypeError(".AICommon.BotMetadata.botMetricsMetadata: object expected");
                m.botMetricsMetadata = $root.AICommon.BotMetricsMetadata.fromObject(d.botMetricsMetadata, q + 1);
            }
            if (d.botLinkedAccountsMetadata != null) {
                if (!$util.isObject(d.botLinkedAccountsMetadata))
                    throw $TypeError(".AICommon.BotMetadata.botLinkedAccountsMetadata: object expected");
                m.botLinkedAccountsMetadata = $root.AICommon.BotLinkedAccountsMetadata.fromObject(d.botLinkedAccountsMetadata, q + 1);
            }
            if (d.richResponseSourcesMetadata != null) {
                if (!$util.isObject(d.richResponseSourcesMetadata))
                    throw $TypeError(".AICommon.BotMetadata.richResponseSourcesMetadata: object expected");
                m.richResponseSourcesMetadata = $root.AICommon.BotSourcesMetadata.fromObject(d.richResponseSourcesMetadata, q + 1);
            }
            if (d.aiConversationContext != null) {
                if (typeof d.aiConversationContext === "string")
                    $util.base64.decode(d.aiConversationContext, m.aiConversationContext = $util.newBuffer($util.base64.length(d.aiConversationContext)), 0);
                else if (d.aiConversationContext.length >= 0)
                    m.aiConversationContext = d.aiConversationContext;
            }
            if (d.botPromotionMessageMetadata != null) {
                if (!$util.isObject(d.botPromotionMessageMetadata))
                    throw $TypeError(".AICommon.BotMetadata.botPromotionMessageMetadata: object expected");
                m.botPromotionMessageMetadata = $root.AICommon.BotPromotionMessageMetadata.fromObject(d.botPromotionMessageMetadata, q + 1);
            }
            if (d.botModeSelectionMetadata != null) {
                if (!$util.isObject(d.botModeSelectionMetadata))
                    throw $TypeError(".AICommon.BotMetadata.botModeSelectionMetadata: object expected");
                m.botModeSelectionMetadata = $root.AICommon.BotModeSelectionMetadata.fromObject(d.botModeSelectionMetadata, q + 1);
            }
            if (d.botQuotaMetadata != null) {
                if (!$util.isObject(d.botQuotaMetadata))
                    throw $TypeError(".AICommon.BotMetadata.botQuotaMetadata: object expected");
                m.botQuotaMetadata = $root.AICommon.BotQuotaMetadata.fromObject(d.botQuotaMetadata, q + 1);
            }
            if (d.botAgeCollectionMetadata != null) {
                if (!$util.isObject(d.botAgeCollectionMetadata))
                    throw $TypeError(".AICommon.BotMetadata.botAgeCollectionMetadata: object expected");
                m.botAgeCollectionMetadata = $root.AICommon.BotAgeCollectionMetadata.fromObject(d.botAgeCollectionMetadata, q + 1);
            }
            if (d.conversationStarterPromptId != null) {
                m.conversationStarterPromptId = $String(d.conversationStarterPromptId);
            }
            if (d.botResponseId != null) {
                m.botResponseId = $String(d.botResponseId);
            }
            if (d.verificationMetadata != null) {
                if (!$util.isObject(d.verificationMetadata))
                    throw $TypeError(".AICommon.BotMetadata.verificationMetadata: object expected");
                m.verificationMetadata = $root.AICommon.BotSignatureVerificationMetadata.fromObject(d.verificationMetadata, q + 1);
            }
            if (d.unifiedResponseMutation != null) {
                if (!$util.isObject(d.unifiedResponseMutation))
                    throw $TypeError(".AICommon.BotMetadata.unifiedResponseMutation: object expected");
                m.unifiedResponseMutation = $root.AICommon.BotUnifiedResponseMutation.fromObject(d.unifiedResponseMutation, q + 1);
            }
            if (d.botMessageOriginMetadata != null) {
                if (!$util.isObject(d.botMessageOriginMetadata))
                    throw $TypeError(".AICommon.BotMetadata.botMessageOriginMetadata: object expected");
                m.botMessageOriginMetadata = $root.AICommon.BotMessageOriginMetadata.fromObject(d.botMessageOriginMetadata, q + 1);
            }
            if (d.inThreadSurveyMetadata != null) {
                if (!$util.isObject(d.inThreadSurveyMetadata))
                    throw $TypeError(".AICommon.BotMetadata.inThreadSurveyMetadata: object expected");
                m.inThreadSurveyMetadata = $root.AICommon.InThreadSurveyMetadata.fromObject(d.inThreadSurveyMetadata, q + 1);
            }
            if (d.botThreadInfo != null) {
                if (!$util.isObject(d.botThreadInfo))
                    throw $TypeError(".AICommon.BotMetadata.botThreadInfo: object expected");
                m.botThreadInfo = $root.AICommon.AIThreadInfo.fromObject(d.botThreadInfo, q + 1);
            }
            if (d.regenerateMetadata != null) {
                if (!$util.isObject(d.regenerateMetadata))
                    throw $TypeError(".AICommon.BotMetadata.regenerateMetadata: object expected");
                m.regenerateMetadata = $root.AICommon.AIRegenerateMetadata.fromObject(d.regenerateMetadata, q + 1);
            }
            if (d.sessionTransparencyMetadata != null) {
                if (!$util.isObject(d.sessionTransparencyMetadata))
                    throw $TypeError(".AICommon.BotMetadata.sessionTransparencyMetadata: object expected");
                m.sessionTransparencyMetadata = $root.AICommon.SessionTransparencyMetadata.fromObject(d.sessionTransparencyMetadata, q + 1);
            }
            if (d.botDocumentMessageMetadata != null) {
                if (!$util.isObject(d.botDocumentMessageMetadata))
                    throw $TypeError(".AICommon.BotMetadata.botDocumentMessageMetadata: object expected");
                m.botDocumentMessageMetadata = $root.AICommon.BotDocumentMessageMetadata.fromObject(d.botDocumentMessageMetadata, q + 1);
            }
            if (d.botGroupMetadata != null) {
                if (!$util.isObject(d.botGroupMetadata))
                    throw $TypeError(".AICommon.BotMetadata.botGroupMetadata: object expected");
                m.botGroupMetadata = $root.AICommon.BotGroupMetadata.fromObject(d.botGroupMetadata, q + 1);
            }
            if (d.botRenderingConfigMetadata != null) {
                if (!$util.isObject(d.botRenderingConfigMetadata))
                    throw $TypeError(".AICommon.BotMetadata.botRenderingConfigMetadata: object expected");
                m.botRenderingConfigMetadata = $root.AICommon.BotRenderingConfigMetadata.fromObject(d.botRenderingConfigMetadata, q + 1);
            }
            if (d.botInfrastructureDiagnostics != null) {
                if (!$util.isObject(d.botInfrastructureDiagnostics))
                    throw $TypeError(".AICommon.BotMetadata.botInfrastructureDiagnostics: object expected");
                m.botInfrastructureDiagnostics = $root.AICommon.BotInfrastructureDiagnostics.fromObject(d.botInfrastructureDiagnostics, q + 1);
            }
            if (d.aiMediaCollectionMetadata != null) {
                if (!$util.isObject(d.aiMediaCollectionMetadata))
                    throw $TypeError(".AICommon.BotMetadata.aiMediaCollectionMetadata: object expected");
                m.aiMediaCollectionMetadata = $root.AICommon.AIMediaCollectionMetadata.fromObject(d.aiMediaCollectionMetadata, q + 1);
            }
            if (d.commandMetadata != null) {
                if (!$util.isObject(d.commandMetadata))
                    throw $TypeError(".AICommon.BotMetadata.commandMetadata: object expected");
                m.commandMetadata = $root.AICommon.BotCommandMetadata.fromObject(d.commandMetadata, q + 1);
            }
            if (d.resolvedToolCallMetadata != null) {
                if (!$util.isObject(d.resolvedToolCallMetadata))
                    throw $TypeError(".AICommon.BotMetadata.resolvedToolCallMetadata: object expected");
                m.resolvedToolCallMetadata = $root.AICommon.BotResolvedToolCallMetadata.fromObject(d.resolvedToolCallMetadata, q + 1);
            }
            if (d.subscriptionUpsellMetadata != null) {
                if (!$util.isObject(d.subscriptionUpsellMetadata))
                    throw $TypeError(".AICommon.BotMetadata.subscriptionUpsellMetadata: object expected");
                m.subscriptionUpsellMetadata = $root.AICommon.AISubscriptionUpsellMetadata.fromObject(d.subscriptionUpsellMetadata, q + 1);
            }
            if (d.pttPromptMetadata != null) {
                if (!$util.isObject(d.pttPromptMetadata))
                    throw $TypeError(".AICommon.BotMetadata.pttPromptMetadata: object expected");
                m.pttPromptMetadata = $root.AICommon.BotPttPromptMetadata.fromObject(d.pttPromptMetadata, q + 1);
            }
            if (d.botHistoryShareMetadata != null) {
                if (!$util.isObject(d.botHistoryShareMetadata))
                    throw $TypeError(".AICommon.BotMetadata.botHistoryShareMetadata: object expected");
                m.botHistoryShareMetadata = $root.AICommon.BotHistoryShareMetadata.fromObject(d.botHistoryShareMetadata, q + 1);
            }
            if (d.internalMetadata != null) {
                if (typeof d.internalMetadata === "string")
                    $util.base64.decode(d.internalMetadata, m.internalMetadata = $util.newBuffer($util.base64.length(d.internalMetadata)), 0);
                else if (d.internalMetadata.length >= 0)
                    m.internalMetadata = d.internalMetadata;
            }
            return m;
        };

        BotMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.personaId = "";
                d.pluginMetadata = null;
                d.suggestedPromptMetadata = null;
                d.invokerJid = "";
                d.sessionMetadata = null;
                d.memuMetadata = null;
                d.timezone = "";
                d.reminderMetadata = null;
                d.modelMetadata = null;
                d.messageDisclaimerText = "";
                d.progressIndicatorMetadata = null;
                d.capabilityMetadata = null;
                d.imagineMetadata = null;
                d.memoryMetadata = null;
                d.renderingMetadata = null;
                d.botMetricsMetadata = null;
                d.botLinkedAccountsMetadata = null;
                d.richResponseSourcesMetadata = null;
                if (o.bytes === $String)
                    d.aiConversationContext = "";
                else {
                    d.aiConversationContext = [];
                    if (o.bytes !== $Array)
                        d.aiConversationContext = $util.newBuffer(d.aiConversationContext);
                }
                d.botPromotionMessageMetadata = null;
                d.botModeSelectionMetadata = null;
                d.botQuotaMetadata = null;
                d.botAgeCollectionMetadata = null;
                d.conversationStarterPromptId = "";
                d.botResponseId = "";
                d.verificationMetadata = null;
                d.unifiedResponseMutation = null;
                d.botMessageOriginMetadata = null;
                d.inThreadSurveyMetadata = null;
                d.botThreadInfo = null;
                d.regenerateMetadata = null;
                d.sessionTransparencyMetadata = null;
                d.botDocumentMessageMetadata = null;
                d.botGroupMetadata = null;
                d.botRenderingConfigMetadata = null;
                d.botInfrastructureDiagnostics = null;
                d.aiMediaCollectionMetadata = null;
                d.commandMetadata = null;
                d.resolvedToolCallMetadata = null;
                d.subscriptionUpsellMetadata = null;
                d.pttPromptMetadata = null;
                d.botHistoryShareMetadata = null;
                if (o.bytes === $String)
                    d.internalMetadata = "";
                else {
                    d.internalMetadata = [];
                    if (o.bytes !== $Array)
                        d.internalMetadata = $util.newBuffer(d.internalMetadata);
                }
            }
            if (m.personaId != null && $Object.hasOwnProperty.call(m, "personaId")) {
                d.personaId = m.personaId;
            }
            if (m.pluginMetadata != null && $Object.hasOwnProperty.call(m, "pluginMetadata")) {
                d.pluginMetadata = $root.AICommon.BotPluginMetadata.toObject(m.pluginMetadata, o, q + 1);
            }
            if (m.suggestedPromptMetadata != null && $Object.hasOwnProperty.call(m, "suggestedPromptMetadata")) {
                d.suggestedPromptMetadata = $root.AICommon.BotSuggestedPromptMetadata.toObject(m.suggestedPromptMetadata, o, q + 1);
            }
            if (m.invokerJid != null && $Object.hasOwnProperty.call(m, "invokerJid")) {
                d.invokerJid = m.invokerJid;
            }
            if (m.sessionMetadata != null && $Object.hasOwnProperty.call(m, "sessionMetadata")) {
                d.sessionMetadata = $root.AICommon.BotSessionMetadata.toObject(m.sessionMetadata, o, q + 1);
            }
            if (m.memuMetadata != null && $Object.hasOwnProperty.call(m, "memuMetadata")) {
                d.memuMetadata = $root.AICommon.BotMemuMetadata.toObject(m.memuMetadata, o, q + 1);
            }
            if (m.timezone != null && $Object.hasOwnProperty.call(m, "timezone")) {
                d.timezone = m.timezone;
            }
            if (m.reminderMetadata != null && $Object.hasOwnProperty.call(m, "reminderMetadata")) {
                d.reminderMetadata = $root.AICommon.BotReminderMetadata.toObject(m.reminderMetadata, o, q + 1);
            }
            if (m.modelMetadata != null && $Object.hasOwnProperty.call(m, "modelMetadata")) {
                d.modelMetadata = $root.AICommon.BotModelMetadata.toObject(m.modelMetadata, o, q + 1);
            }
            if (m.messageDisclaimerText != null && $Object.hasOwnProperty.call(m, "messageDisclaimerText")) {
                d.messageDisclaimerText = m.messageDisclaimerText;
            }
            if (m.progressIndicatorMetadata != null && $Object.hasOwnProperty.call(m, "progressIndicatorMetadata")) {
                d.progressIndicatorMetadata = $root.AICommon.BotProgressIndicatorMetadata.toObject(m.progressIndicatorMetadata, o, q + 1);
            }
            if (m.capabilityMetadata != null && $Object.hasOwnProperty.call(m, "capabilityMetadata")) {
                d.capabilityMetadata = $root.AICommon.BotCapabilityMetadata.toObject(m.capabilityMetadata, o, q + 1);
            }
            if (m.imagineMetadata != null && $Object.hasOwnProperty.call(m, "imagineMetadata")) {
                d.imagineMetadata = $root.AICommon.BotImagineMetadata.toObject(m.imagineMetadata, o, q + 1);
            }
            if (m.memoryMetadata != null && $Object.hasOwnProperty.call(m, "memoryMetadata")) {
                d.memoryMetadata = $root.AICommon.BotMemoryMetadata.toObject(m.memoryMetadata, o, q + 1);
            }
            if (m.renderingMetadata != null && $Object.hasOwnProperty.call(m, "renderingMetadata")) {
                d.renderingMetadata = $root.AICommon.BotRenderingMetadata.toObject(m.renderingMetadata, o, q + 1);
            }
            if (m.botMetricsMetadata != null && $Object.hasOwnProperty.call(m, "botMetricsMetadata")) {
                d.botMetricsMetadata = $root.AICommon.BotMetricsMetadata.toObject(m.botMetricsMetadata, o, q + 1);
            }
            if (m.botLinkedAccountsMetadata != null && $Object.hasOwnProperty.call(m, "botLinkedAccountsMetadata")) {
                d.botLinkedAccountsMetadata = $root.AICommon.BotLinkedAccountsMetadata.toObject(m.botLinkedAccountsMetadata, o, q + 1);
            }
            if (m.richResponseSourcesMetadata != null && $Object.hasOwnProperty.call(m, "richResponseSourcesMetadata")) {
                d.richResponseSourcesMetadata = $root.AICommon.BotSourcesMetadata.toObject(m.richResponseSourcesMetadata, o, q + 1);
            }
            if (m.aiConversationContext != null && $Object.hasOwnProperty.call(m, "aiConversationContext")) {
                d.aiConversationContext = o.bytes === $String ? $util.base64.encode(m.aiConversationContext, 0, m.aiConversationContext.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.aiConversationContext) : m.aiConversationContext;
            }
            if (m.botPromotionMessageMetadata != null && $Object.hasOwnProperty.call(m, "botPromotionMessageMetadata")) {
                d.botPromotionMessageMetadata = $root.AICommon.BotPromotionMessageMetadata.toObject(m.botPromotionMessageMetadata, o, q + 1);
            }
            if (m.botModeSelectionMetadata != null && $Object.hasOwnProperty.call(m, "botModeSelectionMetadata")) {
                d.botModeSelectionMetadata = $root.AICommon.BotModeSelectionMetadata.toObject(m.botModeSelectionMetadata, o, q + 1);
            }
            if (m.botQuotaMetadata != null && $Object.hasOwnProperty.call(m, "botQuotaMetadata")) {
                d.botQuotaMetadata = $root.AICommon.BotQuotaMetadata.toObject(m.botQuotaMetadata, o, q + 1);
            }
            if (m.botAgeCollectionMetadata != null && $Object.hasOwnProperty.call(m, "botAgeCollectionMetadata")) {
                d.botAgeCollectionMetadata = $root.AICommon.BotAgeCollectionMetadata.toObject(m.botAgeCollectionMetadata, o, q + 1);
            }
            if (m.conversationStarterPromptId != null && $Object.hasOwnProperty.call(m, "conversationStarterPromptId")) {
                d.conversationStarterPromptId = m.conversationStarterPromptId;
            }
            if (m.botResponseId != null && $Object.hasOwnProperty.call(m, "botResponseId")) {
                d.botResponseId = m.botResponseId;
            }
            if (m.verificationMetadata != null && $Object.hasOwnProperty.call(m, "verificationMetadata")) {
                d.verificationMetadata = $root.AICommon.BotSignatureVerificationMetadata.toObject(m.verificationMetadata, o, q + 1);
            }
            if (m.unifiedResponseMutation != null && $Object.hasOwnProperty.call(m, "unifiedResponseMutation")) {
                d.unifiedResponseMutation = $root.AICommon.BotUnifiedResponseMutation.toObject(m.unifiedResponseMutation, o, q + 1);
            }
            if (m.botMessageOriginMetadata != null && $Object.hasOwnProperty.call(m, "botMessageOriginMetadata")) {
                d.botMessageOriginMetadata = $root.AICommon.BotMessageOriginMetadata.toObject(m.botMessageOriginMetadata, o, q + 1);
            }
            if (m.inThreadSurveyMetadata != null && $Object.hasOwnProperty.call(m, "inThreadSurveyMetadata")) {
                d.inThreadSurveyMetadata = $root.AICommon.InThreadSurveyMetadata.toObject(m.inThreadSurveyMetadata, o, q + 1);
            }
            if (m.botThreadInfo != null && $Object.hasOwnProperty.call(m, "botThreadInfo")) {
                d.botThreadInfo = $root.AICommon.AIThreadInfo.toObject(m.botThreadInfo, o, q + 1);
            }
            if (m.regenerateMetadata != null && $Object.hasOwnProperty.call(m, "regenerateMetadata")) {
                d.regenerateMetadata = $root.AICommon.AIRegenerateMetadata.toObject(m.regenerateMetadata, o, q + 1);
            }
            if (m.sessionTransparencyMetadata != null && $Object.hasOwnProperty.call(m, "sessionTransparencyMetadata")) {
                d.sessionTransparencyMetadata = $root.AICommon.SessionTransparencyMetadata.toObject(m.sessionTransparencyMetadata, o, q + 1);
            }
            if (m.botDocumentMessageMetadata != null && $Object.hasOwnProperty.call(m, "botDocumentMessageMetadata")) {
                d.botDocumentMessageMetadata = $root.AICommon.BotDocumentMessageMetadata.toObject(m.botDocumentMessageMetadata, o, q + 1);
            }
            if (m.botGroupMetadata != null && $Object.hasOwnProperty.call(m, "botGroupMetadata")) {
                d.botGroupMetadata = $root.AICommon.BotGroupMetadata.toObject(m.botGroupMetadata, o, q + 1);
            }
            if (m.botRenderingConfigMetadata != null && $Object.hasOwnProperty.call(m, "botRenderingConfigMetadata")) {
                d.botRenderingConfigMetadata = $root.AICommon.BotRenderingConfigMetadata.toObject(m.botRenderingConfigMetadata, o, q + 1);
            }
            if (m.botInfrastructureDiagnostics != null && $Object.hasOwnProperty.call(m, "botInfrastructureDiagnostics")) {
                d.botInfrastructureDiagnostics = $root.AICommon.BotInfrastructureDiagnostics.toObject(m.botInfrastructureDiagnostics, o, q + 1);
            }
            if (m.aiMediaCollectionMetadata != null && $Object.hasOwnProperty.call(m, "aiMediaCollectionMetadata")) {
                d.aiMediaCollectionMetadata = $root.AICommon.AIMediaCollectionMetadata.toObject(m.aiMediaCollectionMetadata, o, q + 1);
            }
            if (m.commandMetadata != null && $Object.hasOwnProperty.call(m, "commandMetadata")) {
                d.commandMetadata = $root.AICommon.BotCommandMetadata.toObject(m.commandMetadata, o, q + 1);
            }
            if (m.resolvedToolCallMetadata != null && $Object.hasOwnProperty.call(m, "resolvedToolCallMetadata")) {
                d.resolvedToolCallMetadata = $root.AICommon.BotResolvedToolCallMetadata.toObject(m.resolvedToolCallMetadata, o, q + 1);
            }
            if (m.subscriptionUpsellMetadata != null && $Object.hasOwnProperty.call(m, "subscriptionUpsellMetadata")) {
                d.subscriptionUpsellMetadata = $root.AICommon.AISubscriptionUpsellMetadata.toObject(m.subscriptionUpsellMetadata, o, q + 1);
            }
            if (m.pttPromptMetadata != null && $Object.hasOwnProperty.call(m, "pttPromptMetadata")) {
                d.pttPromptMetadata = $root.AICommon.BotPttPromptMetadata.toObject(m.pttPromptMetadata, o, q + 1);
            }
            if (m.botHistoryShareMetadata != null && $Object.hasOwnProperty.call(m, "botHistoryShareMetadata")) {
                d.botHistoryShareMetadata = $root.AICommon.BotHistoryShareMetadata.toObject(m.botHistoryShareMetadata, o, q + 1);
            }
            if (m.internalMetadata != null && $Object.hasOwnProperty.call(m, "internalMetadata")) {
                d.internalMetadata = o.bytes === $String ? $util.base64.encode(m.internalMetadata, 0, m.internalMetadata.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.internalMetadata) : m.internalMetadata;
            }
            return d;
        };

        BotMetadata.prototype.toJSON = function() {
            return BotMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotMetadata";
        };

        return BotMetadata;
    })();

    AICommon.BotPttPromptMetadata = (function() {

        const BotPttPromptMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotPttPromptMetadata.prototype.transcript = "";

        BotPttPromptMetadata.create = function(properties) {
            return new BotPttPromptMetadata(properties);
        };

        BotPttPromptMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.transcript != null && $Object.hasOwnProperty.call(m, "transcript"))
                w.uint32(10).string(m.transcript);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotPttPromptMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotPttPromptMetadata();
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
                        m.transcript = r.string();
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

        BotPttPromptMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotPttPromptMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotPttPromptMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotPttPromptMetadata();
            if (d.transcript != null) {
                m.transcript = $String(d.transcript);
            }
            return m;
        };

        BotPttPromptMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.transcript = "";
            }
            if (m.transcript != null && $Object.hasOwnProperty.call(m, "transcript")) {
                d.transcript = m.transcript;
            }
            return d;
        };

        BotPttPromptMetadata.prototype.toJSON = function() {
            return BotPttPromptMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotPttPromptMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotPttPromptMetadata";
        };

        return BotPttPromptMetadata;
    })();

    AICommon.BotResolvedToolCallMetadata = (function() {

        const BotResolvedToolCallMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotResolvedToolCallMetadata.prototype.toolCallId = "";
        BotResolvedToolCallMetadata.prototype.resolutionDataSerialized = "";

        BotResolvedToolCallMetadata.create = function(properties) {
            return new BotResolvedToolCallMetadata(properties);
        };

        BotResolvedToolCallMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.toolCallId != null && $Object.hasOwnProperty.call(m, "toolCallId"))
                w.uint32(10).string(m.toolCallId);
            if (m.resolutionDataSerialized != null && $Object.hasOwnProperty.call(m, "resolutionDataSerialized"))
                w.uint32(18).string(m.resolutionDataSerialized);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotResolvedToolCallMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotResolvedToolCallMetadata();
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
                        m.toolCallId = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.resolutionDataSerialized = r.string();
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

        BotResolvedToolCallMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotResolvedToolCallMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotResolvedToolCallMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotResolvedToolCallMetadata();
            if (d.toolCallId != null) {
                m.toolCallId = $String(d.toolCallId);
            }
            if (d.resolutionDataSerialized != null) {
                m.resolutionDataSerialized = $String(d.resolutionDataSerialized);
            }
            return m;
        };

        BotResolvedToolCallMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.toolCallId = "";
                d.resolutionDataSerialized = "";
            }
            if (m.toolCallId != null && $Object.hasOwnProperty.call(m, "toolCallId")) {
                d.toolCallId = m.toolCallId;
            }
            if (m.resolutionDataSerialized != null && $Object.hasOwnProperty.call(m, "resolutionDataSerialized")) {
                d.resolutionDataSerialized = m.resolutionDataSerialized;
            }
            return d;
        };

        BotResolvedToolCallMetadata.prototype.toJSON = function() {
            return BotResolvedToolCallMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotResolvedToolCallMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotResolvedToolCallMetadata";
        };

        return BotResolvedToolCallMetadata;
    })();

    AICommon.BotCommandMetadata = (function() {

        const BotCommandMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotCommandMetadata.prototype.commandName = "";
        BotCommandMetadata.prototype.commandDescription = "";
        BotCommandMetadata.prototype.commandPrompt = "";

        BotCommandMetadata.create = function(properties) {
            return new BotCommandMetadata(properties);
        };

        BotCommandMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.commandName != null && $Object.hasOwnProperty.call(m, "commandName"))
                w.uint32(10).string(m.commandName);
            if (m.commandDescription != null && $Object.hasOwnProperty.call(m, "commandDescription"))
                w.uint32(18).string(m.commandDescription);
            if (m.commandPrompt != null && $Object.hasOwnProperty.call(m, "commandPrompt"))
                w.uint32(26).string(m.commandPrompt);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotCommandMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotCommandMetadata();
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
                        m.commandName = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.commandDescription = r.string();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.commandPrompt = r.string();
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

        BotCommandMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotCommandMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotCommandMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotCommandMetadata();
            if (d.commandName != null) {
                m.commandName = $String(d.commandName);
            }
            if (d.commandDescription != null) {
                m.commandDescription = $String(d.commandDescription);
            }
            if (d.commandPrompt != null) {
                m.commandPrompt = $String(d.commandPrompt);
            }
            return m;
        };

        BotCommandMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.commandName = "";
                d.commandDescription = "";
                d.commandPrompt = "";
            }
            if (m.commandName != null && $Object.hasOwnProperty.call(m, "commandName")) {
                d.commandName = m.commandName;
            }
            if (m.commandDescription != null && $Object.hasOwnProperty.call(m, "commandDescription")) {
                d.commandDescription = m.commandDescription;
            }
            if (m.commandPrompt != null && $Object.hasOwnProperty.call(m, "commandPrompt")) {
                d.commandPrompt = m.commandPrompt;
            }
            return d;
        };

        BotCommandMetadata.prototype.toJSON = function() {
            return BotCommandMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotCommandMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotCommandMetadata";
        };

        return BotCommandMetadata;
    })();

    AICommon.AIMetadataOperation = (function() {

        const AIMetadataOperation = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        AIMetadataOperation.prototype.hatchMetadataSync = null;

        AIMetadataOperation.create = function(properties) {
            return new AIMetadataOperation(properties);
        };

        AIMetadataOperation.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.hatchMetadataSync != null && $Object.hasOwnProperty.call(m, "hatchMetadataSync"))
                $root.AICommon.HatchMetadataSync.encode(m.hatchMetadataSync, w.uint32(10).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        AIMetadataOperation.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.AIMetadataOperation();
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
                        m.hatchMetadataSync = $root.AICommon.HatchMetadataSync.decode(r, r.uint32(), $undefined, q + 1, m.hatchMetadataSync);
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

        AIMetadataOperation.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.AIMetadataOperation)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.AIMetadataOperation: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.AIMetadataOperation();
            if (d.hatchMetadataSync != null) {
                if (!$util.isObject(d.hatchMetadataSync))
                    throw $TypeError(".AICommon.AIMetadataOperation.hatchMetadataSync: object expected");
                m.hatchMetadataSync = $root.AICommon.HatchMetadataSync.fromObject(d.hatchMetadataSync, q + 1);
            }
            return m;
        };

        AIMetadataOperation.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.hatchMetadataSync = null;
            }
            if (m.hatchMetadataSync != null && $Object.hasOwnProperty.call(m, "hatchMetadataSync")) {
                d.hatchMetadataSync = $root.AICommon.HatchMetadataSync.toObject(m.hatchMetadataSync, o, q + 1);
            }
            return d;
        };

        AIMetadataOperation.prototype.toJSON = function() {
            return AIMetadataOperation.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIMetadataOperation.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.AIMetadataOperation";
        };

        return AIMetadataOperation;
    })();

    AICommon.HatchMetadataSync = (function() {

        const HatchMetadataSync = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        HatchMetadataSync.prototype.data = $util.newBuffer([]);
        HatchMetadataSync.prototype.timestampMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        HatchMetadataSync.prototype.requestId = "";

        HatchMetadataSync.create = function(properties) {
            return new HatchMetadataSync(properties);
        };

        HatchMetadataSync.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.data != null && $Object.hasOwnProperty.call(m, "data"))
                w.uint32(10).bytes(m.data);
            if (m.timestampMs != null && $Object.hasOwnProperty.call(m, "timestampMs"))
                w.uint32(16).int64(m.timestampMs);
            if (m.requestId != null && $Object.hasOwnProperty.call(m, "requestId"))
                w.uint32(26).string(m.requestId);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        HatchMetadataSync.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.HatchMetadataSync();
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
                        m.data = r.bytes();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.timestampMs = r.int64();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.requestId = r.string();
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

        HatchMetadataSync.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.HatchMetadataSync)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.HatchMetadataSync: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.HatchMetadataSync();
            if (d.data != null) {
                if (typeof d.data === "string")
                    $util.base64.decode(d.data, m.data = $util.newBuffer($util.base64.length(d.data)), 0);
                else if (d.data.length >= 0)
                    m.data = d.data;
            }
            if (d.timestampMs != null) {
                if ($util.Long)
                    m.timestampMs = $util.Long.fromValue(d.timestampMs, false);
                else if (typeof d.timestampMs === "string")
                    m.timestampMs = $parseInt(d.timestampMs, 10);
                else if (typeof d.timestampMs === "number")
                    m.timestampMs = d.timestampMs;
                else if (typeof d.timestampMs === "object")
                    m.timestampMs = new $util.LongBits(d.timestampMs.low >>> 0, d.timestampMs.high >>> 0).toNumber();
            }
            if (d.requestId != null) {
                m.requestId = $String(d.requestId);
            }
            return m;
        };

        HatchMetadataSync.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                if (o.bytes === $String)
                    d.data = "";
                else {
                    d.data = [];
                    if (o.bytes !== $Array)
                        d.data = $util.newBuffer(d.data);
                }
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.timestampMs = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.timestampMs = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.requestId = "";
            }
            if (m.data != null && $Object.hasOwnProperty.call(m, "data")) {
                d.data = o.bytes === $String ? $util.base64.encode(m.data, 0, m.data.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.data) : m.data;
            }
            if (m.timestampMs != null && $Object.hasOwnProperty.call(m, "timestampMs")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.timestampMs = typeof m.timestampMs === "number" ? $BigInt(m.timestampMs) : $util.Long.fromBits(m.timestampMs.low >>> 0, m.timestampMs.high >>> 0, false).toBigInt();
                else if (typeof m.timestampMs === "number")
                    d.timestampMs = o.longs === $String ? $String(m.timestampMs) : m.timestampMs;
                else
                    d.timestampMs = o.longs === String ? longToString(m.timestampMs) : o.longs === Number ? longToNumber(m.timestampMs) : m.timestampMs;
            }
            if (m.requestId != null && $Object.hasOwnProperty.call(m, "requestId")) {
                d.requestId = m.requestId;
            }
            return d;
        };

        HatchMetadataSync.prototype.toJSON = function() {
            return HatchMetadataSync.toObject(this, $protobuf.util.toJSONOptions);
        };

        HatchMetadataSync.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.HatchMetadataSync";
        };

        return HatchMetadataSync;
    })();

    AICommon.AIMediaCollectionMessage = (function() {

        const AIMediaCollectionMessage = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        AIMediaCollectionMessage.prototype.collectionId = "";
        AIMediaCollectionMessage.prototype.expectedMediaCount = 0;
        AIMediaCollectionMessage.prototype.hasGlobalCaption = false;

        AIMediaCollectionMessage.create = function(properties) {
            return new AIMediaCollectionMessage(properties);
        };

        AIMediaCollectionMessage.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.collectionId != null && $Object.hasOwnProperty.call(m, "collectionId"))
                w.uint32(10).string(m.collectionId);
            if (m.expectedMediaCount != null && $Object.hasOwnProperty.call(m, "expectedMediaCount"))
                w.uint32(16).uint32(m.expectedMediaCount);
            if (m.hasGlobalCaption != null && $Object.hasOwnProperty.call(m, "hasGlobalCaption"))
                w.uint32(24).bool(m.hasGlobalCaption);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        AIMediaCollectionMessage.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.AIMediaCollectionMessage();
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
                        m.collectionId = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.expectedMediaCount = r.uint32();
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        m.hasGlobalCaption = r.bool();
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

        AIMediaCollectionMessage.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.AIMediaCollectionMessage)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.AIMediaCollectionMessage: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.AIMediaCollectionMessage();
            if (d.collectionId != null) {
                m.collectionId = $String(d.collectionId);
            }
            if (d.expectedMediaCount != null) {
                m.expectedMediaCount = d.expectedMediaCount >>> 0;
            }
            if (d.hasGlobalCaption != null) {
                m.hasGlobalCaption = $Boolean(d.hasGlobalCaption);
            }
            return m;
        };

        AIMediaCollectionMessage.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.collectionId = "";
                d.expectedMediaCount = 0;
                d.hasGlobalCaption = false;
            }
            if (m.collectionId != null && $Object.hasOwnProperty.call(m, "collectionId")) {
                d.collectionId = m.collectionId;
            }
            if (m.expectedMediaCount != null && $Object.hasOwnProperty.call(m, "expectedMediaCount")) {
                d.expectedMediaCount = m.expectedMediaCount;
            }
            if (m.hasGlobalCaption != null && $Object.hasOwnProperty.call(m, "hasGlobalCaption")) {
                d.hasGlobalCaption = m.hasGlobalCaption;
            }
            return d;
        };

        AIMediaCollectionMessage.prototype.toJSON = function() {
            return AIMediaCollectionMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIMediaCollectionMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.AIMediaCollectionMessage";
        };

        return AIMediaCollectionMessage;
    })();

    AICommon.AIMediaCollectionMetadata = (function() {

        const AIMediaCollectionMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        AIMediaCollectionMetadata.prototype.collectionId = "";
        AIMediaCollectionMetadata.prototype.uploadOrderIndex = 0;

        AIMediaCollectionMetadata.create = function(properties) {
            return new AIMediaCollectionMetadata(properties);
        };

        AIMediaCollectionMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.collectionId != null && $Object.hasOwnProperty.call(m, "collectionId"))
                w.uint32(10).string(m.collectionId);
            if (m.uploadOrderIndex != null && $Object.hasOwnProperty.call(m, "uploadOrderIndex"))
                w.uint32(16).uint32(m.uploadOrderIndex);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        AIMediaCollectionMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.AIMediaCollectionMetadata();
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
                        m.collectionId = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.uploadOrderIndex = r.uint32();
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

        AIMediaCollectionMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.AIMediaCollectionMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.AIMediaCollectionMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.AIMediaCollectionMetadata();
            if (d.collectionId != null) {
                m.collectionId = $String(d.collectionId);
            }
            if (d.uploadOrderIndex != null) {
                m.uploadOrderIndex = d.uploadOrderIndex >>> 0;
            }
            return m;
        };

        AIMediaCollectionMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.collectionId = "";
                d.uploadOrderIndex = 0;
            }
            if (m.collectionId != null && $Object.hasOwnProperty.call(m, "collectionId")) {
                d.collectionId = m.collectionId;
            }
            if (m.uploadOrderIndex != null && $Object.hasOwnProperty.call(m, "uploadOrderIndex")) {
                d.uploadOrderIndex = m.uploadOrderIndex;
            }
            return d;
        };

        AIMediaCollectionMetadata.prototype.toJSON = function() {
            return AIMediaCollectionMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIMediaCollectionMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.AIMediaCollectionMetadata";
        };

        return AIMediaCollectionMetadata;
    })();

    AICommon.AIThreadInfo = (function() {

        const AIThreadInfo = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        AIThreadInfo.prototype.serverInfo = null;
        AIThreadInfo.prototype.clientInfo = null;

        AIThreadInfo.create = function(properties) {
            return new AIThreadInfo(properties);
        };

        AIThreadInfo.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.serverInfo != null && $Object.hasOwnProperty.call(m, "serverInfo"))
                $root.AICommon.AIThreadInfo.AIThreadServerInfo.encode(m.serverInfo, w.uint32(10).fork(), q + 1).ldelim();
            if (m.clientInfo != null && $Object.hasOwnProperty.call(m, "clientInfo"))
                $root.AICommon.AIThreadInfo.AIThreadClientInfo.encode(m.clientInfo, w.uint32(18).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        AIThreadInfo.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.AIThreadInfo();
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
                        m.serverInfo = $root.AICommon.AIThreadInfo.AIThreadServerInfo.decode(r, r.uint32(), $undefined, q + 1, m.serverInfo);
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.clientInfo = $root.AICommon.AIThreadInfo.AIThreadClientInfo.decode(r, r.uint32(), $undefined, q + 1, m.clientInfo);
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

        AIThreadInfo.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.AIThreadInfo)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.AIThreadInfo: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.AIThreadInfo();
            if (d.serverInfo != null) {
                if (!$util.isObject(d.serverInfo))
                    throw $TypeError(".AICommon.AIThreadInfo.serverInfo: object expected");
                m.serverInfo = $root.AICommon.AIThreadInfo.AIThreadServerInfo.fromObject(d.serverInfo, q + 1);
            }
            if (d.clientInfo != null) {
                if (!$util.isObject(d.clientInfo))
                    throw $TypeError(".AICommon.AIThreadInfo.clientInfo: object expected");
                m.clientInfo = $root.AICommon.AIThreadInfo.AIThreadClientInfo.fromObject(d.clientInfo, q + 1);
            }
            return m;
        };

        AIThreadInfo.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.serverInfo = null;
                d.clientInfo = null;
            }
            if (m.serverInfo != null && $Object.hasOwnProperty.call(m, "serverInfo")) {
                d.serverInfo = $root.AICommon.AIThreadInfo.AIThreadServerInfo.toObject(m.serverInfo, o, q + 1);
            }
            if (m.clientInfo != null && $Object.hasOwnProperty.call(m, "clientInfo")) {
                d.clientInfo = $root.AICommon.AIThreadInfo.AIThreadClientInfo.toObject(m.clientInfo, o, q + 1);
            }
            return d;
        };

        AIThreadInfo.prototype.toJSON = function() {
            return AIThreadInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        AIThreadInfo.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.AIThreadInfo";
        };

        AIThreadInfo.AIThreadClientInfo = (function() {

            const AIThreadClientInfo = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            AIThreadClientInfo.prototype.type = 0;
            AIThreadClientInfo.prototype.sourceChatJid = "";

            AIThreadClientInfo.create = function(properties) {
                return new AIThreadClientInfo(properties);
            };

            AIThreadClientInfo.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.type != null && $Object.hasOwnProperty.call(m, "type"))
                    w.uint32(8).int32(m.type);
                if (m.sourceChatJid != null && $Object.hasOwnProperty.call(m, "sourceChatJid"))
                    w.uint32(18).string(m.sourceChatJid);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            AIThreadClientInfo.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.AIThreadInfo.AIThreadClientInfo(), v;
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
                            v = r.int32();
                            if ($root.AICommon.AIThreadInfo.AIThreadClientInfo.AIThreadType[v] !== $undefined) {
                                m.type = v;
                            } else if (!r.discardUnknown) {
                                $util.makeProp(m, "$unknowns", false);
                                (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                            }
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.sourceChatJid = r.string();
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

            AIThreadClientInfo.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.AIThreadInfo.AIThreadClientInfo)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.AIThreadInfo.AIThreadClientInfo: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.AIThreadInfo.AIThreadClientInfo();
                switch (d.type) {
                case "UNKNOWN":
                case 0:
                    m.type = 0;
                    break;
                case "DEFAULT":
                case 1:
                    m.type = 1;
                    break;
                case "INCOGNITO":
                case 2:
                    m.type = 2;
                    break;
                case "SIDE_CHAT":
                case 3:
                    m.type = 3;
                    break;
                default:
                }
                if (d.sourceChatJid != null) {
                    m.sourceChatJid = $String(d.sourceChatJid);
                }
                return m;
            };

            AIThreadClientInfo.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.type = o.enums === $String ? "UNKNOWN" : 0;
                    d.sourceChatJid = "";
                }
                if (m.type != null && $Object.hasOwnProperty.call(m, "type")) {
                    d.type = o.enums === $String ? $root.AICommon.AIThreadInfo.AIThreadClientInfo.AIThreadType[m.type] === $undefined ? m.type : $root.AICommon.AIThreadInfo.AIThreadClientInfo.AIThreadType[m.type] : m.type;
                }
                if (m.sourceChatJid != null && $Object.hasOwnProperty.call(m, "sourceChatJid")) {
                    d.sourceChatJid = m.sourceChatJid;
                }
                return d;
            };

            AIThreadClientInfo.prototype.toJSON = function() {
                return AIThreadClientInfo.toObject(this, $protobuf.util.toJSONOptions);
            };

            AIThreadClientInfo.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.AIThreadInfo.AIThreadClientInfo";
            };

            AIThreadClientInfo.AIThreadType = (function() {
                const valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "DEFAULT"] = 1;
                values[valuesById[2] = "INCOGNITO"] = 2;
                values[valuesById[3] = "SIDE_CHAT"] = 3;
                return values;
            })();

            return AIThreadClientInfo;
        })();

        AIThreadInfo.AIThreadServerInfo = (function() {

            const AIThreadServerInfo = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            AIThreadServerInfo.prototype.title = "";

            AIThreadServerInfo.create = function(properties) {
                return new AIThreadServerInfo(properties);
            };

            AIThreadServerInfo.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.title != null && $Object.hasOwnProperty.call(m, "title"))
                    w.uint32(10).string(m.title);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            AIThreadServerInfo.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.AIThreadInfo.AIThreadServerInfo();
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
                            m.title = r.string();
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

            AIThreadServerInfo.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.AIThreadInfo.AIThreadServerInfo)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.AIThreadInfo.AIThreadServerInfo: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.AIThreadInfo.AIThreadServerInfo();
                if (d.title != null) {
                    m.title = $String(d.title);
                }
                return m;
            };

            AIThreadServerInfo.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.title = "";
                }
                if (m.title != null && $Object.hasOwnProperty.call(m, "title")) {
                    d.title = m.title;
                }
                return d;
            };

            AIThreadServerInfo.prototype.toJSON = function() {
                return AIThreadServerInfo.toObject(this, $protobuf.util.toJSONOptions);
            };

            AIThreadServerInfo.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.AIThreadInfo.AIThreadServerInfo";
            };

            return AIThreadServerInfo;
        })();

        return AIThreadInfo;
    })();

    AICommon.BotUnifiedResponseMutation = (function() {

        const BotUnifiedResponseMutation = function (p) {
            this.mediaDetailsMetadataList = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotUnifiedResponseMutation.prototype.sbsMetadata = null;
        BotUnifiedResponseMutation.prototype.mediaDetailsMetadataList = $util.emptyArray;

        BotUnifiedResponseMutation.create = function(properties) {
            return new BotUnifiedResponseMutation(properties);
        };

        BotUnifiedResponseMutation.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.sbsMetadata != null && $Object.hasOwnProperty.call(m, "sbsMetadata"))
                $root.AICommon.BotUnifiedResponseMutation.SideBySideMetadata.encode(m.sbsMetadata, w.uint32(10).fork(), q + 1).ldelim();
            if (m.mediaDetailsMetadataList != null && m.mediaDetailsMetadataList.length) {
                for (var i = 0; i < m.mediaDetailsMetadataList.length; ++i)
                    $root.AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.encode(m.mediaDetailsMetadataList[i], w.uint32(18).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotUnifiedResponseMutation.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotUnifiedResponseMutation();
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
                        m.sbsMetadata = $root.AICommon.BotUnifiedResponseMutation.SideBySideMetadata.decode(r, r.uint32(), $undefined, q + 1, m.sbsMetadata);
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        if (!(m.mediaDetailsMetadataList && m.mediaDetailsMetadataList.length))
                            m.mediaDetailsMetadataList = [];
                        m.mediaDetailsMetadataList.push($root.AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.decode(r, r.uint32(), $undefined, q + 1));
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

        BotUnifiedResponseMutation.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotUnifiedResponseMutation)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotUnifiedResponseMutation: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotUnifiedResponseMutation();
            if (d.sbsMetadata != null) {
                if (!$util.isObject(d.sbsMetadata))
                    throw $TypeError(".AICommon.BotUnifiedResponseMutation.sbsMetadata: object expected");
                m.sbsMetadata = $root.AICommon.BotUnifiedResponseMutation.SideBySideMetadata.fromObject(d.sbsMetadata, q + 1);
            }
            if (d.mediaDetailsMetadataList) {
                if (!$Array.isArray(d.mediaDetailsMetadataList))
                    throw $TypeError(".AICommon.BotUnifiedResponseMutation.mediaDetailsMetadataList: array expected");
                m.mediaDetailsMetadataList = $Array(d.mediaDetailsMetadataList.length);
                for (var i = 0; i < d.mediaDetailsMetadataList.length; ++i) {
                    if (!$util.isObject(d.mediaDetailsMetadataList[i]))
                        throw $TypeError(".AICommon.BotUnifiedResponseMutation.mediaDetailsMetadataList: object expected");
                    m.mediaDetailsMetadataList[i] = $root.AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.fromObject(d.mediaDetailsMetadataList[i], q + 1);
                }
            }
            return m;
        };

        BotUnifiedResponseMutation.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.mediaDetailsMetadataList = [];
            }
            if (o.defaults) {
                d.sbsMetadata = null;
            }
            if (m.sbsMetadata != null && $Object.hasOwnProperty.call(m, "sbsMetadata")) {
                d.sbsMetadata = $root.AICommon.BotUnifiedResponseMutation.SideBySideMetadata.toObject(m.sbsMetadata, o, q + 1);
            }
            if (m.mediaDetailsMetadataList && m.mediaDetailsMetadataList.length) {
                d.mediaDetailsMetadataList = $Array(m.mediaDetailsMetadataList.length);
                for (var j = 0; j < m.mediaDetailsMetadataList.length; ++j) {
                    d.mediaDetailsMetadataList[j] = $root.AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.toObject(m.mediaDetailsMetadataList[j], o, q + 1);
                }
            }
            return d;
        };

        BotUnifiedResponseMutation.prototype.toJSON = function() {
            return BotUnifiedResponseMutation.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotUnifiedResponseMutation.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotUnifiedResponseMutation";
        };

        BotUnifiedResponseMutation.MediaDetailsMetadata = (function() {

            const MediaDetailsMetadata = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            MediaDetailsMetadata.prototype.id = "";
            MediaDetailsMetadata.prototype.highResMedia = null;
            MediaDetailsMetadata.prototype.previewMedia = null;

            MediaDetailsMetadata.create = function(properties) {
                return new MediaDetailsMetadata(properties);
            };

            MediaDetailsMetadata.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.id != null && $Object.hasOwnProperty.call(m, "id"))
                    w.uint32(10).string(m.id);
                if (m.highResMedia != null && $Object.hasOwnProperty.call(m, "highResMedia"))
                    $root.AICommon.BotMediaMetadata.encode(m.highResMedia, w.uint32(18).fork(), q + 1).ldelim();
                if (m.previewMedia != null && $Object.hasOwnProperty.call(m, "previewMedia"))
                    $root.AICommon.BotMediaMetadata.encode(m.previewMedia, w.uint32(26).fork(), q + 1).ldelim();
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            MediaDetailsMetadata.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata();
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
                            m.id = r.string();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.highResMedia = $root.AICommon.BotMediaMetadata.decode(r, r.uint32(), $undefined, q + 1, m.highResMedia);
                            continue;
                        }
                    case 3: {
                            if (u !== 2)
                                break;
                            m.previewMedia = $root.AICommon.BotMediaMetadata.decode(r, r.uint32(), $undefined, q + 1, m.previewMedia);
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

            MediaDetailsMetadata.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata();
                if (d.id != null) {
                    m.id = $String(d.id);
                }
                if (d.highResMedia != null) {
                    if (!$util.isObject(d.highResMedia))
                        throw $TypeError(".AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.highResMedia: object expected");
                    m.highResMedia = $root.AICommon.BotMediaMetadata.fromObject(d.highResMedia, q + 1);
                }
                if (d.previewMedia != null) {
                    if (!$util.isObject(d.previewMedia))
                        throw $TypeError(".AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata.previewMedia: object expected");
                    m.previewMedia = $root.AICommon.BotMediaMetadata.fromObject(d.previewMedia, q + 1);
                }
                return m;
            };

            MediaDetailsMetadata.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.id = "";
                    d.highResMedia = null;
                    d.previewMedia = null;
                }
                if (m.id != null && $Object.hasOwnProperty.call(m, "id")) {
                    d.id = m.id;
                }
                if (m.highResMedia != null && $Object.hasOwnProperty.call(m, "highResMedia")) {
                    d.highResMedia = $root.AICommon.BotMediaMetadata.toObject(m.highResMedia, o, q + 1);
                }
                if (m.previewMedia != null && $Object.hasOwnProperty.call(m, "previewMedia")) {
                    d.previewMedia = $root.AICommon.BotMediaMetadata.toObject(m.previewMedia, o, q + 1);
                }
                return d;
            };

            MediaDetailsMetadata.prototype.toJSON = function() {
                return MediaDetailsMetadata.toObject(this, $protobuf.util.toJSONOptions);
            };

            MediaDetailsMetadata.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.BotUnifiedResponseMutation.MediaDetailsMetadata";
            };

            return MediaDetailsMetadata;
        })();

        BotUnifiedResponseMutation.SideBySideMetadata = (function() {

            const SideBySideMetadata = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            SideBySideMetadata.prototype.primaryResponseId = "";
            SideBySideMetadata.prototype.surveyCtaHasRendered = false;

            SideBySideMetadata.create = function(properties) {
                return new SideBySideMetadata(properties);
            };

            SideBySideMetadata.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.primaryResponseId != null && $Object.hasOwnProperty.call(m, "primaryResponseId"))
                    w.uint32(10).string(m.primaryResponseId);
                if (m.surveyCtaHasRendered != null && $Object.hasOwnProperty.call(m, "surveyCtaHasRendered"))
                    w.uint32(16).bool(m.surveyCtaHasRendered);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            SideBySideMetadata.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotUnifiedResponseMutation.SideBySideMetadata();
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
                            m.primaryResponseId = r.string();
                            continue;
                        }
                    case 2: {
                            if (u !== 0)
                                break;
                            m.surveyCtaHasRendered = r.bool();
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

            SideBySideMetadata.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.BotUnifiedResponseMutation.SideBySideMetadata)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.BotUnifiedResponseMutation.SideBySideMetadata: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.BotUnifiedResponseMutation.SideBySideMetadata();
                if (d.primaryResponseId != null) {
                    m.primaryResponseId = $String(d.primaryResponseId);
                }
                if (d.surveyCtaHasRendered != null) {
                    m.surveyCtaHasRendered = $Boolean(d.surveyCtaHasRendered);
                }
                return m;
            };

            SideBySideMetadata.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.primaryResponseId = "";
                    d.surveyCtaHasRendered = false;
                }
                if (m.primaryResponseId != null && $Object.hasOwnProperty.call(m, "primaryResponseId")) {
                    d.primaryResponseId = m.primaryResponseId;
                }
                if (m.surveyCtaHasRendered != null && $Object.hasOwnProperty.call(m, "surveyCtaHasRendered")) {
                    d.surveyCtaHasRendered = m.surveyCtaHasRendered;
                }
                return d;
            };

            SideBySideMetadata.prototype.toJSON = function() {
                return SideBySideMetadata.toObject(this, $protobuf.util.toJSONOptions);
            };

            SideBySideMetadata.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.BotUnifiedResponseMutation.SideBySideMetadata";
            };

            return SideBySideMetadata;
        })();

        return BotUnifiedResponseMutation;
    })();

    AICommon.BotMessageOrigin = (function() {

        const BotMessageOrigin = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotMessageOrigin.prototype.type = 0;

        BotMessageOrigin.create = function(properties) {
            return new BotMessageOrigin(properties);
        };

        BotMessageOrigin.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.type != null && $Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotMessageOrigin.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotMessageOrigin(), v;
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
                        v = r.int32();
                        if ($root.AICommon.BotMessageOrigin.BotMessageOriginType[v] !== $undefined) {
                            m.type = v;
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

        BotMessageOrigin.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotMessageOrigin)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotMessageOrigin: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotMessageOrigin();
            switch (d.type) {
            case "BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED":
            case 0:
                m.type = 0;
                break;
            default:
            }
            return m;
        };

        BotMessageOrigin.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.type = o.enums === $String ? "BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED" : 0;
            }
            if (m.type != null && $Object.hasOwnProperty.call(m, "type")) {
                d.type = o.enums === $String ? $root.AICommon.BotMessageOrigin.BotMessageOriginType[m.type] === $undefined ? m.type : $root.AICommon.BotMessageOrigin.BotMessageOriginType[m.type] : m.type;
            }
            return d;
        };

        BotMessageOrigin.prototype.toJSON = function() {
            return BotMessageOrigin.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMessageOrigin.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotMessageOrigin";
        };

        BotMessageOrigin.BotMessageOriginType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED"] = 0;
            return values;
        })();

        return BotMessageOrigin;
    })();

    AICommon.BotMessageOriginMetadata = (function() {

        const BotMessageOriginMetadata = function (p) {
            this.origins = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotMessageOriginMetadata.prototype.origins = $util.emptyArray;

        BotMessageOriginMetadata.create = function(properties) {
            return new BotMessageOriginMetadata(properties);
        };

        BotMessageOriginMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.origins != null && m.origins.length) {
                for (var i = 0; i < m.origins.length; ++i)
                    $root.AICommon.BotMessageOrigin.encode(m.origins[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotMessageOriginMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotMessageOriginMetadata();
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
                        if (!(m.origins && m.origins.length))
                            m.origins = [];
                        m.origins.push($root.AICommon.BotMessageOrigin.decode(r, r.uint32(), $undefined, q + 1));
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

        BotMessageOriginMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotMessageOriginMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotMessageOriginMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotMessageOriginMetadata();
            if (d.origins) {
                if (!$Array.isArray(d.origins))
                    throw $TypeError(".AICommon.BotMessageOriginMetadata.origins: array expected");
                m.origins = $Array(d.origins.length);
                for (var i = 0; i < d.origins.length; ++i) {
                    if (!$util.isObject(d.origins[i]))
                        throw $TypeError(".AICommon.BotMessageOriginMetadata.origins: object expected");
                    m.origins[i] = $root.AICommon.BotMessageOrigin.fromObject(d.origins[i], q + 1);
                }
            }
            return m;
        };

        BotMessageOriginMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.origins = [];
            }
            if (m.origins && m.origins.length) {
                d.origins = $Array(m.origins.length);
                for (var j = 0; j < m.origins.length; ++j) {
                    d.origins[j] = $root.AICommon.BotMessageOrigin.toObject(m.origins[j], o, q + 1);
                }
            }
            return d;
        };

        BotMessageOriginMetadata.prototype.toJSON = function() {
            return BotMessageOriginMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMessageOriginMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotMessageOriginMetadata";
        };

        return BotMessageOriginMetadata;
    })();

    AICommon.InThreadSurveyMetadata = (function() {

        const InThreadSurveyMetadata = function (p) {
            this.questions = [];
            this.privacyStatementParts = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        InThreadSurveyMetadata.prototype.tessaSessionId = "";
        InThreadSurveyMetadata.prototype.simonSessionId = "";
        InThreadSurveyMetadata.prototype.simonSurveyId = "";
        InThreadSurveyMetadata.prototype.tessaRootId = "";
        InThreadSurveyMetadata.prototype.requestId = "";
        InThreadSurveyMetadata.prototype.tessaEvent = "";
        InThreadSurveyMetadata.prototype.invitationHeaderText = "";
        InThreadSurveyMetadata.prototype.invitationBodyText = "";
        InThreadSurveyMetadata.prototype.invitationCtaText = "";
        InThreadSurveyMetadata.prototype.invitationCtaUrl = "";
        InThreadSurveyMetadata.prototype.surveyTitle = "";
        InThreadSurveyMetadata.prototype.questions = $util.emptyArray;
        InThreadSurveyMetadata.prototype.surveyContinueButtonText = "";
        InThreadSurveyMetadata.prototype.surveySubmitButtonText = "";
        InThreadSurveyMetadata.prototype.privacyStatementFull = "";
        InThreadSurveyMetadata.prototype.privacyStatementParts = $util.emptyArray;
        InThreadSurveyMetadata.prototype.feedbackToastText = "";
        InThreadSurveyMetadata.prototype.startQuestionIndex = 0;

        InThreadSurveyMetadata.create = function(properties) {
            return new InThreadSurveyMetadata(properties);
        };

        InThreadSurveyMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.tessaSessionId != null && $Object.hasOwnProperty.call(m, "tessaSessionId"))
                w.uint32(10).string(m.tessaSessionId);
            if (m.simonSessionId != null && $Object.hasOwnProperty.call(m, "simonSessionId"))
                w.uint32(18).string(m.simonSessionId);
            if (m.simonSurveyId != null && $Object.hasOwnProperty.call(m, "simonSurveyId"))
                w.uint32(26).string(m.simonSurveyId);
            if (m.tessaRootId != null && $Object.hasOwnProperty.call(m, "tessaRootId"))
                w.uint32(34).string(m.tessaRootId);
            if (m.requestId != null && $Object.hasOwnProperty.call(m, "requestId"))
                w.uint32(42).string(m.requestId);
            if (m.tessaEvent != null && $Object.hasOwnProperty.call(m, "tessaEvent"))
                w.uint32(50).string(m.tessaEvent);
            if (m.invitationHeaderText != null && $Object.hasOwnProperty.call(m, "invitationHeaderText"))
                w.uint32(58).string(m.invitationHeaderText);
            if (m.invitationBodyText != null && $Object.hasOwnProperty.call(m, "invitationBodyText"))
                w.uint32(66).string(m.invitationBodyText);
            if (m.invitationCtaText != null && $Object.hasOwnProperty.call(m, "invitationCtaText"))
                w.uint32(74).string(m.invitationCtaText);
            if (m.invitationCtaUrl != null && $Object.hasOwnProperty.call(m, "invitationCtaUrl"))
                w.uint32(82).string(m.invitationCtaUrl);
            if (m.surveyTitle != null && $Object.hasOwnProperty.call(m, "surveyTitle"))
                w.uint32(90).string(m.surveyTitle);
            if (m.questions != null && m.questions.length) {
                for (var i = 0; i < m.questions.length; ++i)
                    $root.AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.encode(m.questions[i], w.uint32(98).fork(), q + 1).ldelim();
            }
            if (m.surveyContinueButtonText != null && $Object.hasOwnProperty.call(m, "surveyContinueButtonText"))
                w.uint32(106).string(m.surveyContinueButtonText);
            if (m.surveySubmitButtonText != null && $Object.hasOwnProperty.call(m, "surveySubmitButtonText"))
                w.uint32(114).string(m.surveySubmitButtonText);
            if (m.privacyStatementFull != null && $Object.hasOwnProperty.call(m, "privacyStatementFull"))
                w.uint32(122).string(m.privacyStatementFull);
            if (m.privacyStatementParts != null && m.privacyStatementParts.length) {
                for (var i = 0; i < m.privacyStatementParts.length; ++i)
                    $root.AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.encode(m.privacyStatementParts[i], w.uint32(130).fork(), q + 1).ldelim();
            }
            if (m.feedbackToastText != null && $Object.hasOwnProperty.call(m, "feedbackToastText"))
                w.uint32(138).string(m.feedbackToastText);
            if (m.startQuestionIndex != null && $Object.hasOwnProperty.call(m, "startQuestionIndex"))
                w.uint32(144).int32(m.startQuestionIndex);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        InThreadSurveyMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.InThreadSurveyMetadata();
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
                        m.tessaSessionId = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.simonSessionId = r.string();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.simonSurveyId = r.string();
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.tessaRootId = r.string();
                        continue;
                    }
                case 5: {
                        if (u !== 2)
                            break;
                        m.requestId = r.string();
                        continue;
                    }
                case 6: {
                        if (u !== 2)
                            break;
                        m.tessaEvent = r.string();
                        continue;
                    }
                case 7: {
                        if (u !== 2)
                            break;
                        m.invitationHeaderText = r.string();
                        continue;
                    }
                case 8: {
                        if (u !== 2)
                            break;
                        m.invitationBodyText = r.string();
                        continue;
                    }
                case 9: {
                        if (u !== 2)
                            break;
                        m.invitationCtaText = r.string();
                        continue;
                    }
                case 10: {
                        if (u !== 2)
                            break;
                        m.invitationCtaUrl = r.string();
                        continue;
                    }
                case 11: {
                        if (u !== 2)
                            break;
                        m.surveyTitle = r.string();
                        continue;
                    }
                case 12: {
                        if (u !== 2)
                            break;
                        if (!(m.questions && m.questions.length))
                            m.questions = [];
                        m.questions.push($root.AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                case 13: {
                        if (u !== 2)
                            break;
                        m.surveyContinueButtonText = r.string();
                        continue;
                    }
                case 14: {
                        if (u !== 2)
                            break;
                        m.surveySubmitButtonText = r.string();
                        continue;
                    }
                case 15: {
                        if (u !== 2)
                            break;
                        m.privacyStatementFull = r.string();
                        continue;
                    }
                case 16: {
                        if (u !== 2)
                            break;
                        if (!(m.privacyStatementParts && m.privacyStatementParts.length))
                            m.privacyStatementParts = [];
                        m.privacyStatementParts.push($root.AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                case 17: {
                        if (u !== 2)
                            break;
                        m.feedbackToastText = r.string();
                        continue;
                    }
                case 18: {
                        if (u !== 0)
                            break;
                        m.startQuestionIndex = r.int32();
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

        InThreadSurveyMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.InThreadSurveyMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.InThreadSurveyMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.InThreadSurveyMetadata();
            if (d.tessaSessionId != null) {
                m.tessaSessionId = $String(d.tessaSessionId);
            }
            if (d.simonSessionId != null) {
                m.simonSessionId = $String(d.simonSessionId);
            }
            if (d.simonSurveyId != null) {
                m.simonSurveyId = $String(d.simonSurveyId);
            }
            if (d.tessaRootId != null) {
                m.tessaRootId = $String(d.tessaRootId);
            }
            if (d.requestId != null) {
                m.requestId = $String(d.requestId);
            }
            if (d.tessaEvent != null) {
                m.tessaEvent = $String(d.tessaEvent);
            }
            if (d.invitationHeaderText != null) {
                m.invitationHeaderText = $String(d.invitationHeaderText);
            }
            if (d.invitationBodyText != null) {
                m.invitationBodyText = $String(d.invitationBodyText);
            }
            if (d.invitationCtaText != null) {
                m.invitationCtaText = $String(d.invitationCtaText);
            }
            if (d.invitationCtaUrl != null) {
                m.invitationCtaUrl = $String(d.invitationCtaUrl);
            }
            if (d.surveyTitle != null) {
                m.surveyTitle = $String(d.surveyTitle);
            }
            if (d.questions) {
                if (!$Array.isArray(d.questions))
                    throw $TypeError(".AICommon.InThreadSurveyMetadata.questions: array expected");
                m.questions = $Array(d.questions.length);
                for (var i = 0; i < d.questions.length; ++i) {
                    if (!$util.isObject(d.questions[i]))
                        throw $TypeError(".AICommon.InThreadSurveyMetadata.questions: object expected");
                    m.questions[i] = $root.AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.fromObject(d.questions[i], q + 1);
                }
            }
            if (d.surveyContinueButtonText != null) {
                m.surveyContinueButtonText = $String(d.surveyContinueButtonText);
            }
            if (d.surveySubmitButtonText != null) {
                m.surveySubmitButtonText = $String(d.surveySubmitButtonText);
            }
            if (d.privacyStatementFull != null) {
                m.privacyStatementFull = $String(d.privacyStatementFull);
            }
            if (d.privacyStatementParts) {
                if (!$Array.isArray(d.privacyStatementParts))
                    throw $TypeError(".AICommon.InThreadSurveyMetadata.privacyStatementParts: array expected");
                m.privacyStatementParts = $Array(d.privacyStatementParts.length);
                for (var i = 0; i < d.privacyStatementParts.length; ++i) {
                    if (!$util.isObject(d.privacyStatementParts[i]))
                        throw $TypeError(".AICommon.InThreadSurveyMetadata.privacyStatementParts: object expected");
                    m.privacyStatementParts[i] = $root.AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.fromObject(d.privacyStatementParts[i], q + 1);
                }
            }
            if (d.feedbackToastText != null) {
                m.feedbackToastText = $String(d.feedbackToastText);
            }
            if (d.startQuestionIndex != null) {
                m.startQuestionIndex = d.startQuestionIndex | 0;
            }
            return m;
        };

        InThreadSurveyMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.questions = [];
                d.privacyStatementParts = [];
            }
            if (o.defaults) {
                d.tessaSessionId = "";
                d.simonSessionId = "";
                d.simonSurveyId = "";
                d.tessaRootId = "";
                d.requestId = "";
                d.tessaEvent = "";
                d.invitationHeaderText = "";
                d.invitationBodyText = "";
                d.invitationCtaText = "";
                d.invitationCtaUrl = "";
                d.surveyTitle = "";
                d.surveyContinueButtonText = "";
                d.surveySubmitButtonText = "";
                d.privacyStatementFull = "";
                d.feedbackToastText = "";
                d.startQuestionIndex = 0;
            }
            if (m.tessaSessionId != null && $Object.hasOwnProperty.call(m, "tessaSessionId")) {
                d.tessaSessionId = m.tessaSessionId;
            }
            if (m.simonSessionId != null && $Object.hasOwnProperty.call(m, "simonSessionId")) {
                d.simonSessionId = m.simonSessionId;
            }
            if (m.simonSurveyId != null && $Object.hasOwnProperty.call(m, "simonSurveyId")) {
                d.simonSurveyId = m.simonSurveyId;
            }
            if (m.tessaRootId != null && $Object.hasOwnProperty.call(m, "tessaRootId")) {
                d.tessaRootId = m.tessaRootId;
            }
            if (m.requestId != null && $Object.hasOwnProperty.call(m, "requestId")) {
                d.requestId = m.requestId;
            }
            if (m.tessaEvent != null && $Object.hasOwnProperty.call(m, "tessaEvent")) {
                d.tessaEvent = m.tessaEvent;
            }
            if (m.invitationHeaderText != null && $Object.hasOwnProperty.call(m, "invitationHeaderText")) {
                d.invitationHeaderText = m.invitationHeaderText;
            }
            if (m.invitationBodyText != null && $Object.hasOwnProperty.call(m, "invitationBodyText")) {
                d.invitationBodyText = m.invitationBodyText;
            }
            if (m.invitationCtaText != null && $Object.hasOwnProperty.call(m, "invitationCtaText")) {
                d.invitationCtaText = m.invitationCtaText;
            }
            if (m.invitationCtaUrl != null && $Object.hasOwnProperty.call(m, "invitationCtaUrl")) {
                d.invitationCtaUrl = m.invitationCtaUrl;
            }
            if (m.surveyTitle != null && $Object.hasOwnProperty.call(m, "surveyTitle")) {
                d.surveyTitle = m.surveyTitle;
            }
            if (m.questions && m.questions.length) {
                d.questions = $Array(m.questions.length);
                for (var j = 0; j < m.questions.length; ++j) {
                    d.questions[j] = $root.AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.toObject(m.questions[j], o, q + 1);
                }
            }
            if (m.surveyContinueButtonText != null && $Object.hasOwnProperty.call(m, "surveyContinueButtonText")) {
                d.surveyContinueButtonText = m.surveyContinueButtonText;
            }
            if (m.surveySubmitButtonText != null && $Object.hasOwnProperty.call(m, "surveySubmitButtonText")) {
                d.surveySubmitButtonText = m.surveySubmitButtonText;
            }
            if (m.privacyStatementFull != null && $Object.hasOwnProperty.call(m, "privacyStatementFull")) {
                d.privacyStatementFull = m.privacyStatementFull;
            }
            if (m.privacyStatementParts && m.privacyStatementParts.length) {
                d.privacyStatementParts = $Array(m.privacyStatementParts.length);
                for (var j = 0; j < m.privacyStatementParts.length; ++j) {
                    d.privacyStatementParts[j] = $root.AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart.toObject(m.privacyStatementParts[j], o, q + 1);
                }
            }
            if (m.feedbackToastText != null && $Object.hasOwnProperty.call(m, "feedbackToastText")) {
                d.feedbackToastText = m.feedbackToastText;
            }
            if (m.startQuestionIndex != null && $Object.hasOwnProperty.call(m, "startQuestionIndex")) {
                d.startQuestionIndex = m.startQuestionIndex;
            }
            return d;
        };

        InThreadSurveyMetadata.prototype.toJSON = function() {
            return InThreadSurveyMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        InThreadSurveyMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.InThreadSurveyMetadata";
        };

        InThreadSurveyMetadata.InThreadSurveyOption = (function() {

            const InThreadSurveyOption = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            InThreadSurveyOption.prototype.stringValue = "";
            InThreadSurveyOption.prototype.numericValue = 0;
            InThreadSurveyOption.prototype.textTranslated = "";

            InThreadSurveyOption.create = function(properties) {
                return new InThreadSurveyOption(properties);
            };

            InThreadSurveyOption.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.stringValue != null && $Object.hasOwnProperty.call(m, "stringValue"))
                    w.uint32(10).string(m.stringValue);
                if (m.numericValue != null && $Object.hasOwnProperty.call(m, "numericValue"))
                    w.uint32(16).uint32(m.numericValue);
                if (m.textTranslated != null && $Object.hasOwnProperty.call(m, "textTranslated"))
                    w.uint32(26).string(m.textTranslated);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            InThreadSurveyOption.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.InThreadSurveyMetadata.InThreadSurveyOption();
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
                            m.stringValue = r.string();
                            continue;
                        }
                    case 2: {
                            if (u !== 0)
                                break;
                            m.numericValue = r.uint32();
                            continue;
                        }
                    case 3: {
                            if (u !== 2)
                                break;
                            m.textTranslated = r.string();
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

            InThreadSurveyOption.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.InThreadSurveyMetadata.InThreadSurveyOption)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.InThreadSurveyMetadata.InThreadSurveyOption: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.InThreadSurveyMetadata.InThreadSurveyOption();
                if (d.stringValue != null) {
                    m.stringValue = $String(d.stringValue);
                }
                if (d.numericValue != null) {
                    m.numericValue = d.numericValue >>> 0;
                }
                if (d.textTranslated != null) {
                    m.textTranslated = $String(d.textTranslated);
                }
                return m;
            };

            InThreadSurveyOption.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.stringValue = "";
                    d.numericValue = 0;
                    d.textTranslated = "";
                }
                if (m.stringValue != null && $Object.hasOwnProperty.call(m, "stringValue")) {
                    d.stringValue = m.stringValue;
                }
                if (m.numericValue != null && $Object.hasOwnProperty.call(m, "numericValue")) {
                    d.numericValue = m.numericValue;
                }
                if (m.textTranslated != null && $Object.hasOwnProperty.call(m, "textTranslated")) {
                    d.textTranslated = m.textTranslated;
                }
                return d;
            };

            InThreadSurveyOption.prototype.toJSON = function() {
                return InThreadSurveyOption.toObject(this, $protobuf.util.toJSONOptions);
            };

            InThreadSurveyOption.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.InThreadSurveyMetadata.InThreadSurveyOption";
            };

            return InThreadSurveyOption;
        })();

        InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart = (function() {

            const InThreadSurveyPrivacyStatementPart = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            InThreadSurveyPrivacyStatementPart.prototype.text = "";
            InThreadSurveyPrivacyStatementPart.prototype.url = "";

            InThreadSurveyPrivacyStatementPart.create = function(properties) {
                return new InThreadSurveyPrivacyStatementPart(properties);
            };

            InThreadSurveyPrivacyStatementPart.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.text != null && $Object.hasOwnProperty.call(m, "text"))
                    w.uint32(10).string(m.text);
                if (m.url != null && $Object.hasOwnProperty.call(m, "url"))
                    w.uint32(18).string(m.url);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            InThreadSurveyPrivacyStatementPart.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart();
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
                            m.text = r.string();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.url = r.string();
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

            InThreadSurveyPrivacyStatementPart.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart();
                if (d.text != null) {
                    m.text = $String(d.text);
                }
                if (d.url != null) {
                    m.url = $String(d.url);
                }
                return m;
            };

            InThreadSurveyPrivacyStatementPart.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.text = "";
                    d.url = "";
                }
                if (m.text != null && $Object.hasOwnProperty.call(m, "text")) {
                    d.text = m.text;
                }
                if (m.url != null && $Object.hasOwnProperty.call(m, "url")) {
                    d.url = m.url;
                }
                return d;
            };

            InThreadSurveyPrivacyStatementPart.prototype.toJSON = function() {
                return InThreadSurveyPrivacyStatementPart.toObject(this, $protobuf.util.toJSONOptions);
            };

            InThreadSurveyPrivacyStatementPart.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.InThreadSurveyMetadata.InThreadSurveyPrivacyStatementPart";
            };

            return InThreadSurveyPrivacyStatementPart;
        })();

        InThreadSurveyMetadata.InThreadSurveyQuestion = (function() {

            const InThreadSurveyQuestion = function (p) {
                this.questionOptions = [];
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            InThreadSurveyQuestion.prototype.questionText = "";
            InThreadSurveyQuestion.prototype.questionId = "";
            InThreadSurveyQuestion.prototype.questionOptions = $util.emptyArray;

            InThreadSurveyQuestion.create = function(properties) {
                return new InThreadSurveyQuestion(properties);
            };

            InThreadSurveyQuestion.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.questionText != null && $Object.hasOwnProperty.call(m, "questionText"))
                    w.uint32(10).string(m.questionText);
                if (m.questionId != null && $Object.hasOwnProperty.call(m, "questionId"))
                    w.uint32(18).string(m.questionId);
                if (m.questionOptions != null && m.questionOptions.length) {
                    for (var i = 0; i < m.questionOptions.length; ++i)
                        $root.AICommon.InThreadSurveyMetadata.InThreadSurveyOption.encode(m.questionOptions[i], w.uint32(26).fork(), q + 1).ldelim();
                }
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            InThreadSurveyQuestion.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion();
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
                            m.questionText = r.string();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.questionId = r.string();
                            continue;
                        }
                    case 3: {
                            if (u !== 2)
                                break;
                            if (!(m.questionOptions && m.questionOptions.length))
                                m.questionOptions = [];
                            m.questionOptions.push($root.AICommon.InThreadSurveyMetadata.InThreadSurveyOption.decode(r, r.uint32(), $undefined, q + 1));
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

            InThreadSurveyQuestion.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion();
                if (d.questionText != null) {
                    m.questionText = $String(d.questionText);
                }
                if (d.questionId != null) {
                    m.questionId = $String(d.questionId);
                }
                if (d.questionOptions) {
                    if (!$Array.isArray(d.questionOptions))
                        throw $TypeError(".AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.questionOptions: array expected");
                    m.questionOptions = $Array(d.questionOptions.length);
                    for (var i = 0; i < d.questionOptions.length; ++i) {
                        if (!$util.isObject(d.questionOptions[i]))
                            throw $TypeError(".AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion.questionOptions: object expected");
                        m.questionOptions[i] = $root.AICommon.InThreadSurveyMetadata.InThreadSurveyOption.fromObject(d.questionOptions[i], q + 1);
                    }
                }
                return m;
            };

            InThreadSurveyQuestion.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.arrays || o.defaults) {
                    d.questionOptions = [];
                }
                if (o.defaults) {
                    d.questionText = "";
                    d.questionId = "";
                }
                if (m.questionText != null && $Object.hasOwnProperty.call(m, "questionText")) {
                    d.questionText = m.questionText;
                }
                if (m.questionId != null && $Object.hasOwnProperty.call(m, "questionId")) {
                    d.questionId = m.questionId;
                }
                if (m.questionOptions && m.questionOptions.length) {
                    d.questionOptions = $Array(m.questionOptions.length);
                    for (var j = 0; j < m.questionOptions.length; ++j) {
                        d.questionOptions[j] = $root.AICommon.InThreadSurveyMetadata.InThreadSurveyOption.toObject(m.questionOptions[j], o, q + 1);
                    }
                }
                return d;
            };

            InThreadSurveyQuestion.prototype.toJSON = function() {
                return InThreadSurveyQuestion.toObject(this, $protobuf.util.toJSONOptions);
            };

            InThreadSurveyQuestion.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.InThreadSurveyMetadata.InThreadSurveyQuestion";
            };

            return InThreadSurveyQuestion;
        })();

        return InThreadSurveyMetadata;
    })();

    AICommon.BotSourcesMetadata = (function() {

        const BotSourcesMetadata = function (p) {
            this.sources = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotSourcesMetadata.prototype.sources = $util.emptyArray;

        BotSourcesMetadata.create = function(properties) {
            return new BotSourcesMetadata(properties);
        };

        BotSourcesMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.sources != null && m.sources.length) {
                for (var i = 0; i < m.sources.length; ++i)
                    $root.AICommon.BotSourcesMetadata.BotSourceItem.encode(m.sources[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotSourcesMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotSourcesMetadata();
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
                        if (!(m.sources && m.sources.length))
                            m.sources = [];
                        m.sources.push($root.AICommon.BotSourcesMetadata.BotSourceItem.decode(r, r.uint32(), $undefined, q + 1));
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

        BotSourcesMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotSourcesMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotSourcesMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotSourcesMetadata();
            if (d.sources) {
                if (!$Array.isArray(d.sources))
                    throw $TypeError(".AICommon.BotSourcesMetadata.sources: array expected");
                m.sources = $Array(d.sources.length);
                for (var i = 0; i < d.sources.length; ++i) {
                    if (!$util.isObject(d.sources[i]))
                        throw $TypeError(".AICommon.BotSourcesMetadata.sources: object expected");
                    m.sources[i] = $root.AICommon.BotSourcesMetadata.BotSourceItem.fromObject(d.sources[i], q + 1);
                }
            }
            return m;
        };

        BotSourcesMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.sources = [];
            }
            if (m.sources && m.sources.length) {
                d.sources = $Array(m.sources.length);
                for (var j = 0; j < m.sources.length; ++j) {
                    d.sources[j] = $root.AICommon.BotSourcesMetadata.BotSourceItem.toObject(m.sources[j], o, q + 1);
                }
            }
            return d;
        };

        BotSourcesMetadata.prototype.toJSON = function() {
            return BotSourcesMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotSourcesMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotSourcesMetadata";
        };

        BotSourcesMetadata.BotSourceItem = (function() {

            const BotSourceItem = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            BotSourceItem.prototype.provider = 0;
            BotSourceItem.prototype.thumbnailCdnUrl = "";
            BotSourceItem.prototype.sourceProviderUrl = "";
            BotSourceItem.prototype.sourceQuery = "";
            BotSourceItem.prototype.faviconCdnUrl = "";
            BotSourceItem.prototype.citationNumber = 0;
            BotSourceItem.prototype.sourceTitle = "";

            BotSourceItem.create = function(properties) {
                return new BotSourceItem(properties);
            };

            BotSourceItem.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.provider != null && $Object.hasOwnProperty.call(m, "provider"))
                    w.uint32(8).int32(m.provider);
                if (m.thumbnailCdnUrl != null && $Object.hasOwnProperty.call(m, "thumbnailCdnUrl"))
                    w.uint32(18).string(m.thumbnailCdnUrl);
                if (m.sourceProviderUrl != null && $Object.hasOwnProperty.call(m, "sourceProviderUrl"))
                    w.uint32(26).string(m.sourceProviderUrl);
                if (m.sourceQuery != null && $Object.hasOwnProperty.call(m, "sourceQuery"))
                    w.uint32(34).string(m.sourceQuery);
                if (m.faviconCdnUrl != null && $Object.hasOwnProperty.call(m, "faviconCdnUrl"))
                    w.uint32(42).string(m.faviconCdnUrl);
                if (m.citationNumber != null && $Object.hasOwnProperty.call(m, "citationNumber"))
                    w.uint32(48).uint32(m.citationNumber);
                if (m.sourceTitle != null && $Object.hasOwnProperty.call(m, "sourceTitle"))
                    w.uint32(58).string(m.sourceTitle);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            BotSourceItem.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotSourcesMetadata.BotSourceItem(), v;
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
                            v = r.int32();
                            if ($root.AICommon.BotSourcesMetadata.BotSourceItem.SourceProvider[v] !== $undefined) {
                                m.provider = v;
                            } else if (!r.discardUnknown) {
                                $util.makeProp(m, "$unknowns", false);
                                (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                            }
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.thumbnailCdnUrl = r.string();
                            continue;
                        }
                    case 3: {
                            if (u !== 2)
                                break;
                            m.sourceProviderUrl = r.string();
                            continue;
                        }
                    case 4: {
                            if (u !== 2)
                                break;
                            m.sourceQuery = r.string();
                            continue;
                        }
                    case 5: {
                            if (u !== 2)
                                break;
                            m.faviconCdnUrl = r.string();
                            continue;
                        }
                    case 6: {
                            if (u !== 0)
                                break;
                            m.citationNumber = r.uint32();
                            continue;
                        }
                    case 7: {
                            if (u !== 2)
                                break;
                            m.sourceTitle = r.string();
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

            BotSourceItem.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.BotSourcesMetadata.BotSourceItem)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.BotSourcesMetadata.BotSourceItem: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.BotSourcesMetadata.BotSourceItem();
                switch (d.provider) {
                case "UNKNOWN":
                case 0:
                    m.provider = 0;
                    break;
                case "BING":
                case 1:
                    m.provider = 1;
                    break;
                case "GOOGLE":
                case 2:
                    m.provider = 2;
                    break;
                case "SUPPORT":
                case 3:
                    m.provider = 3;
                    break;
                case "OTHER":
                case 4:
                    m.provider = 4;
                    break;
                default:
                }
                if (d.thumbnailCdnUrl != null) {
                    m.thumbnailCdnUrl = $String(d.thumbnailCdnUrl);
                }
                if (d.sourceProviderUrl != null) {
                    m.sourceProviderUrl = $String(d.sourceProviderUrl);
                }
                if (d.sourceQuery != null) {
                    m.sourceQuery = $String(d.sourceQuery);
                }
                if (d.faviconCdnUrl != null) {
                    m.faviconCdnUrl = $String(d.faviconCdnUrl);
                }
                if (d.citationNumber != null) {
                    m.citationNumber = d.citationNumber >>> 0;
                }
                if (d.sourceTitle != null) {
                    m.sourceTitle = $String(d.sourceTitle);
                }
                return m;
            };

            BotSourceItem.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.provider = o.enums === $String ? "UNKNOWN" : 0;
                    d.thumbnailCdnUrl = "";
                    d.sourceProviderUrl = "";
                    d.sourceQuery = "";
                    d.faviconCdnUrl = "";
                    d.citationNumber = 0;
                    d.sourceTitle = "";
                }
                if (m.provider != null && $Object.hasOwnProperty.call(m, "provider")) {
                    d.provider = o.enums === $String ? $root.AICommon.BotSourcesMetadata.BotSourceItem.SourceProvider[m.provider] === $undefined ? m.provider : $root.AICommon.BotSourcesMetadata.BotSourceItem.SourceProvider[m.provider] : m.provider;
                }
                if (m.thumbnailCdnUrl != null && $Object.hasOwnProperty.call(m, "thumbnailCdnUrl")) {
                    d.thumbnailCdnUrl = m.thumbnailCdnUrl;
                }
                if (m.sourceProviderUrl != null && $Object.hasOwnProperty.call(m, "sourceProviderUrl")) {
                    d.sourceProviderUrl = m.sourceProviderUrl;
                }
                if (m.sourceQuery != null && $Object.hasOwnProperty.call(m, "sourceQuery")) {
                    d.sourceQuery = m.sourceQuery;
                }
                if (m.faviconCdnUrl != null && $Object.hasOwnProperty.call(m, "faviconCdnUrl")) {
                    d.faviconCdnUrl = m.faviconCdnUrl;
                }
                if (m.citationNumber != null && $Object.hasOwnProperty.call(m, "citationNumber")) {
                    d.citationNumber = m.citationNumber;
                }
                if (m.sourceTitle != null && $Object.hasOwnProperty.call(m, "sourceTitle")) {
                    d.sourceTitle = m.sourceTitle;
                }
                return d;
            };

            BotSourceItem.prototype.toJSON = function() {
                return BotSourceItem.toObject(this, $protobuf.util.toJSONOptions);
            };

            BotSourceItem.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.BotSourcesMetadata.BotSourceItem";
            };

            BotSourceItem.SourceProvider = (function() {
                const valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "BING"] = 1;
                values[valuesById[2] = "GOOGLE"] = 2;
                values[valuesById[3] = "SUPPORT"] = 3;
                values[valuesById[4] = "OTHER"] = 4;
                return values;
            })();

            return BotSourceItem;
        })();

        return BotSourcesMetadata;
    })();

    AICommon.BotAgeCollectionMetadata = (function() {

        const BotAgeCollectionMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotAgeCollectionMetadata.prototype.ageCollectionEligible = false;
        BotAgeCollectionMetadata.prototype.shouldTriggerAgeCollectionOnClient = false;
        BotAgeCollectionMetadata.prototype.ageCollectionType = 0;

        BotAgeCollectionMetadata.create = function(properties) {
            return new BotAgeCollectionMetadata(properties);
        };

        BotAgeCollectionMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.ageCollectionEligible != null && $Object.hasOwnProperty.call(m, "ageCollectionEligible"))
                w.uint32(8).bool(m.ageCollectionEligible);
            if (m.shouldTriggerAgeCollectionOnClient != null && $Object.hasOwnProperty.call(m, "shouldTriggerAgeCollectionOnClient"))
                w.uint32(16).bool(m.shouldTriggerAgeCollectionOnClient);
            if (m.ageCollectionType != null && $Object.hasOwnProperty.call(m, "ageCollectionType"))
                w.uint32(24).int32(m.ageCollectionType);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotAgeCollectionMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotAgeCollectionMetadata(), v;
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
                        m.ageCollectionEligible = r.bool();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.shouldTriggerAgeCollectionOnClient = r.bool();
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotAgeCollectionMetadata.AgeCollectionType[v] !== $undefined) {
                            m.ageCollectionType = v;
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

        BotAgeCollectionMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotAgeCollectionMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotAgeCollectionMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotAgeCollectionMetadata();
            if (d.ageCollectionEligible != null) {
                m.ageCollectionEligible = $Boolean(d.ageCollectionEligible);
            }
            if (d.shouldTriggerAgeCollectionOnClient != null) {
                m.shouldTriggerAgeCollectionOnClient = $Boolean(d.shouldTriggerAgeCollectionOnClient);
            }
            switch (d.ageCollectionType) {
            case "O18_BINARY":
            case 0:
                m.ageCollectionType = 0;
                break;
            case "WAFFLE":
            case 1:
                m.ageCollectionType = 1;
                break;
            default:
            }
            return m;
        };

        BotAgeCollectionMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.ageCollectionEligible = false;
                d.shouldTriggerAgeCollectionOnClient = false;
                d.ageCollectionType = o.enums === $String ? "O18_BINARY" : 0;
            }
            if (m.ageCollectionEligible != null && $Object.hasOwnProperty.call(m, "ageCollectionEligible")) {
                d.ageCollectionEligible = m.ageCollectionEligible;
            }
            if (m.shouldTriggerAgeCollectionOnClient != null && $Object.hasOwnProperty.call(m, "shouldTriggerAgeCollectionOnClient")) {
                d.shouldTriggerAgeCollectionOnClient = m.shouldTriggerAgeCollectionOnClient;
            }
            if (m.ageCollectionType != null && $Object.hasOwnProperty.call(m, "ageCollectionType")) {
                d.ageCollectionType = o.enums === $String ? $root.AICommon.BotAgeCollectionMetadata.AgeCollectionType[m.ageCollectionType] === $undefined ? m.ageCollectionType : $root.AICommon.BotAgeCollectionMetadata.AgeCollectionType[m.ageCollectionType] : m.ageCollectionType;
            }
            return d;
        };

        BotAgeCollectionMetadata.prototype.toJSON = function() {
            return BotAgeCollectionMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotAgeCollectionMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotAgeCollectionMetadata";
        };

        BotAgeCollectionMetadata.AgeCollectionType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "O18_BINARY"] = 0;
            values[valuesById[1] = "WAFFLE"] = 1;
            return values;
        })();

        return BotAgeCollectionMetadata;
    })();

    AICommon.BotImagineMetadata = (function() {

        const BotImagineMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotImagineMetadata.prototype.imagineType = 0;
        BotImagineMetadata.prototype.shortPrompt = "";

        BotImagineMetadata.create = function(properties) {
            return new BotImagineMetadata(properties);
        };

        BotImagineMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.imagineType != null && $Object.hasOwnProperty.call(m, "imagineType"))
                w.uint32(8).int32(m.imagineType);
            if (m.shortPrompt != null && $Object.hasOwnProperty.call(m, "shortPrompt"))
                w.uint32(18).string(m.shortPrompt);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotImagineMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotImagineMetadata(), v;
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
                        v = r.int32();
                        if ($root.AICommon.BotImagineMetadata.ImagineType[v] !== $undefined) {
                            m.imagineType = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.shortPrompt = r.string();
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

        BotImagineMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotImagineMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotImagineMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotImagineMetadata();
            switch (d.imagineType) {
            case "UNKNOWN":
            case 0:
                m.imagineType = 0;
                break;
            case "IMAGINE":
            case 1:
                m.imagineType = 1;
                break;
            case "MEMU":
            case 2:
                m.imagineType = 2;
                break;
            case "FLASH":
            case 3:
                m.imagineType = 3;
                break;
            case "EDIT":
            case 4:
                m.imagineType = 4;
                break;
            default:
            }
            if (d.shortPrompt != null) {
                m.shortPrompt = $String(d.shortPrompt);
            }
            return m;
        };

        BotImagineMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.imagineType = o.enums === $String ? "UNKNOWN" : 0;
                d.shortPrompt = "";
            }
            if (m.imagineType != null && $Object.hasOwnProperty.call(m, "imagineType")) {
                d.imagineType = o.enums === $String ? $root.AICommon.BotImagineMetadata.ImagineType[m.imagineType] === $undefined ? m.imagineType : $root.AICommon.BotImagineMetadata.ImagineType[m.imagineType] : m.imagineType;
            }
            if (m.shortPrompt != null && $Object.hasOwnProperty.call(m, "shortPrompt")) {
                d.shortPrompt = m.shortPrompt;
            }
            return d;
        };

        BotImagineMetadata.prototype.toJSON = function() {
            return BotImagineMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotImagineMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotImagineMetadata";
        };

        BotImagineMetadata.ImagineType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "IMAGINE"] = 1;
            values[valuesById[2] = "MEMU"] = 2;
            values[valuesById[3] = "FLASH"] = 3;
            values[valuesById[4] = "EDIT"] = 4;
            return values;
        })();

        return BotImagineMetadata;
    })();

    AICommon.BotQuotaMetadata = (function() {

        const BotQuotaMetadata = function (p) {
            this.botFeatureQuotaMetadata = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotQuotaMetadata.prototype.botFeatureQuotaMetadata = $util.emptyArray;

        BotQuotaMetadata.create = function(properties) {
            return new BotQuotaMetadata(properties);
        };

        BotQuotaMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.botFeatureQuotaMetadata != null && m.botFeatureQuotaMetadata.length) {
                for (var i = 0; i < m.botFeatureQuotaMetadata.length; ++i)
                    $root.AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.encode(m.botFeatureQuotaMetadata[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotQuotaMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotQuotaMetadata();
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
                        if (!(m.botFeatureQuotaMetadata && m.botFeatureQuotaMetadata.length))
                            m.botFeatureQuotaMetadata = [];
                        m.botFeatureQuotaMetadata.push($root.AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.decode(r, r.uint32(), $undefined, q + 1));
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

        BotQuotaMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotQuotaMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotQuotaMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotQuotaMetadata();
            if (d.botFeatureQuotaMetadata) {
                if (!$Array.isArray(d.botFeatureQuotaMetadata))
                    throw $TypeError(".AICommon.BotQuotaMetadata.botFeatureQuotaMetadata: array expected");
                m.botFeatureQuotaMetadata = $Array(d.botFeatureQuotaMetadata.length);
                for (var i = 0; i < d.botFeatureQuotaMetadata.length; ++i) {
                    if (!$util.isObject(d.botFeatureQuotaMetadata[i]))
                        throw $TypeError(".AICommon.BotQuotaMetadata.botFeatureQuotaMetadata: object expected");
                    m.botFeatureQuotaMetadata[i] = $root.AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.fromObject(d.botFeatureQuotaMetadata[i], q + 1);
                }
            }
            return m;
        };

        BotQuotaMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.botFeatureQuotaMetadata = [];
            }
            if (m.botFeatureQuotaMetadata && m.botFeatureQuotaMetadata.length) {
                d.botFeatureQuotaMetadata = $Array(m.botFeatureQuotaMetadata.length);
                for (var j = 0; j < m.botFeatureQuotaMetadata.length; ++j) {
                    d.botFeatureQuotaMetadata[j] = $root.AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.toObject(m.botFeatureQuotaMetadata[j], o, q + 1);
                }
            }
            return d;
        };

        BotQuotaMetadata.prototype.toJSON = function() {
            return BotQuotaMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotQuotaMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotQuotaMetadata";
        };

        BotQuotaMetadata.BotFeatureQuotaMetadata = (function() {

            const BotFeatureQuotaMetadata = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            BotFeatureQuotaMetadata.prototype.featureType = 0;
            BotFeatureQuotaMetadata.prototype.remainingQuota = 0;
            BotFeatureQuotaMetadata.prototype.expirationTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            BotFeatureQuotaMetadata.create = function(properties) {
                return new BotFeatureQuotaMetadata(properties);
            };

            BotFeatureQuotaMetadata.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.featureType != null && $Object.hasOwnProperty.call(m, "featureType"))
                    w.uint32(8).int32(m.featureType);
                if (m.remainingQuota != null && $Object.hasOwnProperty.call(m, "remainingQuota"))
                    w.uint32(16).uint32(m.remainingQuota);
                if (m.expirationTimestamp != null && $Object.hasOwnProperty.call(m, "expirationTimestamp"))
                    w.uint32(24).uint64(m.expirationTimestamp);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            BotFeatureQuotaMetadata.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata(), v;
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
                            v = r.int32();
                            if ($root.AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType[v] !== $undefined) {
                                m.featureType = v;
                            } else if (!r.discardUnknown) {
                                $util.makeProp(m, "$unknowns", false);
                                (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                            }
                            continue;
                        }
                    case 2: {
                            if (u !== 0)
                                break;
                            m.remainingQuota = r.uint32();
                            continue;
                        }
                    case 3: {
                            if (u !== 0)
                                break;
                            m.expirationTimestamp = r.uint64();
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

            BotFeatureQuotaMetadata.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata();
                switch (d.featureType) {
                case "UNKNOWN_FEATURE":
                case 0:
                    m.featureType = 0;
                    break;
                case "REASONING_FEATURE":
                case 1:
                    m.featureType = 1;
                    break;
                default:
                }
                if (d.remainingQuota != null) {
                    m.remainingQuota = d.remainingQuota >>> 0;
                }
                if (d.expirationTimestamp != null) {
                    if ($util.Long)
                        m.expirationTimestamp = $util.Long.fromValue(d.expirationTimestamp, true);
                    else if (typeof d.expirationTimestamp === "string")
                        m.expirationTimestamp = $parseInt(d.expirationTimestamp, 10);
                    else if (typeof d.expirationTimestamp === "number")
                        m.expirationTimestamp = d.expirationTimestamp;
                    else if (typeof d.expirationTimestamp === "object")
                        m.expirationTimestamp = new $util.LongBits(d.expirationTimestamp.low >>> 0, d.expirationTimestamp.high >>> 0).toNumber(true);
                }
                return m;
            };

            BotFeatureQuotaMetadata.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.featureType = o.enums === $String ? "UNKNOWN_FEATURE" : 0;
                    d.remainingQuota = 0;
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, true);
                        d.expirationTimestamp = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                    } else
                        d.expirationTimestamp = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (m.featureType != null && $Object.hasOwnProperty.call(m, "featureType")) {
                    d.featureType = o.enums === $String ? $root.AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType[m.featureType] === $undefined ? m.featureType : $root.AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata.BotFeatureType[m.featureType] : m.featureType;
                }
                if (m.remainingQuota != null && $Object.hasOwnProperty.call(m, "remainingQuota")) {
                    d.remainingQuota = m.remainingQuota;
                }
                if (m.expirationTimestamp != null && $Object.hasOwnProperty.call(m, "expirationTimestamp")) {
                    if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                        d.expirationTimestamp = typeof m.expirationTimestamp === "number" ? $BigInt(m.expirationTimestamp) : $util.Long.fromBits(m.expirationTimestamp.low >>> 0, m.expirationTimestamp.high >>> 0, true).toBigInt();
                    else if (typeof m.expirationTimestamp === "number")
                        d.expirationTimestamp = o.longs === $String ? $String(m.expirationTimestamp) : m.expirationTimestamp;
                    else
                        d.expirationTimestamp = o.longs === String ? longToString(m.expirationTimestamp, true) : o.longs === Number ? longToNumber(m.expirationTimestamp, true) : m.expirationTimestamp;
                }
                return d;
            };

            BotFeatureQuotaMetadata.prototype.toJSON = function() {
                return BotFeatureQuotaMetadata.toObject(this, $protobuf.util.toJSONOptions);
            };

            BotFeatureQuotaMetadata.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.BotQuotaMetadata.BotFeatureQuotaMetadata";
            };

            BotFeatureQuotaMetadata.BotFeatureType = (function() {
                const valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_FEATURE"] = 0;
                values[valuesById[1] = "REASONING_FEATURE"] = 1;
                return values;
            })();

            return BotFeatureQuotaMetadata;
        })();

        return BotQuotaMetadata;
    })();

    AICommon.BotModeSelectionMetadata = (function() {

        const BotModeSelectionMetadata = function (p) {
            this.mode = [];
            this.overrideMode = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotModeSelectionMetadata.prototype.mode = $util.emptyArray;
        BotModeSelectionMetadata.prototype.overrideMode = $util.emptyArray;

        BotModeSelectionMetadata.create = function(properties) {
            return new BotModeSelectionMetadata(properties);
        };

        BotModeSelectionMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.mode != null && m.mode.length) {
                for (var i = 0; i < m.mode.length; ++i)
                    w.uint32(8).int32(m.mode[i]);
            }
            if (m.overrideMode != null && m.overrideMode.length) {
                for (var i = 0; i < m.overrideMode.length; ++i)
                    w.uint32(16).uint32(m.overrideMode[i]);
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotModeSelectionMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotModeSelectionMetadata(), v;
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
                        if (u === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2) {
                                s = r.pos;
                                v = r.int32();
                                if ($root.AICommon.BotModeSelectionMetadata.BotUserSelectionMode[v] !== $undefined) {
                                    if (!(m.mode && m.mode.length))
                                        m.mode = [];
                                    m.mode.push(v);
                                } else if (!r.discardUnknown) {
                                    $util.makeProp(m, "$unknowns", false);
                                    (m.$unknowns || (m.$unknowns = [])).push($util.rawField(1, 0, r.raw(s, r.pos)));
                                }
                            }
                            continue;
                        }
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotModeSelectionMetadata.BotUserSelectionMode[v] !== $undefined) {
                            if (!(m.mode && m.mode.length))
                                m.mode = [];
                            m.mode.push(v);
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 2: {
                        if (u === 2) {
                            if (!(m.overrideMode && m.overrideMode.length))
                                m.overrideMode = [];
                            r.uint32s(m.overrideMode);
                            continue;
                        }
                        if (u !== 0)
                            break;
                        if (!(m.overrideMode && m.overrideMode.length))
                            m.overrideMode = [];
                        m.overrideMode.push(r.uint32());
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

        BotModeSelectionMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotModeSelectionMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotModeSelectionMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotModeSelectionMetadata();
            if (d.mode) {
                if (!$Array.isArray(d.mode))
                    throw $TypeError(".AICommon.BotModeSelectionMetadata.mode: array expected");
                m.mode = [];
                for (var i = 0; i < d.mode.length; ++i) {
                    switch (d.mode[i]) {
                    case "DEFAULT_MODE":
                    case 0:
                        m.mode[m.mode.length] = 0;
                        break;
                    case "THINK_HARD_MODE":
                    case 1:
                        m.mode[m.mode.length] = 1;
                        break;
                    default:
                    }
                }
            }
            if (d.overrideMode) {
                if (!$Array.isArray(d.overrideMode))
                    throw $TypeError(".AICommon.BotModeSelectionMetadata.overrideMode: array expected");
                m.overrideMode = $Array(d.overrideMode.length);
                for (var i = 0; i < d.overrideMode.length; ++i) {
                    m.overrideMode[i] = d.overrideMode[i] >>> 0;
                }
            }
            return m;
        };

        BotModeSelectionMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.mode = [];
                d.overrideMode = [];
            }
            if (m.mode && m.mode.length) {
                d.mode = $Array(m.mode.length);
                for (var j = 0; j < m.mode.length; ++j) {
                    d.mode[j] = o.enums === $String ? $root.AICommon.BotModeSelectionMetadata.BotUserSelectionMode[m.mode[j]] === $undefined ? m.mode[j] : $root.AICommon.BotModeSelectionMetadata.BotUserSelectionMode[m.mode[j]] : m.mode[j];
                }
            }
            if (m.overrideMode && m.overrideMode.length) {
                d.overrideMode = $Array(m.overrideMode.length);
                for (var j = 0; j < m.overrideMode.length; ++j) {
                    d.overrideMode[j] = m.overrideMode[j];
                }
            }
            return d;
        };

        BotModeSelectionMetadata.prototype.toJSON = function() {
            return BotModeSelectionMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotModeSelectionMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotModeSelectionMetadata";
        };

        BotModeSelectionMetadata.BotUserSelectionMode = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "DEFAULT_MODE"] = 0;
            values[valuesById[1] = "THINK_HARD_MODE"] = 1;
            return values;
        })();

        return BotModeSelectionMetadata;
    })();

    AICommon.BotCapabilityMetadata = (function() {

        const BotCapabilityMetadata = function (p) {
            this.capabilities = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotCapabilityMetadata.prototype.capabilities = $util.emptyArray;

        BotCapabilityMetadata.create = function(properties) {
            return new BotCapabilityMetadata(properties);
        };

        BotCapabilityMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.capabilities != null && m.capabilities.length) {
                for (var i = 0; i < m.capabilities.length; ++i)
                    w.uint32(8).int32(m.capabilities[i]);
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotCapabilityMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotCapabilityMetadata(), v;
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
                        if (u === 2) {
                            var c2 = r.uint32() + r.pos;
                            while (r.pos < c2) {
                                s = r.pos;
                                v = r.int32();
                                if ($root.AICommon.BotCapabilityMetadata.BotCapabilityType[v] !== $undefined) {
                                    if (!(m.capabilities && m.capabilities.length))
                                        m.capabilities = [];
                                    m.capabilities.push(v);
                                } else if (!r.discardUnknown) {
                                    $util.makeProp(m, "$unknowns", false);
                                    (m.$unknowns || (m.$unknowns = [])).push($util.rawField(1, 0, r.raw(s, r.pos)));
                                }
                            }
                            continue;
                        }
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotCapabilityMetadata.BotCapabilityType[v] !== $undefined) {
                            if (!(m.capabilities && m.capabilities.length))
                                m.capabilities = [];
                            m.capabilities.push(v);
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

        BotCapabilityMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotCapabilityMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotCapabilityMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotCapabilityMetadata();
            if (d.capabilities) {
                if (!$Array.isArray(d.capabilities))
                    throw $TypeError(".AICommon.BotCapabilityMetadata.capabilities: array expected");
                m.capabilities = [];
                for (var i = 0; i < d.capabilities.length; ++i) {
                    switch (d.capabilities[i]) {
                    case "UNKNOWN":
                    case 0:
                        m.capabilities[m.capabilities.length] = 0;
                        break;
                    case "PROGRESS_INDICATOR":
                    case 1:
                        m.capabilities[m.capabilities.length] = 1;
                        break;
                    case "RICH_RESPONSE_HEADING":
                    case 2:
                        m.capabilities[m.capabilities.length] = 2;
                        break;
                    case "RICH_RESPONSE_NESTED_LIST":
                    case 3:
                        m.capabilities[m.capabilities.length] = 3;
                        break;
                    case "AI_MEMORY":
                    case 4:
                        m.capabilities[m.capabilities.length] = 4;
                        break;
                    case "RICH_RESPONSE_THREAD_SURFING":
                    case 5:
                        m.capabilities[m.capabilities.length] = 5;
                        break;
                    case "RICH_RESPONSE_TABLE":
                    case 6:
                        m.capabilities[m.capabilities.length] = 6;
                        break;
                    case "RICH_RESPONSE_CODE":
                    case 7:
                        m.capabilities[m.capabilities.length] = 7;
                        break;
                    case "RICH_RESPONSE_STRUCTURED_RESPONSE":
                    case 8:
                        m.capabilities[m.capabilities.length] = 8;
                        break;
                    case "RICH_RESPONSE_INLINE_IMAGE":
                    case 9:
                        m.capabilities[m.capabilities.length] = 9;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_CONTROL":
                    case 10:
                        m.capabilities[m.capabilities.length] = 10;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_1":
                    case 11:
                        m.capabilities[m.capabilities.length] = 11;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_2":
                    case 12:
                        m.capabilities[m.capabilities.length] = 12;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_3":
                    case 13:
                        m.capabilities[m.capabilities.length] = 13;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_4":
                    case 14:
                        m.capabilities[m.capabilities.length] = 14;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_5":
                    case 15:
                        m.capabilities[m.capabilities.length] = 15;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_6":
                    case 16:
                        m.capabilities[m.capabilities.length] = 16;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_7":
                    case 17:
                        m.capabilities[m.capabilities.length] = 17;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_8":
                    case 18:
                        m.capabilities[m.capabilities.length] = 18;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_9":
                    case 19:
                        m.capabilities[m.capabilities.length] = 19;
                        break;
                    case "WA_IG_1P_PLUGIN_RANKING_UPDATE_10":
                    case 20:
                        m.capabilities[m.capabilities.length] = 20;
                        break;
                    case "RICH_RESPONSE_SUB_HEADING":
                    case 21:
                        m.capabilities[m.capabilities.length] = 21;
                        break;
                    case "RICH_RESPONSE_GRID_IMAGE":
                    case 22:
                        m.capabilities[m.capabilities.length] = 22;
                        break;
                    case "AI_STUDIO_UGC_MEMORY":
                    case 23:
                        m.capabilities[m.capabilities.length] = 23;
                        break;
                    case "RICH_RESPONSE_LATEX":
                    case 24:
                        m.capabilities[m.capabilities.length] = 24;
                        break;
                    case "RICH_RESPONSE_MAPS":
                    case 25:
                        m.capabilities[m.capabilities.length] = 25;
                        break;
                    case "RICH_RESPONSE_INLINE_REELS":
                    case 26:
                        m.capabilities[m.capabilities.length] = 26;
                        break;
                    case "AGENTIC_PLANNING":
                    case 27:
                        m.capabilities[m.capabilities.length] = 27;
                        break;
                    case "ACCOUNT_LINKING":
                    case 28:
                        m.capabilities[m.capabilities.length] = 28;
                        break;
                    case "STREAMING_DISAGGREGATION":
                    case 29:
                        m.capabilities[m.capabilities.length] = 29;
                        break;
                    case "RICH_RESPONSE_GRID_IMAGE_3P":
                    case 30:
                        m.capabilities[m.capabilities.length] = 30;
                        break;
                    case "RICH_RESPONSE_LATEX_INLINE":
                    case 31:
                        m.capabilities[m.capabilities.length] = 31;
                        break;
                    case "QUERY_PLAN":
                    case 32:
                        m.capabilities[m.capabilities.length] = 32;
                        break;
                    case "PROACTIVE_MESSAGE":
                    case 33:
                        m.capabilities[m.capabilities.length] = 33;
                        break;
                    case "RICH_RESPONSE_UNIFIED_RESPONSE":
                    case 34:
                        m.capabilities[m.capabilities.length] = 34;
                        break;
                    case "PROMOTION_MESSAGE":
                    case 35:
                        m.capabilities[m.capabilities.length] = 35;
                        break;
                    case "SIMPLIFIED_PROFILE_PAGE":
                    case 36:
                        m.capabilities[m.capabilities.length] = 36;
                        break;
                    case "RICH_RESPONSE_SOURCES_IN_MESSAGE":
                    case 37:
                        m.capabilities[m.capabilities.length] = 37;
                        break;
                    case "RICH_RESPONSE_SIDE_BY_SIDE_SURVEY":
                    case 38:
                        m.capabilities[m.capabilities.length] = 38;
                        break;
                    case "RICH_RESPONSE_UNIFIED_TEXT_COMPONENT":
                    case 39:
                        m.capabilities[m.capabilities.length] = 39;
                        break;
                    case "AI_SHARED_MEMORY":
                    case 40:
                        m.capabilities[m.capabilities.length] = 40;
                        break;
                    case "RICH_RESPONSE_UNIFIED_SOURCES":
                    case 41:
                        m.capabilities[m.capabilities.length] = 41;
                        break;
                    case "RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS":
                    case 42:
                        m.capabilities[m.capabilities.length] = 42;
                        break;
                    case "RICH_RESPONSE_UR_INLINE_REELS_ENABLED":
                    case 43:
                        m.capabilities[m.capabilities.length] = 43;
                        break;
                    case "RICH_RESPONSE_UR_MEDIA_GRID_ENABLED":
                    case 44:
                        m.capabilities[m.capabilities.length] = 44;
                        break;
                    case "RICH_RESPONSE_UR_TIMESTAMP_PLACEHOLDER":
                    case 45:
                        m.capabilities[m.capabilities.length] = 45;
                        break;
                    case "RICH_RESPONSE_IN_APP_SURVEY":
                    case 46:
                        m.capabilities[m.capabilities.length] = 46;
                        break;
                    case "AI_RESPONSE_MODEL_BRANDING":
                    case 47:
                        m.capabilities[m.capabilities.length] = 47;
                        break;
                    case "SESSION_TRANSPARENCY_SYSTEM_MESSAGE":
                    case 48:
                        m.capabilities[m.capabilities.length] = 48;
                        break;
                    case "RICH_RESPONSE_UR_REASONING":
                    case 49:
                        m.capabilities[m.capabilities.length] = 49;
                        break;
                    case "RICH_RESPONSE_UR_ZEITGEIST_CITATIONS":
                    case 50:
                        m.capabilities[m.capabilities.length] = 50;
                        break;
                    case "RICH_RESPONSE_UR_ZEITGEIST_CAROUSEL":
                    case 51:
                        m.capabilities[m.capabilities.length] = 51;
                        break;
                    case "AI_IMAGINE_LOADING_INDICATOR":
                    case 52:
                        m.capabilities[m.capabilities.length] = 52;
                        break;
                    case "RICH_RESPONSE_UR_IMAGINE":
                    case 53:
                        m.capabilities[m.capabilities.length] = 53;
                        break;
                    case "AI_IMAGINE_UR_TO_NATIVE_LOADING_INDICATOR":
                    case 54:
                        m.capabilities[m.capabilities.length] = 54;
                        break;
                    case "RICH_RESPONSE_UR_BLOKS_ENABLED":
                    case 55:
                        m.capabilities[m.capabilities.length] = 55;
                        break;
                    case "RICH_RESPONSE_INLINE_LINKS_ENABLED":
                    case 56:
                        m.capabilities[m.capabilities.length] = 56;
                        break;
                    case "RICH_RESPONSE_UR_IMAGINE_VIDEO":
                    case 57:
                        m.capabilities[m.capabilities.length] = 57;
                        break;
                    case "JSON_PATCH_STREAMING":
                    case 58:
                        m.capabilities[m.capabilities.length] = 58;
                        break;
                    case "AI_TAB_FORCE_CLIPPY":
                    case 59:
                        m.capabilities[m.capabilities.length] = 59;
                        break;
                    case "UNIFIED_RESPONSE_EMBEDDED_SCREENS":
                    case 60:
                        m.capabilities[m.capabilities.length] = 60;
                        break;
                    case "AI_SUBSCRIPTION_ENABLED":
                    case 61:
                        m.capabilities[m.capabilities.length] = 61;
                        break;
                    case "UNIFIED_RESPONSE_AI_CONTENT_SEARCH_ENABLED":
                    case 62:
                        m.capabilities[m.capabilities.length] = 62;
                        break;
                    case "UNIFIED_RESPONSE_MARKDOWN_LINKS_ENABLED":
                    case 63:
                        m.capabilities[m.capabilities.length] = 63;
                        break;
                    case "AI_RICH_RESPONSE_MAPS_V2_ENABLED":
                    case 64:
                        m.capabilities[m.capabilities.length] = 64;
                        break;
                    case "AI_SUBSCRIPTION_METERING_ENABLED":
                    case 65:
                        m.capabilities[m.capabilities.length] = 65;
                        break;
                    case "RICH_RESPONSE_SPORTS_WIDGET_ENABLED":
                    case 66:
                        m.capabilities[m.capabilities.length] = 66;
                        break;
                    default:
                    }
                }
            }
            return m;
        };

        BotCapabilityMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.capabilities = [];
            }
            if (m.capabilities && m.capabilities.length) {
                d.capabilities = $Array(m.capabilities.length);
                for (var j = 0; j < m.capabilities.length; ++j) {
                    d.capabilities[j] = o.enums === $String ? $root.AICommon.BotCapabilityMetadata.BotCapabilityType[m.capabilities[j]] === $undefined ? m.capabilities[j] : $root.AICommon.BotCapabilityMetadata.BotCapabilityType[m.capabilities[j]] : m.capabilities[j];
                }
            }
            return d;
        };

        BotCapabilityMetadata.prototype.toJSON = function() {
            return BotCapabilityMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotCapabilityMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotCapabilityMetadata";
        };

        BotCapabilityMetadata.BotCapabilityType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "PROGRESS_INDICATOR"] = 1;
            values[valuesById[2] = "RICH_RESPONSE_HEADING"] = 2;
            values[valuesById[3] = "RICH_RESPONSE_NESTED_LIST"] = 3;
            values[valuesById[4] = "AI_MEMORY"] = 4;
            values[valuesById[5] = "RICH_RESPONSE_THREAD_SURFING"] = 5;
            values[valuesById[6] = "RICH_RESPONSE_TABLE"] = 6;
            values[valuesById[7] = "RICH_RESPONSE_CODE"] = 7;
            values[valuesById[8] = "RICH_RESPONSE_STRUCTURED_RESPONSE"] = 8;
            values[valuesById[9] = "RICH_RESPONSE_INLINE_IMAGE"] = 9;
            values[valuesById[10] = "WA_IG_1P_PLUGIN_RANKING_CONTROL"] = 10;
            values[valuesById[11] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_1"] = 11;
            values[valuesById[12] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_2"] = 12;
            values[valuesById[13] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_3"] = 13;
            values[valuesById[14] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_4"] = 14;
            values[valuesById[15] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_5"] = 15;
            values[valuesById[16] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_6"] = 16;
            values[valuesById[17] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_7"] = 17;
            values[valuesById[18] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_8"] = 18;
            values[valuesById[19] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_9"] = 19;
            values[valuesById[20] = "WA_IG_1P_PLUGIN_RANKING_UPDATE_10"] = 20;
            values[valuesById[21] = "RICH_RESPONSE_SUB_HEADING"] = 21;
            values[valuesById[22] = "RICH_RESPONSE_GRID_IMAGE"] = 22;
            values[valuesById[23] = "AI_STUDIO_UGC_MEMORY"] = 23;
            values[valuesById[24] = "RICH_RESPONSE_LATEX"] = 24;
            values[valuesById[25] = "RICH_RESPONSE_MAPS"] = 25;
            values[valuesById[26] = "RICH_RESPONSE_INLINE_REELS"] = 26;
            values[valuesById[27] = "AGENTIC_PLANNING"] = 27;
            values[valuesById[28] = "ACCOUNT_LINKING"] = 28;
            values[valuesById[29] = "STREAMING_DISAGGREGATION"] = 29;
            values[valuesById[30] = "RICH_RESPONSE_GRID_IMAGE_3P"] = 30;
            values[valuesById[31] = "RICH_RESPONSE_LATEX_INLINE"] = 31;
            values[valuesById[32] = "QUERY_PLAN"] = 32;
            values[valuesById[33] = "PROACTIVE_MESSAGE"] = 33;
            values[valuesById[34] = "RICH_RESPONSE_UNIFIED_RESPONSE"] = 34;
            values[valuesById[35] = "PROMOTION_MESSAGE"] = 35;
            values[valuesById[36] = "SIMPLIFIED_PROFILE_PAGE"] = 36;
            values[valuesById[37] = "RICH_RESPONSE_SOURCES_IN_MESSAGE"] = 37;
            values[valuesById[38] = "RICH_RESPONSE_SIDE_BY_SIDE_SURVEY"] = 38;
            values[valuesById[39] = "RICH_RESPONSE_UNIFIED_TEXT_COMPONENT"] = 39;
            values[valuesById[40] = "AI_SHARED_MEMORY"] = 40;
            values[valuesById[41] = "RICH_RESPONSE_UNIFIED_SOURCES"] = 41;
            values[valuesById[42] = "RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS"] = 42;
            values[valuesById[43] = "RICH_RESPONSE_UR_INLINE_REELS_ENABLED"] = 43;
            values[valuesById[44] = "RICH_RESPONSE_UR_MEDIA_GRID_ENABLED"] = 44;
            values[valuesById[45] = "RICH_RESPONSE_UR_TIMESTAMP_PLACEHOLDER"] = 45;
            values[valuesById[46] = "RICH_RESPONSE_IN_APP_SURVEY"] = 46;
            values[valuesById[47] = "AI_RESPONSE_MODEL_BRANDING"] = 47;
            values[valuesById[48] = "SESSION_TRANSPARENCY_SYSTEM_MESSAGE"] = 48;
            values[valuesById[49] = "RICH_RESPONSE_UR_REASONING"] = 49;
            values[valuesById[50] = "RICH_RESPONSE_UR_ZEITGEIST_CITATIONS"] = 50;
            values[valuesById[51] = "RICH_RESPONSE_UR_ZEITGEIST_CAROUSEL"] = 51;
            values[valuesById[52] = "AI_IMAGINE_LOADING_INDICATOR"] = 52;
            values[valuesById[53] = "RICH_RESPONSE_UR_IMAGINE"] = 53;
            values[valuesById[54] = "AI_IMAGINE_UR_TO_NATIVE_LOADING_INDICATOR"] = 54;
            values[valuesById[55] = "RICH_RESPONSE_UR_BLOKS_ENABLED"] = 55;
            values[valuesById[56] = "RICH_RESPONSE_INLINE_LINKS_ENABLED"] = 56;
            values[valuesById[57] = "RICH_RESPONSE_UR_IMAGINE_VIDEO"] = 57;
            values[valuesById[58] = "JSON_PATCH_STREAMING"] = 58;
            values[valuesById[59] = "AI_TAB_FORCE_CLIPPY"] = 59;
            values[valuesById[60] = "UNIFIED_RESPONSE_EMBEDDED_SCREENS"] = 60;
            values[valuesById[61] = "AI_SUBSCRIPTION_ENABLED"] = 61;
            values[valuesById[62] = "UNIFIED_RESPONSE_AI_CONTENT_SEARCH_ENABLED"] = 62;
            values[valuesById[63] = "UNIFIED_RESPONSE_MARKDOWN_LINKS_ENABLED"] = 63;
            values[valuesById[64] = "AI_RICH_RESPONSE_MAPS_V2_ENABLED"] = 64;
            values[valuesById[65] = "AI_SUBSCRIPTION_METERING_ENABLED"] = 65;
            values[valuesById[66] = "RICH_RESPONSE_SPORTS_WIDGET_ENABLED"] = 66;
            return values;
        })();

        return BotCapabilityMetadata;
    })();

    AICommon.BotProgressIndicatorMetadata = (function() {

        const BotProgressIndicatorMetadata = function (p) {
            this.stepsMetadata = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotProgressIndicatorMetadata.prototype.progressDescription = "";
        BotProgressIndicatorMetadata.prototype.stepsMetadata = $util.emptyArray;
        BotProgressIndicatorMetadata.prototype.estimatedCompletionTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        BotProgressIndicatorMetadata.create = function(properties) {
            return new BotProgressIndicatorMetadata(properties);
        };

        BotProgressIndicatorMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.progressDescription != null && $Object.hasOwnProperty.call(m, "progressDescription"))
                w.uint32(10).string(m.progressDescription);
            if (m.stepsMetadata != null && m.stepsMetadata.length) {
                for (var i = 0; i < m.stepsMetadata.length; ++i)
                    $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.encode(m.stepsMetadata[i], w.uint32(18).fork(), q + 1).ldelim();
            }
            if (m.estimatedCompletionTime != null && $Object.hasOwnProperty.call(m, "estimatedCompletionTime"))
                w.uint32(24).int64(m.estimatedCompletionTime);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotProgressIndicatorMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotProgressIndicatorMetadata();
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
                        m.progressDescription = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        if (!(m.stepsMetadata && m.stepsMetadata.length))
                            m.stepsMetadata = [];
                        m.stepsMetadata.push($root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        m.estimatedCompletionTime = r.int64();
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

        BotProgressIndicatorMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotProgressIndicatorMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotProgressIndicatorMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotProgressIndicatorMetadata();
            if (d.progressDescription != null) {
                m.progressDescription = $String(d.progressDescription);
            }
            if (d.stepsMetadata) {
                if (!$Array.isArray(d.stepsMetadata))
                    throw $TypeError(".AICommon.BotProgressIndicatorMetadata.stepsMetadata: array expected");
                m.stepsMetadata = $Array(d.stepsMetadata.length);
                for (var i = 0; i < d.stepsMetadata.length; ++i) {
                    if (!$util.isObject(d.stepsMetadata[i]))
                        throw $TypeError(".AICommon.BotProgressIndicatorMetadata.stepsMetadata: object expected");
                    m.stepsMetadata[i] = $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.fromObject(d.stepsMetadata[i], q + 1);
                }
            }
            if (d.estimatedCompletionTime != null) {
                if ($util.Long)
                    m.estimatedCompletionTime = $util.Long.fromValue(d.estimatedCompletionTime, false);
                else if (typeof d.estimatedCompletionTime === "string")
                    m.estimatedCompletionTime = $parseInt(d.estimatedCompletionTime, 10);
                else if (typeof d.estimatedCompletionTime === "number")
                    m.estimatedCompletionTime = d.estimatedCompletionTime;
                else if (typeof d.estimatedCompletionTime === "object")
                    m.estimatedCompletionTime = new $util.LongBits(d.estimatedCompletionTime.low >>> 0, d.estimatedCompletionTime.high >>> 0).toNumber();
            }
            return m;
        };

        BotProgressIndicatorMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.stepsMetadata = [];
            }
            if (o.defaults) {
                d.progressDescription = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.estimatedCompletionTime = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.estimatedCompletionTime = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
            }
            if (m.progressDescription != null && $Object.hasOwnProperty.call(m, "progressDescription")) {
                d.progressDescription = m.progressDescription;
            }
            if (m.stepsMetadata && m.stepsMetadata.length) {
                d.stepsMetadata = $Array(m.stepsMetadata.length);
                for (var j = 0; j < m.stepsMetadata.length; ++j) {
                    d.stepsMetadata[j] = $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.toObject(m.stepsMetadata[j], o, q + 1);
                }
            }
            if (m.estimatedCompletionTime != null && $Object.hasOwnProperty.call(m, "estimatedCompletionTime")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.estimatedCompletionTime = typeof m.estimatedCompletionTime === "number" ? $BigInt(m.estimatedCompletionTime) : $util.Long.fromBits(m.estimatedCompletionTime.low >>> 0, m.estimatedCompletionTime.high >>> 0, false).toBigInt();
                else if (typeof m.estimatedCompletionTime === "number")
                    d.estimatedCompletionTime = o.longs === $String ? $String(m.estimatedCompletionTime) : m.estimatedCompletionTime;
                else
                    d.estimatedCompletionTime = o.longs === String ? longToString(m.estimatedCompletionTime) : o.longs === Number ? longToNumber(m.estimatedCompletionTime) : m.estimatedCompletionTime;
            }
            return d;
        };

        BotProgressIndicatorMetadata.prototype.toJSON = function() {
            return BotProgressIndicatorMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotProgressIndicatorMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotProgressIndicatorMetadata";
        };

        BotProgressIndicatorMetadata.BotPlanningStepMetadata = (function() {

            const BotPlanningStepMetadata = function (p) {
                this.sourcesMetadata = [];
                this.sections = [];
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            BotPlanningStepMetadata.prototype.statusTitle = "";
            BotPlanningStepMetadata.prototype.statusBody = "";
            BotPlanningStepMetadata.prototype.sourcesMetadata = $util.emptyArray;
            BotPlanningStepMetadata.prototype.status = 0;
            BotPlanningStepMetadata.prototype.isReasoning = false;
            BotPlanningStepMetadata.prototype.isEnhancedSearch = false;
            BotPlanningStepMetadata.prototype.sections = $util.emptyArray;

            BotPlanningStepMetadata.create = function(properties) {
                return new BotPlanningStepMetadata(properties);
            };

            BotPlanningStepMetadata.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.statusTitle != null && $Object.hasOwnProperty.call(m, "statusTitle"))
                    w.uint32(10).string(m.statusTitle);
                if (m.statusBody != null && $Object.hasOwnProperty.call(m, "statusBody"))
                    w.uint32(18).string(m.statusBody);
                if (m.sourcesMetadata != null && m.sourcesMetadata.length) {
                    for (var i = 0; i < m.sourcesMetadata.length; ++i)
                        $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.encode(m.sourcesMetadata[i], w.uint32(26).fork(), q + 1).ldelim();
                }
                if (m.status != null && $Object.hasOwnProperty.call(m, "status"))
                    w.uint32(32).int32(m.status);
                if (m.isReasoning != null && $Object.hasOwnProperty.call(m, "isReasoning"))
                    w.uint32(40).bool(m.isReasoning);
                if (m.isEnhancedSearch != null && $Object.hasOwnProperty.call(m, "isEnhancedSearch"))
                    w.uint32(48).bool(m.isEnhancedSearch);
                if (m.sections != null && m.sections.length) {
                    for (var i = 0; i < m.sections.length; ++i)
                        $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.encode(m.sections[i], w.uint32(58).fork(), q + 1).ldelim();
                }
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            BotPlanningStepMetadata.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata(), v;
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
                            m.statusTitle = r.string();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.statusBody = r.string();
                            continue;
                        }
                    case 3: {
                            if (u !== 2)
                                break;
                            if (!(m.sourcesMetadata && m.sourcesMetadata.length))
                                m.sourcesMetadata = [];
                            m.sourcesMetadata.push($root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.decode(r, r.uint32(), $undefined, q + 1));
                            continue;
                        }
                    case 4: {
                            if (u !== 0)
                                break;
                            v = r.int32();
                            if ($root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus[v] !== $undefined) {
                                m.status = v;
                            } else if (!r.discardUnknown) {
                                $util.makeProp(m, "$unknowns", false);
                                (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                            }
                            continue;
                        }
                    case 5: {
                            if (u !== 0)
                                break;
                            m.isReasoning = r.bool();
                            continue;
                        }
                    case 6: {
                            if (u !== 0)
                                break;
                            m.isEnhancedSearch = r.bool();
                            continue;
                        }
                    case 7: {
                            if (u !== 2)
                                break;
                            if (!(m.sections && m.sections.length))
                                m.sections = [];
                            m.sections.push($root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.decode(r, r.uint32(), $undefined, q + 1));
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

            BotPlanningStepMetadata.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata();
                if (d.statusTitle != null) {
                    m.statusTitle = $String(d.statusTitle);
                }
                if (d.statusBody != null) {
                    m.statusBody = $String(d.statusBody);
                }
                if (d.sourcesMetadata) {
                    if (!$Array.isArray(d.sourcesMetadata))
                        throw $TypeError(".AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.sourcesMetadata: array expected");
                    m.sourcesMetadata = $Array(d.sourcesMetadata.length);
                    for (var i = 0; i < d.sourcesMetadata.length; ++i) {
                        if (!$util.isObject(d.sourcesMetadata[i]))
                            throw $TypeError(".AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.sourcesMetadata: object expected");
                        m.sourcesMetadata[i] = $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.fromObject(d.sourcesMetadata[i], q + 1);
                    }
                }
                switch (d.status) {
                case "UNKNOWN":
                case 0:
                    m.status = 0;
                    break;
                case "PLANNED":
                case 1:
                    m.status = 1;
                    break;
                case "EXECUTING":
                case 2:
                    m.status = 2;
                    break;
                case "FINISHED":
                case 3:
                    m.status = 3;
                    break;
                default:
                }
                if (d.isReasoning != null) {
                    m.isReasoning = $Boolean(d.isReasoning);
                }
                if (d.isEnhancedSearch != null) {
                    m.isEnhancedSearch = $Boolean(d.isEnhancedSearch);
                }
                if (d.sections) {
                    if (!$Array.isArray(d.sections))
                        throw $TypeError(".AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.sections: array expected");
                    m.sections = $Array(d.sections.length);
                    for (var i = 0; i < d.sections.length; ++i) {
                        if (!$util.isObject(d.sections[i]))
                            throw $TypeError(".AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.sections: object expected");
                        m.sections[i] = $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.fromObject(d.sections[i], q + 1);
                    }
                }
                return m;
            };

            BotPlanningStepMetadata.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.arrays || o.defaults) {
                    d.sourcesMetadata = [];
                    d.sections = [];
                }
                if (o.defaults) {
                    d.statusTitle = "";
                    d.statusBody = "";
                    d.status = o.enums === $String ? "UNKNOWN" : 0;
                    d.isReasoning = false;
                    d.isEnhancedSearch = false;
                }
                if (m.statusTitle != null && $Object.hasOwnProperty.call(m, "statusTitle")) {
                    d.statusTitle = m.statusTitle;
                }
                if (m.statusBody != null && $Object.hasOwnProperty.call(m, "statusBody")) {
                    d.statusBody = m.statusBody;
                }
                if (m.sourcesMetadata && m.sourcesMetadata.length) {
                    d.sourcesMetadata = $Array(m.sourcesMetadata.length);
                    for (var j = 0; j < m.sourcesMetadata.length; ++j) {
                        d.sourcesMetadata[j] = $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.toObject(m.sourcesMetadata[j], o, q + 1);
                    }
                }
                if (m.status != null && $Object.hasOwnProperty.call(m, "status")) {
                    d.status = o.enums === $String ? $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus[m.status] === $undefined ? m.status : $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.PlanningStepStatus[m.status] : m.status;
                }
                if (m.isReasoning != null && $Object.hasOwnProperty.call(m, "isReasoning")) {
                    d.isReasoning = m.isReasoning;
                }
                if (m.isEnhancedSearch != null && $Object.hasOwnProperty.call(m, "isEnhancedSearch")) {
                    d.isEnhancedSearch = m.isEnhancedSearch;
                }
                if (m.sections && m.sections.length) {
                    d.sections = $Array(m.sections.length);
                    for (var j = 0; j < m.sections.length; ++j) {
                        d.sections[j] = $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.toObject(m.sections[j], o, q + 1);
                    }
                }
                return d;
            };

            BotPlanningStepMetadata.prototype.toJSON = function() {
                return BotPlanningStepMetadata.toObject(this, $protobuf.util.toJSONOptions);
            };

            BotPlanningStepMetadata.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata";
            };

            BotPlanningStepMetadata.BotPlanningSearchSourceMetadata = (function() {

                const BotPlanningSearchSourceMetadata = function (p) {
                    if (p)
                        for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                };

                BotPlanningSearchSourceMetadata.prototype.title = "";
                BotPlanningSearchSourceMetadata.prototype.provider = 0;
                BotPlanningSearchSourceMetadata.prototype.sourceUrl = "";
                BotPlanningSearchSourceMetadata.prototype.favIconUrl = "";

                BotPlanningSearchSourceMetadata.create = function(properties) {
                    return new BotPlanningSearchSourceMetadata(properties);
                };

                BotPlanningSearchSourceMetadata.encode = function (m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (m.title != null && $Object.hasOwnProperty.call(m, "title"))
                        w.uint32(10).string(m.title);
                    if (m.provider != null && $Object.hasOwnProperty.call(m, "provider"))
                        w.uint32(16).int32(m.provider);
                    if (m.sourceUrl != null && $Object.hasOwnProperty.call(m, "sourceUrl"))
                        w.uint32(26).string(m.sourceUrl);
                    if (m.favIconUrl != null && $Object.hasOwnProperty.call(m, "favIconUrl"))
                        w.uint32(34).string(m.favIconUrl);
                    if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                        for (var i = 0; i < m.$unknowns.length; ++i)
                            w.raw(m.$unknowns[i]);
                    return w;
                };

                BotPlanningSearchSourceMetadata.decode = function (r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === $undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata(), v;
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
                                m.title = r.string();
                                continue;
                            }
                        case 2: {
                                if (u !== 0)
                                    break;
                                v = r.int32();
                                if ($root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider[v] !== $undefined) {
                                    m.provider = v;
                                } else if (!r.discardUnknown) {
                                    $util.makeProp(m, "$unknowns", false);
                                    (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                                }
                                continue;
                            }
                        case 3: {
                                if (u !== 2)
                                    break;
                                m.sourceUrl = r.string();
                                continue;
                            }
                        case 4: {
                                if (u !== 2)
                                    break;
                                m.favIconUrl = r.string();
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

                BotPlanningSearchSourceMetadata.fromObject = function (d, q) {
                    if (d instanceof $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata)
                        return d;
                    if (!$util.isObject(d))
                        throw $TypeError(".AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata: object expected");
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var m = new $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata();
                    if (d.title != null) {
                        m.title = $String(d.title);
                    }
                    switch (d.provider) {
                    case "UNKNOWN_PROVIDER":
                    case 0:
                        m.provider = 0;
                        break;
                    case "OTHER":
                    case 1:
                        m.provider = 1;
                        break;
                    case "GOOGLE":
                    case 2:
                        m.provider = 2;
                        break;
                    case "BING":
                    case 3:
                        m.provider = 3;
                        break;
                    default:
                    }
                    if (d.sourceUrl != null) {
                        m.sourceUrl = $String(d.sourceUrl);
                    }
                    if (d.favIconUrl != null) {
                        m.favIconUrl = $String(d.favIconUrl);
                    }
                    return m;
                };

                BotPlanningSearchSourceMetadata.toObject = function (m, o, q) {
                    if (!o)
                        o = {};
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var d = {};
                    if (o.defaults) {
                        d.title = "";
                        d.provider = o.enums === $String ? "UNKNOWN_PROVIDER" : 0;
                        d.sourceUrl = "";
                        d.favIconUrl = "";
                    }
                    if (m.title != null && $Object.hasOwnProperty.call(m, "title")) {
                        d.title = m.title;
                    }
                    if (m.provider != null && $Object.hasOwnProperty.call(m, "provider")) {
                        d.provider = o.enums === $String ? $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider[m.provider] === $undefined ? m.provider : $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotSearchSourceProvider[m.provider] : m.provider;
                    }
                    if (m.sourceUrl != null && $Object.hasOwnProperty.call(m, "sourceUrl")) {
                        d.sourceUrl = m.sourceUrl;
                    }
                    if (m.favIconUrl != null && $Object.hasOwnProperty.call(m, "favIconUrl")) {
                        d.favIconUrl = m.favIconUrl;
                    }
                    return d;
                };

                BotPlanningSearchSourceMetadata.prototype.toJSON = function() {
                    return BotPlanningSearchSourceMetadata.toObject(this, $protobuf.util.toJSONOptions);
                };

                BotPlanningSearchSourceMetadata.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata";
                };

                return BotPlanningSearchSourceMetadata;
            })();

            BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata = (function() {

                const BotPlanningSearchSourcesMetadata = function (p) {
                    if (p)
                        for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                };

                BotPlanningSearchSourcesMetadata.prototype.sourceTitle = "";
                BotPlanningSearchSourcesMetadata.prototype.provider = 0;
                BotPlanningSearchSourcesMetadata.prototype.sourceUrl = "";

                BotPlanningSearchSourcesMetadata.create = function(properties) {
                    return new BotPlanningSearchSourcesMetadata(properties);
                };

                BotPlanningSearchSourcesMetadata.encode = function (m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (m.sourceTitle != null && $Object.hasOwnProperty.call(m, "sourceTitle"))
                        w.uint32(10).string(m.sourceTitle);
                    if (m.provider != null && $Object.hasOwnProperty.call(m, "provider"))
                        w.uint32(16).int32(m.provider);
                    if (m.sourceUrl != null && $Object.hasOwnProperty.call(m, "sourceUrl"))
                        w.uint32(26).string(m.sourceUrl);
                    if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                        for (var i = 0; i < m.$unknowns.length; ++i)
                            w.raw(m.$unknowns[i]);
                    return w;
                };

                BotPlanningSearchSourcesMetadata.decode = function (r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === $undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata(), v;
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
                                m.sourceTitle = r.string();
                                continue;
                            }
                        case 2: {
                                if (u !== 0)
                                    break;
                                v = r.int32();
                                if ($root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider[v] !== $undefined) {
                                    m.provider = v;
                                } else if (!r.discardUnknown) {
                                    $util.makeProp(m, "$unknowns", false);
                                    (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                                }
                                continue;
                            }
                        case 3: {
                                if (u !== 2)
                                    break;
                                m.sourceUrl = r.string();
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

                BotPlanningSearchSourcesMetadata.fromObject = function (d, q) {
                    if (d instanceof $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata)
                        return d;
                    if (!$util.isObject(d))
                        throw $TypeError(".AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata: object expected");
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var m = new $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata();
                    if (d.sourceTitle != null) {
                        m.sourceTitle = $String(d.sourceTitle);
                    }
                    switch (d.provider) {
                    case "UNKNOWN":
                    case 0:
                        m.provider = 0;
                        break;
                    case "OTHER":
                    case 1:
                        m.provider = 1;
                        break;
                    case "GOOGLE":
                    case 2:
                        m.provider = 2;
                        break;
                    case "BING":
                    case 3:
                        m.provider = 3;
                        break;
                    default:
                    }
                    if (d.sourceUrl != null) {
                        m.sourceUrl = $String(d.sourceUrl);
                    }
                    return m;
                };

                BotPlanningSearchSourcesMetadata.toObject = function (m, o, q) {
                    if (!o)
                        o = {};
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var d = {};
                    if (o.defaults) {
                        d.sourceTitle = "";
                        d.provider = o.enums === $String ? "UNKNOWN" : 0;
                        d.sourceUrl = "";
                    }
                    if (m.sourceTitle != null && $Object.hasOwnProperty.call(m, "sourceTitle")) {
                        d.sourceTitle = m.sourceTitle;
                    }
                    if (m.provider != null && $Object.hasOwnProperty.call(m, "provider")) {
                        d.provider = o.enums === $String ? $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider[m.provider] === $undefined ? m.provider : $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider[m.provider] : m.provider;
                    }
                    if (m.sourceUrl != null && $Object.hasOwnProperty.call(m, "sourceUrl")) {
                        d.sourceUrl = m.sourceUrl;
                    }
                    return d;
                };

                BotPlanningSearchSourcesMetadata.prototype.toJSON = function() {
                    return BotPlanningSearchSourcesMetadata.toObject(this, $protobuf.util.toJSONOptions);
                };

                BotPlanningSearchSourcesMetadata.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourcesMetadata";
                };

                BotPlanningSearchSourcesMetadata.BotPlanningSearchSourceProvider = (function() {
                    const valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "UNKNOWN"] = 0;
                    values[valuesById[1] = "OTHER"] = 1;
                    values[valuesById[2] = "GOOGLE"] = 2;
                    values[valuesById[3] = "BING"] = 3;
                    return values;
                })();

                return BotPlanningSearchSourcesMetadata;
            })();

            BotPlanningStepMetadata.BotPlanningStepSectionMetadata = (function() {

                const BotPlanningStepSectionMetadata = function (p) {
                    this.sourcesMetadata = [];
                    if (p)
                        for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                };

                BotPlanningStepSectionMetadata.prototype.sectionTitle = "";
                BotPlanningStepSectionMetadata.prototype.sectionBody = "";
                BotPlanningStepSectionMetadata.prototype.sourcesMetadata = $util.emptyArray;

                BotPlanningStepSectionMetadata.create = function(properties) {
                    return new BotPlanningStepSectionMetadata(properties);
                };

                BotPlanningStepSectionMetadata.encode = function (m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (m.sectionTitle != null && $Object.hasOwnProperty.call(m, "sectionTitle"))
                        w.uint32(10).string(m.sectionTitle);
                    if (m.sectionBody != null && $Object.hasOwnProperty.call(m, "sectionBody"))
                        w.uint32(18).string(m.sectionBody);
                    if (m.sourcesMetadata != null && m.sourcesMetadata.length) {
                        for (var i = 0; i < m.sourcesMetadata.length; ++i)
                            $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.encode(m.sourcesMetadata[i], w.uint32(26).fork(), q + 1).ldelim();
                    }
                    if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                        for (var i = 0; i < m.$unknowns.length; ++i)
                            w.raw(m.$unknowns[i]);
                    return w;
                };

                BotPlanningStepSectionMetadata.decode = function (r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === $undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata();
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
                                m.sectionTitle = r.string();
                                continue;
                            }
                        case 2: {
                                if (u !== 2)
                                    break;
                                m.sectionBody = r.string();
                                continue;
                            }
                        case 3: {
                                if (u !== 2)
                                    break;
                                if (!(m.sourcesMetadata && m.sourcesMetadata.length))
                                    m.sourcesMetadata = [];
                                m.sourcesMetadata.push($root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.decode(r, r.uint32(), $undefined, q + 1));
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

                BotPlanningStepSectionMetadata.fromObject = function (d, q) {
                    if (d instanceof $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata)
                        return d;
                    if (!$util.isObject(d))
                        throw $TypeError(".AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata: object expected");
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var m = new $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata();
                    if (d.sectionTitle != null) {
                        m.sectionTitle = $String(d.sectionTitle);
                    }
                    if (d.sectionBody != null) {
                        m.sectionBody = $String(d.sectionBody);
                    }
                    if (d.sourcesMetadata) {
                        if (!$Array.isArray(d.sourcesMetadata))
                            throw $TypeError(".AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.sourcesMetadata: array expected");
                        m.sourcesMetadata = $Array(d.sourcesMetadata.length);
                        for (var i = 0; i < d.sourcesMetadata.length; ++i) {
                            if (!$util.isObject(d.sourcesMetadata[i]))
                                throw $TypeError(".AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata.sourcesMetadata: object expected");
                            m.sourcesMetadata[i] = $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.fromObject(d.sourcesMetadata[i], q + 1);
                        }
                    }
                    return m;
                };

                BotPlanningStepSectionMetadata.toObject = function (m, o, q) {
                    if (!o)
                        o = {};
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var d = {};
                    if (o.arrays || o.defaults) {
                        d.sourcesMetadata = [];
                    }
                    if (o.defaults) {
                        d.sectionTitle = "";
                        d.sectionBody = "";
                    }
                    if (m.sectionTitle != null && $Object.hasOwnProperty.call(m, "sectionTitle")) {
                        d.sectionTitle = m.sectionTitle;
                    }
                    if (m.sectionBody != null && $Object.hasOwnProperty.call(m, "sectionBody")) {
                        d.sectionBody = m.sectionBody;
                    }
                    if (m.sourcesMetadata && m.sourcesMetadata.length) {
                        d.sourcesMetadata = $Array(m.sourcesMetadata.length);
                        for (var j = 0; j < m.sourcesMetadata.length; ++j) {
                            d.sourcesMetadata[j] = $root.AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningSearchSourceMetadata.toObject(m.sourcesMetadata[j], o, q + 1);
                        }
                    }
                    return d;
                };

                BotPlanningStepSectionMetadata.prototype.toJSON = function() {
                    return BotPlanningStepSectionMetadata.toObject(this, $protobuf.util.toJSONOptions);
                };

                BotPlanningStepSectionMetadata.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/AICommon.BotProgressIndicatorMetadata.BotPlanningStepMetadata.BotPlanningStepSectionMetadata";
                };

                return BotPlanningStepSectionMetadata;
            })();

            BotPlanningStepMetadata.BotSearchSourceProvider = (function() {
                const valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_PROVIDER"] = 0;
                values[valuesById[1] = "OTHER"] = 1;
                values[valuesById[2] = "GOOGLE"] = 2;
                values[valuesById[3] = "BING"] = 3;
                return values;
            })();

            BotPlanningStepMetadata.PlanningStepStatus = (function() {
                const valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "PLANNED"] = 1;
                values[valuesById[2] = "EXECUTING"] = 2;
                values[valuesById[3] = "FINISHED"] = 3;
                return values;
            })();

            return BotPlanningStepMetadata;
        })();

        return BotProgressIndicatorMetadata;
    })();

    AICommon.BotModelMetadata = (function() {

        const BotModelMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotModelMetadata.prototype.modelType = 0;
        BotModelMetadata.prototype.premiumModelStatus = 0;
        BotModelMetadata.prototype.modelNameOverride = "";

        BotModelMetadata.create = function(properties) {
            return new BotModelMetadata(properties);
        };

        BotModelMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.modelType != null && $Object.hasOwnProperty.call(m, "modelType"))
                w.uint32(8).int32(m.modelType);
            if (m.premiumModelStatus != null && $Object.hasOwnProperty.call(m, "premiumModelStatus"))
                w.uint32(16).int32(m.premiumModelStatus);
            if (m.modelNameOverride != null && $Object.hasOwnProperty.call(m, "modelNameOverride"))
                w.uint32(26).string(m.modelNameOverride);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotModelMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotModelMetadata(), v;
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
                        v = r.int32();
                        if ($root.AICommon.BotModelMetadata.ModelType[v] !== $undefined) {
                            m.modelType = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotModelMetadata.PremiumModelStatus[v] !== $undefined) {
                            m.premiumModelStatus = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.modelNameOverride = r.string();
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

        BotModelMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotModelMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotModelMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotModelMetadata();
            switch (d.modelType) {
            case "UNKNOWN_TYPE":
            case 0:
                m.modelType = 0;
                break;
            case "LLAMA_PROD":
            case 1:
                m.modelType = 1;
                break;
            case "LLAMA_PROD_PREMIUM":
            case 2:
                m.modelType = 2;
                break;
            default:
            }
            switch (d.premiumModelStatus) {
            case "UNKNOWN_STATUS":
            case 0:
                m.premiumModelStatus = 0;
                break;
            case "AVAILABLE":
            case 1:
                m.premiumModelStatus = 1;
                break;
            case "QUOTA_EXCEED_LIMIT":
            case 2:
                m.premiumModelStatus = 2;
                break;
            default:
            }
            if (d.modelNameOverride != null) {
                m.modelNameOverride = $String(d.modelNameOverride);
            }
            return m;
        };

        BotModelMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.modelType = o.enums === $String ? "UNKNOWN_TYPE" : 0;
                d.premiumModelStatus = o.enums === $String ? "UNKNOWN_STATUS" : 0;
                d.modelNameOverride = "";
            }
            if (m.modelType != null && $Object.hasOwnProperty.call(m, "modelType")) {
                d.modelType = o.enums === $String ? $root.AICommon.BotModelMetadata.ModelType[m.modelType] === $undefined ? m.modelType : $root.AICommon.BotModelMetadata.ModelType[m.modelType] : m.modelType;
            }
            if (m.premiumModelStatus != null && $Object.hasOwnProperty.call(m, "premiumModelStatus")) {
                d.premiumModelStatus = o.enums === $String ? $root.AICommon.BotModelMetadata.PremiumModelStatus[m.premiumModelStatus] === $undefined ? m.premiumModelStatus : $root.AICommon.BotModelMetadata.PremiumModelStatus[m.premiumModelStatus] : m.premiumModelStatus;
            }
            if (m.modelNameOverride != null && $Object.hasOwnProperty.call(m, "modelNameOverride")) {
                d.modelNameOverride = m.modelNameOverride;
            }
            return d;
        };

        BotModelMetadata.prototype.toJSON = function() {
            return BotModelMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotModelMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotModelMetadata";
        };

        BotModelMetadata.ModelType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
            values[valuesById[1] = "LLAMA_PROD"] = 1;
            values[valuesById[2] = "LLAMA_PROD_PREMIUM"] = 2;
            return values;
        })();

        BotModelMetadata.PremiumModelStatus = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_STATUS"] = 0;
            values[valuesById[1] = "AVAILABLE"] = 1;
            values[valuesById[2] = "QUOTA_EXCEED_LIMIT"] = 2;
            return values;
        })();

        return BotModelMetadata;
    })();

    AICommon.BotReminderMetadata = (function() {

        const BotReminderMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotReminderMetadata.prototype.requestMessageKey = null;
        BotReminderMetadata.prototype.action = 1;
        BotReminderMetadata.prototype.name = "";
        BotReminderMetadata.prototype.nextTriggerTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        BotReminderMetadata.prototype.frequency = 1;

        BotReminderMetadata.create = function(properties) {
            return new BotReminderMetadata(properties);
        };

        BotReminderMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.requestMessageKey != null && $Object.hasOwnProperty.call(m, "requestMessageKey"))
                $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.encode(m.requestMessageKey, w.uint32(10).fork(), q + 1).ldelim();
            if (m.action != null && $Object.hasOwnProperty.call(m, "action"))
                w.uint32(16).int32(m.action);
            if (m.name != null && $Object.hasOwnProperty.call(m, "name"))
                w.uint32(26).string(m.name);
            if (m.nextTriggerTimestamp != null && $Object.hasOwnProperty.call(m, "nextTriggerTimestamp"))
                w.uint32(32).uint64(m.nextTriggerTimestamp);
            if (m.frequency != null && $Object.hasOwnProperty.call(m, "frequency"))
                w.uint32(40).int32(m.frequency);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotReminderMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotReminderMetadata(), v;
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
                        m.requestMessageKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.decode(r, r.uint32(), $undefined, q + 1, m.requestMessageKey);
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotReminderMetadata.ReminderAction[v] !== $undefined) {
                            m.action = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.name = r.string();
                        continue;
                    }
                case 4: {
                        if (u !== 0)
                            break;
                        m.nextTriggerTimestamp = r.uint64();
                        continue;
                    }
                case 5: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotReminderMetadata.ReminderFrequency[v] !== $undefined) {
                            m.frequency = v;
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

        BotReminderMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotReminderMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotReminderMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotReminderMetadata();
            if (d.requestMessageKey != null) {
                if (!$util.isObject(d.requestMessageKey))
                    throw $TypeError(".AICommon.BotReminderMetadata.requestMessageKey: object expected");
                m.requestMessageKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.fromObject(d.requestMessageKey, q + 1);
            }
            switch (d.action) {
            case "NOTIFY":
            case 1:
                m.action = 1;
                break;
            case "CREATE":
            case 2:
                m.action = 2;
                break;
            case "DELETE":
            case 3:
                m.action = 3;
                break;
            case "UPDATE":
            case 4:
                m.action = 4;
                break;
            default:
            }
            if (d.name != null) {
                m.name = $String(d.name);
            }
            if (d.nextTriggerTimestamp != null) {
                if ($util.Long)
                    m.nextTriggerTimestamp = $util.Long.fromValue(d.nextTriggerTimestamp, true);
                else if (typeof d.nextTriggerTimestamp === "string")
                    m.nextTriggerTimestamp = $parseInt(d.nextTriggerTimestamp, 10);
                else if (typeof d.nextTriggerTimestamp === "number")
                    m.nextTriggerTimestamp = d.nextTriggerTimestamp;
                else if (typeof d.nextTriggerTimestamp === "object")
                    m.nextTriggerTimestamp = new $util.LongBits(d.nextTriggerTimestamp.low >>> 0, d.nextTriggerTimestamp.high >>> 0).toNumber(true);
            }
            switch (d.frequency) {
            case "ONCE":
            case 1:
                m.frequency = 1;
                break;
            case "DAILY":
            case 2:
                m.frequency = 2;
                break;
            case "WEEKLY":
            case 3:
                m.frequency = 3;
                break;
            case "BIWEEKLY":
            case 4:
                m.frequency = 4;
                break;
            case "MONTHLY":
            case 5:
                m.frequency = 5;
                break;
            default:
            }
            return m;
        };

        BotReminderMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.requestMessageKey = null;
                d.action = o.enums === $String ? "NOTIFY" : 1;
                d.name = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, true);
                    d.nextTriggerTimestamp = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.nextTriggerTimestamp = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.frequency = o.enums === $String ? "ONCE" : 1;
            }
            if (m.requestMessageKey != null && $Object.hasOwnProperty.call(m, "requestMessageKey")) {
                d.requestMessageKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.toObject(m.requestMessageKey, o, q + 1);
            }
            if (m.action != null && $Object.hasOwnProperty.call(m, "action")) {
                d.action = o.enums === $String ? $root.AICommon.BotReminderMetadata.ReminderAction[m.action] === $undefined ? m.action : $root.AICommon.BotReminderMetadata.ReminderAction[m.action] : m.action;
            }
            if (m.name != null && $Object.hasOwnProperty.call(m, "name")) {
                d.name = m.name;
            }
            if (m.nextTriggerTimestamp != null && $Object.hasOwnProperty.call(m, "nextTriggerTimestamp")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.nextTriggerTimestamp = typeof m.nextTriggerTimestamp === "number" ? $BigInt(m.nextTriggerTimestamp) : $util.Long.fromBits(m.nextTriggerTimestamp.low >>> 0, m.nextTriggerTimestamp.high >>> 0, true).toBigInt();
                else if (typeof m.nextTriggerTimestamp === "number")
                    d.nextTriggerTimestamp = o.longs === $String ? $String(m.nextTriggerTimestamp) : m.nextTriggerTimestamp;
                else
                    d.nextTriggerTimestamp = o.longs === String ? longToString(m.nextTriggerTimestamp, true) : o.longs === Number ? longToNumber(m.nextTriggerTimestamp, true) : m.nextTriggerTimestamp;
            }
            if (m.frequency != null && $Object.hasOwnProperty.call(m, "frequency")) {
                d.frequency = o.enums === $String ? $root.AICommon.BotReminderMetadata.ReminderFrequency[m.frequency] === $undefined ? m.frequency : $root.AICommon.BotReminderMetadata.ReminderFrequency[m.frequency] : m.frequency;
            }
            return d;
        };

        BotReminderMetadata.prototype.toJSON = function() {
            return BotReminderMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotReminderMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotReminderMetadata";
        };

        BotReminderMetadata.ReminderAction = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[1] = "NOTIFY"] = 1;
            values[valuesById[2] = "CREATE"] = 2;
            values[valuesById[3] = "DELETE"] = 3;
            values[valuesById[4] = "UPDATE"] = 4;
            return values;
        })();

        BotReminderMetadata.ReminderFrequency = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[1] = "ONCE"] = 1;
            values[valuesById[2] = "DAILY"] = 2;
            values[valuesById[3] = "WEEKLY"] = 3;
            values[valuesById[4] = "BIWEEKLY"] = 4;
            values[valuesById[5] = "MONTHLY"] = 5;
            return values;
        })();

        return BotReminderMetadata;
    })();

    AICommon.BotMemuMetadata = (function() {

        const BotMemuMetadata = function (p) {
            this.faceImages = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotMemuMetadata.prototype.faceImages = $util.emptyArray;

        BotMemuMetadata.create = function(properties) {
            return new BotMemuMetadata(properties);
        };

        BotMemuMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.faceImages != null && m.faceImages.length) {
                for (var i = 0; i < m.faceImages.length; ++i)
                    $root.AICommon.BotMediaMetadata.encode(m.faceImages[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotMemuMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotMemuMetadata();
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
                        if (!(m.faceImages && m.faceImages.length))
                            m.faceImages = [];
                        m.faceImages.push($root.AICommon.BotMediaMetadata.decode(r, r.uint32(), $undefined, q + 1));
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

        BotMemuMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotMemuMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotMemuMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotMemuMetadata();
            if (d.faceImages) {
                if (!$Array.isArray(d.faceImages))
                    throw $TypeError(".AICommon.BotMemuMetadata.faceImages: array expected");
                m.faceImages = $Array(d.faceImages.length);
                for (var i = 0; i < d.faceImages.length; ++i) {
                    if (!$util.isObject(d.faceImages[i]))
                        throw $TypeError(".AICommon.BotMemuMetadata.faceImages: object expected");
                    m.faceImages[i] = $root.AICommon.BotMediaMetadata.fromObject(d.faceImages[i], q + 1);
                }
            }
            return m;
        };

        BotMemuMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.faceImages = [];
            }
            if (m.faceImages && m.faceImages.length) {
                d.faceImages = $Array(m.faceImages.length);
                for (var j = 0; j < m.faceImages.length; ++j) {
                    d.faceImages[j] = $root.AICommon.BotMediaMetadata.toObject(m.faceImages[j], o, q + 1);
                }
            }
            return d;
        };

        BotMemuMetadata.prototype.toJSON = function() {
            return BotMemuMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMemuMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotMemuMetadata";
        };

        return BotMemuMetadata;
    })();

    AICommon.BotMediaMetadata = (function() {

        const BotMediaMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotMediaMetadata.prototype.fileSha256 = "";
        BotMediaMetadata.prototype.mediaKey = "";
        BotMediaMetadata.prototype.fileEncSha256 = "";
        BotMediaMetadata.prototype.directPath = "";
        BotMediaMetadata.prototype.mediaKeyTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BotMediaMetadata.prototype.mimetype = "";
        BotMediaMetadata.prototype.orientationType = 1;

        BotMediaMetadata.create = function(properties) {
            return new BotMediaMetadata(properties);
        };

        BotMediaMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.fileSha256 != null && $Object.hasOwnProperty.call(m, "fileSha256"))
                w.uint32(10).string(m.fileSha256);
            if (m.mediaKey != null && $Object.hasOwnProperty.call(m, "mediaKey"))
                w.uint32(18).string(m.mediaKey);
            if (m.fileEncSha256 != null && $Object.hasOwnProperty.call(m, "fileEncSha256"))
                w.uint32(26).string(m.fileEncSha256);
            if (m.directPath != null && $Object.hasOwnProperty.call(m, "directPath"))
                w.uint32(34).string(m.directPath);
            if (m.mediaKeyTimestamp != null && $Object.hasOwnProperty.call(m, "mediaKeyTimestamp"))
                w.uint32(40).int64(m.mediaKeyTimestamp);
            if (m.mimetype != null && $Object.hasOwnProperty.call(m, "mimetype"))
                w.uint32(50).string(m.mimetype);
            if (m.orientationType != null && $Object.hasOwnProperty.call(m, "orientationType"))
                w.uint32(56).int32(m.orientationType);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotMediaMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotMediaMetadata(), v;
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
                        m.fileSha256 = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.mediaKey = r.string();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.fileEncSha256 = r.string();
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.directPath = r.string();
                        continue;
                    }
                case 5: {
                        if (u !== 0)
                            break;
                        m.mediaKeyTimestamp = r.int64();
                        continue;
                    }
                case 6: {
                        if (u !== 2)
                            break;
                        m.mimetype = r.string();
                        continue;
                    }
                case 7: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotMediaMetadata.OrientationType[v] !== $undefined) {
                            m.orientationType = v;
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

        BotMediaMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotMediaMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotMediaMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotMediaMetadata();
            if (d.fileSha256 != null) {
                m.fileSha256 = $String(d.fileSha256);
            }
            if (d.mediaKey != null) {
                m.mediaKey = $String(d.mediaKey);
            }
            if (d.fileEncSha256 != null) {
                m.fileEncSha256 = $String(d.fileEncSha256);
            }
            if (d.directPath != null) {
                m.directPath = $String(d.directPath);
            }
            if (d.mediaKeyTimestamp != null) {
                if ($util.Long)
                    m.mediaKeyTimestamp = $util.Long.fromValue(d.mediaKeyTimestamp, false);
                else if (typeof d.mediaKeyTimestamp === "string")
                    m.mediaKeyTimestamp = $parseInt(d.mediaKeyTimestamp, 10);
                else if (typeof d.mediaKeyTimestamp === "number")
                    m.mediaKeyTimestamp = d.mediaKeyTimestamp;
                else if (typeof d.mediaKeyTimestamp === "object")
                    m.mediaKeyTimestamp = new $util.LongBits(d.mediaKeyTimestamp.low >>> 0, d.mediaKeyTimestamp.high >>> 0).toNumber();
            }
            if (d.mimetype != null) {
                m.mimetype = $String(d.mimetype);
            }
            switch (d.orientationType) {
            case "CENTER":
            case 1:
                m.orientationType = 1;
                break;
            case "LEFT":
            case 2:
                m.orientationType = 2;
                break;
            case "RIGHT":
            case 3:
                m.orientationType = 3;
                break;
            default:
            }
            return m;
        };

        BotMediaMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.fileSha256 = "";
                d.mediaKey = "";
                d.fileEncSha256 = "";
                d.directPath = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.mediaKeyTimestamp = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.mediaKeyTimestamp = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.mimetype = "";
                d.orientationType = o.enums === $String ? "CENTER" : 1;
            }
            if (m.fileSha256 != null && $Object.hasOwnProperty.call(m, "fileSha256")) {
                d.fileSha256 = m.fileSha256;
            }
            if (m.mediaKey != null && $Object.hasOwnProperty.call(m, "mediaKey")) {
                d.mediaKey = m.mediaKey;
            }
            if (m.fileEncSha256 != null && $Object.hasOwnProperty.call(m, "fileEncSha256")) {
                d.fileEncSha256 = m.fileEncSha256;
            }
            if (m.directPath != null && $Object.hasOwnProperty.call(m, "directPath")) {
                d.directPath = m.directPath;
            }
            if (m.mediaKeyTimestamp != null && $Object.hasOwnProperty.call(m, "mediaKeyTimestamp")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.mediaKeyTimestamp = typeof m.mediaKeyTimestamp === "number" ? $BigInt(m.mediaKeyTimestamp) : $util.Long.fromBits(m.mediaKeyTimestamp.low >>> 0, m.mediaKeyTimestamp.high >>> 0, false).toBigInt();
                else if (typeof m.mediaKeyTimestamp === "number")
                    d.mediaKeyTimestamp = o.longs === $String ? $String(m.mediaKeyTimestamp) : m.mediaKeyTimestamp;
                else
                    d.mediaKeyTimestamp = o.longs === String ? longToString(m.mediaKeyTimestamp) : o.longs === Number ? longToNumber(m.mediaKeyTimestamp) : m.mediaKeyTimestamp;
            }
            if (m.mimetype != null && $Object.hasOwnProperty.call(m, "mimetype")) {
                d.mimetype = m.mimetype;
            }
            if (m.orientationType != null && $Object.hasOwnProperty.call(m, "orientationType")) {
                d.orientationType = o.enums === $String ? $root.AICommon.BotMediaMetadata.OrientationType[m.orientationType] === $undefined ? m.orientationType : $root.AICommon.BotMediaMetadata.OrientationType[m.orientationType] : m.orientationType;
            }
            return d;
        };

        BotMediaMetadata.prototype.toJSON = function() {
            return BotMediaMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMediaMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotMediaMetadata";
        };

        BotMediaMetadata.OrientationType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[1] = "CENTER"] = 1;
            values[valuesById[2] = "LEFT"] = 2;
            values[valuesById[3] = "RIGHT"] = 3;
            return values;
        })();

        return BotMediaMetadata;
    })();

    AICommon.BotSessionMetadata = (function() {

        const BotSessionMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotSessionMetadata.prototype.sessionId = "";
        BotSessionMetadata.prototype.sessionSource = 0;

        BotSessionMetadata.create = function(properties) {
            return new BotSessionMetadata(properties);
        };

        BotSessionMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.sessionId != null && $Object.hasOwnProperty.call(m, "sessionId"))
                w.uint32(10).string(m.sessionId);
            if (m.sessionSource != null && $Object.hasOwnProperty.call(m, "sessionSource"))
                w.uint32(16).int32(m.sessionSource);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotSessionMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotSessionMetadata(), v;
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
                        m.sessionId = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotSessionSource[v] !== $undefined) {
                            m.sessionSource = v;
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

        BotSessionMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotSessionMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotSessionMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotSessionMetadata();
            if (d.sessionId != null) {
                m.sessionId = $String(d.sessionId);
            }
            switch (d.sessionSource) {
            case "NONE":
            case 0:
                m.sessionSource = 0;
                break;
            case "NULL_STATE":
            case 1:
                m.sessionSource = 1;
                break;
            case "TYPEAHEAD":
            case 2:
                m.sessionSource = 2;
                break;
            case "USER_INPUT":
            case 3:
                m.sessionSource = 3;
                break;
            case "EMU_FLASH":
            case 4:
                m.sessionSource = 4;
                break;
            case "EMU_FLASH_FOLLOWUP":
            case 5:
                m.sessionSource = 5;
                break;
            case "VOICE":
            case 6:
                m.sessionSource = 6;
                break;
            case "AI_HOME_SESSION":
            case 7:
                m.sessionSource = 7;
                break;
            default:
            }
            return m;
        };

        BotSessionMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.sessionId = "";
                d.sessionSource = o.enums === $String ? "NONE" : 0;
            }
            if (m.sessionId != null && $Object.hasOwnProperty.call(m, "sessionId")) {
                d.sessionId = m.sessionId;
            }
            if (m.sessionSource != null && $Object.hasOwnProperty.call(m, "sessionSource")) {
                d.sessionSource = o.enums === $String ? $root.AICommon.BotSessionSource[m.sessionSource] === $undefined ? m.sessionSource : $root.AICommon.BotSessionSource[m.sessionSource] : m.sessionSource;
            }
            return d;
        };

        BotSessionMetadata.prototype.toJSON = function() {
            return BotSessionMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotSessionMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotSessionMetadata";
        };

        return BotSessionMetadata;
    })();

    AICommon.BotMetricsMetadata = (function() {

        const BotMetricsMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotMetricsMetadata.prototype.destinationId = "";
        BotMetricsMetadata.prototype.destinationEntryPoint = 0;
        BotMetricsMetadata.prototype.threadOrigin = 1;

        BotMetricsMetadata.create = function(properties) {
            return new BotMetricsMetadata(properties);
        };

        BotMetricsMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.destinationId != null && $Object.hasOwnProperty.call(m, "destinationId"))
                w.uint32(10).string(m.destinationId);
            if (m.destinationEntryPoint != null && $Object.hasOwnProperty.call(m, "destinationEntryPoint"))
                w.uint32(16).int32(m.destinationEntryPoint);
            if (m.threadOrigin != null && $Object.hasOwnProperty.call(m, "threadOrigin"))
                w.uint32(24).int32(m.threadOrigin);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotMetricsMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotMetricsMetadata(), v;
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
                        m.destinationId = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotMetricsEntryPoint[v] !== $undefined) {
                            m.destinationEntryPoint = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotMetricsThreadEntryPoint[v] !== $undefined) {
                            m.threadOrigin = v;
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

        BotMetricsMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotMetricsMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotMetricsMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotMetricsMetadata();
            if (d.destinationId != null) {
                m.destinationId = $String(d.destinationId);
            }
            switch (d.destinationEntryPoint) {
            case "UNDEFINED_ENTRY_POINT":
            case 0:
                m.destinationEntryPoint = 0;
                break;
            case "FAVICON":
            case 1:
                m.destinationEntryPoint = 1;
                break;
            case "CHATLIST":
            case 2:
                m.destinationEntryPoint = 2;
                break;
            case "AISEARCH_NULL_STATE_PAPER_PLANE":
            case 3:
                m.destinationEntryPoint = 3;
                break;
            case "AISEARCH_NULL_STATE_SUGGESTION":
            case 4:
                m.destinationEntryPoint = 4;
                break;
            case "AISEARCH_TYPE_AHEAD_SUGGESTION":
            case 5:
                m.destinationEntryPoint = 5;
                break;
            case "AISEARCH_TYPE_AHEAD_PAPER_PLANE":
            case 6:
                m.destinationEntryPoint = 6;
                break;
            case "AISEARCH_TYPE_AHEAD_RESULT_CHATLIST":
            case 7:
                m.destinationEntryPoint = 7;
                break;
            case "AISEARCH_TYPE_AHEAD_RESULT_MESSAGES":
            case 8:
                m.destinationEntryPoint = 8;
                break;
            case "AIVOICE_SEARCH_BAR":
            case 9:
                m.destinationEntryPoint = 9;
                break;
            case "AIVOICE_FAVICON":
            case 10:
                m.destinationEntryPoint = 10;
                break;
            case "AISTUDIO":
            case 11:
                m.destinationEntryPoint = 11;
                break;
            case "DEEPLINK":
            case 12:
                m.destinationEntryPoint = 12;
                break;
            case "NOTIFICATION":
            case 13:
                m.destinationEntryPoint = 13;
                break;
            case "PROFILE_MESSAGE_BUTTON":
            case 14:
                m.destinationEntryPoint = 14;
                break;
            case "FORWARD":
            case 15:
                m.destinationEntryPoint = 15;
                break;
            case "APP_SHORTCUT":
            case 16:
                m.destinationEntryPoint = 16;
                break;
            case "FF_FAMILY":
            case 17:
                m.destinationEntryPoint = 17;
                break;
            case "AI_TAB":
            case 18:
                m.destinationEntryPoint = 18;
                break;
            case "AI_HOME":
            case 19:
                m.destinationEntryPoint = 19;
                break;
            case "AI_DEEPLINK_IMMERSIVE":
            case 20:
                m.destinationEntryPoint = 20;
                break;
            case "AI_DEEPLINK":
            case 21:
                m.destinationEntryPoint = 21;
                break;
            case "META_AI_CHAT_SHORTCUT_AI_STUDIO":
            case 22:
                m.destinationEntryPoint = 22;
                break;
            case "UGC_CHAT_SHORTCUT_AI_STUDIO":
            case 23:
                m.destinationEntryPoint = 23;
                break;
            case "NEW_CHAT_AI_STUDIO":
            case 24:
                m.destinationEntryPoint = 24;
                break;
            case "AIVOICE_FAVICON_CALL_HISTORY":
            case 25:
                m.destinationEntryPoint = 25;
                break;
            case "ASK_META_AI_CONTEXT_MENU":
            case 26:
                m.destinationEntryPoint = 26;
                break;
            case "ASK_META_AI_CONTEXT_MENU_1ON1":
            case 27:
                m.destinationEntryPoint = 27;
                break;
            case "ASK_META_AI_CONTEXT_MENU_GROUP":
            case 28:
                m.destinationEntryPoint = 28;
                break;
            case "INVOKE_META_AI_1ON1":
            case 29:
                m.destinationEntryPoint = 29;
                break;
            case "INVOKE_META_AI_GROUP":
            case 30:
                m.destinationEntryPoint = 30;
                break;
            case "META_AI_FORWARD":
            case 31:
                m.destinationEntryPoint = 31;
                break;
            case "NEW_CHAT_AI_CONTACT":
            case 32:
                m.destinationEntryPoint = 32;
                break;
            case "MESSAGE_QUICK_ACTION_1_ON_1_CHAT":
            case 33:
                m.destinationEntryPoint = 33;
                break;
            case "MESSAGE_QUICK_ACTION_GROUP_CHAT":
            case 34:
                m.destinationEntryPoint = 34;
                break;
            case "ATTACHMENT_TRAY_1_ON_1_CHAT":
            case 35:
                m.destinationEntryPoint = 35;
                break;
            case "ATTACHMENT_TRAY_GROUP_CHAT":
            case 36:
                m.destinationEntryPoint = 36;
                break;
            case "ASK_META_AI_MEDIA_VIEWER_1ON1":
            case 37:
                m.destinationEntryPoint = 37;
                break;
            case "ASK_META_AI_MEDIA_VIEWER_GROUP":
            case 38:
                m.destinationEntryPoint = 38;
                break;
            case "MEDIA_PICKER_1_ON_1_CHAT":
            case 39:
                m.destinationEntryPoint = 39;
                break;
            case "MEDIA_PICKER_GROUP_CHAT":
            case 40:
                m.destinationEntryPoint = 40;
                break;
            case "ASK_META_AI_NO_SEARCH_RESULTS":
            case 41:
                m.destinationEntryPoint = 41;
                break;
            case "META_AI_SETTINGS":
            case 45:
                m.destinationEntryPoint = 45;
                break;
            case "WEB_INTRO_PANEL":
            case 46:
                m.destinationEntryPoint = 46;
                break;
            case "WEB_NAVIGATION_BAR":
            case 47:
                m.destinationEntryPoint = 47;
                break;
            case "GROUP_MEMBER":
            case 54:
                m.destinationEntryPoint = 54;
                break;
            case "CHATLIST_SEARCH":
            case 55:
                m.destinationEntryPoint = 55;
                break;
            case "NEW_CHAT_LIST":
            case 56:
                m.destinationEntryPoint = 56;
                break;
            case "CONTACTS_TAB":
            case 57:
                m.destinationEntryPoint = 57;
                break;
            default:
            }
            switch (d.threadOrigin) {
            case "AI_TAB_THREAD":
            case 1:
                m.threadOrigin = 1;
                break;
            case "AI_HOME_THREAD":
            case 2:
                m.threadOrigin = 2;
                break;
            case "AI_DEEPLINK_IMMERSIVE_THREAD":
            case 3:
                m.threadOrigin = 3;
                break;
            case "AI_DEEPLINK_THREAD":
            case 4:
                m.threadOrigin = 4;
                break;
            case "ASK_META_AI_CONTEXT_MENU_THREAD":
            case 5:
                m.threadOrigin = 5;
                break;
            default:
            }
            return m;
        };

        BotMetricsMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.destinationId = "";
                d.destinationEntryPoint = o.enums === $String ? "UNDEFINED_ENTRY_POINT" : 0;
                d.threadOrigin = o.enums === $String ? "AI_TAB_THREAD" : 1;
            }
            if (m.destinationId != null && $Object.hasOwnProperty.call(m, "destinationId")) {
                d.destinationId = m.destinationId;
            }
            if (m.destinationEntryPoint != null && $Object.hasOwnProperty.call(m, "destinationEntryPoint")) {
                d.destinationEntryPoint = o.enums === $String ? $root.AICommon.BotMetricsEntryPoint[m.destinationEntryPoint] === $undefined ? m.destinationEntryPoint : $root.AICommon.BotMetricsEntryPoint[m.destinationEntryPoint] : m.destinationEntryPoint;
            }
            if (m.threadOrigin != null && $Object.hasOwnProperty.call(m, "threadOrigin")) {
                d.threadOrigin = o.enums === $String ? $root.AICommon.BotMetricsThreadEntryPoint[m.threadOrigin] === $undefined ? m.threadOrigin : $root.AICommon.BotMetricsThreadEntryPoint[m.threadOrigin] : m.threadOrigin;
            }
            return d;
        };

        BotMetricsMetadata.prototype.toJSON = function() {
            return BotMetricsMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMetricsMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotMetricsMetadata";
        };

        return BotMetricsMetadata;
    })();

    AICommon.BotRenderingMetadata = (function() {

        const BotRenderingMetadata = function (p) {
            this.keywords = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotRenderingMetadata.prototype.keywords = $util.emptyArray;

        BotRenderingMetadata.create = function(properties) {
            return new BotRenderingMetadata(properties);
        };

        BotRenderingMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.keywords != null && m.keywords.length) {
                for (var i = 0; i < m.keywords.length; ++i)
                    $root.AICommon.BotRenderingMetadata.Keyword.encode(m.keywords[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotRenderingMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotRenderingMetadata();
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
                        if (!(m.keywords && m.keywords.length))
                            m.keywords = [];
                        m.keywords.push($root.AICommon.BotRenderingMetadata.Keyword.decode(r, r.uint32(), $undefined, q + 1));
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

        BotRenderingMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotRenderingMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotRenderingMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotRenderingMetadata();
            if (d.keywords) {
                if (!$Array.isArray(d.keywords))
                    throw $TypeError(".AICommon.BotRenderingMetadata.keywords: array expected");
                m.keywords = $Array(d.keywords.length);
                for (var i = 0; i < d.keywords.length; ++i) {
                    if (!$util.isObject(d.keywords[i]))
                        throw $TypeError(".AICommon.BotRenderingMetadata.keywords: object expected");
                    m.keywords[i] = $root.AICommon.BotRenderingMetadata.Keyword.fromObject(d.keywords[i], q + 1);
                }
            }
            return m;
        };

        BotRenderingMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.keywords = [];
            }
            if (m.keywords && m.keywords.length) {
                d.keywords = $Array(m.keywords.length);
                for (var j = 0; j < m.keywords.length; ++j) {
                    d.keywords[j] = $root.AICommon.BotRenderingMetadata.Keyword.toObject(m.keywords[j], o, q + 1);
                }
            }
            return d;
        };

        BotRenderingMetadata.prototype.toJSON = function() {
            return BotRenderingMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotRenderingMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotRenderingMetadata";
        };

        BotRenderingMetadata.Keyword = (function() {

            const Keyword = function (p) {
                this.associatedPrompts = [];
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            Keyword.prototype.value = "";
            Keyword.prototype.associatedPrompts = $util.emptyArray;

            Keyword.create = function(properties) {
                return new Keyword(properties);
            };

            Keyword.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.value != null && $Object.hasOwnProperty.call(m, "value"))
                    w.uint32(10).string(m.value);
                if (m.associatedPrompts != null && m.associatedPrompts.length) {
                    for (var i = 0; i < m.associatedPrompts.length; ++i)
                        w.uint32(18).string(m.associatedPrompts[i]);
                }
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            Keyword.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotRenderingMetadata.Keyword();
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
                            m.value = r.string();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            if (!(m.associatedPrompts && m.associatedPrompts.length))
                                m.associatedPrompts = [];
                            m.associatedPrompts.push(r.string());
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

            Keyword.fromObject = function (d, q) {
                if (d instanceof $root.AICommon.BotRenderingMetadata.Keyword)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".AICommon.BotRenderingMetadata.Keyword: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.AICommon.BotRenderingMetadata.Keyword();
                if (d.value != null) {
                    m.value = $String(d.value);
                }
                if (d.associatedPrompts) {
                    if (!$Array.isArray(d.associatedPrompts))
                        throw $TypeError(".AICommon.BotRenderingMetadata.Keyword.associatedPrompts: array expected");
                    m.associatedPrompts = $Array(d.associatedPrompts.length);
                    for (var i = 0; i < d.associatedPrompts.length; ++i) {
                        m.associatedPrompts[i] = $String(d.associatedPrompts[i]);
                    }
                }
                return m;
            };

            Keyword.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.arrays || o.defaults) {
                    d.associatedPrompts = [];
                }
                if (o.defaults) {
                    d.value = "";
                }
                if (m.value != null && $Object.hasOwnProperty.call(m, "value")) {
                    d.value = m.value;
                }
                if (m.associatedPrompts && m.associatedPrompts.length) {
                    d.associatedPrompts = $Array(m.associatedPrompts.length);
                    for (var j = 0; j < m.associatedPrompts.length; ++j) {
                        d.associatedPrompts[j] = m.associatedPrompts[j];
                    }
                }
                return d;
            };

            Keyword.prototype.toJSON = function() {
                return Keyword.toObject(this, $protobuf.util.toJSONOptions);
            };

            Keyword.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/AICommon.BotRenderingMetadata.Keyword";
            };

            return Keyword;
        })();

        return BotRenderingMetadata;
    })();

    AICommon.BotPromotionMessageMetadata = (function() {

        const BotPromotionMessageMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotPromotionMessageMetadata.prototype.promotionType = 0;
        BotPromotionMessageMetadata.prototype.buttonTitle = "";

        BotPromotionMessageMetadata.create = function(properties) {
            return new BotPromotionMessageMetadata(properties);
        };

        BotPromotionMessageMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.promotionType != null && $Object.hasOwnProperty.call(m, "promotionType"))
                w.uint32(8).int32(m.promotionType);
            if (m.buttonTitle != null && $Object.hasOwnProperty.call(m, "buttonTitle"))
                w.uint32(18).string(m.buttonTitle);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotPromotionMessageMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotPromotionMessageMetadata(), v;
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
                        v = r.int32();
                        if ($root.AICommon.BotPromotionMessageMetadata.BotPromotionType[v] !== $undefined) {
                            m.promotionType = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.buttonTitle = r.string();
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

        BotPromotionMessageMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotPromotionMessageMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotPromotionMessageMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotPromotionMessageMetadata();
            switch (d.promotionType) {
            case "UNKNOWN_TYPE":
            case 0:
                m.promotionType = 0;
                break;
            case "C50":
            case 1:
                m.promotionType = 1;
                break;
            case "SURVEY_PLATFORM":
            case 2:
                m.promotionType = 2;
                break;
            default:
            }
            if (d.buttonTitle != null) {
                m.buttonTitle = $String(d.buttonTitle);
            }
            return m;
        };

        BotPromotionMessageMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.promotionType = o.enums === $String ? "UNKNOWN_TYPE" : 0;
                d.buttonTitle = "";
            }
            if (m.promotionType != null && $Object.hasOwnProperty.call(m, "promotionType")) {
                d.promotionType = o.enums === $String ? $root.AICommon.BotPromotionMessageMetadata.BotPromotionType[m.promotionType] === $undefined ? m.promotionType : $root.AICommon.BotPromotionMessageMetadata.BotPromotionType[m.promotionType] : m.promotionType;
            }
            if (m.buttonTitle != null && $Object.hasOwnProperty.call(m, "buttonTitle")) {
                d.buttonTitle = m.buttonTitle;
            }
            return d;
        };

        BotPromotionMessageMetadata.prototype.toJSON = function() {
            return BotPromotionMessageMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotPromotionMessageMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotPromotionMessageMetadata";
        };

        BotPromotionMessageMetadata.BotPromotionType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
            values[valuesById[1] = "C50"] = 1;
            values[valuesById[2] = "SURVEY_PLATFORM"] = 2;
            return values;
        })();

        return BotPromotionMessageMetadata;
    })();

    AICommon.BotSignatureVerificationUseCaseProof = (function() {

        const BotSignatureVerificationUseCaseProof = function (p) {
            this.certificateChain = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotSignatureVerificationUseCaseProof.prototype.version = 0;
        BotSignatureVerificationUseCaseProof.prototype.useCase = 0;
        BotSignatureVerificationUseCaseProof.prototype.signature = $util.newBuffer([]);
        BotSignatureVerificationUseCaseProof.prototype.certificateChain = $util.emptyArray;

        BotSignatureVerificationUseCaseProof.create = function(properties) {
            return new BotSignatureVerificationUseCaseProof(properties);
        };

        BotSignatureVerificationUseCaseProof.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.version != null && $Object.hasOwnProperty.call(m, "version"))
                w.uint32(8).int32(m.version);
            if (m.useCase != null && $Object.hasOwnProperty.call(m, "useCase"))
                w.uint32(16).int32(m.useCase);
            if (m.signature != null && $Object.hasOwnProperty.call(m, "signature"))
                w.uint32(26).bytes(m.signature);
            if (m.certificateChain != null && m.certificateChain.length) {
                for (var i = 0; i < m.certificateChain.length; ++i)
                    w.uint32(34).bytes(m.certificateChain[i]);
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotSignatureVerificationUseCaseProof.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotSignatureVerificationUseCaseProof(), v;
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
                        m.version = r.int32();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotSignatureVerificationUseCaseProof.BotSignatureUseCase[v] !== $undefined) {
                            m.useCase = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.signature = r.bytes();
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        if (!(m.certificateChain && m.certificateChain.length))
                            m.certificateChain = [];
                        m.certificateChain.push(r.bytes());
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

        BotSignatureVerificationUseCaseProof.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotSignatureVerificationUseCaseProof)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotSignatureVerificationUseCaseProof: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotSignatureVerificationUseCaseProof();
            if (d.version != null) {
                m.version = d.version | 0;
            }
            switch (d.useCase) {
            case "UNSPECIFIED":
            case 0:
                m.useCase = 0;
                break;
            case "WA_BOT_MSG":
            case 1:
                m.useCase = 1;
                break;
            case "WA_TEE_BOT_MSG":
            case 2:
                m.useCase = 2;
                break;
            case "P2P_PILLS":
            case 3:
                m.useCase = 3;
                break;
            default:
            }
            if (d.signature != null) {
                if (typeof d.signature === "string")
                    $util.base64.decode(d.signature, m.signature = $util.newBuffer($util.base64.length(d.signature)), 0);
                else if (d.signature.length >= 0)
                    m.signature = d.signature;
            }
            if (d.certificateChain) {
                if (!$Array.isArray(d.certificateChain))
                    throw $TypeError(".AICommon.BotSignatureVerificationUseCaseProof.certificateChain: array expected");
                m.certificateChain = $Array(d.certificateChain.length);
                for (var i = 0; i < d.certificateChain.length; ++i) {
                    if (typeof d.certificateChain[i] === "string")
                        $util.base64.decode(d.certificateChain[i], m.certificateChain[i] = $util.newBuffer($util.base64.length(d.certificateChain[i])), 0);
                    else if (d.certificateChain[i].length >= 0)
                        m.certificateChain[i] = d.certificateChain[i];
                }
            }
            return m;
        };

        BotSignatureVerificationUseCaseProof.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.certificateChain = [];
            }
            if (o.defaults) {
                d.version = 0;
                d.useCase = o.enums === $String ? "UNSPECIFIED" : 0;
                if (o.bytes === $String)
                    d.signature = "";
                else {
                    d.signature = [];
                    if (o.bytes !== $Array)
                        d.signature = $util.newBuffer(d.signature);
                }
            }
            if (m.version != null && $Object.hasOwnProperty.call(m, "version")) {
                d.version = m.version;
            }
            if (m.useCase != null && $Object.hasOwnProperty.call(m, "useCase")) {
                d.useCase = o.enums === $String ? $root.AICommon.BotSignatureVerificationUseCaseProof.BotSignatureUseCase[m.useCase] === $undefined ? m.useCase : $root.AICommon.BotSignatureVerificationUseCaseProof.BotSignatureUseCase[m.useCase] : m.useCase;
            }
            if (m.signature != null && $Object.hasOwnProperty.call(m, "signature")) {
                d.signature = o.bytes === $String ? $util.base64.encode(m.signature, 0, m.signature.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.signature) : m.signature;
            }
            if (m.certificateChain && m.certificateChain.length) {
                d.certificateChain = $Array(m.certificateChain.length);
                for (var j = 0; j < m.certificateChain.length; ++j) {
                    d.certificateChain[j] = o.bytes === $String ? $util.base64.encode(m.certificateChain[j], 0, m.certificateChain[j].length) : o.bytes === $Array ? $Array.prototype.slice.call(m.certificateChain[j]) : m.certificateChain[j];
                }
            }
            return d;
        };

        BotSignatureVerificationUseCaseProof.prototype.toJSON = function() {
            return BotSignatureVerificationUseCaseProof.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotSignatureVerificationUseCaseProof.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotSignatureVerificationUseCaseProof";
        };

        BotSignatureVerificationUseCaseProof.BotSignatureUseCase = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNSPECIFIED"] = 0;
            values[valuesById[1] = "WA_BOT_MSG"] = 1;
            values[valuesById[2] = "WA_TEE_BOT_MSG"] = 2;
            values[valuesById[3] = "P2P_PILLS"] = 3;
            return values;
        })();

        return BotSignatureVerificationUseCaseProof;
    })();

    AICommon.BotSignatureVerificationMetadata = (function() {

        const BotSignatureVerificationMetadata = function (p) {
            this.proofs = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotSignatureVerificationMetadata.prototype.proofs = $util.emptyArray;

        BotSignatureVerificationMetadata.create = function(properties) {
            return new BotSignatureVerificationMetadata(properties);
        };

        BotSignatureVerificationMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.proofs != null && m.proofs.length) {
                for (var i = 0; i < m.proofs.length; ++i)
                    $root.AICommon.BotSignatureVerificationUseCaseProof.encode(m.proofs[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotSignatureVerificationMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotSignatureVerificationMetadata();
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
                        if (!(m.proofs && m.proofs.length))
                            m.proofs = [];
                        m.proofs.push($root.AICommon.BotSignatureVerificationUseCaseProof.decode(r, r.uint32(), $undefined, q + 1));
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

        BotSignatureVerificationMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotSignatureVerificationMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotSignatureVerificationMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotSignatureVerificationMetadata();
            if (d.proofs) {
                if (!$Array.isArray(d.proofs))
                    throw $TypeError(".AICommon.BotSignatureVerificationMetadata.proofs: array expected");
                m.proofs = $Array(d.proofs.length);
                for (var i = 0; i < d.proofs.length; ++i) {
                    if (!$util.isObject(d.proofs[i]))
                        throw $TypeError(".AICommon.BotSignatureVerificationMetadata.proofs: object expected");
                    m.proofs[i] = $root.AICommon.BotSignatureVerificationUseCaseProof.fromObject(d.proofs[i], q + 1);
                }
            }
            return m;
        };

        BotSignatureVerificationMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.proofs = [];
            }
            if (m.proofs && m.proofs.length) {
                d.proofs = $Array(m.proofs.length);
                for (var j = 0; j < m.proofs.length; ++j) {
                    d.proofs[j] = $root.AICommon.BotSignatureVerificationUseCaseProof.toObject(m.proofs[j], o, q + 1);
                }
            }
            return d;
        };

        BotSignatureVerificationMetadata.prototype.toJSON = function() {
            return BotSignatureVerificationMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotSignatureVerificationMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotSignatureVerificationMetadata";
        };

        return BotSignatureVerificationMetadata;
    })();

    AICommon.BotMemoryFact = (function() {

        const BotMemoryFact = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotMemoryFact.prototype.fact = "";
        BotMemoryFact.prototype.factId = "";

        BotMemoryFact.create = function(properties) {
            return new BotMemoryFact(properties);
        };

        BotMemoryFact.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.fact != null && $Object.hasOwnProperty.call(m, "fact"))
                w.uint32(10).string(m.fact);
            if (m.factId != null && $Object.hasOwnProperty.call(m, "factId"))
                w.uint32(18).string(m.factId);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotMemoryFact.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotMemoryFact();
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
                        m.fact = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.factId = r.string();
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

        BotMemoryFact.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotMemoryFact)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotMemoryFact: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotMemoryFact();
            if (d.fact != null) {
                m.fact = $String(d.fact);
            }
            if (d.factId != null) {
                m.factId = $String(d.factId);
            }
            return m;
        };

        BotMemoryFact.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.fact = "";
                d.factId = "";
            }
            if (m.fact != null && $Object.hasOwnProperty.call(m, "fact")) {
                d.fact = m.fact;
            }
            if (m.factId != null && $Object.hasOwnProperty.call(m, "factId")) {
                d.factId = m.factId;
            }
            return d;
        };

        BotMemoryFact.prototype.toJSON = function() {
            return BotMemoryFact.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMemoryFact.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotMemoryFact";
        };

        return BotMemoryFact;
    })();

    AICommon.BotMemoryMetadata = (function() {

        const BotMemoryMetadata = function (p) {
            this.addedFacts = [];
            this.removedFacts = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotMemoryMetadata.prototype.addedFacts = $util.emptyArray;
        BotMemoryMetadata.prototype.removedFacts = $util.emptyArray;
        BotMemoryMetadata.prototype.disclaimer = "";

        BotMemoryMetadata.create = function(properties) {
            return new BotMemoryMetadata(properties);
        };

        BotMemoryMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.addedFacts != null && m.addedFacts.length) {
                for (var i = 0; i < m.addedFacts.length; ++i)
                    $root.AICommon.BotMemoryFact.encode(m.addedFacts[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.removedFacts != null && m.removedFacts.length) {
                for (var i = 0; i < m.removedFacts.length; ++i)
                    $root.AICommon.BotMemoryFact.encode(m.removedFacts[i], w.uint32(18).fork(), q + 1).ldelim();
            }
            if (m.disclaimer != null && $Object.hasOwnProperty.call(m, "disclaimer"))
                w.uint32(26).string(m.disclaimer);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotMemoryMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotMemoryMetadata();
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
                        if (!(m.addedFacts && m.addedFacts.length))
                            m.addedFacts = [];
                        m.addedFacts.push($root.AICommon.BotMemoryFact.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        if (!(m.removedFacts && m.removedFacts.length))
                            m.removedFacts = [];
                        m.removedFacts.push($root.AICommon.BotMemoryFact.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.disclaimer = r.string();
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

        BotMemoryMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotMemoryMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotMemoryMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotMemoryMetadata();
            if (d.addedFacts) {
                if (!$Array.isArray(d.addedFacts))
                    throw $TypeError(".AICommon.BotMemoryMetadata.addedFacts: array expected");
                m.addedFacts = $Array(d.addedFacts.length);
                for (var i = 0; i < d.addedFacts.length; ++i) {
                    if (!$util.isObject(d.addedFacts[i]))
                        throw $TypeError(".AICommon.BotMemoryMetadata.addedFacts: object expected");
                    m.addedFacts[i] = $root.AICommon.BotMemoryFact.fromObject(d.addedFacts[i], q + 1);
                }
            }
            if (d.removedFacts) {
                if (!$Array.isArray(d.removedFacts))
                    throw $TypeError(".AICommon.BotMemoryMetadata.removedFacts: array expected");
                m.removedFacts = $Array(d.removedFacts.length);
                for (var i = 0; i < d.removedFacts.length; ++i) {
                    if (!$util.isObject(d.removedFacts[i]))
                        throw $TypeError(".AICommon.BotMemoryMetadata.removedFacts: object expected");
                    m.removedFacts[i] = $root.AICommon.BotMemoryFact.fromObject(d.removedFacts[i], q + 1);
                }
            }
            if (d.disclaimer != null) {
                m.disclaimer = $String(d.disclaimer);
            }
            return m;
        };

        BotMemoryMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.addedFacts = [];
                d.removedFacts = [];
            }
            if (o.defaults) {
                d.disclaimer = "";
            }
            if (m.addedFacts && m.addedFacts.length) {
                d.addedFacts = $Array(m.addedFacts.length);
                for (var j = 0; j < m.addedFacts.length; ++j) {
                    d.addedFacts[j] = $root.AICommon.BotMemoryFact.toObject(m.addedFacts[j], o, q + 1);
                }
            }
            if (m.removedFacts && m.removedFacts.length) {
                d.removedFacts = $Array(m.removedFacts.length);
                for (var j = 0; j < m.removedFacts.length; ++j) {
                    d.removedFacts[j] = $root.AICommon.BotMemoryFact.toObject(m.removedFacts[j], o, q + 1);
                }
            }
            if (m.disclaimer != null && $Object.hasOwnProperty.call(m, "disclaimer")) {
                d.disclaimer = m.disclaimer;
            }
            return d;
        };

        BotMemoryMetadata.prototype.toJSON = function() {
            return BotMemoryMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotMemoryMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotMemoryMetadata";
        };

        return BotMemoryMetadata;
    })();

    AICommon.BotLinkedAccount = (function() {

        const BotLinkedAccount = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotLinkedAccount.prototype.type = 0;

        BotLinkedAccount.create = function(properties) {
            return new BotLinkedAccount(properties);
        };

        BotLinkedAccount.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.type != null && $Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotLinkedAccount.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotLinkedAccount(), v;
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
                        v = r.int32();
                        if ($root.AICommon.BotLinkedAccount.BotLinkedAccountType[v] !== $undefined) {
                            m.type = v;
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

        BotLinkedAccount.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotLinkedAccount)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotLinkedAccount: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotLinkedAccount();
            switch (d.type) {
            case "BOT_LINKED_ACCOUNT_TYPE_1P":
            case 0:
                m.type = 0;
                break;
            default:
            }
            return m;
        };

        BotLinkedAccount.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.type = o.enums === $String ? "BOT_LINKED_ACCOUNT_TYPE_1P" : 0;
            }
            if (m.type != null && $Object.hasOwnProperty.call(m, "type")) {
                d.type = o.enums === $String ? $root.AICommon.BotLinkedAccount.BotLinkedAccountType[m.type] === $undefined ? m.type : $root.AICommon.BotLinkedAccount.BotLinkedAccountType[m.type] : m.type;
            }
            return d;
        };

        BotLinkedAccount.prototype.toJSON = function() {
            return BotLinkedAccount.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotLinkedAccount.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotLinkedAccount";
        };

        BotLinkedAccount.BotLinkedAccountType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "BOT_LINKED_ACCOUNT_TYPE_1P"] = 0;
            return values;
        })();

        return BotLinkedAccount;
    })();

    AICommon.BotLinkedAccountsMetadata = (function() {

        const BotLinkedAccountsMetadata = function (p) {
            this.accounts = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotLinkedAccountsMetadata.prototype.accounts = $util.emptyArray;
        BotLinkedAccountsMetadata.prototype.acAuthTokens = $util.newBuffer([]);
        BotLinkedAccountsMetadata.prototype.acErrorCode = 0;

        BotLinkedAccountsMetadata.create = function(properties) {
            return new BotLinkedAccountsMetadata(properties);
        };

        BotLinkedAccountsMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.accounts != null && m.accounts.length) {
                for (var i = 0; i < m.accounts.length; ++i)
                    $root.AICommon.BotLinkedAccount.encode(m.accounts[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.acAuthTokens != null && $Object.hasOwnProperty.call(m, "acAuthTokens"))
                w.uint32(18).bytes(m.acAuthTokens);
            if (m.acErrorCode != null && $Object.hasOwnProperty.call(m, "acErrorCode"))
                w.uint32(24).int32(m.acErrorCode);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotLinkedAccountsMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotLinkedAccountsMetadata();
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
                        if (!(m.accounts && m.accounts.length))
                            m.accounts = [];
                        m.accounts.push($root.AICommon.BotLinkedAccount.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.acAuthTokens = r.bytes();
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        m.acErrorCode = r.int32();
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

        BotLinkedAccountsMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotLinkedAccountsMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotLinkedAccountsMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotLinkedAccountsMetadata();
            if (d.accounts) {
                if (!$Array.isArray(d.accounts))
                    throw $TypeError(".AICommon.BotLinkedAccountsMetadata.accounts: array expected");
                m.accounts = $Array(d.accounts.length);
                for (var i = 0; i < d.accounts.length; ++i) {
                    if (!$util.isObject(d.accounts[i]))
                        throw $TypeError(".AICommon.BotLinkedAccountsMetadata.accounts: object expected");
                    m.accounts[i] = $root.AICommon.BotLinkedAccount.fromObject(d.accounts[i], q + 1);
                }
            }
            if (d.acAuthTokens != null) {
                if (typeof d.acAuthTokens === "string")
                    $util.base64.decode(d.acAuthTokens, m.acAuthTokens = $util.newBuffer($util.base64.length(d.acAuthTokens)), 0);
                else if (d.acAuthTokens.length >= 0)
                    m.acAuthTokens = d.acAuthTokens;
            }
            if (d.acErrorCode != null) {
                m.acErrorCode = d.acErrorCode | 0;
            }
            return m;
        };

        BotLinkedAccountsMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.accounts = [];
            }
            if (o.defaults) {
                if (o.bytes === $String)
                    d.acAuthTokens = "";
                else {
                    d.acAuthTokens = [];
                    if (o.bytes !== $Array)
                        d.acAuthTokens = $util.newBuffer(d.acAuthTokens);
                }
                d.acErrorCode = 0;
            }
            if (m.accounts && m.accounts.length) {
                d.accounts = $Array(m.accounts.length);
                for (var j = 0; j < m.accounts.length; ++j) {
                    d.accounts[j] = $root.AICommon.BotLinkedAccount.toObject(m.accounts[j], o, q + 1);
                }
            }
            if (m.acAuthTokens != null && $Object.hasOwnProperty.call(m, "acAuthTokens")) {
                d.acAuthTokens = o.bytes === $String ? $util.base64.encode(m.acAuthTokens, 0, m.acAuthTokens.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.acAuthTokens) : m.acAuthTokens;
            }
            if (m.acErrorCode != null && $Object.hasOwnProperty.call(m, "acErrorCode")) {
                d.acErrorCode = m.acErrorCode;
            }
            return d;
        };

        BotLinkedAccountsMetadata.prototype.toJSON = function() {
            return BotLinkedAccountsMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotLinkedAccountsMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotLinkedAccountsMetadata";
        };

        return BotLinkedAccountsMetadata;
    })();

    AICommon.BotPromptSuggestion = (function() {

        const BotPromptSuggestion = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotPromptSuggestion.prototype.prompt = "";
        BotPromptSuggestion.prototype.promptId = "";

        BotPromptSuggestion.create = function(properties) {
            return new BotPromptSuggestion(properties);
        };

        BotPromptSuggestion.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.prompt != null && $Object.hasOwnProperty.call(m, "prompt"))
                w.uint32(10).string(m.prompt);
            if (m.promptId != null && $Object.hasOwnProperty.call(m, "promptId"))
                w.uint32(18).string(m.promptId);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotPromptSuggestion.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotPromptSuggestion();
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
                        m.prompt = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.promptId = r.string();
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

        BotPromptSuggestion.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotPromptSuggestion)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotPromptSuggestion: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotPromptSuggestion();
            if (d.prompt != null) {
                m.prompt = $String(d.prompt);
            }
            if (d.promptId != null) {
                m.promptId = $String(d.promptId);
            }
            return m;
        };

        BotPromptSuggestion.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.prompt = "";
                d.promptId = "";
            }
            if (m.prompt != null && $Object.hasOwnProperty.call(m, "prompt")) {
                d.prompt = m.prompt;
            }
            if (m.promptId != null && $Object.hasOwnProperty.call(m, "promptId")) {
                d.promptId = m.promptId;
            }
            return d;
        };

        BotPromptSuggestion.prototype.toJSON = function() {
            return BotPromptSuggestion.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotPromptSuggestion.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotPromptSuggestion";
        };

        return BotPromptSuggestion;
    })();

    AICommon.BotPromptSuggestions = (function() {

        const BotPromptSuggestions = function (p) {
            this.suggestions = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotPromptSuggestions.prototype.suggestions = $util.emptyArray;

        BotPromptSuggestions.create = function(properties) {
            return new BotPromptSuggestions(properties);
        };

        BotPromptSuggestions.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.suggestions != null && m.suggestions.length) {
                for (var i = 0; i < m.suggestions.length; ++i)
                    $root.AICommon.BotPromptSuggestion.encode(m.suggestions[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotPromptSuggestions.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotPromptSuggestions();
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
                        if (!(m.suggestions && m.suggestions.length))
                            m.suggestions = [];
                        m.suggestions.push($root.AICommon.BotPromptSuggestion.decode(r, r.uint32(), $undefined, q + 1));
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

        BotPromptSuggestions.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotPromptSuggestions)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotPromptSuggestions: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotPromptSuggestions();
            if (d.suggestions) {
                if (!$Array.isArray(d.suggestions))
                    throw $TypeError(".AICommon.BotPromptSuggestions.suggestions: array expected");
                m.suggestions = $Array(d.suggestions.length);
                for (var i = 0; i < d.suggestions.length; ++i) {
                    if (!$util.isObject(d.suggestions[i]))
                        throw $TypeError(".AICommon.BotPromptSuggestions.suggestions: object expected");
                    m.suggestions[i] = $root.AICommon.BotPromptSuggestion.fromObject(d.suggestions[i], q + 1);
                }
            }
            return m;
        };

        BotPromptSuggestions.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.suggestions = [];
            }
            if (m.suggestions && m.suggestions.length) {
                d.suggestions = $Array(m.suggestions.length);
                for (var j = 0; j < m.suggestions.length; ++j) {
                    d.suggestions[j] = $root.AICommon.BotPromptSuggestion.toObject(m.suggestions[j], o, q + 1);
                }
            }
            return d;
        };

        BotPromptSuggestions.prototype.toJSON = function() {
            return BotPromptSuggestions.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotPromptSuggestions.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotPromptSuggestions";
        };

        return BotPromptSuggestions;
    })();

    AICommon.BotSuggestedPromptMetadata = (function() {

        const BotSuggestedPromptMetadata = function (p) {
            this.suggestedPrompts = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotSuggestedPromptMetadata.prototype.suggestedPrompts = $util.emptyArray;
        BotSuggestedPromptMetadata.prototype.selectedPromptIndex = 0;
        BotSuggestedPromptMetadata.prototype.promptSuggestions = null;
        BotSuggestedPromptMetadata.prototype.selectedPromptId = "";

        BotSuggestedPromptMetadata.create = function(properties) {
            return new BotSuggestedPromptMetadata(properties);
        };

        BotSuggestedPromptMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.suggestedPrompts != null && m.suggestedPrompts.length) {
                for (var i = 0; i < m.suggestedPrompts.length; ++i)
                    w.uint32(10).string(m.suggestedPrompts[i]);
            }
            if (m.selectedPromptIndex != null && $Object.hasOwnProperty.call(m, "selectedPromptIndex"))
                w.uint32(16).uint32(m.selectedPromptIndex);
            if (m.promptSuggestions != null && $Object.hasOwnProperty.call(m, "promptSuggestions"))
                $root.AICommon.BotPromptSuggestions.encode(m.promptSuggestions, w.uint32(26).fork(), q + 1).ldelim();
            if (m.selectedPromptId != null && $Object.hasOwnProperty.call(m, "selectedPromptId"))
                w.uint32(34).string(m.selectedPromptId);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotSuggestedPromptMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotSuggestedPromptMetadata();
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
                        if (!(m.suggestedPrompts && m.suggestedPrompts.length))
                            m.suggestedPrompts = [];
                        m.suggestedPrompts.push(r.string());
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.selectedPromptIndex = r.uint32();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.promptSuggestions = $root.AICommon.BotPromptSuggestions.decode(r, r.uint32(), $undefined, q + 1, m.promptSuggestions);
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.selectedPromptId = r.string();
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

        BotSuggestedPromptMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotSuggestedPromptMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotSuggestedPromptMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotSuggestedPromptMetadata();
            if (d.suggestedPrompts) {
                if (!$Array.isArray(d.suggestedPrompts))
                    throw $TypeError(".AICommon.BotSuggestedPromptMetadata.suggestedPrompts: array expected");
                m.suggestedPrompts = $Array(d.suggestedPrompts.length);
                for (var i = 0; i < d.suggestedPrompts.length; ++i) {
                    m.suggestedPrompts[i] = $String(d.suggestedPrompts[i]);
                }
            }
            if (d.selectedPromptIndex != null) {
                m.selectedPromptIndex = d.selectedPromptIndex >>> 0;
            }
            if (d.promptSuggestions != null) {
                if (!$util.isObject(d.promptSuggestions))
                    throw $TypeError(".AICommon.BotSuggestedPromptMetadata.promptSuggestions: object expected");
                m.promptSuggestions = $root.AICommon.BotPromptSuggestions.fromObject(d.promptSuggestions, q + 1);
            }
            if (d.selectedPromptId != null) {
                m.selectedPromptId = $String(d.selectedPromptId);
            }
            return m;
        };

        BotSuggestedPromptMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.suggestedPrompts = [];
            }
            if (o.defaults) {
                d.selectedPromptIndex = 0;
                d.promptSuggestions = null;
                d.selectedPromptId = "";
            }
            if (m.suggestedPrompts && m.suggestedPrompts.length) {
                d.suggestedPrompts = $Array(m.suggestedPrompts.length);
                for (var j = 0; j < m.suggestedPrompts.length; ++j) {
                    d.suggestedPrompts[j] = m.suggestedPrompts[j];
                }
            }
            if (m.selectedPromptIndex != null && $Object.hasOwnProperty.call(m, "selectedPromptIndex")) {
                d.selectedPromptIndex = m.selectedPromptIndex;
            }
            if (m.promptSuggestions != null && $Object.hasOwnProperty.call(m, "promptSuggestions")) {
                d.promptSuggestions = $root.AICommon.BotPromptSuggestions.toObject(m.promptSuggestions, o, q + 1);
            }
            if (m.selectedPromptId != null && $Object.hasOwnProperty.call(m, "selectedPromptId")) {
                d.selectedPromptId = m.selectedPromptId;
            }
            return d;
        };

        BotSuggestedPromptMetadata.prototype.toJSON = function() {
            return BotSuggestedPromptMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotSuggestedPromptMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotSuggestedPromptMetadata";
        };

        return BotSuggestedPromptMetadata;
    })();

    AICommon.BotPluginMetadata = (function() {

        const BotPluginMetadata = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BotPluginMetadata.prototype.provider = 0;
        BotPluginMetadata.prototype.pluginType = 0;
        BotPluginMetadata.prototype.thumbnailCdnUrl = "";
        BotPluginMetadata.prototype.profilePhotoCdnUrl = "";
        BotPluginMetadata.prototype.searchProviderUrl = "";
        BotPluginMetadata.prototype.referenceIndex = 0;
        BotPluginMetadata.prototype.expectedLinksCount = 0;
        BotPluginMetadata.prototype.searchQuery = "";
        BotPluginMetadata.prototype.parentPluginMessageKey = null;
        BotPluginMetadata.prototype.deprecatedField = 0;
        BotPluginMetadata.prototype.parentPluginType = 0;
        BotPluginMetadata.prototype.faviconCdnUrl = "";

        BotPluginMetadata.create = function(properties) {
            return new BotPluginMetadata(properties);
        };

        BotPluginMetadata.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.provider != null && $Object.hasOwnProperty.call(m, "provider"))
                w.uint32(8).int32(m.provider);
            if (m.pluginType != null && $Object.hasOwnProperty.call(m, "pluginType"))
                w.uint32(16).int32(m.pluginType);
            if (m.thumbnailCdnUrl != null && $Object.hasOwnProperty.call(m, "thumbnailCdnUrl"))
                w.uint32(26).string(m.thumbnailCdnUrl);
            if (m.profilePhotoCdnUrl != null && $Object.hasOwnProperty.call(m, "profilePhotoCdnUrl"))
                w.uint32(34).string(m.profilePhotoCdnUrl);
            if (m.searchProviderUrl != null && $Object.hasOwnProperty.call(m, "searchProviderUrl"))
                w.uint32(42).string(m.searchProviderUrl);
            if (m.referenceIndex != null && $Object.hasOwnProperty.call(m, "referenceIndex"))
                w.uint32(48).uint32(m.referenceIndex);
            if (m.expectedLinksCount != null && $Object.hasOwnProperty.call(m, "expectedLinksCount"))
                w.uint32(56).uint32(m.expectedLinksCount);
            if (m.searchQuery != null && $Object.hasOwnProperty.call(m, "searchQuery"))
                w.uint32(74).string(m.searchQuery);
            if (m.parentPluginMessageKey != null && $Object.hasOwnProperty.call(m, "parentPluginMessageKey"))
                $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.encode(m.parentPluginMessageKey, w.uint32(82).fork(), q + 1).ldelim();
            if (m.deprecatedField != null && $Object.hasOwnProperty.call(m, "deprecatedField"))
                w.uint32(88).int32(m.deprecatedField);
            if (m.parentPluginType != null && $Object.hasOwnProperty.call(m, "parentPluginType"))
                w.uint32(96).int32(m.parentPluginType);
            if (m.faviconCdnUrl != null && $Object.hasOwnProperty.call(m, "faviconCdnUrl"))
                w.uint32(106).string(m.faviconCdnUrl);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BotPluginMetadata.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.BotPluginMetadata(), v;
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
                        v = r.int32();
                        if ($root.AICommon.BotPluginMetadata.SearchProvider[v] !== $undefined) {
                            m.provider = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotPluginMetadata.PluginType[v] !== $undefined) {
                            m.pluginType = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.thumbnailCdnUrl = r.string();
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.profilePhotoCdnUrl = r.string();
                        continue;
                    }
                case 5: {
                        if (u !== 2)
                            break;
                        m.searchProviderUrl = r.string();
                        continue;
                    }
                case 6: {
                        if (u !== 0)
                            break;
                        m.referenceIndex = r.uint32();
                        continue;
                    }
                case 7: {
                        if (u !== 0)
                            break;
                        m.expectedLinksCount = r.uint32();
                        continue;
                    }
                case 9: {
                        if (u !== 2)
                            break;
                        m.searchQuery = r.string();
                        continue;
                    }
                case 10: {
                        if (u !== 2)
                            break;
                        m.parentPluginMessageKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.decode(r, r.uint32(), $undefined, q + 1, m.parentPluginMessageKey);
                        continue;
                    }
                case 11: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotPluginMetadata.PluginType[v] !== $undefined) {
                            m.deprecatedField = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 12: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.AICommon.BotPluginMetadata.PluginType[v] !== $undefined) {
                            m.parentPluginType = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 13: {
                        if (u !== 2)
                            break;
                        m.faviconCdnUrl = r.string();
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

        BotPluginMetadata.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.BotPluginMetadata)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.BotPluginMetadata: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.AICommon.BotPluginMetadata();
            switch (d.provider) {
            case "UNKNOWN":
            case 0:
                m.provider = 0;
                break;
            case "BING":
            case 1:
                m.provider = 1;
                break;
            case "GOOGLE":
            case 2:
                m.provider = 2;
                break;
            case "SUPPORT":
            case 3:
                m.provider = 3;
                break;
            default:
            }
            switch (d.pluginType) {
            case "UNKNOWN_PLUGIN":
            case 0:
                m.pluginType = 0;
                break;
            case "REELS":
            case 1:
                m.pluginType = 1;
                break;
            case "SEARCH":
            case 2:
                m.pluginType = 2;
                break;
            default:
            }
            if (d.thumbnailCdnUrl != null) {
                m.thumbnailCdnUrl = $String(d.thumbnailCdnUrl);
            }
            if (d.profilePhotoCdnUrl != null) {
                m.profilePhotoCdnUrl = $String(d.profilePhotoCdnUrl);
            }
            if (d.searchProviderUrl != null) {
                m.searchProviderUrl = $String(d.searchProviderUrl);
            }
            if (d.referenceIndex != null) {
                m.referenceIndex = d.referenceIndex >>> 0;
            }
            if (d.expectedLinksCount != null) {
                m.expectedLinksCount = d.expectedLinksCount >>> 0;
            }
            if (d.searchQuery != null) {
                m.searchQuery = $String(d.searchQuery);
            }
            if (d.parentPluginMessageKey != null) {
                if (!$util.isObject(d.parentPluginMessageKey))
                    throw $TypeError(".AICommon.BotPluginMetadata.parentPluginMessageKey: object expected");
                m.parentPluginMessageKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.fromObject(d.parentPluginMessageKey, q + 1);
            }
            switch (d.deprecatedField) {
            case "UNKNOWN_PLUGIN":
            case 0:
                m.deprecatedField = 0;
                break;
            case "REELS":
            case 1:
                m.deprecatedField = 1;
                break;
            case "SEARCH":
            case 2:
                m.deprecatedField = 2;
                break;
            default:
            }
            switch (d.parentPluginType) {
            case "UNKNOWN_PLUGIN":
            case 0:
                m.parentPluginType = 0;
                break;
            case "REELS":
            case 1:
                m.parentPluginType = 1;
                break;
            case "SEARCH":
            case 2:
                m.parentPluginType = 2;
                break;
            default:
            }
            if (d.faviconCdnUrl != null) {
                m.faviconCdnUrl = $String(d.faviconCdnUrl);
            }
            return m;
        };

        BotPluginMetadata.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.provider = o.enums === $String ? "UNKNOWN" : 0;
                d.pluginType = o.enums === $String ? "UNKNOWN_PLUGIN" : 0;
                d.thumbnailCdnUrl = "";
                d.profilePhotoCdnUrl = "";
                d.searchProviderUrl = "";
                d.referenceIndex = 0;
                d.expectedLinksCount = 0;
                d.searchQuery = "";
                d.parentPluginMessageKey = null;
                d.deprecatedField = o.enums === $String ? "UNKNOWN_PLUGIN" : 0;
                d.parentPluginType = o.enums === $String ? "UNKNOWN_PLUGIN" : 0;
                d.faviconCdnUrl = "";
            }
            if (m.provider != null && $Object.hasOwnProperty.call(m, "provider")) {
                d.provider = o.enums === $String ? $root.AICommon.BotPluginMetadata.SearchProvider[m.provider] === $undefined ? m.provider : $root.AICommon.BotPluginMetadata.SearchProvider[m.provider] : m.provider;
            }
            if (m.pluginType != null && $Object.hasOwnProperty.call(m, "pluginType")) {
                d.pluginType = o.enums === $String ? $root.AICommon.BotPluginMetadata.PluginType[m.pluginType] === $undefined ? m.pluginType : $root.AICommon.BotPluginMetadata.PluginType[m.pluginType] : m.pluginType;
            }
            if (m.thumbnailCdnUrl != null && $Object.hasOwnProperty.call(m, "thumbnailCdnUrl")) {
                d.thumbnailCdnUrl = m.thumbnailCdnUrl;
            }
            if (m.profilePhotoCdnUrl != null && $Object.hasOwnProperty.call(m, "profilePhotoCdnUrl")) {
                d.profilePhotoCdnUrl = m.profilePhotoCdnUrl;
            }
            if (m.searchProviderUrl != null && $Object.hasOwnProperty.call(m, "searchProviderUrl")) {
                d.searchProviderUrl = m.searchProviderUrl;
            }
            if (m.referenceIndex != null && $Object.hasOwnProperty.call(m, "referenceIndex")) {
                d.referenceIndex = m.referenceIndex;
            }
            if (m.expectedLinksCount != null && $Object.hasOwnProperty.call(m, "expectedLinksCount")) {
                d.expectedLinksCount = m.expectedLinksCount;
            }
            if (m.searchQuery != null && $Object.hasOwnProperty.call(m, "searchQuery")) {
                d.searchQuery = m.searchQuery;
            }
            if (m.parentPluginMessageKey != null && $Object.hasOwnProperty.call(m, "parentPluginMessageKey")) {
                d.parentPluginMessageKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.toObject(m.parentPluginMessageKey, o, q + 1);
            }
            if (m.deprecatedField != null && $Object.hasOwnProperty.call(m, "deprecatedField")) {
                d.deprecatedField = o.enums === $String ? $root.AICommon.BotPluginMetadata.PluginType[m.deprecatedField] === $undefined ? m.deprecatedField : $root.AICommon.BotPluginMetadata.PluginType[m.deprecatedField] : m.deprecatedField;
            }
            if (m.parentPluginType != null && $Object.hasOwnProperty.call(m, "parentPluginType")) {
                d.parentPluginType = o.enums === $String ? $root.AICommon.BotPluginMetadata.PluginType[m.parentPluginType] === $undefined ? m.parentPluginType : $root.AICommon.BotPluginMetadata.PluginType[m.parentPluginType] : m.parentPluginType;
            }
            if (m.faviconCdnUrl != null && $Object.hasOwnProperty.call(m, "faviconCdnUrl")) {
                d.faviconCdnUrl = m.faviconCdnUrl;
            }
            return d;
        };

        BotPluginMetadata.prototype.toJSON = function() {
            return BotPluginMetadata.toObject(this, $protobuf.util.toJSONOptions);
        };

        BotPluginMetadata.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.BotPluginMetadata";
        };

        BotPluginMetadata.PluginType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_PLUGIN"] = 0;
            values[valuesById[1] = "REELS"] = 1;
            values[valuesById[2] = "SEARCH"] = 2;
            return values;
        })();

        BotPluginMetadata.SearchProvider = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "BING"] = 1;
            values[valuesById[2] = "GOOGLE"] = 2;
            values[valuesById[3] = "SUPPORT"] = 3;
            return values;
        })();

        return BotPluginMetadata;
    })();

    AICommon.SessionTransparencyType = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_TYPE"] = 0;
        values[valuesById[1] = "NY_AI_SAFETY_DISCLAIMER"] = 1;
        return values;
    })();

    AICommon.AISubscriptionRequestType = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "UNSPECIFIED"] = 0;
        values[valuesById[1] = "THINK_HARD"] = 1;
        values[valuesById[2] = "IMAGE_GEN"] = 2;
        values[valuesById[3] = "VIDEO_GEN"] = 3;
        return values;
    })();

    AICommon.BotSessionSource = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "NULL_STATE"] = 1;
        values[valuesById[2] = "TYPEAHEAD"] = 2;
        values[valuesById[3] = "USER_INPUT"] = 3;
        values[valuesById[4] = "EMU_FLASH"] = 4;
        values[valuesById[5] = "EMU_FLASH_FOLLOWUP"] = 5;
        values[valuesById[6] = "VOICE"] = 6;
        values[valuesById[7] = "AI_HOME_SESSION"] = 7;
        return values;
    })();

    AICommon.BotMetricsThreadEntryPoint = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[1] = "AI_TAB_THREAD"] = 1;
        values[valuesById[2] = "AI_HOME_THREAD"] = 2;
        values[valuesById[3] = "AI_DEEPLINK_IMMERSIVE_THREAD"] = 3;
        values[valuesById[4] = "AI_DEEPLINK_THREAD"] = 4;
        values[valuesById[5] = "ASK_META_AI_CONTEXT_MENU_THREAD"] = 5;
        return values;
    })();

    AICommon.BotMetricsEntryPoint = (function() {
        const valuesById = $Object.create(null), values = $Object.create(valuesById);
        values[valuesById[0] = "UNDEFINED_ENTRY_POINT"] = 0;
        values[valuesById[1] = "FAVICON"] = 1;
        values[valuesById[2] = "CHATLIST"] = 2;
        values[valuesById[3] = "AISEARCH_NULL_STATE_PAPER_PLANE"] = 3;
        values[valuesById[4] = "AISEARCH_NULL_STATE_SUGGESTION"] = 4;
        values[valuesById[5] = "AISEARCH_TYPE_AHEAD_SUGGESTION"] = 5;
        values[valuesById[6] = "AISEARCH_TYPE_AHEAD_PAPER_PLANE"] = 6;
        values[valuesById[7] = "AISEARCH_TYPE_AHEAD_RESULT_CHATLIST"] = 7;
        values[valuesById[8] = "AISEARCH_TYPE_AHEAD_RESULT_MESSAGES"] = 8;
        values[valuesById[9] = "AIVOICE_SEARCH_BAR"] = 9;
        values[valuesById[10] = "AIVOICE_FAVICON"] = 10;
        values[valuesById[11] = "AISTUDIO"] = 11;
        values[valuesById[12] = "DEEPLINK"] = 12;
        values[valuesById[13] = "NOTIFICATION"] = 13;
        values[valuesById[14] = "PROFILE_MESSAGE_BUTTON"] = 14;
        values[valuesById[15] = "FORWARD"] = 15;
        values[valuesById[16] = "APP_SHORTCUT"] = 16;
        values[valuesById[17] = "FF_FAMILY"] = 17;
        values[valuesById[18] = "AI_TAB"] = 18;
        values[valuesById[19] = "AI_HOME"] = 19;
        values[valuesById[20] = "AI_DEEPLINK_IMMERSIVE"] = 20;
        values[valuesById[21] = "AI_DEEPLINK"] = 21;
        values[valuesById[22] = "META_AI_CHAT_SHORTCUT_AI_STUDIO"] = 22;
        values[valuesById[23] = "UGC_CHAT_SHORTCUT_AI_STUDIO"] = 23;
        values[valuesById[24] = "NEW_CHAT_AI_STUDIO"] = 24;
        values[valuesById[25] = "AIVOICE_FAVICON_CALL_HISTORY"] = 25;
        values[valuesById[26] = "ASK_META_AI_CONTEXT_MENU"] = 26;
        values[valuesById[27] = "ASK_META_AI_CONTEXT_MENU_1ON1"] = 27;
        values[valuesById[28] = "ASK_META_AI_CONTEXT_MENU_GROUP"] = 28;
        values[valuesById[29] = "INVOKE_META_AI_1ON1"] = 29;
        values[valuesById[30] = "INVOKE_META_AI_GROUP"] = 30;
        values[valuesById[31] = "META_AI_FORWARD"] = 31;
        values[valuesById[32] = "NEW_CHAT_AI_CONTACT"] = 32;
        values[valuesById[33] = "MESSAGE_QUICK_ACTION_1_ON_1_CHAT"] = 33;
        values[valuesById[34] = "MESSAGE_QUICK_ACTION_GROUP_CHAT"] = 34;
        values[valuesById[35] = "ATTACHMENT_TRAY_1_ON_1_CHAT"] = 35;
        values[valuesById[36] = "ATTACHMENT_TRAY_GROUP_CHAT"] = 36;
        values[valuesById[37] = "ASK_META_AI_MEDIA_VIEWER_1ON1"] = 37;
        values[valuesById[38] = "ASK_META_AI_MEDIA_VIEWER_GROUP"] = 38;
        values[valuesById[39] = "MEDIA_PICKER_1_ON_1_CHAT"] = 39;
        values[valuesById[40] = "MEDIA_PICKER_GROUP_CHAT"] = 40;
        values[valuesById[41] = "ASK_META_AI_NO_SEARCH_RESULTS"] = 41;
        values[valuesById[45] = "META_AI_SETTINGS"] = 45;
        values[valuesById[46] = "WEB_INTRO_PANEL"] = 46;
        values[valuesById[47] = "WEB_NAVIGATION_BAR"] = 47;
        values[valuesById[54] = "GROUP_MEMBER"] = 54;
        values[valuesById[55] = "CHATLIST_SEARCH"] = 55;
        values[valuesById[56] = "NEW_CHAT_LIST"] = 56;
        values[valuesById[57] = "CONTACTS_TAB"] = 57;
        return values;
    })();

    AICommon.SideBySideSurveyCardImpressionEventData = (function() {

        const SideBySideSurveyCardImpressionEventData = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SideBySideSurveyCardImpressionEventData.create = function(properties) {
            return new SideBySideSurveyCardImpressionEventData(properties);
        };

        SideBySideSurveyCardImpressionEventData.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SideBySideSurveyCardImpressionEventData.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.AICommon.SideBySideSurveyCardImpressionEventData();
            while (r.pos < c) {
                var s = r.pos;
                var t = r.tag();
                if (t === z) {
                    z = $undefined;
                    break;
                }
                r.skipType(t & 7, q, t);
                if (!r.discardUnknown) {
                    $util.makeProp(m, "$unknowns", false);
                    (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                }
            }
            if (z !== $undefined)
                throw $Error("missing end group");
            return m;
        };

        SideBySideSurveyCardImpressionEventData.fromObject = function (d, q) {
            if (d instanceof $root.AICommon.SideBySideSurveyCardImpressionEventData)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".AICommon.SideBySideSurveyCardImpressionEventData: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            return new $root.AICommon.SideBySideSurveyCardImpressionEventData();
        };

        SideBySideSurveyCardImpressionEventData.toObject = function () {
            return {};
        };

        SideBySideSurveyCardImpressionEventData.prototype.toJSON = function() {
            return SideBySideSurveyCardImpressionEventData.toObject(this, $protobuf.util.toJSONOptions);
        };

        SideBySideSurveyCardImpressionEventData.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/AICommon.SideBySideSurveyCardImpressionEventData";
        };

        return SideBySideSurveyCardImpressionEventData;
    })();

    return AICommon;
})();

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
