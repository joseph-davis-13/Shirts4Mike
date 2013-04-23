/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)": [
            ["transform", "scaleY", '1'],
            ["transform", "translateX", '3px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '21px'],
            ["transform", "scaleX", '1'],
            ["transform", "translateY", '357px'],
            ["style", "width", '28px']
         ],
         "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)": [
            ["transform", "translateX", '-1px'],
            ["transform", "translateY", '-2px']
         ],
         "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)": [
            ["transform", "translateX", '-650px'],
            ["transform", "translateY", '-6px']
         ],
         "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)": [
            ["transform", "translateX", '-158px'],
            ["transform", "translateY", '1px']
         ],
         "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > a:nth-child(1)": [
            ["transform", "translateX", '-4px'],
            ["transform", "translateY", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 995,
         autoPlay: true,
         timeline: [
            { id: "eid14", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > a:nth-child(1)", "translateY", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid42", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "translateY", '21px', { fromValue: '357px'}], position: 15, duration: 970 },
            { id: "eid41", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "height", '357px', { fromValue: '21px'}], position: 15, duration: 970 },
            { id: "eid18", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)", "translateY", '1px', { fromValue: '1px'}], position: 0, duration: 0 },
            { id: "eid43", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "width", '459px', { fromValue: '28px'}], position: 15, duration: 970 },
            { id: "eid50", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "translateX", '-3px', { fromValue: '-650px'}], position: 15, duration: 980 },
            { id: "eid31", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "scaleX", '1', { fromValue: '1'}], position: 15, duration: 0 },
            { id: "eid49", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "translateY", '-6px', { fromValue: '-6px'}], position: 15, duration: 0 },
            { id: "eid45", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "rotateZ", '360deg', { fromValue: '0deg'}], position: 5, duration: 985 },
            { id: "eid22", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)", "translateX", '58px', { fromValue: '-158px'}], position: 0, duration: 990 },
            { id: "eid13", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1) > a:nth-child(1)", "translateX", '-4px', { fromValue: '-4px'}], position: 0, duration: 0 },
            { id: "eid32", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "scaleY", '1', { fromValue: '1'}], position: 15, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-34829971");
