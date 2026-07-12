/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $Array = $util.global.Array, $String = $util.global.String, $parseInt = $util.global.parseInt, $Number = $util.global.Number, $BigInt = $util.global.BigInt;

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

export const ServerSync = $root.ServerSync = (() => {

    const ServerSync = {};

    ServerSync.CoexStateSync = (function() {

        const CoexStateSync = function (p) {
            this.collectionMutations = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        CoexStateSync.prototype.collectionMutations = $util.emptyArray;

        CoexStateSync.create = function(properties) {
            return new CoexStateSync(properties);
        };

        CoexStateSync.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.collectionMutations != null && m.collectionMutations.length) {
                for (var i = 0; i < m.collectionMutations.length; ++i)
                    $root.ServerSync.CoexStateSync.CollectionMutations.encode(m.collectionMutations[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        CoexStateSync.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.CoexStateSync();
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
                        if (!(m.collectionMutations && m.collectionMutations.length))
                            m.collectionMutations = [];
                        m.collectionMutations.push($root.ServerSync.CoexStateSync.CollectionMutations.decode(r, r.uint32(), $undefined, q + 1));
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

        CoexStateSync.fromObject = function (d, q) {
            if (d instanceof $root.ServerSync.CoexStateSync)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".ServerSync.CoexStateSync: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.ServerSync.CoexStateSync();
            if (d.collectionMutations) {
                if (!$Array.isArray(d.collectionMutations))
                    throw $TypeError(".ServerSync.CoexStateSync.collectionMutations: array expected");
                m.collectionMutations = $Array(d.collectionMutations.length);
                for (var i = 0; i < d.collectionMutations.length; ++i) {
                    if (!$util.isObject(d.collectionMutations[i]))
                        throw $TypeError(".ServerSync.CoexStateSync.collectionMutations: object expected");
                    m.collectionMutations[i] = $root.ServerSync.CoexStateSync.CollectionMutations.fromObject(d.collectionMutations[i], q + 1);
                }
            }
            return m;
        };

        CoexStateSync.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.collectionMutations = [];
            }
            if (m.collectionMutations && m.collectionMutations.length) {
                d.collectionMutations = $Array(m.collectionMutations.length);
                for (var j = 0; j < m.collectionMutations.length; ++j) {
                    d.collectionMutations[j] = $root.ServerSync.CoexStateSync.CollectionMutations.toObject(m.collectionMutations[j], o, q + 1);
                }
            }
            return d;
        };

        CoexStateSync.prototype.toJSON = function() {
            return CoexStateSync.toObject(this, $protobuf.util.toJSONOptions);
        };

        CoexStateSync.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/ServerSync.CoexStateSync";
        };

        CoexStateSync.CollectionMutations = (function() {

            const CollectionMutations = function (p) {
                this.mutations = [];
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            CollectionMutations.prototype.collection = "";
            CollectionMutations.prototype.mutations = $util.emptyArray;

            CollectionMutations.create = function(properties) {
                return new CollectionMutations(properties);
            };

            CollectionMutations.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.collection != null && $Object.hasOwnProperty.call(m, "collection"))
                    w.uint32(10).string(m.collection);
                if (m.mutations != null && m.mutations.length) {
                    for (var i = 0; i < m.mutations.length; ++i)
                        $root.ServerSync.CoexStateSync.Mutation.encode(m.mutations[i], w.uint32(18).fork(), q + 1).ldelim();
                }
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            CollectionMutations.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.CoexStateSync.CollectionMutations();
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
                            m.collection = r.string();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            if (!(m.mutations && m.mutations.length))
                                m.mutations = [];
                            m.mutations.push($root.ServerSync.CoexStateSync.Mutation.decode(r, r.uint32(), $undefined, q + 1));
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

            CollectionMutations.fromObject = function (d, q) {
                if (d instanceof $root.ServerSync.CoexStateSync.CollectionMutations)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".ServerSync.CoexStateSync.CollectionMutations: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.ServerSync.CoexStateSync.CollectionMutations();
                if (d.collection != null) {
                    m.collection = $String(d.collection);
                }
                if (d.mutations) {
                    if (!$Array.isArray(d.mutations))
                        throw $TypeError(".ServerSync.CoexStateSync.CollectionMutations.mutations: array expected");
                    m.mutations = $Array(d.mutations.length);
                    for (var i = 0; i < d.mutations.length; ++i) {
                        if (!$util.isObject(d.mutations[i]))
                            throw $TypeError(".ServerSync.CoexStateSync.CollectionMutations.mutations: object expected");
                        m.mutations[i] = $root.ServerSync.CoexStateSync.Mutation.fromObject(d.mutations[i], q + 1);
                    }
                }
                return m;
            };

            CollectionMutations.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.arrays || o.defaults) {
                    d.mutations = [];
                }
                if (o.defaults) {
                    d.collection = "";
                }
                if (m.collection != null && $Object.hasOwnProperty.call(m, "collection")) {
                    d.collection = m.collection;
                }
                if (m.mutations && m.mutations.length) {
                    d.mutations = $Array(m.mutations.length);
                    for (var j = 0; j < m.mutations.length; ++j) {
                        d.mutations[j] = $root.ServerSync.CoexStateSync.Mutation.toObject(m.mutations[j], o, q + 1);
                    }
                }
                return d;
            };

            CollectionMutations.prototype.toJSON = function() {
                return CollectionMutations.toObject(this, $protobuf.util.toJSONOptions);
            };

            CollectionMutations.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/ServerSync.CoexStateSync.CollectionMutations";
            };

            return CollectionMutations;
        })();

        CoexStateSync.Mutation = (function() {

            const Mutation = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            Mutation.prototype.index = null;
            Mutation.prototype.value = null;
            Mutation.prototype.dirtyVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            Mutation.prototype.operation = 0;

            Mutation.create = function(properties) {
                return new Mutation(properties);
            };

            Mutation.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.index != null && $Object.hasOwnProperty.call(m, "index"))
                    $root.ServerSync.SyncdIndex.encode(m.index, w.uint32(10).fork(), q + 1).ldelim();
                if (m.value != null && $Object.hasOwnProperty.call(m, "value"))
                    $root.ServerSync.SyncdValue.encode(m.value, w.uint32(18).fork(), q + 1).ldelim();
                if (m.dirtyVersion != null && $Object.hasOwnProperty.call(m, "dirtyVersion"))
                    w.uint32(24).uint64(m.dirtyVersion);
                if (m.operation != null && $Object.hasOwnProperty.call(m, "operation"))
                    w.uint32(32).int32(m.operation);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            Mutation.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.CoexStateSync.Mutation(), v;
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
                            m.index = $root.ServerSync.SyncdIndex.decode(r, r.uint32(), $undefined, q + 1, m.index);
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.value = $root.ServerSync.SyncdValue.decode(r, r.uint32(), $undefined, q + 1, m.value);
                            continue;
                        }
                    case 3: {
                            if (u !== 0)
                                break;
                            m.dirtyVersion = r.uint64();
                            continue;
                        }
                    case 4: {
                            if (u !== 0)
                                break;
                            v = r.int32();
                            if ($root.ServerSync.SyncdMutation.SyncdOperation[v] !== $undefined) {
                                m.operation = v;
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

            Mutation.fromObject = function (d, q) {
                if (d instanceof $root.ServerSync.CoexStateSync.Mutation)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".ServerSync.CoexStateSync.Mutation: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.ServerSync.CoexStateSync.Mutation();
                if (d.index != null) {
                    if (!$util.isObject(d.index))
                        throw $TypeError(".ServerSync.CoexStateSync.Mutation.index: object expected");
                    m.index = $root.ServerSync.SyncdIndex.fromObject(d.index, q + 1);
                }
                if (d.value != null) {
                    if (!$util.isObject(d.value))
                        throw $TypeError(".ServerSync.CoexStateSync.Mutation.value: object expected");
                    m.value = $root.ServerSync.SyncdValue.fromObject(d.value, q + 1);
                }
                if (d.dirtyVersion != null) {
                    if ($util.Long)
                        m.dirtyVersion = $util.Long.fromValue(d.dirtyVersion, true);
                    else if (typeof d.dirtyVersion === "string")
                        m.dirtyVersion = $parseInt(d.dirtyVersion, 10);
                    else if (typeof d.dirtyVersion === "number")
                        m.dirtyVersion = d.dirtyVersion;
                    else if (typeof d.dirtyVersion === "object")
                        m.dirtyVersion = new $util.LongBits(d.dirtyVersion.low >>> 0, d.dirtyVersion.high >>> 0).toNumber(true);
                }
                switch (d.operation) {
                case "SET":
                case 0:
                    m.operation = 0;
                    break;
                case "REMOVE":
                case 1:
                    m.operation = 1;
                    break;
                default:
                }
                return m;
            };

            Mutation.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.index = null;
                    d.value = null;
                    if ($util.Long) {
                        var n = new $util.Long(0, 0, true);
                        d.dirtyVersion = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                    } else
                        d.dirtyVersion = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                    d.operation = o.enums === $String ? "SET" : 0;
                }
                if (m.index != null && $Object.hasOwnProperty.call(m, "index")) {
                    d.index = $root.ServerSync.SyncdIndex.toObject(m.index, o, q + 1);
                }
                if (m.value != null && $Object.hasOwnProperty.call(m, "value")) {
                    d.value = $root.ServerSync.SyncdValue.toObject(m.value, o, q + 1);
                }
                if (m.dirtyVersion != null && $Object.hasOwnProperty.call(m, "dirtyVersion")) {
                    if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                        d.dirtyVersion = typeof m.dirtyVersion === "number" ? $BigInt(m.dirtyVersion) : $util.Long.fromBits(m.dirtyVersion.low >>> 0, m.dirtyVersion.high >>> 0, true).toBigInt();
                    else if (typeof m.dirtyVersion === "number")
                        d.dirtyVersion = o.longs === $String ? $String(m.dirtyVersion) : m.dirtyVersion;
                    else
                        d.dirtyVersion = o.longs === String ? longToString(m.dirtyVersion, true) : o.longs === Number ? longToNumber(m.dirtyVersion, true) : m.dirtyVersion;
                }
                if (m.operation != null && $Object.hasOwnProperty.call(m, "operation")) {
                    d.operation = o.enums === $String ? $root.ServerSync.SyncdMutation.SyncdOperation[m.operation] === $undefined ? m.operation : $root.ServerSync.SyncdMutation.SyncdOperation[m.operation] : m.operation;
                }
                return d;
            };

            Mutation.prototype.toJSON = function() {
                return Mutation.toObject(this, $protobuf.util.toJSONOptions);
            };

            Mutation.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/ServerSync.CoexStateSync.Mutation";
            };

            return Mutation;
        })();

        return CoexStateSync;
    })();

    ServerSync.SyncdPatch = (function() {

        const SyncdPatch = function (p) {
            this.mutations = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SyncdPatch.prototype.version = null;
        SyncdPatch.prototype.mutations = $util.emptyArray;
        SyncdPatch.prototype.externalMutations = null;
        SyncdPatch.prototype.snapshotMac = $util.newBuffer([]);
        SyncdPatch.prototype.patchMac = $util.newBuffer([]);
        SyncdPatch.prototype.keyId = null;
        SyncdPatch.prototype.exitCode = null;
        SyncdPatch.prototype.deviceIndex = 0;
        SyncdPatch.prototype.clientDebugData = $util.newBuffer([]);

        SyncdPatch.create = function(properties) {
            return new SyncdPatch(properties);
        };

        SyncdPatch.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.version != null && $Object.hasOwnProperty.call(m, "version"))
                $root.ServerSync.SyncdVersion.encode(m.version, w.uint32(10).fork(), q + 1).ldelim();
            if (m.mutations != null && m.mutations.length) {
                for (var i = 0; i < m.mutations.length; ++i)
                    $root.ServerSync.SyncdMutation.encode(m.mutations[i], w.uint32(18).fork(), q + 1).ldelim();
            }
            if (m.externalMutations != null && $Object.hasOwnProperty.call(m, "externalMutations"))
                $root.ServerSync.ExternalBlobReference.encode(m.externalMutations, w.uint32(26).fork(), q + 1).ldelim();
            if (m.snapshotMac != null && $Object.hasOwnProperty.call(m, "snapshotMac"))
                w.uint32(34).bytes(m.snapshotMac);
            if (m.patchMac != null && $Object.hasOwnProperty.call(m, "patchMac"))
                w.uint32(42).bytes(m.patchMac);
            if (m.keyId != null && $Object.hasOwnProperty.call(m, "keyId"))
                $root.ServerSync.KeyId.encode(m.keyId, w.uint32(50).fork(), q + 1).ldelim();
            if (m.exitCode != null && $Object.hasOwnProperty.call(m, "exitCode"))
                $root.ServerSync.ExitCode.encode(m.exitCode, w.uint32(58).fork(), q + 1).ldelim();
            if (m.deviceIndex != null && $Object.hasOwnProperty.call(m, "deviceIndex"))
                w.uint32(64).uint32(m.deviceIndex);
            if (m.clientDebugData != null && $Object.hasOwnProperty.call(m, "clientDebugData"))
                w.uint32(74).bytes(m.clientDebugData);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SyncdPatch.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.SyncdPatch();
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
                        m.version = $root.ServerSync.SyncdVersion.decode(r, r.uint32(), $undefined, q + 1, m.version);
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        if (!(m.mutations && m.mutations.length))
                            m.mutations = [];
                        m.mutations.push($root.ServerSync.SyncdMutation.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.externalMutations = $root.ServerSync.ExternalBlobReference.decode(r, r.uint32(), $undefined, q + 1, m.externalMutations);
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.snapshotMac = r.bytes();
                        continue;
                    }
                case 5: {
                        if (u !== 2)
                            break;
                        m.patchMac = r.bytes();
                        continue;
                    }
                case 6: {
                        if (u !== 2)
                            break;
                        m.keyId = $root.ServerSync.KeyId.decode(r, r.uint32(), $undefined, q + 1, m.keyId);
                        continue;
                    }
                case 7: {
                        if (u !== 2)
                            break;
                        m.exitCode = $root.ServerSync.ExitCode.decode(r, r.uint32(), $undefined, q + 1, m.exitCode);
                        continue;
                    }
                case 8: {
                        if (u !== 0)
                            break;
                        m.deviceIndex = r.uint32();
                        continue;
                    }
                case 9: {
                        if (u !== 2)
                            break;
                        m.clientDebugData = r.bytes();
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

        SyncdPatch.fromObject = function (d, q) {
            if (d instanceof $root.ServerSync.SyncdPatch)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".ServerSync.SyncdPatch: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.ServerSync.SyncdPatch();
            if (d.version != null) {
                if (!$util.isObject(d.version))
                    throw $TypeError(".ServerSync.SyncdPatch.version: object expected");
                m.version = $root.ServerSync.SyncdVersion.fromObject(d.version, q + 1);
            }
            if (d.mutations) {
                if (!$Array.isArray(d.mutations))
                    throw $TypeError(".ServerSync.SyncdPatch.mutations: array expected");
                m.mutations = $Array(d.mutations.length);
                for (var i = 0; i < d.mutations.length; ++i) {
                    if (!$util.isObject(d.mutations[i]))
                        throw $TypeError(".ServerSync.SyncdPatch.mutations: object expected");
                    m.mutations[i] = $root.ServerSync.SyncdMutation.fromObject(d.mutations[i], q + 1);
                }
            }
            if (d.externalMutations != null) {
                if (!$util.isObject(d.externalMutations))
                    throw $TypeError(".ServerSync.SyncdPatch.externalMutations: object expected");
                m.externalMutations = $root.ServerSync.ExternalBlobReference.fromObject(d.externalMutations, q + 1);
            }
            if (d.snapshotMac != null) {
                if (typeof d.snapshotMac === "string")
                    $util.base64.decode(d.snapshotMac, m.snapshotMac = $util.newBuffer($util.base64.length(d.snapshotMac)), 0);
                else if (d.snapshotMac.length >= 0)
                    m.snapshotMac = d.snapshotMac;
            }
            if (d.patchMac != null) {
                if (typeof d.patchMac === "string")
                    $util.base64.decode(d.patchMac, m.patchMac = $util.newBuffer($util.base64.length(d.patchMac)), 0);
                else if (d.patchMac.length >= 0)
                    m.patchMac = d.patchMac;
            }
            if (d.keyId != null) {
                if (!$util.isObject(d.keyId))
                    throw $TypeError(".ServerSync.SyncdPatch.keyId: object expected");
                m.keyId = $root.ServerSync.KeyId.fromObject(d.keyId, q + 1);
            }
            if (d.exitCode != null) {
                if (!$util.isObject(d.exitCode))
                    throw $TypeError(".ServerSync.SyncdPatch.exitCode: object expected");
                m.exitCode = $root.ServerSync.ExitCode.fromObject(d.exitCode, q + 1);
            }
            if (d.deviceIndex != null) {
                m.deviceIndex = d.deviceIndex >>> 0;
            }
            if (d.clientDebugData != null) {
                if (typeof d.clientDebugData === "string")
                    $util.base64.decode(d.clientDebugData, m.clientDebugData = $util.newBuffer($util.base64.length(d.clientDebugData)), 0);
                else if (d.clientDebugData.length >= 0)
                    m.clientDebugData = d.clientDebugData;
            }
            return m;
        };

        SyncdPatch.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.mutations = [];
            }
            if (o.defaults) {
                d.version = null;
                d.externalMutations = null;
                if (o.bytes === $String)
                    d.snapshotMac = "";
                else {
                    d.snapshotMac = [];
                    if (o.bytes !== $Array)
                        d.snapshotMac = $util.newBuffer(d.snapshotMac);
                }
                if (o.bytes === $String)
                    d.patchMac = "";
                else {
                    d.patchMac = [];
                    if (o.bytes !== $Array)
                        d.patchMac = $util.newBuffer(d.patchMac);
                }
                d.keyId = null;
                d.exitCode = null;
                d.deviceIndex = 0;
                if (o.bytes === $String)
                    d.clientDebugData = "";
                else {
                    d.clientDebugData = [];
                    if (o.bytes !== $Array)
                        d.clientDebugData = $util.newBuffer(d.clientDebugData);
                }
            }
            if (m.version != null && $Object.hasOwnProperty.call(m, "version")) {
                d.version = $root.ServerSync.SyncdVersion.toObject(m.version, o, q + 1);
            }
            if (m.mutations && m.mutations.length) {
                d.mutations = $Array(m.mutations.length);
                for (var j = 0; j < m.mutations.length; ++j) {
                    d.mutations[j] = $root.ServerSync.SyncdMutation.toObject(m.mutations[j], o, q + 1);
                }
            }
            if (m.externalMutations != null && $Object.hasOwnProperty.call(m, "externalMutations")) {
                d.externalMutations = $root.ServerSync.ExternalBlobReference.toObject(m.externalMutations, o, q + 1);
            }
            if (m.snapshotMac != null && $Object.hasOwnProperty.call(m, "snapshotMac")) {
                d.snapshotMac = o.bytes === $String ? $util.base64.encode(m.snapshotMac, 0, m.snapshotMac.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.snapshotMac) : m.snapshotMac;
            }
            if (m.patchMac != null && $Object.hasOwnProperty.call(m, "patchMac")) {
                d.patchMac = o.bytes === $String ? $util.base64.encode(m.patchMac, 0, m.patchMac.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.patchMac) : m.patchMac;
            }
            if (m.keyId != null && $Object.hasOwnProperty.call(m, "keyId")) {
                d.keyId = $root.ServerSync.KeyId.toObject(m.keyId, o, q + 1);
            }
            if (m.exitCode != null && $Object.hasOwnProperty.call(m, "exitCode")) {
                d.exitCode = $root.ServerSync.ExitCode.toObject(m.exitCode, o, q + 1);
            }
            if (m.deviceIndex != null && $Object.hasOwnProperty.call(m, "deviceIndex")) {
                d.deviceIndex = m.deviceIndex;
            }
            if (m.clientDebugData != null && $Object.hasOwnProperty.call(m, "clientDebugData")) {
                d.clientDebugData = o.bytes === $String ? $util.base64.encode(m.clientDebugData, 0, m.clientDebugData.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.clientDebugData) : m.clientDebugData;
            }
            return d;
        };

        SyncdPatch.prototype.toJSON = function() {
            return SyncdPatch.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdPatch.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/ServerSync.SyncdPatch";
        };

        return SyncdPatch;
    })();

    ServerSync.SyncdMutation = (function() {

        const SyncdMutation = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SyncdMutation.prototype.operation = 0;
        SyncdMutation.prototype.record = null;

        SyncdMutation.create = function(properties) {
            return new SyncdMutation(properties);
        };

        SyncdMutation.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.operation != null && $Object.hasOwnProperty.call(m, "operation"))
                w.uint32(8).int32(m.operation);
            if (m.record != null && $Object.hasOwnProperty.call(m, "record"))
                $root.ServerSync.SyncdRecord.encode(m.record, w.uint32(18).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SyncdMutation.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.SyncdMutation(), v;
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
                        if ($root.ServerSync.SyncdMutation.SyncdOperation[v] !== $undefined) {
                            m.operation = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.record = $root.ServerSync.SyncdRecord.decode(r, r.uint32(), $undefined, q + 1, m.record);
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

        SyncdMutation.fromObject = function (d, q) {
            if (d instanceof $root.ServerSync.SyncdMutation)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".ServerSync.SyncdMutation: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.ServerSync.SyncdMutation();
            switch (d.operation) {
            case "SET":
            case 0:
                m.operation = 0;
                break;
            case "REMOVE":
            case 1:
                m.operation = 1;
                break;
            default:
            }
            if (d.record != null) {
                if (!$util.isObject(d.record))
                    throw $TypeError(".ServerSync.SyncdMutation.record: object expected");
                m.record = $root.ServerSync.SyncdRecord.fromObject(d.record, q + 1);
            }
            return m;
        };

        SyncdMutation.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.operation = o.enums === $String ? "SET" : 0;
                d.record = null;
            }
            if (m.operation != null && $Object.hasOwnProperty.call(m, "operation")) {
                d.operation = o.enums === $String ? $root.ServerSync.SyncdMutation.SyncdOperation[m.operation] === $undefined ? m.operation : $root.ServerSync.SyncdMutation.SyncdOperation[m.operation] : m.operation;
            }
            if (m.record != null && $Object.hasOwnProperty.call(m, "record")) {
                d.record = $root.ServerSync.SyncdRecord.toObject(m.record, o, q + 1);
            }
            return d;
        };

        SyncdMutation.prototype.toJSON = function() {
            return SyncdMutation.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdMutation.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/ServerSync.SyncdMutation";
        };

        SyncdMutation.SyncdOperation = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "SET"] = 0;
            values[valuesById[1] = "REMOVE"] = 1;
            return values;
        })();

        return SyncdMutation;
    })();

    ServerSync.SyncdMutations = (function() {

        const SyncdMutations = function (p) {
            this.mutations = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SyncdMutations.prototype.mutations = $util.emptyArray;

        SyncdMutations.create = function(properties) {
            return new SyncdMutations(properties);
        };

        SyncdMutations.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.mutations != null && m.mutations.length) {
                for (var i = 0; i < m.mutations.length; ++i)
                    $root.ServerSync.SyncdMutation.encode(m.mutations[i], w.uint32(10).fork(), q + 1).ldelim();
            }
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SyncdMutations.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.SyncdMutations();
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
                        if (!(m.mutations && m.mutations.length))
                            m.mutations = [];
                        m.mutations.push($root.ServerSync.SyncdMutation.decode(r, r.uint32(), $undefined, q + 1));
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

        SyncdMutations.fromObject = function (d, q) {
            if (d instanceof $root.ServerSync.SyncdMutations)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".ServerSync.SyncdMutations: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.ServerSync.SyncdMutations();
            if (d.mutations) {
                if (!$Array.isArray(d.mutations))
                    throw $TypeError(".ServerSync.SyncdMutations.mutations: array expected");
                m.mutations = $Array(d.mutations.length);
                for (var i = 0; i < d.mutations.length; ++i) {
                    if (!$util.isObject(d.mutations[i]))
                        throw $TypeError(".ServerSync.SyncdMutations.mutations: object expected");
                    m.mutations[i] = $root.ServerSync.SyncdMutation.fromObject(d.mutations[i], q + 1);
                }
            }
            return m;
        };

        SyncdMutations.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.mutations = [];
            }
            if (m.mutations && m.mutations.length) {
                d.mutations = $Array(m.mutations.length);
                for (var j = 0; j < m.mutations.length; ++j) {
                    d.mutations[j] = $root.ServerSync.SyncdMutation.toObject(m.mutations[j], o, q + 1);
                }
            }
            return d;
        };

        SyncdMutations.prototype.toJSON = function() {
            return SyncdMutations.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdMutations.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/ServerSync.SyncdMutations";
        };

        return SyncdMutations;
    })();

    ServerSync.SyncdSnapshot = (function() {

        const SyncdSnapshot = function (p) {
            this.records = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SyncdSnapshot.prototype.version = null;
        SyncdSnapshot.prototype.records = $util.emptyArray;
        SyncdSnapshot.prototype.mac = $util.newBuffer([]);
        SyncdSnapshot.prototype.keyId = null;

        SyncdSnapshot.create = function(properties) {
            return new SyncdSnapshot(properties);
        };

        SyncdSnapshot.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.version != null && $Object.hasOwnProperty.call(m, "version"))
                $root.ServerSync.SyncdVersion.encode(m.version, w.uint32(10).fork(), q + 1).ldelim();
            if (m.records != null && m.records.length) {
                for (var i = 0; i < m.records.length; ++i)
                    $root.ServerSync.SyncdRecord.encode(m.records[i], w.uint32(18).fork(), q + 1).ldelim();
            }
            if (m.mac != null && $Object.hasOwnProperty.call(m, "mac"))
                w.uint32(26).bytes(m.mac);
            if (m.keyId != null && $Object.hasOwnProperty.call(m, "keyId"))
                $root.ServerSync.KeyId.encode(m.keyId, w.uint32(34).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SyncdSnapshot.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.SyncdSnapshot();
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
                        m.version = $root.ServerSync.SyncdVersion.decode(r, r.uint32(), $undefined, q + 1, m.version);
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        if (!(m.records && m.records.length))
                            m.records = [];
                        m.records.push($root.ServerSync.SyncdRecord.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.mac = r.bytes();
                        continue;
                    }
                case 4: {
                        if (u !== 2)
                            break;
                        m.keyId = $root.ServerSync.KeyId.decode(r, r.uint32(), $undefined, q + 1, m.keyId);
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

        SyncdSnapshot.fromObject = function (d, q) {
            if (d instanceof $root.ServerSync.SyncdSnapshot)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".ServerSync.SyncdSnapshot: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.ServerSync.SyncdSnapshot();
            if (d.version != null) {
                if (!$util.isObject(d.version))
                    throw $TypeError(".ServerSync.SyncdSnapshot.version: object expected");
                m.version = $root.ServerSync.SyncdVersion.fromObject(d.version, q + 1);
            }
            if (d.records) {
                if (!$Array.isArray(d.records))
                    throw $TypeError(".ServerSync.SyncdSnapshot.records: array expected");
                m.records = $Array(d.records.length);
                for (var i = 0; i < d.records.length; ++i) {
                    if (!$util.isObject(d.records[i]))
                        throw $TypeError(".ServerSync.SyncdSnapshot.records: object expected");
                    m.records[i] = $root.ServerSync.SyncdRecord.fromObject(d.records[i], q + 1);
                }
            }
            if (d.mac != null) {
                if (typeof d.mac === "string")
                    $util.base64.decode(d.mac, m.mac = $util.newBuffer($util.base64.length(d.mac)), 0);
                else if (d.mac.length >= 0)
                    m.mac = d.mac;
            }
            if (d.keyId != null) {
                if (!$util.isObject(d.keyId))
                    throw $TypeError(".ServerSync.SyncdSnapshot.keyId: object expected");
                m.keyId = $root.ServerSync.KeyId.fromObject(d.keyId, q + 1);
            }
            return m;
        };

        SyncdSnapshot.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.records = [];
            }
            if (o.defaults) {
                d.version = null;
                if (o.bytes === $String)
                    d.mac = "";
                else {
                    d.mac = [];
                    if (o.bytes !== $Array)
                        d.mac = $util.newBuffer(d.mac);
                }
                d.keyId = null;
            }
            if (m.version != null && $Object.hasOwnProperty.call(m, "version")) {
                d.version = $root.ServerSync.SyncdVersion.toObject(m.version, o, q + 1);
            }
            if (m.records && m.records.length) {
                d.records = $Array(m.records.length);
                for (var j = 0; j < m.records.length; ++j) {
                    d.records[j] = $root.ServerSync.SyncdRecord.toObject(m.records[j], o, q + 1);
                }
            }
            if (m.mac != null && $Object.hasOwnProperty.call(m, "mac")) {
                d.mac = o.bytes === $String ? $util.base64.encode(m.mac, 0, m.mac.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.mac) : m.mac;
            }
            if (m.keyId != null && $Object.hasOwnProperty.call(m, "keyId")) {
                d.keyId = $root.ServerSync.KeyId.toObject(m.keyId, o, q + 1);
            }
            return d;
        };

        SyncdSnapshot.prototype.toJSON = function() {
            return SyncdSnapshot.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdSnapshot.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/ServerSync.SyncdSnapshot";
        };

        return SyncdSnapshot;
    })();

    ServerSync.ExternalBlobReference = (function() {

        const ExternalBlobReference = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        ExternalBlobReference.prototype.mediaKey = $util.newBuffer([]);
        ExternalBlobReference.prototype.directPath = "";
        ExternalBlobReference.prototype.handle = "";
        ExternalBlobReference.prototype.fileSizeBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ExternalBlobReference.prototype.fileSha256 = $util.newBuffer([]);
        ExternalBlobReference.prototype.fileEncSha256 = $util.newBuffer([]);

        ExternalBlobReference.create = function(properties) {
            return new ExternalBlobReference(properties);
        };

        ExternalBlobReference.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.mediaKey != null && $Object.hasOwnProperty.call(m, "mediaKey"))
                w.uint32(10).bytes(m.mediaKey);
            if (m.directPath != null && $Object.hasOwnProperty.call(m, "directPath"))
                w.uint32(18).string(m.directPath);
            if (m.handle != null && $Object.hasOwnProperty.call(m, "handle"))
                w.uint32(26).string(m.handle);
            if (m.fileSizeBytes != null && $Object.hasOwnProperty.call(m, "fileSizeBytes"))
                w.uint32(32).uint64(m.fileSizeBytes);
            if (m.fileSha256 != null && $Object.hasOwnProperty.call(m, "fileSha256"))
                w.uint32(42).bytes(m.fileSha256);
            if (m.fileEncSha256 != null && $Object.hasOwnProperty.call(m, "fileEncSha256"))
                w.uint32(50).bytes(m.fileEncSha256);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        ExternalBlobReference.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.ExternalBlobReference();
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
                        m.mediaKey = r.bytes();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.directPath = r.string();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.handle = r.string();
                        continue;
                    }
                case 4: {
                        if (u !== 0)
                            break;
                        m.fileSizeBytes = r.uint64();
                        continue;
                    }
                case 5: {
                        if (u !== 2)
                            break;
                        m.fileSha256 = r.bytes();
                        continue;
                    }
                case 6: {
                        if (u !== 2)
                            break;
                        m.fileEncSha256 = r.bytes();
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

        ExternalBlobReference.fromObject = function (d, q) {
            if (d instanceof $root.ServerSync.ExternalBlobReference)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".ServerSync.ExternalBlobReference: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.ServerSync.ExternalBlobReference();
            if (d.mediaKey != null) {
                if (typeof d.mediaKey === "string")
                    $util.base64.decode(d.mediaKey, m.mediaKey = $util.newBuffer($util.base64.length(d.mediaKey)), 0);
                else if (d.mediaKey.length >= 0)
                    m.mediaKey = d.mediaKey;
            }
            if (d.directPath != null) {
                m.directPath = $String(d.directPath);
            }
            if (d.handle != null) {
                m.handle = $String(d.handle);
            }
            if (d.fileSizeBytes != null) {
                if ($util.Long)
                    m.fileSizeBytes = $util.Long.fromValue(d.fileSizeBytes, true);
                else if (typeof d.fileSizeBytes === "string")
                    m.fileSizeBytes = $parseInt(d.fileSizeBytes, 10);
                else if (typeof d.fileSizeBytes === "number")
                    m.fileSizeBytes = d.fileSizeBytes;
                else if (typeof d.fileSizeBytes === "object")
                    m.fileSizeBytes = new $util.LongBits(d.fileSizeBytes.low >>> 0, d.fileSizeBytes.high >>> 0).toNumber(true);
            }
            if (d.fileSha256 != null) {
                if (typeof d.fileSha256 === "string")
                    $util.base64.decode(d.fileSha256, m.fileSha256 = $util.newBuffer($util.base64.length(d.fileSha256)), 0);
                else if (d.fileSha256.length >= 0)
                    m.fileSha256 = d.fileSha256;
            }
            if (d.fileEncSha256 != null) {
                if (typeof d.fileEncSha256 === "string")
                    $util.base64.decode(d.fileEncSha256, m.fileEncSha256 = $util.newBuffer($util.base64.length(d.fileEncSha256)), 0);
                else if (d.fileEncSha256.length >= 0)
                    m.fileEncSha256 = d.fileEncSha256;
            }
            return m;
        };

        ExternalBlobReference.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                if (o.bytes === $String)
                    d.mediaKey = "";
                else {
                    d.mediaKey = [];
                    if (o.bytes !== $Array)
                        d.mediaKey = $util.newBuffer(d.mediaKey);
                }
                d.directPath = "";
                d.handle = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, true);
                    d.fileSizeBytes = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.fileSizeBytes = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                if (o.bytes === $String)
                    d.fileSha256 = "";
                else {
                    d.fileSha256 = [];
                    if (o.bytes !== $Array)
                        d.fileSha256 = $util.newBuffer(d.fileSha256);
                }
                if (o.bytes === $String)
                    d.fileEncSha256 = "";
                else {
                    d.fileEncSha256 = [];
                    if (o.bytes !== $Array)
                        d.fileEncSha256 = $util.newBuffer(d.fileEncSha256);
                }
            }
            if (m.mediaKey != null && $Object.hasOwnProperty.call(m, "mediaKey")) {
                d.mediaKey = o.bytes === $String ? $util.base64.encode(m.mediaKey, 0, m.mediaKey.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.mediaKey) : m.mediaKey;
            }
            if (m.directPath != null && $Object.hasOwnProperty.call(m, "directPath")) {
                d.directPath = m.directPath;
            }
            if (m.handle != null && $Object.hasOwnProperty.call(m, "handle")) {
                d.handle = m.handle;
            }
            if (m.fileSizeBytes != null && $Object.hasOwnProperty.call(m, "fileSizeBytes")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.fileSizeBytes = typeof m.fileSizeBytes === "number" ? $BigInt(m.fileSizeBytes) : $util.Long.fromBits(m.fileSizeBytes.low >>> 0, m.fileSizeBytes.high >>> 0, true).toBigInt();
                else if (typeof m.fileSizeBytes === "number")
                    d.fileSizeBytes = o.longs === $String ? $String(m.fileSizeBytes) : m.fileSizeBytes;
                else
                    d.fileSizeBytes = o.longs === String ? longToString(m.fileSizeBytes, true) : o.longs === Number ? longToNumber(m.fileSizeBytes, true) : m.fileSizeBytes;
            }
            if (m.fileSha256 != null && $Object.hasOwnProperty.call(m, "fileSha256")) {
                d.fileSha256 = o.bytes === $String ? $util.base64.encode(m.fileSha256, 0, m.fileSha256.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.fileSha256) : m.fileSha256;
            }
            if (m.fileEncSha256 != null && $Object.hasOwnProperty.call(m, "fileEncSha256")) {
                d.fileEncSha256 = o.bytes === $String ? $util.base64.encode(m.fileEncSha256, 0, m.fileEncSha256.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.fileEncSha256) : m.fileEncSha256;
            }
            return d;
        };

        ExternalBlobReference.prototype.toJSON = function() {
            return ExternalBlobReference.toObject(this, $protobuf.util.toJSONOptions);
        };

        ExternalBlobReference.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/ServerSync.ExternalBlobReference";
        };

        return ExternalBlobReference;
    })();

    ServerSync.SyncdRecord = (function() {

        const SyncdRecord = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SyncdRecord.prototype.index = null;
        SyncdRecord.prototype.value = null;
        SyncdRecord.prototype.keyId = null;

        SyncdRecord.create = function(properties) {
            return new SyncdRecord(properties);
        };

        SyncdRecord.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.index != null && $Object.hasOwnProperty.call(m, "index"))
                $root.ServerSync.SyncdIndex.encode(m.index, w.uint32(10).fork(), q + 1).ldelim();
            if (m.value != null && $Object.hasOwnProperty.call(m, "value"))
                $root.ServerSync.SyncdValue.encode(m.value, w.uint32(18).fork(), q + 1).ldelim();
            if (m.keyId != null && $Object.hasOwnProperty.call(m, "keyId"))
                $root.ServerSync.KeyId.encode(m.keyId, w.uint32(26).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SyncdRecord.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.SyncdRecord();
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
                        m.index = $root.ServerSync.SyncdIndex.decode(r, r.uint32(), $undefined, q + 1, m.index);
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.value = $root.ServerSync.SyncdValue.decode(r, r.uint32(), $undefined, q + 1, m.value);
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.keyId = $root.ServerSync.KeyId.decode(r, r.uint32(), $undefined, q + 1, m.keyId);
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

        SyncdRecord.fromObject = function (d, q) {
            if (d instanceof $root.ServerSync.SyncdRecord)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".ServerSync.SyncdRecord: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.ServerSync.SyncdRecord();
            if (d.index != null) {
                if (!$util.isObject(d.index))
                    throw $TypeError(".ServerSync.SyncdRecord.index: object expected");
                m.index = $root.ServerSync.SyncdIndex.fromObject(d.index, q + 1);
            }
            if (d.value != null) {
                if (!$util.isObject(d.value))
                    throw $TypeError(".ServerSync.SyncdRecord.value: object expected");
                m.value = $root.ServerSync.SyncdValue.fromObject(d.value, q + 1);
            }
            if (d.keyId != null) {
                if (!$util.isObject(d.keyId))
                    throw $TypeError(".ServerSync.SyncdRecord.keyId: object expected");
                m.keyId = $root.ServerSync.KeyId.fromObject(d.keyId, q + 1);
            }
            return m;
        };

        SyncdRecord.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.index = null;
                d.value = null;
                d.keyId = null;
            }
            if (m.index != null && $Object.hasOwnProperty.call(m, "index")) {
                d.index = $root.ServerSync.SyncdIndex.toObject(m.index, o, q + 1);
            }
            if (m.value != null && $Object.hasOwnProperty.call(m, "value")) {
                d.value = $root.ServerSync.SyncdValue.toObject(m.value, o, q + 1);
            }
            if (m.keyId != null && $Object.hasOwnProperty.call(m, "keyId")) {
                d.keyId = $root.ServerSync.KeyId.toObject(m.keyId, o, q + 1);
            }
            return d;
        };

        SyncdRecord.prototype.toJSON = function() {
            return SyncdRecord.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdRecord.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/ServerSync.SyncdRecord";
        };

        return SyncdRecord;
    })();

    ServerSync.KeyId = (function() {

        const KeyId = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        KeyId.prototype.id = $util.newBuffer([]);

        KeyId.create = function(properties) {
            return new KeyId(properties);
        };

        KeyId.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.id != null && $Object.hasOwnProperty.call(m, "id"))
                w.uint32(10).bytes(m.id);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        KeyId.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.KeyId();
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
                        m.id = r.bytes();
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

        KeyId.fromObject = function (d, q) {
            if (d instanceof $root.ServerSync.KeyId)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".ServerSync.KeyId: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.ServerSync.KeyId();
            if (d.id != null) {
                if (typeof d.id === "string")
                    $util.base64.decode(d.id, m.id = $util.newBuffer($util.base64.length(d.id)), 0);
                else if (d.id.length >= 0)
                    m.id = d.id;
            }
            return m;
        };

        KeyId.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                if (o.bytes === $String)
                    d.id = "";
                else {
                    d.id = [];
                    if (o.bytes !== $Array)
                        d.id = $util.newBuffer(d.id);
                }
            }
            if (m.id != null && $Object.hasOwnProperty.call(m, "id")) {
                d.id = o.bytes === $String ? $util.base64.encode(m.id, 0, m.id.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.id) : m.id;
            }
            return d;
        };

        KeyId.prototype.toJSON = function() {
            return KeyId.toObject(this, $protobuf.util.toJSONOptions);
        };

        KeyId.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/ServerSync.KeyId";
        };

        return KeyId;
    })();

    ServerSync.SyncdValue = (function() {

        const SyncdValue = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SyncdValue.prototype.blob = $util.newBuffer([]);

        SyncdValue.create = function(properties) {
            return new SyncdValue(properties);
        };

        SyncdValue.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.blob != null && $Object.hasOwnProperty.call(m, "blob"))
                w.uint32(10).bytes(m.blob);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SyncdValue.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.SyncdValue();
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
                        m.blob = r.bytes();
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

        SyncdValue.fromObject = function (d, q) {
            if (d instanceof $root.ServerSync.SyncdValue)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".ServerSync.SyncdValue: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.ServerSync.SyncdValue();
            if (d.blob != null) {
                if (typeof d.blob === "string")
                    $util.base64.decode(d.blob, m.blob = $util.newBuffer($util.base64.length(d.blob)), 0);
                else if (d.blob.length >= 0)
                    m.blob = d.blob;
            }
            return m;
        };

        SyncdValue.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                if (o.bytes === $String)
                    d.blob = "";
                else {
                    d.blob = [];
                    if (o.bytes !== $Array)
                        d.blob = $util.newBuffer(d.blob);
                }
            }
            if (m.blob != null && $Object.hasOwnProperty.call(m, "blob")) {
                d.blob = o.bytes === $String ? $util.base64.encode(m.blob, 0, m.blob.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.blob) : m.blob;
            }
            return d;
        };

        SyncdValue.prototype.toJSON = function() {
            return SyncdValue.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdValue.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/ServerSync.SyncdValue";
        };

        return SyncdValue;
    })();

    ServerSync.SyncdIndex = (function() {

        const SyncdIndex = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SyncdIndex.prototype.blob = $util.newBuffer([]);

        SyncdIndex.create = function(properties) {
            return new SyncdIndex(properties);
        };

        SyncdIndex.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.blob != null && $Object.hasOwnProperty.call(m, "blob"))
                w.uint32(10).bytes(m.blob);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SyncdIndex.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.SyncdIndex();
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
                        m.blob = r.bytes();
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

        SyncdIndex.fromObject = function (d, q) {
            if (d instanceof $root.ServerSync.SyncdIndex)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".ServerSync.SyncdIndex: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.ServerSync.SyncdIndex();
            if (d.blob != null) {
                if (typeof d.blob === "string")
                    $util.base64.decode(d.blob, m.blob = $util.newBuffer($util.base64.length(d.blob)), 0);
                else if (d.blob.length >= 0)
                    m.blob = d.blob;
            }
            return m;
        };

        SyncdIndex.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                if (o.bytes === $String)
                    d.blob = "";
                else {
                    d.blob = [];
                    if (o.bytes !== $Array)
                        d.blob = $util.newBuffer(d.blob);
                }
            }
            if (m.blob != null && $Object.hasOwnProperty.call(m, "blob")) {
                d.blob = o.bytes === $String ? $util.base64.encode(m.blob, 0, m.blob.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.blob) : m.blob;
            }
            return d;
        };

        SyncdIndex.prototype.toJSON = function() {
            return SyncdIndex.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdIndex.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/ServerSync.SyncdIndex";
        };

        return SyncdIndex;
    })();

    ServerSync.ExitCode = (function() {

        const ExitCode = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        ExitCode.prototype.code = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ExitCode.prototype.text = "";

        ExitCode.create = function(properties) {
            return new ExitCode(properties);
        };

        ExitCode.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.code != null && $Object.hasOwnProperty.call(m, "code"))
                w.uint32(8).uint64(m.code);
            if (m.text != null && $Object.hasOwnProperty.call(m, "text"))
                w.uint32(18).string(m.text);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        ExitCode.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.ExitCode();
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
                        m.code = r.uint64();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.text = r.string();
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

        ExitCode.fromObject = function (d, q) {
            if (d instanceof $root.ServerSync.ExitCode)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".ServerSync.ExitCode: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.ServerSync.ExitCode();
            if (d.code != null) {
                if ($util.Long)
                    m.code = $util.Long.fromValue(d.code, true);
                else if (typeof d.code === "string")
                    m.code = $parseInt(d.code, 10);
                else if (typeof d.code === "number")
                    m.code = d.code;
                else if (typeof d.code === "object")
                    m.code = new $util.LongBits(d.code.low >>> 0, d.code.high >>> 0).toNumber(true);
            }
            if (d.text != null) {
                m.text = $String(d.text);
            }
            return m;
        };

        ExitCode.toObject = function (m, o, q) {
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
                    d.code = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.code = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.text = "";
            }
            if (m.code != null && $Object.hasOwnProperty.call(m, "code")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.code = typeof m.code === "number" ? $BigInt(m.code) : $util.Long.fromBits(m.code.low >>> 0, m.code.high >>> 0, true).toBigInt();
                else if (typeof m.code === "number")
                    d.code = o.longs === $String ? $String(m.code) : m.code;
                else
                    d.code = o.longs === String ? longToString(m.code, true) : o.longs === Number ? longToNumber(m.code, true) : m.code;
            }
            if (m.text != null && $Object.hasOwnProperty.call(m, "text")) {
                d.text = m.text;
            }
            return d;
        };

        ExitCode.prototype.toJSON = function() {
            return ExitCode.toObject(this, $protobuf.util.toJSONOptions);
        };

        ExitCode.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/ServerSync.ExitCode";
        };

        return ExitCode;
    })();

    ServerSync.SyncdVersion = (function() {

        const SyncdVersion = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        SyncdVersion.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        SyncdVersion.create = function(properties) {
            return new SyncdVersion(properties);
        };

        SyncdVersion.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.version != null && $Object.hasOwnProperty.call(m, "version"))
                w.uint32(8).uint64(m.version);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        SyncdVersion.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.ServerSync.SyncdVersion();
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
                        m.version = r.uint64();
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

        SyncdVersion.fromObject = function (d, q) {
            if (d instanceof $root.ServerSync.SyncdVersion)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".ServerSync.SyncdVersion: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.ServerSync.SyncdVersion();
            if (d.version != null) {
                if ($util.Long)
                    m.version = $util.Long.fromValue(d.version, true);
                else if (typeof d.version === "string")
                    m.version = $parseInt(d.version, 10);
                else if (typeof d.version === "number")
                    m.version = d.version;
                else if (typeof d.version === "object")
                    m.version = new $util.LongBits(d.version.low >>> 0, d.version.high >>> 0).toNumber(true);
            }
            return m;
        };

        SyncdVersion.toObject = function (m, o, q) {
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
                    d.version = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.version = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
            }
            if (m.version != null && $Object.hasOwnProperty.call(m, "version")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.version = typeof m.version === "number" ? $BigInt(m.version) : $util.Long.fromBits(m.version.low >>> 0, m.version.high >>> 0, true).toBigInt();
                else if (typeof m.version === "number")
                    d.version = o.longs === $String ? $String(m.version) : m.version;
                else
                    d.version = o.longs === String ? longToString(m.version, true) : o.longs === Number ? longToNumber(m.version, true) : m.version;
            }
            return d;
        };

        SyncdVersion.prototype.toJSON = function() {
            return SyncdVersion.toObject(this, $protobuf.util.toJSONOptions);
        };

        SyncdVersion.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/ServerSync.SyncdVersion";
        };

        return SyncdVersion;
    })();

    return ServerSync;
})();

export {
  $root as default
};
