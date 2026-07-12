/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $Boolean = $util.global.Boolean, $Array = $util.global.Array, $String = $util.global.String;

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

export const ChatLockSettings = $root.ChatLockSettings = (() => {

    const ChatLockSettings = {};

    ChatLockSettings.ChatLockSettings = (function() {

        const ChatLockSettings = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        ChatLockSettings.prototype.hideLockedChats = false;
        ChatLockSettings.prototype.secretCode = null;

        ChatLockSettings.create = function(properties) {
            return new ChatLockSettings(properties);
        };

        ChatLockSettings.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.hideLockedChats != null && $Object.hasOwnProperty.call(m, "hideLockedChats"))
                w.uint32(8).bool(m.hideLockedChats);
            if (m.secretCode != null && $Object.hasOwnProperty.call(m, "secretCode"))
                $root.UserPassword.UserPassword.encode(m.secretCode, w.uint32(18).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        ChatLockSettings.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ChatLockSettings.ChatLockSettings();
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
                        m.hideLockedChats = r.bool();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.secretCode = $root.UserPassword.UserPassword.decode(r, r.uint32(), $undefined, q + 1, m.secretCode);
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

        ChatLockSettings.fromObject = function (d, q) {
            if (d instanceof $root.ChatLockSettings.ChatLockSettings)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".ChatLockSettings.ChatLockSettings: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.ChatLockSettings.ChatLockSettings();
            if (d.hideLockedChats != null) {
                m.hideLockedChats = $Boolean(d.hideLockedChats);
            }
            if (d.secretCode != null) {
                if (!$util.isObject(d.secretCode))
                    throw $TypeError(".ChatLockSettings.ChatLockSettings.secretCode: object expected");
                m.secretCode = $root.UserPassword.UserPassword.fromObject(d.secretCode, q + 1);
            }
            return m;
        };

        ChatLockSettings.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.hideLockedChats = false;
                d.secretCode = null;
            }
            if (m.hideLockedChats != null && $Object.hasOwnProperty.call(m, "hideLockedChats")) {
                d.hideLockedChats = m.hideLockedChats;
            }
            if (m.secretCode != null && $Object.hasOwnProperty.call(m, "secretCode")) {
                d.secretCode = $root.UserPassword.UserPassword.toObject(m.secretCode, o, q + 1);
            }
            return d;
        };

        ChatLockSettings.prototype.toJSON = function() {
            return ChatLockSettings.toObject(this, $protobuf.util.toJSONOptions);
        };

        ChatLockSettings.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/ChatLockSettings.ChatLockSettings";
        };

        return ChatLockSettings;
    })();

    return ChatLockSettings;
})();

