// document.addEventListener("DOMContentLoaded", function () {
//   const timelineLine = document.querySelector(".timeline-line");
//   const timelineImage = document.querySelector(".timeline-image");

//   // Calculate the total height based on the number of .my-container elements
//   const containerCount = document.querySelectorAll(".my-container").length;
//   const maxTimelineHeight = (containerCount - 1) * 100; // Adjust 100 based on your requirement
//   window.addEventListener("scroll", () => {
//     const scrollPercentage = (window.scrollY / maxTimelineHeight) * 33; // Adjust the speed as needed
//     const adjustedPercentage = Math.min(100, scrollPercentage);
//     timelineLine.style.height = `${adjustedPercentage}%`;
//     timelineImage.style.top = `${adjustedPercentage}%`;
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const timelineLine1 = document.querySelector(".timeline-line1");
//   const timelineImage1 = document.querySelector(".timeline-image1");

//   // Calculate the total height based on the number of .my-container elements
//   const containerCount1 = document.querySelectorAll(".my-container1").length;
//   const maxTimelineHeight1 = (containerCount1 - 1) * 100; // Adjust 100 based on your requirement
//   window.addEventListener("scroll", () => {
//     const scrollPercentage1 = (window.scrollY / maxTimelineHeight1) * 33; // Adjust the speed as needed
//     const adjustedPercentage1 = Math.min(100, scrollPercentage1);
//     timelineLine1.style.height = `${adjustedPercentage1}%`;
//     timelineImage1.style.top = `${adjustedPercentage1}%`;
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const timelineLine = document.querySelector(".timeline-line");
  const timelineImage = document.querySelector(".timeline-image");
  const timelineContainer = document.querySelector(".my-timeline");

  // Calculate the total scrollable height dynamically
  const containerHeight = document.querySelector(".my-container").offsetHeight;
  const containerCount = document.querySelectorAll(".my-container").length;
  const maxTimelineHeight = containerHeight * containerCount - timelineContainer.clientHeight;

  timelineContainer.addEventListener("scroll", () => {
    const scrollPercentage = (timelineContainer.scrollTop / maxTimelineHeight) * 100;
    const adjustedPercentage = Math.min(100, scrollPercentage);
    timelineLine.style.height = `${adjustedPercentage}%`;
    timelineImage.style.top = `${adjustedPercentage}%`;
  });
});



