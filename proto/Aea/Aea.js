/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String;

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

export const Aea = $root.Aea = (() => {

    const Aea = {};

    Aea.NonE2EEAttestation = (function() {

        const NonE2EEAttestation = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        NonE2EEAttestation.prototype.accountType = 0;

        NonE2EEAttestation.create = function(properties) {
            return new NonE2EEAttestation(properties);
        };

        NonE2EEAttestation.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.accountType != null && $Object.hasOwnProperty.call(m, "accountType"))
                w.uint32(8).int32(m.accountType);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        NonE2EEAttestation.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Aea.NonE2EEAttestation(), v;
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
                        if ($root.Aea.NonE2EEAttestation.AccountType[v] !== $undefined) {
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

        NonE2EEAttestation.fromObject = function (d, q) {
            if (d instanceof $root.Aea.NonE2EEAttestation)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Aea.NonE2EEAttestation: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Aea.NonE2EEAttestation();
            switch (d.accountType) {
            case "E2EE":
            case 0:
                m.accountType = 0;
                break;
            case "HYBRID_E2EE":
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

        NonE2EEAttestation.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.accountType = o.enums === $String ? "E2EE" : 0;
            }
            if (m.accountType != null && $Object.hasOwnProperty.call(m, "accountType")) {
                d.accountType = o.enums === $String ? $root.Aea.NonE2EEAttestation.AccountType[m.accountType] === $undefined ? m.accountType : $root.Aea.NonE2EEAttestation.AccountType[m.accountType] : m.accountType;
            }
            return d;
        };

        NonE2EEAttestation.prototype.toJSON = function() {
            return NonE2EEAttestation.toObject(this, $protobuf.util.toJSONOptions);
        };

        NonE2EEAttestation.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Aea.NonE2EEAttestation";
        };

        NonE2EEAttestation.AccountType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "E2EE"] = 0;
            values[valuesById[1] = "HYBRID_E2EE"] = 1;
            values[valuesById[2] = "NON_E2EE"] = 2;
            return values;
        })();

        return NonE2EEAttestation;
    })();

    return Aea;
})();

export {
  $root as default
};
