/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $Boolean = $util.global.Boolean;

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

export const Reporting = $root.Reporting = (() => {

    const Reporting = {};

    Reporting.Field = (function() {

        const Field = function (p) {
            this.subfield = {};
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        Field.prototype.minVersion = 0;
        Field.prototype.maxVersion = 0;
        Field.prototype.notReportableMinVersion = 0;
        Field.prototype.isMessage = false;
        Field.prototype.subfield = $util.emptyObject;

        Field.create = function(properties) {
            return new Field(properties);
        };

        Field.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.minVersion != null && $Object.hasOwnProperty.call(m, "minVersion"))
                w.uint32(8).uint32(m.minVersion);
            if (m.maxVersion != null && $Object.hasOwnProperty.call(m, "maxVersion"))
                w.uint32(16).uint32(m.maxVersion);
            if (m.notReportableMinVersion != null && $Object.hasOwnProperty.call(m, "notReportableMinVersion"))
                w.uint32(24).uint32(m.notReportableMinVersion);
            if (m.isMessage != null && $Object.hasOwnProperty.call(m, "isMessage"))
                w.uint32(32).bool(m.isMessage);
            if (m.subfield != null && $Object.hasOwnProperty.call(m, "subfield")) {
                for (var ks = $Object.keys(m.subfield), i = 0; i < ks.length; ++i) {
                    w.uint32(42).fork().uint32(8).uint32(ks[i]);
                    $root.Reporting.Field.encode(m.subfield[ks[i]], w.uint32(18).fork(), q + 1).ldelim().ldelim();
                }
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        Field.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Reporting.Field(), k, v;
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
                        m.minVersion = r.uint32();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.maxVersion = r.uint32();
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        m.notReportableMinVersion = r.uint32();
                        continue;
                    }
                case 4: {
                        if (u !== 0)
                            break;
                        m.isMessage = r.bool();
                        continue;
                    }
                case 5: {
                        if (u !== 2)
                            break;
                        if (m.subfield === $util.emptyObject)
                            m.subfield = {};
                        var c2 = r.uint32() + r.pos;
                        k = 0;
                        v = null;
                        while (r.pos < c2) {
                            var t2 = r.tag();
                            u = t2 & 7;
                            switch (t2 >>>= 3) {
                            case 1:
                                if (u !== 0)
                                    break;
                                k = r.uint32();
                                continue;
                            case 2:
                                if (u !== 2)
                                    break;
                                v = $root.Reporting.Field.decode(r, r.uint32(), $undefined, q + 1, v);
                                continue;
                            }
                            r.skipType(u, q, t2);
                        }
                        m.subfield[k] = v || new $root.Reporting.Field();
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

        Field.fromObject = function (d, q) {
            if (d instanceof $root.Reporting.Field)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Reporting.Field: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Reporting.Field();
            if (d.minVersion != null) {
                m.minVersion = d.minVersion >>> 0;
            }
            if (d.maxVersion != null) {
                m.maxVersion = d.maxVersion >>> 0;
            }
            if (d.notReportableMinVersion != null) {
                m.notReportableMinVersion = d.notReportableMinVersion >>> 0;
            }
            if (d.isMessage != null) {
                m.isMessage = $Boolean(d.isMessage);
            }
            if (d.subfield) {
                if (!$util.isObject(d.subfield))
                    throw $TypeError(".Reporting.Field.subfield: object expected");
                m.subfield = {};
                for (var ks = $Object.keys(d.subfield), i = 0; i < ks.length; ++i) {
                    if (ks[i] === "__proto__")
                        $util.makeProp(m.subfield, ks[i]);
                    if (!$util.isObject(d.subfield[ks[i]]))
                        throw $TypeError(".Reporting.Field.subfield: object expected");
                    m.subfield[ks[i]] = $root.Reporting.Field.fromObject(d.subfield[ks[i]], q + 1);
                }
            }
            return m;
        };

        Field.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.objects || o.defaults) {
                d.subfield = {};
            }
            if (o.defaults) {
                d.minVersion = 0;
                d.maxVersion = 0;
                d.notReportableMinVersion = 0;
                d.isMessage = false;
            }
            if (m.minVersion != null && $Object.hasOwnProperty.call(m, "minVersion")) {
                d.minVersion = m.minVersion;
            }
            if (m.maxVersion != null && $Object.hasOwnProperty.call(m, "maxVersion")) {
                d.maxVersion = m.maxVersion;
            }
            if (m.notReportableMinVersion != null && $Object.hasOwnProperty.call(m, "notReportableMinVersion")) {
                d.notReportableMinVersion = m.notReportableMinVersion;
            }
            if (m.isMessage != null && $Object.hasOwnProperty.call(m, "isMessage")) {
                d.isMessage = m.isMessage;
            }
            var ks2;
            if (m.subfield && (ks2 = $Object.keys(m.subfield)).length) {
                d.subfield = {};
                for (var j = 0; j < ks2.length; ++j) {
                    if (ks2[j] === "__proto__")
                        $util.makeProp(d.subfield, ks2[j]);
                    d.subfield[ks2[j]] = $root.Reporting.Field.toObject(m.subfield[ks2[j]], o, q + 1);
                }
            }
            return d;
        };

        Field.prototype.toJSON = function() {
            return Field.toObject(this, $protobuf.util.toJSONOptions);
        };

        Field.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Reporting.Field";
        };

        return Field;
    })();

    Reporting.Config = (function() {

        const Config = function (p) {
            this.field = {};
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        Config.prototype.field = $util.emptyObject;
        Config.prototype.version = 0;

        Config.create = function(properties) {
            return new Config(properties);
        };

        Config.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.field != null && $Object.hasOwnProperty.call(m, "field")) {
                for (var ks = $Object.keys(m.field), i = 0; i < ks.length; ++i) {
                    w.uint32(10).fork().uint32(8).uint32(ks[i]);
                    $root.Reporting.Field.encode(m.field[ks[i]], w.uint32(18).fork(), q + 1).ldelim().ldelim();
                }
            }
            if (m.version != null && $Object.hasOwnProperty.call(m, "version"))
                w.uint32(16).uint32(m.version);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        Config.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Reporting.Config(), k, v;
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
                        if (m.field === $util.emptyObject)
                            m.field = {};
                        var c2 = r.uint32() + r.pos;
                        k = 0;
                        v = null;
                        while (r.pos < c2) {
                            var t2 = r.tag();
                            u = t2 & 7;
                            switch (t2 >>>= 3) {
                            case 1:
                                if (u !== 0)
                                    break;
                                k = r.uint32();
                                continue;
                            case 2:
                                if (u !== 2)
                                    break;
                                v = $root.Reporting.Field.decode(r, r.uint32(), $undefined, q + 1, v);
                                continue;
                            }
                            r.skipType(u, q, t2);
                        }
                        m.field[k] = v || new $root.Reporting.Field();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.version = r.uint32();
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

        Config.fromObject = function (d, q) {
            if (d instanceof $root.Reporting.Config)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Reporting.Config: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Reporting.Config();
            if (d.field) {
                if (!$util.isObject(d.field))
                    throw $TypeError(".Reporting.Config.field: object expected");
                m.field = {};
                for (var ks = $Object.keys(d.field), i = 0; i < ks.length; ++i) {
                    if (ks[i] === "__proto__")
                        $util.makeProp(m.field, ks[i]);
                    if (!$util.isObject(d.field[ks[i]]))
                        throw $TypeError(".Reporting.Config.field: object expected");
                    m.field[ks[i]] = $root.Reporting.Field.fromObject(d.field[ks[i]], q + 1);
                }
            }
            if (d.version != null) {
                m.version = d.version >>> 0;
            }
            return m;
        };

        Config.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.objects || o.defaults) {
                d.field = {};
            }
            if (o.defaults) {
                d.version = 0;
            }
            var ks2;
            if (m.field && (ks2 = $Object.keys(m.field)).length) {
                d.field = {};
                for (var j = 0; j < ks2.length; ++j) {
                    if (ks2[j] === "__proto__")
                        $util.makeProp(d.field, ks2[j]);
                    d.field[ks2[j]] = $root.Reporting.Field.toObject(m.field[ks2[j]], o, q + 1);
                }
            }
            if (m.version != null && $Object.hasOwnProperty.call(m, "version")) {
                d.version = m.version;
            }
            return d;
        };

        Config.prototype.toJSON = function() {
            return Config.toObject(this, $protobuf.util.toJSONOptions);
        };

        Config.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Reporting.Config";
        };

        return Config;
    })();

    Reporting.Reportable = (function() {

        const Reportable = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        Reportable.prototype.minVersion = 0;
        Reportable.prototype.maxVersion = 0;
        Reportable.prototype.notReportableMinVersion = 0;
        Reportable.prototype.never = false;

        Reportable.create = function(properties) {
            return new Reportable(properties);
        };

        Reportable.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.minVersion != null && $Object.hasOwnProperty.call(m, "minVersion"))
                w.uint32(8).uint32(m.minVersion);
            if (m.maxVersion != null && $Object.hasOwnProperty.call(m, "maxVersion"))
                w.uint32(16).uint32(m.maxVersion);
            if (m.notReportableMinVersion != null && $Object.hasOwnProperty.call(m, "notReportableMinVersion"))
                w.uint32(24).uint32(m.notReportableMinVersion);
            if (m.never != null && $Object.hasOwnProperty.call(m, "never"))
                w.uint32(32).bool(m.never);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        Reportable.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.Reporting.Reportable();
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
                        m.minVersion = r.uint32();
                        continue;
                    }
                case 2: {
                        if (u !== 0)
                            break;
                        m.maxVersion = r.uint32();
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        m.notReportableMinVersion = r.uint32();
                        continue;
                    }
                case 4: {
                        if (u !== 0)
                            break;
                        m.never = r.bool();
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

        Reportable.fromObject = function (d, q) {
            if (d instanceof $root.Reporting.Reportable)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".Reporting.Reportable: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.Reporting.Reportable();
            if (d.minVersion != null) {
                m.minVersion = d.minVersion >>> 0;
            }
            if (d.maxVersion != null) {
                m.maxVersion = d.maxVersion >>> 0;
            }
            if (d.notReportableMinVersion != null) {
                m.notReportableMinVersion = d.notReportableMinVersion >>> 0;
            }
            if (d.never != null) {
                m.never = $Boolean(d.never);
            }
            return m;
        };

        Reportable.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.minVersion = 0;
                d.maxVersion = 0;
                d.notReportableMinVersion = 0;
                d.never = false;
            }
            if (m.minVersion != null && $Object.hasOwnProperty.call(m, "minVersion")) {
                d.minVersion = m.minVersion;
            }
            if (m.maxVersion != null && $Object.hasOwnProperty.call(m, "maxVersion")) {
                d.maxVersion = m.maxVersion;
            }
            if (m.notReportableMinVersion != null && $Object.hasOwnProperty.call(m, "notReportableMinVersion")) {
                d.notReportableMinVersion = m.notReportableMinVersion;
            }
            if (m.never != null && $Object.hasOwnProperty.call(m, "never")) {
                d.never = m.never;
            }
            return d;
        };

        Reportable.prototype.toJSON = function() {
            return Reportable.toObject(this, $protobuf.util.toJSONOptions);
        };

        Reportable.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Reporting.Reportable";
        };

        return Reportable;
    })();

    return Reporting;
})();

export {
  $root as default
};
