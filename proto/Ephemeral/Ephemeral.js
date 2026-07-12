/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $parseInt = $util.global.parseInt, $String = $util.global.String, $Number = $util.global.Number, $BigInt = $util.global.BigInt;

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

export const Ephemeral = $root.Ephemeral = (() => {

    const Ephemeral = {};

    Ephemeral.EphemeralSetting = (function() {

        const EphemeralSetting = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        EphemeralSetting.prototype.duration = 0;
        EphemeralSetting.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        EphemeralSetting.create = function(properties) {
            return new EphemeralSetting(properties);
        };

        EphemeralSetting.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.duration != null && $Object.hasOwnProperty.call(m, "duration"))
                w.uint32(13).sfixed32(m.duration);
            if (m.timestamp != null && $Object.hasOwnProperty.call(m, "timestamp"))
                w.uint32(17).sfixed64(m.timestamp);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        EphemeralSetting.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Ephemeral.EphemeralSetting();
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
                        if (u !== 5)
                            break;
                        m.duration = r.sfixed32();
                        continue;
                    }
                case 2: {
                        if (u !== 1)
                            break;
                        m.timestamp = r.sfixed64();
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

        EphemeralSetting.fromObject = function (d, q) {
            if (d instanceof $root.Ephemeral.EphemeralSetting)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Ephemeral.EphemeralSetting: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Ephemeral.EphemeralSetting();
            if (d.duration != null) {
                m.duration = d.duration | 0;
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

        EphemeralSetting.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.duration = 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.timestamp = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.timestamp = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
            }
            if (m.duration != null && $Object.hasOwnProperty.call(m, "duration")) {
                d.duration = m.duration;
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

        EphemeralSetting.prototype.toJSON = function() {
            return EphemeralSetting.toObject(this, $protobuf.util.toJSONOptions);
        };

        EphemeralSetting.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Ephemeral.EphemeralSetting";
        };

        return EphemeralSetting;
    })();

    return Ephemeral;
})();

export {
  $root as default
};
