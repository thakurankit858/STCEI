let arr = [
    "C Programming",
    "Java",
    "Python",
    "HTML/CSS",
    "PHP/MySQL",
    "Others..."];

let courseList = document.querySelector(".course-list");

let index = 0;
let charIndex = 0;
let currentCourse = "";
let isDeleting = false;
function typeCourse() {
    if (index >= arr.length) {
        index = 0;
    }
    currentCourse = arr[index];
    if (!isDeleting) {
        courseList.textContent = currentCourse.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentCourse.length) {
            isDeleting = true;
            setTimeout(typeCourse, 2000);
            return;
        }
    } else {
        courseList.textContent = currentCourse.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            index++;
        }
    }
    setTimeout(typeCourse, isDeleting ? 200 : 200);
}
typeCourse();

let experienceElem = document.querySelector(".experience");
let studentElem = document.querySelector(".student");
let coursesElem = document.querySelector(".courses");
let projectElem = document.querySelector(".project");
let experienceCount = 0;
let studentCount = 0;
let coursesCount = 0;
let projectCount = 0;
function updateCounts() {
    if (experienceCount < 12) {
        experienceCount++;
        experienceElem.textContent = experienceCount;
    }
    if (studentCount < 85000) {
        studentCount += 4250;
        studentElem.textContent = studentCount;
    }
    if (coursesCount < 35) {
        coursesCount++;
        coursesElem.textContent = coursesCount;
    }
    if (projectCount < 500) {
        projectCount += 25;
        projectElem.textContent = projectCount;
    }
    if (experienceCount < 12 || studentCount < 85000 || coursesCount < 35 || projectCount < 500) {
        setTimeout(updateCounts, 20);
    }
}
updateCounts();