export const UserPassword = $root.UserPassword = (() => {

    const UserPassword = {};

    UserPassword.UserPassword = (function() {

        const UserPassword = function (p) {
            this.transformerArg = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        UserPassword.prototype.encoding = 0;
        UserPassword.prototype.transformer = 0;
        UserPassword.prototype.transformerArg = $util.emptyArray;
        UserPassword.prototype.transformedData = $util.newBuffer([]);

        UserPassword.create = function(properties) {
            return new UserPassword(properties);
        };

        UserPassword.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.encoding != null && $Object.hasOwnProperty.call(m, "encoding"))
                w.uint32(8).int32(m.encoding);
            if (m.transformer != null && $Object.hasOwnProperty.call(m, "transformer"))
                w.uint32(16).int32(m.transformer);
            if (m.transformerArg != null && m.transformerArg.length) {
                for (var i = 0; i < m.transformerArg.length; ++i)
                    $root.UserPassword.UserPassword.TransformerArg.encode(m.transformerArg[i], w.uint32(26).fork(), q + 1).ldelim();
            }
            if (m.transformedData != null && $Object.hasOwnProperty.call(m, "transformedData"))
                w.uint32(34).bytes(m.transformedData);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        UserPassword.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.UserPassword.UserPassword(), v;
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
                        if ($root.UserPassword.UserPassword.Encoding[v] !== $undefined) {
                            m.encoding = v;
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
                        if ($root.UserPassword.UserPassword.Transformer[v] !== $undefined) {
                            m.transformer = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        if (!(m.transformerArg && m.transformerArg.length))
                            m.transformerArg = [];
                        m.transformerArg.push($root.UserPassword.UserPassword.TransformerArg.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.transformedData = r.bytes();
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

        UserPassword.fromObject = function (d, q) {
            if (d instanceof $root.UserPassword.UserPassword)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".UserPassword.UserPassword: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.UserPassword.UserPassword();
            switch (d.encoding) {
            case "UTF8":
            case 0:
                m.encoding = 0;
                break;
            case "UTF8_BROKEN":
            case 1:
                m.encoding = 1;
                break;
            default:
            }
            switch (d.transformer) {
            case "NONE":
            case 0:
                m.transformer = 0;
                break;
            case "PBKDF2_HMAC_SHA512":
            case 1:
                m.transformer = 1;
                break;
            case "PBKDF2_HMAC_SHA384":
            case 2:
                m.transformer = 2;
                break;
            default:
            }
            if (d.transformerArg) {
                if (!$Array.isArray(d.transformerArg))
                    throw $TypeError(".UserPassword.UserPassword.transformerArg: array expected");
                m.transformerArg = $Array(d.transformerArg.length);
                for (var i = 0; i < d.transformerArg.length; ++i) {
                    if (!$util.isObject(d.transformerArg[i]))
                        throw $TypeError(".UserPassword.UserPassword.transformerArg: object expected");
                    m.transformerArg[i] = $root.UserPassword.UserPassword.TransformerArg.fromObject(d.transformerArg[i], q + 1);
                }
            }
            if (d.transformedData != null) {
                if (typeof d.transformedData === "string")
                    $util.base64.decode(d.transformedData, m.transformedData = $util.newBuffer($util.base64.length(d.transformedData)), 0);
                else if (d.transformedData.length >= 0)
                    m.transformedData = d.transformedData;
            }
            return m;
        };

        UserPassword.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.transformerArg = [];
            }
            if (o.defaults) {
                d.encoding = o.enums === $String ? "UTF8" : 0;
                d.transformer = o.enums === $String ? "NONE" : 0;
                if (o.bytes === $String)
                    d.transformedData = "";
                else {
                    d.transformedData = [];
                    if (o.bytes !== $Array)
                        d.transformedData = $util.newBuffer(d.transformedData);
                }
            }
            if (m.encoding != null && $Object.hasOwnProperty.call(m, "encoding")) {
                d.encoding = o.enums === $String ? $root.UserPassword.UserPassword.Encoding[m.encoding] === $undefined ? m.encoding : $root.UserPassword.UserPassword.Encoding[m.encoding] : m.encoding;
            }
            if (m.transformer != null && $Object.hasOwnProperty.call(m, "transformer")) {
                d.transformer = o.enums === $String ? $root.UserPassword.UserPassword.Transformer[m.transformer] === $undefined ? m.transformer : $root.UserPassword.UserPassword.Transformer[m.transformer] : m.transformer;
            }
            if (m.transformerArg && m.transformerArg.length) {
                d.transformerArg = $Array(m.transformerArg.length);
                for (var j = 0; j < m.transformerArg.length; ++j) {
                    d.transformerArg[j] = $root.UserPassword.UserPassword.TransformerArg.toObject(m.transformerArg[j], o, q + 1);
                }
            }
            if (m.transformedData != null && $Object.hasOwnProperty.call(m, "transformedData")) {
                d.transformedData = o.bytes === $String ? $util.base64.encode(m.transformedData, 0, m.transformedData.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.transformedData) : m.transformedData;
            }
            return d;
        };

        UserPassword.prototype.toJSON = function() {
            return UserPassword.toObject(this, $protobuf.util.toJSONOptions);
        };

        UserPassword.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/UserPassword.UserPassword";
        };

        UserPassword.Encoding = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UTF8"] = 0;
            values[valuesById[1] = "UTF8_BROKEN"] = 1;
            return values;
        })();

        UserPassword.Transformer = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "PBKDF2_HMAC_SHA512"] = 1;
            values[valuesById[2] = "PBKDF2_HMAC_SHA384"] = 2;
            return values;
        })();

        UserPassword.TransformerArg = (function() {

            const TransformerArg = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            TransformerArg.prototype.key = "";
            TransformerArg.prototype.value = null;

            TransformerArg.create = function(properties) {
                return new TransformerArg(properties);
            };

            TransformerArg.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.key != null && $Object.hasOwnProperty.call(m, "key"))
                    w.uint32(10).string(m.key);
                if (m.value != null && $Object.hasOwnProperty.call(m, "value"))
                    $root.UserPassword.UserPassword.TransformerArg.Value.encode(m.value, w.uint32(18).fork(), q + 1).ldelim();
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            TransformerArg.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.UserPassword.UserPassword.TransformerArg();
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
                            m.key = r.string();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.value = $root.UserPassword.UserPassword.TransformerArg.Value.decode(r, r.uint32(), $undefined, q + 1, m.value);
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

            TransformerArg.fromObject = function (d, q) {
                if (d instanceof $root.UserPassword.UserPassword.TransformerArg)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".UserPassword.UserPassword.TransformerArg: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.UserPassword.UserPassword.TransformerArg();
                if (d.key != null) {
                    m.key = $String(d.key);
                }
                if (d.value != null) {
                    if (!$util.isObject(d.value))
                        throw $TypeError(".UserPassword.UserPassword.TransformerArg.value: object expected");
                    m.value = $root.UserPassword.UserPassword.TransformerArg.Value.fromObject(d.value, q + 1);
                }
                return m;
            };

            TransformerArg.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.key = "";
                    d.value = null;
                }
                if (m.key != null && $Object.hasOwnProperty.call(m, "key")) {
                    d.key = m.key;
                }
                if (m.value != null && $Object.hasOwnProperty.call(m, "value")) {
                    d.value = $root.UserPassword.UserPassword.TransformerArg.Value.toObject(m.value, o, q + 1);
                }
                return d;
            };

            TransformerArg.prototype.toJSON = function() {
                return TransformerArg.toObject(this, $protobuf.util.toJSONOptions);
            };

            TransformerArg.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/UserPassword.UserPassword.TransformerArg";
            };

            TransformerArg.Value = (function() {

                const Value = function (p) {
                    if (p)
                        for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                };

                Value.prototype.asBlob = null;
                Value.prototype.asUnsignedInteger = null;

                let $oneOfFields;

                $Object.defineProperty(Value.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["asBlob", "asUnsignedInteger"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                Value.create = function(properties) {
                    return new Value(properties);
                };

                Value.encode = function (m, w, q) {
                    if (!w)
                        w = $Writer.create();
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (m.asBlob != null && $Object.hasOwnProperty.call(m, "asBlob"))
                        w.uint32(10).bytes(m.asBlob);
                    if (m.asUnsignedInteger != null && $Object.hasOwnProperty.call(m, "asUnsignedInteger"))
                        w.uint32(16).uint32(m.asUnsignedInteger);
                    if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                        for (var i = 0; i < m.$unknowns.length; ++i)
                            w.raw(m.$unknowns[i]);
                    return w;
                };

                Value.decode = function (r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === $undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.UserPassword.UserPassword.TransformerArg.Value();
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
                                m.asBlob = r.bytes();
                                m.value = "asBlob";
                                continue;
                            }
                        case 2: {
                                if (u !== 0)
                                    break;
                                m.asUnsignedInteger = r.uint32();
                                m.value = "asUnsignedInteger";
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

                Value.fromObject = function (d, q) {
                    if (d instanceof $root.UserPassword.UserPassword.TransformerArg.Value)
                        return d;
                    if (!$util.isObject(d))
                        throw $TypeError(".UserPassword.UserPassword.TransformerArg.Value: object expected");
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var m = new $root.UserPassword.UserPassword.TransformerArg.Value();
                    if (d.asBlob != null) {
                        if (typeof d.asBlob === "string")
                            $util.base64.decode(d.asBlob, m.asBlob = $util.newBuffer($util.base64.length(d.asBlob)), 0);
                        else if (d.asBlob.length >= 0)
                            m.asBlob = d.asBlob;
                    }
                    if (d.asUnsignedInteger != null) {
                        m.asUnsignedInteger = d.asUnsignedInteger >>> 0;
                    }
                    return m;
                };

                Value.toObject = function (m, o, q) {
                    if (!o)
                        o = {};
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var d = {};
                    if (m.asBlob != null && $Object.hasOwnProperty.call(m, "asBlob")) {
                        d.asBlob = o.bytes === $String ? $util.base64.encode(m.asBlob, 0, m.asBlob.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.asBlob) : m.asBlob;
                        if (o.oneofs)
                            d.value = "asBlob";
                    }
                    if (m.asUnsignedInteger != null && $Object.hasOwnProperty.call(m, "asUnsignedInteger")) {
                        d.asUnsignedInteger = m.asUnsignedInteger;
                        if (o.oneofs)
                            d.value = "asUnsignedInteger";
                    }
                    return d;
                };

                Value.prototype.toJSON = function() {
                    return Value.toObject(this, $protobuf.util.toJSONOptions);
                };

                Value.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/UserPassword.UserPassword.TransformerArg.Value";
                };

                return Value;
            })();

            return TransformerArg;
        })();

        return UserPassword;
    })();

    return UserPassword;
})();

export {
  $root as default
};
