! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var a = t[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(a.exports, a, a.exports, n), a.loaded = !0, a.exports
    }
    return n.m = e, n.c = t, n.p = "", n(0)
}([function(e, t, n) {
    e.exports = n(50)
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function n(e) {
        var t = e === !0 ? !0 : !1,
            n = {};

        function a() {
            for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
            var i = o(t),
                a = i.kind,
                l = i.params;
            return "function" != typeof l[0] ? s(a, l) : void r(a, l[0])
        }
        a.off = function() {
            for (var e = arguments.length, t = Array(e), n = 0; e > n; n++) t[n] = arguments[n];
            var i = o(t),
                a = i.kind,
                r = i.params;
            l(a, r)
        }, a.fire = s;

        function o(e) {
            var n = void 0,
                i = void 0;
            return t ? (n = e[0], i = Array.prototype.slice.call(e, 1)) : (n = "_", i = e), {
                kind: n,
                params: i
            }
        }

        function r(e, t) {
            (n[e] || (n[e] = [])).push(t)
        }

        function s(e, t) {
            for (var i = n[e] || [], a = i.length, o = !1, r = 0; a > r; r++) i[r].apply(null, t) && (o = !0);
            return o
        }

        function l(e, t) {
            i(n[e], t)
        }
        return a
    }

    function i(e, t) {
        var n = e.indexOf(t);
        n >= 0 && e.splice(n, 1)
    }
    t["default"] = n
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(1),
        a = o(i);

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var r = window,
        s = r.addEvent,
        l = r.removeEvent,
        c = "https://cpg.money.mail.ru",
        u = {
            onIframeReady: a["default"]("{ is_api, check_transfer_url, on_success_url }"),
            onPostMessage: a["default"](),
            onAcceptCookieClick: a["default"]()
        };
    u.onIframeReady(function() {
        s(window, "message", d), window.cur.destroy.push(function() {
            l(window, "message", d)
        })
    });

    function d(e) {
        var t = e.origin,
            n = void 0;
        if (t === c || 0 === t.indexOf(c + "/")) {
            try {
                n = JSON.parse(e.data)
            } catch (i) {
                n = {}
            }
            u.onPostMessage(n.action, n.action_params)
        }
    }
    window.BasisMoneyTransfer = u, t["default"] = u
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(1),
        a = o(i);

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var r = {
        _onMouseDown: a["default"](),
        _onCancelClick: a["default"]()
    };
    window.MoneyTransferButton = r, t["default"] = r
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(1),
        a = o(i);

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var r = {
        _onAmountKeyDown: a["default"](),
        _onSubmit: a["default"]()
    };
    t["default"] = r
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.audioUnmaskSource = a;
    var n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN0PQRSTUVWXYZO123456789+/=",
        i = {
            v: function(e) {
                return e.split("").reverse().join("")
            },
            r: function(e, t) {
                e = e.split("");
                for (var i, a = n + n, o = e.length; o--;) i = a.indexOf(e[o]), ~i && (e[o] = a.substr(i - t, 1));
                return e.join("")
            },
            x: function(e, t) {
                var n = [];
                return t = t.charCodeAt(0), each(e.split(""), function(e, i) {
                    n.push(String.fromCharCode(i.charCodeAt(0) ^ t))
                }), n.join("")
            }
        };

    function a(e) {
        if (~e.indexOf("audio_api_unavailable")) {
            var t = e.split("?extra=")[1].split("#"),
                n = o(t[1]);
            if (t = o(t[0]), !n || !t) return e;
            n = n.split(String.fromCharCode(9));
            for (var a, r, s = n.length; s--;) {
                if (r = n[s].split(String.fromCharCode(11)), a = r.splice(0, 1, t)[0], !i[a]) return e;
                t = i[a].apply(null, r)
            }
            if (t && "http" === t.substr(0, 4)) return t
        }
        return e
    }

    function o(e) {
        if (!e || e.length % 4 == 1) return !1;
        for (var t, i, a = 0, o = 0, r = ""; i = e.charAt(o++);) i = n.indexOf(i), ~i && (t = a % 4 ? 64 * t + i : i, a++ % 4) && (r += String.fromCharCode(255 & t >> (-2 * a & 6)));
        return r
    }
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = t.PlayerFlash = function() {
        function e(t) {
            a(this, e), this.opts = t || {}, window._flashVoiceInstance = this
        }
        return e.prototype.fadeVolume = function(e, t) {
            return this.setVolume(e), t()
        }, e.prototype.destroy = function() {
            re(e.PLAYER_EL_ID)
        }, e.prototype.onReady = function(t) {
            if (this._player) return t(!0);
            if (this._player === !1) return t(!1);
            this._onReady = t;
            var n = {
                    url: "/swf/audio_lite.swf",
                    id: "flash_voice_player",
                    height: 2
                },
                i = {
                    swliveconnect: "true",
                    allowscriptaccess: "always",
                    wmode: "opaque"
                },
                a = {
                    onPlayFinish: "VoicePlayerFlash.onAudioFinishCallback",
                    onLoadProgress: "VoicePlayerFlash.onAudioLoadProgressCallback",
                    onPlayProgress: "VoicePlayerFlash.onAudioProgressCallback"
                };
            ge(e.PLAYER_EL_ID) || document.body.appendChild(ce("div", {
                id: e.PLAYER_EL_ID,
                className: "fixed"
            }));
            var o = this;
            renderFlash(e.PLAYER_EL_ID, n, i, a) && setTimeout(function() {
                o._checkFlashLoaded()
            }, 50)
        }, e.prototype.setUrl = function(e, t) {
            return this._trackOptions = {}, t && "object" === ("undefined" == typeof t ? "undefined" : n(t)) && (this._trackOptions = t, t = t.callback), this._url == e ? void(t && t(!0)) : (this._url = e, this._player && this._player.loadAudio(e), void(t && t(!0)))
        }, e.prototype.setVolume = function(e) {
            this._player && this._player.setVolume && this._player.setVolume(e)
        }, e.prototype.play = function() {
            this._player && this._player.playAudio()
        }, e.prototype.seek = function(e) {
            var t = (this._total || 0) * e;
            this._player && this._player.playAudio(t)
        }, e.prototype.pause = function() {
            this._player && this._player.pauseAudio()
        }, e.prototype.isFullyLoaded = function() {
            return !1
        }, e.prototype.getPlayedTime = function() {
            return 0
        }, e.prototype.getCurrentProgress = function() {
            return this._currProgress || 0
        }, e.prototype.getCurrentBuffered = function() {
            return this._currBuffered || 0
        }, e.prototype.stop = function() {
            this._player && this._player.stopAudio()
        }, e.prototype._checkFlashLoaded = function() {
            var e = ge("flash_voice_player");
            if (this._checks = this._checks || 0, this._checks++, this._checks > 10) {
                this._player = !1;
                var t = this._onReady;
                return t && t(!1)
            }
            if (e && e.paused) {
                this._player = e;
                var t = this._onReady;
                t && t(!0), this._onReady = null
            } else {
                var n = this;
                setTimeout(function() {
                    n._checkFlashLoaded()
                }, 100)
            }
        }, e.onAudioFinishCallback = function() {
            var e = window._flashVoiceInstance;
            e.opts.onEnd && e.opts.onEnd()
        }, e.onAudioProgressCallback = function(e, t) {
            var n = window._flashVoiceInstance;
            t && (n._total = t, n._currProgress = e / t, n.opts.onProgressUpdate && n.opts.onProgressUpdate(n._currProgress))
        }, e.onAudioLoadProgressCallback = function(e, t) {
            var n = window._flashVoiceInstance;
            n._currBuffered = e / t, n.opts.onBufferUpdate && n.opts.onBufferUpdate(n._currBuffered)
        }, i(e, [{
            key: "type",
            get: function() {
                return "flash"
            }
        }, {
            key: "loaded",
            get: function() {
                return !!this._player
            }
        }]), e
    }();
    window.VoicePlayerFlash = o, o.PLAYER_EL_ID = "flash_voice"
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        },
        i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var o = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=",
        r = t.PlayerHTML5 = function() {
            e.isSupported = function(e) {
                var t = document.createElement("audio");
                if (t.canPlayType) {
                    e = e || 'audio/mpeg; codecs="mp3"';
                    var n = t.canPlayType(e),
                        i = n.replace(/no/, "");
                    return !!i
                }
                return !1
            };

            function e(t) {
                a(this, e), this.opts = t || {}, this._trackOptions = {}, this._audioNodes = [], this._currentAudioEl = this._createAudioNode(), this._prefetchAudioEl = this._createAudioNode()
            }
            return e.prototype.destroy = function() {}, e.prototype.getPlayedTime = function() {
                for (var e = this._currentAudioEl.played, t = 0, n = 0; n < e.length; n++) t += e.end(n) - e.start(n);
                return t
            }, e.prototype._setAudioNodeUrl = function(e, t) {
                window.data && data(e, "setUrlTimesetUrlTime", t == o ? 0 : vkNow()), e.src = t
            }, e.prototype._createAudioNode = function(e) {
                var t = new Audio,
                    n = this;
                return this.opts.onBufferUpdate && addEvent(t, "progress", function() {
                    n._currentAudioEl == t && n.opts.onBufferUpdate(n.getCurrentBuffered()); {
                        var e = t.buffered;
                        e.length
                    }
                    1 == e.length && 0 == e.start(0) && e.end(0) == t.duration && (t._fullyLoaded = !0)
                }), addEvent(t, "stalled", function() {
                    n._currentAudioEl == t && n._isInvalidDuration() && n._currentAudioEl.currentTime >= n.duration - 1 && n._currentAudioEl.dispatchEvent(new Event("ended"))
                }), this.opts.onProgressUpdate && addEvent(t, "timeupdate", function() {
                    n._currentAudioEl == t && n.opts.onProgressUpdate(n.getCurrentProgress())
                }), this.opts.onEnd && addEvent(t, "ended", function() {
                    n._currentAudioEl == t && n.opts.onEnd()
                }), this.opts.onSeeked && addEvent(t, "seeked", function() {
                    n._currentAudioEl == t && n.opts.onSeeked()
                }), this.opts.onSeek && addEvent(t, "seeking", function() {
                    n._currentAudioEl == t && n.opts.onSeek()
                }), addEvent(t, "error", function() {
                    n._prefetchAudioEl == t ? n._prefetchAudioEl = n._createAudioNode() : n._currentAudioEl == t && n.opts.onFail && n.opts.onFail()
                }), addEvent(t, "canplay", function() {
                    if (window.data) {
                        var e = data(t, "setUrlTime");
                        e && (cur.audioLoadTimings = cur.audioLoadTimings || [], cur.audioLoadTimings.push(vkNow() - e), data(t, "setUrlTime", 0))
                    }
                    n._prefetchAudioEl == t, n._currentAudioEl == t && (n.opts.onCanPlay && n.opts.onCanPlay(), n._seekOnReady && (n.seek(n._seekOnReady), n._seekOnReady = !1))
                }), e && (this._setAudioNodeUrl(t, e), t.preload = "auto", t.volume = this._volume || 1, t.load()), this._audioNodes.push(t), t
            }, e.prototype.onReady = function(e) {
                e(!0)
            }, e.prototype.prefetch = function(e) {
                this._prefetchAudioEl && this._setAudioNodeUrl(this._prefetchAudioEl, o), this._prefetchAudioEl = this._createAudioNode(e)
            }, e.prototype.seek = function(e) {
                var t = this._currentAudioEl;
                this.duration ? t.currentTime = this.duration * e : this._seekOnReady = e
            }, e.prototype.setVolume = function(e) {
                void 0 === e && (e = this._currentAudioEl.volume), this._currentAudioEl.volume = e, this._prefetchAudioEl && (this._prefetchAudioEl.volume = e), this._volume = e
            }, e.prototype._isInvalidDuration = function() {
                var e = this._currentAudioEl;
                return isNaN(e.duration) || 1 / 0 == e.duration || 0 == e.duration
            }, e.prototype.getCurrentProgress = function() {
                var e = this._currentAudioEl;
                return this.duration ? Math.max(0, Math.min(1, e.currentTime / this.duration)) : 0
            }, e.prototype.getCurrentBuffered = function() {
                var e = this._currentAudioEl;
                return e && e.buffered.length ? Math.min(1, e.buffered.end(0) / e.duration) : 0
            }, e.prototype.isFullyLoaded = function() {
                return this._currentAudioEl._fullyLoaded
            }, e.prototype.setUrl = function(t, i) {
                var a = this._currentAudioEl;
                if (this._seekOnReady = !1, this._trackOptions = {}, i && "object" === ("undefined" == typeof i ? "undefined" : n(i)) && (this._trackOptions = i, i = i.callback), a.src == t) return this.opts.onCanPlay && this.opts.onCanPlay(), i && i(!0);
                if (this._prefetchAudioEl && this._prefetchAudioEl.readyState > e.STATE_HAVE_NOTHING)
                    if (this._prefetchAudioEl.src == t) {
                        this._currentAudioEl.pause(0), this._setAudioNodeUrl(this._currentAudioEl, o);
                        var r = this;
                        this._prefetchAudioEl.readyState >= e.STATE_HAVE_FUTURE_DATA && setTimeout(function() {
                            r.opts.onCanPlay && r.opts.onCanPlay()
                        }), a = this._currentAudioEl = this._prefetchAudioEl, this._prefetchAudioEl = !1
                    } else this._prefetchAudioEl.src && this._setAudioNodeUrl(this._prefetchAudioEl, o);
                return a.src != t && (this._setAudioNodeUrl(a, t), a.load()), i && i(!0)
            }, e.prototype.play = function(t) {
                this._prefetchAudioEl.src == t && this._prefetchAudioEl.readyState > e.STATE_HAVE_NOTHING && (this._setAudioNodeUrl(this._currentAudioEl, o), this._currentAudioEl = this._prefetchAudioEl, this._prefetchAudioEl = this._createAudioNode(), this.opts.onCanPlay && this.opts.onCanPlay());
                var n = this._currentAudioEl;
                if (n.src) try {
                    n.play()
                } catch (i) {
                    debugLog("Audio: url set failed (html5 impl)")
                }
            }, e.prototype.pause = function() {
                var e = this._currentAudioEl;
                e.src && e.pause()
            }, e.prototype.stop = function() {
                var e = this._currentAudioEl;
                this._setAudioNodeUrl(e, o)
            }, e.prototype._setFadeVolumeInterval = function(e) {
                if (e) {
                    if (!this._fadeVolumeWorker && window.Worker && window.Blob) {
                        var t = new Blob(["           var interval;           onmessage = function(e) {             clearInterval(interval);             if (e.data == 'start') {               interval = setInterval(function() { postMessage({}); }, 20);             }           }         "]);
                        try {
                            this._fadeVolumeWorker = new Worker(window.URL.createObjectURL(t))
                        } catch (n) {
                            this._fadeVolumeWorker = !1
                        }
                    }
                    this._fadeVolumeWorker ? (this._fadeVolumeWorker.onmessage = e, this._fadeVolumeWorker.postMessage("start")) : this._fadeVolumeInterval = setInterval(e, 60)
                } else this._fadeVolumeWorker && (this._fadeVolumeWorker.terminate(), this._fadeVolumeWorker = null), this._fadeVolumeInterval && clearInterval(this._fadeVolumeInterval)
            }, e.prototype.fadeVolume = function(e, t) {
                e = Math.max(0, Math.min(1, e));
                var n = this._currentAudioEl,
                    i = 0;
                if (i = e < n.volume ? -.04 : .001, Math.abs(e - n.volume) <= .001) return this._setFadeVolumeInterval(), t && t();
                var a = n.volume;
                this._setFadeVolumeInterval(function() {
                    i > 0 && (i *= 1.2), a += i;
                    var n = !1;
                    return (n = 0 > i ? e >= a : a >= e) ? (this.setVolume(e), this._setFadeVolumeInterval(), t && t()) : void this.setVolume(a)
                }.bind(this))
            }, i(e, [{
                key: "type",
                get: function() {
                    return "html5"
                }
            }, {
                key: "loaded",
                get: function() {
                    return !0
                }
            }, {
                key: "duration",
                get: function() {
                    var e = this._currentAudioEl,
                        t = isNaN(e.duration) || 1 / 0 == e.duration ? 0 : e.duration;
                    return !t && this._trackOptions.duration && (t = parseInt(this._trackOptions.duration)), t
                }
            }]), e
        }();
    r.STATE_HAVE_NOTHING = 0, r.STATE_HAVE_FUTURE_DATA = 3, r.HAVE_ENOUGH_DATA = 4, r.AUDIO_EL_ID = "ap_audio"
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.VoiceMessagePlayer = void 0;
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        a = n(7),
        o = n(6),
        r = n(13);

    function s(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    } {
        var l, c = !1,
            u = '<div class="audio-msg-player audio-msg-track"><button class="audio-msg-track--btn"></button><div class="audio-msg-track--duration"></div><div class="audio-msg-track--wave-wrapper"><div class="audio-msg-track--slider"></div></div></div>';
        t.VoiceMessagePlayer = function() {
            function e() {
                var t = this;
                s(this, e), this._reattach = !1, this._audioEl = null, this._playing = !1, this._timer = null, this._duration = 0, this._detaching = !1;
                var n = {
                    onEnd: function() {
                        t.detach()
                    },
                    onFail: function() {
                        n.onEnd()
                    },
                    onCanPlay: function() {},
                    onProgressUpdate: function(e) {
                        t._updateProgress(e)
                    }
                };
                l = !1, a.PlayerHTML5.isSupported() ? (a.PlayerHTML5.isSupported('audio/ogg;codecs="opus"') && !a.PlayerHTML5.isSupported('audio/ogg;codecs="codec_check"') && (l = !0), this._impl = new a.PlayerHTML5(n)) : browser.flash && window.renderFlash && (this._impl = new o.PlayerFlash(n)), this.onPlayPause = function(e) {
                    return cancelEvent(e), t.toggle()
                }, this.onDurationClick = function(e) {
                    t.durationType = !t.durationType, cancelEvent(e)
                }, this._initEvents()
            }
            return e.prototype._updateProgress = function(e) {
                this._durationEl && (this._durationEl.innerHTML = this.durationType ? "-" + formatTime(Math.round(this._duration * (1 - e))) : formatTime(Math.round(this._duration * e))), this._progressSlider && this._progressSlider.setValue(e)
            }, e.prototype._initInterface = function() {
                var e = this;
                this._el = ce("div", {
                    innerHTML: u
                }).firstChild, window.getLang && attr(this._el, "aria-label", getLang("mail_audio_message")), this._playBtn = geByClass1("audio-msg-track--btn", this._el), window.getLang && attr(this._playBtn, "aria-label", getLang("global_audio_play")), this._durationEl = geByClass1("audio-msg-track--duration", this._el), this._durationEl.innerHTML = formatTime(this._duration), this._progressSlider = new r.Slider(geByClass1("audio-msg-track--slider", this._el), {
                    value: 0,
                    size: 0,
                    hintClass: "audio_player_hint",
                    formatHint: function(t) {
                        return formatTime(Math.round(t * e._duration))
                    },
                    onEndDragging: function(t) {
                        e._impl.seek(t)
                    }
                });
                var t = geByClass1("audio-msg-track--wave-wrapper", this._audioEl).children[0];
                geByClass1("slider_slide", this._el).appendChild(t.cloneNode(!0)), geByClass1("slider_amount", this._el).appendChild(t.cloneNode(!0)), addEvent(this._playBtn, "click", this.onPlayPause), addEvent(this._durationEl, "click", this.onDurationClick), this._audioEl.parentNode.appendChild(this._el)
            }, e.prototype._destroyInterface = function() {
                hide(this._el), this._audioEl.parentNode.removeChild(this._el), removeEvent(this._playBtn, "click", this.onPlayPause), this._progressSlider && (this._progressSlider.destroy(), this._progressSlider = null), this._playBtn = null, this._durationEl = null, this._el = null
            }, e.prototype.attachTo = function(e) {
                var t = this;
                if (this._audioEl != e) {
                    null != this._audioEl && (this._reattach = !0), this.detach(), this._audioEl = e, addClass(this._audioEl, "audio-msg-track_player-attached"), this._duration = attr(e, "data-duration"), this._initInterface();
                    var n = this._audioEl.id.split("_");
                    if (n && n.length > 1 && (this._owner_id = n[1]), this._reattach = !1, !this._impl.loaded) return new Promise(function(n) {
                        t._impl.onReady(function() {
                            t._impl.setUrl(attr(e, l ? "data-ogg" : "data-mp3"), {
                                duration: t._duration,
                                callback: n
                            })
                        })
                    });
                    this._impl.setUrl(attr(e, l ? "data-ogg" : "data-mp3"), {
                        duration: this._duration
                    })
                }
                return !0
            }, e.prototype.detach = function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
                if (this._audioEl && this._el && !this._detaching) {
                    if (e && this.isAttached()) return;
                    this._detaching = !0, this.stop(), this._destroyInterface(), removeClass(this._audioEl, "audio-msg-track_player-attached"), this._audioEl = null
                }
                this._detaching = !1
            }, e.prototype.play = function() {
                this._audioEl && (this._reattach || e.pauseGlobalMedia(), addClass(this._el, "audio-msg-track_playing"), window.getLang && attr(this._playBtn, "aria-label", getLang("global_audio_pause")), this._playing = !0, this._createTimer(), this._owner_id && statlogsValueEvent("audio_message_play", this._owner_id), this._impl.play())
            }, e.prototype.pause = function() {
                this._audioEl && (!this._reattach && this._playing && e.resumeGlobalMedia(), window.getLang && attr(this._playBtn, "aria-label", getLang("global_audio_play")), removeClass(this._el, "audio-msg-track_playing"), this._playing = !1, this._impl.pause(), this._killTimer())
            }, e.prototype.stop = function() {
                this.pause(), this._impl.stop()
            }, e.prototype.toggle = function() {
                this._playing ? this.pause() : this.play()
            }, e.prototype._createTimer = function() {
                var e = this;
                this._duration > 0 && (this._killTimer(), this._timer = setInterval(function() {
                    var t = e._impl.getCurrentProgress();
                    e._updateProgress(t)
                }, 100))
            }, e.prototype._killTimer = function() {
                this._timer && (clearInterval(this._timer), this._timer = null)
            }, e.prototype._initEvents = function() {
                var e = this;
                window.ap ? ap.on(this, AudioPlayer.EVENT_PLAY, function() {
                    delete ap.pausedByMsg, e.pause()
                }) : window.audio && audio.onPlay(function() {
                    delete audio.pausedByMsg, e.pause()
                }), window.Notifier && (Notifier.addRecvClbk("audio_start", "audio_msg", function() {
                    e.pause()
                }), Notifier.addRecvClbk("video_start", "audio_msg", function() {
                    e.pause()
                }))
            }, e.prototype.isAttached = function() {
                if (this._audioEl) {
                    for (var e = this._audioEl; e.parentNode;) e = e.parentNode;
                    return !!e.body
                }
                return !1
            }, e.pauseGlobalMedia = function() {
                window.Notifier && (c = !0, Notifier.lcSend("video_start")), window.ap && ap.isPlaying() ? (ap.pause(), ap.pausedByMsg = !0) : window.audio && audio.playing && audio.playing() && (audio.pause(), audio.pausedByMsg = !0)
            }, e.resumeGlobalMedia = function() {
                window.Notifier && c && (c = !1, Notifier.lcSend("video_hide")), window.ap && ap.pausedByMsg ? (ap.play(), delete ap.pausedByMsg) : window.audio && audio.playing && audio.pausedByMsg && (audio.play(), delete audio.pausedByMsg)
            }, i(e, [{
                key: "type",
                get: function() {
                    return this._impl.type
                }
            }, {
                key: "durationType",
                get: function() {
                    return window.AudioPlayer ? !!ls.get(AudioPlayer.LS_PREFIX + AudioPlayer.LS_DURATION_TYPE) : "1" == lsGet("audio_time_left")
                },
                set: function(e) {
                    window.AudioPlayer ? ls.set(AudioPlayer.LS_PREFIX + AudioPlayer.LS_DURATION_TYPE, !!e) : lsSet("audio_time_left", e ? "1" : "0")
                }
            }]), e
        }()
    }
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.AverageAlgorithm = function() {
        function e() {
            n(this, e), this.clear()
        }
        return e.prototype.push = function(e) {
            this._count++, this._accum += e
        }, e.prototype.get = function() {
            return this._accum / this._count
        }, e.prototype.clear = function() {
            this._count = 0, this._accum = 0
        }, e
    }()
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.PeakAlgorithm = function() {
        function e() {
            n(this, e), this.clear()
        }
        return e.prototype.push = function(e) {
            this._max = Math.max(this._max, Math.abs(e))
        }, e.prototype.get = function() {
            return this._max
        }, e.prototype.clear = function() {
            this._max = 0
        }, e
    }()
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.QuadAlgorithm = function() {
        function e() {
            n(this, e), this.clear()
        }
        return e.prototype.push = function(e) {
            this._count++, this._accum += e, this._accum_q += e * e
        }, e.prototype.get = function() {
            return 1 == this._count ? this._accum : Math.sqrt((this._accum_q - this._accum * this._accum / this._count) / this._count)
        }, e.prototype.clear = function() {
            this._count = 0, this._accum = 0, this._accum_q = 0
        }, e
    }()
}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Resampler = void 0, t.fastResample = c;
    var i = n(9),
        a = n(10),
        o = n(11);

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var s = {
            avg: i.AverageAlgorithm,
            peak: a.PeakAlgorithm,
            quad: o.QuadAlgorithm
        },
        l = t.Resampler = function() {
            function e(t) {
                r(this, e), this._normalizeAlgorithm = !1, s[t.normalizeAlgorithm] && (this._normalizeAlgorithm = new s[t.normalizeAlgorithm]), this._srcSampleRate = parseInt(t.srcSampleRate || 0), this._dstSampleRate = parseInt(t.dstSampleRate || 0), this._truncateTo = 1, "undefined" != typeof t.truncateTo && (this._truncateTo = t.truncateTo), this._sampleRate = this._dstSampleRate > 0 ? this._srcSampleRate / this._dstSampleRate : 0, s[t.algorithm] || (t.algorithm = "peak"), this._algorithm = new s[t.algorithm], this._sampleCount = 0, this._data = []
            }
            return e.prototype.push = function(e) {
                if (this._sampleRate <= 0) return [];
                for (var t, n = [], i = 0; i < e.length; i++)
                    if (this._truncateTo > 0 && (e[i] = Math.min(this._truncateTo, Math.abs(e[i]))), this._sampleCount += 1, this._sampleCount >= this._sampleRate)
                        for (; this._sampleCount >= this._sampleRate;) this._sampleCount -= this._sampleRate, this._sampleCount <= .8 && this._algorithm.push(e[i]), t = this._algorithm.get(), n.push(t), this._normalizeAlgorithm && this._normalizeAlgorithm.push(t), this._algorithm.clear(), this._sampleCount > .2 && this._algorithm.push(e[i]);
                    else this._algorithm.push(e[i]);
                if (this._normalizeAlgorithm) {
                    var a = this._normalizeAlgorithm.get();
                    if (this._normalizeAlgorithm.clear(), a > 0)
                        for (var o = 0; o < n.length; o++) n[o] = n[o] / a, this._truncateTo > 0 && (n[o] = Math.min(this._truncateTo, Math.abs(n[o])))
                }
                return n
            }, e
        }();

    function c(e, t) {
        var n = arguments.length <= 2 || void 0 === arguments[2] ? "peak" : arguments[2];
        return new l({
            srcSampleRate: e.length,
            dstSampleRate: t,
            normalizeAlgorithm: n,
            truncateTo: 0
        }).push(e)
    }
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var a = 35;

    function o(e, t) {
        return Math.log(t) / Math.log(e)
    }
    "undefined" == typeof window.isTouch && (window.isTouch = !1);
    t.Slider = function() {
        function e(t, n) {
            if (i(this, e), !t) throw new Error("No element was provided for Slider");
            t = ge(t), this.options = n || {
                size: 1
            }, "undefined" == typeof this.options.logfbase && (this.options.logfbase = a), this.options.backValue = this.options.backValue || 0;
            var o = 100 * this.options.backValue,
                r = this.options.withBackLine ? '<div class="slider_back" style="width:' + o + '%"></div>' : "",
                s = '<div class="slider_slide"><div class="slider_loading_bar" style="opacity: 0; display: none;"></div> ' + r + ' <div class="slider_amount"></div> <div class="slider_handler"></div> </div>';
            this._el = ce("div", {
                innerHTML: s,
                className: "slider",
                id: t.getAttribute("id") || ""
            });
            var l = this;
            if (t.classList)
                for (var c = t.classList, u = 0, d = c.length; d > u; u++) addClass(this._el, c[u]);
            else this._el.className = t.className;
            each(this._el.attributes, function(e, t) {
                ("id" != t.name || "class" != t.name) && l._el.setAttribute(t.name, t.value)
            }), t.parentNode.replaceChild(this._el, t), this._amountEl = geByClass1("slider_amount", this._el), this._handlerEl = geByClass1("slider_handler", this._el), this._slideEl = geByClass1("slider_slide", this._el), this._backEl = geByClass1("slider_back", this._el), this._progressEl = geByClass1("slider_loading_bar", this._el), this.options.color && (setStyle(this._amountEl, {
                backgroundColor: this.options.color
            }), setStyle(this._handlerEl, {
                backgroundColor: this.options.color
            })), this.options.backColor && setStyle(this._slideEl, {
                backgroundColor: this.options.backColor
            }), addClass(this._el, "slider_size_" + this.options.size), this.options.debounce && (this._onValueChangeDebounced = debounce(this._onValueChange, this.options.debounce)), !isTouch && n.formatHint && (addEvent(this._el, "mousemove", this._ev_onMouseOver = this._onMouseOver.bind(this)), addEvent(this._el, "mouseleave", this._ev_onMouseLeave = this._onMouseLeave.bind(this))), addEvent(this._el, isTouch ? "touchstart" : "mousedown", this._ev_onMouseDown = this._onMouseDown.bind(this)), addEvent(this._el, "click", cancelEvent), this.setValue(this.options.value || 0, !this.options.fireChangeEventOnInit, !1), this.setBackValue(this.options.backValue)
        }
        return e.prototype.toggleLoading = function(e) {
            e = !!e, toggle(this._progressEl, e), setStyle(this._progressEl, "opacity", e ? 1 : 0)
        }, e.prototype.destroy = function() {
            !isTouch && this.options.formatHint && (removeEvent(this._el, "mousemove", this._ev_onMouseOver), removeEvent(this._el, "mouseleave", this._ev_onMouseLeave), removeEvent(this._el, "mousedown", this._ev_onMouseDown));
            var e = window.re || window.remove;
            e(this._el), e(this._currHintEl)
        }, e.prototype._updateHint = function(e, t) {
            this._currHintEl || (this._currHintEl = ce("div", {
                className: "slider_hint",
                id: "slider_hint"
            }), this.options.hintClass && addClass(this._currHintEl, this.options.hintClass), this._el.appendChild(this._currHintEl));
            var n = this._getPos(),
                i = Math.round((e.pageX || e.touches[0].pageX) - n[0]),
                a = this._width;
            if (i = t ? Math.min(Math.max(0, i), a) : i, i >= 0 && a >= i) {
                var o = i / a;
                this._currHintEl.innerHTML = this.options.formatHint ? this.options.formatHint.call(this, o) : o;
                var r = this._currHintEl.getBoundingClientRect();
                setStyle(this._currHintEl, {
                    left: this._slideEl.offsetLeft + i - (r.right - r.left) / 2,
                    top: this._slideEl.offsetTop - (r.bottom - r.top) - 10
                }), !t && this._toggleHint(!0)
            } else !t && this._toggleHint(!1);
            this.options.formatHint || this._toggleHint(!1)
        }, e.prototype._toggleHint = function(e) {
            toggleClass(this._currHintEl, "visible", e)
        }, e.prototype._onMouseOver = function(t) {
            e._currenSliderDrag || hasClass(this._el, "active") || this._updateHint(t)
        }, e.prototype._onMouseLeave = function() {
            hasClass(this._el, "active") || this._toggleHint(!1)
        }, e.prototype._onMouseDown = function(t) {
            (0 == t.button || t.touches) && (delete cur._sliderMouseUpNowEl, addEvent(window, isTouch ? "touchmove" : "mousemove", this._ev_onMouseMove = this._onMouseMove.bind(this)), addEvent(window, isTouch ? "touchend touchcancel" : "mouseup", this._ev_onMouseUp = this._onMouseUp.bind(this)), this._onMouseMove(t), e._currenSliderDrag = this, addClass(this._el, "active"), cancelEvent(t))
        }, e.prototype._onMouseUp = function(t) {
            cur._sliderMouseUpNowEl = this._el, removeEvent(window, isTouch ? "touchmove" : "mousemove", this._ev_onMouseMove), removeEvent(window, isTouch ? "touchend touchcancel" : "mouseup", this._ev_onMouseUp), this._onValueChange(), removeClass(this._el, "active"), e._currenSliderDrag = !1, this._toggleHint(!1), this.options.onEndDragging && this.options.onEndDragging(this._currValue), cancelEvent(t)
        }, e.prototype._onMouseMove = function(e) {
            var t = this._getPos(),
                n = t[0];
            n = "undefined" != typeof e.touches && e.touches.length > 0 ? e.touches[0].pageX : e.pageX, n = Math.max(n, t[0]), n = Math.min(n, t[0] + this._width), n -= t[0], this.setValue(n / this._width, !0, !0), this._onValueChangeDebounced ? this._onValueChangeDebounced() : this._onValueChange(), this._toggleHint(!0), this._updateHint(e, !0), cancelEvent(e)
        }, e.prototype._getPos = function() {
            return this._slidePos = getXY(this._slideEl)
        }, e.prototype._logf = function(e) {
            if (!this.options.log) return e;
            var t = this.options.logfbase;
            return (Math.pow(t, e) - 1) / (t - 1)
        }, e.prototype._unlogf = function(e) {
            if (!this.options.log) return e;
            var t = this.options.logfbase;
            return o(t, 1 + e * (t - 1))
        }, e.prototype.setValue = function(e, t, n) {
            if (!hasClass(this._el, "active") || n) {
                var i = n ? this._logf(e) : e;
                if (this._currValue != i) {
                    this._currValue = i;
                    var a = n ? e : this._unlogf(e);
                    a = 100 * a + "%", setStyle(this._amountEl, {
                        width: a
                    }), setStyle(this._handlerEl, {
                        left: a
                    }), !t && this._onValueChange()
                }
            }
        }, e.prototype.setBackValue = function(e) {
            toggleClass(this._backEl, "slider_back_transition", e > this._backValue), this._backValue = e;
            var t = 100 * e + "%";
            setStyle(this._backEl, {
                width: t
            })
        }, e.prototype._onValueChange = function() {
            this._lastValue = this._lastValue || 0, this._lastValue != this._currValue && (this._lastValue = this._currValue, this.options.onChange && this.options.onChange(this._currValue))
        }, n(e, [{
            key: "_width",
            get: function() {
                if (!this._widthCache) {
                    var e = this._el.getBoundingClientRect();
                    this._widthCache = e.right - e.left
                }
                return this._widthCache
            }
        }]), e
    }()
}, function(e, t, n) {
    var i = n(8),
        a = n(12),
        o = null;

    function r(e) {
        for (var t = geByClass("audio-msg-track--wave-wrapper", e), n = 0, i = 0; i < t.length; i++) {
            try {
                n = parseInt(window.getComputedStyle(t[i], null).getPropertyValue("width"))
            } catch (a) {
                n = parseInt(t[i].currentStyle.width)
            }
            if (n > 0) break
        }
        return n
    }

    function s(e, t) {
        t = Math.round(t), e.length != t && (e = a.fastResample(e, t));
        for (var n = "", i = 0, o = 0; o < e.length; o++) i = Math.floor(10 * e[o] * .95), 0 == i && (i = .5), n += "M" + (3 * o + 1) + "," + (10 - i) + "v" + 2 * i + "Z";
        return '<svg class="audio-msg-track--wave" width="' + 3 * e.length + 'px"><path d="' + n + '"></path></svg>'
    }

    function l() {
        for (var e = geByClass("audio-msg-track"), t = 0; t < e.length; t++) {
            var n = attr(e[t], "data-wave");
            hasClass(e[t], "audio-msg-player") && t > 0 && (n = attr(e[t - 1], "data-wave"));
            var i = r(e[t]);
            if (n && i) {
                n = n.split(",");
                for (var a = geByClass("audio-msg-track--wave", e[t]), o = s(n, i / 3), l = 0; l < a.length; l++) {
                    var c = ce("div", {
                        innerHTML: o
                    }).firstChild;
                    a[l].parentNode.replaceChild(c, a[l])
                }
            }
        }
    }
    addEvent(window, "orientationchange", function() {
        return setTimeout(l, 500)
    }), window.mail && window.mail.onMessagesRepainted && (onDOMReady(l), mail.onMessagesRepainted(l));

    function c() {
        return o || (o = new i.VoiceMessagePlayer), o
    }
    window.AudioMessagePlayer = {
        loaded: !0,
        togglePlay: function(e) {
            var t = c(),
                n = t.attachTo(e);
            n === !0 ? t.play() : n.then(function() {
                t.play()
            })
        },
        detachPlayer: function(e) {
            var t = c();
            t.detach(e)
        },
        pauseGlobalMedia: function() {
            i.VoiceMessagePlayer.pauseGlobalMedia()
        },
        resumeGlobalMedia: function() {
            i.VoiceMessagePlayer.resumeGlobalMedia()
        },
        redrawWaves: l,
        getWave: s
    };
    try {
        stManager.done("voice_message_player.js")
    } catch (u) {}
}, function() {
    var e = window,
        t = e.hide,
        n = e.lockButton,
        i = e.gpeByClass,
        a = window,
        o = a.ajax;
    window.FeedNotifications = {
        hide: function(e, a, r, s) {
            return "decline" == s ? t(i("_block", e)) : n(e), o.post("/index.php", {
                _ajax: 1,
                act: "hide_internal_notification",
                reason: s,
                id: a,
                hash: r
            }), !1
        }
    }
}, function() {
    var e = window,
        t = e.hide;
    window.Informer = {
        close: function(e) {
            t(e)
        }
    }
}, function() {
    var e = window,
        t = e.parseRusKeys,
        n = e.parseLatKeys,
        i = e.parseLat,
        a = e.parseCyr,
        o = e.escapeRE,
        r = e.val,
        s = e.onBodyScrollForce,
        l = e.extend,
        c = e.len,
        u = e.removeClass,
        d = e.geByClass1,
        p = e.addClass,
        f = e.show,
        h = e.hide,
        _ = e.alLoadingFix,
        v = e.cancelEvent,
        m = e.elfocus,
        g = e.elblur,
        w = e.ge,
        y = e.addEvent,
        b = e.attr,
        k = e.initAutoScroll,
        C = window,
        S = C.ajax;

    function T(e) {
        var C, T, E, x, A, M, P, D, N, z, B = [],
            H = {},
            j = {},
            R = {},
            L = {},
            I = !1,
            q = null,
            F = null,
            O = null,
            U = 0,
            X = [],
            Y = null,
            V = null,
            W = null,
            G = !1,
            Q = !1,
            $ = 10,
            K = 30,
            J = !0,
            Z = !1,
            et = !1,
            tt = !1,
            nt = 0,
            it = 0,
            at = !1;

        function ot(e) {
            e = e.replace(/https?:\/\/(m\.)?vk\.com\/([^#]+#\/)?/, "");
            for (var r, s, l, c = Q, u = [e, s = t(e, c) || e, l = n(e, c) || e, i(s), a(l)], d = {}, p = [], f = 0, h = u.length; h > f; f++) u[f] && !d[u[f]] && (d[u[f]] = !0, r = o(u[f]), r = r.replace(/[её]/gi, "[её]").replace(/(e|yo)/gi, "(?:e|yo)"), p.push(new RegExp("(^|\\s|\\(|>)(" + r + ")", "gi")));
            return p
        }

        function rt(e, t, n) {
            if (clearTimeout(F), !n) return F = setTimeout(function() {
                rt(e, t, !0)
            }, 10), !1;
            var i = r(e) || "";
            if (q == i) return !1;
            var a, o = "_" + i,
                l = j[o],
                c = ot(i);
            if (!l && i.length > 2 && j["_" + i.slice(0, -2)]) {
                var u = "_" + i.slice(0, -2);
                j[u] && L[u] && !j[u].length && (!tt || tt && !R[u]) && (L[o] = !0, l = j[o] = [], tt && (R[o] = ""))
            }
            if (!l) {
                l = [];
                var d = 0;
                if (!i && B.length)
                    for (var p = U, f = U + Math.min($, B.length); f > p; p++) l.push([B[p]]), d++;
                else {
                    for (var h = {}, _ = 0, p = 0, f = B.length; f > p; p++) {
                        var v = B[p];
                        if (H[v]) {
                            if (h[v] = !0, (a = lt(c, H[v][0])) && (l.push([v, a]), ++_ >= K)) break;
                            d++
                        }
                    }
                    if (K > _)
                        for (var v in H)
                            if (!h[v] && (a = lt(c, H[v][0]))) {
                                if (l.push([v, a]), ++_ >= K) break;
                                d++
                            }
                }
                L[o] = L[o] || !i && B.length || l.length > 2 * $, L[o] = L[o] || tt && l.length > $
            }
            return L[o] || !J && !tt || st(e, i), j[o] = l, q = i, ct(l, R[o]), D && D(i), et && !q && (nt = $), s(), !1
        }

        function st(e, t, n) {
            return clearTimeout(O), n ? (S.post(C, {
                _ajax: 1,
                q: t
            }, {
                onDone: function(n, i, a) {
                    P && P.apply(null, arguments);
                    for (var o, r = "_" + t, d = j[r] || [], p = {}, f = ot(t), h = 0, _ = d.length; _ > h; h++) p[d[h][0]] = !0;
                    for (var h = 0, _ = i.length; _ > h; h++) {
                        var v = i[h];
                        p[v] || ((o = lt(f, n[v][0])) || G || !t) && d.push([v, o])
                    }
                    L[r] = !0, j[r] = d, tt && (R[r] = a || ""), H = l(n, H), J = !Z || c(H) < Z, q == t ? (ct(d, R[r]), s()) : delete j[r], u("input_loading", e)
                },
                onFail: function() {
                    delete j["_" + t], u("input_loading", e)
                }
            }), void(d("al_loading", E) || p("input_loading", e))) : (O = setTimeout(function() {
                st(e, t, !0)
            }, 200), !1)
        }

        function lt(e, t) {
            if (!t) return !1;
            for (var n = 0, i = e.length; i > n; n++)
                if (-1 !== t.search(e[n])) return e[n];
            return !1
        }

        function ct(e, t) {
            var n = "";
            if (V && E) {
                for (var i = 0, a = e.length; a > i; i++) {
                    var o = e[i][0],
                        s = e[i][1];
                    if (H[o]) {
                        var l = H[o].slice(1);
                        if (s)
                            for (var c in X) {
                                var d = X[c];
                                l[d] && (l[d] = l[d].replace(s, '$1<em class="found">$2</em>'))
                            }
                        n += V.apply({
                            id: o,
                            q: q,
                            highlight: function(e) {
                                return ("" + e).replace(s, '$1<em class="found">$2</em>')
                            },
                            template: function(e, t) {
                                var n = ("" + e).replace(/%(\d+)%|#(\d+)#/g, function(e, n, i) {
                                    return +i ? ("" + t[i - 1]).replace(s, '$1<em class="found">$2</em>') : +n ? t[n - 1] || "" : ""
                                });
                                return n
                            }
                        }, l)
                    }
                }
                n || L["_" + q] || !J && !tt || (u("input_loading", x), n = q ? '<div class="al_loading qs_loading">&nbsp;</div>' : '<div id="al_loading"></div>'), !n && W && (n = W(q)), r(E, Y ? Y(n, q, et, t) : n + (t || "")), M && (q ? f(M) : h(M)), !q && _(), N && N()
            }
        }
        l(this, {
            go: function(e) {
                return x ? (rt(x, e, !0), x.blur(), v(e), !1) : !0
            },
            redraw: function() {
                var e = "_" + q;
                ct(j[e], R[e]), s()
            },
            clear: function(e, t) {
                return r(x, ""), t ? m(x) : g(x), rt(x, e, !0), v(e), !1
            },
            blur: function() {
                g(x)
            },
            init: function(e) {
                e = e || {}, E = w(e.container) || null, x = w(e.field) || null, A = w(e.btn) || null, M = w(e.clear_btn) || null, q = null, I && C == e.action && e.init_once || (j = {}, R = {}, L = {}, C = e.action || "", T = e.al_action || C, B = e.top_items || [], H = e._cache || {}, X = e.hl_fields || [], Y = e.tpl || null, V = e.item_tpl || null, W = e.null_tpl || null, G = e.soft_filter || !1, Q = e.need_invalid_keys || !1, $ = e.top_len || 10, Z = e.load_limit || !1, P = e.onLoaded || !1, D = e.onFiltered || !1, N = e.onRendered || !1, z = e.onFocusChanged || !1, et = e.al_need || !1, U = !et && e.init_offset || 0, tt = e.global_search || !1);
                var t = null;
                C && E && x && V && (J = C !== !0 && (!Z || c(H) < Z), y(x, "focus", function(e) {
                    var n = function i(n) {
                        !n && rt(x, e, !0), t = setTimeout(i, 100)
                    };
                    clearTimeout(t), z && z.call({
                        q: q
                    }, !0), n(!0)
                }), y(x, "keydown keypress change blur", function(e) {
                    "blur" == e.type && (clearTimeout(t), z && z.call({
                        q: q
                    }, !1)), rt(x, e, "keydown" != e.type && "keypress" != e.type)
                }), e._new || A && !b(A, "onclick") && b(A, "onclick", "return qsearch.go(event);"), !et || I && e.init_once || (nt = $, it = c(H), k(function() {
                    var e = d("_si_container", E) || E,
                        t = e.childNodes;
                    return t[nt] || t[t.length - 1]
                }, function() {
                    if (!at && !q)
                        if (nt + $ > it && J) at = !0, S.post(T, {
                            _ajax: 1,
                            offset: it
                        }, {
                            onDone: function(e, t) {
                                P && P.apply(null, arguments);
                                var n = c(e);
                                if (at = !1, Z || (B = B.slice(0, it).concat(t)), it += n, H = l(e, H), J = C !== !0 && (!Z && n || c(H) < Z), !q) {
                                    nt += $;
                                    for (var i = [], a = 0, o = Math.min(nt, B.length); o > a; a++) i.push([B[a]]);
                                    ct(i, R._), s()
                                }
                            },
                            onFail: function() {
                                at = !1
                            }
                        });
                        else if (nt < B.length) {
                        nt += $;
                        for (var e = [], t = 0, n = Math.min(nt, B.length); n > t; t++) e.push([B[t]]);
                        ct(e, R._), s()
                    }
                })), !e.skip_init_filter && rt(x, null, !0), I = !0)
            }
        }), e && this.init(e)
    }
    var E = new T;
    window.QuickSearch = T, window.qsearch = E
}, function() {
    var e = window,
        t = e.isUndefined,
        n = e.getX,
        i = e.getY,
        a = e.vkNow,
        o = e.clog,
        r = e.cancelEvent,
        s = e.getW,
        l = e.setStyle,
        c = e.getH,
        u = e.scrollTop,
        d = e.getCh,
        p = e.preventEvent,
        f = e.extend,
        h = e.hasClass,
        _ = e.gpeByClass,
        v = e.attr,
        m = e.toggleClass,
        g = e.geByClass1,
        w = e.removeClass,
        y = e.addClass,
        b = e.geByClass,
        k = e.addEvent,
        C = e.onBodyResize,
        S = e.removeEvent,
        T = window,
        E = T.browser,
        x = window,
        A = x.thover;

    function M(e, T) {
        var x, M, P, D, N, z = !t(document.ontouchmove),
            B = !0,
            H = !1,
            j = !1,
            R = !1,
            L = !1,
            I = 0,
            q = 0,
            F = !1,
            O = 0,
            U = !1,
            X = !1,
            Y = !1,
            V = !1,
            W = !1;

        function G(e) {
            var t = e.touches,
                a = n(M),
                o = i(M),
                r = (t && t[0] ? t[0].pageX : e.pageX) || 0,
                s = (t && t[0] ? t[0].pageY : e.pageY) || 0;
            return {
                x: r - a,
                y: s - o
            }
        }

        function Q(e) {
            F || (F = []), F.push([a(), e]), F = F.slice(-20)
        }

        function $() {
            F = !1
        }

        function K() {
            if (!F || F.length < 2) return [0, 0, 0];
            for (var e = a(), t = !1, n = F.pop(), i = F.length - 1; i >= 0; i--) {
                var o = e - F[i][0];
                if (o > 150) break;
                t = F[i]
            }
            if (!t || !n) return [0, 0, 0];
            var r = n[1].x - t[1].x,
                s = n[1].y - t[1].y,
                l = Math.sqrt(r * r + s * s),
                o = n[0] - t[0];
            return o ? [l / o, r / o, s / o] : [0, 0, 0]
        }

        function J() {
            if (!F) return !1;
            var e = K(),
                t = e[0],
                n = e[1];
            if ($(), !t) return !1;
            var i = 4.7,
                a = t / i,
                r = n * a - i * a * a / 2;
            return a *= 530, r *= 140, o("dx", r, "t", a), .1 > t || !r ? !1 : {
                dx: r,
                t: a
            }
        }

        function Z(e) {
            "touchstart" == e.type ? B = !e.touches || 1 == e.touches.length : "touchmove" == e.type ? B = !1 : "click" == e.type && (B || (r(e), B = !0))
        }

        function et(e) {
            if (!(V && e.touches && e.touches.length > 1)) {
                if ($(), j) {
                    if (1 >= q) return
                } else {
                    var t = s(M) - s(P);
                    if (t >= 0) return
                }
                R = G(e), L = R, Q(L), Y = !0, l.animate(P)
            }
        }

        function tt(e) {
            if (R && (V || Y)) {
                A && A.cancel(e);
                var t = G(e);
                if (L = t, Q(L), Y) {
                    var n = R.x - t.x,
                        a = R.y - t.y;
                    if (Math.abs(n) >= Math.abs(a) && (r(e), V = !0), Y = !1, V) {
                        var o = i(M),
                            p = c(M),
                            f = u(),
                            h = d();
                        f > o - 7 ? u(o - 7) : o + p + 7 > f + h && u(o + p + 7 - h)
                    }
                }
                if (V)
                    if (r(e), j) {
                        var _ = s(M),
                            n = R.x - t.x;
                        (0 >= I && 0 > n || I >= q - 1 && n > 0) && (n /= 3);
                        var v = -I - n / _,
                            m = H ? 100 * v + "%" : v * _;
                        l.transform(P, {
                            translate: [m, 0]
                        })
                    } else {
                        var g = s(M) - s(P),
                            w = 0,
                            n = R.x - t.x,
                            v = O - n;
                        if (g > 0 && (g = 0), g > v) var m = g - (g - v) / 3;
                        else if (v > w) var m = w + (v - w) / 3;
                        else var m = O - n;
                        rt(m), l.transform(P, {
                            translate: [m, 0]
                        })
                    }
            }
        }

        function nt(e) {
            if (R && V) {
                if (r(e), j) {
                    var t = 4.7 * K()[1],
                        n = R.x - L.x,
                        i = s(M),
                        a = Math.abs(n) >= i / 2;
                    (I > 0 && (a && 0 > n || t > 1) || q - 1 > I && (a && n > 0 || -1 > t)) && (I += n > 0 ? 1 : -1);
                    var o = -I,
                        c = H ? 100 * o + "%" : o * i;
                    R = !1, $(), st(), l.animate(P, "transform", {
                        duration: 200,
                        func: "ease"
                    }), l.transform(P, {
                        translate: [c, 0]
                    })
                } else {
                    var u = J(),
                        d = s(M) - s(P),
                        p = 0,
                        n = R.x - L.x,
                        o = O - n;
                    u && (o += u.dx), d > 0 && (d = 0), O = d > o ? d : o > p ? p : o;
                    var f = {
                        duration: 200,
                        func: "ease"
                    };
                    u && (f = {
                        duration: u.t,
                        func: "cubic-bezier(0, 1, 1, 1)"
                    }), rt(O), l.animate(P, "transform", f), l.transform(P, {
                        translate: [O, 0]
                    })
                }
                V = W = !1
            }
        }

        function it(e) {
            if (p(e), j) {
                if (1 >= q) return
            } else {
                var t = s(M) - s(P);
                if (t >= 0) return
            }
            var n = (e.detail ? e.detail : e.wheelDelta) > 0 ? 3 : -3;
            if (U === !1 && (U = 0), U += n, !j) {
                var t = s(M) - s(P),
                    i = 0,
                    a = O - U;
                if (t > 0 && (t = 0), t > a) var o = t - (t - a) / 3;
                else if (a > i) var o = i + (a - i) / 3;
                else var o = O - U;
                rt(o), l.transform(P, {
                    translate: [o, 0]
                })
            }
            clearTimeout(X), X = setTimeout(function() {
                if (j) {
                    (I > 0 && 0 > U || q - 1 > I && U > 0) && (I += U > 0 ? 1 : -1);
                    var e = -I,
                        t = s(M),
                        n = H ? 100 * e + "%" : e * t;
                    st(), l.animate(P, "transform", {
                        duration: 200,
                        func: "ease"
                    }), l.transform(P, {
                        translate: [n, 0]
                    })
                } else {
                    var i = s(M) - s(P),
                        a = 0,
                        e = O - U;
                    i > 0 && (i = 0), i > e ? O = i : e > a ? O = a : O -= U, rt(n), l.animate(P, "transform", {
                        duration: 200,
                        func: "ease"
                    }), l.transform(P, {
                        translate: [O, 0]
                    })
                }
                U = !1
            }, 200)
        }

        function at(e) {
            if (!j) {
                var t = n(e) - n(M),
                    i = t + O,
                    a = i + s(e),
                    r = 0,
                    c = s(M),
                    u = !1;
                r > i ? u = r - t + 20 : a > c && (u = c - s(e) - t - 20);
                var d = s(M) - s(P),
                    p = 0;
                if (d > 0 && (d = 0), d > u) var u = d;
                else if (u > p) var u = p;
                o(t, O, i, a, r, c, u), u !== !1 && (O = u, rt(O), l.animate(P, "transform", {
                    duration: 200,
                    func: "ease"
                }), l.transform(P, {
                    translate: [O, 0]
                }))
            }
        }

        function ot(e) {
            if (j) {
                var t = I;
                if (e && e.target) {
                    var n = h("sp_ppt", e.target) ? e.target : _("sp_ppt", e.target),
                        i = +v(n, "data-i");
                    I = 0 > i ? 0 : i > q - 1 ? q - 1 : i
                }
                R = !1, $(), V = W = !1;
                var a = s(M),
                    o = -I,
                    r = H ? 100 * o + "%" : o * a;
                st(), t != I && l.animate(P, "transform", {
                    duration: 200,
                    func: "ease"
                }), l.transform(P, {
                    translate: [r, 0]
                })
            }
        }

        function rt(e) {
            if (!j) {
                e = e || O;
                var t = s(M) - s(P),
                    n = 0;
                m("sw_left", M, n > e), m("sw_right", M, e > t)
            }
        }

        function st() {
            if (j) {
                var e = g("sp_ppt_sel", x);
                e && e === N[I] || (w("sp_ppt_sel", e), y("sp_ppt_sel", N[I]))
            }
        }

        function lt() {
            M = g("scroller_wrap", x), P = g("scroller_cont", M), j ? (D = g("sp_pages_pts", x), N = b("sp_ppt", D), q = (b("scroller_page", P) || []).length, I = 0, st()) : (O = 0, rt(O)), F = !1, l.transform(P, {
                translate: [0, 0]
            })
        }

        function ct() {
            lt(), z ? (k(M, "touchstart touchmove click", Z), k(M, "touchstart", et), k(M, "touchmove", tt), k(M, "touchend touchcancel", nt)) : (k(M, "mousewheel", it), k(D, "click", ot)), H || C(ot)
        }

        function ut() {
            z ? (S(M, "touchstart touchmove click", Z), S(M, "touchstart", et), S(M, "touchmove", tt), S(M, "touchend touchcancel", nt)) : (S(M, "mousewheel", it), S(D, "click", ot)), H || C("__clear", ot)
        }
        f(this, {
            init: ct,
            destroy: ut,
            onShow: function() {
                j ? st() : rt(O)
            },
            canClick: function() {
                return B
            }
        }), x = e, T = T || {}, T.byPage ? (j = !0, H = !E.android) : (j = !1, H = !1, this.showElem = at)
    }
    window.Scroller = M
}, function() {
    var e = window,
        t = e.onDOMReady,
        n = e.onBodyResize,
        i = e.geByClass1,
        a = e.removeClass,
        o = e.addClass,
        r = e.gpeByClass,
        s = e.hasClass,
        l = e.toggleClass,
        c = window,
        u = c.clearCookie,
        d = c.setCookie;
    ! function() {
        t(e), n(e);

        function e() {
            if (i("tabs_block_hideable")) {
                var e = i("tabs_block");
                i("tabs_list").offsetHeight > i("tabs_list_more").offsetHeight ? a("tabs_block_without_show_more", e) : o("tabs_block_without_show_more", e)
            }
        }

        function c(e) {
            var t = r("tabs_block", e);
            s("tabs_block_opened", t) ? u("remixm_tabs_expanded") : d("remixm_tabs_expanded", 1), l("tabs_block_opened", t)
        }
        window.Tabs = {
            actualizeShowMoreVisibility: e,
            toggle: c
        }
    }()
}, function() {
    var e = window,
        t = e.se,
        n = e.each,
        i = e.remove,
        a = e.ajx2q,
        o = e.isArray,
        r = e.geByTag,
        s = e.checkElementNav,
        l = e.isHttpHref,
        c = e.attr,
        u = e.getHref,
        d = e.extend,
        p = e.ge,
        f = e.geByClass1,
        h = e.obj2qs,
        _ = e.unlockButton,
        v = e.scrollToHash,
        m = e.lockButton,
        g = (e.tag, e.addEvent, e.val),
        w = e.alLoadingFix,
        y = e.scrollTop,
        b = e.removeClass,
        k = e.addClass,
        C = e.clone,
        S = e.gpeByClass,
        T = e.outer,
        E = e.gpeByTag,
        x = e.geByTag1,
        A = e.getCh,
        M = e.hasClass,
        P = e.stripTags,
        D = e.langNumeric,
        N = e.clog,
        z = e.before,
        B = e.ce,
        H = e.append,
        j = e.escapeAttr,
        R = e.geByClass,
        L = e.htsc,
        I = e.getY,
        q = e.getCw,
        F = e.qs2obj,
        O = e.parseJSON,
        U = e.setNotify,
        X = e.setDocumentDomain,
        Y = e.createIframe,
        V = e.getW,
        W = e.escapeStr,
        G = window,
        Q = G.browser,
        $ = {
            onRedirect: t(),
            _tStart: !1,
            _tAlStart: !1,
            _init: function() {
                try {
                    new XMLHttpRequest && ($._req = function() {
                        return new XMLHttpRequest
                    })
                } catch (e) {
                    var t = window,
                        n = t.ActiveXObject;
                    try {
                        new n("Msxml2.XMLHTTP") && ($._req = function() {
                            return new n("Msxml2.XMLHTTP")
                        })
                    } catch (e) {
                        try {
                            new n("Microsoft.XMLHTTP") && ($._req = function() {
                                return new n("Microsoft.XMLHTTP")
                            })
                        } catch (e) {
                            $._req = !1
                        }
                    }
                }
            },
            _getreq: function() {
                return $._req || $._init(), $._req()
            },
            _al_reqs: [],
            _last_req: null,
            save_req: function(e) {
                $._al_reqs.push(e || $._last_req)
            },
            abort_reqs: function() {
                n($._al_reqs, function(e, t) {
                    t.readyState < 4 && t.abort()
                }), $._al_reqs = []
            },
            _failed_relogin: !1,
            _failed_reqs: [],
            save_failed_req: function(e, t, n, i) {
                $._failed_reqs.push([e, t, n, i])
            },
            repeat_reqs: function() {
                n($._failed_reqs, function() {
                    var e = this.shift(),
                        t = this;
                    $._post.apply(null, t), i(e)
                }), $._failed_reqs = []
            },
            plainpost: function(e, t, n, i, o) {
                var r = $._last_req = $._getreq(),
                    s = "string" != typeof t ? a(t) : t;
                r.onreadystatechange = function() {
                    4 == r.readyState && (r.status >= 200 && r.status < 300 ? n && n(r.responseText, r) : i && i(r.responseText, r))
                };
                try {
                    r.open("POST", e, !0)
                } catch (l) {
                    return !1
                }
                return r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.send(s), r
            },
            post: function(e, t, n) {
                return "/" != e.substr(0, 1) && (e = "/" + e), e = e.split("#")[0], $._post(e, t, n || {})
            },
            onPrepared: t(),
            prepare_click: function(e) {
                var t = window,
                    n = t.al;
                if (Q.ios && !(Q.ios >= 7) && window.al && n.ver) {
                    var i = [],
                        a = !1;
                    e && "a" == (e.tagName || "").toLowerCase() ? i.push(e) : o(e) ? i = e : (i = r("a", e), a = !0);
                    for (var d = 0, p = i.length; p > d; d++) {
                        var f = i[d],
                            h = f && f.target || "";
                        if (f && f.getAttribute && (!a || !f.getAttribute("data-href") && s(f, {
                                skip_onclick: !0
                            }) && "_blank" != h)) {
                            var _ = f.getAttribute("href");
                            if (null == _ || !l(_)) continue;
                            c(f, "data-href", u(f)), c(f, "href", !1)
                        }
                    }
                }
            },
            click: function(e, t, i) {
                var a = window,
                    o = a.nav;
                t = t || {};
                var r, s = !1,
                    l = {
                        _ajax: 1
                    },
                    c = d(t, {
                        link: e
                    });
                if (i = i || {}, t.onStart) {
                    var u = $.tAlGetParam();
                    $.tAlStart = (new Date).getTime(), u && (l._talstat = u)
                }
                if (i.use_cache) {
                    var g = p(i.use_cache === !0 ? "preload_data" : i.use_cache),
                        w = g.innerHTML.replace(/(^<!--|-->$)/g, ""),
                        y = w.split("--><!--");
                    if (w) {
                        g.innerHTML = "", t.onStart && t.onStart.apply(c), i.nav && o.go(s, null, {
                            push_only: !0
                        }), t.onDone && t.onDone.apply(c, y);
                        var e = f("show_more", f("pcont", "mcont"));
                        e && $.click(e, {
                            onDone: function() {
                                var e = "";
                                n(arguments, function(t, n) {
                                    e += "<!--" + (n || "") + "-->"
                                }), g.innerHTML = e, p("show_more_loading") && $.click(!1, t, i)
                            }
                        })
                    } else t.onStart && t.onStart.apply(c), i.nav && o.go(s, null, {
                        push_only: !0
                    });
                    return !1
                }
                if (!e) return !0;
                if (e.form) {
                    if (e.disabled) return !0;
                    var b = e.form,
                        k = {};
                    s = (b.action || "").replace(/^https?:\/\/[^\/]+/i, ""), n(b, function(t, n) {
                        return !n.name || n.disabled ? !0 : ("radio" !== n.type || n.checked) && ("checkbox" !== n.type || n.checked) ? "button" === n.type ? !0 : "submit" === n.type && n !== e ? !0 : "image" === n.type && n !== e ? !0 : void(k[n.name] = n.value) : !0
                    }), "image" == e.type && (k[e.name] = e.value, k[e.name + ".x"] = 1, k[e.name + ".y"] = 1), b.method && "get" != b.method ? d(l, k) : s = s.split("?", 1).shift() + h(k)
                } else e.getAttribute && (s = e.getAttribute("data-href") || e.getAttribute("href"));
                if (s || (s = e.pathname ? e.pathname + e.search + e.hash : e), !s) return !0;
                d(l, i.url_params || {});
                var C = window,
                    S = C.pStats,
                    T = S.getSeenData();
                if (T) {
                    var E = window,
                        x = E.cur;
                    l._pstat = T.data, x && x.module && (l._pstatref = x.module)
                }
                return r = $.post(s, l, {
                    onDone: function() {
                        T && S.onSend(T.seen), i.lock && _(e), t.onDone && t.onDone.apply(c, arguments), (i.nav || i.scroll) && v()
                    },
                    onFail: function() {
                        i.lock && _(e), t.onFail && t.onFail.apply(c, arguments), (i.nav || i.scroll) && v()
                    }
                }), r && (t.onStart && t.onStart.apply(c), i.nav && o.go(s, null, {
                    push_only: !0
                }), i.lock && m(e)), !r
            },
            prepare_nav: function(e) {
                return
            },
            nav: function K(e, t) {
                var a = window,
                    K = a.nav,
                    o = window,
                    r = o.page,
                    s = window,
                    l = s.menu,
                    _ = window,
                    m = _.cur;
                t = t || {}, t.nav = t.nav || {};
                var O, U, X = u(e),
                    Y = r.getHash(t.nav);
                if (!(X = K.checkUrl(X))) return !1;
                "/" != X.substr(0, 1) && (X = "/" + X), l.close(null, !0);
                var V = $.tGetParam();
                if ($.tStart = (new Date).getTime(), t.need_restore && l && l.closeSearch(), t.need_restore && t.nav.push && (U = r.restore(Y))) return $.abort_reqs(), U.lm && d(U.lm, {
                    tn: !1,
                    bn: !1
                }), r.set(Y, U), t.zProcess && (t.zProcess(U.st), delete t.zProcess), K.set(t), $.tModule = window.cur.module, $.tRestoreRender = (new Date).getTime(), !0;
                var W = !1,
                    G = !1;
                if (t.fast) W = !0, r.set(Y, !1, {
                    before: !0,
                    beforeAppend: t.beforeAppend,
                    afterAppend: t.afterAppend
                }), G = t.onAfterFast || !1;
                else if (t.target && t.target.className) {
                    var O = /(?:^|\s)(al_([a-z_]+)(-?[0-9]+)?)(?:\s|$)/i.exec(t.target.className),
                        J = O && O[1] || !1,
                        Z = O && O[2] || !1;
                    switch (Z) {
                        case "menu":
                            W = !0, r.set(Y, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    g(f("mcont", e), '<div class="pcont bl_cont"><div id="al_loading"></div></div>'), r.setMhead(e, c(t.target, "data-header"), "/")
                                },
                                afterAppend: function() {
                                    w(), y(0)
                                }
                            });
                            break;
                        case "tab":
                            W = !0, r.set(Y, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    g(f("upanel", e), '<div id="al_loading"></div>');
                                    var n = f("tabs_block", e) || f("tabs", e),
                                        i = f("active", n);
                                    i && (M("tab_item_top", i) ? (b("tab_item_cur", f("tab_item_cur", n)), k("tab_item_cur", f("tab_item", n))) : (b("tab_item_cur", f("tab_item_cur", n)), k("tab_item_cur", i))), r.setMhead(e, c(t.target, "data-header"))
                                },
                                afterAppend: function() {
                                    w()
                                }
                            }, t);
                            break;
                        case "post":
                            W = !0, r.set(Y, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    function n(e, t, n, i, a, o, r, s) {
                                        return '<div class="pcont bl_cont"><div class="owner_panel">' + (t || "") + '<div class="op_cont">' + (n || "") + '<div class="op_info"><span class="item_date">' + (i || "") + '</span></div></div></div><div id="' + (e || "") + '" class="post_item single_post_item"><div class="pi_cont"><div class="pi_head">' + (a || "") + '</div><div class="pi_body">' + (o || "") + "</div></div>" + (s || "") + "</div>" + (r || "") + "</div>"
                                    }
                                    var a = window,
                                        o = a.lang,
                                        s = C(S("post_item", t.target)),
                                        l = s.id,
                                        u = T(E("a", f("pi_img", s))).replace("pi_img", "op_img"),
                                        d = E("div", f("pi_author", s)),
                                        p = i(f("pi_date", s)),
                                        h = T(i(f("explain", d))),
                                        _ = i(f("pi_fronly", s)),
                                        v = T(d),
                                        m = f("pi_body", s),
                                        w = f("pi_text_more", m),
                                        p = f("pi_date", s),
                                        y = f("pi_info", m),
                                        b = f("pi_links", m),
                                        k = f("replies_link", b),
                                        x = g(i(f("pi_actions_wrap", s))),
                                        A = g(i(f("item_replies", y))),
                                        M = A ? g(k) : o.mobile_wall_post_replies_title,
                                        P = k ? '<a name="comments"></a><h4 class="slim_header">' + (M || "") + '</h4><div id="al_loading"></div>' : "";
                                    if (w) {
                                        var D = w.nextSibling ? w : w.parentNode;
                                        D.nextSibling.style.display = "inline", D.style.display = "none"
                                    }
                                    g(b, T(f("like_wrap", m))), p && c(p, "data-date") && g(p, c(p, "data-date")), r.setMhead(e, c(t.target, "data-header"), !0), g(f("mcont", e), n(l, u, v, g(p) + (_ ? '<b class="pi_fronly"></b>' : ""), h, g(m), P, x))
                                },
                                afterAppend: function(e) {
                                    var n = x("h4", e);
                                    n && w(t.nav.hash ? A() - n.offsetHeight : 0), t.nav.hash ? v(t.nav.hash) : y(0)
                                }
                            }, t);
                            break;
                        case "wall":
                            W = !0, r.set(Y, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    function n(e, t, n) {
                                        return '<div class="pcont"><div class="wall_item single_wall_item" id="' + (e || "") + '">' + (t || "") + "</div>" + (n || "") + "</div>"
                                    }
                                    var a = window,
                                        o = a.lang,
                                        s = C(M("wall_item", t.target) ? t.target : S("wall_item", t.target)),
                                        l = s.id,
                                        u = f("wi_body", s),
                                        d = f("wi_buttons", s),
                                        p = f("item_like", d),
                                        h = M("item_sel", p),
                                        _ = f("v_like", p),
                                        v = f("item_share", d),
                                        m = M("item_sel", v),
                                        w = f("v_share", v),
                                        y = i(f("item_replies", d)),
                                        b = y ? f("v_replies", y) : !1,
                                        k = +P(g(_)).replace(/\D/g, ""),
                                        T = +P(g(w)).replace(/\D/g, ""),
                                        E = +P(g(b)).replace(/\D/g, ""),
                                        x = f("pi_text_more", u),
                                        A = f("wi_date", s),
                                        j = E ? D(E, o.mobile_wall_post_comments) : o.mobile_wall_post_replies_title,
                                        R = y && 50 > E ? '<a name="comments"></a><h4 class="slim_header">' + (j || "") + '</h4><div id="al_loading"></div>' : "";
                                    N(y), i(f("wi_actions_btn", s));
                                    var L = "",
                                        I = h ? 1 == k ? o.mobile_wall_only_you_liked : o.mobile_wall_you_and_x_people_liked : o.mobile_wall_x_people_liked;
                                    L += '<a class="item_like _i" href="/like?act=members&object=' + l + '"' + (k ? "" : ' style="display:none"') + '><i class="i_like"></i><span class="v_like">' + (k ? D(h ? k - 1 : k, I, !0) : "") + "</span></a>";
                                    var q = m ? 1 == T ? o.mobile_wall_only_you_shared : o.mobile_wall_you_and_x_people_shared : o.mobile_wall_x_people_shared;
                                    if (L += '<a class="item_share _i" href="/like?act=members&object=' + l + '&tab=published"' + (T ? "" : ' style="display:none"') + '><i class="i_share"></i><span class="v_share">' + (T ? D(m ? T - 1 : T, q, !0) : "") + "</span></a>", z(B("div", {
                                            className: "wi_like_wrap",
                                            innerHTML: L
                                        }), d), _ ? g(_, o.mobile_like) : H(B("span", {
                                            className: "v_like",
                                            innerHTML: o.mobile_like
                                        }), p), w ? g(w, o.mobile_wall_post_publish) : H(B("span", {
                                            className: "v_share",
                                            innerHTML: o.mobile_wall_post_publish
                                        }), v), x) {
                                        var F = x.nextSibling ? x : x.parentNode;
                                        F.nextSibling.style.display = "inline", F.style.display = "none"
                                    }
                                    A && c(A, "data-date") && g(A, c(A, "data-date")), r.setMhead(e, c(t.target, "data-header"), !0), g(f("mcont", e), n(l, g(s), R))
                                },
                                afterAppend: function(e) {
                                    var n = x("h4", e);
                                    n && w(t.nav.hash ? A() - n.offsetHeight : 0), t.nav.hash ? v(t.nav.hash) : y(0)
                                }
                            }, t);
                            break;
                        case "pinfo":
                            W = !0, r.set(Y, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    var t = window,
                                        i = t.lang,
                                        a = f("owner_panel", e),
                                        o = f("pp_img", a),
                                        s = f("op_header", a),
                                        l = f("lvi", s),
                                        u = f("pp_last_activity", a),
                                        d = B("div");
                                    k("mhi_back", f("mh_header", e)), g(a, '<img src="' + j(c(o, "src") || "") + '" class="op_img"><div class="op_cont"><h2 class="op_header">' + P(g(s)) + '</h2><div class="pp_online">' + (l ? i.mobile_online : g(u)) + "</div></div>"), n(R("_pinfo", e), function(e, t) {
                                        d.appendChild(t)
                                    }), g(f("ipanel", e), "<div>" + g(d) + '</div><div id="al_loading"></div>'), r.setMhead(e, !1, !0)
                                },
                                afterAppend: function() {
                                    w(), y(0, 10)
                                }
                            }, t);
                            break;
                        case "player":
                            W = !0, r.set(Y, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    var t = window,
                                        n = t.lang,
                                        i = window,
                                        a = i.audio,
                                        o = a.playlist(),
                                        s = a.playlist_q(),
                                        l = o[0] || {},
                                        c = (l.id || "").split("_").slice(2).join("_") || "",
                                        u = "";
                                    r.setMhead(e, n.mobile_menu_player_head_title, !0), g(f("mcont", e), '<div class="pcont"><div class="head_panel"><div class="hp_block"><form action="/audio" class="qsearch" onsubmit="return cur.au_search.go(event);"><input type="hidden" name="act" value="player"><input type="hidden" name="list" value="' + j(c) + '"><table><tr><td width="100%"><div class="iwrap"><input id="au_search_field" type="text" class="textfield qs_textfield" name="q" placeholder="' + n.mobile_audio_search_placeholder + '"></div></td><td class="last"><input id="au_search_btn" class="button qs_button al_tab" type="submit" value="' + n.mobile_audio_search_btn + '" /></td></tr></table></form></div></div><div id="au_search_items" class="upanel bl_cont"><div class="audios_block audios_list" data-query="' + j(s) + '">' + u + "</div></div></div>"), g("m", e.innerHTML)
                                }
                            }, t), G = function() {
                                var e = window,
                                    t = e.qsearch,
                                    i = window,
                                    a = i.audio,
                                    o = a.playlist(),
                                    r = o[0] || {},
                                    s = (r.id || "").split("_").slice(2).join("_") || "",
                                    l = "/audio" + h({
                                        act: "player",
                                        list: s
                                    }),
                                    c = [],
                                    u = {};
                                n(o, function(e, t) {
                                    c.push(t.id), u[t.id] = [t.artist + " " + t.title, t.id, t.src, t.artist, t.title, t.dur, t.can_add, !1]
                                }), t.init({
                                    action: l,
                                    al_action: l,
                                    container: p("au_search_items"),
                                    field: p("au_search_field"),
                                    btn: p("au_search_btn"),
                                    top_items: c,
                                    _cache: u,
                                    tpl: function(e, t, n, i) {
                                        return t ? i ? i : "" == i ? '<div class="audios_block audios_list" data-query="' + j(t) + '">' + e + "</div>" : '<div class="audios_block audios_list" data-query="' + j(t) + '"><div class="al_loading qs_loading">&nbsp;</div></div>' : '<div class="audios_block audios_list" data-query="' + j(a.playlist_q()) + '">' + e + "</div>"
                                    },
                                    item_tpl: function(e, t, n, i, a, o, r) {
                                        var s = window,
                                            l = s.audioplayer;
                                        return l && l.getDOMFromAudio({
                                            id: e,
                                            src: t,
                                            dur: a,
                                            artist: this.highlight(n),
                                            title: this.highlight(i),
                                            can_add: o,
                                            can_del: r
                                        }, !0, this.q) || ""
                                    },
                                    null_tpl: function(e) {
                                        var t = window,
                                            n = t.lang;
                                        return '<div class="service_msg_box"><div class="service_msg service_msg_null">' + (e ? n.mobile_audio_search_not_found.replace("%s", L(e)) : n.mobile_audio_no_audio) + "</div></div>"
                                    },
                                    soft_filter: !0,
                                    need_invalid_keys: Q.desktop,
                                    top_len: 50,
                                    global_search: !0,
                                    onRendered: function() {
                                        var e = window,
                                            t = e.audioplayer;
                                        t && t.initAudio()
                                    },
                                    al_need: !0,
                                    init_offset: 0
                                });
                                var d = a.getCurrentId(),
                                    f = p("audio" + d);
                                if (f) {
                                    var _ = I(f) + f.offsetHeight / 2 - A() / 2;
                                    y(_)
                                }
                            };
                            break;
                        case "photo":
                            W = !0, r.set(Y, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    function i(e, t, n) {
                                        return '<div class="pcont bl_cont"><div class="media_view photo_view"><div class="pv_summary">&nbsp;<div class="summary_loading" style="float:left;"><i class="i_loading"></i></div></div><div class="pv_body"><div class="thumb_item" style="' + (t || "") + '"><img src="' + e + '" class="ph_img" alt="" style="' + (n || "") + '" /></div></div><div id="al_fill"></div></div></div>'
                                    }
                                    var a = x("img", t.target),
                                        o = a && a.src || "/images/mobile/blank.gif",
                                        s = "",
                                        l = "",
                                        u = (c(a, "data-src_big") || "").split("|"),
                                        d = u[0],
                                        p = +u[1] || 0,
                                        h = +u[2] || 0,
                                        _ = !0;
                                    if (p && h || (p = a && a.width || 0, h = a && a.height || 0, _ = !1), d) {
                                        if (p && h) {
                                            var v = Math.min(604, q()),
                                                m = v / p,
                                                w = Math.min(604, Math.ceil(m >= 1 && _ ? h : h * m));
                                            s += "height:" + w + "px;"
                                        }
                                        s += "background:url(" + o + ") #f7f7f7 no-repeat center top;", w > 100 && n(["-moz-", "-o-", "-webkit-", ""], function(e, t) {
                                            s += t + "background-size:contain;"
                                        }), o = d
                                    } else l += "width:100%;";
                                    r.setMhead(e, c(t.target, "data-header"), !0), g(f("mcont", e), i(o, s, l))
                                },
                                afterAppend: function() {
                                    w(0, "al_fill"), y(0)
                                }
                            }, t);
                            break;
                        case "u":
                        case "g":
                        case "p":
                        case "e":
                            W = !0, r.set(Y, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    function n(e, t, n) {
                                        return "g" === Z || "p" === Z || "e" === Z ? '<div class="al_loading"></div>' : '<div class="pcont fit_box"><div class="owner_panel profile_panel"><img src="' + (e || "") + '" class="pp_img" /><div class="pp_cont"><h2 class="op_header">' + (t || "") + (n || "") + '</h2></div></div><div id="al_loading"></div>'
                                    }
                                    var i, a = window,
                                        o = a.lang,
                                        s = J.substr(2),
                                        l = f(s, e, "a") || f(s, e, "span"),
                                        u = P(c(t.target, "data-name") || c(l, "data-name") || g(l) || ""),
                                        d = l && l.parentNode && f("lvi", l.parentNode),
                                        p = T(d),
                                        h = f(s, e, "img"),
                                        _ = h && h.src || c(t.target, "data-photo") || "/images/mobile/blank.gif";
                                    "u" == Z ? i = u.split(" ").shift() : "g" == Z ? i = o.mobile_group_head_title : "p" == Z ? i = o.mobile_public_head_title : "e" == Z && (i = o.mobile_event_head_title), r.setMhead(e, i, "/"), g(f("mcont", e), n(_, u, p))
                                },
                                afterAppend: function() {
                                    w(), y(0)
                                }
                            }, t);
                            break;
                        case "news_subsection":
                            W = !0, r.set(Y, !1, {
                                before: !0,
                                beforeAppend: function(e) {
                                    var t = f("news_subsections", e);
                                    t && !M("summary_loading", t.firstChild) && z(B("div", {
                                        className: "summary_loading",
                                        innerHTML: '<i class="i_loading"></i>'
                                    }), t.firstChild)
                                }
                            });
                        default:
                            var et = window,
                                m = et.cur;
                            m.al_fast && m.al_fast[Z] && (W = !0, r.set(Y, !1, m.al_fast[Z](t), t))
                    }
                }
                if ($.abort_reqs(), t.local) {
                    var tt = !0;
                    r.set(Y, {}, {
                        after: !0,
                        no_scroll: !0,
                        force: !0
                    }, !1), G && G()
                } else {
                    var nt = F(t.nav.params);
                    d(nt, t.params || {}), window.al && window.al.menu || (nt._nlm = 1), V && (nt._tstat = V);
                    var it = window,
                        at = it.pStats,
                        ot = at.getSeenData();
                    ot && (nt._pstat = ot.data, m && m.module && (nt._pstatref = m.module)), nt._ref || (nt._ref = (K.path || "").substr(1));
                    var tt = $.post(X, nt, {
                        onPageDone: function(e, n, i, a, o) {
                            var s = window,
                                l = s.cur;
                            ot && at.onSend(ot.seen), $.tProcess = (new Date).getTime(), r.set(Y, {
                                title: e,
                                html: n,
                                js: i,
                                lm: a,
                                bc: o,
                                st: t.st || 0
                            }, {
                                after: W,
                                no_scroll: W
                            }, W ? !1 : t), $.tModule = l.module, $.tRender = (new Date).getTime()
                        }
                    });
                    $.save_req()
                }
                return W && (t.zProcess && (t.zProcess(), delete t.zProcess), K.set(t), $.tModule = m.module, $.tFastRender = (new Date).getTime()), tt
            },
            confirm: function(e) {
                function t() {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }, t
            }(function(e, t, n, i) {
                return confirm(t) ? $.click(e, i, {
                    url_params: {
                        hash: n
                    }
                }) : !1
            }),
            _post: function(e, t, n) {
                var i = function(e, t) {
                        n.onFail && n.onFail.call(window, 0, e, t)
                    },
                    a = function(a) {
                        var o = !1;
                        try {
                            o = O(a)
                        } catch (r) {
                            o = !1
                        }
                        o === !1 ? i() : $.parseResponse(o, e, t, n)
                    };
                return $.plainpost(e, t, a, i)
            },
            parseResponse: function(e, t, n, i) {
                var a = window,
                    r = a.al,
                    s = window,
                    l = s.nav,
                    c = window,
                    u = c.menu,
                    d = window,
                    p = d.page,
                    f = e.shift(),
                    h = e.shift(),
                    _ = e.shift(),
                    v = t.indexOf("community") >= 0,
                    m = v ? window.al && f > r.ver : window.al && f > r.ver || !u.refreshCounters(h);
                switch (h === !1 || v || U(h[2]), _) {
                    case 0:
                        if (m) return l.hard_go(l.cur, null, {
                            replace: !0
                        });
                        var g = e.shift();
                        i && i.onDone && (o(e) ? i.onDone.apply(window, g) : i.onDone.call(window, g));
                        break;
                    case 1:
                        $.onRedirect(!0, e[0]);
                        var w = e.shift(),
                            y = e.shift(),
                            b = e.shift();
                        if (m || y) l.hard_go(w);
                        else if (b) {
                            X();
                            var k = w + (-1 == w.indexOf("?") ? "?" : "&") + "__extra=1",
                                C = Y({
                                    src: k
                                })
                        } else l.go(w, null, {
                            ignore_cur_process: !0
                        });
                        break;
                    case 2:
                        var w = e.shift();
                        i && i.onFail ? (e.unshift(w), e.unshift(_), i.onFail.apply(window, e)) : l.hard_go(w);
                        break;
                    case 3:
                        p.need_hard_go = m;
                        var S = e[3];
                        if (S && S.rdr && window.al && r.menu && V("vk_wrap") >= 614) {
                            l.go(S.rdr, null, {
                                replace: !0
                            });
                            break
                        }
                        i = i || {}, i.onPageDone || (i.onPageDone = function(e, n, i, a, o) {
                            l.go(t, null, {
                                push_only: !0
                            }), p.set(p.getHash(l), {
                                title: e,
                                html: n,
                                js: i,
                                lm: a,
                                bc: o
                            })
                        }), i.onPageDone.apply(window, e);
                        break;
                    case 4:
                        if (!$._failed_relogin) {
                            var k = e.shift(),
                                w = e.shift();
                            X();
                            var C = Y({
                                src: k
                            })
                        }
                        $._failed_relogin = !0, $.save_failed_req(C, t, n, i)
                }
            },
            onReLoginDone: function() {
                $.repeat_reqs(), $._failed_relogin = !1
            },
            tGetParam: function() {
                if ($.tStart && $.tModule) {
                    var e = $.tFastRender - $.tStart,
                        t = $.tRestoreRender - $.tStart,
                        n = $.tProcess - $.tStart,
                        i = $.tRender - $.tProcess,
                        a = "/" == $.tModule.substr(0, 1) ? $.tModule.substr(1) : $.tModule,
                        o = [a, e, t, n, i];
                    for (var r in o)(!o[r] || o[r] < 0) && (o[r] = 0);
                    return $.tStart = !1, o.join(",")
                }
            },
            tAlGetParam: function() {
                if ($.tAlStart && $.tAlModule) {
                    var e = $.tAlProcess - $.tAlStart,
                        t = $.tAlRender - $.tAlProcess,
                        n = "/" == $.tAlModule.substr(0, 1) ? $.tAlModule.substr(1) : $.tAlModule,
                        i = ["al_" + n, e, t];
                    for (var a in i)(!i[a] || i[a] < 0) && (i[a] = 0);
                    return $.tAlStart = !1, i.join(",")
                }
            },
            refreshLinks: function(e, t) {
                if (e) {
                    var n = f("mmi_fv", "lm_cont"),
                        i = n && f("lfm_item", n),
                        a = f("mmi_fv", "mfoot"),
                        o = a && f("lfm_item", a),
                        r = p("fv_link");
                    c(i, "href", e), c(o, "href", e), c(r, "href", e)
                }
                if (t) {
                    var s = f("mmi_app", "lm_cont"),
                        l = s && f("lfm_item", s),
                        u = f("mmi_app", "mfoot"),
                        d = u && f("lfm_item", u),
                        h = p("app_link"),
                        _ = t ? "return nav.app_go(this, event, '" + W(t) + "');" : !1;
                    c(l, "onclick", _), c(d, "onclick", _), c(h, "onclick", _)
                }
            }
        };
    window.ajax = $
}, function(e, t, n) {
    var i = n(5),
        a = window,
        o = a.cancelEvent,
        r = a.removeEvent,
        s = a.srand,
        l = a.ce,
        c = a.addEvent,
        u = a.ssSet,
        d = a.lsGet,
        p = a.vkNow,
        f = a.onDOMReady,
        h = a.ssGet,
        _ = a.se,
        v = a.lsSet,
        m = a.each,
        g = window,
        w = g.isTouch,
        y = function() {
            var e = !1,
                t = !1,
                n = !1,
                a = !1,
                g = function Q(t) {
                    (e || a !== !1) && (e = !1, M && a === !1 || (n = !0, j.pause.call(C))), o(t), r(C, "play", Q), r(document, w ? "touchstart" : "click", k)
                },
                b = function() {
                    a !== !1 && a()
                },
                k = function $() {
                    t && (t = !1, e = !0, j.play.call(C), r(document, w ? "touchstart" : "click", $))
                },
                C = R(),
                S = s(),
                T = [],
                E = null,
                x = {},
                A = "",
                M = !1,
                P = !1,
                D = !1,
                N = !1,
                z = null,
                B = !1,
                H = !1;
            delete HTMLAudioElement.prototype.play, delete HTMLAudioElement.prototype.pause, delete HTMLAudioElement.prototype.load, delete HTMLAudioElement.prototype.canPlayType;
            var j = {
                play: HTMLAudioElement.prototype.play,
                pause: HTMLAudioElement.prototype.pause,
                load: HTMLAudioElement.prototype.load,
                canPlayType: HTMLAudioElement.prototype.canPlayType
            };

            function R(t) {
                var i = window.Audio ? new Audio : l("audio");
                return i.autobuffer = !0, i.muted = !1, t && (i.volume = t.volume, r(t, "play", L), r(t, "pause", I), r(t, "progress", q), r(t, "timeupdate", F), r(t, "ended", O), r(t, "play", g), r(t, "progress canplaythrough", b), r(document, w ? "touchstart" : "click", k), t.muted = !0, t.pause(), t.src = null), N = !1, P = !1, D = !1, e = !1, n = !1, a = !1, c(i, "play", L), c(i, "pause", I), c(i, "progress", q), c(i, "timeupdate", F), c(i, "ended", O), c(i, "play", g), c(i, "progress canplaythrough", b), c(document, w ? "touchstart" : "click", k), i
            }

            function L() {
                M || (M = !0, y.onPlay(!0), u("audio_play", "1"), clearTimeout(z), z = setTimeout(V, 100))
            }

            function I() {
                return n ? void(n = !1) : void(M && (M = !1, y.onPause(!0), u("audio_play", "0"), clearTimeout(z)))
            }

            function q() {
                y.onProgress(!0)
            }

            function F() {
                n || (y.onProgress(!0), y.onPositionChanged(!0, y.position(), y.duration()), u("audio_pos", y.position()), !N && C.duration - C.currentTime < .5 && (N = !0), P && (P = !1, y.next()))
            }

            function O() {
                y.onEnded(!0), N ? (N = !1, y.next()) : P = !0
            }

            function U() {
                return T[E] || !1
            }

            function X() {
                return U().id || !1
            }

            function Y(e) {
                e && (C.src = i.audioUnmaskSource(e.src), j.load.call(C), y.onSelect(!0, e))
            }

            function V() {
                if (M) {
                    var e = d("audio_current_player");
                    S != e ? y.pause() : z = setTimeout(V, 100)
                }
            }

            function W() {
                var e = X();
                u("audio_id", e), u("audio_pos", 0), B && (document.cookie = B + "=" + e + "; expires=" + new Date(p() + 864e5).toUTCString() + "; path=" + H)
            }

            function G(e) {
                u("audio_query", e), B && (document.cookie = B + "q=" + encodeURIComponent(e) + "; expires=" + new Date(p() + 864e5).toUTCString() + "; path=" + H)
            }
            return {
                init: function(e) {
                    return y.support ? (e.cookie && (B = e.cookie, H = e.cookie_path || "/"), void f(function() {
                        e.playlist && y.playlist(e.playlist, {
                            q: e.playlist_q || ""
                        });
                        var n = h("audio_id");
                        if (n) {
                            var i = h("audio_pos"),
                                a = h("audio_vol"),
                                o = h("audio_play");
                            y.select(n), "1" == o && (null !== i && y.position(i), null !== a && y.volume(a), t = !0, y.play())
                        }
                    })) : !1
                },
                support: C.canPlayType && j.canPlayType.call(C, "audio/mpeg") && "no" != j.canPlayType.call(C, "audio/mpeg") || !1,
                onPlay: _(X),
                onPause: _(X),
                onDeselect: _(X, function() {
                    return y.duration()
                }),
                onSelect: _(),
                onProgress: _(X, function() {
                    return y.loaded()
                }, function() {
                    return y.duration()
                }),
                onPositionChanged: _(X),
                onVolumeChanged: _(X, function() {
                    return C.volume
                }),
                onEnded: _(X),
                onNotFoundError: _(),
                onEmptyPlaylistError: _(),
                getCurrent: U,
                getCurrentId: X,
                operate: function(e) {
                    return y.support ? void(!e || T[E] && e == T[E].id ? M ? y.pause() : y.play() : y.play(e)) : !1
                },
                playing: function() {
                    return M
                },
                select: function(e) {
                    if (!y.support) return !1;
                    if (e) return T.length ? T[x[e]] ? (X() && y.onDeselect(!0), E = x[e], Y(T[E]), W(), !0) : void y.onNotFoundError(!0, e) : void y.onEmptyPlaylistError(!0, e)
                },
                play: function(e) {
                    if (!y.support) return !1;
                    if (e) {
                        if (M && y.pause(), !y.select(e)) return;
                        try {
                            C.currentTime = .01
                        } catch (t) {}
                    }
                    M || (C.muted = !1, j.play.call(C), M = !0, y.onPlay(!0), u("audio_play", "1"), v("audio_current_player", S))
                },
                pause: function() {
                    return y.support ? void(M && (j.pause.call(C), M = !1, y.onPause(!0), u("audio_play", "0"))) : !1
                },
                position: function(e, t) {
                    if (!y.support) return !1;
                    if ("undefined" == typeof e) return C.currentTime;
                    t && (e = y.duration() * e), e = Math.max(0, Math.min(e, y.duration()));
                    var n = M;
                    n && (M = !1, j.pause.call(C));
                    try {
                        C.currentTime = e, y.onPositionChanged(!0, y.position(), y.duration()), u("audio_pos", e), n && (M = !0, C.muted = !1, j.play.call(C))
                    } catch (i) {
                        y.onPositionChanged(!0, e, y.duration()), a = function() {
                            a = !1, y.position(e)
                        }, n && (M = !0)
                    }
                },
                volume: function(e) {
                    if (!y.support) return !1;
                    if ("undefined" == typeof e) return C.volume;
                    try {
                        C.volume = e || 0
                    } catch (t) {}
                    y.onVolumeChanged(!0), u("audio_vol", e || 0)
                },
                loaded: function() {
                    return C.buffered && C.buffered.length && C.buffered.end(C.buffered.length - 1) || 0
                },
                duration: function() {
                    return T[E] && T[E].dur || C.duration || 0
                },
                next: function() {
                    return y.support ? (M && y.pause(), y.onDeselect(!0), ++E >= T.length && (E = 0), Y(T[E]), W(), t = !0, void y.play()) : !1
                },
                prev: function() {
                    return y.support ? (M && y.pause(), y.onDeselect(!0), --E <= 0 && (E = T.length - 1), Y(T[E]), W(), t = !0, void y.play()) : !1
                },
                playlist: function(e, t) {
                    return y.support ? "undefined" == typeof e ? T : (M && y.pause(), U() && y.onDeselect(!0), T = e, A = t && t.q || "", E = null, x = {}, m(e, function(e, t) {
                        x[t.id] = e
                    }), G(A), void 0) : !1
                },
                playlist_q: function() {
                    return A
                }
            }
        }();
    window.audio = y
}, function() {
    var e = window,
        t = e.lsGet,
        n = e.ge,
        i = e.addClass,
        a = e.removeClass,
        o = e.each,
        r = e.geByClass,
        s = e.hide,
        l = e.show,
        c = e.val,
        u = e.geByClass1,
        d = e.gpeByClass,
        p = e.attr,
        f = e.addEvent,
        h = e.cancelEvent,
        _ = e.hasClass,
        v = e.getX,
        m = e.geByTag1,
        g = e.htsc,
        w = e.stripTags,
        y = e.toggleClass,
        b = e.lsSet,
        k = window,
        C = k.ajax,
        S = window,
        T = S.nav,
        E = window,
        x = E.isTouch,
        A = window,
        M = A.audio,
        P = function() {
            var e = "1" == t("audio_time_left"),
                k = "",
                S = "",
                E = "",
                A = null,
                D = 0,
                N = {};
            M.onPlay(B), M.onPause(H), M.onSelect(j), M.onDeselect(R), M.onProgress(function(e, t, o) {
                var r = n("audio" + e);
                M.playing() ? (i("ai_playing", r), i("ai_playing", "lm_audio")) : (a("ai_playing", r), a("ai_playing", "lm_audio")), r && (G(r, t / o), i("ai_current", r))
            }), M.onPositionChanged(L), M.onVolumeChanged(function(e, t) {
                var i = n("audio" + e);
                i && $(i, t)
            }), M.onEnded(function(e) {
                var t = n("audio" + e);
                t && Q(t, 1)
            }), M.onNotFoundError(I), M.onEmptyPlaylistError(I);

            function z() {
                o(r("ai_current"), function(e, t) {
                    t = K(t), R(t.id, t.dur)
                });
                var e = M.getCurrentId(),
                    t = n("audio" + e),
                    s = M.loaded(),
                    l = M.position(),
                    c = M.duration();
                M.playing() ? (i("ai_playing", t), i("ai_playing", "lm_audio")) : (a("ai_playing", t), a("ai_playing", "lm_audio")), j(M.getCurrent()), G(t, s / c), L(M.getCurrentId(), l, c)
            }

            function B(e) {
                i("ai_playing", "lm_audio");
                var t = n("audio" + e);
                t && (i("ai_playing", t), i("ai_current", t), P.playback(e))
            }

            function H(e) {
                a("ai_playing", "lm_audio");
                var t = n("audio" + e);
                t && (a("ai_playing", t), i("ai_current", t), P.playback(e, !0))
            }

            function j(e) {
                if (!e) return void s("lm_player");
                l("lm_player");
                var t = n("lm_audio");
                t && (c(u("ai_artist", t), e.artist), c(u("ai_title", t), e.title));
                var a = n("audio" + e.id);
                a && (G(a, 0), Q(a, 0), W(a, et(0, M.duration())), $(a, M.volume()), i("ai_current", a))
            }

            function R(e, t) {
                var i = n("audio" + e);
                a("ai_playing", "lm_audio"), i && (W(i, Z(t)), a("ai_playing", i), a("ai_current", i), D = 0, N[e] && delete N[e])
            }

            function L(e, t, i) {
                var a = n("audio" + e);
                a && (q || Q(a, t / i), W(a, P.getFormatedTime(t, i)), t > 1 && (N[e] = 1))
            }

            function I(e) {
                var t = d("audios_list", "audio" + e),
                    n = r("audio_item", t),
                    i = [],
                    a = !1;
                o(n, function(t, n) {
                    return (n = K(n)) ? (i.push(n), void(n.id == e && (a = !0))) : !0
                }), M.playlist(i, {
                    q: p(t, "data-query")
                }), a && M.play(e)
            }
            var q = null,
                F = null,
                O = !1,
                U = !1;
            f(document, x ? "touchend touchcancel" : "mouseup", Y), f(document, x ? "touchmove" : "mousemove", X);

            function X(e) {
                if (q) {
                    var t = d("audio_item", q),
                        n = V(q, e);
                    e && h(e), O && Q(t, n), U && ($(t, n), M.volume(n)), F = n
                }
            }

            function Y(e) {
                if (q) {
                    var t = d("audio_item", q),
                        n = V(q, e) || F;
                    e && h(e), O && (Q(t, n), M.position(n, !0)), U && $(t, n), q = F = null, O = U = !1
                }
            }

            function V(e, t) {
                var n = _("touch", window.bodyNode) ? 10 : 8,
                    i = t.pageX || t.touches && t.touches[0] && t.touches[0].pageX || 0,
                    a = i - v(e) - n / 2,
                    o = e.offsetWidth - n,
                    r = o ? Math.max(0, Math.min(a / o, 1)) : 0;
                return r
            }

            function W(e, t) {
                if (e) {
                    var n = u("ai_dur", e);
                    c(n, t)
                }
            }

            function G(e, t) {
                if (e) {
                    var n = u("aic_progress_wrap", e),
                        i = u("aic_load_line", n);
                    i.style.width = 100 * Math.max(0, Math.min(t, 1)) + "%"
                }
            }

            function Q(e, t) {
                if (e) {
                    {
                        var n = u("aic_progress_wrap", e),
                            i = u("aic_progress_line", n);
                        u("aic_slider", i)
                    }
                    i.style.width = 100 * t + "%"
                }
            }

            function $(e, t) {
                if (e) {
                    {
                        var n = u("aic_volume_wrap", e),
                            i = u("aic_progress_line", n);
                        u("aic_slider", i)
                    }
                    i.style.width = 100 * t + "%"
                }
            }

            function K(e) {
                if (e = n(e), !e || !p(e, "data-id")) return !1;
                if (_("ai_deleted", e)) return !1;
                var t = p(e, "data-id"),
                    i = c(m("input", e)),
                    a = p(u("ai_dur", e), "data-dur"),
                    o = c(u("ai_artist", e)),
                    r = c(u("ai_title", e)),
                    s = !!u("ai_add", e),
                    l = !!u("ai_del", e);
                return {
                    id: t,
                    src: i,
                    dur: a,
                    artist: g(w(o)),
                    title: g(w(r)),
                    can_add: s,
                    can_del: l
                }
            }

            function J(e, t, n) {
                if (!e) return "";
                var i = g(e.id),
                    a = g(e.src),
                    o = +e.dur,
                    r = e.artist,
                    s = e.title,
                    l = e.can_add,
                    c = e.can_del,
                    u = s ? '<span class="divider"> &ndash; </span>' : "",
                    d = x ? "ontouchstart" : "onmousedown",
                    p = "",
                    f = "";
                if (at(i)) {
                    if (n) return "";
                    p += " ai_deleted"
                }
                return tt(i) && (p += " ai_added"), c ? (p += " ai_has_btn", f = '<div class="ai_del" onclick="audioplayer.del(\'' + i + '\', event);"><i class="i_del"></i></div>') : l && (p += " ai_has_btn", f = '<div class="ai_add" onclick="audioplayer.add(\'' + i + '\', event);"><i class="i_add"></i></div>'), i == M.getCurrentId() && (M.playing() && (p += " ai_playing"), p += " ai_current"), '<div id="audio' + i + '" data-id="' + i + '" class="audio_item' + p + '" onclick="audioplayer.playPause(event, \'' + i + "'" + (t ? ", true" : "") + ');"><div class="ai_info"><div class="ai_play"><i class="i_play"></i></div>' + f + '<div class="ai_body"><div class="ai_dur" data-dur="' + o + '" onclick="audioplayer.switchTimeFormat(this, event);">' + Z(o) + '</div><div class="ai_label"><span class="ai_artist">' + r + "</span>" + u + '<span class="ai_title">' + s + '</span></div><input type="hidden" value="' + a + '"></div></div><div class="ai_controls"><table class="row_table"><tr><td class="aic_progress_wrap"><div class="aic_line" ' + d + '="audioplayer.setPosition(this, event);" onclick="cancelEvent(event);"><div class="aic_ln aic_back_line" onclick="cancelEvent(event);"></div><div class="aic_ln aic_load_line" onclick="cancelEvent(event);"></div><div class="aic_ln aic_pl_wrap" onclick="cancelEvent(event);"><div class="aic_ln aic_progress_line" onclick="cancelEvent(event);"><div class="aic_slider" onclick="cancelEvent(event);"></div></div></div></div></td><td class="aic_volume_wrap"><div class="aic_line" ' + d + '="audioplayer.setVolume(this, event);" onclick="cancelEvent(event);"><div class="aic_ln aic_back_line" onclick="cancelEvent(event);"></div><div class="aic_ln aic_pl_wrap" onclick="cancelEvent(event);"><div class="aic_ln aic_progress_line" onclick="cancelEvent(event);"><div class="aic_slider" onclick="cancelEvent(event);"></div></div></div></div></td></tr></table></div></div>'
            }

            function Z(e) {
                var t, n, i, a = 0 > e;
                return e = Math.round(a ? -e : e), n = e % 60, t = 10 > n ? "0" + n : n, e = Math.floor(e / 60), i = e % 60, t = i + ":" + t, e = Math.floor(e / 60), e > 0 && (10 > i && (t = "0" + t), t = e + ":" + t), a && (t = "-" + t), t
            }

            function et(t, n) {
                return Z(e && n ? t - n : t)
            }

            function tt(e) {
                var t = window,
                    n = t.cur;
                return n.addedAudios ? n.addedAudios[e] : !1
            }

            function nt(e) {
                var t = window,
                    n = t.cur;
                n.addedAudios || (n.addedAudios = {}), n.addedAudios[e] = !0
            }

            function it(e) {
                var t = window,
                    n = t.cur;
                n.addedAudios && delete n.addedAudios[e]
            }

            function at(e) {
                var t = window,
                    n = t.cur;
                return n.deletedAudios ? n.deletedAudios[e] : !1
            }

            function ot(e) {
                var t = window,
                    n = t.cur;
                n.deletedAudios || (n.deletedAudios = {}), n.deletedAudios[e] = !0
            }

            function rt(e) {
                var t = window,
                    n = t.cur;
                n.deletedAudios && delete n.deletedAudios[e]
            }
            return {
                init: function(e) {
                    return M.support ? (k = e.add_hash || "", S = e.del_hash || "", void(E = e.res_hash || "")) : !1
                },
                initAudio: z,
                getDOMFromAudio: J,
                add: function(e, t) {
                    M.support && (_("ai_added", "audio" + e) || (i("ai_added", "audio" + e), nt(e), C.post("/audio", {
                        _ajax: 1,
                        act: "add",
                        audio: e,
                        hash: k
                    }, {
                        onDone: function(t) {
                            t || (a("ai_added", "audio" + e), it(e))
                        },
                        onFail: function() {
                            a("ai_added", "audio" + e), it(e);
                            var t = Array.prototype.slice.call(arguments),
                                n = t.shift();
                            switch (n) {
                                case 2:
                                    T.go("/audio?act=add&audio=" + e + "&hash=" + k)
                            }
                        }
                    }), t && h(t)))
                },
                del: function(e, t) {
                    if (M.support && n("audio" + e)) {
                        var i = _("ai_deleted", "audio" + e);
                        y("ai_deleted", "audio" + e, !i), i ? rt(e) : ot(e), C.post("/audio", {
                            _ajax: 1,
                            act: i ? "restore" : "delete",
                            audio: e,
                            hash: i ? E : S
                        }, {
                            onDone: function(t) {
                                t || (y("ai_deleted", "audio" + e, i), i ? ot(e) : rt(e))
                            },
                            onFail: function() {
                                y("ai_deleted", "audio" + e, i), i ? ot(e) : rt(e);
                                var t = Array.prototype.slice.call(arguments),
                                    n = t.shift();
                                switch (n) {
                                    case 2:
                                        T.go("/audio?act=" + (i ? "restore" : "delete") + "&audio=" + e + "&hash=" + (i ? E : S))
                                }
                            }
                        }), t && h(t)
                    }
                },
                playPause: function(e, t, i) {
                    var a = window,
                        o = a.lang;
                    if (M.support) {
                        var r = n("audio" + t);
                        if (r && _("ai_deleted", r) && !_("ai_current", r)) return !0;
                        i && t != M.getCurrentId() ? I(t, !0) : M.operate(t)
                    } else alert(o.mobile_audio_player_not_support);
                    return h(e), !1
                },
                getFormatedTime: et,
                switchTimeFormat: function(t, i) {
                    var a = d("audio_item", t);
                    if (!_("ai_current", a) || _("ai_select", a)) return !0;
                    e = !e, b("audio_time_left", e ? "1" : "0");
                    var o = n("audio" + M.getCurrentId());
                    return W(o, et(M.position(), M.duration())), i && h(i), !1
                },
                setPosition: function(e, t) {
                    q || (q = e, O = !0, X(t))
                },
                setVolume: function(e, t) {
                    q || (q = e, U = !0, X(t))
                },
                playback: function(e, t) {
                    if (clearTimeout(A), !t && e && e != D) {
                        var n = function i() {
                            return N[e] ? void C.post("/audio", {
                                _ajax: 1,
                                act: "playback",
                                audio: e,
                                hash: k
                            }, {
                                onDone: function() {
                                    D = e
                                }
                            }) : void(A = setTimeout(i, 1e4))
                        };
                        A = setTimeout(n, 1e4)
                    }
                },
                openPlayer: function(e, t) {
                    var n = T.path,
                        i = T.params,
                        a = "#player",
                        o = n + (i ? "?" + i : "") + a;
                    return T.al_go(o, null, {
                        local: !0,
                        target: e,
                        nav: {
                            push: o,
                            path: n,
                            params: i,
                            hash: a
                        },
                        no_push: t
                    })
                }
            }
        }();
    window.audioplayer = P
}, function() {
    var e = window,
        t = e.ce,
        n = e.getCssPropertyName;
    if (!window._ua) var i = navigator.userAgent.toLowerCase();
    var a = {
            version: (i.match(/.+(?:me|ox|on|rv|it|era|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
            opera: /opera/i.test(i),
            msie: /msie/i.test(i) && !/opera/i.test(i),
            msie6: /msie 6/i.test(i) && !/opera/i.test(i),
            msie7: /msie 7/i.test(i) && !/opera/i.test(i),
            msie8: /msie 8/i.test(i) && !/opera/i.test(i),
            msie9: /msie 9/i.test(i) && !/opera/i.test(i),
            mozilla: /firefox/i.test(i),
            chrome: /chrome/i.test(i),
            safari: !/chrome/i.test(i) && /webkit|safari|khtml/i.test(i),
            iphone: /iphone/i.test(i),
            ipod: /ipod/i.test(i),
            iphone4: /iphone.*OS 4/i.test(i),
            ipod4: /ipod.*OS 4/i.test(i),
            ipad: /ipad/i.test(i),
            ios: +(i.match(/.+(?:ipod|ipad|iphone.*os) ([\d.]+)_/i) || [0, 0])[1],
            android: /android/i.test(i),
            bada: /bada/i.test(i),
            opera_mini: /opera mini/i.test(i),
            uc_mini: /mobile safari.*ucbrowser/i.test(i),
            mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile/i.test(i),
            msie_mobile: /iemobile/i.test(i),
            safari_mobile: /iphone|ipod|ipad/i.test(i),
            opera_mobile: /opera mini|opera mobi/i.test(i),
            mac: /mac/i.test(i)
        },
        o = {
            1: 1,
            2: 1,
            3: 1,
            4: 1,
            5: 1
        };
    a.desktop = (a.opera || a.msie || a.mozilla || a.chrome || a.safari) && !a.mobile;
    var r = "ontouchstart" in window,
        s = function(e) {
            if ("WebKitCSSMatrix" in e && "m11" in new e.WebKitCSSMatrix) return !0;
            if ("MSCSSMatrix" in e && "m11" in new e.MSCSSMatrix) return !0;
            if ("CSSMatrix" in e && "m11" in new e.CSSMatrix) return !0;
            try {
                var i = t("div"),
                    a = n(i, "transform");
                return a ? (i.style[a] = "translate3d(1px,1px,1px)", i.style[a] && "none" != i.style[a]) : !1
            } catch (o) {
                return !1
            }
        }(window);
    window._ua = i, window.browser = a, window.mobPlatforms = o, window.isTouch = r, window.has3d = s
}, function() {
    var e = window,
        t = e.hide,
        n = e.ge,
        i = e.ce,
        a = e.append,
        o = e.geByClass1,
        r = e.val,
        s = e.addClass,
        l = e.show,
        c = e.obj2qs,
        u = e.unescapeAttr,
        d = e.elfocus,
        p = e.lockButton,
        f = e.unlockButton,
        h = e.extend,
        _ = e.scrollToEl,
        v = e.remove,
        m = e.gpeByTag,
        g = e.each,
        w = e.removeClass,
        y = window,
        b = y.geo,
        k = window,
        C = k.ajax,
        S = window,
        T = S.nav,
        E = function() {
            var e = null,
                y = !1,
                k = !1,
                S = {},
                x = [],
                A = 0,
                M = null,
                P = "",
                D = "";

            function N(e, t) {
                return t ? !1 : O(e)
            }

            function z(e) {
                k = !1;
                var t = n("medias_map"),
                    c = n("attached_wrap");
                t || (t = i("div", {
                    id: "medias_map",
                    className: "pi_medias"
                }), a(t, c));
                var u = +e[1] || 0,
                    d = e[3] || "",
                    p = e[4] || "",
                    f = e[5] || "",
                    h = +e[6].lat || 0,
                    _ = +e[6].lng || 0,
                    v = h + "_" + _,
                    m = o("medias_map", t),
                    g = '<div class="medias_map_close" onclick="checkin.remove();"><i class="i_close">&nbsp;</i></div><div class="medias_map_label" onclick="checkin.changePlace();">' + d + (f ? ", " + f : p ? ", " + p : "") + "</div>",
                    w = '<input type="hidden" name="place_id" value="' + u + '"><input type="hidden" name="place" value="' + v + '">';
                if (m) r(m, g + w);
                else {
                    var g = '<div class="medias_map">' + g + w + "</div>";
                    r(t, g)
                }
                s("cp_geo_btn_sel", "geo_btn"), y = !0, l(t)
            }

            function B() {
                return O(e)
            }

            function H(n, i) {
                var a = window,
                    o = a.lang,
                    s = "/places.php" + c({
                        act: "add_place",
                        latitude: e.latitude,
                        longitude: e.longitude,
                        hash: P
                    });
                r("place_add_box", '<h4 class="sub_header">' + o.mobile_geo_new_place_header + '</h4><div class="form_item fi_fat"><form id="place_add_form" action="' + s + '" method="post"><dl class="fi_row"><dt class="fi_label">' + o.mobile_geo_place_name_label + '</dt><dd class="iwrap"><input type="text" class="textfield" id="place_name_fld" name="title" /></dd></dl><dl class="fi_row"><dt class="fi_label">' + o.mobile_geo_place_address_label + '</dt><dd class="iwrap"><input type="text" class="textfield" id="place_address_fld" name="address" /></dd></dl><dl class="fi_row"><dd><input class="button" type="submit" id="place_add_btn" value="' + o.mobile_geo_place_add_btn + '" onclick="return checkin.addNewPlace(this);" /><a class="near_btn" onclick="checkin.addPlaceCancel(); return false;">' + o.mobile_cancel + "</a></dd></dl></form></div>"), r("place_name_fld", u(n) || ""), r("place_address_fld", u(i) || ""), t("places_box"), l("place_add_box"), d(n ? "place_address_fld" : "place_name_fld")
            }

            function j() {
                r("place_add_box", ""), t("place_add_box"), l("places_box")
            }

            function R() {
                var t = r("place_name_fld"),
                    i = r("place_address_fld");
                return t ? (p("place_add_btn"), C.post("/places.php", {
                    _ajax: 1,
                    act: "add_place",
                    latitude: e.latitude,
                    longitude: e.longitude,
                    title: t,
                    address: i,
                    hash: P
                }, {
                    onDone: function(e, t) {
                        if (f("place_add_btn"), e) {
                            var n = {};
                            n[e] = t, h(S, n), x.splice(x[0] ? 0 : 1, 0, e), j(), L(null, e)
                        }
                    },
                    onFail: function() {
                        f("place_add_btn");
                        var e = Array.prototype.slice.call(arguments),
                            t = e.shift(),
                            i = n("place_add_form");
                        switch (t) {
                            case 2:
                                i && i.submit()
                        }
                    }
                }), !1) : (d("place_name_fld"), !1)
            }

            function L(t, n) {
                I();
                var i = S[n];
                i && (e = {
                    latitude: +i[6].lat || 0,
                    longitude: +i[6].lng || 0
                }, n ? z(i) : q(e, i))
            }

            function I(e) {
                if (!M) return !0;
                r("m", M), M = null, _(o("create_post_extra", "mcont"));
                var t = T.path + (T.params ? "?" + T.params : "");
                return T.go(t, null, {
                    push_only: !0,
                    no_push: e
                }), !1
            }

            function q(e, t) {
                k = !0;
                var a = n("medias_map"),
                    c = n("attached_wrap");
                a || (a = i("div", {
                    id: "medias_map",
                    className: "pi_medias"
                }), c.appendChild(a));
                var u = e.latitude,
                    d = e.longitude,
                    p = (window.devicePixelRatio >= 1.5 ? 2 : 1, t && t[4] || !1),
                    f = o("medias_map", a),
                    h = p ? '<div class="medias_map_close" onclick="checkin.remove();"><i class="i_close">&nbsp;</i></div><div class="medias_map_label" onclick="checkin.changePlace();">' + p + "</div>" : "",
                    _ = "",
                    v = u + "_" + d + "_0",
                    m = '<input type="hidden" name="map" value="' + v + '">';
                if (f) r(f, h + _ + m);
                else {
                    var g = '<div class="medias_map">' + h + _ + m + "</div>";
                    r(a, g)
                }
                y = !0, s("cp_geo_btn_sel", "geo_btn"), l(a)
            }

            function F() {
                e = null, S = {}, x = [], A = 0, C.post(D, {
                    _ajax: 1
                }), v("medias_map")
            }

            function O(e) {
                var t = window,
                    n = t.al;
                v("feed_extra_field");
                var o = Math.round(1e8 * e.latitude) / 1e8,
                    r = Math.round(1e8 * e.longitude) / 1e8,
                    s = m("form", "geo_btn"),
                    l = i("input", {
                        id: "feed_extra_field",
                        type: "hidden",
                        name: "add_place",
                        value: o + "," + r
                    });
                if (!s) return T.go(T.path + "?act=places&lat=" + o + "&lng=" + r);
                var c = !1;
                return g(s, function(e, t) {
                    return "submit" === t.type ? (c = t, !1) : void 0
                }), c ? (a(l, s), window.al && n.ver ? T.go(c) : s.submit()) : void 0
            }

            function U(t) {
                t && t.coords && (e = {
                    latitude: +t.coords.latitude || 0,
                    longitude: +t.coords.longitude || 0
                }, N(e))
            }

            function X() {
                E.remove(), t("geo_waiting")
            }
            return {
                toggle: function() {
                    y ? E.remove() : E.add()
                },
                addNewPlace: R,
                addPlaceShow: H,
                addPlaceCancel: j,
                selectPlace: L,
                changePlace: B,
                back: I,
                refreshCurrentPosition: function() {
                    b.getCurrentPosition(U, X)
                },
                getCurrentAddress: function() {
                    return S[0] && S[0][5] || ""
                },
                savePlaces: function(e) {
                    h(S, e)
                },
                add: function(t) {
                    return !t && y ? B() : void(t && (t.latitude || t.longitude) && t.place ? (e = {
                        latitude: +t.latitude || 0,
                        longitude: +t.longitude || 0
                    }, t.place[1] ? z(t.place) : q(e, t.place), N(e, !0)) : (b.getCurrentPosition(U, X), l("geo_waiting")))
                },
                add_place: function(t) {
                    return !t && y ? B() : void(t && (t.latitude || t.longitude) && t.place ? (e = {
                        latitude: +t.latitude || 0,
                        longitude: +t.longitude || 0
                    }, t.place[1] ? z(t.place) : q(e, t.place), N(e, !0)) : (b.getCurrentPosition(U, X), l("geo_waiting")))
                },
                remove: function() {
                    y = !1, w("cp_geo_btn_sel", "geo_btn"), F()
                },
                stash: function(t) {
                    return t ? (e = t[0], y = t[1], k = t[2], S = t[3], x = t[4], A = t[5], M = t[6], void 0) : [e, y, k, S, x, A, M]
                },
                init: function(n, i, a) {
                    return t("geo_waiting"), e = null, y = !1, k = !1, S = {}, x = [], A = 0, M = null, P = i || "", D = a || "", n && E.add(n), b.init()
                }
            }
        }();
    window.checkin = E
}, function() {
    var e = window,
        t = e.ge,
        n = e.geByClass1,
        i = e.toggle,
        a = e.val,
        o = e.ce,
        r = e.intval,
        s = e.toggleClass,
        l = e.after,
        c = e.cdf,
        u = e.gpeByClass,
        d = e.hide,
        p = e.addClass,
        f = e.remove,
        h = e.show,
        _ = e.getY,
        v = e.getH,
        m = e.scrollTop,
        g = e.hasClass,
        w = e.each,
        y = e.geByClass,
        b = e.attr,
        k = e.getCw,
        C = e.getHref,
        S = e.before,
        T = e.onBodyScrollForce,
        E = e.removeClass,
        x = e.scrollToEl,
        A = e.geByTag1,
        M = (e.replace, window),
        P = M.ajax,
        D = window,
        N = D.ownerPhotoUpload,
        z = window,
        B = z.nav;
    var H = {
            onDone: function(e, o, r, s) {
                var l = t(e) || n("like_box", "z") || n("like_box") || n("wall_item_for_like_" + e);
                if (l && e) {
                    var c = n("item_like", l),
                        u = n("item_repost", l),
                        d = n("like_wrap", l);
                    c && (c.innerHTML = o || "", i(c, o)), u && (u.innerHTML = r || "", i(u, r)), d && a(d, s || "")
                }
            },
            onFail: function() {
                var e = Array.prototype.slice.call(arguments),
                    t = e.shift();
                switch (t) {
                    case 2:
                        B.hard_go(e[0])
                }
            }
        },
        j = {
            onDone: function(e, t, i, s, l) {
                var c = window,
                    u = c.photo;
                if (H.onDone.apply(this, arguments), this.photo_id) {
                    var d = u.get(this.photo_id);
                    if (d) {
                        var p = o("div", {
                            innerHTML: d.likes
                        });
                        a(n("item_like", p), t), d.likes = a(p), d.publish = '<span class="item_repost">' + i + "</span>", d.likes_cnt = r(a(n("v_like", p)).replace(/\D+/g, "")), d.likes_me = l;
                        var p = o("div", {
                                innerHTML: d.actions
                            }),
                            f = n("like_wrap", p);
                        a(f, s), d.actions = a(p), u.save(d)
                    }
                }
            },
            onFail: H.onFail
        },
        R = {
            onDone: function() {
                var e = window,
                    t = e.photo;
                if (this.photo_id) {
                    var i = t.get(this.photo_id);
                    i && (i.tag_info = "", t.save(i));
                    var o = n("photo_view"),
                        r = n("pv_tag_wrap", o);
                    a(r, "")
                }
            }
        },
        L = {
            onDone: function(e, t, i) {
                var o = window,
                    r = o.photo,
                    l = window,
                    c = l.menu,
                    u = n("photo_view"),
                    d = n("photo_msg"),
                    p = !!t;
                if (u && d) {
                    a(d, t || ""), s("photo_deleted", u, p);
                    var f = r.get(e);
                    f && (f.deleted = t, r.save(f)), i && c && c.refresh({
                        pp: i
                    })
                }
            }
        },
        I = {
            onDone: function(e, t) {
                a(e, t)
            }
        },
        q = {
            onDone: function(e) {
                this.link && (l(c(e), u("pic_body_wrap", this.link)), d(this.link))
            }
        },
        F = {
            onStart: function() {
                p("cm_item_loading", this.link)
            },
            onDone: function(e) {
                this.link && a(this.link.parentNode, e)
            }
        },
        O = {
            onDone: function(e, i) {
                if (e) {
                    var r = window,
                        s = r.photo;
                    f(e + "_msg");
                    var c = t(e);
                    if (c) {
                        if (i) {
                            var u = o("div", {
                                id: e + "_msg",
                                className: (c.className || "") + " post_message_item"
                            });
                            a(u, '<div class="pi_cont">' + i + "</div>"), l(u, c), d(c), n("rtm_reply_wrap", c) && window.reply && window.reply.edithide()
                        } else h(e);
                        if (this.photo_id) {
                            var p = s.get(this.photo_id);
                            if (p) {
                                var _ = n("photoview"),
                                    v = n("comments_wrap", _);
                                p.comments_html = a(v)
                            }
                        }
                    }
                }
            }
        },
        U = {
            onDone: function(e, n, i, r) {
                if (e) {
                    f(e + "_msg");
                    var s = t(e);
                    if (s)
                        if (n) {
                            var c = (/^([a-z]+)_item$/i.exec(i || "") || [])[1] || "inline",
                                u = o("div", {
                                    id: e + "_msg",
                                    className: c + "_item " + c + "_message_item"
                                }),
                                p = r || "message_item_cont";
                            a(u, '<div class="' + p + '">' + n + "</div>"), l(u, s), d(s)
                        } else n === !1 ? d(s) : h(s)
                }
            }
        },
        X = {
            onDone: function(e, n, i) {
                if (e) {
                    var r = t(e),
                        c = _(r) || _(e + "_msg"),
                        u = v(r) || v(e + "_msg"),
                        d = c + (320 > C ? u : 0) - m();
                    if (f(e + "_msg"), r) {
                        var p = g("wall_item", r) || g("post", r) ? "wall" : "post";
                        if (i) {
                            var h = o("div", {
                                id: e + "_msg",
                                className: p + "_item post_message_item"
                            });
                            a(h, '<div class="pi_cont">' + i + "</div>"), l(h, r)
                        }
                        if (n) {
                            w(y(p + "_item"), function() {
                                var e = this.id ? this.id.match(/^wall((-?\d+)_(-?\d+)(_\d+)?)$/) : !1,
                                    t = b(this, "data-copy"),
                                    a = t ? t.match(/^(-?\d+)_(-?\d+)$/) : !1;
                                return e ? void((!e[4] && e[2] == n || e[4] && e[3] == n || a && a[1] == n) && s("post_item_ignored", this, i)) : !0
                            });
                            var C = k(),
                                c = _(r) || _(e + "_msg"),
                                u = v(r) || v(e + "_msg"),
                                S = c + (320 > C ? u : 0) - d;
                            m(S)
                        }
                    }
                }
            }
        },
        Y = {
            onDone: function(e, n, i) {
                if (e) {
                    var r = t(e);
                    if (f(e + "_msg"), r) {
                        if (i) {
                            var c = o("div", {
                                id: e + "_msg",
                                className: "wall_item post_message_item"
                            });
                            a(c, '<div class="pi_cont">' + i + "</div>"), l(c, r)
                        }
                        s("post_item_ignored", r)
                    }
                }
            }
        },
        V = {
            onStart: function() {
                var e = u("show_more_wrap", this.link),
                    t = n("show_more", e) || this.link,
                    i = o("div", {
                        id: "show_more_loading",
                        className: "show_more_loading",
                        innerHTML: '<i class="i_loading">&nbsp;</i>'
                    }),
                    a = o("div", {
                        id: "show_more_wrap",
                        className: "show_more_wrap"
                    });
                b(i, "data-href", C(t)), a.appendChild(i), S(a, e), f(e)
            },
            onDone: function(e) {
                var n = window,
                    i = n.cur;
                P.tAlProcess = (new Date).getTime();
                var a = t("show_more_wrap"),
                    o = c(e);
                S(o, a), f(a), P.prepare_nav("mcont"), P.prepare_click("mcont"), T(100), P.tAlModule = i.module, P.tAlRender = (new Date).getTime()
            }
        },
        W = {
            onStart: V.onStart,
            onDone: function(e, i) {
                var a = window,
                    o = a.cur;
                P.tAlProcess = (new Date).getTime();
                var r = n("photos_page", "mcont"),
                    s = t("show_more_wrap"),
                    l = c(i);
                e = e.replace(/<img src="([^"]+)" class="/gi, '<img data-src="$1" class="_image ');
                var u = c(e);
                r && r.appendChild(u), S(l, s), f(s), P.prepare_nav("mcont"), P.prepare_click("mcont"), T(100), P.tAlModule = o.module, P.tAlRender = (new Date).getTime()
            }
        },
        G = {
            onStart: V.onStart,
            onDone: function(e, i) {
                var a = window,
                    o = a.cur;
                P.tAlProcess = (new Date).getTime();
                var r = n("audios_block", n("audios", "mcont")),
                    s = t("show_more_wrap"),
                    l = c(i),
                    u = c(e);
                r && r.appendChild(u), S(l, s), f(s), P.prepare_nav("mcont"), P.prepare_click("mcont"), P.tAlModule = o.module, P.tAlRender = (new Date).getTime()
            }
        },
        Q = {
            onDone: function(e) {
                var t = this.link.parentNode;
                a(t, e)
            }
        },
        $ = {
            onStart: function() {
                p("mva_item_loading", this.link)
            },
            onDone: function(e, t) {
                E("mva_item_loading", this.link), e.upload_url || t && B.hard_go(t), N && N.crop(e) || t && B.hard_go(t)
            },
            onFail: function() {
                E("mva_item_loading", this.link)
            }
        },
        K = {
            onStart: function() {
                var e = this.link,
                    t = u("notify_lite", e);
                if (t) return f(t);
                for (; e = e.parentNode;)
                    if (g("notify_item", e)) {
                        f(g("notify_panel", e.parentNode) ? e.parentNode : e);
                        break
                    }
            }
        },
        J = {
            onStart: function() {
                var e = y("pagination", "mcont");
                w(e, function(e, t) {
                    S(o("div", {
                        className: "summary_loading",
                        innerHTML: '<i class="i_loading"></i>'
                    }), t.firstChild)
                })
            },
            onDone: function(e, i) {
                var o = window,
                    r = o.mail,
                    s = t("messages" + i);
                s && (a(s, e), r.onMessagesRepainted(!0), !this.save && x()), this.save && r.saveDialog({
                    messages: e
                }, i), this.clear && (a(A("textarea", "write_form"), ""), f(n("pi_medias", "write_form"))), E("cp_attach_btn_sel", n("cp_attach_btn"))
            },
            onFail: function() {
                var e = Array.prototype.slice.call(arguments),
                    t = e.shift();
                switch (t) {
                    case 2:
                        this.link.form && this.link.form.submit()
                }
            }
        },
        Z = {
            onStart: function() {
                var e = y("pagination", "mcont");
                w(e, function(e, t) {
                    S(o("div", {
                        className: "summary_loading",
                        innerHTML: '<i class="i_loading"></i>'
                    }), t.firstChild)
                })
            },
            onDone: function(e, n) {
                var i = window,
                    o = i.mail,
                    r = t("dialogs");
                r && (a(r, e), !this.no_scroll && x(), o.cacheDialogsPage()), o.save(n)
            }
        };
    window.Like = H, window.PhotoLike = j, window.PhotoTag = R, window.PhotoDelete = L, window.Poll = I, window.CopyHistory = q, window.ToggleMenu = F, window.Comment = O, window.ItemDelete = U, window.FeedIgnore = X, window.FeedIgnoreComments = Y, window.Wall = V, window.Photos = W, window.Audios = G, window.FixPost = Q, window.ProfileMove = $, window.Notify = K, window.Dialog = J, window.Dialogs = Z
}, function(e, t, n) {
    var i = n(2),
        a = o(i);

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    a["default"].onPostMessage(function(e) {
        ("waiterStart" === e || "3dsPage" === e) && document.activeElement && document.activeElement.blur()
    })
}, function(e, t, n) {
    var i = n(2),
        a = o(i);

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var r = window,
        s = r.setStyle,
        l = r.geByClass1,
        c = "pageMoneyTransfer__iframe";
    a["default"].onPostMessage(function(e, t) {
        "resizeFrame" === e && s(l(c), "height", t.height + 40)
    })
}, function(e, t, n) {
    var i = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    a = !1,
                    o = void 0;
                try {
                    for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0);
                } catch (l) {
                    a = !0, o = l
                } finally {
                    try {
                        !i && s["return"] && s["return"]()
                    } finally {
                        if (a) throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        a = n(2),
        o = r(a);

    function r(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var s = window,
        l = s.registeredEvents,
        c = s.removeEvent,
        u = ["touchstart", "touchend", "touchmove", "touchcancel"];
    o["default"].onIframeReady(function(e) {
        var t = e.is_api;
        t && l.forEach(function(e) {
            var t = i(e, 3),
                n = t[0],
                a = t[1],
                o = t[2];
            u.indexOf(a) >= 0 && c(n, a, o)
        })
    })
}, function(e, t, n) {
    var i = n(2),
        a = o(i);

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    a["default"].onPostMessage(function() {
        window.scrollTop(0)
    })
}, function(e, t, n) {
    var i = n(2),
        a = o(i);

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var r = window,
        s = r.nav,
        l = r.ajax,
        c = r.geByClass1,
        u = r.addClass,
        d = r.val,
        p = "pageMoneyTransfer",
        f = "pageMoneyTransfer_error",
        h = "pageMoneyTransfer_errorCookie",
        _ = "pageMoneyTransfer_success",
        v = "pageMoneyTransfer__errorText",
        m = "pageMoneyTransfer__iframe",
        g = 2e3,
        w = void 0,
        y = void 0,
        b = void 0;
    a["default"].onIframeReady(function(e) {
        C(), y = {
            checkUrl: e.check_transfer_url,
            onSuccessUrl: e.on_success_url
        }, S(), window.cur.destroy.push(T)
    }), a["default"].onPostMessage(function(e, t) {
        "paySuccess" === e ? u(_, c(p)) : "payError" === e ? (T(), u(f, c(p)), d(c(v), t.descr)) : "session_fail" === e && (T(), u(f, c(p)), u(h, c(p)))
    });
    var k = 0;
    a["default"].onAcceptCookieClick(function() {
        var e = window.open("https://top-fwz1.mail.ru/counter2?id=1;", "", "width=300; height=300");
        setTimeout(function() {
            e.close();
            var t = c(m),
                n = clone(t);
            removeClass(f, c(p)), replace(n, t);
            var i = n.contentWindow.document;
            i.open("text/html", "replace"), i.write(attr(t, "data-html")), i.close(), S()
        }, 400 + k), 750 > k && (k += 150)
    });

    function C() {
        var e = c(m);
        if (!e) return void setTimeout(C, 2e3);
        var t = e.contentWindow.document;
        t.open("text/html", "replace"), t.write(attr(e, "data-html")), t.close()
    }

    function S() {
        var e = y,
            t = e.checkUrl,
            n = e.onSuccessUrl;
        w = setInterval(function() {
            b = l.post(t, {}, {
                onDone: function(e) {
                    (1 === e || 3 === e) && (T(), "/" === n[0] ? s.go(n, null, {
                        replace: !0
                    }) : location.href = n)
                }
            })
        }, g)
    }

    function T() {
        w && (clearInterval(w), w = null), b && (b.abort(), b = null)
    }
}, function(e, t, n) {
    n(2), n(26), n(27), n(28), n(29), n(30)
}, function() {
    var e = window,
        t = e.onDOMReady,
        n = e.page,
        i = e.geByClass1,
        a = e.setStyle;
    t(o), n.onChange(o);

    function o() {
        var e = i("basisStory__media");
        if (e) {
            var t = window.innerHeight - 97;
            a(e, "height", t), setTimeout(function() {
                a(e, "max-height", 800)
            })
        }
    }
}, , function() {
    var e = window,
        t = e.preventEvent,
        n = e.stopEvent,
        i = e.gpeByClass,
        a = e.toggleClass,
        o = e.removeClass,
        r = e.addEvent,
        s = e.removeEvent,
        l = "dropdown",
        c = "dropdown_open",
        u = {
            _onTogglerClick: function(e, u) {
                t(e), n(e);
                var d = i(l, u);
                a(d, c), d.isFirstClick !== !1 && ! function() {
                    d.isFirstClick = !1;
                    var e = function() {
                        o(d, c)
                    };
                    r(window, "click", e), window.cur.destroy.push(function() {
                        s(window, "click", e), d.isFirstClick = !0
                    })
                }()
            }
        };
    window.Dropdown = u
}, function() {
    var e = window,
        t = e.langNumeric,
        n = e.show,
        i = e.hide,
        a = function() {
            var e = document.getElementsByClassName("gift_create_post_counter");

            function a(a) {
                var o = e[0];
                if (o) {
                    var r = a.value.length,
                        s = a.maxLength;
                    if (r > s) a.value = a.value.substr(0, s);
                    else if (r > s / 2) {
                        var l = Math.max(s - r, 0);
                        o.innerText = t(l, lang.text_N_symbols_remain), n(o)
                    } else i(o)
                }
            }
            return {
                counter: a
            }
        }();
    window.GiftsSendFormCounter = a
}, function() {
    var e = window,
        t = e.page,
        n = e.browser,
        i = e.nav,
        a = e.menu,
        o = e.zlayer,
        r = window,
        s = r.onDOMReady,
        l = r.onBodyScroll,
        c = r.onBodyResize,
        u = window,
        d = u.geByClass1,
        p = u.addClass,
        f = u.removeClass,
        h = (u.getW, u.getH),
        _ = "groupCover-vk_animationYes",
        v = "groupCover-vk_animationStep",
        m = function() {
            return {
                vk: d("vk"),
                basis: d("basis"),
                header: d("basis__header"),
                headerTitle: d("mh_header", d("basis__header")),
                cover: d("groupCover"),
                coverImage: d("groupCover__image"),
                coverDimmer: d("groupCover__dimmer")
            }
        },
        g = !1,
        w = void 0,
        y = void 0,
        b = void 0,
        k = void 0,
        C = void 0;
    s(function() {
        M() && (S(), t.onChange(S), o.onClose(function() {
            setTimeout(S, 0)
        }))
    });

    function S() {
        g || (w = m(), w.cover && (g = !0, p(w.vk, _), y = !n.chrome || Number(n.version.split(".")[0]) > 50, b = "fixed" === getStyle(w.header, "position"), k = h(w.header), C = h(w.cover), l(x), c(A), x(), window.cur.destroy.push(E), i.onBeforeGo(T)))
    }

    function T(e) {
        (e || a.opened()) && (f(w.vk, v), f(w.vk, _)), l("__clear", x), c("__clear", A), i.onBeforeGo.off(T), g = !1
    }

    function E() {
        T(!0)
    }

    function x() {
        var e = window.bodyNode.scrollTop;
        if (b)
            if (0 > e) setStyle(w.header, "top", -e), p(w.vk, v), setStyle(w.coverDimmer, "opacity", 0), setStyle(w.coverImage, "top", 0);
            else {
                var t = Math.min(1, e / (C - k));
                setStyle(w.header, "top", 0), setStyle(w.headerTitle, "display", "block"), .9 >= t ? (p(w.vk, v), y && setStyle(w.coverImage, "top", .5 * e), setStyle(w.coverDimmer, "opacity", t / .9), setStyle(w.headerTitle, "opacity", 0)) : (setStyle(w.headerTitle, "opacity", 1), f(w.vk, v))
            }
        else {
            var n = Math.min(1, e / C);
            1 > n ? (p(w.vk, v), setStyle(w.coverDimmer, "opacity", 0), y && setStyle(w.coverImage, "top", .5 * e), setStyle(w.headerTitle, "display", "none")) : f(w.vk, v)
        }
    }

    function A() {
        E(), S()
    }

    function M() {
        return n.chrome || n.safari && n.ios >= 9
    }
}, function(e, t, n) {
    {
        var i = n(1);
        a(i)
    }

    function a(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var o = "tabs_block",
        r = "mhb_back",
        s = "TopMenu_open",
        l = "tab_item_top",
        c = "TopMenu__switcher",
        u = "TopMenu__switcher_on",
        d = function() {
            return geByClass1(o)
        },
        p = function() {
            return geByClass1(r)
        },
        f = function() {
            return geByClass1(c)
        },
        h = function() {
            return geByClass1(l)
        },
        _ = !0,
        v = 0;
    window.TopMenu = {
        onHeaderClick: m
    };

    function m(e) {
        if (_) {
            var t = d();
            stopEvent(e), preventEvent(e), hasClass(s, t) ? removeClass(s, t) : ! function() {
                var e = p(),
                    n = h();
                addClass(s, t), geByClass1("_hfixed") && setStyle(t, "max-height", window.innerHeight - 70), append(t, e), addEvent(window, "touchstart mousedown", w), addEvent(n, "touchstart mousedown", g), addEvent(n, "click", function(e) {
                    stopEvent(e), preventEvent(e)
                }), cur.destroy.push(y), cur.destroy.push(function() {
                    return removeEvent(n, "touchstart mousedown", g)
                })
            }()
        }
    }

    function g(e) {
        stopEvent(e), preventEvent(e), v = 300, _ && (toggleClass(u, f()), "touchstart" === e.type && setTimeout(function() {
            nav.go(h(), null)
        }, 130))
    }

    function w(e) {
        gpeByClass(o, e.target) || gpeByClass(r, e.target) || (stopEvent(e), preventEvent(e), removeClass(s, d()), y())
    }

    function y() {
        removeEvent(window, "touchstart mousedown", w)
    }! function() {
        nav.onBeforeGo(function() {
            _ = !1, setTimeout(function() {
                removeClass(s, d()), v = 0, _ = !0
            }, v)
        })
    }()
}, function(e, t, n) {
    var i = n(39),
        a = o(i);

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    window.landingsSlider = a["default"]
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = window,
        a = i.isObject,
        o = i.extend,
        r = i.ge,
        s = i.geByClass1,
        l = i.val,
        c = i.addClass,
        u = i.addEvent,
        d = i.removeEvent,
        p = i.setStyle,
        f = i.cancelEvent,
        h = i.vkNow,
        _ = i.getW,
        v = function() {
            function e(t, i) {
                n(this, e), a(i) || (i = {
                    items: i
                }), this.opts = o({
                    slideClassName: "",
                    onStartChange: !1,
                    onChange: !1,
                    pointsWrap: !1,
                    slideContFn: !1,
                    shownSlidesNum: 1
                }, i), this.wrap = r(t), this.parseItems(i.items), this.init()
            }
            return e.prototype.parseItems = function(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n];
                    "string" == typeof i && (i = {
                        className: i
                    }), i = o({
                        html: "",
                        className: "",
                        pos: t.length
                    }, i), t.push(i)
                }
                this.items = t
            }, e.prototype.init = function() {
                if (c("landings_slider_wrap", this.wrap), u(this.wrap, "touchstart mousedown", this.touchStart.bind(this)), this.opts.pointsWrap) {
                    var e = "";
                    for (var t in this.items) e += '<div class="landings_slider_point"></div>';
                    c("landings_slider_points", this.opts.pointsWrap), l(this.opts.pointsWrap, e)
                }
                this.changeSlide(0)
            }, e.prototype.getTouchX = function(e) {
                return e.targetTouches && e.targetTouches.length > 0 ? e.targetTouches[0].pageX : e.pageX
            }, e.prototype.getTouchY = function(e) {
                return e.targetTouches && e.targetTouches.length > 0 ? e.touches[0].pageY : e.pageY
            }, e.prototype.touchStart = function(e) {
                var t = this.getTouchX(e),
                    n = this.getTouchY(e),
                    i = this,
                    a = !1,
                    o = !1,
                    r = h(),
                    s = 0,
                    l = this.getTouchX(e),
                    c = _(this.wrap);

                function v(e) {
                    if (!o) {
                        if (!a && Math.abs(i.getTouchY(e) - n) > 20) return void(o = !0);
                        i.lock && (a = !0, t = i.getTouchX(e), r = h(), i.changeSlide(i.newPos), f(e), i.lock = 0, clearTimeout(i.changeTimeout));
                        var u = i.getTouchX(e),
                            d = t - u;
                        (Math.abs(d) > 20 || a) && (f(e), a || (t = i.getTouchX(e), d = 0, a = !0), s = d, l = u, d = -(100 + d / c * 100), d -= 100 * i.opts.shownSlidesNum - 100, p(i.helper, "transform", "translateX(" + d + "%)"))
                    }
                }

                function m() {
                    d(bodyNode, "mousemove touchmove", v), d(bodyNode, "mouseup touchend touchcancel", m), i.lock || (i.lock = 1, Math.abs(s) > 50 ? ! function() {
                        var e = 0 > s ? "prev" : "next",
                            n = Math.abs(l - t) / (r / h());
                        n += .2 * n;
                        var a = 100 * i.opts.shownSlidesNum;
                        a = "next" == e ? 100 + a : a - 100, p(i.helper, {
                            transition: "transform " + n + "ms",
                            transform: "translateX(-" + a + "%)"
                        });
                        var o = i.items.length - 1,
                            c = "prev" == e ? i.pos - 1 : i.pos + 1;
                        0 > c ? c = o : c > o && (c = 0), i.opts.onStartChange && i.opts.onStartChange(c, e), i.newPos = c, i.changeTimeout = setTimeout(function() {
                            i.lock = 0, i.changeSlide(c)
                        }, n)
                    }() : (p(i.helper, {
                        transition: "transform 200ms",
                        transform: "translateX(-" + 100 * i.opts.shownSlidesNum + "%)"
                    }), setTimeout(function() {
                        i.lock = 0
                    }, 200)))
                }
                d(bodyNode, "mousemove touchmove", v), d(bodyNode, "mouseup touchend touchcancel", m), u(bodyNode, "mousemove touchmove", v), u(bodyNode, "mouseup touchend touchcancel", m)
            }, e.prototype.makeItem = function(e) {
                var t = this.pos == e.pos ? "_active_slide " : "",
                    n = this.opts.slideContFn ? this.opts.slideContFn(e) : e.html;
                return '<div class="landings_slider_item ' + t + e.className + " " + this.opts.slideClassName + '">' + n + "</div>"
            }, e.prototype.getSlidesHtml = function(e) {
                for (var t = this.opts.shownSlidesNum, n = this.items.length - 1, i = "", a = e, o = 0; t > o; o++) a--, 0 > a && (a = n), i = this.makeItem(this.items[a]) + i;
                i += this.makeItem(this.items[e]), a = e;
                for (var r = 0; t > r; r++) a++, a > n && (a = 0), i += this.makeItem(this.items[a]);
                return i
            }, e.prototype.changeSlide = function(e) {
                if (this.pos = Math.max(0, Math.min(e, this.items.length - 1)), this.replaceHtml(this.getSlidesHtml(this.pos)), this.opts.onChange && this.opts.onChange(this.pos), this.opts.pointsWrap) {
                    var t = r(this.opts.pointsWrap);
                    removeClass("selected", s("selected", t)), c("selected", t.children[this.pos])
                }
            }, e.prototype.replaceHtml = function(e) {
                l(this.wrap, '<div class="landings_slider_helper">' + e + "</div>"), this.helper = s("landings_slider_helper", this.wrap), p(this.helper, "transform", "translateX(-" + 100 * this.opts.shownSlidesNum + "%)")
            }, e.prototype.toSlide = function(e, t) {
                this.lock = 1;
                var n = this.makeItem(this.items[this.pos]),
                    i = this.makeItem(this.items[e]);
                e > this.pos ? n += i : n = i + n, this.replaceHtml(n), t || (t = e > this.pos ? "next" : "prev");
                var a = "next" == t ? 0 : -100;
                p(this.helper, "transform", "translateX(" + a + "%)"), this.opts.onStartChange && this.opts.onStartChange(e, t);
                var o = this;
                clearTimeout(this.toSlideTimer), this.toSlideTimer = setTimeout(function() {
                    a = "next" == t ? -100 : 0, p(o.helper, {
                        transition: "transform 200ms",
                        transform: "translateX(" + a + "%)"
                    }), o.toSlideTimer = setTimeout(function() {
                        o.lock = 0, o.changeSlide(e)
                    }, 200)
                }, 10)
            }, e
        }();
    t["default"] = v
}, function() {
    var e = window,
        t = e.attr,
        n = e.removeClass,
        i = e.addClass,
        a = e.hasClass,
        o = e.toggleClass,
        r = e.ge,
        s = e.val,
        l = e.geByClass1,
        c = e.langNumeric,
        u = e.each,
        d = e.lockButton,
        p = window,
        f = p.browser,
        h = window,
        _ = h.ajax,
        v = window,
        m = v.nav,
        g = window,
        w = g.page,
        y = window,
        b = y.mail,
        k = window,
        C = k.im,
        S = function() {
            var e, p, h = [],
                v = !1,
                g = !1,
                y = {};

            function k(e) {
                return function() {
                    return v ? void 0 : e.apply(this, arguments)
                }
            }

            function S(e) {
                return "A" === e.tagName
            }

            function E(e) {
                var o = t(e, "data-id"),
                    r = h.indexOf(o);
                r >= 0 ? (h.splice(r, 1), n("mi_selected", e), delete y[o]) : (h.push(o), i("mi_selected", e), y[o] = a("msg_item_important", e))
            }

            function x() {
                g = h.length > 0, o("vk_messages_actions_visible", r("vk"), g)
            }

            function A() {
                var e = window,
                    t = e.lang,
                    n = Math.max(h.length, 1);
                s(l("messagesActions__row_counter"), c(n, t.mobile_mail_messages_selected).replace("{count}", n))
            }

            function M() {
                g && (y = {}, u(h, function(e, t) {
                    n("mi_selected", l("_msg" + t))
                }), v = !1, h = [], x())
            }

            function P() {
                return window.getSelection ? window.getSelection().toString().length > 0 : !1
            }

            function D(e) {
                var t = e.target,
                    n = e.currentTarget,
                    i = S(t) || S(t.parentNode);
                i && M(), f.uc_mini || P() || i || setTimeout(function() {
                    P() || (E(n), x(), A())
                }, 40)
            }

            function N(e, t, n) {
                var i = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
                v = !0, d(e), C.off(), _.click("/mail", {}, {
                    url_params: {
                        act: i ? "spam" : "delete",
                        peer: t,
                        hash: n,
                        ids: h.join(","),
                        community: T()
                    }
                })
            }

            function z(e, t, n) {
                N(e, t, n, !0)
            }

            function B(e, t, n) {
                v = !0, d(e), _.click("/attachments", {}, {
                    url_params: {
                        act: "add",
                        target: "mail" + t,
                        hash: n,
                        object: "mail" + h.join(";"),
                        community: T()
                    }
                })
            }

            function H(t, n) {
                v = !0, d(t), e = "mail" + h.join(";"), p = n;
                var i = T(),
                    a = i ? "?community=" + i : "";
                m.go(location.pathname + a, null, {
                    ignore_cur_process: !0
                })
            }

            function j() {
                return Boolean(e)
            }

            function R(t) {
                _.click("/attachments", {}, {
                    url_params: {
                        act: "add",
                        target: "mail" + t,
                        hash: p,
                        object: e,
                        community: T()
                    }
                }), e = ""
            }

            function L() {
                r("dialogs") && j() ? i("vk_dialogs_forwarding", r("vk")) : e = "", M()
            }

            function I(e) {
                var t, n = h.length,
                    i = 0;
                for (t = 0; n > t; t++)
                    if (!y[h[t]]) {
                        i = 1;
                        break
                    }
                for (t = 0; n > t; t++) o("msg_item_important", l("_msg" + h[t]), 1 === i);
                _.post("/mail", {
                    _ajax: 1,
                    act: "mark_important",
                    ids: h,
                    val: i,
                    hash: e
                }), M()
            }
            return w.onChange(L), b.onShowDialogsPageFromCache(L), b.onShowDialogFromCache(L), b.onMessagesRepainted(function() {
                u(h, function(e, t) {
                    i("mi_selected", l("_msg" + t))
                })
            }), {
                onMessageClick: k(D),
                remove: k(N),
                reply: k(B),
                forward: k(H),
                spam: k(z),
                close: k(M),
                toggleImportant: k(I),
                hasFwdMessages: j,
                attachFwdMessages: R
            }
        }();

    function T() {
        return m.getQuery("community")
    }
    window.MessagesActions = S
}, function() {
    var e = window,
        t = e.onDOMReady,
        n = e.lsCheck,
        i = e.geByClass1,
        a = e.qs2obj,
        o = e.geByTag1,
        r = e.gpeByTag,
        s = e.addEvent,
        l = e.onBodyResize,
        c = e.removeEvent,
        u = e.hide,
        d = e.each,
        p = e.show,
        f = e.vkNow,
        h = e.gpeByClass,
        _ = e.attr,
        v = e.val,
        m = e.escapeRE,
        g = e.hasClass,
        w = e.lsGet,
        y = e.isEmpty,
        b = e.lsSet,
        k = e.geByClass,
        C = e.setStyle,
        S = window,
        T = S.ajax,
        E = window,
        x = (E.page, window),
        A = x.post,
        M = window,
        P = M.Scroller;
    window.StickersHints = function() {
        var e, S, E, x, M, D, N, z, B = 864e5,
            H = 300,
            j = 30,
            R = 64,
            L = 8,
            I = 4,
            q = !0,
            F = 0,
            O = {
                D83DDE0A: [0, ":-)"],
                D83DDE03: [1, ":-D"],
                D83DDE09: [2, ";-)"],
                D83DDE06: [3, "xD"],
                D83DDE1C: [4, ";-P"],
                D83DDE0B: [5, ":-p"],
                D83DDE0D: [6, "8-)"],
                D83DDE0E: [7, "B-)"],
                D83DDE12: [8, ":-("],
                D83DDE0F: [9, ";-]"],
                D83DDE14: [10, "3("],
                D83DDE22: [11, ":'("],
                D83DDE2D: [12, ":_("],
                D83DDE29: [13, ":(("],
                D83DDE28: [14, ":o"],
                D83DDE10: [15, ":|"],
                D83DDE0C: [16, "3-)"],
                D83DDE20: [17, ">("],
                D83DDE21: [18, ">(("],
                D83DDE07: [19, "O:)"],
                D83DDE30: [20, ";o"],
                D83DDE33: [21, "8|"],
                D83DDE32: [22, "8o"],
                D83DDE37: [23, ":X"],
                D83DDE1A: [24, ":-*"],
                D83DDE08: [25, "}:)"],
                2764: [26, "<3"],
                D83DDC4D: [27, ":like:"],
                D83DDC4E: [28, ":dislike:"],
                "261D": [29, ":up:"],
                "270C": [30, ":v:"],
                D83DDC4C: [31, ":ok:"]
            };
        t(function() {
            n() && !i("vk_stickers_hints_support_no") && (A.onStickersInit(function() {
                U()
            }), i("stickersHints") && U())
        }), T.onRedirect(function(e) {
            a(e.split("?")[1]).invalidate_stickers_hints && V()
        }), A.onReplyClick(function(e) {
            var t = window,
                n = t.cur;
            z = e, setTimeout(X, 10), n.destroy.push(function() {
                z = ""
            })
        });

        function U() {
            var t = window,
                n = t.cur;
            x = o("textarea", r("form", i("cp_sticker_btn"))), x && ! function() {
                var t = function() {
                    var t = x.value.length;
                    e = t - F > 1, F = t, X(), q && (Y(), q = !1)
                };
                D = i("stickersHints"), M = i("stickersHints__content"), s(x, "focus", X), s(x, "input", t), s(document, "click", W), l($), l(ct), n.destroy.push(function() {
                    D = null, M = null, x = null, c(x, "focus", X), c(x, "input", t), c(document, "click", W), l("__clear", $), l("__clear", ct), E && E.destroy(), F = 0
                })
            }()
        }

        function X() {
            if (x) {
                S && clearTimeout(S);
                var e = K(x.value);
                J(function(t) {
                    var n = e && t[e];
                    n ? S = setTimeout(function() {
                        var t = n.userStickers || [],
                            i = n.promotedStickers || [];
                        if (t.length > 0 || i.length > 0) {
                            var a = [];
                            d(t, function(t, n) {
                                a.push(Z({
                                    stickerId: n,
                                    query: e,
                                    isPromoted: !1
                                }))
                            }), d(i, function(t, n) {
                                a.push(Z({
                                    stickerId: n,
                                    query: e,
                                    isPromoted: !0
                                }))
                            }), M.innerHTML = a.join(""), p(D), $(), ct(), E = new P(D), E.init()
                        }
                    }, H) : (E && E.destroy(), u(D))
                })
            }
        }

        function Y() {
            ot() && f() - st() > B * (2 + Math.random()) && V(), et(function(e) {
                e *= 1e3, ot() && e > st() && V()
            })
        }

        function V() {
            tt(function(e) {
                N = e, lt(e), X()
            })
        }

        function W(e) {
            var t = e.target;
            t === x || h(t, "stickersHints") || u(D)
        }

        function G(e, t, n) {
            var a = h("sticker_item", e),
                o = i("th_img", a);
            return _(a, "style", ""), _(e, "style", ""), _(o, "style", ""), u(D), x.value = "", A.sendSticker(e, t, !0, n)
        }

        function Q(e) {
            setTimeout(function() {
                nt(v(o("input", e.parentElement)) ? 1 : 0, function() {
                    V()
                })
            }, 0)
        }

        function $() {
            _(M, "style", "")
        }

        function K(t) {
            return t.length > j ? "" : (d(O, function(e, n) {
                var i = new RegExp("(\\s|^)(" + m(n[1]) + (")" == n[1][n[1].length - 1] ? "+" : "") + ")([\\s\\.,]|$)", "g");
                t = t.replace(i, function(t, n, i, a) {
                    return (n || "") + at(e) + (a || "")
                })
            }), 0 === t.indexOf(z) && (t = t.replace(z, "")), t = t.toLowerCase().replace(/^(\s+)|([\.!\?]+)$/g, "").replace("ё", "е"), e && (t = t.replace(/\s+$/, "")), t)
        }

        function J(e) {
            N ? e(N) : ot() ? (N = rt(), e(N)) : tt(function(t) {
                N = t, lt(t), e(t)
            })
        }

        function Z(e) {
            var t = e.isPromoted,
                n = t ? "" : "onclick=\"return StickersHints.onStickerThumbClick(this, {{stickerId}}, '{{stickerReferrer}}');\"",
                a = i("sticker_thumb", i("stickers_list")),
                o = t ? 'href="/attachments?' + ["act=stickers_store", "target=" + _(D, "data-target"), "sticker_id={{stickerId}}", "from=inline", "sticker_referrer={{stickerReferrer}}"].join("&") + '"' : 'href="' + (_(a, "href") || _(a, "data-href")).replace(/media=[\w\d]+/, "media=sticker{{stickerId}}") + '"';
            return ('<div class="sticker_item sticker{{stickerId}} {{promotedClass}}">          <a class="sticker_thumb thumb_item" ' + o + " " + n + '>            <img class="th_img" src="/images/stickers/{{stickerId}}/{{stickerSize}}.png" />          </a>        </div>').replace(/{{stickerId}}/g, e.stickerId).replace("{{promotedClass}}", t ? "sticker_item_promoted" : "").replace("{{stickerReferrer}}", "suggestion_" + e.query).replace("{{stickerSize}}", g("x2", window.bodyNode) ? 256 : 128)
        }

        function et(e) {
            T.post("/attachments", {
                _ajax: 1,
                act: "stickers_hints_change_date"
            }, {
                onDone: e
            })
        }

        function tt(e) {
            T.post("/attachments", {
                _ajax: 1,
                act: "stickers_hints_keywords"
            }, {
                onDone: function(t) {
                    e(it(t))
                }
            })
        }

        function nt(e, t) {
            T.post("/attachments", {
                _ajax: 1,
                act: "stickers_hints_enabled",
                value: e
            }, {
                onDone: t
            })
        }

        function it(e) {
            var t = {};
            return d(e, function(e, n) {
                var i = n.user_stickers,
                    a = n.promoted_stickers;
                d(n.words, function(e, n) {
                    t[n] = {
                        userStickers: i,
                        promotedStickers: a
                    }
                })
            }), t
        }

        function at(e) {
            for (var t = Math.round(e.length / 4), n = "", i = 0; t--;) n += String.fromCharCode(parseInt(e.substr(i, 4), 16)), i += 4;
            return n
        }

        function ot() {
            return Boolean(w("stickers_keywords"))
        }

        function rt() {
            return w("stickers_keywords").keywords
        }

        function st() {
            return w("stickers_keywords").time
        }

        function lt(e) {
            !e || y(e) ? b("stickers_keywords") : b("stickers_keywords", {
                keywords: e,
                time: f()
            })
        }

        function ct() {
            var e = i("stickersHints__callout");
            if (e) {
                var t = e.offsetWidth - I,
                    n = t / R,
                    a = n % 1;
                .3 > a ? n = Math.floor(n) - .5 : a > .7 && (n = Math.ceil(n) - .5);
                var o = Math.round(t / n - L);
                d(k("sticker_item", e), function(e, t) {
                    var n = i("sticker_thumb", t),
                        a = i("th_img", t);
                    C(t, "width", o), C(t, "height", o), C(n, "width", o), C(n, "height", o), C(a, "height", o)
                })
            }
        }
        return {
            onStickerThumbClick: G,
            onCheckboxLabelClick: Q
        }
    }()
}, function(e, t, n) {
    var i = n(3),
        a = o(i);

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var r = window,
        s = r.gpeByClass,
        l = r.setStyle,
        c = "msg_item",
        u = "-webkit-tap-highlight-color";
    a["default"]._onMouseDown(function(e) {
        for (var t = e;;)
            if (t = s(c, t), !t || t && attr(t, "data-id")) break;
        t && (d(t), setTimeout(function() {
            return p(t)
        }, 400))
    });

    function d(e) {
        l(e, u, "transparent")
    }

    function p(e) {
        l(e, u, "initial")
    }
}, function(e, t, n) {
    var i = n(3),
        a = o(i);

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var r = window,
        s = r.preventEvent,
        l = r.cancelEvent,
        c = r.lockButton,
        u = r.attr,
        d = r.ajax,
        p = 1500,
        f = void 0,
        h = void 0;
    a["default"]._onCancelClick(function(e, t) {
        s(e), l(e), c(t), _({
            cancelUrl: u(t, "href")
        }), window.cur.destroy.push(v)
    });

    function _(e) {
        var t = e.cancelUrl;
        f = setInterval(function() {
            h = d.post(t, {
                _ajax: 1
            }, {
                onDone: function(e) {
                    if (1 === e) {
                        var t = window.scrollTop();
                        nav.go(location.pathname + location.search, null, {
                            replace: !0
                        }), cur.destroy.push(function() {
                            window.scrollTop(t)
                        }), v()
                    }
                }
            })
        }, p)
    }

    function v() {
        f && (clearInterval(f), f = null), h && (h.abort(), h = null)
    }
}, function(e, t, n) {
    n(3), n(42), n(43)
}, function(e, t, n) {
    var i = n(4),
        a = o(i);

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var r = window,
        s = r.geByClass1,
        l = r.gpeByClass,
        c = r.preventEvent,
        u = "sendMoneyForm",
        d = "sendMoneyForm_error_min",
        p = "sendMoneyForm_error_max",
        f = "sendMoneyForm__input",
        h = 100,
        _ = 75e3;
    a["default"]._onAmountKeyDown(function(e, t) {
        setTimeout(function() {
            var e = parseInt(t.value, 10) || "",
                n = Number(e),
                i = l(u, t);
            t.value = e, n > _ ? attr(i, "class", u + " " + p) : attr(i, "class", u)
        })
    }), a["default"]._onSubmit(function(e, t) {
        var n = s(f, t),
            i = Number(n.value),
            a = n.value,
            o = void 0;
        h > i || !a || a !== i.toString() ? (attr(t, "class", u + " " + d), o = !0) : i > _ && (o = !0), o && (c(e), stopEvent(e))
    })
}, function(e, t, n) {
    var i = n(4),
        a = o(i);
    n(45);

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    window.SendMoneyForm = a["default"]
}, function() {
    var e;

    function t() {
        e = {};
        for (var t = document.cookie.split(";"), n = /^[\s]*([^\s]+?)$/i, i = 0, a = t.length; a > i; i++) {
            var o = t[i].split("=");
            2 == o.length && (e[o[0].match(n)[1]] = unescape(o[1].match(n) ? o[1].match(n)[1] : ""))
        }
    }

    function n(n) {
        return t(), e[n]
    }

    function i(e, t, n, i) {
        var a = window.locDomain,
            o = "";
        if (n) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), o = "; expires=" + r.toGMTString()
        }
        document.cookie = [e, "=", escape(t), o, "; path=/", a ? "; domain=." + a : "", i && "https:" == window.locProtocol ? "; secure" : ""].join("")
    }

    function a(e) {
        i(e, null, -1)
    }
    window.getCookie = n, window.setCookie = i, window.clearCookie = a
}, function() {
    var e, t = window,
        n = t.qs2obj,
        i = t.preventEvent,
        a = t.im,
        o = t.nav,
        r = t.toggle,
        s = t.attr,
        l = t.ge,
        c = t.val,
        u = t.geByClass1,
        d = t.removeClass,
        p = t.show,
        f = t.hide,
        h = t.qsearch,
        _ = t.browser,
        v = t.toggleClass,
        m = t.intval,
        g = t.mail;

    function w() {
        return n(o.params)
    }

    function y(e) {
        return "dialogs" === e.tab || !e.q
    }

    function b(e) {
        var t = o.getQuery("community");
        return t ? (e ? "?" : "&") + "community=" + t : ""
    }
    a.clearSearchInput = function(e) {
        if (i(e), y(w())) {
            var t = l("ma_search_field");
            c(t, ""), a.onFilterKeyDown(t)
        } else o.go("/mail" + b(!0))
    }, a.onFilterKeyDown = function(t) {
        setTimeout(function() {
            var n = window,
                i = n.lang,
                a = encodeURIComponent(t.value),
                h = w();
            if (r(u("mail_search_clear_button"), a), s(u("tab_dialogs_search"), "href", a ? "/mail?tab=dialogs&q=" + a + b() : "/mail" + b(!0)), s(u("tab_messages_search"), "href", "/mail?q=" + a + b()), y(h)) {
                var _, g = l("mail_tabs"),
                    k = l("ma_search_items"),
                    C = l("dialogs"),
                    S = h.offset;
                if (d("mail_show_filtered", u("mail")), e && clearTimeout(e), v("dialogs_filter_without_important", l("dialogs_filter"), a || 0 === m(c(u("dialogs_filter_button_important")))), a) p(g), p(k), f(C), e = setTimeout(function() {
                    _ = "/mail?tab=dialogs&q=" + a + (S ? "&offset=" + S : "") + b(), "/mail" !== o.path || w().act || o.go(_, null, {
                        push_only: !0
                    })
                }, 200);
                else {
                    if (f(g), f(k), p(C), !o.getQuery("community")) {
                        var T = u("mhb_back"),
                            E = u("mh_header");
                        c(E, i.mobile_mail_head_title), d("mhi_back", E), T.outerHTML = T.outerHTML.replace("<a", "<div").replace("</a>", "</div>")
                    }
                    _ = "/mail" + (S ? "?offset=" + S : "") + b(S ? !1 : !0), o.go(_, null, {
                        push_only: !0
                    })
                }
            }
        }, 40)
    };

    function k() {
        var e = window,
            t = e.lang;
        h.init({
            init_once: !0,
            action: "/mail?act=write&fast=1",
            container: l("ma_search_items"),
            field: l("ma_search_field"),
            btn: l("ma_search_btn"),
            top_items: [],
            _cache: {},
            item_tpl: function(e, t, n, i, a) {
                return this.id > 2e9 || -1 === this.id ? '<a href="' + (e || "") + '" class="simple_item' + (-1 == this.id ? " simple_item_create" : "") + '">' + (t || "") + '<div class="si_body"><span class="si_owner">' + this.highlight(n || "") + "</span>" + (i || "") + (a ? '<div class="si_slabel">' + a + "</div>" : "") + "</div></a>" : '<a href="' + (e || "") + '" class="inline_item"><div class="ii_body">' + (t || "") + '<span class="ii_owner">' + this.highlight(n || "") + "</span>" + (i || "") + "</div></a>"
            },
            null_tpl: function() {
                return '<div class="service_msg_box"><div class="service_msg service_msg_null">' + t.mobile_mail_no_peers + "</div></div>"
            },
            need_invalid_keys: _.desktop,
            onLoaded: function(e) {
                for (var t in e) g.saveDialog(e[t][e[t].length - 1], t)
            }
        })
    }
    g.onShowWritePageFromCache(k), g.onShowDialogsPageFromCache(k)
}, , function(e, t, n) {
    n(66), n(47), n(23), n(51), n(20), n(55), n(58), n(64), n(60), n(57), n(25), n(59), n(63), n(65), n(56), n(54), n(18), n(53), n(52), n(24), n(17), n(67), n(61), n(21), n(22), n(62), n(16), n(15), n(19), n(48), n(34), n(36), n(35), n(37), n(31), n(32), n(44), n(46), n(40), n(41), n(38), n(14); {
        var i = window,
            a = (i.setDocumentDomain, i.isUndefined, i.isFunction, i.isArray, i.isObject, i.isEmpty, i.escapeRE, i.htsc, i.escapeAttr, i.unescapeAttr, i.replaceEntities, i.escapeStr, i.stripTags, i.srand, i.utf2win, i.isHttpHref, i.vkNow, i.bind, i.intval, i.floatval, i.qs2obj, i.obj2qs, i.parseJSON, i.lsCheck),
            o = i.lsSet,
            r = i.lsGet,
            s = (i.ssCheck, i.ssSet, i.ssGet, i.getValues, i.len, i.realSubstr, i.formatNum, i.each, i.copy, i.addEvent),
            l = (i.removeEvent, i.preventEvent, i.stopEvent, i.cancelEvent),
            c = (i.checkEvent, i.onCtrlEnter, i.submitBtn, i.createIframe, i.winToUtf, i.shortCurrency, i.checkNav),
            u = (i.checkElementNav, i.checkTouchHover),
            d = (i.parseCyr, i.parseLat, i.parseRusKeys, i.parseLatKeys, i.scrollLeft, i.scrollTop),
            p = (i.se, i.onBodyScrollForce, i.sgFix),
            f = (i.hideUnvisibleItems, i.initObjectsHideByScroll, i.checkPostsSeen, i.initPostsStats, i.initAutoScroll, i.autoScroll, i.scrollToEl, i.scrollToHash, i.lockButton, i.unlockButton, i.extend, i.ge),
            h = (i.geByClass, i.geByClass1),
            _ = i.gpeByClass,
            v = (i.geByTag, i.geByTag1, i.gpeByTag, i.geBySel, i.geBySel1, i.append),
            m = (i.before, i.after, i.replace, i.remove),
            g = (i.clone, i.reflow, i.tag, i.outer, i.show, i.hide, i.isVisible, i.toggle, i.ce),
            w = (i.elfocus, i.elblur, i.val, i.attr),
            y = (i.cssToJs, i.getCssPropertyName, i.cssValue, i.getStyle, i.setStyle, i.hasClass),
            b = i.addClass,
            k = (i.removeClass, i.toggleClass, i.replaceClass, i.switchClass, i.getXY, i.getX, i.getY, i.getW, i.getH, i.getCw, i.getCh),
            C = (i.evalJs, i.alLoadingFix, i.getHref, i.ajx2q, i.indexOf, i.langNumeric, i.setNotify, i.getNotify, i.canUploadFile, i.uploadFile, i.readFile, i.onBodyScroll),
            S = (i.onBodyResize, i.onDOMReady),
            T = (i.htmlNode, i.bodyNode, i.clog);
        i.cdf
    }
    s(window, "scroll touchmove", function() {
        C(!0)
    }), s(window, "error", function(e) {
        T(e.lineno + ": " + e.message)
    }), window.cur = {
        destroy: []
    }, window.lang = {};
    var E = window,
        x = (E.getCookie, E.setCookie, E.clearCookie, window),
        A = (x._ua, x.browser),
        M = (x.mobPlatforms, x.isTouch),
        P = (x.has3d, window),
        D = (P.geo, window),
        N = D.ajax,
        z = window,
        B = (z.mediaUpload, window),
        H = (B.ownerPhotoUpload, window),
        j = H.thover;
    s(document, "touchmove touchcancel", j.cancel), s(document, "touchend", j.end);

    function R() {
        if ((A.safari_mobile || A.android || A.opera_mobile && !A.opera_mini) && !y("body_fullscreen", window.bodyNode)) {
            var e = (k(), d());
            window.bodyNode.style.overflow = "hidden", window.bodyNode.style.minHeight = "5000px", d(10);
            var t = k() + (A.android ? 1 : 0);
            d(e), window.bodyNode.style.minHeight = t + "px", window.bodyNode.style.overflow = "", window.realClientHeight = t
        }
    }

    function L() {
        if (r("custom_opts")) return b("_copts", "vk_wrap");
        var e = g("div", {
            innerHTML: '<input id="copts_test_radio" type="radio" checked="checked"><div id="copts_test_label"></div>'
        });
        v(e, "vk_utils");
        var t = f("copts_test_label");
        t && Math.abs(t.offsetWidth - 5) < 1 && (b("_copts", "vk_wrap"), o("custom_opts", 1)), m(e)
    }
    var I = window,
        q = I.page;
    N._init(), N.enabled = N._req ? !0 : !1, N.enabled && (S(function() {
        m("app_go_frame"), N.prepare_nav(), N.prepare_click(), Q && Q.init(), st && st.initAudio(), b("_js", "vk_wrap")
    }), q.clear()), s(window, "orientationchange", R), s(document, "touchstart", function(e) {
        var t = u(e.target);
        t && j.start.call(t, e)
    }), s(document, "click", function(e) {
        var t = window,
            n = t.al;
        if (window.al && n.ver) {
            var i = _("al_after", e.target);
            if (i) {
                var a = w(i, "data-target"),
                    o = a ? h(a, i) : !1;
                if (o && !O.go_after(o, e) || !O.go_after(i, e)) return
            }
            var r = c(e.target);
            r && (O.go(r, e) || l(e))
        }
    }), s(document, M ? "touchstart" : "mousedown", function(e) {
        W.closeByTap(e)
    }), S(R), S(L), p(); {
        var F = window,
            O = F.nav,
            U = window,
            X = (U.Like, U.PhotoLike, U.PhotoTag, U.PhotoDelete, U.Poll, U.CopyHistory, U.ToggleMenu, U.Comment, U.ItemDelete, U.FeedIgnore, U.Wall, U.Photos, U.Audios, U.FixPost, U.ProfileMove, U.Notify, U.Dialog, U.Dialogs, window),
            Y = (X.pStats, window),
            V = (Y.post, window),
            W = V.tooltip,
            G = window,
            Q = G.menu,
            $ = window,
            K = ($.mail, window),
            J = (K.Scroller, window),
            Z = (J.im, window),
            et = (Z.geoloc, window),
            tt = (et.checkin, window),
            nt = (tt.qsearch, tt.QuickSearch, window),
            it = nt.zlayer,
            at = window,
            ot = (at.photo, window),
            rt = (ot.audio, window),
            st = rt.audioplayer,
            lt = window,
            ct = (lt.photoview, window),
            ut = (ct.Informer, window),
            dt = (ut.FeedNotifications, window),
            pt = (dt.Tabs, window);
        pt.stickersHints
    }
    S(function() {
        var e = window,
            t = e.vk;
        !t.id && a() && localStorage.clear()
    }), window.fixHeight = R, window.optionsTest = L, it.isReady = !0
}, function() {
    var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        },
        t = window,
        n = t.extend,
        i = {
            _def_opts: {
                enableHighAccuracy: !0,
                maximumAge: 3e5,
                timeout: 6e4
            },
            _provider: null,
            initW3C: function() {
                i._provider = navigator.geolocation, i.getCurrentPosition = function(e, t, a) {
                    i._provider.getCurrentPosition(function(t) {
                        e("undefined" != typeof t.latitude ? n(t, {
                            coords: n(t.coords || {}, {
                                latitude: t.latitude,
                                longitude: t.longitude
                            })
                        }) : t)
                    }, t, a)
                }
            },
            initGears: function() {
                var e = window,
                    t = e.google;
                i._provider = t.gears.factory.create("beta.geolocation")
            },
            initSymbian: function() {
                var e = window,
                    t = e.device;
                i._provider = t.getServiceObject("Service.Location", "ILocation"), i.getCurrentPosition = function(e, t) {
                    i._provider.ILocation.GetLocation({
                        LocationInformationClass: "BasicLocationInformation"
                    }, function(n, i, a) {
                        4 == i ? t({
                            code: 2,
                            message: "Position unavailable"
                        }) : e({
                            timestamp: null,
                            coords: {
                                latitude: a.ReturnValue.Latitude,
                                longitude: a.ReturnValue.Longitude,
                                altitude: a.ReturnValue.Altitude,
                                heading: a.ReturnValue.Heading
                            }
                        })
                    })
                }
            },
            initPalm: function() {
                i.getCurrentPosition = function(e, t, n) {
                    var i = {};
                    n && (n.enableHighAccuracy && 1 == n.enableHighAccuracy && (i.accuracy = 1), n.maximumAge && (i.maximumAge = n.maximumAge), n.responseTime && (n.responseTime < 5 ? i.responseTime = 1 : n.responseTime < 20 ? i.responseTime = 2 : i.timeout = 3));
                    var a = window,
                        o = a.Mojo;
                    new o.Service.Request("palm://com.palm.location", {
                        method: "getCurrentPosition",
                        parameters: i,
                        onSuccess: function(t) {
                            e({
                                timestamp: t.timestamp,
                                coords: {
                                    latitude: t.latitude,
                                    longitude: t.longitude,
                                    heading: t.heading
                                }
                            })
                        },
                        onFailure: function(e) {
                            t(1 == e.errorCode ? {
                                code: 3,
                                message: "Timeout"
                            } : 2 == e.errorCode ? {
                                code: 2,
                                message: "Position unavailable"
                            } : {
                                code: 0,
                                message: "Unknown Error: webOS-code" + e.errorCode
                            })
                        }
                    })
                }
            },
            getCurrentPosition: function(e, t, a) {
                i._provider.getCurrentPosition(e, t, n(i._def_opts, a || {}))
            },
            init: function() {
                var t = window,
                    n = t.google,
                    a = t.device,
                    o = t.Mojo;
                try {
                    var r = "undefined";
                    if (e(navigator.geolocation) !== r) i.initW3C();
                    else if (e(window.google) !== r && e(n.gears) !== r) i.initGears();
                    else if (("undefined" == typeof a ? "undefined" : e(a)) !== r && e(a.getServiceObject) !== r) i.initSymbian();
                    else {
                        if (("undefined" == typeof o ? "undefined" : e(o)) === r || "Mojo.Service.Request" == typeof o.Service.Request) return !1;
                        i.initPalm()
                    }
                } catch (s) {
                    return !1
                }
                return !0
            }
        };
    window.geo = i
}, function() {
    var e = window,
        t = e.hide,
        n = e.ge,
        i = e.ce,
        a = e.geByClass1,
        o = e.val,
        r = e.show,
        s = e.remove,
        l = e.addClass,
        c = e.removeClass,
        u = window,
        d = u.geo,
        p = window,
        f = p.ajax,
        h = function() {
            var e = null,
                u = !1;

            function p(e) {
                f.post("/places.php", {
                    _ajax: 1,
                    act: "map_label",
                    lat: e.latitude,
                    lng: e.longitude
                }, {
                    onDone: function(n) {
                        t("geo_waiting"), _(e, n)
                    },
                    onFail: g
                })
            }

            function _(e, t) {
                var s = n("medias_map"),
                    l = n("attached_wrap");
                s || (s = i("div", {
                    id: "medias_map",
                    className: "pi_medias"
                }), l.appendChild(s));
                var c = e.latitude,
                    u = e.longitude,
                    d = (window.devicePixelRatio >= 1.5 ? 2 : 1, a("medias_map", s)),
                    p = t ? '<div class="medias_map_close"><i class="i_close">&nbsp;</i></div><div class="medias_map_label">' + t + "</div>" : "",
                    f = "",
                    h = c + "_" + u + "_0",
                    _ = '<input type="hidden" name="map" value="' + h + '">';
                if (d) o(d, p + f + _);
                else {
                    var v = '<div class="meias_row medias_map" onclick="geoloc.remove();">' + p + f + _ + "</div>";
                    o(s, v)
                }
                r(s)
            }

            function v() {
                e = null, s("medias_map")
            }

            function m(t) {
                t && t.coords && (e = {
                    latitude: +t.coords.latitude || 0,
                    longitude: +t.coords.longitude || 0
                }, p(e))
            }

            function g() {
                h.remove(), t("geo_waiting")
            }
            return {
                toggle: function() {
                    u ? h.remove() : h.add()
                },
                add: function(t) {
                    (t || !u) && (u = !0, l("cp_geo_btn_sel", "geo_btn"), t && (t.latitude || t.longitude) ? (e = {
                        latitude: +t.latitude || 0,
                        longitude: +t.longitude || 0
                    }, _(e, t.label)) : (d.getCurrentPosition(m, g), r("geo_waiting")))
                },
                remove: function() {
                    u && (u = !1, c("cp_geo_btn_sel", "geo_btn"), v())
                },
                init: function(e) {
                    return e && h.add(e), d.init()
                }
            }
        }();
    window.geoloc = h
}, function() {
    var e = window,
        t = e.getNotify,
        n = e.setNotify,
        i = e.setDocumentDomain,
        a = e.ce,
        o = e.onDOMReady,
        r = e.append,
        s = e.clog,
        l = e.extend,
        c = e.parseJSON,
        u = e.intval,
        d = e.each,
        p = window,
        f = p.ajax,
        h = window,
        _ = h.nav,
        v = window,
        m = v.menu,
        g = window,
        w = g.mail,
        y = function() {
            var e = null,
                p = !1,
                h = {},
                v = 1,
                g = null,
                b = !1,
                k = !1;

            function C() {
                64 > v && (v *= 2)
            }

            function S(e, i) {
                var a = window,
                    o = a.al;
                if (e === !1 && (e = t() + (i || 1)), n(e), window.al && window.al.menu) {
                    var r = new Array(o.menu.length);
                    r[2] = e, m.refreshCounters(r)
                }
            }
            return {
                nu: !0,
                init: function(t, n) {
                    e || (i(), e = a("iframe", {
                        src: t
                    }, {
                        display: "none"
                    }), o(function() {
                        r(e, window.bodyNode), p = !0
                    })), y.refreshParams(n), setTimeout(y.check, 1e3)
                },
                on: function() {
                    s("[longpoll] start"), b = !0, setTimeout(y.check, 1e3)
                },
                off: function() {
                    s("[longpoll] pause"), b = !1
                },
                refreshParams: function(e) {
                    l(h, e || {}), l(y, h)
                },
                getKey: function() {
                    if (g) try {
                        g.abort()
                    } catch (e) {}
                    g = f.post("/mail", {
                        _ajax: 1,
                        act: "im_get_key",
                        community: _.getQuery("community")
                    }, {
                        onDone: function(e) {
                            /[0-9a-f]{40}/i.test(e) ? (y.refreshParams({
                                key: e
                            }), y.check()) : s("[longpoll] invalid key")
                        },
                        onFail: function() {
                            setTimeout(y.getKey, 1e3 * v), s("[longpoll] from getKey delaying getKey for " + v + "secs"), C()
                        }
                    })
                },
                check: function() {
                    if (b && !k) {
                        if (!y.makeRequest) return void setTimeout(y.check, 1e3);
                        try {
                            y.makeRequest(function(e, t) {
                                if (k = !1, b) {
                                    var n = window,
                                        i = n.vk;
                                    if (i.__debug) {
                                        var a = y.checked(c(t));
                                        s("[longpoll] success", a), a && (y.check(), v = 1)
                                    } else try {
                                        var a = y.checked(c(t));
                                        s("[longpoll] success", a), a && (y.check(), v = 1)
                                    } catch (o) {
                                        try {
                                            s("[longpoll] error", o.message || "no message", o.type || "no type", o.stack || "no stack")
                                        } catch (o) {}
                                        setTimeout(y.check, 1e3 * v), C()
                                    }
                                }
                            }, function() {
                                k = !1, setTimeout(y.check, 1e3 * v), C()
                            }), k = !0
                        } catch (e) {
                            s("[longpoll] makeRequest failed")
                        }
                    }
                },
                checked: function(e) {
                    var t = e.failed;
                    if (1 == t || h.ts >= e.ts + 256) {
                        if (y.refreshParams({
                                ts: e.ts
                            }), t) return !0
                    } else {
                        if (2 == t) return s("[longpoll] delaying getKey for " + v + "secs"), setTimeout(y.getKey, 1e3 * v), C(), !1;
                        if (t) return void s("[longpoll]", e)
                    }
                    if (y.refreshParams({
                            ts: e.ts
                        }), e.updates) {
                        var n = [];
                        for (var i in e.updates) {
                            var a = e.updates[i],
                                o = u(a[0]),
                                r = u(a[1]),
                                c = u(a[2]),
                                p = u(a[3]);
                            if (1 === c) {
                                if (10 === o) {
                                    w.updateImportantDialog(r, !1);
                                    continue
                                }
                                if (12 === o) {
                                    w.updateImportantDialog(r, !0);
                                    continue
                                }
                            }
                            if (8 & c) {
                                if (2 === o) {
                                    w.updateImportantMessages(p, r, 1);
                                    continue
                                }
                                if (3 === o) {
                                    w.updateImportantMessages(p, r, -1);
                                    continue
                                }
                            }
                            if (51 != o)
                                if (61 != o)
                                    if (62 != o)
                                        if (8 != o)
                                            if (9 != o)
                                                if (6 != o && 7 != o || !y.nu)
                                                    if (80 != o || !r || _.getQuery("community")) {
                                                        if (p)
                                                            if (4 != o) 0 != o ? 2 != o ? 3 != o || 1 & c && !y.nu && w.markAsRead(p, r) : 128 & c && w.markAsDeleted(p, r) : w.markAsDeleted(r);
                                                            else {
                                                                if (_.params.indexOf("offset=") >= 0 && Number(_.params.replace(/.*offset=(\d+).*/, "$1")) > 0) continue;
                                                                var m = window,
                                                                    g = m.vk,
                                                                    b = 2 & c ? g.id : a[7] && a[7].from || p,
                                                                    k = a[7].from_admin ? null : w.getMsgHTML(r, c, p, a[4], a[5], a[6], a[7]);
                                                                k ? (w.addMessage(p, r, b, k), 2 & c || _.getQuery("community") || S(!1, 1)) : n.push({
                                                                    peer: p,
                                                                    msg_id: r,
                                                                    from_id: b
                                                                })
                                                            }
                                                    } else S(r);
                            else w.markPeerAsRead(r, c, 7 == o);
                            else w.updateOnline(-r, 0);
                            else w.updateOnline(-r, c || 7);
                            else w.typing(2e9 + c, r);
                            else w.typing(r)
                        }
                        if (n.length) {
                            var T = [];
                            d(n, function(e, t) {
                                T.push(t.msg_id)
                            }), f.post("/mail", {
                                _ajax: 1,
                                act: "get_messages",
                                msgs: T.join(","),
                                community: _.getQuery("community")
                            }, {
                                onDone: function(e, t) {
                                    var i = window,
                                        a = i.cur;
                                    d(n, function(t, n) {
                                        e[n.msg_id] && w.addMessage(n.peer, n.msg_id, n.from_id, e[n.msg_id])
                                    }), t && (l(a, t), w.updateStickers())
                                }
                            })
                        }
                    }
                    return !0
                }
            }
        }();
    window.im = y
}, function() {
    var e = window,
        t = e.each,
        n = e.geByClass,
        i = e.attr,
        a = e.replaceClass,
        o = e.ge,
        r = e.val,
        s = e.addClass,
        l = e.toggleClass,
        c = e.removeClass,
        u = e.ce,
        d = e.se,
        p = e.addEvent,
        f = e.removeEvent,
        h = e.extend,
        _ = (e.qs2obj, e.vkNow),
        v = e.geByClass1,
        m = e.setStyle,
        g = e.remove,
        w = e.intval,
        y = e.isArray,
        b = e.hasClass,
        k = e.after,
        C = e.cdf,
        S = e.stripTags,
        T = e.getHref,
        E = e.indexOf,
        x = e.htsc,
        A = e.replaceEntities,
        M = e.escapeAttr,
        P = e.replace,
        D = e.scrollTop,
        N = e.before,
        z = e.alLoadingFix,
        B = window,
        H = B.mobPlatforms,
        j = B.isTouch,
        R = window,
        L = R.ajax,
        I = window,
        q = I.mediaUpload,
        F = window,
        O = F.nav,
        U = window,
        X = U.Dialog,
        Y = U.Dialogs,
        V = function() {
            var e = {},
                B = {},
                R = null,
                I = null,
                F = !1,
                U = {},
                G = {},
                Q = {},
                $ = null;
            O.onBeforeGo(function(e, t, n) {
                if (O.getQuery("community") && (!n || !n.ignore_cur_process)) {
                    var a = "string" == typeof e ? e : i(e, "href") || i(e, "data-href");
                    if ("/mail" === a) return O.go(e, t, {
                        ignore_cur_process: !0
                    }), !0
                }
            }), O.onBeforeGo(function() {
                if (O.getQuery("community")) var e = L.post("/", {
                    _ajax: 1,
                    act: "ping"
                }, {
                    onDone: function() {
                        try {
                            var t = JSON.parse(e.response),
                                n = t && t[1] && t[1][2];
                            V.actualizeMessagesCornerCounter(n)
                        } catch (i) {}
                    }
                })
            });

            function K() {
                if (R) {
                    var s = [],
                        l = !1;
                    if (t(n("_unread"), function() {
                            var e = +i(this, "data-id");
                            e && s.push(e), l = V.getPeerByMsg(e), a("_unread", "_read", this)
                        }), l) {
                        var c = o("messages" + l);
                        c && e[l] && (e[l].messages = r(c))
                    }
                    s.length && V.sendMarkAsRead(R, s)
                }
            }

            function J(e, t) {
                t ? (s("lvi", e), l("mlvi", e, !!H[t])) : (c("lvi", e), c("mlvi", e))
            }

            function Z(e, t) {
                var n, i = t.split("."),
                    a = i.length,
                    o = e;
                for (n = 0; a > n; n++)
                    if (o = o[i[n]], !o) return null;
                return o
            }

            function et(e, t, n) {
                var i, a, o = t.split("."),
                    r = o.length - 1,
                    s = e;
                for (a = 0; r > a; a++) i = o[a], s = s[i] || (s[i] = {});
                s[o[r]] = n
            }

            function tt(e) {
                var n = e.updater;
                n(document.body), t(e.caches, function(t, n) {
                    var i = n.storage,
                        a = n.getter,
                        o = Z(i, a);
                    if (o) {
                        var r = "string" == typeof o;
                        r && (o = u("div", {
                            innerHTML: o
                        })), e.updater(o), et(i, a, r ? o.innerHTML : o)
                    }
                })
            }
            return {
                onShowDialogFromCache: d(),
                onShowWritePageFromCache: d(),
                onShowDialogsPageFromCache: d(),
                onMessagesRepainted: d(),
                init: function(t, n) {
                    var i = window,
                        a = i.im;
                    window.cur.destroy.push(function() {
                        AudioMessagePlayer.detachPlayer()
                    }), t && (R = t, n && (V.saveDialog(n, t), I = e[t])), F || (F = !0, p(document, j ? "touchstart" : "mousedown", K)), a.on()
                },
                clear: function() {
                    O.clear();
                    var t = window,
                        n = t.im;
                    e = {}, B = {}, U = {}, R = I = null, f(document, j ? "touchstart" : "mousedown", K), F = !1, n.off()
                },
                send: function(e) {
                    return q && !q.checkUploading() ? !1 : L.click(e, h({
                        clear: !0,
                        save: !0
                    }, X), {
                        lock: !0
                    })
                },
                save: function(n) {
                    t(n, function(t, n) {
                        e[t] && n.last_msg == e[t].last_msg && delete n.messages, V.saveDialog(n, t)
                    })
                },
                saveDialog: function(n, i) {
                    e[i] || (e[i] = {});
                    var a = e[i];
                    h(a, n), a.msgs && t(a.msgs, function(e, t) {
                        U[t] = i
                    })
                },
                getPeerByMsg: function(e) {
                    return U[e] || !1
                },
                cacheDialogsPage: function() {
                    if (!O.getQuery("community") || !O.getQuery("tab")) {
                        B.page = r("m");
                        var e = O.getQuery();
                        B.link = e.act ? W("/mail") : O.cur
                    }
                },
                keyup: function(e, t, n) {
                    var i = $ || "",
                        a = e.value || "";
                    (i.length != a.length || i != a) && (V.myTyping(t, n), $ = a)
                },
                myTyping: function(e, t) {
                    if (!(-2e9 >= e)) {
                        var n = _();
                        Q[e] && n - Q[e] < 5e3 || (Q[e] = n, L.post("/mail", {
                            _ajax: 1,
                            act: "typing",
                            peer: e,
                            hash: t,
                            community: O.getQuery("community")
                        }))
                    }
                },
                typing: function(e, t) {
                    t = t || e;
                    e > 2e9 ? (G[e] || (G[e] = {}), G[e][t] = _()) : G[e] = _(), V.updateTyping(e)
                },
                updateTyping: function(e) {
                    var n = function(e, t) {
                            return e.getAttribute && e.getAttribute(t)
                        },
                        i = window,
                        a = i.lang,
                        l = o("dialog_near" + e),
                        u = v("di_current_peer", l),
                        d = v("di_typing", l);
                    if (l) {
                        var p = [],
                            f = _();
                        if (e > 2e9) t(G[e] || {}, function(e, t) {
                            n(d, "data-u" + e) && t && 6e3 > f - t && p.push(e)
                        });
                        else {
                            var h = G[e];
                            n(d, "data-u" + e) && h && 6e3 > f - h && p.push(e)
                        }
                        if (p.length) {
                            if (1 == p.length) {
                                var g = p[0],
                                    w = n(d, "data-u" + g),
                                    y = n(d, "data-s" + g);
                                r(d, '<i class="i_typing"></i>' + (a.mobile_mail_typing[y] || "").replace("{user}", w))
                            } else {
                                t(p, function(e, t) {
                                    p[e] = n(d, "data-u" + t)
                                });
                                var b = p.pop();
                                r(d, '<i class="i_typing"></i>' + (a.mobile_mail_multi_typing || "").replace("{users}", p.join(", ")).replace("{last_user}", b))
                            }
                            u.offsetWidth && m(d, "minWidth", u.offsetWidth), s("di_typing_now", l), setTimeout(function() {
                                s("di_typing_animated", l)
                            }, 10), setTimeout(function() {
                                V.updateTyping(e)
                            }, 2e3)
                        } else r(d, ""), m(d, "minWidth", 0), c("di_typing_animated", l), c("di_typing_now", l)
                    }
                },
                updateOnline: function(i, a) {
                    var s = o("messages" + i);
                    if (s && g(v("di_activity", s)), t(n("_lv" + i, "mcont"), function(e, t) {
                            J(t, a)
                        }), e[i]) {
                        if (e[i].write_form) {
                            var l = u("div", {
                                innerHTML: e[i].write_form
                            });
                            t(n("_lv" + i, l), function(e, t) {
                                J(t, a)
                            }), e[i].write_form = r(l)
                        }
                        if (e[i].messages) {
                            var l = u("div", {
                                innerHTML: e[i].messages
                            });
                            g(v("di_activity", l)), e[i].messages = r(l)
                        }
                    }
                },
                updateImportantMessages: function(t, n, i) {
                    tt({
                        caches: [{
                            storage: B,
                            getter: "page"
                        }, {
                            storage: O.page_get(W("/mail")),
                            getter: "html"
                        }],
                        updater: function(e) {
                            var t = v("dialogs_filter_button_important", e);
                            if (t) {
                                var n = w(r(t)) + i;
                                r(t, n), l("dialogs_filter_without_important", v("dialogs_filter", e), 0 === n)
                            }
                        }
                    }), tt({
                        caches: [{
                            storage: e,
                            getter: t + ".messages"
                        }],
                        updater: function(e) {
                            var t = v("_msg" + n, e);
                            t && l("msg_item_important", t, 1 === i)
                        }
                    })
                },
                updateImportantDialog: function(e, t) {
                    O.getQuery("community") && tt({
                        caches: [{
                            storage: B,
                            getter: "page"
                        }, {
                            storage: O.page_get(W("/mail")),
                            getter: "html"
                        }],
                        updater: function(n) {
                            var i = v("_peer" + e, n);
                            i && l("dialog_item_important", i, t)
                        }
                    })
                },
                sendMarkAsRead: function(n, i) {
                    y(i) || (i = [i]);
                    var a = e[n];
                    return a && a.hash ? void L.post("/mail", {
                        _ajax: 1,
                        act: "mark_read",
                        peer: n,
                        msgs: i.join(","),
                        hash: a.hash,
                        community: O.getQuery("community")
                    }, {
                        onDone: function(e) {
                            e && t(i, function(e, t) {
                                V.markAsRead(n, t)
                            })
                        }
                    }) : void 0
                },
                markAsRead: function(t, n) {
                    var i = window,
                        a = i.im,
                        s = o("messages" + t);
                    if (s) {
                        var l = v("_msg" + n, s);
                        a.nu && b("_read", l) || c("mi_unread", l);
                        var d = e[t];
                        if (d && d.messages) {
                            var p = u("div", {
                                    innerHTML: d.messages
                                }),
                                l = v("_msg" + n, p);
                            a.nu && b("_read", l) || c("mi_unread", l), d.messages = r(p)
                        }
                    }
                },
                markPeerAsRead: function(a, s, l) {
                    var d = o("messages" + a);
                    if (d) {
                        t(n("msg_item", d), function() {
                            if (!l == !b("_unread", this)) return !0;
                            var e = +i(this, "data-id");
                            s >= e && !b("_read", this) && c("mi_unread", this)
                        });
                        var p = e[a];
                        if (p && p.messages) {
                            var f = u("div", {
                                innerHTML: p.messages
                            });
                            t(n("msg_item", f), function() {
                                if (!l == !b("_unread", this)) return !0;
                                var e = +i(this, "data-id");
                                s >= e && !b("_read", this) && c("mi_unread", this)
                            }), p.messages = r(f)
                        }
                    }
                    var h = o("dialogs"),
                        _ = l ? "di_unread_outbox" : "di_unread_inbox";
                    if (h) {
                        var p = v("_peer" + a, h);
                        p && b(_, p) && (c(_, p), g(v("di_unread_cnt", p)))
                    } else if (B.page) {
                        var f = u("div", {
                                innerHTML: B.page
                            }),
                            p = v("_peer" + a, f);
                        p && b(_, p) && (c(_, p), g(v("di_unread_cnt", p))), B.page = r(f)
                    }
                    tt({
                        caches: [{
                            storage: O.page_get(W("/mail")),
                            getter: "html"
                        }],
                        updater: function(e) {
                            var t = v("_peer" + a, e);
                            t && b(_, t) && (c(_, t), g(v("di_unread_cnt", t)))
                        }
                    })
                },
                markAsDeleted: function(t, n) {
                    var i = o("messages" + t);
                    if (i) {
                        g(v("_msg" + n, i));
                        var a = e[t];
                        if (a && a.messages) {
                            var s = u("div", {
                                innerHTML: a.messages
                            });
                            g(v("_msg" + n, s)), a.messages = r(s)
                        }
                    }
                },
                addMessage: function(t, n, i, a) {
                    if (O.clear(), 2e9 > t ? delete G[t] : G[t] && delete G[t][i], V.updateTyping(t), a !== !0) {
                        if (t && n && (U[n] = t), !v("_msg" + n)) {
                            var s = e[t];
                            if (s && s.messages) {
                                s.msgs && s.msgs.push(n);
                                var l = u("div", {
                                        innerHTML: s.messages
                                    }),
                                    c = v("di_activity", l);
                                c ? (k(C(a), c), s.messages = r(l)) : s.messages = a + s.messages;
                                var d = o("messages" + t);
                                d && (r(d, s.messages), V.onMessagesRepainted(!0))
                            } else {
                                var d = o("messages" + t);
                                if (d) {
                                    var c = v("di_activity", d);
                                    c ? k(C(a), c) : r(d, a + r(d))
                                }
                            }
                        }
                    } else if (o("dialogs") && "/mail" == O.path) {
                        var p = O.getQuery();
                        p.act || p.offset || p.q || L.click(W(O.path), h({
                            no_scroll: !0
                        }, Y))
                    }
                },
                getMsgHTML: function(t, n, a, s, l, c, u) {
                    var d = window,
                        p = d.vk,
                        f = 2 & n ? p.id : u && u.from || a;
                    if (!f) return !1;
                    if (!o("messages" + a)) return !0;
                    if (u.attach1 || u.fwd || u.geo || u.emoji) return !1;
                    if (!e[a] || !e[a].hash) return !1;
                    var h = "_u" + f,
                        _ = v(h, "mcont", "a"),
                        m = S(i(_, "data-name") || r(_) || ""),
                        g = T(_),
                        y = v(h, "mcont", "img"),
                        b = y && y.src || "",
                        k = 32768 & n;
                    if (!m || !g || !b) return !1;

                    function C() {
                        var e = new Date(1e3 * s),
                            t = e.getHours(),
                            n = e.getMinutes();
                        return t + ":" + (10 > n ? "0" : "") + n
                    }
                    a = w(a), t = w(t), l = l && -1 == l.toString().indexOf(" ... ") && 2e9 > a ? l : "";
                    var P = 1 & n ? " mi_unread" : "";
                    return !(2 & n) && 1 & n && (P += P ? " _unread" : ""), c = c.replace(/([a-zA-Z\-_\.0-9]+@[a-zA-Z\-_0-9]+\.[a-zA-Z\-_\.0-9]+[a-zA-Z\-_0-9]+)/g, function(e) {
                        return '<a href="/write?email=' + e + '">' + e + "</a>"
                    }), c = c.replace(/(https?:\/\/)?(([A-Za-zА-Яа-яЁё0-9@][A-Za-zА-Яа-яЁё0-9@\-\_\.]*[A-Za-zА-Яа-яЁё0-9@])(\/([A-Za-zА-Яа-я0-9@\-\_#%&?+\/\.=;:~]*[^\.\,;\(\)\?<\&\s:])?)?)/gi, function() {
                        var e = arguments[3],
                            t = arguments[2],
                            n = arguments[0],
                            i = arguments[1] || "http://";
                        if (-1 == e.indexOf(".") || -1 != e.indexOf("..")) return n;
                        var a = e.split(".").pop();
                        if (a.length > 7 || -1 == E("place,camera,info,name,academy,aero,arpa,coop,media,museum,mobi,travel,xxx,asia,biz,com,net,org,gov,mil,edu,int,tel,ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,bd,be,bf,bg,bh,bi,bj,bm,bn,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,ck,cl,cm,cn,co,cr,cu,cv,cx,cy,cz,de,dj,dk,dm,do,dz,ec,ee,eg,eh,er,es,et,eu,fi,fj,fk,fm,fo,fr,ga,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gu,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,il,im,in,io,iq,ir,is,it,je,jm,jo,jp,ke,kg,kh,ki,km,kn,kp,kr,kw,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mm,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,mz,na,nc,ne,nf,ng,ni,nl,no,np,nr,nu,nz,om,pa,pe,pf,pg,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,ru,rs,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,um,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,ye,yt,yu,za,zm,zw,рф,укр,сайт,онлайн,срб,cat,pro,local".split(","), a)) return n;
                        if (-1 != n.indexOf("@")) return n;
                        try {
                            n = decodeURIComponent(n)
                        } catch (o) {}
                        return n.length > 55 && (n = n.substr(0, 53) + ".."), n = x(n), !k && e.match(/^([a-zA-Z0-9\.\_\-]+\.)?(vkontakte\.ru|vk\.com|vkadre\.ru|vshtate\.ru|userapi\.com|vk\.me)$/) ? (t = A(t).replace(/([^a-zA-Z0-9#%;_\-.\/?&=\[\]])/g, encodeURIComponent), '<a href="' + (i + t).replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '">' + n + "</a>") : '<a href="/away?to=' + encodeURIComponent(i + A(t)) + '" target="_blank">' + n + "</a>"
                    }), ('<a name="msg{{msgId}}"></a><div  class="msg_item _msg{{msgId}}{{msgClass}}"  data-id="{{msgId}}"  onclick="return MessagesActions.onMessageClick(event);">  <div class="mi_iwrap">    <a class="al{{cl}}" href="{{href}}">      <img src="{{photo}}" class="mi_img {{cl}}" />    </a>  </div>  <div class="mi_cont">    <div class="mi_head">      <a class="mi_date" href="' + W("/mail?act=msg&id={{msgId}}").replace(/\&/g, "&amp;") + '">        {{time}}      </a>      <a class="mi_author al{{cl}} {{cl}}" href="{{href}}" data-name="{{dataName}}">        {{name}}      </a>    </div>    <div class="mi_body">      {{mi_title}}      <div class="mi_text">{{text}}</div>    </div>  </div></div>').replace(/{{msgId}}/g, t).replace(/{{cl}}/g, h).replace(/{{href}}/g, g).replace("{{msgClass}}", P).replace("{{photo}}", b).replace("{{time}}", C(s)).replace("{{dataName}}", M(m)).replace("{{name}}", m.split(" ").shift()).replace("{{mi_title}}", l ? '<div class="mi_title">' + l + "</div>" : "").split("{{text}}").join(c)
                },
                updateStickers: function() {
                    var t = window,
                        n = t.cur,
                        i = window,
                        a = i.post,
                        r = e[R];
                    if (r) {
                        var s = r.write_form ? (n.sticker_panel || "").split("mail-0").join("mail" + R) : "",
                            l = o("stickers_panel");
                        l && (P(C(s), l), l = null, a.stickersInit())
                    }
                },
                showDialog: function(t, n, i) {
                    var a = window,
                        o = a.cur,
                        s = window,
                        l = s.MessagesActions,
                        d = window,
                        p = d.post;
                    if (l.hasFwdMessages()) return l.attachFwdMessages(n), !1;
                    B.scroll_top = D();
                    var f = e[n];
                    if (f) {
                        var _ = u("div", {
                                innerHTML: r("m")
                            }),
                            m = v("mhb_back", _);
                        if (m && f.header) {
                            var w = u("div");
                            r(w, f.header), N(w.firstChild, m), g(m)
                        }
                        var y = f.write_form ? (o.sticker_panel || "").split("mail-0").join("mail" + n) : "";
                        r(v("pcont", v("mcont", _)), f.write_form + y + (n ? '<div id="messages' + n + '" class="messages bl_cont">' + (f.messages || "") + '<div id="al_loading"></div></div>' : "")), r("m", _.innerHTML), p.stickersInit(), L.refreshLinks(f.fv_link, f.app_link), z(), R = n, I = f;
                        var b = T(t);
                        O.go(b, null, {
                            push_only: !0,
                            no_push: i
                        }), n ? ($ = null, V.updateTyping(n), L.click(b, h({
                            save: n
                        }, X), {
                            scroll: !0
                        })) : V.onShowWritePageFromCache(!0), V.onShowDialogFromCache(!0), D(0, 10)
                    } else O.al_go(f && f.cur_link || T(t) || O.cur);
                    return O.getQuery("community") && "unread" === O.getQuery("ctab") && c("al_back", v("mhb_back")), !1
                },
                backToDialogs: function(e) {
                    if (B.page) O.go(B.link, null, {
                        push_only: !0,
                        no_push: e
                    }), L.click(B.link, h({
                        no_scroll: !0
                    }, Y)), r("m", B.page), L.refreshLinks(i("fv_link", "href") || i("fv_link", "data-href"), "vkontakte://vk.com/mail"), R = I = null, D(B.scroll_top || 0), V.onShowDialogsPageFromCache(!0);
                    else {
                        var t = W(B.link || "/mail");
                        O.go(t, null, {
                            push_only: !0,
                            no_push: e
                        }), O.al_go(t)
                    }
                },
                actualizeMessagesCornerCounter: function(e) {
                    tt({
                        caches: [{
                            storage: B,
                            getter: "page"
                        }, {
                            storage: O.page_get(W("/mail")),
                            getter: "html"
                        }],
                        updater: function(t) {
                            var n = v("mhi_notify", t),
                                i = v("mh_notify_counter", n);
                            i || (i = u("em", {
                                className: "mh_notify_counter"
                            }), append(i, n)), e ? i.innerText = e : n.innerHTML = "&nbsp;"
                        }
                    })
                }
            }
        }();

    function W(e) {
        var t = window.nav.getQuery(),
            n = t.community,
            i = t.ctab,
            a = n && -1 === e.indexOf("community=") ? "community=" + n : "",
            o = n && i && -1 === e.indexOf("ctab=") ? "&ctab=" + i : "";
        return e + (e.indexOf("?") >= 0 ? "&" : "?") + a + o
    }
    window.mail = V
}, function() {
    var e = window,
        t = e.ge,
        n = e.each,
        i = e.geByTag,
        a = e.intval,
        o = e.gpeByClass,
        r = e.geByTag1,
        s = e.attr,
        l = e.val,
        c = e.geByClass,
        u = e.isUndefined,
        d = e.geByClass1,
        p = e.toggle,
        f = e.isVisible,
        h = e.toggleClass,
        _ = e.show,
        v = e.cancelEvent,
        m = e.ce,
        g = e.setStyle,
        w = e.parseJSON,
        y = e.replace,
        b = e.reflow,
        k = e.after,
        C = e.addClass,
        S = e.clog,
        T = e.uploadFile,
        E = e.bind,
        x = e.readFile,
        A = e.append,
        M = e.before,
        P = e.srand,
        D = e.extend,
        N = e.canUploadFile,
        z = e.gpeByTag,
        B = e.submitBtn,
        H = e.removeEvent,
        j = e.addEvent,
        R = e.clone,
        L = e.remove,
        I = window,
        q = I.ajax,
        F = {
            _uploadData: {},
            _uploadQueue: [],
            _readerQueue: [],
            _processUploadQueue: !1,
            _processReaderQueue: !1,
            fallback: function(e, t) {
                var n = window,
                    i = n.post;
                return e && i.add_attach(e, t), !1
            },
            getLastAttachId: function() {
                var e = t("attached_wrap");
                if (!e) return 0;
                var o, r = 0;
                return n(i("input"), function() {
                    if (o = this.name.match(/^attach(\d+)_type$/i)) {
                        var e = a(o[1]);
                        e > r && (r = e)
                    }
                }), r
            },
            refreshAttachIds: function(e) {
                var c = t("attached_wrap");
                if (c) {
                    var u, d = o("mr_x_wrap", e),
                        p = r("input", d),
                        f = a((p && p.name.match(/^attach(\d+)(_type)?$/i) || [])[1]);
                    if (o("mr_timer", e)) {
                        var h = s("add_post_btn", "data-value");
                        return void(h && l("add_post_btn", h))
                    }
                    f && n(i("input", c), function() {
                        if (u = this.name.match(/^attach(\d+)(_type)?$/i)) {
                            var e = a(u[1]);
                            e == f ? this.disabled = !0 : e > f && (this.name = "attach" + (e - 1) + (u[2] || ""))
                        }
                    })
                }
            },
            getAttachesCount: function() {
                return (c("mr_x_wrap", "attached_wrap") || []).length
            },
            refreshUploadState: function(e) {
                u(e) && (e = F.getAttachesCount());
                var n = d("mr_timer", "attached_wrap"),
                    i = t("attach_photo_btn"),
                    a = d("pi_medias", "attached_wrap"),
                    o = d("inline_upload", i),
                    r = s(o, "data-max-attaches") || 10;
                p(a, e > 0 || f(n)), h("cp_attach_btn_sel", i, e > 0), o && (o.disabled = e >= r), _("attached_options"), _("attached_flush")
            },
            checkUploading: function(e) {
                return F._processUploadQueue ? v(e) : !0
            },
            attachedPhotoTpl: function(e) {
                return m("div", {
                    id: "upload_item_" + e,
                    className: "medias_thumb thumb_item mr_x_wrap thumb_upload",
                    innerHTML: '<div id="upload_image_' + e + '" class="tu_img"></div><div id="item_progress_wrap_' + e + '" class="tu_progress_wrap"><div id="item_progress_' + e + '" class="tu_progress"></div></div><div id="item_cancel_wrap_' + e + '" class="tu_cancel_wrap" onclick="return mediaUpload.reset(this, event, \'' + e + '\');"><div id="item_cancel_' + e + '" class="tu_cancel"></div></div>'
                })
            },
            onUploadProgress: function(e) {
                var n = this,
                    i = t("item_progress_" + n.id);
                g(i, {
                    width: e.loaded / e.total * 100 + "%",
                    visibility: "visible"
                })
            },
            onUploadComplete: function(e) {
                var n = this,
                    i = e.target.responseText,
                    a = !1;
                try {
                    a = w(i)
                } catch (o) {
                    a = {
                        error: "ERR_CLIENT_BAD_RESPONSE: bad request response"
                    }
                }
                a.error ? F.onUploadError.call(n, e) : (n.xhr = q.post(n.done_url, {
                    _ajax: 1,
                    _query: i
                }, {
                    onDone: function(e) {
                        var i = t("item_progress_wrap_" + n.id),
                            a = t("upload_image_" + n.id),
                            o = F.getLastAttachId() + 1;
                        if (a) var r = m("img", {
                            id: "upload_image_" + n.id,
                            className: "ph_img",
                            onload: function() {
                                if (y(r, a), n.iw && n.ih) {
                                    if (n.iw > n.ih == r.width > r.height) var e = Math.min(130, Math.floor(75 / n.ih * n.iw));
                                    else var e = Math.min(130, Math.floor(75 / n.iw * n.ih));
                                    g(r, "width", e)
                                }
                                b(r), g(r, "opacity", 1)
                            },
                            src: e.src
                        });
                        k(m("input", {
                            type: "hidden",
                            name: "attach" + o,
                            value: e.photo_raw
                        }), a), k(m("input", {
                            type: "hidden",
                            name: "attach" + o + "_type",
                            value: "photo"
                        }), a), g(i, "opacity", 0), n.attached = !0, n.delete_url = e.delete_url
                    }
                }), C("tu_progress_request", "item_progress_wrap_" + n.id), n.uploaded = !0, F.uploadQueueNext())
            },
            onUploadError: function(e) {
                S("upload error.", e.target.responseText), F.uploadQueueNext()
            },
            uploadFile: function(e) {
                e.xhr = T(e.upload_url, {
                    photo: e.file
                }, {
                    onProgress: E(F.onUploadProgress, e),
                    onComplete: E(F.onUploadComplete, e),
                    onError: E(F.onUploadError, e)
                })
            },
            readFile: function(e) {
                x(e.file, function(n) {
                    var i = t("upload_image_" + e.id);
                    if (i) var a = m("img", {
                        id: "upload_image_" + e.id,
                        className: "ph_img",
                        onload: function() {
                            y(a, i), e.iw = a.width, e.ih = a.height
                        },
                        src: n
                    });
                    F.readerQueueNext()
                })
            },
            addFile: function(e) {
                var n = t("attached_wrap"),
                    i = d("pi_medias", n),
                    a = i ? c("medias_thumb", i) : [],
                    o = i ? d("medias_row", i) : null,
                    r = a[a.length - 1],
                    s = F.attachedPhotoTpl(e.id);
                n && (i || (i = m("div", {
                    className: "pi_medias"
                }), A(i, n)), r ? k(s, r) : o ? M(s, o) : A(s, i), F._processReaderQueue || F.readerQueueNext())
            },
            uploadQueueNext: function() {
                S("next upload"), F._processUploadQueue = !0;
                var e = F.uploadQueueRemove();
                return e ? void F.uploadFile(e) : (S("empty upload"), void(F._processUploadQueue = !1))
            },
            readerQueueNext: function() {
                S("next reader"), F._processReaderQueue = !0;
                var e = F.readerQueueRemove();
                return e ? void F.readFile(e) : (S("empty reader"), void(F._processReaderQueue = !1))
            },
            queueInsert: function(e) {
                var t = P();
                return F.getUploadDataById(t) ? F.queueInsert(e) : (F._uploadData[t] = D(e, {
                    id: t
                }), F._uploadQueue.push(t), F._readerQueue.push(t), F._uploadData[t])
            },
            uploadQueueRemove: function() {
                var e = F._uploadQueue.shift();
                return e ? F.getUploadDataById(e) : !1
            },
            readerQueueRemove: function() {
                var e = F._readerQueue.shift();
                return e ? F.getUploadDataById(e) : !1
            },
            getUploadDataById: function(e) {
                return F._uploadData[e] || !1
            },
            delUploadDataById: function(e) {
                delete F._uploadData[e]
            },
            start: function(e, i) {
                if (!e || !N()) return F.fallback(e, i);
                var a = e.files,
                    o = e.form || z("form", e),
                    r = B(o),
                    l = t("attach_photo_btn"),
                    c = s(e, "data-upload-url"),
                    u = s(e, "data-done-url"),
                    d = s(e, "data-max-attaches") || 10,
                    p = F.getAttachesCount();
                return c && u ? (n(a, function() {
                    var e = {
                        upload_url: c,
                        done_url: u,
                        file: this,
                        uploaded: !1,
                        attached: !1
                    };
                    return p >= d ? !1 : (F.queueInsert(e), F.addFile(e), void p++)
                }), H(o, "submit", F.checkUploading), j(o, "submit", F.checkUploading), H(r, "click", F.checkUploading), j(r, "click", F.checkUploading), H(l, "click", F.checkUploading), j(l, "click", F.checkUploading), F.refreshUploadState(p), y(R(e), e), F._processUploadQueue || F.uploadQueueNext(), !1) : F.fallback(e, i)
            },
            reset: function(e, t, n) {
                if (v(t), "/" == n[0]) {
                    q.post(n, {
                        _ajax: 1
                    }), F.refreshAttachIds(e);
                    var i = o("mr_x_wrap", e) || o("mr_timer", e);
                    L(i)
                } else {
                    var a = n,
                        r = F.getUploadDataById(a);
                    if (!r) return !1;
                    r.attached ? r.delete_url && (q.post(r.delete_url, {
                        _ajax: 1
                    }), F.refreshAttachIds(e)) : (r.xhr && r.xhr.abort && r.xhr.abort(), r.loaded || F.uploadQueueNext()), L("upload_item_" + a), F.delUploadDataById(a)
                }
                return F.refreshUploadState(), !1
            }
        };
    window.mediaUpload = F
}, function() {
    var e = window,
        t = e.removeClass,
        n = e.replaceClass,
        i = e.hasClass,
        a = e.checkEvent,
        o = e.ce,
        r = e.scrollTop,
        s = e.ge,
        l = e.geByClass1,
        c = e.append,
        u = e.addClass,
        d = e.addEvent,
        p = e.getCh,
        f = e.remove,
        h = e.removeEvent,
        _ = e.getW,
        v = e.preventEvent,
        m = e.getCw,
        g = e.each,
        w = e.attr,
        y = e.val,
        b = e.onBodyResize,
        k = e.cancelEvent,
        C = e.scrollLeft,
        S = window,
        T = S.ajax,
        E = window,
        x = E.thover,
        A = window,
        M = A.nav,
        P = window,
        D = P.isTouch,
        N = {
            enabled: function(e) {
                return window.al && window.al.menu ? ("undefined" != typeof e && (e ? n("_lms", "_lm", window.bodyNode) : (n("_lm", "_lms", window.bodyNode), N.qsClose())), i("_lm", window.bodyNode)) : (t("_lm", window.bodyNode), t("_lms", window.bodyNode), !1)
            },
            opened: function() {
                return i("lm_opened", window.bodyNode)
            },
            toggle: function(e, t) {
                return a(e) ? !0 : window.al && window.al.menu ? (N.opened() ? N.close(e, t) : N.open(e, t), !1) : !0
            },
            open: function(e) {
                var i = window,
                    f = i.zlayer;
                if (a(e)) return !0;
                if (!window.al || !window.al.menu) return !0;
                if (N.opened()) return !1;
                if (f && f.opened()) return !1;
                if (!N.enabled()) return M.go("/"), !1;
                N.clear_hover();
                var h = o("div", {
                        id: "m_helper",
                        onclick: N.close
                    }),
                    _ = N._st || 0,
                    v = r(),
                    m = s("l"),
                    g = s("m"),
                    w = s("vk_wrap"),
                    y = l("head_search", m),
                    b = w.offsetWidth,
                    k = g.offsetWidth,
                    C = g.offsetHeight;
                if (!(b >= 882)) {
                    c(h, "m"), N.fixed ? (u("lm_opened", window.bodyNode), u("lm_anim_start", w), setTimeout(function() {
                        n("lm_anim_start", "lm_anim lm_anim_end", w)
                    }, 5), setTimeout(function() {
                        t("lm_anim_end", w), t("lm_anim", w)
                    }, 200), d(g, "scroll touchmove", N.blockScroll), d(window.l, "touchstart touchmove", N.blockMenuScroll), d(y, "touchstart touchmove", N.blockMenuScroll)) : u("lm_opened", window.bodyNode);
                    var S = m.offsetHeight,
                        E = b >= 480;
                    return E ? _ = v <= S - p() ? Math.min(v, S - p()) : 0 : _ > v ? _ = v : v - _ > C - S && C > S && (_ = v - C + S), N._st = Math.max(0, v - _), N._mw = k, N.fix_size(!1), N.fixed || r(_), T.post("/", {
                        _ajax: 1,
                        act: "ping"
                    }), window.lm_qsearch_counter ? window.lm_qsearch_counter-- : window.lm_qsearch_counter = -1, window.lm_qsearch_counter && N.cancelSearch(), !1
                }
            },
            close: function(e) {
                if (a(e)) return !0;
                if (!window.al || !window.al.menu) return !0;
                if (!N.opened()) return !1;
                f("m_helper"), N.clear_hover();
                var i = r(),
                    o = N._st + i,
                    c = s("l"),
                    d = s("m"),
                    p = s("vk_wrap"),
                    _ = l("head_search", c),
                    v = s("vk_wrap").offsetWidth,
                    m = v >= 480;
                return N.fixed ? (u("lm_anim_end", p), setTimeout(function() {
                    n("lm_anim_end", "lm_anim lm_anim_start", p)
                }, 5), setTimeout(function() {
                    t("lm_anim_start", p), t("lm_anim", p), t("lm_opened", window.bodyNode)
                }, 200), h(d, "scroll touchstart", N.blockScroll), h(window.l, "touchstart touchmove", N.blockMenuScroll), h(_, "touchstart touchmove", N.blockMenuScroll)) : t("lm_opened", window.bodyNode), N._st = m ? 0 : i, N.fix_size(!0), N.fixed || r(o), window.lm_qsearch_focused && N.cancelSearch(), !1
            },
            blockScroll: function(e) {
                var t = s("vk_wrap");
                N.opened() && _(t) < 882 && v(e)
            },
            blockMenuScroll: function(e) {
                var t = s("vk_wrap");
                if (N.opened() && _(t) < 882) {
                    var n = e.touches,
                        a = (n && n[0] ? n[0].pageY : e.pageY) || 0;
                    if ("touchstart" == e.type) N.lmStartY = a;
                    else if ("touchmove" == e.type && N.lmStartY !== !1) {
                        if (i("head_search", e.currentTarget)) v(e);
                        else if (a - N.lmStartY >= 0) {
                            var o = s(p() >= 440 ? "lm_cont" : "l");
                            o && o.scrollTop <= 0 && v(e)
                        } else {
                            var o = s(p() >= 440 ? "lm_cont" : "l");
                            o && o.scrollTop >= o.scrollHeight - o.offsetHeight && v(e)
                        }
                        N.lmStartY = !1
                    }
                }
            },
            fix_size: function(e) {
                var t = s("l"),
                    n = s("m"),
                    i = s("mhead"),
                    a = i && i.offsetHeight || 0,
                    o = N._st || 0;
                t && (e ? n.style.minHeight = "0" : (o = o > a ? o : 0, n.style.minHeight = t.offsetHeight + o + "px"), !N.fixed || m() < 320 ? e ? n.style.marginTop = "0" : (t.style.minHeight = p() + "px", n.style.marginTop = -o + "px") : t.style.minHeight = "0")
            },
            clear_hover: function() {
                x.clear()
            },
            refreshCounters: function(e) {
                if (!e || !e.length) return !0;
                if (!window.al || !window.al.menu) return !0;
                if (e.length != window.al.menu.length) return !1;
                var t = window,
                    n = t.al,
                    i = l("main_menu", "l");
                return g(e, function(e, t) {
                    if ("undefined" == typeof t) return !0;
                    var a = n.menu[e],
                        r = l("mmi_" + a[0], i),
                        s = l("mm_item", r),
                        u = l("mmi_wrap", r),
                        d = l("mm_counter", u);
                    w(s, "data-href", !1), t ? (a[2] && w(s, "href", a[2]), d ? y(d, t) : c(o("em", {
                        className: "mm_counter",
                        innerHTML: t
                    }), u)) : (a[1] && w(s, "href", a[1]), f(d)), T.prepare_click(s)
                }), !0
            },
            refresh: function(e) {
                e = e || {}, T.refreshLinks(e.fv_link, e.app_link), "undefined" != typeof e.pp && e.pp !== !1 && y("lm_prof_panel", e.pp), "undefined" != typeof e.tn && e.tn !== !1 && y("lm_top_notify", e.tn), "undefined" != typeof e.bn && e.bn !== !1 && y("lm_bottom_notify", e.bn), e.lm && y("l", e.lm), e.topbar || f("vk_topbar")
            },
            initEvents: function() {
                b(function() {
                    var e = s("vk_wrap").offsetWidth,
                        t = i("_hfixed", window.bodyNode),
                        n = N._st || 0;
                    e >= 882 && n > 44 && N.close(), N.fix_size(!N.opened(), t)
                })
            },
            init: function() {
                N.fixed = i("_hfixed", window.bodyNode), N.initEvents(), d(window, "orientationchange", function() {
                    var e = s("vk_wrap").offsetWidth,
                        t = N._st || 0;
                    e >= 882 && t > 44 && N.close()
                }), N.initTouch()
            },
            initTouch: function() {
                if (d(document, "keydown", function(e) {
                        var t = window,
                            n = t.vk;
                        e && e.shiftKey && (e.ctrlKey || e.metaKey) && n.__debug && 77 == e.keyCode && (k(e), N.toggle())
                    }), D) {
                    var e = !1,
                        t = !1,
                        n = 10,
                        i = Math.min(604, m()) / 3,
                        a = 30;

                    function o(e) {
                        var t = e.touches,
                            n = r(),
                            i = (t && t[0] ? t[0].pageX : e.pageX) || 0,
                            a = (t && t[0] ? t[0].pageY : e.pageY) || 0;
                        return {
                            x: i,
                            y: a - n
                        }
                    }

                    function s(e, t) {
                        var n = t.x - e.x,
                            i = t.y - e.y;
                        return Math.sqrt(n * n + i * i)
                    }

                    function c(e, t) {
                        var n = t.x - e.x,
                            i = e.y - t.y;
                        return Math.abs(180 * Math.atan2(i, n) / Math.PI)
                    }
                    d(document, "touchstart", function(n) {
                        l("mhb_home", "mhead") && (C() > 0 || (e = t = o(n)))
                    }), d(document, "touchmove touchend touchcancel", function(r) {
                        if (e) {
                            "touchmove" == r.type && (t = o(r));
                            var l = s(e, t),
                                u = c(e, t);
                            if (("touchend" != r.type && "touchcancel" != r.type || (e = !1, "touchcancel" != r.type)) && !(n > l)) {
                                if (N.opened() && (u = 180 - u), u > a) return void(e = !1);
                                v(r), l > i && (e = !1, N.toggle())
                            }
                        }
                    })
                }
            },
            qsOpened: !1,
            qsOpen: function() {
                N.qsOpened || (N.qs_st = r(), u("qs_opened", "vk_wrap"), u("qs_opened", window.bodyNode), _("vk_wrap") < 882 && r(0), N.qsOpened = !0)
            },
            qsClose: function() {
                N.qsOpened && (t("qs_opened", "vk_wrap"), t("qs_opened", window.bodyNode), _("vk_wrap") < 882 && r(N.qs_st || 0), N.qsOpened = !1)
            },
            closeSearch: function() {
                return window.al && window.al.menu ? (window.lm_qsearch && window.lm_qsearch.blur(), N.qsClose(), !1) : !0
            },
            cancelSearch: function() {
                return window.al && window.al.menu ? (window.lm_qsearch && window.lm_qsearch.clear(), N.qsClose(), !1) : !0
            },
            headerAction: function(e, t) {
                return _("vk_wrap") >= 882 ? M.go(e, t) : N.toggle()
            }
        };
    window.menu = N
}, function(e, t, n) {
    (function() {
        var e = n(1),
            t = i(e);

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var a = window,
            o = a.se,
            r = a.ce,
            s = a.attr,
            l = a.append,
            c = a.ge,
            u = a.each,
            d = a.addEvent,
            p = a.removeEvent,
            f = a.remove,
            h = a.unlockButton,
            _ = a.setDocumentDomain,
            v = a.lockButton,
            m = a.checkNav,
            g = a.cancelEvent,
            w = a.checkEvent,
            y = a.getHref,
            b = a.extend,
            k = a.stopEvent,
            C = a.tag,
            S = a.gpeByTag,
            T = a.obj2qs,
            E = a.scrollToHash,
            x = a.addClass,
            A = a.hasClass,
            M = a.qs2obj,
            P = a.copy,
            D = window,
            N = D.ajax,
            z = function() {
                var e = !(!window.history || !history.pushState),
                    n = null,
                    i = o(function() {
                        return n
                    }),
                    a = [],
                    D = 7,
                    B = !1,
                    H = 30;

                function j() {
                    document.selection ? document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges()
                }

                function R(e, t, n) {
                    for (var i = a.length - 1; i >= 0; --i)
                        if (a[i].h == e || a[i].a == e) return void(a[i] = {
                            h: e,
                            d: t,
                            a: n
                        });
                    a.push({
                        h: e,
                        d: t,
                        a: n
                    }), a.length > D && a.shift()
                }

                function L(e) {
                    for (var t = a.length - 1; t >= 0; --t)
                        if (a[t].h == e || a[t].a == e) return a = a.slice(0, t + 1), a[t].d;
                    return !1
                }

                function I(e) {
                    var t;
                    if (t = /^(https?:)\/\/([^:\/]+)?(?::(\d+))?\/?(.*)$/i.exec(e)) {
                        if (t[1] != location.protocol) return !1;
                        if (t[2] && t[2] != location.hostname) return !1;
                        if (t[3] && t[3] != location.port) return !1;
                        e = t[4]
                    }
                    return e
                }

                function q(e) {
                    var t = r("iframe");
                    s(t, "id", "upload_iframe"), s(t, "name", "upload_iframe"), s(t, "width", "0"), s(t, "height", "0"), s(t, "border", "0"), s(t, "style", "width:0;height:0;border:none;position:absolute;left:-1000px;"), l(t, e.parentNode), window.frames.upload_iframe.name = "upload_iframe", t = c("upload_iframe");
                    var n = !1;
                    return u(e, function(e, t) {
                        return "submit" === t.type ? (n = t, !1) : void 0
                    }), d(t, "load", function i() {
                        p(t, "load", i), setTimeout(function() {
                            f(t), h(n)
                        }, 2e3)
                    }), _(), s(e, "target", "upload_iframe"), s(e, "method", "post"), s(e, "enctype", "multipart/form-data"), s(e, "encoding", "multipart/form-data"), l(r("input", {
                        type: "hidden",
                        id: "__extra",
                        name: "__extra",
                        value: 1
                    }), e), e.submit(), v(n), setTimeout(function() {
                        f("__extra")
                    }, 0), !1
                }

                function F(e, t) {
                    var n = window,
                        i = n.al;
                    if (!window.al || !i.ver) return !0;
                    var a = m(t.target, {
                        skip_onclick: !0,
                        skip_clicable: !0
                    });
                    return a ? !0 : e === !1 ? !1 : (z.go(e, t) || g(t), !1)
                }

                function O(e, t, n) {
                    if (!n) return !0;
                    if (w(t)) return !0;
                    f("app_go_frame");
                    var i = y(e),
                        a = r("iframe", {
                            id: "app_go_frame",
                            src: n,
                            onload: function() {
                                f("app_go_frame"), i && z.hard_go(i)
                            }
                        }, {
                            display: "none"
                        });
                    return window.bodyNode.appendChild(a), !1
                }

                function U(e, t, n) {
                    return w(t) ? !0 : n && n.push_only ? !0 : (n && n.replace ? location.replace(e) : e && (location.href = y(e)), !0)
                }

                function X(e, t, n) {
                    var i = window,
                        a = i.al;
                    g(t);
                    var o = y(e);
                    if (window.al && a.ver) {
                        if (n && n.push_only) return !0;
                        if (N.nav(o, n)) return j(), !0
                    }
                    U(o, t, n)
                }

                function Y(t, n, i) {
                    if (!z.onBeforeGo(t, n, i)) {
                        if (i = b({
                                no_push: !1,
                                push_only: !1,
                                replace: !1
                            }, i), w(n)) return !k(n);
                        if (!t) return !0;
                        e && (i.no_push || i.need_restore) && (B = !1);
                        var a = t,
                            o = "",
                            r = "",
                            l = "";
                        !t.href && t.getAttribute && (a = t.getAttribute("data-href"));
                        var c = n && ("a" === C(n.target) ? n.target : S("a", n.target));
                        if (("input" == C(t) || "button" == C(t)) && ("submit" == t.type || "image" == t.type) && t.form) {
                            if (t.disabled) return !0;
                            var d = t.form,
                                p = {},
                                f = d.action || "",
                                h = !1;
                            if (u(d, function(e, n) {
                                    return !n.name || n.disabled ? !0 : ("radio" !== n.type || n.checked) && ("checkbox" !== n.type || n.checked) ? "button" === n.type ? !0 : "submit" === n.type && n !== t ? !0 : "image" === n.type && n !== t ? !0 : "file" === n.type ? (h = !0, !1) : void(p[n.name] = n.value) : !0
                                }), "image" == t.type && (p[t.name] = t.value, p[t.name + ".x"] = 1, p[t.name + ".y"] = 1), h || "multipart/form-data" == s(d, "enctype")) return q(d);
                            if (!(a = I(f))) return !0;
                            d.method && "get" != d.method ? i.params = p : a = a.split("?", 1).shift() + T(p)
                        }
                        if ("string" != typeof a) {
                            if (!a) return !0;
                            o = a.pathname, "/" !== o.substr(0, 1) && (o = "/" + o), r = a.search.substr(1), l = a.hash, a = o + a.search + l
                        } else {
                            var _ = a.split("#"),
                                v = _.shift();
                            l = _.length ? "#" + _.join("#") : "", v = v.split("?"), o = v.shift(), r = v.join("?"), !l && !r || o || (o = z.path, v || (r = z.params), a = o + (r ? "?" + r : "") + l)
                        }
                        var m, y, P = !(!c || !c.getAttribute),
                            D = P ? c.getAttribute("data-post-id") : "",
                            N = P ? c.getAttribute("data-post-click-type") : "";
                        if (D && !r.match(/(^|&)_post=/) && (r += (r ? "&" : "") + "_post=" + D, N && !r.match(/(^|&)_post_click_type=/) && (r += "&_post_click_type=" + N), N && !r.match(/(^|&)_post_ad_data=/) && (m = gpeByClass("_ads_promoted_post_data_w", c), y = m && m.getAttribute("data-ad"), r += "&_post_ad_data=" + encodeURIComponent(y))), 0 !== location.pathname.indexOf("/app") && 0 === o.indexOf("/app")) {
                            var H = M(r);
                            if (H && H.act && "app_r" === H.act) return n ? !0 : (U(t, n, i), !1)
                        }
                        if (n && a.split("#").shift() == z.cur.split("#").shift() && l && !i.force && (E(l), i.push_only = !0), i.no_push && z.cur == a && !i.force) return !1;
                        if (i.push_only) return Q(b(i, {
                            nav: {
                                push: a,
                                path: o,
                                params: r,
                                hash: l
                            }
                        })), !1;
                        x("active", i.link || t), A("al_back", t) && (i.need_restore = !0);
                        var j = V(b(i, t.tagName ? {
                            target: t
                        } : {}, {
                            nav: {
                                push: a,
                                path: o,
                                params: r,
                                hash: l
                            }
                        }));
                        return j || g(n), j
                    }
                }

                function V(e) {
                    var t = window,
                        n = t.cur,
                        i = window,
                        a = i.menu,
                        o = M(e.nav.params),
                        r = M(z.params);
                    if ((r.z || o.z) && r.z != o.z) {
                        if (z.path == e.nav.path) {
                            var s = P(o),
                                l = P(r);
                            if (delete s.z, delete l.z, s = T(s), l = T(l), s == l) return W(o.z, !1, e), Q(e), a.close(null, !0), !1
                        }
                        e.zProcess = function(t, n) {
                            W(o.z, t, b({}, e, {
                                no_push: !0
                            }), n)
                        }
                    }
                    return e.onPreNav = function() {
                        e.zProcess && (e.zProcess(), delete e.zProcess)
                    }, !e.ignore_cur_process && n.processNav && n.processNav(e) ? (Q(e), a.close(null, !0), !1) : (X(e.nav.push, null, e), !1)
                }

                function W(e, t, n, i) {
                    var a, o = window,
                        r = o.photo,
                        s = window,
                        l = s.zlayer;
                    if (e && (a = /^photo(-?\d+_\d+)(?:\/([a-z0-9_-]+(\/rev)?)?)?$/i.exec(e))) {
                        if (i === !0) return !1;
                        var c = a[1] || "",
                            u = a[2] || "";
                        return r.zopen(!1, null, c, u, {
                            no_push: (n || {}).no_push
                        }), l && t !== !1 && "undefined" != typeof t && (l._st = t), !0
                    }
                    return i === !1 ? !1 : (l && l.close(), !0)
                }

                function G(t, i) {
                    if (e) t = "/" == t.substr(0, 1) ? t : "/" + t, i.replace ? history.replaceState(null, null, t) : history.pushState(null, null, t);
                    else {
                        var a = "/" == t.substr(0, 1) ? t : "/" + t,
                            o = "#" + a,
                            r = location.pathname + location.search + o;
                        c("base").href = a, i.replace ? location.replace(r) : (n = o, location.href = r)
                    }
                }

                function Q(t) {
                    if (!t.no_push && z.cur != t.nav.push) try {
                        G(t.nav.push, t), e && !t.no_push && (t.nav_init || t.nav_incr) ? (t.nav_init && (B = 0), t.nav_incr && B !== !1 && B++, B > H && (B = !1)) : B = !1
                    } catch (n) {
                        return U(t.nav.push, null, t)
                    }
                    z.cur = t.nav.push, z.path = t.nav.path, z.params = t.nav.params, z.hash = t.nav.hash, 0 !== z.path.indexOf("/") && (z.path = "/" + z.path)
                }

                function $() {
                    var e = location.hash || "";
                    n !== e && (n = e, i(!0)), setTimeout($, 100)
                }

                function K() {
                    var e = B;
                    return e && history.go(-e), B = !1, e ? !0 : !1
                }
                if (e) d(window, "popstate", function() {
                    Y(location, null, {
                        no_push: !0,
                        need_restore: !0
                    })
                });
                else {
                    var J = location.hash || "";
                    "#/" == J.substr(0, 2) && U(J.substr(1), null, {
                        replace: !0
                    });
                    var Z = function(e) {
                        e = (e || "").substr(1), e && "/" == e.substr(0, 1) || (e = location), Y(e, null, {
                            no_push: !0,
                            need_restore: !0
                        })
                    };
                    "onhashchange" in window ? d(window, "hashchange", function() {
                        Z(location.hash || "")
                    }) : ($(), i(function(e) {
                        Z(e)
                    }))
                }

                function et() {
                    var e = M(z.params);
                    e.z && W(e.z)
                }
                var tt = (location.pathname || "").replace(/^\/+/, "/"),
                    nt = location.search || "",
                    it = location.hash || "";
                return {
                    onBeforeGo: t["default"](),
                    go: Y,
                    al_go: X,
                    app_go: O,
                    hard_go: U,
                    go_after: F,
                    page_set: R,
                    page_get: L,
                    set: Q,
                    checkUrl: I,
                    tryHistoryBack: K,
                    zInit: et,
                    cur: tt + nt + it,
                    path: tt,
                    params: nt.substr(1),
                    hash: it,
                    clear: function() {
                        return a = []
                    },
                    getQuery: function(e) {
                        var t = M(z.params);
                        return e ? t[e] || null : t
                    }
                }
            }();
        window.nav = z
    }).call(t, n(68))
}, function() {
    var e = window,
        t = e.parseJSON,
        n = e.bind,
        i = e.clog,
        a = e.ajx2q,
        o = e.canUploadFile,
        r = e.attr,
        s = e.uploadFile,
        l = e.readFile,
        c = e.replace,
        u = e.clone,
        d = e.ce,
        p = window,
        f = p.ajax,
        h = {
            fallback: function(e) {
                var t = window,
                    n = t.nav,
                    i = e.nextSibling;
                return i ? !n.go(i) : !1
            },
            onUploadProgress: function(e) {
                var t = window,
                    n = t.photoview;
                n.updateUpload({
                    progress: e.loaded / e.total
                })
            },
            onUploadComplete: function(e) {
                var i = window,
                    a = i.photoview,
                    o = this,
                    r = e.target.responseText,
                    s = !1;
                try {
                    s = t(r)
                } catch (l) {
                    s = {
                        error: "ERR_CLIENT_BAD_RESPONSE: bad request response"
                    }
                }
                if (s.error) h.onUploadError.call(o, e);
                else {
                    o.xhr = null, o.photo_res = r, o.photo_size = s.size;
                    var c = o.static_url + s.x_src,
                        u = s.size[0],
                        d = s.size[1],
                        p = Math.min(u, d);
                    a.onClose = n(h.onClose, o), a.openCrop({
                        src: c,
                        max_scale: p / 200,
                        onSelect: n(h.onCropSelected, o)
                    })
                }
            },
            onUploadError: function(e) {
                var t = window,
                    n = t.photoview;
                i("upload error.", e.target.responseText), n.close()
            },
            onClose: function() {
                this.xhr && this.xhr.abort && this.xhr.abort()
            },
            onCropSelected: function(e, t, n) {
                var i = window,
                    o = i.photoview,
                    r = this,
                    s = r.photo_res,
                    l = r.photo_size,
                    c = l[0],
                    u = l[1],
                    d = Math.min(c, u),
                    p = Math.round(e * c),
                    _ = Math.round(t * u),
                    v = Math.round(n * d);
                if (r.upload_edit_url) var m = r.upload_edit_url;
                else var m = r.base_url + "upload.php?" + a({
                    act: "owner_photo_edit",
                    _query: s,
                    _origin: location.protocol + "//" + location.host
                });
                r.xhr = f.plainpost(m, {
                    _crop: [p, _, v].join(",")
                }, function(e) {
                    h.onCropSuccess.call(r, e)
                }, function() {
                    h.onCropCancel.call(r)
                }, !0), o.updateCrop({
                    saving: !0
                })
            },
            onCropSuccess: function(e) {
                var t = window,
                    n = t.photoview,
                    i = this;
                i.xhr = f.post("/photos.php?act=done_photo", {
                    _ajax: 1,
                    _query: e
                }, {
                    onDone: function() {
                        n.close()
                    },
                    onFail: function() {
                        h.onCropCancel.call(i)
                    }
                })
            },
            onCropCancel: function() {
                var e = window,
                    t = e.photoview;
                t.updateCrop({
                    saving: !1
                })
            },
            start: function(e, t) {
                var i = window,
                    a = i.photoview;
                if (!e || !o()) return h.fallback(e, t);
                var d = e.files,
                    p = d[0] || !1,
                    f = r(e, "data-upload-url"),
                    _ = r(e, "data-base-url"),
                    v = r(e, "data-static-url");
                if (!p) return !1;
                if (!f) return h.fallback(e, t);
                var m = {
                    upload_url: f,
                    base_url: _,
                    static_url: v,
                    file: p
                };
                return m.xhr = s(f, {
                    photo: p
                }, {
                    onProgress: n(h.onUploadProgress, m),
                    onComplete: n(h.onUploadComplete, m),
                    onError: n(h.onUploadError, m)
                }), l(p, function(e) {
                    a.updateUpload({
                        thumb: e
                    })
                }), c(u(e), e), a.onClose = n(h.onClose, m), a.openUpload({
                    src: null
                }), !1
            },
            getCropFromTag: function(e, t, n) {
                if (!e) return !1;
                if (3 == e.length) var i = +e[0],
                    a = +e[1],
                    o = +e[2];
                else {
                    var i = +e[0] * t / 1e4,
                        a = +e[1] * n / 1e4,
                        o = +e[2] * t / 1e4,
                        r = +e[3] * n / 1e4;
                    if (o > r && (i += (o - r) / 2, o = r), 200 > o) {
                        var s = (200 - o) / 2;
                        i -= s, a -= s, o = 200
                    }
                    o = Math.min(Math.max(o, 200), Math.min(t, n)), i = Math.min(Math.max(i, 0), t - o), a = Math.min(Math.max(a, 0), n - o)
                }
                return [i / t, a / n, o / Math.min(t, n)]
            },
            crop: function(e) {
                if (!e || !e.size && !e.url) return !1;
                var t = window,
                    i = t.photoview,
                    a = {
                        upload_edit_url: e.upload_url
                    };
                if (e.size) {
                    a.photo_size = e.size;
                    var o = Math.min(e.size[0], e.size[1]);
                    i.onClose = n(h.onClose, a), i.openCrop({
                        src: e.thumb,
                        max_scale: o / 200,
                        rect: h.getCropFromTag(e.rect, e.size[0], e.size[1]),
                        onSelect: n(h.onCropSelected, a)
                    })
                } else {
                    var r = d("img", {
                        src: e.url,
                        onload: function() {
                            a.photo_size = [r.width, r.height];
                            var t = Math.min(r.width, r.height);
                            i.updateCrop({
                                src: e.thumb,
                                max_scale: t / 200,
                                rect: h.getCropFromTag(e.rect, r.width, r.height),
                                onSelect: n(h.onCropSelected, a)
                            })
                        }
                    });
                    i.onClose = n(h.onClose, a), i.openCrop({
                        src: !0
                    })
                }
                return !0
            }
        };
    window.ownerPhotoUpload = h
}, function() {
    var e = window,
        t = e.ge,
        n = e.attr,
        i = (e.clog, e.lsCheck),
        a = e.isEmpty,
        o = e.vkNow,
        r = e.lsGet,
        s = e.intval,
        l = e.lsSet,
        c = e.extend,
        u = e.hasClass,
        d = e.gpeByClass,
        p = e.each,
        f = e.geByClass,
        h = e.addClass,
        _ = e.checkPostsSeen,
        v = e.hashCode,
        m = window,
        g = m.ajax,
        w = window,
        y = w.nav,
        b = {
            _seen: {},
            _saved: {},
            _saveTimer: null,
            _sendTimer: null,
            _cleanTimer: null,
            LS_ADS_EVENTS: "ads.events",
            postsGetRaws: function(e) {
                e = t(e);
                var i, a = e.id || "",
                    o = n(e, "data-copy") || "",
                    r = {};
                (i = a.match(/^wall(-?\d+_\d+)$/)) && (r[i[1]] = 1, (i = o.match(/^(-?\d+_\d+)$/)) && (r[i[1]] = -1));
                var s = n(e, "data-ad-view");
                return s && (r["ad_" + s] = 1), r
            },
            seen: function(e) {
                var t, n, i, a, o, r, s = window,
                    l = s.vk;
                if (l.id && e.length) {
                    for (t in e)
                        for (n in e[t]) a = e[t][n], o = b._seen[n], r = b._saved[n], -1 == r || -1 == o || 1 == a && (r || o) || (i = b._seen[n] = a);
                    i && (clearTimeout(b._saveTimer), b._saveTimer = setTimeout(b.save, 2500), clearTimeout(b._sendTimer), b._sendTimer = setTimeout(b.send, 5e3))
                }
            },
            save: function() {
                if (!i() || a(b._seen)) return b._seen;
                var e, t, n, c, u, d = window,
                    p = d.vk,
                    f = Math.floor((p.ts + Math.floor((o() - p.started) / 1e3)) / 3600),
                    h = r("posts_sent") || {},
                    _ = r("posts_seen") || {};
                for (t in b._seen) u = b._seen[t], n = t.split("_"), "ad" !== n[0] && (n[0] = s(n[0]), n[1] = s(n[1])), c = (h[n[0]] || {})[n[1]], n[0] != p.id && (!c || -1 == u && c > 0) && (_[n[0]] || (_[n[0]] = {}), (!_[n[0]][n[1]] || -1 == u && _[n[0]][n[1]] > 0) && (e = _[n[0]][n[1]] = f * u)), b._saved[t] = u;
                b._seen = {}, e && l("posts_seen", _)
            },
            getSeenData: function() {
                var e, t, n, a = {},
                    o = [];
                if (i()) a = r("posts_seen");
                else {
                    n = b.save();
                    for (e in n) {
                        var l = n[e],
                            c = e.split("_");
                        c[0] = s(c[0]), c[0] && (c[1] = s(c[1])), a[c[0]] || (a[c[0]] = {}), (!a[c[0]][c[1]] || -1 == l && a[c[0]][c[1]] > 0) && (a[c[0]][c[1]] = l)
                    }
                }
                for (e in a) {
                    n = [];
                    for (t in a[e]) n.push(a[e][t] > 0 ? t : -t);
                    n.length && o.push(e + "_" + n.join(","))
                }
                return o.length ? {
                    seen: a,
                    data: o.join(";")
                } : ""
            },
            onSend: function(e) {
                var t, n;
                if (!i()) return c(b._saved, b._seen);
                var t, n, o = r("posts_seen") || {},
                    s = r("posts_sent") || {};
                for (t in e) {
                    for (n in e[t]) s[t] || (s[t] = {}), -1 != s[t][n] && (s[t][n] = e[t][n]), (o[t] || {})[n] && delete o[t][n];
                    o[t] && a(o[t]) && delete o[t]
                }
                l("posts_seen", o), l("posts_sent", s), clearTimeout(b._cleanTimer), b._cleanTimer = setTimeout(b.clean, 1e4)
            },
            send: function() {
                var e = window,
                    t = e.cur,
                    n = window,
                    i = n.vk,
                    a = b.getSeenData();
                if (a.data) {
                    if (!i.id) return b.clear();
                    var o = "";
                    t && t.module ? o = t.module : y && "/feed" == y.cur && (o = "feed"), g.post("/", {
                        _ajax: 1,
                        act: "ping",
                        _pstat: a.data,
                        _pstatref: o
                    }, {
                        onDone: function() {
                            b.onSend(a.seen)
                        }
                    })
                }
            },
            clean: function() {
                var e, t, n, i = window,
                    s = i.vk,
                    c = Math.floor((s.ts + Math.floor((o() - s.started) / 1e3)) / 3600),
                    u = r("posts_sent") || {};
                for (e in u) {
                    for (t in u[e]) n = u[e][t], c - (n > 0 ? n : -n) > 24 && delete u[e][t];
                    a(u[e]) && delete u[e]
                }
                l("posts_sent", u), b.cleanAdsEvents()
            },
            clear: function() {
                l("posts_seen", {}), l("posts_sent", b._saved = b._seen = {}), l(b.LS_ADS_EVENTS, b._lsAdsEvents = {})
            },
            getStatsObj: function(e) {
                return e = t(e), u("_stats_cont", e) ? e : d("_stats_cont", e)
            },
            getAdsEvents: function() {
                var e = b._lsAdsEvents;
                return e || (e = b._lsAdsEvents = r(b.LS_ADS_EVENTS) || {}), e
            },
            cleanAdsEvents: function() {
                var e = b.getAdsEvents(),
                    t = (new Date).getTime() / 1e3 | 0,
                    n = 3600,
                    i = !1;
                p(e, function(a, o) {
                    t - o >= n && (delete e[a], i = !0)
                }), i && l(b.LS_ADS_EVENTS, e)
            },
            checkPixelEvent: function(e, t) {
                var n = e.getAttribute("data-ad-block-uid"),
                    i = -1 !== indexOf(["load", "impression"], t);
                if (!n || !i) return !0;
                try {
                    var a = v("" + t + n),
                        o = b.getAdsEvents();
                    if (o[a]) return !1;
                    var r = (new Date).getTime() / 1e3 | 0;
                    o[a] = r, l(b.LS_ADS_EVENTS, o)
                } catch (s) {
                    try {
                        console.log(s.message)
                    } catch (c) {}
                }
                return !0
            },
            getPixelElements: function(e, t) {
                var i = [];
                return p(f(t, e), function() {
                    n(this, "data-src") && i.push(this)
                }), i
            },
            sendPixels: function(e) {
                p(e, function() {
                    n(this, "src", n(this, "data-src")), n(this, "data-src", !1), h("_cntr", this)
                })
            },
            viewed: function(e) {
                if (e = b.getStatsObj(e)) {
                    var t = b.getPixelElements(e, "_cntr_view");
                    t.length && b.checkPixelEvent(e, "impression") && b.sendPixels(t)
                }
            },
            clicked: function(e) {
                if (e = b.getStatsObj(e)) {
                    n(e, "data-clicked", "1");
                    var t = b.getPixelElements(e, "_cntr_click");
                    t.length && b.sendPixels(t), _()
                }
            }
        };
    b._sendTimer || (b._sendTimer = setTimeout(b.send, 1e4)), window.pStats = b
}, function() {
    var e = window,
        t = e.se,
        n = e.qs2obj,
        i = e.obj2qs,
        a = e.scrollTop,
        o = e.remove,
        r = e.each,
        s = e.geByClass,
        l = e.geByClass1,
        c = e.addClass,
        u = e.removeClass,
        d = e.after,
        p = e.ce,
        f = e.val,
        h = e.append,
        _ = e.evalJs,
        v = e.extend,
        m = e.scrollToHash,
        g = e.onBodyResize,
        w = e.onBodyScroll,
        y = e.hasClass,
        b = e.escapeAttr,
        k = e.before,
        C = window,
        S = C.thover,
        T = {
            onChange: t(),
            fast_load: !1,
            need_hard_go: !1,
            getHash: function(e) {
                if ("#player" == e.hash) return !1;
                var t = n(e.params);
                return delete t.z, e.path + i(t)
            },
            getAlias: function(e) {
                if (!e) return !1;
                var t = (e || "").split("?"),
                    a = t[0],
                    o = n(t[1]);
                return o.from && delete o.offset, delete o.from, delete o.z, a + i(o)
            },
            set: function(e, t, n, i) {
                var w = window,
                    y = w.zlayer,
                    b = window,
                    k = b.cur,
                    C = window,
                    E = C.nav,
                    x = window,
                    A = x.menu,
                    M = window,
                    P = M.audioplayer;
                n = n || {};
                var D = a(),
                    N = null;
                if (y.opened() && (D = y._st), n.force || (N = o("m"), r(s("_cntr", N), function() {
                        o(this)
                    }), o(l("_cntrs", N))), !n.after && !T.fast_load) {
                    var z = T.getHash(E);
                    T.save(z, {
                        html: null,
                        st: D,
                        page: N,
                        state: T.stash(),
                        cur: window.cur
                    }, !0)
                }
                if (n.before || T.clear(), (n.before || !n.before && !n.after) && (window.lm_qsearch_counter ? window.lm_qsearch_counter++ : window.lm_qsearch_counter = 1), n.before) {
                    T.fast_load = !0, i && i.target && c("__al_target", i.target);
                    var B = N.cloneNode(!0);
                    i && i.target && u("__al_target", i.target);
                    var H = l("__al_target", B);
                    u("__al_target", H), n.beforeAppend && n.beforeAppend(B, H), d(B, "l"), k.toggleHeaderSearch && k.toggleHeaderSearch(!1), n.afterAppend && n.afterAppend(B), A && A.clear_hover(), A && A.closeSearch(), A && A.enabled(!0)
                } else {
                    if (i && i.zProcess && i.zProcess(0, !0) && delete i.zProcess, i && E.set(i), T.need_hard_go) return E.hard_go(E.cur, null, {
                        replace: !0
                    });
                    if (!n.force) {
                        t.title && (document.title = t.title);
                        var j = t.page;
                        if (j || (j = p("div", {
                                id: "m"
                            }), f(j, t.html)), A.opened()) {
                            var R = p("div", {
                                id: "m_helper",
                                onclick: A.close
                            });
                            h(R, j)
                        }
                        d(j, "l")
                    }
                    T.fast_load = !1, S.clear(), t.lm && A.refresh(t.lm), t.bc && (window.bodyNode.className = t.bc), y.opened(), i && i.zProcess ? i.zProcess(0, !1) && delete i.zProcess : y.close(), n.force || (t.js && _(t.js), t.state && T.stash(t.state), t.cur && v(window.cur, t.cur), T.save(e, t));
                    var L = i ? i.nav && i.nav.hash : E.hash;
                    t.st || !L ? a(t.st || 0, 10) : n.no_scroll && !n.force ? a(D, 10) : m(), P && P.initAudio(), AudioMessagePlayer && AudioMessagePlayer.redrawWaves()
                }
                var I = window,
                    q = I.Tabs;
                g(q.actualizeShowMoreVisibility), q.actualizeShowMoreVisibility(), T.onChange(!0)
            },
            save: function(e, t, n) {
                if (e) {
                    var i = window,
                        a = i.nav,
                        o = n ? a.page_get(e) : {};
                    o && a.page_set(e, v(o, t), T.getAlias(e))
                }
            },
            restore: function(e) {
                var t = window,
                    n = t.nav,
                    i = n.page_get(e);
                return i || (i = n.page_get(T.getAlias(e))), i ? i : !1
            },
            stash: function(e) {
                var t = window,
                    n = t.cur;
                return window.cur && n.stash && n.stash(e) || !1
            },
            clear: function() {
                var e = window,
                    t = e.cur,
                    n = window,
                    i = n.zlayer,
                    a = window,
                    o = a.menu,
                    s = window,
                    l = s.tooltip;
                w("__clear"), g("__clear"), o && o.initEvents(), i.isReady && i.initEvents(), l && l.clear(), window.cur && t.destroy && r(t.destroy, function() {
                    this()
                }), window.cur = {
                    destroy: []
                }
            },
            setMhead: function(e, t, n, i) {
                var a = l("mhead", e),
                    r = l("mhb_logo", a),
                    s = l("mh_header", e),
                    c = !1,
                    u = window,
                    d = u.nav;
                if (!n) return void(t && f(s, t));
                n === !0 ? c = d.path + (d.params ? "?" + d.params : "") : n && (c = n), t || (t = f(s) || "&nbsp;");
                var h = l("mhb_back", e),
                    _ = "",
                    v = y("mh_nobr", h) ? " mh_nobr" : "",
                    m = i ? ' onclick="' + i + '"' : "";
                if (_ = "/" == c ? '<div class="hb_wrap mhb_back' + v + '"' + m + '><h1 class="hb_btn mh_header">' + t + "</h1></div>" : '<a href="' + b(c) + '" class="hb_wrap mhb_back' + v + ' al_back" accesskey="0"' + m + '><h1 class="hb_btn mh_header mhi_back">' + t + "</h1></a>", a && r) {
                    var g = l("mhb_notify", e);
                    f(a, (window.al && window.al.menu ? '<a href="/" class="hb_wrap mhb_home" accesskey="*" onclick="return menu.toggle(event);"><div class="hb_btn mhi_home">&nbsp;</div></a>' : '<a href="/" class="hb_wrap mhb_home mhb_vkhome" accesskey="*"><div class="hb_btn mhi_home mhi_vkhome">&nbsp;</div></a>') + '<div id="header_msgs" class="hb_wrap mhb_notify' + (!g || y("mhb_no_notify", g) ? " mhb_no_notify" : "") + '">' + f(g) + "</div>" + _)
                } else if (h) {
                    var w = p("div");
                    f(w, _), k(w.firstChild, h), o(h)
                }
            }
        };
    window.page = T
}, function() {
    var e = window,
        t = e.geByClass1,
        n = e.tag,
        i = e.geByTag1,
        a = e.ce,
        o = e.hasClass,
        r = e.attr,
        s = e.removeEvent,
        l = e.addEvent,
        c = e.qs2obj,
        u = e.each,
        d = e.len,
        p = e.extend,
        f = e.copy,
        h = e.onDOMReady,
        _ = e.scrollTop,
        v = e.getY,
        m = e.scrollToEl,
        g = e.scrollToHash,
        w = e.obj2qs,
        y = e.escapeAttr,
        b = e.remove,
        k = e.val,
        C = e.toggleClass,
        S = e.show,
        T = e.hide,
        E = e.gpeByClass,
        x = e.geByTag,
        A = e.addClass,
        M = e.checkEvent,
        P = e.unescapeAttr,
        D = e.removeClass,
        N = e.ge,
        z = e.cancelEvent,
        B = e.isUndefined,
        H = window,
        j = H.ajax,
        R = window,
        L = R.nav,
        I = window,
        q = I.post,
        F = window,
        O = F.zlayer,
        U = function() {
            var e, H, R, I, F, X, Y, V, W, G, Q, $, K, J, Z, et = 1,
                tt = !1,
                nt = {},
                it = {},
                at = {},
                ot = null,
                rt = null,
                st = !1,
                lt = null,
                ct = null,
                ut = !0,
                dt = !1,
                pt = 0,
                ft = !1;

            function ht() {
                if (e = t("photo_view", "m"), !e) return L.al_go(L.cur), !1;
                if (H = t("pv_summary", e), Q = t("photo_msg", e), $ = t("pv_tag_wrap", e), F = t("pv_body", e), X = t("thumb_item", F), I = t("pv_nav", F), W = t("pv_photo_wrap", X), Y = "a" == n(X) ? X : !1, V = i("img", X), G = t("pv_footer", e), (R = t("summary_loading", H)) || (R = a("div", {
                        innerHTML: '<i class="i_loading"></i>',
                        className: "summary_loading"
                    }, {
                        display: "none"
                    }), H.appendChild(R)), tt = o("pv_touch_full", F), I) {
                    var c = t("pv_nav_left", I),
                        u = t("pv_nav_z", I),
                        d = t("pv_nav_right", I);
                    K = t("pv_nav_link", c), Z = t("pv_nav_link", u), J = t("pv_nav_link", d), r(K, "onclick", "return photo.prev(event);"), r(J, "onclick", "return photo.next(event);"), r(Y, "onclick", tt ? !1 : "return photo.next(event);"), j.prepare_click([K, J, Y])
                }
                return s(window, "orientationchange", kt), l(window, "orientationchange", kt), !0
            }

            function _t() {
                var t = window,
                    n = t.photoview;
                return n ? ft ? !0 : (ft = !0, n.onPhotoChange = function(e, t) {
                    pt = e, St(e, t)
                }, n.onUpdate = function() {}, n.onClose = function(t) {
                    if (!Tt(t)) return !0;
                    var n = c(L.params);
                    e && n.list == rt && Ct(pt, !0)
                }, !0) : !1
            }

            function vt(e) {
                var t = window,
                    n = t.photoview,
                    i = [];
                return u(e, function(e, t) {
                    return t ? void i.push(nt[t.id] = t) : !0
                }), ot && n && n.saveSource(yt(ot)), i
            }

            function mt(e) {
                return nt[e] || {}
            }

            function gt(e, t, n) {
                if (null === t) return void delete it[e];
                it[e] || (it[e] = new Array(n ? n : d(t))), vt(t);
                var i = it[e];
                st && i.reverse(), p(i, t), st ? (ot = f(i), i.reverse()) : ot = i
            }

            function wt(e) {
                if ("string" != typeof e) return e;
                var t = it[e] || [];
                return st ? f(t).reverse() : t
            }

            function yt(e) {
                var t = wt(e),
                    n = new Array(t.length),
                    i = c(L.params);
                delete i.z;
                for (var a in t) {
                    var o = ot[a],
                        r = "photo" + o.id + "?list=" + rt + (st ? "&rev=1" : "") + (ct ? "&from=" + ct : "");
                    n[a] = {
                        id: o.id,
                        photo_url: "/" + r,
                        like_url: "/like?act=" + (o.likes_me ? "del" : "add") + "&object=photo" + o.id + "&from=" + encodeURIComponent(r) + "&list=" + rt + "&hash=" + o.like_hash,
                        likes_me: o.likes_me,
                        src: o.original_src,
                        tags: o.tags,
                        caption: o.caption,
                        likes_cnt: o.likes_cnt,
                        replies_cnt: o.replies_cnt
                    }
                }
                return n
            }

            function bt(e, t) {
                t || (t = ot);
                for (var n in t)
                    if (ot[n].id == e) return +n;
                return -1
            }

            function kt() {
                L.hash || h(function() {
                    if (t("photo_view")) {
                        var e = _();
                        F && v(F) < e && m(F)
                    }
                })
            }

            function Ct(t, n, a) {
                var o = window,
                    s = o.cur,
                    l = window,
                    d = l.lang,
                    f = ot[t],
                    h = 1 == ot.length;
                if (f) {
                    L.hash ? g(L.hash) : kt();
                    var _ = {};
                    lt && (_.list = lt), st && (_.rev = 1), ct && (_.from = ct);
                    var v = w(_),
                        m = "photo" + f.id + v,
                        S = f.photo,
                        T = (xt(t - 1) || {}).id,
                        E = (xt(t + 1) || {}).id;
                    if (h || (Y.href = "/photo" + E + v, K && (K.href = "/photo" + T + v), J && (J.href = "/photo" + E + v), j.prepare_click([K, J, Y])), tt) {
                        var x = "photo" + f.id + "/" + lt + (st ? "/rev" : ""),
                            A = p({}, _, {
                                z: x
                            }),
                            M = "/photo" + f.id + w(A);
                        if (O._lastNav) {
                            var P = O._lastNav;
                            A = c(P.params), A.z = x, M = P.path + w(A) + P.hash
                        }
                        Z && (Z.href = M), j.prepare_click(Z), r(Z, "onclick", "return photo.fullscreen('" + y(M) + "', event);")
                    }
                    if (V && V.src != S) {
                        V.onload = null, b(V);
                        var D = "";
                        u(f.tags, function(e, t) {
                            if (!e || 0 == e) return !0;
                            var n = t[0][0],
                                i = t[0][1],
                                a = t[0][2],
                                o = t[0][3];
                            D += '<div class="pv_tag" style="left: ' + n + "%; top: " + i + "%; width: " + a + "%; height: " + o + '%;" id="pv_tag' + e + '" onclick="return photo.selectTag(' + e + ', event, true);"><div class="fill"></div></div>'
                        }), k(W, '<img src="' + S + '" alt="" class="ph_img" />' + D), V = i("img", W)
                    }
                    C("photo_deleted", e, !!f.deleted), C("pv_one_photo", F, 1 == ot.length), k(H, (d.mobile_photos_photo_header || "").replace("%s", pt + 1).replace(/%s|{count}/, ot.length)), k($, f.tag_info || "");
                    var N = "",
                        z = (s.sticker_panel || "").split("photo-0_0").join("photo" + f.id),
                        B = (f.comments_html || "").split("<!--stickers_panel-->").join(z);
                    if (f.caption && (N += '<div class="mv_description">' + f.caption + "</div>"), f.tags_list && (N += '<dl class="pv_tags_list si_row"><dt>' + d.mobile_photos_on_this_photo + "</dt><dd>" + f.tags_list + "</dd></dl>"), f.album_link && (N += '<dl class="si_row"><dt>' + d.mobile_photos_photo_album_label + "</dt><dd>" + f.album_link + "</dd></dl>"), f.author_link && (N += '<dl class="si_row"><dt>' + d.mobile_photos_photo_author_label + "</dt><dd>" + f.author_link + "</dd></dl>"), (f.date || f.likes || f.publish) && (N += '<div class="vi_values">' + (f.date || "") + (f.likes || "") + (f.publish || "") + "</div>"), k(G, '<div class="like_box bl_cont"><div class="photo_msg bl_none">' + (f.deleted || "") + '</div><div class="mv_details">' + N + '</div><ul class="mv_actions">' + (f.actions || "") + '</ul></div><div class="comments_wrap bl_cont">' + B + "</div>"), q.stickersInit(), s.replyTo = 0, j.refreshLinks(f.fv_link, f.app_link), U.closeTags(), !n) {
                        var R = "/" + m;
                        L.go(R, null, {
                            no_push: n,
                            push_only: !0,
                            replace: a
                        })
                    }
                }
                ut || (At(), Mt())
            }

            function St(e, t) {
                {
                    var n = window,
                        i = n.photoview,
                        a = ot[e];
                    1 == ot.length
                }
                if (t = t || {}, a) {
                    var o = c(L.params);
                    if (o.z = "photo" + a.id + "/" + lt + (st ? "/rev" : ""), t.no_open || i.open(e, yt(ot), {
                            local: t.local
                        }), !t.local && !t.crop) {
                        var r = L.path + w(o) + L.hash;
                        L.go(r, null, {
                            no_push: t.no_push,
                            push_only: !0,
                            replace: t.replace,
                            nav_init: !t.no_open,
                            nav_incr: !0
                        })
                    }
                }
                t.local || t.crop || At(!0)
            }

            function Tt(e) {
                var t = c(L.params);
                if (delete t.z, !e.local && !e.crop) {
                    if (L.tryHistoryBack()) return !1;
                    var n = L.path + w(t) + L.hash;
                    L.go(n, null, {
                        push_only: !0
                    })
                }
                return !0
            }
            var Et = !1;

            function xt(e) {
                return e > 0 ? e %= ot.length : e = (100 * ot.length + e) % ot.length, ot[e]
            }

            function At(e) {
                if (!Et) {
                    for (var t = window, n = t.photoview, i = !1, a = 1, o = 0; 5 > o; o++) {
                        var r = o + pt,
                            s = xt(r);
                        if (!s || !s.owner_id) {
                            i = r, a = 1;
                            break
                        }
                    }
                    if (i === !1)
                        for (var o = -1; o > -3; o--) {
                            var r = o + pt,
                                s = xt(r);
                            if (!s || !s.owner_id) {
                                i = r, a = -1;
                                break
                            }
                        }
                    if (i !== !1) {
                        var l = xt(pt);
                        if (l) {
                            Et = !0, S(R);
                            var c = window,
                                u = c.cur,
                                d = l.owner_id || (l.id || "").split("_")[0],
                                f = r == pt && l.id ? "/photo" + l.id : "/photos.php",
                                h = {
                                    _ajax: 1,
                                    oid: d,
                                    list: rt,
                                    offset: i,
                                    direction: a,
                                    rev: st ? 1 : 0
                                };
                            u.stickers || (h.need_stickers = 1), L.getQuery("community") && (h.community = L.getQuery("community")), j.post(f, h, {
                                onDone: function(t, i, a, o) {
                                    T(R), Et = !1, a && (u.replyNames || (u.replyNames = {}), p(u.replyNames, a)), o && p(u, o), gt(rt, t, i || ot.length), e ? n && n.saveSource(yt(rt), !1, !0) : Ct(pt, !0)
                                }
                            })
                        }
                    }
                }
            }

            function Mt() {
                for (var e = 0, t = pt + 1; et > e; e++) {
                    var n = e + t,
                        i = xt(n),
                        a = i && i.photo;
                    if (a && !at[a]) {
                        var o = at[a] = new Image;
                        o.src = a, o.onload = function() {
                            at[a] = !0
                        }
                    }
                }
            }

            function Pt(e, t) {
                if (ot = [], e) {
                    var n = E("thumbs_list", e) || E("wiki_body", e);
                    n && u(x("img", n), function() {
                        var e = this,
                            t = r(e, "data-id"),
                            n = r(e, "data-src_big");
                        if (!t || !n) return !0;
                        n = n.split("|");
                        var i = n[0],
                            a = +n[1] || 0,
                            o = +n[2] || 0;
                        ot.push({
                            id: t,
                            original_src: i,
                            width: a,
                            height: o
                        })
                    })
                }
                ot.length || ot.push({
                    id: t,
                    original_src: !0
                })
            }

            function Dt() {
                A("pv_icons_hide", F)
            }
            return {
                save: vt,
                get: mt,
                saveSource: gt,
                getSource: wt,
                clear: function() {
                    s(window, "orientationchange", kt)
                },
                open: function(e, t, n, i, a) {
                    if (M(n)) return !0;
                    if (!ht()) return !0;
                    if (st = !1, "/rev" == t.substr(-4) && (t = t.slice(0, -4), st = !0), ct = i || null, t) rt = t;
                    else {
                        var o = mt(e);
                        rt = o.album ? "album" + o.album : ""
                    }
                    if (lt = rt, ot = wt(rt), pt = bt(e, ot), -1 === pt) {
                        var o = mt(e);
                        if (!o.id) return !1;
                        ot = [o], pt = 0
                    }
                    ut = ot.length < 2, dt = !1;
                    var r = ot[pt] && e != ot[pt].id;
                    return Ct(pt, a && !r, r), !1
                },
                prev: function(e) {
                    return M(e) ? !0 : Et && !xt(pt - 1) ? !1 : ht() ? ut ? U.close() : (--pt < 0 && (pt = ot.length - 1), Ct(pt), Dt(), !1) : !0
                },
                next: function(e) {
                    return M(e) ? !0 : Et && !xt(pt + 1) ? !1 : ht() ? ut ? !1 : (++pt >= ot.length && (pt = 0), Ct(pt), Dt(), !1) : !0
                },
                close: function(e) {
                    return M(e) ? !0 : !1
                },
                fullscreen: function(e, t) {
                    return o("pv_photo_tags_selected", F) ? !0 : L.go(P(e), t, {
                        need_restore: !0
                    })
                },
                showIcons: function() {
                    var e = t("photo_view", "m");
                    if (!e) return !1;
                    var n = t("pv_body", e);
                    return n ? void setTimeout(function() {
                        D("pv_hidden_icons", n), setTimeout(function() {
                            A("pv_icons_hide", n)
                        }, 2e3)
                    }, 10) : !1
                },
                selectTag: function(e, n, i) {
                    if (i && !o("pv_photo_tags_selected", F)) return !0;
                    var a = N("pv_tag" + e),
                        r = t("pv_tag_selected", "pv_photo_tags_wrap"),
                        s = N("pv_tag_label" + e),
                        l = t("pv_tag_label_selected", "pv_tags_list");
                    return o("pv_tag_selected", a) || (D("pv_tag_selected", r), A("pv_tag_selected", a)), o("pv_tag_label_selected", s) ? L.go(s, n) : (D("pv_tag_label_selected", l), A("pv_tag_label_selected", s), A("pv_photo_tags_selected", F), z(n), !1)
                },
                closeTags: function(e) {
                    if (!o("pv_photo_tags_selected", F)) return !0;
                    var n = t("pv_tag_selected", "pv_photo_tags_wrap"),
                        i = t("pv_tag_label_selected", "pv_tags_list");
                    return n && D("pv_tag_selected", n), i && D("pv_tag_label_selected", i), D("pv_photo_tags_selected", F), z(e), !1
                },
                init: function(e, t, n, i, a, o, r) {
                    et = B(r.preload) ? 1 : r.preload, st = !!a, U.saveSource(e, t, n), h(function() {
                        U.open(i, e + (a ? "/rev" : ""), null, o, !0)
                    })
                },
                zopen: function(e, t, n, i, a) {
                    if (M(t)) return !0;
                    a = a || {}, _t(), st = !1, "/rev" == i.substr(-4) && (i = i.slice(0, -4), st = !0);
                    var o = c(L.params);
                    if (delete o.z, ct = a.from || !1, i) rt = i;
                    else {
                        var r = mt(n);
                        rt = r.album ? "album" + r.album : ""
                    }
                    if (lt = rt, ot = wt(rt), ot.length || Pt(e, n), pt = bt(n, ot), -1 === pt && (Pt(e, n), pt = bt(n, ot)), -1 === pt) {
                        var r = mt(n);
                        if (!r.id) return !0;
                        ot = [r], pt = 0
                    }
                    ut = ot.length < 2, dt = !1;
                    var s = ot[pt] && n != ot[pt].id;
                    return St(pt, {
                        no_push: a.no_push && !s,
                        replace: s,
                        local: a.local
                    }), z(t), !1
                },
                zclose: function(e) {
                    return M(e) ? !0 : !1
                }
            }
        }();
    window.photo = U
}, function() {
    var e = window,
        t = e.hasClass,
        n = e.ge,
        i = e.geByClass1,
        a = e.getCw,
        o = e.getCh,
        r = e.attr,
        s = e.setStyle,
        l = e.extend,
        c = e.preventEvent,
        u = e.isUndefined,
        d = e.clog,
        p = e.val,
        f = e.vkNow,
        h = e.getW,
        _ = e.getH,
        v = e.scrollTop,
        m = e.gpeByClass,
        g = e.toggleClass,
        w = e.cancelEvent,
        y = e.qs2obj,
        b = e.obj2qs,
        k = e.removeClass,
        C = e.addClass,
        S = e.addEvent,
        T = e.removeEvent,
        E = e.len,
        x = e.show,
        A = e.each,
        M = e.hide,
        P = e.escapeAttr,
        D = e.htsc,
        N = e.toggle,
        z = e.formatNum,
        B = e.remove,
        H = e.append,
        j = e.reflow,
        R = window,
        L = R.ajax,
        I = window,
        q = I.thover,
        F = window,
        O = F.nav,
        U = window,
        X = U.page,
        Y = window,
        V = Y.PhotoLike,
        W = window,
        G = W.zlayer,
        Q = window,
        $ = Q.photo,
        K = function() {
            var e = !1,
                R = !1,
                I = !1,
                F = !1,
                U = !1,
                Y = !1,
                W = !1,
                Q = !1,
                J = !1,
                Z = !1,
                et = !1,
                tt = !1,
                nt = !1,
                it = !1,
                at = !1,
                ot = !1,
                rt = !1,
                st = !1,
                lt = !1,
                ct = !1,
                ut = !1,
                dt = !1,
                pt = !1,
                ft = {
                    min_scale: 1,
                    max_scale: 3,
                    min_scale_limit: .5,
                    max_scale_limit: 5,
                    anim_duration: 300,
                    inertia_duration: 300,
                    bounce_diff: 1.5,
                    crop_padding: 20,
                    crop_size: 250,
                    fps: 0
                };

            function ht() {
                var a = window,
                    o = a.lang,
                    r = '<div id="z_photoview"><div class="zpv_siblings"><div id="zpv_left" class="zpv_thumb_item"><img class="zpv_img" alt=""></div><div id="zpv_right" class="zpv_thumb_item"><img class="zpv_img" alt=""></div></div><div class="zpv_body"><div id="zpv_center" class="zpv_thumb_item"><img class="zpv_img" alt=""></div></div><div class="zpv_close_msg_wrap"><div class="zpv_close_msg">' + o.mobile_zphoto_move_to_close + '</div></div><div class="zpv_controls"><div class="mhead zpv_header"><a class="zpv_close_btn" onclick="return photoview.closePhoto(event);"><i class="zpv_close_icon"></i></a><div class="hb_wrap"><h1 id="zpv_summary" class="hb_btn mh_header"></h1></div></div><div class="zpv_zoom_btns"><a class="zpv_zoom_btn zpv_zoomin"><b class="zpv_zb_wrap"><i class="i_icon"></i></b></a><a class="zpv_zoom_btn zpv_zoomout"><b class="zpv_zb_wrap"><i class="i_icon"></i></b></a></div><div class="zpv_bottom"><div class="zpv_photo_desc_wrap"></div><div class="zpv_bottom_body"><table class="zpv_values like_box row_table"></table></div></div></div><div class="zpv_tags"></div><div class="zpva zpv_crop"><div class="zpv_crop_box"></div><div class="zpv_crop_loading"></div></div></div>',
                    s = t("x2", window.bodyNode),
                    l = "/images/mobile/zpv_icons" + (s ? "_2x" : "") + ".png?2";
                (new Image).src = l, G.create(r, la), e = n("z_photoview"), R = i("zpv_body", e), I = i("zpv_siblings", e), F = i("zpv_controls", e), J = i("zpv_zoom_btns", e), Y = i("zpv_close_msg_wrap", e), U = i("zpv_bottom", e), W = i("zpv_photo_desc_wrap", e), Q = i("zpv_values", U), Z = i("zpv_zoomin", J), et = i("zpv_zoomout", J), at = i("zpv_tags", e), ot = i("zpv_crop", e), tt = i("zpv_img", "zpv_center"), nt = i("zpv_img", "zpv_left"), it = i("zpv_img", "zpv_right")
            }

            function _t() {
                e = R = I = F = Y = !1, U = Q = !1, J = Z = et = !1, tt = nt = it = at = ot = !1
            }

            function vt(e) {
                var t = a(),
                    n = o(),
                    i = t / 2,
                    r = n / 2;
                if (e.touches) {
                    for (var s = 0, l = 0, c = 0, u = 0, d = Math.min(2, e.touches.length); d > l; l++) c += e.touches[l].pageX, u += e.touches[l].pageY, s++;
                    return d ? {
                        pageX: c / d - i,
                        pageY: u / d - r
                    } : {
                        pageX: -i,
                        pageY: -r
                    }
                }
                return {
                    pageX: e.pageX - i,
                    pageY: e.pageY - r
                }
            }

            function mt(e, t) {
                var n = t.pageX - e.pageX,
                    i = t.pageY - e.pageY;
                return Math.sqrt(n * n + i * i)
            }

            function gt(e) {
                if (!e) return e;
                var t = tt.width,
                    n = tt.height,
                    i = t / 2,
                    a = n / 2;
                return [e[0] + i, e[1] + a]
            }

            function wt(e) {
                if ("undefined" != typeof e.naturalWidth) return {
                    width: e.naturalWidth,
                    height: e.naturalHeight
                };
                var t = new Image;
                return t.src = e.src, {
                    width: e.width,
                    height: e.height
                }
            }

            function yt(e) {
                var t = r(e, "data-id"),
                    n = $i(Ui),
                    i = n.tags || {},
                    a = i[t] || [];
                return bt(a)
            }

            function bt(e) {
                return e[0] ? {
                    coords: {
                        x: e[0][0],
                        y: e[0][1],
                        w: e[0][2],
                        h: e[0][3]
                    },
                    name: e[1],
                    href: e[2],
                    al: e[3]
                } : {}
            }

            function kt(e) {
                s(I, "overflow", e ? "visible" : "hidden")
            }
            var Ct = null,
                St = null;

            function Tt(e, t, n, i, a, o, r, l, c) {
                if (!ft.fps || c) {
                    var u = !1,
                        d = l ? function() {
                            u || (u = !0, l())
                        } : !1;
                    o ? (s.animate(I, "transform", {
                        duration: o,
                        func: r
                    }, d), s.animate(tt, a === !1 ? "transform" : "transform, opacity", {
                        duration: o,
                        func: r
                    }, d), s.animate(at, a === !1 ? "transform" : "transform, opacity", {
                        duration: o,
                        func: r
                    }, d), s.animate(Y, a === !1 ? "transform" : "transform, opacity", {
                        duration: o,
                        func: r
                    }, d), An = !0) : An && (s.animate(I), s.animate(tt), s.animate(at), s.animate(Y), An = !1), s.transform(I, {
                        translate: [t, 0]
                    }), s.transform(tt, e, [n, i]), bi(e, n, i), a !== !1 && (s(tt, "opacity", a), (pn || fn) && (s(at, "opacity", a), hn = !0), gi(i, a)), vi(e)
                } else Ct = [e, t, n, i, a, o, r, l, !0], St || Et()
            }

            function Et() {
                Ct && (Tt.apply(window, Ct), Ct = null), clearTimeout(St), St = ft.fps ? setTimeout(Et, 1e3 / ft.fps) : null
            }

            function xt(e, t, n) {
                Zn(!0), Tt(Zt, Wt, Kt, Jt, Mn, e, t, n), Mn = !1
            }

            function At(e, t, n, i) {
                Tt(e.currentScale, e.curBodyX, e.currentX, e.currentY, !1, t, n, i)
            }

            function Mt(e) {
                e = gt(e || [0, 0]), s.transformOrigin(tt, e)
            }
            var Pt = !1,
                Dt = !1,
                Nt = null;

            function zt(e) {
                var t = e[1].pageX - e[0].pageX,
                    n = e[1].pageY - e[0].pageY,
                    i = Math.sqrt(t * t + n * n),
                    a = 180 * Math.atan2(n, t) / Math.PI;
                return {
                    distance: i,
                    angle: a
                }
            }

            function Bt(e) {
                if (!Pt) return {
                    scale: 1,
                    rotation: 0
                };
                if (e.length < 2) return {
                    scale: Pt.scale,
                    rotation: Pt.rotation
                };
                var t = zt(e),
                    n = t.distance / Pt.startDistance,
                    i = t.angle - Pt.startAngle; - 90 > i && (i += 360), i > 270 && (i -= 360);
                var a = {
                    scale: n,
                    rotation: i
                };
                return l(Pt, a), a
            }

            function Ht(e) {
                var t = zt(e);
                if (Pt) {
                    var n = t.distance / Pt.scale,
                        i = t.angle - Pt.rotation; - 180 > i && (i += 360), i > 180 && (i -= 360);
                    var a = {
                        startDistance: n,
                        startAngle: i
                    };
                    l(Pt, a)
                } else Pt = {
                    startDistance: t.distance,
                    startAngle: t.angle,
                    scale: 1,
                    rotation: 0
                }
            }

            function jt(e) {
                return l({
                    originalEvent: e
                }, e, Bt(e.touches), vt(e))
            }

            function Rt(e) {
                var t = e.touches;
                if (t) {
                    if (t.length > 5 || t.length < 2) return void(Pt && (_i(jt(e)), Pt = !1));
                    if (Pt) return void Ht(t);
                    fi(jt(e)), Ht(t)
                }
            }

            function Lt(e) {
                var t = e.touches;
                if (t) return t.length > 5 || t.length < 2 ? void(Pt && (_i(jt(e)), Pt = !1)) : void(Pt && hi(jt(e)))
            }

            function It(e) {
                var t = e.touches;
                if (t) return (t.length > 5 || t.length < 2) && Pt && (_i(jt(e)), Pt = !1), Pt ? void Ht(t) : void 0
            }

            function qt(e) {
                c(e);
                var t = (e.detail ? e.detail : e.wheelDelta) > 0 ? 1.05 : .95,
                    n = l({
                        originalEvent: e
                    }, e);
                Dt || (Dt = 1, ui(e), fi(l(n, {
                    scale: Dt
                }))), Dt *= t, hi(l(n, {
                    scale: Dt
                })), clearTimeout(Nt), Nt = setTimeout(function() {
                    _i(l(n, {
                        scale: Dt
                    })), pi(e), Dt = !1
                }, 200)
            }
            var Ft, Ot, Ut, Xt, Yt, Vt, Wt, Gt, Qt, $t, Kt, Jt, Zt, en, tn, nn, an, on, rn, sn, ln, cn, un, dn, pn, fn, hn, _n, vn, mn, gn, wn, yn, bn, kn, Cn, Sn, Tn, En, xn, An, Mn;

            function Pn() {
                un = !1, dn = !1, pn = !0, fn = !1, yn = !1, bn = !0, kn = !1, Cn = !1, An = !1, Mn = !1, lt = !1, ut = !1, dt = !1, pt = !1, Dn()
            }

            function Dn() {
                Ft = 0, Ot = 0, Ut = 0, Xt = 0, Yt = 1, Vt = !0, Wt = 0, Gt = 0, Qt = 0, $t = 1, Kt = 0, Jt = 0, Zt = 1, en = !1, tn = !1, nn = !1, an = !1, on = !1, rn = !1, sn = !1, ln = !1, cn = !1, hn = !1, _n = !1, vn = !1, mn = !1, gn = !1, wn = !1, Sn = !1, Tn = !1, En = !1, xn = !1
            }

            function Nn() {
                return {
                    lastScale: Yt,
                    deltaX: Ft,
                    deltaY: Ot,
                    pointX: Ut,
                    pointY: Xt,
                    curScale: $t,
                    currentScale: Zt,
                    curX: Gt,
                    curY: Qt,
                    currentX: Kt,
                    currentY: Jt,
                    curBodyX: Wt
                }
            }

            function zn(e, t, n) {
                n = n || Nn(), e = e || {};
                var i = l({}, n, e);
                return u(e.deltaX) || u(e.deltaY) ? u(e.pointX) || u(e.pointY) ? u(e.lastScale) ? u(e.currentScale) ? u(e.curScale) || (i.currentScale = i.lastScale * i.curScale, i.curX = i.pointX - i.deltaX * i.curScale, i.curY = i.pointY - i.deltaY * i.curScale, i.currentX = i.curX / i.currentScale, i.currentY = i.curY / i.currentScale) : (i.curScale = i.currentScale / i.lastScale, i.curX = i.pointX - i.deltaX * i.curScale, i.curY = i.pointY - i.deltaY * i.curScale, i.currentX = i.curX / i.currentScale, i.currentY = i.curY / i.currentScale) : (i.curScale = 1, i.currentScale = i.curScale * i.lastScale) : (i.curX = i.pointX - i.deltaX * i.curScale, i.curY = i.pointY - i.deltaY * i.curScale, i.currentX = i.curX / i.currentScale, i.currentY = i.curY / i.currentScale) : (i.pointX = i.curX + i.deltaX * i.curScale, i.pointY = i.curY + i.deltaY * i.curScale), u(e.curX) || (i.curX = e.curX, i.currentX = i.curX / i.currentScale), u(e.curY) || (i.curY = e.curY, i.currentY = i.curY / i.currentScale), t ? i : (Ft = i.deltaX, Ot = i.deltaY, Ut = i.pointX, Xt = i.pointY, Yt = i.lastScale, $t = i.curScale, Zt = i.currentScale, Gt = i.curX, Qt = i.curY, Kt = i.currentX, Jt = i.currentY, Wt = i.curBodyX, void 0)
            }

            function Bn() {
                var e = G.width || a(),
                    t = G.height || o();
                if (pt) var n = e,
                    i = Math.min(ft.crop_size, n - 2 * ft.crop_padding),
                    r = i,
                    s = i;
                else var r = e,
                    s = t;
                return {
                    width: r,
                    height: s
                }
            }

            function Hn(e) {
                var t = Bn(),
                    n = t.width,
                    i = tt.width * e,
                    a = (i - n) / 2,
                    o = -a;
                return 0 >= a && (o = a = 0), {
                    min: o,
                    max: a
                }
            }

            function jn(e) {
                var t = Bn(),
                    n = t.height,
                    i = tt.height * e,
                    a = (i - n) / 2,
                    o = -a;
                return 0 >= a && (o = a = 0), {
                    min: o,
                    max: a
                }
            }

            function Rn() {
                if (pt) var e = Fi ? Fi[0] : {
                        max_scale: ft.max_scale
                    },
                    t = 1,
                    n = e.max_scale;
                else var i = wt(tt),
                    t = ft.min_scale,
                    n = Math.max(ft.max_scale, i.width / a(), i.height / o());
                return {
                    min: t,
                    max: n
                }
            }

            function Ln(e) {
                d(Qt, e);
                var t = G.height || o(),
                    n = Math.abs(Xi) >= 10,
                    i = Math.abs(e) > 1,
                    a = t / 3.5,
                    r = Math.abs(Qt);
                return 0 > Qt * e && (n = !0), e = e || 0, r > a || !n && i ? (qn(e), !0) : (li() && (Mn = 1, xt(300), an = !1, fn && (fn = !1, Ci(!0))), !1)
            }

            function In() {
                ct && K.close()
            }

            function qn(e) {
                var t = G.height || o(),
                    n = 2 * Math.abs(Jt) > t ? .85 : 1.7;
                zn({
                    curY: (e > 1 ? t : -1 > e ? -t : Qt > 0 ? t : -t) / n
                }), Mn = 0, xt(150, "ease-in", In), s(F, "width", 0), kn = !0
            }

            function Fn(e) {
                var t = G.width || a(),
                    n = t / 2,
                    i = -n;
                return e = e || 0, (i > Wt || -1 > e) && on ? (Un(), !0) : (Wt > n || e > 1) && rn ? (Xn(), !0) : (li() && xt(300), !1)
            }

            function On() {
                yn !== !1 && (kt(!1), na(yn), s.transform(nt), s.transform(it), Tt(1, 0, 0, 0, 1), Mt(), yn = !1)
            }

            function Un() {
                var e = G.width || a(),
                    t = 1.05 * e;
                Kt -= (t + Wt) / Zt, Wt = -t, yn = Ui + 1, Xi--, xt(300, "ease-out", On), Bi(!1, !0), fn = !1, K.onPhotoChange && K.onPhotoChange(Ui + 1, {
                    no_open: !0,
                    local: ut,
                    crop: pt
                })
            }

            function Xn() {
                var e = G.width || a(),
                    t = 1.05 * e;
                Kt += (t - Wt) / Zt, Wt = t, yn = Ui - 1, Xi++, xt(300, "ease-out", On), Bi(!1, !0), fn = !1, K.onPhotoChange && K.onPhotoChange(Ui - 1, {
                    no_open: !0,
                    local: ut,
                    crop: pt
                })
            }

            function Yn() {
                var e = window,
                    t = e.lang,
                    n = t.mobile_photos_photoview_header || "",
                    i = yn !== !1 ? yn : Ui;
                n = n.replace("%s", i + 1), n = n.replace(/%s|{count}/, Fi.length), p("zpv_summary", n)
            }

            function Vn() {
                if (!Tn) return !1;
                var e = Qn(),
                    t = e[0],
                    n = e[1],
                    i = e[2];
                if (Gn(), !t) return !1;
                var a = nn || an ? 5.1 : 4.7,
                    o = t / a,
                    r = n * o - a * o * o / 2,
                    s = i * o - a * o * o / 2;
                if (o *= 530, r *= 140, s *= 140, .1 > t || !r && !s) return !1;
                if (!an) {
                    var l = {};
                    nn || (l.curX = Gt + r, l.curY = Qt + s), zn(l);
                    var c = Hn(Zt);
                    l = {}, Gt < c.min ? l.curBodyX = Vt ? Gt - c.min : 0 : Gt > c.max && (l.curBodyX = Vt ? Gt - c.max : 0), zn(l)
                }
                return nn ? 4.7 * n : an ? 4.7 * i : o
            }

            function Wn(e) {
                Tn || (Tn = []), Tn.push([f(), e]), Tn = Tn.slice(-20)
            }

            function Gn() {
                Tn = !1
            }

            function Qn() {
                if (!Tn || Tn.length < 2) return [0, 0, 0];
                for (var e = f(), t = !1, n = Tn.pop(), i = Tn.length - 1; i >= 0; i--) {
                    var a = e - Tn[i][0];
                    if (a > 150) break;
                    t = Tn[i]
                }
                if (!t || !n) return [0, 0, 0];
                var o = n[1].pageX - t[1].pageX,
                    r = n[1].pageY - t[1].pageY,
                    s = Math.sqrt(o * o + r * r),
                    a = n[0] - t[0];
                return a ? [s / a, o / a, r / a] : [0, 0, 0]
            }

            function $n(e, t, n, i) {
                var a = e[0],
                    o = e[1],
                    r = n[0],
                    s = n[1],
                    l = i / t;
                return 1 == l ? !1 : [a + (a - r) / (l - 1), o + (o - s) / (l - 1)]
            }

            function Kn(e, t) {
                var n = $n([e.curX, e.curY], e.currentScale, [t.curX, t.curY], t.currentScale);
                if (!n) return !1;
                var i = n[0],
                    a = n[1];
                return e.deltaX = i - e.curX, e.deltaY = a - e.curY, e.currentX = e.curX / e.currentScale + i - i / e.currentScale, e.currentY = e.curY / e.currentScale + a - a / e.currentScale, t.deltaX = i - t.curX, t.deltaY = a - t.curY, t.currentX = t.curX / t.currentScale + i - i / t.currentScale, t.currentY = t.curY / t.currentScale + a - a / t.currentScale, n
            }

            function Jn(e, t, n) {
                var r, s, l, c, u, d, p, f, v, m, g, w, y, b, k, C, S, T = G.width || a(),
                    E = G.height || o(),
                    x = !1,
                    A = 15,
                    M = (Math.min(50, T / 7), wt(tt)),
                    P = T / M.width,
                    D = E / M.height,
                    N = Math.min(1, P, D),
                    z = yt(e),
                    B = z.coords,
                    H = i("zpv_tl", e),
                    j = h(H),
                    R = _(H),
                    L = (Math.min((T - 2 * A) / Math.max(B.w * M.width * N / 100, j), (E - 2 * A) / (B.h * M.height * N / 100 + R + 5)), function() {
                        l = M.width * N * n.currentScale, c = M.height * N * n.currentScale, u = T / 2 - l / 2 + n.currentX * n.currentScale, d = E / 2 - c / 2 + n.currentY * n.currentScale, v = u + B.x * l / 100, m = d + B.y * c / 100, p = B.w * l / 100, f = B.h * c / 100, r = v + p / 2 - j / 2, s = m + f + 5, y = Math.min(v, r), g = Math.max(p, j), k = y + g, b = m, w = f + R + 5, C = b + w, S = {}
                    });
                return n = zn(S, t, n), n = n || Nn(), L(), A > y ? (S.curX = n.curX + (A - y), x = !0) : k > T - A && (S.curX = n.curX - (k - T + A), x = !0), A > b && (S.curY = n.curY + (A - b), x = !0), n = zn(S, t, n), n = n || Nn(), L(), C > E - A && (S.curY = n.curY - (C - E + A), x = !0), n = zn(S, t, n), t ? n : x
            }

            function Zn(e) {
                xn && (xn = !1, Mt(), e || xt(), yi(!0, !0))
            }

            function ei(e, t, n) {
                var i = {};
                return n = n || Nn(), i.lastScale = e, n = zn(i, t, n), t ? n : !1
            }

            function ti(e, t, n) {
                var i = {};
                if (n = n || Nn(), !ci()) return t ? n : !1;
                i.curScale = e, n = zn(i, t, n), n = n || Nn();
                var a = Rn();
                return i = {
                    currentScale: n.currentScale
                }, n.currentScale < a.min ? i.currentScale = n.currentScale + (a.min - n.currentScale) / ft.bounce_diff : n.currentScale > a.max && (i.currentScale = n.currentScale + (a.max - n.currentScale) / ft.bounce_diff), n = zn(i, t, n), t ? n : !1
            }

            function ni(e, t) {
                if (!ci()) return !1;
                var n = !1,
                    i = {};
                t = t || Nn();
                var a = Rn();
                return t.currentScale < a.min ? (i.currentScale = a.min, n = !0) : t.currentScale > a.max && (i.currentScale = a.max, n = !0), t = zn(i, e, t), e ? t : n
            }

            function ii(e) {
                if (!ci()) return !1;
                var t = Rn(),
                    n = {
                        pageX: Ut,
                        pageY: Xt
                    },
                    i = (Zt > 1 ? 1 : t.max) / Yt,
                    a = Nn(),
                    o = null;
                o = ti(i, !0), o = si(n, !0, o), o = li(!0, o), e && (o = Jn(e, !0, o), o = li(!0, o));
                var r = Kn(a, o);
                r && (Mt(r), At(a), xn = !0), xn && yi(!1, !0), ti(i), si(n), li(), e && (Jn(e), li()), xn ? At(o, 300, !1, Zn) : xt(300), ei(Zt), Si()
            }

            function ai(e) {
                if (!ci()) return !1;
                var t = {
                        pageX: 0,
                        pageY: 0
                    },
                    n = Nn(),
                    i = null;
                e = 1 == e ? 1 / Yt : e, i = ri(t, !0, n), i = ti(e, !0, i), i = ni(!0, i), i = si(t, !0, i), i = li(!0, i);
                var a = Kn(n, i);
                a && (Mt(a), At(n), xn = !0), xn && yi(!1, !0), ri(t), ti(e), ni(), si(t), li(), xn ? At(i, 300, !1, Zn) : xt(300), ei(Zt)
            }

            function oi(e) {
                if (!ci()) return !1;
                var t = Nn(),
                    n = null;
                n = Jn(e, !0, t), n = ni(!0, n), n = li(!0, n);
                var i = Kn(t, n);
                i && (Mt(i), At(t), xn = !0), Jn(e) && (vn || (vn = t)), xn && yi(!1, !0), ni(), li(), xn ? At(n, 300, !1, Zn) : xt(300), ei(Zt)
            }

            function ri(e, t, n) {
                var i = {};
                return n = n || Nn(), i.deltaX = (e.pageX - n.curX) / n.curScale, i.deltaY = (e.pageY - n.curY) / n.curScale, n = zn(i, t, n), t ? n : !1
            }

            function si(e, t, n) {
                var i = {};
                n = n || Nn(), i.pointX = e.pageX, i.pointY = e.pageY;
                var a = Hn(n.currentScale),
                    o = jn(n.currentScale),
                    r = !((en || o.max || o.min) && !nn && ci() || an),
                    s = an || pt && !en && !a.max && !a.min;
                s && (i.curX = 0), r && (i.curY = n.curY), n = zn(i, t, n), n = n || Nn(), i = {};
                var l = !1;
                return n.curX <= a.min ? on ? (l = !0, i.curBodyX = n.curX - a.min) : (i.curX = n.curX + (a.min - n.curX) / ft.bounce_diff, i.curBodyX = Vt ? i.curX - a.min : 0) : n.curX >= a.max && (rn ? (l = !0, i.curBodyX = n.curX - a.max) : (i.curX = n.curX + (a.max - n.curX) / ft.bounce_diff, i.curBodyX = Vt ? i.curX - a.max : 0)), n.curY < o.min ? r ? i.curY = o.min : an || (i.curY = n.curY + (o.min - n.curY) / ft.bounce_diff) : n.curY > o.max && (r ? i.curY = o.max : an || (i.curY = n.curY + (o.max - n.curY) / ft.bounce_diff)), n = zn(i, t, n), t ? n : l
            }

            function li(e, t) {
                var n = !1,
                    i = {};
                t = t || Nn();
                var a = Hn(t.currentScale),
                    o = jn(t.currentScale),
                    r = !en && !o.max && !o.min || nn || !ci() && !an,
                    s = an;
                return s && (i.curX = 0), r && (i.curY = t.curY), t.curX < a.min ? (i.curX = a.min, i.curBodyX = 0, n = !0) : t.curX > a.max && (i.curX = a.max, i.curBodyX = 0, n = !0), t.curY < o.min ? (i.curY = o.min, n = !0) : t.curY > o.max && (i.curY = o.max, n = !0), t = zn(i, e, t), e ? t : n
            }

            function ci() {
                return lt ? !1 : pt ? !0 : Oi[Yi.src]
            }

            function ui(e) {
                if (v() || v(0), !kn) {
                    if (e && "mousedown" == e.type && c(e), e.touches && e.touches.length || !rt) {
                        if (On(), !tn && !en) {
                            Sn = vt(e);
                            var t = Hn(Zt);
                            Gt <= t.min && (on = $i(Ui + 1) !== !1), Gt >= t.max && (rn = $i(Ui - 1) !== !1)
                        }
                        if (tn || lt) sn = ln = cn = !1, un = !1;
                        else {
                            clearTimeout(dn);
                            var n = vt(e);
                            sn && f() - sn < 500 && ln && mt(n, ln) < 50 ? (cn = f(), un = !1) : (sn = f(), ln = n, un = f())
                        }
                        lt || (tn = !0)
                    }
                    en || (Vt = !0, kt(!0)), mn = vt(e), Gn(), Wn(mn), ri(mn)
                }
            }

            function di(e) {
                if (!kn && (c(e), tn)) {
                    if (sn = ln = cn = !1, un = !1, mn = vt(e), Wn(mn), En) {
                        if (!(En < f())) return void Gn();
                        En = !1, ri(mn), xt()
                    }
                    if (Sn && !nn && !an) {
                        var t = Math.abs(mn.pageX - Sn.pageX),
                            n = Math.abs(mn.pageY - Sn.pageY),
                            i = jn(Zt);
                        if (!(n > 5 || t > 5)) return;
                        n > 5 && 5 >= t && (1 != Zt || en || lt || pt ? (i.max || i.min) && (on = rn = !1) : (an = !0, pn && (fn = !0), Ci(!1), mi(mn.pageY - Sn.pageY > 0))), Sn = !1, ri(mn)
                    }
                    var o = si(mn);
                    !o || nn || an || lt || (nn = !0, wn = mn.pageX), Ti(), xt(), nn && Math.abs(Wt) > a() && pi(l({
                        originalEvent: e
                    }, e, {
                        touches: []
                    }))
                }
            }

            function pi(e) {
                if (!kn) {
                    if (Cn) return void(Cn = !1);
                    if (c(e), e.touches && !e.touches.length || !rt) {
                        var n = Vn();
                        if (nn) Fn(n) && (Dn(), kt(!0));
                        else if (an) Ln(n);
                        else if (cn && f() - cn < 1e3) {
                            var i = e && hn && (t("zpv_tag", e.target) ? e.target : m("zpv_tag", e.target));
                            ii(i), sn = ln = cn = !1
                        } else li() ? xt(300) : n && (li(), xt(n, "cubic-bezier(0, 1, 1, 1)"));
                        if (un)
                            if (f() - un > 700 || e && "touchcancel" == e.type) un = !1;
                            else {
                                if (un = !1, e) var a = t("zpv_header", e.target) ? e.target : m("zpv_header", e.target),
                                    o = t("zpv_zoom_btns", e.target) ? e.target : m("zpv_zoom_btns", e.target),
                                    r = t("zpv_bottom_body", e.target) ? e.target : m("zpv_bottom_body", e.target),
                                    i = hn && (t("zpv_tag", e.target) ? e.target : m("zpv_tag", e.target));
                                e && (a || o || r || i) ? i ? zi(i, e) : o && (sn = ln = cn = !1, t("zpv_zoomin", e.target) || m("zpv_zoomin", e.target) ? xi(e) : Ai(e)) : _n ? Bi(e) : pt || (dn = setTimeout(function() {
                                    Ci(), yi(pn)
                                }, 500))
                            }
                        tn = !1, nn = on = rn = !1, Gn()
                    }
                    e.touches && (e.touches.length > 1 || 1 == e.touches.length && nn) && (mn = vt(e), ri(mn)), (e.touches && !e.touches.length || !rt) && (Sn = !1)
                }
            }

            function fi(e) {
                if (!kn && (c(e), sn = ln = cn = !1, un = !1, Gn(), !nn && !an)) {
                    $t = 1, Yt = Zt, en = !0, on = rn = !1;
                    var t = Hn(Zt);
                    (t.min >= -5 || t.max <= 5) && (Vt = !1, kt(!1));
                    var n = vt(e);
                    ri(n), yi(!1, !0)
                }
            }

            function hi(e) {
                kn || (c(e), sn = ln = cn = !1, un = !1, Gn(), nn || an || (gn = vt(e), ti(e.scale), si(gn), xt(), Si()))
            }

            function _i(e) {
                kn || (c(e), sn = ln = cn = !1, un = !1, Gn(), nn || an || (ni() && ((e.touches && e.touches.length || !rt) && si(gn), li(), xt(100), En = f() + 100), en = !1, yi(!0, !0)))
            }

            function vi(e) {
                var t = Rn(),
                    n = e < t.max,
                    i = e > t.min;
                g("zpv_zb_disabled", Z, !n), g("zpv_zb_disabled", et, !i)
            }

            function mi(e) {
                e ? s(Y, {
                    top: -35,
                    bottom: "auto"
                }) : s(Y, {
                    top: "auto",
                    bottom: -35
                }), Y.is_down = e
            }

            function gi(e, t) {
                var n = window,
                    i = n.lang;
                if (e) {
                    var a = G.height,
                        o = 20,
                        r = a / 5,
                        l = a / 3.5,
                        c = Math.abs(e),
                        u = c > o ? e + (e > 0 ? o - e : -o - e) / ft.bounce_diff : e,
                        d = 0 === t ? 0 : Math.max(0, Math.min((c - 20) / r, .75));
                    t > 0 && s.transform(Y, {
                        translate: [0, u]
                    }), s(Y, "opacity", d);
                    var f = c > l,
                        h = f ? "" : e > 0 ? " zpv_close_move_down" : " zpv_close_move_up",
                        _ = f ? i.mobile_zphoto_release_to_close : i.mobile_zphoto_move_to_close;
                    p(Y, '<div class="zpv_close_msg' + h + '">' + _ + "</div>"), (Y.is_down && 0 > e || !Y.is_down && e > 0) && mi(e > 0)
                } else s.transform(Y, {
                    translate: [0, 0]
                }), s(Y, "opacity", 0)
            }

            function wi() {
                var e = i("zpv_close_msg", Y),
                    t = h(e);
                s(Y, {
                    width: t || 250
                })
            }

            function yi(e, t) {
                var n = hn;
                if (e) {
                    if (!ci()) return;
                    if (!pn && !fn || en) return
                }
                hn = e, e && bi(Zt, Kt, Jt, t || n !== e), n !== e && (e && ki(_n), s.animate(at, t ? !1 : "opacity", {
                    duration: 200,
                    func: "linear"
                }, function() {
                    s(at, "visibility", e ? "visible" : "hidden")
                }), s(at, "visibility", e || !t ? "visible" : "hidden"), s(at, "opacity", e ? 1 : 0))
            }

            function bi(e, t, n, i) {
                if (!en && hn) {
                    var r = G.width || a(),
                        l = G.height || o(),
                        c = wt(tt),
                        u = r / c.width,
                        d = l / c.height,
                        p = Math.min(1, u, d),
                        f = c.width * p * e,
                        h = c.height * p * e,
                        _ = r / 2 - f / 2 + t * e,
                        v = l / 2 - h / 2 + n * e;
                    i && s.animate(at), s(at, {
                        width: Math.round(f),
                        height: Math.round(h)
                    }), s.transform(at, {
                        translate: [Math.round(_), Math.round(v)]
                    })
                }
            }

            function ki(e) {
                if (e) {
                    var t = wt(tt),
                        n = G.width || a(),
                        r = G.height || o(),
                        l = n / t.width,
                        c = r / t.height,
                        u = Math.min(1, l, c),
                        d = t.width * u * Zt,
                        p = t.height * u * Zt,
                        f = yt(e),
                        v = f.coords,
                        m = i("zpv_tl", e),
                        g = h(m),
                        w = _(m),
                        y = v.x * d / 100,
                        b = v.y * p / 100,
                        k = v.w * d / 100,
                        C = v.h * p / 100,
                        S = y + k / 2 - g / 2,
                        T = b + C + 5,
                        E = n > d ? 0 - (n - d) / 2 : 0,
                        x = n > d ? d + (n - d) / 2 : d,
                        A = r > p ? p + (r - p) / 2 : p,
                        M = 0,
                        P = 0,
                        D = 2,
                        N = 5;
                    E + D > S ? M = E + D - S : S + g > x - D && (M = x - D - S - g), T + w > A - N && (P = C > 3 * w ? A - N - T - w : -C - w - 10), s.transform(m, {
                        translate: [Math.ceil(M), Math.ceil(P)]
                    })
                }
            }

            function Ci(e) {
                if ("undefined" != typeof e) {
                    if (pn === e) return;
                    pn = !e
                } else fn = !1;
                s(F, "width", "auto"), s.animate(F, "opacity", {
                    duration: 200,
                    func: "linear"
                }, function() {
                    s.animate(F), s(F, "width", pn ? "auto" : 0)
                }), pn ? (s(F, "opacity", 0), pn = !1) : (s(F, "opacity", 1), pn = !0)
            }

            function Si() {
                G.height < 604 && !_n && !pt && (Zt > 1.25 ? (pn && (fn = !0), Ci(!1)) : fn && (fn = !1, Ci(!0)))
            }

            function Ti() {
                if (an) {
                    var e = Math.abs(Qt),
                        t = G.height / 2;
                    Mn = 1 - .5 * e / t
                }
            }

            function Ei(e) {
                bn && (tn || en || nn || e && e.touches && e.touches.length > 1 || (w(e), K.close()))
            }

            function xi(e) {
                return bn ? (q.highlight = !1, q.end(e), en || nn ? !1 : Rn().max <= Zt ? !1 : (w(e), ai(pt ? 1.25 : 1.45), !1)) : !1
            }

            function Ai(e) {
                return bn ? (q.highlight = !1, q.end(e), en || nn ? !1 : Rn().min >= Zt ? !1 : (w(e), ai(pt ? .8 : 1), !1)) : !1
            }

            function Mi(e) {
                if (!(tn || en || nn || !e || e.shiftKey || e.ctrlKey || e.metaKey || e.altKey)) {
                    var t = Hn(Zt);
                    37 == e.keyCode ? (w(e), Gt >= t.max && $i(Ui - 1) !== !1 && (kt(!0), Xn())) : 39 == e.keyCode ? (w(e), Gt <= t.min && $i(Ui + 1) !== !1 && (kt(!0), Un())) : 27 == e.keyCode && Ei(e)
                }
            }

            function Pi() {
                pt ? oa() : yi(hn, !0)
            }

            function Di(e, t) {
                return bn ? (q.highlight = !1, q.end(), Yi.likes_me ? (Yi.likes_me = !1, --Yi.likes_cnt) : (Yi.likes_me = !0, ++Yi.likes_cnt), ta(), L.click(e, l({
                    photo_id: t
                }, V))) : !1
            }

            function Ni(e, t) {
                var n = window,
                    a = n.cur;
                if (!bn) return !1;
                var o = a.replyNames,
                    r = a.sticker_panel,
                    s = a.stickers,
                    c = O.go(e, t, {
                        local: !0,
                        fast: !0,
                        beforeAppend: function(e) {
                            p(i("mcont", e), '<div class="pcont"><div class="media_view photo_view"><div class="pv_summary"><div class="summary_loading" style="display: none;"><i class="i_loading"></i></div></div><div class="pv_tag_wrap"></div><div class="pv_body pv_touch pv_touch_full pv_hidden_icons"><a class="thumb_item"><div class="pv_photo_wrap" id="pv_photo_tags" onclick="return photo.closeTags(event);"><img src="/images/mobile/blank.gif" class="ph_img" alt="" /></div></a><div class="pv_nav"><table class="row_table pv_nav_cont"><tr><td class="pv_nav_left"><a class="pv_nav_link"><span class="pv_icon"><i class="i_icon"></i></span></a></td><td class="pv_nav_z"><a class="pv_nav_link"><span class="pv_icon"><i class="i_icon"></i></span></a></td><td class="pv_nav_right"><a class="pv_nav_link"><span class="pv_icon"><i class="i_icon"></i></span></a></td></tr></table></div></div><div class="pv_footer"></div></div></div>'), p("m", e.innerHTML)
                        }
                    });
                l(a, {
                    replyNames: o,
                    sticker_panel: r,
                    stickers: s,
                    processNav: function(e) {
                        var t;
                        if (t = /^\/photo(-?\d+_\d+)$/i.exec(e.nav.path)) {
                            var n = y(e.nav.params),
                                i = y(O.params);
                            if (n.act) return !1;
                            if (n.offset != i.offset) return !1;
                            if (n.list != i.list && !i.z) return !1;
                            e.onPreNav && e.onPreNav();
                            var a = n.list || "",
                                o = n.rev ? "/rev" : "";
                            return !$.open(t[1], a + o, null, n.from, !0)
                        }
                        return !1
                    }
                }), a.destroy.push(function() {
                    $.clear()
                });
                var u = window,
                    d = u.lang;
                if (!c && (c = O.go(e, t, {
                        force: !0
                    }), !c)) {
                    var f = !0;
                    if (G._lastNav) {
                        var h = G._lastNav,
                            _ = y(h.params);
                        delete _.z, f = h.path + b(_) + h.hash
                    }
                    X.setMhead("m", d.mobile_photos_photo_head_title, f), $.showIcons()
                }
                return !0
            }

            function zi(e, n) {
                if (!bn) return !1;
                if (!hn) return !0;
                yt(e);
                return t("zpv_tag_selected", e) ? t("zpv_tl_wrap", n.target) || m("zpv_tl_wrap", n.target) ? O.go(e, n) : (oi(e), w(n), !1) : (_n && (sn = ln = cn = !1), k("zpv_tag_selected", _n), _n = e, ki(e), C("zpv_tag_selected", _n), pn && (fn = !0), Ci(!1), oi(e), w(n), !1)
            }

            function Bi(e, t) {
                return bn || t ? _n ? (k("zpv_tag_selected", _n), _n = !1, fn && 1.25 >= Zt && (fn = !1, Ci(!0)), w(e), !1) : !0 : !1
            }

            function Hi(e) {
                if (!bn) return !1;
                if (q.highlight = !1, q.end(), t("item_disabled", e)) return !1;
                if (!pt || !Fi) return !1;
                var n = Fi[0],
                    i = Bn(),
                    a = tt.width * Zt,
                    o = tt.height * Zt,
                    r = (a - i.width) / 2 - Gt,
                    s = (o - i.height) / 2 - Qt,
                    l = 1 / Zt,
                    c = r / a,
                    u = s / o;
                return n.onSelect && n.onSelect(c, u, l), !1
            }

            function ji(e) {
                return bn ? (q.highlight = !1, q.end(), t("item_disabled", e) ? !1 : Ei()) : !1
            }

            function Ri(e) {
                "touchstart" == e.type ? bn = !e.touches || 1 == e.touches.length : "touchmove" == e.type ? (bn = !1, c(e)) : "click" == e.type && (bn || (w(e), bn = !0))
            }

            function Li(e) {
                "touchstart" == e.type ? kn = !0 : "touchmove" == e.type ? (kn = !0, c(e)) : (kn = e.touches && e.length, Cn = !kn)
            }

            function Ii() {
                if (rt = "undefined" != typeof document.ontouchmove, st = !1, rt) {
                    var t = i("zpv_header", e),
                        n = i("zpv_bottom_body", e);
                    S(t, "touchstart touchmove touchend touchcancel", Li), S(n, "touchstart touchmove touchend touchcancel", Li), S(e, "touchstart touchmove click", Ri), S(e, "touchstart", ui), S(e, "touchmove", di), S(e, "touchend touchcancel", pi), st ? (S(e, "gesturestart", fi), S(e, "gesturechange", hi), S(e, "gestureend", _i)) : (S(e, "touchstart", Rt), S(e, "touchmove", Lt), S(e, "touchend touchcancel", It), S(e, "gesturestart gesturechange gestureend", w))
                } else S(e, "mousedown", ui), S(e, "mousemove", di), S(window, "mouseup", pi), S(window, "mousewheel", qt), S(window, "keydown", Mi)
            }

            function qi() {
                if (rt) {
                    var t = i("zpv_header", e),
                        n = i("zpv_bottom_body", e);
                    T(t, "touchstart touchmove touchend touchcancel", Li), T(n, "touchstart touchmove touchend touchcancel", Li), T(e, "touchstart touchmove click", Ri), T(e, "touchstart", ui), T(e, "touchmove", di), T(e, "touchend touchcancel", pi), st ? (T(e, "gesturestart", fi), T(e, "gesturechange", hi), T(e, "gestureend", _i)) : (T(e, "touchstart", Rt), T(e, "touchmove", Lt), T(e, "touchend touchcancel", It), T(e, "gesturestart gesturechange gestureend", w))
                } else T(e, "mousedown", ui), T(e, "mousemove", di), T(window, "mouseup", pi), T(window, "mousewheel", qt), T(window, "keydown", Mi)
            }
            var Fi = !1,
                Oi = {},
                Ui = !1,
                Xi = !1,
                Yi = !1,
                Vi = !1,
                Wi = !1;

            function Gi(e, t, n, i) {
                var a = t ? t : E(e);
                if ((!e || n) && (Fi = null), Fi || (Fi = new Array(a)), Fi.length != a) {
                    var o = Fi;
                    Fi = new Array(a), l(Fi, o)
                }
                l(Fi, e);
                var r = Qi(Yi.id); - 1 == r && (r = Ui), i || na(r)
            }

            function Qi(e) {
                for (var t in Fi)
                    if (Fi[t].id == e) return +t;
                return -1
            }

            function $i(e) {
                return e >= Fi.length ? !1 : 0 > e ? !1 : Fi[e] || {
                    src: !0
                }
            }

            function Ki(e, t) {
                if (pt) {
                    var n = Fi[0];
                    if (n.loaded = t, t) {
                        var i = wt(e),
                            a = Bn();
                        i.width > i.height ? s(e, {
                            height: a.height
                        }) : s(e, {
                            width: a.width
                        }), s(e, {
                            minWidth: 0,
                            maxWidth: "none"
                        })
                    }
                    oa(!0)
                }
                x(e), tt === e && yi(t, !t)
            }

            function Ji(e) {
                if (Oi[e]) Zi(e);
                else {
                    var t = new Image;
                    t.src = e, t.onload = function() {
                        d("loaded", e), Oi[e] = !0, Zi(e), t = null
                    }
                }
            }

            function Zi(e) {
                A([tt, nt, it], function() {
                    var t = this,
                        n = r(t, "data-src"),
                        i = m("zpv_thumb_item", t);
                    n == e && (d("set", e), t.src = n, Ki(t, !0), k("zpv_ti_loading", i), r(t, "data-src", !1))
                })
            }

            function ea(e, t, n) {
                var i = m("zpv_thumb_item", e);
                t ? t !== !0 ? e.src == t ? Ki(e, !0) : Oi[t] ? (e.src = t, Ki(e, !0)) : (n ? (e.src = n, Ki(e, !1)) : M(e), r(e, "data-src", t), Ji(t), C("zpv_ti_loading", i)) : (n ? (e.src = n, Ki(e, !1)) : M(e), C("zpv_ti_loading", i)) : M(e)
            }

            function ta() {
                if (ct) {
                    Yn(), vi(Zt);
                    var e = yn !== !1 ? yn : Ui,
                        t = $i(e);
                    if (t && t.src !== !0) {
                        var n = "";
                        A(t.tags, function(e, t) {
                            if (!e || 0 == e) return !0;
                            var i = bt(t),
                                a = i.coords,
                                o = i.href ? ' data-href="' + i.href + '" data-name="' + P(i.name) + '"' : "",
                                r = i.al ? (i.href ? " al" + i.al : "") + " " + i.al : "";
                            n += '<div class="zpv_tag' + r + '" style="left: ' + a.x + "%; top: " + a.y + "%; width: " + a.w + "%; height: " + a.h + '%;" data-id="' + e + '"' + o + '><div class="fill"></div><div class="zpv_tl_wrap" id="zpv_tl_wrap"><div class="zpv_tl' + (i.href ? "" : " zpv_tl_plain") + '">' + D(i.name) + "</div></div></div>"
                        }), p(at, n), p(W, '<div class="zpv_photo_desc">' + (t.caption || "") + '</div><div class="zpv_bottom_bg"></div>'), N(W, !!t.caption);
                        var i = "";
                        if (ut || O.getQuery("community")) i = "";
                        else {
                            var a = "",
                                o = "",
                                r = "",
                                s = t.tags && t.tags[0] || 0,
                                a = '<td class="row_table_column" width="33%"><a href="' + t.like_url + '" class="item_button item_like' + (t.likes_me ? " item_likes_me" : "") + '" onclick="return photoview.likePhoto(this, \'' + t.id + '\');"><i class="i_icon i_like"></i>' + (t.likes_cnt ? '<b class="v_value v_like">' + z(t.likes_cnt) + "</b>" : "") + "</a></td>",
                                o = '<td class="row_table_column" width="33%"><a href="' + t.photo_url + '#comments" class="item_button item_replies al_photo" onclick="return photoview.openPhoto(this, event, true);"><i class="i_icon i_replies"></i>' + (t.replies_cnt ? '<b class="v_value v_replies">' + t.replies_cnt + "</b>" : "") + "</a></td>",
                                r = '<td class="row_table_last_column" width="33%"><a href="' + t.photo_url + '" class="item_button item_tags al_photo" onclick="return photoview.openPhoto(this, event);"><i class="i_icon i_tags"></i>' + (s ? '<b class="v_value v_tags">' + s + "</b>" : "") + "</a></td>";
                            i = "<tr>" + a + o + r + "</tr>"
                        }
                        p(Q, i), x(U)
                    } else M(U)
                }
            }

            function na(e) {
                ct && (Ui = Math.max(0, Math.min(e || 0, Fi.length)), Yi = $i(Ui), Wi = $i(Ui - 1), Vi = $i(Ui + 1), ea(tt, Yi.src, "/images/mobile/blank.gif"), ea(it, Vi.src), ea(nt, Wi.src), ta(), K.onUpdate && K.onUpdate())
            }

            function ia() {
                if (ct && dt && Fi) {
                    var e = Fi[0];
                    if (!e.loaded && e.progress) {
                        var t = i("zpvu_progress", "zpv_center");
                        s(t, {
                            width: 100 * e.progress + "%",
                            visibility: "visible"
                        })
                    }
                    if (!e.read && e.thumb) {
                        e.read = !0;
                        var n = i("zpv_upload_box", "zpv_center"),
                            a = i("zpv_upload_img", n);
                        s(a, {
                            backgroundImage: "url(" + e.thumb + ")"
                        }), k("zpv_thumb_uploading", n)
                    }
                }
            }

            function aa() {
                if (ct && dt) {
                    var t = window,
                        n = t.lang;
                    p("zpv_summary", n.mobile_zphoto_upload_header), k("zpv_mode_[a-z]+", e, !0), C("zpv_mode_upload", e);
                    var i = '<div class="zpva zpv_upload_box zpv_thumb_uploading"><div class="zpv_upload_img"></div><div class="zpvu_progress_wrap"><div class="zpvu_progress"></div></div></div>';
                    B(tt), p("zpv_center", i);
                    var a = '<tr><td class="row_table_column" width="50%"><a class="item_button item_disabled" onclick="return false;"><i class="i_icon i_save"></i><span class="v_value">' + n.mobile_zphoto_save_btn + '</span></a></td><td class="row_table_last_column" width="50%"><a class="item_button" onclick="return photoview.cancelPhoto(this);"><i class="i_icon i_cancel"></i><span class="v_value">' + n.mobile_zphoto_cancel_btn + "</span></a></td></tr>";
                    p(Q, a), x(U), ia()
                }
            }

            function oa(t) {
                if (ct && pt && Fi) {
                    var n = Fi[0],
                        i = !!n.saving;
                    if (g("item_disabled", "zpv_save_button", i || !n.loaded), g("item_disabled", "zpv_cancel_button", i), g("zpv_crop_saving", e, i), lt = i, t || ea(tt, n.src, "/images/mobile/blank.gif"), n.loaded && n.rect && !n.rect_inited) {
                        n.rect_inited = !0;
                        var a = Bn(),
                            o = n.rect[0],
                            r = n.rect[1],
                            s = n.rect[2],
                            l = {};
                        l.currentScale = 1 / s, zn(l), ni(), li(), l = {};
                        var c = tt.width * Zt,
                            u = tt.height * Zt,
                            d = o * c,
                            p = r * u;
                        l.curX = (c - a.width) / 2 - d, l.curY = (u - a.height) / 2 - p, zn(l), li(), xt(0)
                    }
                }
            }

            function ra() {
                if (ct && pt) {
                    var t = window,
                        n = t.lang;
                    p("zpv_summary", n.mobile_zphoto_owner_crop_header), k("zpv_mode_[a-z]+", e, !0), C("zpv_mode_crop", e), vi(Zt), tt.parentNode || (p("zpv_center", ""), H(tt, "zpv_center"));
                    var i = '<tr><td class="row_table_column" width="50%"><a class="item_button" id="zpv_save_button" onclick="return photoview.savePhoto(this);"><i class="i_icon i_save"></i><span class="v_value">' + n.mobile_zphoto_save_btn + '</span></a></td><td class="row_table_last_column" width="50%"><a class="item_button" id="zpv_cancel_button" onclick="return photoview.cancelPhoto(this);"><i class="i_icon i_cancel"></i><span class="v_value">' + n.mobile_zphoto_cancel_btn + "</span></a></td></tr>";
                    p(Q, i), x(U), oa()
                }
            }

            function sa() {
                ct || (Pn(), ht(), Ii(), ct = !0, j(e), v() || v(0))
            }

            function la() {
                ct && (qi(), _t(), ct = !1, Fi = null)
            }
            return {
                likePhoto: Di,
                openPhoto: Ni,
                closePhoto: Ei,
                savePhoto: Hi,
                cancelPhoto: ji,
                onClose: null,
                onUpdate: null,
                onPhotoChange: null,
                saveSource: Gi,
                opened: function() {
                    return ct
                },
                openCrop: function(e, t) {
                    t = t || {};
                    var n = !ct;
                    dt ? dt = !1 : sa(), pt = !0, lt = !1, Fi = [e], n && (G.open(), G.onResize = Pi), ra()
                },
                updateCrop: function(e) {
                    return Fi ? (e = l(Fi[0] || {}, e), Fi = [e], void oa()) : !1
                },
                openUpload: function(e, t) {
                    t = t || {}, sa(), dt = !0, lt = !0, Fi = [e], G.open(), G.onResize = Pi, aa()
                },
                updateUpload: function(e) {
                    return Fi ? (e = l(Fi[0] || {}, e), Fi = [e], void ia()) : !1
                },
                open: function(e, t, n) {
                    n = n || {}, sa(), ut = n.local || !1, t && Gi(t, !1, !1, !0), na(e), Xi = 0, G.open(), G.onResize = Pi, wi()
                },
                close: function() {
                    K.onClose && K.onClose({
                        local: ut
                    }) || G.close()
                }
            }
        }();
    window.photoview = K
}, function() {
    var e = window,
        t = e.se,
        n = e.remove,
        i = e.gpeByTag,
        a = e.ce,
        o = e.each,
        r = e.append,
        s = e.gpeByClass,
        l = e.toggleClass,
        c = e.cancelEvent,
        u = e.hasClass,
        d = e.geByClass1,
        p = e.addClass,
        f = e.getY,
        h = e.getH,
        _ = e.scrollTop,
        v = e.getCh,
        m = e.removeClass,
        g = e.checkEvent,
        w = e.geByClass,
        y = e.getW,
        b = e.replaceClass,
        k = e.escapeRE,
        C = e.ge,
        S = e.val,
        T = e.after,
        E = e.scrollToEl,
        x = e.replaceEntities,
        A = e.toggle,
        M = e.elfocus,
        P = e.isUndefined,
        D = e.isVisible,
        N = e.clone,
        z = e.attr,
        B = e.before,
        H = e.srand,
        j = e.extend,
        R = window,
        L = R.ajax,
        I = window,
        q = I.nav,
        F = window,
        O = F.Dialog,
        U = {
            onStickersInit: t(),
            onReplyClick: t(),
            add_attach: function(e, t) {
                var s = window,
                    l = s.al;
                n("feed_extra_field");
                var c = i("form", e),
                    u = a("input", {
                        id: "feed_extra_field",
                        type: "hidden",
                        name: "add_attach",
                        value: 2
                    });
                if (c) {
                    var d = !1;
                    if (o(c, function(e, t) {
                            return "submit" === t.type ? (d = t, !1) : void 0
                        }), d) return r(u, c), window.al && l.ver ? q.go(d, t) : c.submit()
                }
                return !0
            },
            toggleActions: function(e, t) {
                var n = s("post_item", e);
                return l("pi_actions_opened", n), c(t), !1
            },
            wallActions: function(e, t) {
                var n = window,
                    i = n.tooltip,
                    a = s("wall_item", e) || s("post", e);
                if (!a) return !0;
                if (u("wi_actions_opened", a)) m("wi_actions_opened", a), i.hide();
                else {
                    var o = d("wi_actions_wrap", a),
                        r = d("wi_actions", o),
                        g = d("wi_actions_btn", a);
                    U.wallActionsHide(), p("wi_actions_opened", a);
                    var w = f(a) + 45 + h(r) + 7,
                        y = _() + v();
                    l("wi_actions_top", o, w > y), i.addHandler(U.wallActionsHide), i.show(o, g)
                }
                return c(t), !1
            },
            wallActionsHide: function() {
                var e = window,
                    t = e.tooltip;
                m("wi_actions_opened", d("wi_actions_opened")), t.hide()
            },
            wallPostOpen: function(e, t) {
                var n = s("wall_item", e),
                    i = d("wi_date", n);
                return i ? q.go_after(i, t) : !0
            },
            toggleGif: function(e, t, n) {
                return e ? g(t) ? !0 : u("current_gif", e) ? U.hideGif(e, t) : U.showGif(e, t, n) : !0
            },
            showGif: function(e, t, n) {
                var i = window,
                    s = i.cur;
                if (!e) return !0;
                if (g(t)) return !0;
                if (n) {
                    if (s.loadedGifs || (s.loadedGifs = {}), !s.loadedGifs[e.href] && !confirm(n)) return !1;
                    s.loadedGifs[e.href] = !0
                }
                var l = f(e),
                    d = _();
                o(w("current_gif", "mcont"), function(e, t) {
                    U.hideGif(t)
                }), _(d - (l - f(e)));
                var v = a("img", {
                    src: e.href,
                    className: "gif_original"
                });
                p("current_gif gif_loading", e), r(v, e);
                var m = function(t) {
                        if (y(v) && h(v) || t) {
                            if (clearInterval(k), !u("current_gif", e)) return;
                            b("gif_loading", "gif_opened", e)
                        }
                    },
                    k = setInterval(m, 100);
                return v.onload = m, c(t)
            },
            hideGif: function(e, t) {
                return e ? g(t) ? !0 : (m("current_gif", e), m("gif_opened", e), m("gif_loading", e), n(d("gif_original", e)), c(t)) : !0
            },
            replyNamesRE: function() {
                var e = window,
                    t = e.cur;
                if (!t.replyNames) return !1;
                var n = [];
                return o(t.replyNames, function() {
                    n.push(k(this[0]))
                }), new RegExp("^(" + n.join("|") + ")")
            },
            replyTo: function(e, t, n, i, a) {
                var o = window,
                    c = o.cur;
                if (g(e)) return !0;
                n = n || 0, m("nc_current_reply", d("nc_current_reply"));
                var u = C("nc_form"),
                    v = C("nc_message"),
                    w = d("nc_reply_name", u),
                    y = s("near_btn", w),
                    b = C("nc_reply_as"),
                    k = S(v),
                    P = U.replyNamesRE();
                if (n) {
                    var D = C(t + "_" + n),
                        N = f(D) + h(D),
                        z = _();
                    T(u, D), p("nc_current_reply", d("pi_reply_wrap", D)), _(z + f(D) + h(D) - N);
                    var B = c.replyNames[i] || {},
                        H = B[0] || "",
                        j = B[1] || "";
                    k = k ? P ? k.replace(P, H) : k : H, U.onReplyClick(!0, H)
                } else {
                    r(u, d("wall_replies")), E(u);
                    var j = "";
                    k = P ? k.replace(P, "") : k
                }
                return S(v, x(k)), S(w, j), A(y, n), b && (S(b, +a), l("cp_post_as_group", u, +a)), S("nc_reply_to", n), c.replyTo = n, M(v), !1
            },
            stickersInit: function() {
                var e = window,
                    t = e.cur,
                    n = window,
                    i = n.Scroller,
                    a = C("stickers_panel");
                if (a) {
                    var o = d("sp_body", a),
                        r = d("sp_stickers_tabs", a);
                    t.scroller && t.scroller.destroy(), t.scroller = new i(o, {
                        byPage: !0
                    }), t.scroller.init(), t.destroy.push(function() {
                        t.scroller.destroy()
                    }), t.tabScroller && t.tabScroller.destroy(), t.tabScroller = new i(r), t.tabScroller.init(), t.destroy.push(function() {
                        t.tabScroller.destroy()
                    }), U.onStickersInit(!0)
                }
            },
            stickersToggle: function(e, t) {
                var n = window,
                    i = n.cur;
                if (!i.stickers) return !0;
                P(t) && (t = !D("stickers_panel"));
                var a = C("write_form") || C("nc_form"),
                    o = C("stickers_panel"),
                    r = d("cp_sticker_btn", a);
                return o ? (A(o, t), l("cp_sticker_btn_sel", r, t), t && i.tabScroller && i.tabScroller.onShow(), !1) : !0
            },
            stickersClick: function(e, t) {
                var n = window,
                    i = n.cur;
                return i.stickers && i.stickers[t] ? (U.stickersToggle(null, !0), U.stickersSelectTab(null, t)) : q.go(e)
            },
            stickersStoreOpen: function(e) {
                var t = window,
                    n = t.cur;
                return L.click(e, !1, {
                    url_params: {
                        reply_to: n.replyTo || 0
                    }
                })
            },
            stickersSelectTab: function(e, t) {
                var n = window,
                    i = n.cur;
                if (i.tabScroller && !i.tabScroller.canClick()) return !1;
                var a = C("stickers_panel"),
                    o = d("sp_body", a),
                    r = d("sp_tab_selected", a);
                if (i.stickers[t]) {
                    i.scroller.destroy(), S(o, i.stickers[t]), i.scroller.init(), e || (e = d("sp_tab" + t, a)), m("sp_tab_selected", r), p("sp_tab_selected", e);
                    var s = f(a),
                        l = s + y(a),
                        c = _(),
                        u = c + v();
                    (c > s || l > u) && E(a), i.tabScroller && i.tabScroller.showElem(e)
                }
                return !1
            },
            addRecentSticker: function(e, t, i) {
                var r = window,
                    l = r.cur,
                    c = s("sticker_item", e);
                if (l.stickers && l.stickers[-1] && c) {
                    var u = a("div", {
                            innerHTML: l.stickers[-1]
                        }),
                        p = N(c),
                        f = d("sticker_thumb", p),
                        h = d("stickers_list", u);
                    z(f, "onclick", "return post.sendSticker(this, " + t + ", true);"), o(w("sticker" + t, h), function() {
                        n(this)
                    }), B(p, h.firstChild);
                    var _ = 0;
                    o(w("sticker_item", h), function() {
                        _++ >= 8 && n(this)
                    }), l.stickers[-1] = S(u), i && U.stickersSelectTab(!1, -1)
                }
            },
            sendSticker: function(e, t, n, i) {
                var a = window,
                    o = a.cur;
                if (o.scroller && !o.scroller.canClick()) return !1;
                U.stickersToggle(e, !1);
                var r = C("write_submit"),
                    s = {
                        lock: !0,
                        url_params: {
                            media: "sticker" + t,
                            _af: H()
                        }
                    };
                if (n && !i && (s.url_params.media_from = "recent"), !i) {
                    var l = z(e, "href");
                    l && (i = l.split("sticker_referrer=")[1].split("&")[0])
                }
                if (i && (s.url_params.sticker_referrer = i), U.addRecentSticker(e, t, n), r) return L.click(r, j({
                    save: !0
                }, O), s);
                var r = C("nc_submit");
                return r ? L.click(r, {}, s) : void 0
            }
        };
    window.post = U
}, function() {
    var e = window,
        t = e.removeClass,
        n = e.addClass,
        i = e.geByClass1,
        a = {
            obj: null,
            highlight: !1,
            start: function(e) {
                e.touches && 1 == e.touches.length && (a.clear(), a.end(e), a.obj = this || null, a.obj && (a.highlight = !0, n("hover", a.obj)))
            },
            cancel: function(e) {
                a.obj && (a.highlight = !1, a.end(e))
            },
            end: function() {
                a.obj && (t("hover", a.obj), a.highlight && (a.clear(), n("active", a.obj)), a.obj = null, a.highlight = !1)
            },
            clear: function() {
                t("active", i("active", "vk_wrap"))
            }
        };
    window.thover = a
}, function() {
    var e = window,
        t = e.each,
        n = {
            tt: !1,
            handlers: [],
            show: function() {
                n.shown || (n.tt = Array.prototype.slice.call(arguments))
            },
            hide: function() {
                n.tt && (n.tt = !1)
            },
            addHandler: function(e) {
                e && n.handlers.push(e)
            },
            removeHandler: function(e) {
                return e ? void t(n.handlers, function(t) {
                    return e === this ? (n.handlers.splice(t, 1), !1) : void 0
                }) : void(n.handlers = [])
            },
            onClose: function() {
                t(n.handlers, function() {
                    this()
                })
            },
            clear: function() {
                n.tt && (n.hide(), n.onClose(), n.removeHandler())
            },
            closeByTap: function(e) {
                if (!n.tt || !e.target) return !1;
                var t = e.target;
                do
                    for (var i = 0; i < n.tt.length; i++)
                        if (t === n.tt[i]) return !1; while (t = t.parentNode);
                return n.hide(), n.onClose(), !0
            }
        };
    window.tooltip = n
}, function(module, exports) {
    function setDocumentDomain() {
        var e = (document.domain || "").match(/(m\.)?([a-zA-Z]+\.[a-zA-Z]+\.?)$/);
        window.locDomain = "https:" == location.protocol ? e[2] : e[0];
        var t = navigator.userAgent.toLowerCase();
        (/opera/i.test(t) || !/msie 6/i.test(t) || document.domain != window.locDomain) && (document.domain = window.locDomain)
    }

    function isUndefined(e) {
        return "undefined" == typeof e
    }

    function isFunction(e) {
        return "[object Function]" === Object.prototype.toString.call(e)
    }

    function isArray(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function isObject(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function isEmpty(e) {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return !1;
        for (var t in e)
            if (e.hasOwnProperty(t)) return !1;
        return !0
    }

    function escapeRE(e) {
        return e ? e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1") : ""
    }

    function htsc(e) {
        return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;").replace(/%/g, "&#37;")
    }

    function escapeAttr(e) {
        return e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/\'/g, "&#39;")
    }

    function unescapeAttr(e) {
        return e.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    }

    function replaceEntities(e) {
        return ce("textarea", {
            innerHTML: (e || "").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        }).value
    }

    function escapeStr(e) {
        return e.replace(/\'/g, "\\'")
    }

    function stripTags(e) {
        return e.replace(/<[^>]+>/g, "")
    }

    function srand() {
        return Math.random().toString(36).substr(2)
    }

    function utf2win(e) {
        return unescape(encodeURIComponent(e))
    }

    function isHttpHref(e) {
        var t = (e + "").split(":"),
            n = t[1] && t[0] ? t[0] + ":" : location.protocol;
        return "http:" == n || "https:" == n
    }

    function vkNow() {
        return +new Date
    }

    function bind() {
        var e = Array.prototype.slice.call(arguments),
            t = e.shift(),
            n = e.shift();
        return function() {
            var i = Array.prototype.slice.call(arguments);
            return t.apply(n, e.concat(i))
        }
    }

    function intval(e) {
        return e === !0 ? 1 : parseInt(e) || 0
    }

    function floatval(e) {
        return e === !0 ? 1 : parseFloat(e) || 0
    }

    function qs2obj(e) {
        if (!e) return {};
        for (var t = {}, n = e.toString().split("&"), i = 0, a = n.length; a > i; i++) {
            var o = n[i].split("=");
            o[0] && (t[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || ""))
        }
        return t
    }

    function obj2qs(e) {
        if (!e) return "";
        var t = [];
        for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n].toString() || ""));
        return t.length ? "?" + t.join("&") : ""
    }

    function parseJSON(obj) {
        try {
            return JSON.parse(obj)
        } catch (e) {
            return eval("(" + obj + ")")
        }
    }

    function lsCheck() {
        return void 0 !== window.localStorage && null !== window.localStorage && void 0 !== window.JSON
    }

    function lsSet(e, t) {
        if ("undefined" != typeof t) try {
            return localStorage.setItem(e, JSON.stringify(t))
        } catch (n) {} else try {
            return localStorage.removeItem(e)
        } catch (n) {}
        return !1
    }

    function lsGet(e) {
        try {
            return JSON.parse(localStorage.getItem(e))
        } catch (t) {}
        return !1
    }

    function ssCheck() {
        return void 0 !== window.sessionStorage && void 0 !== window.JSON
    }

    function ssSet(e, t) {
        if ("undefined" != typeof t) try {
            return sessionStorage.setItem(e, JSON.stringify(t))
        } catch (n) {} else try {
            return sessionStorage.removeItem(e)
        } catch (n) {}
        return !1
    }

    function ssGet(e) {
        try {
            return JSON.parse(sessionStorage.getItem(e))
        } catch (t) {}
        return !1
    }

    function getValues(e) {
        if (!isArray(e)) return e.call ? e() : e;
        for (var t = [], n = 0, i = e.length; i > n; n++) t.push(getValues(e[n]));
        return t
    }

    function len(e) {
        if (isArray(e)) return e.length;
        if (isObject(e)) {
            var t = 0;
            for (var n in e) t++;
            return t
        }
        return 0
    }

    function realSubstr(e, t) {
        return e = e || "", e.length > t && (e = e.substr(0, t - 3), e = e.replace(/&[^;]{0,6}$/, ""), e = e.replace(/<[^>]*$/, ""), e = e.replace(/(\s|<br\s*\/?>)+$/, ""), e += ".."), e
    }

    function hashCode(e) {
        var t = 0;
        if (0 === e.length) return t;
        for (var n = 0, i = e.length; i > n; n++) {
            var a = e.charCodeAt(n);
            t = (t << 5) - t + a, t |= 0
        }
        return t
    }

    function formatNum(e) {
        if (!window.langConfig) return e;
        for (var t = e.toString().split("."), n = [], i = t[0].length - 3; i > -3; i -= 3) n.unshift(t[0].slice(i > 0 ? i : 0, i + 3));
        return t[0] = n.join(window.langConfig.numDel), e = t.join(window.langConfig.numDec)
    }! function() {
        var e = vkNow();
        window.clog = function() {
            var t = window,
                n = t.vk;
            if (n.__debug) try {
                if (window.console && console.log) {
                    var i = Array.prototype.slice.call(arguments);
                    i.unshift("[" + (vkNow() - e) / 1e3 + "] ");
                    var a = window,
                        o = a.browser;
                    o.msie || o.mobile && !o.safari_mobile ? console.log(i.join(" ")) : console.log.apply(console, i)
                }
            } catch (r) {}
        }
    }();

    function each(e, t) {
        if (!e) return e;
        if (isObject(e) || "undefined" == typeof e.length) {
            for (var n in e)
                if (e.hasOwnProperty(n) && t.call(e[n], n, e[n]) === !1) break
        } else
            for (var i = 0, a = e.length; a > i && t.call(e[i], i, e[i]) !== !1; i++);
        return e
    }

    function copy(e) {
        return isArray(e) ? e.concat([]) : isObject(e) ? extend({}, e) : e
    }
    var rf = function() {
            return !1
        },
        registeredEvents = [];

    function addEvent(e, t, n) {
        if (e = ge(e), n = n || rf, e && 3 != e.nodeType && 8 != e.nodeType) {
            e.setInterval && e != window && (e = window);
            for (var t = t.split(" "), i = 0, a = t.length; a > i; i++) {
                var o = t[i];
                e.addEventListener ? e.addEventListener(o, n, !1) : e.attachEvent && e.attachEvent("on" + o, n), registeredEvents.push([e, o, n])
            }
        }
    }

    function removeEvent(e, t, n) {
        if (e = ge(e), n = n || rf, e && 3 != e.nodeType && 8 != e.nodeType)
            for (var t = t.split(" "), i = 0, a = t.length; a > i; i++) {
                var o = t[i];
                e.removeEventListener ? e.removeEventListener(o, n, !1) : e.detachEvent && e.detachEvent("on" + o, n)
            }
    }

    function preventEvent(e) {
        return (e = e || window.event) ? (e = e.originalEvent || e, e.preventDefault && e.preventDefault(), e.returnValue = !1, !1) : !1
    }

    function stopEvent(e) {
        return (e = e || window.event) ? (e = e.originalEvent || e, e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0, !1) : !1
    }

    function cancelEvent(e) {
        return (e = e || window.event) ? (e = e.originalEvent || e, e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0, e.returnValue = !1, !1) : !1
    }

    function checkEvent(e) {
        var t = window,
            n = t.PointerEvent;
        return !(!(e = e || window.event) || n && e instanceof n || "click" != e.type && "mousedown" != e.type && "mouseup" != e.type || !(e.which > 1 || e.button > 1 || e.ctrlKey || e.shiftKey || e.metaKey))
    }

    function onCtrlEnter(e, t, n) {
        var i = window,
            a = i.browser;
        if (t = t || window.event, 10 == t.keyCode || 13 == t.keyCode && (t.ctrlKey || t.metaKey && a.mac)) {
            if (isUndefined(n)) {
                var o = submitBtn(e);
                o && o.click()
            } else n.call(e);
            cancelEvent(t)
        }
    }

    function submitBtn(e) {
        if (!e) return !1;
        var t = "form" == tag(e) ? e : e.form || gpeByTag("form", e);
        if (!t) return !1;
        for (var n in t) {
            var i = t[n];
            if ("input" == tag(i) && "submit" == i.type && /(^|\\s)(small_)?button(\\s|$)/i.test(i.className) && !i.name) return i
        }
        return !1
    }

    function createIframe(e, t) {
        e = extend(e || {}, {
            border: "0"
        }), t = extend(t || {}, {
            position: "absolute",
            width: 1,
            height: 1,
            left: 10
        });
        var n = ce("iframe", e, t);
        return append(n, "vk_utils"), n
    }

    function winToUtf(e) {
        return e.replace(/&#(\d\d+);/g, function(e, t) {
            return t = intval(t), t >= 32 ? String.fromCharCode(t) : e
        }).replace(/&quot;/gi, '"').replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
    }

    function shortCurrency() {
        var e = {};
        each(geByClass("_short_currency"), function() {
            var t = this.getAttribute("data-short") || "",
                n = winToUtf(t).length,
                i = getStyle(this, "fontFamily") || "tahoma,arial,sans-serif";
            if (!t) return !0;
            if (isUndefined(e[i])) {
                for (var a = "", o = n - 1; o >= 0; o--) a += "&#8399;";
                var r = ce("div", {
                    innerHTML: "<b>" + t + "</b><b>" + a + "</b>"
                }, {
                    fontFamily: i,
                    fontSize: "24px"
                });
                ge("vk_utils").appendChild(r), e[i] = Math.abs(r.firstChild.offsetWidth - r.lastChild.offsetWidth) >= 3 * n, remove(r)
            }
            e[i] && val(this, t)
        })
    }

    function checkNav(e, t) {
        if (e = ge(e), !e) return !1;
        do
            if (checkElementNav(e, t)) return e; while (e = e.parentNode);
        return !1
    }

    function checkElementNav(e, t) {
        var n = window,
            i = n.al;
        if (!i || !i.ver) return !1;
        if (!e) return !1;
        if (t = t || {}, "a" == tag(e)) {
            if ((t.skip_onclick || !e.getAttribute("onclick")) && (e.getAttribute("href") || e.getAttribute("data-href")) || hasClass("al_nav", e)) {
                if (e.hostname) var a = e.hostname;
                else var o = e.href || attr(e, "data-href"),
                    a = (/^(https?:)\/\/([^:\/]+)?(?::(\d+))?\/?(.*)$/i.exec(o) || [])[2];
                if ("_blank" !== e.target && (!a || a == location.hostname) && isHttpHref(o) || t.skip_blank || t.skip_clicable) return !0
            }
        } else if ("input" == tag(e)) {
            if (e.form && ("submit" == e.type || "image" == e.type) && (t.skip_onclick || !e.getAttribute("onclick")) || hasClass("al_nav", e)) return !0
        } else if ("label" == tag(e) && t.skip_clicable && (e.htmlFor || geByTag1("input", e) && (t.skip_onclick || !e.getAttribute("onclick")) || hasClass("al_nav", e))) return !0;
        return !1
    }

    function checkTouchHover(e) {
        if (e = ge(e), !e) return !1;
        do {
            if ("a" == tag(e) || hasClass("al_photo", e)) return e;
            if ("label" == tag(e) && hasClass("option_row", e)) return e;
            if (hasClass("_touched", e)) return e
        } while (e = e.parentNode);
        return !1
    }

    function parseCyr(e, t) {
        for (var n = e, i = ["yo", "zh", "kh", "ts", "ch", "sch", "shch", "sh", "eh", "yu", "ya", "YO", "ZH", "KH", "TS", "CH", "SCH", "SHCH", "SH", "EH", "YU", "YA", "'"], a = ["ё", "ж", "х", "ц", "ч", "щ", "щ", "ш", "э", "ю", "я", "Ё", "Ж", "Х", "Ц", "Ч", "Щ", "Щ", "Ш", "Э", "Ю", "Я", "ь"], o = 0, r = i.length; r > o; o++) n = t ? n.split(i[o]).join(a[o]) : n.split(a[o]).join(i[o]);
        for (var s = "abvgdezijklmnoprstufhcyABVGDEZIJKLMNOPRSTUFHCYёЁ", l = "абвгдезийклмнопрстуфхцыАБВГДЕЗИЙКЛМНОПРСТУФХЦЫеЕ", o = 0, r = s.length; r > o; o++) n = t ? n.split(s.charAt(o)).join(l.charAt(o)) : n.split(l.charAt(o)).join(s.charAt(o));
        return n == e ? null : n
    }

    function parseLat(e) {
        return parseCyr(e, !0)
    }

    function parseRusKeys(e, t, n) {
        if (!t) return null;
        for (var i = e, a = "qwertyuiop[]asdfghjkl;'zxcvbnm,./`QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?~", o = "йцукенгшщзхъфывапролджэячсмитьбю.ёЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,Ё", r = 0, s = a.length; s > r; r++) i = n ? i.split(a.charAt(r)).join(o.charAt(r)) : i.split(o.charAt(r)).join(a.charAt(r));
        return i == e ? null : i
    }

    function parseLatKeys(e, t) {
        return parseRusKeys(e, t, !0)
    }

    function scrollLeft() {
        var e = window,
            t = e.htmlNode,
            n = e.bodyNode;
        return t.scrollLeft || n.scrollLeft || window.scrollX || 0
    }

    function scrollTop(e, t) {
        var n = window,
            i = n.htmlNode,
            a = n.bodyNode;
        return "undefined" == typeof e ? i.scrollTop || a.scrollTop || window.scrollY || 0 : void(t ? setTimeout(function() {
            window.scrollTo(0, Math.max(0, e))
        }, t) : window.scrollTo(0, Math.max(0, e)))
    }

    function se() {
        var e = [],
            t = Array.prototype.slice.call(arguments);
        return function(n, i) {
            if (n)
                if (n.apply) e.push(n);
                else if ("__clear" === n)
                if (i) {
                    for (var a = 0, o = e.length; o > a; a++)
                        if (e[a] === i) {
                            e.splice(a, 1);
                            break
                        }
                } else e = [];
            else {
                var r = Array.prototype.slice.call(arguments);
                r.shift();
                for (var s = 0, o = e.length; o > s; s++) e[s].apply(window, getValues(t).concat(r))
            }
        }
    }

    function onBodyScrollForce(e) {
        var t = window,
            n = t.onBodyScroll,
            i = t.onDOMReady;
        e ? setTimeout(function() {
            n(!0)
        }, e) : i(function() {
            n(!0)
        })
    }

    function sgFix() {
        var e = window,
            t = e._ua,
            n = e.ajax,
            i = e.page,
            a = e.clog;
        if (/galaxy|gt\-/i.test(t)) {
            window.vkSGi = 0, window.vkAjax = n, window.vkPage = i;

            function o() {
                return ++window.vkSGi > 25 ? void delete window.vkSGi : n !== window.vkAjax || i !== window.vkPage ? (n = window.vkAjax, i = window.vkPage, a("SG fixed"), void delete window.vkSGi) : void setTimeout(o, 200)
            }
            o()
        }
    }

    function hideUnvisibleItems(e) {
        var t = window,
            n = t.cur;
        if (n.alHiddenObjects) {
            var i = getValues(n.alHiddenObjects);
            if (i) {
                e = e || {};
                var a = e.delta || 3 * getCh(),
                    o = scrollTop(),
                    r = o + getCh(),
                    s = o - a,
                    l = r + a,
                    c = [],
                    u = [],
                    d = null,
                    p = null;
                if (each(i, function(e, t) {
                        var n = gpeByClass("ali_wrap", t);
                        if (!n) return !0;
                        var i = n.offsetHeight,
                            a = getY(n),
                            o = a + i,
                            r = isVisible(t);
                        s > o || a > l ? r && c.push([n, t, i]) : r ? d || (d = n, p = a) : u.push([n, t])
                    }), each(u, function(e, t) {
                        var n = t[0],
                            i = t[1];
                        setStyle(n, "height", "auto"), show(i)
                    }), each(c, function(e, t) {
                        var n = t[0],
                            i = t[1],
                            a = t[2];
                        setStyle(n, "height", a), hide(i)
                    }), d && p) {
                    var f = getY(d);
                    f != p && scrollTop(o + (f - p))
                }
            }
        }
    }

    function initObjectsHideByScroll(e, t) {
        var n = window,
            i = n.cur,
            a = n.onBodyScroll,
            o = n.onDOMReady;
        e && (i.alHiddenObjects = e, a(function() {
            hideUnvisibleItems(t)
        }), o(function() {
            hideUnvisibleItems(t)
        }))
    }

    function checkPostsSeen() {
        var e = window,
            t = e.cur,
            n = e.pStats;
        if (t.alPostsStatsObjects) {
            var i = getValues(t.alPostsStatsObjects);
            if (i) {
                var a = scrollTop(),
                    o = a + getCh(),
                    r = [];
                each(i, function(e, t) {
                    if (attr(t, "data-ignore")) return !0;
                    var i = getY(t),
                        s = i + t.offsetHeight,
                        l = (isVisible(t), attr(t, "data-clicked")),
                        c = t.bits || 0;
                    return c >= 3 ? !0 : a > s || i > o ? !0 : (c |= i >= a && o > i || l ? 1 : 0, c |= s >= a && o > s || l ? 2 : 0, void(c && (t.bits = c, 3 == c && (r.push(n.postsGetRaws(t)), n.viewed(t)))))
                }), n.seen(r)
            }
        }
    }

    function initPostsStats(e) {
        var t = window,
            n = t.cur,
            i = t.onBodyScroll,
            a = t.onDOMReady;
        e && (n.alPostsStatsObjects = e, i(function() {
            checkPostsSeen()
        }), a(function() {
            checkPostsSeen()
        }))
    }

    function initAutoScroll(e, t, n) {
        var i = window,
            a = i.onBodyScroll;
        if (e && t) {
            n = n || {};
            var o = n.delta || !1;
            a(function(n) {
                var i = getValues(e);
                if (i) {
                    var a = getY(i),
                        r = getCh(),
                        s = a - n - r;
                    a > 0 && (o || 2 * r) > s && t.call(i)
                }
            })
        }
    }

    function autoScroll(e, t, n) {
        var i = window,
            a = i.ajax;
        n = n || {};
        var o = getValues(e),
            r = ge("show_more_loading"),
            s = n.no_cache || !1,
            l = function() {
                a.click(this, t, {
                    use_cache: !s
                })
            };
        !o && r && l.call(r), initAutoScroll(e, l, n), n.hide_objects && initObjectsHideByScroll(n.hide_objects)
    }

    function scrollToEl(e, t, n) {
        e = ge(e) || window, t = t || 0;
        var i = (e === window ? 1 : getY(e)) - t;
        scrollTop(i, n)
    }

    function scrollToHash(e) {
        var t = window,
            n = t.nav;
        if (e = e || n.hash || location.hash, "#" === e[0] && (e = e.substr(1)), e) {
            var i = geBySel("a[name]");
            i === !1 && (i = geByTag("a")), each(i, function(t, n) {
                return n.name == e ? (scrollToEl(n), !1) : void 0
            })
        }
    }

    function lockButton(e) {
        var t = ge(e);
        if (/(^|\s)(small_)?button(\s|$)/i.test(t.className)) {
            var n = ce("button", {
                id: t.id,
                className: t.className,
                innerHTML: '<span class="button_locked"><b class="button_locked_label">' + htsc(val(t)) + "</b></span>",
                onclick: function(e) {
                    return cancelEvent(e)
                },
                real_btn: t
            });
            t.fake_btn = n, before(n, t), remove(t)
        }
    }

    function unlockButton(e) {
        var t = ge(e);
        t.real_btn ? (before(t.real_btn, t), remove(t), t.real_btn.fake_btn = null, t.real_btn = null) : t.fake_btn && (before(t, t.fake_btn), remove(t.fake_btn), t.fake_btn.real_btn = null, t.fake_btn = null)
    }

    function extend() {
        var e = Array.prototype.slice.call(arguments),
            t = e.shift();
        if (!e.length) return t;
        for (var n = 0, i = e.length; i > n; n++)
            for (var a in e[n]) "layerX" != a && "layerY" != a && (t[a] = e[n][a]);
        return t
    }

    function ge(e) {
        return "string" == typeof e ? document.getElementById(e) : e
    }

    function geByClass(e, t, n) {
        if (t = ge(t) || document, n = n || "*", t.getElementsByClassName) {
            var i = t.getElementsByClassName(e);
            if ("*" == n) return Array.prototype.slice.call(i);
            var a = [];
            n = n.toUpperCase();
            for (var o = 0, r = i.length; r > o; o++) i[o].tagName.toUpperCase() == n && a.push(i[o]);
            return a
        }
        for (var i = geByTag(n, t), a = [], s = new RegExp("(^|\\s)" + escapeRE(e) + "(\\s|$)"), o = 0, r = i.length; r > o; o++) s.test(i[o].className) && a.push(i[o]);
        return a
    }

    function geByClass1(e, t, n) {
        return geByClass(e, t, n)[0]
    }

    function gpeByClass(e, t) {
        if (t = ge(t), !t) return null;
        for (; t = t.parentNode;)
            if (hasClass(e, t)) return t;
        return null
    }

    function geByTag(e, t) {
        return (ge(t) || document).getElementsByTagName(e)
    }

    function geByTag1(e, t) {
        return geByTag(e, t)[0]
    }

    function gpeByTag(e, t) {
        if (t = ge(t), !t) return null;
        for (e = e.toUpperCase(); t = t.parentNode;)
            if (t.tagName && t.tagName.toUpperCase() == e) return t;
        return null
    }

    function geBySel(e, t) {
        return t = ge(t) || document, t.querySelectorAll ? t.querySelectorAll(e) : !1
    }

    function geBySel1(e, t) {
        return t = ge(t) || document, t.querySelector ? t.querySelector(e) : !1
    }

    function append(e, t) {
        return e = ge(e), t = ge(t), e && t && t.appendChild(e) || !1
    }

    function before(e, t) {
        return t = ge(t), t && t.parentNode && t.parentNode.insertBefore(ge(e), t) || !1
    }

    function after(e, t) {
        return t = ge(t), t && t.parentNode && t.parentNode.insertBefore(ge(e), t.nextSibling) || !1
    }

    function replace(e, t) {
        before(e, t) && remove(t)
    }

    function remove(e) {
        return e = ge(e), e && e.parentNode ? e.parentNode.removeChild(e) : !1
    }

    function clone(e) {
        return e = ge(e), e ? e.cloneNode(!0) : !1
    }

    function reflow(e) {
        e = ge(e);
        try {
            {
                e.offsetWidth + e.offsetHeight
            }
        } catch (t) {}
    }

    function tag(e) {
        return e = ge(e), (e && e.tagName || "").toLowerCase()
    }

    function outer(e) {
        return e = ge(e), e ? val(ce("div").appendChild(clone(e)).parentNode) : ""
    }

    function show(e) {
        var t = ge(e);
        t && (t.style.display = t.oldstyle || (hasClass("_ib", t) ? "inline-block" : hasClass("_i", t) || "span" == tag(t) ? "inline" : "block"))
    }

    function hide(e) {
        var t = ge(e);
        t && ("none" != t.style.display && (t.oldstyle = t.style.display), t.style.display = "none")
    }

    function isVisible(e) {
        var t = ge(e);
        return t && t.style ? "none" != t.style.display : !1
    }

    function toggle(e, t) {
        "undefined" == typeof t && (t = !isVisible(e)), t && isVisible(e) || (t || isVisible(e)) && (t ? show : hide)(e)
    }

    function ce(e, t, n) {
        var i = document.createElement(e);
        return t && extend(i, t), n && setStyle(i, n), i
    }

    function elfocus(e, t, n) {
        e = ge(e);
        try {
            if (e.focus(), ("undefined" == typeof t || t === !1) && (t = e.value.length), ("undefined" == typeof n || n === !1) && (n = t), e.createTextRange) {
                var i = e.createTextRange();
                i.collapse(!0), i.moveEnd("character", t), i.moveStart("character", n), i.select()
            } else e.setSelectionRange && e.setSelectionRange(t, n)
        } catch (a) {}
    }

    function elblur(e) {
        e = ge(e), e && e.blur && e.blur()
    }

    function val(e, t) {
        if (e = ge(e), !e) return "";
        var n = e.tagName.toLowerCase(),
            i = "input" == n || "textarea" == n || "select" == n,
            a = i && ("radio" == e.type || "checkbox" == e.type);
        if ("undefined" == typeof t) return i ? a ? e.checked : e.value : e.innerHTML;
        if (i) a ? e.checked = t : e.value = t;
        else {
            e.innerHTML = t;
            var o = window,
                r = o.ajax;
            "a" != n && (r.prepare_nav(e), r.prepare_click(e), r.onPrepared(!0, e))
        }
    }

    function attr(e, t, n) {
        return (e = ge(e)) ? "undefined" == typeof n ? "data-" == t.substr(0, 5) && e.dataset ? e.dataset[t.substr(5).replace(/-([a-z0-9])/, function(e, t) {
            return t.toUpperCase()
        })] || !1 : e.getAttribute && e.getAttribute(t) || !1 : n === !1 ? e.removeAttribute && e.removeAttribute(t) || !1 : void(e.setAttribute && e.setAttribute(t, n)) : void 0
    }

    function cssToJs(e, t) {
        return t ? t + (e || "").replace(/(?:^|-)([a-z])/g, function(e, t) {
            return (t || "").toUpperCase()
        }) : (e || "").replace(/-([a-z])/g, function(e, t) {
            return (t || "").toUpperCase()
        })
    }

    function getCssPropertyName(e, t, n) {
        e = ge(e) || ce("div");
        for (var i = ["webkit", "Moz", "ms", "O", ""], a = ["-webkit-", "-moz-", "-ms-", "-o-", ""], o = 0, r = i.length; r > o; o++) {
            var s = i[o],
                l = cssToJs(t, s);
            if ("undefined" != typeof e.style[l]) return n ? a[o] + t : l
        }
        return !1
    }

    function cssValue(e, t) {
        if ("number" == typeof e) {
            var n = 1e7;
            e = Math.round(e * n) / n + (t || "")
        }
        return e
    }

    function getStyle(e, t, n) {
        if (e = ge(e), !e) return !1;
        if (isArray(t)) {
            var i = {};
            return each(t, function(t, n) {
                i[n] = getStyle(e, n)
            }), i
        }
        if (isUndefined(n) && (n = !0), /transform(-origin)?|transition(-duration)?/i.test(t) && (t = getCssPropertyName(e, t), !t)) return !1;
        var a = window,
            o = a.browser;
        if (!n && "opacity" == t && o.msie) {
            var r = e.style.filter;
            return r ? r.indexOf("opacity=") >= 0 ? parseFloat(r.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1" : ""
        }
        if (!n && e.style && (e.style[t] || "height" == t)) return e.style[t];
        var s, l = document.defaultView || window;
        if (l.getComputedStyle) {
            t = t.replace(/([A-Z])/g, "-$1").toLowerCase();
            var c = l.getComputedStyle(e, null);
            c && (s = c.getPropertyValue(t))
        } else if (e.currentStyle) {
            if ("opacity" == t && o.msie) {
                var r = e.currentStyle.filter;
                return r && r.indexOf("opacity=") >= 0 ? parseFloat(r.match(/opacity=([^)]*)/)[1]) / 100 + "" : "1"
            }
            var u = t.replace(/\-(\w)/g, function(e, t) {
                return t.toUpperCase()
            });
            s = e.currentStyle[t] || e.currentStyle[u], "auto" == s && (s = 0), s = (s + "").split(" "), each(s, function(t, n) {
                if (!/^\d+(px)?$/i.test(n) && /^\d/.test(n)) {
                    var i = e.style,
                        a = i.left,
                        o = e.runtimeStyle.left;
                    e.runtimeStyle.left = e.currentStyle.left, i.left = n || 0, s[t] = i.pixelLeft + "px", i.left = a, e.runtimeStyle.left = o
                }
            }), s = s.join(" ")
        }
        if (n && ("width" == t || "height" == t)) {
            var d = "width" == t ? getW(e) : getH(e);
            s = (intval(s) ? Math.max(floatval(s), d) : d) + "px"
        }
        return s
    }
    extend(getStyle, {
        transform: function(e) {
            var t, n = getStyle(e, "transform");
            return n ? {
                scale: (t = n.match(/(^|\s+)scale\(([0-9.]+)\)(\s+|$)/)) && t[2] || 1,
                scale3d: (t = n.match(/(^|\s+)scale3d\(([0-9.]+,\s+([0-9.]+),\s+([0-9.]+))\)(\s+|$)/)) && t[2] || 1,
                rotate: (t = n.match(/(^|\s+)rotate\(([0-9.-]+)(deg)?\)(\s+|$)/)) && +t[2] || 0,
                translate: (t = n.match(/(^|\s+)translate\(([0-9.-]+)(px)?(?:,\s+([0-9.-]+)(px)?)\)(\s+|$)/)) && [+t[2], +t[4]] || [0, 0],
                translate3d: (t = n.match(/(^|\s+)translate3d\(([0-9.-]+)(px)?(?:,\s+([0-9.-]+)(px)?)(?:,\s+([0-9.-]+)(px)?)\)(\s+|$)/)) && [+t[2], +t[4], +t[6]] || [0, 0, 0]
            } : {
                scale: 1,
                rotate: 0,
                translate: [0, 0]
            }
        }
    });

    function setStyle(e, t, n) {
        if (e = ge(e), e && e.style) {
            if (isObject(t)) return each(t, function(t, n) {
                setStyle(e, t, n)
            });
            var i = "number" == typeof n;
            i && /height|width/i.test(t) && (n = Math.abs(n)), (!/transform(-origin)?|transition(-duration)?/i.test(t) || (t = getCssPropertyName(e, t))) && (e.style[t] = i && !/z-?index|font-?weight|opacity|zoom|line-?height/i.test(t) ? n + "px" : n)
        }
    }
    extend(setStyle, {
        animate: function(e, t, n, i) {
            var a = getCssPropertyName(e, "transition");
            if (a) {
                if (!t) return e.onAnimationEnd ? e.onAnimationEnd() : setStyle.transition(e), setStyle;
                var o = isObject(n),
                    r = (o ? n.duration : n) || 200,
                    s = n.func || "ease";
                setStyle.transition(e, t, r, s);
                var l = window,
                    c = l.browser;
                e.onAnimationEnd && (c.opera ? e.removeEventListener("oTransitionEnd", e.onAnimationEnd) : removeEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd)), e.onAnimationEnd = function() {
                    return c.opera ? e.removeEventListener("oTransitionEnd", e.onAnimationEnd) : removeEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd), e.onAnimationEnd = null, setStyle.transition(e), i && i(e), !1
                }, c.opera ? e.addEventListener("oTransitionEnd", e.onAnimationEnd) : addEvent(e, "transitionend webkitTransitionEnd oTransitionEnd otransitionend msTransitionEnd", e.onAnimationEnd)
            }
            return setStyle
        },
        transform: function(e, t, n, i) {
            var a = window,
                o = a.has3d,
                r = [];
            if (isObject(t)) {
                o && (t.scale3d = t.scale, t.translate3d = t.translate);
                var s = extend(getStyle.transform(e), t);
                t = o ? s.scale3d : s.scale, i = s.rotate, n = o ? s.translate3d : s.translate
            }
            return "undefined" != typeof t && r.push(o ? "scale3d(" + cssValue(t) + ", " + cssValue(t) + ", 1)" : "scale(" + cssValue(t) + ")"), "undefined" != typeof i && r.push("rotate(" + cssValue(i, "deg") + ")"), "undefined" != typeof n && r.push(o ? "translate3d(" + cssValue(n[0], "px") + ", " + cssValue(n[1], "px") + ", 0)" : "translate(" + cssValue(n[0], "px") + ", " + cssValue(n[1], "px") + ")"), r.length ? void setStyle(e, "transform", r.join(" ")) : setStyle(e, "transform", "none")
        },
        transformOrigin: function(e, t, n) {
            isArray(t) && (n = t[1], t = t[0]), setStyle(e, "transform-origin", cssValue(t, "px") + " " + cssValue(n, "px"))
        },
        transition: function(e, t, n, i) {
            var a = [];
            return t ? (isArray(t) || (t = t.split(/\s*,\s*/)), n = cssValue(n, "ms"), each(t, function() {
                var t = getCssPropertyName(e, this, !0),
                    o = [];
                t && (o.push(t), o.push(n), i && o.push(i), a.push(o.join(" ")))
            }), void setStyle(e, "transition", a.join(","))) : setStyle(e, "transition", "none")
        }
    });

    function hasClass(e, t, n) {
        if ("string" == typeof t && "string" != typeof e) {
            var i = [t, e];
            e = i[0], t = i[1]
        }
        return (t = ge(t)) ? new RegExp("(^|\\s)" + (n ? e : escapeRE(e)) + "(\\s|$)").test(t.className) : void 0
    }

    function addClass(e, t) {
        if ("string" == typeof t && "string" != typeof e) {
            var n = [t, e];
            e = n[0], t = n[1]
        }(t = ge(t)) && !hasClass(e, t) && (t.className = (t.className ? t.className + " " : "") + e)
    }

    function removeClass(e, t, n) {
        if ("string" == typeof t && "string" != typeof e) {
            var i = [t, e];
            e = i[0], t = i[1]
        }(t = ge(t)) && hasClass(e, t, n) && (t.className = (t.className || "").replace(new RegExp("(^|\\s)" + (n ? e : escapeRE(e)) + "(\\s|$)"), function(e, t, n) {
            return t && n ? " " : ""
        }))
    }

    function toggleClass(e, t, n) {
        var i = "undefined" == typeof n ? hasClass(e, t) : !n;
        i ? removeClass(e, t) : addClass(e, t)
    }

    function replaceClass(e, t, n, i) {
        removeClass(e, n, i), addClass(t, n)
    }

    function switchClass(e, t, n) {
        hasClass(e, n) ? replaceClass(e, t, n) : replaceClass(t, e, n)
    }

    function getXY(e) {
        if (e = ge(e), !e) return [0, 0];
        var t = 0,
            n = 0;
        if (e.offsetParent)
            do t += e.offsetLeft, n += e.offsetTop; while (e = e.offsetParent);
        return [t, n]
    }

    function getX(e) {
        return getXY(e)[0]
    }

    function getY(e) {
        var t = getXY(e)[1];
        return t
    }

    function getW(e) {
        return e = ge(e), e && e.offsetWidth || 0
    }

    function getH(e) {
        return e = ge(e), e && e.offsetHeight || 0
    }

    function getCw() {
        return Math.max(window.innerWidth || 0, (window.htmlNode || {}).clientWidth || 0)
    }

    function getCh() {
        return Math.max(window.innerHeight || 0, (window.htmlNode || {}).clientHeight || 0)
    }

    function evalJs(e) {
        window.execScript ? window.execScript(e) : eval.call(window, e)
    }

    function alLoadingFix(e, t) {
        t = t || "al_loading";
        var n = ge(t);
        if (n) {
            if (!e) {
                var i = ge("m").offsetHeight || 0,
                    a = ge("mfoot").offsetHeight || 0;
                e = getCh() - i + a
            }
            n.style.height = e + "px", addClass(t, n)
        }
    }

    function getHref(e) {
        if (!e) return !1;
        var t = !1;
        return e.getAttribute && (t = e.getAttribute("data-href") || e.getAttribute("href")), t || (e.pathname ? t = e.pathname + e.search + e.hash : tag(e) || (t = e)), t || !1
    }

    function ajx2q(e) {
        var t = [],
            n = function(e) {
                try {
                    return encodeURIComponent(e)
                } catch (t) {
                    return ""
                }
            };
        for (var i in e)
            if (null != e[i] && !isFunction(e[i]))
                if (isArray(e[i]))
                    for (var a = 0, o = 0, r = e[i].length; r > a; ++a) null == e[i][a] || isFunction(e[i][a]) || (t.push(n(i) + "[" + o + "]=" + n(e[i][a])), ++o);
                else t.push(n(i) + "=" + n(e[i]));
        return t.join("&")
    }

    function indexOf(e, t, n) {
        for (var i = n || 0, a = (e || []).length; a > i; i++)
            if (e[i] == t) return i;
        return -1
    }

    function langNumeric(e, t, n) {
        var i = window,
            a = i.langConfig;
        if (!t || !a) return e;
        var o;
        if (isArray(t) ? (o = t[1], e != Math.floor(e) ? o = t[a.numRules["float"]] : each(a.numRules["int"], function(n, i) {
                if ("*" == i[0]) return o = t[i[2]], !1;
                var a = i[0] ? e % i[0] : e;
                return -1 != indexOf(i[1], a) ? (o = t[i[2]], !1) : void 0
            })) : o = t, n) {
            for (var r = e.toString().split("."), s = [], l = r[0].length - 3; l > -3; l -= 3) s.unshift(r[0].slice(l > 0 ? l : 0, l + 3));
            r[0] = s.join(a.numDel), e = r.join(a.numDec)
        }
        return o = (o || "%s").replace("%s", e)
    }

    function setNotify(e) {
        var t = intval(e),
            n = ge("header_msgs"),
            i = geByClass1("pcont", "l");
        if (n && (val(n, '<div class="hb_btn mhi_notify">' + (t > 0 ? '<em class="mh_notify_counter">' + t + "</em>" : "&nbsp;") + "</div>"), t > 0 ? removeClass("mhb_no_notify", n) : addClass("mhb_no_notify", n), i)) {
            var a = geByClass1("mmi_mail", i),
                o = geByClass1("mmi_wrap", a),
                r = geByClass1("mm_counter", o);
            if (!a) return;
            t > 0 ? r ? val(r, t) : append(ce("em", {
                className: "mm_counter",
                innerHTML: t
            }), o) : remove(r)
        }
    }

    function getNotify() {
        var e = ge("header_msgs");
        return e ? intval(val(geByTag1("em", e))) : 0
    }

    function canUploadFile() {
        return (window.XMLHttpRequest || window.XDomainRequest) && (window.FormData || window.FileReader && (window.XMLHttpRequest && XMLHttpRequest.sendAsBinary || window.ArrayBuffer && window.Uint8Array && (window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder)))
    }

    function uploadFile(e, t, n) {
        var i = window.XDomainRequest || window.XMLHttpRequest,
            a = new i;
        a.open("POST", e, !0), a.upload.addEventListener("progress", n.onProgress || rf, !1), a.onload = n.onComplete || rf, a.onerror = n.onError || rf;
        var o = n.onStart || rf;
        if (window.FormData) {
            var r = new FormData;
            for (var s in t) r.append(s, t[s]);
            return a.send(r), o(a), a
        }
        try {
            if (i && !i.prototype.sendAsBinary && window.ArrayBuffer && window.Uint8Array) {
                var l = window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder;
                l && (i.prototype.sendAsBinary = function(e) {
                    for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t, 0), i = 0; i < e.length; i++) n[i] = 255 & e.charCodeAt(i);
                    var a = new l;
                    a.append(t);
                    var o = a.getBlob();
                    this.send(o)
                })
            }
            var c = "----VkComFormBoundary-" + srand(),
                u = "",
                d = 0,
                p = function(e, t, n) {
                    n += "--" + t + "--", e.setRequestHeader("Content-type", 'multipart/form-data; boundary="' + t + '"'), e.sendAsBinary(n), o(e)
                };
            for (var s in t)
                if ("function" == typeof t[s].getAsBinary) {
                    d++;
                    var f = new FileReader,
                        h = t[s],
                        _ = h.fileName || h.name || "";
                    f.onload = function() {
                        u += "--" + c + '\r\nContent-Disposition: form-data; name="' + utf2win(s) + '"; filename="' + utf2win(_) + '"\r\nContent-Type: application/octet-stream\r\n', 0 + f.result + "\r\n", d--, d || p(a, c, u)
                    }, f.readAsBinaryString(h)
                } else u += "--" + c + '\r\nContent-Disposition: form-data; name="' + utf2win(s) + '"\r\n\r\n' + utf2win(t[s]) + "\r\n";
            return d || p(a, c, u), a
        } catch (v) {
            return !1
        }
        return !1
    }

    function readFile(e, t) {
        if (window.FileReader && window.vk.iu_ex) {
            var n = new FileReader;
            n.onload = function() {
                t && t(n.result), n = null
            }, n.readAsDataURL(e)
        }
    }

    function formatTime(e) {
        var t, n, i, a = 0 > e;
        return e = Math.round(a ? -e : e), n = e % 60, t = 10 > n ? "0" + n : n, e = Math.floor(e / 60), i = e % 60, t = i + ":" + t, e = Math.floor(e / 60), e > 0 && (10 > i && (t = "0" + t), t = e + ":" + t), a && (t = "-" + t), t
    }! function() {
        var e = !1,
            t = [],
            n = function() {
                if (!e && (e = !0, window.htmlNode = geByTag1("html"), window.bodyNode = geByTag1("body"), t)) {
                    for (var n = null; n = t.shift();) n.call(document);
                    t = null
                }
            };

        function i() {
            document.removeEventListener("DOMContentLoaded", i, !1), n()
        }

        function a() {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", a), n())
        }
        document.addEventListener ? document.addEventListener("DOMContentLoaded", i, !1) : document.attachEvent && document.attachEvent("onreadystatechange", a), window.addEventListener ? window.addEventListener("load", n, !1) : window.attachEvent ? window.attachEvent("onload", n) : window.onload = n;

        function o(n) {
            e ? n.call(document) : t.push(n)
        }
        window.onDOMReady = o
    }(), window.cdf = function(e) {
        var t = e.createDocumentFragment(),
            n = e.createElement("div"),
            i = e.createRange && e.createRange();
        return t && t.appendChild(n), i && i.selectNodeContents && i.selectNodeContents(n), t ? i && i.createContextualFragment ? function(t) {
            return t ? i.createContextualFragment(t) : e.createDocumentFragment()
        } : function(t) {
            if (!t) return e.createDocumentFragment();
            n.innerHTML = t;
            for (var i = e.createDocumentFragment(); n.firstChild;) i.appendChild(n.firstChild);
            return i
        } : function(e) {
            return ce("div", {
                innerHTML: e
            })
        }
    }(document), window.onBodyScroll = se(scrollTop), window.onBodyResize = se(), window.formatTime = formatTime, window.setDocumentDomain = setDocumentDomain, window.isUndefined = isUndefined, window.isFunction = isFunction, window.isArray = isArray, window.isObject = isObject, window.isEmpty = isEmpty, window.escapeRE = escapeRE, window.htsc = htsc, window.escapeAttr = escapeAttr, window.unescapeAttr = unescapeAttr, window.replaceEntities = replaceEntities, window.escapeStr = escapeStr, window.stripTags = stripTags, window.srand = srand, window.utf2win = utf2win, window.isHttpHref = isHttpHref, window.vkNow = vkNow, window.bind = bind, window.intval = intval, window.floatval = floatval, window.qs2obj = qs2obj, window.obj2qs = obj2qs, window.parseJSON = parseJSON, window.lsCheck = lsCheck, window.lsSet = lsSet, window.lsGet = lsGet, window.ssCheck = ssCheck, window.ssSet = ssSet, window.ssGet = ssGet, window.getValues = getValues, window.len = len, window.realSubstr = realSubstr, window.hashCode = hashCode, window.formatNum = formatNum, window.each = each, window.copy = copy, window.addEvent = addEvent, window.removeEvent = removeEvent, window.preventEvent = preventEvent, window.stopEvent = stopEvent, window.cancelEvent = cancelEvent, window.checkEvent = checkEvent, window.onCtrlEnter = onCtrlEnter, window.submitBtn = submitBtn, window.createIframe = createIframe, window.winToUtf = winToUtf, window.shortCurrency = shortCurrency, window.checkNav = checkNav, window.checkElementNav = checkElementNav, window.checkTouchHover = checkTouchHover, window.parseCyr = parseCyr, window.parseLat = parseLat, window.parseRusKeys = parseRusKeys, window.parseLatKeys = parseLatKeys, window.scrollLeft = scrollLeft, window.scrollTop = scrollTop, window.se = se, window.onBodyScrollForce = onBodyScrollForce, window.sgFix = sgFix, window.hideUnvisibleItems = hideUnvisibleItems, window.initObjectsHideByScroll = initObjectsHideByScroll, window.checkPostsSeen = checkPostsSeen, window.initPostsStats = initPostsStats, window.initAutoScroll = initAutoScroll, window.autoScroll = autoScroll, window.scrollToEl = scrollToEl, window.scrollToHash = scrollToHash, window.lockButton = lockButton, window.unlockButton = unlockButton, window.extend = extend, window.ge = ge, window.geByClass = geByClass, window.geByClass1 = geByClass1, window.gpeByClass = gpeByClass, window.geByTag = geByTag, window.geByTag1 = geByTag1, window.gpeByTag = gpeByTag, window.geBySel = geBySel, window.geBySel1 = geBySel1, window.append = append, window.before = before, window.after = after, window.replace = replace, window.remove = remove, window.clone = clone, window.reflow = reflow, window.tag = tag, window.outer = outer, window.show = show, window.hide = hide, window.isVisible = isVisible, window.toggle = toggle, window.ce = ce, window.elfocus = elfocus, window.elblur = elblur, window.val = val, window.attr = attr, window.cssToJs = cssToJs, window.getCssPropertyName = getCssPropertyName, window.cssValue = cssValue, window.getStyle = getStyle, window.setStyle = setStyle, window.hasClass = hasClass, window.addClass = addClass, window.removeClass = removeClass, window.toggleClass = toggleClass, window.replaceClass = replaceClass, window.switchClass = switchClass, window.getXY = getXY, window.getX = getX, window.getY = getY, window.getW = getW, window.getH = getH, window.getCw = getCw, window.getCh = getCh, window.evalJs = evalJs, window.alLoadingFix = alLoadingFix, window.getHref = getHref, window.ajx2q = ajx2q, window.indexOf = indexOf, window.langNumeric = langNumeric, window.setNotify = setNotify, window.getNotify = getNotify, window.canUploadFile = canUploadFile, window.uploadFile = uploadFile, window.readFile = readFile, window.registeredEvents = registeredEvents
}, function(e, t, n) {
    var i = n(1),
        a = o(i);

    function o(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var r = window,
        s = r.vkNow,
        l = r.addEvent,
        c = r.onBodyResize,
        u = r.hasClass,
        d = r.toggleClass,
        p = r.checkEvent,
        f = r.scrollTop,
        h = r.addClass,
        _ = r.val,
        v = r.removeClass,
        m = r.ge,
        g = r.getCw,
        w = r.getCh,
        y = r.setStyle,
        b = window,
        k = b.thover,
        C = window,
        S = C.nav,
        T = {
            onClose: a["default"](),
            inited: !1,
            width: !1,
            height: !1,
            onResize: null,
            _lastNav: !1,
            _opened: !1,
            _destroy: !1,
            init: function() {
                T.inited || (T.inited = !0, T.initEvents())
            },
            initEvents: function() {
                var e = function(e) {
                    T.fixHeight(s() + 2e3, e)
                };
                l(window, "orientationchange", e), c(e), e(!0)
            },
            opened: function() {
                return u("z_opened", window.bodyNode) !== T.opened && d("z_opened", window.bodyNode, T._opened), T._opened
            },
            toggle: function(e, t) {
                return p(e) ? !0 : (T.opened() ? T.close(e, t) : T.open(e, t), !1)
            },
            open: function(e) {
                return p(e) ? !0 : T.opened() ? !1 : (k.clear(), T.init(), T._st = f(), T._lastNav = !1, h("z_opened", window.bodyNode), T._opened = !0, T.fixHeight(s() + 2e3, !0), f(0), !1)
            },
            close: function(e) {
                return p(e) ? !0 : T.opened() ? (T.onClose(), k.clear(), _("z", ""), v("z_opened", window.bodyNode), T._lastNav = {
                    cur: S.cur,
                    path: S.path,
                    params: S.params,
                    hash: S.hash
                }, T._opened = !1, T._destroy && (T._destroy(), T._destroy = !1), f(T._st, 1), T._st = !1, T.onResize = null, !1) : !1
            },
            updateSize: function() {
                var e = m("z");
                e && e.offsetWidth && e.offsetHeight && (T.width = e.offsetWidth, T.height = e.offsetHeight, T.onResize && T.onResize())
            },
            fixHeight: function(e, t) {
                if ((T._opened || t) && (e && !(s() > e) || t)) {
                    var n = g(),
                        i = w();
                    (T._lastWidth != n || T._lastHeight != i || t) && (T._lastWidth = n, T._lastHeight = i, y("z", "height", i), T.updateSize(), f() || f(0)), clearTimeout(T._fixTo), T._fixTo = setTimeout(T.fixHeight, 50, e)
                }
            },
            create: function(e, t) {
                _("z", e), T._destroy = t
            }
        };
    window.zlayer = T
}, function(e) {
    var t, n = e.exports = {},
        i = [],
        a = !1,
        o = -1;

    function r() {
        a = !1, t.length ? i = t.concat(i) : o = -1, i.length && s()
    }

    function s() {
        if (!a) {
            var e = setTimeout(r);
            a = !0;
            for (var n = i.length; n;) {
                for (t = i, i = []; ++o < n;) t && t[o].run();
                o = -1, n = i.length
            }
            t = null, a = !1, clearTimeout(e)
        }
    }
    n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        i.push(new l(e, t)), 1 !== i.length || a || setTimeout(s, 0)
    };

    function l(e, t) {
        this.fun = e, this.array = t
    }
    l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {};

    function c() {}
    n.on = c, n.addListener = c, n.once = c, n.off = c, n.removeListener = c, n.removeAllListeners = c, n.emit = c, n.binding = function() {
        throw new Error("process.binding is not supported")
    }, n.cwd = function() {
        return "/"
    }, n.chdir = function() {
        throw new Error("process.chdir is not supported")
    }, n.umask = function() {
        return 0
    }
}]);
/*393*/