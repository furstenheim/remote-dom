const HTMLElementImpl = require('./HTMLElement-impl').implementation
const utils = require('./../../utils')

class HTMLMediaElementImpl extends HTMLElementImpl {

}

// TODO NETWORK_EMPTY
// TODO NETWORK_IDLE
// TODO NETWORK_LOADING
// TODO NETWORK_NO_SOURCE
// TODO networkState
// TODO buffered
// TODO canPlayType
// TODO HAVE_NOTHING
// TODO HAVE_METADATA
// TODO HAVE_CURRENT_DATA
// TODO HAVE_FUTURE_DATA
// TODO HAVE_ENOUGH_DATA
// TODO readyState
// TODO duration
// TODO played
// TODO seekable
// TODO audioTracks
// TODO videoTracks
// TODO textTracks
// TODO addTextTrack

utils.defineRemoteProperties(HTMLMediaElementImpl.prototype, [
{"name":"src","type":"string","setter":true},
{"name":"currentSrc","type":"string"},
{"name":"crossOrigin","type":"string","setter":true},
{"name":"preload","type":"string","setter":true},
{"name":"load","type":"function"},
{"name":"seeking","type":"boolean"},
{"name":"currentTime","type":"number","setter":true},
{"name":"paused","type":"boolean"},
{"name":"defaultPlaybackRate","type":"number","setter":true},
{"name":"playbackRate","type":"number","setter":true},
{"name":"ended","type":"boolean"},
{"name":"autoplay","type":"boolean","setter":true},
{"name":"loop","type":"boolean","setter":true},
{"name":"play","type":"function"},
{"name":"pause","type":"function"},
{"name":"controls","type":"boolean","setter":true},
{"name":"volume","type":"number","setter":true},
{"name":"muted","type":"boolean","setter":true},
{"name":"defaultMuted","type":"boolean","setter":true}
])

module.exports = {
  implementation: HTMLMediaElementImpl
}