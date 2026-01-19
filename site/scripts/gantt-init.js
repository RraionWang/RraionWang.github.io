document.addEventListener("DOMContentLoaded", function () {
  const el1 = document.getElementById("gantt1");
   const el2 = document.getElementById("gantt2");


 const tasks1 = [
  { id: "1", name: "💡meme玩具构思", start: "2025-11-15", end: "2025-11-22", progress: 100 },
  { id: "2", name: "📟硬件设计", start: "2025-11-22", end: "2025-11-27", progress: 100 },
  { id: "3", name: "👨🏻‍💻程序开发", start: "2025-11-22", end: "2025-11-27", progress: 100 },
  { id: "4", name: "🧊结构设计", start: "2025-11-25", end: "2025-11-27", progress: 100 },
  // 👇 里程碑
  { id: "m1", name: "🐱meme玩具原型完成", start: "2025-12-7", end: "2025-12-7", progress: 100 },
  { id: "m2", name: "💴meme玩具发售", start: "2025-12-8", end: "2025-12-8", progress: 100 },
  { id: "m3", name: "🚫meme玩具停止发售", start: "2026-1-19", end: "2026-1-19", progress: 100 },
];


const gantt1 = new Gantt(el1, tasks1, {
  
  view_mode: "Month",
  language: "zh",
  popup_on: "hover",

  infinite_padding: false,    // 👈 关闭无限扩展
  scroll_to: "start",         // 👈 不滚动到 today
  extend_by_units: 0          // 👈 不向前后扩展
});






 const tasks2 = [

  { id: "1", name: "💡照相机构思", start: "2025-11-15", end: "2025-12-10", progress: 100 },
  { id: "2", name: "📟硬件设计", start: "2025-12-10", end: "2025-12-21", progress: 100 },
  { id: "3", name: "👨🏻‍💻程序开发", start: "2025-12-10", end: "2026-1-5", progress: 100 },
  { id: "4", name: "🧊结构设计", start: "2026-1-5", end: "2026-1-10", progress: 100 },
    { id: "5", name: "📟小相机v2.0硬件设计", start: "2026-1-10", end: "2026-1-29", progress: 80 },
     { id: "6", name: "👨🏻‍💻小相机v2.0程序开发", start: "2026-1-10", end: "2026-1-29", progress: 40 },
  // 👇 里程碑
  { id: "m1", name: "📸原型完成", start: "2026-1-5", end: "2026-1-5", progress: 100 },
  { id: "m2", name: "📸预售", start: "2026-1-14", end: "2026-1-14", progress: 100 },

];


const gantt2 = new Gantt(el2, tasks2, {

    
  view_mode: "Month",
  language: "zh",
  popup_on: "hover",

  infinite_padding: false,    // 👈 关闭无限扩展
  scroll_to: "start",         // 👈 不滚动到 today
  extend_by_units: 0          // 👈 不向前后扩展
  
});



  console.log("Gantt 实例：", gantt2);
});
