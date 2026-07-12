/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $Boolean = $util.global.Boolean, $parseInt = $util.global.parseInt, $String = $util.global.String, $Number = $util.global.Number, $BigInt = $util.global.BigInt;

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

export const Protocol = $root.Protocol = (() => {

    const Protocol = {};

    Protocol.LimitSharing = (function() {

        const LimitSharing = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        LimitSharing.prototype.sharingLimited = false;
        LimitSharing.prototype.trigger = 0;
        LimitSharing.prototype.limitSharingSettingTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        LimitSharing.prototype.initiatedByMe = false;

        LimitSharing.create = function(properties) {
            return new LimitSharing(properties);
        };

        LimitSharing.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.sharingLimited != null && $Object.hasOwnProperty.call(m, "sharingLimited"))
                w.uint32(8).bool(m.sharingLimited);
            if (m.trigger != null && $Object.hasOwnProperty.call(m, "trigger"))
                w.uint32(16).int32(m.trigger);
            if (m.limitSharingSettingTimestamp != null && $Object.hasOwnProperty.call(m, "limitSharingSettingTimestamp"))
                w.uint32(24).int64(m.limitSharingSettingTimestamp);
            if (m.initiatedByMe != null && $Object.hasOwnProperty.call(m, "initiatedByMe"))
                w.uint32(32).bool(m.initiatedByMe);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        LimitSharing.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Protocol.LimitSharing(), v;
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
                        m.sharingLimited = r.bool();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.Protocol.LimitSharing.TriggerType[v] !== $undefined) {
                            m.trigger = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        m.limitSharingSettingTimestamp = r.int64();
                        continue;
                    }
                case 4: {
                        if (u !== 0)
                            break;
                        m.initiatedByMe = r.bool();
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

        LimitSharing.fromObject = function (d, q) {
            if (d instanceof $root.Protocol.LimitSharing)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Protocol.LimitSharing: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Protocol.LimitSharing();
            if (d.sharingLimited != null) {
                m.sharingLimited = $Boolean(d.sharingLimited);
            }
            switch (d.trigger) {
            case "UNKNOWN":
            case 0:
                m.trigger = 0;
                break;
            case "CHAT_SETTING":
            case 1:
                m.trigger = 1;
                break;
            case "BIZ_SUPPORTS_FB_HOSTING":
            case 2:
                m.trigger = 2;
                break;
            case "UNKNOWN_GROUP":
            case 3:
                m.trigger = 3;
                break;
            default:
            }
            if (d.limitSharingSettingTimestamp != null) {
                if ($util.Long)
                    m.limitSharingSettingTimestamp = $util.Long.fromValue(d.limitSharingSettingTimestamp, false);
                else if (typeof d.limitSharingSettingTimestamp === "string")
                    m.limitSharingSettingTimestamp = $parseInt(d.limitSharingSettingTimestamp, 10);
                else if (typeof d.limitSharingSettingTimestamp === "number")
                    m.limitSharingSettingTimestamp = d.limitSharingSettingTimestamp;
                else if (typeof d.limitSharingSettingTimestamp === "object")
                    m.limitSharingSettingTimestamp = new $util.LongBits(d.limitSharingSettingTimestamp.low >>> 0, d.limitSharingSettingTimestamp.high >>> 0).toNumber();
            }
            if (d.initiatedByMe != null) {
                m.initiatedByMe = $Boolean(d.initiatedByMe);
            }
            return m;
        };

        LimitSharing.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.sharingLimited = false;
                d.trigger = o.enums === $String ? "UNKNOWN" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.limitSharingSettingTimestamp = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.limitSharingSettingTimestamp = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.initiatedByMe = false;
            }
            if (m.sharingLimited != null && $Object.hasOwnProperty.call(m, "sharingLimited")) {
                d.sharingLimited = m.sharingLimited;
            }
            if (m.trigger != null && $Object.hasOwnProperty.call(m, "trigger")) {
                d.trigger = o.enums === $String ? $root.Protocol.LimitSharing.TriggerType[m.trigger] === $undefined ? m.trigger : $root.Protocol.LimitSharing.TriggerType[m.trigger] : m.trigger;
            }
            if (m.limitSharingSettingTimestamp != null && $Object.hasOwnProperty.call(m, "limitSharingSettingTimestamp")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.limitSharingSettingTimestamp = typeof m.limitSharingSettingTimestamp === "number" ? $BigInt(m.limitSharingSettingTimestamp) : $util.Long.fromBits(m.limitSharingSettingTimestamp.low >>> 0, m.limitSharingSettingTimestamp.high >>> 0, false).toBigInt();
                else if (typeof m.limitSharingSettingTimestamp === "number")
                    d.limitSharingSettingTimestamp = o.longs === $String ? $String(m.limitSharingSettingTimestamp) : m.limitSharingSettingTimestamp;
                else
                    d.limitSharingSettingTimestamp = o.longs === String ? longToString(m.limitSharingSettingTimestamp) : o.longs === Number ? longToNumber(m.limitSharingSettingTimestamp) : m.limitSharingSettingTimestamp;
            }
            if (m.initiatedByMe != null && $Object.hasOwnProperty.call(m, "initiatedByMe")) {
                d.initiatedByMe = m.initiatedByMe;
            }
            return d;
        };

        LimitSharing.prototype.toJSON = function() {
            return LimitSharing.toObject(this, $protobuf.util.toJSONOptions);
        };

        LimitSharing.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Protocol.LimitSharing";
        };

        LimitSharing.TriggerType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHAT_SETTING"] = 1;
            values[valuesById[2] = "BIZ_SUPPORTS_FB_HOSTING"] = 2;
            values[valuesById[3] = "UNKNOWN_GROUP"] = 3;
            return values;
        })();

        return LimitSharing;
    })();

    Protocol.MessageKey = (function() {

        const MessageKey = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        MessageKey.prototype.remoteJid = "";
        MessageKey.prototype.fromMe = false;
        MessageKey.prototype.id = "";
        MessageKey.prototype.participant = "";

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
            if (m.remoteJid != null && $Object.hasOwnProperty.call(m, "remoteJid"))
                w.uint32(10).string(m.remoteJid);
            if (m.fromMe != null && $Object.hasOwnProperty.call(m, "fromMe"))
                w.uint32(16).bool(m.fromMe);
            if (m.id != null && $Object.hasOwnProperty.call(m, "id"))
                w.uint32(26).string(m.id);
            if (m.participant != null && $Object.hasOwnProperty.call(m, "participant"))
                w.uint32(34).string(m.participant);
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
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Protocol.MessageKey();
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
                        m.remoteJid = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.fromMe = r.bool();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.id = r.string();
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.participant = r.string();
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
            if (d instanceof $root.Protocol.MessageKey)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Protocol.MessageKey: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Protocol.MessageKey();
            if (d.remoteJid != null) {
                m.remoteJid = $String(d.remoteJid);
            }
            if (d.fromMe != null) {
                m.fromMe = $Boolean(d.fromMe);
            }
            if (d.id != null) {
                m.id = $String(d.id);
            }
            if (d.participant != null) {
                m.participant = $String(d.participant);
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
                d.remoteJid = "";
                d.fromMe = false;
                d.id = "";
                d.participant = "";
            }
            if (m.remoteJid != null && $Object.hasOwnProperty.call(m, "remoteJid")) {
                d.remoteJid = m.remoteJid;
            }
            if (m.fromMe != null && $Object.hasOwnProperty.call(m, "fromMe")) {
                d.fromMe = m.fromMe;
            }
            if (m.id != null && $Object.hasOwnProperty.call(m, "id")) {
                d.id = m.id;
            }
            if (m.participant != null && $Object.hasOwnProperty.call(m, "participant")) {
                d.participant = m.participant;
            }
            return d;
        };

        MessageKey.prototype.toJSON = function() {
            return MessageKey.toObject(this, $protobuf.util.toJSONOptions);
        };

        MessageKey.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Protocol.MessageKey";
        };

        return MessageKey;
    })();

    return Protocol;
})();

export {
  $root as default
};
