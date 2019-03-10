"use strict"

// register the application module
b4w.register("my_cv", function(exports, require) {

// import modules used by the app
var m_app       = require("app");
var m_data      = require("data");
var m_cam       = require("camera_anim");

/**
 * export the method to initialize the app (called at the bottom of this file)
 */
exports.init = function() {
    m_app.init({
        canvas_container_id: "banner",
        callback: init_cb,
        show_fps: false,
        console_verbose: true,
        autoresize: true,
       stereo: "ANAGLYPH"
    });
}

/**
 * callback executed when the app is initialized
 */
function init_cb(canvas_elem, success) {

    if (!success) {
        console.log("b4w init failure");
        return;
    }

    // ignore right-click on the canvas element
    canvas_elem.oncontextmenu = function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };

    load();
}

/**
 * load the scene data
 */
function load() {
    m_data.load("my_cv.json", load_cb);
}

/**
 * callback executed when the scene is loaded
 */
function load_cb(data_id) {
    m_app.enable_camera_controls();
    m_cam.auto_rotate(.05, false);
    // place your code here

}


});

// import the app module and start the app by calling the init method
b4w.require("my_cv").init();
