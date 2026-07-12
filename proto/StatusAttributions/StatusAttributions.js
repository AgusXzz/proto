/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Boolean = $util.global.Boolean;

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

export const StatusAttributions = $root.StatusAttributions = (() => {

    const StatusAttributions = {};

    StatusAttributions.StatusAttribution = (function() {

        const StatusAttribution = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        StatusAttribution.prototype.type = 0;
        StatusAttribution.prototype.actionUrl = "";
        StatusAttribution.prototype.statusReshare = null;
        StatusAttribution.prototype.externalShare = null;
        StatusAttribution.prototype.music = null;
        StatusAttribution.prototype.groupStatus = null;
        StatusAttribution.prototype.rlAttribution = null;
        StatusAttribution.prototype.aiCreatedAttribution = null;

        let $oneOfFields;

        $Object.defineProperty(StatusAttribution.prototype, "attributionData", {
            get: $util.oneOfGetter($oneOfFields = ["statusReshare", "externalShare", "music", "groupStatus", "rlAttribution", "aiCreatedAttribution"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        StatusAttribution.create = function(properties) {
            return new StatusAttribution(properties);
        };

        StatusAttribution.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.type != null && $Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            if (m.actionUrl != null && $Object.hasOwnProperty.call(m, "actionUrl"))
                w.uint32(18).string(m.actionUrl);
            if (m.statusReshare != null && $Object.hasOwnProperty.call(m, "statusReshare"))
                $root.StatusAttributions.StatusAttribution.StatusReshare.encode(m.statusReshare, w.uint32(26).fork(), q + 1).ldelim();
            if (m.externalShare != null && $Object.hasOwnProperty.call(m, "externalShare"))
                $root.StatusAttributions.StatusAttribution.ExternalShare.encode(m.externalShare, w.uint32(34).fork(), q + 1).ldelim();
            if (m.music != null && $Object.hasOwnProperty.call(m, "music"))
                $root.StatusAttributions.StatusAttribution.Music.encode(m.music, w.uint32(42).fork(), q + 1).ldelim();
            if (m.groupStatus != null && $Object.hasOwnProperty.call(m, "groupStatus"))
                $root.StatusAttributions.StatusAttribution.GroupStatus.encode(m.groupStatus, w.uint32(50).fork(), q + 1).ldelim();
            if (m.rlAttribution != null && $Object.hasOwnProperty.call(m, "rlAttribution"))
                $root.StatusAttributions.StatusAttribution.RLAttribution.encode(m.rlAttribution, w.uint32(58).fork(), q + 1).ldelim();
            if (m.aiCreatedAttribution != null && $Object.hasOwnProperty.call(m, "aiCreatedAttribution"))
                $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.encode(m.aiCreatedAttribution, w.uint32(66).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        StatusAttribution.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.StatusAttributions.StatusAttribution(), v;
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
                        if ($root.StatusAttributions.StatusAttribution.Type[v] !== $undefined) {
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
                        m.actionUrl = r.string();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.statusReshare = $root.StatusAttributions.StatusAttribution.StatusReshare.decode(r, r.uint32(), $undefined, q + 1, m.statusReshare);
                        m.attributionData = "statusReshare";
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.externalShare = $root.StatusAttributions.StatusAttribution.ExternalShare.decode(r, r.uint32(), $undefined, q + 1, m.externalShare);
                        m.attributionData = "externalShare";
                        continue;
                    }
                case 5: {
                        if (u !== 2)
                            break;
                        m.music = $root.StatusAttributions.StatusAttribution.Music.decode(r, r.uint32(), $undefined, q + 1, m.music);
                        m.attributionData = "music";
                        continue;
                    }
                case 6: {
                        if (u !== 2)
                            break;
                        m.groupStatus = $root.StatusAttributions.StatusAttribution.GroupStatus.decode(r, r.uint32(), $undefined, q + 1, m.groupStatus);
                        m.attributionData = "groupStatus";
                        continue;
                    }
                case 7: {
                        if (u !== 2)
                            break;
                        m.rlAttribution = $root.StatusAttributions.StatusAttribution.RLAttribution.decode(r, r.uint32(), $undefined, q + 1, m.rlAttribution);
                        m.attributionData = "rlAttribution";
                        continue;
                    }
                case 8: {
                        if (u !== 2)
                            break;
                        m.aiCreatedAttribution = $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.decode(r, r.uint32(), $undefined, q + 1, m.aiCreatedAttribution);
                        m.attributionData = "aiCreatedAttribution";
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

        StatusAttribution.fromObject = function (d, q) {
            if (d instanceof $root.StatusAttributions.StatusAttribution)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".StatusAttributions.StatusAttribution: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.StatusAttributions.StatusAttribution();
            switch (d.type) {
            case "UNKNOWN":
            case 0:
                m.type = 0;
                break;
            case "RESHARE":
            case 1:
                m.type = 1;
                break;
            case "EXTERNAL_SHARE":
            case 2:
                m.type = 2;
                break;
            case "MUSIC":
            case 3:
                m.type = 3;
                break;
            case "STATUS_MENTION":
            case 4:
                m.type = 4;
                break;
            case "GROUP_STATUS":
            case 5:
                m.type = 5;
                break;
            case "RL_ATTRIBUTION":
            case 6:
                m.type = 6;
                break;
            case "AI_CREATED":
            case 7:
                m.type = 7;
                break;
            case "LAYOUTS":
            case 8:
                m.type = 8;
                break;
            case "NEWSLETTER_STATUS":
            case 9:
                m.type = 9;
                break;
            case "STATUS_CLOSE_SHARING":
            case 10:
                m.type = 10;
                break;
            case "PAID_PARTNERSHIP":
            case 11:
                m.type = 11;
                break;
            default:
            }
            if (d.actionUrl != null) {
                m.actionUrl = $String(d.actionUrl);
            }
            if (d.statusReshare != null) {
                if (!$util.isObject(d.statusReshare))
                    throw $TypeError(".StatusAttributions.StatusAttribution.statusReshare: object expected");
                m.statusReshare = $root.StatusAttributions.StatusAttribution.StatusReshare.fromObject(d.statusReshare, q + 1);
            }
            if (d.externalShare != null) {
                if (!$util.isObject(d.externalShare))
                    throw $TypeError(".StatusAttributions.StatusAttribution.externalShare: object expected");
                m.externalShare = $root.StatusAttributions.StatusAttribution.ExternalShare.fromObject(d.externalShare, q + 1);
            }
            if (d.music != null) {
                if (!$util.isObject(d.music))
                    throw $TypeError(".StatusAttributions.StatusAttribution.music: object expected");
                m.music = $root.StatusAttributions.StatusAttribution.Music.fromObject(d.music, q + 1);
            }
            if (d.groupStatus != null) {
                if (!$util.isObject(d.groupStatus))
                    throw $TypeError(".StatusAttributions.StatusAttribution.groupStatus: object expected");
                m.groupStatus = $root.StatusAttributions.StatusAttribution.GroupStatus.fromObject(d.groupStatus, q + 1);
            }
            if (d.rlAttribution != null) {
                if (!$util.isObject(d.rlAttribution))
                    throw $TypeError(".StatusAttributions.StatusAttribution.rlAttribution: object expected");
                m.rlAttribution = $root.StatusAttributions.StatusAttribution.RLAttribution.fromObject(d.rlAttribution, q + 1);
            }
            if (d.aiCreatedAttribution != null) {
                if (!$util.isObject(d.aiCreatedAttribution))
                    throw $TypeError(".StatusAttributions.StatusAttribution.aiCreatedAttribution: object expected");
                m.aiCreatedAttribution = $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.fromObject(d.aiCreatedAttribution, q + 1);
            }
            return m;
        };

        StatusAttribution.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.type = o.enums === $String ? "UNKNOWN" : 0;
                d.actionUrl = "";
            }
            if (m.type != null && $Object.hasOwnProperty.call(m, "type")) {
                d.type = o.enums === $String ? $root.StatusAttributions.StatusAttribution.Type[m.type] === $undefined ? m.type : $root.StatusAttributions.StatusAttribution.Type[m.type] : m.type;
            }
            if (m.actionUrl != null && $Object.hasOwnProperty.call(m, "actionUrl")) {
                d.actionUrl = m.actionUrl;
            }
            if (m.statusReshare != null && $Object.hasOwnProperty.call(m, "statusReshare")) {
                d.statusReshare = $root.StatusAttributions.StatusAttribution.StatusReshare.toObject(m.statusReshare, o, q + 1);
                if (o.oneofs)
                    d.attributionData = "statusReshare";
            }
            if (m.externalShare != null && $Object.hasOwnProperty.call(m, "externalShare")) {
                d.externalShare = $root.StatusAttributions.StatusAttribution.ExternalShare.toObject(m.externalShare, o, q + 1);
                if (o.oneofs)
                    d.attributionData = "externalShare";
            }
            if (m.music != null && $Object.hasOwnProperty.call(m, "music")) {
                d.music = $root.StatusAttributions.StatusAttribution.Music.toObject(m.music, o, q + 1);
                if (o.oneofs)
                    d.attributionData = "music";
            }
            if (m.groupStatus != null && $Object.hasOwnProperty.call(m, "groupStatus")) {
                d.groupStatus = $root.StatusAttributions.StatusAttribution.GroupStatus.toObject(m.groupStatus, o, q + 1);
                if (o.oneofs)
                    d.attributionData = "groupStatus";
            }
            if (m.rlAttribution != null && $Object.hasOwnProperty.call(m, "rlAttribution")) {
                d.rlAttribution = $root.StatusAttributions.StatusAttribution.RLAttribution.toObject(m.rlAttribution, o, q + 1);
                if (o.oneofs)
                    d.attributionData = "rlAttribution";
            }
            if (m.aiCreatedAttribution != null && $Object.hasOwnProperty.call(m, "aiCreatedAttribution")) {
                d.aiCreatedAttribution = $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.toObject(m.aiCreatedAttribution, o, q + 1);
                if (o.oneofs)
                    d.attributionData = "aiCreatedAttribution";
            }
            return d;
        };

        StatusAttribution.prototype.toJSON = function() {
            return StatusAttribution.toObject(this, $protobuf.util.toJSONOptions);
        };

        StatusAttribution.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/StatusAttributions.StatusAttribution";
        };

        StatusAttribution.AiCreatedAttribution = (function() {

            const AiCreatedAttribution = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            AiCreatedAttribution.prototype.source = 0;

            AiCreatedAttribution.create = function(properties) {
                return new AiCreatedAttribution(properties);
            };

            AiCreatedAttribution.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.source != null && $Object.hasOwnProperty.call(m, "source"))
                    w.uint32(8).int32(m.source);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            AiCreatedAttribution.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.StatusAttributions.StatusAttribution.AiCreatedAttribution(), v;
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
                            if ($root.StatusAttributions.StatusAttribution.AiCreatedAttribution.Source[v] !== $undefined) {
                                m.source = v;
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

            AiCreatedAttribution.fromObject = function (d, q) {
                if (d instanceof $root.StatusAttributions.StatusAttribution.AiCreatedAttribution)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".StatusAttributions.StatusAttribution.AiCreatedAttribution: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.StatusAttributions.StatusAttribution.AiCreatedAttribution();
                switch (d.source) {
                case "UNKNOWN":
                case 0:
                    m.source = 0;
                    break;
                case "STATUS_MIMICRY":
                case 1:
                    m.source = 1;
                    break;
                default:
                }
                return m;
            };

            AiCreatedAttribution.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.source = o.enums === $String ? "UNKNOWN" : 0;
                }
                if (m.source != null && $Object.hasOwnProperty.call(m, "source")) {
                    d.source = o.enums === $String ? $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.Source[m.source] === $undefined ? m.source : $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.Source[m.source] : m.source;
                }
                return d;
            };

            AiCreatedAttribution.prototype.toJSON = function() {
                return AiCreatedAttribution.toObject(this, $protobuf.util.toJSONOptions);
            };

            AiCreatedAttribution.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/StatusAttributions.StatusAttribution.AiCreatedAttribution";
            };

            AiCreatedAttribution.Source = (function() {
                const valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "STATUS_MIMICRY"] = 1;
                return values;
            })();

            return AiCreatedAttribution;
        })();

        StatusAttribution.ExternalShare = (function() {

            const ExternalShare = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            ExternalShare.prototype.actionUrl = "";
            ExternalShare.prototype.source = 0;
            ExternalShare.prototype.duration = 0;
            ExternalShare.prototype.actionFallbackUrl = "";

            ExternalShare.create = function(properties) {
                return new ExternalShare(properties);
            };

            ExternalShare.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.actionUrl != null && $Object.hasOwnProperty.call(m, "actionUrl"))
                    w.uint32(10).string(m.actionUrl);
                if (m.source != null && $Object.hasOwnProperty.call(m, "source"))
                    w.uint32(16).int32(m.source);
                if (m.duration != null && $Object.hasOwnProperty.call(m, "duration"))
                    w.uint32(24).int32(m.duration);
                if (m.actionFallbackUrl != null && $Object.hasOwnProperty.call(m, "actionFallbackUrl"))
                    w.uint32(34).string(m.actionFallbackUrl);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            ExternalShare.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.StatusAttributions.StatusAttribution.ExternalShare(), v;
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
                            m.actionUrl = r.string();
                            continue;
                        }
                    case 2: {
                            if (u !== 0)
                                break;
                            v = r.int32();
                            if ($root.StatusAttributions.StatusAttribution.ExternalShare.Source[v] !== $undefined) {
                                m.source = v;
                            } else if (!r.discardUnknown) {
                                $util.makeProp(m, "$unknowns", false);
                                (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                            }
                            continue;
                        }
                    case 3: {
                            if (u !== 0)
                                break;
                            m.duration = r.int32();
                            continue;
                        }
                    case 4: {
                            if (u !== 2)
                                break;
                            m.actionFallbackUrl = r.string();
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

            ExternalShare.fromObject = function (d, q) {
                if (d instanceof $root.StatusAttributions.StatusAttribution.ExternalShare)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".StatusAttributions.StatusAttribution.ExternalShare: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.StatusAttributions.StatusAttribution.ExternalShare();
                if (d.actionUrl != null) {
                    m.actionUrl = $String(d.actionUrl);
                }
                switch (d.source) {
                case "UNKNOWN":
                case 0:
                    m.source = 0;
                    break;
                case "INSTAGRAM":
                case 1:
                    m.source = 1;
                    break;
                case "FACEBOOK":
                case 2:
                    m.source = 2;
                    break;
                case "MESSENGER":
                case 3:
                    m.source = 3;
                    break;
                case "SPOTIFY":
                case 4:
                    m.source = 4;
                    break;
                case "YOUTUBE":
                case 5:
                    m.source = 5;
                    break;
                case "PINTEREST":
                case 6:
                    m.source = 6;
                    break;
                case "THREADS":
                case 7:
                    m.source = 7;
                    break;
                case "APPLE_MUSIC":
                case 8:
                    m.source = 8;
                    break;
                case "SHARECHAT":
                case 9:
                    m.source = 9;
                    break;
                case "GOOGLE_PHOTOS":
                case 10:
                    m.source = 10;
                    break;
                case "SOUNDCLOUD":
                case 11:
                    m.source = 11;
                    break;
                case "SHAZAM":
                case 12:
                    m.source = 12;
                    break;
                case "PICSART":
                case 13:
                    m.source = 13;
                    break;
                default:
                }
                if (d.duration != null) {
                    m.duration = d.duration | 0;
                }
                if (d.actionFallbackUrl != null) {
                    m.actionFallbackUrl = $String(d.actionFallbackUrl);
                }
                return m;
            };

            ExternalShare.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.actionUrl = "";
                    d.source = o.enums === $String ? "UNKNOWN" : 0;
                    d.duration = 0;
                    d.actionFallbackUrl = "";
                }
                if (m.actionUrl != null && $Object.hasOwnProperty.call(m, "actionUrl")) {
                    d.actionUrl = m.actionUrl;
                }
                if (m.source != null && $Object.hasOwnProperty.call(m, "source")) {
                    d.source = o.enums === $String ? $root.StatusAttributions.StatusAttribution.ExternalShare.Source[m.source] === $undefined ? m.source : $root.StatusAttributions.StatusAttribution.ExternalShare.Source[m.source] : m.source;
                }
                if (m.duration != null && $Object.hasOwnProperty.call(m, "duration")) {
                    d.duration = m.duration;
                }
                if (m.actionFallbackUrl != null && $Object.hasOwnProperty.call(m, "actionFallbackUrl")) {
                    d.actionFallbackUrl = m.actionFallbackUrl;
                }
                return d;
            };

            ExternalShare.prototype.toJSON = function() {
                return ExternalShare.toObject(this, $protobuf.util.toJSONOptions);
            };

            ExternalShare.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/StatusAttributions.StatusAttribution.ExternalShare";
            };

            ExternalShare.Source = (function() {
                const valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "INSTAGRAM"] = 1;
                values[valuesById[2] = "FACEBOOK"] = 2;
                values[valuesById[3] = "MESSENGER"] = 3;
                values[valuesById[4] = "SPOTIFY"] = 4;
                values[valuesById[5] = "YOUTUBE"] = 5;
                values[valuesById[6] = "PINTEREST"] = 6;
                values[valuesById[7] = "THREADS"] = 7;
                values[valuesById[8] = "APPLE_MUSIC"] = 8;
                values[valuesById[9] = "SHARECHAT"] = 9;
                values[valuesById[10] = "GOOGLE_PHOTOS"] = 10;
                values[valuesById[11] = "SOUNDCLOUD"] = 11;
                values[valuesById[12] = "SHAZAM"] = 12;
                values[valuesById[13] = "PICSART"] = 13;
                return values;
            })();

            return ExternalShare;
        })();

        StatusAttribution.GroupStatus = (function() {

            const GroupStatus = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            GroupStatus.prototype.authorJid = "";

            GroupStatus.create = function(properties) {
                return new GroupStatus(properties);
            };

            GroupStatus.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.authorJid != null && $Object.hasOwnProperty.call(m, "authorJid"))
                    w.uint32(10).string(m.authorJid);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            GroupStatus.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.StatusAttributions.StatusAttribution.GroupStatus();
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
                            m.authorJid = r.string();
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

            GroupStatus.fromObject = function (d, q) {
                if (d instanceof $root.StatusAttributions.StatusAttribution.GroupStatus)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".StatusAttributions.StatusAttribution.GroupStatus: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.StatusAttributions.StatusAttribution.GroupStatus();
                if (d.authorJid != null) {
                    m.authorJid = $String(d.authorJid);
                }
                return m;
            };

            GroupStatus.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.authorJid = "";
                }
                if (m.authorJid != null && $Object.hasOwnProperty.call(m, "authorJid")) {
                    d.authorJid = m.authorJid;
                }
                return d;
            };

            GroupStatus.prototype.toJSON = function() {
                return GroupStatus.toObject(this, $protobuf.util.toJSONOptions);
            };

            GroupStatus.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/StatusAttributions.StatusAttribution.GroupStatus";
            };

            return GroupStatus;
        })();

        StatusAttribution.Music = (function() {

            const Music = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            Music.prototype.authorName = "";
            Music.prototype.songId = "";
            Music.prototype.title = "";
            Music.prototype.author = "";
            Music.prototype.artistAttribution = "";
            Music.prototype.isExplicit = false;

            Music.create = function(properties) {
                return new Music(properties);
            };

            Music.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.authorName != null && $Object.hasOwnProperty.call(m, "authorName"))
                    w.uint32(10).string(m.authorName);
                if (m.songId != null && $Object.hasOwnProperty.call(m, "songId"))
                    w.uint32(18).string(m.songId);
                if (m.title != null && $Object.hasOwnProperty.call(m, "title"))
                    w.uint32(26).string(m.title);
                if (m.author != null && $Object.hasOwnProperty.call(m, "author"))
                    w.uint32(34).string(m.author);
                if (m.artistAttribution != null && $Object.hasOwnProperty.call(m, "artistAttribution"))
                    w.uint32(42).string(m.artistAttribution);
                if (m.isExplicit != null && $Object.hasOwnProperty.call(m, "isExplicit"))
                    w.uint32(48).bool(m.isExplicit);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            Music.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.StatusAttributions.StatusAttribution.Music();
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
                            m.authorName = r.string();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.songId = r.string();
                            continue;
                        }
                    case 3: {
                            if (u !== 2)
                                break;
                            m.title = r.string();
                            continue;
                        }
                    case 4: {
                            if (u !== 2)
                                break;
                            m.author = r.string();
                            continue;
                        }
                    case 5: {
                            if (u !== 2)
                                break;
                            m.artistAttribution = r.string();
                            continue;
                        }
                    case 6: {
                            if (u !== 0)
                                break;
                            m.isExplicit = r.bool();
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

            Music.fromObject = function (d, q) {
                if (d instanceof $root.StatusAttributions.StatusAttribution.Music)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".StatusAttributions.StatusAttribution.Music: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.StatusAttributions.StatusAttribution.Music();
                if (d.authorName != null) {
                    m.authorName = $String(d.authorName);
                }
                if (d.songId != null) {
                    m.songId = $String(d.songId);
                }
                if (d.title != null) {
                    m.title = $String(d.title);
                }
                if (d.author != null) {
                    m.author = $String(d.author);
                }
                if (d.artistAttribution != null) {
                    m.artistAttribution = $String(d.artistAttribution);
                }
                if (d.isExplicit != null) {
                    m.isExplicit = $Boolean(d.isExplicit);
                }
                return m;
            };

            Music.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.authorName = "";
                    d.songId = "";
                    d.title = "";
                    d.author = "";
                    d.artistAttribution = "";
                    d.isExplicit = false;
                }
                if (m.authorName != null && $Object.hasOwnProperty.call(m, "authorName")) {
                    d.authorName = m.authorName;
                }
                if (m.songId != null && $Object.hasOwnProperty.call(m, "songId")) {
                    d.songId = m.songId;
                }
                if (m.title != null && $Object.hasOwnProperty.call(m, "title")) {
                    d.title = m.title;
                }
                if (m.author != null && $Object.hasOwnProperty.call(m, "author")) {
                    d.author = m.author;
                }
                if (m.artistAttribution != null && $Object.hasOwnProperty.call(m, "artistAttribution")) {
                    d.artistAttribution = m.artistAttribution;
                }
                if (m.isExplicit != null && $Object.hasOwnProperty.call(m, "isExplicit")) {
                    d.isExplicit = m.isExplicit;
                }
                return d;
            };

            Music.prototype.toJSON = function() {
                return Music.toObject(this, $protobuf.util.toJSONOptions);
            };

            Music.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/StatusAttributions.StatusAttribution.Music";
            };

            return Music;
        })();

        StatusAttribution.RLAttribution = (function() {

            const RLAttribution = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            RLAttribution.prototype.source = 0;

            RLAttribution.create = function(properties) {
                return new RLAttribution(properties);
            };

            RLAttribution.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.source != null && $Object.hasOwnProperty.call(m, "source"))
                    w.uint32(8).int32(m.source);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            RLAttribution.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.StatusAttributions.StatusAttribution.RLAttribution(), v;
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
                            if ($root.StatusAttributions.StatusAttribution.RLAttribution.Source[v] !== $undefined) {
                                m.source = v;
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

            RLAttribution.fromObject = function (d, q) {
                if (d instanceof $root.StatusAttributions.StatusAttribution.RLAttribution)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".StatusAttributions.StatusAttribution.RLAttribution: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.StatusAttributions.StatusAttribution.RLAttribution();
                switch (d.source) {
                case "UNKNOWN":
                case 0:
                    m.source = 0;
                    break;
                case "RAY_BAN_META_GLASSES":
                case 1:
                    m.source = 1;
                    break;
                case "OAKLEY_META_GLASSES":
                case 2:
                    m.source = 2;
                    break;
                case "HYPERNOVA_GLASSES":
                case 3:
                    m.source = 3;
                    break;
                default:
                }
                return m;
            };

            RLAttribution.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.source = o.enums === $String ? "UNKNOWN" : 0;
                }
                if (m.source != null && $Object.hasOwnProperty.call(m, "source")) {
                    d.source = o.enums === $String ? $root.StatusAttributions.StatusAttribution.RLAttribution.Source[m.source] === $undefined ? m.source : $root.StatusAttributions.StatusAttribution.RLAttribution.Source[m.source] : m.source;
                }
                return d;
            };

            RLAttribution.prototype.toJSON = function() {
                return RLAttribution.toObject(this, $protobuf.util.toJSONOptions);
            };

            RLAttribution.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/StatusAttributions.StatusAttribution.RLAttribution";
            };

            RLAttribution.Source = (function() {
                const valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "RAY_BAN_META_GLASSES"] = 1;
                values[valuesById[2] = "OAKLEY_META_GLASSES"] = 2;
                values[valuesById[3] = "HYPERNOVA_GLASSES"] = 3;
                return values;
            })();

            return RLAttribution;
        })();

        StatusAttribution.StatusReshare = (function() {

            const StatusReshare = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            StatusReshare.prototype.source = 0;
            StatusReshare.prototype.metadata = null;

            StatusReshare.create = function(properties) {
                return new StatusReshare(properties);
            };

            StatusReshare.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.source != null && $Object.hasOwnProperty.call(m, "source"))
                    w.uint32(8).int32(m.source);
                if (m.metadata != null && $Object.hasOwnProperty.call(m, "metadata"))
                    $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.encode(m.metadata, w.uint32(18).fork(), q + 1).ldelim();
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            StatusReshare.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.StatusAttributions.StatusAttribution.StatusReshare(), v;
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
                            if ($root.StatusAttributions.StatusAttribution.StatusReshare.Source[v] !== $undefined) {
                                m.source = v;
                            } else if (!r.discardUnknown) {
                                $util.makeProp(m, "$unknowns", false);
                                (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                            }
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.metadata = $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.decode(r, r.uint32(), $undefined, q + 1, m.metadata);
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

            StatusReshare.fromObject = function (d, q) {
                if (d instanceof $root.StatusAttributions.StatusAttribution.StatusReshare)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".StatusAttributions.StatusAttribution.StatusReshare: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.StatusAttributions.StatusAttribution.StatusReshare();
                switch (d.source) {
                case "UNKNOWN":
                case 0:
                    m.source = 0;
                    break;
                case "INTERNAL_RESHARE":
                case 1:
                    m.source = 1;
                    break;
                case "MENTION_RESHARE":
                case 2:
                    m.source = 2;
                    break;
                case "CHANNEL_RESHARE":
                case 3:
                    m.source = 3;
                    break;
                case "FORWARD":
                case 4:
                    m.source = 4;
                    break;
                default:
                }
                if (d.metadata != null) {
                    if (!$util.isObject(d.metadata))
                        throw $TypeError(".StatusAttributions.StatusAttribution.StatusReshare.metadata: object expected");
                    m.metadata = $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.fromObject(d.metadata, q + 1);
                }
                return m;
            };

            StatusReshare.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.source = o.enums === $String ? "UNKNOWN" : 0;
                    d.metadata = null;
                }
                if (m.source != null && $Object.hasOwnProperty.call(m, "source")) {
                    d.source = o.enums === $String ? $root.StatusAttributions.StatusAttribution.StatusReshare.Source[m.source] === $undefined ? m.source : $root.StatusAttributions.StatusAttribution.StatusReshare.Source[m.source] : m.source;
                }
                if (m.metadata != null && $Object.hasOwnProperty.call(m, "metadata")) {
                    d.metadata = $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.toObject(m.metadata, o, q + 1);
                }
                return d;
            };

            StatusReshare.prototype.toJSON = function() {
                return StatusReshare.toObject(this, $protobuf.util.toJSONOptions);
            };

            StatusReshare.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/StatusAttributions.StatusAttribution.StatusReshare";
            };

            StatusReshare.Metadata = (function() {

                const Metadata = function (p) {
                    if (p)
                        for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                };

                Metadata.prototype.duration = 0;
                Metadata.prototype.channelJid = "";
                Metadata.prototype.channelMessageId = 0;
                Metadata.prototype.hasMultipleReshares = false;

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
                    if (m.duration != null && $Object.hasOwnProperty.call(m, "duration"))
                        w.uint32(8).int32(m.duration);
                    if (m.channelJid != null && $Object.hasOwnProperty.call(m, "channelJid"))
                        w.uint32(18).string(m.channelJid);
                    if (m.channelMessageId != null && $Object.hasOwnProperty.call(m, "channelMessageId"))
                        w.uint32(24).int32(m.channelMessageId);
                    if (m.hasMultipleReshares != null && $Object.hasOwnProperty.call(m, "hasMultipleReshares"))
                        w.uint32(32).bool(m.hasMultipleReshares);
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
                    var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata();
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
                                m.duration = r.int32();
                                continue;
                            }
                        case 2: {
                                if (u !== 2)
                                    break;
                                m.channelJid = r.string();
                                continue;
                            }
                        case 3: {
                                if (u !== 0)
                                    break;
                                m.channelMessageId = r.int32();
                                continue;
                            }
                        case 4: {
                                if (u !== 0)
                                    break;
                                m.hasMultipleReshares = r.bool();
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
                    if (d instanceof $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata)
                        return d;
                    if (!$util.isObject(d))
                        throw $TypeError(".StatusAttributions.StatusAttribution.StatusReshare.Metadata: object expected");
                    if (q === $undefined)
                        q = 0;
                    if (q > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var m = new $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata();
                    if (d.duration != null) {
                        m.duration = d.duration | 0;
                    }
                    if (d.channelJid != null) {
                        m.channelJid = $String(d.channelJid);
                    }
                    if (d.channelMessageId != null) {
                        m.channelMessageId = d.channelMessageId | 0;
                    }
                    if (d.hasMultipleReshares != null) {
                        m.hasMultipleReshares = $Boolean(d.hasMultipleReshares);
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
                        d.duration = 0;
                        d.channelJid = "";
                        d.channelMessageId = 0;
                        d.hasMultipleReshares = false;
                    }
                    if (m.duration != null && $Object.hasOwnProperty.call(m, "duration")) {
                        d.duration = m.duration;
                    }
                    if (m.channelJid != null && $Object.hasOwnProperty.call(m, "channelJid")) {
                        d.channelJid = m.channelJid;
                    }
                    if (m.channelMessageId != null && $Object.hasOwnProperty.call(m, "channelMessageId")) {
                        d.channelMessageId = m.channelMessageId;
                    }
                    if (m.hasMultipleReshares != null && $Object.hasOwnProperty.call(m, "hasMultipleReshares")) {
                        d.hasMultipleReshares = m.hasMultipleReshares;
                    }
                    return d;
                };

                Metadata.prototype.toJSON = function() {
                    return Metadata.toObject(this, $protobuf.util.toJSONOptions);
                };

                Metadata.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/StatusAttributions.StatusAttribution.StatusReshare.Metadata";
                };

                return Metadata;
            })();

            StatusReshare.Source = (function() {
                const valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "INTERNAL_RESHARE"] = 1;
                values[valuesById[2] = "MENTION_RESHARE"] = 2;
                values[valuesById[3] = "CHANNEL_RESHARE"] = 3;
                values[valuesById[4] = "FORWARD"] = 4;
                return values;
            })();

            return StatusReshare;
        })();

        StatusAttribution.Type = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "RESHARE"] = 1;
            values[valuesById[2] = "EXTERNAL_SHARE"] = 2;
            values[valuesById[3] = "MUSIC"] = 3;
            values[valuesById[4] = "STATUS_MENTION"] = 4;
            values[valuesById[5] = "GROUP_STATUS"] = 5;
            values[valuesById[6] = "RL_ATTRIBUTION"] = 6;
            values[valuesById[7] = "AI_CREATED"] = 7;
            values[valuesById[8] = "LAYOUTS"] = 8;
            values[valuesById[9] = "NEWSLETTER_STATUS"] = 9;
            values[valuesById[10] = "STATUS_CLOSE_SHARING"] = 10;
            values[valuesById[11] = "PAID_PARTNERSHIP"] = 11;
            return values;
        })();

        return StatusAttribution;
    })();

    return StatusAttributions;
})();

export {
  $root as default
};
