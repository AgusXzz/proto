/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $Boolean = $util.global.Boolean, $parseInt = $util.global.parseInt, $String = $util.global.String, $Number = $util.global.Number, $BigInt = $util.global.BigInt, $Array = $util.global.Array;

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

export const VnameCert = $root.VnameCert = (() => {

    const VnameCert = {};

    VnameCert.BizIdentityInfo = (function() {

        const BizIdentityInfo = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BizIdentityInfo.prototype.vlevel = 0;
        BizIdentityInfo.prototype.vnameCert = null;
        BizIdentityInfo.prototype.signed = false;
        BizIdentityInfo.prototype.revoked = false;
        BizIdentityInfo.prototype.hostStorage = 0;
        BizIdentityInfo.prototype.actualActors = 0;
        BizIdentityInfo.prototype.privacyModeTs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        BizIdentityInfo.prototype.featureControls = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        BizIdentityInfo.create = function(properties) {
            return new BizIdentityInfo(properties);
        };

        BizIdentityInfo.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.vlevel != null && $Object.hasOwnProperty.call(m, "vlevel"))
                w.uint32(8).int32(m.vlevel);
            if (m.vnameCert != null && $Object.hasOwnProperty.call(m, "vnameCert"))
                $root.VnameCert.VerifiedNameCertificate.encode(m.vnameCert, w.uint32(18).fork(), q + 1).ldelim();
            if (m.signed != null && $Object.hasOwnProperty.call(m, "signed"))
                w.uint32(24).bool(m.signed);
            if (m.revoked != null && $Object.hasOwnProperty.call(m, "revoked"))
                w.uint32(32).bool(m.revoked);
            if (m.hostStorage != null && $Object.hasOwnProperty.call(m, "hostStorage"))
                w.uint32(40).int32(m.hostStorage);
            if (m.actualActors != null && $Object.hasOwnProperty.call(m, "actualActors"))
                w.uint32(48).int32(m.actualActors);
            if (m.privacyModeTs != null && $Object.hasOwnProperty.call(m, "privacyModeTs"))
                w.uint32(56).uint64(m.privacyModeTs);
            if (m.featureControls != null && $Object.hasOwnProperty.call(m, "featureControls"))
                w.uint32(64).uint64(m.featureControls);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BizIdentityInfo.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.VnameCert.BizIdentityInfo(), v;
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
                        if ($root.VnameCert.BizIdentityInfo.VerifiedLevelValue[v] !== $undefined) {
                            m.vlevel = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.vnameCert = $root.VnameCert.VerifiedNameCertificate.decode(r, r.uint32(), $undefined, q + 1, m.vnameCert);
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        m.signed = r.bool();
                        continue;
                    }
                case 4: {
                        if (u !== 0)
                            break;
                        m.revoked = r.bool();
                        continue;
                    }
                case 5: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.VnameCert.BizIdentityInfo.HostStorageType[v] !== $undefined) {
                            m.hostStorage = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 6: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.VnameCert.BizIdentityInfo.ActualActorsType[v] !== $undefined) {
                            m.actualActors = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 7: {
                        if (u !== 0)
                            break;
                        m.privacyModeTs = r.uint64();
                        continue;
                    }
                case 8: {
                        if (u !== 0)
                            break;
                        m.featureControls = r.uint64();
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

        BizIdentityInfo.fromObject = function (d, q) {
            if (d instanceof $root.VnameCert.BizIdentityInfo)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".VnameCert.BizIdentityInfo: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.VnameCert.BizIdentityInfo();
            switch (d.vlevel) {
            case "UNKNOWN":
            case 0:
                m.vlevel = 0;
                break;
            case "LOW":
            case 1:
                m.vlevel = 1;
                break;
            case "HIGH":
            case 2:
                m.vlevel = 2;
                break;
            default:
            }
            if (d.vnameCert != null) {
                if (!$util.isObject(d.vnameCert))
                    throw $TypeError(".VnameCert.BizIdentityInfo.vnameCert: object expected");
                m.vnameCert = $root.VnameCert.VerifiedNameCertificate.fromObject(d.vnameCert, q + 1);
            }
            if (d.signed != null) {
                m.signed = $Boolean(d.signed);
            }
            if (d.revoked != null) {
                m.revoked = $Boolean(d.revoked);
            }
            switch (d.hostStorage) {
            case "ON_PREMISE":
            case 0:
                m.hostStorage = 0;
                break;
            case "FACEBOOK":
            case 1:
                m.hostStorage = 1;
                break;
            default:
            }
            switch (d.actualActors) {
            case "SELF":
            case 0:
                m.actualActors = 0;
                break;
            case "BSP":
            case 1:
                m.actualActors = 1;
                break;
            default:
            }
            if (d.privacyModeTs != null) {
                if ($util.Long)
                    m.privacyModeTs = $util.Long.fromValue(d.privacyModeTs, true);
                else if (typeof d.privacyModeTs === "string")
                    m.privacyModeTs = $parseInt(d.privacyModeTs, 10);
                else if (typeof d.privacyModeTs === "number")
                    m.privacyModeTs = d.privacyModeTs;
                else if (typeof d.privacyModeTs === "object")
                    m.privacyModeTs = new $util.LongBits(d.privacyModeTs.low >>> 0, d.privacyModeTs.high >>> 0).toNumber(true);
            }
            if (d.featureControls != null) {
                if ($util.Long)
                    m.featureControls = $util.Long.fromValue(d.featureControls, true);
                else if (typeof d.featureControls === "string")
                    m.featureControls = $parseInt(d.featureControls, 10);
                else if (typeof d.featureControls === "number")
                    m.featureControls = d.featureControls;
                else if (typeof d.featureControls === "object")
                    m.featureControls = new $util.LongBits(d.featureControls.low >>> 0, d.featureControls.high >>> 0).toNumber(true);
            }
            return m;
        };

        BizIdentityInfo.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.vlevel = o.enums === $String ? "UNKNOWN" : 0;
                d.vnameCert = null;
                d.signed = false;
                d.revoked = false;
                d.hostStorage = o.enums === $String ? "ON_PREMISE" : 0;
                d.actualActors = o.enums === $String ? "SELF" : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, true);
                    d.privacyModeTs = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.privacyModeTs = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, true);
                    d.featureControls = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.featureControls = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
            }
            if (m.vlevel != null && $Object.hasOwnProperty.call(m, "vlevel")) {
                d.vlevel = o.enums === $String ? $root.VnameCert.BizIdentityInfo.VerifiedLevelValue[m.vlevel] === $undefined ? m.vlevel : $root.VnameCert.BizIdentityInfo.VerifiedLevelValue[m.vlevel] : m.vlevel;
            }
            if (m.vnameCert != null && $Object.hasOwnProperty.call(m, "vnameCert")) {
                d.vnameCert = $root.VnameCert.VerifiedNameCertificate.toObject(m.vnameCert, o, q + 1);
            }
            if (m.signed != null && $Object.hasOwnProperty.call(m, "signed")) {
                d.signed = m.signed;
            }
            if (m.revoked != null && $Object.hasOwnProperty.call(m, "revoked")) {
                d.revoked = m.revoked;
            }
            if (m.hostStorage != null && $Object.hasOwnProperty.call(m, "hostStorage")) {
                d.hostStorage = o.enums === $String ? $root.VnameCert.BizIdentityInfo.HostStorageType[m.hostStorage] === $undefined ? m.hostStorage : $root.VnameCert.BizIdentityInfo.HostStorageType[m.hostStorage] : m.hostStorage;
            }
            if (m.actualActors != null && $Object.hasOwnProperty.call(m, "actualActors")) {
                d.actualActors = o.enums === $String ? $root.VnameCert.BizIdentityInfo.ActualActorsType[m.actualActors] === $undefined ? m.actualActors : $root.VnameCert.BizIdentityInfo.ActualActorsType[m.actualActors] : m.actualActors;
            }
            if (m.privacyModeTs != null && $Object.hasOwnProperty.call(m, "privacyModeTs")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.privacyModeTs = typeof m.privacyModeTs === "number" ? $BigInt(m.privacyModeTs) : $util.Long.fromBits(m.privacyModeTs.low >>> 0, m.privacyModeTs.high >>> 0, true).toBigInt();
                else if (typeof m.privacyModeTs === "number")
                    d.privacyModeTs = o.longs === $String ? $String(m.privacyModeTs) : m.privacyModeTs;
                else
                    d.privacyModeTs = o.longs === String ? longToString(m.privacyModeTs, true) : o.longs === Number ? longToNumber(m.privacyModeTs, true) : m.privacyModeTs;
            }
            if (m.featureControls != null && $Object.hasOwnProperty.call(m, "featureControls")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.featureControls = typeof m.featureControls === "number" ? $BigInt(m.featureControls) : $util.Long.fromBits(m.featureControls.low >>> 0, m.featureControls.high >>> 0, true).toBigInt();
                else if (typeof m.featureControls === "number")
                    d.featureControls = o.longs === $String ? $String(m.featureControls) : m.featureControls;
                else
                    d.featureControls = o.longs === String ? longToString(m.featureControls, true) : o.longs === Number ? longToNumber(m.featureControls, true) : m.featureControls;
            }
            return d;
        };

        BizIdentityInfo.prototype.toJSON = function() {
            return BizIdentityInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        BizIdentityInfo.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/VnameCert.BizIdentityInfo";
        };

        BizIdentityInfo.ActualActorsType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "SELF"] = 0;
            values[valuesById[1] = "BSP"] = 1;
            return values;
        })();

        BizIdentityInfo.HostStorageType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "ON_PREMISE"] = 0;
            values[valuesById[1] = "FACEBOOK"] = 1;
            return values;
        })();

        BizIdentityInfo.VerifiedLevelValue = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "LOW"] = 1;
            values[valuesById[2] = "HIGH"] = 2;
            return values;
        })();

        return BizIdentityInfo;
    })();

    VnameCert.BizAccountLinkInfo = (function() {

        const BizAccountLinkInfo = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BizAccountLinkInfo.prototype.whatsappBizAcctFbid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        BizAccountLinkInfo.prototype.whatsappAcctNumber = "";
        BizAccountLinkInfo.prototype.issueTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        BizAccountLinkInfo.prototype.hostStorage = 0;
        BizAccountLinkInfo.prototype.accountType = 0;

        BizAccountLinkInfo.create = function(properties) {
            return new BizAccountLinkInfo(properties);
        };

        BizAccountLinkInfo.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.whatsappBizAcctFbid != null && $Object.hasOwnProperty.call(m, "whatsappBizAcctFbid"))
                w.uint32(8).uint64(m.whatsappBizAcctFbid);
            if (m.whatsappAcctNumber != null && $Object.hasOwnProperty.call(m, "whatsappAcctNumber"))
                w.uint32(18).string(m.whatsappAcctNumber);
            if (m.issueTime != null && $Object.hasOwnProperty.call(m, "issueTime"))
                w.uint32(24).uint64(m.issueTime);
            if (m.hostStorage != null && $Object.hasOwnProperty.call(m, "hostStorage"))
                w.uint32(32).int32(m.hostStorage);
            if (m.accountType != null && $Object.hasOwnProperty.call(m, "accountType"))
                w.uint32(40).int32(m.accountType);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BizAccountLinkInfo.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.VnameCert.BizAccountLinkInfo(), v;
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
                        m.whatsappBizAcctFbid = r.uint64();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.whatsappAcctNumber = r.string();
                        continue;
                    }
                case 3: {
                        if (u !== 0)
                            break;
                        m.issueTime = r.uint64();
                        continue;
                    }
                case 4: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.VnameCert.BizAccountLinkInfo.HostStorageType[v] !== $undefined) {
                            m.hostStorage = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 5: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.VnameCert.BizAccountLinkInfo.AccountType[v] !== $undefined) {
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

        BizAccountLinkInfo.fromObject = function (d, q) {
            if (d instanceof $root.VnameCert.BizAccountLinkInfo)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".VnameCert.BizAccountLinkInfo: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.VnameCert.BizAccountLinkInfo();
            if (d.whatsappBizAcctFbid != null) {
                if ($util.Long)
                    m.whatsappBizAcctFbid = $util.Long.fromValue(d.whatsappBizAcctFbid, true);
                else if (typeof d.whatsappBizAcctFbid === "string")
                    m.whatsappBizAcctFbid = $parseInt(d.whatsappBizAcctFbid, 10);
                else if (typeof d.whatsappBizAcctFbid === "number")
                    m.whatsappBizAcctFbid = d.whatsappBizAcctFbid;
                else if (typeof d.whatsappBizAcctFbid === "object")
                    m.whatsappBizAcctFbid = new $util.LongBits(d.whatsappBizAcctFbid.low >>> 0, d.whatsappBizAcctFbid.high >>> 0).toNumber(true);
            }
            if (d.whatsappAcctNumber != null) {
                m.whatsappAcctNumber = $String(d.whatsappAcctNumber);
            }
            if (d.issueTime != null) {
                if ($util.Long)
                    m.issueTime = $util.Long.fromValue(d.issueTime, true);
                else if (typeof d.issueTime === "string")
                    m.issueTime = $parseInt(d.issueTime, 10);
                else if (typeof d.issueTime === "number")
                    m.issueTime = d.issueTime;
                else if (typeof d.issueTime === "object")
                    m.issueTime = new $util.LongBits(d.issueTime.low >>> 0, d.issueTime.high >>> 0).toNumber(true);
            }
            switch (d.hostStorage) {
            case "ON_PREMISE":
            case 0:
                m.hostStorage = 0;
                break;
            case "FACEBOOK":
            case 1:
                m.hostStorage = 1;
                break;
            default:
            }
            switch (d.accountType) {
            case "ENTERPRISE":
            case 0:
                m.accountType = 0;
                break;
            default:
            }
            return m;
        };

        BizAccountLinkInfo.toObject = function (m, o, q) {
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
                    d.whatsappBizAcctFbid = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.whatsappBizAcctFbid = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.whatsappAcctNumber = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, true);
                    d.issueTime = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.issueTime = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.hostStorage = o.enums === $String ? "ON_PREMISE" : 0;
                d.accountType = o.enums === $String ? "ENTERPRISE" : 0;
            }
            if (m.whatsappBizAcctFbid != null && $Object.hasOwnProperty.call(m, "whatsappBizAcctFbid")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.whatsappBizAcctFbid = typeof m.whatsappBizAcctFbid === "number" ? $BigInt(m.whatsappBizAcctFbid) : $util.Long.fromBits(m.whatsappBizAcctFbid.low >>> 0, m.whatsappBizAcctFbid.high >>> 0, true).toBigInt();
                else if (typeof m.whatsappBizAcctFbid === "number")
                    d.whatsappBizAcctFbid = o.longs === $String ? $String(m.whatsappBizAcctFbid) : m.whatsappBizAcctFbid;
                else
                    d.whatsappBizAcctFbid = o.longs === String ? longToString(m.whatsappBizAcctFbid, true) : o.longs === Number ? longToNumber(m.whatsappBizAcctFbid, true) : m.whatsappBizAcctFbid;
            }
            if (m.whatsappAcctNumber != null && $Object.hasOwnProperty.call(m, "whatsappAcctNumber")) {
                d.whatsappAcctNumber = m.whatsappAcctNumber;
            }
            if (m.issueTime != null && $Object.hasOwnProperty.call(m, "issueTime")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.issueTime = typeof m.issueTime === "number" ? $BigInt(m.issueTime) : $util.Long.fromBits(m.issueTime.low >>> 0, m.issueTime.high >>> 0, true).toBigInt();
                else if (typeof m.issueTime === "number")
                    d.issueTime = o.longs === $String ? $String(m.issueTime) : m.issueTime;
                else
                    d.issueTime = o.longs === String ? longToString(m.issueTime, true) : o.longs === Number ? longToNumber(m.issueTime, true) : m.issueTime;
            }
            if (m.hostStorage != null && $Object.hasOwnProperty.call(m, "hostStorage")) {
                d.hostStorage = o.enums === $String ? $root.VnameCert.BizAccountLinkInfo.HostStorageType[m.hostStorage] === $undefined ? m.hostStorage : $root.VnameCert.BizAccountLinkInfo.HostStorageType[m.hostStorage] : m.hostStorage;
            }
            if (m.accountType != null && $Object.hasOwnProperty.call(m, "accountType")) {
                d.accountType = o.enums === $String ? $root.VnameCert.BizAccountLinkInfo.AccountType[m.accountType] === $undefined ? m.accountType : $root.VnameCert.BizAccountLinkInfo.AccountType[m.accountType] : m.accountType;
            }
            return d;
        };

        BizAccountLinkInfo.prototype.toJSON = function() {
            return BizAccountLinkInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        BizAccountLinkInfo.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/VnameCert.BizAccountLinkInfo";
        };

        BizAccountLinkInfo.AccountType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "ENTERPRISE"] = 0;
            return values;
        })();

        BizAccountLinkInfo.HostStorageType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "ON_PREMISE"] = 0;
            values[valuesById[1] = "FACEBOOK"] = 1;
            return values;
        })();

        return BizAccountLinkInfo;
    })();

    VnameCert.BizAccountPayload = (function() {

        const BizAccountPayload = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        BizAccountPayload.prototype.vnameCert = null;
        BizAccountPayload.prototype.bizAcctLinkInfo = $util.newBuffer([]);

        BizAccountPayload.create = function(properties) {
            return new BizAccountPayload(properties);
        };

        BizAccountPayload.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.vnameCert != null && $Object.hasOwnProperty.call(m, "vnameCert"))
                $root.VnameCert.VerifiedNameCertificate.encode(m.vnameCert, w.uint32(10).fork(), q + 1).ldelim();
            if (m.bizAcctLinkInfo != null && $Object.hasOwnProperty.call(m, "bizAcctLinkInfo"))
                w.uint32(18).bytes(m.bizAcctLinkInfo);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        BizAccountPayload.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.VnameCert.BizAccountPayload();
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
                        m.vnameCert = $root.VnameCert.VerifiedNameCertificate.decode(r, r.uint32(), $undefined, q + 1, m.vnameCert);
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.bizAcctLinkInfo = r.bytes();
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

        BizAccountPayload.fromObject = function (d, q) {
            if (d instanceof $root.VnameCert.BizAccountPayload)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".VnameCert.BizAccountPayload: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.VnameCert.BizAccountPayload();
            if (d.vnameCert != null) {
                if (!$util.isObject(d.vnameCert))
                    throw $TypeError(".VnameCert.BizAccountPayload.vnameCert: object expected");
                m.vnameCert = $root.VnameCert.VerifiedNameCertificate.fromObject(d.vnameCert, q + 1);
            }
            if (d.bizAcctLinkInfo != null) {
                if (typeof d.bizAcctLinkInfo === "string")
                    $util.base64.decode(d.bizAcctLinkInfo, m.bizAcctLinkInfo = $util.newBuffer($util.base64.length(d.bizAcctLinkInfo)), 0);
                else if (d.bizAcctLinkInfo.length >= 0)
                    m.bizAcctLinkInfo = d.bizAcctLinkInfo;
            }
            return m;
        };

        BizAccountPayload.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.vnameCert = null;
                if (o.bytes === $String)
                    d.bizAcctLinkInfo = "";
                else {
                    d.bizAcctLinkInfo = [];
                    if (o.bytes !== $Array)
                        d.bizAcctLinkInfo = $util.newBuffer(d.bizAcctLinkInfo);
                }
            }
            if (m.vnameCert != null && $Object.hasOwnProperty.call(m, "vnameCert")) {
                d.vnameCert = $root.VnameCert.VerifiedNameCertificate.toObject(m.vnameCert, o, q + 1);
            }
            if (m.bizAcctLinkInfo != null && $Object.hasOwnProperty.call(m, "bizAcctLinkInfo")) {
                d.bizAcctLinkInfo = o.bytes === $String ? $util.base64.encode(m.bizAcctLinkInfo, 0, m.bizAcctLinkInfo.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.bizAcctLinkInfo) : m.bizAcctLinkInfo;
            }
            return d;
        };

        BizAccountPayload.prototype.toJSON = function() {
            return BizAccountPayload.toObject(this, $protobuf.util.toJSONOptions);
        };

        BizAccountPayload.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/VnameCert.BizAccountPayload";
        };

        return BizAccountPayload;
    })();

    VnameCert.VerifiedNameCertificate = (function() {

        const VerifiedNameCertificate = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        VerifiedNameCertificate.prototype.details = $util.newBuffer([]);
        VerifiedNameCertificate.prototype.signature = $util.newBuffer([]);
        VerifiedNameCertificate.prototype.serverSignature = $util.newBuffer([]);

        VerifiedNameCertificate.create = function(properties) {
            return new VerifiedNameCertificate(properties);
        };

        VerifiedNameCertificate.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.details != null && $Object.hasOwnProperty.call(m, "details"))
                w.uint32(10).bytes(m.details);
            if (m.signature != null && $Object.hasOwnProperty.call(m, "signature"))
                w.uint32(18).bytes(m.signature);
            if (m.serverSignature != null && $Object.hasOwnProperty.call(m, "serverSignature"))
                w.uint32(26).bytes(m.serverSignature);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        VerifiedNameCertificate.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.VnameCert.VerifiedNameCertificate();
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
                        m.details = r.bytes();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.signature = r.bytes();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.serverSignature = r.bytes();
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

        VerifiedNameCertificate.fromObject = function (d, q) {
            if (d instanceof $root.VnameCert.VerifiedNameCertificate)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".VnameCert.VerifiedNameCertificate: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.VnameCert.VerifiedNameCertificate();
            if (d.details != null) {
                if (typeof d.details === "string")
                    $util.base64.decode(d.details, m.details = $util.newBuffer($util.base64.length(d.details)), 0);
                else if (d.details.length >= 0)
                    m.details = d.details;
            }
            if (d.signature != null) {
                if (typeof d.signature === "string")
                    $util.base64.decode(d.signature, m.signature = $util.newBuffer($util.base64.length(d.signature)), 0);
                else if (d.signature.length >= 0)
                    m.signature = d.signature;
            }
            if (d.serverSignature != null) {
                if (typeof d.serverSignature === "string")
                    $util.base64.decode(d.serverSignature, m.serverSignature = $util.newBuffer($util.base64.length(d.serverSignature)), 0);
                else if (d.serverSignature.length >= 0)
                    m.serverSignature = d.serverSignature;
            }
            return m;
        };

        VerifiedNameCertificate.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                if (o.bytes === $String)
                    d.details = "";
                else {
                    d.details = [];
                    if (o.bytes !== $Array)
                        d.details = $util.newBuffer(d.details);
                }
                if (o.bytes === $String)
                    d.signature = "";
                else {
                    d.signature = [];
                    if (o.bytes !== $Array)
                        d.signature = $util.newBuffer(d.signature);
                }
                if (o.bytes === $String)
                    d.serverSignature = "";
                else {
                    d.serverSignature = [];
                    if (o.bytes !== $Array)
                        d.serverSignature = $util.newBuffer(d.serverSignature);
                }
            }
            if (m.details != null && $Object.hasOwnProperty.call(m, "details")) {
                d.details = o.bytes === $String ? $util.base64.encode(m.details, 0, m.details.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.details) : m.details;
            }
            if (m.signature != null && $Object.hasOwnProperty.call(m, "signature")) {
                d.signature = o.bytes === $String ? $util.base64.encode(m.signature, 0, m.signature.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.signature) : m.signature;
            }
            if (m.serverSignature != null && $Object.hasOwnProperty.call(m, "serverSignature")) {
                d.serverSignature = o.bytes === $String ? $util.base64.encode(m.serverSignature, 0, m.serverSignature.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.serverSignature) : m.serverSignature;
            }
            return d;
        };

        VerifiedNameCertificate.prototype.toJSON = function() {
            return VerifiedNameCertificate.toObject(this, $protobuf.util.toJSONOptions);
        };

        VerifiedNameCertificate.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/VnameCert.VerifiedNameCertificate";
        };

        VerifiedNameCertificate.Details = (function() {

            const Details = function (p) {
                this.localizedNames = [];
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            Details.prototype.serial = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            Details.prototype.issuer = "";
            Details.prototype.verifiedName = "";
            Details.prototype.localizedNames = $util.emptyArray;
            Details.prototype.issueTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            Details.create = function(properties) {
                return new Details(properties);
            };

            Details.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.serial != null && $Object.hasOwnProperty.call(m, "serial"))
                    w.uint32(8).uint64(m.serial);
                if (m.issuer != null && $Object.hasOwnProperty.call(m, "issuer"))
                    w.uint32(18).string(m.issuer);
                if (m.verifiedName != null && $Object.hasOwnProperty.call(m, "verifiedName"))
                    w.uint32(34).string(m.verifiedName);
                if (m.localizedNames != null && m.localizedNames.length) {
                    for (var i = 0; i < m.localizedNames.length; ++i)
                        $root.VnameCert.LocalizedName.encode(m.localizedNames[i], w.uint32(66).fork(), q + 1).ldelim();
                }
                if (m.issueTime != null && $Object.hasOwnProperty.call(m, "issueTime"))
                    w.uint32(80).uint64(m.issueTime);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            Details.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.VnameCert.VerifiedNameCertificate.Details();
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
                            m.serial = r.uint64();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.issuer = r.string();
                            continue;
                        }
                    case 4: {
                            if (u !== 2)
                                break;
                            m.verifiedName = r.string();
                            continue;
                        }
                    case 8: {
                            if (u !== 2)
                                break;
                            if (!(m.localizedNames && m.localizedNames.length))
                                m.localizedNames = [];
                            m.localizedNames.push($root.VnameCert.LocalizedName.decode(r, r.uint32(), $undefined, q + 1));
                            continue;
                        }
                    case 10: {
                            if (u !== 0)
                                break;
                            m.issueTime = r.uint64();
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

            Details.fromObject = function (d, q) {
                if (d instanceof $root.VnameCert.VerifiedNameCertificate.Details)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".VnameCert.VerifiedNameCertificate.Details: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.VnameCert.VerifiedNameCertificate.Details();
                if (d.serial != null) {
                    if ($util.Long)
                        m.serial = $util.Long.fromValue(d.serial, true);
                    else if (typeof d.serial === "string")
                        m.serial = $parseInt(d.serial, 10);
                    else if (typeof d.serial === "number")
                        m.serial = d.serial;
                    else if (typeof d.serial === "object")
                        m.serial = new $util.LongBits(d.serial.low >>> 0, d.serial.high >>> 0).toNumber(true);
                }
                if (d.issuer != null) {
                    m.issuer = $String(d.issuer);
                }
                if (d.verifiedName != null) {
                    m.verifiedName = $String(d.verifiedName);
                }
                if (d.localizedNames) {
                    if (!$Array.isArray(d.localizedNames))
                        throw $TypeError(".VnameCert.VerifiedNameCertificate.Details.localizedNames: array expected");
                    m.localizedNames = $Array(d.localizedNames.length);
                    for (var i = 0; i < d.localizedNames.length; ++i) {
                        if (!$util.isObject(d.localizedNames[i]))
                            throw $TypeError(".VnameCert.VerifiedNameCertificate.Details.localizedNames: object expected");
                        m.localizedNames[i] = $root.VnameCert.LocalizedName.fromObject(d.localizedNames[i], q + 1);
                    }
                }
                if (d.issueTime != null) {
                    if ($util.Long)
                        m.issueTime = $util.Long.fromValue(d.issueTime, true);
                    else if (typeof d.issueTime === "string")
                        m.issueTime = $parseInt(d.issueTime, 10);
                    else if (typeof d.issueTime === "number")
                        m.issueTime = d.issueTime;
                    else if (typeof d.issueTime === "object")
                        m.issueTime = new $util.LongBits(d.issueTime.low >>> 0, d.issueTime.high >>> 0).toNumber(true);
                }
                return m;
            };

            Details.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.arrays || o.defaults) {
                    d.localizedNames = [];
                }
                if (o.defaults) {
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, true);
                        d.serial = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                    } else
                        d.serial = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                    d.issuer = "";
                    d.verifiedName = "";
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, true);
                        d.issueTime = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                    } else
                        d.issueTime = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                }
                if (m.serial != null && $Object.hasOwnProperty.call(m, "serial")) {
                    if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                        d.serial = typeof m.serial === "number" ? $BigInt(m.serial) : $util.Long.fromBits(m.serial.low >>> 0, m.serial.high >>> 0, true).toBigInt();
                    else if (typeof m.serial === "number")
                        d.serial = o.longs === $String ? $String(m.serial) : m.serial;
                    else
                        d.serial = o.longs === String ? longToString(m.serial, true) : o.longs === Number ? longToNumber(m.serial, true) : m.serial;
                }
                if (m.issuer != null && $Object.hasOwnProperty.call(m, "issuer")) {
                    d.issuer = m.issuer;
                }
                if (m.verifiedName != null && $Object.hasOwnProperty.call(m, "verifiedName")) {
                    d.verifiedName = m.verifiedName;
                }
                if (m.localizedNames && m.localizedNames.length) {
                    d.localizedNames = $Array(m.localizedNames.length);
                    for (var j = 0; j < m.localizedNames.length; ++j) {
                        d.localizedNames[j] = $root.VnameCert.LocalizedName.toObject(m.localizedNames[j], o, q + 1);
                    }
                }
                if (m.issueTime != null && $Object.hasOwnProperty.call(m, "issueTime")) {
                    if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                        d.issueTime = typeof m.issueTime === "number" ? $BigInt(m.issueTime) : $util.Long.fromBits(m.issueTime.low >>> 0, m.issueTime.high >>> 0, true).toBigInt();
                    else if (typeof m.issueTime === "number")
                        d.issueTime = o.longs === $String ? $String(m.issueTime) : m.issueTime;
                    else
                        d.issueTime = o.longs === String ? longToString(m.issueTime, true) : o.longs === Number ? longToNumber(m.issueTime, true) : m.issueTime;
                }
                return d;
            };

            Details.prototype.toJSON = function() {
                return Details.toObject(this, $protobuf.util.toJSONOptions);
            };

            Details.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/VnameCert.VerifiedNameCertificate.Details";
            };

            return Details;
        })();

        return VerifiedNameCertificate;
    })();

    VnameCert.LocalizedName = (function() {

        const LocalizedName = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        LocalizedName.prototype.lg = "";
        LocalizedName.prototype.lc = "";
        LocalizedName.prototype.verifiedName = "";

        LocalizedName.create = function(properties) {
            return new LocalizedName(properties);
        };

        LocalizedName.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.lg != null && $Object.hasOwnProperty.call(m, "lg"))
                w.uint32(10).string(m.lg);
            if (m.lc != null && $Object.hasOwnProperty.call(m, "lc"))
                w.uint32(18).string(m.lc);
            if (m.verifiedName != null && $Object.hasOwnProperty.call(m, "verifiedName"))
                w.uint32(26).string(m.verifiedName);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        LocalizedName.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.VnameCert.LocalizedName();
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
                        m.lg = r.string();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.lc = r.string();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.verifiedName = r.string();
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

        LocalizedName.fromObject = function (d, q) {
            if (d instanceof $root.VnameCert.LocalizedName)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".VnameCert.LocalizedName: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.VnameCert.LocalizedName();
            if (d.lg != null) {
                m.lg = $String(d.lg);
            }
            if (d.lc != null) {
                m.lc = $String(d.lc);
            }
            if (d.verifiedName != null) {
                m.verifiedName = $String(d.verifiedName);
            }
            return m;
        };

        LocalizedName.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.lg = "";
                d.lc = "";
                d.verifiedName = "";
            }
            if (m.lg != null && $Object.hasOwnProperty.call(m, "lg")) {
                d.lg = m.lg;
            }
            if (m.lc != null && $Object.hasOwnProperty.call(m, "lc")) {
                d.lc = m.lc;
            }
            if (m.verifiedName != null && $Object.hasOwnProperty.call(m, "verifiedName")) {
                d.verifiedName = m.verifiedName;
            }
            return d;
        };

        LocalizedName.prototype.toJSON = function() {
            return LocalizedName.toObject(this, $protobuf.util.toJSONOptions);
        };

        LocalizedName.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/VnameCert.LocalizedName";
        };

        return LocalizedName;
    })();

    return VnameCert;
})();

export {
  $root as default
};
