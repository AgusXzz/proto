/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
const $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Number = $util.global.Number, $Boolean = $util.global.Boolean, $Array = $util.global.Array, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt, $isFinite = $util.global.isFinite;

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

export const MdStorageMsgRowOpaqueData = $root.MdStorageMsgRowOpaqueData = (() => {

    const MdStorageMsgRowOpaqueData = {};

    MdStorageMsgRowOpaqueData.MsgOpaqueData = (function() {

        const MsgOpaqueData = function (p) {
            this.pollOptions = [];
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        MsgOpaqueData.prototype.body = "";
        MsgOpaqueData.prototype.caption = "";
        MsgOpaqueData.prototype.lng = 0;
        MsgOpaqueData.prototype.isLive = false;
        MsgOpaqueData.prototype.lat = 0;
        MsgOpaqueData.prototype.paymentAmount1000 = 0;
        MsgOpaqueData.prototype.paymentNoteMsgBody = "";
        MsgOpaqueData.prototype.matchedText = "";
        MsgOpaqueData.prototype.title = "";
        MsgOpaqueData.prototype.description = "";
        MsgOpaqueData.prototype.futureproofBuffer = $util.newBuffer([]);
        MsgOpaqueData.prototype.clientUrl = "";
        MsgOpaqueData.prototype.loc = "";
        MsgOpaqueData.prototype.pollName = "";
        MsgOpaqueData.prototype.pollOptions = $util.emptyArray;
        MsgOpaqueData.prototype.pollSelectableOptionsCount = 0;
        MsgOpaqueData.prototype.messageSecret = $util.newBuffer([]);
        MsgOpaqueData.prototype.originalSelfAuthor = "";
        MsgOpaqueData.prototype.senderTimestampMs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MsgOpaqueData.prototype.pollUpdateParentKey = "";
        MsgOpaqueData.prototype.encPollVote = null;
        MsgOpaqueData.prototype.isSentCagPollCreation = false;
        MsgOpaqueData.prototype.pollContentType = 0;
        MsgOpaqueData.prototype.pollType = 0;
        MsgOpaqueData.prototype.correctOptionIndex = 0;
        MsgOpaqueData.prototype.pollVotesSnapshot = null;
        MsgOpaqueData.prototype.encReactionTargetMessageKey = "";
        MsgOpaqueData.prototype.encReactionEncPayload = $util.newBuffer([]);
        MsgOpaqueData.prototype.encReactionEncIv = $util.newBuffer([]);
        MsgOpaqueData.prototype.botMessageSecret = $util.newBuffer([]);
        MsgOpaqueData.prototype.targetMessageKey = "";
        MsgOpaqueData.prototype.encPayload = $util.newBuffer([]);
        MsgOpaqueData.prototype.encIv = $util.newBuffer([]);
        MsgOpaqueData.prototype.eventName = "";
        MsgOpaqueData.prototype.isEventCanceled = false;
        MsgOpaqueData.prototype.eventDescription = "";
        MsgOpaqueData.prototype.eventJoinLink = "";
        MsgOpaqueData.prototype.eventStartTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MsgOpaqueData.prototype.eventLocation = null;
        MsgOpaqueData.prototype.eventEndTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MsgOpaqueData.prototype.eventIsScheduledCall = false;
        MsgOpaqueData.prototype.eventExtraGuestsAllowed = false;
        MsgOpaqueData.prototype.plainProtobufBytes = $util.newBuffer([]);
        MsgOpaqueData.prototype.quarantineExtractedText = "";
        MsgOpaqueData.prototype.pollEndTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MsgOpaqueData.prototype.pollHideVoterNames = false;
        MsgOpaqueData.prototype.pollAllowAddOption = false;
        MsgOpaqueData.prototype.sharableEventInviteId = "";
        MsgOpaqueData.prototype.sharableEventInviteTitle = "";
        MsgOpaqueData.prototype.sharableEventInviteStartTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MsgOpaqueData.prototype.sharableEventInviteEndTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MsgOpaqueData.prototype.sharableEventInviteCaption = "";
        MsgOpaqueData.prototype.sharableEventInviteIsCanceled = false;
        MsgOpaqueData.prototype.sharableEventInviteJpegThumbnail = $util.newBuffer([]);
        MsgOpaqueData.prototype.sharableEventInviteCallLink = "";

        MsgOpaqueData.create = function(properties) {
            return new MsgOpaqueData(properties);
        };

        MsgOpaqueData.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.body != null && $Object.hasOwnProperty.call(m, "body"))
                w.uint32(10).string(m.body);
            if (m.caption != null && $Object.hasOwnProperty.call(m, "caption"))
                w.uint32(26).string(m.caption);
            if (m.lng != null && $Object.hasOwnProperty.call(m, "lng"))
                w.uint32(41).double(m.lng);
            if (m.isLive != null && $Object.hasOwnProperty.call(m, "isLive"))
                w.uint32(48).bool(m.isLive);
            if (m.lat != null && $Object.hasOwnProperty.call(m, "lat"))
                w.uint32(57).double(m.lat);
            if (m.paymentAmount1000 != null && $Object.hasOwnProperty.call(m, "paymentAmount1000"))
                w.uint32(64).int32(m.paymentAmount1000);
            if (m.paymentNoteMsgBody != null && $Object.hasOwnProperty.call(m, "paymentNoteMsgBody"))
                w.uint32(74).string(m.paymentNoteMsgBody);
            if (m.matchedText != null && $Object.hasOwnProperty.call(m, "matchedText"))
                w.uint32(90).string(m.matchedText);
            if (m.title != null && $Object.hasOwnProperty.call(m, "title"))
                w.uint32(98).string(m.title);
            if (m.description != null && $Object.hasOwnProperty.call(m, "description"))
                w.uint32(106).string(m.description);
            if (m.futureproofBuffer != null && $Object.hasOwnProperty.call(m, "futureproofBuffer"))
                w.uint32(114).bytes(m.futureproofBuffer);
            if (m.clientUrl != null && $Object.hasOwnProperty.call(m, "clientUrl"))
                w.uint32(122).string(m.clientUrl);
            if (m.loc != null && $Object.hasOwnProperty.call(m, "loc"))
                w.uint32(130).string(m.loc);
            if (m.pollName != null && $Object.hasOwnProperty.call(m, "pollName"))
                w.uint32(138).string(m.pollName);
            if (m.pollOptions != null && m.pollOptions.length) {
                for (var i = 0; i < m.pollOptions.length; ++i)
                    $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption.encode(m.pollOptions[i], w.uint32(146).fork(), q + 1).ldelim();
            }
            if (m.pollSelectableOptionsCount != null && $Object.hasOwnProperty.call(m, "pollSelectableOptionsCount"))
                w.uint32(160).uint32(m.pollSelectableOptionsCount);
            if (m.messageSecret != null && $Object.hasOwnProperty.call(m, "messageSecret"))
                w.uint32(170).bytes(m.messageSecret);
            if (m.senderTimestampMs != null && $Object.hasOwnProperty.call(m, "senderTimestampMs"))
                w.uint32(176).int64(m.senderTimestampMs);
            if (m.pollUpdateParentKey != null && $Object.hasOwnProperty.call(m, "pollUpdateParentKey"))
                w.uint32(186).string(m.pollUpdateParentKey);
            if (m.encPollVote != null && $Object.hasOwnProperty.call(m, "encPollVote"))
                $root.MdStorageMsgRowOpaqueData.PollEncValue.encode(m.encPollVote, w.uint32(194).fork(), q + 1).ldelim();
            if (m.encReactionTargetMessageKey != null && $Object.hasOwnProperty.call(m, "encReactionTargetMessageKey"))
                w.uint32(202).string(m.encReactionTargetMessageKey);
            if (m.encReactionEncPayload != null && $Object.hasOwnProperty.call(m, "encReactionEncPayload"))
                w.uint32(210).bytes(m.encReactionEncPayload);
            if (m.encReactionEncIv != null && $Object.hasOwnProperty.call(m, "encReactionEncIv"))
                w.uint32(218).bytes(m.encReactionEncIv);
            if (m.isSentCagPollCreation != null && $Object.hasOwnProperty.call(m, "isSentCagPollCreation"))
                w.uint32(224).bool(m.isSentCagPollCreation);
            if (m.botMessageSecret != null && $Object.hasOwnProperty.call(m, "botMessageSecret"))
                w.uint32(234).bytes(m.botMessageSecret);
            if (m.targetMessageKey != null && $Object.hasOwnProperty.call(m, "targetMessageKey"))
                w.uint32(242).string(m.targetMessageKey);
            if (m.encPayload != null && $Object.hasOwnProperty.call(m, "encPayload"))
                w.uint32(250).bytes(m.encPayload);
            if (m.encIv != null && $Object.hasOwnProperty.call(m, "encIv"))
                w.uint32(258).bytes(m.encIv);
            if (m.eventName != null && $Object.hasOwnProperty.call(m, "eventName"))
                w.uint32(266).string(m.eventName);
            if (m.isEventCanceled != null && $Object.hasOwnProperty.call(m, "isEventCanceled"))
                w.uint32(272).bool(m.isEventCanceled);
            if (m.eventDescription != null && $Object.hasOwnProperty.call(m, "eventDescription"))
                w.uint32(282).string(m.eventDescription);
            if (m.eventJoinLink != null && $Object.hasOwnProperty.call(m, "eventJoinLink"))
                w.uint32(290).string(m.eventJoinLink);
            if (m.eventStartTime != null && $Object.hasOwnProperty.call(m, "eventStartTime"))
                w.uint32(296).int64(m.eventStartTime);
            if (m.eventLocation != null && $Object.hasOwnProperty.call(m, "eventLocation"))
                $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.EventLocation.encode(m.eventLocation, w.uint32(306).fork(), q + 1).ldelim();
            if (m.eventEndTime != null && $Object.hasOwnProperty.call(m, "eventEndTime"))
                w.uint32(320).int64(m.eventEndTime);
            if (m.pollVotesSnapshot != null && $Object.hasOwnProperty.call(m, "pollVotesSnapshot"))
                $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot.encode(m.pollVotesSnapshot, w.uint32(330).fork(), q + 1).ldelim();
            if (m.pollContentType != null && $Object.hasOwnProperty.call(m, "pollContentType"))
                w.uint32(336).int32(m.pollContentType);
            if (m.plainProtobufBytes != null && $Object.hasOwnProperty.call(m, "plainProtobufBytes"))
                w.uint32(346).bytes(m.plainProtobufBytes);
            if (m.eventIsScheduledCall != null && $Object.hasOwnProperty.call(m, "eventIsScheduledCall"))
                w.uint32(352).bool(m.eventIsScheduledCall);
            if (m.eventExtraGuestsAllowed != null && $Object.hasOwnProperty.call(m, "eventExtraGuestsAllowed"))
                w.uint32(360).bool(m.eventExtraGuestsAllowed);
            if (m.pollType != null && $Object.hasOwnProperty.call(m, "pollType"))
                w.uint32(368).int32(m.pollType);
            if (m.correctOptionIndex != null && $Object.hasOwnProperty.call(m, "correctOptionIndex"))
                w.uint32(376).int32(m.correctOptionIndex);
            if (m.quarantineExtractedText != null && $Object.hasOwnProperty.call(m, "quarantineExtractedText"))
                w.uint32(386).string(m.quarantineExtractedText);
            if (m.pollEndTime != null && $Object.hasOwnProperty.call(m, "pollEndTime"))
                w.uint32(392).int64(m.pollEndTime);
            if (m.pollHideVoterNames != null && $Object.hasOwnProperty.call(m, "pollHideVoterNames"))
                w.uint32(400).bool(m.pollHideVoterNames);
            if (m.originalSelfAuthor != null && $Object.hasOwnProperty.call(m, "originalSelfAuthor"))
                w.uint32(410).string(m.originalSelfAuthor);
            if (m.pollAllowAddOption != null && $Object.hasOwnProperty.call(m, "pollAllowAddOption"))
                w.uint32(416).bool(m.pollAllowAddOption);
            if (m.sharableEventInviteId != null && $Object.hasOwnProperty.call(m, "sharableEventInviteId"))
                w.uint32(426).string(m.sharableEventInviteId);
            if (m.sharableEventInviteTitle != null && $Object.hasOwnProperty.call(m, "sharableEventInviteTitle"))
                w.uint32(434).string(m.sharableEventInviteTitle);
            if (m.sharableEventInviteStartTime != null && $Object.hasOwnProperty.call(m, "sharableEventInviteStartTime"))
                w.uint32(440).int64(m.sharableEventInviteStartTime);
            if (m.sharableEventInviteEndTime != null && $Object.hasOwnProperty.call(m, "sharableEventInviteEndTime"))
                w.uint32(448).int64(m.sharableEventInviteEndTime);
            if (m.sharableEventInviteCaption != null && $Object.hasOwnProperty.call(m, "sharableEventInviteCaption"))
                w.uint32(458).string(m.sharableEventInviteCaption);
            if (m.sharableEventInviteIsCanceled != null && $Object.hasOwnProperty.call(m, "sharableEventInviteIsCanceled"))
                w.uint32(464).bool(m.sharableEventInviteIsCanceled);
            if (m.sharableEventInviteJpegThumbnail != null && $Object.hasOwnProperty.call(m, "sharableEventInviteJpegThumbnail"))
                w.uint32(474).bytes(m.sharableEventInviteJpegThumbnail);
            if (m.sharableEventInviteCallLink != null && $Object.hasOwnProperty.call(m, "sharableEventInviteCallLink"))
                w.uint32(482).string(m.sharableEventInviteCallLink);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        MsgOpaqueData.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.MdStorageMsgRowOpaqueData.MsgOpaqueData(), v;
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
                        m.body = r.string();
                        continue;
                    }
                case 3: {
                        if (u !== 2)
                            break;
                        m.caption = r.string();
                        continue;
                    }
                case 5: {
                        if (u !== 1)
                            break;
                        m.lng = r.double();
                        continue;
                    }
                case 6: {
                        if (u !== 0)
                            break;
                        m.isLive = r.bool();
                        continue;
                    }
                case 7: {
                        if (u !== 1)
                            break;
                        m.lat = r.double();
                        continue;
                    }
                case 8: {
                        if (u !== 0)
                            break;
                        m.paymentAmount1000 = r.int32();
                        continue;
                    }
                case 9: {
                        if (u !== 2)
                            break;
                        m.paymentNoteMsgBody = r.string();
                        continue;
                    }
                case 11: {
                        if (u !== 2)
                            break;
                        m.matchedText = r.string();
                        continue;
                    }
                case 12: {
                        if (u !== 2)
                            break;
                        m.title = r.string();
                        continue;
                    }
                case 13: {
                        if (u !== 2)
                            break;
                        m.description = r.string();
                        continue;
                    }
                case 14: {
                        if (u !== 2)
                            break;
                        m.futureproofBuffer = r.bytes();
                        continue;
                    }
                case 15: {
                        if (u !== 2)
                            break;
                        m.clientUrl = r.string();
                        continue;
                    }
                case 16: {
                        if (u !== 2)
                            break;
                        m.loc = r.string();
                        continue;
                    }
                case 17: {
                        if (u !== 2)
                            break;
                        m.pollName = r.string();
                        continue;
                    }
                case 18: {
                        if (u !== 2)
                            break;
                        if (!(m.pollOptions && m.pollOptions.length))
                            m.pollOptions = [];
                        m.pollOptions.push($root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption.decode(r, r.uint32(), $undefined, q + 1));
                        continue;
                    }
                case 20: {
                        if (u !== 0)
                            break;
                        m.pollSelectableOptionsCount = r.uint32();
                        continue;
                    }
                case 21: {
                        if (u !== 2)
                            break;
                        m.messageSecret = r.bytes();
                        continue;
                    }
                case 51: {
                        if (u !== 2)
                            break;
                        m.originalSelfAuthor = r.string();
                        continue;
                    }
                case 22: {
                        if (u !== 0)
                            break;
                        m.senderTimestampMs = r.int64();
                        continue;
                    }
                case 23: {
                        if (u !== 2)
                            break;
                        m.pollUpdateParentKey = r.string();
                        continue;
                    }
                case 24: {
                        if (u !== 2)
                            break;
                        m.encPollVote = $root.MdStorageMsgRowOpaqueData.PollEncValue.decode(r, r.uint32(), $undefined, q + 1, m.encPollVote);
                        continue;
                    }
                case 28: {
                        if (u !== 0)
                            break;
                        m.isSentCagPollCreation = r.bool();
                        continue;
                    }
                case 42: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollContentType[v] !== $undefined) {
                            m.pollContentType = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 46: {
                        if (u !== 0)
                            break;
                        v = r.int32();
                        if ($root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollType[v] !== $undefined) {
                            m.pollType = v;
                        } else if (!r.discardUnknown) {
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        continue;
                    }
                case 47: {
                        if (u !== 0)
                            break;
                        m.correctOptionIndex = r.int32();
                        continue;
                    }
                case 41: {
                        if (u !== 2)
                            break;
                        m.pollVotesSnapshot = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot.decode(r, r.uint32(), $undefined, q + 1, m.pollVotesSnapshot);
                        continue;
                    }
                case 25: {
                        if (u !== 2)
                            break;
                        m.encReactionTargetMessageKey = r.string();
                        continue;
                    }
                case 26: {
                        if (u !== 2)
                            break;
                        m.encReactionEncPayload = r.bytes();
                        continue;
                    }
                case 27: {
                        if (u !== 2)
                            break;
                        m.encReactionEncIv = r.bytes();
                        continue;
                    }
                case 29: {
                        if (u !== 2)
                            break;
                        m.botMessageSecret = r.bytes();
                        continue;
                    }
                case 30: {
                        if (u !== 2)
                            break;
                        m.targetMessageKey = r.string();
                        continue;
                    }
                case 31: {
                        if (u !== 2)
                            break;
                        m.encPayload = r.bytes();
                        continue;
                    }
                case 32: {
                        if (u !== 2)
                            break;
                        m.encIv = r.bytes();
                        continue;
                    }
                case 33: {
                        if (u !== 2)
                            break;
                        m.eventName = r.string();
                        continue;
                    }
                case 34: {
                        if (u !== 0)
                            break;
                        m.isEventCanceled = r.bool();
                        continue;
                    }
                case 35: {
                        if (u !== 2)
                            break;
                        m.eventDescription = r.string();
                        continue;
                    }
                case 36: {
                        if (u !== 2)
                            break;
                        m.eventJoinLink = r.string();
                        continue;
                    }
                case 37: {
                        if (u !== 0)
                            break;
                        m.eventStartTime = r.int64();
                        continue;
                    }
                case 38: {
                        if (u !== 2)
                            break;
                        m.eventLocation = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.EventLocation.decode(r, r.uint32(), $undefined, q + 1, m.eventLocation);
                        continue;
                    }
                case 40: {
                        if (u !== 0)
                            break;
                        m.eventEndTime = r.int64();
                        continue;
                    }
                case 44: {
                        if (u !== 0)
                            break;
                        m.eventIsScheduledCall = r.bool();
                        continue;
                    }
                case 45: {
                        if (u !== 0)
                            break;
                        m.eventExtraGuestsAllowed = r.bool();
                        continue;
                    }
                case 43: {
                        if (u !== 2)
                            break;
                        m.plainProtobufBytes = r.bytes();
                        continue;
                    }
                case 48: {
                        if (u !== 2)
                            break;
                        m.quarantineExtractedText = r.string();
                        continue;
                    }
                case 49: {
                        if (u !== 0)
                            break;
                        m.pollEndTime = r.int64();
                        continue;
                    }
                case 50: {
                        if (u !== 0)
                            break;
                        m.pollHideVoterNames = r.bool();
                        continue;
                    }
                case 52: {
                        if (u !== 0)
                            break;
                        m.pollAllowAddOption = r.bool();
                        continue;
                    }
                case 53: {
                        if (u !== 2)
                            break;
                        m.sharableEventInviteId = r.string();
                        continue;
                    }
                case 54: {
                        if (u !== 2)
                            break;
                        m.sharableEventInviteTitle = r.string();
                        continue;
                    }
                case 55: {
                        if (u !== 0)
                            break;
                        m.sharableEventInviteStartTime = r.int64();
                        continue;
                    }
                case 56: {
                        if (u !== 0)
                            break;
                        m.sharableEventInviteEndTime = r.int64();
                        continue;
                    }
                case 57: {
                        if (u !== 2)
                            break;
                        m.sharableEventInviteCaption = r.string();
                        continue;
                    }
                case 58: {
                        if (u !== 0)
                            break;
                        m.sharableEventInviteIsCanceled = r.bool();
                        continue;
                    }
                case 59: {
                        if (u !== 2)
                            break;
                        m.sharableEventInviteJpegThumbnail = r.bytes();
                        continue;
                    }
                case 60: {
                        if (u !== 2)
                            break;
                        m.sharableEventInviteCallLink = r.string();
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

        MsgOpaqueData.fromObject = function (d, q) {
            if (d instanceof $root.MdStorageMsgRowOpaqueData.MsgOpaqueData)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".MdStorageMsgRowOpaqueData.MsgOpaqueData: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.MdStorageMsgRowOpaqueData.MsgOpaqueData();
            if (d.body != null) {
                m.body = $String(d.body);
            }
            if (d.caption != null) {
                m.caption = $String(d.caption);
            }
            if (d.lng != null) {
                m.lng = $Number(d.lng);
            }
            if (d.isLive != null) {
                m.isLive = $Boolean(d.isLive);
            }
            if (d.lat != null) {
                m.lat = $Number(d.lat);
            }
            if (d.paymentAmount1000 != null) {
                m.paymentAmount1000 = d.paymentAmount1000 | 0;
            }
            if (d.paymentNoteMsgBody != null) {
                m.paymentNoteMsgBody = $String(d.paymentNoteMsgBody);
            }
            if (d.matchedText != null) {
                m.matchedText = $String(d.matchedText);
            }
            if (d.title != null) {
                m.title = $String(d.title);
            }
            if (d.description != null) {
                m.description = $String(d.description);
            }
            if (d.futureproofBuffer != null) {
                if (typeof d.futureproofBuffer === "string")
                    $util.base64.decode(d.futureproofBuffer, m.futureproofBuffer = $util.newBuffer($util.base64.length(d.futureproofBuffer)), 0);
                else if (d.futureproofBuffer.length >= 0)
                    m.futureproofBuffer = d.futureproofBuffer;
            }
            if (d.clientUrl != null) {
                m.clientUrl = $String(d.clientUrl);
            }
            if (d.loc != null) {
                m.loc = $String(d.loc);
            }
            if (d.pollName != null) {
                m.pollName = $String(d.pollName);
            }
            if (d.pollOptions) {
                if (!$Array.isArray(d.pollOptions))
                    throw $TypeError(".MdStorageMsgRowOpaqueData.MsgOpaqueData.pollOptions: array expected");
                m.pollOptions = $Array(d.pollOptions.length);
                for (var i = 0; i < d.pollOptions.length; ++i) {
                    if (!$util.isObject(d.pollOptions[i]))
                        throw $TypeError(".MdStorageMsgRowOpaqueData.MsgOpaqueData.pollOptions: object expected");
                    m.pollOptions[i] = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption.fromObject(d.pollOptions[i], q + 1);
                }
            }
            if (d.pollSelectableOptionsCount != null) {
                m.pollSelectableOptionsCount = d.pollSelectableOptionsCount >>> 0;
            }
            if (d.messageSecret != null) {
                if (typeof d.messageSecret === "string")
                    $util.base64.decode(d.messageSecret, m.messageSecret = $util.newBuffer($util.base64.length(d.messageSecret)), 0);
                else if (d.messageSecret.length >= 0)
                    m.messageSecret = d.messageSecret;
            }
            if (d.originalSelfAuthor != null) {
                m.originalSelfAuthor = $String(d.originalSelfAuthor);
            }
            if (d.senderTimestampMs != null) {
                if ($util.Long)
                    m.senderTimestampMs = $util.Long.fromValue(d.senderTimestampMs, false);
                else if (typeof d.senderTimestampMs === "string")
                    m.senderTimestampMs = $parseInt(d.senderTimestampMs, 10);
                else if (typeof d.senderTimestampMs === "number")
                    m.senderTimestampMs = d.senderTimestampMs;
                else if (typeof d.senderTimestampMs === "object")
                    m.senderTimestampMs = new $util.LongBits(d.senderTimestampMs.low >>> 0, d.senderTimestampMs.high >>> 0).toNumber();
            }
            if (d.pollUpdateParentKey != null) {
                m.pollUpdateParentKey = $String(d.pollUpdateParentKey);
            }
            if (d.encPollVote != null) {
                if (!$util.isObject(d.encPollVote))
                    throw $TypeError(".MdStorageMsgRowOpaqueData.MsgOpaqueData.encPollVote: object expected");
                m.encPollVote = $root.MdStorageMsgRowOpaqueData.PollEncValue.fromObject(d.encPollVote, q + 1);
            }
            if (d.isSentCagPollCreation != null) {
                m.isSentCagPollCreation = $Boolean(d.isSentCagPollCreation);
            }
            switch (d.pollContentType) {
            case "UNKNOWN":
            case 0:
                m.pollContentType = 0;
                break;
            case "TEXT":
            case 1:
                m.pollContentType = 1;
                break;
            case "IMAGE":
            case 2:
                m.pollContentType = 2;
                break;
            default:
            }
            switch (d.pollType) {
            case "POLL":
            case 0:
                m.pollType = 0;
                break;
            case "QUIZ":
            case 1:
                m.pollType = 1;
                break;
            default:
            }
            if (d.correctOptionIndex != null) {
                m.correctOptionIndex = d.correctOptionIndex | 0;
            }
            if (d.pollVotesSnapshot != null) {
                if (!$util.isObject(d.pollVotesSnapshot))
                    throw $TypeError(".MdStorageMsgRowOpaqueData.MsgOpaqueData.pollVotesSnapshot: object expected");
                m.pollVotesSnapshot = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot.fromObject(d.pollVotesSnapshot, q + 1);
            }
            if (d.encReactionTargetMessageKey != null) {
                m.encReactionTargetMessageKey = $String(d.encReactionTargetMessageKey);
            }
            if (d.encReactionEncPayload != null) {
                if (typeof d.encReactionEncPayload === "string")
                    $util.base64.decode(d.encReactionEncPayload, m.encReactionEncPayload = $util.newBuffer($util.base64.length(d.encReactionEncPayload)), 0);
                else if (d.encReactionEncPayload.length >= 0)
                    m.encReactionEncPayload = d.encReactionEncPayload;
            }
            if (d.encReactionEncIv != null) {
                if (typeof d.encReactionEncIv === "string")
                    $util.base64.decode(d.encReactionEncIv, m.encReactionEncIv = $util.newBuffer($util.base64.length(d.encReactionEncIv)), 0);
                else if (d.encReactionEncIv.length >= 0)
                    m.encReactionEncIv = d.encReactionEncIv;
            }
            if (d.botMessageSecret != null) {
                if (typeof d.botMessageSecret === "string")
                    $util.base64.decode(d.botMessageSecret, m.botMessageSecret = $util.newBuffer($util.base64.length(d.botMessageSecret)), 0);
                else if (d.botMessageSecret.length >= 0)
                    m.botMessageSecret = d.botMessageSecret;
            }
            if (d.targetMessageKey != null) {
                m.targetMessageKey = $String(d.targetMessageKey);
            }
            if (d.encPayload != null) {
                if (typeof d.encPayload === "string")
                    $util.base64.decode(d.encPayload, m.encPayload = $util.newBuffer($util.base64.length(d.encPayload)), 0);
                else if (d.encPayload.length >= 0)
                    m.encPayload = d.encPayload;
            }
            if (d.encIv != null) {
                if (typeof d.encIv === "string")
                    $util.base64.decode(d.encIv, m.encIv = $util.newBuffer($util.base64.length(d.encIv)), 0);
                else if (d.encIv.length >= 0)
                    m.encIv = d.encIv;
            }
            if (d.eventName != null) {
                m.eventName = $String(d.eventName);
            }
            if (d.isEventCanceled != null) {
                m.isEventCanceled = $Boolean(d.isEventCanceled);
            }
            if (d.eventDescription != null) {
                m.eventDescription = $String(d.eventDescription);
            }
            if (d.eventJoinLink != null) {
                m.eventJoinLink = $String(d.eventJoinLink);
            }
            if (d.eventStartTime != null) {
                if ($util.Long)
                    m.eventStartTime = $util.Long.fromValue(d.eventStartTime, false);
                else if (typeof d.eventStartTime === "string")
                    m.eventStartTime = $parseInt(d.eventStartTime, 10);
                else if (typeof d.eventStartTime === "number")
                    m.eventStartTime = d.eventStartTime;
                else if (typeof d.eventStartTime === "object")
                    m.eventStartTime = new $util.LongBits(d.eventStartTime.low >>> 0, d.eventStartTime.high >>> 0).toNumber();
            }
            if (d.eventLocation != null) {
                if (!$util.isObject(d.eventLocation))
                    throw $TypeError(".MdStorageMsgRowOpaqueData.MsgOpaqueData.eventLocation: object expected");
                m.eventLocation = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.EventLocation.fromObject(d.eventLocation, q + 1);
            }
            if (d.eventEndTime != null) {
                if ($util.Long)
                    m.eventEndTime = $util.Long.fromValue(d.eventEndTime, false);
                else if (typeof d.eventEndTime === "string")
                    m.eventEndTime = $parseInt(d.eventEndTime, 10);
                else if (typeof d.eventEndTime === "number")
                    m.eventEndTime = d.eventEndTime;
                else if (typeof d.eventEndTime === "object")
                    m.eventEndTime = new $util.LongBits(d.eventEndTime.low >>> 0, d.eventEndTime.high >>> 0).toNumber();
            }
            if (d.eventIsScheduledCall != null) {
                m.eventIsScheduledCall = $Boolean(d.eventIsScheduledCall);
            }
            if (d.eventExtraGuestsAllowed != null) {
                m.eventExtraGuestsAllowed = $Boolean(d.eventExtraGuestsAllowed);
            }
            if (d.plainProtobufBytes != null) {
                if (typeof d.plainProtobufBytes === "string")
                    $util.base64.decode(d.plainProtobufBytes, m.plainProtobufBytes = $util.newBuffer($util.base64.length(d.plainProtobufBytes)), 0);
                else if (d.plainProtobufBytes.length >= 0)
                    m.plainProtobufBytes = d.plainProtobufBytes;
            }
            if (d.quarantineExtractedText != null) {
                m.quarantineExtractedText = $String(d.quarantineExtractedText);
            }
            if (d.pollEndTime != null) {
                if ($util.Long)
                    m.pollEndTime = $util.Long.fromValue(d.pollEndTime, false);
                else if (typeof d.pollEndTime === "string")
                    m.pollEndTime = $parseInt(d.pollEndTime, 10);
                else if (typeof d.pollEndTime === "number")
                    m.pollEndTime = d.pollEndTime;
                else if (typeof d.pollEndTime === "object")
                    m.pollEndTime = new $util.LongBits(d.pollEndTime.low >>> 0, d.pollEndTime.high >>> 0).toNumber();
            }
            if (d.pollHideVoterNames != null) {
                m.pollHideVoterNames = $Boolean(d.pollHideVoterNames);
            }
            if (d.pollAllowAddOption != null) {
                m.pollAllowAddOption = $Boolean(d.pollAllowAddOption);
            }
            if (d.sharableEventInviteId != null) {
                m.sharableEventInviteId = $String(d.sharableEventInviteId);
            }
            if (d.sharableEventInviteTitle != null) {
                m.sharableEventInviteTitle = $String(d.sharableEventInviteTitle);
            }
            if (d.sharableEventInviteStartTime != null) {
                if ($util.Long)
                    m.sharableEventInviteStartTime = $util.Long.fromValue(d.sharableEventInviteStartTime, false);
                else if (typeof d.sharableEventInviteStartTime === "string")
                    m.sharableEventInviteStartTime = $parseInt(d.sharableEventInviteStartTime, 10);
                else if (typeof d.sharableEventInviteStartTime === "number")
                    m.sharableEventInviteStartTime = d.sharableEventInviteStartTime;
                else if (typeof d.sharableEventInviteStartTime === "object")
                    m.sharableEventInviteStartTime = new $util.LongBits(d.sharableEventInviteStartTime.low >>> 0, d.sharableEventInviteStartTime.high >>> 0).toNumber();
            }
            if (d.sharableEventInviteEndTime != null) {
                if ($util.Long)
                    m.sharableEventInviteEndTime = $util.Long.fromValue(d.sharableEventInviteEndTime, false);
                else if (typeof d.sharableEventInviteEndTime === "string")
                    m.sharableEventInviteEndTime = $parseInt(d.sharableEventInviteEndTime, 10);
                else if (typeof d.sharableEventInviteEndTime === "number")
                    m.sharableEventInviteEndTime = d.sharableEventInviteEndTime;
                else if (typeof d.sharableEventInviteEndTime === "object")
                    m.sharableEventInviteEndTime = new $util.LongBits(d.sharableEventInviteEndTime.low >>> 0, d.sharableEventInviteEndTime.high >>> 0).toNumber();
            }
            if (d.sharableEventInviteCaption != null) {
                m.sharableEventInviteCaption = $String(d.sharableEventInviteCaption);
            }
            if (d.sharableEventInviteIsCanceled != null) {
                m.sharableEventInviteIsCanceled = $Boolean(d.sharableEventInviteIsCanceled);
            }
            if (d.sharableEventInviteJpegThumbnail != null) {
                if (typeof d.sharableEventInviteJpegThumbnail === "string")
                    $util.base64.decode(d.sharableEventInviteJpegThumbnail, m.sharableEventInviteJpegThumbnail = $util.newBuffer($util.base64.length(d.sharableEventInviteJpegThumbnail)), 0);
                else if (d.sharableEventInviteJpegThumbnail.length >= 0)
                    m.sharableEventInviteJpegThumbnail = d.sharableEventInviteJpegThumbnail;
            }
            if (d.sharableEventInviteCallLink != null) {
                m.sharableEventInviteCallLink = $String(d.sharableEventInviteCallLink);
            }
            return m;
        };

        MsgOpaqueData.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.arrays || o.defaults) {
                d.pollOptions = [];
            }
            if (o.defaults) {
                d.body = "";
                d.caption = "";
                d.lng = 0;
                d.isLive = false;
                d.lat = 0;
                d.paymentAmount1000 = 0;
                d.paymentNoteMsgBody = "";
                d.matchedText = "";
                d.title = "";
                d.description = "";
                if (o.bytes === $String)
                    d.futureproofBuffer = "";
                else {
                    d.futureproofBuffer = [];
                    if (o.bytes !== $Array)
                        d.futureproofBuffer = $util.newBuffer(d.futureproofBuffer);
                }
                d.clientUrl = "";
                d.loc = "";
                d.pollName = "";
                d.pollSelectableOptionsCount = 0;
                if (o.bytes === $String)
                    d.messageSecret = "";
                else {
                    d.messageSecret = [];
                    if (o.bytes !== $Array)
                        d.messageSecret = $util.newBuffer(d.messageSecret);
                }
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.senderTimestampMs = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.senderTimestampMs = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.pollUpdateParentKey = "";
                d.encPollVote = null;
                d.encReactionTargetMessageKey = "";
                if (o.bytes === $String)
                    d.encReactionEncPayload = "";
                else {
                    d.encReactionEncPayload = [];
                    if (o.bytes !== $Array)
                        d.encReactionEncPayload = $util.newBuffer(d.encReactionEncPayload);
                }
                if (o.bytes === $String)
                    d.encReactionEncIv = "";
                else {
                    d.encReactionEncIv = [];
                    if (o.bytes !== $Array)
                        d.encReactionEncIv = $util.newBuffer(d.encReactionEncIv);
                }
                d.isSentCagPollCreation = false;
                if (o.bytes === $String)
                    d.botMessageSecret = "";
                else {
                    d.botMessageSecret = [];
                    if (o.bytes !== $Array)
                        d.botMessageSecret = $util.newBuffer(d.botMessageSecret);
                }
                d.targetMessageKey = "";
                if (o.bytes === $String)
                    d.encPayload = "";
                else {
                    d.encPayload = [];
                    if (o.bytes !== $Array)
                        d.encPayload = $util.newBuffer(d.encPayload);
                }
                if (o.bytes === $String)
                    d.encIv = "";
                else {
                    d.encIv = [];
                    if (o.bytes !== $Array)
                        d.encIv = $util.newBuffer(d.encIv);
                }
                d.eventName = "";
                d.isEventCanceled = false;
                d.eventDescription = "";
                d.eventJoinLink = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.eventStartTime = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.eventStartTime = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.eventLocation = null;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.eventEndTime = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.eventEndTime = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.pollVotesSnapshot = null;
                d.pollContentType = o.enums === $String ? "UNKNOWN" : 0;
                if (o.bytes === $String)
                    d.plainProtobufBytes = "";
                else {
                    d.plainProtobufBytes = [];
                    if (o.bytes !== $Array)
                        d.plainProtobufBytes = $util.newBuffer(d.plainProtobufBytes);
                }
                d.eventIsScheduledCall = false;
                d.eventExtraGuestsAllowed = false;
                d.pollType = o.enums === $String ? "POLL" : 0;
                d.correctOptionIndex = 0;
                d.quarantineExtractedText = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.pollEndTime = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.pollEndTime = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.pollHideVoterNames = false;
                d.originalSelfAuthor = "";
                d.pollAllowAddOption = false;
                d.sharableEventInviteId = "";
                d.sharableEventInviteTitle = "";
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.sharableEventInviteStartTime = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.sharableEventInviteStartTime = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                if ($util.Long) {
                    var n = new $util.Long(0, 0, false);
                    d.sharableEventInviteEndTime = o.longs === $String ? n.toString() : o.longs === $Number ? n.toNumber() : typeof $BigInt !== "undefined" && o.longs === $BigInt ? n.toBigInt() : n;
                } else
                    d.sharableEventInviteEndTime = o.longs === $String ? "0" : typeof $BigInt !== "undefined" && o.longs === $BigInt ? $BigInt("0") : 0;
                d.sharableEventInviteCaption = "";
                d.sharableEventInviteIsCanceled = false;
                if (o.bytes === $String)
                    d.sharableEventInviteJpegThumbnail = "";
                else {
                    d.sharableEventInviteJpegThumbnail = [];
                    if (o.bytes !== $Array)
                        d.sharableEventInviteJpegThumbnail = $util.newBuffer(d.sharableEventInviteJpegThumbnail);
                }
                d.sharableEventInviteCallLink = "";
            }
            if (m.body != null && $Object.hasOwnProperty.call(m, "body")) {
                d.body = m.body;
            }
            if (m.caption != null && $Object.hasOwnProperty.call(m, "caption")) {
                d.caption = m.caption;
            }
            if (m.lng != null && $Object.hasOwnProperty.call(m, "lng")) {
                d.lng = o.json && !$isFinite(m.lng) ? $String(m.lng) : m.lng;
            }
            if (m.isLive != null && $Object.hasOwnProperty.call(m, "isLive")) {
                d.isLive = m.isLive;
            }
            if (m.lat != null && $Object.hasOwnProperty.call(m, "lat")) {
                d.lat = o.json && !$isFinite(m.lat) ? $String(m.lat) : m.lat;
            }
            if (m.paymentAmount1000 != null && $Object.hasOwnProperty.call(m, "paymentAmount1000")) {
                d.paymentAmount1000 = m.paymentAmount1000;
            }
            if (m.paymentNoteMsgBody != null && $Object.hasOwnProperty.call(m, "paymentNoteMsgBody")) {
                d.paymentNoteMsgBody = m.paymentNoteMsgBody;
            }
            if (m.matchedText != null && $Object.hasOwnProperty.call(m, "matchedText")) {
                d.matchedText = m.matchedText;
            }
            if (m.title != null && $Object.hasOwnProperty.call(m, "title")) {
                d.title = m.title;
            }
            if (m.description != null && $Object.hasOwnProperty.call(m, "description")) {
                d.description = m.description;
            }
            if (m.futureproofBuffer != null && $Object.hasOwnProperty.call(m, "futureproofBuffer")) {
                d.futureproofBuffer = o.bytes === $String ? $util.base64.encode(m.futureproofBuffer, 0, m.futureproofBuffer.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.futureproofBuffer) : m.futureproofBuffer;
            }
            if (m.clientUrl != null && $Object.hasOwnProperty.call(m, "clientUrl")) {
                d.clientUrl = m.clientUrl;
            }
            if (m.loc != null && $Object.hasOwnProperty.call(m, "loc")) {
                d.loc = m.loc;
            }
            if (m.pollName != null && $Object.hasOwnProperty.call(m, "pollName")) {
                d.pollName = m.pollName;
            }
            if (m.pollOptions && m.pollOptions.length) {
                d.pollOptions = $Array(m.pollOptions.length);
                for (var j = 0; j < m.pollOptions.length; ++j) {
                    d.pollOptions[j] = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption.toObject(m.pollOptions[j], o, q + 1);
                }
            }
            if (m.pollSelectableOptionsCount != null && $Object.hasOwnProperty.call(m, "pollSelectableOptionsCount")) {
                d.pollSelectableOptionsCount = m.pollSelectableOptionsCount;
            }
            if (m.messageSecret != null && $Object.hasOwnProperty.call(m, "messageSecret")) {
                d.messageSecret = o.bytes === $String ? $util.base64.encode(m.messageSecret, 0, m.messageSecret.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.messageSecret) : m.messageSecret;
            }
            if (m.senderTimestampMs != null && $Object.hasOwnProperty.call(m, "senderTimestampMs")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.senderTimestampMs = typeof m.senderTimestampMs === "number" ? $BigInt(m.senderTimestampMs) : $util.Long.fromBits(m.senderTimestampMs.low >>> 0, m.senderTimestampMs.high >>> 0, false).toBigInt();
                else if (typeof m.senderTimestampMs === "number")
                    d.senderTimestampMs = o.longs === $String ? $String(m.senderTimestampMs) : m.senderTimestampMs;
                else
                    d.senderTimestampMs = o.longs === String ? longToString(m.senderTimestampMs) : o.longs === Number ? longToNumber(m.senderTimestampMs) : m.senderTimestampMs;
            }
            if (m.pollUpdateParentKey != null && $Object.hasOwnProperty.call(m, "pollUpdateParentKey")) {
                d.pollUpdateParentKey = m.pollUpdateParentKey;
            }
            if (m.encPollVote != null && $Object.hasOwnProperty.call(m, "encPollVote")) {
                d.encPollVote = $root.MdStorageMsgRowOpaqueData.PollEncValue.toObject(m.encPollVote, o, q + 1);
            }
            if (m.encReactionTargetMessageKey != null && $Object.hasOwnProperty.call(m, "encReactionTargetMessageKey")) {
                d.encReactionTargetMessageKey = m.encReactionTargetMessageKey;
            }
            if (m.encReactionEncPayload != null && $Object.hasOwnProperty.call(m, "encReactionEncPayload")) {
                d.encReactionEncPayload = o.bytes === $String ? $util.base64.encode(m.encReactionEncPayload, 0, m.encReactionEncPayload.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.encReactionEncPayload) : m.encReactionEncPayload;
            }
            if (m.encReactionEncIv != null && $Object.hasOwnProperty.call(m, "encReactionEncIv")) {
                d.encReactionEncIv = o.bytes === $String ? $util.base64.encode(m.encReactionEncIv, 0, m.encReactionEncIv.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.encReactionEncIv) : m.encReactionEncIv;
            }
            if (m.isSentCagPollCreation != null && $Object.hasOwnProperty.call(m, "isSentCagPollCreation")) {
                d.isSentCagPollCreation = m.isSentCagPollCreation;
            }
            if (m.botMessageSecret != null && $Object.hasOwnProperty.call(m, "botMessageSecret")) {
                d.botMessageSecret = o.bytes === $String ? $util.base64.encode(m.botMessageSecret, 0, m.botMessageSecret.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.botMessageSecret) : m.botMessageSecret;
            }
            if (m.targetMessageKey != null && $Object.hasOwnProperty.call(m, "targetMessageKey")) {
                d.targetMessageKey = m.targetMessageKey;
            }
            if (m.encPayload != null && $Object.hasOwnProperty.call(m, "encPayload")) {
                d.encPayload = o.bytes === $String ? $util.base64.encode(m.encPayload, 0, m.encPayload.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.encPayload) : m.encPayload;
            }
            if (m.encIv != null && $Object.hasOwnProperty.call(m, "encIv")) {
                d.encIv = o.bytes === $String ? $util.base64.encode(m.encIv, 0, m.encIv.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.encIv) : m.encIv;
            }
            if (m.eventName != null && $Object.hasOwnProperty.call(m, "eventName")) {
                d.eventName = m.eventName;
            }
            if (m.isEventCanceled != null && $Object.hasOwnProperty.call(m, "isEventCanceled")) {
                d.isEventCanceled = m.isEventCanceled;
            }
            if (m.eventDescription != null && $Object.hasOwnProperty.call(m, "eventDescription")) {
                d.eventDescription = m.eventDescription;
            }
            if (m.eventJoinLink != null && $Object.hasOwnProperty.call(m, "eventJoinLink")) {
                d.eventJoinLink = m.eventJoinLink;
            }
            if (m.eventStartTime != null && $Object.hasOwnProperty.call(m, "eventStartTime")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.eventStartTime = typeof m.eventStartTime === "number" ? $BigInt(m.eventStartTime) : $util.Long.fromBits(m.eventStartTime.low >>> 0, m.eventStartTime.high >>> 0, false).toBigInt();
                else if (typeof m.eventStartTime === "number")
                    d.eventStartTime = o.longs === $String ? $String(m.eventStartTime) : m.eventStartTime;
                else
                    d.eventStartTime = o.longs === String ? longToString(m.eventStartTime) : o.longs === Number ? longToNumber(m.eventStartTime) : m.eventStartTime;
            }
            if (m.eventLocation != null && $Object.hasOwnProperty.call(m, "eventLocation")) {
                d.eventLocation = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.EventLocation.toObject(m.eventLocation, o, q + 1);
            }
            if (m.eventEndTime != null && $Object.hasOwnProperty.call(m, "eventEndTime")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.eventEndTime = typeof m.eventEndTime === "number" ? $BigInt(m.eventEndTime) : $util.Long.fromBits(m.eventEndTime.low >>> 0, m.eventEndTime.high >>> 0, false).toBigInt();
                else if (typeof m.eventEndTime === "number")
                    d.eventEndTime = o.longs === $String ? $String(m.eventEndTime) : m.eventEndTime;
                else
                    d.eventEndTime = o.longs === String ? longToString(m.eventEndTime) : o.longs === Number ? longToNumber(m.eventEndTime) : m.eventEndTime;
            }
            if (m.pollVotesSnapshot != null && $Object.hasOwnProperty.call(m, "pollVotesSnapshot")) {
                d.pollVotesSnapshot = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot.toObject(m.pollVotesSnapshot, o, q + 1);
            }
            if (m.pollContentType != null && $Object.hasOwnProperty.call(m, "pollContentType")) {
                d.pollContentType = o.enums === $String ? $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollContentType[m.pollContentType] === $undefined ? m.pollContentType : $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollContentType[m.pollContentType] : m.pollContentType;
            }
            if (m.plainProtobufBytes != null && $Object.hasOwnProperty.call(m, "plainProtobufBytes")) {
                d.plainProtobufBytes = o.bytes === $String ? $util.base64.encode(m.plainProtobufBytes, 0, m.plainProtobufBytes.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.plainProtobufBytes) : m.plainProtobufBytes;
            }
            if (m.eventIsScheduledCall != null && $Object.hasOwnProperty.call(m, "eventIsScheduledCall")) {
                d.eventIsScheduledCall = m.eventIsScheduledCall;
            }
            if (m.eventExtraGuestsAllowed != null && $Object.hasOwnProperty.call(m, "eventExtraGuestsAllowed")) {
                d.eventExtraGuestsAllowed = m.eventExtraGuestsAllowed;
            }
            if (m.pollType != null && $Object.hasOwnProperty.call(m, "pollType")) {
                d.pollType = o.enums === $String ? $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollType[m.pollType] === $undefined ? m.pollType : $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollType[m.pollType] : m.pollType;
            }
            if (m.correctOptionIndex != null && $Object.hasOwnProperty.call(m, "correctOptionIndex")) {
                d.correctOptionIndex = m.correctOptionIndex;
            }
            if (m.quarantineExtractedText != null && $Object.hasOwnProperty.call(m, "quarantineExtractedText")) {
                d.quarantineExtractedText = m.quarantineExtractedText;
            }
            if (m.pollEndTime != null && $Object.hasOwnProperty.call(m, "pollEndTime")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.pollEndTime = typeof m.pollEndTime === "number" ? $BigInt(m.pollEndTime) : $util.Long.fromBits(m.pollEndTime.low >>> 0, m.pollEndTime.high >>> 0, false).toBigInt();
                else if (typeof m.pollEndTime === "number")
                    d.pollEndTime = o.longs === $String ? $String(m.pollEndTime) : m.pollEndTime;
                else
                    d.pollEndTime = o.longs === String ? longToString(m.pollEndTime) : o.longs === Number ? longToNumber(m.pollEndTime) : m.pollEndTime;
            }
            if (m.pollHideVoterNames != null && $Object.hasOwnProperty.call(m, "pollHideVoterNames")) {
                d.pollHideVoterNames = m.pollHideVoterNames;
            }
            if (m.originalSelfAuthor != null && $Object.hasOwnProperty.call(m, "originalSelfAuthor")) {
                d.originalSelfAuthor = m.originalSelfAuthor;
            }
            if (m.pollAllowAddOption != null && $Object.hasOwnProperty.call(m, "pollAllowAddOption")) {
                d.pollAllowAddOption = m.pollAllowAddOption;
            }
            if (m.sharableEventInviteId != null && $Object.hasOwnProperty.call(m, "sharableEventInviteId")) {
                d.sharableEventInviteId = m.sharableEventInviteId;
            }
            if (m.sharableEventInviteTitle != null && $Object.hasOwnProperty.call(m, "sharableEventInviteTitle")) {
                d.sharableEventInviteTitle = m.sharableEventInviteTitle;
            }
            if (m.sharableEventInviteStartTime != null && $Object.hasOwnProperty.call(m, "sharableEventInviteStartTime")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.sharableEventInviteStartTime = typeof m.sharableEventInviteStartTime === "number" ? $BigInt(m.sharableEventInviteStartTime) : $util.Long.fromBits(m.sharableEventInviteStartTime.low >>> 0, m.sharableEventInviteStartTime.high >>> 0, false).toBigInt();
                else if (typeof m.sharableEventInviteStartTime === "number")
                    d.sharableEventInviteStartTime = o.longs === $String ? $String(m.sharableEventInviteStartTime) : m.sharableEventInviteStartTime;
                else
                    d.sharableEventInviteStartTime = o.longs === String ? longToString(m.sharableEventInviteStartTime) : o.longs === Number ? longToNumber(m.sharableEventInviteStartTime) : m.sharableEventInviteStartTime;
            }
            if (m.sharableEventInviteEndTime != null && $Object.hasOwnProperty.call(m, "sharableEventInviteEndTime")) {
                if (typeof $BigInt !== "undefined" && o.longs === $BigInt)
                    d.sharableEventInviteEndTime = typeof m.sharableEventInviteEndTime === "number" ? $BigInt(m.sharableEventInviteEndTime) : $util.Long.fromBits(m.sharableEventInviteEndTime.low >>> 0, m.sharableEventInviteEndTime.high >>> 0, false).toBigInt();
                else if (typeof m.sharableEventInviteEndTime === "number")
                    d.sharableEventInviteEndTime = o.longs === $String ? $String(m.sharableEventInviteEndTime) : m.sharableEventInviteEndTime;
                else
                    d.sharableEventInviteEndTime = o.longs === String ? longToString(m.sharableEventInviteEndTime) : o.longs === Number ? longToNumber(m.sharableEventInviteEndTime) : m.sharableEventInviteEndTime;
            }
            if (m.sharableEventInviteCaption != null && $Object.hasOwnProperty.call(m, "sharableEventInviteCaption")) {
                d.sharableEventInviteCaption = m.sharableEventInviteCaption;
            }
            if (m.sharableEventInviteIsCanceled != null && $Object.hasOwnProperty.call(m, "sharableEventInviteIsCanceled")) {
                d.sharableEventInviteIsCanceled = m.sharableEventInviteIsCanceled;
            }
            if (m.sharableEventInviteJpegThumbnail != null && $Object.hasOwnProperty.call(m, "sharableEventInviteJpegThumbnail")) {
                d.sharableEventInviteJpegThumbnail = o.bytes === $String ? $util.base64.encode(m.sharableEventInviteJpegThumbnail, 0, m.sharableEventInviteJpegThumbnail.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.sharableEventInviteJpegThumbnail) : m.sharableEventInviteJpegThumbnail;
            }
            if (m.sharableEventInviteCallLink != null && $Object.hasOwnProperty.call(m, "sharableEventInviteCallLink")) {
                d.sharableEventInviteCallLink = m.sharableEventInviteCallLink;
            }
            return d;
        };

        MsgOpaqueData.prototype.toJSON = function() {
            return MsgOpaqueData.toObject(this, $protobuf.util.toJSONOptions);
        };

        MsgOpaqueData.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/MdStorageMsgRowOpaqueData.MsgOpaqueData";
        };

        MsgOpaqueData.EventLocation = (function() {

            const EventLocation = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            EventLocation.prototype.degreesLatitude = 0;
            EventLocation.prototype.degreesLongitude = 0;
            EventLocation.prototype.name = "";
            EventLocation.prototype.address = "";
            EventLocation.prototype.url = "";
            EventLocation.prototype.jpegThumbnail = $util.newBuffer([]);

            EventLocation.create = function(properties) {
                return new EventLocation(properties);
            };

            EventLocation.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.degreesLatitude != null && $Object.hasOwnProperty.call(m, "degreesLatitude"))
                    w.uint32(9).double(m.degreesLatitude);
                if (m.degreesLongitude != null && $Object.hasOwnProperty.call(m, "degreesLongitude"))
                    w.uint32(17).double(m.degreesLongitude);
                if (m.name != null && $Object.hasOwnProperty.call(m, "name"))
                    w.uint32(26).string(m.name);
                if (m.address != null && $Object.hasOwnProperty.call(m, "address"))
                    w.uint32(34).string(m.address);
                if (m.url != null && $Object.hasOwnProperty.call(m, "url"))
                    w.uint32(42).string(m.url);
                if (m.jpegThumbnail != null && $Object.hasOwnProperty.call(m, "jpegThumbnail"))
                    w.uint32(50).bytes(m.jpegThumbnail);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            EventLocation.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.EventLocation();
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
                            if (u !== 1)
                                break;
                            m.degreesLatitude = r.double();
                            continue;
                        }
                    case 2: {
                            if (u !== 1)
                                break;
                            m.degreesLongitude = r.double();
                            continue;
                        }
                    case 3: {
                            if (u !== 2)
                                break;
                            m.name = r.string();
                            continue;
                        }
                    case 4: {
                            if (u !== 2)
                                break;
                            m.address = r.string();
                            continue;
                        }
                    case 5: {
                            if (u !== 2)
                                break;
                            m.url = r.string();
                            continue;
                        }
                    case 6: {
                            if (u !== 2)
                                break;
                            m.jpegThumbnail = r.bytes();
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

            EventLocation.fromObject = function (d, q) {
                if (d instanceof $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.EventLocation)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".MdStorageMsgRowOpaqueData.MsgOpaqueData.EventLocation: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.EventLocation();
                if (d.degreesLatitude != null) {
                    m.degreesLatitude = $Number(d.degreesLatitude);
                }
                if (d.degreesLongitude != null) {
                    m.degreesLongitude = $Number(d.degreesLongitude);
                }
                if (d.name != null) {
                    m.name = $String(d.name);
                }
                if (d.address != null) {
                    m.address = $String(d.address);
                }
                if (d.url != null) {
                    m.url = $String(d.url);
                }
                if (d.jpegThumbnail != null) {
                    if (typeof d.jpegThumbnail === "string")
                        $util.base64.decode(d.jpegThumbnail, m.jpegThumbnail = $util.newBuffer($util.base64.length(d.jpegThumbnail)), 0);
                    else if (d.jpegThumbnail.length >= 0)
                        m.jpegThumbnail = d.jpegThumbnail;
                }
                return m;
            };

            EventLocation.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.degreesLatitude = 0;
                    d.degreesLongitude = 0;
                    d.name = "";
                    d.address = "";
                    d.url = "";
                    if (o.bytes === $String)
                        d.jpegThumbnail = "";
                    else {
                        d.jpegThumbnail = [];
                        if (o.bytes !== $Array)
                            d.jpegThumbnail = $util.newBuffer(d.jpegThumbnail);
                    }
                }
                if (m.degreesLatitude != null && $Object.hasOwnProperty.call(m, "degreesLatitude")) {
                    d.degreesLatitude = o.json && !$isFinite(m.degreesLatitude) ? $String(m.degreesLatitude) : m.degreesLatitude;
                }
                if (m.degreesLongitude != null && $Object.hasOwnProperty.call(m, "degreesLongitude")) {
                    d.degreesLongitude = o.json && !$isFinite(m.degreesLongitude) ? $String(m.degreesLongitude) : m.degreesLongitude;
                }
                if (m.name != null && $Object.hasOwnProperty.call(m, "name")) {
                    d.name = m.name;
                }
                if (m.address != null && $Object.hasOwnProperty.call(m, "address")) {
                    d.address = m.address;
                }
                if (m.url != null && $Object.hasOwnProperty.call(m, "url")) {
                    d.url = m.url;
                }
                if (m.jpegThumbnail != null && $Object.hasOwnProperty.call(m, "jpegThumbnail")) {
                    d.jpegThumbnail = o.bytes === $String ? $util.base64.encode(m.jpegThumbnail, 0, m.jpegThumbnail.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.jpegThumbnail) : m.jpegThumbnail;
                }
                return d;
            };

            EventLocation.prototype.toJSON = function() {
                return EventLocation.toObject(this, $protobuf.util.toJSONOptions);
            };

            EventLocation.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/MdStorageMsgRowOpaqueData.MsgOpaqueData.EventLocation";
            };

            return EventLocation;
        })();

        MsgOpaqueData.PollContentType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "TEXT"] = 1;
            values[valuesById[2] = "IMAGE"] = 2;
            return values;
        })();

        MsgOpaqueData.PollOption = (function() {

            const PollOption = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            PollOption.prototype.name = "";
            PollOption.prototype.hash = "";

            PollOption.create = function(properties) {
                return new PollOption(properties);
            };

            PollOption.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.name != null && $Object.hasOwnProperty.call(m, "name"))
                    w.uint32(10).string(m.name);
                if (m.hash != null && $Object.hasOwnProperty.call(m, "hash"))
                    w.uint32(18).string(m.hash);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            PollOption.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption();
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
                            m.name = r.string();
                            continue;
                        }
                    case 2: {
                            if (u !== 2)
                                break;
                            m.hash = r.string();
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

            PollOption.fromObject = function (d, q) {
                if (d instanceof $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".MdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption();
                if (d.name != null) {
                    m.name = $String(d.name);
                }
                if (d.hash != null) {
                    m.hash = $String(d.hash);
                }
                return m;
            };

            PollOption.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.name = "";
                    d.hash = "";
                }
                if (m.name != null && $Object.hasOwnProperty.call(m, "name")) {
                    d.name = m.name;
                }
                if (m.hash != null && $Object.hasOwnProperty.call(m, "hash")) {
                    d.hash = m.hash;
                }
                return d;
            };

            PollOption.prototype.toJSON = function() {
                return PollOption.toObject(this, $protobuf.util.toJSONOptions);
            };

            PollOption.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/MdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption";
            };

            return PollOption;
        })();

        MsgOpaqueData.PollType = (function() {
            const valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "POLL"] = 0;
            values[valuesById[1] = "QUIZ"] = 1;
            return values;
        })();

        MsgOpaqueData.PollVoteSnapshot = (function() {

            const PollVoteSnapshot = function (p) {
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            PollVoteSnapshot.prototype.option = null;
            PollVoteSnapshot.prototype.optionVoteCount = 0;

            PollVoteSnapshot.create = function(properties) {
                return new PollVoteSnapshot(properties);
            };

            PollVoteSnapshot.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.option != null && $Object.hasOwnProperty.call(m, "option"))
                    $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption.encode(m.option, w.uint32(10).fork(), q + 1).ldelim();
                if (m.optionVoteCount != null && $Object.hasOwnProperty.call(m, "optionVoteCount"))
                    w.uint32(16).int32(m.optionVoteCount);
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            PollVoteSnapshot.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot();
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
                            m.option = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption.decode(r, r.uint32(), $undefined, q + 1, m.option);
                            continue;
                        }
                    case 2: {
                            if (u !== 0)
                                break;
                            m.optionVoteCount = r.int32();
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

            PollVoteSnapshot.fromObject = function (d, q) {
                if (d instanceof $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot();
                if (d.option != null) {
                    if (!$util.isObject(d.option))
                        throw $TypeError(".MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot.option: object expected");
                    m.option = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption.fromObject(d.option, q + 1);
                }
                if (d.optionVoteCount != null) {
                    m.optionVoteCount = d.optionVoteCount | 0;
                }
                return m;
            };

            PollVoteSnapshot.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.defaults) {
                    d.option = null;
                    d.optionVoteCount = 0;
                }
                if (m.option != null && $Object.hasOwnProperty.call(m, "option")) {
                    d.option = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollOption.toObject(m.option, o, q + 1);
                }
                if (m.optionVoteCount != null && $Object.hasOwnProperty.call(m, "optionVoteCount")) {
                    d.optionVoteCount = m.optionVoteCount;
                }
                return d;
            };

            PollVoteSnapshot.prototype.toJSON = function() {
                return PollVoteSnapshot.toObject(this, $protobuf.util.toJSONOptions);
            };

            PollVoteSnapshot.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot";
            };

            return PollVoteSnapshot;
        })();

        MsgOpaqueData.PollVotesSnapshot = (function() {

            const PollVotesSnapshot = function (p) {
                this.pollVotes = [];
                if (p)
                    for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null && ks[i] !== "__proto__")
                            this[ks[i]] = p[ks[i]];
            };

            PollVotesSnapshot.prototype.pollVotes = $util.emptyArray;

            PollVotesSnapshot.create = function(properties) {
                return new PollVotesSnapshot(properties);
            };

            PollVotesSnapshot.encode = function (m, w, q) {
                if (!w)
                    w = $Writer.create();
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (m.pollVotes != null && m.pollVotes.length) {
                    for (var i = 0; i < m.pollVotes.length; ++i)
                        $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot.encode(m.pollVotes[i], w.uint32(10).fork(), q + 1).ldelim();
                }
                if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                    for (var i = 0; i < m.$unknowns.length; ++i)
                        w.raw(m.$unknowns[i]);
                return w;
            };

            PollVotesSnapshot.decode = function (r, l, z, q, g) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                if (q === $undefined)
                    q = 0;
                if (q > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot();
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
                            if (!(m.pollVotes && m.pollVotes.length))
                                m.pollVotes = [];
                            m.pollVotes.push($root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot.decode(r, r.uint32(), $undefined, q + 1));
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

            PollVotesSnapshot.fromObject = function (d, q) {
                if (d instanceof $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot)
                    return d;
                if (!$util.isObject(d))
                    throw $TypeError(".MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot: object expected");
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var m = new $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot();
                if (d.pollVotes) {
                    if (!$Array.isArray(d.pollVotes))
                        throw $TypeError(".MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot.pollVotes: array expected");
                    m.pollVotes = $Array(d.pollVotes.length);
                    for (var i = 0; i < d.pollVotes.length; ++i) {
                        if (!$util.isObject(d.pollVotes[i]))
                            throw $TypeError(".MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot.pollVotes: object expected");
                        m.pollVotes[i] = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot.fromObject(d.pollVotes[i], q + 1);
                    }
                }
                return m;
            };

            PollVotesSnapshot.toObject = function (m, o, q) {
                if (!o)
                    o = {};
                if (q === $undefined)
                    q = 0;
                if (q > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var d = {};
                if (o.arrays || o.defaults) {
                    d.pollVotes = [];
                }
                if (m.pollVotes && m.pollVotes.length) {
                    d.pollVotes = $Array(m.pollVotes.length);
                    for (var j = 0; j < m.pollVotes.length; ++j) {
                        d.pollVotes[j] = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVoteSnapshot.toObject(m.pollVotes[j], o, q + 1);
                    }
                }
                return d;
            };

            PollVotesSnapshot.prototype.toJSON = function() {
                return PollVotesSnapshot.toObject(this, $protobuf.util.toJSONOptions);
            };

            PollVotesSnapshot.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/MdStorageMsgRowOpaqueData.MsgOpaqueData.PollVotesSnapshot";
            };

            return PollVotesSnapshot;
        })();

        return MsgOpaqueData;
    })();

    MdStorageMsgRowOpaqueData.PollEncValue = (function() {

        const PollEncValue = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        PollEncValue.prototype.encPayload = $util.newBuffer([]);
        PollEncValue.prototype.encIv = $util.newBuffer([]);

        PollEncValue.create = function(properties) {
            return new PollEncValue(properties);
        };

        PollEncValue.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.encPayload != null && $Object.hasOwnProperty.call(m, "encPayload"))
                w.uint32(10).bytes(m.encPayload);
            if (m.encIv != null && $Object.hasOwnProperty.call(m, "encIv"))
                w.uint32(18).bytes(m.encIv);
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        PollEncValue.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.MdStorageMsgRowOpaqueData.PollEncValue();
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
                        m.encPayload = r.bytes();
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.encIv = r.bytes();
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

        PollEncValue.fromObject = function (d, q) {
            if (d instanceof $root.MdStorageMsgRowOpaqueData.PollEncValue)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".MdStorageMsgRowOpaqueData.PollEncValue: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.MdStorageMsgRowOpaqueData.PollEncValue();
            if (d.encPayload != null) {
                if (typeof d.encPayload === "string")
                    $util.base64.decode(d.encPayload, m.encPayload = $util.newBuffer($util.base64.length(d.encPayload)), 0);
                else if (d.encPayload.length >= 0)
                    m.encPayload = d.encPayload;
            }
            if (d.encIv != null) {
                if (typeof d.encIv === "string")
                    $util.base64.decode(d.encIv, m.encIv = $util.newBuffer($util.base64.length(d.encIv)), 0);
                else if (d.encIv.length >= 0)
                    m.encIv = d.encIv;
            }
            return m;
        };

        PollEncValue.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                if (o.bytes === $String)
                    d.encPayload = "";
                else {
                    d.encPayload = [];
                    if (o.bytes !== $Array)
                        d.encPayload = $util.newBuffer(d.encPayload);
                }
                if (o.bytes === $String)
                    d.encIv = "";
                else {
                    d.encIv = [];
                    if (o.bytes !== $Array)
                        d.encIv = $util.newBuffer(d.encIv);
                }
            }
            if (m.encPayload != null && $Object.hasOwnProperty.call(m, "encPayload")) {
                d.encPayload = o.bytes === $String ? $util.base64.encode(m.encPayload, 0, m.encPayload.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.encPayload) : m.encPayload;
            }
            if (m.encIv != null && $Object.hasOwnProperty.call(m, "encIv")) {
                d.encIv = o.bytes === $String ? $util.base64.encode(m.encIv, 0, m.encIv.length) : o.bytes === $Array ? $Array.prototype.slice.call(m.encIv) : m.encIv;
            }
            return d;
        };

        PollEncValue.prototype.toJSON = function() {
            return PollEncValue.toObject(this, $protobuf.util.toJSONOptions);
        };

        PollEncValue.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/MdStorageMsgRowOpaqueData.PollEncValue";
        };

        return PollEncValue;
    })();

    MdStorageMsgRowOpaqueData.MsgRowOpaqueData = (function() {

        const MsgRowOpaqueData = function (p) {
            if (p)
                for (var ks = $Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                        this[ks[i]] = p[ks[i]];
        };

        MsgRowOpaqueData.prototype.currentMsg = null;
        MsgRowOpaqueData.prototype.quotedMsg = null;

        MsgRowOpaqueData.create = function(properties) {
            return new MsgRowOpaqueData(properties);
        };

        MsgRowOpaqueData.encode = function (m, w, q) {
            if (!w)
                w = $Writer.create();
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (m.currentMsg != null && $Object.hasOwnProperty.call(m, "currentMsg"))
                $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.encode(m.currentMsg, w.uint32(10).fork(), q + 1).ldelim();
            if (m.quotedMsg != null && $Object.hasOwnProperty.call(m, "quotedMsg"))
                $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.encode(m.quotedMsg, w.uint32(18).fork(), q + 1).ldelim();
            if (m.$unknowns != null && $Object.hasOwnProperty.call(m, "$unknowns"))
                for (var i = 0; i < m.$unknowns.length; ++i)
                    w.raw(m.$unknowns[i]);
            return w;
        };

        MsgRowOpaqueData.decode = function (r, l, z, q, g) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            if (q === $undefined)
                q = 0;
            if (q > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var c = l === $undefined ? r.len : r.pos + l, m = g || new $root.MdStorageMsgRowOpaqueData.MsgRowOpaqueData();
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
                        m.currentMsg = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.decode(r, r.uint32(), $undefined, q + 1, m.currentMsg);
                        continue;
                    }
                case 2: {
                        if (u !== 2)
                            break;
                        m.quotedMsg = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.decode(r, r.uint32(), $undefined, q + 1, m.quotedMsg);
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

        MsgRowOpaqueData.fromObject = function (d, q) {
            if (d instanceof $root.MdStorageMsgRowOpaqueData.MsgRowOpaqueData)
                return d;
            if (!$util.isObject(d))
                throw $TypeError(".MdStorageMsgRowOpaqueData.MsgRowOpaqueData: object expected");
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var m = new $root.MdStorageMsgRowOpaqueData.MsgRowOpaqueData();
            if (d.currentMsg != null) {
                if (!$util.isObject(d.currentMsg))
                    throw $TypeError(".MdStorageMsgRowOpaqueData.MsgRowOpaqueData.currentMsg: object expected");
                m.currentMsg = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.fromObject(d.currentMsg, q + 1);
            }
            if (d.quotedMsg != null) {
                if (!$util.isObject(d.quotedMsg))
                    throw $TypeError(".MdStorageMsgRowOpaqueData.MsgRowOpaqueData.quotedMsg: object expected");
                m.quotedMsg = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.fromObject(d.quotedMsg, q + 1);
            }
            return m;
        };

        MsgRowOpaqueData.toObject = function (m, o, q) {
            if (!o)
                o = {};
            if (q === $undefined)
                q = 0;
            if (q > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var d = {};
            if (o.defaults) {
                d.currentMsg = null;
                d.quotedMsg = null;
            }
            if (m.currentMsg != null && $Object.hasOwnProperty.call(m, "currentMsg")) {
                d.currentMsg = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.toObject(m.currentMsg, o, q + 1);
            }
            if (m.quotedMsg != null && $Object.hasOwnProperty.call(m, "quotedMsg")) {
                d.quotedMsg = $root.MdStorageMsgRowOpaqueData.MsgOpaqueData.toObject(m.quotedMsg, o, q + 1);
            }
            return d;
        };

        MsgRowOpaqueData.prototype.toJSON = function() {
            return MsgRowOpaqueData.toObject(this, $protobuf.util.toJSONOptions);
        };

        MsgRowOpaqueData.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/MdStorageMsgRowOpaqueData.MsgRowOpaqueData";
        };

        return MsgRowOpaqueData;
    })();

    return MdStorageMsgRowOpaqueData;
})();

export {
  $root as default
};
