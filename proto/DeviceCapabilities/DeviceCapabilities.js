/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $parseInt = $util.global.parseInt, $Number = $util.global.Number, $BigInt = $util.global.BigInt, $Boolean = $util.global.Boolean;

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

export const DeviceCapabilities = $root.DeviceCapabilities = (() => {

    const DeviceCapabilities = {};

    DeviceCapabilities.DeviceCapabilities = (function() {

        const DeviceCapabilities = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        DeviceCapabilities.prototype.chatLockSupportLevel = 0;
        DeviceCapabilities.prototype.lidMigration = null;
        DeviceCapabilities.prototype.businessBroadcast = null;
        DeviceCapabilities.prototype.userHasAvatar = null;
        DeviceCapabilities.prototype.memberNameTagPrimarySupport = 0;
        DeviceCapabilities.prototype.aiThread = null;
        DeviceCapabilities.prototype.aiFbidMigration = null;

        DeviceCapabilities.create = function(properties) {
            return new DeviceCapabilities(properties);
        };

        DeviceCapabilities.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.chatLockSupportLevel != null && $Object.hasOwnProperty.call(m, "chatLockSupportLevel"))
                w.uint32(8).int32(m.chatLockSupportLevel);
            if (m.lidMigration != null && $Object.hasOwnProperty.call(m, "lidMigration"))
                $root.DeviceCapabilities.DeviceCapabilities.LIDMigration.encode(m.lidMigration, w.uint32(18).fork(), q + 1).ldelim();
            if (m.businessBroadcast != null && $Object.hasOwnProperty.call(m, "businessBroadcast"))
                $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.encode(m.businessBroadcast, w.uint32(26).fork(), q + 1).ldelim();
            if (m.userHasAvatar != null && $Object.hasOwnProperty.call(m, "userHasAvatar"))
                $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar.encode(m.userHasAvatar, w.uint32(34).fork(), q + 1).ldelim();
            if (m.memberNameTagPrimarySupport != null && $Object.hasOwnProperty.call(m, "memberNameTagPrimarySupport"))
                w.uint32(40).int32(m.memberNameTagPrimarySupport);
            if (m.aiThread != null && $Object.hasOwnProperty.call(m, "aiThread"))
                $root.DeviceCapabilities.DeviceCapabilities.AiThread.encode(m.aiThread, w.uint32(50).fork(), q + 1).ldelim();
            if (m.aiFbidMigration != null && $Object.hasOwnProperty.call(m, "aiFbidMigration"))
                $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration.encode(m.aiFbidMigration, w.uint32(58).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        DeviceCapabilities.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.DeviceCapabilities.DeviceCapabilities(), v;
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
                        if ($root.DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel[v] !== $undefined) {
                            m.chatLockSupportLevel = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.lidMigration = $root.DeviceCapabilities.DeviceCapabilities.LIDMigration.decode(r, r.uint32(), $undefined, q + 1, m.lidMigration);
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.businessBroadcast = $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.decode(r, r.uint32(), $undefined, q + 1, m.businessBroadcast);
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.userHasAvatar = $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar.decode(r, r.uint32(), $undefined, q + 1, m.userHasAvatar);
                        continue;
                    }
                case 5: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.DeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport[v] !== $undefined) {
                            m.memberNameTagPrimarySupport = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 6: {
                        if (u !== 2)
                            break;
                        m.aiThread = $root.DeviceCapabilities.DeviceCapabilities.AiThread.decode(r, r.uint32(), $undefined, q + 1, m.aiThread);
                        continue;
                    }
                case 7: {
                        if (u !== 2)
                            break;
                        m.aiFbidMigration = $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration.decode(r, r.uint32(), $undefined, q + 1, m.aiFbidMigration);
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

        DeviceCapabilities.fromObject = function (d, q) {
            if (d instanceof $root.DeviceCapabilities.DeviceCapabilities)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".DeviceCapabilities.DeviceCapabilities: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.DeviceCapabilities.DeviceCapabilities();
            switch (d.chatLockSupportLevel) {
            case "NONE":
            case 0:
                m.chatLockSupportLevel = 0;
                break;
            case "MINIMAL":
            case 1:
                m.chatLockSupportLevel = 1;
                break;
            case "FULL":
            case 2:
                m.chatLockSupportLevel = 2;
                break;
            default:
            }
            if (d.lidMigration != null) {
                if (!$util.isObject(d.lidMigration))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.lidMigration: object expected");
                m.lidMigration = $root.DeviceCapabilities.DeviceCapabilities.LIDMigration.fromObject(d.lidMigration, q + 1);
            }
            if (d.businessBroadcast != null) {
                if (!$util.isObject(d.businessBroadcast))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.businessBroadcast: object expected");
                m.businessBroadcast = $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.fromObject(d.businessBroadcast, q + 1);
            }
            if (d.userHasAvatar != null) {
                if (!$util.isObject(d.userHasAvatar))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.userHasAvatar: object expected");
                m.userHasAvatar = $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar.fromObject(d.userHasAvatar, q + 1);
            }
            switch (d.memberNameTagPrimarySupport) {
            case "DISABLED":
            case 0:
                m.memberNameTagPrimarySupport = 0;
                break;
            case "RECEIVER_ENABLED":
            case 1:
                m.memberNameTagPrimarySupport = 1;
                break;
            case "SENDER_ENABLED":
            case 2:
                m.memberNameTagPrimarySupport = 2;
                break;
            default:
            }
            if (d.aiThread != null) {
                if (!$util.isObject(d.aiThread))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.aiThread: object expected");
                m.aiThread = $root.DeviceCapabilities.DeviceCapabilities.AiThread.fromObject(d.aiThread, q + 1);
            }
            if (d.aiFbidMigration != null) {
                if (!$util.isObject(d.aiFbidMigration))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.aiFbidMigration: object expected");
                m.aiFbidMigration = $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration.fromObject(d.aiFbidMigration, q + 1);
            }
            return m;
        };

        DeviceCapabilities.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.chatLockSupportLevel = o.enums === $String ? "NONE" : 0;
                d.lidMigration = null;
                d.businessBroadcast = null;
                d.userHasAvatar = null;
                d.memberNameTagPrimarySupport = o.enums === $String ? "DISABLED" : 0;
                d.aiThread = null;
                d.aiFbidMigration = null;
            }
            if (m.chatLockSupportLevel != null && $Object.hasOwnProperty.call(m, "chatLockSupportLevel")) {
                d.chatLockSupportLevel = o.enums === $String ? $root.DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel[m.chatLockSupportLevel] === $undefined ? m.chatLockSupportLevel : $root.DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel[m.chatLockSupportLevel] : m.chatLockSupportLevel;
            }
            if (m.lidMigration != null && $Object.hasOwnProperty.call(m, "lidMigration")) {
                d.lidMigration = $root.DeviceCapabilities.DeviceCapabilities.LIDMigration.toObject(m.lidMigration, o, q + 1);
            }
            if (m.businessBroadcast != null && $Object.hasOwnProperty.call(m, "businessBroadcast")) {
                d.businessBroadcast = $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.toObject(m.businessBroadcast, o, q + 1);
            }
            if (m.userHasAvatar != null && $Object.hasOwnProperty.call(m, "userHasAvatar")) {
                d.userHasAvatar = $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar.toObject(m.userHasAvatar, o, q + 1);
            }
            if (m.memberNameTagPrimarySupport != null && $Object.hasOwnProperty.call(m, "memberNameTagPrimarySupport")) {
                d.memberNameTagPrimarySupport = o.enums === $String ? $root.DeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport[m.memberNameTagPrimarySupport] === $undefined ? m.memberNameTagPrimarySupport : $root.DeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport[m.memberNameTagPrimarySupport] : m.memberNameTagPrimarySupport;
            }
            if (m.aiThread != null && $Object.hasOwnProperty.call(m, "aiThread")) {
                d.aiThread = $root.DeviceCapabilities.DeviceCapabilities.AiThread.toObject(m.aiThread, o, q + 1);
            }
            if (m.aiFbidMigration != null && $Object.hasOwnProperty.call(m, "aiFbidMigration")) {
                d.aiFbidMigration = $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration.toObject(m.aiFbidMigration, o, q + 1);
            }
            return d;
        };

        DeviceCapabilities.prototype.toJSON = function() {
            return DeviceCapabilities.toObject(this, $protobuf.util.toJSONOptions);
        };

        DeviceCapabilities.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/DeviceCapabilities.DeviceCapabilities";
        };

        DeviceCapabilities.AiFbidMigration = (function() {

            const AiFbidMigration = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            AiFbidMigration.prototype.chatDbMigrationTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            AiFbidMigration.create = function(properties) {
                return new AiFbidMigration(properties);
            };

            AiFbidMigration.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.chatDbMigrationTimestamp != null && $Object.hasOwnProperty.call(m, "chatDbMigrationTimestamp"))
                    w.uint32(8).uint64(m.chatDbMigrationTimestamp);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            AiFbidMigration.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration();
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
                            m.chatDbMigrationTimestamp = r.uint64();
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

            AiFbidMigration.fromObject = function (d, q) {
                if (d instanceof $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.AiFbidMigration: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration();
                if (d.chatDbMigrationTimestamp != null) {
                    if ($util.Long)
                        m.chatDbMigrationTimestamp = $util.Long.fromValue(d.chatDbMigrationTimestamp, true);
                    else if (typeof d.chatDbMigrationTimestamp === "string")
                        m.chatDbMigrationTimestamp = $parseInt(d.chatDbMigrationTimestamp, 10);
                    else if (typeof d.chatDbMigrationTimestamp === "number")
                        m.chatDbMigrationTimestamp = d.chatDbMigrationTimestamp;
                    else if (typeof d.chatDbMigrationTimestamp === "object")
                        m.chatDbMigrationTimestamp = new $util.LongBits(d.chatDbMigrationTimestamp.low >>> 0, d.chatDbMigrationTimestamp.high >>> 0).toNumber(true);
                }
                return m;
            };

            AiFbidMigration.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, true);
                        d.chatDbMigrationTimestamp = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                    } else
                        d.chatDbMigrationTimestamp = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (m.chatDbMigrationTimestamp != null && $Object.hasOwnProperty.call(m, "chatDbMigrationTimestamp")) {
                    if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                        d.chatDbMigrationTimestamp = typeof m.chatDbMigrationTimestamp === "number" ? $BigInt(m.chatDbMigrationTimestamp) : $util.Long.fromBits(m.chatDbMigrationTimestamp.low >>> 0, m.chatDbMigrationTimestamp.high >>> 0, true).toBigInt();
                    else if (typeof m.chatDbMigrationTimestamp === "number")
                        d.chatDbMigrationTimestamp = o.longs === $String ? $String(m.chatDbMigrationTimestamp) : m.chatDbMigrationTimestamp;
                    else
                        d.chatDbMigrationTimestamp = o.longs === String ? longToString(m.chatDbMigrationTimestamp, true) : o.longs === Number ? longToNumber(m.chatDbMigrationTimestamp, true) : m.chatDbMigrationTimestamp;
                }
                return d;
            };

            AiFbidMigration.prototype.toJSON = function() {
                return AiFbidMigration.toObject(this, $protobuf.util.toJSONOptions);
            };

            AiFbidMigration.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/DeviceCapabilities.DeviceCapabilities.AiFbidMigration";
            };

            return AiFbidMigration;
        })();

        DeviceCapabilities.AiThread = (function() {

            const AiThread = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            AiThread.prototype.supportLevel = 0;

            AiThread.create = function(properties) {
                return new AiThread(properties);
            };

            AiThread.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.supportLevel != null && $Object.hasOwnProperty.call(m, "supportLevel"))
                    w.uint32(8).int32(m.supportLevel);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            AiThread.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.DeviceCapabilities.DeviceCapabilities.AiThread(), v;
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
                            if ($root.DeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel[v] !== $undefined) {
                                m.supportLevel = v;
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

            AiThread.fromObject = function (d, q) {
                if (d instanceof $root.DeviceCapabilities.DeviceCapabilities.AiThread)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.AiThread: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.DeviceCapabilities.DeviceCapabilities.AiThread();
                switch (d.supportLevel) {
                case "NONE":
                case 0:
                    m.supportLevel = 0;
                    break;
                case "INFRA":
                case 1:
                    m.supportLevel = 1;
                    break;
                case "FULL":
                case 2:
                    m.supportLevel = 2;
                    break;
                default:
                }
                return m;
            };

            AiThread.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.supportLevel = o.enums === $String ? "NONE" : 0;
                }
                if (m.supportLevel != null && $Object.hasOwnProperty.call(m, "supportLevel")) {
                    d.supportLevel = o.enums === $String ? $root.DeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel[m.supportLevel] === $undefined ? m.supportLevel : $root.DeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel[m.supportLevel] : m.supportLevel;
                }
                return d;
            };

            AiThread.prototype.toJSON = function() {
                return AiThread.toObject(this, $protobuf.util.toJSONOptions);
            };

            AiThread.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/DeviceCapabilities.DeviceCapabilities.AiThread";
            };

            AiThread.SupportLevel = (function() {
                const valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "INFRA"] = 1;
                values[valuesById[2] = "FULL"] = 2;
                return values;
            })();

            return AiThread;
        })();

        DeviceCapabilities.BusinessBroadcast = (function() {

            const BusinessBroadcast = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            BusinessBroadcast.prototype.importListEnabled = false;
            BusinessBroadcast.prototype.companionSupportEnabled = false;
            BusinessBroadcast.prototype.campaignSyncEnabled = false;
            BusinessBroadcast.prototype.insightsSyncEnabled = false;
            BusinessBroadcast.prototype.recipientLimit = 0;

            BusinessBroadcast.create = function(properties) {
                return new BusinessBroadcast(properties);
            };

            BusinessBroadcast.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.importListEnabled != null && $Object.hasOwnProperty.call(m, "importListEnabled"))
                    w.uint32(8).bool(m.importListEnabled);
                if (m.companionSupportEnabled != null && $Object.hasOwnProperty.call(m, "companionSupportEnabled"))
                    w.uint32(16).bool(m.companionSupportEnabled);
                if (m.campaignSyncEnabled != null && $Object.hasOwnProperty.call(m, "campaignSyncEnabled"))
                    w.uint32(24).bool(m.campaignSyncEnabled);
                if (m.insightsSyncEnabled != null && $Object.hasOwnProperty.call(m, "insightsSyncEnabled"))
                    w.uint32(32).bool(m.insightsSyncEnabled);
                if (m.recipientLimit != null && $Object.hasOwnProperty.call(m, "recipientLimit"))
                    w.uint32(40).int32(m.recipientLimit);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            BusinessBroadcast.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast();
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
                            m.importListEnabled = r.bool();
                            continue;
                        }
                    case 2: {
                            if (u !== 0)
                                break;
                            m.companionSupportEnabled = r.bool();
                            continue;
                        }
                    case 3: {
                            if (u !== 0)
                                break;
                            m.campaignSyncEnabled = r.bool();
                            continue;
                        }
                    case 4: {
                            if (u !== 0)
                                break;
                            m.insightsSyncEnabled = r.bool();
                            continue;
                        }
                    case 5: {
                            if (u !== 0)
                                break;
                            m.recipientLimit = r.int32();
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

            BusinessBroadcast.fromObject = function (d, q) {
                if (d instanceof $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.BusinessBroadcast: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast();
                if (d.importListEnabled != null) {
                    m.importListEnabled = $Boolean(d.importListEnabled);
                }
                if (d.companionSupportEnabled != null) {
                    m.companionSupportEnabled = $Boolean(d.companionSupportEnabled);
                }
                if (d.campaignSyncEnabled != null) {
                    m.campaignSyncEnabled = $Boolean(d.campaignSyncEnabled);
                }
                if (d.insightsSyncEnabled != null) {
                    m.insightsSyncEnabled = $Boolean(d.insightsSyncEnabled);
                }
                if (d.recipientLimit != null) {
                    m.recipientLimit = d.recipientLimit | 0;
                }
                return m;
            };

            BusinessBroadcast.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.importListEnabled = false;
                    d.companionSupportEnabled = false;
                    d.campaignSyncEnabled = false;
                    d.insightsSyncEnabled = false;
                    d.recipientLimit = 0;
                }
                if (m.importListEnabled != null && $Object.hasOwnProperty.call(m, "importListEnabled")) {
                    d.importListEnabled = m.importListEnabled;
                }
                if (m.companionSupportEnabled != null && $Object.hasOwnProperty.call(m, "companionSupportEnabled")) {
                    d.companionSupportEnabled = m.companionSupportEnabled;
                }
                if (m.campaignSyncEnabled != null && $Object.hasOwnProperty.call(m, "campaignSyncEnabled")) {
                    d.campaignSyncEnabled = m.campaignSyncEnabled;
                }
                if (m.insightsSyncEnabled != null && $Object.hasOwnProperty.call(m, "insightsSyncEnabled")) {
                    d.insightsSyncEnabled = m.insightsSyncEnabled;
                }
                if (m.recipientLimit != null && $Object.hasOwnProperty.call(m, "recipientLimit")) {
                    d.recipientLimit = m.recipientLimit;
                }
                return d;
            };

            BusinessBroadcast.prototype.toJSON = function() {
                return BusinessBroadcast.toObject(this, $protobuf.util.toJSONOptions);
            };

            BusinessBroadcast.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/DeviceCapabilities.DeviceCapabilities.BusinessBroadcast";
            };

            return BusinessBroadcast;
        })();

        DeviceCapabilities.ChatLockSupportLevel = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "MINIMAL"] = 1;
            values[valuesById[2] = "FULL"] = 2;
            return values;
        })();

        DeviceCapabilities.LIDMigration = (function() {

            const LIDMigration = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            LIDMigration.prototype.chatDbMigrationTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            LIDMigration.create = function(properties) {
                return new LIDMigration(properties);
            };

            LIDMigration.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.chatDbMigrationTimestamp != null && $Object.hasOwnProperty.call(m, "chatDbMigrationTimestamp"))
                    w.uint32(8).uint64(m.chatDbMigrationTimestamp);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            LIDMigration.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.DeviceCapabilities.DeviceCapabilities.LIDMigration();
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
                            m.chatDbMigrationTimestamp = r.uint64();
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

            LIDMigration.fromObject = function (d, q) {
                if (d instanceof $root.DeviceCapabilities.DeviceCapabilities.LIDMigration)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.LIDMigration: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.DeviceCapabilities.DeviceCapabilities.LIDMigration();
                if (d.chatDbMigrationTimestamp != null) {
                    if ($util.Long)
                        m.chatDbMigrationTimestamp = $util.Long.fromValue(d.chatDbMigrationTimestamp, true);
                    else if (typeof d.chatDbMigrationTimestamp === "string")
                        m.chatDbMigrationTimestamp = $parseInt(d.chatDbMigrationTimestamp, 10);
                    else if (typeof d.chatDbMigrationTimestamp === "number")
                        m.chatDbMigrationTimestamp = d.chatDbMigrationTimestamp;
                    else if (typeof d.chatDbMigrationTimestamp === "object")
                        m.chatDbMigrationTimestamp = new $util.LongBits(d.chatDbMigrationTimestamp.low >>> 0, d.chatDbMigrationTimestamp.high >>> 0).toNumber(true);
                }
                return m;
            };

            LIDMigration.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, true);
                        d.chatDbMigrationTimestamp = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                    } else
                        d.chatDbMigrationTimestamp = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (m.chatDbMigrationTimestamp != null && $Object.hasOwnProperty.call(m, "chatDbMigrationTimestamp")) {
                    if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                        d.chatDbMigrationTimestamp = typeof m.chatDbMigrationTimestamp === "number" ? $BigInt(m.chatDbMigrationTimestamp) : $util.Long.fromBits(m.chatDbMigrationTimestamp.low >>> 0, m.chatDbMigrationTimestamp.high >>> 0, true).toBigInt();
                    else if (typeof m.chatDbMigrationTimestamp === "number")
                        d.chatDbMigrationTimestamp = o.longs === $String ? $String(m.chatDbMigrationTimestamp) : m.chatDbMigrationTimestamp;
                    else
                        d.chatDbMigrationTimestamp = o.longs === String ? longToString(m.chatDbMigrationTimestamp, true) : o.longs === Number ? longToNumber(m.chatDbMigrationTimestamp, true) : m.chatDbMigrationTimestamp;
                }
                return d;
            };

            LIDMigration.prototype.toJSON = function() {
                return LIDMigration.toObject(this, $protobuf.util.toJSONOptions);
            };

            LIDMigration.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/DeviceCapabilities.DeviceCapabilities.LIDMigration";
            };

            return LIDMigration;
        })();

        DeviceCapabilities.MemberNameTagPrimarySupport = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "DISABLED"] = 0;
            values[valuesById[1] = "RECEIVER_ENABLED"] = 1;
            values[valuesById[2] = "SENDER_ENABLED"] = 2;
            return values;
        })();

        DeviceCapabilities.UserHasAvatar = (function() {

            const UserHasAvatar = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            UserHasAvatar.prototype.userHasAvatar = false;

            UserHasAvatar.create = function(properties) {
                return new UserHasAvatar(properties);
            };

            UserHasAvatar.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.userHasAvatar != null && $Object.hasOwnProperty.call(m, "userHasAvatar"))
                    w.uint32(8).bool(m.userHasAvatar);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            UserHasAvatar.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar();
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
                            m.userHasAvatar = r.bool();
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

            UserHasAvatar.fromObject = function (d, q) {
                if (d instanceof $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.UserHasAvatar: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar();
                if (d.userHasAvatar != null) {
                    m.userHasAvatar = $Boolean(d.userHasAvatar);
                }
                return m;
            };

            UserHasAvatar.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.userHasAvatar = false;
                }
                if (m.userHasAvatar != null && $Object.hasOwnProperty.call(m, "userHasAvatar")) {
                    d.userHasAvatar = m.userHasAvatar;
                }
                return d;
            };

            UserHasAvatar.prototype.toJSON = function() {
                return UserHasAvatar.toObject(this, $protobuf.util.toJSONOptions);
            };

            UserHasAvatar.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/DeviceCapabilities.DeviceCapabilities.UserHasAvatar";
            };

            return UserHasAvatar;
        })();

        return DeviceCapabilities;
    })();

    return DeviceCapabilities;
})();

export {
  $root as default
};
