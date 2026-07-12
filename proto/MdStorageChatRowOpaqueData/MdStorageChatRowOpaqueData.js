/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $parseInt = $util.global.parseInt, $Number = $util.global.Number, $BigInt = $util.global.BigInt, $Boolean = $util.global.Boolean, $Array = $util.global.Array;

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

export const MdStorageChatRowOpaqueData = $root.MdStorageChatRowOpaqueData = (() => {

    const MdStorageChatRowOpaqueData = {};

    MdStorageChatRowOpaqueData.ChatRowOpaqueData = (function() {

        const ChatRowOpaqueData = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        ChatRowOpaqueData.prototype.draftMessage = null;

        ChatRowOpaqueData.create = function(properties) {
            return new ChatRowOpaqueData(properties);
        };

        ChatRowOpaqueData.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.draftMessage != null && $Object.hasOwnProperty.call(m, "draftMessage"))
                $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.encode(m.draftMessage, w.uint32(10).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        ChatRowOpaqueData.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData();
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
                        m.draftMessage = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.decode(r, r.uint32(), $undefined, q + 1, m.draftMessage);
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

        ChatRowOpaqueData.fromObject = function (d, q) {
            if (d instanceof $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".MdStorageChatRowOpaqueData.ChatRowOpaqueData: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData();
            if (d.draftMessage != null) {
                if (!$util.isObject(d.draftMessage))
                    throw $TypeError(".MdStorageChatRowOpaqueData.ChatRowOpaqueData.draftMessage: object expected");
                m.draftMessage = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.fromObject(d.draftMessage, q + 1);
            }
            return m;
        };

        ChatRowOpaqueData.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.draftMessage = null;
            }
            if (m.draftMessage != null && $Object.hasOwnProperty.call(m, "draftMessage")) {
                d.draftMessage = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.toObject(m.draftMessage, o, q + 1);
            }
            return d;
        };

        ChatRowOpaqueData.prototype.toJSON = function() {
            return ChatRowOpaqueData.toObject(this, $protobuf.util.toJSONOptions);
        };

        ChatRowOpaqueData.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/MdStorageChatRowOpaqueData.ChatRowOpaqueData";
        };

        ChatRowOpaqueData.DraftMessage = (function() {

            const DraftMessage = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            DraftMessage.prototype.text = "";
            DraftMessage.prototype.omittedUrl = "";
            DraftMessage.prototype.ctwaContextLinkData = null;
            DraftMessage.prototype.ctwaContext = null;
            DraftMessage.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            DraftMessage.create = function(properties) {
                return new DraftMessage(properties);
            };

            DraftMessage.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.text != null && $Object.hasOwnProperty.call(m, "text"))
                    w.uint32(10).string(m.text);
                if (m.omittedUrl != null && $Object.hasOwnProperty.call(m, "omittedUrl"))
                    w.uint32(18).string(m.omittedUrl);
                if (m.ctwaContextLinkData != null && $Object.hasOwnProperty.call(m, "ctwaContextLinkData"))
                    $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.encode(m.ctwaContextLinkData, w.uint32(26).fork(), q + 1).ldelim();
                if (m.ctwaContext != null && $Object.hasOwnProperty.call(m, "ctwaContext"))
                    $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.encode(m.ctwaContext, w.uint32(34).fork(), q + 1).ldelim();
                if (m.timestamp != null && $Object.hasOwnProperty.call(m, "timestamp"))
                    w.uint32(40).int64(m.timestamp);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            DraftMessage.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage();
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
                            m.omittedUrl = r.string();
                            continue;
                        }
                    case 3: {
                            if (u !== 2)
                                break;
                            m.ctwaContextLinkData = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.decode(r, r.uint32(), $undefined, q + 1, m.ctwaContextLinkData);
                            continue;
                        }
                    case 4: {
                            if (u !== 2)
                                break;
                            m.ctwaContext = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.decode(r, r.uint32(), $undefined, q + 1, m.ctwaContext);
                            continue;
                        }
                    case 5: {
                            if (u !== 0)
                                break;
                            m.timestamp = r.int64();
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

            DraftMessage.fromObject = function (d, q) {
                if (d instanceof $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage();
                if (d.text != null) {
                    m.text = $String(d.text);
                }
                if (d.omittedUrl != null) {
                    m.omittedUrl = $String(d.omittedUrl);
                }
                if (d.ctwaContextLinkData != null) {
                    if (!$util.isObject(d.ctwaContextLinkData))
                        throw $TypeError(".MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ctwaContextLinkData: object expected");
                    m.ctwaContextLinkData = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.fromObject(d.ctwaContextLinkData, q + 1);
                }
                if (d.ctwaContext != null) {
                    if (!$util.isObject(d.ctwaContext))
                        throw $TypeError(".MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ctwaContext: object expected");
                    m.ctwaContext = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.fromObject(d.ctwaContext, q + 1);
                }
                if (d.timestamp != null) {
                    if ($util.Long)
                        m.timestamp = $util.Long.fromValue(d.timestamp, false);
                    else if (typeof d.timestamp === "string")
                        m.timestamp = $parseInt(d.timestamp, 10);
                    else if (typeof d.timestamp === "number")
                        m.timestamp = d.timestamp;
                    else if (typeof d.timestamp === "object")
                        m.timestamp = new $util.LongBits(d.timestamp.low >>> 0, d.timestamp.high >>> 0).toNumber();
                }
                return m;
            };

            DraftMessage.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.text = "";
                    d.omittedUrl = "";
                    d.ctwaContextLinkData = null;
                    d.ctwaContext = null;
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, false);
                        d.timestamp = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                    } else
                        d.timestamp = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (m.text != null && $Object.hasOwnProperty.call(m, "text")) {
                    d.text = m.text;
                }
                if (m.omittedUrl != null && $Object.hasOwnProperty.call(m, "omittedUrl")) {
                    d.omittedUrl = m.omittedUrl;
                }
                if (m.ctwaContextLinkData != null && $Object.hasOwnProperty.call(m, "ctwaContextLinkData")) {
                    d.ctwaContextLinkData = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.toObject(m.ctwaContextLinkData, o, q + 1);
                }
                if (m.ctwaContext != null && $Object.hasOwnProperty.call(m, "ctwaContext")) {
                    d.ctwaContext = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.toObject(m.ctwaContext, o, q + 1);
                }
                if (m.timestamp != null && $Object.hasOwnProperty.call(m, "timestamp")) {
                    if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                        d.timestamp = typeof m.timestamp === "number" ? $BigInt(m.timestamp) : $util.Long.fromBits(m.timestamp.low >>> 0, m.timestamp.high >>> 0, false).toBigInt();
                    else if (typeof m.timestamp === "number")
                        d.timestamp = o.longs === $String ? $String(m.timestamp) : m.timestamp;
                    else
                        d.timestamp = o.longs === String ? longToString(m.timestamp) : o.longs === Number ? longToNumber(m.timestamp) : m.timestamp;
                }
                return d;
            };

            DraftMessage.prototype.toJSON = function() {
                return DraftMessage.toObject(this, $protobuf.util.toJSONOptions);
            };

            DraftMessage.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage";
            };

            DraftMessage.CtwaContextData = (function() {

                const CtwaContextData = function (p) {
                    if (p)
                        for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                };

                CtwaContextData.prototype.conversionSource = "";
                CtwaContextData.prototype.conversionData = $util.newBuffer([]);
                CtwaContextData.prototype.sourceUrl = "";
                CtwaContextData.prototype.sourceId = "";
                CtwaContextData.prototype.sourceType = "";
                CtwaContextData.prototype.title = "";
                CtwaContextData.prototype.description = "";
                CtwaContextData.prototype.thumbnail = "";
                CtwaContextData.prototype.thumbnailUrl = "";
                CtwaContextData.prototype.mediaType = 0;
                CtwaContextData.prototype.mediaUrl = "";
                CtwaContextData.prototype.isSuspiciousLink = false;

                CtwaContextData.create = function(properties) {
                    return new CtwaContextData(properties);
                };

                CtwaContextData.encode = function (m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (m.conversionSource != null && $Object.hasOwnProperty.call(m, "conversionSource"))
                        w.uint32(10).string(m.conversionSource);
                    if (m.conversionData != null && $Object.hasOwnProperty.call(m, "conversionData"))
                        w.uint32(18).bytes(m.conversionData);
                    if (m.sourceUrl != null && $Object.hasOwnProperty.call(m, "sourceUrl"))
                        w.uint32(26).string(m.sourceUrl);
                    if (m.sourceId != null && $Object.hasOwnProperty.call(m, "sourceId"))
                        w.uint32(34).string(m.sourceId);
                    if (m.sourceType != null && $Object.hasOwnProperty.call(m, "sourceType"))
                        w.uint32(42).string(m.sourceType);
                    if (m.title != null && $Object.hasOwnProperty.call(m, "title"))
                        w.uint32(50).string(m.title);
                    if (m.description != null && $Object.hasOwnProperty.call(m, "description"))
                        w.uint32(58).string(m.description);
                    if (m.thumbnail != null && $Object.hasOwnProperty.call(m, "thumbnail"))
                        w.uint32(66).string(m.thumbnail);
                    if (m.thumbnailUrl != null && $Object.hasOwnProperty.call(m, "thumbnailUrl"))
                        w.uint32(74).string(m.thumbnailUrl);
                    if (m.mediaType != null && $Object.hasOwnProperty.call(m, "mediaType"))
                        w.uint32(80).int32(m.mediaType);
                    if (m.mediaUrl != null && $Object.hasOwnProperty.call(m, "mediaUrl"))
                        w.uint32(90).string(m.mediaUrl);
                    if (m.isSuspiciousLink != null && $Object.hasOwnProperty.call(m, "isSuspiciousLink"))
                        w.uint32(96).bool(m.isSuspiciousLink);
                    if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                        for (var i = 0; i < m.$unknowns.length; ++i)
                            w.raw(m.$unknowns[i]);
                    return w;
                };

                CtwaContextData.decode = function (r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === $undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData(), v;
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
                                m.conversionSource = r.string();
                                continue;
                            }
                        case 2: {
                                if (u !== 2)
                                    break;
                                m.conversionData = r.bytes();
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
                                m.sourceId = r.string();
                                continue;
                            }
                        case 5: {
                                if (u !== 2)
                                    break;
                                m.sourceType = r.string();
                                continue;
                            }
                        case 6: {
                                if (u !== 2)
                                    break;
                                m.title = r.string();
                                continue;
                            }
                        case 7: {
                                if (u !== 2)
                                    break;
                                m.description = r.string();
                                continue;
                            }
                        case 8: {
                                if (u !== 2)
                                    break;
                                m.thumbnail = r.string();
                                continue;
                            }
                        case 9: {
                                if (u !== 2)
                                    break;
                                m.thumbnailUrl = r.string();
                                continue;
                            }
                        case 10: {
                                if (u !== 0)
                                    break;
                                v = r.int32();
                                if ($root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType[v] !== $undefined) {
                                    m.mediaType = v;
                                } else if (!r.discardUnknown) {
                                    $util.makeProp(m, "$unknowns", false);
                                    (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                                }
                                continue;
                            }
                        case 11: {
                                if (u !== 2)
                                    break;
                                m.mediaUrl = r.string();
                                continue;
                            }
                        case 12: {
                                if (u !== 0)
                                    break;
                                m.isSuspiciousLink = r.bool();
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

                CtwaContextData.fromObject = function (d, q) {
                    if (d instanceof $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData)
                        return d;
                    if (!$util.isObject(d))
                        throw $TypeError(".MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData: object expected");
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var m = new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData();
                    if (d.conversionSource != null) {
                        m.conversionSource = $String(d.conversionSource);
                    }
                    if (d.conversionData != null) {
                        if (typeof d.conversionData === "string")
                            $util.base64.decode(d.conversionData, m.conversionData = $util.newBuffer($util.base64.length(d.conversionData)), 0);
                        else if (d.conversionData.length >= 0)
                            m.conversionData = d.conversionData;
                    }
                    if (d.sourceUrl != null) {
                        m.sourceUrl = $String(d.sourceUrl);
                    }
                    if (d.sourceId != null) {
                        m.sourceId = $String(d.sourceId);
                    }
                    if (d.sourceType != null) {
                        m.sourceType = $String(d.sourceType);
                    }
                    if (d.title != null) {
                        m.title = $String(d.title);
                    }
                    if (d.description != null) {
                        m.description = $String(d.description);
                    }
                    if (d.thumbnail != null) {
                        m.thumbnail = $String(d.thumbnail);
                    }
                    if (d.thumbnailUrl != null) {
                        m.thumbnailUrl = $String(d.thumbnailUrl);
                    }
                    switch (d.mediaType) {
                    case "NONE":
                    case 0:
                        m.mediaType = 0;
                        break;
                    case "IMAGE":
                    case 1:
                        m.mediaType = 1;
                        break;
                    case "VIDEO":
                    case 2:
                        m.mediaType = 2;
                        break;
                    default:
                    }
                    if (d.mediaUrl != null) {
                        m.mediaUrl = $String(d.mediaUrl);
                    }
                    if (d.isSuspiciousLink != null) {
                        m.isSuspiciousLink = $Boolean(d.isSuspiciousLink);
                    }
                    return m;
                };

                CtwaContextData.toObject = function (m, o, q) {
                    if (!o)
                        o = {};
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var d = {};
                    if (o.defaults) {
                        d.conversionSource = "";
                        if (o.bytes === $String)
                            d.conversionData = "";
                        else {
                            d.conversionData = [];
                            if (o.bytes !== $Array)
                                d.conversionData = $util.newBuffer(d.conversionData);
                        }
                        d.sourceUrl = "";
                        d.sourceId = "";
                        d.sourceType = "";
                        d.title = "";
                        d.description = "";
                        d.thumbnail = "";
                        d.thumbnailUrl = "";
                        d.mediaType = o.enums === $String ? "NONE" : 0;
                        d.mediaUrl = "";
                        d.isSuspiciousLink = false;
                    }
                    if (m.conversionSource != null && $Object.hasOwnProperty.call(m, "conversionSource")) {
                        d.conversionSource = m.conversionSource;
                    }
                    if (m.conversionData != null && $Object.hasOwnProperty.call(m, "conversionData")) {
                        d.conversionData = o.bytes === $String ? $util.base64.encode(m.conversionData, 0, m.conversionData.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.conversionData) : m.conversionData;
                    }
                    if (m.sourceUrl != null && $Object.hasOwnProperty.call(m, "sourceUrl")) {
                        d.sourceUrl = m.sourceUrl;
                    }
                    if (m.sourceId != null && $Object.hasOwnProperty.call(m, "sourceId")) {
                        d.sourceId = m.sourceId;
                    }
                    if (m.sourceType != null && $Object.hasOwnProperty.call(m, "sourceType")) {
                        d.sourceType = m.sourceType;
                    }
                    if (m.title != null && $Object.hasOwnProperty.call(m, "title")) {
                        d.title = m.title;
                    }
                    if (m.description != null && $Object.hasOwnProperty.call(m, "description")) {
                        d.description = m.description;
                    }
                    if (m.thumbnail != null && $Object.hasOwnProperty.call(m, "thumbnail")) {
                        d.thumbnail = m.thumbnail;
                    }
                    if (m.thumbnailUrl != null && $Object.hasOwnProperty.call(m, "thumbnailUrl")) {
                        d.thumbnailUrl = m.thumbnailUrl;
                    }
                    if (m.mediaType != null && $Object.hasOwnProperty.call(m, "mediaType")) {
                        d.mediaType = o.enums === $String ? $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType[m.mediaType] === $undefined ? m.mediaType : $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType[m.mediaType] : m.mediaType;
                    }
                    if (m.mediaUrl != null && $Object.hasOwnProperty.call(m, "mediaUrl")) {
                        d.mediaUrl = m.mediaUrl;
                    }
                    if (m.isSuspiciousLink != null && $Object.hasOwnProperty.call(m, "isSuspiciousLink")) {
                        d.isSuspiciousLink = m.isSuspiciousLink;
                    }
                    return d;
                };

                CtwaContextData.prototype.toJSON = function() {
                    return CtwaContextData.toObject(this, $protobuf.util.toJSONOptions);
                };

                CtwaContextData.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData";
                };

                CtwaContextData.ContextInfoExternalAdReplyInfoMediaType = (function() {
                    const valuesById = $Object.create(null), values = $Object.create(valuesById);
                    values[valuesById[0] = "NONE"] = 0;
                    values[valuesById[1] = "IMAGE"] = 1;
                    values[valuesById[2] = "VIDEO"] = 2;
                    return values;
                })();

                return CtwaContextData;
            })();

            DraftMessage.CtwaContextLinkData = (function() {

                const CtwaContextLinkData = function (p) {
                    if (p)
                        for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                };

                CtwaContextLinkData.prototype.context = "";
                CtwaContextLinkData.prototype.sourceUrl = "";
                CtwaContextLinkData.prototype.icebreaker = "";
                CtwaContextLinkData.prototype.phone = "";

                CtwaContextLinkData.create = function(properties) {
                    return new CtwaContextLinkData(properties);
                };

                CtwaContextLinkData.encode = function (m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (m.context != null && $Object.hasOwnProperty.call(m, "context"))
                        w.uint32(10).string(m.context);
                    if (m.sourceUrl != null && $Object.hasOwnProperty.call(m, "sourceUrl"))
                        w.uint32(18).string(m.sourceUrl);
                    if (m.icebreaker != null && $Object.hasOwnProperty.call(m, "icebreaker"))
                        w.uint32(26).string(m.icebreaker);
                    if (m.phone != null && $Object.hasOwnProperty.call(m, "phone"))
                        w.uint32(34).string(m.phone);
                    if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                        for (var i = 0; i < m.$unknowns.length; ++i)
                            w.raw(m.$unknowns[i]);
                    return w;
                };

                CtwaContextLinkData.decode = function (r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === $undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData();
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
                                m.context = r.string();
                                continue;
                            }
                        case 2: {
                                if (u !== 2)
                                    break;
                                m.sourceUrl = r.string();
                                continue;
                            }
                        case 3: {
                                if (u !== 2)
                                    break;
                                m.icebreaker = r.string();
                                continue;
                            }
                        case 4: {
                                if (u !== 2)
                                    break;
                                m.phone = r.string();
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

                CtwaContextLinkData.fromObject = function (d, q) {
                    if (d instanceof $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData)
                        return d;
                    if (!$util.isObject(d))
                        throw $TypeError(".MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData: object expected");
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var m = new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData();
                    if (d.context != null) {
                        m.context = $String(d.context);
                    }
                    if (d.sourceUrl != null) {
                        m.sourceUrl = $String(d.sourceUrl);
                    }
                    if (d.icebreaker != null) {
                        m.icebreaker = $String(d.icebreaker);
                    }
                    if (d.phone != null) {
                        m.phone = $String(d.phone);
                    }
                    return m;
                };

                CtwaContextLinkData.toObject = function (m, o, q) {
                    if (!o)
                        o = {};
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var d = {};
                    if (o.defaults) {
                        d.context = "";
                        d.sourceUrl = "";
                        d.icebreaker = "";
                        d.phone = "";
                    }
                    if (m.context != null && $Object.hasOwnProperty.call(m, "context")) {
                        d.context = m.context;
                    }
                    if (m.sourceUrl != null && $Object.hasOwnProperty.call(m, "sourceUrl")) {
                        d.sourceUrl = m.sourceUrl;
                    }
                    if (m.icebreaker != null && $Object.hasOwnProperty.call(m, "icebreaker")) {
                        d.icebreaker = m.icebreaker;
                    }
                    if (m.phone != null && $Object.hasOwnProperty.call(m, "phone")) {
                        d.phone = m.phone;
                    }
                    return d;
                };

                CtwaContextLinkData.prototype.toJSON = function() {
                    return CtwaContextLinkData.toObject(this, $protobuf.util.toJSONOptions);
                };

                CtwaContextLinkData.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData";
                };

                return CtwaContextLinkData;
            })();

            return DraftMessage;
        })();

        return ChatRowOpaqueData;
    })();

    return MdStorageChatRowOpaqueData;
})();

export {
  $root as default
};
