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

export const MmsRetry = $root.MmsRetry = (() => {

    const MmsRetry = {};

    MmsRetry.ServerErrorReceipt = (function() {

        const ServerErrorReceipt = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        ServerErrorReceipt.prototype.stanzaId = "";

        ServerErrorReceipt.create = function(properties) {
            return new ServerErrorReceipt(properties);
        };

        ServerErrorReceipt.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.stanzaId != null && $Object.hasOwnProperty.call(m, "stanzaId"))
                w.uint32(10).string(m.stanzaId);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        ServerErrorReceipt.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.MmsRetry.ServerErrorReceipt();
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
                        m.stanzaId = r.string();
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

        ServerErrorReceipt.fromObject = function (d, q) {
            if (d instanceof $root.MmsRetry.ServerErrorReceipt)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".MmsRetry.ServerErrorReceipt: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.MmsRetry.ServerErrorReceipt();
            if (d.stanzaId != null) {
                m.stanzaId = $String(d.stanzaId);
            }
            return m;
        };

        ServerErrorReceipt.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.stanzaId = "";
            }
            if (m.stanzaId != null && $Object.hasOwnProperty.call(m, "stanzaId")) {
                d.stanzaId = m.stanzaId;
            }
            return d;
        };

        ServerErrorReceipt.prototype.toJSON = function() {
            return ServerErrorReceipt.toObject(this, $protobuf.util.toJSONOptions);
        };

        ServerErrorReceipt.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/MmsRetry.ServerErrorReceipt";
        };

        return ServerErrorReceipt;
    })();

    MmsRetry.MediaRetryNotification = (function() {

        const MediaRetryNotification = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        MediaRetryNotification.prototype.stanzaId = "";
        MediaRetryNotification.prototype.directPath = "";
        MediaRetryNotification.prototype.result = 0;
        MediaRetryNotification.prototype.messageSecret = $util.newBuffer([]);

        MediaRetryNotification.create = function(properties) {
            return new MediaRetryNotification(properties);
        };

        MediaRetryNotification.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.stanzaId != null && $Object.hasOwnProperty.call(m, "stanzaId"))
                w.uint32(10).string(m.stanzaId);
            if (m.directPath != null && $Object.hasOwnProperty.call(m, "directPath"))
                w.uint32(18).string(m.directPath);
            if (m.result != null && $Object.hasOwnProperty.call(m, "result"))
                w.uint32(24).int32(m.result);
            if (m.messageSecret != null && $Object.hasOwnProperty.call(m, "messageSecret"))
                w.uint32(34).bytes(m.messageSecret);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        MediaRetryNotification.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.MmsRetry.MediaRetryNotification(), v;
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
                        m.stanzaId = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.directPath = r.string();
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.MmsRetry.MediaRetryNotification.ResultType[v] !== $undefined) {
                            m.result = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.messageSecret = r.bytes();
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

        MediaRetryNotification.fromObject = function (d, q) {
            if (d instanceof $root.MmsRetry.MediaRetryNotification)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".MmsRetry.MediaRetryNotification: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.MmsRetry.MediaRetryNotification();
            if (d.stanzaId != null) {
                m.stanzaId = $String(d.stanzaId);
            }
            if (d.directPath != null) {
                m.directPath = $String(d.directPath);
            }
            switch (d.result) {
            case "GENERAL_ERROR":
            case 0:
                m.result = 0;
                break;
            case "SUCCESS":
            case 1:
                m.result = 1;
                break;
            case "NOT_FOUND":
            case 2:
                m.result = 2;
                break;
            case "DECRYPTION_ERROR":
            case 3:
                m.result = 3;
                break;
            default:
            }
            if (d.messageSecret != null) {
                if (typeof d.messageSecret === "string")
                    $util.base64.decode(d.messageSecret, m.messageSecret = $util.newBuffer($util.base64.length(d.messageSecret)), 0);
                else if (d.messageSecret.length >= 0)
                    m.messageSecret = d.messageSecret;
            }
            return m;
        };

        MediaRetryNotification.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.stanzaId = "";
                d.directPath = "";
                d.result = o.enums === $String ? "GENERAL_ERROR" : 0;
                if (o.bytes === $String)
                    d.messageSecret = "";
                else {
                    d.messageSecret = [];
                    if (o.bytes !== $Array)
                        d.messageSecret = $util.newBuffer(d.messageSecret);
                }
            }
            if (m.stanzaId != null && $Object.hasOwnProperty.call(m, "stanzaId")) {
                d.stanzaId = m.stanzaId;
            }
            if (m.directPath != null && $Object.hasOwnProperty.call(m, "directPath")) {
                d.directPath = m.directPath;
            }
            if (m.result != null && $Object.hasOwnProperty.call(m, "result")) {
                d.result = o.enums === $String ? $root.MmsRetry.MediaRetryNotification.ResultType[m.result] === $undefined ? m.result : $root.MmsRetry.MediaRetryNotification.ResultType[m.result] : m.result;
            }
            if (m.messageSecret != null && $Object.hasOwnProperty.call(m, "messageSecret")) {
                d.messageSecret = o.bytes === $String ? $util.base64.encode(m.messageSecret, 0, m.messageSecret.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.messageSecret) : m.messageSecret;
            }
            return d;
        };

        MediaRetryNotification.prototype.toJSON = function() {
            return MediaRetryNotification.toObject(this, $protobuf.util.toJSONOptions);
        };

        MediaRetryNotification.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/MmsRetry.MediaRetryNotification";
        };

        MediaRetryNotification.ResultType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "GENERAL_ERROR"] = 0;
            values[valuesById[1] = "SUCCESS"] = 1;
            values[valuesById[2] = "NOT_FOUND"] = 2;
            values[valuesById[3] = "DECRYPTION_ERROR"] = 3;
            return values;
        })();

        return MediaRetryNotification;
    })();

    return MmsRetry;
})();

export {
  $root as default
};
